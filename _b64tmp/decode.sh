#!/usr/bin/env bash
# Rebuild added SuperBOX S8 Ultra stills from base64 staging files,
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

decode images/posts/2026-11-27-superbox-s8-ultra/time-shift.jpg \
  d880cb4e41157be6ca880ec181efeafd0bb650bbb78a94dc5e91d9f3092295b3 \
  _b64tmp/time-shift.jpg.part00.b64 \
  _b64tmp/time-shift.jpg.part01.b64 \
  _b64tmp/time-shift.jpg.part02.b64 \
  _b64tmp/time-shift.jpg.part03.b64 \
  _b64tmp/time-shift.jpg.part04.b64 \
  _b64tmp/time-shift.jpg.part05.b64

decode images/posts/2026-11-27-superbox-s8-ultra/internet-speed.jpg \
  fa093243086504bbf4c4d78ec1b7fd3b2622c5b35610c631c456cddc290a5e62 \
  _b64tmp/internet-speed.jpg.part00.b64 \
  _b64tmp/internet-speed.jpg.part01.b64 \
  _b64tmp/internet-speed.jpg.part02.b64 \
  _b64tmp/internet-speed.jpg.part03.b64

decode images/posts/2026-11-27-superbox-s8-ultra/rc-200l-menu.jpg \
  d6e25aced2c226285f5ff5192bcc41248fa171d1bcd4ffc14f33c53d8aa975a1 \
  _b64tmp/rc-200l-menu.jpg.part00.b64 \
  _b64tmp/rc-200l-menu.jpg.part01.b64 \
  _b64tmp/rc-200l-menu.jpg.part02.b64 \
  _b64tmp/rc-200l-menu.jpg.part03.b64

decode images/posts/2026-11-27-superbox-s8-ultra/multi-screen.jpg \
  704849c3883975e4eac630edd49081a4936a4cba09bdc0aab4ed88b2d70ac947 \
  _b64tmp/multi-screen.jpg.part00.b64 \
  _b64tmp/multi-screen.jpg.part01.b64 \
  _b64tmp/multi-screen.jpg.part02.b64 \
  _b64tmp/multi-screen.jpg.part03.b64 \
  _b64tmp/multi-screen.jpg.part04.b64

decode images/posts/2026-11-27-superbox-s8-ultra/desk-live.jpg \
  aa87b30a425f29b536a5c675582800b41ba48279a23af0e95fa85ca0ebebac4e \
  _b64tmp/desk-live.jpg.part00.b64 \
  _b64tmp/desk-live.jpg.part01.b64 \
  _b64tmp/desk-live.jpg.part02.b64 \
  _b64tmp/desk-live.jpg.part03.b64 \
  _b64tmp/desk-live.jpg.part04.b64

decode images/posts/2026-11-27-superbox-s8-ultra/blue-tv-settings.jpg \
  05d1004d1745e0e003357611765642f0255c55b8e524d739d0305c80dbd076c9 \
  _b64tmp/blue-tv-settings.jpg.part00.b64 \
  _b64tmp/blue-tv-settings.jpg.part01.b64 \
  _b64tmp/blue-tv-settings.jpg.part02.b64 \
  _b64tmp/blue-tv-settings.jpg.part03.b64

git rm -r -q _b64tmp
echo "Done: all stills verified, _b64tmp removed."
