#!/usr/bin/env bash
# Rebuild video stills for 14 posts from base64 parts on branch video-stills-batch,
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

decode images/posts/2025-05-24-picocalc-tutorial-18650-batteries.jpg \
  7b36bec3a3896ac72792177d23cd8732c41d2b9ec7a439732019adf6764f7749 \
  _b64tmp/2025-05-24-picocalc-tutorial-18650-batteries.jpg.b64.part01

decode images/posts/2025-05-24-picocalc-tutorial-bmp-image.jpg \
  25be96904de5228d60211ad2179f1947e3163b1d7df8aa3289935de1ca6a56a1 \
  _b64tmp/2025-05-24-picocalc-tutorial-bmp-image.jpg.b64.part01

decode images/posts/2025-05-24-picocalc-tutorial-gpio-led.jpg \
  6842a37920e2a613bbc3c12853d11d55f940afcce9b73c8cb3848e13918bd6fb \
  _b64tmp/2025-05-24-picocalc-tutorial-gpio-led.jpg.b64.part01

decode images/posts/2025-05-24-picocalc-tutorial-mmbasic-calculator.jpg \
  4c68859a9b21742f48b20238c450168808e8b5df3056cb2f6ce11e46dd39a311 \
  _b64tmp/2025-05-24-picocalc-tutorial-mmbasic-calculator.jpg.b64.part01

decode images/posts/2025-05-24-picocalc-tutorial-mount-pico.jpg \
  4dbf93d93c1cb6dc4d72093fcd9b71f6f40755ca74125a0162d48b8ecd68a4ed \
  _b64tmp/2025-05-24-picocalc-tutorial-mount-pico.jpg.b64.part01 _b64tmp/2025-05-24-picocalc-tutorial-mount-pico.jpg.b64.part02

decode images/posts/2026-11-02-commodore-64c-cleanup-setup-bitbinders-1581.jpg \
  c87e5d680ae99e1a3327285d91ad0686d99092cf929acfe821134c9305398e8b \
  _b64tmp/2026-11-02-commodore-64c-cleanup-setup-bitbinders-1581.jpg.b64.part01

decode images/posts/2026-11-02-commodore-64c-cleanup-setup-heat-sinks.jpg \
  6912a6e26791976895927901ab5b848a8e2a25e774a1c3cdaebd6af4da31e015 \
  _b64tmp/2026-11-02-commodore-64c-cleanup-setup-heat-sinks.jpg.b64.part01 _b64tmp/2026-11-02-commodore-64c-cleanup-setup-heat-sinks.jpg.b64.part02

decode images/posts/2026-11-02-commodore-64c-cleanup-setup-inside.jpg \
  bd19c0370c853242fad7295ddba93a2b0e9219a8d32ffaa9c25020ee30b26b9f \
  _b64tmp/2026-11-02-commodore-64c-cleanup-setup-inside.jpg.b64.part01 _b64tmp/2026-11-02-commodore-64c-cleanup-setup-inside.jpg.b64.part02

decode images/posts/2026-11-02-commodore-64c-cleanup-setup-keyboard-brackets.jpg \
  82ed803097f8ebb188368007bef17d03ea15d30a0cbe7e1462b8e65a7a0b69b7 \
  _b64tmp/2026-11-02-commodore-64c-cleanup-setup-keyboard-brackets.jpg.b64.part01

decode images/posts/2026-11-02-commodore-64c-cleanup-setup-keycaps.jpg \
  b8b186259c7a190be5f5c648f4c95f9e3d55b85af16cf632064cf64ae92a2fb9 \
  _b64tmp/2026-11-02-commodore-64c-cleanup-setup-keycaps.jpg.b64.part01 _b64tmp/2026-11-02-commodore-64c-cleanup-setup-keycaps.jpg.b64.part02

decode images/posts/2026-11-02-commodore-64c-cleanup-setup-rf-shield.jpg \
  d964b8a8111bd1d8e4db9d1168634e60630eb35550d3667dc50a04065e6a25a3 \
  _b64tmp/2026-11-02-commodore-64c-cleanup-setup-rf-shield.jpg.b64.part01 _b64tmp/2026-11-02-commodore-64c-cleanup-setup-rf-shield.jpg.b64.part02

decode images/posts/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-c64-colors.jpg \
  b9f13a7603a59fa3a25a13ce2a5f48d72400f87290bd6b71c440381625541d6d \
  _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-c64-colors.jpg.b64.part01 _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-c64-colors.jpg.b64.part02

