import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import Books from "../components/Books";
import playbookPdf from "../assets/fde-playbook.pdf";
import "../casestudy.css";

const CALENDLY_URL = "https://calendly.com/jayburgessjr/long-meet";

const PLAYBOOK_SECTIONS = [
  {
    num: "01",
    title: "What a Forward Deployed Engineer actually is",
    body: [
      "A Forward Deployed Engineer is not a consultant who hands off a deck, and not a contractor who takes tickets. An FDE owns a business problem end to end: discovery, architecture, production code, hardening, and the handoff that lets the client's own team run the system without them.",
      'The role exists because most hard problems inside a company are not "we need an engineer" or "we need a strategist" in isolation. They are ambiguous, cross-functional, and often regulatory or operational in nature, and they need someone who can sit with the people living the problem, turn what they describe into a real build plan, and then personally ship it.',
    ],
  },
  {
    num: "02",
    title: "The FDE method: five moves",
    body: [
      "Every engagement runs the same loop, regardless of industry or stack.",
    ],
    steps: [
      {
        verb: "Scope",
        title: "Turn a symptom into a build plan.",
        detail:
          "Sit with the business partner who describes a symptom, not a system. Pull out what they actually need, decomposed into a real build plan, in the room.",
      },
      {
        verb: "Prototype",
        title: "Build it fast.",
        detail:
          "Build the whole stack, data layer, backend, UI, and any AI components, using AI-assisted development. Working software in days and weeks, not quarters.",
      },
      {
        verb: "Harden",
        title: "Make it production-grade.",
        detail:
          "Eval suites with pass thresholds, guardrails, structured logging, audit trails, rollback, and access control verified with negative tests. This is the phase regulated and rights-sensitive shops probe hardest.",
      },
      {
        verb: "Hand off",
        title: "Ship it so the team owns it.",
        detail:
          "Every build ships with a handoff package, README, runbook, architecture decision records, plus a pairing session so the receiving team stays self-sufficient after the FDE leaves.",
      },
      {
        verb: "Harvest",
        title: "Push the pattern back into the platform.",
        detail:
          "After each build, the reusable patterns go into a shared library so the next engagement starts further along. Every system compounds into the next.",
      },
    ],
  },
  {
    num: "03",
    title: "Signs you need one",
    body: [
      'The problem is described in symptoms, not requirements, and the people closest to it cannot yet say what "done" looks like.',
      "It spans multiple systems, teams, or functions, data, operations, and compliance all touch it, and no single existing owner has authority across all three.",
      'There is real regulatory or operational exposure, so "move fast and see what breaks" is not an acceptable strategy.',
      "You need someone who can both make the architectural call and personally write the production code, not hand off a recommendation and wait.",
      "A prior AI pilot or proof of concept stalled before reaching production, because the gap between demo and deployable system was wider than expected.",
    ],
  },
  {
    num: "04",
    title: "What good looks like",
    caseStudies: [
      {
        title: "Higher Ed Compliance Software",
        tag: "Regulated AI · Title IV · Live",
        desc: "A compliance team at a regulated Title IV student-aid provider was buried in rules and manual checks. A multi-agent platform on Claude, LangGraph, and MCP took it from first discovery call through launch and handoff. It runs today inside a federally regulated environment.",
        outcome:
          "$2.7M in new revenue in the first three months on a $1.7M base, and 25% more case-processing capacity with no new hires.",
        link: "/higher-ed-compliance-software",
      },
      {
        title: "Walmart, a data org built from scratch",
        tag: "Enterprise scale · Creative Operations",
        desc: "Creative Operations had plenty of data and no way to trust it. Bottlenecks became clean models and tools leaders could actually decide with, and a data organization was built to keep it running at Walmart's scale.",
        outcome:
          "37% improvement in project completion rates across the division.",
        link: "/walmart-case-study",
      },
      {
        title: "Revuity Agentic OS",
        tag: "Founder · Revuity Systems",
        desc: "Built to prove the method holds with no big organization behind it. The Agentic OS is the machinery that makes agentic delivery repeatable.",
        outcome:
          "$250K+ in SaaS savings, plus a 15% lift in sales and marketing performance.",
        link: "/revuity-case-study",
      },
    ],
  },
  {
    num: "05",
    title: "How to evaluate and hire one",
    body: [
      "Ask for evidence of full-lifecycle ownership, not just architecture opinions. A real FDE can point to systems they scoped, built, hardened, and handed off, with the client team running it after they left.",
      "Screen for production code, not just prototypes. The hard part of AI-assisted development is rarely the demo, it is the eval suite, the guardrails, the audit logging, and the negative tests that make a system trustworthy in a regulated or high-stakes environment.",
      "Check the handoff discipline specifically. Ask what happens the day the FDE leaves. If the answer is vague, the engagement will create a dependency instead of a capability.",
      "Match the engagement model to how clear the problem is. A fixed-scope diagnostic sprint fits an unclear problem; a retainer fits ongoing senior judgment; embedded execution fits a mandate to ship, not just advise.",
    ],
  },
  {
    num: "06",
    title: "Working with Jay",
    body: [
      "Jay Burgess is a Principal Forward Deployed Engineer and the founder of Revuity Systems, with 15+ years turning ambiguous operational and regulatory problems into production systems, 17+ shipped, including a compliance platform that generated $2.7M in new revenue in its first three months.",
      "Engagements run as a diagnostic sprint, a fractional architecture retainer, or embedded build ownership, depending on how clear the problem already is. Full details, including published rate ranges, are on the engagement page.",
    ],
  },
];

