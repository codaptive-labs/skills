# Voice-Profile Intake

This skill personalizes itself to *you*. The whole point is that the feedback
sounds like it came from you, not from a generic assistant — because students can
tell the difference, and feedback in a stranger's voice lands as boilerplate they
skim past. This is the one-time setup that makes that possible, and the ongoing
process that keeps it sharp.

## Why samples, not adjectives

The intake asks for real examples of feedback you've written — not a description of
your style. This is deliberate. Nobody can accurately describe their own voice;
ask a good writer how they write and you get "clear, I guess, kind of direct,"
which is true of almost everyone and reproducible by no one. "Warm but rigorous"
tells the skill nothing it can act on. Your actual past comments, by contrast,
carry every pattern that makes your voice yours — sentence rhythm, how you open,
how you soften a hard note, the phrases you reach for — whether or not you could
name any of them. Show, don't tell.

## First run: collect the samples

Ask the user for **2–3 real samples of feedback they've written** on past student
work, plus the **rubric** for the current batch. Good samples are:

- **Genuinely theirs and unedited** — pulled from past LMS comments, margin notes
  on graded papers, end-of-paper summary comments, or feedback emails. The rougher
  and realer, the better; polished-for-display samples hide the actual voice.
- **Representative of the range** — ideally one on strong work, one on struggling
  work, so the profile learns how they praise *and* how they deliver a hard note,
  which are different muscles.
- **Anonymized** — remind the user to strip the student's name and identifying
  details from each sample before sharing. The voice lives in the phrasing, not
  the name.

If the user can only find one sample, work with it and offer more variants during
calibration (below) to compensate. Two or three is the sweet spot; more than four
rarely adds signal.

## What it listens for in your samples

Distill the samples into a written profile of *observable, reproducible* features
— not vibes. For feedback specifically, capture:

- **Register and warmth** — formal or conversational; how personal (do they use
  the student's name, "you," first person?); how much warmth and where it sits.
- **How they open** — straight to the substance, or a line of encouragement first?
- **How they deliver criticism** — blunt, cushioned, framed as a question, framed
  as a next step? This is the highest-signal feature; get it right and the rest
  follows.
- **Praise style** — specific and earned, or brief and moved-past? Do they name
  what worked, or mostly focus forward?
- **Characteristic moves and phrases** — recurring sentence starters, idioms,
  hedges ("I'd push you to…", "consider…", "one thing to watch…").
- **Length and density** — terse margin notes or fuller paragraphs; one big
  comment or many small anchored ones.
- **What they never do** — no sarcasm, never grades in a comment, never a compliment
  sandwich, whatever their anti-patterns are.

Write these as a short profile the skill can reload — concrete enough that a
stranger reading it could imitate the voice.

## Where your profile lives, so you only do this once

- **In Claude Code, Cowork, or another file-capable surface:** save the profile to
  a file the skill reads on every future run (for example, a `voice-profile.md` in
  the working folder, or the assistant's persistent memory). You do the intake
  once; after that it just loads.
- **In plain Claude.ai chat:** there's no place the skill can silently save to, so
  it hands you the finished profile as text and tells you to paste it into your
  Project (or a saved instruction) so it persists across chats. Same result, one
  manual paste.

Either way, the deal is the same: teach it your voice once, reuse it forever.

## Calibrating with variants

A profile built from a few samples is a strong first guess, not a finished
portrait. So early on — the first handful of drafts — the skill offers **two or
three variants** of a comment in slightly different registers (a warmer one, a more
clipped one, one that leads with the fix) and asks you to pick the one that sounds
most like you. Each pick is signal: it folds your choices back into the profile.
Once your picks stop changing anything, it stops offering variants and just drafts
in your settled voice.

## The profile sharpens as you go

Treat every edit you make to a draft as data. When you rewrite a phrase, that's
you correcting the model of your voice — note the pattern (you cut its hedging, you
made it warmer, you shortened it) and update the profile so the next batch needs
less correcting. A voice profile isn't set on day one; it converges. After a few
batches the first-pass drafts should need only a light touch.

## Privacy note

The samples and the work you feed in may contain student names and identifying
detail, which are education records. Anonymize samples before sharing, keep the
work inside an institutional account, and don't let the voice profile itself
accumulate real student information — it should capture *your* patterns, not any
particular student's data.
