## References

Xemu Homepage: https://github.lgb.hu/xemu/
Main Page: https://github.com/lgblgblgb/xemu
Wiki: https://github.com/lgblgblgb/xemu/wiki
Prebuilt Binaries: https://github.lgb.hu/xemu/
Build from Source: https://github.com/lgblgblgb/xemu#quick-start-from-source

## Activate Linux Beta on Chrome OS

## Load the Terminal

## Install Compilation Essentials

```bash
sudo apt update
sudo apt install git build-essential libsdl2-dev libgtk-3-dev libreadline-dev
```

## Clone the respository

```bash
git clone https://github.com/lgblgblgb/xemu.git
cd xemu
make deb
cd build/bin
sudo dpkg -i xemu_current_amd64.deb
sudo xemu-download-data
```

Suggested Git by LGB on Discord: `git clone --branch=next https://github.com/lgblgblgb/xemu.git`

Use low density

## Download and Prepare SD Card Files

Dev Kit ROM: https://files.mega65.org?id=54e69439-f25e-4124-8c78-22ea7ddc0f1c
Open ROM: https://files.mega65.org?id=8aec2fba-3b0a-4677-80ae-7a7f5f4f0cb8
SD Card Files: https://files.mega65.org?id=0fb941fe-5c5f-4608-b0f1-32849d4a8dff

Rename `.bin` to `MEGA65.ROM`

Hold CONTROL for Hypervisor Menu (config and sd card utility)

Exit = F9
Reset = F10
R-Shift+L-Shift = Release mouse control