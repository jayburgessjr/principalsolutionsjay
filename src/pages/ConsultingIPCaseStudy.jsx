import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData } from "../hooks/useStructuredData";
import "../casestudy.css";
import Footer from "../components/Footer";

const DEMO_URL = "https://consultingip.jay-burgess.me/";

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">
          Founder-Built Demo · Operations Dashboard · ConsultingIP
        </div>
        <h1 className="cs-title">
          Operational Visibility for <span>Higher-Ed Consulting</span>
        </h1>
        <p className="cs-desc">
          Higher-education consulting practices track engagements, compliance
          submissions, and consultant performance across dozens of institution
          relationships, usually in spreadsheets. ConsultingIP is a demo
          operations dashboard I built to show what that data looks like when it
          lives in one governed model instead: on-time filing rates, consultant
          ratings, and institution-level insight in one view.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Type</div>
            <div className="cmi-val">Founder-built demo, self-funded</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Higher Ed · Consulting Operations</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Sole architect and engineer</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Result</div>
            <div className="cmi-val">Live demo, role-based views</div>
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
          No account needed. Pick a role, Admin or Consultant, and explore the
          dashboard.
        </p>
        <div className="demo-frame">
          <div className="demo-frame-bar">
            <div className="demo-frame-dots">
              <span />
              <span />
              <span />
            </div>
            <div className="demo-frame-url">consultingip.jay-burgess.me</div>
            <div className="demo-frame-live">Live</div>
          </div>
          <iframe
            src={DEMO_URL}
            title="ConsultingIP live demo"
            loading="lazy"
          />
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
          <h2>Consulting practices fly blind on submission health.</h2>
          <div className="cs-body reveal" ref={r1}>
            <div className="cs-prose">
              <p>
                A higher-ed consulting practice manages engagements across many
                institutions, with consultants filing compliance and
                financial-aid reports on rolling deadlines. Without a shared
                system, "who's late, who's at risk, and which institution needs
                attention this week" lives in someone's head or a spreadsheet
                that's already stale by the time anyone reads it.
              </p>
              <p>
                ConsultingIP is a demo of what that operational layer looks
                like: one dashboard covering submission timeliness, consultant
                ratings, and institution-level risk, built to be read at a
                glance by both an operations lead and the consultants doing the
                filing.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <div className="section-label">What I built</div>
          <h2>Role-based views on one operations model.</h2>
          <div className="cs-body reveal" ref={r2}>
            <div className="cs-prose">
              <p>
                The dashboard tracks submissions against expected filings, on
                time, late, and missed, broken out by Financial Aid and Bursar
                coverage, with trend lines on submission coverage and weekly
                active consultants. Admin and Consultant roles see the same
                underlying data through different lenses: an operations lead
                needs portfolio-wide risk, a consultant needs their own queue.
              </p>
              <p>
                Engagements, submissions, consultant ratings, reports, and
                institution management all sit behind the same navigation shell,
                so the pattern generalizes past this one practice to any org
                managing distributed, deadline-driven work across external
                partners.
              </p>
            </div>
            <div className="cs-sidebar">
              <div className="finding-box">
                <div className="fb-label">Access</div>
                <div className="fb-text">
                  No login required. Two role views, Admin and Consultant, so
                  visitors can explore either side of the workflow.
                </div>
              </div>
              <div className="finding-box">
                <div className="fb-label">Domain fit</div>
                <div className="fb-text">
                  Same higher-ed, Title IV-adjacent compliance space as my Title
                  IV compliance platform work, built here as a fast,
                  self-directed prototype.
                </div>
              </div>
            </div>
          </div>
          <div className="outcomes-grid reveal" ref={gridRef}>
            <div className="outcome-cell">
              <div className="oc-label">Views</div>
              <div className="oc-val">Admin + Consultant</div>
              <div className="oc-desc">
                Role-based dashboards over one shared data model
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Coverage</div>
              <div className="oc-val">FA + Bursar</div>
              <div className="oc-desc">
                Submission timeliness tracked across both filing tracks
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

export default function ConsultingIPCaseStudy() {
  usePageMeta({
    title: "ConsultingIP Case Study, Jay Burgess",
    description:
      "How Jay Burgess built ConsultingIP, a demo operations dashboard giving higher-education consulting practices real-time visibility into submission timeliness, consultant ratings, and institution risk.",
  });
  useStructuredData("case-study-structured-data", {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "ConsultingIP Case Study",
    description:
      "How Jay Burgess built ConsultingIP, a demo operations dashboard giving higher-education consulting practices real-time visibility into submission timeliness, consultant ratings, and institution risk.",
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
    url: "https://jay-burgess.me/consultingip-case-study",
    about: "ConsultingIP",
    keywords: [
      "ConsultingIP",
      "Higher Education Consulting",
      "Operations Dashboard",
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