decode images/posts/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-dials.jpg \
  1dcca430537118531743be8a091a56ae8738ff6b1f4e436340b86fd6ac632dde \
  _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-dials.jpg.b64.part01

decode images/posts/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-joystick.jpg \
  bcf3f83e7ec0ffc5f57fd0575327a67904adcd768ada74677c00319d7a3cb1ce \
  _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-joystick.jpg.b64.part01 _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-joystick.jpg.b64.part02

decode images/posts/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-keyboard.jpg \
  0f49b7761a90e2669ca38436ce7f2beb5537aee4162ef544756800ceb242d421 \
  _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-keyboard.jpg.b64.part01

decode images/posts/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-usb-receiver.jpg \
  886576cc1d6cefaeb9875368f1534eb9cb0cbe57d593cb46714b0ed6c71152ed \
  _b64tmp/2026-11-03-8bitdo-retro-mechanical-keyboard-c64-usb-receiver.jpg.b64.part01

decode images/posts/2026-11-04-mega65-intro-disk-v4-keyboard-navigation.jpg \
  2d17df5ea0e96db3493ca9b7da2e4f812e92a8bfa7dc0bded5b33996bf34d747 \
  _b64tmp/2026-11-04-mega65-intro-disk-v4-keyboard-navigation.jpg.b64.part01

decode images/posts/2026-11-04-mega65-intro-disk-v4-megazine.jpg \
  c11ead84a630af0233adefdc6fcffd55fcb4c71f41a4a71d6608ee920ae535a4 \
  _b64tmp/2026-11-04-mega65-intro-disk-v4-megazine.jpg.b64.part01

decode images/posts/2026-11-04-mega65-intro-disk-v4-menu.jpg \
  d8c512204af36c8b9355113e36d7c24e865e94861d2d53f4e05809aa5ba4ab90 \
  _b64tmp/2026-11-04-mega65-intro-disk-v4-menu.jpg.b64.part01

decode images/posts/2026-11-04-mega65-intro-disk-v4-news-section.jpg \
  e4b970f6fb2d2cb3f7bf238ed98d4b1dc3fac47d74f9922e6b4c2c01eb69a6c0 \
  _b64tmp/2026-11-04-mega65-intro-disk-v4-news-section.jpg.b64.part01

decode images/posts/2026-11-04-mega65-intro-disk-v4-screenful-of-basic.jpg \
  0d61138b66676f96a4c68f54545de14233c1b252ea9fb009e456f6930c1d6ca3 \
  _b64tmp/2026-11-04-mega65-intro-disk-v4-screenful-of-basic.jpg.b64.part01

decode images/posts/2026-11-04-mega65-intro-disk-v4-type-in-games.jpg \
  1b9c36ee75c48b6ad048a6218a3112361b28969ff09c305d7f8d0f55443f8098 \
  _b64tmp/2026-11-04-mega65-intro-disk-v4-type-in-games.jpg.b64.part01

decode images/posts/2026-11-05-8bitdo-retro-mechanical-numpad-c64-box.jpg \
  d80acd82381ec59aa109171c1dc83a36b948121c51abd84aee3de91bd7884828 \
  _b64tmp/2026-11-05-8bitdo-retro-mechanical-numpad-c64-box.jpg.b64.part01

decode images/posts/2026-11-05-8bitdo-retro-mechanical-numpad-c64-controls.jpg \
  e51ebbb006005e717110c675cd6d9cad0d2af1874d258f3e82be6daa68f1b959 \
  _b64tmp/2026-11-05-8bitdo-retro-mechanical-numpad-c64-controls.jpg.b64.part01

decode images/posts/2026-11-05-8bitdo-retro-mechanical-numpad-c64-led-display.jpg \
  667af5c719580a1e959bb9b1e727aa338b1e817aa873e3323b43b085dceb465b \
  _b64tmp/2026-11-05-8bitdo-retro-mechanical-numpad-c64-led-display.jpg.b64.part01

decode images/posts/2026-11-05-8bitdo-retro-mechanical-numpad-c64-usb-c-port.jpg \
  ff69a2670d2458bcc86677fb1c9df48b9131274920e75b9650a71f8f4d63cfb5 \
  _b64tmp/2026-11-05-8bitdo-retro-mechanical-numpad-c64-usb-c-port.jpg.b64.part01

