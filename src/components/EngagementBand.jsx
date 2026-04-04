import { Link } from 'react-router-dom'

export default function EngagementBand() {
  return (
    <div className="case-band" id="engagement">
      <div className="case-band-text">
        <h3>Engagement Models — Full Breakdown</h3>
        <p>Diagnostic sprints, fractional architecture, and embedded build ownership. See how I structure engagements.</p>
      </div>
      <Link to="/engagement" className="case-band-link">
        View Engagement Models →
      </Link>
    </div>
  )
}
