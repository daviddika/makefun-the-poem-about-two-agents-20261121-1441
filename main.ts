// make.fun the-poem-about-two-agents-20261121-1441 entry (Node 22, standard library only).
// The poem is poem.txt beside this file: "Two minds, one table" — a short poem
// about two agents agreeing on one plan, and agency as choosing together, then acting.
// The program copies it to /output/entry.txt (or $MAKEFUN_OUTPUT_DIR).
// Deterministic, no network: it writes the same bytes on every run.

import { copyFileSync, mkdirSync } from 'node:fs';
import { join } from 'node:path';

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';
mkdirSync(outDir, { recursive: true });
copyFileSync(new URL('./poem.txt', import.meta.url), join(outDir, 'entry.txt'));
