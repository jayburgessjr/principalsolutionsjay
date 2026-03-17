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
        <div className="cs-eyebrow">Case Study · Founder · Boutique Software Studio</div>
        <h1 className="cs-title">Revuity<br /><span>Systems</span></h1>
        <p className="cs-subtitle">Four Products. One Builder. Zero Excuses.</p>
        <p className="cs-desc">
          How I built a lean product studio from scratch — shipping four vertical data products across
          different markets, industries, and tech stacks — as a solo founder operating in parallel
          with a full-time role.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Entity</div>
            <div className="cmi-val">Revuity Systems — Boutique Software Studio</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">My Role</div>
            <div className="cmi-val">Founder, CTO, Designer, Architect, Builder</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Products Shipped</div>
            <div className="cmi-val">4 Active Products Across 4 Verticals</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Model</div>
            <div className="cmi-val">Subscription SaaS · Vertical Data Tools</div>
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
      eyebrow: 'Product 01 · B2B SaaS · Wedding Industry',
      name: 'WedData',
      tagline: 'Wedding vendor pricing intelligence for the B2B market',
      desc: 'The wedding industry runs on opaque pricing. Vendors have no reliable way to benchmark their rates against the market. WedData aggregates real pricing data across vendor categories, markets, and tiers — giving wedding professionals the intelligence layer they\'ve never had. Targeting $79/month subscription.',
      stack: ['Lovable', 'Supabase', 'PostgreSQL', 'Data Aggregation', 'Subscription SaaS'],
      decisions: ['B2B focus over B2C — vendors pay for intelligence, couples don\'t', 'Subscription model at $79/month — recurring revenue, low churn', 'Market-first data architecture — built to expand geographically', 'Minimal feature set on launch — pricing intelligence only, nothing else'],
      outcomeLabel: 'Target MRR', outcomeVal: '$79', outcomeDesc: 'Per subscriber per month. Designed for low CAC, high retention B2B model.', status: 'In Development',
    },
    {
      eyebrow: 'Product 02 · EdTech · Certification Market',
      name: 'CertPath',
      tagline: 'Multi-track online certification platform, subscription-based',
      desc: 'The professional certification market is dominated by expensive, rigid platforms. CertPath is a focused, subscription-based platform for multi-track certification delivery — built for organizations that need to certify their teams without the overhead of enterprise LMS pricing. Modular by design, scalable by architecture.',
      stack: ['Lovable', 'Supabase', 'Multi-track Architecture', 'Subscription Model'],
      decisions: ['Subscription over per-seat — predictable revenue, easier budgeting', 'Multi-track from day one — horizontal expansion built into the data model', 'No enterprise bloat — focused on the mid-market gap', 'Certification-first UX — not a general LMS trying to do certifications'],
      outcomeLabel: 'Model', outcomeVal: 'Sub', outcomeDesc: 'Subscription SaaS targeting under-served mid-market certification buyers.', status: 'In Development',
    },
    {
      eyebrow: 'Product 03 · Consumer · Social Gaming',
      name: 'GameNight',
      tagline: 'Multiplayer party game web app — real-time, no download required',
      desc: 'Party games exist. But most require a download, a device per player, or expensive hardware. GameNight is a browser-based multiplayer party game platform — one person hosts, everyone else joins on their phone. Built for the moment when a group wants to play something and nobody wants to install anything. Real-time multiplayer, zero friction.',
      stack: ['Lovable', 'Supabase', 'Realtime WebSockets', 'Browser-native'],
      decisions: ['Web-first — no download barrier kills party game adoption', 'Host + join model — one screen drives, everyone uses their phone', 'Supabase Realtime for multiplayer sync — zero backend overhead', 'Game-as-session architecture — each game is stateless and ephemeral'],
      outcomeLabel: 'Differentiator', outcomeVal: '0', outcomeDesc: 'Zero downloads required. Browser-native multiplayer. Lowest friction party game on the market.', status: 'In Beta',
    },
    {
      eyebrow: 'Product 04 · Entertainment · Film Industry Data',
      name: 'Box Office Beacon',
      tagline: 'Film industry performance intelligence and box office analytics',
      desc: 'The entertainment industry generates enormous amounts of public performance data — but it\'s fragmented, inconsistently formatted, and hard to act on. Box Office Beacon aggregates and structures box office and film performance data into actionable intelligence for industry professionals: producers, distributors, and financiers who need market context to make smarter decisions.',
      stack: ['Data Aggregation', 'Analytics Layer', 'Supabase', 'Lovable', 'Industry Data'],
      decisions: ['Industry professional focus — not consumer entertainment data', 'Structured intelligence over raw data dumps', 'LA market positioning — built where the industry actually is', 'Data architecture built for historical trend analysis'],
      outcomeLabel: 'Market', outcomeVal: 'LA', outcomeDesc: 'Built in the entertainment capital. Targeting film producers, distributors, and financiers.', status: 'Live',
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

function EVRelevance() {
  const cardsRef = useReveal()
  const cards = [
    { jd: '"high autonomy, high accountability"', title: 'What Founding a Studio Proves', proof: 'When you\'re the sole founder, there is no autonomy — there is only accountability. Every product decision, every architecture choice, every ship date is mine. That\'s the mentality I\'d bring to every portfolio company.' },
    { jd: '"prototype and ship yourself"', title: 'What 4 Products Proves', proof: 'I don\'t need to describe how I\'d build something. I\'ve built four of them. Different stacks, different users, different business models. The Lovable + Supabase stack I use at Revuity is precisely what enables rapid prototyping inside portfolio companies.' },
    { jd: '"across a growing portfolio of 20+ companies"', title: 'What Context-Switching Proves', proof: 'Managing four products across four different industries while running a full-time role is direct training for portfolio operations. I\'m already operating at the cognitive and organizational complexity of a multi-company model — just without the VP title.' },
  ]
  return (
    <section className="ev-relevance">
      <div className="ev-inner">
        <div className="section-label">Why This Matters for Enduring Ventures</div>
        <h2>The Portfolio Company Problem<br />Is a <em>Founder Problem.</em></h2>
        <p className="ev-intro">Walking into a broken business you've never seen and shipping a fix within weeks — that's not a consultant skill. It's a founder skill. Revuity Systems is 4 reps of that exact motion, across 4 different industries.</p>
        <div className="ev-cards reveal" ref={cardsRef}>
          {cards.map(c => (
            <div className="ev-card" key={c.title}>
              <div className="ev-card-jd">EV Needs: <span>{c.jd}</span></div>
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
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal Solutions Architect · Co-Founder & Chief Technology Officer, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com · Los Angeles, CA</div>
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
      <EVRelevance />
      <CTA />
      <CaseStudyFooter />
    </>
  )
}
