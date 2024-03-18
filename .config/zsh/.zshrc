# Enable color and set prompt

autoload -U colors && colors 
export PS1="%{$fg[cyan]%}[%* %D] %{$fg[green]%}%n %{$fg[cyan]%}%~ %{$fg[green]%}$ "

# Enable Vi mode

bindkey -v
export KEYTIMEOUT=1

# Change cursor according to Vi

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

## Command shortcuts

alias curr-disp="xrandr -q | grep ' connected' | head -n 1 | cut -d ' ' -f1"
alias bright1-edp1='xrandr --output eDP-1 --brightness 1 --gamma 1:1:1'
alias bright2-edp1='xrandr --output eDP-1 --brightness 0.9 --gamma 0.9:0.9:0.9'
alias bright3-edp1='xrandr --output eDP-1 --brightness 0.9 --gamma 0.75:0.75:0.75'
alias set-edp1='xrandr --output eDP-1 --mode "2560x1600" --rate 59.97'
alias set-hdmi1='xrandr --output HDMI-1 --left-of eDP-1 --mode "3840x2160" --rate 30.00'
alias set-hdmi2='xrandr --output HDMI-2 --left-of eDP-1 --mode "3840x2160" --rate 30.00'

## Command line shortcuts

alias ls='lsd'
alias tree='lsd --tree'
alias start='BROWSER=brave npm start'

## Application shortcuts

alias weather='lynx https://www.mwis.org.uk/forecasts/scottish/west-highlands/text'

## Open repositories in VSCode

alias brittonsbash='code ~/documents/repos/brittonsbash'
alias brittonsbash-content='code ~/documents/repos/brittonsbash-content'
alias brittonsbash-services='code ~/documents/repos/brittonsbash-services'

# Backup dotfiles

# calcurse
# cmus
# Code - OSS
# dconf
# dunst
# falkon
# gh
# GIMP
# gtk-2.0
# gtk-3.0
# gtk-4.0
# i3
# Kvantum
# lsd
# manjaro
# Mousepad
# mpv
# ncmpcpp
# neofetch
# nvim
# pamac
# polybar
# pulse
# qpdfview
# qt5ct
# ranger
# sc-im
# Thunar
# user-dirs.dirs
# user-dirs.locale
# viewnior
# vim
# vlc
# volumeicon
# xfce4
# zathura
# zsh

alias alacrittydf='cp -r ~/.config/alacritty ~/documents/repos/dotfiles/.config'
alias audaciousdf='cp -r ~/.config/audacious ~/documents/repos/dotfiles/.config'
alias autostartdf='cp -r ~/.config/autostart ~/documents/repos/dotfiles/.config'
alias bashdf='cp -r ~/.config/bash ~/documents/repos/dotfiles/.config'
# Continue here ...
alias zshdf='cp -r ~/.config/zsh ~/documents/repos/dotfiles/.config'
alias statusdf='cd ~/documents/repos/dotfiles && git status'
alias dotfile-backup='alacrittydf && audaciousdf && autostartdf && bashdf && zshdf && statusdf'

## Directory and document shortcuts

alias general='cd ~/documents/general'
alias media='cd ~/documents/media'
alias dotfiles='cd ~/documents/repos/dotfiles'
alias pass='nvim ~/documents/general/passwords.txt'

# Enable syntax

source ~/.cache/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
