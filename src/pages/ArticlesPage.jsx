import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import Nav from '../components/Nav'
import Footer from '../components/Footer'

const ALL_ARTICLES = [
  {
    slug: '/article/ai-systems-at-scale',
    category: 'AI Systems',
    readTime: '9 min read',
    title: 'Why AI Systems Fail at Scale: The Architecture Gap Between Demo and Production',
    abstract: 'Most AI proofs of concept succeed. Most production deployments struggle. The gap is architectural — and fully diagnosable before scale commitment.',
  },
  {
    slug: '/article/data-debt',
    category: 'Data Infrastructure',
    readTime: '7 min read',
    title: 'The Organizational Cost of Data Debt: How Unstructured Information Erodes Strategic Decisions',
    abstract: 'Data debt is not a storage problem. It is a decision-making problem that compounds silently until a strategic decision fails for lack of reliable information.',
  },
  {
    slug: '/article/internal-tools',
    category: 'Internal Infrastructure',
    readTime: '8 min read',
    title: 'Internal Tools as Strategic Infrastructure: Why How You Build for Yourself Predicts Everything',
    abstract: 'Internal tools are not overhead — they are the most honest signal an engineering culture emits about its architectural values.',
  },
  {
    slug: '/article/root-cause-diagnosis',
    category: 'Systems Diagnosis',
    readTime: '8 min read',
    title: 'The Principal Architect\'s Method: How to Walk Into Any System and Find the Root Cause',
    abstract: 'Most systems problems are diagnosed at the symptom layer. A structured framework for finding root causes at the architectural level — where fixes actually hold.',
  },
  {
    slug: '/article/ai-pilots-to-production',
    category: 'AI Strategy',
    readTime: '8 min read',
    title: 'Why AI Pilots Die Before Production: The Organizational Gaps That Kill Good Projects',
    abstract: 'AI pilots succeed. Production deployments fail. Five organizational gaps that are diagnosable before the pilot begins — and addressable before they cost you.',
  },
  {
    slug: '/article/rag-architecture',
    category: 'AI Architecture',
    readTime: '9 min read',
    title: 'RAG Architecture in Practice: Building Retrieval Systems That Don\'t Lie',
    abstract: 'Retrieval quality — not model quality — is the binding constraint in most enterprise RAG deployments. A five-layer architecture for systems that are right, not just fluent.',
  },
  {
    slug: '/article/build-vs-buy',
    category: 'AI Strategy',
    readTime: '7 min read',
    title: 'Build vs. Buy in AI Infrastructure: A Decision Framework That Doesn\'t Lie to You',
    abstract: 'The standard build vs. buy analysis is systematically biased. A five-dimension framework that accounts for the full cost topology of each option.',
  },
  {
    slug: '/article/workflow-automation',
    category: 'Systems Design',
    readTime: '8 min read',
    title: 'Workflow Automation Done Right: Why Most Automations Break and How to Build Ones That Don\'t',
    abstract: 'Most automations are built for the clean case. Five design principles for automation that survives real-world conditions — edge cases, interface changes, and all.',
  },
  {
    slug: '/article/technical-due-diligence',
    category: 'Technical Leadership',
    readTime: '8 min read',
    title: 'Technical Due Diligence: What to Look For Before You Commit',
    abstract: 'Technical due diligence is performed too late, too narrowly, or too optimistically. A four-domain framework for evaluations that find what comfortable ones miss.',
  },
  {
    slug: '/article/org-as-architecture',
    category: 'Technical Leadership',
    readTime: '8 min read',
    title: 'The Org Chart Is the Architecture: How Team Structure Determines System Quality',
    abstract: "Conway's Law as a leadership tool: how team structure determines system quality and the most powerful lever available to technical leaders.",
  },
  {
    slug: '/article/ai-vendor-evaluation',
    category: 'AI Strategy',
    readTime: '7 min read',
    title: 'How to Evaluate an AI Vendor Without Getting Fooled by the Demo',
    abstract: 'AI vendor demos are engineered for the evaluator. A structured methodology that surfaces production reality — and the questions vendors can\'t rehearse.',
  },
  {
    slug: '/article/beyond-prompt-engineering',
    category: 'AI Systems',
    readTime: '8 min read',
    title: 'Beyond Prompt Engineering: Why System Design Is the Real AI Skill',
    abstract: 'Prompt engineering is necessary but insufficient. The four layers of AI system design that determine whether investment generates production value.',
  },
  {
    slug: '/article/the-handoff-problem',
    category: 'Technical Leadership',
    readTime: '8 min read',
    title: 'The Handoff Problem: Building Systems That Run Without Their Architect',
    abstract: 'A system that works is not a complete deliverable. Four properties that distinguish systems built for handoff from systems built for their builders.',
  },
]

export default function ArticlesPage() {
  usePageMeta({
    title: 'Articles — Jay Burgess',
    description: 'Expert writing on AI systems, data infrastructure, internal tools, and technical leadership from Jay Burgess — Principal AI Systems Architect.',
  })

  const gridRef = useReveal()

  return (
    <>
      <Nav />
      <section style={{ paddingTop: '8rem', paddingBottom: '2rem', paddingLeft: '2.5rem', paddingRight: '2.5rem', borderBottom: '1px solid var(--rule)' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="articles-eyebrow">Perspectives</div>
          <h1 className="articles-heading" style={{ marginBottom: '0.75rem' }}>All Articles</h1>
          <p className="articles-sub">
            Expert writing on AI systems, data infrastructure, internal tools, and technical leadership.
            Each piece is written from the perspective of someone who has built and broken these systems
            in production — not from the outside looking in.
          </p>
        </div>
      </section>
      <section style={{ padding: '3rem 2.5rem 6rem' }}>
        <div style={{ maxWidth: '1100px', margin: '0 auto' }}>
          <div className="articles-grid reveal" ref={gridRef}>
            {ALL_ARTICLES.map((a) => (
              <Link key={a.slug} to={a.slug} className="article-card">
                <div className="article-card-tag">{a.category} · {a.readTime}</div>
                <div className="article-card-title">{a.title}</div>
                <div className="article-card-abstract">{a.abstract}</div>
                <div className="article-card-cta">Read Article →</div>
              </Link>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </>
  )
}
