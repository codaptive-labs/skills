# The whole-workflow test

Run this once, after the step map is built. It asks a different question than the map
does: not *which steps should change*, but *whether this shape should exist at all*.

Processes accumulate. A step gets added after an incident, a system gets replaced but
its workaround stays, two roles merge but the handoff between them survives, an
approval gets inserted and nobody ever removes it. What is left is a shape that no one
designed and everyone maintains. Optimizing it step by step is careful work aimed at
the wrong target, and it is what most AI-adoption effort produces.

## The five signals

Count them. The threshold is judgment, not arithmetic, but two strong signals or three
mild ones is worth raising.

**1. Steps whose only purpose is moving data between systems.** Exports, re-entry,
reformatting, reconciliation. If a meaningful share of the steps are transport rather
than work, the workflow is compensating for a missing connection, and the answer may
be the connection rather than faster transport.

**2. A constraint that no longer exists.** Someone can name why a step is there and
the reason is historical — a retired system, a person who left, a rule that changed, a
one-time incident. Ask "what were we working around?" for any step nobody can justify
in the present tense.

**3. The output nobody consumes.** A report, a log, a form, a summary that is produced
on schedule and read by no one. Follow each output to a named consumer. Multiple
orphans mean the workflow's purpose has drifted from its structure.

**4. Approval chains longer than the decision warrants.** Three sign-offs on something
that has never been rejected. The chain is usually a residue of a past failure, and it
costs more in delay than it prevents.

**5. The batch shape.** The process is built around collecting things and processing
them periodically because that was the only economical way when it was designed. If
the constraint that forced batching is gone, the whole cadence may be the thing to
change — and per-item handling can make several downstream steps disappear rather than
improve.

## How to report it

Keep it separate from the step map and keep it short. The map is what the user asked
for; this is an observation offered alongside it.

```
WORTH RETHINKING AS A WHOLE
<what the shape appears to be compensating for, in two or three sentences>
Signals: <the ones that fired, one clause each>
What this would mean: <what a rebuilt version would look like — one short paragraph>
Why it is still worth doing the step map: <the changes that pay off either way>
```

That last line is not a courtesy. Most teams cannot rebuild a process this quarter,
and the step-level changes are what they can actually act on. Raising the bigger
question should widen their options, not invalidate the work they asked for.

## Restraint

- **Report it only when it fires, or when the user asks.** Run the test every time;
  mention it selectively. A skill that suggests re-engineering on every run is not
  making a judgment, it has a default, and users learn to skip the section.
- **Never let it replace the step map.** Deliver what was asked for in full. The
  rethink goes after it, clearly marked as a separate observation.
- **No re-engineering plan unless asked.** Name the shape and what it appears to be
  working around. Designing the replacement is a different engagement and requires
  people this skill has not talked to.
- **Respect what you cannot see.** A step that looks like pure overhead may exist for
  an audit finding, an accreditation requirement, or a labor agreement nobody mentioned.
  Phrase the observation as a question to verify, not a conclusion — "this looks like it
  may be working around X; is that still required?"
