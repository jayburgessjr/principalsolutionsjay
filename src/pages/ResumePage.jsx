import { useEffect, useRef, useState } from "react";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import resumePdf from "../assets/jay-burgess-resume.pdf";
import "../casestudy.css";

const CALENDLY_URL = "https://calendly.com/jayburgessjr/long-meet";
const LINKEDIN_URL = "https://www.linkedin.com/in/jayburgessjr/";
const GITHUB_URL = "https://github.com/jayburgessjr";

const METRICS = [
  {
    value: 2.7,
    decimals: 1,
    prefix: "$",
    suffix: "M",
    label: "New client revenue, 3 months",
    desc: "ReggieAI, against a $1.7M annual revenue base",
  },
  {
    value: 65,
    suffix: "%",
    label: "Faster client onboarding",
    desc: "Multi-tenant SaaS platforms, Revuity Systems",
  },
  {
    value: 50,
    suffix: "%",
    label: "Faster compliance review",
    desc: "Stateful multi-agent workflows with human approval gates",
  },
  {
    value: 86,
    suffix: "%",
    label: "Faster executive reporting",
    desc: "~$6B global marketing spend governed, Adobe",
  },
  {
    value: 17,
    suffix: "+",
    label: "Production systems delivered",
    desc: "Across regulated and Fortune 500 environments",
  },
];

