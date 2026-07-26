import { Link } from "react-router-dom";
import { useReveal } from "../hooks/useReveal";
import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">Case Study · Regulated AI · Title IV</div>
        <h1 className="cs-title">
          Higher Ed <span>Compliance Software</span>
        </h1>
        <p className="cs-desc">
          A compliance team was drowning in Title IV rules and manual checks. I
          scoped the real problem, built a multi-agent platform on Claude,
          LangGraph, and MCP, hardened it for a federally regulated environment,
          and handed it off so the team runs it without me. It generated $2.7M
          in new revenue in its first three months.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Organization</div>
            <div className="cmi-val">
              A regulated Title IV student-aid provider
            </div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Title IV Federal Student Aid</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">
              Principal Forward Deployed Engineer · Sole builder
            </div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Result</div>
            <div className="cmi-val">$2.7M new revenue in three months</div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Scope() {
  const bodyRef = useReveal();
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">Step 01</div>
          <div className="phase-name">Scope</div>
        </div>
        <h2>
          Turn a symptom into a build plan.
          <br />
          <em>The problem was never the staff.</em>
        </h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>
              The complaint on the surface was simple. Compliance errors kept
              happening and the team was overwhelmed. The obvious fix would have
              been to hire more compliance staff or bolt on more review steps.
              That would have made the problem worse.
            </p>
            <p>
              I sat with the operators and the VP of Compliance and pulled the
              real problem out of the symptom. There was no organized,
              authoritative knowledge base for the compliance process to draw
              from. Staff were working from memory, informal documents, and
              outdated references. That produced inconsistent answers, missed
              regulatory requirements, and a manual review burden that could
              only grow.
            </p>
            <p>
              Underneath it sat a second failure. The intake form on the website
              had no connection to the CRM, so every prospective student who
              filled it out vanished into a silo with no tracking and no
              follow-up.
            </p>
            <p>
              I named three root causes that had to be solved together, and that
              diagnosis drove every technical decision that followed.
            </p>
          </div>
          <div className="cs-sidebar">
            <div className="finding-box">
              <div className="fb-label">Root cause 1</div>
              <div className="fb-text">
                <strong>No structured knowledge base.</strong> Answers came from
                informal docs and memory, not authoritative FSA and CFR sources.
              </div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Root cause 2</div>
              <div className="fb-text">
                <strong>No AI guardrails.</strong> In a Title IV context, an AI
                without strict anti-hallucination architecture is a legal
                liability, not a solution.
              </div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Root cause 3</div>
              <div className="fb-text">
                <strong>No CRM integration.</strong> The intake form was a dead
                end. Data never reached HubSpot, and follow-up broke entirely.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Prototype() {
  const bodyRef = useReveal();
  return (
    <section className="cs-section" style={{ background: "var(--panel)" }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">Step 02</div>
          <div className="phase-name">Prototype</div>
        </div>
        <h2>
          Build it fast, and build the whole stack.
          <br />
          <em>Claude, LangGraph, and MCP.</em>
        </h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>
              With the root causes clear, I designed and built a three-layer
              system using AI-assisted development, and I owned every layer
              myself.
            </p>
            <p>
              <strong>Layer 1, knowledge architecture.</strong> A structured
              JSON knowledge base drawn only from authoritative Federal Student
              Aid sources and Code of Federal Regulations citations. Every entry
              was sourced, structured, and version-controlled. This became the
              single source of truth the agents draw from.
            </p>
            <p>
              <strong>Layer 2, the agent.</strong> A multi-agent workflow on
              Claude and LangGraph, with MCP servers for tool calling. The agent
              can only answer from the verified knowledge base, has to cite CFR
              references, and is blocked from generating anything outside its
              retrieved context. In a federally regulated environment that is
              non-negotiable.
            </p>
            <p>
              <strong>Layer 3, CRM integration.</strong> I replaced the dead
              intake form with a live HubSpot API connection, so every
              prospective student interaction is captured, tracked, and triggers
              the right follow-up automatically.
            </p>
            <div className="arch-diagram">
              <div className="arch-title">
                System architecture, Higher Ed Compliance Software
              </div>
              <div className="arch-flow">
                <div className="arch-node">
                  Student query<span className="sub">Intake layer</span>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-node highlight">
                  LangGraph agent<span className="sub">Orchestration</span>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">
                  RAG pipeline<span className="sub">Retrieval</span>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">
                  JSON knowledge base
                  <span className="sub">FSA + CFR sources</span>
                </div>
              </div>
              <div className="arch-flow" style={{ marginTop: "1rem" }}>
                <div className="arch-node">
                  MCP tools<span className="sub">Tool calling</span>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-node highlight">
                  Claude response<span className="sub">Guardrailed output</span>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">
                  HubSpot API<span className="sub">CRM integration</span>
                </div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">
                  Follow-up<span className="sub">Automated</span>
                </div>
              </div>
            </div>
          </div>
          <div className="cs-sidebar">
            <div
              style={{
                background: "var(--black)",
                border: "1px solid var(--rule)",
                padding: "1.5rem",
                marginBottom: "1rem",
              }}
            >
              <div className="fb-label" style={{ marginBottom: "0.75rem" }}>
                Technology stack
              </div>
              <ul className="tech-list">
                {[
                  "Claude (LLM)",
                  "LangGraph (agent orchestration)",
                  "MCP (tool calling)",
                  "RAG pipeline architecture",
                  "Structured JSON knowledge base",
                  "System prompt engineering",
                  "HubSpot API integration",
                  "FSA + CFR authoritative sources",
                ].map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="finding-box">
              <div className="fb-label">Design principle</div>
              <div className="fb-text">
                In a Title IV environment a hallucinating AI is not just wrong,
                it is a <strong>federal compliance violation</strong>. Every
                decision prioritized reliability and auditability over
                capability.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Harden() {
  const bodyRef = useReveal();
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">Step 03</div>
          <div className="phase-name">Harden</div>
        </div>
        <h2>
          Make it production-grade.
          <br />
          <em>The phase regulated shops probe hardest.</em>
        </h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>
              Fluent output and correct output are not the same thing, and in
              regulated AI the gap between them is the whole risk. So I built a
              weighted evaluation framework to measure correctness, not
              confidence, and ran it against production test cases before
              anything went near a real user.
            </p>
            <p>
              On top of the evals I added the controls a Title IV auditor would
              ask for. Deterministic policy execution, human-in-the-loop review
              for anything outside the routine, structured outputs, and full
              audit logging so every AI-assisted decision is traceable back to
              its CFR source.
            </p>
            <div className="eval-framework-callout">
              <div className="fb-label">Evaluation framework</div>
              <p className="ef-intro">
                A weighted rubric that separates{" "}
                <strong>fluent output from correct output</strong>, the central
                failure mode in regulated AI.
              </p>
              <div className="ef-dimensions">
                <div className="ef-dim">
                  <span className="ef-weight">30%</span> Factual accuracy
                </div>
                <div className="ef-dim">
                  <span className="ef-weight">20%</span> Scope adherence
                </div>
                <div className="ef-dim">
                  <span className="ef-weight">20%</span> Escalation logic
                </div>
                <div className="ef-dim">
                  <span className="ef-weight">15%</span> Output quality
                </div>
                <div className="ef-dim">
                  <span className="ef-weight">15%</span> Retrieval precision
                </div>
              </div>
              <p className="ef-cases">
                15 production test cases spanning routine calculation, policy
                interpretation, edge cases, multi-step processes, and
                out-of-scope traps.
              </p>
            </div>
          </div>
          <div className="cs-sidebar">
            <div className="finding-box">
              <div className="fb-label">Guardrails</div>
              <div className="fb-text">
                Anti-hallucination system prompt, retrieval-only answers, and
                mandatory CFR citation. The agent cannot speak outside its
                sources.
              </div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Human in the loop</div>
              <div className="fb-text">
                Anything outside a routine case routes to a human reviewer.
                Governed AI, not autonomous AI, in a zero-margin-for-error
                domain.
              </div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Auditability</div>
              <div className="fb-text">
                Structured logging and audit trails on every decision, so a
                compliance officer can reconstruct exactly what happened and
                why.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function KeyQuote() {
  return (
    <div className="key-quote">
      <div className="kq-inner">
        <div className="kq-text">
          "The goal was never to build an impressive AI demo. It was to replace
          a broken process with a system that is more reliable, more auditable,
          and more scalable than any human-run alternative, in a
          zero-margin-for-error environment."
        </div>
        <div className="kq-attr">
          Jay Burgess · Architect, Higher Ed Compliance Software
        </div>
      </div>
    </div>
  );
}

function HandOff() {
  const bodyRef = useReveal();
  const gridRef = useReveal();
  return (
    <section className="cs-section" style={{ background: "var(--panel)" }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">Step 04</div>
          <div className="phase-name">Hand off</div>
        </div>
        <h2>
          Ship it so the team owns it.
          <br />
          <em>Deployed ahead of schedule. Runs without me.</em>
        </h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>
              Deployment is not the finish line. The handoff is. I worked
              directly with the VP of Compliance and QA to make sure the system
              was ready for the team to own before staging went live. That meant
              documentation, a demo the team could run, and an operational
              protocol they could follow without me in the room.
            </p>
            <p>
              <strong>Staging went live ahead of schedule.</strong> The
              knowledge base was validated against current FSA guidance, the
              guardrails were tested against Title IV edge cases, and the
              HubSpot triggers were verified end to end.
            </p>
            <p>
              Higher Ed Compliance Software is now the operational backbone of
              compliance intake at the client. It handles queries, captures
              data, routes follow-ups, and returns auditable, CFR-cited answers
              without manual intervention on routine cases. In its first three
              months it drove $2.7M in new client revenue against a $1.7M base
              and lifted case-processing capacity by 25% with no added
              headcount.
            </p>
            <p>
              This is what "build it to run without me" means in practice. Not a
              handoff to another engineer. A handoff to a team that does not
              need an engineer anymore.
            </p>
          </div>
          <div className="cs-sidebar">
            <div className="outcome-big">
              <div className="ob-num">$2.7M</div>
              <div className="ob-label">New revenue in three months</div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Handoff package</div>
              <div className="fb-text">
                Operational docs, an edge-case handling guide, and
                knowledge-base update procedures, so the team owns it going
                forward.
              </div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Ahead of schedule</div>
              <div className="fb-text">
                Staging deployed before the agreed milestone. Not because
                corners were cut, because the architecture was clean from the
                start.
              </div>
            </div>
          </div>
        </div>
        <div className="outcomes-grid reveal" ref={gridRef}>
          <div className="outcome-cell">
            <div className="oc-label">New revenue</div>
            <div className="oc-val">$2.7M</div>
            <div className="oc-desc">
              In the first three months, against a $1.7M annual base
            </div>
          </div>
          <div className="outcome-cell">
            <div className="oc-label">Capacity</div>
            <div className="oc-val">+25%</div>
            <div className="oc-desc">
              More case-processing capacity, with no added headcount
            </div>
          </div>
          <div className="outcome-cell">
            <div className="oc-label">Hallucination rate</div>
            <div className="oc-val">Zero</div>
            <div className="oc-desc">
              No out-of-bounds responses against Title IV edge cases in testing
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function Harvest() {
  const bodyRef = useReveal();
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">Step 05</div>
          <div className="phase-name">Harvest</div>
        </div>
        <h2>
          Push the pattern back into the platform.
          <br />
          <em>Every system compounds into the next.</em>
        </h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>
              A build like this should never be a one-off. Once Higher Ed
              Compliance Software was running, I pulled the reusable pieces out
              of it and pushed them into Revuity's shared library, so the next
              regulated build starts much further along.
            </p>
            <p>
              The guardrail pattern, the evaluation rubric, the
              human-in-the-loop routing, and the retrieval architecture all
              became reference components. Part of that work is open source as
              the Eligibility-Agent, a reference implementation for regulated
              agentic AI on Claude, LangGraph, and MCP that anyone can build
              from.
            </p>
            <p>
              That is the difference between shipping a project and building a
              capability. Higher Ed Compliance Software solved one compliance
              problem, and it also made every future one cheaper and faster to
              solve.
            </p>
          </div>
          <div className="cs-sidebar">
            <div className="finding-box">
              <div className="fb-label">Reference architecture</div>
              <div className="fb-text">
                Guardrails, evals, HITL routing, and retrieval, packaged as
                reusable components in the Revuity library.
              </div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Open source</div>
              <div className="fb-text">
                The Eligibility-Agent, an open reference pattern for regulated
                agentic AI on Claude, LangGraph, and MCP.
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function WhatThisProves() {
  const gridRef = useReveal();
  const h2Ref = useReveal();
  return (
    <section
      className="cs-section"
      style={{ background: "var(--panel)", borderTop: "1px solid var(--rule)" }}
    >
      <div className="cs-section-inner">
        <div className="section-label">What this demonstrates</div>
        <h2 className="reveal" ref={h2Ref}>
          The same five moves, Scope, Prototype, Harden, Hand off, Harvest,
          <br />
          <em>work across any business in any portfolio.</em>
        </h2>
        <div
          className="proves-grid reveal"
          ref={gridRef}
          style={{ marginTop: "3rem" }}
        >
          <div className="proves-cell">
            <div className="proves-cell-label">I walked in and found</div>
            <p>
              A process that was broken at the structural level. Not a people
              problem, not a training problem. A system architecture problem
              that only compounds over time.
            </p>
          </div>
          <div
            className="proves-cell"
            style={{
              borderLeft: "1px solid var(--rule)",
              borderRight: "1px solid var(--rule)",
            }}
          >
            <div className="proves-cell-label">I built without a team</div>
            <p>
              Three technical layers, knowledge base, agent, and CRM
              integration, designed, built, hardened, and deployed by one
              person. No dependency on an engineering team to move fast.
            </p>
          </div>
          <div className="proves-cell">
            <div className="proves-cell-label">I left it running</div>
            <p>
              The compliance team runs this system independently, with no
              ongoing engineering support. The work compounds after I am gone.
              That is what scalable delivery looks like.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

function CTA() {
  return (
    <section className="cs-cta">
      <h3>
        See what I can
        <br />
        <span>build for you.</span>
      </h3>
      <p>
        This is one example of one engagement. The five moves are repeatable.
        The results are real.
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

function CaseStudyFooter() {
  return (
    <footer>
      <div className="footer-id">
        <strong>Jay Burgess</strong> · Principal Forward Deployed Engineer ·
        Founder, Revuity Systems
      </div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  );
}

export default function CaseStudy() {
  usePageMeta({
    title: "Higher Ed Compliance Software Case Study, Jay Burgess",
    description:
      "How Jay Burgess scoped a broken Title IV compliance process, built a multi-agent platform on Claude, LangGraph, and MCP, hardened it for a regulated environment, and handed it off. $2.7M in new revenue in three months.",
  });

  return (
    <>
      <Hero />
      <Scope />
      <Prototype />
      <Harden />
      <KeyQuote />
      <HandOff />
      <Harvest />
      <WhatThisProves />
      <CTA />
      <CaseStudyFooter />
    </>
  );
}
