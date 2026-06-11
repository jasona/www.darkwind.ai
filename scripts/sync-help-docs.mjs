import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const repoRoot = path.resolve(__dirname, "..");
const source = path.resolve(repoRoot, "..", "darkwind-nextgen", "codebase", "doc");
const target = path.resolve(repoRoot, "public", "help-docs", "doc");

if (!fs.existsSync(source)) {
  throw new Error(`DarkWind doc source not found: ${source}`);
}

fs.rmSync(target, { recursive: true, force: true });
fs.mkdirSync(path.dirname(target), { recursive: true });
fs.cpSync(source, target, {
  recursive: true,
  dereference: false,
  filter: (entry) => !path.basename(entry).startsWith("."),
});

process.stdout.write(`Copied help docs from ${source} to ${target}\n`);
