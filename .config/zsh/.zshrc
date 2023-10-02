# Created by newuser for 5.8

# Enable Color & Set Prompt

autoload -U colors && colors 
export PS1="%{$fg[cyan]%}[%* %D] %{$fg[green]%}%n %{$fg[cyan]%}%~ %{$fg[green]%}$ "

# Enable vi Mode

bindkey -v
export KEYTIMEOUT=1

# Change Cursor According to Vi

function zle-keymap-select() {
    case $KEYMAP in
	vicmd) echo -ne '\e[1 q';;
	viins|main) echo -ne '\e[5 q';;
    esac
}

zle -N zle-keymap-select

zle-line-init() {
    zle -K viins
    echo -ne '\e[5 q'
}

zle -N zle-line-init
echo -ne '\e[5 q'

preexec() {
    echo -ne '\e[5 q' ;
}

# Alias

## Command Shortcuts

alias curr-disp="xrandr -q | grep ' connected' | head -n 1 | cut -d ' ' -f1"
alias bright1-edp1='xrandr --output eDP-1 --brightness 1 --gamma 1:1:1'
alias bright2-edp1='xrandr --output eDP-1 --brightness 0.9 --gamma 0.9:0.9:0.9'
alias bright3-edp1='xrandr --output eDP-1 --brightness 0.9 --gamma 0.75:0.75:0.75'
alias set-edp1='xrandr --output eDP-1 --mode "2560x1600" --rate 59.97'
alias set-hdmi1='xrandr --output HDMI-1 --left-of eDP-1 --mode "3840x2160" --rate 30.00'
alias set-hdmi2='xrandr --output HDMI-2 --left-of eDP-1 --mode "3840x2160" --rate 30.00'

## Command Line Programs

alias stocks='ticker --config ~/Downloads/snap/ticker/ticker.yaml'

## Command Line Shortcuts

alias ls='lsd'
alias tree='lsd --tree'
alias start='BROWSER=brave npm start'

## Application Shortcuts

alias weather='lynx https://www.mwis.org.uk/forecasts/scottish/west-highlands/text'

## Directory Shortcuts

alias general='cd ~/Documents/general'
alias media='cd ~/Documents/media'
alias repos='cd ~/Documents/repos'
	alias dots='cd ~/Documents/repos/dotfiles'
	alias bashrc='cd ~/Documents/repos/BrittonsBashRC'
	alias brittonsbash='code ~/Documents/repos/brittonsbash'
	alias burning='cd ~/Documents/repos/Burning'
	alias vtc='cd ~/Documents/repos/vtctruffles'

## Document Shortcuts

alias readme='nvim ~/Documents/repos/dotfiles/README.md'
alias git-guide='nvim ~/Documents/repos/dotfiles/git-guide.md'
alias pass='nvim ~/Documents/general/passwords.txt'

# Enable Syntax

source ~/.cache/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
