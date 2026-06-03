# Dotfiles

Portable shell, git and editor configuration for **macOS**, **Linux** and **GitHub Codespaces**.

Based on https://github.com/MikeMcQuaid/dotfiles

## Install

```sh
git clone https://github.com/manuelpuyol/dotfiles ~/src/dotfiles
cd ~/src/dotfiles
./setup
```

`setup` symlinks every dotfile into `$HOME`, then runs
[`script/install-packages`](script/install-packages) which installs Homebrew and
the tooling. The full run is logged to `~/dotfiles_install.log`. Re-running is
safe — every step is idempotent.

## How it works

| File | Purpose |
| --- | --- |
| [`shrc`](shrc) | POSIX shell config shared by every shell/platform (`PATH` helpers). |
| [`zshrc`](zshrc) | zsh config. OS-specific lines (Tailscale, Go, `gh` token) are guarded so it never errors on Linux/Codespaces. |
| [`Brewfile`](Brewfile) | Cross-platform CLI formulae, installed everywhere via `brew bundle`. |
| [`Brewfile.macos`](Brewfile.macos) | macOS-only GUI apps and fonts (casks). |
| [`gitconfig`](gitconfig) | Shared git config. Includes `~/.gitconfig.local` for per-machine overrides (signing keys, work email, …). |
| [`script/setup`](script/setup) | Symlinks dotfiles into `$HOME`. |
| [`script/install-packages`](script/install-packages) | Installs oh-my-zsh, plugins, Homebrew and packages. |
| [`script/codespaces-post-start`](script/codespaces-post-start) | Codespaces hook: sets zsh as default shell and runs `setup`. |

## Platform notes

- **macOS** — installs Homebrew formulae **and** casks.
- **Linux** — installs Homebrew (Linuxbrew); apt is only used to install
  Homebrew's build prerequisites. Casks are skipped.
- **Codespaces** — `codespaces-post-start` runs `setup`; VSCode extensions are
  skipped (managed by Settings Sync).

## Per-machine overrides

Anything machine-specific (e.g. a work email or a commit-signing key) goes in
`~/.gitconfig.local`, which is read by `gitconfig` but never committed:

```ini
[user]
  email = work@example.com
[commit]
  gpgsign = true
```
