# Created by newuser for 5.8

# Enable Color & Set Prompt

autoload -U colors && colors 
export PS1="%{$fg[cyan]%}[%* %D] %{$fg[green]%}%n %{$fg[cyan]%}%~ %{$fg[green]%}$ "

# Enable vi Mode

bindkey -v
export KEYTIMEOUT=1

# Alias Command Shortcuts

## Command Line Programs

alias ogvim='vi'
alias soyvim='vim'
alias realvim='nvim'
alias mop='go run ~/.cache/gostuff/src/github.com/mop-tracker/mop/cmd/mop/main.go'
	alias go='~/.cache/go/bin/mop' # Because 'go run' relies on 'go' being in ~, moved to .cache

## Application Shortcuts

alias email='thunderbird'

## Directory Shortcuts

alias docs='cd ~/Documents'
	alias general='cd ~/Documents/General'
	alias uni='cd ~/Documents/Masters'
	alias bashrc='cd ~/Documents/Sites/BrittonsBashRC'
		alias blog='cd ~/Documents/Sites/brittonsBashRC/Blog'
		alias coursework='cd ~/Documents/Sites/BrittonsBashRC/Coursework'

## Document Shortcuts

alias todo='nvim ~/Documents/General/To_Do.md'
alias shopping='nvim ~/Documents/General/Shopping.md'
alias cash='nvim ~/Documents/General/Cash.md'
alias fede='nvim ~/Documents/General/FedeRog.md'

# Enable syntax
source ~/.cache/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