const EXPERIENCE = [
  {
    company: "Revuity Systems",
    role: "Founder and Principal Forward Deployed Engineer",
    period: "2022 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Founded an AI-first technical execution firm and delivered 17+ production systems, 15+ reusable products, and five service offerings across regulated and enterprise environments.",
      "Led discovery through operational handoff with executives and operators, converting ambiguous workflows into solution architectures, prioritized backlogs, acceptance criteria, and production releases that enabled client teams to operate delivered systems independently.",
      "Architected multi-tenant SaaS platforms with Next.js, FastAPI, Supabase, PostgreSQL, pgvector, custom MCP servers, RBAC, row-level security, and audit logging, reducing onboarding time by 65%.",
      "Designed stateful multi-agent workflows with persisted checkpoints, asynchronous execution, deterministic routing, structured outputs, and human approval gates, reducing compliance review turnaround by 50%.",
      "Built Revuity Agentic OS with eight agents, 12 MCP servers, and 197 reusable skills, while platform consolidation and white-label deployments produced $250K+ in SaaS savings and a 15% gain in marketing and sales performance.",
      "Engineered production LLM controls, including tool contracts, structured outputs, evaluations, deterministic routing, audit trails, and human approval, enabling traceable and governed AI-assisted decisions in regulated environments.",
    ],
  },
  {
    company: "Higher Education Assistance Group (HEAG)",
    role: "Principal AI Systems Architect and Forward Deployed Engineer",
    period: "2024 – Present",
    location: "Los Angeles, CA",
    bullets: [
      "Architected and deployed ReggieAI with Claude, LangGraph, and MCP, generating $2.7M in new client revenue within three months against a $1.7M annual revenue base and increasing case-processing capacity by 25% without added headcount.",
      "Engineered production LLM controls including tool contracts, structured outputs, evaluations, deterministic routing, audit trails, and human approval for regulated decision support.",
      "Shipped OpsFlow end to end with Claude Code, FastAPI, and Next.js to replace a misaligned Jira workflow and reduce operational reporting cycle time by 40%.",
      "Converted evolving Title IV policy into deployable software with executives, consultants, and frontline operators, creating a governed knowledge pipeline that preserved traceable review, approval, and accountability across regulated content updates.",
    ],
  },
  {
    company: "Walmart",
    role: "Senior Data Scientist and Analytics Lead, Creative Operations",
    period: "2023 – 2024",
    location: "Los Angeles, CA",
    bullets: [
      "Partnered with creative operations leaders to identify production bottlenecks and translate workflow problems into structured data models, analytics products, and decision-support tools.",
      "Built SQL and dbt pipelines that unified creative production and campaign operations data into governed models and real-time operating metrics.",
      "Developed Python and scikit-learn anomaly-detection models to surface spend spikes, workflow deviations, and production constraints, contributing to a 37% improvement in project completion rates.",
    ],
  },
  {
    company: "Adobe",
    role: "Senior Analyst, Marketing Operations Analytics",
    period: "2022 – 2023",
    location: "Los Angeles, CA",
    bullets: [
      "Worked across marketing, finance, and operations teams to translate enterprise reporting requirements into production data pipelines and standardized analytical models.",
      "Built Python, SQL, and PySpark pipelines across Airflow, Amazon S3, EMR, and Redshift to govern approximately $6B in global marketing spend and reduce executive reporting turnaround by 86%.",
      "Strengthened production reliability through Docker, CI/CD, automated data-quality tests, schema validation, monitoring, and failure alerting, reducing manual deployment risk and improving the consistency of enterprise reporting pipelines.",
    ],
  },
  {
    company: "P3 Cost Analysts",
    role: "Senior Data Systems Engineer, Revenue Operations",
    period: "2019 – 2022",
    location: "Remote",
    bullets: [
      "Embedded predictive retention intelligence into daily operations to improve pricing decisions, client-risk visibility, and portfolio forecasting.",
      "Built the platform end to end using a Next.js front end, custom backend services and APIs, PostgreSQL and SQL Server data models, and Power BI reporting.",
      "Integrated a machine-learning-driven customer-retention model into the platform, improving the organization's ability to identify account risk, evaluate pricing decisions, and forecast portfolio revenue.",
    ],
  },
  {
    company: "Araya Rose Analytics",
    role: "Senior Data Engineer",
    period: "2016 – 2019",
    location: "Los Angeles, CA",
    bullets: [
      "Worked directly with client leaders to translate revenue and reporting challenges into CRM, analytics, and executive decision platforms, replacing fragmented information with more consistent access to operational and performance data.",
      "Created reusable data models and governed workflows that replaced manual reporting with repeatable processes, standardized business logic, and maintainable reporting infrastructure.",
      "Delivered client-facing systems from requirements discovery through implementation and adoption, giving leadership teams more consistent access to revenue, customer, and performance information.",
    ],
  },
  {
    company: "Columbia College Hollywood",
    role: "Assistant Director, Financial Aid Systems",
    period: "2013 – 2016",
    location: "Los Angeles, CA",
    bullets: [
      "Partnered with financial aid leaders and frontline staff to identify compliance risks, workflow bottlenecks, and reporting gaps across Title IV administration.",
      "Automated federal financial aid workflows and built compliance dashboards that converted policy requirements into repeatable operational controls and review processes.",
      "Improved the consistency and auditability of financial aid operations by centralizing validation, exception monitoring, and management reporting.",
    ],
  },
  {
    company: "Loyola Marymount University",
    role: "Systems Analyst and Financial Aid Counselor",
    period: "2008 – 2013",
    location: "Los Angeles, CA",
    bullets: [
      "Combined frontline financial aid counseling with systems analysis to uncover workflow gaps and translate federal policy into reporting, validation, and technical controls, improving the reliability of regulated financial aid operations.",
      "Built regulatory reporting and data-validation processes that helped staff identify incomplete records, resolve exceptions, and support compliant Title IV administration.",
      "Established the domain and user-centered foundation for later FDE work by solving operational problems beside the staff responsible for executing regulated processes.",
    ],
  },
];

