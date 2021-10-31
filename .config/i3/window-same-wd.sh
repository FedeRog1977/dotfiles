#!/bin/env zsh

# Note:

#Add this line to your ~/.zshrc or ~/.bash_profile:

#export PROMPT_COMMAND="pwd > /tmp/whereami"

#Now, your current working directory will be written to /tmp/whereami every time you hit enter in a shell, e.g.:

#$ cat /tmp/whereami 
#/home/aj/git/blog.soulshake.net/src/content/post

WHEREAMI=$(cat /tmp/whereami)
i3-sensible-terminal --directory="$WHEREAMI"
