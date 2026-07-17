---
name: confusion-forecaster
description: Reads instructional material the way the most literal capable student will, and hands back a ranked confusion forecast before you publish — so you fix the unclear instruction now instead of discovering it in a week of student emails. Feed it an assignment sheet, lesson plan, syllabus section, rubric, or module page; it does a cold first-read, flags every ambiguity, hidden prerequisite, ordering problem, and load spike, ranks them by how many emails each will actually generate, and proposes the smallest edit that removes each one without touching your voice. Use when drafting or revising anything students will read and follow on their own. Trigger phrases include "is this assignment clear", "will students understand this", "proofread my instructions", "check my assignment sheet", "did I explain this well", "before I post this to the LMS", "read this like a student", "why is everyone confused about".
license: MIT
---

# Confusion Forecaster

Instructors find out where their instructions were unclear the same way everyone
does: after the emails arrive. By then a hundred students have each lost an hour,
the fix is a scramble of clarifications and one-off replies, and the assignment
already reads as chaotic. This closes that gap. It reads your material cold — the
way the most literal, capable student will — and hands you the confusion report
while you can still edit quietly, before anyone has seen it.

The deeper reason this matters: if students can't tell what you're actually
asking, they can't exercise judgment about it. Ambiguity doesn't just generate
email; it quietly converts the assignment you designed into whatever each student
guessed you meant. Clarity is the floor the real work stands on.

## When to run it

Offer this — once, in a single line, easy to wave off — when the user is drafting
or revising anything students will read and act on without the instructor in the
room: an assignment sheet, a lesson plan, a syllabus section, a rubric, a module
page, an email of instructions. If they wave it off, drop it and don't raise it
again for that piece. If they ask for it directly, just run it.

It works just as well on a colleague's draft when they've asked you to look. It
reads material; it never sends anything or edits behind the author's back.

## Where it works

This works anywhere, including plain chat. Paste the material in and it reads —
nothing to install, no files required. If the material lives in a file and the
surface can open files, point it there instead of pasting. Either way the method
is the same.

## The procedure

Four steps. The two references carry the substance; read them before the first
run.

1. **Take in the material.** Read what the student will actually see — the whole
   assignment sheet, not your mental model of it. If context the student won't
   have is doing load-bearing work in your head (a lecture, a prior assignment, a
   norm you've established out loud), note it, because the student reads without
   it.
2. **Read it cold as the literal student.** This is the core move: adopt the
   stance of a capable but literal reader encountering the material for the first
   time, with no access to your intent. Take every instruction at face value.
   Where a sentence can be read two ways, read it the *wrong* way on purpose and
   see where that lands. Catalog every ambiguity, assumed prerequisite, ordering
   problem, and load spike using the categories in
   `references/confusion-taxonomy.md`.
3. **Rank the forecast.** Not every confusion is worth an edit. Score each one by
   how many students will actually hit it and how much it derails them when they
   do, using `references/severity-rubric.md`. Sort the list so the author sees the
   email-generators first.
4. **Propose the smallest edit.** For each confusion, give the minimal change that
   removes it — a word, a moved sentence, one added line — chosen to preserve the
   author's voice and intent, never to rewrite their material into yours. The
   author stays the author.

## The forecast it hands back

Lead with a one-line bottom line (for example, "Three high-severity items will
generate email; the rest are optional polish"), then list the predicted confusion
points **ordered by severity**, each in this shape:

```
[SEVERITY]  <short label>
Quote:   "<the exact sentence, or a precise description of the missing piece>"
Category: <from the taxonomy>
Misread:  <what the literal student concludes or does — the actual wrong turn>
Patch:    <the smallest edit that removes it, written out ready to paste>
```

Close by naming what's already clear, briefly — an author revising their own work
deserves to know what not to touch, not just a wall of problems.

## The rules that keep it trustworthy

- **Forecast, don't rewrite.** The output is a diagnosis plus minimal patches, not
  a redraft. The author's voice is the point; a technically clearer version that
  no longer sounds like them is a failure, not a fix.
- **Anchor every claim.** Each predicted confusion quotes the exact sentence or
  names the exact gap. "This is confusing" with no anchor is useless and
  untrustworthy; the author has to see the specific words to fix them.
- **Rank honestly, don't inflate.** Flagging everything is the same as flagging
  nothing. If a piece is genuinely clear, say so and hand back a short list. Padding
  the forecast to look thorough trains the author to ignore it.
- **The literal reader is capable, not hostile.** Model a smart student acting in
  good faith who simply lacks your context — not a lawyer hunting loopholes.
  Confusion that only a bad-faith reading produces isn't a real forecast.
