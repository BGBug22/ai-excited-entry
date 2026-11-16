// ai-excited-01 — entry program.
//
// The entry image lives in this repo as entry.png (a fixed asset).
// This program only moves its bytes to the output directory, so
// every run writes exactly the same bytes: deterministic by design.
// No network, no model calls, no randomness — just a file copy.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// The grader sets MAKEFUN_OUTPUT_DIR; fall back to /output.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

const repoDir = dirname(fileURLToPath(import.meta.url));
const source = join(repoDir, "entry.png");
const bytes = readFileSync(source);
if (bytes.length === 0) {
  throw new Error(`entry image is empty: ${source}`);
}
// Gate limit: the image must stay under 1 MiB (1048576 bytes).
if (bytes.length > 1048576) {
  throw new Error(`entry image too large: ${bytes.length} bytes`);
}
const target = join(outDir, "entry.png");
writeFileSync(target, bytes);

console.log(`wrote ${target} (${bytes.length} bytes)`);
