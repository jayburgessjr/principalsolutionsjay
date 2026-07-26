import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";

const PRODUCTS = [
  {
    name: "Helm",
    cat: "Product · Revuity",
    desc: "A software-first fractional CIO: an AI-driven system inventory, risk flags, and a draft roadmap, with escalation to a human CIO when it matters.",
    tags: ["React", "Supabase", "Claude"],
    url: "https://helm.revuitysys.com/",
  },
  {
    name: "Signal",
    cat: "Product · Revuity",
    desc: "An AI social media director for authors, speakers, and thought leaders: strategy, drafting, scheduling, and analytics in one place.",
    tags: ["React", "Supabase"],
    url: "https://signal.revuitysys.com/",
  },
  {
    name: "Build Wealth Here",
    cat: "Product · Revuity",
    desc: "AI signals, risk controls, and decision tools across stocks, crypto, options, and prediction markets, consolidated into one decision loop.",
    tags: ["React", "Supabase"],
    url: "https://wealthos.revuitysys.com/",
  },
  {
    name: "VoltIQ",
    cat: "Product · Revuity",
    desc: "Vertical market intelligence for LA solar contractors post NEM 3.0: zip-code permit velocity, price benchmarks, and battery attachment rates.",
    tags: ["React", "Supabase"],
    url: "https://voltiq.revuitysys.com/",
  },
  {
    name: "MenuProfitPro",
    cat: "Product · Revuity",
    desc: "Analyzes recipes, costs, and pricing to show restaurant operators which dishes make money and which drain margin.",
    tags: ["React", "Supabase"],
    url: "https://menuiq.revuitysys.com/",
  },
  {
    name: "GrantEdge",
    cat: "Product · Revuity",
    desc: "Competitive intelligence for nonprofits pursuing federal grants: who is winning awards, in what programs, and where the open lanes are.",
    tags: ["React", "Supabase"],
    url: "https://meridian.revuitysys.com/",
  },
];

const REPOS = [
  {
    name: "eligibility-agent",
    cat: "Agentic AI",
    desc: "A LangGraph and MCP reference agent for eligibility routing in regulated domains, sanitized from production compliance work.",
    tags: ["LangGraph", "MCP", "Python"],
    url: "https://github.com/jayburgessjr/eligibility-agent",
  },
  {
    name: "revuity-agentic-os",
    cat: "Agentic delivery",
    desc: "A Claude Code plugin that packages my build system: phase routing, prompt surfacing, and structured session retrospectives.",
    tags: ["Claude Code", "MCP"],
    url: "https://github.com/jayburgessjr/revuity-agentic-os",
  },
  {
    name: "prospecting-agent",
    cat: "Agentic AI",
    desc: "A production prospecting agent with lead ingestion and enrichment, a deterministic multi-step cadence, and personalization inside explicit guardrails.",
    tags: ["Agents", "Guardrails", "Python"],
    url: "https://github.com/jayburgessjr/prospecting-agent",
  },
  {
    name: "wealthos-hub",
    cat: "Full-stack",
    desc: "A multi-tenant finance platform: 44 tables under row-level security with 203 policies, Stripe billing, and Deno edge functions.",
    tags: ["React", "Supabase", "Stripe"],
    url: "https://github.com/jayburgessjr/wealthos-hub",
  },
  {
    name: "stratfordsys",
    cat: "Full-stack",
    desc: "An AI portfolio and trading platform with KYC and AML compliance and a multi-database architecture.",
    tags: ["React", "Supabase", "Compliance"],
    url: "https://github.com/jayburgessjr/stratfordsys",
  },
  {
    name: "modern-data-platform-template",
    cat: "Data platform",
    desc: "An end-to-end lakehouse blueprint: raw, staging, core, marts, tests, and governance.",
    tags: ["dbt", "Lakehouse"],
    url: "https://github.com/jayburgessjr/modern-data-platform-template",
  },
];

function CardGrid({ items, cta }) {
  return (
    <div className="repo-grid">
      {items.map((r) => (
        <a
          key={r.name}
          href={r.url}
          className="repo-card"
          target="_blank"
          rel="noreferrer"
        >
          <div className="repo-cat">{r.cat}</div>
          <div className="repo-name">{r.name}</div>
          <p>{r.desc}</p>
          <div className="repo-tags">
            {r.tags.map((t) => (
              <span key={t}>{t}</span>
            ))}
          </div>
          <span className="repo-link">{cta}</span>
        </a>
      ))}
    </div>
  );
}

export default function WorkPage() {
  const r1 = useReveal();
  const r2 = useReveal();
  usePageMeta({
    title: "Portfolio, Jay Burgess, Forward Deployed Engineer",
    description:
      "The full portfolio of Jay Burgess, Principal Forward Deployed Engineer in Los Angeles: shipped Revuity products and open-source engineering across agentic AI, full-stack, and data platforms.",
  });

  return (
    <>
      <section className="cs-hero">
        <div className="cs-inner">
          <div className="cs-eyebrow">Portfolio</div>
          <h1 className="cs-title">
            Things I've <span>shipped</span>
          </h1>
          <p className="cs-desc">
            Beyond the case studies: the products I run and the open-source
            engineering behind how I build. For the deep dives with outcomes,{" "}
            <Link to="/case-studies" style={{ color: "var(--orange)" }}>
              see the case studies
            </Link>
            .
          </p>
        </div>
      </section>

      <section className="cs-section" style={{ paddingTop: "0" }}>
        <div className="work-wrap reveal" ref={r1}>
          <div className="section-label">Products</div>
          <h2 className="method-h2" style={{ marginBottom: "0.75rem" }}>
            Zero to deployed, most of them solo.
          </h2>
          <p className="method-intro" style={{ marginBottom: "2.5rem" }}>
            Live software products built and operated through Revuity Systems.
            They are the evidence behind the delivery speed.
          </p>
          <CardGrid items={PRODUCTS} cta="Visit →" />
        </div>
      </section>

      <section
        className="cs-section"
        style={{ paddingTop: "4rem", borderTop: "1px solid var(--rule)" }}
      >
        <div className="work-wrap reveal" ref={r2}>
          <div className="section-label">Open source and engineering</div>
          <h2 className="method-h2" style={{ marginBottom: "0.75rem" }}>
            More of how I build.
          </h2>
          <p className="method-intro" style={{ marginBottom: "2.5rem" }}>
            Public repositories that show the range: agentic systems on Claude,
            LangGraph, and MCP, full-stack multi-tenant products, and the data
            platforms underneath.
          </p>
          <CardGrid items={REPOS} cta="View on GitHub →" />
        </div>
      </section>

      <section className="cs-cta">
        <h3>
          Want a builder who
          <br />
          <span>actually ships?</span>
        </h3>
        <p>
          I scope the real problem, build the whole stack, and hand it off so
          your team owns it. Let's talk.
        </p>
        <a
          href="https://calendly.com/jayburgessjr/long-meet"
          className="cs-cta-btn"
          target="_blank"
          rel="noreferrer"
        >
          Book a call →
        </a>
      </section>

      <footer>
        <div className="footer-id">
          <strong>Jay Burgess</strong> · Principal Forward Deployed Engineer ·
          Founder, Revuity Systems
        </div>
        <div className="footer-id">jay@revuitysys.com</div>
      </footer>
    </>
  );
}