const FIT_QUESTIONS = [
  {
    id: "scope",
    question: "How clearly is the problem currently scoped?",
    options: [
      { label: "Clear, we just need extra hands", points: 0 },
      { label: "Somewhat clear, but the architecture is undecided", points: 1 },
      { label: "Still described as symptoms, not requirements", points: 2 },
    ],
  },
  {
    id: "stakes",
    question:
      "Does it touch regulated, compliance-sensitive, or high-stakes operational data?",
    options: [
      { label: "Yes", points: 2 },
      { label: "No", points: 0 },
    ],
  },
  {
    id: "ownership",
    question:
      "Do you need someone who can both make the architecture call and personally ship production code?",
    options: [
      { label: "Yes, both", points: 2 },
      { label: "Just architecture advice", points: 0 },
      { label: "Just extra engineering hands", points: 0 },
    ],
  },
  {
    id: "timeline",
    question: "How fast do you need a working system?",
    options: [
      { label: "Weeks", points: 2 },
      { label: "A quarter or more", points: 1 },
      { label: "No fixed timeline", points: 0 },
    ],
  },
];

const FIT_RESULTS = [
  {
    max: 2,
    verdict: "Probably not an FDE-shaped problem.",
    detail:
      "This sounds better suited to a standard hire or a staff-augmentation contractor. An FDE earns its cost on ambiguity, cross-system scope, and high-stakes shipping, none of which seem to be the constraint here.",
  },
  {
    max: 5,
    verdict: "Possible fit, worth a conversation.",
    detail:
      "Some signals point toward an FDE-shaped problem. A short diagnostic conversation would clarify whether the ambiguity and stakes justify it.",
  },
  {
    max: 8,
    verdict: "Strong FDE fit.",
    detail:
      "Ambiguous scope, real stakes, and a need for someone who architects and ships. This is exactly the shape of problem the role exists for.",
  },
];

const ENGAGEMENT_MODELS = [
  {
    id: "sprint",
    name: "Diagnostic Sprint",
    range: "$15K–$35K",
    tag: "2–4 Weeks · Fixed Scope",
    desc: "Used when the business problem is still blurry and needs a real diagnosis before anyone commits to a build.",
  },
  {
    id: "fractional",
    name: "Fractional Architect / CTO / CIO",
    range: "$8K–$25K+/mo",
    tag: "Monthly Retainer · Strategy + Execution",
    desc: "Used when a team needs senior technical judgment every week but is not yet ready for a full-time hire.",
  },
  {
    id: "embedded",
    name: "Embedded Build Partner",
    range: "$25K–$40K+/mo",
    tag: "Deep Execution · Operator-Level Ownership",
    desc: 'Used when the mandate is not "help us think" but "fix it and ship it," full-stack, end to end.',
  },
];

