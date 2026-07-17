#!/usr/bin/env node
/**
 * Pre-publish safety scan for this PUBLIC repo.
 *
 * BLOCKS (exit 1) if any tracked file contains a generic secret or a term from
 * your private denylist. Prints non-blocking WARNINGS for dollar amounts and
 * email addresses (worth a human glance, not an automatic fail).
 *
 * This committed script contains NO private terms. Your actual denylist lives
 * OUTSIDE this public repo — in your home directory by default:
 *     ~/.codaptive-skills-denylist.txt
 * Override the location with the CODAPTIVE_DENYLIST env var.
 *
 * Run directly (`node scripts/check-private.mjs`) or let the pre-push hook run
 * it for you.
 */
import { readFileSync, existsSync, statSync, readdirSync } from 'fs';
import { join, extname } from 'path';
import { homedir } from 'os';

const ROOT = process.cwd();
const DENYLIST_PATH =
  process.env.CODAPTIVE_DENYLIST || join(homedir(), '.codaptive-skills-denylist.txt');

// Generic secret signatures — always on. No private data here.
const SECRET_PATTERNS = [
  { re: /-----BEGIN (?:RSA |EC |OPENSSH |PGP )?PRIVATE KEY-----/, label: 'private key' },
  { re: /AKIA[0-9A-Z]{16}/, label: 'AWS access key id' },
  { re: /AIza[0-9A-Za-z_\-]{35}/, label: 'Google/Firebase API key' },
  { re: /\bghp_[A-Za-z0-9]{36}\b/, label: 'GitHub token' },
  { re: /\bgithub_pat_[A-Za-z0-9_]{22,}/, label: 'GitHub fine-grained token' },
  { re: /\bxox[baprs]-[A-Za-z0-9-]{10,}/, label: 'Slack token' },
  { re: /\b(?:api[_-]?key|secret|token|password|passwd)\b\s*[:=]\s*['"][^'"]{8,}['"]/i, label: 'hardcoded credential' },
];

// Non-blocking — surfaced for review, does not fail the push.
const WARN_PATTERNS = [
  { re: /\$\s?\d{1,3}(?:,\d{3})+(?:\.\d+)?\b/, label: 'dollar amount' },
  { re: /\$\s?\d{4,}(?:\.\d+)?\b/, label: 'dollar amount' },
  { re: /[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}/, label: 'email address' },
];

function loadDenylist() {
  if (!existsSync(DENYLIST_PATH)) {
    console.warn(`  (!) No private denylist found at ${DENYLIST_PATH}`);
    console.warn('      Running generic secret checks only. Create it to scan for your own terms.');
    return [];
  }
  const terms = [];
  for (const raw of readFileSync(DENYLIST_PATH, 'utf-8').split('\n')) {
    const line = raw.trim();
    if (!line || line.startsWith('#')) continue;
    if (line.startsWith('/') && line.lastIndexOf('/') > 0) {
      const body = line.slice(1, line.lastIndexOf('/'));
      let flags = line.slice(line.lastIndexOf('/') + 1);
      if (!flags.includes('i')) flags += 'i';
      terms.push({ re: new RegExp(body, flags), label: 'private denylist' });
    } else {
      const esc = line.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
      terms.push({ re: new RegExp(esc, 'i'), label: 'private denylist' });
    }
  }
  return terms;
}

const TEXT_EXT = new Set(['.md', '.json', '.txt', '.mjs', '.cjs', '.js', '.yml', '.yaml', '.toml', '']);
const SKIP_DIRS = new Set(['.git', 'node_modules']);

function walk(dir, out = []) {
  for (const name of readdirSync(dir)) {
    if (SKIP_DIRS.has(name)) continue;
    const p = join(dir, name);
    if (statSync(p).isDirectory()) walk(p, out);
    else out.push(p);
  }
  return out;
}

const denylist = loadDenylist();
const blockPatterns = [...SECRET_PATTERNS, ...denylist];

let blocks = 0;
let warns = 0;
for (const abs of walk(ROOT)) {
  if (!TEXT_EXT.has(extname(abs))) continue;
  const rel = abs.slice(ROOT.length + 1).replace(/\\/g, '/');
  let content;
  try {
    content = readFileSync(abs, 'utf-8');
  } catch {
    continue;
  }
  content.split('\n').forEach((line, i) => {
    for (const { re, label } of blockPatterns) {
      if (re.test(line)) {
        console.error(`  ✗ BLOCK [${label}] ${rel}:${i + 1}  →  ${line.trim().slice(0, 90)}`);
        blocks++;
      }
    }
    for (const { re, label } of WARN_PATTERNS) {
      if (re.test(line)) {
        console.warn(`  ⚠ warn  [${label}] ${rel}:${i + 1}`);
        warns++;
      }
    }
  });
}

console.log(`\nScan complete: ${blocks} blocking, ${warns} warning(s).`);
if (blocks > 0) {
  console.error('\n✗ PUBLISH BLOCKED — remove the flagged content before pushing.\n');
  process.exit(1);
}
console.log('✓ No blocking issues found.' + (warns ? ' Review the warnings above.' : '') + '\n');
