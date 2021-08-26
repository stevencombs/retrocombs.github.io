Build MEGA65 Tools on Mac OS X (Intel and M1)

Huge thank you to developer Gurce I_______ for his assitance with this instructions. Short story about the MEGA65 community before I begin. Zoom meeting, patience as we worked through the package and Mac paths.

## Intel Mac Instructions

Type and introduction here.

> The instructions below assume you have an account with GitHub.  If you do not have an account, visit <https://github.com/>. There are ways to accomplish this without GitHub, but trust me. You want to do it this way so you can contribute to the community.

1. Load the *Terminal* app (or preferably *iTerm* which I've customized with a cool retro-theme as shown in the image below).

    ![My iTerm retro theme](https://www.stevencombs.com/mega65/images/iterm-retro-theme.png)

2. Install *Homebrew: The Missing Package Manager for macOS* following the instructions at <https://brew.sh/>
3. Verify installation with the command, `brew -v`. Brew will display the current version. For example, `Homebrew 3.2.9`.
4. To clone the mega65-tools repository found at <https://github.com/MEGA65/mega65-tools>, install `git` and `gh` using the Terminal command; `brew install git gh`. The packages will install on the Mac.
5. Give `gh` access to your GitHub account using the command `gh auth login`. The prompt below will appear:

    ```
    ? What account do you want to log into?  [Use arrows to move, type to filter]
    > GitHub.com
    GitHub Enterprise Server
    ```

6. Select the default option; `GitHub.com`. `gh` will display the prompt below:
    
    ```
    ? What is your preferred protocol for Git operations?  [Use arrows to move, type to filter]
    > HTTPS
    SSH
    ```

7. Select the default option; `HTTPS`. `gh` will display the prompt below:

    ```
    ? Authenticate Git with your GitHub credentials? (Y/n)
    ```

8. Select the default option; `Y`. `gh` will display the prompt below:

    ```
    ? How would you like to authenticate GitHub CLI?  [Use arrows to move, type to filter]
    > Login with a web browser
    Paste an authentication token
    ```

9. Select the default option; `Login with a web browser`. `gh` will display the prompt below:

    ```
    ! First copy your one-time code: AAAA-0000
    - Press Enter to open github.com in your browser...
    ```

10. Copy the 8 digit code or write it down. Press ⏎ to open the browser and display the Device Activation Page as shown in the image below:

    ![GitHub device activation page](???/github-device-activation.png)
    
11. Paste or type your activation code and click the green *Continue* button. The *‌Authorize GitHub CLI* page will appear as shown in the image below:

    ![The *‌Authorize GitHub CLI* page](???/github-authorize-cli.png)
    
12. Click the green *Authorize github* button. The *Congratulations, you're all set! Your device is now connected* prompt will appear and the Terminal will display, `✓ Authentication complete. Press Enter to continue...`
13. Press ⏎ to return to the Terminal prompt. `gh` will display the prompt below and release the prompt:

    ```
    - gh config set -h github.com git_protocol https
    ✓ Configured git protocol
    ✓ Logged in as {user-name}
    mac-mini-basement:~ retrocombs$ █
    ```

14. In the *Terminal*, navigate to a directory to contain the clone of the repository. I recommend your home folder. You can quickly navigate to this location using the command `cd ~`
15. Type `gh repo clone MEGA65/mega65-tools`. The prompts below will appear as a clone of the repository is placed on your local Mac.

    ```
    Cloning into 'mega65-tools'...
    remote: Enumerating objects: 5396, done.
    remote: Counting objects: 100% (1076/1076), done.
    remote: Compressing objects: 100% (452/452), done.
    remote: Total 5396 (delta 781), reused 881 (delta 623), pack-reused 4320
    Receiving objects: 100% (5396/5396), 11.82 MiB | 9.08 MiB/s, done.
    Resolving deltas: 100% (2797/2797), done.
    ```

16. Type `ls`. You will find a new directory name `mega65-tools`.
17. Type `cd mega65-tools` to enter the directory. You can explore the contents with the `ls` command; however, you must always return to the root of the mega65-tools directory afterward. 

> **TIP:** If you want to explore the files in the repository, I recommend you use the Finder. Just be careful not to move, delete, or copy files. Keep the repository intact until you have more experience.

18. Install the libusb library using the `brew install libusb-compat` command. This library provides the Mac command line with the libraries necessary to connect to the MEGA65 via a USB connection. More on this later. DO NOT SKIP THIS STEP or some tools will not build.
19. To build `m65.osx`, type `make bin/m65.osx`. You may receive some warnings; however, you should be able to ignore them.
19. To build `mega65_ftp.osx`, type `make bin/mega65_ftp.osx`. This build will take more time than `m65.osx` and may also generate a warning that you can ignore.
20. To view your new software, type `cd bin` followed by `ls -l` and you will see a directory listing similar to the following:

    ```
    -rw-r--r--  1 stevencombs  staff      44 Aug 25 20:34 README.md
    -rwxr-xr-x  1 stevencombs  staff  174640 Aug 25 20:46 m65.osx
    drwxr-xr-x  3 stevencombs  staff      96 Aug 25 20:46 m65.osx.dSYM
    -rwxr-xr-x  1 stevencombs  staff  150260 Aug 25 20:50 mega65_ftp.osx
    drwxr-xr-x  3 stevencombs  staff      96 Aug 25 20:50 mega65_ftp.osx.dSYM
    ```
    
Two new commands, `m65.osx` and `mega65_ftp.osx` are now ready to use. We will use them from this directory for this tutorial; however, you can move and the execute them from any other folder. Let's give these new commands a try.

### Using `m65.osx` and `mega65_ftp.osx`

Serial port command: `./mega65_ftp.osx -l /dev/cu.usbserial-251633005A3B1`

```
Setting serial speed to 2000000 bps using OSX method.
Failed to set OSX terminal parameters: Invalid argument
Checking if MEGA65 has RX buffer
[T+0sec] RX buffer detected.  Latency will be reduced.
[T+0sec] RX buffer detected.  Latency will be reduced.
[T+0sec] Stopping CPU
i=0, bytes=25, strlen=11
i=13, bytes=25, strlen=11
[T+1sec] In C65 Mode.
[T+1sec] Starting CPU
Trying to switch to C64 mode...
[T+1sec] Injecting string into key buffer at $02B0 : GO64[$0d]Y[$0d]
[T+1sec] Waiting for MEGA65 KERNAL/OS to settle...
Screen is at $0400
Port $01 contains $e7
[T+1sec] In C64 Mode.
[T+1sec] Stopping CPU
Helper in memory

NOTE: Fast SD card access routine installed.
SD card is SDHC
Found FAT32 partition in partition slot 0 : start sector=$800, size=27494 MB
Found MEGA65 system partition in partition slot 1 : start sector=$35b3ffe, size=2048 MB
FAT32 file system has 27494MB formatted capacity, first cluster = 2, 54883 sectors per FAT
FATs begin at sector 0x238 and 0xd89b
MEGA65 SD-Card:/> █
```

### MEGA65 File Transfer Program Command Reference:

1. `dir` [directory|wildcardpattern] - show contents of current or specified sdcard directory. Can use a wildcard pattern on current directory.
2. `ldir` [wildcardpattern] - shows the contents of current local directory.
3. `cd` [directory] - change current sdcard working directory.
4. `lcd` [directory] - change current local working directory.
5. `put` <file> [destination name] - upload file to SD card, and optionally rename it destination file.
6. `get` <file> [destination name] - download file from SD card, and optionally rename it destination file.
7. `dput` <file> - upload .prg file wrapped into a .d81 file
8. `del` <file> - delete a file from SD card.
9. `mkdir` <dirname> - create a directory on the SD card.
10. `cd` <dirname> - change directory on the SD card. (aka. 'chdir')
11. `rename` <oldname> <newname> - rename a file on the SD card.
12. `clusters` <file> - show cluster chain of specified file.
13. `mount` <d81file> - Mount the specified .d81 file (which resides on the SD card).
14. `sector` <number|$hex number> - display the contents of the specified sector.
15. `getslot` <slot> <destination name> - download a freeze slot.
16. dirent_raw 0|1 - flag to hide/show 32-byte dump of directory entries.
17. `clustermap` <startidx> [<count>] - show cluster-map entries for specified range.
18. `cluster` <num> - dump the entire contents of this cluster.
19. `secdump` <filename> <startsec> <count> - dump the specified sector range to a file.
20. `secrestore` <filename> <startsec> - restore a dumped file back into the specified sector area.
21. `secinfo` - lists the locations of various useful sectors, for easy reference.
22. `mbrinfo` - lists the partitions specified in the MBR (sector 0)
23. `vbrinfo` - lists the VBR details of the main Mega65 partition
24. `poke` <sector> <offset> <val> - poke a value into a sector, at the desired offset.
25. `fh` - retrieve a list of files available on the filehost at files.mega65.org
26. `fhget` <num> - download a file from the filehost and upload it onto your sd-card
27. `exit` - leave this programme.
28. `quit` - leave this programme.