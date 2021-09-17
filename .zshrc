# Created by newuser for 5.8

# Enable Color & Set Prompt

autoload -U colors && colors 
export PS1="%{$fg[cyan]%}[%* %D] %{$fg[green]%}%n %{$fg[cyan]%}%~ %{$fg[green]%}$ "

# Enable vi Mode

bindkey -v
export KEYTIMEOUT=1

# Alias

## Command Line Programs

alias ogvim='vi'
alias soyvim='vim'
alias realvim='nvim'
alias mop='go run ~/.cache/gostuff/src/github.com/mop-tracker/mop/cmd/mop/main.go'
	alias go='~/.cache/go/bin/mop' # Because 'go run' relies on 'go' being in ~, moved to .cache

## Application Shortcuts

alias email='thunderbird'
alias sublime='subl'

## Directory Shortcuts

alias docs='cd ~/Documents'
	alias general='cd ~/Documents/General'
	alias uni='cd ~/Documents/Masters'
		alias project='cd ~/Documents/Masters/CS958-Project'
	alias work='cd ~/Documents/Work'
	alias repos='cd ~/Documents/Repos'
		alias dots='cd ~/Documents/Repos/dotfiles'
		alias bashrc='cd ~/Documents/Repos/BrittonsBashRC'
			alias blog='cd ~/Documents/Repos/BrittonsBashRC/Blog'
			alias coursework='cd ~/Documents/Repos/BrittonsBashRC/Coursework'
		alias vtc='cd ~/Documents/Repos/vtctruffles'

## Document Shortcuts

alias todo='nvim ~/Documents/General/To-Do.txt'
alias shop='nvim ~/Documents/General/Shopping.txt'
alias pers='nvim ~/Documents/General/Personal.txt'

# Enable syntax
source ~/.cache/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
