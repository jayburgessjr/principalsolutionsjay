import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import '../casestudy.css'

function CaseStudyNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Case Study · ReggieAI</div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="cs-hero">
      <div className="cs-inner">
        <div className="cs-eyebrow">Case Study · AI System · 2025</div>
        <h1 className="cs-title">Reggie<span>AI</span></h1>
        <p className="cs-desc">
          How I diagnosed a broken compliance process, built a production agentic AI system from
          the ground up, and deployed it ahead of schedule — in a federally regulated environment.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Organization</div>
            <div className="cmi-val">Higher Education Assistance Group (HEAG)</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Domain</div>
            <div className="cmi-val">Title IV Federal Student Aid Compliance</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Sole Architect, Builder & Deployment Lead</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Status</div>
            <div className="cmi-val">Live in Production · Staging Ahead of Schedule</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Diagnose() {
  const bodyRef = useReveal()
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 01</div>
          <div className="phase-name">Diagnose</div>
        </div>
        <h2>The real problem wasn't the staff.<br /><em>It was the architecture underneath them.</em></h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>When I came into this situation, the surface-level complaint was that compliance errors were happening and the team was overwhelmed. The instinct of most organizations would be to hire more compliance staff or add more review steps.</p>
            <p>I dug deeper. What I found was a structural failure: <strong>there was no organized, authoritative knowledge base</strong> that the compliance process could reliably draw from. Staff were working from memory, informal documents, and outdated references — leading to inconsistent answers, missed regulatory requirements, and an unsustainable manual review burden.</p>
            <p>The secondary problem: the intake mechanism — an embedded web form — had no integration with the CRM. Data entered by prospective students disappeared into a silo. No tracking, no follow-up triggers, no institutional memory.</p>
            <p>I identified three root causes that needed to be solved simultaneously: <strong>knowledge architecture, AI guardrails, and workflow integration.</strong> That diagnosis drove every technical decision that followed.</p>
          </div>
          <div className="cs-sidebar">
            <div className="finding-box">
              <div className="fb-label">Root Cause #1</div>
              <div className="fb-text"><strong>No structured knowledge base.</strong> Compliance responses were drawn from informal docs, memory, and scattered references — not authoritative FSA regulatory sources.</div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Root Cause #2</div>
              <div className="fb-text"><strong>No AI guardrails.</strong> Any AI system deployed without strict anti-hallucination architecture in a Title IV context is a legal liability, not a solution.</div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Root Cause #3</div>
              <div className="fb-text"><strong>Zero CRM integration.</strong> The embedded intake form was a dead end — data never reached HubSpot, breaking follow-up workflows entirely.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Build() {
  const bodyRef = useReveal()
  return (
    <section className="cs-section" style={{ background: 'var(--panel)' }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 02</div>
          <div className="phase-name">Build</div>
        </div>
        <h2>Built the fix myself.<br /><em>End to end. No hand-offs.</em></h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>With the root causes clear, I designed and built a three-layer solution: a structured knowledge base, an agentic AI workflow with strict guardrails, and a live CRM integration.</p>
            <p><strong>Layer 1 — Knowledge Architecture:</strong> I built a structured JSON knowledge base drawing exclusively from authoritative Federal Student Aid (FSA) sources and Code of Federal Regulations (CFR) citations. Every piece of knowledge was sourced, structured, and version-controlled. This became the single source of truth the AI draws from.</p>
            <p><strong>Layer 2 — Agentic AI with Anti-Hallucination:</strong> I engineered the Botpress workflow and system prompt to enforce strict boundaries — the AI can only respond using the verified knowledge base, must cite CFR references, and is explicitly prohibited from generating responses outside its training data. This is non-negotiable in a federally regulated environment.</p>
            <p><strong>Layer 3 — HubSpot API Integration:</strong> I replaced the broken embedded form with a live HubSpot API connection, ensuring every prospective student interaction is captured, tracked, and triggers appropriate follow-up workflows automatically.</p>
            <div className="arch-diagram">
              <div className="arch-title">System Architecture — ReggieAI</div>
              <div className="arch-flow">
                <div className="arch-node">Student Query<span className="sub">Intake Layer</span></div>
                <div className="arch-arrow">→</div>
                <div className="arch-node highlight">Botpress Agent<span className="sub">Orchestration</span></div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">RAG Pipeline<span className="sub">Retrieval Layer</span></div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">JSON Knowledge Base<span className="sub">FSA + CFR Sources</span></div>
              </div>
              <div className="arch-flow" style={{ marginTop: '1rem' }}>
                <div className="arch-node">System Prompt<span className="sub">Anti-hallucination</span></div>
                <div className="arch-arrow">→</div>
                <div className="arch-node highlight">LLM Response<span className="sub">Guardrailed Output</span></div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">HubSpot API<span className="sub">CRM Integration</span></div>
                <div className="arch-arrow">→</div>
                <div className="arch-node">Follow-up Workflow<span className="sub">Automated</span></div>
              </div>
            </div>
            <div className="eval-framework-callout">
              <div className="fb-label">Evaluation Framework</div>
              <p className="ef-intro">Built a weighted evaluation framework to distinguish <strong>fluent output from correct output</strong> — the central failure mode in regulated AI.</p>
              <div className="ef-dimensions">
                <div className="ef-dim"><span className="ef-weight">30%</span> Factual Accuracy</div>
                <div className="ef-dim"><span className="ef-weight">20%</span> Scope Adherence</div>
                <div className="ef-dim"><span className="ef-weight">20%</span> Escalation Logic</div>
                <div className="ef-dim"><span className="ef-weight">15%</span> Output Quality</div>
                <div className="ef-dim"><span className="ef-weight">15%</span> Retrieval Precision</div>
              </div>
              <p className="ef-cases">15 production test cases spanning routine calculation, policy interpretation, edge cases, multi-step process, and out-of-scope traps.</p>
            </div>
          </div>
          <div className="cs-sidebar">
            <div style={{ background: 'var(--black)', border: '1px solid var(--rule)', padding: '1.5rem', marginBottom: '1rem' }}>
              <div className="fb-label" style={{ marginBottom: '0.75rem' }}>Technology Stack</div>
              <ul className="tech-list">
                {['Botpress (Agentic Orchestration)', 'RAG Pipeline Architecture', 'Structured JSON Knowledge Base', 'System Prompt Engineering', 'HubSpot API Integration', 'CFR Regulatory References', 'FSA Authoritative Sources', 'Anti-hallucination Guardrails'].map(t => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="finding-box">
              <div className="fb-label">Design Principle</div>
              <div className="fb-text">In a Title IV environment, a hallucinating AI isn't just wrong — it's a <strong>federal compliance violation</strong>. Every architectural decision prioritized reliability and auditability over capability.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function KeyQuote() {
  return (
    <div className="key-quote">
      <div className="kq-inner">
        <div className="kq-text">"The goal was never to build an impressive AI demo. It was to replace a broken process with a system that is more reliable, more auditable, and more scalable than any human-run alternative — in a zero-margin-for-error environment."</div>
        <div className="kq-attr">Jay Burgess · Architect, ReggieAI</div>
      </div>
    </div>
  )
}

function Scale() {
  const bodyRef = useReveal()
  const gridRef = useReveal()
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 03</div>
          <div className="phase-name">Scale</div>
        </div>
        <h2>Deployed ahead of schedule.<br /><em>Documented for the team. Runs without me.</em></h2>
        <div className="cs-body reveal" ref={bodyRef}>
          <div className="cs-prose">
            <p>Deployment isn't the finish line — handoff is. I coordinated directly with Karyn Wright-Moore (VP of Compliance & QA) to ensure the system was ready for team adoption before staging went live. That meant documentation, demo readiness, and a clear operational protocol the compliance team could follow without needing me in the room.</p>
            <p><strong>Staging was deployed ahead of schedule.</strong> The knowledge base was reviewed and validated against current FSA guidance. The anti-hallucination guardrails were tested against edge cases specific to Title IV scenarios. The HubSpot workflow triggers were verified end to end.</p>
            <p>The system is now the operational backbone of compliance intake at HEAG. It handles queries, captures data, routes follow-ups, and provides auditable CFR-cited responses — without manual intervention for routine cases.</p>
            <p>This is what "build it to run without me" means in practice. Not a hand-off to another engineer. A hand-off to a team that doesn't need an engineer anymore.</p>
          </div>
          <div className="cs-sidebar">
            <div className="outcome-big">
              <div className="ob-num">Live</div>
              <div className="ob-label">Production Deployment · 2025</div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Handoff Protocol</div>
              <div className="fb-text">Coordinated staging readiness with VP of Compliance. Produced operational docs, edge case handling guide, and knowledge base update procedures — so the team owns it going forward.</div>
            </div>
            <div className="finding-box">
              <div className="fb-label">Ahead of Schedule</div>
              <div className="fb-text">Staging deployed before the agreed milestone date. Not because corners were cut — because the architecture was clean from the start.</div>
            </div>
          </div>
        </div>
        <div className="outcomes-grid reveal" ref={gridRef}>
          <div className="outcome-cell">
            <div className="oc-label">Deployment Status</div>
            <div className="oc-val">Live</div>
            <div className="oc-desc">Production system running in a federally regulated Title IV compliance environment</div>
          </div>
          <div className="outcome-cell">
            <div className="oc-label">Hallucination Rate</div>
            <div className="oc-val">Zero</div>
            <div className="oc-desc">Anti-hallucination architecture tested against Title IV edge cases — zero out-of-bounds responses in testing</div>
          </div>
          <div className="outcome-cell">
            <div className="oc-label">Timeline</div>
            <div className="oc-val">Early</div>
            <div className="oc-desc">Staged ahead of agreed milestone. Clean architecture from day one means no rework cycles</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatThisProves() {
  const gridRef = useReveal()
  const h2Ref = useReveal()
  return (
    <section className="cs-section" style={{ background: 'var(--panel)', borderTop: '1px solid var(--rule)' }}>
      <div className="cs-section-inner">
        <div className="section-label">What this demonstrates</div>
        <h2 className="reveal" ref={h2Ref}>
          The same motion — Diagnose, Build, Scale —<br />
          <em>works across any business in any portfolio.</em>
        </h2>
        <div className="proves-grid reveal" ref={gridRef} style={{ marginTop: '3rem' }}>
          <div className="proves-cell">
            <div className="proves-cell-label">I walked in and found</div>
            <p>A process that was broken at the structural level — not a people problem, not a training problem. A system architecture problem that only compounds over time.</p>
          </div>
          <div className="proves-cell" style={{ borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)' }}>
            <div className="proves-cell-label">I built without a team</div>
            <p>Three technical layers — knowledge base, AI orchestration, CRM integration — designed, built, tested, and deployed by one person. No dependency on an engineering team to move fast.</p>
          </div>
          <div className="proves-cell">
            <div className="proves-cell-label">I left it running</div>
            <p>The compliance team runs this system independently. No ongoing engineering support required. That's what scalable delivery looks like — the work compounds after I'm gone.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cs-cta">
      <h3>See what I can<br /><span>build for you.</span></h3>
      <p>This case study is one example of one engagement. The motion is repeatable. The results are real.</p>
      <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">
        Schedule a Call →
      </a>
    </section>
  )
}

function CaseStudyFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal Solutions Architect · AI Systems Architect · Builder · Operator</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function CaseStudy() {
  return (
    <>
      <CaseStudyNav />
      <Hero />
      <Diagnose />
      <Build />
      <KeyQuote />
      <Scale />
      <WhatThisProves />
      <CTA />
      <CaseStudyFooter />
    </>
  )
}
