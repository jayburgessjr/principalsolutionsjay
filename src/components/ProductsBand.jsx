import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const featured = [
  {
    index: '01',
    name: 'VoltIQ',
    price: '$199/mo',
    tag: 'Vertical Data Intelligence · Solar Market',
    desc: 'The market intelligence platform LA solar contractors use to benchmark pricing, track permit velocity, and stay ahead of competitors in a post-NEM 3.0 world.',
    features: ['Weekly Permit Velocity', '$/W Benchmark Tracker', 'Market Heat Index'],
    href: '#',
    status: 'Early Access',
  },
  {
    index: '02',
    name: 'Box Office Beacon',
    price: '$99/mo',
    tag: 'Creative & Film Tools · Predictive Modeling',
    desc: 'Assess the commercial viability of your film projects before major investments using data-backed predictive modeling and talent impact analytics.',
    features: ['Revenue Prediction', 'Risk Mitigation', 'Talent Impact Analytics'],
    href: '#',
    status: 'Early Access',
  },
  {
    index: '03',
    name: 'MenuIQ',
    price: '$49/mo',
    tag: 'Business Intelligence · Restaurant Operations',
    desc: 'Analyzing your recipes, costs, and pricing to show you exactly which dishes make money — and which ones quietly drain it.',
    features: ['Food Cost Calculator', 'Margin Intelligence', 'Price Optimization'],
    href: '#',
    status: 'Early Access',
  },
]

export default function ProductsBand() {
  const gridRef = useReveal()

  return (
    <>
      <div className="case-band">
        <div className="case-band-text">
          <h3>Eight Products. Five Verticals.</h3>
          <p>Each built to run without ongoing maintenance. See the full studio.</p>
        </div>
        <Link to="/revuity-products" className="case-band-link">See All 8 Products →</Link>
      </div>
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

          <div className="proof-grid reveal" ref={gridRef} style={{ marginTop: '3rem' }}>
            {featured.map(p => (
              <div className="proof-row" key={p.name}>
                <div className="pr-index">{p.index}</div>
                <div className="pr-main">
                  <div className="pr-main-label">{p.tag}</div>
                  <h3>{p.name}</h3>
                  <p>{p.desc}</p>
                </div>
                <div className="pr-method">
                  <div className="pr-method-label">Features</div>
                  <ul className="pr-steps">
                    {p.features.map(f => <li key={f}>{f}</li>)}
                  </ul>
                </div>
                <div className="pr-outcome">
                  <div className="pr-outcome-label">Pricing</div>
                  <div className="pr-outcome-num">{p.price}</div>
                  <p>{p.status}</p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>
    </>
  )
}
