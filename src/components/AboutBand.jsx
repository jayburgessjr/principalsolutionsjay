import { Link } from 'react-router-dom'

export default function AboutBand() {
  return (
    <div className="case-band">
      <div className="case-band-text">
        <h3>Who Is Jay Burgess — Executive Brief</h3>
        <p>Principal AI Systems Architect. 15+ years. $2.7M verified impact. The one-page read.</p>
      </div>
      <Link to="/about" className="case-band-link">
        Read the Brief →
      </Link>
    </div>
  )
}
