import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const FEATURED_ARTICLES = [
  {
    slug: '/article/ai-systems-at-scale',
    category: 'AI Systems',
    readTime: '9 min read',
    title: 'Why AI Systems Fail at Scale: The Architecture Gap Between Demo and Production',
    abstract: 'Most AI proofs of concept succeed. Most production deployments struggle. The gap is architectural — and fully diagnosable before scale commitment.',
  },
  {
    slug: '/article/root-cause-diagnosis',
    category: 'Systems Diagnosis',
    readTime: '8 min read',
    title: 'The Principal Architect\'s Method: How to Walk Into Any System and Find the Root Cause',
    abstract: 'Most systems problems are diagnosed at the symptom layer. A structured framework for finding root causes at the architectural level — where fixes actually hold.',
  },
  {
    slug: '/article/the-handoff-problem',
    category: 'Technical Leadership',
    readTime: '8 min read',
    title: 'The Handoff Problem: Building Systems That Run Without Their Architect',
    abstract: 'A system that works is not a complete deliverable. Four properties that distinguish systems built for handoff from systems built for their builders.',
  },
]

export default function Articles() {
  const gridRef = useReveal()
  return (
    <section className="articles-section" id="articles">
      <div className="articles-inner">
      <div className="articles-header">
        <div className="section-label">Perspectives</div>
        <h2 style={{ fontFamily: "'Libre Baskerville', serif", fontSize: 'clamp(1.8rem, 2.8vw, 2.8rem)', fontWeight: 700, lineHeight: 1.2, marginBottom: '1rem', maxWidth: '640px' }}>
          The Thinking<br /><em style={{ fontStyle: 'italic', color: 'var(--orange)' }}>Behind the Work</em>
        </h2>
        <p className="articles-sub">
          Expert writing on AI systems, data infrastructure, and how organizations build things that last.
        </p>
      </div>
      <div className="articles-grid reveal" ref={gridRef}>
        {FEATURED_ARTICLES.map((a) => (
          <Link key={a.slug} to={a.slug} className="article-card">
            <div className="article-card-tag">{a.category} · {a.readTime}</div>
            <div className="article-card-title">{a.title}</div>
            <div className="article-card-abstract">{a.abstract}</div>
            <div className="article-card-cta">Read Article →</div>
          </Link>
        ))}
      </div>
      <div style={{ marginTop: '1.5rem', textAlign: 'right' }}>
        <Link
          to="/articles"
          style={{
            fontFamily: 'IBM Plex Mono, monospace',
            fontSize: '0.68rem',
            letterSpacing: '0.1em',
            textTransform: 'uppercase',
            color: 'var(--orange)',
            textDecoration: 'none',
          }}
        >
          View All 13 Articles →
        </Link>
      </div>
      </div>
    </section>
  )
}
