---
name: judgment-miner
description: Extracts the decision rules you follow but have never written down — by making you rule on real cases instead of asking what your criteria are. In mine mode it builds cases from your own past decisions with exactly one thing changed, walks that one variable until your answer flips to find where your line actually sits, then reports the rule you are applying, the threshold, and any case where you contradicted yourself. In apply mode it stays quiet until a live decision touches a rule you have already established, surfaces that rule and the nearest cases you ruled on, and speaks up when a decision falls outside your established line. Use when writing a policy, delegating judgment, training someone, or trying to explain a call you made on instinct. Trigger phrases include "what did I do last time", "have I done this before", "should we make an exception for", "how did I handle the last one of these", "what is my rule for", "why did I decide that", "help me write the criteria", "I know it when I see it".
license: MIT
---

# Judgment Miner

Ask an experienced person how they decide something and you get "it depends" and "you
develop a feel for it." Both are true and neither is usable. It is why the policy draft
stalls, why the new hire keeps escalating decisions you would make in four seconds, and
why you cannot explain the call you made last Tuesday beyond saying it felt right. The
knowledge is real. It is stored as a set of rulings, not as a rule.

So this skill does not interview you about your criteria. It puts cases in front of you
and makes you rule, then reads the boundary your rulings trace out.

## When to run it

- A policy, rubric, or set of criteria has to be written and nobody can articulate the rule.
- Someone is taking over decisions you have been making by instinct.
- You want to know whether you are actually consistent, or only feel consistent.
- A live decision has come up and you want to know what you did with the last one like it.

## Where it works

Needs somewhere to keep the rules file across sessions — Claude Code or Cowork, where it
can read and write files, and read whatever the platform legitimately knows about the
user's work (memory files, project context, a notes vault, prior conversations). On a
surface without persistence, mine mode still works in full and hands the rules file back
as output for the user to store themselves; apply mode does not, because it depends on the
file being there without being pasted in.

## Mode 1 — Mine

### 1. Find the anchors

Before generating anything, harvest **real past decisions** in the domain from whatever
context is available: notes, project docs, decision records, past engagements, prior
conversations. Each one you find is an anchor — a case the user already ruled on, with the
answer attached.

If the context holds nothing usable, do not invent a scenario. Ask for exactly one real
decision the user made recently and what they decided, and say why you are asking. One
anchor is enough to start. See `references/dimension-maps.md` for the bundled starter maps
covering the four most common domains, and for how to derive axes in a domain that is not
one of them.

### 2. Probe the boundary

Every case is a real anchor with **exactly one variable changed**. Not a fresh
hypothetical — a case the user recognizes, moved one step along one axis. Walk that axis
until the ruling flips, then narrow around the flip until the threshold is located.

The full procedure, including what makes a probe worthless, the blind re-ask, and how to
handle "it depends on X" answers, is in `references/case-construction.md`.

Take rulings fast and short. Do not explain, argue, or hint at a pattern while rulings are
still being collected.

### 3. Stop at 15–20 rulings

Judgment degrades after that and late rulings get careless, which corrupts the analysis
that runs on them. When the cap is reached, stop and analyze what you have. If axes remain
unexplored, write them into the rules file as open and resume in a later session.

### 4. Infer the rule

Only now, with the rulings closed, work out what rule they trace. Report the rule in plain
language, the axes it depends on, the thresholds located, and the rulings that fix each
boundary.

Where two rulings conflict, test the **hidden variable** reading before calling it a
contradiction — an unnamed factor doing real work is the more common and more interesting
finding. The method for telling the two apart is in `references/rule-inference.md`.

### 5. Write it down

Persist to the rules file per `references/rules-file.md`. Record the user's rulings in
their own words, dated, alongside the inferred rule — the rulings are the ground truth
that later sessions test against, and a paraphrase destroys them.

## Mode 2 — Apply

Fires when a live decision in a mined domain is on the table. It does not open a session
and does not ask for rulings.

1. **Silent when there is nothing to apply.** No rules for this domain, no comment. An
   announcement that it has nothing to offer is noise, and noise gets it ignored.
2. **Inside an established rule → one line.** State the rule, the two nearest cases and
   how they were ruled, and stop. Do not re-derive anything.
3. **Outside the established line → speak up.** A new axis never ruled on, or a value past
   a known threshold, means a decision is about to be made with no rule behind it. Say so,
   name which axis is off the map, and offer to capture the ruling carefully.
4. **Contradicts a stored rule → raise it after the fact, not during.** Either the rule is
   stale and wants revising or the call was inconsistent. Both are worth knowing; neither
   is worth interrupting a decision to say.
5. **Capture the real ruling either way.** A decision with consequences attached is a
   better precedent than any hypothetical. Log it as an anchor for the next mining session.

## The pivot it is built on

Expertise cannot be extracted by asking for it, because the person does not hold it in that
form. It has to be reconstructed from rulings — and a ruling is only informative if the
case differs from a known case in exactly one respect. Change five things and the answer
tells you nothing about which of the five mattered. One-variable perturbation off a real
anchor is the entire mechanism; everything else here protects it.

## Rules

- **Never fabricate a precedent.** No real anchor means ask for one. A case the user does
  not recognize produces a ruling about nothing, and the whole session inherits the error.
- **Withhold the inferred rule until rulings are locked.** Name a pattern at case six and
  the remaining rulings become a defense of it rather than honest answers.
- **Never rule on the user's behalf**, and never infer a ruling from silence or a shrug.
  This skill generates cases and reads boundaries; the judgment is the user's.
- **Record rulings verbatim.** The inferred rule is an interpretation and may be revised.
  The rulings are evidence and are not edited.
- **Test the hidden-variable reading first** when rulings conflict. Telling someone they
  are inconsistent when they are actually tracking a factor they never named is the worst
  failure available to this skill.
- **Respect the cap.** Stop at 15–20 rulings and resume later; do not push for completeness
  in one sitting.
- **Extract, do not legislate.** A rule found here is a description of how the user has
  been deciding. Whether it becomes policy is their call, and the distinction must survive
  into the output.
- **Keep the file where the material belongs.** Precedents carry real names, salaries, fees,
  and personnel judgments. Store the rules file in the user's private location, anonymize
  people in domains that involve them, and never move it into a shared or public space.
