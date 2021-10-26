---
title:
- Intro To Linux
author:
- Lewis Britton
---

# Manjaro Setup

* Summary of essential configs and files 
	- [1.1] This README *~/README.md*
	- [1.2] zsh: *~/.zshrc*
	- [1.3] vim/nvim: *~/.vimrc*
	- [2.1] i3: *~/.config/i3/config*
	- [3.1] alacritty: *~/.config/alacritty/alacritty.yml* 
	- [4.1] polybar: *~/.config/polybar/config*
	- [4.2] polybar (launch): *~/.config/polybar/launch.sh*

* Flash Download of Manjaro to External Drive
* Install Manjaro from External Drive (F12 Upon TP Boot)
* Install, Update \& Repair
	- <sudo pacman -Syu>
* Install i3-Gaps from Default Terminal 
	- For Config: *~/.config/i3/config*
	- <sudo pacman -S i3-gaps>
	- <sudo pacman -S i3-wm> for basic normie i3
* Reboot \& Change Kernel
* Install i3 Status (For Preliminary Reference)
	- <sudo pacman -S i3status>
* Download Alacritty Terminal Emulator
	- For Config: *~/.config/alacritty/alacritty.yml*
	- <sudo pacman -S alacritty>
* Change Shell to zsh
	- <chsh -s /bin/zsh>
* Configure .zshrc \& Enable Syntax
	- <git clone https://github.com/zsh-users/zsh-syntax-highlighting.git>
	- <mv zsh-syntax-highlighting .cache>
* Install Polybar
	- For Config: *~/.config/polyabr/config*
	- For Launch Script *.config/polybar/launch.sh*
	- <sudo pacman -Syu polybar>
	- <mkdir .config/polybar>
	- <sudo cp /usr/share/doc/polybar/config ~/.config/polybar>
	- Change Ownership: <sudo chown lewisb:lewisb .config/polybar/config>
	- Copy Launch Script: https://github.com/polybar/polybar/wiki
	- Make Launch: <nvim .config/polybar/launch.sh>
		- '#!/bin/env zsh' for the script just to run on zsh
		- '#!/bin/sh' for the script to sun on any shell
	- Paste \& edit Launch Script
	- Change Script Permission to Make Executable: sudo chmod +x .config/polybar/launch.sh
	- Link in i3 Config (Available Also at Wiki): exec_always --no-startup-id $HOME/.config/polybar/launch.sh
	- '#' Original i3 Status Bar in i3 Config So Not Read 
* Install feh for Setting Background in i3 Config
	- <sudo pacman -S feh>
* Set Background in i3 Config
	- <exec_always feh --bg-fill ~/'dir'/'picture'.'ext'>
* Install compton for some cool styling
	- <sudo pacman -S compton>
* Install dmenu
	- <sudo pacman -S dmenu>

# Additional Setup \& Apps

* Configure snapd
	- <cd ~/Downloads>
	- <git clone https://aur.archlinux.org/snapd.git>
	- <makepkg -si>
* Install Brave Browser
	- <cd ~/Downloads/snapd>
	- <sudo snap install brave>
* Install Spotify
	- <cd ~/Downloads/snapd>
	- <sudo snap instal spotify>
* Install Discord
	- <cd ~/Downloads/snapd>
	- <sudo snap instal discord>
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
	- Zip/Unzip: <sudo pacman -S zip>
		- Zip folder: move files to 'folder', <zip -r 'desired_file.zip' 'folder'>
		- Unzip folder: <unzip 'file'>
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

# GitHub CLI

* Install: <sudo pacman -Sy github-cli>
* Authenticate / Login: <gh auth login>
* Set user email: <git config --global user.email "'email-address'">
* GitHub CLI summary: <gh>
* Basic commands
	- [1.1] List repos: <gh repo list>
	- [1.2] Create repo: <gh repo create [name]> (then clone it to local files)
		- Or: <git init> when in new repo
	- [1.3] Clone: <git clone 'url' [to] 'dir'> or <gh repo clone 'repo'>
	- [2.1] Edited file status: <git status> (while in a repo)
	- [2.2] Add: <git add> (to add newly created files etc.)
	- [2.3] Remove: <gi remove> (to remove newly deleted files etc.)
	- [2.4] Commit: <git commit -a>
		- Comment, ^X to exit, "Save Buffer?" <Enter> to execute
	- [2.5] Push: <git push>
	- [3.1] Pull: <git pull>

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
* o: enable insert mode at start of new line
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
