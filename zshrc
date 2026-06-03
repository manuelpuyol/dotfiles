# load shared shell configuration
source ~/.shrc

export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="robbyrussell"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# macOS-only: Tailscale CLI lives inside the app bundle
if [ "$(uname -s)" = "Darwin" ]; then
  alias tailscale="/Applications/Tailscale.app/Contents/MacOS/Tailscale"
  add_to_path_end "/Applications/Tailscale.app/Contents/MacOS"
fi

quiet_which starship && eval "$(starship init zsh)"
quiet_which rbenv && eval "$(rbenv init -)"

# Switch Node.js version automatically when changing directories (.nvmrc).
# load_nvmrc and nvm itself are loaded in ~/.shrc.
if quiet_which load_nvmrc; then
  autoload -Uz add-zsh-hook
  load_nvmrc_on_chpwd() { load_nvmrc "${OLDPWD}" }
  add-zsh-hook chpwd load_nvmrc_on_chpwd
  load_nvmrc
fi

# Load nvm completions if available
[ -s "$NVM_DIR/bash_completion" ] && \. "$NVM_DIR/bash_completion"

# Add Go bin to PATH only if Go is installed
quiet_which go && add_to_path_end "$(go env GOPATH)/bin"
add_to_path_end "$HOME/.rvm/bin"

# Export a GitHub token if gh is installed and authenticated
quiet_which gh && export GITHUB_TOKEN="$(gh auth token 2>/dev/null)"
