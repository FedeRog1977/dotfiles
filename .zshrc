# Created by newuser for 5.8

# Enable Color & Set Prompt

autoload -U colors && colors 
export PS1="%{$fg[cyan]%}[%* %D] %{$fg[green]%}%n %{$fg[cyan]%}%~ %{$fg[green]%}$ "

# Enable vi Mode

bindkey -v
export KEYTIMEOUT=1

# Alias

## Command Shortcuts

alias disp="xrandr -q | grep ' connected' | head -n 1 | cut -d ' ' -f1"
alias dispset='xrandr --output eDP-1 --brightness 1 --gamma 1:1:1'
alias dispset2='xrandr --output eDP-1 --brightness 0.75 --gamma 0.9:0.9:0.9'
alias dispset3='xrandr --output eDP-1 --brightness 0.6 --gamma 0.75:0.75:0.75'

## Command Line Programs

alias stocks='ticker --config ~/snap/ticker/ticker.yaml'

## Command Line Shortcuts

alias ls='lsd'
alias tree='lsd --tree'

## Application Shortcuts

alias weather='lynx https://www.mwis.org.uk/forecasts/scottish/west-highlands/text'

## Directory Shortcuts

alias general='cd ~/Documents/General'
alias media='cd ~/Documents/Media'
alias repos='cd ~/Documents/Repos'
	alias dots='cd ~/Documents/Repos/dotfiles'
	alias bashrc='cd ~/Documents/Repos/BrittonsBashRC'
		alias blog='cd ~/Documents/Repos/BrittonsBashRC/Blog'
		alias coursework='cd ~/Documents/Repos/BrittonsBashRC/Coursework'
	alias vtc='cd ~/Documents/Repos/vtctruffles'
alias uni='cd ~/Documents/University'
	alias project='cd ~/Documents/University/Project'

## Document Shortcuts

alias readme='nvim ~/Documents/Repos/dotfiles/README.md'
alias bins='zathura ~/Documents/General/Bins.pdf'
alias life='sc-im ~/Documents/General/Life.csv'
alias notes='nvim ~/Documents/General/Notes.txt'
alias pass='nvim ~/Documents/General/Passwords.txt'

# Enable Syntax

source ~/.cache/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
