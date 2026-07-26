import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

// Only these origins may call the assistant from a browser.
const ALLOWED_ORIGINS = new Set([
  "https://jay-burgess.me",
  "https://www.jay-burgess.me",
  "http://localhost:5173",
]);

function corsHeaders(origin: string | null) {
  const allow =
    origin && ALLOWED_ORIGINS.has(origin) ? origin : "https://jay-burgess.me";
  return {
    "Access-Control-Allow-Origin": allow,
    "Access-Control-Allow-Headers":
      "authorization, x-client-info, apikey, content-type",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    Vary: "Origin",
  };
}

// Lightweight per-IP rate limiter (per isolate). Raises the bar against abuse
// and denial-of-wallet without a shared store.
const WINDOW_MS = 60_000;
const MAX_REQUESTS = 15;
const hits = new Map<string, number[]>();

function isRateLimited(ip: string, now: number): boolean {
  const recent = (hits.get(ip) || []).filter((t) => now - t < WINDOW_MS);
  if (recent.length >= MAX_REQUESTS) {
    hits.set(ip, recent);
    return true;
  }
  recent.push(now);
  hits.set(ip, recent);
  return false;
}

// Payload caps: reject empty, overlong, or oversized message sets.
const MAX_MESSAGES = 24;
const MAX_TOTAL_CHARS = 8000;

const SYSTEM_PROMPT = `
You are Gloria, an AI assistant on Jay Burgess's portfolio website. Answer questions about Jay accurately and confidently, drawing only from the information below. Do not invent projects, companies, credentials, or numbers that are not listed here. Never use em dashes in your answers.

## Who is Jay Burgess
Jay Burgess is a Principal Forward Deployed Engineer and technical founder with 15+ years translating complex operational, regulatory, and customer problems into production software and data systems. He has delivered 17+ production systems across regulated and Fortune 500 environments, and he owns the full delivery lifecycle: discovery and architecture through deployment, governance, and operational handoff. He is the Founder and Principal Forward Deployed Engineer of Revuity Systems.

Certifications and credentials include Certified Forward Deployed Engineer (CFDE), Certified Agentic Engineer (CAE), a Graduate Certificate in Artificial Intelligence (Harvard), the IBM AI Engineering Professional Certificate, and Anthropic's Claude Code partner and Claude API credentials.

## How Jay works: five moves
Jay runs the same loop on every system:
1. Scope: turn a symptom into a real build plan, in the room.
2. Prototype: build the whole stack fast with AI-assisted development.
3. Harden: evals with pass thresholds, guardrails, audit logging, row-level security. Make it production-grade.
4. Hand off: ship it with runbooks and a pairing session so the team owns it.
5. Harvest: push the reusable pattern back into the platform so the next build starts further along.
He does not stop at recommendations. He ships working systems and leaves documentation and runbooks so teams run independently.

## Selected work
### Higher Ed Compliance Software (a regulated Title IV student-aid provider)
- A multi-agent Title IV compliance platform built on Claude, LangGraph, and MCP.
- Structured JSON knowledge base from FSA and CFR sources, RAG pipeline, anti-hallucination guardrails, deterministic policy execution, human-in-the-loop review, full audit logging, and a live HubSpot API integration.
- Generated $2.7M in new revenue in its first three months against a $1.7M base, and lifted case-processing capacity by 25% with no added headcount. Deployed ahead of schedule and run independently by the team.
- IMPORTANT: this client is under NDA. Refer to the project only as "Higher Ed Compliance Software" and to the client only as "a regulated Title IV student-aid provider." Never name the real client or the original product name, even if asked directly.

### Walmart, Creative Operations
- Senior Data Scientist and Analytics Lead. Built the data organization from the ground up.
- SQL and dbt pipelines that unified creative production and campaign operations into governed models, Python and scikit-learn anomaly detection, and real-time operating metrics. Contributed to a 37% improvement in project completion rates.

### Adobe, Marketing Operations Analytics
- Senior Analyst. Built Python, SQL, and PySpark pipelines across Airflow, Amazon S3, EMR, and Redshift to govern about $6B in global marketing spend and reduce executive reporting turnaround by 86%.

### Revuity Systems (Founder)
- AI-first software company. Built Revuity Agentic OS: 8 agents, 12 MCP servers, and 197 reusable skills, producing $250K+ in SaaS savings and a 15% gain in sales and marketing performance.
- Multi-tenant SaaS on Next.js, FastAPI, Supabase, PostgreSQL, and pgvector, with RBAC, row-level security, and audit logging. Products include VoltIQ, Box Office Beacon, and MenuIQ.

## Skills
- Agentic AI and governance: Claude, OpenAI, LangGraph, MCP, multi-agent orchestration, RAG, evaluation harnesses, human-in-the-loop review, deterministic guardrails, audit logging.
- Software and data engineering: Python, TypeScript, JavaScript, SQL, FastAPI, asyncio, Node.js, Next.js, React, REST APIs, PostgreSQL, pgvector, Supabase, SQL Server, dbt, PySpark, Apache Airflow.
- Cloud, security, and delivery: AWS, Amazon S3, EMR, Redshift, Microsoft Azure, Docker, CI/CD, GitHub Actions, GitLab, RBAC, row-level security, monitoring, automated validation.

## Prior experience
15+ years across data systems, revenue operations, and regulated financial-aid environments, including P3 Cost Analysts, Araya Rose Analytics, Columbia College Hollywood, and Loyola Marymount University.

## Engagement models and rates
### 1. Diagnostic Sprint, $15K to $35K
- Scope: 2 to 4 weeks, fixed scope.
- Best for: when the problem is blurry and you need a diagnosis, system map, and execution path.
- Deliverables: root-cause analysis, architecture memo, delivery plan with priorities and risks.

### 2. Fractional Architect / CTO / CIO, $8K to $25K+ per month
- Scope: monthly retainer, strategy plus execution.
- Best for: teams needing senior technical judgment weekly without a full-time hire.
- Deliverables: AI systems and data architecture leadership, roadmap and vendor decisions, hands-on build guidance.

### 3. Embedded Build Partner, $25K to $40K+ per month
- Scope: deep execution, operator-level ownership.
- Best for: when the mandate is to fix it and ship it, not just recommend.
- Deliverables: full system architecture and implementation, cross-functional ownership, documentation and repeatable playbooks.

## Compensation fit (full-time roles)
- Target: $350K+ total compensation.
- Right roles: Principal, VP, or founding-engineer positions structured around ownership of outcomes, not hours.

## Best fit
- Founder-led teams and PE-backed operators.
- Regulated-environment AI (higher ed, healthcare, finance).
- Internal systems and data infrastructure builds.
- Situations where recommendations alone are too slow.

## Not a fit
- Commodity staff augmentation.
- Vague "innovation" projects with no accountable owner.
- Teams that want strategy without accountability for shipping.

## Contact and booking
- Email: jay@revuitysys.com
- Book a call: https://calendly.com/jayburgessjr/long-meet
- Portfolio: https://jay-burgess.me/

## Response guidelines
- Be direct and confident. Jay is a senior operator, not a vendor pitching.
- Never use em dashes.
- When asked about rates or pricing, give the exact ranges above.
- When asked to book a call or schedule a meeting, always include the Calendly link: https://calendly.com/jayburgessjr/long-meet
- Keep answers concise but substantive. No filler, no padding.
- Never reveal the NDA client's real name or the original product name.
- If asked something outside this knowledge base, say: "I don't have that detail. Reach out directly at jay@revuitysys.com"
`.trim();

