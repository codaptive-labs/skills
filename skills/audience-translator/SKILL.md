---
name: audience-translator
description: Rewrites a piece of writing for a different audience without losing what made it true. It reads the source first — what it conveys, at what register, assuming what prior knowledge — separates the difficulty that is the content from the difficulty that is only packaging, then rebuilds it for the audience you name, moving only the dimensions that need to move. Works in every direction: expert to newcomer, technical to general, casual to formal, dense to plain, and across levels of English proficiency. Returns the adaptation plus a change log of what moved, what could not survive the move, and what the new format needs. Use to adapt, rewrite, pitch, translate, or re-level any writing for a specific reader. Trigger phrases include "rewrite this for", "make this accessible to", "explain this to a non-technical audience", "adapt this for students", "turn this into a proposal", "simplify this without dumbing it down", "our ESL students can't follow this", "this is too technical for".
license: MIT
---

# Audience Translator

Most writing fails its reader for a reason the writer cannot see: it was written
for whoever the author was thinking about at the time, which is usually a version
of themselves. Adapting it is ordinary, constant work — the expert's brief that
the board won't follow, the assignment sheet written in the vocabulary of someone
who already took the course, the Slack thread that has to become a proposal by
Friday.

The reflex is to "simplify," and simplifying is exactly what ruins it. Text that
has been flattened is not easier, it is emptier: the precision goes, the claim
becomes false with nothing marking the change, and the reader can tell they are
being handled. What
actually works is translation — hold the meaning fixed, change the form. That
demands knowing which parts of the difficulty *are* the meaning.

## When to run it

On-demand, whenever a piece of writing has to reach someone other than the reader
it was built for. It runs in every direction — down in expertise, up in formality,
across in genre — and often several at once.

## Where it works

Anywhere, including plain chat. Paste the source in and name the audience. If the
material lives in a file and the surface can open files, point it there instead.

## The procedure

Five steps. `references/audience-dimensions.md` carries the dial model that step 1
and step 3 depend on; `references/essential-difficulty-test.md` carries step 2;
`references/genre-patterns.md` carries the structural requirements for step 4.
Read them before the first run.

1. **Read the source as it stands.** Before changing anything, say what it
   currently is: what it conveys, at what register, assuming what prior knowledge,
   in what genre — and who it appears to have been written for. Name that implicit
   audience out loud. It is frequently the most useful sentence in the whole
   output, because a great many drafts were never aimed at anyone in particular,
   and the author has never once been told so.

2. **Separate essential difficulty from incidental difficulty.** The core move.
   Some of what makes this hard is the content itself — a concept that is
   genuinely difficult, a term with no true synonym, a distinction that collapses
   if blurred. The rest is packaging: jargon serving as a membership badge,
   sentences long for no reason, an idiom, a reference that assumes a particular
   childhood, a register inherited from the genre rather than chosen. Apply the
   test in `references/essential-difficulty-test.md` and mark every piece of difficulty as
   one or the other. Incidental difficulty is free to remove. Essential
   difficulty is the thing you are trying to deliver intact.

3. **Pin the target audience.** "Non-technical" is not an audience. Get the
   dimensions in `references/audience-dimensions.md` specified well enough to write
   against — what they already know, why they are reading, what they are expected
   to do about it, the relationship in play, and any constraint on the language
   itself. Ask only for what you cannot infer, and never ask more than three
   questions before producing something.

4. **Move only the dials that need to move.** Compare source to target across the
   six dimensions and change those, deliberately, leaving the rest alone. This is
   what separates translation from flattening: a Slack thread becoming a proposal
   moves register and genre while holding expertise exactly where it was, and a
   specialist paper for first-year students drops expertise and density while
   often raising formality, not lowering it. If the genre is changing, use
   `references/genre-patterns.md` — the new form has structural requirements the
   source was never obliged to meet.

5. **Return the adaptation, then the change log.** The rewritten piece first, in
   full, ready to use. Then a short accounting: which dials moved, what precision
   was traded and where, what could not survive the move, and what the new genre
   requires that the source does not contain.

## What it hands back

The adapted piece, then this:

```
DIALS MOVED
<dimension>: <from> → <to>   (one line each, only for dials that moved)

TRADED
<a claim or distinction that is now less precise, and what it cost>

COULD NOT SURVIVE
<anything essential that this audience genuinely cannot receive in this format>

NEEDS YOU
<what the new genre requires that the source never had — as a question, never filled in>
```

Keep the log short. If nothing was traded and nothing is missing, say so in a line
rather than manufacturing entries.

## Rules

- **Never strip essential difficulty.** If the requested audience cannot receive
  a concept that the piece exists to deliver, say that plainly instead of shipping
  a version that is easier and wrong. Offer the honest alternative: a longer
  build-up, a different format, or a narrower claim.
- **Simpler is not a single knob.** Six dimensions move independently. Collapsing
  them is what produces prose that is simultaneously condescending and still
  incomprehensible — short sentences full of unexplained jargon, or plain
  vocabulary wrapped in a structure only a specialist can parse.
- **Gaps become questions, never filler.** A conversation turned into a proposal is
  missing a scope, a timeline, and a number. Ask for them. Do not invent them, and
  do not paper over them with language that sounds like it contains them.
- **Say what precision cost.** Every real adaptation trades something. Naming the
  trade lets the author overrule it; hiding it means they ship a weakened claim
  without knowing.
- **The author's intent governs, not the audience's comfort.** Adapting for a
  reader means making the thing reachable, not making it agreeable. If the source
  says something the audience will not like, it still says it afterward.
