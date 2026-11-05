#!/bin/sh
# Copilot CLI status line: branch, working tree, PR checks, context use and model.
# Reads the session JSON on stdin. git and gh lookups are cached and refreshed in
# the background, so a redraw never waits on them.
command -v jq >/dev/null 2>&1 || exit 0

input="$(cat)"
field() { printf '%s' "$input" | jq -r "($1) // empty" 2>/dev/null; }

dir="$(field '.workspace.current_dir // .cwd')"
ctx="$(field '.context_window.used_percentage | floor')"
model="$(field '.model.display_name')"

tail=""
[ -n "$ctx" ] && tail="ctx ${ctx}%"
[ -n "$model" ] && tail="${tail:+$tail · }$model"

branch=""
if [ -n "$dir" ] && [ -d "$dir" ]; then
    branch="$(git -C "$dir" symbolic-ref --quiet --short HEAD 2>/dev/null ||
        git -C "$dir" rev-parse --short HEAD 2>/dev/null)"
fi
if [ -z "$branch" ]; then
    printf '%s\n' "$tail"
    exit 0
fi

cache="${XDG_CACHE_HOME:-$HOME/.cache}/copilot-statusline"
mkdir -p "$cache"
key="$cache/$(printf '%s' "$dir:$branch" | cksum | cut -d' ' -f1)"
now="$(date +%s)"

# Cache files hold "<unix time>\n<value>".
cached() { [ -f "$key.$1" ] && sed -n '2p' "$key.$1"; }

# refresh <name> <ttl seconds> <command...>
refresh() {
    name="$1" ttl="$2"
    shift 2
    file="$key.$name"
    stamp=0
    [ -f "$file" ] && read -r stamp < "$file"
    [ $((now - ${stamp:-0})) -lt "$ttl" ] && return 0
    # Stamp before spawning so back-to-back redraws don't start duplicate refreshes.
    printf '%s\n%s\n' "$now" "$(cached "$name")" > "$file"
    (
        value="$("$@" 2>/dev/null)"
        printf '%s\n%s\n' "$(date +%s)" "$value" > "$file.tmp" && mv "$file.tmp" "$file"
    ) </dev/null >/dev/null 2>&1 &
}

tree_state() {
    changed="$(git -C "$dir" status --porcelain | wc -l | tr -d ' ')"
    if [ "$changed" -gt 0 ]; then echo "$changed changed"; else echo "clean"; fi
}

pr_state() {
    cd "$dir" && gh pr view --json number,statusCheckRollup --jq '
        "PR #\(.number) " + (
            [.statusCheckRollup[]?] as $checks
            | if any($checks[]; (.conclusion // .state) as $s
                | $s == "FAILURE" or $s == "ERROR" or $s == "TIMED_OUT" or $s == "CANCELLED" or $s == "ACTION_REQUIRED")
                then "failing"
              elif any($checks[]; (.status // "COMPLETED") != "COMPLETED" or .state == "PENDING")
                then "pending"
              elif ($checks | length) == 0 then "no checks"
              else "passing" end)'
}

refresh tree 20 tree_state
command -v gh >/dev/null 2>&1 && refresh pr 120 pr_state

line="$branch"
tree="$(cached tree)"
[ -n "$tree" ] && line="$line · $tree"
pr="$(cached pr)"
[ -n "$pr" ] && line="$line · $pr"
[ -n "$tail" ] && line="$line · $tail"
printf '%s\n' "$line"
