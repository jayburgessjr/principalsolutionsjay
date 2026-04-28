import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function AboutNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Jay Burgess · Executive Brief</div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="cs-hero" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 50%, rgba(232,98,26,0.08), transparent 70%)' }}>
      <div className="hero-bg-text">JAY</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">Executive Brief · Principal AI Systems Architect · Founder & CTO, Revuity Systems</div>
        <h1 className="cs-title">Who Is<br /><span>Jay Burgess</span></h1>
        <p className="cs-subtitle">The one-page read before the conversation.</p>
        <p className="cs-desc">
          Jay Burgess is a Principal AI Systems Architect with 15+ years of experience diagnosing broken systems,
          building the fix, and leaving behind organizations that can operate without him.
          He has generated $2.7M+ in verified, documented ROI across Fortune 500 enterprise work,
          regulated AI deployments, and product builds — and he does it by going deeper than anyone expects.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Experience</div>
            <div className="cmi-val">15+ years end to end</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Verified ROI</div>
            <div className="cmi-val">$2.7M+ documented</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Built</div>
            <div className="cmi-val">AI systems, data orgs, 8 products</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Status</div>
            <div className="cmi-val">Available now</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function TheOperator() {
  const ref = useReveal()
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">01</div>
          <div className="phase-name">The Operator</div>
        </div>
        <h2 className="cs-section-h2">Not a consultant.<br /><em>An operator who consults.</em></h2>
        <div className="proves-grid reveal" ref={ref}>
          <div className="proves-cell">
            <div className="proves-cell-label">The difference</div>
            <p>Most architects deliver decks. Jay delivers working systems. Every engagement ends with something running in production — not a roadmap for someone else to execute.</p>
          </div>
          <div className="proves-cell" style={{ borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)' }}>
            <div className="proves-cell-label">The method</div>
            <p>Problem → Solution → System → Scale. He diagnoses the real root cause, builds the actual fix, and documents it as a repeatable standard. Then he leaves.</p>
          </div>
          <div className="proves-cell">
            <div className="proves-cell-label">The standard</div>
            <p>Every system Jay builds runs without him in the room. That is the exit condition. Dependency on the consultant is a design failure — he engineers against it by default.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function TrackRecord() {
  const ref = useReveal()

  const items = [
    {
      co: 'HEAG',
      role: 'Principal AI Systems Architect',
      impact: '$2.7M+',
      what: 'Built ReggieAI — a production agentic compliance platform for Title IV financial aid regulations. RAG pipeline, anti-hallucination system prompt, HubSpot API integration. Delivered ahead of schedule. Also built a custom internal PM platform the team runs independently.',
    },
    {
      co: 'Walmart',
      role: 'Solutions Architect · Creative Operations',
      impact: '$750K',
      what: 'Built a Creative Operations data organization from scratch inside one of the most complex enterprise environments on earth. 86% reduction in reporting turnaround. Scalable pipelines, executive-ready reporting, full documentation and handoff.',
    },
    {
      co: 'Adobe',
      role: 'Enterprise Systems',
      impact: 'Fortune 500',
      what: 'Enterprise systems and solutions architecture work at Adobe — operating at the intersection of technical systems, stakeholder management, and business outcomes at scale.',
    },
    {
      co: 'Revuity Systems',
      role: 'Founder & CTO',
      impact: '8 Products',
      what: 'Founded a lean AI product studio. Shipped 8 products across 5 verticals — VoltIQ, Box Office Beacon, MenuIQ, and more. Designed, architected, and deployed. Proves he can own outcomes with no team to hide behind.',
    },
  ]

  return (
    <section className="cs-section" style={{ background: 'var(--panel)' }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">02</div>
          <div className="phase-name">Track Record</div>
        </div>
        <h2 className="cs-section-h2">Where he has<br /><em>delivered.</em></h2>
        <div className="engagement-page-grid reveal" ref={ref}>
          {items.map((item) => (
            <article className="engagement-page-card" key={item.co}>
              <div className="engagement-page-top">
                <div className="engagement-page-phase">{item.co}</div>
                <div className="engagement-page-tag">{item.role}</div>
              </div>
              <div className="engagement-page-name">{item.impact}</div>
              <p className="engagement-page-desc">{item.what}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatHeBrings() {
  const ref = useReveal()

  const capabilities = [
    { label: 'AI & Agentic Systems', body: 'RAG pipelines, multi-agent orchestration, evaluation frameworks, anti-hallucination architecture. Production-grade — not demos.' },
    { label: 'Data Engineering', body: 'Pipeline architecture, ETL/ELT, warehouse design, Power BI, Microsoft Fabric, Databricks. Built to survive enterprise scale.' },
    { label: 'Enterprise Systems', body: 'CRM, HR, finance, compliance, internal tooling. Operates fluently across the full technology stack of a modern organization.' },
    { label: 'Leadership & Delivery', body: '0→1 platform development, executive stakeholder alignment, team building, cross-functional ownership. He runs the room.' },
  ]

  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">03</div>
          <div className="phase-name">What He Brings</div>
        </div>
        <h2 className="cs-section-h2">Deep enough to build it.<br /><em>Fast.</em></h2>
        <p className="cs-desc" style={{ marginBottom: '3rem' }}>
          Certified Agentic Engineer · Certified Forward Deployment Engineer · Graduate Certificate in AI, Harvard University · M.S. Data Science · MBA
        </p>
        <div className="engagement-page-grid reveal" ref={ref}>
          {capabilities.map((c) => (
            <article className="engagement-page-card" key={c.label}>
              <div className="engagement-page-name">{c.label}</div>
              <p className="engagement-page-desc">{c.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhatHesLookingFor() {
  const ref = useReveal()

  return (
    <section className="cs-section" style={{ background: 'var(--panel)' }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">04</div>
          <div className="phase-name">What He's Looking For</div>
        </div>
        <h2 className="cs-section-h2">Structured for impact.<br /><em>Priced like an operator.</em></h2>
        <div className="proves-grid reveal" ref={ref}>
          <div className="proves-cell">
            <div className="proves-cell-label">Fractional</div>
            <p>Diagnostic sprints ($15K–$35K) and monthly retainers ($8K–$25K+/mo) for teams that need senior technical judgment without a full-time hire.</p>
          </div>
          <div className="proves-cell" style={{ borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)' }}>
            <div className="proves-cell-label">Embedded</div>
            <p>Full operator-level ownership ($25K–$40K+/mo) for teams that need someone to fix it, ship it, and leave behind the playbook.</p>
          </div>
          <div className="proves-cell">
            <div className="proves-cell-label">Full-Time</div>
            <p>The right Principal, VP, or operator-level role at $350K+ total compensation. Structured around ownership of outcomes — not hours logged.</p>
          </div>
        </div>
        <div className="engagement-fit" style={{ marginTop: '3rem' }}>
          <div className="engagement-fit-block">
            <div className="engagement-fit-label">Best Fit</div>
            <p>Founder-led teams, PE-backed operators, regulated-environment AI, internal systems, data infrastructure, and situations where recommendations alone are too slow.</p>
          </div>
          <div className="engagement-fit-block">
            <div className="engagement-fit-label">Not A Fit</div>
            <p>Commodity staff augmentation, vague "innovation" projects with no owner, or teams that want strategy without accountability for shipping.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cs-cta">
      <div className="cs-cta-inner">
        <h3>If the problem is real,<br /><span>let's talk.</span></h3>
        <p>The fastest way to know if there's a fit is a 30-minute conversation. Come with the problem — Jay will tell you straight whether he can solve it.</p>
        <a href="https://calendly.com/jayburgessjr/long-meet" className="btn-primary" target="_blank" rel="noreferrer">
          Schedule a Call →
        </a>
        <Link to="/" className="btn-ghost">Back to Portfolio →</Link>
      </div>
    </section>
  )
}

function Footer() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal AI Systems Architect · Founder & CTO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function AboutPage() {
  usePageMeta({
    title: 'Who Is Jay Burgess — Executive Brief',
    description:
      'Principal AI Systems Architect. 15+ years. $2.7M verified ROI. The one-page executive brief on who Jay Burgess is, what he has built, and how to work with him.',
  })

  return (
    <>
      <AboutNav />
      <Hero />
      <TheOperator />
      <TrackRecord />
      <WhatHeBrings />
      <WhatHesLookingFor />
      <CTA />
      <Footer />
    </>
  )
}
