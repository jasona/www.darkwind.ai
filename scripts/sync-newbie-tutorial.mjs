import crypto from "node:crypto";
import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";
import { fileURLToPath } from "node:url";

const scriptPath = fileURLToPath(import.meta.url);
const scriptDir = path.dirname(scriptPath);
const repoRoot = path.resolve(scriptDir, "..");

export const tutorialFileNames = [
  "guide",
  "stage1",
  "stage2",
  "stage3",
  "stage4",
  "stage5",
  "stage6",
  "stage7",
  "stage8",
];

const repository = "jasona/darkwind-nextgen";
const normalRoot = "codebase/public/docs/helpdir/new";
const screenreaderRoot = "codebase/public/docs/vihelp/new";

const topicDocIds = {
  achievements: "helpdir/mechanics/achievements",
  archetypes: "helpdir/guilds/archetypes",
  areas: "helpdir/world/areas",
  arena: "helpdir/world/arena",
  auction: "helpdir/economy/auction",
  avengement: "helpdir/avengement/avengement",
  bank: "helpdir/economy/bank",
  basics: "helpdir/basics/basics",
  boons: "helpdir/leveling/boons",
  bosses: "helpdir/mechanics/bosses",
  buffs: "helpdir/mechanics/buffs",
  clans: "helpdir/clans/clans",
  combat: "helpdir/mechanics/combat",
  combos: "helpdir/guilds/combos",
  communication: "helpdir/communication/communication",
  costs: "helpdir/leveling/costs",
  daily: "helpdir/mechanics/daily",
  death: "helpdir/basics/death",
  deities: "helpdir/mechanics/deities",
  discord: "helpdir/communication/discord",
  economy: "helpdir/economy/economy",
  effects: "helpdir/mechanics/effects",
  equipment: "helpdir/basics/equipment",
  eternal: "helpdir/world/eternal",
  fishing: "helpdir/professions/fishing",
  guilds: "helpdir/guilds/guilds",
  hero: "helpdir/leveling/hero",
  invasions: "helpdir/mechanics/invasions",
  kill: "helpdir/basics/kill",
  kingdoms: "helpdir/mechanics/kingdoms",
  legend: "helpdir/leveling/legend",
  leveling: "helpdir/leveling/leveling",
  market: "helpdir/economy/market",
  meta: "helpdir/stats/meta",
  movement: "helpdir/basics/movement",
  multichars: "helpdir/rules/multichars",
  mythic_guilds: "helpdir/guilds/mythic_guilds",
  new: "helpdir/new/new",
  party: "helpdir/mechanics/party",
  patron: "helpdir/mechanics/patron",
  professions: "helpdir/professions/professions",
  quests: "helpdir/quests/quests",
  recall: "helpdir/mechanics/recall",
  remort: "helpdir/leveling/remort",
  roles: "helpdir/guilds/roles",
  specialization: "helpdir/mechanics/specialization",
  stats: "helpdir/stats/stats",
  tutorial: "helpdir/basics/tutorial",
  uniques: "helpdir/mechanics/uniques",
  wayshards: "helpdir/world/wayshards",
  wimpy: "helpdir/mechanics/wimpy",
};

const rawColorTokenPattern = /\|(?:\[[^\]]*\]|[A-Z0-9]{3})/;

export function stripDarkwindColors(value) {
  return String(value)
    .replace(/\x1b\]8;;[^\x07]*\x07/g, "")
    .replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\|\[[^\]]*\]/g, "")
    .replace(/\|[A-Z0-9]{3}/g, "");
}

function normalizeInline(value) {
  return stripDarkwindColors(value).replace(/\s+/g, " ").trim();
}

function visibleLines(raw) {
  return stripDarkwindColors(raw)
    .replace(/\r\n/g, "\n")
    .split("\n")
    .filter((line) => !line.trimStart().startsWith("#"))
    .map((line) => line.trimEnd());
}

