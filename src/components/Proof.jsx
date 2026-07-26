import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";

const proofRows = [
  {
    index: "01",
    label: "Regulated AI · Title IV · Live",
    title: "Higher Ed Compliance Software",
    desc: "A compliance team at a regulated Title IV student-aid provider was buried in rules and manual checks. I built them a multi-agent platform on Claude, LangGraph, and MCP, and I stayed with it from the first discovery call through launch and the handoff. It runs today inside a federally regulated environment.",
    methodLabel: "What I built",
    steps: [
      "JSON regulatory knowledge base built from FSA Title IV sources",
      "RAG pipeline with anti-hallucination guardrails and deterministic policy execution",
      "Human-in-the-loop review, audit logging, and structured outputs",
      "Live HubSpot API integration replacing the manual process",
    ],
    outcomeLabel: "Result",
    outcomeNum: "$2.7M",
    outcomeDesc:
      "New revenue in the first three months on a $1.7M base, and 25% more case-processing capacity with no new hires.",
    link: "/higher-ed-compliance-software",
  },
  {
    index: "02",
    label: "Enterprise scale · Walmart · Creative Operations",
    title: "Walmart, a data org built from scratch",
    desc: "Creative Operations had plenty of data and no way to trust it. As Senior Data Scientist and Analytics Lead I turned the bottlenecks into clean models and tools leaders could actually decide with, then built the data organization to keep it running at Walmart's scale.",
    methodLabel: "What I built",
    steps: [
      "SQL and dbt pipelines unifying creative production and campaign operations into governed models",
      "Python and scikit-learn anomaly detection for spend spikes and workflow deviations",
      "Real-time operating metrics and executive decision-support tools",
      "A Data Council governance model designed to outlast my engagement",
    ],
    outcomeLabel: "Result",
    outcomeNum: "37%",
    outcomeDesc: "A 37% jump in project completion rates across the division.",
    link: "/walmart-case-study",
  },
  {
    index: "03",
    label: "Founder · Revuity Systems",
    title: "Revuity Agentic OS",
    desc: "Revuity is the company I started to prove I could do this with no big organization behind me. Its Agentic OS is the machinery that makes agentic delivery repeatable, and I built the whole thing myself.",
    methodLabel: "What I built",
    steps: [
      "8 agents, 12 MCP servers, and 197 reusable skills",
      "Multi-tenant SaaS on Next.js, FastAPI, Supabase, PostgreSQL, pgvector, RBAC, row-level security",
      "Production LLM controls: tool contracts, evals, deterministic routing, audit trails, human approval",
      "Platform consolidation and white-label deployments",
    ],
    outcomeLabel: "Result",
    outcomeNum: "$250K+",
    outcomeDesc:
      "More than $250K in SaaS savings, plus a 15% lift in sales and marketing.",
    link: "/revuity-case-study",
  },
];

export default function Proof() {
  const gridRef = useReveal();

  return (
    <section className="proof" id="proof">
      <div className="proof-inner">
        <div className="section-label">Selected work</div>
        <h2 className="method-h2" style={{ marginBottom: "1rem" }}>
          Three systems. Regulated AI, enterprise scale, founder speed.
        </h2>
        <p className="method-intro">
          Different problems, one job. I owned each of these from the first
          conversation to the day the team ran it without me, and all three are
          live in production.
        </p>

        <div className="proof-grid reveal" ref={gridRef}>
          {proofRows.map((row) => (
            <div className="proof-row" key={row.index}>
              <div className="pr-index">{row.index}</div>
              <div className="pr-main">
                <div className="pr-main-label">{row.label}</div>
                <h3>{row.title}</h3>
                <p>{row.desc}</p>
                <Link to={row.link} className="pr-link">
                  Read the case study →
                </Link>
              </div>
              <div className="pr-method">
                <div className="pr-method-label">{row.methodLabel}</div>
                <ul className="pr-steps">
                  {row.steps.map((s, i) => (
                    <li key={i}>{s}</li>
                  ))}
                </ul>
              </div>
              <div className="pr-outcome">
                <div className="pr-outcome-label">{row.outcomeLabel}</div>
                <div className="pr-outcome-num">{row.outcomeNum}</div>
                <p>{row.outcomeDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
