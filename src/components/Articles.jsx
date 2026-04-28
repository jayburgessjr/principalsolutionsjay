import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'

const ARTICLES = [
  {
    slug: '/article/ai-systems-at-scale',
    category: 'AI Systems',
    readTime: '9 min read',
    title: 'Why AI Systems Fail at Scale: The Architecture Gap Between Demo and Production',
    abstract:
      'Most AI proofs of concept succeed. Most production deployments struggle. The gap is not model quality — it is the architecture beneath the model. A framework for diagnosing and closing that gap before it costs you.',
  },
  {
    slug: '/article/data-debt',
    category: 'Data Infrastructure',
    readTime: '7 min read',
    title: 'The Organizational Cost of Data Debt: How Unstructured Information Erodes Strategic Decisions',
    abstract:
      'Data debt is not a storage problem. It is a decision-making problem. Organizations that allow it to compound find themselves unable to answer basic strategic questions with confidence.',
  },
  {
    slug: '/article/internal-tools',
    category: 'Internal Infrastructure',
    readTime: '8 min read',
    title: 'Internal Tools as Strategic Infrastructure: Why How You Build for Yourself Predicts Everything',
    abstract:
      'The internal tools an organization builds for itself are not overhead — they are a diagnostic signal. Their quality predicts the quality of every product and system you will ever ship externally.',
  },
]

export default function Articles() {
  const gridRef = useReveal()
  return (
    <section className="articles-section">
      <div className="articles-header">
        <div className="articles-eyebrow">Perspectives</div>
        <h2 className="articles-heading">The Thinking<br />Behind the Work</h2>
        <p className="articles-sub">
          Expert writing on AI systems, data infrastructure, and how organizations build things that last.
        </p>
      </div>
      <div className="articles-grid reveal" ref={gridRef}>
        {ARTICLES.map((a) => (
          <Link key={a.slug} to={a.slug} className="article-card">
            <div className="article-card-tag">{a.category} · {a.readTime}</div>
            <div className="article-card-title">{a.title}</div>
            <div className="article-card-abstract">{a.abstract}</div>
            <div className="article-card-cta">Read Article →</div>
          </Link>
        ))}
      </div>
    </section>
  )
}
