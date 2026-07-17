# Wrap-Up Protocol

The full end-of-session routine. Read this before running the wrap-up the first
time. The shape is always the same: **review → persist → resume note → loose ends
→ report.**

## 1. Take stock

Reconstruct what this session actually accomplished. Look for:

- What was **built, changed, or fixed** — features, edits, bug fixes, experiments.
- **Decisions** made, and the reasoning behind them (the *why* is the part that's
  expensive to reconstruct later).
- Durable **preferences or corrections** the user gave — how they want you to
  work, conventions they hold, things they told you to stop or start doing.
- **Project status** — where things now stand and what the obvious next move is.

If nothing meaningful happened (a read-only session, a single quick answer), say
so and stop. A wrap-up with nothing to persist is noise.

## 2. Pick targets

Update only the stores this session actually touched. Match each kind of learning
to its home:

| What you learned | Where it goes |
|---|---|
| Durable facts, preferences, how the user works | Your assistant's persistent memory (memory files, a `MEMORY.md`, or the equivalent) |
| Project architecture, conventions, commands, gotchas | The project's docs — `CLAUDE.md`, `AGENTS.md`, a README, or wherever project memory lives |
| Notes created or substantially changed | Your index/manifest note, if you keep one |

Two tests before you write anything down:

- **Durability.** Will this still matter next week? Session-only trivia doesn't
  belong in long-term memory.
- **Non-derivability.** If the fact is already obvious from the code, the git
  history, or existing docs, don't restate it. Persist what *isn't* recoverable
  from the artifacts themselves.

## 3. Apply the updates

- Make **surgical** edits. Add or update the specific lines that changed; don't
  reformat, reorder, or rewrite surrounding content you weren't asked to touch.
- Keep **one canonical home per fact** (see `memory-hygiene-checklist.md`). Before
  adding a memory, check whether it already exists somewhere and update that
  instead of creating a duplicate.
- Call out any **large rewrite or deletion** explicitly in the report — those are
  the edits worth a human glance.

## 4. Write a resume note

The single highest-value output. A short note the next session (or the next
person) reads first, so they start warm. Use `resume-note-template.md`.

- A few bullets, not an essay: what you just finished, what's in flight, the
  obvious next step.
- **Overwrite** the previous resume note. It holds the latest state, not a running
  log — a growing pile defeats the purpose.
- Save it where it will actually be seen at the start of the next session (your
  assistant's memory directory, a `RESUME.md` at the project root, or the top of
  your working note).

## 5. Flag loose ends

- If the project uses version control and has **uncommitted changes**, list them
  briefly (grouped, not file-by-file) and offer to commit them.
- **Never commit automatically.** Committing is the user's decision; your job is
  to make sure nothing is silently left behind.
- Surface other loose ends too: unanswered questions, promises made during the
  session, half-finished work, anything a future session would want flagged.

## 6. Report

Close with a tight summary, grouped by what changed:

- **Memory** — what durable facts/preferences were saved or updated.
- **Docs** — which project docs changed and how.
- **Resume note** — echo its content and say where it lives.
- **Version control** — what's uncommitted, and your offer to commit.

No filler, no congratulation. If a step had nothing to do, omit it rather than
padding.
