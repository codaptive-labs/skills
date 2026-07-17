---
name: rubric-builder
description: Turns rubric-writing from a blank-page chore into a short interview with a quality gate at the end — and hands back a formatted rubric, not a wall of chat text. It asks what the task is and what mastery looks like, drafts weighted criteria against bundled exemplar rubrics, runs a quality pass (observable criteria, no double-barreled rows, honest weightings), and produces both an instructor rubric and a plain student-facing version. Use when building a rubric, grading criteria, or a scoring guide, or to quality-check a rubric you already have. Trigger phrases include "build a rubric", "make a rubric for this assignment", "grading criteria", "scoring guide", "check my rubric".
license: MIT
---

# Rubric Builder

Everyone needs rubrics; almost nobody enjoys writing them; and rubric quality
quietly decides whether grading is defensible and whether feedback is useful. This
turns rubric-writing from a blank-page problem into a short interview with a quality
gate at the end — and it comes out formatted, not as a wall of chat text you have to
reshape yourself.

## When to run it

On-demand, from either direction: build a new rubric from an assignment, or hand it
an existing rubric to run the quality pass as a review.

## Where it works

Works anywhere, including plain chat. In Claude.ai the finished rubric arrives as a
downloadable document rather than chat text.

## The procedure

Exemplars to draft against are in `references/exemplar-rubrics.md`; the quality gate
is in `references/rubric-quality-checklist.md`; the output shapes are in
`references/output-templates.md`.

1. **Interview.** A few focused questions: what's the task, what does mastery look
   like, what do weak submissions typically get wrong, how many levels do you grade
   in, and does anything carry more weight than the rest.
2. **Draft against exemplars.** Draft the criteria with reference to the bundled
   exemplar rubrics (analytic, holistic, single-point), so structure and weighting
   start from something sound instead of generic.
3. **Quality pass.** Check the draft against the rubric-quality checklist before the
   instructor ever sees it — observable criteria, no double-barreled rows, honest and
   transparent weightings, level descriptors that actually differ.
4. **Two outputs.** A formatted rubric document for the instructor, and a plainer
   student-facing version — the same criteria, minus the jargon, so students know
   what they're being asked for.

## Rules

- **Criteria must be observable.** If a rater can't point to what earns a level, the
  row isn't ready. Rewrite vague descriptors ("shows understanding") into visible
  evidence.
- **One idea per row.** Split double-barreled criteria ("clear and well-organized")
  so a submission can't be both strong and weak in the same box.
- **Weight honestly.** The weightings should reflect what the assessment actually
  values; surface it if the stated weights don't match the stated goal.
- **Share vocabulary with its siblings.** Criteria language should line up with the
  Assessment Redesigner and the AI Policy Writer, and the finished rubric feeds the
  Feedback First-Pass skill directly.
