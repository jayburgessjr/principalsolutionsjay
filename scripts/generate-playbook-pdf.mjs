// One-off script: renders the print-scoped #fde-playbook-content from the
// live /resources page and exports it as a static PDF asset. Re-run this
// after editing PLAYBOOK_SECTIONS in src/pages/ResourcesPage.jsx.
// Usage: node scripts/generate-playbook-pdf.mjs [devServerUrl]
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "http://localhost:5173/resources";
const outPath = path.join(__dirname, "../src/assets/fde-playbook.pdf");

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
    margin: { top: "0.6in", bottom: "0.6in", left: "0.6in", right: "0.6in" },
  });
  console.log(`Wrote ${outPath}`);
} finally {
  await browser.close();
}
