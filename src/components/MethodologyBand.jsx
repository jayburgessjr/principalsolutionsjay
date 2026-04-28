import { Link } from 'react-router-dom'

export default function MethodologyBand() {
  return (
    <div className="case-band">
      <div className="case-band-text">
        <h3>BurgessEval — Built in Production, Not a Whitepaper</h3>
        <p>The framework that QA'd ReggieAI. See how it shaped a live compliance system.</p>
      </div>
      <Link to="/reggie-case-study" className="case-band-link">
        See It In Action →
      </Link>
    </div>
  )
}
