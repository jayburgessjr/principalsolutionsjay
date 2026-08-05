import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import { useStructuredData } from "../hooks/useStructuredData";
import "../casestudy.css";
import Footer from "../components/Footer";

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">Case Study · Enterprise Data · Adobe</div>
        <h1 className="cs-title">
          Adobe <span>Marketing Analytics</span>
        </h1>
        <p className="cs-desc">
          Marketing, finance, and operations each had their own version of the
          truth, and executives waited days for a number they could trust. I
          built the production pipelines and governed models that gave them one
          view of about $6B in global marketing spend, and cut executive
          reporting turnaround by 86%.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Organization</div>
            <div className="cmi-val">Adobe</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Marketing Operations Analytics</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Senior Analyst</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Result</div>
            <div className="cmi-val">86% faster executive reporting</div>
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
          <h2>One number, three versions.</h2>
          <div className="cs-body reveal" ref={r1}>
            <div className="cs-prose">
              <p>
                Adobe governs an enormous global marketing budget, and the
                reporting behind it was spread across teams and tools that did
                not agree. Marketing, finance, and operations each built their
                own extracts, so the same question produced different answers
                depending on who you asked. Executives waited days for a
                reconciled view, and by the time it arrived the decision window
                had often moved.
              </p>
              <p>
                The real problem was not a dashboard. It was the absence of a
                governed pipeline and a shared set of models that every team
                could trust.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="cs-section" style={{ background: "var(--panel)" }}>
        <div className="cs-section-inner">
          <div className="section-label">What I built</div>
          <h2>Governed pipelines, one shared model.</h2>
          <div className="cs-body reveal" ref={r2}>
            <div className="cs-prose">
              <p>
                I worked directly with marketing, finance, and operations to
                turn their reporting requirements into production data pipelines
                and standardized analytical models. The pipelines ran in Python,
                SQL, and PySpark across Airflow, Amazon S3, EMR, and Redshift,
                consolidating the spend data into one governed source the whole
                organization could report from.
              </p>
              <p>
                Then I hardened it. Docker and CI/CD replaced manual deploys,
                and automated data-quality tests, schema validation, monitoring,
                and failure alerting caught problems before they reached an
                executive report. The result was a pipeline that was not just
                fast, but consistent and reliable enough to be the number of
                record.
              </p>
            </div>
            <div className="cs-sidebar">
              <div className="finding-box">
                <div className="fb-label">Stack</div>
                <div className="fb-text">
                  Python, SQL, PySpark, Airflow, Amazon S3, EMR, Redshift,
                  Docker, CI/CD.
                </div>
              </div>
              <div className="finding-box">
                <div className="fb-label">Reliability</div>
                <div className="fb-text">
                  Automated data-quality tests, schema validation, monitoring,
                  and failure alerting on every pipeline.
                </div>
              </div>
            </div>
          </div>
          <div className="outcomes-grid reveal" ref={gridRef}>
            <div className="outcome-cell">
              <div className="oc-label">Reporting turnaround</div>
              <div className="oc-val">86%</div>
              <div className="oc-desc">
                Faster executive reporting once the governed pipeline replaced
                the manual reconciliation
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Spend governed</div>
              <div className="oc-val">$6B</div>
              <div className="oc-desc">
                Approximate global marketing spend consolidated into one trusted
                model
              </div>
            </div>
            <div className="outcome-cell">
              <div className="oc-label">Deployment risk</div>
              <div className="oc-val">Lower</div>
              <div className="oc-desc">
                Docker, CI/CD, and automated validation replaced manual,
                error-prone deploys
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
        Need one number
        <br />
        <span>everyone can trust?</span>
      </h3>
      <p>
        I build the governed pipelines and shared models underneath the
        dashboard, so the whole organization reports from the same source. Let's
        talk.
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

export default function AdobeCaseStudy() {
  usePageMeta({
    title: "Adobe Marketing Analytics Case Study, Jay Burgess",
    description:
      "How Jay Burgess built governed data pipelines and shared models at Adobe to consolidate about $6B in global marketing spend and cut executive reporting turnaround by 86%.",
  });
  useStructuredData("case-study-structured-data", {
    "@context": "https://schema.org",
    "@type": "CreativeWork",
    headline: "Adobe Marketing Analytics Case Study",
    description:
      "How Jay Burgess built governed data pipelines and shared models at Adobe to consolidate about $6B in global marketing spend and cut executive reporting turnaround by 86%.",
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
    dateCreated: "2026-07-25",
    url: "https://jay-burgess.me/adobe-case-study",
    about: "Adobe",
    keywords: [
      "Adobe",
      "Marketing Analytics",
      "Data Pipelines",
      "Executive Reporting",
      "Enterprise Data",
    ],
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
