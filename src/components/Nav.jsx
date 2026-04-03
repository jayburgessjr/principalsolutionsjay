import { useTheme } from '../hooks/useTheme'

function SunIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5"/>
      <line x1="12" y1="1" x2="12" y2="3"/>
      <line x1="12" y1="21" x2="12" y2="23"/>
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
      <line x1="1" y1="12" x2="3" y2="12"/>
      <line x1="21" y1="12" x2="23" y2="12"/>
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
      <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
    </svg>
  )
}

function MoonIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
    </svg>
  )
}

export default function Nav() {
  const { theme, toggle } = useTheme()

  return (
    <nav>
      <div className="nav-id">
        <strong>Jay Burgess</strong> · AI Systems Architect · Builder · Operator
      </div>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#method">The Method</a></li>
          <li><a href="#proof">Proof</a></li>
          <li><a href="#skills">Skills</a></li>
        </ul>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <a href="https://www.canva.com/design/DAHEKlOQl-o/Ra60KaYOrYJeyqpgt6xWQA/view?utm_content=DAHEKlOQl-o&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h5c5a1db5ea" className="nav-slides" target="_blank" rel="noreferrer">
          View My Slides
        </a>
        <a href="https://calendly.com/jayburgessjr/long-meet" className="nav-cta" target="_blank" rel="noreferrer">
          Schedule a Call
        </a>
      </div>
    </nav>
  )
}
