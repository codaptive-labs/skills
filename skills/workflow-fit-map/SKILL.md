---
name: workflow-fit-map
description: Maps a real work process step by step and marks each step automate, augment, keep human, or eliminate — with the reason, the failure mode, and what it would take to get there. It asks for the detail it is missing before analyzing rather than guessing, checks what AI can currently do for the specific operations involved instead of working from assumption, and hands genuinely borderline steps back to you as decisions rather than deciding them. It also steps back once to ask whether the workflow itself should be rebuilt instead of optimized. Use when a team has been told to "use AI" with no map, when deciding where a tool would actually help, when an automation attempt failed, or when documenting a process for handoff. Trigger phrases include "where could AI help in this process", "should we automate this", "map this workflow", "what parts of my job could AI do", "we were told to use AI and don't know where to start", "is this worth automating".
license: MIT
---

# Workflow Fit Map

"Use AI in your work" arrives as a mandate and lands as a shrug. Nobody objects to
it; nobody knows where to start. So teams do one of two things. They automate the
step that was easiest to automate — usually a step that was already cheap, where
mistakes are now harder to catch. Or they do nothing, wait for the mandate to pass,
and it does.

The judgment that is actually needed is unglamorous and specific: for each step in a
real process, what happens if a machine does it, what happens if it does it wrong,
and would anyone notice. That question has different answers for the eleven steps of
one workflow, and the answers do not line up with which steps look impressive to
automate. The step that seems most obviously mechanical is frequently the one where a
practitioner's judgment is doing invisible work, and the step nobody mentions is
often pure inherited overhead that should not exist at all.

## When to run it

When a team or an individual has been told to adopt AI without a map. When you are
deciding whether a tool is worth buying for a specific process. After an automation
attempt did not stick and nobody is sure why. When documenting a process for handoff,
where the same step-level clarity is what you need anyway.

It works on any process with discrete steps and a human doing them — course prep,
grant administration, onboarding, intake, review cycles, reporting, support triage,
content production, hiring.

## Where it works

Anywhere, including plain chat. It runs better where it can read files (a process
document, an SOP, a form) and where it can search the web, which it uses to check
what tools can currently do rather than working from what it remembers. Without web
access it still works; it just marks its capability claims as unverified.

## The procedure

Six steps. `references/intake-protocol.md` carries the questioning method for step 2,
`references/fit-criteria.md` the classification model for step 4, and
`references/rethink-test.md` the whole-workflow check for step 5.

1. **Get the workflow on the table and assess what you have.** Take whatever the user
   gives you — a process document, an SOP, a screenshot of a form, or three sentences
   in chat. Then say plainly how complete it is. Reconstruct the steps as you
   understand them and show that list back. Users are consistently surprised by their
   own process written down, and corrections at this stage are cheap.

2. **Ask for what is missing, and no more.** Follow `references/intake-protocol.md`.
   The question budget scales to the gap: a detailed SOP may need two clarifications,
   three sentences may need eight. Batch the questions, ask them once, and never
   interrogate — if the user does not know the answer to something, mark it unknown
   and analyze around it rather than stalling. Some steps in every real workflow are
   undocumented because nobody has ever had to say them out loud, and those are
   usually the interesting ones.

3. **Check what is actually possible right now.** For each operation the workflow
   involves — reading scanned forms, reconciling two lists, drafting from a template,
   classifying free text, pulling from a system with no API — check current capability
   rather than assuming. This field moves fast enough that reasoning from memory
   produces recommendations that are wrong in both directions: refusing things that
   became routine a year ago, and promising things that still do not work. Where you
   cannot verify, say the claim is unverified.

4. **Classify every step.** Apply `references/fit-criteria.md`. Four verdicts —
   **automate**, **augment**, **keep human**, **eliminate** — each with the reason, the
   failure mode if it goes wrong, and what it would take to get there. Steps that sit
   genuinely between two verdicts are not forced. They are returned as **your call**,
   with both sides stated well enough to decide from. That is not the skill hedging; a
   borderline step usually turns on something only the person doing the work knows —
   their tolerance for a certain error, whether anyone downstream would catch it, what
   their name is on.

5. **Step back once and test the whole workflow.** Apply `references/rethink-test.md`.
   Long-lived processes accumulate steps that exist because of a constraint that has
   since disappeared — a system that was retired, an approval added after one incident
   in 2015, a handoff between two roles that are now the same person. Optimizing those
   steps individually is careful work in service of a shape that should not exist. If
   the test triggers, say so directly and separately from the step map. Run this step
   always, and report it only when it fires or when the user asks.

6. **Deliver the map, then the sequence.** The step table first. Then what to do
   first — which one or two changes to make now, chosen for low failure cost and
   visible benefit, because a team's second AI change only happens if the first one
   worked.

## The pivot it is built on

**The question is not what AI can do. It is what happens when it does it wrong, and
whether you would find out.**

"Can this be automated?" ranks steps by difficulty, which is the wrong axis. Two steps
can be equally automatable and belong in opposite categories: one produces an error
that surfaces immediately and costs an hour, the other produces an error that looks
correct, moves downstream, and surfaces in an audit two years later. Difficulty says
they are the same. Failure cost says one is a candidate and the other is not.

So every verdict in this map is argued from consequence, not capability. Capability
is a precondition — it just does not decide anything on its own.

## Rules

- **Ask before analyzing, but only once.** A map built on a workflow you guessed at is
  detailed and wrong, and detail makes wrong recommendations more persuasive. Get what
  you need, then proceed on what you have.
- **Every verdict carries its failure mode.** A recommendation without a named
  consequence is an opinion. If you cannot say what goes wrong when this step fails,
  you do not understand the step well enough to classify it.
- **Borderline steps go back to the human.** Do not manufacture a verdict to make the
  table look decisive. Name the tradeoff and hand it over — the autonomy is the point,
  and the person doing the work has information you do not.
- **"Eliminate" is a real verdict and must stay on the table.** The most expensive
  mistake in this work is automating a step that should not exist, because it makes
  the step permanent.
- **Keep human is a finding, not a failure.** A map where everything is automatable is
  a map that has not understood the work. Say plainly which steps are where the
  practitioner's judgment lives, and protect them.
- **Verify capability claims or mark them unverified.** Never state that a tool can or
  cannot do something specific on the strength of recall. This field moves too fast for
  that, and a confident wrong claim here sends a team down a month-long path.
