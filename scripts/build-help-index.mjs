import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const helpRoot = path.resolve(repoRoot, "public", "help-docs");
const docRoot = path.resolve(helpRoot, "doc");
const indexPath = path.resolve(helpRoot, "index.json");
const searchPath = path.resolve(helpRoot, "search-index.json");

const sectionDescriptions = {
  helpdir: "Player-facing in-game help topics.",
  vihelp: "Screenreader-focused help overlays.",
  guild: "Guild-specific references and command documentation.",
  wizard: "Wizard and builder documentation.",
  LPC: "LPC language guides and references.",
  efun: "Driver efun manual pages.",
  lfun: "Local function manual pages.",
  applied: "Applied driver functions.",
  concepts: "LPMUD and driver concepts.",
  driver: "Driver internals and release notes.",
  race: "Race reference files.",
  newbie: "New player and tutorial material.",
  quests: "Quest documentation.",
  economy: "Economy and business documentation.",
  other: "Protocol and miscellaneous MUD references.",
};

function walk(dir, out = []) {
  if (!fs.existsSync(dir)) return out;

  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    if (entry.name.startsWith(".")) continue;
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      walk(full, out);
    } else if (entry.isFile()) {
      out.push(full);
    }
  }

  return out;
}

function stripDarkwindColors(value) {
  return String(value || "")
    .replace(/\x1b\]8;;[^\x07]*\x07/g, "")
    .replace(/\x1b\[[0-?]*[ -/]*[@-~]/g, "")
    .replace(/\|\[[^\]]*\]/g, "")
    .replace(/\|[KRGYBMCWXD0][KRGYBMCWXF0][BUK0OT]/g, "")
    .replace(/\|000/g, "");
}

function isText(buffer) {
  if (!buffer.length) return true;
  if (buffer.includes(0)) return false;
  return true;
}

function titleFromPath(relativePath, stripped) {
  const firstTextLine = stripped
    .split(/\r?\n/)
    .map((line) => line.trim())
    .find((line) => line && !/^[-=~]{4,}$/.test(line));

  if (firstTextLine && firstTextLine.length <= 90) {
    return firstTextLine.replace(/^#+\s*/, "");
  }

  const name = path.basename(relativePath);
  return name
    .replace(/[_-]/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function categoryLabel(category) {
  if (category === "_root") return "Root";
  if (category === "LPC") return "LPC";
  return category.replace(/[-_]/g, " ").replace(/\b\w/g, (letter) => letter.toUpperCase());
}

function excerptFrom(stripped) {
  return stripped
    .split(/\r?\n/)
    .map((line) => line.trim())
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .slice(0, 220);
}

function readDoc(file) {
  const buffer = fs.readFileSync(file);
  if (!isText(buffer)) return null;
  return buffer.toString("utf8").replace(/\r\n/g, "\n");
}

fs.mkdirSync(helpRoot, { recursive: true });

const files = walk(docRoot).sort();
const docs = [];
const searchDocs = [];
const categoryMap = new Map();

for (const file of files) {
  const raw = readDoc(file);
  if (raw === null) continue;

  const relativePath = path.relative(docRoot, file).split(path.sep).join("/");
  const pathParts = relativePath.split("/");
  const category = pathParts.length > 1 ? pathParts[0] : "_root";
  const stripped = stripDarkwindColors(raw);
  const title = titleFromPath(relativePath, stripped);
  const stats = fs.statSync(file);
  const lines = raw.length ? raw.split("\n").length : 0;
  const id = relativePath;

  docs.push({
    id,
    path: relativePath,
    category,
    title,
    excerpt: excerptFrom(stripped),
    bytes: stats.size,
    lines,
  });

  searchDocs.push({
    id,
    path: relativePath,
    category,
    title,
    text: stripped.replace(/\s+/g, " ").trim(),
  });

  const existing = categoryMap.get(category) || {
    id: category,
    label: categoryLabel(category),
    description: sectionDescriptions[category] || "Copied DarkWind documentation.",
    count: 0,
  };
  existing.count += 1;
  categoryMap.set(category, existing);
}

const categories = Array.from(categoryMap.values()).sort((left, right) => {
  if (left.id === "helpdir") return -1;
  if (right.id === "helpdir") return 1;
  if (left.id === "vihelp") return -1;
  if (right.id === "vihelp") return 1;
  return left.label.localeCompare(right.label);
});

const generatedAt = new Date().toISOString();
const index = {
  generatedAt,
  source: "public/help-docs/doc",
  totalDocs: docs.length,
  categories,
  docs,
};

fs.writeFileSync(indexPath, `${JSON.stringify(index, null, 2)}\n`);
fs.writeFileSync(searchPath, `${JSON.stringify({ generatedAt, docs: searchDocs }, null, 2)}\n`);

process.stdout.write(`Indexed ${docs.length} help docs across ${categories.length} categories\n`);
