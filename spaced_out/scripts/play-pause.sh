STATUS="$(playerctl status)"
case $STATUS in
  Playing)
    playerctl pause
    ;;
  *)
    playerctl play
    ;;
esac
