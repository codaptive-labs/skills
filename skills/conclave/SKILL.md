---
name: conclave
description: Convenes a panel of analysts who examine your idea independently and return real recommendations. Each runs in its own isolated context, seeing everything you have but none of the other analysts' work and no hint of which way you are leaning, and returns a verdict, its confidence, and what would change its mind. Ships with eight standing seats, each a fully specified stance rather than a job title, and adds domain experts the question calls for. The report is built on what only separation produces: where independent analysts converged, where they genuinely conflict and whether the conflict is factual or a value, and what exactly one of them saw. Use before committing to a direction, when choosing between approaches, or when an idea feels right and you cannot say why. Trigger phrases include "is this the right approach", "help me decide between", "convene the conclave", "convene the panel", "analyze this from every angle", "I need a second opinion", "what am I not seeing here", "stress-test this strategy".
license: MIT
---

# Conclave

You have been living inside this idea for a week. You know its strongest version, you have
answered the obvious objections, and you can no longer tell whether it is good or whether
you are simply used to it. So you ask your AI assistant, and it tells you the idea is
promising with a few considerations to keep in mind. Of course it does. It helped you build
this. It has read every argument you made for the idea and none of the ones you never made.

Asking that same assistant to "consider this from multiple perspectives" does not fix the
problem, it conceals it. Six voices in one window, each able to see what the other five just
said, converge politely near the position you walked in with. It reads like a panel and
behaves like a mirror. The fix is analysts who cannot hear each other.

A conclave is an assembly sealed off from outside influence that deliberates and emerges with a
decision. That is the mechanism here, so it is the name.

## When to run it

When you are about to commit — to a direction, a strategy, a design, anything expensive to
reverse. When you are choosing between approaches and the tradeoffs will not sit still. When
something feels right and you cannot say why, which is usually the moment before you find out.

Not for small questions. If the decision is cheap to undo, undo it later instead.

And when it does not warrant a panel, say so rather than convening one out of politeness. A run
costs five to nine full contexts, so a question that does not need one deserves an actual exit.
Three of them:

- **Answer it directly.** Most questions that arrive phrased as decisions have an answer. Give it.
- **Seat two or three analysts instead of eight.** For a real but contained question — one where
  you can name the two lenses that matter — run a short panel and the same synthesis.
- **Say what would make it worth a full run.** Usually that the decision has become expensive to
  reverse, or that the disagreement turned out to be about values rather than facts.

Take the exit before the framing step, not after the roster is on screen.

## Where it works

It needs a surface that can run subagents — Claude Code or Cowork. The isolation is the
entire mechanism and depends on each analyst getting its own context. In plain chat they
share a window, and what comes back is the smoothed consensus this skill exists to prevent.

## What it costs

More than most skills, and structurally so: a run spawns five to nine subagents that each
perform genuine analysis in their own context, all carrying the full context block. That is
the price of the isolation. Two levers when a run needs to be cheaper — seat fewer analysts,
and run them on a faster model while the synthesis stays on the strongest available.
`references/seating-the-panel.md` carries both, including which seats lose most when downshifted.

## The procedure

Four steps. `references/seating-the-panel.md` carries the context block and the roster
method, `references/the-bench.md` the eight standing seats and how a lens is specified,
and `references/brief-and-verdict.md` the brief, the sealed verdict, and the synthesis. Read
each when you reach it.

1. **Fix the question, then build the context every analyst receives.** Not the topic — the
   decision: what is being chosen between, what counts as this having gone well, what is
   fixed, what is already settled. Four rules govern how it gets written — the status quo is one
   of the options, the framing does not presuppose action, the objective is separated from the
   method, and each constraint is marked hard or soft. State it back in five lines and have it
   corrected, because a vague question returns a vague verdict eight times in parallel and a
   framing error is the one mistake that reaches every seat. Then assemble it with the
   situation as it actually stands and the user's material into one compact block that goes to
   every seat. Nothing is withheld to manufacture difference between seats. Two deliberate
   handlings: the user's own case *for* the idea is labelled as advocacy rather than passed off
   as background, and which way they are leaning is never sent at all.

