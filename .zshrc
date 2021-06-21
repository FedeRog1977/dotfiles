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
	alias work='cd ~/Documents/Work'
	alias gitdocs='cd ~/Documents/GitHub'
		alias dots='cd ~/Documents/GitHub/dotfiles'
		alias bashrc='cd ~/Documents/GitHub/BrittonsBashRC'
			alias blog='cd ~/Documents/GitHub/BrittonsBashRC/Blog'
			alias coursework='cd ~/Documents/GitHub/BrittonsBashRC/Coursework'
		alias gents='cd ~/Documents/GitHub/Gentlemen'
		alias vtc='cd ~/Documents/GitHub/vtctruffles'

## Document Shortcuts

alias todo='nvim ~/Documents/General/To_Do.md'
alias shop='nvim ~/Documents/General/Artillery.md'
alias cash='nvim ~/Documents/General/Cash.md'
alias pass='nvim ~/Documents/General/Sdrowssap.md'

# Enable syntax
source ~/.cache/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