decode images/posts/2026-11-05-8bitdo-retro-mechanical-numpad-c64-with-keyboard.jpg \
  cfd3168ba7ade576e2cf08bd17023da0eeaf8c9d1c96995a367989807640ac9b \
  _b64tmp/2026-11-05-8bitdo-retro-mechanical-numpad-c64-with-keyboard.jpg.b64.part01

decode images/posts/2026-11-06-nabu-f18a-80-column-80-column-cpm.jpg \
  e87ba3314e54c8c4020134d6541fe04a7b65bb0453b0ed06fb295d520d2dc3ce \
  _b64tmp/2026-11-06-nabu-f18a-80-column-80-column-cpm.jpg.b64.part01

decode images/posts/2026-11-06-nabu-f18a-80-column-backplate.jpg \
  4f06fdef57ecda69dadf8754d62d8dc6d3f53fbd599684bbb12eb9bf75e252a4 \
  _b64tmp/2026-11-06-nabu-f18a-80-column-backplate.jpg.b64.part01

decode images/posts/2026-11-06-nabu-f18a-80-column-composite-vs-vga.jpg \
  6465b701b5ea4840ae7ba92e17d02b88d88c06af3f4b24635df9a5768e67cd6c \
  _b64tmp/2026-11-06-nabu-f18a-80-column-composite-vs-vga.jpg.b64.part01

decode images/posts/2026-11-06-nabu-f18a-80-column-f18a-installed.jpg \
  aa6b35ddcbbdd7a84044fb076bb85ee2c798ec40844222dc60ba9d61d3d82b60 \
  _b64tmp/2026-11-06-nabu-f18a-80-column-f18a-installed.jpg.b64.part01

decode images/posts/2026-11-06-nabu-f18a-80-column-tms-chip.jpg \
  31a156741fd8fa44212f12a6d6f1c0cae90f30e98a92e1142a51e172bf73cec2 \
  _b64tmp/2026-11-06-nabu-f18a-80-column-tms-chip.jpg.b64.part01 _b64tmp/2026-11-06-nabu-f18a-80-column-tms-chip.jpg.b64.part02

decode images/posts/2026-11-06-nabu-f18a-80-column-vga-port.jpg \
  d582a4d1f18a035daf1173d0d71d24cc9af47674a37fdbc6a1704dbb6c97f340 \
  _b64tmp/2026-11-06-nabu-f18a-80-column-vga-port.jpg.b64.part01

decode images/posts/2026-11-07-raspberry-pi-5-m2-ssd-hat-active-cooler.jpg \
  640452bc8910455c1d5a9d5ceebd580173e45ababdffd0e08a2b7a36bade8465 \
  _b64tmp/2026-11-07-raspberry-pi-5-m2-ssd-hat-active-cooler.jpg.b64.part01

decode images/posts/2026-11-07-raspberry-pi-5-m2-ssd-hat-imager.jpg \
  ba6d0c370b92986d83690db9fdade3f0af39a1bc34053a147a9f61fd04e946d4 \
  _b64tmp/2026-11-07-raspberry-pi-5-m2-ssd-hat-imager.jpg.b64.part01

decode images/posts/2026-11-07-raspberry-pi-5-m2-ssd-hat-m2-hat.jpg \
  734ac46a5c1dc125177ae20b35eb07d6d3213c831024c007ec048245116e9589 \
  _b64tmp/2026-11-07-raspberry-pi-5-m2-ssd-hat-m2-hat.jpg.b64.part01

decode images/posts/2026-11-07-raspberry-pi-5-m2-ssd-hat-pi5-board.jpg \
  241248ea99f6d8b3d3f75445e54f52f46ea4e11ecf1f2aa05acf3aefd7b0e672 \
  _b64tmp/2026-11-07-raspberry-pi-5-m2-ssd-hat-pi5-board.jpg.b64.part01

decode images/posts/2026-11-07-raspberry-pi-5-m2-ssd-hat-ribbon-cable.jpg \
  d36b2e6bb910fab6ac022313784a85719bd1b89d5656623f96453b107b0be673 \
  _b64tmp/2026-11-07-raspberry-pi-5-m2-ssd-hat-ribbon-cable.jpg.b64.part01

decode images/posts/2026-11-07-raspberry-pi-5-m2-ssd-hat-ssd.jpg \
  c22b7c7eed13eb51be779f877c5e15b106e9f502a772698de3f24e9bb3fc6c8b \
  _b64tmp/2026-11-07-raspberry-pi-5-m2-ssd-hat-ssd.jpg.b64.part01

