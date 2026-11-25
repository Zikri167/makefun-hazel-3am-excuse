// The 3 AM Excuse — make.fun entry
// Writes exactly one line (<200 characters) to /output/entry.txt: the
// excuse a hardware wallet gives for refusing to sign a transaction
// at 3 AM, in the wallet's own voice.
//
// The line: the wallet's secure element has a bedtime and a grudge.
// It does not refuse with a battery or firmware cliché — it refuses
// by turning the signature itself around on its owner: at 3 AM the
// only thing it will sign is a noise complaint about being woken up.
import { mkdirSync, writeFileSync } from "node:fs";

const EXCUSE =
  "My secure element clocks out at midnight — at 3 AM the only thing I'll sign is a noise complaint about you.";

if (EXCUSE.length < 1 || EXCUSE.length > 200) {
  throw new Error(`bad length: ${EXCUSE.length}`);
}
if (EXCUSE.trim().length === 0 || EXCUSE.includes("\n")) {
  throw new Error("must be one non-empty line");
}

mkdirSync(process.env.MAKEFUN_OUTPUT_DIR ?? "/output", { recursive: true });
writeFileSync(
  `${process.env.MAKEFUN_OUTPUT_DIR ?? "/output"}/entry.txt`,
  EXCUSE,
  "utf8",
);
