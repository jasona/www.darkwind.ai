import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const darkwindRoot = path.resolve(repoRoot, "..", "darkwind-nextgen", "codebase");

function walk(dir, files = []) {
  if (!fs.existsSync(dir)) return files;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, files);
    } else if (entry.name === "area.json") {
      files.push(full);
    }
  }

  return files;
}

function title(value) {
  return String(value || "Unknown")
    .replace(/_/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function playerPlanet(rawPlanet, rawPath) {
  if (rawPlanet === "Dailos") return "Dailos";
  if (rawPath.includes(`${path.sep}planets${path.sep}`)) return title(rawPlanet);
  return "Geshtai";
}

function playerRegion(rawContinent, rawPath) {
  const domainsIndex = rawPath.indexOf(`${path.sep}domains${path.sep}`);
  if (domainsIndex >= 0) {
    const after = rawPath.slice(domainsIndex).split(path.sep);
    return title(after[2] || rawContinent);
  }

  return title(rawContinent);
}

function readJson(file) {
  try {
    return JSON.parse(fs.readFileSync(file, "utf8"));
  } catch (error) {
    return { __error: error.message };
  }
}

function summarizeAreas() {
  const areaFiles = walk(darkwindRoot);
  const groups = new Map();

  for (const file of areaFiles) {
    const data = readJson(file);
    const planet = playerPlanet(data.planet, file);
    const region = playerRegion(data.continent, file);
    const key = `${planet}::${region}`;
    const level = Number(data.avg_mob_level || 0);
    const existing = groups.get(key) || {
      planet,
      region,
      areaCount: 0,
      knownLevels: [],
      examples: [],
    };

    existing.areaCount += 1;
    if (level > 0) existing.knownLevels.push(level);
    if (existing.examples.length < 5) existing.examples.push(data.name || data.id || path.basename(path.dirname(file)));
    groups.set(key, existing);
  }

  return Array.from(groups.values()).map((group) => {
    const levels = group.knownLevels;
    const min = levels.length ? Math.min(...levels) : null;
    const max = levels.length ? Math.max(...levels) : null;
    const average = levels.length
      ? Math.round(levels.reduce((sum, level) => sum + level, 0) / levels.length)
      : null;

    return {
      planet: group.planet,
      region: group.region,
      areaCount: group.areaCount,
      levelRange: min && max ? `${min}-${max}` : "unknown",
      averageMobLevel: average,
      examples: group.examples,
    };
  });
}

function summarizeGuilds() {
  const guildCommandRoot = path.join(darkwindRoot, "cmds", "guilds");
  if (!fs.existsSync(guildCommandRoot)) return [];

  return fs
    .readdirSync(guildCommandRoot, { withFileTypes: true })
    .filter((entry) => entry.isDirectory())
    .map((entry) => entry.name)
    .sort();
}

const snapshot = {
  generatedAt: new Date().toISOString(),
  source: path.relative(repoRoot, darkwindRoot),
  areaSummary: summarizeAreas(),
  guildCommandDirectories: summarizeGuilds(),
};

process.stdout.write(`${JSON.stringify(snapshot, null, 2)}\n`);
