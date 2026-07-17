# Fabrication Patterns — The Tells of Invented References

AI-fabricated citations aren't random noise; they have recognizable signatures.
Knowing them lets you flag high-risk items fast, even before a web check, and lets
you audit sensibly when web access isn't available. None of these is proof on its
own — they're where to point your skepticism first.

## The classic tells

- **Plausible-but-nonexistent.** Real-sounding title, real authors who work in the
  field, a real journal, a reasonable year — and no such paper exists. The most
  common and most convincing. Only a lookup catches it.
- **Hybrid / Frankenstein citation.** Real components recombined wrongly: a real
  author on a paper they didn't write, a real title in the wrong journal, a real
  journal with an impossible volume/issue for the year. Internal inconsistency is the
  tell.
- **The too-perfect source.** A citation that supports the claim *exactly*, with a
  title that reads like the sentence it's attached to. Real research is rarely so
  on-the-nose; suspiciously perfect fit warrants a check.
- **Dead or wrong identifiers.** A DOI that doesn't resolve, resolves to something
  else, or is malformed; a URL that 404s. Fabricated DOIs often have the right shape
  and no target.
- **Round-number statistics with a citation.** "Studies show 70% of…" attached to a
  real-looking source that, checked, says nothing of the kind. The number and the
  citation were generated together.
- **Quote drift.** A quotation that's close to something a real source says but not
  exact, or a quote attributed to a real work that doesn't contain it.
- **Anachronism.** A source cited for a concept, event, or technology that postdates
  it, or a "recent study" dated implausibly.
- **Attribution inflation.** "X argues that [claim]" where X is real but never took
  that position, or took a more qualified one.

## Where fabrication clusters

- **Specific numbers and named studies** the writer couldn't have from memory.
- **Sentences that would be much stronger *with* a citation** — fabrication fills the
  spot where the argument wanted support.
- **Niche or hard-to-check corners** — obscure venues, non-English sources, grey
  literature, page numbers no one will open.

## Using the patterns

- **Triage with them, verify with the protocol.** Tells raise priority; a real check
  (see `verification-protocol.md`) assigns the verdict. Don't mark something
  contradicted on vibe alone unless its internals are provably inconsistent.
- **Offline, they carry more weight.** With no web access, internal inconsistency and
  anachronism are the strongest signals you have — surface them clearly as "likely
  fabricated, needs confirmation."
- **Explain the tell in the notes.** "Author real, this title/journal/year combination
  doesn't exist" teaches the user what to watch for next time, which is part of the
  point.
