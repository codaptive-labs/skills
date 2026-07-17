#!/usr/bin/env node
/**
 * Populate each pack directory with its member skills/agents so the pack is a
 * self-contained, installable Claude Code plugin. Members are declared in each
 * pack's members.json (the source of truth) and copied from the top-level
 * skills/ and agents/. Idempotent — re-run after changing any member skill.
 *
 *   packs/<pack>/skills/<member>/...   (copied from skills/<member>)
 *   packs/<pack>/agents/<member>.md    (copied from agents/<member>.md)
 */
import {
  readFileSync, existsSync, rmSync, mkdirSync, cpSync, copyFileSync, readdirSync, statSync,
} from 'fs';
import { join, dirname } from 'path';
import { fileURLToPath } from 'url';

const ROOT = join(dirname(fileURLToPath(import.meta.url)), '..');
const packsDir = join(ROOT, 'packs');
const skillsDir = join(ROOT, 'skills');
const agentsDir = join(ROOT, 'agents');

const packs = readdirSync(packsDir).filter((d) => statSync(join(packsDir, d)).isDirectory());
for (const pack of packs) {
  const packDir = join(packsDir, pack);
  const membersPath = join(packDir, 'members.json');
  if (!existsSync(membersPath)) {
    console.warn(`  ! ${pack}: no members.json, skipping`);
    continue;
  }
  const members = JSON.parse(readFileSync(membersPath, 'utf-8'));

  // Clean previously-populated content so this stays idempotent.
  rmSync(join(packDir, 'skills'), { recursive: true, force: true });
  rmSync(join(packDir, 'agents'), { recursive: true, force: true });

  for (const m of members.skills || []) {
    const src = join(skillsDir, m);
    if (!existsSync(src)) throw new Error(`${pack}: members.json lists missing skill "${m}"`);
    mkdirSync(join(packDir, 'skills'), { recursive: true });
    cpSync(src, join(packDir, 'skills', m), { recursive: true });
  }
  for (const m of members.agents || []) {
    const src = join(agentsDir, `${m}.md`);
    if (!existsSync(src)) throw new Error(`${pack}: members.json lists missing agent "${m}"`);
    mkdirSync(join(packDir, 'agents'), { recursive: true });
    copyFileSync(src, join(packDir, 'agents', `${m}.md`));
  }
  const n = (members.skills || []).length + (members.agents || []).length;
  console.log(`  ✓ ${pack}: ${n} members populated`);
}
console.log('Packs populated.');