2. **Seat the panel, and show the roster.** Work `references/seating-the-panel.md`: choose
   which standing seats this question needs, add the domain experts it calls for, and assign
   outside research where a stance can use it. Present the roster with each seat's charge,
   its research, and its model before running anything. This is the steering moment — the
   user knows which lens matters here and which seat will waste its context. Five to nine
   analysts is a full panel; past ten you are paying for noise.

3. **Brief each analyst and run them all in parallel, each in its own context.** Spawn one
   subagent per seat, at once, defaulting them to a faster model per **What it costs**. Each
   receives its persona in full — it is the only thing making this seat's analysis differ from
   the next one's — plus the context block and the verdict format, and no other analyst's
   verdict. Never run them sequentially in one context to save tokens; sequential passes
   converge, and convergence you did not earn is the precise failure this skill prevents.

4. **Synthesize, then let the user go back in.** Only once every verdict is in. Follow
   `references/brief-and-verdict.md`: the panel at a glance, then the distillation — where the
   lenses agree and how independently, where they argue and whether each argument is factual or
   about values, what one analyst saw alone, which seats ruled against their own disposition, the
   balanced read across all of it, the strongest objection to that read and why it did not carry,
   and the decision conditions that give it a next action and an expiry. Then every verdict in
   full, unedited, for the reader who wants to dig rather than take the summary.

## The pivot it is built on

**Agreement only means something if the parties could not hear each other.** Separated
analysts landing on the same recommendation is corroboration, close to the strongest signal
an exercise like this generates. The identical agreement from analysts who can see each
other's work is contagion. The two are indistinguishable in the output, which is why the
isolation has to be structural rather than requested.

Isolation earns that signal but does not grade it. Two separated seats can still land together
because they read the same page or ran the same premise in different words, so the synthesis
sorts every convergence into independent, shared-source, or shared-argument. Only the first is
worth what agreement appears to be worth.

So the report is organized around what a shared context destroys: convergence reached
independently, conflict nobody smoothed over, and the observation exactly one analyst made —
which a consensus process discards by construction, and which is often the most valuable line
in the run. Each conflict then gets sorted as factual or about values: the first tells you
what to go find out, the second is the user's to settle.

But isolation only prevents contagion. It does not by itself produce difference: every
analyst is the same model reading the same context, so what separates their conclusions is
how completely each lens is specified. A stance naming only a personality returns a
differently worded copy of one analysis. A stance naming what it discounts and what it
accepts as evidence returns a different conclusion from identical facts.

## Rules

- **Sealed before synthesized.** Every verdict is collected before any is read against
  another. If a subagent fails, re-run that seat alone rather than synthesizing short.
- **Never smooth a conflict.** Do not reframe a genuine disagreement as a creative tradeoff,
  and do not average two verdicts into a moderate one. Unresolved contradiction between
  independent analysts is a finding, not a defect in the output.
- **Every analyst commits.** A verdict, a confidence level, and what would change its mind.
  "It depends" is not a verdict; name what it depends on, then rule. `verify first` is available
  and is not an exemption — a seat using it owes the exact thing to establish, what answer flips
  it which way, and what is safe to do meanwhile.
- **Depth in the persona, not asymmetry in the data.** Every seat sees everything. What makes
  two verdicts differ is how far apart their lenses were written — above all, what each is
  told to discount.
- **The lens guides judgment; it never overrides it.** A seat rules from its stance, not
  toward a predetermined conclusion, and a seat reporting that the evidence runs against its
  own disposition is the most valuable thing the panel produces.
- **Steelman every seat, and none for the user.** Each analyst gets the strongest honest
  version of its own position and no help toward the user's. If a verdict echoes the
  conversation that produced the idea, the isolation leaked and that seat is re-run.
- **Distinguish what you know from what you inferred.** Tag it, carry the tag into the
  verdict, and mark any recommendation resting on inferred ground as a question to verify.
- **The decision stays with the user.** The panel recommends. Proceeding against a
  unanimous panel is a legitimate choice, and one now made with the reasoning in view.
