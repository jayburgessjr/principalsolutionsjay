import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

const FEATURED = [
  {
    id: 'voltiq',
    name: 'VoltIQ',
    price: '$199/mo',
    vertical: 'Vertical Data Intelligence',
    status: 'Early Access',
    tagline: 'Your solar market edge, delivered weekly.',
    desc: 'The market intelligence platform LA solar contractors use to benchmark pricing, track permit velocity, and stay ahead of competitors in a post-NEM 3.0 world. Weekly data. Actionable signals. Built for the close.',
    features: [
      { label: 'Weekly Permit Velocity', desc: 'Track how fast permits are being pulled across your target markets — surface emerging demand before competitors act.' },
      { label: '$/W Benchmark Tracker', desc: 'Know where your pricing sits relative to the market in real time. Stop leaving margin on the table.' },
      { label: 'Market Heat Index', desc: 'Composite signal combining permit velocity, competitive density, and pricing movement into a single weekly read.' },
    ],
    href: null,
    accentColor: 'var(--orange)',
  },
  {
    id: 'boxofficebeacon',
    name: 'Box Office Beacon',
    price: '$99/mo',
    vertical: 'Creative & Film Tools',
    status: 'Early Access',
    tagline: 'Revenue prediction for independent film.',
    desc: 'Assess the commercial viability of your film projects before major investments using data-backed predictive modeling and talent impact analytics. Know your ceiling before you commit the budget.',
    features: [
      { label: 'Revenue Prediction', desc: 'ML models trained on comparable titles, distribution channels, and market conditions to forecast commercial range before greenlight.' },
      { label: 'Risk Mitigation Strategy', desc: 'Quantified risk scoring across genre, talent, budget tier, and release window — decision intelligence, not gut instinct.' },
      { label: 'Talent Impact Analytics', desc: 'Model how specific cast and crew combinations affect projected performance based on historical comparable data.' },
    ],
    href: null,
    accentColor: 'var(--orange)',
  },
  {
    id: 'menuiq',
    name: 'MenuIQ',
    price: 'Free / $49/mo',
    vertical: 'Business Intelligence',
    status: 'Early Access',
    tagline: 'Built for restaurant operators, not accountants.',
    desc: 'Analyzing your recipes, costs, and pricing to show you exactly which dishes make money — and which ones quietly drain it. Protect your margins with data you can actually act on.',
    features: [
      { label: 'Food Cost Calculator', desc: 'Input your recipe ingredients and supplier costs. Get an accurate food cost percentage per dish — updated whenever costs change.' },
      { label: 'Margin Intelligence', desc: 'See your full menu ranked by contribution margin. Identify the underperformers that look busy but drain the bottom line.' },
      { label: 'Price Optimization', desc: 'Data-driven pricing recommendations that protect margins without alienating customers — grounded in your actual cost structure.' },
    ],
    href: null,
    accentColor: 'var(--orange)',
  },
]

const CATALOG = [
  { name: 'LaunchOS', price: '$29/mo', vertical: 'Creative & Film Tools', desc: 'The social media and marketing director filmmakers use to dominate their campaigns.', status: 'Live', href: null },
  { name: 'ProductionOS', price: '$49/mo', vertical: 'Creative & Film Tools', desc: 'End-to-end OS for filmmakers — from pre-production to distribution.', status: 'Live', href: null },
  { name: 'PricingCopilot', price: '$49/mo', vertical: 'Business Intelligence', desc: 'The pricing intelligence platform for small businesses and nonprofits.', status: 'Early Access', href: null },
  { name: 'The Bible Soul Guide', price: '$9/mo', vertical: 'Faith & Wellbeing', desc: 'AI-powered Bible study companion with personal devotionals and scholarly context.', status: 'Live', href: null },
  { name: 'GameNightz Online', price: 'Free', vertical: 'Games & Play', desc: '8 party games, zero downloads. Players join instantly on their phones.', status: 'Live', href: null },
]

function ProductsNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Products · Revuity Systems</div>
    </nav>
  )
}

function ProductsHero() {
  return (
    <section className="cs-hero">
      <div className="hero-bg-text">RSP</div>
      <div className="cs-inner">
        <div className="cs-eyebrow">Revuity Systems · Product Catalog · 8 Independent Products</div>
        <h1 className="cs-title">
          <span style={{ color: 'var(--dim)' }}>Revuity</span><br />
          <span className="orange">Products</span>
        </h1>
        <p className="cs-subtitle">Eight independent products. Five verticals. Each one built to run without you.</p>
        <p className="cs-desc">
          Vertical Data Intelligence. Creative & Film Tools. Games & Play. Faith & Wellbeing. Business Intelligence.
          Every product is scoped to a specific market problem, architected for autonomous operation, and priced for recurring revenue from day one.
        </p>
        <div className="cs-meta-bar">
          <div className="cs-meta-item">
            <div className="cmi-label">Studio</div>
            <div className="cmi-val">Revuity Systems</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Products</div>
            <div className="cmi-val">8 independent SaaS products</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Verticals</div>
            <div className="cmi-val">Data Intelligence · Film · Games · Faith · Business</div>
          </div>
          <div className="cs-meta-item">
            <div className="cmi-label">Model</div>
            <div className="cmi-val">Recurring SaaS · Free → $199/mo · Built to run without you</div>
          </div>
        </div>
      </div>
    </section>
  )
}

