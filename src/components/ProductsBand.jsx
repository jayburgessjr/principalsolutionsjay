import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const featured = [
  {
    name: 'VoltIQ',
    price: '$199/mo',
    tag: 'Vertical Data Intelligence · Solar Market',
    desc: 'The market intelligence platform LA solar contractors use to benchmark pricing, track permit velocity, and stay ahead of competitors in a post-NEM 3.0 world.',
    features: ['Weekly Permit Velocity', '$/W Benchmark Tracker', 'Market Heat Index'],
    href: '#',
    status: 'Early Access',
  },
  {
    name: 'Box Office Beacon',
    price: '$99/mo',
    tag: 'Creative & Film Tools · Predictive Modeling',
    desc: 'Assess the commercial viability of your film projects before major investments using data-backed predictive modeling and talent impact analytics.',
    features: ['Revenue Prediction', 'Risk Mitigation', 'Talent Impact Analytics'],
    href: '#',
    status: 'Early Access',
  },
  {
    name: 'MenuIQ',
    price: 'Free / $49/mo',
    tag: 'Business Intelligence · Restaurant Operations',
    desc: 'Analyzing your recipes, costs, and pricing to show you exactly which dishes make money — and which ones quietly drain it.',
    features: ['Food Cost Calculator', 'Margin Intelligence', 'Price Optimization'],
    href: '#',
    status: 'Early Access',
  },
]

export default function ProductsBand() {
  const rowsRef = useReveal()

  return (
    <section className="products-band" id="products">
      <div className="products-band-inner">
        <div className="section-label">Revuity Systems · Products</div>
        <h2 className="products-h2">
          Eight independent products.<br />
          <em>Built to run without you.</em>
        </h2>
        <p className="products-intro">
          Five verticals. Eight products. Each scoped to a specific market intelligence or operational problem — and each architected to operate without ongoing maintenance.
        </p>
      </div>
      <div className="product-rows reveal" ref={rowsRef}>
        {featured.map(p => (
          <a href={p.href} className="product-row" key={p.name} target="_blank" rel="noreferrer">
            <div className="product-row-body">
              <div className="product-row-meta">
                <span className="product-row-tag">{p.tag}</span>
                <span className="product-row-status">{p.status}</span>
              </div>
              <div className="product-row-name">{p.name}</div>
              <p className="product-row-desc">{p.desc}</p>
              <div className="product-row-features">
                {p.features.map(f => (
                  <span className="product-feature-chip" key={f}>{f}</span>
                ))}
              </div>
            </div>
            <div className="product-row-right">
              <div className="product-row-price">{p.price}</div>
              <span className="product-row-cta">Visit →</span>
            </div>
          </a>
        ))}
      </div>
      <div className="products-band-footer">
        <Link to="/revuity-products" className="products-see-all">See All 8 Products →</Link>
      </div>
    </section>
  )
}
