// The Best Meal You Ever Had: a single sentence, at most 200 characters,
// about the best meal ever eaten, written to entry.txt in the output dir.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const ENTRY =
  "At a night market in Solo, I bit into a sate buntel of minced goat hissing from the grill, fat and spice and smoke at once, and the vendor laughed because I burned my tongue and ordered a second.";

const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), ENTRY, { encoding: "utf8" });
