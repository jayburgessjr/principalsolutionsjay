import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";
import Footer from "../components/Footer";

const DEMO_URL = "https://sbworkflow.jay-burgess.me/";

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">
          Founder-Built Product · Veteran Advocacy · SBWrkFlow
        </div>
        <h1 className="cs-title">
          A Command Center for <span>Veteran Advocacy</span>
        </h1>
        <p className="cs-desc">
          Advocates working West LA VA campus land-use and veteran housing cases
          were tracking case files, media coverage, and stakeholder
          relationships across notebooks, email threads, and memory. I built
          SBWrkFlow as a single command center: case management, real-time news
          monitoring, quick voice and image capture, and an AI copilot,
          purpose-built for advocates and case managers.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Type</div>
            <div className="cmi-val">Founder-built product, self-funded</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Veteran Advocacy · Case Management</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Sole architect and engineer</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Result</div>
            <div className="cmi-val">Live product, paid subscription</div>
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
          This is the actual Command Center, running live with seeded demo data,
          not a mockup.
        </p>
        <div className="demo-frame">
          <div className="demo-frame-bar">
            <div className="demo-frame-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="demo-frame-url">sbworkflow.jay-burgess.me</div>
            <div className="demo-frame-live">Live</div>
          </div>
          <iframe src={DEMO_URL} title="SBWrkFlow live demo" loading="lazy" />
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
          <h2>Advocacy work scattered across tools that don't connect.</h2>
          <div className="cs-body reveal" ref={r1}>
            <div className="cs-prose">
              <p>
                Advocates tracking housing, legal, and benefits cases for
                veterans, alongside the media coverage and judicial rulings that
                shape those cases, were working from a patchwork of notes apps,
                email, and memory. Nothing connected a veteran's case to the
                news that affected it, or to the stakeholders who could move it
                forward.
              </p>
              <p>
                I built SBWrkFlow to give advocates for the West LA VA campus
                and veterans in the area one system that holds cases, news,
                stakeholders, and reporting together, instead of four separate
                habits that all have to be maintained by hand.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <div className="section-label">What I built</div>
          <h2>Case tracking, news monitoring, and an AI copilot.</h2>
          <div className="cs-body reveal" ref={r2}>
            <div className="cs-prose">
              <p>
                SBWrkFlow tracks housing, legal, and benefits cases with
                precision, so no veteran in the pipeline gets lost. A real-time
                feed surfaces media coverage and judicial rulings affecting the
                West LA VA campus, and stakeholder tracking keeps relationships
                with officials and partner organizations current instead of
                scattered across inboxes.
              </p>
              <p>
                Quick Capture turns voice notes and photos into structured
                records on the move, and a built-in Copilot helps analyze
                documents, draft communications, and suggest next steps. Action
                Reports roll all of it into monthly reporting on progress,
                blockers, and veterans served, generated instead of assembled by
                hand.
              </p>
            </div>
            <div className="cs-sidebar">
              <div className="finding-box">
                <div className="fb-label">Monetization</div>
                <div className="fb-text">
                  Live Stripe-powered subscription, Advocacy Pro, covering
                  hosting, AI processing, and real-time news monitoring.
                </div>
              </div>
              <div className="finding-box">
                <div className="fb-label">AI layer</div>
                <div className="fb-text">
                  Copilot for document analysis and communication drafting, plus
                  voice and image transcription for field capture.
                </div>
              </div>
            </div>
          </div>
          <div className="outcomes-grid reveal" ref={gridRef}>
            <div className="outcome-cell">
              <div className="oc-label">Core loop</div>
              <div className="oc-val">Case → News → Action</div>
              <div className="oc-desc">
                Case management, advocacy news, and stakeholder tracking on one
                model
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Capture</div>
              <div className="oc-val">Voice + Image</div>
              <div className="oc-desc">
                Instant transcription for capturing information in the field
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

export default function SBWorkflowCaseStudy() {
  usePageMeta({
    title: "SBWrkFlow Case Study, Jay Burgess",
    description:
      "How Jay Burgess built SBWrkFlow, a command center for veteran advocacy unifying case management, real-time news monitoring, stakeholder tracking, and an AI copilot.",
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
