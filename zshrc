# load shared shell configuration
source ~/.shrc

export ZSH="$HOME/.oh-my-zsh"

ZSH_THEME="robbyrussell"

# Skip oh-my-zsh's completion-dir security audit (compaudit) on startup; the
# completion dirs are our own, and this shaves time off every shell launch.
ZSH_DISABLE_COMPFIX="true"

plugins=(git zsh-autosuggestions zsh-syntax-highlighting)

source $ZSH/oh-my-zsh.sh

# macOS-only: Tailscale CLI lives inside the app bundle
if [ "$(uname -s)" = "Darwin" ]; then
  alias tailscale="/Applications/Tailscale.app/Contents/MacOS/Tailscale"
  add_to_path_end "/Applications/Tailscale.app/Contents/MacOS"
fi

quiet_which starship && eval "$(starship init zsh)"
# Shims are already on PATH (see ~/.shrc), so skip the startup rehash for a
# faster shell. Run `rbenv rehash` manually after installing new gem binaries.
quiet_which rbenv && eval "$(rbenv init - --no-rehash zsh)"

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

# Export a GitHub token if gh is installed and authenticated
quiet_which gh && export GITHUB_TOKEN="$(gh auth token 2>/dev/null)"
