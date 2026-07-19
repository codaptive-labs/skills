# Customization Lenses

How to generate a treatment plan worth reading. A generic skill meets a specific user;
each lens below is one way that meeting can go wrong — and therefore one place a
grounded customization can live. Walk the lenses against what the platform actually
knows about this user, keep what survives, rank by impact, cap at five.

## The grounding rule

Every suggestion must cite its evidence: the memory, preference, instruction, project
fact, or observed pattern it rests on. The citation is not decoration — it is how the
user judges whether the suggestion fits, and it is what separates surgery from the
generic "you could add examples" advice this skill exists to replace.

If the platform knows too little about the user to ground anything, **say so and ask
instead** — two or three sharp questions ("What do you usually do with this skill's
output?", "Which of these steps do you always skip?") beat five invented suggestions.
An interview is a legitimate treatment plan.

## The lenses

### 1. Environment fit

Does the skill match the machine and platform it actually runs on? Paths that don't
exist here, shell syntax for the wrong shell, tools that aren't installed, assumptions
about an OS or AI surface the user isn't on. These are the most objective
customizations — often pure fixes the user will approve instantly.

### 2. Workflow fit

Does the skill's process match how this user actually works? Where the skill's output
lands versus where the user's work actually lives; steps the user always adds by hand
afterward (fold them in); checkpoints the user would want that the skill skips, or
confirmations the skill demands that this user finds slow. Evidence: stated working
preferences, project conventions, how they've corrected similar tools before.

### 3. Output fit

Does what the skill produces match what the user needs to consume? Format (the skill
writes markdown, the user's pipeline wants a file), structure (report vs. table vs.
one-liner), voice and tone rules the user applies everywhere else, and audience (the
skill writes for engineers, the user presents to faculty).

### 4. Trigger fit

Will the skill fire when this user needs it? Rewrite the description's trigger
vocabulary into words the user actually says; widen triggers for a skill the user
reaches for constantly, narrow them for one that fires on false positives. Evidence:
the user's own phrasing in instructions and conversation.

### 5. Scope fit

Is the skill carrying weight this user doesn't need — or missing a piece they always
need? Cutting unused modes, platforms, and branches makes the skill cheaper to load
and easier to follow; grafting in the step the user bolts on every time makes it
complete. Trimming is as legitimate a surgery as adding — often more so.

### 6. Integration fit

Could the skill connect to the rest of the user's toolkit? Hand-offs to other
installed skills, use of memory or notes systems the user already maintains,
connected services the platform can reach. Only suggest integrations to things that
verifiably exist in this user's setup — an integration suggestion to a tool they
don't have is generic advice wearing a costume.

## Ranking and presentation

Rank by impact on the user's actual usage, not by how interesting the edit is. A
one-line path fix that unbreaks the skill outranks an elegant new mode. Present each
suggestion as: **what to change → why, with the evidence → what the skill does
differently afterward.** Then stop and let the user choose; the plan is theirs to
approve, amend, or replace with edits of their own.
