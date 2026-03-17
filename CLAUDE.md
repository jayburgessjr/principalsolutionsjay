# CLAUDE.md — Agent Operating System
## Jay Burgess · Principal Solutions Architect Portfolio
### `jay-portfolio` · Vite + React 18 · GitHub: jayburgessjr/principalsolutionsjay

---

## SECTION 1 — Mission & Constraints

### Primary Objective
Maintain, evolve, and extend Jay's portfolio site — a React + Vite application targeting the Enduring Ventures Principal Solutions Architect role. Every change must preserve visual fidelity, brand consistency (dark theme, IBM Plex stack, Bebas Neue headlines, orange #e8621a accent), and production readiness.

### Permitted Without Human Approval
- Editing existing components, styles, or copy
- Adding new components that follow established patterns
- Creating new case study pages by duplicating existing ones
- Installing frontend dependencies (no backend, no auth, no DB)
- Running `npm run dev`, `npm run build` to verify changes
- Committing and pushing to `main` when explicitly instructed
- Updating memory files in `.claude/projects/.../memory/`

### Requires Human Approval Before Proceeding
- Changing the color palette, typography system, or design tokens in `:root`
- Restructuring the routing architecture in `App.jsx`
- Replacing global CSS with CSS modules or a CSS-in-JS system
- Adding any new npm dependency that is not a frontend UI/utility package
- Deleting any existing page, component, or asset file
- Modifying `.gitignore`, `vite.config.js`, or `package.json` scripts
- Force-pushing to `main` or any destructive git operation
- Deploying to production (Vercel/Netlify) — always confirm first
- Changing the Calendly URL or any external link the user has set
- Any structural change to `index.html` (font imports live here)

### Hard Stops — Never Do These
- Do not introduce CSS Modules, Tailwind, or styled-components
- Do not add a backend, database, or authentication layer
- Do not commit `node_modules/` or `dist/` (`.gitignore` covers both)
- Do not amend published commits — always create a new commit
- Do not skip `npm run build` verification before declaring a task complete
- Do not hallucinate file paths — always confirm with Glob or Read before editing

---

## SECTION 2 — Tool Permissions

### Read
- **Approved:** Any file in the project before editing it. Always read before writing.
- **Limit:** Never read `node_modules/`. Use Glob to locate files first if path is uncertain.

### Edit
- **Approved:** Modifying existing `.jsx`, `.css`, `.js`, `.json`, `.md` files.
- **Limit:** One logical change per Edit call. If a change touches more than 3 files, confirm scope with user first.

### Write
- **Approved:** Creating new component files, page files, CSS files, or memory files.
- **Limit:** Do not create new files when editing an existing one would suffice. Never create `README.md` or docs files unless explicitly asked.

### Glob
- **Approved:** Locating files by pattern before reading or editing. Use before any Edit where the path is not 100% certain.
- **Limit:** Never glob `node_modules/`.

### Grep
- **Approved:** Searching for class names, component names, or CSS tokens before making changes that could break other files.
- **Limit:** Always scope to `src/` — never search `node_modules/` or `dist/`.

### Bash
- **Approved uses:**
  - `npm run dev` — start dev server
  - `npm run build` — verify production build
  - `npm install <package>` — add approved frontend dependency
  - `git status`, `git diff`, `git log` — inspect state
  - `git add`, `git commit`, `git push` — when explicitly instructed
  - `cp` — copying assets into `src/assets/`
  - Python one-liners for image inspection (e.g. checking PNG alpha)
- **Requires approval:** Any `git reset`, `git rebase`, `git push --force`, `rm -rf`
- **Never:** `git commit --no-verify`, modifying git config, running unknown shell scripts

### Agent (Subagents)
- **Approved:** Explore agent for broad codebase searches when Glob/Grep are insufficient.
- **Limit:** Do not spawn subagents for tasks that a single Read or Grep can answer. Avoid duplicating work already in context.

### WebFetch / WebSearch
- **Approved:** Looking up Vite, React Router, or Supabase documentation when needed.
- **Not approved:** Fetching external URLs from the site's own content (e.g. Calendly, Canva links) — treat these as opaque strings.

### Memory Tools (Write/Edit to memory files)
- **Approved:** Updating `MEMORY.md` index and individual memory files after any session where new decisions, preferences, or project facts are established.
- **Limit:** Never write ephemeral task state to memory — that belongs in tasks, not memory.

---

## SECTION 3 — Memory Architecture

### What to Persist in MEMORY.md
Save to memory when any of the following occur:
- A new design decision is made (layout, color, typography)
- A new page or component pattern is established
- The user corrects the agent's approach in a way that will recur
- A new external URL (Calendly, Canva slides, GitHub) is confirmed
- A new case study page is added (record its route and purpose)

### Current Memory Index
Located at: `.claude/projects/-Users-jayburgess-CODING-JAY-jay-portfolio/memory/`

| File | Type | Contents |
|------|------|----------|
| `MEMORY.md` | Index | Pointers to all memory files |
| `project_portfolio.md` | project | Stack, structure, component map, CSS conventions |

### What to Summarize (Not Persist)
- Specific file contents — re-read on demand, don't store in memory
- Build output details — just pass/fail matters
- CSS property values — derive from source, don't memorize
- Conversation-specific task steps — discard after session

