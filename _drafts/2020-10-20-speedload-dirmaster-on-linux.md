My instructions are for Arch based distributions (Manjaro for me) but the basics work for any Linux distro where Wine is available:

## Install Wine

"**W**ine **i**s **N**ot an **E**mulator" (Wine) is a windows compatibility layer that runs in Linux.

1. Load Terminal.
2. Update the system:

    `sudo pacman -Syu`
    
    Enter your admin password at the prompt.
    
3. Install the latest version of Wine and helpful extra packages:

    `sudo pacman -S wine winetricks wine-mono wine_gecko playonlinux`

    Choose option `1` if the message below appears:
    
    ```bash
    resolving dependencies...
    :: There are 2 providers available for netcat:
    :: Repository extra
       1) gnu-netcat
    :: Repository community
       2) openbsd-netcat

    Enter a number (default=1): 1
    ```
    
    Choose option `y` when the message below appears:
    
    ```bash
    :: Proceed with installation? [Y/n]
    ```

Wine is installed. See how easy that was?

## Download DirMaster

Before we install Wine, it is time to download the DirMaster Windows Installer file.

1. Visit the site below:

    <https://style64.org/dirmaster>
    
2. Download the latest "zipped" version of *DirMaster* which was v3.1.5 at the time of this blog post.
3. Extract the file using your preferred method.

Now it's time to install the software.

## Install DirMaster in Wine

1. Launch the *PlayOnLinux* application.
2. Choose the `Install` option in the toolbar and the *PlayOnLinux install menu* dialog will appear. With this dialog, you can search for Windows applications to install; however, *DirMaster* is not one of them. This is why we downloaded the file previously.
3. Click the `Install a non-listed program` option in the lower left-hand corner. The *PlayOnLinux Wizard* dialog box appears. Scary text appears. Ignore it all.
4. Click the `Next` button. The *Manual Installation* dialog will appears.
5. Click the `Next` button. Another *PlayOnLinux Wizard* dialog box will appear.
6. Select the `Install a program in a new virtual drive` option.
7. Click the `Next` button. A dialog box appears asking for the name of the virtual drive.
8. Type `Commodore` in the text edit box. This can be anything, but `Commodore` just seems right.

    > **TIP:** You can use this virtual drive to install other reto-related Windows applications.

9. Click the `Next` button. A dialog box appears asking for additional options. We don't need any of them.
10. Click the `Next` button. A dialog box appears asking for either a 32 or 64 bit Windows installation.
11. Select the `64 bits windows installation` option.
12. Click the `Next` button. Wine will configure the virtual drive. This can take some time so be patient. Once complete, a *Select the install file to run* dialog box will appear.
13. Click the `Browse` button.
14. Navigate to the folder that contains the `DirMasterSetup.exe` file.
15. Select the `DirMasterSetup.exe` file.
16. Click the `Open` button. A verification dialog box appears.
17. Click the `Next` button.
18. The Wine *Select Destination Location* dialog box appears. Keep the default.
19. Click the `Next` button. The *Select Start Menu Folder* dialog box will appear. Keep the default.
20. Click the `Next` button. The *Additional Shortcuts* dialog box appears.
21. Select both the `Create a desktop shortcut` and the `Install Windows Explorer Preview` options.
22. Click the `Next` button. The *Ready to Install* dialog box will appear. Keep the default.

    > Did I mention all these dialog boxes and next buttons are why I left Windows behind years ago? I'm having some serious bluescreen of death flashbacks!

23. Click the `Install` button. DirMaster will install.
24. Select the `Launch DirMaster` checkbox.
25. Select the `Finish` button. DirMaster will load.

DirMaster is now ready to use!

## Create a Shortcut

The application is installed, but it is a pain to load *PlayOnLinux* each time we want to run *DirMaster*. Let's create a desktop shortcut to make it behave more like a native Linux application.

1. If it is not open, launch the *PlayOnLinux* application.
2.

You can also add the application to your Linux windows manager (GUI). I won't cover this here because if varies. **HINT:** With the desktop launcher, you are only a right-click and properties dialog box away from all the info you need to add this item to your application menu.