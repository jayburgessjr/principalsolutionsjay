import { useTheme } from '../hooks/useTheme'

// UPDATE: replace with your actual LinkedIn URL
const LINKEDIN_URL = 'https://www.linkedin.com/in/jayburgessjr/'

function LinkedInIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/>
      <rect x="2" y="9" width="4" height="12"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  )
}

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
      <a href="/" className="nav-wordmark">Jay Burgess</a>
      <div className="nav-right">
        <ul className="nav-links">
          <li><a href="#method">Method</a></li>
          <li><a href="#proof">Proof</a></li>
          <li><a href="#skills">Skills</a></li>
          <li><a href="#products">Portfolio</a></li>
          <li><a href="#engagement">Engagement</a></li>
          <li><a href="#methodology">Frameworks</a></li>
        </ul>
        <a href={LINKEDIN_URL} className="nav-linkedin" target="_blank" rel="noreferrer" aria-label="LinkedIn">
          <LinkedInIcon />
        </a>
        <button className="theme-toggle" onClick={toggle} aria-label="Toggle theme">
          {theme === 'dark' ? <SunIcon /> : <MoonIcon />}
        </button>
        <a href="https://calendly.com/jayburgessjr/long-meet" className="nav-cta" target="_blank" rel="noreferrer">
          Schedule a Call
        </a>
      </div>
    </nav>
  )
}
