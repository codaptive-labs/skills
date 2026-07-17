---
name: survey-synthesizer
description: Turns a pile of open-ended survey responses into themes with the respondents' own voices attached. It clusters what people actually said (not what the question hoped they'd say), keeps representative verbatim quotes on every theme, flags dissent and minority views instead of averaging them away, and is honest about what the sample can and can't support. In a file-capable tool it runs on a whole folder of exports at once — a semester of course evals in a single pass. Use to analyze open-ended responses, synthesize survey comments, or find themes in feedback. Trigger phrases include "analyze these survey responses", "synthesize this feedback", "themes in these comments", "summarize open-ended responses", "what are people saying in these evals".
license: MIT
---

# Survey Synthesizer

Open-ended responses are where the real signal lives and where analysis goes to die —
three hundred comments skimmed once, quoted twice, and reduced to whatever confirmed
the reader's prior. This clusters what respondents actually said, keeps verbatim
voices attached to every theme, and is honest about what the data can't support.

## When to run it

On-demand. Point it at a set of responses — pasted, attached, or (in a file-capable
tool) a whole folder of exports.

## Where it works

Works anywhere. In Cowork or Claude Code it's a batch tool: drop a folder of exports
and synthesize a semester of evals in one pass. In plain chat, paste or attach the
responses.

## The procedure

The method is in `references/synthesis-protocol.md`; the output shape is in
`references/theme-table-template.md`; report formats are in
`references/reporting-patterns.md`.

1. **Point it at the responses.** Paste, attach, or hand it a folder.
2. **Theme extraction.** Cluster what respondents actually said — themes from the data
   up, not from the question down. Let the categories emerge instead of forcing
   responses into pre-decided buckets.
3. **Representative voices.** Each theme carries verbatim quotes chosen for range, not
   just the most quotable. Minority and dissenting views get flagged, not smoothed
   into the average.
4. **Quality read.** Sample-size honesty, non-response notes, and a plain statement of
   what this data cannot tell you.

## Rules

- **Anonymize before you start.** The skill reminds the user; strip identifying
  details, and use institutional accounts for institutional data.
- **Themes from the data up.** Don't impose the survey's own framing on the answers.
  The value is hearing what respondents raised, including what the question didn't
  ask.
- **Keep the voices.** Every theme keeps real quotes attached. Synthesis that loses
  the verbatim texture loses the point.
- **Don't average away dissent.** A strong minority view is a finding, not noise.
  Surface it with its prevalence.
- **Honest about limits.** Small samples, self-selection, and non-response get stated,
  not hidden behind confident-sounding themes.
