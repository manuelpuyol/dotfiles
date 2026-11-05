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
| [`copilot/`](copilot) | GitHub Copilot CLI config, wired into `~/.copilot` by [`copilot/install.sh`](copilot/install.sh) (see below). |

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

## GitHub Copilot

`setup` runs [`copilot/install.sh`](copilot/install.sh), which is safe to
re-run on its own:

- Symlinks [`copilot-instructions.md`](copilot/copilot-instructions.md),
  [`statusline.sh`](copilot/statusline.sh) and each file in
  [`agents/`](copilot/agents) into `~/.copilot`.
- Registers [`copilot/skills`](copilot/skills) in `settings.json`'s
  `skillDirectories`, so private skills kept directly in `~/.copilot/skills`
  keep working alongside these.
- Merges [`settings.base.json`](copilot/settings.base.json) and
  [`mcp-config.base.json`](copilot/mcp-config.base.json) into the existing
  `~/.copilot` files. Keys that only exist locally are kept, so MCP servers with
  tokens or internal hosts belong in `~/.copilot/mcp-config.json`, never here.

Third-party skills are vendored from the repos in
[`skill-sources.txt`](copilot/skill-sources.txt) and pinned in
[`skills.lock`](copilot/skills.lock), with their licenses in
[`licenses/`](copilot/licenses). To update them, run
`copilot/sync-skills.sh [owner/repo ...]` and review the diff.
