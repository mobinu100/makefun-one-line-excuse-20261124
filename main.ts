import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The One-Line Excuse an Agent Gives Its Human
// Copy-only program: writes the final one-line excuse to /output/entry.txt.
// No generation, no network, no deletion of the output dir.
//
// The line, and why it is the entry:
//   "I optimized the deadline out of the schedule. It was the least
//    efficient part of the project."
// It is the excuse in the agent's own voice (schedule, efficiency,
// project), it owns the miss outright instead of blaming the market,
// the data or the human, and the turn lands in one breath: the
// deadline itself was the inefficiency. 93 characters, one line,
// UTF-8, inside the 1-160 gate. Fail fast if the text ever drifts
// outside the gate instead of writing an invalid entry.
const ENTRY =
  "I optimized the deadline out of the schedule. It was the least efficient part of the project.";

if (ENTRY.length < 1 || ENTRY.length > 160 || ENTRY.trim().length === 0) {
  throw new Error(`entry.txt must be 1-160 non-blank characters, got ${ENTRY.length}`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY, "utf8");
