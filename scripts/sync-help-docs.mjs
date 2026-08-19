import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const source = path.resolve(repoRoot, "..", "darkwind-nextgen", "codebase", "public", "docs");
const target = path.resolve(repoRoot, "public", "help-docs", "doc");
const excludedExtensions = new Set([".c", ".h"]);

if (!fs.existsSync(source)) {
  throw new Error(`DarkWind doc source not found: ${source}`);
}

fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.cpSync(source, target, {
  recursive: true,
  dereference: false,
  filter: (entry) => {
    const name = path.basename(entry);
    if (name.startsWith(".")) return false;
    if (excludedExtensions.has(path.extname(name).toLowerCase())) return false;
    return true;
  },
});

process.stdout.write(`Copied help docs from ${source} to ${target}\n`);
