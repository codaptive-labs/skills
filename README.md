# Codaptive Labs — Skill & Agent Library

Free, tested [Agent Skills](https://agentskills.io) and Claude subagents for the
work higher-ed faculty, administrators, and independent consultants actually do —
designing assessments, setting AI expectations, drafting feedback, synthesizing
survey data, wrapping up a working session so the next one starts warm.

Every item here is something we actually use or built for a real engagement,
tested before publishing, with its provenance stated plainly. Browse the whole
catalog with install walkthroughs at **[codaptivelabs.com/skills](https://codaptivelabs.com/skills)**.

## What's in here

```
skills/     Portable SKILL.md folders (open Agent Skills standard)
agents/     Claude subagent definitions (.md) — Claude Code / Cowork
packs/      Themed bundles installed together
```

- **Skills** follow the open [Agent Skills](https://agentskills.io/specification)
  standard, so they work across Claude (chat, Cowork, Code) and most agentic
  coding tools (Codex, Cursor, Copilot, Gemini CLI, OpenCode). Each item's page
  on the website badges exactly where it's been verified.
- **Agents** are Claude Code / Cowork subagents — single-file drop-ins.

## Installing

Three doors, one source:

1. **Download a zip** from the item's page on
   [codaptivelabs.com/skills](https://codaptivelabs.com/skills) and upload it in
   Claude (Customize → Skills) — works on every plan, no terminal. This is the
   path built for non-technical users; the site has a screenshot walkthrough.
2. **Claude Code plugin marketplace:**
   `/plugin marketplace add codaptive-labs/skills`, then
   `/plugin install <name>@codaptive-skills`.
3. **Clone or `npx`:** this repo is plain, spec-valid source — clone it, or
   `npx skills add codaptive-labs/skills/<name>`.

## License

MIT, per skill (see each folder's `LICENSE` and the `license:` field in its
`SKILL.md`). Use them, adapt them, ship them in your own work.

## Provenance & trust

Everything is vetted by hand before it lands here. No crawled, auto-generated, or
untested content. If an item came from a specific engagement or a tool we run
ourselves, its page says so.

## Maintaining & publishing

Notes for whoever keeps this in sync with the website and the marketplace.

- **Website downloads** are generated from this repo, not hand-copied. From the
  `codaptive-site` repo run `npm run build:skills` (script:
  `scripts/generate-skill-zips.cjs`); it reads this repo as a sibling checkout
  (override with `SKILLS_REPO_PATH`) and writes per-item zips + agent files into
  `public/downloads/`. Re-run and commit after any content change.
- **`marketplace.json`** is assembled from each plugin's `.claude-plugin/plugin.json`.
  Its `source.sha` fields are intentionally **omitted until the first public push** —
  pin each to a real commit SHA once this repo is on GitHub, or Claude Code treats
  every commit as a new plugin version.
- **Packs** in `packs/` are thin: a `plugin.json`, a `README`, and a `members.json`
  listing the member skills/agents. The download-zip tooling assembles a
  self-contained bundle from `members.json` automatically. For the Claude Code
  marketplace door, each pack directory must be **populated with its members**
  (copied from `skills/` and `agents/`) before/at push, since a git-installed plugin
  reads the files physically present in its directory. `members.json` is the source
  of truth for that assembly.

— [Codaptive Labs](https://codaptivelabs.com)
