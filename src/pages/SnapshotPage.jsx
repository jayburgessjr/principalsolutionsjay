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

const BOOKS = [
  {
    cover: "/book-jays-art-of-systems-thinking.jpg",
    title: "Jay's Art of Systems Thinking",
    url: "https://www.amazon.com/dp/B0HDB4KWS1",
  },
  {
    cover: "/book-forward-deployed-engineer.jpg",
    title: "The Forward Deployed Engineer",
    url: "https://www.amazon.com/dp/B0HDB54ZTG",
  },
  {
    cover: "/book-agentic-engineering.jpg",
    title: "Agentic Engineering",
    url: "https://www.amazon.com/dp/B0GZHP2FHK",
  },
  {
    cover: "/book-agentic-builder.jpg",
    title: "The Agentic Builder",
    url: "https://www.amazon.com/dp/B0GZHN7B5C",
  },
  {
    // No cover art yet — matches src/components/Books.jsx's fallback.
    cover: null,
    title: "Stories from a Systems Thinker",
    url: "https://www.amazon.com/dp/B0GX2YFH78",
  },
];

const LATEST_ARTICLES = [
  {
    title: "Governing Forward Deployed AI in Regulated Enterprises",
    slug: "/article/governing-forward-deployed-ai",
  },
  {
    title: "Why AI Systems Fail at Scale",
    slug: "/article/ai-systems-at-scale",
  },
  {
    title: "The Organizational Cost of Data Debt",
    slug: "/article/data-debt",
  },
  {
    title: "Internal Tools as Strategic Infrastructure",
    slug: "/article/internal-tools",
  },
  {
    title: "The Principal Architect's Method",
    slug: "/article/root-cause-diagnosis",
  },
];

const BUILDS = [
  {
    image: "/demo-wealthosnow.png",
    tag: "Founder-built · Live product",
    title: "WealthOSnow, a personal financial OS",
    outcome: "50+ tools shipped, live product",
    link: "/wealthos-case-study",
  },
  {
    image: "/demo-consultingip.png",
    tag: "Founder-built · Live demo",
    title: "ConsultingIP, an ops dashboard for higher-ed",
    outcome: "Live demo, role-based views, no login required",
    link: "/consultingip-case-study",
  },
  {
    image: "/demo-sbworkflow.png",
    tag: "Founder-built · Live product",
    title: "SBWrkFlow, a command center for veteran advocacy",
    outcome: "Live product, paid subscription, Stripe-powered",
    link: "/sbworkflow-case-study",
  },
];

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
        <div className="snap-header-id">
          <img
            src="/jayburgessputplr.png"
            alt="Jay Burgess"
            className="snap-photo"
          />
          <div>
            <div className="snap-eyebrow">One-page snapshot</div>
            <h1 className="snap-name">Jay Burgess</h1>
            <p className="snap-title">
              Principal Forward Deployed Engineer · Founder, Revuity Systems
            </p>
          </div>
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

function SnapBuilds() {
  return (
    <section className="snap-builds">
      <span className="snap-stack-label">Builds</span>
      <div className="snap-builds-grid">
        {BUILDS.map((b) => (
          <Link to={b.link} className="snap-case snap-build" key={b.link}>
            <div className="snap-build-thumb-wrap">
              <img
                src={b.image}
                alt={`${b.title} screenshot`}
                className="snap-build-thumb"
                loading="lazy"
              />
            </div>
            <div className="snap-case-tag">{b.tag}</div>
            <div className="snap-case-title">{b.title}</div>
            <div className="snap-case-outcome">{b.outcome}</div>
          </Link>
        ))}
      </div>
    </section>
  );
}

function SnapBooks() {
  return (
    <section className="snap-books">
      <span className="snap-stack-label">Books</span>
      <div className="snap-books-list">
        {BOOKS.map((b) => (
          <a
            href={b.url}
            target="_blank"
            rel="noreferrer"
            className="snap-book-link"
            key={b.url}
          >
            {b.cover ? (
              <img
                src={b.cover}
                alt={`${b.title} cover`}
                className="snap-book-cover"
                loading="lazy"
              />
            ) : (
              <div className="snap-book-cover-placeholder" aria-hidden="true" />
            )}
            <span className="snap-book-title">{b.title}</span>
          </a>
        ))}
      </div>
    </section>
  );
}

function SnapArticles() {
  return (
    <section className="snap-articles">
      <span className="snap-stack-label">Latest Articles</span>
      <div className="snap-articles-list">
        {LATEST_ARTICLES.map((a) => (
          <Link to={a.slug} className="snap-article-link" key={a.slug}>
            {a.title}
          </Link>
        ))}
      </div>
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
      <SnapBuilds />
      <SnapInfographic />
      <SnapStack />
      <SnapBooks />
      <SnapArticles />
      <SnapArchitecture />
      <SnapFooter />
    </div>
  );
}
