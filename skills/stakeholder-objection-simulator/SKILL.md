---
name: stakeholder-objection-simulator
description: Pressure-tests a plan, policy, proposal, or announcement by simulating how each group that has a say in it would actually react. It builds a roster of the stakeholders it has to survive, profiles each one (what they are accountable for, what they are measured on, their risk tolerance, who they answer to), then runs every persona in an isolated context so no one is influenced by another's reaction. Returns, per stakeholder, the objection they would voice out loud, the interest actually driving it, their verdict, and what would move them — then which objections must be answered before you go, and where two stakeholders want incompatible things. Use before circulating a proposal, rollout plan, policy draft, budget request, reorg, or all-staff announcement. Trigger phrases include "how will this land", "who is going to push back on this", "what objections should I expect", "pressure-test this proposal", "before I take this to the committee", "how do I get buy-in".
license: MIT
---

# Stakeholder Objection Simulator

The proposal is good. You have been over it for a week, the logic holds, and you
can defend every line. What you cannot see from inside it is how it reads on the
six desks it has to cross before it becomes real — the dean who is measured on
something you never mentioned, the IT director who will inherit the support load,
the department that will read one paragraph as a threat to its headcount. Good
work dies at those desks constantly, and almost never because it was wrong.

Asking your AI assistant "what objections might I face?" produces a tidy list of
generic risks, because that assistant has spent the last hour helping you build
this and is invested in it. It is the worst-placed reviewer in the room. The fix
is not a better question. It is putting the proposal in front of people who have
never seen it, one at a time, each carrying their own interests and nothing of
yours.

## When to run it

Before the thing leaves your hands: a proposal about to be circulated, a policy
draft going to committee, a rollout plan, a budget request, a reorg, a pricing
change, an all-staff announcement. Run it while there is still time to change the
proposal — a week before the meeting is useful, the morning of is theater.

It is also worth running when a proposal already came back bruised and you do not
understand why. Simulating the room afterward often names the interest nobody
said out loud.

## Where it works

It needs a surface that can run subagents — Claude Code or Cowork. The isolation
between personas is the whole mechanism, and it depends on each one getting its
own context. In plain chat the personas share a window and contaminate each other,
which produces a smoothed consensus that reads plausible and is worth much less.

## The procedure

Five steps. `references/stakeholder-mapping.md` carries the roster method for step
2, `references/persona-construction.md` the profile spec for step 3, and
`references/synthesis-format.md` the output shape for step 5. Read each when you
reach it.

1. **Establish what is actually being proposed.** Not the summary — the substance.
   What decision is being asked for, what changes for whom, what it costs, who
   does new work as a result, and what it takes away from someone without saying
   so. State
   this back in five lines before going further. Half of all objections attach to
   a consequence the author never wrote down, and this step is where those
   surface.

2. **Build the stakeholder roster, and show it to the user.** Work
   `references/stakeholder-mapping.md` to identify who is exposed to this and who
   has a say — including the groups with no formal authority who can still stall
   it indefinitely. Present the roster with a one-line reason for each before
   simulating anything. This is the user's steering moment: they know that Legal
   has to sign off, that the real power sits with a committee chair, that the
   union will read clause four a particular way. Take the correction. Six to eight
   personas is a full simulation; more than ten produces noise.

3. **Construct each persona in depth.** A role label is not a persona and will
   generate a role-shaped objection nobody has ever actually voiced. Build each
   one to the spec in `references/persona-construction.md`: what they are
   accountable for, what they are measured on, who they answer to, what they are
   protecting, their risk tolerance, their history with initiatives like this one.
   Tag every attribute **KNOWN** (the user told you, or it is public and verified)
   or **INFERRED** (you reasoned to it from the role). That tag travels with the
   objection and matters in step 5.

4. **Run each persona in its own context, in parallel.** Spawn one subagent per
   stakeholder, all at once. Each receives its persona, the proposal as the
   stakeholder would actually encounter it, and nothing else — no other persona's
   reaction, no note about what you are hoping for, no framing from the
   conversation that produced the proposal. Each returns a sealed reaction in the
   shape given in `references/synthesis-format.md`. Do not let a persona read
   another's output, and do not run them sequentially in one context to save time;
   sequential passes converge, and convergence is the failure mode this skill
   exists to prevent.

5. **Synthesize the sealed reactions.** Only after all of them are back. Follow
   `references/synthesis-format.md`: the per-stakeholder cards first, then the
   cross-cutting read — the objections that must be answered before this moves,
   the places where two stakeholders want genuinely incompatible things, the cheap
   fixes that neutralize several objections at once, and who in the room is
   already an ally. Mark anything resting only on INFERRED attributes as a
   question to verify rather than a finding to act on.

## The pivot it is built on

**The objection someone voices is rarely the reason they object.** IT says the
security review takes twelve weeks; the interest underneath is that they were not
consulted and will own every support ticket this generates. The department chair
raises a pedagogical concern; the interest is a headcount conversation happening
next month that you know nothing about. Address a stated objection and it is
replaced by another one. Address the interest and the objections stop.

So every persona reports two things — what they would say in the meeting, and what
is actually driving it — and the synthesis is organized around the second. That
distinction is also why the personas have to run separately: an interest is
something a person holds on their own, and it deforms the moment they can see what
everybody else in the room already said.

## Rules

- **Simulate roles and organizations, not private individuals.** Research an
  institution's published priorities, a public office's stated mandate, a
  published strategic plan. Do not go looking for information about a named
  private person, and do not build a psychological profile of a colleague. If the
  user supplies context about someone they work with, use it as they gave it and
  keep it in the working output — not in anything the skill writes to a file.
- **Sealed before synthesized.** Every reaction is collected before any is read
  against another. If one subagent fails, re-run that persona alone rather than
  letting the rest proceed short.
- **Steelman, never strawman.** Each persona gets the strongest honest version of
  its position. A simulation that generates objections you can easily dismiss has
  told you nothing and will cost you the meeting.
- **Distinguish what you know from what you inferred.** An objection built on an
  invented attribute is a guess wearing a name badge. Tag it, and say so in the
  synthesis.
- **Report support as readily as resistance.** If a stakeholder would back this,
  that is a finding — it names your ally and the argument that reaches them. A run
  that returns only objections is measuring the skill's bias, not the room's.
- **No verdict on the proposal itself.** This returns how the room reacts, not
  whether the plan is right. The decision stays with the user, and the user may
  well decide to proceed straight through an objection they now understand.
