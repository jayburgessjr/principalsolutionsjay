import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

const models = [
  {
    phase: '01',
    name: 'Diagnostic Sprint',
    range: '$15K–$35K',
    tag: '2–4 Weeks · Fixed Scope',
    description:
      'Used when the business problem is still blurry. I diagnose the real failure mode, map the architecture, and define the shortest credible path to a working fix.',
    bullets: [
      'Root-cause analysis across process, data, tooling, and org design',
      'Architecture memo and operating recommendations',
      'Delivery plan with priorities, risks, and build sequence',
    ],
  },
  {
    phase: '02',
    name: 'Fractional Architect / CTO / CIO',
    range: '$8K–$25K+/mo',
    tag: 'Monthly Retainer · Strategy + Execution',
    description:
      'Used when a team needs senior technical judgment every week but is not yet ready for a full-time hire. I operate as a high-context decision-maker, not a passive advisor.',
    bullets: [
      'AI systems, internal tools, and data architecture leadership',
      'Roadmap, vendor, and technical decision support',
      'Hands-on build guidance with direct operator accountability',
    ],
  },
  {
    phase: '03',
    name: 'Embedded Build Partner',
    range: '$25K–$40K+/mo',
    tag: 'Deep Execution · Operator-Level Ownership',
    description:
      'Used when the mandate is not “help us think” but “fix it and ship it.” This model is closest to dropping me in as an interim senior operator with full-stack responsibility.',
    bullets: [
      'System architecture and implementation',
      'Cross-functional ownership across business, product, and technical layers',
      'Documentation, handoff, and repeatable playbooks',
    ],
  },
]

const fit = [
  {
    label: 'Best Fit',
    body: 'Founder-led teams, PE-backed operators, regulated-environment AI, internal systems, data infrastructure, and situations where recommendations alone are too slow.',
  },
  {
    label: 'Full-Time Target',
    body: '$350K+ total compensation for the right principal, VP, or operator-level role — structured around ownership of outcomes, not hours.',
  },
  {
    label: 'Not A Fit',
    body: 'Commodity staff augmentation, vague “innovation” projects with no owner, or teams that want strategy without accountability for shipping.',
  },
]

function EngagementNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Engagement · Models & Compensation</div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="cs-hero" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 50%, rgba(232,98,26,0.08), transparent 70%)' }}>
      <div className="hero-bg-text">ENG</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">Engagement Models · Compensation Fit · Operator-Level Scope</div>
        <h1 className="cs-title">Ways To<br /><span>Work With Me</span></h1>
        <p className="cs-subtitle">Fractional leadership, fixed-scope diagnosis, and embedded build ownership.</p>
        <p className="cs-desc">
          The question is not whether I can architect the system. The question is what level of
          ownership you need: diagnosis, ongoing senior judgment, or someone who can go from root
          cause to shipped fix and leave behind the playbook.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Advisory</div>
            <div className="cmi-val">Diagnostic sprints for high-leverage problems</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Fractional</div>
            <div className="cmi-val">$8K–$25K+/month</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Embedded</div>
            <div className="cmi-val">$25K–$40K+/month</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Full-Time Fit</div>
            <div className="cmi-val">$350K+ total comp</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Models() {
  const gridRef = useReveal()

  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 01</div>
          <div className="phase-name">Engagement Models</div>
        </div>
        <h2 className="cs-section-h2">Three ways to engage.<br /><em>Different scope. Same standard.</em></h2>
        <div className="engagement-page-grid reveal" ref={gridRef}>
          {models.map((model) => (
            <article className="engagement-page-card" key={model.name}>
              <div className="engagement-page-top">
                <div className="engagement-page-phase">{model.phase}</div>
                <div className="engagement-page-tag">{model.tag}</div>
              </div>
              <div className="engagement-page-name">{model.name}</div>
              <div className="engagement-page-range">{model.range}</div>
              <p className="engagement-page-desc">{model.description}</p>
              <ul className="engagement-page-list">
                {model.bullets.map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function CompensationFit() {
  const ref = useReveal()

  return (
    <section className="cs-section" style={{ background: 'var(--panel)' }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 02</div>
          <div className="phase-name">Compensation Fit</div>
        </div>
        <h2 className="cs-section-h2">Worth in market terms.<br /><em>Positioned above a generic architect title.</em></h2>
        <div className="engagement-fit reveal" ref={ref}>
          {fit.map((item) => (
            <div className="engagement-fit-block" key={item.label}>
              <div className="engagement-fit-label">{item.label}</div>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function WhyItPricesThisWay() {
  const ref = useReveal()

  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 03</div>
          <div className="phase-name">Why</div>
        </div>
        <h2 className="cs-section-h2">The price is for outcomes.<br /><em>Not hours.</em></h2>
        <div className="proves-grid reveal" ref={ref}>
          <div className="proves-cell">
            <div className="proves-cell-label">I diagnose</div>
            <p>I find the actual failure mode instead of accepting the first explanation the organization gives me.</p>
          </div>
          <div className="proves-cell" style={{ borderLeft: '1px solid var(--rule)', borderRight: '1px solid var(--rule)' }}>
            <div className="proves-cell-label">I build</div>
            <p>I do not stop at architecture diagrams. I ship the system, the workflow, the data layer, or the tool itself.</p>
          </div>
          <div className="proves-cell">
            <div className="proves-cell-label">I hand off</div>
            <p>The output is a system and a playbook that continues to work after I leave, which is where the real leverage comes from.</p>
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
        <h3>If the problem is real,<br /><span>I’m interested.</span></h3>
        <p>The right engagement depends on how much ownership you need. If you want someone who can diagnose, build, and leave behind a system that runs, let’s talk.</p>
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

export default function EngagementPage() {
  usePageMeta({
    title: 'Engagement Models — Jay Burgess',
    description:
      'How to work with Jay Burgess: diagnostic sprints, fractional architecture, CTO, and CIO engagements, embedded build ownership, and compensation fit.',
  })

  return (
    <>
      <EngagementNav />
      <Hero />
      <Models />
      <CompensationFit />
      <WhyItPricesThisWay />
      <CTA />
      <Footer />
    </>
  )
}