function ProductAction({ href, status }) {
  if (!href) {
    return (
      <span className="btn-primary btn-disabled" aria-disabled="true">
        {status === 'Live' ? 'Link Available On Request' : 'Early Access By Request'}
      </span>
    )
  }

  return (
    <a href={href} className="btn-primary" target="_blank" rel="noreferrer">
      {status === 'Live' ? 'Visit Website →' : 'Join Early Access →'}
    </a>
  )
}

function CatalogCard({ product }) {
  const content = (
    <>
      <div className="catalog-card-top">
        <div className="catalog-card-vertical">{product.vertical}</div>
        <div className={`catalog-card-status ${product.status === 'Live' ? 'live' : ''}`}>{product.status}</div>
      </div>
      <div className="catalog-card-name">{product.name}</div>
      <div className="catalog-card-price">{product.price}</div>
      <p className="catalog-card-desc">{product.desc}</p>
      <span className="catalog-card-cta">
        {product.href ? 'Visit →' : product.status === 'Live' ? 'Link Available On Request' : 'Early Access By Request'}
      </span>
    </>
  )

  if (!product.href) {
    return <article className="catalog-card catalog-card-disabled">{content}</article>
  }

  return (
    <a href={product.href} className="catalog-card" target="_blank" rel="noreferrer">
      {content}
    </a>
  )
}

function FeaturedProduct({ product, index, flip }) {
  const ref = useReveal()
  return (
    <section className="cs-section" style={{ background: index % 2 === 1 ? 'var(--panel)' : undefined }}>
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">0{index + 1}</div>
          <div className="phase-name">{product.vertical}</div>
        </div>

        <div className="prod-hero-row">
          <div>
            <div className="prod-status-tag">{product.status}</div>
            <h2 className="cs-section-h2" style={{ marginBottom: '0.5rem' }}>
              {product.name}
            </h2>
            <div className="prod-price">{product.price}</div>
            <p className="prod-tagline">{product.tagline}</p>
          </div>
        </div>

        <p className="method-intro" style={{ marginBottom: '2.5rem' }}>{product.desc}</p>

        <div className="prod-features reveal" ref={ref}>
          {product.features.map(f => (
            <div className="prod-feature-block" key={f.label}>
              <div className="prod-feature-label">{f.label}</div>
              <div className="prod-feature-desc">{f.desc}</div>
            </div>
          ))}
        </div>

        <div style={{ marginTop: '2rem' }}>
          <ProductAction href={product.href} status={product.status} />
        </div>
      </div>
    </section>
  )
}

function CatalogSection() {
  const ref = useReveal()
  return (
    <section className="cs-section">
      <div className="cs-section-inner">
        <div className="phase-label">
          <div className="phase-num">04</div>
          <div className="phase-name">Full Catalog</div>
        </div>
        <h2 className="cs-section-h2">
          Five more products.<br />
          <em>All live or in early access.</em>
        </h2>
        <p className="method-intro">The full Revuity catalog spans games, faith, film, and business — each product independently operated, each solving a distinct problem in its vertical.</p>
        <div className="catalog-grid reveal" ref={ref}>
          {CATALOG.map(product => (
            <CatalogCard key={product.name} product={product} />
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductsCTA() {
  return (
    <section className="cs-cta">
      <div className="cs-cta-inner">
        <h3>Eight products.<br /><span>One studio.</span></h3>
        <p>Revuity is how I demonstrate I can build and ship AI products at speed — across verticals, without a team. That's the operator proof.</p>
        <a href="https://calendly.com/jayburgessjr/long-meet" className="btn-primary" target="_blank" rel="noreferrer">Schedule a Call →</a>
        <Link to="/revuity-case-study" className="btn-ghost">Revuity Case Study →</Link>
      </div>
    </section>
  )
}

function ProductsFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal AI Systems Architect · Founder & CTO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function RevuityProductsPage() {
  usePageMeta({
    title: 'Revuity Products — Jay Burgess',
    description:
      'Eight independent Revuity Systems products across data intelligence, film tools, games, faith, and business intelligence.',
  })

  return (
    <>
      <ProductsNav />
      <ProductsHero />
      {FEATURED.map((p, i) => (
        <FeaturedProduct key={p.id} product={p} index={i} />
      ))}
      <CatalogSection />
      <ProductsCTA />
      <ProductsFooter />
    </>
  )
}
