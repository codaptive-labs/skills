---
name: ai-guidelines-workshop
description: A process companion for writing AI guidelines for a team, department, or program — not a document generator. Drafting the document is the easy part; the process is where efforts stall, across stakeholders, feedback rounds, and revisions over weeks. This keeps the working state of the effort — stakeholder map, decision log, open questions, draft-in-progress — so every session starts where the last one ended, and drafts with a three-camps diagnostic and an augmentation-spectrum backbone. Use when developing AI guidelines, an AI policy, or usage principles for an organization. Trigger phrases include "write AI guidelines for my department", "develop an AI policy", "AI usage principles", "our team needs AI guidelines", "resume the guidelines draft".
license: MIT
---

# AI Guidelines Workshop

Every department is being asked for AI guidelines, and the document is the easy part —
the process is where efforts stall: stakeholders, drafts, feedback rounds, revisions
across weeks. This is a process companion, not a policy generator. It keeps the
working state so every session starts where the last one ended, instead of
re-litigating decisions already made.

## When to run it

On-demand, and it's a long-running effort by nature — start it once, resume it many
times. Each session, it re-reads the working file and picks up the thread.

## Where it works

Works anywhere, but it's at its best inside a Claude Project or a Cowork/Claude Code
folder, where the working file persists between sessions. In plain chat without
persistence, it can still run a single session and hand you the working file to save.

## The procedure

The structure that survives review is in `references/guidelines-skeleton.md`; who to
ask and what, before drafting, is in `references/stakeholder-question-bank.md`; the
difference between guidelines that help and guidelines that threaten is in
`references/tone-examples.md`.

1. **Frame the effort.** Who's affected, what's driving this (incidents, fear,
   opportunity), what already exists on paper, and who has to sign off. Name the three
   camps you're writing for — strict opponents, enthusiastic adopters, and the
   bewildered majority in between — and design for that middle.
2. **Working file.** Create and maintain the process state: stakeholder map, decision
   log (what was decided and why), open questions, and the draft-in-progress. This
   file *is* the point — it's what lets the effort survive being put down and picked
   back up.
3. **Draft in rounds.** Each session picks up exactly where the last ended. Sections
   get drafted as decisions land, not before. Use the augmentation spectrum as the
   backbone for the "what's allowed" sections so they're concrete, not vague.
4. **Reality checks.** Flag where the draft over-promises (enforcement nobody will do)
   or under-specifies (the gray areas people actually face day to day).

## Rules

- **Maintain state, don't restart.** Always reconcile with the working file first. The
  value is continuity; a fresh start every session is the failure mode this exists to
  prevent.
- **Decisions carry their reasons.** The decision log records *why*, so a later
  session (or a new stakeholder) doesn't reopen settled questions blindly.
- **Guidelines read like help, not threat.** Steer tone toward enabling the bewildered
  majority; threat-language drives use underground.
- **Honest about the limits.** It gets you a strong draft and a visible process.
  Adoption is people work — adoption meetings, buy-in, follow-through — and no skill
  does that part. Say so.
