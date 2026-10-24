#!/usr/bin/env python3
"""Replace raw YouTube iframes in posts and pages with the youtube include.

Playlist-only embeds (videoseries, or a list= URL with no video id) stay as
responsive youtube-nocookie iframes. A following member-cta include is left
in place and the new tag sets cta="false" so the note is not repeated.

This script does not know a video's YouTube publish time, so converted tags
omit upload_date and duration. Companion posts that should emit VideoObject
JSON-LD need those params added by hand:

    {% include youtube.html id="VIDEO_ID" title="Video title"
       upload_date="2024-03-06T00:53:48Z" duration="PT40M41S" %}

upload_date must be a full ISO 8601 datetime with a timezone (Z or a numeric
offset). A bare YYYY-MM-DD is accepted by the include and rewritten to
<date>T12:00:00-05:00, which is only a fallback. duration is an ISO 8601
duration such as PT40M41S and is omitted from the JSON-LD when absent.
description is optional; the include falls back to the page description,
then the excerpt, then the title.
"""

import re
import sys
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
SKIP = {"_site", "_drafts", "_layouts", "_includes", "assets", "scripts", ".git", "vendor"}
GENERIC = {
    "video",
    "videos",
    "companion youtube video",
    "companion video",
    "table of contents",
    "support the blog and channel",
    "support",
    "links",
    "one more thing",
    "one more thing...",
}
IFRAME_RE = re.compile(r"<iframe\b[^>]*>\s*</iframe>", re.I | re.S)
ID_RE = re.compile(r"(?:embed/|youtu\.be/)([A-Za-z0-9_-]{11})")
YT_RE = re.compile(r"(?:youtube(?:-nocookie)?\.com|youtu\.be)", re.I)


def unquote(value):
    value = value.strip()
    if len(value) >= 2 and value[0] == value[-1] and value[0] in "\"'":
        value = value[1:-1]
    return value.strip()


def front_title(text):
    match = re.match(r"---\s*\n(.*?)\n---", text, re.S)
    if not match:
        return ""
    found = re.search(r"(?m)^title:\s*(.+?)\s*$", match.group(1))
    return unquote(found.group(1)) if found else ""


def clean_title(value):
    value = re.sub(r"^[_*]+|[_*]+$", "", value.strip())
    value = value.replace('"', "'").replace("\n", " ")
    value = re.sub(r"\s+", " ", value).strip()
    return value


def nearby_title(text, end, page_title, in_post):
    window = text[max(0, end - 900):end]
    titled = re.findall(r"(?m)^Title:\s*[_*]*\s*(.+?)\s*[_*]*\s*$", window)
    if titled:
        title = clean_title(titled[-1])
        if title:
            return title
    headings = re.findall(r"(?m)^#{1,6}\s+(.+?)\s*$", window)
    for heading in reversed(headings):
        label = clean_title(heading)
        if label.lower() in GENERIC:
            continue
        if len(label) < 8:
            continue
        return label
    if page_title:
        if in_post:
            return page_title
        if page_title.lower().endswith(" video"):
            return page_title
        return page_title + " video"
    return "Video"


def start_seconds(src):
    query = src.split("?", 1)[1] if "?" in src else ""
    for part in query.replace("&amp;", "&").split("&"):
        if "=" not in part:
            continue
        key, value = part.split("=", 1)
        key = key.lower()
        if key == "start" and value.isdigit():
            return value
        if key == "t":
            clock = re.fullmatch(r"(?:(\d+)h)?(?:(\d+)m)?(?:(\d+)s)?", value)
            if clock and any(clock.groups()):
                hours, minutes, seconds = (int(n or 0) for n in clock.groups())
                return str(hours * 3600 + minutes * 60 + seconds)
            if value.isdigit():
                return value
    return ""


def video_id(src):
    if "videoseries" in src.lower():
        return ""
    match = ID_RE.search(src)
    return match.group(1) if match else ""


def is_playlist(src):
    lower = src.lower()
    if "videoseries" in lower:
        return True
    if "list=" in lower and not video_id(src):
        return True
    return False


def expand(text, start, end):
    prefix = text[max(0, start - 600):start]
    div = re.search(
        r"<div\b[^>]*padding-top:\s*56\.25%[^>]*>[\s\u00a0]*(?:<p\b[^>]*>[\s\u00a0]*)?$",
        prefix,
        re.I,
    )
    para = re.search(r"<p\b[^>]*>[\s\u00a0]*$", prefix, re.I)
    if div:
        block_start = start - (len(prefix) - div.start())
        opened_div = True
        opened_p = "<p" in prefix[div.start():].lower()
    elif para:
        block_start = start - (len(prefix) - para.start())
        opened_div = False
        opened_p = True
    else:
        block_start = start
        opened_div = False
        opened_p = False
    suffix = text[end:]
    block_end = end
    if opened_p:
        close = re.match(r"[\s\u00a0]*</p>", suffix, re.I)
        if close:
            block_end += close.end()
            suffix = text[block_end:]
    if opened_div:
        close = re.match(r"[\s\u00a0]*</div>", suffix, re.I)
        if close:
            block_end += close.end()
    return block_start, block_end