const SKILLS = [
  {
    label: "Agentic AI & Governance",
    tags: [
      "Claude",
      "OpenAI",
      "LangGraph",
      "Model Context Protocol (MCP)",
      "Multi-agent orchestration",
      "RAG",
      "Tool calling",
      "Structured outputs",
      "Evaluation harnesses",
      "Human-in-the-loop review",
      "Deterministic guardrails",
      "Audit logging",
    ],
  },
  {
    label: "Software & Data Engineering",
    tags: [
      "Python",
      "TypeScript",
      "JavaScript",
      "SQL",
      "FastAPI",
      "asyncio",
      "Node.js",
      "Next.js",
      "React",
      "REST APIs",
      "PostgreSQL",
      "pgvector",
      "Supabase",
      "SQL Server",
      "dbt",
      "PySpark",
      "Apache Airflow",
    ],
  },
  {
    label: "Cloud, Security & Delivery",
    tags: [
      "AWS",
      "Amazon S3",
      "EMR",
      "Redshift",
      "Microsoft Azure",
      "Docker",
      "CI/CD",
      "GitHub Actions",
      "GitLab",
      "RBAC",
      "Row-level security",
      "Monitoring",
      "Automated validation",
    ],
  },
  {
    label: "Forward Deployed Practice",
    tags: [
      "Technical discovery",
      "Stakeholder workshops",
      "Requirements decomposition",
      "Solution architecture",
      "Rapid prototyping",
      "Production deployment",
      "Runbooks",
      "Architecture decision records",
      "Adoption",
      "Team enablement",
    ],
  },
];

const PUBLICATIONS = [
  {
    title:
      "Agentic Engineering: Building Autonomous AI Systems That Actually Work",
    url: "https://a.co/d/03fJm7Vs",
  },
  {
    title: "The Agentic Builder: Field Notes on Product Development",
    url: "https://a.co/d/0gWkiU0P",
  },
  {
    title:
      "Stories from a Systems Thinker: Twenty-Five Parables on Why the Obvious Fix Never Works",
    url: "https://a.co/d/0boq5HCE",
  },
];

const CERTIFICATIONS = [
  "Certified Forward Deployed Engineer (CFDE)",
  "Certified Agentic Engineer (CAE)",
  "Claude Partner Badge, Claude Code, Anthropic",
  "IBM AI Engineering Professional Certificate",
  "Microsoft Certified: Azure AI Fundamentals",
];

const EDUCATION = [
  {
    degree: "Master of Business Administration (MBA)",
    school: "Eastern University",
    year: "2024",
  },
  {
    degree: "Master of Science, Data Science",
    school: "Eastern University",
    year: "2022",
  },
  {
    degree: "Master of Education (M.Ed.)",
    school: "Loyola Marymount University",
    year: "2013",
  },
  {
    degree: "Bachelor of Arts, Sociology",
    school: "Loyola Marymount University",
    year: "2005",
  },
];

// Injects Person structured data (schema.org) so answer engines (Google, ChatGPT,
// Perplexity, etc.) can read Jay's full work history, education, and credentials
// directly. Same @id as the sitewide Person in index.html, describing one entity.
function useResumeStructuredData() {
  useEffect(() => {
    const schools = [...new Set(EDUCATION.map((e) => e.school))];

    const data = {
      "@context": "https://schema.org",
      "@type": "ProfilePage",
      name: "Resume, Jay Burgess",
      url: "https://jay-burgess.me/resume",
      mainEntity: {
        "@type": "Person",
        "@id": "https://jay-burgess.me/#jay-burgess",
        name: "Jay Burgess",
        jobTitle: "Principal Forward Deployed Engineer",
        sameAs: [LINKEDIN_URL, GITHUB_URL],
        hasOccupation: EXPERIENCE.map((role) => ({
          "@type": "Occupation",
          name: role.role,
          description: `${role.company}, ${role.location}, ${role.period}. ${role.bullets[0]}`,
        })),
        alumniOf: schools.map((name) => ({
          "@type": "CollegeOrUniversity",
          name,
        })),
        hasCredential: CERTIFICATIONS.map((name) => ({
          "@type": "EducationalOccupationalCredential",
          name,
        })),
        knowsAbout: SKILLS.flatMap((cat) => cat.tags),
      },
    };

    const script = document.createElement("script");
    script.type = "application/ld+json";
    script.id = "resume-structured-data";
    script.textContent = JSON.stringify(data);
    document.head.appendChild(script);

    return () => {
      document.getElementById("resume-structured-data")?.remove();
    };
  }, []);
}

