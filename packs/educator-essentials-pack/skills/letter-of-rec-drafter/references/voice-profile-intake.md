# Voice-Profile Intake

This skill personalizes itself to *you*. The whole point is that the letter sounds
like it came from you, not from a generic assistant — because admissions readers
and hiring committees read hundreds of letters and can feel a templated one
instantly, and a letter in a stranger's voice quietly weakens the endorsement it's
supposed to carry. This is the one-time setup that makes a voice-true letter
possible, and the ongoing process that keeps it sharp.

## Why samples, not adjectives

The intake asks for real examples of letters you've written — not a description of
your style. This is deliberate. Nobody can accurately describe their own voice;
ask a strong writer how they write and you get "formal but personal, I suppose,"
which is true of almost every recommender and reproducible by no one. "Warm and
credible" tells the skill nothing it can act on. Your actual past letters, by
contrast, carry every pattern that makes your voice yours — how you open, how you
calibrate a superlative, the rhythm of your endorsement, the phrases you reach for
— whether or not you could name any of them. Show, don't tell.

## First run: collect the samples

Ask the user for **1–2 past letters they've written and are genuinely proud of** —
ideally ones that landed well (the candidate got in, got the job, got the award).
Good samples are:

- **Genuinely theirs and real** — actual letters they sent, not templates or
  examples pulled from the web. A real letter carries the actual voice; a template
  carries nobody's.
- **Ones they'd want to sound like again** — the letter they felt captured the
  person and did its job, not a rushed one they're indifferent to. The samples set
  the target, so aim high.
- **Anonymized if shared beyond the drafting** — the sample is being used for its
  *voice*, not its subject; remind the user they can redact the past candidate's
  name and identifying details, since none of that is what the profile needs.

One strong letter is enough to start; a second helps the profile separate your
durable voice from the specifics of a single candidate. More than two rarely adds
signal.

## What it listens for in your samples

Distill the samples into a written profile of *observable, reproducible* features
— not vibes. For recommendation letters specifically, capture:

- **Register and formality** — how formal the salutation and prose; how personal
  and warm within that formality; first person, and how present the writer is in
  the letter.
- **How they open** — do they state relationship and capacity up front (who they
  are, how long they've known the person, in what role)? What's their characteristic
  first move?
- **How they calibrate praise** — measured and evidence-led, or emphatic? How they
  signal *degree* of endorsement (do they rank, compare to past students, reserve
  their strongest language for a reason?).
- **How they build a claim** — do they lead with the trait and then the anecdote,
  or tell the story and let the trait emerge? This is a high-signal structural
  habit.
- **Characteristic phrases and closings** — recurring endorsement language, how
  they phrase the final "I recommend without reservation" beat, sign-off style.
- **Length and density** — tight and punchy or fuller and narrative; how many
  anecdotes they typically carry.
- **What they never do** — no empty superlatives, no clichés they avoid, no
  over-claiming — whatever their anti-patterns are.

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

Either way, the deal is the same: teach it your voice once, reuse it every season.

## Calibrating with variants

A profile built from a letter or two is a strong first guess, not a finished
portrait. So early on — the first letter or two you draft with it — the skill
offers **two or three variants** of a passage in slightly different registers (a
warmer one, a more measured one, one that leads with the anecdote) and asks you to
pick the one that sounds most like you. Each pick is signal: it folds your choices
back into the profile. Once your picks stop changing anything, it stops offering
variants and just drafts in your settled voice.

## The profile sharpens as you go

Treat every edit you make to a draft as data. When you rewrite a phrase, that's you
correcting the model of your voice — note the pattern (you made the endorsement
stronger, you cut a superlative, you added the specific number) and update the
profile so the next letter needs less correcting. A voice profile isn't set on day
one; it converges. After a few letters the first-pass drafts should need only a
light touch.

## Privacy note

Your samples and the material you feed in contain real people's names and details.
The profile itself should capture *your* voice, not any past candidate's
information — redact names from samples where you can, and don't let the saved
profile accumulate a roster of the people you've written about. The voice is
yours; the specifics belong to each letter, not the profile.
