# Memory-Hygiene Checklist

Persistent memory is only useful if it stays trustworthy. Run this check whenever
the wrap-up is about to write something down.

## Before you save a fact

- [ ] **Does it already live somewhere?** Search first. If a note or memory
      already covers this, update *that* one. Never create a second copy — two
      homes for one fact means one is always wrong.
- [ ] **Is it durable?** Will this matter next week, or is it session-only trivia?
      Long-term memory is for what stays true across sessions.
- [ ] **Is it non-derivable?** If it's obvious from the code, the git history, or
      existing docs, don't restate it. Save what *can't* be recovered from the
      artifacts.
- [ ] **Right layer?** Personal/cross-project preferences go to global memory;
      one-codebase details go to that project's docs. Don't write the same fact to
      both.

## When you edit

- [ ] **Surgical, not sweeping.** Change the lines that need changing; leave the
      rest of the file alone.
- [ ] **Convert relative dates to absolute.** "Yesterday" and "next week" rot;
      write the actual date.
- [ ] **Delete what's now wrong.** A stale memory is worse than a missing one.
      When something is superseded, remove or correct it — don't just append the
      new version alongside the old.

## Signs your memory needs a cleanup pass

- The same fact stated two or three different ways in different files.
- Notes referencing files, commands, or paths that no longer exist.
- A resume note that's grown into a changelog.
- Memory that contradicts what the code or docs actually say.

When you spot these, flag them in the wrap-up report so they get fixed rather than
compounding.
