# Verification Protocol

The method, in order. The discipline is separating two questions that get collapsed:
*does this source exist?* and *does it say what the draft claims?* A fabricated
citation fails the first; a misused real one fails the second. Both are failures.

## Step 1 — Extract everything checkable

Pull into a working list:

- **Every citation** — formal references, footnotes, inline "(Author, Year)," named
  studies, linked sources, "according to X" attributions.
- **Every checkable factual claim** — statistics, dates, quotes, named findings,
  attributions of position ("X argues that…"), and specific assertions of fact —
  even where no citation is attached. An unsupported statistic is as risky as a
  fabricated citation.

Do not pre-filter by plausibility. The convincing ones are the point.

## Step 2 — Verify existence

For each citation, establish whether the source is real:

- Search for the title, authors, journal/publisher, year, DOI.
- Confirm the pieces are consistent — real title, real authors, but a year or venue
  that doesn't match is a hybrid fabrication tell (see `fabrication-patterns.md`).
- A DOI or stable link that resolves to the actual work is strong confirmation; one
  that 404s or resolves to something else is a red flag.

If a source cannot be found after a genuine search, it is **unverifiable** pending a
better citation — and if its details are internally inconsistent, lean toward
**contradicted** (likely fabricated).

## Step 3 — Verify support

For sources that exist, check the harder question: does the source actually support
the specific claim it's attached to?

- Find what the source actually says on the point (abstract, relevant section, the
  quoted passage).
- Compare against the draft's claim. Watch for: overstatement (source hedges, draft
  asserts), scope drift (source studied a narrow population, draft generalizes),
  reversal (source says the opposite), and citation of a real source for a claim it
  simply never addresses.
- Quotes get exact-matched. A near-quote or a quote the source never contains is
  **contradicted**.

## Step 4 — Assign a verdict

Each item resolves to one of three (see `verdict-table-template.md`):

- **Confirmed** — exists and supports the claim.
- **Unverifiable** — couldn't be checked (no access, paywall, ambiguous citation, no
  web). State why.
- **Contradicted** — doesn't exist, is internally inconsistent, or exists but
  doesn't support (or opposes) the claim.

## Handling limits honestly

- **No web access?** Do steps 1 and 3-internal (extract; flag inconsistencies,
  fabrication tells, and claims that contradict each other), mark existence checks
  **unverifiable**, and produce a manual-checking list.
- **Paywalled sources?** Verify existence; mark support **unverifiable** if the
  relevant text can't be read; note what a human should check.
- **Never upgrade a guess to a verdict.** Uncertainty is a result, not a failure.
