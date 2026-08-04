// One-off script: renders the print-scoped /snapshot page and exports it as
// a static one-page PDF asset. Re-run after editing src/pages/SnapshotPage.jsx.
// Usage: node scripts/generate-snapshot-pdf.mjs [devServerUrl]
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "http://localhost:5173/snapshot";
const outPath = path.join(__dirname, "../src/assets/jay-burgess-snapshot.pdf");

const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

try {
  const page = await browser.newPage();
  await page.goto(url, { waitUntil: "networkidle0" });
  await page.emulateMedia("print");
  await page.pdf({
    path: outPath,
    format: "Letter",
    printBackground: true,
    margin: { top: "0.4in", bottom: "0.4in", left: "0.5in", right: "0.5in" },
  });
  console.log(`Wrote ${outPath}`);
} finally {
  await browser.close();
}
