# Publishing & the public/private line

This repository is **public**. Everything in it is meant for anyone to read,
download, and reuse. The rules below keep that line bright.

## The two bright lines

1. **Private work and public skills never share a git repository, a git remote,
   or a folder tree.** This repo lives at `C:\Public\` (Windows) — the public
   zone, physically separate from the private workspace. Its only remote is the
   public GitHub repo. No private repo carries that remote; this repo carries no
   private one.
2. **This repo is an allowlist clean-room.** The [`.gitignore`](.gitignore)
   ignores everything by default and permits only `skills/`, `agents/`, `packs/`,
   `.claude-plugin/`, the docs, and the generic tooling. A stray file is invisible
   to git unless it matches an allow rule.

If you would not put it on the public homepage, it does not belong here.

## The automated gate (runs on every push)

A pre-push hook ([`.githooks/pre-push`](.githooks/pre-push)) runs
[`scripts/check-private.mjs`](scripts/check-private.mjs) and **aborts the push**
if anything is flagged. It checks:

- **Generic secrets** — private keys, API tokens, hardcoded credentials, cloud keys.
- **Your private denylist** — name, contact details, private paths, client and
  institution names, etc.
- **Warnings (non-blocking)** — dollar amounts and email addresses, surfaced for
  a human glance.

If `gitleaks` is installed, it runs as a second layer. It is optional; the scan
above always runs.

### Your private denylist lives OUTSIDE this repo

The denylist that names your private terms is intentionally **not** in this repo —
publishing a list of the things you want to keep private would defeat the purpose.
It lives in your home directory:

```
~/.codaptive-skills-denylist.txt          (macOS/Linux)
C:\Users\<you>\.codaptive-skills-denylist.txt   (Windows)
```

Override the location with the `CODAPTIVE_DENYLIST` environment variable. If the
file is missing, the scan still runs the generic secret checks and prints a notice.

## One-time setup (per machine / after cloning)

```sh
git config core.hooksPath .githooks     # activate the pre-push gate
chmod +x .githooks/pre-push             # (macOS/Linux)
```

Then make sure your `~/.codaptive-skills-denylist.txt` exists on this machine.

## Before the first public push — a human read

The scanner catches known-bad strings; it cannot catch a generalization that is
still subtly traceable, or an "example" that is quietly a real scenario. Before the
first push (and before each new skill's first publish), read the actual content
once. A machine gate plus one human read is the standard.

## Publishing checklist

- [ ] `node scripts/check-private.mjs` passes with zero blocking hits.
- [ ] Warnings reviewed and cleared or accepted.
- [ ] New/changed skills read through once for residual private detail.
- [ ] `git status` shows only allowlisted content — nothing unexpected staged.
- [ ] Remote confirmed as the **public** `codaptive-labs/skills` — not a private repo.

## Regenerating the website downloads

The website's per-skill zips and OG images are generated **from this repo** (it is
the single upstream source), not hand-copied. In the website repo:
`npm run build:skills`. Re-run and commit there after content changes here.
