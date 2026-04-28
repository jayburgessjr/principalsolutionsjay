import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · AI Architecture</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · AI Architecture · April 2026</div>
        <h1 className="article-title">
          RAG Architecture in Practice: Building Retrieval Systems That Don't Lie
        </h1>
        <div className="article-abstract">
          Retrieval-Augmented Generation has become the dominant architecture for enterprise AI systems that
          require domain-specific knowledge. Its appeal is straightforward: rather than fine-tuning a model
          on proprietary data — an expensive, brittle, and rapidly outdated approach — RAG retrieves relevant
          documents at inference time and provides them as context for generation. In theory, this constrains
          the model to known, verifiable information. In practice, poorly designed RAG systems produce
          confident, fluent, wrong answers at production scale. This paper examines the structural causes of
          RAG failure, presents a five-layer architecture for reliable retrieval-augmented systems, and
          argues that retrieval quality — not model quality — is the binding constraint in most enterprise
          RAG deployments.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">AI Architecture</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">9 min</div></div>
        </div>
        <div className="article-keywords">
          {['RAG', 'Retrieval-Augmented Generation', 'Vector Search', 'Knowledge Base', 'AI Architecture', 'Hallucination Prevention'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const RAG_LAYERS = [
  { label: 'Layer 1', name: 'Knowledge Architecture', desc: 'The structure and quality of the document corpus. Source selection, chunking strategy, metadata schema, and version control. The retrieval system can only return what is in the corpus — garbage in, garbage out applies with particular force here.', accent: false },
  { label: 'Layer 2', name: 'Indexing Pipeline', desc: 'The transformation of raw documents into retrievable embeddings. Chunking granularity, embedding model selection, and index maintenance are all architectural decisions with significant retrieval quality implications.', accent: false },
  { label: 'Layer 3', name: 'Retrieval Engine', desc: 'The mechanism for identifying relevant chunks given a query. Semantic search, hybrid search, re-ranking, and query transformation all operate at this layer. This is the binding constraint in most RAG systems — and the most under-invested layer.', accent: true },
  { label: 'Layer 4', name: 'Context Assembly', desc: 'The construction of the prompt context from retrieved documents. Deduplication, relevance ordering, token budget management, and citation attachment all operate here. Context assembly quality directly determines generation quality.', accent: false },
  { label: 'Layer 5', name: 'Generation + Guardrails', desc: 'The LLM generation layer with behavioral constraints. System prompt design enforces boundary behavior — what the model can and cannot do with the retrieved context. Guardrails here are the last line of defense against out-of-scope generation.', accent: false },
]

function RAGDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Five-Layer RAG Architecture</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {RAG_LAYERS.map((l) => (
          <div key={l.label} style={{
            background: l.accent ? 'var(--orange-glow)' : 'var(--black)',
            borderLeft: l.accent ? '3px solid var(--orange)' : '3px solid transparent',
            padding: '1.25rem 1.5rem',
            display: 'flex', gap: '1.5rem', alignItems: 'flex-start'
          }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: l.accent ? 'var(--orange)' : 'var(--dim)', flexShrink: 0, paddingTop: '0.15rem' }}>{l.label}</div>
            <div>
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: l.accent ? 'var(--orange)' : 'var(--white)', marginBottom: '0.35rem', fontFamily: 'Libre Baskerville, serif' }}>{l.name}</div>
              <div style={{ fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.7 }}>{l.desc}</div>
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--dim)', fontStyle: 'italic', marginTop: '0.75rem' }}>Layer 3 (highlighted) is the binding constraint in the majority of enterprise RAG failures. Most optimization effort is incorrectly applied to Layer 5.</div>
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>Why RAG Fails Silently</h2>
        <div className="article-prose">
          <p>The promise of RAG is constraint: by providing the model with retrieved documents, you constrain its generation to information you have verified. In practice, this constraint is weaker than it appears. A poorly designed retrieval pipeline retrieves documents that are topically adjacent to the query but semantically irrelevant to answering it. The model, receiving apparently relevant context, generates a fluent response grounded in that context — which may be wrong in the specific way the query requires it to be right.</p>
          <p>This failure is particularly dangerous because it is silent. The model does not report that its retrieved context was insufficient. It generates a confident, well-structured response. The failure is only detectable through evaluation — and evaluation of RAG systems is consistently less rigorous than evaluation of the models that power them, because the assumption that retrieval constrains generation leads organizations to under-invest in retrieval quality monitoring.</p>
          <p>The correct mental model for RAG failure is not "the model hallucinated." It is "the retrieval returned the wrong documents, and the model did what it was designed to do with them." The locus of failure is the retrieval layer. The solution is retrieval architecture, not model prompting.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>The Five-Layer Architecture</h2>
        <div className="article-prose">
          <p>Reliable RAG systems are not simple pipelines. They are five-layer architectures, each with distinct design requirements and distinct failure modes. The layers are not independent — failures at Layer 1 propagate downstream through every subsequent layer — but they require separate evaluation and separate investment decisions.</p>
        </div>
        <RAGDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>Most RAG optimization effort is applied at Layer 5 — the generation and guardrails layer. This is the most visible layer, the one most directly associated with the model, and the one that receives the most attention in model evaluation. It is also, in most production systems, not the layer where quality is being lost. Quality is being lost at Layer 3, in retrieval precision, and at Layer 1, in knowledge architecture. Optimizing Layer 5 while underinvesting in Layers 1 and 3 is the defining pattern of underperforming enterprise RAG systems.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Knowledge Architecture: The Invisible Foundation</h2>
        <div className="article-prose">
          <p>The quality of a RAG system is bounded by the quality of its knowledge base. This is a constraint that cannot be engineered around at the retrieval or generation layer — it is the ceiling within which every downstream optimization operates. Organizations that invest in retrieval infrastructure without investing in knowledge architecture build systems with hard quality limits that no amount of prompt engineering will raise.</p>
          <p><strong>Source selection</strong> determines what the system can possibly know. In enterprise contexts, source authority matters as much as coverage. Documents that are accurate in general but not authoritative in the specific domain of the query — internally produced summaries rather than primary sources, outdated policy documents, unverified secondary references — contribute noise that the retrieval system cannot distinguish from signal.</p>
          <p><strong>Chunking strategy</strong> determines the granularity at which knowledge is retrievable. Chunks that are too large return context that contains the relevant information but dilutes it with irrelevant text, degrading the signal-to-noise ratio of the context window. Chunks that are too small lose the surrounding context required for accurate interpretation. The correct chunking strategy is domain-specific and requires empirical evaluation — not default parameter selection.</p>
          <p><strong>Metadata schema</strong> enables retrieval filtering that semantic search alone cannot provide. Date ranges, document types, authority levels, and domain tags allow the retrieval system to exclude documents that are semantically related but contextually inappropriate. Systems without metadata schema are fully dependent on embedding similarity — which is a powerful but imprecise filter.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Retrieval Precision: The Binding Constraint</h2>
        <div className="article-prose">
          <p>In the majority of production RAG systems, retrieval precision — the proportion of retrieved documents that are genuinely relevant to the query — is the binding constraint on system quality. This is not widely understood, because retrieval precision is not directly observable in system output. The model generates responses that appear grounded in context regardless of whether that context is the right context.</p>
          <p>Measuring retrieval precision requires evaluating retrieval independently from generation. For a representative query set, retrieve the top-k documents and evaluate relevance manually or with a separate evaluation model. The result is typically surprising to organizations that have not done this evaluation: retrieval precision at the query types that matter most is frequently below what the system's generation quality would suggest.</p>
          <p>Improving retrieval precision requires investment in the retrieval engine itself — query expansion, re-ranking, hybrid search (combining semantic and keyword retrieval), and query-time metadata filtering. These are not simple parameter adjustments. They require architectural decisions with significant implications for latency, infrastructure cost, and maintenance complexity. But they are the investments that actually improve system quality at the layer where quality is being lost.</p>
        </div>
        <div className="article-pullquote">
          <p>"Measure retrieval at the document level, not the answer level. A system that retrieves the wrong documents and generates a fluent wrong answer will pass answer-level evaluation and fail your users."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>Guardrails: The Last Defense, Not the First</h2>
        <div className="article-prose">
          <p>Generation-layer guardrails — system prompt constraints that limit what the model can do with its retrieved context — are necessary but insufficient. They are the last line of defense in a well-designed RAG system, not the primary quality mechanism. Organizations that rely on guardrails to compensate for poor knowledge architecture or weak retrieval precision are building systems where the last defense is doing the work of three upstream layers.</p>
          <p>Effective guardrails in enterprise RAG systems share three properties. They are explicit about scope: the model is told precisely what it is and is not authorized to answer, and what it must do when a query falls outside that scope. They require citation: responses must reference the specific retrieved documents they draw from, making quality auditable rather than assumed. And they escalate gracefully: when the system cannot answer reliably from its retrieved context, it produces a defined fallback response rather than generating from prior training data.</p>
          <p>These three properties together — scope definition, citation requirement, graceful escalation — do not make a weak retrieval system strong. They make a strong retrieval system auditable and safe. The distinction matters: guardrails are a quality assurance layer, not a quality generation layer. The generation starts with what the retrieval returns.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Lewis, P. et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. <em>arXiv:2005.11401</em>.</li>
          <li>Gao, Y. et al. (2023). Retrieval-Augmented Generation for Large Language Models: A Survey. <em>arXiv:2312.10997</em>.</li>
          <li>Izacard, G. &amp; Grave, E. (2021). Leveraging Passage Retrieval with Generative Models for Open Domain Question Answering. <em>EACL 2021</em>.</li>
          <li>Karpukhin, V. et al. (2020). Dense Passage Retrieval for Open-Domain Question Answering. <em>arXiv:2004.04906</em>.</li>
          <li>Ma, X. et al. (2023). Query Rewriting for Retrieval-Augmented Large Language Models. <em>arXiv:2305.14283</em>.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Building a RAG system<br /><span>that needs to be trusted?</span></h3>
      <p>I design retrieval architectures that are evaluated at the retrieval layer — not just the generation layer. If your AI system needs to be right, not just fluent, let's talk.</p>
      <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">Schedule a Call →</a>
    </section>
  )
}

function ArticleFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal AI Systems Architect · Founder & CTO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function ArticleRAG() {
  usePageMeta({
    title: 'RAG Architecture in Practice — Jay Burgess',
    description: 'Retrieval quality — not model quality — is the binding constraint in most enterprise RAG systems. A five-layer architecture for retrieval systems that don\'t lie.',
  })
  return (
    <>
      <ArticleNav />
      <ArticleHero />
      <ArticleBody />
      <ArticleCTA />
      <ArticleFooter />
    </>
  )
}
