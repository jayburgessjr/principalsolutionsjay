import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · AI Systems</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · AI Systems Architecture · April 2026</div>
        <h1 className="article-title">
          Why AI Systems Fail at Scale: The Architecture Gap Between Demo and Production
        </h1>
        <div className="article-abstract">
          The proliferation of AI proofs-of-concept has created a systematic blind spot in enterprise technology
          strategy: the conditions under which AI systems are evaluated bear little resemblance to the conditions
          under which they must operate. This paper examines the structural causes of the demo-to-production gap,
          proposes a six-category taxonomy of architectural failure modes, and offers a framework for production
          readiness evaluation. The central argument is that AI system failure is not primarily a model problem —
          it is an architecture problem, and one that is fully diagnosable before scale commitment.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item">
            <div className="article-meta-label">Author</div>
            <div className="article-meta-val">Jay Burgess</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Published</div>
            <div className="article-meta-val">April 2026</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Category</div>
            <div className="article-meta-val">AI Systems Architecture</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Read Time</div>
            <div className="article-meta-val">9 min</div>
          </div>
        </div>
        <div className="article-keywords">
          {['AI Systems', 'Production Architecture', 'RAG', 'Failure Modes', 'Enterprise AI', 'MLOps'].map((k) => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const FAILURE_MODES = [
  {
    label: 'Failure Mode 01',
    title: 'Knowledge Boundary Collapse',
    body: 'The system responds to queries outside its verified knowledge domain with high-confidence incorrect answers. In regulated environments — compliance, healthcare, finance — this is not a user experience failure. It is an organizational liability. Without explicit boundary enforcement architecture, default model behavior is confident confabulation at the edges of its training distribution.',
  },
  {
    label: 'Failure Mode 02',
    title: 'Retrieval Drift',
    body: 'In RAG architectures, retrieval precision degrades as the knowledge base scales. The model continues generating fluent, confident responses while drawing from increasingly irrelevant retrieved context. This failure is silent — output quality degrades without visible error signals — making it one of the most dangerous failure modes in production retrieval-augmented systems.',
  },
  {
    label: 'Failure Mode 03',
    title: 'Context Window Saturation',
    body: 'Tasks that succeeded in demo degrade as real-world inputs approach or exceed context limits. Multi-document reasoning, long-form summarization, and conversational history management are all sensitive to context ceiling effects that are easy to miss in controlled evaluation with curated, representative inputs.',
  },
  {
    label: 'Failure Mode 04',
    title: 'Prompt Brittleness Under Variation',
    body: 'System prompts that enforce desired behavior in demo become insufficient as real user inputs introduce variation the prompt authors did not anticipate. The guardrails hold in testing. They erode under novel input. This is a prompt architecture failure — and it is predictable if the prompt is stress-tested against adversarial inputs before launch.',
  },
  {
    label: 'Failure Mode 05',
    title: 'Integration Latency at Scale',
    body: 'The AI model performs correctly, but the surrounding pipeline — retrieval, preprocessing, API calls, postprocessing — introduces latency that degrades user experience at production volume. What was a 280ms response in demo becomes a 2.6-second wait under load. At scale, pipeline architecture is frequently the binding constraint, not model performance.',
  },
  {
    label: 'Failure Mode 06',
    title: 'Feedback Loop Absence',
    body: 'The system is deployed without a structured mechanism for capturing and surfacing failure. No quality monitoring, no retrieval precision tracking, no anomaly detection. Quality degrades invisibly until an incident forces a reactive remediation cycle that is far more expensive than the monitoring infrastructure that would have prevented it.',
  },
]

function FailureCards() {
  const [open, setOpen] = useState(null)
  return (
    <div className="failure-cards">
      {FAILURE_MODES.map((c, i) => (
        <div
          key={i}
          className={`failure-card${open === i ? ' open' : ''}`}
          onClick={() => setOpen(open === i ? null : i)}
        >
          <div className="failure-card-header">
            <div>
              <div className="failure-card-label">{c.label}</div>
              <div className="failure-card-title">{c.title}</div>
            </div>
            <div className="failure-card-toggle">+</div>
          </div>
          <div className="failure-card-body">{c.body}</div>
        </div>
      ))}
    </div>
  )
}

const STACK_COLS = [
  {
    label: 'Demo Stack',
    nodes: [
      { text: 'Curated Input', accent: false },
      { text: 'Model', accent: true },
      { text: 'Demo Prompt', accent: false },
      { text: 'Manual Evaluation', accent: false },
    ],
  },
  {
    label: 'Production Stack',
    nodes: [
      { text: 'Real-World Data', accent: false },
      { text: 'RAG Pipeline', accent: false },
      { text: 'Guardrails Layer', accent: false },
      { text: 'Model', accent: true },
      { text: 'Monitoring', accent: false },
      { text: 'Feedback Loop', accent: false },
      { text: 'Integration Layer', accent: false },
    ],
  },
]

function ArchDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Demo Stack vs. Production Architecture</div>
      <div style={{ display: 'flex', gap: '1px', background: 'var(--rule)' }}>
        {STACK_COLS.map((col) => (
          <div key={col.label} style={{ flex: 1, background: 'var(--black)', padding: '1.25rem' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '1rem' }}>
              {col.label}
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem' }}>
              {col.nodes.map((n) => (
                <div
                  key={n.text}
                  style={{
                    padding: '0.5rem 0.75rem',
                    border: `1px solid ${n.accent ? 'var(--orange-border)' : 'var(--rule2)'}`,
                    background: n.accent ? 'var(--orange-glow)' : 'transparent',
                    fontSize: '0.78rem',
                    color: n.accent ? 'var(--orange)' : 'var(--mid)',
                  }}
                >
                  {n.text}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--dim)', fontStyle: 'italic', marginTop: '0.75rem' }}>
        The model is identical in both stacks. What changes is the architecture surrounding it.
      </div>
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal()
  const r2 = useReveal()
  const r3 = useReveal()
  const r4 = useReveal()
  const r5 = useReveal()

  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>Introduction — The Success Trap</h2>
        <div className="article-prose">
          <p>A remarkable pattern has emerged across enterprise AI adoption over the past several years. The proof of concept almost always succeeds. Teams are impressed. Leadership approves budget. A production timeline is set. And then, somewhere between the controlled evaluation environment and real-world deployment, the system begins to fail in ways that were never anticipated.</p>
          <p>This failure is not random. It follows predictable patterns that are visible — if you know where to look — before a single dollar of production infrastructure is committed. The organizations that understand this build systems that compound in value. The organizations that don't discover the pattern through expensive remediation cycles after the system is already load-bearing.</p>
          <p>The gap is not in the underlying models. Large language models, classification systems, and retrieval architectures have genuine and substantial capability. The gap is in the architecture surrounding those models — the layers responsible for data ingestion, context management, retrieval quality, failure handling, monitoring, and operational integration. These layers are rarely evaluated during the demo phase, because the demo phase is designed to evaluate the model, not the system.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>The Controlled Environment Problem</h2>
        <div className="article-prose">
          <p>A proof of concept succeeds for structural reasons. The input data is curated for representativeness. The use cases are selected for tractability. The failure modes have not yet been discovered. And the team operating the demo possesses deep contextual knowledge about what the system can and cannot do — knowledge that does not transfer to end users in production.</p>
          <p>Three structural conditions differentiate the demo environment from production. <strong>Data diversity:</strong> demo inputs are selected; production inputs arrive as they arrive — noisy, malformed, and frequently outside the distribution the system was optimized for. <strong>Failure surface:</strong> demos exercise the system's capabilities; production exercises its failure modes daily. <strong>Operator context:</strong> demo operators know the system's limitations; production users discover them in real time, at cost to the organization.</p>
          <p>The consequence is predictable: systems evaluated at high accuracy in controlled conditions can perform significantly below that threshold in production, and that gap is not a model quality problem. It is a distribution shift problem, a context problem, and an architecture problem — all of which were present during evaluation and not surfaced because the evaluation was not designed to surface them.</p>
        </div>
        <div className="article-pullquote">
          <p>"The demo is, by design, a best-case scenario. The problem arises when that best-case scenario becomes the baseline assumption for production planning."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>A Taxonomy of Architectural Failure Modes</h2>
        <div className="article-prose">
          <p>Six failure modes account for the majority of AI production system underperformance. They are architectural rather than model-level problems, which means they are diagnosable and addressable before scale commitment — if the right questions are asked during evaluation. Select any card to expand the full pattern description.</p>
        </div>
        <FailureCards />
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>The Architecture Gap</h2>
        <div className="article-prose">
          <p>The diagram below illustrates the structural difference between a typical demo stack and a production-grade architecture. The model occupies the same position in both. What changes is every layer around it — and those layers are what determine whether the system performs reliably under real-world conditions.</p>
        </div>
        <ArchDiagram />
        <div className="article-prose">
          <p>The production stack is not more complex for its own sake. Each additional layer addresses a failure mode that the demo stack does not surface. RAG pipeline architecture determines retrieval quality. Guardrails enforce behavioral boundaries. Monitoring enables quality tracking and incident response. The feedback loop provides the mechanism for continuous improvement. The integration layer manages the operational dependencies that don't exist in the demo environment.</p>
          <p>Organizations that evaluate AI systems at the model layer and skip evaluation of the surrounding architecture are approving budget for a demo, not a system.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>A Framework for Production Readiness</h2>
        <div className="article-prose">
          <p>Before committing a system to production scale, four evaluations must be completed in sequence.</p>
          <p><strong>Boundary testing</strong> maps the system's failure envelope. What happens when input is adversarial? Out of scope? At context limits? The goal is not to eliminate failure modes — it is to ensure every failure mode is known, understood, and handled with intentional architecture rather than discovered by users at cost to the organization.</p>
          <p><strong>Retrieval audit</strong> evaluates retrieval precision independently from generation quality. In RAG systems, fluent generation consistently masks poor retrieval. A system can produce confident, well-structured responses while retrieving entirely irrelevant documents. Measure retrieval at the document level — not at the answer level.</p>
          <p><strong>Integration load testing</strong> validates the full pipeline under production-representative volume and data diversity. Every component upstream and downstream of the model must be tested under realistic conditions. The model is rarely the binding constraint at scale — the pipeline typically is.</p>
          <p><strong>Monitoring protocol definition</strong> establishes what will be observed before launch. Response latency, retrieval precision, user feedback signals, and anomaly detection thresholds must be operational at deployment — not retrofitted after the first incident. Instrumentation built into the initial deployment is consistently less expensive than instrumentation built in response to a production failure.</p>
        </div>
        <div className="article-pullquote">
          <p>"The AI demo works. The production system must be designed to work in conditions that demos do not replicate — and that gap is fully diagnosable before scale commitment."</p>
        </div>
        <div className="article-prose">
          <p>Organizations that complete these four evaluations before committing to production scale build systems that compound in value over time. Those that discover the gaps after launch spend that time in remediation — which is consistently more expensive, more disruptive, and more damaging to organizational confidence in AI investment than the evaluation work that would have prevented it.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Sculley, D. et al. (2015). Hidden Technical Debt in Machine Learning Systems. <em>Advances in Neural Information Processing Systems 28</em>.</li>
          <li>Lewis, P. et al. (2020). Retrieval-Augmented Generation for Knowledge-Intensive NLP Tasks. <em>arXiv:2005.11401</em>.</li>
          <li>Bommasani, R. et al. (2021). On the Opportunities and Risks of Foundation Models. <em>Stanford Center for Research on Foundation Models</em>.</li>
          <li>Liang, P. et al. (2022). Holistic Evaluation of Language Models. <em>arXiv:2211.09110</em>.</li>
          <li>Anthropic. (2024). Model Card and Evaluations for Claude Models. <em>Anthropic Technical Report</em>.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Building an AI system<br /><span>that needs to scale?</span></h3>
      <p>I work with organizations navigating the gap between AI demos and production-grade systems. Let's talk about what that architecture looks like for your context.</p>
      <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">
        Schedule a Call →
      </a>
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

export default function ArticleAIScale() {
  usePageMeta({
    title: 'Why AI Systems Fail at Scale — Jay Burgess',
    description:
      'Most AI proofs of concept succeed. Most production deployments struggle. The gap is architectural. A framework for diagnosing and closing it before it costs you.',
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