def quote_title(title):
    return title.replace("\\", "").replace('"', "'")


def playlist_iframe(src, title):
    src = src.strip()
    if src.startswith("//"):
        src = "https:" + src
    elif src.startswith("www."):
        src = "https://" + src
    src = src.replace("://www.youtube.com/", "://www.youtube-nocookie.com/")
    src = src.replace("://youtube.com/", "://www.youtube-nocookie.com/")
    safe = title.replace('"', "'")
    return (
        '<div class="yt-playlist" style="position:relative;aspect-ratio:16/9;">'
        '<iframe src="{0}" title="{1}" loading="lazy" '
        'allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" '
        'allowfullscreen referrerpolicy="strict-origin-when-cross-origin" '
        'style="position:absolute;inset:0;width:100%;height:100%;border:0;"></iframe></div>'
    ).format(src, safe)


def include_tag(video, title, start, cta, channel, upload_date="", duration=""):
    """Build a youtube.html include.

    upload_date, when known, must be a full ISO 8601 datetime with a timezone,
    for example 2024-03-06T00:53:48Z. duration is an ISO 8601 duration such as
    PT40M41S. convert() leaves both blank because this script cannot look up
    YouTube publish times; add them by hand on companion posts.
    """
    parts = [
        'id="{0}"'.format(video),
        'title="{0}"'.format(quote_title(title)),
    ]
    if start:
        parts.append('start="{0}"'.format(start))
    if upload_date:
        parts.append('upload_date="{0}"'.format(upload_date))
    if duration:
        parts.append('duration="{0}"'.format(duration))
    if cta is False:
        parts.append('cta="false"')
    if channel and channel != "retrocombs":
        parts.append('channel="{0}"'.format(channel))
    return "{{% include youtube.html {0} %}}".format(" ".join(parts))


def following_cta(text, end):
    match = re.match(
        r"\s*\{%\s*include\s+member-cta\.html(?P<args>[^%]*)%\}",
        text[end:],
    )
    if not match:
        return False, ""
    channel = ""
    found = re.search(r'channel\s*=\s*"([^"]+)"', match.group("args"))
    if found:
        channel = found.group(1)
    return True, channel


def convert(text, in_post):
    page_title = front_title(text)
    stats = {"lite": 0, "playlist": 0, "skipped": []}
    pieces = []
    cursor = 0
    for match in IFRAME_RE.finditer(text):
        src_match = re.search(r'\bsrc\s*=\s*"([^"]*)"', match.group(0), re.I)
        if not src_match:
            src_match = re.search(r"\bsrc\s*=\s*'([^']*)'", match.group(0), re.I)
        if not src_match:
            continue
        src = src_match.group(1)
        if not YT_RE.search(src):
            continue
        block_start, block_end = expand(text, match.start(), match.end())
        if block_start < cursor:
            stats["skipped"].append(src[:120])
            continue
        pieces.append(text[cursor:block_start])
        title = nearby_title(text, block_start, page_title, in_post)
        if is_playlist(src):
            pieces.append(playlist_iframe(src, title))
            stats["playlist"] += 1
        else:
            video = video_id(src)
            if not video:
                stats["skipped"].append(src[:120])
                pieces.append(text[block_start:block_end])
                cursor = block_end
                continue
            has_cta, channel = following_cta(text, block_end)
            pieces.append(include_tag(video, title, start_seconds(src), False if has_cta else True, channel))
            stats["lite"] += 1
        cursor = block_end
    pieces.append(text[cursor:])
    return "".join(pieces), stats


def sources():
    for path in sorted(ROOT.rglob("*")):
        if not path.is_file():
            continue
        if path.suffix.lower() not in {".md", ".html", ".markdown"}:
            continue
        if any(part in SKIP for part in path.parts):
            continue
        yield path


def main():
    dry = "--dry-run" in sys.argv
    lite = playlist = 0
    skipped = []
    changed = []
    for path in sources():
        original = path.read_text(encoding="utf-8")
        if "<iframe" not in original.lower() or not YT_RE.search(original):
            continue
        updated, stats = convert(original, "_posts" in path.parts)
        if stats["lite"] or stats["playlist"] or stats["skipped"]:
            rel = str(path.relative_to(ROOT))
            if updated != original:
                changed.append(rel)
                if not dry:
                    path.write_text(updated, encoding="utf-8")
            lite += stats["lite"]
            playlist += stats["playlist"]
            for src in stats["skipped"]:
                skipped.append("{0}: {1}".format(rel, src))
    print("converted {0}".format(lite))
    print("playlists {0}".format(playlist))
    print("files {0}".format(len(changed)))
    print("skipped {0}".format(len(skipped)))
    for line in skipped:
        print("SKIP " + line)
    if dry:
        print("dry-run")


if __name__ == "__main__":
    main()
