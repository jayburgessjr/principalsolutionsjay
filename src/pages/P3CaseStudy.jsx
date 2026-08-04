import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";
import Footer from "../components/Footer";

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">
          Case Study · Revenue Operations · P3 Cost Analysts
        </div>
        <h1 className="cs-title">
          Predictive <span>Retention Platform</span>
        </h1>
        <p className="cs-desc">
          Revenue operations was reacting to account risk after it showed up in
          the numbers. I built an end-to-end platform with a machine-learning
          retention model embedded in daily operations, so pricing and portfolio
          decisions ran on evidence instead of hindsight.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Organization</div>
            <div className="cmi-val">P3 Cost Analysts</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Revenue Operations</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Senior Data Systems Engineer</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Result</div>
            <div className="cmi-val">Platform built and shipped end to end</div>
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
      <section className="cs-section">
        <div className="cs-section-inner">
          <div className="section-label">The problem</div>
          <h2>Account risk showed up too late.</h2>
          <div className="cs-body reveal" ref={r1}>
            <div className="cs-prose">
              <p>
                Retention, pricing, and portfolio decisions were being made
                without a reliable read on which accounts were at risk. The
                signals existed in the data, but they were scattered and
                backward-looking, so the team learned about churn after it had
                already happened. Pricing decisions carried more guesswork than
                they needed to.
              </p>
              <p>
                What the operation needed was not another report. It was
                retention intelligence built into the daily workflow, close
                enough to the decision to actually change it.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section" style={{ background: "var(--panel)" }}>
        <div className="cs-section-inner">
          <div className="section-label">What I built</div>
          <h2>One platform, owned end to end.</h2>
          <div className="cs-body reveal" ref={r2}>
            <div className="cs-prose">
              <p>
                I built the platform end to end: a Next.js front end, custom
                backend services and APIs, PostgreSQL and SQL Server data
                models, and Power BI reporting on top. Every layer was mine,
                from the schema to the screen.
              </p>
              <p>
                Then I integrated a machine-learning customer-retention model
                into that platform and put it where the work happens. Instead of
                a data science artifact that lived in a notebook, the model
                became a daily operating tool that helped the team identify
                account risk earlier, evaluate pricing decisions with more
                confidence, and forecast portfolio revenue.
              </p>
            </div>
            <div className="cs-sidebar">
              <div className="finding-box">
                <div className="fb-label">Stack</div>
                <div className="fb-text">
                  Next.js, custom backend services and APIs, PostgreSQL, SQL
                  Server, Power BI, and an ML retention model.
                </div>
              </div>
              <div className="finding-box">
                <div className="fb-label">Where the model lived</div>
                <div className="fb-text">
                  Embedded in daily operations, next to the pricing and
                  portfolio decisions it was meant to inform.
                </div>
              </div>
            </div>
          </div>
          <div className="outcomes-grid reveal" ref={gridRef}>
            <div className="outcome-cell">
              <div className="oc-label">Account risk</div>
              <div className="oc-val">Earlier</div>
              <div className="oc-desc">
                Identified before it showed up in the revenue numbers, not after
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Pricing decisions</div>
              <div className="oc-val">Evidence</div>
              <div className="oc-desc">
                Evaluated against model output instead of gut feel
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Ownership</div>
              <div className="oc-val">Full stack</div>
              <div className="oc-desc">
                Front end, backend, data models, and the ML model, all built by
                one engineer
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
        Want the model
        <br />
        <span>where the work is?</span>
      </h3>
      <p>
        I put machine learning into the daily workflow, not a notebook, so it
        actually changes the decision. Let's talk.
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

export default function P3CaseStudy() {
  usePageMeta({
    title: "Predictive Retention Platform Case Study, Jay Burgess",
    description:
      "How Jay Burgess built an end-to-end revenue operations platform at P3 Cost Analysts with a machine-learning retention model embedded in daily operations for earlier account-risk visibility and better pricing decisions.",
  });
  return (
    <>
      <Hero />
      <Body />
      <CTA />
      <Footer />
    </>
  );
}
