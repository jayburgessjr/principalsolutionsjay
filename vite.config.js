import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { createRequire } from "module";
import { fileURLToPath } from "url";
import path from "path";

const require = createRequire(import.meta.url);
const __dirname = path.dirname(fileURLToPath(import.meta.url));

const vitePrerender = require("vite-plugin-prerender");
const PuppeteerRenderer = require("@prerenderer/renderer-puppeteer");

const routes = [
  "/",
  "/about",
  "/case-studies",
  "/work",
  "/adobe-case-study",
  "/p3-case-study",
  "/privacy",
  "/higher-ed-compliance-software",
  "/revuity-case-study",
  "/walmart-case-study",
  "/revuity-products",
  "/engagement",
  "/resume",
  "/articles",
  "/article/ai-systems-at-scale",
  "/article/data-debt",
  "/article/internal-tools",
  "/article/root-cause-diagnosis",
  "/article/ai-pilots-to-production",
  "/article/rag-architecture",
  "/article/build-vs-buy",
  "/article/workflow-automation",
  "/article/technical-due-diligence",
  "/article/org-as-architecture",
  "/article/ai-vendor-evaluation",
  "/article/beyond-prompt-engineering",
  "/article/the-handoff-problem",
  "/article/the-agentic-trap",
  "/article/data-readiness",
  "/article/governing-forward-deployed-ai",
];

const isNetlify = process.env.NETLIFY === "true";

export default defineConfig({
  server: {
    port: Number(process.env.PORT) || 5173,
  },
  plugins: [
    react(),
    !isNetlify &&
      vitePrerender({
        staticDir: path.join(__dirname, "dist"),
        routes,
        renderer: new PuppeteerRenderer({
          renderAfterTime: 1500,
          headless: true,
          executablePath:
            process.env.PUPPETEER_EXECUTABLE_PATH ||
            "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
        }),
      }),
  ].filter(Boolean),
});
