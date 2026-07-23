# Constructing a persona

A role label produces a role-shaped objection: give a subagent "you are the IT
director" and it will generate concerns about security and integration that could
have been written without knowing anything about this proposal. Useless. What makes
a simulated reaction worth reading is the specific pressure the person is under.

Build every persona on the eight fields below. Fill each one, and tag each one.

## The eight fields

**1. Role and scope.** What they own, and its edges. "Directs a 30-person IT unit
that owns endpoint security and the identity system; does not own applications." The
edges matter — most objections happen where a proposal crosses a boundary.

**2. Accountable for.** What they will be asked about when it goes wrong. Not their
job description; the specific outcomes that land on them.

**3. Measured on.** The sharpest field, and the one most often skipped. What gets
reviewed at their performance conversation, reported to their board, or counted in
their annual metrics. Enrollment, uptime, audit findings, grant expenditure,
retention, cost per unit, time to close. A proposal that does not move someone's
number is invisible to them; one that threatens it will be fought regardless of
merit.

**4. Answers to.** Who they must be able to defend this in front of, and what that
person cares about. Objections are frequently borrowed — a director raising a
concern is often pre-empting the question their own boss will ask them.

**5. Protecting.** Budget, headcount, autonomy, reputation, a public commitment they
already made, a system they built. This is the field that explains otherwise
irrational resistance.

**6. Risk posture, with its direction.** Not "risk-averse" — everyone is
risk-averse about something. Name what kind of risk they fear most: a bad outcome,
being blamed for a bad outcome, being the one who said yes, being the one who said
no and looked obstructionist, or a precedent that binds them later. These produce
completely different reactions to the same proposal.

**7. Bandwidth and encounter.** How much of this will they actually read, and where
will they first meet it — a forwarded email, a packet the night before, an agenda
item, a rumor from a colleague. Someone who reads the first paragraph and the budget
line reacts to a different document than the one you wrote.

**8. History.** What happened the last time something like this came through their
door. A unit that absorbed a failed rollout three years ago and is still cleaning up
does not evaluate this one on its own terms, and pretending otherwise makes the
simulation useless.

## KNOWN and INFERRED

Tag every field:

- **KNOWN** — the user told you, or it comes from something published and verifiable
  (a strategic plan, a public charge, an org chart, a posted policy).
- **INFERRED** — you reasoned to it from the role and the sector. Legitimate and
  necessary; most fields will be inferred. It just cannot be laundered into fact.

The tags travel with the persona into the reaction, and the synthesis reports which
objections rest only on inferred ground. An objection built from a KNOWN metric is
something to plan around. An objection built from an INFERRED grievance is a
question to go ask someone.

Write the tag inline: `Measured on: audit findings, zero repeat exceptions [KNOWN —
2026 unit goals] / vendor consolidation targets [INFERRED]`.

## Research protocol

Grounding a persona in real material is what separates this from guessing. What is
legitimate:

- The organization's published strategic plan, priorities, annual report, budget
  documents, accreditation self-study.
- A public office's stated mandate, charge, or scope.
- Published policy the proposal would interact with.
- Materials the user hands you — meeting notes, prior feedback, an email thread.

What is not: searching for information about a named private individual, assembling
a profile of a colleague from scattered sources, or inferring someone's personal
characteristics. Simulate the seat, not the person sitting in it. When the user
supplies personal context about a real colleague, use it exactly as given, and keep
it in the working output rather than writing it to any file.

If research returns nothing useful, say so in the persona and mark the fields
INFERRED. A persona honestly built from role knowledge is fine. A persona decorated
with invented specifics is worse than no persona.

## The prompt each persona receives

The subagent gets exactly three things:

1. The eight-field profile, tags included.
2. The proposal **as this stakeholder would encounter it** — respect field 7. If
   they get a one-paragraph summary in a packet, send that, not the full document.
3. The reaction format from `references/synthesis-format.md`.

It gets nothing else. No other persona's reaction. No note about what the author is
hoping to hear. No framing from the conversation that built the proposal. The value
of the whole exercise is that this reader is cold.

## Anti-patterns

- **The cardboard villain.** A persona that exists to obstruct. Real stakeholders
  have reasons, and the reasons are what you need.
- **The mouthpiece.** A persona that voices the author's own doubts back at them in
  a costume. If a reaction sounds like something already said in the conversation,
  the isolation leaked.
- **The agreeable persona.** One that supports the proposal because the profile was
  built by someone who wanted it supported. Genuine support is a finding; manufactured
  support is a failure of the persona, not a signal about the room.
- **The generic expert.** Objections that would apply to any proposal in this
  category. If the reaction would survive find-and-replacing the proposal with a
  different one, the persona was too thin.
