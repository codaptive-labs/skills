---
name: source-auditor
description: Checks the citations and factual claims in a draft so fabricated sources don't slip through. It extracts every citation and checkable claim, verifies each source actually exists and actually supports the claim attached to it, and returns a verdict table — confirmed, unverifiable, or contradicted — so your manual follow-up is minutes, not an afternoon. Built for AI-drafted or AI-assisted writing, where invented references are the loudest failure mode. Use to fact-check citations, verify sources, or vet a draft you don't yet trust. Trigger phrases include "check these citations", "are these sources real", "verify the references", "fact-check this draft", "did AI make up these citations".
license: MIT
---

# Source Auditor

Fabricated citations are the single loudest failure mode of AI-drafted writing, and
checking them by hand is exactly the drudgery people skip. This narrows verification
to where the method is solid: extract every citation and checkable claim, verify each
one, and return a verdict table that tells you where to spend your skepticism.

## When to run it

On-demand, on any draft with citations or factual claims — a paper, a report, a lit
review, or an AI-generated piece you've inherited and don't yet trust.

## Where it works

Works anywhere. Its full power needs web access (on by default in Claude.ai; varies
elsewhere) to confirm a source exists and check what it says. Without web access it
still catches internal inconsistencies, flags the fabrication tells, and preps the
audit for manual checking.

## The procedure

The method is in `references/verification-protocol.md`; the output shape is in
`references/verdict-table-template.md`; the tells of invented references are in
`references/fabrication-patterns.md`.

1. **Hand it the draft.** Any text with citations or checkable factual claims.
2. **Extract.** Pull every citation and every checkable factual claim into a working
   list. Nothing gets skipped because it looked plausible — plausibility is exactly
   what fabricated references counterfeit.
3. **Verify.** For each: does the source exist? Then, does it actually support the
   claim it's attached to? Existence and support are separate checks — a real source
   cited for something it doesn't say is its own failure.
4. **Verdict table.** Return each item as confirmed, unverifiable, or contradicted,
   with a note — so the manual follow-up is a short, targeted list.

## Rules

- **Existence and support are two checks.** A real paper attached to a claim it never
  makes is not "confirmed." Verify both.
- **Unverifiable is not the same as false.** Say plainly when you couldn't check
  (paywall, no web access, ambiguous citation) rather than guessing a verdict.
- **Don't fabricate the fix.** If a citation is invented, flag it — do not invent a
  "correct" replacement source. Finding a real one is the user's call.
- **It reduces the checking burden; it doesn't replace judgment.** Say so. The verdict
  table is where to look, not a certificate that the draft is true.
