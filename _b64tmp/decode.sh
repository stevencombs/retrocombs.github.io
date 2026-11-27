#!/usr/bin/env bash
# Rebuild SuperBOX S8 Ultra post images from base64 staging files,
# verify sha256 hashes, then remove _b64tmp.
set -euo pipefail
mkdir -p images/posts/2026-11-27-superbox-s8-ultra

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

decode images/posts/2026-11-27-superbox-s8-ultra.jpg \
  5d5984be48131c74b23769c0672a3253c05a192cb0c52335882b29ffc0f1c745 \
  _b64tmp/2026-11-27-superbox-s8-ultra.jpg.part00.b64 \
  _b64tmp/2026-11-27-superbox-s8-ultra.jpg.part01.b64 \
  _b64tmp/2026-11-27-superbox-s8-ultra.jpg.part02.b64

decode images/posts/2026-11-27-superbox-s8-ultra/carton-specs.jpg \
  e0f62d908733e5597b1a39a1eccefcc1503cb413ca6b5564c4f5604234d3e342 \
  _b64tmp/carton-specs.jpg.part00.b64 \
  _b64tmp/carton-specs.jpg.part01.b64 \
  _b64tmp/carton-specs.jpg.part02.b64

decode images/posts/2026-11-27-superbox-s8-ultra/s8-beside-s7.jpg \
  d9097e76e545ea019468d7a6fd001a70bb06c13c8921760e70bf8bc53b907f11 \
  _b64tmp/s8-beside-s7.jpg.part00.b64 \
  _b64tmp/s8-beside-s7.jpg.part01.b64 \
  _b64tmp/s8-beside-s7.jpg.part02.b64 \
  _b64tmp/s8-beside-s7.jpg.part03.b64

decode images/posts/2026-11-27-superbox-s8-ultra/rear-ports.jpg \
  c4572d056bf8bc06fe35cc226392a0b8597c1464ee68d268696db2df9697aabb \
  _b64tmp/rear-ports.jpg.part00.b64 \
  _b64tmp/rear-ports.jpg.part01.b64 \
  _b64tmp/rear-ports.jpg.part02.b64 \
  _b64tmp/rear-ports.jpg.part03.b64

decode images/posts/2026-11-27-superbox-s8-ultra/side-ports.jpg \
  f02052179cd58f051a0f03d2d292d54754e454ae7b799a4fdd6e976806cff0c1 \
  _b64tmp/side-ports.jpg.part00.b64 \
  _b64tmp/side-ports.jpg.part01.b64 \
  _b64tmp/side-ports.jpg.part02.b64 \
  _b64tmp/side-ports.jpg.part03.b64

decode images/posts/2026-11-27-superbox-s8-ultra/backlit-remote.jpg \
  c1e74b67af2b703fc84f93c948b787a4ef4924542097997001d8c70da022e071 \
  _b64tmp/backlit-remote.jpg.part00.b64 \
  _b64tmp/backlit-remote.jpg.part01.b64 \
  _b64tmp/backlit-remote.jpg.part02.b64

decode images/posts/2026-11-27-superbox-s8-ultra/speed-test.jpg \
  ef2f9a916cea3a7662943a16383e17addf13782e8be01119d21137c372eb27e0 \
  _b64tmp/speed-test.jpg.part00.b64 \
  _b64tmp/speed-test.jpg.part01.b64

decode images/posts/2026-11-27-superbox-s8-ultra/about-screen.jpg \
  7b062b8bad684b07c9c5f475aa9ba189c887e508bc19dd6d932b1f152656fcf1 \
  _b64tmp/about-screen.jpg.part00.b64 \
  _b64tmp/about-screen.jpg.part01.b64

decode images/posts/2026-11-27-superbox-s8-ultra/device-info.jpg \
  49a74a21d32de3b813e79bc50fc6e1b3f6e0adde2cfa505532209fe503cc66fe \
  _b64tmp/device-info.jpg.part00.b64

decode images/posts/2026-11-27-superbox-s8-ultra/remote-guide.jpg \
  23c3e5047a28cc9d92359b4a77a0560db0c2383e3e41e92e9d4fcaf7e923cced \
  _b64tmp/remote-guide.jpg.part00.b64 \
  _b64tmp/remote-guide.jpg.part01.b64

decode images/posts/2026-11-27-superbox-s8-ultra/blue-tv.jpg \
  99e29a7b5209a78d04b21d3b6c6dbacd490ae4e72a6fe21300cad7ec64fca5f4 \
  _b64tmp/blue-tv.jpg.part00.b64 \
  _b64tmp/blue-tv.jpg.part01.b64 \
  _b64tmp/blue-tv.jpg.part02.b64

decode images/posts/2026-11-27-superbox-s8-ultra/blue-vod.jpg \
  d02aa0afca92bc2604f7ee1cb5cca33f024a4c111db21154b20294f8a23f5b4d \
  _b64tmp/blue-vod.jpg.part00.b64 \
  _b64tmp/blue-vod.jpg.part01.b64 \
  _b64tmp/blue-vod.jpg.part02.b64 \
  _b64tmp/blue-vod.jpg.part03.b64

git rm -r -q _b64tmp
echo "Done: all stills verified, _b64tmp removed."