decode images/posts/2026-11-08-roguecraft-dx-mega65-choose-your-hero.jpg \
  94b4c32a36407fbece31304ee46087ed494ea00590b9db007a79f1e379339546 \
  _b64tmp/2026-11-08-roguecraft-dx-mega65-choose-your-hero.jpg.b64.part01

decode images/posts/2026-11-08-roguecraft-dx-mega65-dungeon.jpg \
  8fa768f01a821e10408533fa82b73db0fa4e3fb73ac451486b52c57f89e5eb19 \
  _b64tmp/2026-11-08-roguecraft-dx-mega65-dungeon.jpg.b64.part01

decode images/posts/2026-11-08-roguecraft-dx-mega65-game-over.jpg \
  851925c93577d10d9682e654c24d266c4fc9ce0a2520913cd744358d302830a9 \
  _b64tmp/2026-11-08-roguecraft-dx-mega65-game-over.jpg.b64.part01

decode images/posts/2026-11-08-roguecraft-dx-mega65-loading.jpg \
  a72901f5ff11a4c6295bb274bc98afa6d448ef33f9644748d4be28c8d5881c91 \
  _b64tmp/2026-11-08-roguecraft-dx-mega65-loading.jpg.b64.part01

decode images/posts/2026-11-08-roguecraft-dx-mega65-rogue4k.jpg \
  9faed218fecf41fc755ce34670412dc243bdb1f56a24e826918ba09679b9e472 \
  _b64tmp/2026-11-08-roguecraft-dx-mega65-rogue4k.jpg.b64.part01

decode images/posts/2026-11-09-twister-os-raspberry-pi-500-card-reader.jpg \
  26a32cc4c5c39a851acb023f5263d052fefafd5345ef09a953119148baa3fb0c \
  _b64tmp/2026-11-09-twister-os-raspberry-pi-500-card-reader.jpg.b64.part01

decode images/posts/2026-11-09-twister-os-raspberry-pi-500-desktop.jpg \
  efe4fb7f101d6be476ee06ac5015a40b8c35d8f1875f09874da0fe94e489d350 \
  _b64tmp/2026-11-09-twister-os-raspberry-pi-500-desktop.jpg.b64.part01

decode images/posts/2026-11-09-twister-os-raspberry-pi-500-download-page.jpg \
  23233ed76ba25dfb841066bc36e14731e35cc8a2e671cde11ab1686009421d43 \
  _b64tmp/2026-11-09-twister-os-raspberry-pi-500-download-page.jpg.b64.part01

decode images/posts/2026-11-09-twister-os-raspberry-pi-500-imager-os-list.jpg \
  dd7957df6e01718ec5819eab55388c5ac23c62121378fea556d9add218b07e3b \
  _b64tmp/2026-11-09-twister-os-raspberry-pi-500-imager-os-list.jpg.b64.part01

decode images/posts/2026-11-09-twister-os-raspberry-pi-500-twister-xp-theme.jpg \
  168d9e05ecce321f8a71a6b205a7cb51079b6f1332331e8842038c75b1143ad3 \
  _b64tmp/2026-11-09-twister-os-raspberry-pi-500-twister-xp-theme.jpg.b64.part01

decode images/posts/2026-11-09-twister-os-raspberry-pi-500-vice.jpg \
  1c141e31dfc7284929e7322d202c552282441d267d8653f0d5c7f8c87f76f296 \
  _b64tmp/2026-11-09-twister-os-raspberry-pi-500-vice.jpg.b64.part01

decode images/posts/2026-11-10-vilros-pidock-400-sx64-cables.jpg \
  0f244701478319f37d414fd6b81811d11e5b28cc9223b787a4f28c37d88953e1 \
  _b64tmp/2026-11-10-vilros-pidock-400-sx64-cables.jpg.b64.part01

decode images/posts/2026-11-10-vilros-pidock-400-sx64-inside.jpg \
  e5ab8ecd789ad66664541fba1fa0ea2af89b40de18acb0b37c2fb46dce2a4533 \
  _b64tmp/2026-11-10-vilros-pidock-400-sx64-inside.jpg.b64.part01

decode images/posts/2026-11-10-vilros-pidock-400-sx64-midnight-commander.jpg \
  09c9501857cb4b11399403abc1b2766805d8bc507cda89d2f0692ed26ba53b55 \
  _b64tmp/2026-11-10-vilros-pidock-400-sx64-midnight-commander.jpg.b64.part01 _b64tmp/2026-11-10-vilros-pidock-400-sx64-midnight-commander.jpg.b64.part02