function splitParagraphs(lines) {
  const paragraphs = [];
  let current = [];

  const flush = () => {
    if (!current.length) return;
    const paragraph = normalizeInline(current.join(" "));
    if (paragraph) paragraphs.push(paragraph);
    current = [];
  };

  for (const line of lines) {
    const trimmed = line.trim();
    if (!trimmed) {
      flush();
      continue;
    }
    if (/^[=~_-]{5,}$/.test(trimmed)) continue;
    current.push(trimmed);
  }

  flush();
  return paragraphs;
}

function firstLineIndex(lines, predicate, start = 0) {
  const offset = lines.slice(start).findIndex(predicate);
  return offset === -1 ? -1 : start + offset;
}

function parseGuide(raw) {
  const lines = visibleLines(raw);
  const titleIndex = firstLineIndex(lines, (line) => Boolean(line.trim()));
  const separatorIndex = firstLineIndex(
    lines,
    (line) => /^[=~_-]{5,}$/.test(line.trim()),
    titleIndex + 1,
  );
  const stageListIndex = firstLineIndex(lines, (line) =>
    line.trimStart().startsWith("help stage1"),
  );
  const guidanceIndex = firstLineIndex(lines, (line) =>
    line.trimStart().startsWith("At every stage:"),
  );
  const seeAlsoIndex = firstLineIndex(
    lines,
    (line) => line.trimStart().startsWith("See also:"),
    guidanceIndex + 1,
  );

  if (
    titleIndex === -1 ||
    separatorIndex === -1 ||
    stageListIndex === -1 ||
    guidanceIndex === -1 ||
    seeAlsoIndex === -1
  ) {
    throw new Error("Could not parse the newbie guide structure");
  }

  return {
    title: normalizeInline(lines[titleIndex]),
    intro: splitParagraphs(lines.slice(separatorIndex + 1, stageListIndex)),
    guidance: splitParagraphs(lines.slice(guidanceIndex, seeAlsoIndex)),
  };
}

function parseHeader(header, expectedNumber) {
  const match = header.match(/^Stage (\d+) of 8:\s*(.+)$/);
  if (!match) {
    throw new Error(`Could not parse stage header: ${header}`);
  }

  const number = Number(match[1]);
  if (number !== expectedNumber) {
    throw new Error(`Expected stage ${expectedNumber}, found stage ${number}`);
  }

  let title = match[2].trim();
  let levelRange = null;
  const rangeMatch = title.match(/\s+\((levels? [^)]+)\)$/i);
  if (rangeMatch) {
    levelRange = rangeMatch[1];
    title = title.slice(0, rangeMatch.index).trim();
  }

  return { number, title, levelRange };
}

