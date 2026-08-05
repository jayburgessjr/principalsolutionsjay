import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData } from "../hooks/useStructuredData";
import "../casestudy.css";
import Footer from "../components/Footer";

const DEMO_URL = "https://wealthosnow.jay-burgess.me/";

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">
          Case Study · Founder-Built Product · WealthOSnow
        </div>
        <h1 className="cs-title">
          A Personal <span>Financial Operating System</span>
        </h1>
        <p className="cs-desc">
          Wealth management tools are split across a brokerage app, a budgeting
          app, and a spreadsheet, and none of them talk to each other. I built
          WealthOSnow as a single platform that runs investing, household
          finances, and long-term wealth planning off one data model, with AI
          signals and advisors layered on top.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Organization</div>
            <div className="cmi-val">Personal product, self-funded</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Fintech · Wealth Management</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Sole architect and engineer</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Result</div>
            <div className="cmi-val">Live product, 50+ tools shipped</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LiveDemo() {
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="section-label">Live demo</div>
        <h2>Try it yourself.</h2>
        <p className="cs-desc" style={{ marginBottom: "1.5rem" }}>
          This is the actual product, running live, not a mockup.
        </p>
        <div className="demo-frame">
          <div className="demo-frame-bar">
            <div className="demo-frame-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="demo-frame-url">wealthosnow.jay-burgess.me</div>
            <div className="demo-frame-live">Live</div>
          </div>
          <iframe src={DEMO_URL} title="WealthOSnow live demo" loading="lazy" />
          <div className="demo-frame-cta">
            <a
              href={DEMO_URL}
              target="_blank"
              rel="noreferrer"
              className="pc-link"
            >
              Open the full demo in a new tab →
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

function Body() {
  const r1 = useReveal();
  const r2 = useReveal();
  const gridRef = useReveal();
  return (
    <>
      <section className="cs-section" style={{ background: "var(--panel)" }}>
        <div className="cs-section-inner">
          <div className="section-label">The problem</div>
          <h2>Wealth tools that don't talk to each other.</h2>
          <div className="cs-body reveal" ref={r1}>
            <div className="cs-prose">
              <p>
                Managing money well means holding three views at once: how your
                investments are performing, whether your household cash flow is
                healthy, and whether you're on track for long-term goals like
                retirement or real estate. Most people run these three views
                across three or four disconnected tools, a brokerage app, a
                budgeting app, a retirement calculator, and a spreadsheet that
                tries to stitch it together and always falls out of date.
              </p>
              <p>
                I wanted one operating system that treated investing, household
                finance, and long-term wealth planning as one connected problem
                instead of three separate apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <div className="section-label">What I built</div>
          <h2>One platform, three modes.</h2>
          <div className="cs-body reveal" ref={r2}>
            <div className="cs-prose">
              <p>
                WealthOSnow runs three modes on one data model: Invest (a
                personal hedge-fund operating layer with AI-scored signals, a
                compound engine, and market intelligence across 10+ asset
                classes), Household (a command center for budgets, bills, debt
                payoff, and AI-generated monthly financial health reports), and
                Wealth (retirement projections, real estate, dividends,
                insurance, and estate planning).
              </p>
              <p>
                Two AI advisors sit across all three modes with full portfolio
                context, so a question about a trade, a bill, or a retirement
                projection gets answered against your actual numbers, not a
                generic model.
              </p>
            </div>
            <div className="cs-sidebar">
              <div className="finding-box">
                <div className="fb-label">Scope</div>
                <div className="fb-text">
                  50+ tools across investing, household finance, and wealth
                  planning, shipped as one product by one engineer.
                </div>
              </div>
              <div className="finding-box">
                <div className="fb-label">AI layer</div>
                <div className="fb-text">
                  Two portfolio-aware advisors plus a real-time signal engine
                  across stocks, crypto, options, and prediction markets.
                </div>
              </div>
            </div>
          </div>
          <div className="outcomes-grid reveal" ref={gridRef}>
            <div className="outcome-cell">
              <div className="oc-label">Tools shipped</div>
              <div className="oc-val">50+</div>
              <div className="oc-desc">
                Across investing, household, and wealth planning modes
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Asset coverage</div>
              <div className="oc-val">10+ classes</div>
              <div className="oc-desc">
                Equities, crypto, options, forex, real estate, prediction
                markets
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Ownership</div>
              <div className="oc-val">Solo build</div>
              <div className="oc-desc">
                Product, architecture, and every line of code, one engineer
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

function CTA() {
  return (
    <section className="cs-cta">
      <h3>
        Want speed like this
        <br />
        <span>on your problem?</span>
      </h3>
      <p>
        This is what building at founder speed looks like. Let's talk about what
        it would look like on yours.
      </p>
      <a
        href="https://calendly.com/jayburgessjr/long-meet"
        className="cs-cta-btn"
        target="_blank"
        rel="noreferrer"
      >
        Book a call →
      </a>
      <div style={{ marginTop: "2rem" }}>
        <Link to="/case-studies" className="cs-cta-btn-ghost">
          ← All case studies
        </Link>
      </div>
    </section>
  );
}

export default function WealthOSCaseStudy() {
  usePageMeta({
    title: "WealthOSnow Case Study, Jay Burgess",
    description:
      "How Jay Burgess built WealthOSnow, a personal financial operating system unifying investing, household finance, and long-term wealth planning with AI signals and advisors.",
  });
  useStructuredData("case-study-structured-data", {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "WealthOSnow Case Study",
    description:
      "How Jay Burgess built WealthOSnow, a personal financial operating system unifying investing, household finance, and long-term wealth planning with AI signals and advisors.",
    author: {
      "@type": "Person",
      "@id": "https://jay-burgess.me/#jay-burgess",
      name: "Jay Burgess",
    },
    publisher: {
      "@type": "Organization",
      name: "Revuity Systems",
      url: "https://revuitysystems.com",
    },
    dateCreated: "2026-08-03",
    url: "https://jay-burgess.me/wealthos-case-study",
    about: "WealthOSnow",
    keywords: [
      "WealthOSnow",
      "Personal Finance",
      "Wealth Planning",
      "AI Signals",
      "SaaS Product",
    ],
  });
  return (
    <>
      <Hero />
      <LiveDemo />
      <Body />
      <CTA />
      <Footer />
    </>
  );
}
