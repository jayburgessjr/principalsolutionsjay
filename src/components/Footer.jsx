// UPDATE: replace with your actual LinkedIn URL
const LINKEDIN_URL = 'https://www.linkedin.com/in/jayburgessjr/'

export default function Footer() {
  return (
    <footer>
      <div className="footer-left">
        <div className="footer-id">
          <strong>Jay Burgess</strong> · Principal AI Systems Architect · Founder &amp; CTO, Revuity Systems
        </div>
        <div className="footer-links">
          <a href={`mailto:jay@revuitysys.com`}>jay@revuitysys.com</a>
          <span className="footer-divider">·</span>
          <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">LinkedIn</a>
          <span className="footer-divider">·</span>
          <a href="https://calendly.com/jayburgessjr/long-meet" target="_blank" rel="noreferrer">Schedule a Call</a>
        </div>
      </div>
      <div className="footer-right">
        <div className="footer-avail">
          <span className="footer-dot" />
          Available now
        </div>
      </div>
    </footer>
  )
}
