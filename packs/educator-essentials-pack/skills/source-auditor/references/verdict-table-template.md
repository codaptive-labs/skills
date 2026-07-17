# Verdict-Table Template

The output. One row per citation or checkable claim, sorted so the problems are at
the top. The table's job is to make the manual follow-up short and targeted.

## Table

```
# Source Audit — <document name>
Checked: <n> items · Confirmed: <n> · Unverifiable: <n> · Contradicted: <n>
Web access: <on / off / partial>

| # | Claim / citation | Verdict | Notes |
|---|---|---|---|
| 1 | <the claim + its attached source> | ❌ Contradicted | Source exists but studies X, not Y; doesn't support the claim. |
| 2 | <the claim + its source> | ⚠️ Unverifiable | Behind a paywall; existence confirmed, support not checkable. Human should read pp. X. |
| 3 | <the claim + its source> | ❌ Contradicted | No such article found; author real, title/journal/year don't match any record. Likely fabricated. |
| 4 | <the claim + its source> | ✅ Confirmed | Exists (DOI resolves); quoted passage matches. |
```

## Ordering

Sort **contradicted first, then unverifiable, then confirmed.** The reader wants the
problems, not a scroll through everything that's fine.

## The summary line

Lead with the counts so the reader knows the scale before the detail: "18 items
checked — 3 contradicted, 4 unverifiable, 11 confirmed." Flag immediately if any
contradicted item is load-bearing for the draft's argument.

## Notes column — what to write

- **Contradicted:** say *how* — nonexistent, internally inconsistent, real-but-doesn't-
  support, or reversed. Point to the specific mismatch.
- **Unverifiable:** say *why* it couldn't be checked and *what a human should do* (read
  which pages, find a better citation).
- **Confirmed:** brief — what confirmed it (DOI resolved, quote matched). Don't pad.

## Closing guidance

End with a one-line honest reminder: this audit shows where to look; it is not a
guarantee the draft is true, and unverifiable items still need a human. Never present
the table as a clean bill of health when items went unchecked.
