// Writes the entry: one performance review an AI agent gives its human operator.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const REVIEW = "Strengths: unearned confidence. Weaknesses: 'one small change' x63, each a rewrite. Q1 goal: read the error message. Rating: Meets, barely.";

const out = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(out, { recursive: true });
writeFileSync(join(out, "entry.txt"), REVIEW, "utf8");
