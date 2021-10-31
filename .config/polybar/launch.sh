#!/bin/env zsh

# Terminate already running bar instances
killall -q polybar

# Launch
while pgrep -u $UID -x polybar >dev/null; do sleep 1; done
polybar brittonsbar &

echo "Polybar launched..."
