#!/usr/bin/env python3
"""Refresh the homepage video lists in _data/channels.yml.

Tries each channel's public YouTube RSS feed first:

    https://www.youtube.com/feeds/videos.xml?channel_id=CHANNEL_ID

Entries whose link contains /shorts/ are skipped. When that endpoint does not
return an Atom feed, the script reads the public /videos tab instead and
still skips anything linked as a Short. Only _data/channels.yml is written,
and only when the video list actually changed.
"""

import json
import re
import sys
import urllib.request
from datetime import datetime
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[2]
DATA = ROOT / "_data" / "channels.yml"
LATEST = 4
UA = (
    "Mozilla/5.0 (Windows NT 10.0; Win64; x64) "
    "AppleWebKit/537.36 (KHTML, like Gecko) Chrome/129.0.0.0 Safari/537.36"
)
ATOM = "http://www.w3.org/2005/Atom"
YT = "http://www.youtube.com/xml/schemas/2015"

HEADER = (
    "# Homepage latest videos. .github/scripts/latest-videos.py refreshes\n"
    "# each channel's videos from its public YouTube RSS feed.\n"
)


def fetch(url):
    req = urllib.request.Request(url, headers={"User-Agent": UA})
    with urllib.request.urlopen(req, timeout=45) as resp:
        return resp.status, resp.read()


def unquote(value):
    value = value.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
        inner = value[1:-1]
        if value[0] == '"':
            inner = inner.replace('\\"', '"').replace("\\\\", "\\")
        return inner
    return value


def quote(value):
    text = str(value).replace("\\", "\\\\").replace('"', '\\"')
    return '"' + text + '"'


def parse_channels(text):
    channels = []
    current = None
    in_videos = False
    for line in text.splitlines():
        if line.startswith("- name:"):
            if current:
                channels.append(current)
            current = {"name": unquote(line.split(":", 1)[1])}
            in_videos = False
            continue
        if current is None or in_videos:
            if current is not None and line.startswith("  videos:"):
                in_videos = True
            continue
        if line.startswith("  videos:"):
            in_videos = True
            continue
        if line.startswith("  ") and ":" in line and not line.startswith("  -"):
            key, val = line.strip().split(":", 1)
            current[key] = unquote(val)
    if current:
        channels.append(current)
    return channels


def thumbnail(video_id):
    for name, width, height in (("maxresdefault", 1280, 720), ("hqdefault", 480, 360)):
        url = "https://i.ytimg.com/vi/{0}/{1}.jpg".format(video_id, name)
        try:
            status, data = fetch(url)
        except Exception:
            continue
        if status == 200 and len(data) > 8000:
            return url, width, height
    raise RuntimeError("no thumbnail for " + video_id)


def published_from_watch(video_id):
    _status, body = fetch("https://www.youtube.com/watch?v=" + video_id)
    text = body.decode("utf-8", "replace")
    match = re.search(r'"publishDate":\{"simpleText":"([A-Za-z]{3} \d{1,2}, \d{4})"', text)
    if match:
        return datetime.strptime(match.group(1), "%b %d, %Y").date().isoformat()
    match = re.search(r'"publishDate":"(\d{4}-\d{2}-\d{2})"', text)
    if match:
        return match.group(1)
    raise RuntimeError("no publish date for " + video_id)


def from_rss(channel_id):
    url = "https://www.youtube.com/feeds/videos.xml?channel_id=" + channel_id
    try:
        status, body = fetch(url)
    except Exception as exc:
        print("RSS unavailable for {0}: {1}".format(channel_id, exc), file=sys.stderr)
        return None
    text = body.decode("utf-8", "replace").lstrip()
    if status != 200 or not text.startswith("<?xml") and "<feed" not in text[:800]:
        print("RSS for {0} was not an Atom feed (HTTP {1}).".format(channel_id, status), file=sys.stderr)
        return None
    root = ET.fromstring(body)
    videos = []
    for entry in root.findall("{%s}entry" % ATOM):
        links = [el.get("href") or "" for el in entry.findall("{%s}link" % ATOM)]
        if any("/shorts/" in href for href in links):
            continue
        video_id = entry.findtext("{%s}videoId" % YT) or ""
        if not video_id:
            for href in links:
                match = re.search(r"[?&]v=([A-Za-z0-9_-]{11})", href)
                if match:
                    video_id = match.group(1)
                    break
        if not video_id:
            continue
        title = (entry.findtext("{%s}title" % ATOM) or "").strip()
        published = (entry.findtext("{%s}published" % ATOM) or "")[:10]
        watch = "https://www.youtube.com/watch?v=" + video_id
        for href in links:
            if "watch?v=" in href and "/shorts/" not in href:
                watch = href.split("&")[0]
                break
        thumb, width, height = thumbnail(video_id)
        videos.append({
            "id": video_id,
            "title": title,
            "url": watch,
            "published": published,
            "thumbnail": thumb,
            "width": width,
            "height": height,
        })
        if len(videos) >= LATEST:
            break
    return videos


