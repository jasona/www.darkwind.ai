import assert from "node:assert/strict";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import {
  buildTutorialData,
  validateTutorialData,
} from "./sync-newbie-tutorial.mjs";

const scriptDir = path.dirname(fileURLToPath(import.meta.url));
const repoRoot = path.resolve(scriptDir, "..");
const localDocsRoot = path.join(repoRoot, "public", "help-docs", "doc");
const snapshotPath = path.join(
  repoRoot,
  "src",
  "data",
  "newbieTutorial.generated.json",
);

if (!fs.existsSync(snapshotPath)) {
  throw new Error(
    `Committed tutorial snapshot not found: ${snapshotPath}. ` +
      "Run npm run tutorial:sync.",
  );
}

const snapshot = JSON.parse(fs.readFileSync(snapshotPath, "utf8"));
validateTutorialData(snapshot);

const rebuilt = validateTutorialData(
  buildTutorialData({
    docsRoot: localDocsRoot,
    revision: snapshot.source.revision,
    dirty: snapshot.source.dirty,
    assertRelatedFiles: false,
  }),
);

assert.deepStrictEqual(
  snapshot,
  rebuilt,
  "The committed tutorial snapshot is stale. Run npm run tutorial:sync.",
);

for (const stage of snapshot.stages) {
  for (const related of stage.relatedTopics) {
    const relatedPath = path.join(localDocsRoot, related.docId);
    if (!fs.existsSync(relatedPath)) {
      throw new Error(
        `Tutorial ${stage.id} links to a missing local help document: ` +
          `${related.docId}`,
      );
    }
  }
}

process.stdout.write(
  `Validated newbie tutorial snapshot: 8 stages from ${snapshot.source.revision}\n`,
);
