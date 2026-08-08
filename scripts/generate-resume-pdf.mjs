// One-off script: renders the print-scoped /resume page and exports it as a
// static, multi-page PDF asset. Re-run after editing src/pages/ResumePage.jsx.
// Usage: node scripts/generate-resume-pdf.mjs [devServerUrl]
import puppeteer from "puppeteer";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const url = process.argv[2] || "http://localhost:5173/resume";
const outPath = path.join(__dirname, "../src/assets/jay-burgess-resume.pdf");

const browser = await puppeteer.launch({
  headless: true,
  executablePath:
    process.env.PUPPETEER_EXECUTABLE_PATH ||
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
});

try {
  const page = await browser.newPage();
  await page.setViewport({ width: 1280, height: 1024 });
  await page.goto(url, { waitUntil: "networkidle0" });

  // Stat counters and .reveal fade-ins are IntersectionObserver-driven and
  // never fire for content the viewport never visits during a single-shot
  // export — walk the full page height first so every observer actually
  // triggers, same as a real visitor scrolling through.
  await page.evaluate(async () => {
    const step = window.innerHeight;
    const scrollHeight = document.body.scrollHeight;
    for (let y = 0; y < scrollHeight; y += step) {
      window.scrollTo(0, y);
      await new Promise((r) => setTimeout(r, 250));
    }
    window.scrollTo(0, scrollHeight);
    await new Promise((r) => setTimeout(r, 1500));
    window.scrollTo(0, 0);
  });

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
