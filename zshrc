export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(git fzf-tab zsh-autosuggestions)

source $ZSH/oh-my-zsh.sh

eval "$(starship init zsh)"
eval "$(rbenv init -)"
