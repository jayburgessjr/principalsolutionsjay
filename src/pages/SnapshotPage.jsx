import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { usePageMeta } from "../hooks/usePageMeta";
import snapshotPdf from "../assets/jay-burgess-snapshot.pdf";
import "../casestudy.css";

const architecturePdf = "/jay-burgess-governed-ai-architecture.pdf";
const evolutionInfographic = "/jay-burgess-fde-evolution-infographic.png";

const CALENDLY_URL = "https://calendly.com/jayburgessjr/long-meet";
const LINKEDIN_URL = "https://www.linkedin.com/in/jayburgessjr/";

const METRICS = [
  {
    value: "$2.7M",
    label: "New revenue, 3 months",
    desc: "ReggieAI, vs. a $1.7M base",
  },
  {
    value: "17+",
    label: "Production systems",
    desc: "Regulated & Fortune 500",
  },
  {
    value: "37%",
    label: "Higher project completion",
    desc: "Walmart, Creative Ops",
  },
  {
    value: "86%",
    label: "Faster exec reporting",
    desc: "Adobe, ~$6B ad spend",
  },
];

const CASES = [
  {
    tag: "Regulated AI · Title IV",
    title: "Higher Ed Compliance Software",
    outcome: "$2.7M new revenue in 3 months, +25% case capacity",
    link: "/higher-ed-compliance-software",
  },
  {
    tag: "Enterprise scale · Walmart",
    title: "A data org built from scratch",
    outcome: "37% higher project completion rates",
    link: "/walmart-case-study",
  },
  {
    tag: "Founder-built · Live demo",
    title: "WealthOSnow, a personal financial OS",
    outcome: "50+ tools shipped solo, live product",
    link: "/wealthos-case-study",
  },
  {
    tag: "Founder-built · Live demo",
    title: "ConsultingIP, an ops dashboard for higher-ed",
    outcome: "Role-based views, no login required",
    link: "/consultingip-case-study",
  },
];

const STACK =
  "Claude · LangGraph · MCP · Python · TypeScript · React · FastAPI · AWS · Supabase · PostgreSQL";

function useContactInfo() {
  const [contact, setContact] = useState(null);
  useEffect(() => {
    const emailUser = ["jayburgessjr"].join("");
    const emailDomain = ["gmail", "com"].join(".");
    const phoneParts = ["213", "949", "4813"];
    setContact({
      email: `${emailUser}@${emailDomain}`,
      phone: phoneParts.join("-"),
      phoneHref: `1${phoneParts.join("")}`,
    });
  }, []);
  return contact;
}

function SnapHeader() {
  const contact = useContactInfo();
  return (
    <header className="snap-header">
      <div className="snap-header-top">
        <div>
          <div className="snap-eyebrow">One-page snapshot</div>
          <h1 className="snap-name">Jay Burgess</h1>
          <p className="snap-title">
            Principal Forward Deployed Engineer · Founder, Revuity Systems
          </p>
        </div>
        <div className="snap-contact">
          <div>
            {contact ? (
              <a href={`mailto:${contact.email}`}>{contact.email}</a>
            ) : (
              "Loading…"
            )}
          </div>
          <div>
            {contact ? (
              <a href={`tel:+${contact.phoneHref}`}>{contact.phone}</a>
            ) : (
              "Loading…"
            )}
          </div>
          <div>
            <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
              linkedin.com/in/jayburgessjr
            </a>
          </div>
          <div>Los Angeles, CA · Open to Remote</div>
        </div>
      </div>
      <p className="snap-summary">
        15+ years turning ambiguous, regulated, and enterprise-scale problems
        into production software. Owns the full lifecycle, discovery,
        architecture, code, hardening, and handoff, so the client's own team can
        run what gets built after I leave.
      </p>
    </header>
  );
}

function SnapMetrics() {
  return (
    <section className="snap-metrics">
      {METRICS.map((m) => (
        <div className="snap-metric" key={m.label}>
          <div className="snap-metric-val">{m.value}</div>
          <div className="snap-metric-label">{m.label}</div>
          <div className="snap-metric-desc">{m.desc}</div>
        </div>
      ))}
    </section>
  );
}

function SnapCases() {
  return (
    <section className="snap-cases">
      {CASES.map((c) => (
        <Link to={c.link} className="snap-case" key={c.link}>
          <div className="snap-case-tag">{c.tag}</div>
          <div className="snap-case-title">{c.title}</div>
          <div className="snap-case-outcome">{c.outcome}</div>
        </Link>
      ))}
    </section>
  );
}

function SnapInfographic() {
  return (
    <section className="snap-infographic">
      <img
        src={evolutionInfographic}
        alt="Timeline infographic: Jay Burgess, the evolution of a Principal Forward Deployed Engineer, from 2008 regulatory foundations through 2022-present agentic AI and FDE era"
        loading="lazy"
      />
    </section>
  );
}

function SnapStack() {
  return (
    <section className="snap-stack">
      <span className="snap-stack-label">Stack</span> {STACK}
    </section>
  );
}

function SnapArchitecture() {
  return (
    <section className="snap-deck">
      <div className="snap-deck-copy">
        <span className="snap-stack-label">Architecture portfolio</span>
        <p className="snap-deck-desc">
          An 11-page technical deep-dive on how I govern AI systems for
          regulated environments: a 4-layer framework for constraining LLMs
          (deterministic routing, structured outputs, audit trails,
          human-in-the-loop review), plus architecture and stack breakdowns for
          HEAG, Revuity, Adobe, and Walmart.
        </p>
      </div>
      <a
        href={architecturePdf}
        download="Jay-Burgess-Governed-AI-Architecture.pdf"
        className="btn-ghost no-print snap-deck-btn"
      >
        Download deck ↓
      </a>
    </section>
  );
}

function SnapFooter() {
  return (
    <footer className="snap-footer">
      <div>
        <Link to="/resume">Full resume →</Link>
        <span className="snap-footer-sep">·</span>
        <Link to="/case-studies">All case studies →</Link>
      </div>
      <div className="snap-footer-actions">
        <a
          href={snapshotPdf}
          download="Jay-Burgess-Snapshot.pdf"
          className="btn-ghost no-print"
        >
          Download PDF ↓
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-primary"
        >
          Schedule a Call →
        </a>
      </div>
    </footer>
  );
}

export default function SnapshotPage() {
  usePageMeta({
    title:
      "One-page snapshot, Jay Burgess — Principal Forward Deployed Engineer",
    description:
      "A one-page snapshot of Jay Burgess: headline metrics, three case study highlights, and contact details for hiring managers and recruiters.",
  });

  return (
    <div className="snapshot-page">
      <SnapHeader />
      <SnapMetrics />
      <SnapCases />
      <SnapInfographic />
      <SnapStack />
      <SnapArchitecture />
      <SnapFooter />
    </div>
  );
}