// Assembled client-side only (not present in server-delivered HTML) to blunt basic scrapers.
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

function Hero() {
  const contact = useContactInfo();
  return (
    <section className="cs-hero">
      <div className="hero-bg-text">CV</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">
          Resume · Los Angeles, CA · Open to Remote
        </div>
        <h1 className="cs-title">Jay Burgess</h1>
        <p className="cs-subtitle">
          Principal Forward Deployed Engineer · AI Systems Engineer
        </p>
        <p className="cs-desc">
          Principal Forward Deployed Engineer and technical founder with 15+
          years translating complex operational, regulatory, and customer
          problems into production software and data systems. Delivered 17+
          production systems across regulated and Fortune 500 environments,
          including ReggieAI, a multi-agent Title IV compliance platform that
          generated $2.7M in new client revenue within three months against a
          $1.7M annual revenue base. Owns the complete delivery lifecycle from
          discovery and architecture through deployment, governance, adoption,
          and operational handoff.
        </p>
        <div className="resume-actions">
          <a
            href={resumePdf}
            download="Jay-Burgess-Resume.pdf"
            className="btn-primary"
          >
            Download PDF ↓
          </a>
          <a
            href={CALENDLY_URL}
            target="_blank"
            rel="noreferrer"
            className="btn-ghost"
          >
            Schedule a Call →
          </a>
        </div>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Email</div>
            <div className="cmi-val">
              {contact ? (
                <a href={`mailto:${contact.email}`}>{contact.email}</a>
              ) : (
                "Loading…"
              )}
            </div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Phone</div>
            <div className="cmi-val">
              {contact ? (
                <a href={`tel:+${contact.phoneHref}`}>{contact.phone}</a>
              ) : (
                "Loading…"
              )}
            </div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">LinkedIn</div>
            <div className="cmi-val">
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                linkedin.com/in/jayburgessjr
              </a>
            </div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">GitHub</div>
            <div className="cmi-val">
              <a href={GITHUB_URL} target="_blank" rel="noreferrer">
                github.com/jayburgessjr
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function StatCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  label,
  desc,
}) {
  const ref = useRef(null);
  const [display, setDisplay] = useState(decimals ? "0.0" : "0");

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (reduceMotion) {
      setDisplay(value.toFixed(decimals));
      return;
    }

    const obs = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return;
        obs.unobserve(el);

        const duration = 1200;
        const start = performance.timeOrigin ? performance.now() : 0;

        function tick(now) {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          setDisplay((value * eased).toFixed(decimals));
          if (progress < 1) requestAnimationFrame(tick);
        }
        requestAnimationFrame(tick);
      },
      { threshold: 0.3 },
    );

    obs.observe(el);
    return () => obs.disconnect();
  }, [value, decimals]);

  return (
    <div className="oh-block" ref={ref}>
      <div className="oh-num">
        {prefix}
        {display}
        {suffix}
      </div>
      <div className="oh-label">{label}</div>
      <div className="oh-desc">{desc}</div>
    </div>
  );
}

function Metrics() {
  const ref = useReveal();
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="resume-metrics reveal" ref={ref}>
          {METRICS.map((m) => (
            <StatCounter key={m.label} {...m} />
          ))}
        </div>
      </div>
    </section>
  );
}

function TimelineRole({ role }) {
  const ref = useReveal();
  return (
    <div className="resume-role reveal" ref={ref}>
      <div className="rr-head">
        <div>
          <div className="rr-company">{role.company}</div>
          <div className="rr-title">{role.role}</div>
        </div>
        <div className="rr-meta">
          <div className="rr-period">{role.period}</div>
          <div className="rr-location">{role.location}</div>
        </div>
      </div>
      <ul className="rr-bullets">
        {role.bullets.map((b, i) => (
          <li key={i}>{b}</li>
        ))}
      </ul>
    </div>
  );
}

