import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const snapshotUrl = new URL(
  "../src/data/newbieTutorial.generated.json",
  import.meta.url,
);
const tutorial = JSON.parse(fs.readFileSync(snapshotUrl, "utf8"));

test("the tutorial has exactly eight ordered stages", () => {
  assert.equal(tutorial.stages.length, 8);
  assert.deepEqual(
    tutorial.stages.map((stage) => stage.number),
    [1, 2, 3, 4, 5, 6, 7, 8],
  );
  assert.deepEqual(
    tutorial.stages.map((stage) => stage.id),
    [
      "stage1",
      "stage2",
      "stage3",
      "stage4",
      "stage5",
      "stage6",
      "stage7",
      "stage8",
    ],
  );
});

test("every stage links to the next stage and to explicit help documents", () => {
  tutorial.stages.forEach((stage, index) => {
    const expectedNext = index < 7 ? `stage${index + 2}` : null;
    assert.equal(stage.nextId, expectedNext);
    assert.equal(stage.sourceDocId, `helpdir/new/stage${index + 1}`);
    assert.ok(stage.relatedTopics.length > 0);

    for (const related of stage.relatedTopics) {
      assert.equal(related.command, `help ${related.topic}`);
      assert.match(related.docId, /^helpdir\/[^/]+\/[^/]+$/);
    }
  });
});

test("generated web content contains no raw Darkwind color tokens", () => {
  assert.doesNotMatch(
    JSON.stringify(tutorial),
    /\|(?:\[[^\]]*\]|[A-Z0-9]{3})/,
  );
});

test("Stage 8 reflects current Legend and mythic registration behavior", () => {
  const stage8 = tutorial.stages[7];
  const prose = stage8.paragraphs.join(" ");

  assert.match(prose, /unlocks a free additional multichar slot/i);
  assert.match(prose, /New mythic multichar registration is disabled/i);
  assert.doesNotMatch(prose, /unlocks a free mythic-guild character/i);
});
