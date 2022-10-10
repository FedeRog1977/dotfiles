#!/bin/env zsh

# Terminate already running bar instances
killall -q polybar

# Manage multiple monitors
if type "xrandr"; then
  for m in $(xrandr --query | grep " connected" | cut -d" " -f1); do
    MONITOR=$m polybar --reload example &
  done
else
  polybar --reload example &
fi

# Launch
while pgrep -u $UID -x polybar >dev/null; do sleep 1; done
polybar brittonsbar &

echo "Polybar launched..."
