// Mechanical guard: the site header must be byte-identical on every page.
// Run before any commit that touches a page:  node docs/header-check.js
const fs = require("fs");
const path = require("path");

const dir = __dirname;
const pages = fs.readdirSync(dir).filter((f) => f.endsWith(".html"));
const blocks = new Map();
for (const page of pages) {
  const html = fs.readFileSync(path.join(dir, page), "utf8");
  const m = html.match(/<nav class="site-nav">[\s\S]*?<\/nav>/);
  if (!m) { console.error(`${page}: no site-nav header`); process.exitCode = 1; continue; }
  if (!blocks.has(m[0])) blocks.set(m[0], []);
  blocks.get(m[0]).push(page);
}
if (blocks.size > 1) {
  console.error("Headers differ:");
  for (const group of blocks.values()) console.error("  " + group.join(", "));
  process.exitCode = 1;
} else if (!process.exitCode) {
  console.log(`ok: ${pages.length} pages share one header`);
}