const FIT_MODEL_QUESTIONS = [
  {
    id: "clarity",
    question: "How clear is the scope of the work?",
    options: [
      { label: "Not clear yet, needs diagnosis first", modelId: "sprint" },
      {
        label: "Clear, but needs ongoing senior judgment",
        modelId: "fractional",
      },
      {
        label: "Clear, and someone needs to own execution fully",
        modelId: "embedded",
      },
    ],
  },
  {
    id: "commitment",
    question: "What kind of time commitment fits?",
    options: [
      { label: "One-time, fixed engagement", modelId: "sprint" },
      { label: "Recurring, but part-time", modelId: "fractional" },
      { label: "Full-time equivalent", modelId: "embedded" },
    ],
  },
];

function Hero() {
  return (
    <section className="cs-hero no-print">
      <div className="hero-bg-text">FDE</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">Resources · Free tools and frameworks</div>
        <h1 className="cs-title">
          Resources for hiring and working with an FDE
        </h1>
        <p className="cs-desc">
          A free playbook on what a Forward Deployed Engineer is and how to
          evaluate one, two directional calculators, and the books this practice
          is drawn from. Everything here is grounded in real, published
          outcomes, not projections.
        </p>
      </div>
    </section>
  );
}

function Playbook() {
  const stepsRef = useReveal();
  const caseRef = useReveal();

  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">01</div>
          <div className="phase-name">The FDE Playbook</div>
        </div>
        <h2 className="cs-section-h2">
          What a Forward Deployed Engineer is,
          <br />
          <em>and how to hire one.</em>
        </h2>
        <p className="cs-desc" style={{ marginBottom: "0" }}>
          A free, six-section guide covering the role, the method, the signs you
          need one, real case study proof, and how to evaluate a candidate. Read
          it below or download the PDF.
        </p>

        <div className="resume-actions">
          <a
            href={playbookPdf}
            download="FDE-Playbook-Jay-Burgess.pdf"
            className="btn-primary"
          >
            Download PDF ↓
          </a>
        </div>

        <div id="fde-playbook-content">
          {PLAYBOOK_SECTIONS.map((section) => (
            <div className="playbook-block" key={section.num}>
              <div className="playbook-block-head">
                <span className="playbook-block-num">{section.num}</span>
                <h3>{section.title}</h3>
              </div>

              {section.body?.map((p, i) => (
                <p className="playbook-p" key={i}>
                  {p}
                </p>
              ))}

              {section.steps && (
                <div className="playbook-steps reveal" ref={stepsRef}>
                  {section.steps.map((s) => (
                    <div className="playbook-step" key={s.verb}>
                      <div className="ps-verb">{s.verb}</div>
                      <div className="ps-title">{s.title}</div>
                      <p className="ps-detail">{s.detail}</p>
                    </div>
                  ))}
                </div>
              )}

              {section.caseStudies && (
                <div className="playbook-cases reveal" ref={caseRef}>
                  {section.caseStudies.map((c) => (
                    <div className="playbook-case" key={c.title}>
                      <div className="pc-tag">{c.tag}</div>
                      <div className="pc-title">{c.title}</div>
                      <p className="pc-desc">{c.desc}</p>
                      <p className="pc-outcome">{c.outcome}</p>
                      <Link to={c.link} className="pc-link">
                        Read the case study →
                      </Link>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function FitCalculator() {
  const [answers, setAnswers] = useState({});
  const answeredAll = FIT_QUESTIONS.every((q) => answers[q.id] !== undefined);

  const score = useMemo(
    () => Object.values(answers).reduce((sum, p) => sum + p, 0),
    [answers],
  );

  const result = useMemo(
    () => FIT_RESULTS.find((r) => score <= r.max),
    [score],
  );

  return (
    <div className="calc-card">
      <div className="calc-head">
        <div className="calc-label">Calculator</div>
        <h3>Is this an FDE problem?</h3>
      </div>
      {FIT_QUESTIONS.map((q) => (
        <div className="calc-question" key={q.id}>
          <div className="calc-question-text">{q.question}</div>
          <div className="calc-options">
            {q.options.map((opt) => (
              <label className="calc-option" key={opt.label}>
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === opt.points}
                  onChange={() =>
                    setAnswers((a) => ({ ...a, [q.id]: opt.points }))
                  }
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      ))}
      {answeredAll && result && (
        <div className="calc-result">
          <div className="calc-result-verdict">{result.verdict}</div>
          <p className="calc-result-detail">{result.detail}</p>
        </div>
      )}
    </div>
  );
}

function ModelCalculator() {
  const [answers, setAnswers] = useState({});
  const answeredAll = FIT_MODEL_QUESTIONS.every(
    (q) => answers[q.id] !== undefined,
  );

  const matchedModel = useMemo(() => {
    const votes = Object.values(answers);
    if (!votes.length) return null;
    const tally = {};
    votes.forEach((id) => {
      tally[id] = (tally[id] || 0) + 1;
    });
    const topId = Object.keys(tally).sort((a, b) => tally[b] - tally[a])[0];
    return ENGAGEMENT_MODELS.find((m) => m.id === topId);
  }, [answers]);

  return (
    <div className="calc-card">
      <div className="calc-head">
        <div className="calc-label">Calculator</div>
        <h3>Which engagement model fits?</h3>
      </div>
      {FIT_MODEL_QUESTIONS.map((q) => (
        <div className="calc-question" key={q.id}>
          <div className="calc-question-text">{q.question}</div>
          <div className="calc-options">
            {q.options.map((opt) => (
              <label className="calc-option" key={opt.label}>
                <input
                  type="radio"
                  name={q.id}
                  checked={answers[q.id] === opt.modelId}
                  onChange={() =>
                    setAnswers((a) => ({ ...a, [q.id]: opt.modelId }))
                  }
                />
                {opt.label}
              </label>
            ))}
          </div>
        </div>
      ))}
      {answeredAll && matchedModel && (
        <div className="calc-result">
          <div className="calc-result-verdict">{matchedModel.name}</div>
          <div className="calc-result-range">{matchedModel.range}</div>
          <p className="calc-result-detail">{matchedModel.desc}</p>
          <Link to="/engagement" className="pc-link">
            See all engagement models →
          </Link>
        </div>
      )}
    </div>
  );
}

function Calculators() {
  const ref = useReveal();
  return (
    <section
      className="cs-section no-print"
      style={{ background: "var(--panel)" }}
    >
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">02</div>
          <div className="phase-name">Calculators</div>
        </div>
        <h2 className="cs-section-h2">
          Two quick checks.
          <br />
          <em>Directional, not a quote.</em>
        </h2>
        <div className="calc-grid reveal" ref={ref}>
          <FitCalculator />
          <ModelCalculator />
        </div>
      </div>
    </section>
  );
}

function BooksSection() {
  return (
    <section className="cs-section no-print">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">03</div>
          <div className="phase-name">Books</div>
        </div>
      </div>
      <Books />
    </section>
  );
}

function CTA() {
  return (
    <section className="cs-cta no-print">
      <div className="cs-cta-inner">
        <h3>
          Want the full picture?
          <br />
          <span>Let's talk about your problem.</span>
        </h3>
        <p>
          The playbook and calculators are directional. A short call gets you a
          real answer.
        </p>
        <a
          href={CALENDLY_URL}
          className="btn-primary"
          target="_blank"
          rel="noreferrer"
        >
          Schedule a Call →
        </a>
        <Link to="/engagement" className="btn-ghost">
          Engagement Models →
        </Link>
      </div>
    </section>
  );
}

function ResourcesFooter() {
  return (
    <footer className="no-print">
      <div className="footer-id">
        <strong>Jay Burgess</strong> · Principal Forward Deployed Engineer ·
        Founder, Revuity Systems
      </div>
      <div className="footer-id">Los Angeles, CA · Open to Remote</div>
    </footer>
  );
}

export default function ResourcesPage() {
  usePageMeta({
    title: "Resources, Jay Burgess — FDE Playbook, Calculators & Books",
    description:
      "Free resources for hiring or working with a Forward Deployed Engineer: a six-section playbook, two directional fit calculators, and Jay Burgess's published books.",
  });

  return (
    <div className="resources-page">
      <Hero />
      <Playbook />
      <Calculators />
      <BooksSection />
      <CTA />
      <ResourcesFooter />
    </div>
  );
}
