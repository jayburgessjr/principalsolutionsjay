import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import '../casestudy.css'

function CaseStudyNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Case Study · Revuity Systems</div>
    </nav>
  )
}

function Hero() {
  return (
    <section className="cs-hero" style={{ background: 'radial-gradient(ellipse 60% 70% at 100% 50%, rgba(232,98,26,0.07), transparent 70%)' }}>
      <div className="hero-bg-text">RS</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">Case Study · Founder & CTO · AI-First Software Studio</div>
        <h1 className="cs-title">Revuity<br /><span>Systems</span></h1>
        <p className="cs-subtitle">AI Advisory. Agentic Engineering. SaaS Products. PE Focus.</p>
        <p className="cs-desc">
          An LA-based AI-first software studio offering AI advisory &amp; agentic engineering, solution architecture for PE firms, SaaS product development, portfolio operations intelligence, and AI agentic engineering workshops — built and operated as Founder &amp; CTO.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Entity</div>
            <div className="cmi-val">Revuity Systems — AI-First Software Studio</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Founder & CTO</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Products Shipped</div>
            <div className="cmi-val">VoltIQ · PricingCopilot · MenuIQ · ROAAS</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Focus</div>
            <div className="cmi-val">AI Advisory · PE Firms · Agentic Engineering</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Philosophy() {
  const gridRef = useReveal()
  return (
    <section className="philosophy">
      <div className="philosophy-inner">
        <div className="section-label">The Studio Philosophy</div>
        <h2>Not a Consulting Firm.<br />Not a Startup Factory.<br /><em>A Focused Builder Studio.</em></h2>
        <div className="philosophy-grid reveal" ref={gridRef}>
          <div className="philo-block">
            <div className="pb-num">01</div>
            <div className="pb-title">Lean by Design</div>
            <p className="pb-text">Revuity Systems is intentionally small. No bloated team, no investor overhead, no burn rate pressure. Every product is designed to generate revenue with minimal operating cost — because lean systems are durable systems.</p>
          </div>
          <div className="philo-block">
            <div className="pb-num">02</div>
            <div className="pb-title">Vertical Focus</div>
            <p className="pb-text">Each product targets a specific vertical with a specific data problem that existing tools solve poorly. Weddings. Certifications. Entertainment. Party gaming. Niche markets with real pain and no dominant incumbents.</p>
          </div>
          <div className="philo-block">
            <div className="pb-num">03</div>
            <div className="pb-title">Ship First, Scale Second</div>
            <p className="pb-text">I validate before I over-engineer. The goal of every product is a working version in the hands of real users as fast as possible. Feedback from real users beats assumptions from any amount of market research.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function BuildModel() {
  const flowRef = useReveal()
  const proofRef = useReveal()
  const steps = [
    { icon: '◎', label: 'Identify', desc: 'Find a vertical with a real data problem and no good existing solution' },
    { icon: '◈', label: 'Validate', desc: 'Confirm the pain is real before writing a line of code' },
    { icon: '⬡', label: 'Architect', desc: 'Design the data model, UX, and tech stack for the specific problem' },
    { icon: '△', label: 'Ship', desc: 'Deploy a working product using Lovable + Supabase stack' },
    { icon: '◻', label: 'Iterate', desc: 'Refine based on real user behavior, not assumptions' },
  ]
  return (
    <section className="build-model">
      <div className="build-inner">
        <div className="section-label">The Repeatable Build Model</div>
        <h2>Same Five Moves.<br /><em>Every Product. Every Time.</em></h2>
        <p className="build-intro">Revuity Systems isn't a collection of one-off projects. It's proof of a repeatable method for identifying a problem, validating it fast, and shipping a production product — across completely different industries.</p>
        <div className="model-flow reveal" ref={flowRef}>
          {steps.map((s, i) => (
            <>
              <div className="flow-step" key={s.label}>
                <div className="fs-icon">{s.icon}</div>
                <div className="fs-label">{s.label}</div>
                <div className="fs-desc">{s.desc}</div>
              </div>
              {i < steps.length - 1 && <div className="flow-arrow" key={`arrow-${i}`}>→</div>}
            </>
          ))}
        </div>
        <div className="model-proof reveal" ref={proofRef}>
          <div className="mp-label">Why This Matters</div>
          <div className="mp-text">This is the same motion I'd apply inside a portfolio company. <strong>Identify the highest-leverage problem. Validate the root cause. Architect the right solution. Ship something real.</strong> Revuity Systems is 4 live proof points that I can execute this loop across different industries, different users, and different constraints — without a team or a runway to fall back on.</div>
        </div>
      </div>
    </section>
  )
}

function ProductCard({ eyebrow, name, tagline, desc, stack, decisions, outcomeLabel, outcomeVal, outcomeDesc, status }) {
  const ref = useReveal()
  const statusClass = { Live: 'status-live', 'In Beta': 'status-beta', 'In Development': 'status-dev' }[status]
  return (
    <div className="product-card reveal" ref={ref}>
      <div className="pc-main">
        <div className="pc-eyebrow">{eyebrow}</div>
        <div className="pc-name">{name}</div>
        <div className="pc-tagline">{tagline}</div>
        <p className="pc-desc">{desc}</p>
      </div>
      <div className="pc-stack">
        <div className="pc-stack-label">Stack</div>
        <div className="stack-pills">
          {stack.map(s => <span className="pill" key={s}>{s}</span>)}
        </div>
        <div className="pc-decisions-label">Key Decisions</div>
        <ul className="pc-decisions">
          {decisions.map((d, i) => <li key={i}>{d}</li>)}
        </ul>
      </div>
      <div className="pc-outcome">
        <div>
          <div className="pc-outcome-label">{outcomeLabel}</div>
          <div className="pc-outcome-val">{outcomeVal}</div>
          <div className="pc-outcome-desc">{outcomeDesc}</div>
        </div>
        <span className={`pc-status ${statusClass}`}>{status}</span>
      </div>
    </div>
  )
}

function Products() {
  const products = [
    {
      eyebrow: 'Product 01 · B2B SaaS · Energy & Operations',
      name: 'VoltIQ',
      tagline: 'AI-powered operations intelligence for portfolio companies',
      desc: 'Portfolio companies generate enormous operational data — but most of it sits in disconnected systems with no intelligence layer on top. VoltIQ aggregates operational and performance signals across portfolio companies, surfacing anomalies, benchmarks, and optimization opportunities through an AI-driven analytics layer built for PE operators.',
      stack: ['Lovable', 'Supabase', 'PostgreSQL', 'AI Analytics', 'Subscription SaaS'],
      decisions: ['PE operator focus — built for the GP layer, not individual companies', 'AI-first architecture — every data point flows through an intelligence layer', 'Multi-entity data model from day one — horizontal portfolio expansion built in', 'Minimal surface area on launch — operations intelligence only, no bloat'],
      outcomeLabel: 'Target', outcomeVal: 'PE', outcomeDesc: 'Portfolio operations intelligence for private equity firms and their operating teams.', status: 'In Development',
    },
    {
      eyebrow: 'Product 02 · AI SaaS · Pricing Intelligence',
      name: 'PricingCopilot',
      tagline: 'AI pricing optimization for SMB and mid-market operators',
      desc: 'Most businesses set prices by gut, competitor observation, or inertia. PricingCopilot is an AI-powered pricing intelligence layer that analyzes cost structure, market signals, and competitive positioning to surface pricing opportunities and risk — giving operators the data-driven pricing advantage that was previously only available to enterprise teams with analytics departments.',
      stack: ['Lovable', 'Supabase', 'LLM Integration', 'AI Analytics', 'Subscription Model'],
      decisions: ['AI copilot model — augments operator judgment, doesn\'t replace it', 'SMB-first pricing — democratizes intelligence previously limited to enterprise', 'Subscription over per-seat — predictable revenue, low churn', 'Modular by vertical — one engine, configurable per industry'],
      outcomeLabel: 'Model', outcomeVal: 'AI', outcomeDesc: 'AI-assisted pricing intelligence. Subscription SaaS targeting under-served mid-market operators.', status: 'In Development',
    },
    {
      eyebrow: 'Product 03 · AI SaaS · Food & Hospitality',
      name: 'MenuIQ',
      tagline: 'AI menu engineering and pricing intelligence for restaurants',
      desc: 'Restaurant operators change menus and prices based on intuition. MenuIQ brings AI-driven menu engineering to food service — analyzing item performance, margin contribution, and pricing elasticity to recommend what to keep, cut, reprice, or promote. Built for independent operators and small chains who can\'t afford a consulting firm but need the same intelligence.',
      stack: ['Lovable', 'Supabase', 'AI Analytics', 'Realtime Data', 'SaaS'],
      decisions: ['Operator-grade UX — built for the restaurant owner, not a data analyst', 'Menu engineering framework baked into the data model', 'Real-time cost and margin visibility — not just static reports', 'Independent restaurant focus — chain complexity handled later'],
      outcomeLabel: 'Differentiator', outcomeVal: 'AI', outcomeDesc: 'AI menu engineering at a price point accessible to independent restaurant operators.', status: 'In Beta',
    },
    {
      eyebrow: 'Product 04 · Advisory SaaS · PE Firms',
      name: 'ROAAS',
      tagline: 'Return on AI as a Service — AI ROI measurement for PE portfolio companies',
      desc: 'PE firms are deploying AI across portfolio companies but have no standardized way to measure what it\'s actually returning. ROAAS (Return on AI as a Service) is an AI economics platform that tracks deployment costs, output quality, and business impact across portfolio companies — giving GPs the ROI visibility they need to make intelligent AI investment decisions at scale.',
      stack: ['AI Economics Framework', 'Supabase', 'Lovable', 'Portfolio Analytics', 'SaaS'],
      decisions: ['GP-layer reporting — aggregates across portfolio, not just per company', 'AI economics model built from first principles — not vanity metrics', 'Token cost modeling and quality benchmarking as core data primitives', 'Built from my own evaluation framework methodology used in production AI'],
      outcomeLabel: 'Market', outcomeVal: 'PE', outcomeDesc: 'Built for private equity firms that need standardized AI ROI measurement across their portfolios.', status: 'Live',
    },
  ]

  return (
    <section className="products">
      <div className="products-inner">
        <div className="section-label">The Products</div>
        <h2>Four Verticals.<br /><em>Four Real Problems Solved.</em></h2>
        <p className="products-intro">Each product represents a different market, a different user, and a different data problem. The common thread: I built them all, shipped them all, and own every decision in each one.</p>
        {products.map(p => <ProductCard key={p.name} {...p} />)}
      </div>
    </section>
  )
}

function KeyQuote() {
  return (
    <div className="key-quote">
      <div className="kq-inner">
        <div className="kq-text">"When you build products with your own time and your own money, you have to ship things that actually work. There's no team to diffuse accountability onto. Every decision is yours. Every failure is yours. So is every win."</div>
        <div className="kq-attr">Jay Burgess · Founder, Revuity Systems</div>
      </div>
    </div>
  )
}

function WhatThisProves() {
  const gridRef = useReveal()
  const statsRef = useReveal()
  const proves = [
    { num: '01', title: 'I Own Outcomes — Not Tasks', text: <>There's no PM to escalate to. No engineering team to hand specs to. No designer to review my work. <strong>I make every call and live with every result.</strong> That's the accountability level I operate at — and it's exactly what "high autonomy, high accountability" means in practice.</> },
    { num: '02', title: 'I Ship Fast Across Different Contexts', text: <>WedData, CertPath, GameNight, and Box Office Beacon are not variations on one product — they're four completely different markets, user types, data models, and go-to-market approaches. <strong>I don't need to be handed a context. I build one.</strong></> },
    { num: '03', title: 'I Validate Before I Over-Build', text: <>Every Revuity product starts with a real problem, not a cool technology. I identify the pain first, confirm it's real, then build the minimum version that solves it. <strong>This is exactly how I'd approach a portfolio company diagnosis</strong> — find the root cause, validate it, then build the fix.</> },
    { num: '04', title: 'I Operate in Parallel at Scale', text: <>Revuity Systems runs alongside a full-time Principal Solutions Architect role at HEAG, where I hold 5 functional responsibilities simultaneously. <strong>Operating across multiple contexts with different priorities is not a new challenge for me — it is my default operating mode.</strong></> },
  ]
  return (
    <section className="proves">
      <div className="proves-inner">
        <div className="section-label">What Revuity Systems Proves</div>
        <h2>Four Products Built Solo.<br /><em>Here's What That Actually Means.</em></h2>
        <p className="proves-intro">Anyone can have ideas. Revuity Systems is proof that I execute them — across different markets, different users, and different technical challenges — without a team, a runway, or a safety net.</p>
        <div className="proves-2col-grid reveal" ref={gridRef}>
          {proves.map(p => (
            <div className="prove-block" key={p.num}>
              <div className="prove-num">{p.num}</div>
              <div className="prove-title">{p.title}</div>
              <p className="prove-text">{p.text}</p>
            </div>
          ))}
        </div>
        <div className="stats-row reveal" ref={statsRef}>
          {[['4', 'Products Shipped'], ['4', 'Different Verticals'], ['1', 'Builder — Solo'], ['∞', 'Accountability']].map(([num, label]) => (
            <div className="stat-block" key={label}>
              <div className="sb-num">{num}</div>
              <div className="sb-label">{label}</div>
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
        <h3>The portfolio is<br /><span>waiting.</span></h3>
        <p>Revuity Systems is what I build when there's no mandate to build it. Imagine what I'd ship with 20 companies, a team, and a mission behind it.</p>
        <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">Schedule a Call →</a>
        <Link to="/reggie-case-study" className="cs-cta-btn-ghost">Read the ReggieAI Case Study →</Link>
      </div>
    </section>
  )
}

function CaseStudyFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · AI Systems Architect · Founder & CTO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function RevuityCaseStudy() {
  return (
    <>
      <CaseStudyNav />
      <Hero />
      <Philosophy />
      <BuildModel />
      <Products />
      <KeyQuote />
      <WhatThisProves />
      <CTA />
      <CaseStudyFooter />
    </>
  )
}
