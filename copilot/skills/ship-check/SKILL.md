---
name: ship-check
description: Independent pre-merge verification of a pull request's exact head commit, exercising the change the way a user would. Ends with PASS, PASS WITH NOTES or FAIL. Use for /ship-check, "is this safe to merge", or before merging anything risky.
---

# Ship check

Decide whether the PR's head commit does what it claims. Don't rely on earlier verification by the author or by you. This is read-only: don't push, comment or approve unless asked.

1. **Pin the commit.** `gh pr view <pr> --json url,title,body,headRefOid,baseRefName`. Everything below runs against that SHA. If the head moves during the check, start over.
2. **Isolate.** Check it out in a throwaway worktree, never in my working tree:
   ```sh
   wt="$(mktemp -d)/ship-check"
   git fetch origin <headRefOid> && git worktree add --detach "$wt" <headRefOid>
   ```
   Run `git worktree remove --force "$wt"` when done.
3. **List the claims.** From the title, body and linked issue, write down each observable behavior the change promises and the existing behavior it must not break. Every item ends as verified, failed, or not verifiable here (with the reason).
4. **Run the project's checks** that cover the diff: targeted tests, type-check, lint. If something fails, run the same command at the merge base to tell pre-existing failures from new ones.
5. **Use the change like a user would.** Run the CLI, hit the endpoint, load the page or call the API with realistic input, plus at least one edge case per claim. Keep the exact commands and output.
6. **Get a second opinion.** Give the `reviewer` agent the diff (`gh pr diff <pr>`) and the claims list. Confirm any blocker it raises before counting it.
7. **Verdict.**
   - **PASS**: every claim verified, no blockers.
   - **PASS WITH NOTES**: claims verified. List non-blocking risks and anything you couldn't verify.
   - **FAIL**: a claim failed or a blocker is confirmed. Include the repro.
