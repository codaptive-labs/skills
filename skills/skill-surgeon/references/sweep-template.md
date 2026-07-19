# Fleet Checkup — Sweep Format

The sweep answers three questions at a glance: *what do I have, what's it worth to me,
and where should I operate first?* It is a triage pass, not a full physical for every
skill — depth comes later, in Mode 1, for the skills that earn it.

## Token economy

Inventory from names and descriptions first. Open a skill's body only when you cannot
rate or recommend from the description alone — because it's vague, suspicious, or
contradicts what the user has said. Never open every skill's full contents by default;
a sweep that reads everything burns the user's context on skills that were fine.

## The report

### 1. Fleet table

One row per skill. Keep cells terse — the table is for scanning.

| Skill | What it does | Triggers via | Value for you | Recommended action |
|-------|--------------|--------------|---------------|--------------------|
| name | one plain-language line | phrases / slash command / hook | High, Medium, or Low + a one-phrase why | keep as-is / customize: what / examine (Mode 1) / consider retiring |

**Value is personal, not abstract.** Rate against what the platform knows about this
user's actual work, and let the one-phrase why carry the evidence ("High — matches
your weekly pipeline review" / "Low — targets a stack you don't use"). If you know too
little about the user to rate honestly, mark it "unrated" and say what you'd need to
know — an invented rating poisons the whole table.

**"Consider retiring" is a flag, never an action.** The sweep does not delete, disable,
or modify anything. It only recommends.

### 2. Patterns across the fleet

The findings individual rows hide:

- **Overlaps** — skills competing for the same triggers or duplicating each other's
  job, where the platform may fire the wrong one.
- **Stale skills** — referencing paths, tools, projects, or services that no longer
  exist. (From descriptions and quick spot-checks; deep dependency verification is
  Mode 1 work.)
- **Gaps** — recurring work visible in the user's context that no installed skill
  supports. One or two honest observations, not a brainstorm.

### 3. Surgery shortlist

The two or three skills where an operation would pay off most, each with a one-line
case for why it's first in line. End by offering to run Mode 1 on any of them — the
sweep's natural exit is into a single-skill surgery the user now actually wants.