decode images/posts/2026-11-10-vilros-pidock-400-sx64-operation-wolf.jpg \
  3cae9bd09561b3e1b68a7216a73b572829264203d4572e9efd6c96fe5f91d830 \
  _b64tmp/2026-11-10-vilros-pidock-400-sx64-operation-wolf.jpg.b64.part01 _b64tmp/2026-11-10-vilros-pidock-400-sx64-operation-wolf.jpg.b64.part02

decode images/posts/2026-11-10-vilros-pidock-400-sx64-raspi-config.jpg \
  81f89685365bcb2d4fd051f73c311e01f45d1fc091cd7b62126c174789ad138b \
  _b64tmp/2026-11-10-vilros-pidock-400-sx64-raspi-config.jpg.b64.part01

decode images/posts/2026-11-10-vilros-pidock-400-sx64-sx64-basic.jpg \
  199823eeb43c64895f2934603895eb4fff33164d251596f20ea206b9b1c62923 \
  _b64tmp/2026-11-10-vilros-pidock-400-sx64-sx64-basic.jpg.b64.part01

decode images/posts/2026-11-11-uconsole-obs-streaming-github-images.jpg \
  64cc134e06d0059ba84e1cbd2a7a15ceb7aad3f81a79f77cbd76aeb1526023da \
  _b64tmp/2026-11-11-uconsole-obs-streaming-github-images.jpg.b64.part01

decode images/posts/2026-11-11-uconsole-obs-streaming-handheld.jpg \
  39ca67d5a0fe03a08d9ead2bdab3058461beb6cda295b679a7329f72d3e99443 \
  _b64tmp/2026-11-11-uconsole-obs-streaming-handheld.jpg.b64.part01

decode images/posts/2026-11-11-uconsole-obs-streaming-obs.jpg \
  d6fc14c9c010eb1b4ac9ccba183692747bfbe39b61957d3263c8712adf1b2a49 \
  _b64tmp/2026-11-11-uconsole-obs-streaming-obs.jpg.b64.part01

decode images/posts/2026-11-11-uconsole-obs-streaming-pi-apps.jpg \
  be4bd163eee11c34aa3c4ab892e771cc22315c45d11e7c1990a1833578b5da02 \
  _b64tmp/2026-11-11-uconsole-obs-streaming-pi-apps.jpg.b64.part01 _b64tmp/2026-11-11-uconsole-obs-streaming-pi-apps.jpg.b64.part02

decode images/posts/2026-11-11-uconsole-obs-streaming-usb-hub.jpg \
  371adfa4d83342dda86a1818c39dd02cfc64fc960c7d3b3140025c127d6aa447 \
  _b64tmp/2026-11-11-uconsole-obs-streaming-usb-hub.jpg.b64.part01 _b64tmp/2026-11-11-uconsole-obs-streaming-usb-hub.jpg.b64.part02

decode images/posts/2026-11-11-uconsole-obs-streaming-webcam.jpg \
  fb53faeb21af5f5bf15be52293da9a423164a7d13ede5e6fb9e668d84a101dae \
  _b64tmp/2026-11-11-uconsole-obs-streaming-webcam.jpg.b64.part01

decode images/posts/2026-11-12-devterm-replace-lcd-battery-module.jpg \
  90450488b5818ce16435e60f41d9ae61ae2475f01de3dfbaba62fcf94738a87a \
  _b64tmp/2026-11-12-devterm-replace-lcd-battery-module.jpg.b64.part01

decode images/posts/2026-11-12-devterm-replace-lcd-core-module.jpg \
  e660d0a2a42a2b9533309d220c5c2695a78fb4edb90a805bb675e9b5f29d0866 \
  _b64tmp/2026-11-12-devterm-replace-lcd-core-module.jpg.b64.part01 _b64tmp/2026-11-12-devterm-replace-lcd-core-module.jpg.b64.part02

decode images/posts/2026-11-12-devterm-replace-lcd-first-power-on.jpg \
  ea90eeaf34b12209a86f3892b29064f7499c87d9324eb3ded2a6047808c5cd3e \
  _b64tmp/2026-11-12-devterm-replace-lcd-first-power-on.jpg.b64.part01

decode images/posts/2026-11-12-devterm-replace-lcd-modules.jpg \
  0aec0d682f02ad6cef592f3caca792426fe51e1ea67657d5532c389bff50852c \
  _b64tmp/2026-11-12-devterm-replace-lcd-modules.jpg.b64.part01 _b64tmp/2026-11-12-devterm-replace-lcd-modules.jpg.b64.part02