def from_channel_page(channel):
    page = channel["url"].rstrip("/") + "/videos"
    print("Using the public videos tab for {0}: {1}".format(channel["name"], page), file=sys.stderr)
    _status, body = fetch(page)
    html = body.decode("utf-8", "replace")
    match = re.search(r"ytInitialData\s*=\s*(\{.*?\})\s*;\s*</script>", html, re.S)
    if not match:
        raise RuntimeError("no ytInitialData on " + page)
    data = json.loads(match.group(1))
    items = []

    def walk(node):
        if isinstance(node, dict):
            renderer = node.get("richItemRenderer")
            if isinstance(renderer, dict):
                items.append(renderer)
            for value in node.values():
                walk(value)
        elif isinstance(node, list):
            for value in node:
                walk(value)

    walk(data)
    videos = []
    seen = set()
    for item in items:
        lock = item.get("content", {}).get("lockupViewModel")
        if not lock:
            continue
        blob = json.dumps(lock)
        if "/shorts/" in blob:
            continue
        ids = re.findall(r"/watch\?v=([A-Za-z0-9_-]{11})", blob)
        if not ids or ids[0] in seen:
            continue
        video_id = ids[0]
        seen.add(video_id)
        try:
            title = lock["metadata"]["lockupMetadataViewModel"]["title"]["content"].strip()
        except (KeyError, TypeError, AttributeError):
            continue
        if not title:
            continue
        thumb, width, height = thumbnail(video_id)
        videos.append({
            "id": video_id,
            "title": title,
            "url": "https://www.youtube.com/watch?v=" + video_id,
            "published": published_from_watch(video_id),
            "thumbnail": thumb,
            "width": width,
            "height": height,
        })
        if len(videos) >= LATEST:
            break
    if len(videos) < LATEST:
        raise RuntimeError("only found {0} videos for {1}".format(len(videos), channel["name"]))
    return videos


def videos_for(channel):
    channel_id = channel.get("channel_id")
    if not channel_id:
        raise RuntimeError("missing channel_id for " + channel.get("name", "?"))
    found = from_rss(channel_id)
    if found:
        return found
    return from_channel_page(channel)


def render(channels):
    lines = [HEADER]
    for channel in channels:
        lines.append("- name: {0}".format(quote(channel["name"])))
        lines.append("  style: {0}".format(channel["style"]))
        lines.append("  tag: {0}".format(quote(channel["tag"])))
        lines.append("  url: {0}".format(channel["url"]))
        lines.append("  channel_id: {0}".format(channel["channel_id"]))
        lines.append("  videos:")
        for video in channel["videos"]:
            lines.append("    - id: {0}".format(video["id"]))
            lines.append("      title: {0}".format(quote(video["title"])))
            lines.append("      url: {0}".format(video["url"]))
            lines.append("      published: {0}".format(quote(video["published"])))
            lines.append("      thumbnail: {0}".format(video["thumbnail"]))
            lines.append("      width: {0}".format(video["width"]))
            lines.append("      height: {0}".format(video["height"]))
    return "\n".join(lines) + "\n"


def main():
    current = DATA.read_text(encoding="utf-8")
    channels = parse_channels(current)
    if not channels:
        raise SystemExit("no channels in " + str(DATA))
    for channel in channels:
        channel["videos"] = videos_for(channel)
        print("{0}: {1}".format(channel["name"], ", ".join(v["id"] for v in channel["videos"])))
    updated = render(channels)
    if updated == current:
        print("No video changes.")
        return
    DATA.write_text(updated, encoding="utf-8")
    print("Updated " + str(DATA.relative_to(ROOT)))


if __name__ == "__main__":
    main()