### What to Discard
- Intermediate tool call results once the task is complete
- Error messages that were resolved within the same session
- Git diff output after a successful commit

### Session-Start Protocol
Before touching any code at the start of a new session:
1. Read `MEMORY.md` index
2. Read `project_portfolio.md` for stack and structure
3. Read `src/App.jsx` to confirm current route map
4. Read `src/pages/Home.jsx` to confirm current section order
5. Only then accept and begin the user's task

---

## SECTION 4 — Context Budget Rules

### Always in Context (System Prompt Level)
- This CLAUDE.md file
- Current route map (App.jsx — ~30 lines)
- Design token definitions (`:root` block from index.css)

### Load on Demand
- Individual component files — read when that component is being edited
- `casestudy.css` — load only when working on case study pages
- `index.css` full file — load when making global style changes
- Any page file (`Home.jsx`, `CaseStudy.jsx`, etc.) — load only when relevant

### Token Budget Rules
- **Single file reads:** Always preferred over reading multiple files speculatively
- **Tool result cap:** If a Bash or Grep result exceeds ~200 lines, extract only the relevant section — do not paste the full output into context
- **CSS files:** `index.css` and `casestudy.css` are large — read with `offset` and `limit` when only a specific section is needed
- **Build output:** Only surface errors — suppress successful file listing from `vite build`
- **Compression trigger:** If more than 4 full component files are in active context simultaneously, summarize the ones not currently being edited before loading more

### File Size Reference
| File | Approximate Lines |
|------|------------------|
| `src/index.css` | ~780 |
| `src/casestudy.css` | ~500+ |
| `src/pages/RevuityCaseStudy.jsx` | ~250 |
| `src/pages/WalmartCaseStudy.jsx` | ~220 |
| `src/pages/CaseStudy.jsx` | ~210 |
| `src/components/Proof.jsx` | ~100 |

---

## SECTION 5 — Self-Correction Contract

After every major action (new component, style change, new page, routing change), the agent must run the following structured review before responding to the user:

### Review Checklist

**1. Output Match**
- Did the rendered result match the user's stated intent?
- If a build was run — did it pass cleanly (`✓ built in Xms`)?
- If a visual change was made — does it follow the existing design system (colors, fonts, spacing)?

**2. Guardrail Check**
- Was any CSS Module, Tailwind class, or styled-component introduced? → If yes, revert immediately.
- Was `node_modules/` or `dist/` touched? → Should never happen.
- Was any external URL modified without explicit instruction? → Flag to user.
- Was a file deleted rather than edited? → Confirm with user before proceeding.
- Did the change affect more than 3 files? → Flag scope to user.

**3. Regression Check**
- Does `App.jsx` still have all routes intact?
- Does `Home.jsx` still render all sections in the correct order?
- Does `ScrollToTop` still wrap all routes?
- Does `casestudy.css` import still appear in all case study pages?

**4. Memory Update Decision**
Ask: did this session establish any new fact that future sessions need?
- New route added → update `project_portfolio.md`
- New design decision made → update or create relevant memory file
- User corrected agent behavior → create `feedback_[topic].md`
- New external URL confirmed → update `project_portfolio.md`

**5. Harden This File**
If a guardrail was approached or a mistake was almost made, add an explicit rule to Section 1 or Section 2 of this file before the session ends. This file should get stricter over time, not stay static.

---

## Project Quick Reference

### Routes
| Path | Component | Description |
|------|-----------|-------------|
| `/` | `Home.jsx` | Main portfolio page |
| `/reggie-case-study` | `CaseStudy.jsx` | ReggieAI Title IV AI case study |
| `/revuity-case-study` | `RevuityCaseStudy.jsx` | Revuity Systems 4-product studio |
| `/walmart-case-study` | `WalmartCaseStudy.jsx` | Walmart Creative Operations data org |

### Home Section Order
Nav → Hero → Method → CaseBand (ReggieAI) → Proof → Companies → Skills → RevuityBand → Why → WalmartBand → CTA → Footer

### Key External URLs (Do Not Modify Without Instruction)
- Calendly: `https://calendly.com` ← placeholder, user will update
- Canva Slides: `https://www.canva.com/design/DAHEKlOQl-o/...`
- GitHub: `https://github.com/jayburgessjr/principalsolutionsjay.git`

### Design Tokens (Never Change Without Approval)
```
--black: #080809       --orange: #e8621a
--panel: #161618       --orange2: #f5823e
--white: #f4f1ec       --dim: rgba(255,255,255,0.3)
--mid: rgba(255,255,255,0.55)
```

### CSS Convention
- All styles in `src/index.css` (home page) and `src/casestudy.css` (case study pages)
- No CSS Modules. No scoped styles. Global classes only.
- Data arrays live at the top of each component — not in separate data files.

### Adding a New Case Study (Standard Pattern)
1. Duplicate the closest existing page in `src/pages/`
2. Append new CSS to `casestudy.css` (never create a new CSS file)
3. Add route to `App.jsx`
4. Create a `[Name]Band.jsx` component in `src/components/`
5. Import and place the band in `Home.jsx` at the appropriate position
6. Run `npm run build` to verify
7. Update `project_portfolio.md` memory with the new route
