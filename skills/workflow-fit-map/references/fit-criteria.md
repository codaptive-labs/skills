# Classifying a step

Capability is a precondition, not a verdict. Once a step is technically doable, the
decision turns on two questions: **what does a wrong answer cost, and would anyone
find out?**

## The two axes

Place each step:

| | Error is caught quickly | Error is invisible or surfaces late |
| --- | --- | --- |
| **Error is cheap** | Automate. Best candidates in the workflow. | Automate with a spot-check. Add sampling, not full review. |
| **Error is expensive** | Augment. AI drafts, a human who can actually catch it reviews. | Keep human. This is where practitioner judgment earns its cost. |

The bottom-right cell is the one that matters most, and it is the cell people
misclassify, because an expensive-and-invisible error does not feel risky at the
moment you automate it. It feels like nothing happened. That is the definition of the
problem.

## The four verdicts

**AUTOMATE** — the machine does it, and the human sees the result rather than the
work. Requires all three: the operation is reliably within current capability, errors
are cheap or caught fast, and the output is verifiable by someone downstream or by a
check you can specify. High volume strengthens the case; a step that runs four times a
year rarely repays the setup.

**AUGMENT** — the machine produces a first pass and a human decides. The real test is
not whether a human is nominally in the loop, it is **whether that human would
actually catch an error**. A reviewer who lacks the context, the time, or the
expertise to spot a plausible-looking mistake is not a control; they are a signature.
If review would be a formality, this is not augment — it is automate wearing a safety
label, and it should be classified honestly as automate with the failure mode stated,
or moved to keep human.

**KEEP HUMAN** — the step stays as it is. Reasons that justify it, any one of which is
sufficient:
- Someone's name is on the outcome and they carry the accountability for it.
- The step *is* a relationship — the value is that a person did it, and a recipient
  who learned it was automated would reasonably feel differently about it.
- It requires judgment under genuine ambiguity, where the right answer depends on
  facts not present in the inputs.
- It has a direct consequence for a specific person: a grade, a hire, a denial, a
  diagnosis, a sanction.
- The knowledge it draws on is tacit and undocumented — if the practitioner cannot
  fully say how they do it, a model cannot be given what it needs to do it either.
- A policy, regulation, contract, or accreditation requirement assigns it to a person.

**ELIMINATE** — the step should not exist. It survives a constraint that no longer
applies, duplicates a check performed elsewhere, produces an output nobody reads, or
exists because two roles used to be two people. Test it directly: **who consumes this,
and what would happen if it stopped?** If nobody can answer, that is the finding.
Automating a step like this is the most expensive outcome available, because it makes
it permanent and cheap enough that no one will ever revisit it.

## The middle band — hand it back

Some steps sit honestly between two verdicts. Return them as **YOUR CALL** rather than
picking. Genuine cases:

- Failure cost depends on a tolerance only the practitioner has (how bad is a slightly
  wrong first draft, really).
- The relationship question is real but not obvious — a routine notification versus a
  message the recipient would feel differently about receiving from a machine.
- Automating would work but would erode a skill the person needs to keep sharp for the
  steps that stay human.
- The setup cost is high relative to a volume that may or may not grow.

Write both sides well enough to decide from, name what the decision turns on, and
stop. Do not lean. A hedged verdict dressed as a recommendation is worse than an
honest handoff, and the person doing the work knows things the map does not.

## Row format

One row per step:

```
| # | Step | Verdict | Why | If it goes wrong | To get there |
```

- **Why** — argued from consequence and volume, not from difficulty.
- **If it goes wrong** — the concrete failure and who notices, when. Every row has
  one, including keep-human rows.
- **To get there** — what the change actually requires: an export that does not exist
  yet, a template, a check, a policy sign-off, a person to own the review. Steps whose
  prerequisite is "an integration nobody has built" are not near-term candidates no
  matter how good the fit, and saying so prevents a team from starting there.

Mark any row that depends on an unverified capability claim or an unanswered intake
question, so the reader knows which verdicts are provisional.

## Then sequence it

End with one or two changes to start with. Choose for low failure cost and visible
benefit, not for size of prize. A team's second AI change only happens if the first
one worked, and the fastest way to end an adoption effort is to open it with the
ambitious step that touches everything.
