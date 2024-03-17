---
title:
- Introduction To Linux
author:
- Lewis Britton
---

# Table of Contents

1. [Linux Setup](#1)
	- [Installing Manjaro](#11)

---

# 1. Linux Setup

Note that this setup is Manjaro-specific. Also, I use neoVim as my editor so when you see `nvim` preceding an operation, it's simply an open-with text editor command, like `vim` or `nano` (haha).

It's also important to remember that if in doubt regarding any basic commands or operations on a program, you can always use the program's manual (`man` 'program-name') or use the 'help' flag (`'program-name' --help` or `'program-name'` -h).

## 1.1. Installing Manjaro

* Flash download of Manjaro to external drive
* Install Manjaro from external drive
	- Most commonly F12 upon boot
	- My experience: various ThinkPads, MacBook Pro
* Run guided setup steps

## 1.2. Connect To WiFi

The network manager `nmcli` is used to find and connect to available networks.

View current status:

```
nmcli dev status
```

Check if WiFi is enabled:

```
nmcli radio wifi
```

If WiFi is disabled, enable WiFi:

```
nmcli radio wifi on
```

Otherwise, disable WiFi:

```
nmcli radio wifi off
```

Identify available networks:

```
nmcli dev wifi list
```

Connect to a network:

```
sudo nmcli dev wifi connect 'SSID'
```

Connect to a network with a password:

```
sudo nmcli dev wifi connect 'SSID' password 'password'
```

Find additional information on `nmcli` [here](https://www.makeuseof.com/connect-to-wifi-with-nmcli/).

## 1.3. Setup Workspace

* In default terminal run an install, update and repair:
	- `sudo pacman -Syu`
* In default terminal, install i3-Gaps (my preference):
	- i3 Gaps: `sudo pacman -S i3-gaps`
	- i3 Basic: `sudo pacman -S i3-wm`
	- For config: `nvim ~/.config/i3/config`
* Reboot and change kernel to i3 Gaps
* Install i3 status bar for preliminary reference:
	- `sudo pacman -S i3status`
* Download Alacritty terminal emulator (my preference)
	- `sudo pacman -S alacritty`
	- For config: `nvim ~/.config/alacritty/alacritty.yml`
* Change default shell to zsh
	- `chsh -s /bin/zsh`
	- For config: `nvim ~/.zshrc`
	- Create folder in `.config`: `mkdir ~/.config/zsh`
	- Set new path for `.zshrc`: `ln -s '~/desired-directory/.zshrc' '~/.zshrc'`;
	- Therefore: `ln -s ~/.config/zsh/.zshrc ~/.zshrc`
	- This method using `symlink` goes for creating a new path for anything which is usually accessed from the home directory
* I repeated the above process for:
	- `.bashrc` in `~/.config/bash`;
	- `.vimrc` in `~/.config/vim`
* Configure .zshrc enable syntax
	- Clone: `git clone https://github.com/zsh-users/zsh-syntax-highlighting.git`
	- Move to .cache: `mv zsh-syntax-highlighting .cache`

## 1.4. Replace i3status With Polybar

* Install:
	- `sudo pacman -Syu polybar`
	- `mkdir .config/polybar`
	- Create config in `.config`: `sudo cp /usr/share/doc/polybar/config ~/.config/polybar`
* Change Ownership: `sudo chown lewisb:lewisb .config/polybar/config`
* For config: `nvim ~/.config/polyabr/config`
* For launch script `.config/polybar/launch.sh`

...
* Launch script:
	- [Starting point](https://github.com/polybar/polybar/wiki)
	- Create launch: `nvim .config/polybar/launch.sh`
	- Allow script to run on zsh: `#!/bin/env zsh` in script
	- Allow script to run on any shell: `#!/bin/sh` in script
	- Change Script Permission to Make Executable: sudo chmod +x .config/polybar/launch.sh
	- Link in i3 Config (Available Also at Wiki): exec_always --no-startup-id $HOME/.config/polybar/launch.sh
	- '#' Original i3 Status Bar in i3 Config So Not Read 
	- Install symbol font:
		- https://zavoloklom.github.io/material-design-iconic-font/cheatsheet.html

...

* Install feh for Setting Background in i3 Config
	- <sudo pacman -S feh>
* Set Background in i3 Config
	- <exec_always feh --bg-fill ~/'dir'/'picture'.'ext'>
* Install compton for some cool styling
	- <sudo pacman -S compton>
* Install dmenu
	- <sudo pacman -S dmenu>
* Change root password
	- <sudo su>
	- <whoami>
	- <passwd>
	- Enter new password

## Enable Use of Arch User Repository

* Enable access to Arch Linux Repositories:
	- <pamac install base-devel git>
* Also see: <https://wiki.manjaro.org/index.php?title=Arch_User_Repository>

# Additional Setup \& Apps

* Configure snapd
	- <git clone https://aur.archlinux.org/snapd.git>
	- <cd snapd>
	- <makepkg -si>
* Configure sc-im
	- <git clone https://aur.archlinux.org/sc-im.git>
	- <cd sc-im>
	- <makepkg -si>
* Configure mysql
	- <git clone https://aur.archlinux.org/mysql.git>
	- <cd mysql>
	- <makepkg -si>
* Install Brave Browser
	- <cd ~/Downloads/snapd>
	- <sudo snap install brave>
* Install Spotify
	- <cd ~/Downloads/snapd>
	- <sudo snap install spotify>
* Install Discord
	- <cd ~/Downloads/snapd>
	- <sudo snap install discord>
* Install Thunderbird
	- <sudo pacman -S thunderbird>
* Install LaTeX Packages
	- <sudo pacman -S texlive-most>
	- <sudo pacman -S pdflatex>
* Install Zathura
	- Zathura: <sudo pacman -S zathura>
	- Read PDFs: <sudo pacman -S zathura-pdf-poppler>
	- Read PostScript: <sudo pacman -S zathura-ps>
	- Manually create config dir: <mkdir ~/.config/zathura>
* Install Scrot
	- <sudo pacman -Syu scrot> (as it's old and outdated)
	- Screenshot Full: <scrot>
	- Screenshot Current Window: <scrot -u>
	- Screenshot Selected Window: <scrot -s>
	- Screenshot w/ Delay: <scrot -d 'seconds'>
	- Add to i3 config
	- A window opens to open Scrot when bound to a key
		- Setting a lag doesn't work as the window stays open
		- Must move Scrot to a far-out workspace while the screenshot is taken
* Install Spotify Polybar Module
	- Link: https://github.com/PrayagS/polybar-spotify/blob/master/README.md
	- Copy and amend relevant content
	- Dependency: <sudo pacman -S playerctl>
	- Dependency: <git clone https://github.com/noctuid/zscroll>, <cd zscroll>, <sudo python3 setup.py install>
* Install ticker
	- <sudo snap install ticker>
* Install mysql
	- <sudo pacman -Syu mysql>
	- <sudo mysql_install_db --user=/mysql --basedir=/usr --datadir=/var/lib/mysql>
	- <sudo systemctl start mariadb>
	- <sudo mysql_secure_installation>
		- <Y, n, n, n, n, Y>
* Change Resolution
	- Example: <xrandr --output eDP1 --mode 2560x1600>
	- Example: <xrandr --output eDP1 --mode 1920x1200>
* Change Brightness
	- Find display: xrandr -q | grep ' connected' | head -n 1 | cut -d ' ' -f1
	- Adjust brightness: xrandr --output <display> --brightness <value>

# Command Line Basics

* System
	- super-user do: <sudo 'command'>
	- Shutdown: <sudo shutdown 'time'>
	- Restart: <sudo reboot>
	- Manual: <man 'program'>
* Pacman basics
	- Install: <sudo pacman -S 'program'> 
	- Install \& Update: <sudo pacman -Sy 'program'>
	- Install, Update \& Repair: <sudo pacman -Syu 'program'>
	- Search pacman: <sudo pacman -Ss>
	- Show installed packages: <pacman -Qe>
	- Remove package: <pacman -R 'program'>
* Opening with program
	- <'program' 'file'>
	- <'program' 'dir'/'file'>
* Directory basics
	- Make directory: <mkdir 'dir'>
	- Change directory: <cd 'dir'>
	- Show current directory: <pwd>
	- Rename directory (using <mv>): <mv 'dir' [to] 'dir'>
	- Move directory contents (using <mv>): <mv 'dir'/* [to] 'dir'>
	- Move all contents of directory 1 back one to directory 0, from dir 0: <mv 'dir'/* [to] .>
	- Remove directory: <rm -R 'dir'>
	- Remove directory (when empty): <rmdir 'dir'>
	- Back one: <cd ..>
	- List files: <ls> (flags can be stacked)
		- Inc. dot files: <ls -a>
		- Inc. `human readable' size: <ls -h>
		- List vertically: <ls -l>
	- File size (with human readable units): <du -h>
	- Move file: <mv 'dir'/'file' [to] 'dir'/'file'>
	- Copy file: <cp 'dir'/'file' [to] 'dir'/'file'>
	- Rename file (using <mv>): <mv 'file' [to] 'file'>
	- Remove file: <rm 'file'>
	- Extract (Zip/Unzip): <sudo pacman -S zip>
		- Zip folder: move files to 'folder', <zip -r 'desired_file.zip' 'folder'>
		- Unzip folder: <unzip 'file'>
	- Extract (tar): <tar -xp 'file'>
* Terminal and shell manipulation
	- Change shell: <chsh -s /usr/bin/'shell'>
	- List shells: <chsh -l>
	- List processes: <ps -ax>
	- Hide entry messages: [ctrl+l]
* Document compilation
	- pdflatex: <pdflatex 'docname'.tex>
	- pandoc: <pandoc 'docname'.md -o 'docname'.pdf>
	- pandoc with beamer: <pandoc 'docname'.md -t beamer -o 'dconame'.pdf>
* Document types
	- Plain text: .txt or .text
	- Tex/LaTeX: .tex
	- Markdown: .md
* Adding fonts
	- Location: </usr/share/fonts>
	- Create a folder
	- Move '.ttf' font file to folder
* Screen capture
	- ffmpeg record syntax: <ffmpeg -video_size 2560x1600 -framerate 25 -f x11grab -i :0.0 -f pulse -ac 2 -i default 'filename'.mkv>
	- ffmpeg record syntax (2): <ffmpeg -f x11grab -s 2560x1600 -i :0.0 -f pulse -ac 2 -i default 'filename'.mkv>
	- Play using mpv: <mpv 'filename'.mkv>
	- Play using VLC: <vlc 'filename'.mkv>
* Search file using grep
	- Example: <ls | grep word_in_file>
	- Example ("find, filter, shuffle, with sxiv"): <find ./ | grep -i federer | shuff | sxiv -ia>


# GitHub CLI


* NOTE - set editor to nvim (without going to config): `git config --global core.editor "nvim"`

* Install: <sudo pacman -Sy github-cli>
* Authenticate / Login: <gh auth login>
	- Confirm in-browser
* Logout: <gh auth logout>
* Set user email: <git config --global user.email "'email-address'">
* GitHub CLI summary: <gh>
* Basic commands
	- [1.1] List repos: <gh repo list>
	- [1.2] Create repo: <gh repo create [name]> (then clone it to local files)
		- Clone to current dir (private): <gh repo create [name] -c --private>
		- Or: <git init> when in new repo
	- [1.3] Clone: <git clone 'url' [to] 'dir'> or <gh repo clone 'repo'>
	- [2.1] Edited file status: <git status> (while in a repo)
	- [2.2] Add: <git add> (to add newly created files etc.)
	- [2.3] Remove: <gi remove> (to remove newly deleted files etc.)
	- [2.4] Commit: <git commit -a>
		- Comment, ^X to exit, "Save Buffer?" <Enter> to execute
	- [2.5] Push: <git push>
	- [3.1] Pull: <git pull>
* Remove cached large file: 
	- <git filter-branch --tree-filter 'rm -f MVCC.zip' HEAD>
	- <git rebase origin/master>

## Node.js (Yuck)

* Install: <sudo pacman -Syu nodejs npm>
* Install file validator: <npm install amphtml-validator>
* Validate file integrity: <node 'filename'.'filetype'>

## Elastic Stack: Elasticsearch

* Unload: <tar -xp -f ...>
* Navigate into respective locations
* bin/elasticsearch
* bin/kibana
* Username: elastic
* Change password: <bin/elasticsearch-reset-password -u elastic>

## Git LFS

* Download from: https://git-lfs.github.com/
* Move to where downloaded: <cd 'dir'>
* Extract: <tar -xf git-lfs-linux-amd64-v3.1.2.tar.gz>
* Initialize: <sudo ./install.sh>
* Install: <git lfs install>
* Move to repo you wish to use: <cd ~/'dir'>
* Enable tracking for chosen large filetype: <git lfs track "*.zip">
* Ensure gitattribute tracking: <git add .gitattributes>

# Current Bindings

## System

* mon+enter: new terminal
* mod+': new terminal right
* mod+/: new terminal below 
* mod+f: full-screen
* mod+Shift+f: floating display window
* mod+<h,j,k,l>: move between windows
* mod+q: close window
* mod+<number>: change workspace to workspace <number>
* mod+d: dmenu
* mod+F1: refresh i3 (use fn key too on mac)
* ctrl+c: copy to clipboard
* mouse3 or ctrl+v: paste from clipboard
* mod+b: open brave
* mod+d: open discord
* mod+s: open spotify
* mod+t: open thunderbird
* mod+r: open ranger
* mod+p/mod+Shift+p: enable/disable compton

## Vim 

* <number>+<command-key>: dow command <number> times
* h,j,k,l: navigate left, down, up, right
	- g,j: down 1 visible line
	- g,k: up 1 visible line
* w, b: forward 1 word, back 1 word
* 0, Shift+4 ($): go to start of line, go to end of line
	- g,0: go to start of visible line
	- g,Shift+4 ($): go to end of visible line
* g,q,q: operate <Return> on end of each visible line in vim line to separate
* Shift+j (J): conjoin current line with below line with a space to separate
	- v,<h,j,k,l>,g,Shift+j (J): conjoin all lines of <navigated text> without a space to separate
* g,g: go to top
* Shift+g (G): go to bottom
* i: enable insert mode
	- Shift+i: enable insert mode to start of line
* Esc: exit insert mode
* u: undo
* Ctrl+r: redo
* o: enable insert mode at start of new line below
* O: enable insert mode at start of new line above
* r: replace letter
* v+<h,j,k,l>: select <navigated text>
* v+<command>: select items dictated by <command>
* c+<command>: copy item dictated by <command>
* c+<number>+<command>: copy item <number> times dictated by <command>
	- c+c: copy line
	- c+w: copy word forward
	- c+b: copy word back
	- c+0: copy to start of line
	- c+$: copy to end of line
* p: paste
* d+<command>: delete item dictated by <command>
* x: delete letter
* d+<number>+<command>: delete item <number> times dictated by <command>
	- d+d: delete line
	- d+w: delete word forward
	- d+l: delete letter
	- d+0: delete to start of line
	- d+$: delete to end of line
* g,u+<number>+<command>: uncapitalize item <number> times dictated by <command>
* g,U+<number>+<command>: capitalize item <number> times dictated by <command>
* <number>+~: change capitalization of <number> letters
* ]s: next misspelled word
* [s: last misspelled word
* /: search
* :w: write
* :q: quit
	- :q!: force quit
	- :wq: write and quit
* Shift+z,Shift+z (ZZ): write and quit

## Brave Browser

* Ctrl+{: back page 
* Ctrl+}: forward page
* Ctrl+t: new tab
* Ctrl+w: close tab [window, upon final tab]
* Ctrl+'n': tab number 'n' in {1,...,[1]0}

# Manage notifications

Install the `dunst` notification daemon:

```
sudo pacman -S dunst
```

Test the default dunst config works using `notify-send`:

```
notify-send "<message>"
```

Copy the default config file to a new dunst config directory:

```
mkdir ~/.config/dunst
cp /etc/dunst/dunstrc .config/dunst
```

After making a change to the `dunstrc`, run:

```
killall dunst
```

Then restart dunst by feeding a new test message using `notify-send`:

```
notify-send "<message>"
```

- [Video](https://www.youtube.com/watch?v=XWlbaERuDP4)


