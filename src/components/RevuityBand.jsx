import { Link } from 'react-router-dom'

export default function RevuityBand() {
  return (
    <div className="case-band">
      <div className="case-band-text">
        <h3>Revuity Systems Case Study — Full Breakdown</h3>
        <p>Four products. Four verticals. One builder. See how the studio was built.</p>
      </div>
      <Link to="/revuity-case-study" className="case-band-link">
        Read the Case Study →
      </Link>
    </div>
  )
}
