import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";

const WORK = [
  {
    slug: "/higher-ed-compliance-software",
    cat: "Regulated AI · Title IV",
    title: "Higher Ed Compliance Software",
    desc: "A multi-agent Title IV compliance platform on Claude, LangGraph, and MCP, owned end to end from discovery through deployment and handoff, for a regulated student-aid provider.",
    metric: "$2.7M",
    metricLabel: "new revenue in three months",
    img: "/work-compliance.jpg",
  },
  {
    slug: "/walmart-case-study",
    cat: "Enterprise scale · Walmart",
    title: "Walmart, a data org built from scratch",
    desc: "Built the Creative Operations data organization from the ground up at Fortune 1 scale, turning bottlenecks into governed models and decision-support tools.",
    metric: "37%",
    metricLabel: "higher project completion",
    img: "/work-walmart.jpg",
  },
  {
    slug: "/revuity-case-study",
    cat: "Founder · Revuity Systems",
    title: "Revuity Agentic OS",
    desc: "The operational backbone that makes agentic delivery repeatable. 8 agents, 12 MCP servers, and 197 reusable skills, built as founder with no team to fall back on.",
    metric: "$250K+",
    metricLabel: "SaaS savings",
    img: "/work-revuity.jpg",
  },
  {
    slug: "/revuity-products",
    cat: "Product studio · Revuity",
    title: "Revuity product portfolio",
    desc: "Shipped products across five verticals, including VoltIQ, Box Office Beacon, and MenuIQ. Each one scoped, built, and launched with a ship-first discipline.",
    metric: "8",
    metricLabel: "products shipped",
    img: "/work-products.jpg",
  },
];

function WorkCard({ item }) {
  return (
    <Link to={item.slug} className="work-card">
      <div
        className="work-media"
        style={{
          backgroundImage: `linear-gradient(160deg, rgba(0,0,0,0.2), rgba(0,0,0,0.62)), url('${item.img}')`,
        }}
      >
        <div className="work-cat">{item.cat}</div>
        <div className="work-metric">
          <div className="work-metric-num">{item.metric}</div>
          <div className="work-metric-label">{item.metricLabel}</div>
        </div>
      </div>
      <div className="work-body">
        <h3>{item.title}</h3>
        <p>{item.desc}</p>
        <span className="work-link">Read the case study →</span>
      </div>
    </Link>
  );
}

export default function WorkPage() {
  const gridRef = useReveal();
  usePageMeta({
    title: "Work, Jay Burgess, Forward Deployed Engineer case studies",
    description:
      "Selected work from Jay Burgess, Principal Forward Deployed Engineer in Los Angeles. Regulated AI, enterprise data at Fortune 1 scale, and founder-built products, each owned end to end.",
  });

  return (
    <>
      <section className="cs-hero">
        <div className="cs-inner">
          <div className="cs-eyebrow">Portfolio</div>
          <h1 className="cs-title">
            Selected <span>work</span>
          </h1>
          <p className="cs-desc">
            Different problems, one job. I owned each of these from the first
            conversation to the day the team ran it without me. Regulated AI,
            enterprise scale, and founder speed.
          </p>
        </div>
      </section>

      <section className="cs-section" style={{ paddingTop: "0" }}>
        <div className="work-wrap">
          <div className="work-grid reveal" ref={gridRef}>
            {WORK.map((item) => (
              <WorkCard key={item.slug} item={item} />
            ))}
          </div>
        </div>
      </section>

      <section className="cs-cta">
        <h3>
          Want work like this
          <br />
          <span>inside your team?</span>
        </h3>
        <p>
          I embed, scope the real problem, build the whole stack, and hand it
          off so your team owns it. Let's talk.
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
