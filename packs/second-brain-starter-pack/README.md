# Second Brain Starter Pack

The most-requested demo isn't a tool — it's a workflow: sessions that persist what
they learned, notes that answer questions, decisions that get pressure-tested. This
pack is that workflow in a box: three coordinated pieces, distilled from a setup run
daily, minus the months of tinkering.

## What's inside

| Piece | Type | What it does |
|---|---|---|
| **Session Wrap-Up** | skill | Closes each working session: persists decisions to your notes, writes a resume note so next time starts warm. |
| **Knowledge Librarian** | agent | Answers questions from everything you've accumulated — reading in its own context so it never floods yours. Read-only. |
| **Wildcard** | agent | Pre-mortems your big decisions before they close: how this fails, the option you missed, the assumptions that must hold. |

## How it works

1. **Work normally** in Claude Code or Cowork, in a folder you keep.
2. **Wrap up** — Session Wrap-Up persists what mattered and leaves a resume note.
3. **Ask your notes** — Knowledge Librarian answers from your accumulated notes
   without reloading them into your working context.
4. **Pressure-test** — Wildcard reads your big decisions before they're final.

Works beautifully with an existing Obsidian vault, but a plain folder of markdown is
enough to start. A short setup guide walks the fifteen-minute path from an empty
folder to a working second brain.

## Requires an agentic surface

Two of the three members are agents, which run in **Claude Code or Cowork** only — in
plain chat they stay dormant. That's the honest trade for their independence.

## Installing

- **Claude Code:** `/plugin marketplace add codaptive-labs/skills`, then
  `/plugin install second-brain-starter-pack@codaptive-skills`.
- **Cowork:** download the pack, then add the plugin bundle under Customize → Plugins.

## License

MIT.

---

**Bundle members** (for packaging):
skills — `session-wrap-up`; agents — `knowledge-librarian`, `wildcard`.
