import { Link } from 'react-router-dom'

export default function WalmartBand() {
  return (
    <div className="case-band">
      <div className="case-band-text">
        <h3>Walmart Creative Operations — Full Breakdown</h3>
        <p>$750K recovered. Full data org built from zero. Fortune 1 scale, in three quarters.</p>
      </div>
      <Link to="/walmart-case-study" className="case-band-link">
        Read the Case Study →
      </Link>
    </div>
  )
}
