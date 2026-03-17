import { Link } from 'react-router-dom'

export default function CaseBand() {
  return (
    <div className="case-band">
      <div className="case-band-text">
        <h3>ReggieAI Case Study — Full Breakdown</h3>
        <p>Diagnose → Build → Ship, documented end to end. See the exact process.</p>
      </div>
      <Link to="/reggie-case-study" className="case-band-link">
        Read the Case Study →
      </Link>
    </div>
  )
}
