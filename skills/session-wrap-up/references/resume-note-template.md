# Resume-Note Template

A resume note is the "start here" note your next session reads first. Keep it
short and current. Overwrite it each wrap-up — it's a snapshot of the latest
state, not a log that grows.

Save it where the next session will actually see it at the start: your assistant's
memory directory, a `RESUME.md` at the project root, or the top of your working
note.

---

```markdown
# Resume — <project or effort name>

**Last updated:** <date>

## What we just finished
- <the thing that got done this session, in one line each>
- <a decision that was made, and why, if it's load-bearing>

## In flight
- <what's half-done — enough detail to pick it back up cold>
- <where the code/draft currently sits, and what's not yet working>

## Next step
- <the single most obvious next action — what you'd do first if you sat down now>

## Watch out for
- <anything a future session would trip on: a gotcha, an uncommitted pile, a
  blocked dependency, a question waiting on someone else>
```

---

## Writing a good one

- **Lead with the next step.** The first thing a returning session needs is "what
  do I do now," not a history lesson.
- **Concrete over vague.** "Auth redirect works; token refresh 401s on expiry —
  see `auth.ts:88`" beats "still working on auth."
- **One line each.** If a bullet needs a paragraph, it belongs in the project docs,
  and the resume note should link to it.
- **Prune ruthlessly.** Anything that's now done comes out. The note should shrink
  as often as it grows.