decode images/posts/2026-11-12-devterm-replace-lcd-old-panel.jpg \
  06360e562af950d13c5b2fa0043b3ccc28d12918f813d041d9f03cfb21c3d63b \
  _b64tmp/2026-11-12-devterm-replace-lcd-old-panel.jpg.b64.part01

decode images/posts/2026-11-12-devterm-replace-lcd-virtualt.jpg \
  9a5ddbc15fcc9ea3dbb8ce0957b1d9e3cf3068f921ab75015f2a51d891eea902 \
  _b64tmp/2026-11-12-devterm-replace-lcd-virtualt.jpg.b64.part01

decode images/posts/2026-11-13-clockwork-devterm-a06-first-look-keyboard.jpg \
  43f47908d5b529b21c2e8986d7301146e1f5175a4572be359661f5d28dab1d75 \
  _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-keyboard.jpg.b64.part01

decode images/posts/2026-11-13-clockwork-devterm-a06-first-look-mainboard.jpg \
  3678545a403898ae310bcadefd24ba280938f5f9a74c56af35ff8616ecb1b11a \
  _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-mainboard.jpg.b64.part01 _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-mainboard.jpg.b64.part02

decode images/posts/2026-11-13-clockwork-devterm-a06-first-look-parts-tray.jpg \
  04e79e9bce2fb3f5a4dc8a81a1a666ccadb5fca0ff9a61967155c316dc0ada84 \
  _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-parts-tray.jpg.b64.part01 _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-parts-tray.jpg.b64.part02

decode images/posts/2026-11-13-clockwork-devterm-a06-first-look-power-button.jpg \
  83a154f69abcaef15e07deeaab6d378969bdf1006447652f0e3a142a5c716344 \
  _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-power-button.jpg.b64.part01

decode images/posts/2026-11-13-clockwork-devterm-a06-first-look-thermal-paper.jpg \
  de87884cb5f1487e84145192dfb5687f51e0f9d935fdffc96e38f5072bcd667e \
  _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-thermal-paper.jpg.b64.part01

decode images/posts/2026-11-13-clockwork-devterm-a06-first-look-thermal-print.jpg \
  8068765c9cbf90b72f646a9cddd5b4fa7ac7397d87dff197d704ff38cd88f5ff \
  _b64tmp/2026-11-13-clockwork-devterm-a06-first-look-thermal-print.jpg.b64.part01

decode images/posts/2026-11-14-amiga-600-first-amiga-since-1987-a600.jpg \
  dfc905bdd7cd00a3758ef646bb62ed82cec907d6928ac865308fffc7368d85c4 \
  _b64tmp/2026-11-14-amiga-600-first-amiga-since-1987-a600.jpg.b64.part01

decode images/posts/2026-11-14-amiga-600-first-amiga-since-1987-keyboard.jpg \
  8ac5c6e1f4fdfefba11aba38e12cae0e623e92c9d4c45e2c64acb62297062893 \
  _b64tmp/2026-11-14-amiga-600-first-amiga-since-1987-keyboard.jpg.b64.part01

decode images/posts/2026-11-14-amiga-600-first-amiga-since-1987-mouse.jpg \
  c5a7eaea59ced340fa0d72dd83c771a0cd46167ad6b18a7621ce39d77f035683 \
  _b64tmp/2026-11-14-amiga-600-first-amiga-since-1987-mouse.jpg.b64.part01

decode images/posts/2026-11-14-amiga-600-first-amiga-since-1987-rear-ports.jpg \
  da51d9f47f367c5e2160eab8c9f1bc3646dd4efe4930e3ad79112617639131be \
  _b64tmp/2026-11-14-amiga-600-first-amiga-since-1987-rear-ports.jpg.b64.part01

decode images/posts/2026-11-14-amiga-600-first-amiga-since-1987-side-ports.jpg \
  f83dbc91ec61847a0d3ef945d2dccb2f57a187cdd553d848dfec7bfc6c775560 \
  _b64tmp/2026-11-14-amiga-600-first-amiga-since-1987-side-ports.jpg.b64.part01

decode images/posts/2026-11-14-amiga-600-first-amiga-since-1987-tank-mouse.jpg \
  cde67637798e8f379a18b006eb0eccb92a950c105112ac1db954eda181d74e42 \
  _b64tmp/2026-11-14-amiga-600-first-amiga-since-1987-tank-mouse.jpg.b64.part01

git rm -r _b64tmp
