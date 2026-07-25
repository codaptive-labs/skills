# The rules file — the artifact that makes this compound

One file per domain. It is what apply mode reads, what the next mining session extends, and
what turns a session's findings into something reusable — a delegation brief, source material
for a policy, onboarding material for whoever takes the decisions over.

## Where it lives

- **Claude Code / Cowork:** a `judgment-rules/` directory in the user's private notes, memory
  directory, or project — wherever that platform already keeps persistent context. Ask once,
  then stay consistent.
- **No persistence available:** output the file as the session's deliverable and tell the user
  plainly that apply mode will not work until the file is somewhere the assistant reads
  automatically.

Never place it in a shared or public location. It holds real fees, real salaries, and real
judgments about named people.

## Format

```markdown
# Judgment rules — <domain>

Last mined: <date> · Rulings on file: <n> · Re-ask held: <yes/no>

## Axes
- <axis> — <values seen> — <matters / does not matter / unprobed>

## Rules

### <short rule name>
**Rule:** <plain language, one or two sentences>
**Depends on:** <axes>
**Threshold:** <interval>, fixed by rulings #4 and #5
**Valid over:** <the range actually probed>
**Confidence:** <n rulings; narrowed or bracketed>
**Revised:** <date> — was <prior rule>; changed because <reason>

## Rulings (evidence — do not edit)
1. <date> · <case as presented> → **<ruling, verbatim>** <(re-ask of #n)>

## Open
- <axis or boundary not yet probed>

## Conflicts
- <the two rulings, what was tested, and how it resolved — or that it did not>
```

## Rules about the file

- **Rulings are append-only.** The rule is an interpretation and gets revised; the rulings
  are evidence and do not change. When a user reverses a ruling, append the new one and note
  that it supersedes — do not overwrite the old one. The reversal is itself information.
- **Every rule carries a date.** Rules go stale as circumstances change, and a two-year-old
  fee threshold applied to today's decision is worse than no rule.
- **Revisions keep their history.** One line: what it was, what it is, why it changed. This
  is the record that lets someone reconstruct how the user's thinking moved.
- **Verbatim means verbatim.** "Yeah, but only because it's Riverside" is a better record
  than "conditional yes," because the next session can test what "because it's Riverside"
  was doing.

## Drift

When apply mode logs a real decision that contradicts a stored rule, append it to the
rulings and flag the rule as drifting. On the third contradiction, stop flagging and say the
rule needs re-mining — either circumstances moved or the rule was never right. Do not
silently rewrite a rule from live decisions; a rule is revised with the user present, not
inferred behind them.

## Reuse

Say what the file is good for once it has content, because users do not always see it:

- a delegation brief for whoever is taking these decisions over
- the source text for a policy that previously had nobody able to state the rule
- the comparison document when two people mine the same domain separately and their rules
  need to be reconciled
- context other skills can act on — a fee rule feeds a proposal, an AI-use rule feeds policy
  language