function Experience() {
  return (
    <section className="cs-section" style={{ background: "var(--panel)" }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">01</div>
          <div className="phase-name">Experience</div>
        </div>
        <h2 className="cs-section-h2">
          Fifteen years.
          <br />
          <em>One thread: ship it, then hand it off.</em>
        </h2>
        <div className="resume-timeline">
          {EXPERIENCE.map((role) => (
            <TimelineRole key={role.company} role={role} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Skills() {
  const ref = useReveal();
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">02</div>
          <div className="phase-name">Technical Skills</div>
        </div>
        <h2 className="cs-section-h2">
          Full stack.
          <br />
          <em>Discovery to production.</em>
        </h2>
        <div className="resume-skills-grid reveal" ref={ref}>
          {SKILLS.map((cat) => (
            <div className="skill-cat" key={cat.label}>
              <div className="skill-cat-label">{cat.label}</div>
              <div className="skill-tags">
                {cat.tags.map((t) => (
                  <span className="skill-tag" key={t}>
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Credentials() {
  const ref = useReveal();
  return (
    <section className="cs-section" style={{ background: "var(--panel)" }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">03</div>
          <div className="phase-name">
            Publications, Certifications &amp; Education
          </div>
        </div>
        <h2 className="cs-section-h2">
          Written it down.
          <br />
          <em>Credentialed it too.</em>
        </h2>
        <div className="resume-credentials-grid reveal" ref={ref}>
          <div className="cred-block">
            <h4>Publications</h4>
            <ul className="cred-list">
              {PUBLICATIONS.map((p) => (
                <li key={p.url}>
                  <a href={p.url} target="_blank" rel="noreferrer">
                    {p.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="cred-block">
            <h4>Certifications</h4>
            <ul className="cred-list">
              {CERTIFICATIONS.map((c) => (
                <li key={c}>{c}</li>
              ))}
            </ul>
          </div>
          <div className="cred-block">
            <h4>Education</h4>
            <ul className="cred-list">
              {EDUCATION.map((e) => (
                <li key={e.degree}>
                  {e.degree}
                  <span className="cred-sub">
                    {e.school} · {e.year}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cs-cta">
      <div className="cs-cta-inner">
        <h3>
          Open to select engagements.
          <br />
          <span>Let's talk about the role.</span>
        </h3>
        <p>
          15+ years, 17+ production systems, one thread: diagnose the real
          problem, ship every layer, and leave behind a team that runs it
          without me.
        </p>
        <a
          href={resumePdf}
          download="Jay-Burgess-Resume.pdf"
          className="btn-primary"
        >
          Download PDF ↓
        </a>
        <a
          href={CALENDLY_URL}
          target="_blank"
          rel="noreferrer"
          className="btn-ghost"
        >
          Schedule a Call →
        </a>
      </div>
    </section>
  );
}

function ResumeFooter() {
  return (
    <footer>
      <div className="footer-id">
        <strong>Jay Burgess</strong> · Principal Forward Deployed Engineer ·
        Founder, Revuity Systems
      </div>
      <div className="footer-id">Los Angeles, CA · Open to Remote</div>
    </footer>
  );
}

export default function ResumePage() {
  usePageMeta({
    title: "Resume, Jay Burgess — Principal Forward Deployed Engineer",
    description:
      "Jay Burgess's full resume: 15+ years, 17+ production systems delivered, including a $2.7M compliance platform (ReggieAI) and enterprise data organizations at Walmart and Adobe.",
  });
  useResumeStructuredData();

  return (
    <div className="resume-page">
      <Hero />
      <Metrics />
      <Experience />
      <Skills />
      <Credentials />
      <CTA />
      <ResumeFooter />
    </div>
  );
}