function parseKeywords(raw) {
  const match = raw.match(/^# keywords:\s*(.+)$/im);
  if (!match) return [];
  return match[1]
    .split(",")
    .map((keyword) => keyword.trim())
    .filter(Boolean);
}

function parseCommands(raw) {
  const commands = [];
  const seen = new Set();
  const commandPattern = /\|YKB([\s\S]*?)\|YKO/g;

  for (const match of raw.matchAll(commandPattern)) {
    const command = normalizeInline(match[1]);
    if (!command || seen.has(command)) continue;
    seen.add(command);
    commands.push(command);
  }

  return commands;
}

function parseRelatedTopics(lines, readIndex, footerIndex, docsRoot, assertRelatedFiles) {
  const readText = normalizeInline(lines.slice(readIndex, footerIndex).join(" "));
  const topics = [];

  for (const match of readText.matchAll(/\bhelp\s+([a-z][a-z0-9_]*)/gi)) {
    const topic = match[1].toLowerCase();
    const docId = topicDocIds[topic];
    if (!docId) {
      throw new Error(`No explicit help document mapping for topic "${topic}"`);
    }

    if (assertRelatedFiles && !fs.existsSync(path.join(docsRoot, docId))) {
      throw new Error(`Related help document does not exist: ${docId}`);
    }

    topics.push({
      topic,
      command: `help ${topic}`,
      docId,
    });
  }

  if (!topics.length) {
    throw new Error(`No related help topics found in: ${readText}`);
  }

  return topics;
}

function assertStage8CoreTruth(paragraphs, variant) {
  const prose = paragraphs.join(" ");
  if (
    !prose.includes("unlocks a free additional multichar slot") ||
    !prose.includes("New mythic multichar registration is disabled")
  ) {
    throw new Error(
      `Stage 8 ${variant} source does not reflect current multichar registration behavior`,
    );
  }
}

function parseStage(raw, screenreaderRaw, expectedNumber, docsRoot, assertRelatedFiles) {
  const lines = visibleLines(raw);
  const titleIndex = firstLineIndex(lines, (line) => Boolean(line.trim()));
  const separatorIndex = firstLineIndex(
    lines,
    (line) => /^[=~_-]{5,}$/.test(line.trim()),
    titleIndex + 1,
  );
  const readIndex = firstLineIndex(lines, (line) =>
    line.trimStart().startsWith("Read:"),
  );
  const footerIndex = firstLineIndex(
    lines,
    (line) => /^(Next|Index):/.test(line.trimStart()),
    readIndex + 1,
  );

  if (
    titleIndex === -1 ||
    separatorIndex === -1 ||
    readIndex === -1 ||
    footerIndex === -1
  ) {
    throw new Error(`Could not parse stage ${expectedNumber}`);
  }

  const header = parseHeader(normalizeInline(lines[titleIndex]), expectedNumber);
  const paragraphs = splitParagraphs(lines.slice(separatorIndex + 1, readIndex));

  if (expectedNumber === 8) {
    const screenreaderLines = visibleLines(screenreaderRaw);
    const screenreaderTitleIndex = firstLineIndex(screenreaderLines, (line) =>
      Boolean(line.trim()),
    );
    const screenreaderReadIndex = firstLineIndex(screenreaderLines, (line) =>
      line.trimStart().startsWith("Read:"),
    );
    if (screenreaderTitleIndex === -1 || screenreaderReadIndex === -1) {
      throw new Error("Could not parse the screenreader Stage 8 source");
    }
    const screenreaderParagraphs = splitParagraphs(
      screenreaderLines.slice(screenreaderTitleIndex + 1, screenreaderReadIndex),
    );
    assertStage8CoreTruth(paragraphs, "normal");
    assertStage8CoreTruth(screenreaderParagraphs, "screenreader");
  }

  const footerText = normalizeInline(lines.slice(footerIndex).join(" "));
  const nextMatch = footerText.match(/\bNext:\s*help\s+(stage\d+)\b/i);
  const id = `stage${expectedNumber}`;

  return {
    id,
    number: header.number,
    title: header.title,
    levelRange: header.levelRange,
    paragraphs,
    commands: parseCommands(raw),
    relatedTopics: parseRelatedTopics(
      lines,
      readIndex,
      footerIndex,
      docsRoot,
      assertRelatedFiles,
    ),
    sourceDocId: `helpdir/new/${id}`,
    nextId: nextMatch ? nextMatch[1].toLowerCase() : null,
    keywords: parseKeywords(raw),
  };
}

function readTutorialSources(docsRoot) {
  const normal = new Map();
  const screenreader = new Map();

  for (const fileName of tutorialFileNames) {
    const normalPath = path.join(docsRoot, "helpdir", "new", fileName);
    const screenreaderPath = path.join(docsRoot, "vihelp", "new", fileName);

    if (!fs.existsSync(normalPath)) {
      throw new Error(`Normal tutorial source not found: ${normalPath}`);
    }
    if (!fs.existsSync(screenreaderPath)) {
      throw new Error(`Screenreader tutorial source not found: ${screenreaderPath}`);
    }

    normal.set(fileName, fs.readFileSync(normalPath, "utf8"));
    screenreader.set(fileName, fs.readFileSync(screenreaderPath, "utf8"));
  }

  return { normal, screenreader };
}

function hashTutorialSources(sources) {
  const hash = crypto.createHash("sha256");

  for (const [section, files] of [
    ["helpdir", sources.normal],
    ["vihelp", sources.screenreader],
  ]) {
    for (const fileName of tutorialFileNames) {
      hash.update(`${section}/new/${fileName}\0`, "utf8");
      hash.update(files.get(fileName), "utf8");
      hash.update("\0", "utf8");
    }
  }

  return hash.digest("hex");
}

export function buildTutorialData({
  docsRoot,
  revision,
  dirty = false,
  assertRelatedFiles = true,
}) {
  const sources = readTutorialSources(docsRoot);
  const guide = parseGuide(sources.normal.get("guide"));
  const stages = Array.from({ length: 8 }, (_, index) => {
    const number = index + 1;
    const fileName = `stage${number}`;
    return parseStage(
      sources.normal.get(fileName),
      sources.screenreader.get(fileName),
      number,
      docsRoot,
      assertRelatedFiles,
    );
  });

  return {
    schemaVersion: 1,
    source: {
      repository,
      revision,
      dirty,
      contentHash: hashTutorialSources(sources),
      normalRoot,
      screenreaderRoot,
      files: tutorialFileNames,
    },
    title: guide.title,
    intro: guide.intro,
    guidance: guide.guidance,
    guideDocId: "helpdir/new/guide",
    stages,
  };
}

function assertNonEmptyStrings(values, label) {
  if (
    !Array.isArray(values) ||
    values.some((value) => typeof value !== "string" || !value.trim())
  ) {
    throw new Error(`${label} must contain only non-empty strings`);
  }
}

export function validateTutorialData(data) {
  if (!data || typeof data !== "object") {
    throw new Error("Tutorial snapshot must be an object");
  }
  if (data.schemaVersion !== 1) {
    throw new Error(`Unsupported tutorial schema version: ${data.schemaVersion}`);
  }
  if (!data.source || data.source.repository !== repository) {
    throw new Error("Tutorial snapshot has an unexpected source repository");
  }
  if (!/^[0-9a-f]{40}$/i.test(data.source.revision || "")) {
    throw new Error("Tutorial source revision must be a full Git commit SHA");
  }
  if (typeof data.source.dirty !== "boolean") {
    throw new Error("Tutorial source dirty flag must be a boolean");
  }
  if (!/^[0-9a-f]{64}$/i.test(data.source.contentHash || "")) {
    throw new Error("Tutorial source content hash must be a SHA-256 digest");
  }
  if (
    data.source.normalRoot !== normalRoot ||
    data.source.screenreaderRoot !== screenreaderRoot
  ) {
    throw new Error("Tutorial source roots do not match the supported layout");
  }
  if (
    JSON.stringify(data.source.files) !== JSON.stringify(tutorialFileNames)
  ) {
    throw new Error("Tutorial source file manifest is incomplete or out of order");
  }
  if (typeof data.title !== "string" || !data.title.trim()) {
    throw new Error("Tutorial title is required");
  }
  assertNonEmptyStrings(data.intro, "Tutorial intro");
  assertNonEmptyStrings(data.guidance, "Tutorial guidance");
  if (data.guideDocId !== "helpdir/new/guide") {
    throw new Error("Tutorial guide document ID is invalid");
  }
  if (!Array.isArray(data.stages) || data.stages.length !== 8) {
    throw new Error("Tutorial snapshot must contain exactly eight stages");
  }

  data.stages.forEach((stage, index) => {
    const number = index + 1;
    const expectedId = `stage${number}`;
    const expectedNextId = number < 8 ? `stage${number + 1}` : null;

    if (stage.id !== expectedId || stage.number !== number) {
      throw new Error(`Tutorial stage ${number} is missing or out of order`);
    }
    if (stage.nextId !== expectedNextId) {
      throw new Error(`Tutorial ${expectedId} has an invalid next link`);
    }
    if (stage.sourceDocId !== `helpdir/new/${expectedId}`) {
      throw new Error(`Tutorial ${expectedId} has an invalid source document ID`);
    }
    if (typeof stage.title !== "string" || !stage.title.trim()) {
      throw new Error(`Tutorial ${expectedId} must have a title`);
    }
    if (stage.levelRange !== null && typeof stage.levelRange !== "string") {
      throw new Error(`Tutorial ${expectedId} has an invalid level range`);
    }
    assertNonEmptyStrings(stage.paragraphs, `${expectedId} paragraphs`);
    assertNonEmptyStrings(stage.commands, `${expectedId} commands`);
    assertNonEmptyStrings(stage.keywords, `${expectedId} keywords`);

    if (!Array.isArray(stage.relatedTopics) || !stage.relatedTopics.length) {
      throw new Error(`Tutorial ${expectedId} needs related help topics`);
    }
    const seenTopics = new Set();
    for (const related of stage.relatedTopics) {
      if (
        !related ||
        typeof related.topic !== "string" ||
        related.command !== `help ${related.topic}` ||
        related.docId !== topicDocIds[related.topic]
      ) {
        throw new Error(`Tutorial ${expectedId} has an invalid related help topic`);
      }
      if (seenTopics.has(related.topic)) {
        throw new Error(`Tutorial ${expectedId} repeats help ${related.topic}`);
      }
      seenTopics.add(related.topic);
    }
  });

  const serialized = JSON.stringify(data);
  if (rawColorTokenPattern.test(serialized)) {
    throw new Error("Tutorial snapshot contains raw Darkwind color tokens");
  }

  const stage8 = data.stages[7];
  const stage8Text = stage8.paragraphs.join(" ");
  if (
    !stage8Text.includes("unlocks a free additional multichar slot") ||
    !stage8Text.includes("New mythic multichar registration is disabled")
  ) {
    throw new Error("Stage 8 does not reflect current multichar registration behavior");
  }

  return data;
}

function hashText(value) {
  return crypto.createHash("sha256").update(value, "utf8").digest("hex");
}

function syncRawSources(sourceDocsRoot, targetDocsRoot) {
  const copied = [];

  for (const section of ["helpdir", "vihelp"]) {
    const targetDir = path.join(targetDocsRoot, section, "new");
    fs.mkdirSync(targetDir, { recursive: true });

    for (const fileName of tutorialFileNames) {
      const sourcePath = path.join(sourceDocsRoot, section, "new", fileName);
      const targetPath = path.join(targetDir, fileName);
      const raw = fs.readFileSync(sourcePath, "utf8");
      fs.writeFileSync(targetPath, raw, "utf8");
      copied.push({
        path: path.relative(repoRoot, targetPath),
        sha256: hashText(raw),
      });
    }
  }

  return copied;
}

function runSync() {
  const sourceRepoRoot = path.resolve(
    process.env.DARKWIND_NEXTGEN_ROOT ||
      path.join(repoRoot, "..", "darkwind-nextgen"),
  );
  const sourceDocsRoot = path.join(sourceRepoRoot, "codebase", "public", "docs");
  const targetDocsRoot = path.join(repoRoot, "public", "help-docs", "doc");
  const snapshotPath = path.join(
    repoRoot,
    "src",
    "data",
    "newbieTutorial.generated.json",
  );

  if (!fs.existsSync(sourceDocsRoot)) {
    throw new Error(
      `Darkwind tutorial source not found: ${sourceDocsRoot}. ` +
        "Set DARKWIND_NEXTGEN_ROOT to the darkwind-nextgen repository.",
    );
  }

  const revision = execFileSync(
    "git",
    ["-C", sourceRepoRoot, "rev-parse", "HEAD"],
    { encoding: "utf8" },
  ).trim();
  const sourcePaths = ["helpdir", "vihelp"].flatMap((section) =>
    tutorialFileNames.map((fileName) =>
      path.join("codebase", "public", "docs", section, "new", fileName),
    ),
  );
  const dirty = Boolean(
    execFileSync(
      "git",
      ["-C", sourceRepoRoot, "status", "--porcelain", "--", ...sourcePaths],
      { encoding: "utf8" },
    ).trim(),
  );
  const data = validateTutorialData(
    buildTutorialData({
      docsRoot: sourceDocsRoot,
      revision,
      dirty,
      assertRelatedFiles: true,
    }),
  );

  const copied = syncRawSources(sourceDocsRoot, targetDocsRoot);
  fs.mkdirSync(path.dirname(snapshotPath), { recursive: true });
  fs.writeFileSync(snapshotPath, `${JSON.stringify(data, null, 2)}\n`, "utf8");

  process.stdout.write(
    `Synced ${copied.length} raw tutorial files and generated ` +
      `${path.relative(repoRoot, snapshotPath)} from ${revision}\n`,
  );
}

if (process.argv[1] && path.resolve(process.argv[1]) === scriptPath) {
  runSync();
}
