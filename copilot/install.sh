#!/bin/sh
# Wires this folder into ~/.copilot. Safe to rerun.
#
# - copilot-instructions.md, statusline.sh and each agent are symlinked.
# - skills/ is registered through settings.json's skillDirectories, so private
#   skills kept directly in ~/.copilot/skills are left alone.
# - settings.base.json and mcp-config.base.json are merged into the existing
#   files rather than linked: the CLI writes machine-local keys into both, and
#   private MCP servers (tokens, internal hosts) must stay out of this repo.
set -eu
umask 077

src="$(cd "$(dirname "$0")" && pwd -P)"
dest="${COPILOT_HOME:-$HOME/.copilot}"
mkdir -p "$dest/agents"

link() {
    if [ -L "$2" ]; then
        rm "$2"
    elif [ -e "$2" ]; then
        backup="$2.bak.$(date +%Y%m%d%H%M%S)"
        mv "$2" "$backup"
        echo "copilot: moved existing $2 to $backup"
    fi
    ln -s "$1" "$2"
}

link "$src/copilot-instructions.md" "$dest/copilot-instructions.md"
link "$src/statusline.sh" "$dest/statusline.sh"

for agent in "$src"/agents/*.agent.md; do
    link "$agent" "$dest/agents/$(basename "$agent")"
done
# Drop links to agents that were removed from this repo.
for agent in "$dest"/agents/*.agent.md; do
    if [ -L "$agent" ] && [ ! -e "$agent" ]; then
        case "$(readlink "$agent")" in "$src"/*) rm "$agent" ;; esac
    fi
done

if ! command -v jq >/dev/null 2>&1; then
    echo "copilot: jq not found, skipped merging settings and MCP servers"
    exit 0
fi

merge_json() {
    target="$1"
    shift
    created=""
    [ -f "$target" ] || { echo '{}' > "$target"; created=1; }
    if ! merged="$(jq "$@" "$target" 2>/dev/null)"; then
        echo "copilot: $target is not valid JSON, left untouched"
        return 0
    fi
    [ "$(printf '%s' "$merged" | jq -cS .)" = "$(jq -cS . "$target")" ] && return 0
    note=""
    [ -n "$created" ] || { cp -p "$target" "$target.bak"; note=" (previous copy at $target.bak)"; }
    # Overwrite in place so the file keeps its permissions.
    printf '%s\n' "$merged" > "$target"
    echo "copilot: updated $target$note"
}

merge_json "$dest/settings.json" \
    --slurpfile base "$src/settings.base.json" \
    --arg skills "$src/skills" \
    '. * $base[0] | .skillDirectories = ((.skillDirectories // []) + [$skills] | unique)'

merge_json "$dest/mcp-config.json" \
    --slurpfile base "$src/mcp-config.base.json" \
    '. * $base[0]'
