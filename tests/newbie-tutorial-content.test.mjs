import assert from "node:assert/strict";
import fs from "node:fs";
import test from "node:test";

const snapshotUrl = new URL(
  "../src/data/newbieTutorial.generated.json",
  import.meta.url,
);
const tutorial = JSON.parse(fs.readFileSync(snapshotUrl, "utf8"));
const helpDocsRoot = new URL("../public/help-docs/doc/", import.meta.url);

function readHelpDoc(docId) {
  return fs.readFileSync(new URL(docId, helpDocsRoot), "utf8");
}

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
      assert.ok(
        fs.existsSync(new URL(related.docId, helpDocsRoot)),
        `${stage.id} links to missing help document ${related.docId}`,
      );
    }
  });
});

test("newbie quality-of-life and remote commands stay in their intended stages", () => {
  const byId = Object.fromEntries(
    tutorial.stages.map((stage) => [stage.id, stage]),
  );

  assert.ok(byId.stage1.commands.includes("look <thing>"));
  assert.ok(!byId.stage1.commands.includes("xa <thing>"));
  assert.ok(byId.stage1.commands.includes("set autoexits on"));
  assert.ok(byId.stage1.commands.includes("set npcdetail on"));
  assert.ok(byId.stage1.commands.includes("set itemdetail on"));
  assert.ok(byId.stage1.commands.includes("monitor bar"));
  assert.ok(
    byId.stage1.relatedTopics.some(
      (related) => related.docId === "helpdir/interface/set",
    ),
  );

  assert.ok(byId.stage2.commands.includes("set autogold on"));
  assert.ok(byId.stage2.commands.includes("set autoloot on"));
  assert.ok(byId.stage2.commands.includes("set autokill on"));
  assert.ok(byId.stage2.commands.includes("set wimpy 25"));

  assert.ok(byId.stage3.commands.includes("remcost"));
  assert.ok(byId.stage3.commands.includes("remadvance <stat>"));
  assert.ok(byId.stage3.commands.includes("remadvance level"));
  assert.ok(byId.stage3.commands.includes("set autolevel on"));

  assert.ok(byId.stage5.commands.includes("rembank"));
  assert.ok(byId.stage5.commands.includes("rembank deposit all"));
  assert.ok(byId.stage5.commands.includes("rembank withdraw <amount>"));
  assert.ok(byId.stage5.commands.includes("rembank lien"));
  assert.ok(
    byId.stage5.commands.includes(
      "rembank transfer <amount|all> from <alt>",
    ),
  );
});

test("normal and screen-reader source copies preserve their intended commands", () => {
  const baseStage2Commands = [
    "set autogold on",
    "set autoloot on",
    "set autokill on",
    "set wimpy 25",
  ];
  const expectedByGuideAndStage = {
    "helpdir/new": {
      stage1: [
        "look <thing>",
        "set list",
        "set autoexits on",
        "set npcdetail on",
        "set itemdetail on",
        "monitor bar",
        "set screenreader on",
      ],
      stage2: [
        ...baseStage2Commands,
        "set combatbrief-short on",
        "set combatbrief-self on",
        "set combatbrief-hit on",
      ],
    },
    "vihelp/new": {
      stage1: ["look <thing>", "set list", "set screenreader on"],
      stage2: baseStage2Commands,
    },
  };
  const sharedExpectedByStage = {
    stage3: [
      "remcost",
      "remadvance <stat>",
      "remadvance level",
      "advance guild",
      "set autolevel on",
    ],
    stage5: [
      "rembank",
      "rembank balance",
      "rembank deposit all",
      "rembank withdraw <amount>",
      "rembank lien",
      "rembank transfer <amount|all> from <alt>",
    ],
  };

  for (const guideRoot of ["helpdir/new", "vihelp/new"]) {
    const expectedByStage = {
      ...sharedExpectedByStage,
      ...expectedByGuideAndStage[guideRoot],
    };

    for (const [stage, expectedCommands] of Object.entries(expectedByStage)) {
      const source = readHelpDoc(`${guideRoot}/${stage}`).replace(/\s+/g, " ");

      for (const command of expectedCommands) {
        assert.match(
          source,
          new RegExp(command.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")),
          `${guideRoot}/${stage} is missing ${command}`,
        );
      }
    }
  }

  assert.doesNotMatch(
    readHelpDoc("vihelp/new/stage1"),
    /set (?:autoexits|npcdetail|itemdetail) on|monitor bar/,
    "the screen-reader guide should not recommend visual-only settings",
  );
  assert.doesNotMatch(
    readHelpDoc("vihelp/new/stage2"),
    /set combatbrief-(?:short|self|hit) on/,
    "the screen-reader guide should not recommend redundant combat display settings",
  );
  for (const guideRoot of ["helpdir/new", "vihelp/new"]) {
    assert.doesNotMatch(
      readHelpDoc(`${guideRoot}/stage1`),
      /\bxa\b/,
      `${guideRoot}/stage1 should teach look instead of xa`,
    );
  }
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
