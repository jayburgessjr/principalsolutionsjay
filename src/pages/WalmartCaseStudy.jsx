import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import '../casestudy.css'

function CaseStudyNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Case Study · Walmart Creative Operations</div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="cs-hero">
      <div className="hero-bg-text">WMT</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">Case Study · Enterprise Transformation · Fortune 1</div>
        <h1 className="cs-title">
          <span style={{ color: 'var(--dim)' }}>Walmart</span><br />
          <span className="orange">Creative</span><br />
          Operations
        </h1>
        <p className="cs-subtitle">From Spreadsheets and Chaos to Decision Intelligence — in Three Quarters</p>
        <p className="cs-desc">
          How I walked into the world's largest retailer with no data department, no infrastructure,
          and no playbook — and built an entire data organization from the ground up, saving $750,000
          in nine months.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Organization</div>
            <div className="cmi-val">Walmart Creative Operations — Marketing & Advertising Division</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Data Scientist — functioning as full Data Organization Architect</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Starting Point</div>
            <div className="cmi-val">No data department. No infrastructure. Spreadsheets only.</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Outcome</div>
            <div className="cmi-val">$750,000 saved across 3 quarters · Full data org built</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Situation() {
  const ref = useReveal()
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 01</div>
          <div className="phase-name">The Situation</div>
        </div>
        <h2 className="cs-section-h2">The World's Largest Retailer.<br /><em>Running on Spreadsheets.</em></h2>
        <div className="situation-grid reveal" ref={ref}>
          <div className="situation-prose">
            <p>When I was brought into Walmart's Creative Operations division — the team responsible for marketing, advertising, and creative production at scale — I found something that shouldn't exist at a Fortune 1 company: <strong>no data department.</strong></p>
            <p>The division was generating enormous volumes of operational and financial data across creative production, asset management, cost allocation, vendor relationships, and campaign execution. None of it was being structured, analyzed, or used to make decisions. It was sitting in spreadsheets — hundreds of them — maintained by individual contributors with no shared schema, no governance, and no single source of truth.</p>
            <p>The result was predictable: <strong>money was leaking in every direction.</strong> Assets were being misallocated. Costs per unit were being estimated by gut instinct. Production decisions were made without any forecast of what they'd actually cost or save. When I arrived, leadership couldn't answer basic questions like "how much does this creative asset cost us to produce across the full lifecycle?" because the data to answer it didn't exist in any usable form.</p>
            <p>I was brought in as a Data Scientist. What the situation actually required was <strong>a full data organization — strategy, engineering, governance, and intelligence — built from zero.</strong> So that's what I built.</p>
          </div>
          <div>
            <div className="chaos-box">
              <div className="chaos-label">What I Found — Day One</div>
              <div className="chaos-text"><strong>No data infrastructure.</strong> Hundreds of disconnected spreadsheets across teams with no shared schema, no version control, no single source of truth.</div>
            </div>
            <div className="chaos-box">
              <div className="chaos-label">The Core Problem</div>
              <div className="chaos-text"><strong>Decision-making without data.</strong> Asset costs, production forecasts, and pricing decisions were being made on instinct — at the scale of the world's largest retailer.</div>
            </div>
            <div className="chaos-box">
              <div className="chaos-label">The Scale of the Leak</div>
              <div className="chaos-text"><strong>$750K in recoverable losses</strong> identified and addressed across three quarters — in a single division. Not the whole company. One division.</div>
            </div>
            <div className="chaos-box">
              <div className="chaos-label">What Was Missing</div>
              <div className="chaos-text">Data strategy. Data engineering. Governance. Visualization. Predictive modeling. Organizational alignment. <strong>All of it. From scratch.</strong></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function WhatIBuilt() {
  const bodyRef = useReveal()
  const builtItems = [
    { num: '01', title: 'Data Strategy', desc: <>Designed and implemented the division's entire data strategy from first principles — how data would be collected, structured, governed, and used to drive decisions. No template to follow. Built for the specific operational reality of a creative production organization at Walmart's scale.</> },
    { num: '02', title: 'End-to-End Data Architecture', desc: <>Replaced the spreadsheet chaos with a structured data architecture — ingestion pipelines, data models, transformation layers, and a unified schema that all teams could work from. <strong>One source of truth, replacing hundreds of disconnected files.</strong></> },
    { num: '03', title: 'Asset & Cost Forecasting Algorithms', desc: <>Built custom ML algorithms to forecast asset costs and model cost-per-unit across different production scenarios. These weren't static models — they were <strong>decision intelligence tools</strong> that answered "what happens to our cost structure if we do X instead of Y?"</> },
    { num: '04', title: 'Pricing & Cost-Per-Unit Intelligence', desc: 'Related asset costs to pricing decisions and cost-per-unit metrics in a way that had never been done in this division. Leadership could finally see the full cost lifecycle of a creative asset — production, revisions, distribution, and downstream usage — in a single view.' },
    { num: '05', title: 'Predictive Analytics Models', desc: <> Built machine learning models for predictive scenario analysis: <strong>"If we make this production decision, how much will it cost vs. save over the next two quarters?"</strong> Converted gut-instinct decisions into quantified, defensible recommendations.</> },
    { num: '06', title: 'Decision Intelligence Dashboards', desc: "Built visualizations that weren't passive reports — they were active decision tools. Leaders could model scenarios, track actuals vs. forecasts in real time, and see cost and efficiency implications before committing to production decisions." },
  ]
  const algoBlocks = [
    { title: 'Asset Cost Forecasting', desc: "ML models that predicted the true cost of a creative asset across its full production lifecycle — not just the initial production cost but revisions, usage rights, and downstream distribution." },
    { title: 'Cost-Per-Unit Modeling', desc: "Related asset production costs to unit economics at scale — answering how cost structures shift as production volume changes, and where the efficiency inflection points are." },
    { title: 'Scenario Simulation', desc: '"What happens if we do this vs. that?" — predictive models that quantified the financial impact of production and resource decisions before they were made.' },
    { title: 'Pricing Intelligence', desc: "Connected cost data to pricing decisions, surfacing where the division was underpricing, overproducing, or misallocating resources relative to actual market and internal benchmarks." },
  ]
  const councilBlocks = [
    { step: 'Structure', title: 'Cross-functional Data Council', desc: 'Created a governance body with leaders from every major team — giving them direct input into how data was defined, collected, and used.' },
    { step: 'Purpose', title: 'Shared Ownership of Data', desc: "Data governance can't be a top-down mandate. By making team leaders co-architects of the governance model, adoption happened organically." },
    { step: 'Outcome', title: 'Institutional Data Culture', desc: "The Data Council meant the infrastructure outlasted my engagement — it was embedded in how the organization operated, not dependent on one person." },
  ]

  return (
    <section className="cs-section" style={{ background: 'var(--panel)' }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 02</div>
          <div className="phase-name">What I Built</div>
        </div>
        <h2 className="cs-section-h2">Not a Dashboard.<br /><em>An Entire Data Organization.</em></h2>
        <p className="method-intro">I didn't come in and build a report. I built the infrastructure, the governance model, the algorithms, and the intelligence layer — end to end. Here's what that actually looked like.</p>

        <div className="build-body reveal" ref={bodyRef}>
          <div className="built-items">
            {builtItems.map(item => (
              <div className="built-item" key={item.num}>
                <div className="bi-num">{item.num}</div>
                <div>
                  <div className="bi-title">{item.title}</div>
                  <div className="bi-desc">{item.desc}</div>
                </div>
              </div>
            ))}
          </div>

          <div>
            <div className="algo-section">
              <div className="algo-label">The Algorithm Layer — Decision Intelligence, Not Just Reporting</div>
              <div className="algo-grid">
                {algoBlocks.map(b => (
                  <div className="algo-block" key={b.title}>
                    <h4>{b.title}</h4>
                    <p>{b.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="council-section">
              <div style={{ fontFamily: "'IBM Plex Mono', monospace", fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '1rem', marginTop: '2rem' }}>
                Data Governance — The Data Council Model
              </div>
              <div className="council-flow">
                {councilBlocks.map(b => (
                  <div className="cf-block" key={b.step}>
                    <div className="cf-step">{b.step}</div>
                    <div className="cf-title">{b.title}</div>
                    <div className="cf-desc">{b.desc}</div>
                  </div>
                ))}
              </div>
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
        <div className="kq-text">"The goal was never to build better spreadsheets. It was to make spreadsheets irrelevant — by replacing intuition-driven decisions with a system that could tell you, with quantified confidence, what the right decision was and what it would cost to be wrong."</div>
        <div className="kq-attr">Jay Burgess · Data Architect, Walmart Creative Operations</div>
      </div>
    </div>
  )
}

function Outcomes() {
  const heroRef = useReveal()
  const detailRef = useReveal()
  const outcomes = [
    { num: '$750K', label: 'Cost Recovered', desc: 'Identified and recovered across three quarters through cost modeling, algorithmic forecasting, and decision intelligence — in a single division of a Fortune 1 company' },
    { num: '3', label: 'Quarters to Impact', desc: 'From zero infrastructure to quantified, attributable financial impact in nine months. No inherited systems. No data team. Built from scratch.' },
    { num: '0→1', label: 'Data Organization Built', desc: 'Strategy, engineering, governance, analytics, and ML — a complete data organization where none existed. Not a project. An institution.' },
  ]
  const details = [
    { label: 'Where the Money Was Leaking', title: 'Invisible Cost Misallocation', desc: "Without structured cost tracking, assets were being produced at costs that didn't match their actual downstream value. The algorithms surfaced where production decisions were systematically over-investing in low-return assets and under-investing in high-return ones." },
    { label: 'How the Algorithms Found It', title: 'Predictive Cost Modeling', desc: "The ML forecasting models didn't just track historical costs — they projected what current decisions would cost in future quarters. By modeling 'do this vs. don't do this,' leadership could see the financial consequence of decisions before making them." },
    { label: 'What Changed Organizationally', title: 'From Gut to Data-Driven', desc: "The Data Council and governance model meant decisions that were previously made by instinct were now made with dashboards open, forecasts visible, and cost implications quantified. The culture shifted — not just the tools." },
    { label: 'What I Left Behind', title: 'A Self-Sustaining Data Organization', desc: "The infrastructure, governance model, and Data Council were designed to run without me. When I left, the division had a functioning data organization — not a dependency on one data scientist. That's what institutional architecture looks like." },
  ]
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">PHASE 03</div>
          <div className="phase-name">The Outcomes</div>
        </div>
        <h2 className="cs-section-h2">$750,000 Recovered.<br /><em>Three Quarters. One Division.</em></h2>
        <p className="method-intro">The results weren't theoretical. They were quantified, tracked, and attributable to specific architectural decisions and algorithmic interventions.</p>

        <div className="outcomes-hero reveal" ref={heroRef}>
          {outcomes.map(o => (
            <div className="oh-block" key={o.label}>
              <div className="oh-num">{o.num}</div>
              <div className="oh-label">{o.label}</div>
              <div className="oh-desc">{o.desc}</div>
            </div>
          ))}
        </div>

        <div className="outcome-detail reveal" ref={detailRef}>
          {details.map(d => (
            <div className="od-block" key={d.title}>
              <div className="od-label">{d.label}</div>
              <div className="od-title">{d.title}</div>
              <div className="od-desc">{d.desc}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function EVRelevance() {
  const ref = useReveal()
  const cards = [
    { tag: '"diagnose inefficiencies at their root"', title: 'What Walmart Proves', proof: "I walked into a division where no one had articulated the root cause of the cost leakage because no one had the data to see it. I built the infrastructure to find it, then fixed it. Root cause diagnosis at Fortune 1 scale." },
    { tag: '"architect data pipelines for intelligent decision-making"', title: 'What Walmart Proves', proof: "The entire data architecture at Walmart Creative Operations — ingestion, transformation, modeling, visualization — was designed and built by me. Not configured. Architected from first principles for a specific operational context." },
    { tag: '"translate solutions into playbooks for the portfolio"', title: 'What Walmart Proves', proof: "The Data Council governance model was specifically designed to outlast my engagement. I didn't build a system that needed me — I built an institution that ran on its own. That's the playbook model EV needs across 20+ companies." },
  ]
  return (
    <section className="ev-relevance">
      <div className="ev-inner">
        <div className="section-label">Why This Matters for Enduring Ventures</div>
        <h2 className="cs-section-h2" style={{ marginBottom: '1rem' }}>I've Already Done the VP Job.<br /><em>At the World's Largest Retailer.</em></h2>
        <p className="method-intro">The Walmart engagement wasn't a data science project. It was a portfolio company turnaround — compressed into one division of a Fortune 1 company. The motion is identical to what the VP role at EV requires.</p>
        <div className="ev-grid reveal" ref={ref}>
          {cards.map(c => (
            <div className="ev-card" key={c.tag}>
              <div className="ev-card-tag">EV Needs: <span>{c.tag}</span></div>
              <div className="ev-card-title">{c.title}</div>
              <div className="ev-card-proof">{c.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="cs-cta">
      <div className="cs-cta-inner">
        <h3>Enterprise scale.<br /><span>Builder speed.</span></h3>
        <p>Walmart proved I can operate at the largest scale. ReggieAI proved I can ship AI in regulated environments. Revuity proves I move fast as a founder. All three together — that's the VP role.</p>
        <a href="https://calendly.com/jayburgessjr/long-meet" className="btn-primary" target="_blank" rel="noreferrer">Schedule a Call →</a>
        <Link to="/reggie-case-study" className="btn-ghost">ReggieAI Case Study →</Link>
      </div>
    </section>
  )
}

function CaseStudyFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · AI Systems Architect · Builder · Operator</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function WalmartCaseStudy() {
  return (
    <>
      <CaseStudyNav />
      <Hero />
      <Situation />
      <WhatIBuilt />
      <KeyQuote />
      <Outcomes />
      <EVRelevance />
      <CTA />
      <CaseStudyFooter />
    </>
  )
}
