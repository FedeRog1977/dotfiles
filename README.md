---
title:
- Intro To Linux
author:
- Lewis Britton
---

# Manjaro Setup

* Summary of essential configs and files 
	- [1] This README *~/README226.md*
	- [2.1] i3: *~/.config/i3/config*
	- [3.1] alacritty: *~/.config/alacritty/alacritty.yml* 
	- [4.1] polybar: *~/.config/polybar/config*
	- [4.1] polybar (launch): *~/.config/polybar/launch.sh*

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
	- <chsh -s zsh>
* Configure .zshrc \& Enable Syntax
	- <git clone https://github.com/zsh-users/zsh-syntax-highlighting.git>
* Install \& Configure Brave Browser
	- <git clone https://aur.archlinux.org/snapd.git>
	- <cd snapd>
	- <makepkg -si>
	- <sudo snap install brave>
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
* Install LaTeX Packages
	- <sudo pacman -S texlive-most>
	- <sudo pacman -S pdflatex>
* Install feh for Setting Background in i3 Config
	- <sudo pacman -S feh>
* Set Background in i3 Config
	- <exec_always feh --bg-fill ~/'dir'/'picture'.'ext'>
* Install compton for some cool styling
	- <sudo pacman -S compton>
* Install dmenu
	- <sudo pacman -S dmenu>

# Command Line Basics

* System
	- super-user do: <sudo 'command'>
	- Shutdown: <sudo shutdown 'time'>
	- Manual: <man 'program'>
* Pacman basics
	- Install: <sudo pacman -S 'program'> 
	- Install \& Update: <sudo pacman -Sy 'program'>
	- Install, Update \& Repair: <sudo pacman -Syu 'program'>
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
	- Back one: <cd ..>
	- List files: <ls>
	- List files (inc. dot files): <ls -a>
	- List files (with stats): <ls -l>
	- Move file: <mv 'dir'/'file' [to] 'dir'/'file'>
	- Copy file: <cp 'dir'/'file' [to] 'dir'/'file'>
	- Rename file (using <mv>): <mv 'file' [to] 'file'>
	- Remove file: <rm 'file'>
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

# GitHub CLI

* Install: <sudo pacman -Sy github-cli>
* Authenticate / Login: <gh auth login>
* Set user email: <git config --global user.email "'email-address'">
* GitHub CLI summary: <gh>
* Basic commands
	- [1.1] List repos: <gh repo list>
	- [1.2] Create repo: <gh repo create [name]> (then clone it to local files)
	- [1.3] Clone: <git clone 'url' [to] 'dir'> or <gh repo clone 'repo'>
	- [2.1] Edited file status: <git status> (while in a repo)
	- [2.2] Add: <git add> (to add newly created files etc.)
	- [2.3] Commit: <git commit -a>
		- Comment, ^X to exit, <Enter> to execute
	- [2.4] Push: <git push>
	- [3.1] Pull: <git pull>

# Some Current Bindings

* mon+enter: new terminal
* mod+': new terminal right
* mod+/: new terminal below 
* mod+f: full-screen
* mod+Shift+f: floating display window
* mod+<h,j,k,l>: move between windows
* mod+q: close window
* mod+'number': change workspace to workspace 'number'
* mod+d: dmenu
* mod+F1: refresh i3
* mouse3: paste from clipboard

# Brave Browser Command Shortcuts

* ctrl+{: back page 
* ctrl+}: forward page
* ctrl+t: new tab
* ctrl+w: close tab [window, upon final tab]
* alt+'n': tab number 'n' in {1,...,[1]0}