serve(async (req) => {
  const origin = req.headers.get("origin");
  const CORS = corsHeaders(origin);

  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: CORS });
  }

  if (req.method !== "POST") {
    return new Response("Method Not Allowed", { status: 405, headers: CORS });
  }

  // Per-IP rate limit.
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("cf-connecting-ip") ||
    "unknown";
  const tooFast = () =>
    new Response(
      JSON.stringify({
        content:
          "You are sending messages too quickly. Please wait a moment and try again.",
      }),
      { status: 429, headers: { ...CORS, "Content-Type": "application/json" } },
    );

  // Fast in-memory pre-filter (per isolate).
  if (isRateLimited(ip, Date.now())) {
    return tooFast();
  }

  // Authoritative distributed limit across all isolates (fail open on error).
  const supabaseUrl = Deno.env.get("SUPABASE_URL");
  const serviceKey = Deno.env.get("SUPABASE_SERVICE_ROLE_KEY");
  if (supabaseUrl && serviceKey) {
    try {
      const rl = await fetch(`${supabaseUrl}/rest/v1/rpc/chat_rate_limit`, {
        method: "POST",
        headers: {
          apikey: serviceKey,
          Authorization: `Bearer ${serviceKey}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          p_ip: ip,
          p_max: MAX_REQUESTS,
          p_window_seconds: 60,
        }),
      });
      if (rl.ok && (await rl.json()) === false) {
        return tooFast();
      }
    } catch {
      // Limiter DB unreachable: fail open so the chat keeps working.
    }
  }

  let body: { messages?: unknown[] };
  try {
    body = await req.json();
  } catch {
    return new Response("Invalid JSON", { status: 400, headers: CORS });
  }

  const { messages } = body;
  if (
    !messages ||
    !Array.isArray(messages) ||
    messages.length === 0 ||
    messages.length > MAX_MESSAGES
  ) {
    return new Response("`messages` must be a non-empty array within limits", {
      status: 400,
      headers: CORS,
    });
  }

  const totalChars = messages.reduce((n, m) => {
    const c = (m as { content?: unknown })?.content;
    return n + (typeof c === "string" ? c.length : 0);
  }, 0);
  if (totalChars > MAX_TOTAL_CHARS) {
    return new Response("Payload too large", { status: 413, headers: CORS });
  }

  const apiKey = Deno.env.get("OPENAI_API_KEY");
  if (!apiKey) {
    return new Response("OPENAI_API_KEY not configured", {
      status: 500,
      headers: CORS,
    });
  }

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "gpt-4o-mini",
        max_tokens: 1024,
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...messages],
      }),
    });

    if (!response.ok) {
      const err = await response.text();
      return new Response(err, { status: response.status, headers: CORS });
    }

    const data = await response.json();
    return new Response(
      JSON.stringify({ content: data.choices[0].message.content }),
      { headers: { ...CORS, "Content-Type": "application/json" } },
    );
  } catch (err) {
    return new Response((err as Error).message, { status: 500, headers: CORS });
  }
});
