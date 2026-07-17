---
name: session-wrap-up
description: End-of-session ritual that saves your progress before the context is lost. When a working session or phase is wrapping up, it reviews what happened, persists what matters to your notes and project memory, writes a short resume note so the next session starts warm, and flags any uncommitted version-control work. Use when finishing a phase or project, switching or ending a session, or stopping for the day. Trigger phrases include "wrap up", "wrap-up", "save our progress", "checkpoint this", "update the docs and memory", "I'm done for now", "before I go", "ending the session".
license: MIT
---

# Session Wrap-Up

Working sessions with an AI end abruptly. The context you built up evaporates, the
next session starts cold, and whatever you figured out is buried in a transcript
nobody rereads. This closes the loop: review the session, persist what mattered,
leave a resume note for next time, and surface any loose ends — so tomorrow picks
up where today left off instead of starting over.

## When to run it

Offer this — once, in a single line, easy to wave off — when the user sounds like
they're wrapping up: finishing a phase or project, switching or ending a session,
or stopping for the day. Run it when they say so; don't force it. If they invoke
it directly, just run it.

If **nothing meaningful happened** this session (only reading, or a quick answer),
say so and stop. Never manufacture progress to justify the ritual.

## Where it works

This needs a file-capable surface — Claude Code, Cowork, or another agentic tool
that can read and write your actual files. In plain chat there's nothing durable
to write to, so the skill has nothing to persist; it will say so rather than
pretend.

## The procedure

Follow these six steps. The full protocol, with the rules for each step, is in
`references/wrap-up-protocol.md` — read it before acting the first time.

1. **Take stock.** Review what this session actually did: what was built, changed,
   or fixed; decisions made and why; any durable preferences or corrections the
   user gave; where the project now stands and what's next.
2. **Pick targets.** Only the stores this session actually touched — durable facts
   and preferences go to your assistant's persistent memory; durable project
   documentation (architecture, conventions, commands, gotchas) goes to the
   project's docs (`CLAUDE.md`, `AGENTS.md`, a README, or wherever project memory
   lives); changed notes go to your index note if you keep one.
3. **Apply the updates.** Make them surgically — don't reformat or rewrite
   surrounding content. One canonical home per fact; never a second copy. See
   `references/memory-hygiene-checklist.md`. Call out any large rewrite or
   deletion.
4. **Write a resume note.** A few bullets — what you just finished, what's in
   flight, the obvious next step — saved where the next session will see it first.
   Overwrite the previous resume note; it holds the latest state, not a running
   log. Template in `references/resume-note-template.md`.
5. **Flag uncommitted work.** If the project uses version control and has
   uncommitted changes, list them briefly and offer to commit. Never commit
   automatically — the user commits when they choose to.
6. **Report.** A tight summary grouped by what changed: Memory, Docs, Resume note
   (with its content and location), Version control. No filler.

## Default: apply, then report

Make the updates directly, then summarize what changed — this is the faster
default for a trusted end-of-session routine. If the user would rather approve
each change first, honor that and switch to propose-then-apply for the session.

## The rules that keep it trustworthy

- **Truthful, not flattering.** Persist only what actually happened or was
  decided. If a step was skipped or something failed, the report says so.
- **Surgical edits.** Update in place; don't restructure files you were only
  meant to append a line to.
- **One source of truth.** Before writing a fact, check whether it already lives
  somewhere; update that, don't duplicate it.
- **Never commit unprompted.** Flagging version-control work is help; committing
  it is the user's call.
