
#!/bin/sh
# extend non-HiDPI external display on DP* above HiDPI internal display eDP*
# see also https://wiki.archlinux.org/index.php/HiDPI
# you may run into https://bugs.freedesktop.org/show_bug.cgi?id=39949
#                  https://bugs.launchpad.net/ubuntu/+source/xorg-server/+bug/883319

xrandr --output HDMI-0 --mode 1920x1080 --scale 1x1 --above eDP-1-1
xrandr --output eDP-1-1 --mode 1920x1080 --scale 1x1 --primary
