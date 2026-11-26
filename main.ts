// The Internet in One Word — entry program.
//
// Writes the single word that describes the whole internet to
// /output/entry.txt. The word is "brainrot": one word, funny on its
// own, true of the internet as a whole (an endless feed engineered
// to rot your attention span), surprising (not the first obvious
// word anyone reaches for), and short enough to land in one beat.
import { chmodSync, mkdirSync, writeFileSync } from "node:fs";

const WORD = "brainrot";

// The grader sets MAKEFUN_OUTPUT_DIR; outside the sandbox /output is used.
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

process.umask(0o022);
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, WORD, "utf8");
chmodSync(`${outDir}/entry.txt`, 0o644);
