import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";
import Footer from "../components/Footer";

const CASES = [
  {
    slug: "/higher-ed-compliance-software",
    cat: "Regulated AI · Title IV",
    title: "Higher Ed Compliance Software",
    desc: "A multi-agent Title IV compliance platform on Claude, LangGraph, and MCP, owned end to end from discovery through deployment and handoff, for a regulated student-aid provider.",
    metric: "+25%",
    metricLabel: "case-processing capacity, no added headcount",
    img: "/work-compliance.svg",
  },
  {
    slug: "/walmart-case-study",
    cat: "Enterprise scale · Walmart",
    title: "Walmart, a data org built from scratch",
    desc: "Built the Creative Operations data organization from the ground up at Fortune 1 scale, turning bottlenecks into governed models and decision-support tools.",
    metric: "37%",
    metricLabel: "higher project completion",
    img: "/work-walmart.svg",
  },
  {
    slug: "/adobe-case-study",
    cat: "Enterprise data · Adobe",
    title: "Adobe marketing analytics",
    desc: "Built governed pipelines and shared models that gave marketing, finance, and operations one trusted view of about $6B in global marketing spend.",
    metric: "86%",
    metricLabel: "faster executive reporting",
    img: "/work-adobe.svg",
  },
  {
    slug: "/revuity-case-study",
    cat: "Founder · Revuity Systems",
    title: "Revuity Agentic OS",
    desc: "The operational backbone that makes agentic delivery repeatable. 8 agents, 12 MCP servers, and 197 reusable skills, built as founder with no team to fall back on.",
    metric: "$250K+",
    metricLabel: "SaaS savings",
    img: "/work-revuity.svg",
  },
  {
    slug: "/p3-case-study",
    cat: "Revenue operations · P3 Cost Analysts",
    title: "Predictive retention platform",
    desc: "Built an end-to-end platform with a machine-learning retention model embedded in daily operations, for earlier account-risk visibility and better pricing decisions.",
    metric: "End to end",
    metricLabel: "platform, built and shipped",
    img: "/work-p3.svg",
  },
  {
    slug: "/wealthos-case-study",
    cat: "Founder-built product · WealthOSnow",
    title: "WealthOSnow, a personal financial OS",
    desc: "A live, self-funded product unifying investing, household finance, and long-term wealth planning with AI signals and advisors, built solo end to end.",
    metric: "50+",
    metricLabel: "tools shipped, live product",
    img: "/work-wealthos.svg",
  },
  {
    slug: "/consultingip-case-study",
    cat: "Founder-built demo · ConsultingIP",
    title: "ConsultingIP, an ops dashboard for higher-ed",
    desc: "A demo operations dashboard giving higher-education consulting practices real-time visibility into submission timeliness, consultant ratings, and institution risk.",
    metric: "Live demo",
    metricLabel: "role-based views, no login required",
    img: "/work-consultingip.svg",
  },
  {
    slug: "/sbworkflow-case-study",
    cat: "Founder-built product · SBWrkFlow",
    title: "SBWrkFlow, a command center for veteran advocacy",
    desc: "A live product unifying case management, real-time news monitoring, stakeholder tracking, and an AI copilot for advocates working veteran housing and benefits cases.",
    metric: "Live product",
    metricLabel: "paid subscription, Stripe-powered",
    img: "/work-sbworkflow.svg",
  },
];

function CaseCard({ item }) {
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

export default function CaseStudiesPage() {
  const gridRef = useReveal();
  usePageMeta({
    title: "Case studies, Jay Burgess, Forward Deployed Engineer",
    description:
      "Eight case studies from Jay Burgess, Principal Forward Deployed Engineer in Los Angeles: regulated AI, enterprise data at Walmart and Adobe, founder-built products at Revuity, WealthOSnow, ConsultingIP, and SBWrkFlow, and a predictive retention platform.",
  });

  return (
    <>
      <section className="cs-hero">
        <div className="cs-inner">
          <div className="cs-eyebrow">Case studies</div>
          <h1 className="cs-title">
            Selected <span>case studies</span>
          </h1>
          <p className="cs-desc">
            Eight deep dives, one job. I owned each of these from the first
            conversation to the day the team ran it without me. Regulated AI,
            enterprise scale, and founder speed.
          </p>
        </div>
      </section>

      <section className="cs-section" style={{ paddingTop: "0" }}>
        <div className="work-wrap">
          <div className="work-grid reveal" ref={gridRef}>
            {CASES.map((item) => (
              <CaseCard key={item.slug} item={item} />
            ))}
          </div>
          <p
            className="method-intro"
            style={{ marginTop: "2.5rem", textAlign: "center" }}
          >
            Looking for products and open-source repositories?{" "}
            <Link to="/work" style={{ color: "var(--orange)" }}>
              See the full portfolio →
            </Link>
          </p>
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

      <Footer />
    </>
  );
}
