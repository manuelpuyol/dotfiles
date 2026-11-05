---
name: recall
description: Rebuild working context from past Copilot sessions plus live repository and PR state. Use for "recall my work on X", "catch me up", "where did I leave off", or picking a topic back up across sessions.
---

# Recall

1. **Find the sessions.** Use the `session_store_sql` tool when it's available. Start with the last 14 days and widen only if needed. Filter by repository, branch or topic using `sessions`, `checkpoints`, `session_files` and `session_refs`. Without that tool, query `~/.copilot/session-store.db` read-only with `sqlite3` and run `.tables` first to learn the schema.
2. **Pull the substance.** Latest checkpoint summaries, the last things I asked for, files touched, and PRs, issues and commits referenced.
3. **Check what's true now.** History goes stale. Confirm against live state:
   ```sh
   git status --short --branch
   git worktree list
   git log --oneline -10 <branch>
   gh pr list --author @me --state open
   gh pr view <n> --json state,mergeStateStatus,reviewDecision,statusCheckRollup
   ```
4. **Report per topic**: the goal, what's done (with commits or PRs as evidence), what's still open, and the next step. Mark anything you saw only in history, not in live state, as "from history". Don't resume the work unless I ask.
