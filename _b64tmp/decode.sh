#!/usr/bin/env bash
# Rebuild video stills for the COBI M60 Patton post from base64 parts on branch cobi-m60-video-stills,
# verify sha256 hashes, then remove _b64tmp.
set -euo pipefail

mkdir -p images/posts

decode() {
  local dest="$1"
  local expected="$2"
  shift 2
  cat "$@" | base64 -d > "$dest"
  local got
  got="$(sha256sum "$dest" | awk '{print $1}')"
  if [ "$got" != "$expected" ]; then
    echo "HASH MISMATCH $dest" >&2
    echo "  expected $expected" >&2
    echo "  got      $got" >&2
    exit 1
  fi
  echo "OK $dest $got"
}

decode images/posts/2021-01-21-cobi-m60-patton-bags.jpg \
  1f021e08d2e15cc2fbbb9020602f25b97fe2a642e0f3b65b45829ee43c18102a \
  _b64tmp/2021-01-21-cobi-m60-patton-bags.part00.b64 \
  _b64tmp/2021-01-21-cobi-m60-patton-bags.part01.b64

decode images/posts/2021-01-21-cobi-m60-patton-box-back.jpg \
  a40590628b84412ece6bc9cfa0e33bd6d391b1be6441f12e780e6047abd48eb4 \
  _b64tmp/2021-01-21-cobi-m60-patton-box-back.part00.b64 \
  _b64tmp/2021-01-21-cobi-m60-patton-box-back.part01.b64

decode images/posts/2021-01-21-cobi-m60-patton-finished-model.jpg \
  746178015452b41522b2905aeb4ce3eb8e46b1756da6dd27fb63d73ced23b993 \
  _b64tmp/2021-01-21-cobi-m60-patton-finished-model.part00.b64

decode images/posts/2021-01-21-cobi-m60-patton-instructions.jpg \
  e843c3dcd30ba28e817e8f57375c9510cedc061cbe8c5e17613d9238ac10c324 \
  _b64tmp/2021-01-21-cobi-m60-patton-instructions.part00.b64

decode images/posts/2021-01-21-cobi-m60-patton-minifigures.jpg \
  f06b44d90a89f29471f05f0e36c06788999e903cb45b447c740453b32edc9b5b \
  _b64tmp/2021-01-21-cobi-m60-patton-minifigures.part00.b64

decode images/posts/2021-01-21-cobi-m60-patton-tracks.jpg \
  93c5a314a52a743e148a7d305077168464fb4994ba7236c48a716c1c31870b03 \
  _b64tmp/2021-01-21-cobi-m60-patton-tracks.part00.b64

git rm -r -q _b64tmp
echo "Done: all stills verified, _b64tmp removed."
