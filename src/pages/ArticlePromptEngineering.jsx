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
        <div className="article-eyebrow">Article · AI Systems · April 2026</div>
        <h1 className="article-title">
          Beyond Prompt Engineering: Why System Design Is the Real AI Skill
        </h1>
        <div className="article-abstract">
          Prompt engineering — the practice of crafting inputs to elicit desired outputs from large language
          models — has absorbed a disproportionate share of enterprise AI investment and organizational
          attention. It is a real skill with genuine leverage, and it is not the bottleneck in most AI
          systems that fail to deliver production value. The bottleneck is system design: the architecture
          of the components surrounding the model, the data flows that feed it, the integration layer that
          connects its output to operational workflows, and the feedback mechanisms that allow the system
          to improve over time. This paper argues that prompt engineering is a necessary but insufficient
          capability for AI system builders, that system design is the skill that determines whether AI
          investment generates operational value, and that the distinction between the two is the most
          important conceptual boundary in enterprise AI practice.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">AI Systems</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['Prompt Engineering', 'AI System Design', 'LLM Architecture', 'AI Engineering', 'System Thinking', 'Production AI'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const SYSTEM_LAYERS = [
  { label: 'Prompt', name: 'Prompt Layer', desc: 'The input to the model — the instruction, context, and examples that determine the model\'s behavior for a specific interaction. High leverage for a single interaction. Low leverage as the primary quality mechanism for a production system.', scope: 'Single interaction', primary: false },
  { label: 'Context', name: 'Context Layer', desc: 'The mechanism by which relevant information is assembled and provided to the model at inference time. Retrieval architecture, context window management, and relevance ranking all operate here. Determines the quality ceiling for any given prompt.', scope: 'Information quality', primary: false },
  { label: 'Integration', name: 'Integration Layer', desc: 'The connection between the model\'s output and the operational systems that use it. API design, output parsing, error handling, and workflow routing. The layer most often underbuilt in early deployments and most responsible for production failures.', scope: 'Operational connection', primary: true },
  { label: 'Feedback', name: 'Feedback Layer', desc: 'The mechanism by which system performance is measured and used to improve the system over time. Usage analytics, quality monitoring, user feedback capture, and improvement prioritization. Absent in most production AI systems — and absent systems plateau rapidly.', scope: 'Continuous improvement', primary: false },
]

function SystemDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Four Layers of AI System Design</div>
      <div style={{ display: 'flex', gap: '1px', background: 'var(--rule)' }}>
        {SYSTEM_LAYERS.map((l) => (
          <div key={l.label} style={{
            flex: 1,
            background: l.primary ? 'var(--orange-glow)' : 'var(--black)',
            borderBottom: l.primary ? '2px solid var(--orange)' : '2px solid transparent',
            padding: '1.25rem 1rem',
            display: 'flex',
            flexDirection: 'column',
            gap: '0.5rem',
          }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: l.primary ? 'var(--orange)' : 'var(--dim)' }}>{l.label}</div>
            <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '0.82rem', fontWeight: 700, color: l.primary ? 'var(--orange)' : 'var(--white)', lineHeight: 1.2 }}>{l.name}</div>
            <div style={{ fontSize: '0.75rem', color: 'var(--mid)', lineHeight: 1.65, flex: 1 }}>{l.desc}</div>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.06em', color: 'var(--dim)', borderTop: '1px solid var(--rule)', paddingTop: '0.5rem' }}>{l.scope}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--dim)', fontStyle: 'italic', marginTop: '0.75rem' }}>The Integration Layer (highlighted) is the most underbuilt in early AI deployments and the most responsible for production failure.</div>
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>The Prompt Engineering Ceiling</h2>
        <div className="article-prose">
          <p>Prompt engineering is a genuine skill. The ability to craft instructions that reliably elicit desired model behavior, to design few-shot examples that generalize to novel inputs, to structure chain-of-thought reasoning that improves output quality on complex tasks — these are meaningful capabilities with real leverage on model performance.</p>
          <p>They also have a ceiling. A perfectly crafted prompt cannot compensate for a retrieval system that returns the wrong documents. It cannot compensate for an integration layer that drops the model's output before it reaches the workflow that needs it. It cannot compensate for the absence of a feedback mechanism that would allow the system to improve as it encounters production-scale input diversity. The ceiling of prompt engineering is the quality of the system surrounding the prompt.</p>
          <p>The organizations that have invested most heavily in prompt engineering as their primary AI capability have built competent individuals who can make models perform impressively in controlled conditions and systems that consistently underperform in production. The bottleneck is not the prompt. It is the architecture.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>The Four Layers of System Design</h2>
        <div className="article-prose">
          <p>Effective AI system design operates across four layers, each of which determines a different dimension of system quality. Prompt engineering operates primarily at the first layer. The other three layers — context, integration, and feedback — receive a small fraction of the investment and attention that the prompt layer receives, despite determining the majority of production system quality.</p>
        </div>
        <SystemDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>The Integration Layer deserves particular attention because it is the most consistently underbuilt and the most responsible for production failures. The model produces correct output. The integration layer parses it incorrectly, routes it to the wrong downstream system, drops it when an error occurs, or returns it in a format that the receiving system cannot use. The failure is invisible at the model layer — the model did everything right — and visible only in the downstream workflow, often hours or days after the fact.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>What System Design Actually Requires</h2>
        <div className="article-prose">
          <p>AI system design is not a new discipline. It is the application of systems engineering principles — interface design, state management, failure handling, observability, feedback loops — to the specific constraints and capabilities of large language models and AI infrastructure. The skills required are not AI-specific. They are the same skills required to build any reliable distributed system.</p>
          <p>What makes the application to AI systems distinct is the non-determinism of the model layer. Traditional software components produce the same output for the same input. Models do not. This means that integration layers must be designed for output variability — parsing strategies that handle format variations, routing logic that accommodates confidence thresholds, fallback behaviors for outputs that do not meet quality criteria. The system must be designed to work correctly not just when the model performs as expected, but when it performs at the edges of its distribution.</p>
          <p>This design requirement is frequently invisible to teams that come to AI system development from prompt engineering. They have optimized the model's behavior in controlled conditions and assume that behavior will generalize. It will not, reliably. The system must be designed around that assumption.</p>
        </div>
        <div className="article-pullquote">
          <p>"The model is one component in a system. A brilliant component surrounded by a mediocre system produces mediocre output. That is not a model problem — it is a system design problem."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>The Feedback Layer: Most Absent, Most Valuable</h2>
        <div className="article-prose">
          <p>The Feedback Layer — the mechanism by which a system measures its own performance and uses that measurement to improve — is present in very few production AI systems and absent in nearly all early-stage AI deployments. This absence is understandable: building a feedback layer requires significant upfront investment that does not visibly improve the initial deployment. The payoff is compounding quality improvement over time, which is a long-horizon return in an environment that rewards short-horizon demonstrations.</p>
          <p>The consequence of feedback layer absence is systems that plateau. The initial deployment performs at a certain quality level. As the system encounters production-scale input diversity, it encounters failure cases that were never identified in evaluation. Without a feedback mechanism, those failures are invisible — there is no signal that failure occurred, no mechanism to capture the cases, and no process to improve the system in response. The system continues to operate at its initial quality level indefinitely.</p>
          <p>Systems with well-designed feedback layers compound. Each production cycle generates data about where the system fails, which drives targeted improvements to retrieval architecture, context assembly, prompt design, and integration handling. The system that was deployed at a certain quality level is meaningfully better six months later — not because of retraining, but because the feedback loop has identified and addressed the specific failure modes the production environment revealed.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>Building the Skill Stack</h2>
        <div className="article-prose">
          <p>The organizational implication is clear: AI capability requires a skill stack, not a skill. Prompt engineering is one layer of that stack — necessary, valuable, and insufficient. The other layers require systems engineering, integration architecture, data engineering, and feedback system design. These are not AI-specific skills. They are the skills that make any complex system reliable at production scale.</p>
          <p>Organizations that invest in prompt engineering as their primary AI capability are investing in the first layer of a four-layer skill requirement. They will build impressive demos. They will struggle in production. And they will attribute their production struggles to model limitations — to the prompt not being good enough — when the actual constraint is the three layers of system design they haven't built yet.</p>
          <p>The transition from AI experimentation to AI production is the transition from prompt engineering to system design. It is not a harder version of the same skill. It is a different discipline, applied to the same problem. The organizations that make that transition successfully are the ones that recognize it as a transition — not as a natural extension of what they have already built.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Brown, T. et al. (2020). Language Models are Few-Shot Learners. <em>arXiv:2005.14165</em>.</li>
          <li>Wei, J. et al. (2022). Chain-of-Thought Prompting Elicits Reasoning in Large Language Models. <em>arXiv:2201.11903</em>.</li>
          <li>Sculley, D. et al. (2015). Hidden Technical Debt in Machine Learning Systems. <em>NIPS 2015</em>.</li>
          <li>Kleppmann, M. (2017). <em>Designing Data-Intensive Applications</em>. O'Reilly Media.</li>
          <li>Humble, J. &amp; Farley, D. (2010). <em>Continuous Delivery</em>. Addison-Wesley.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Good prompts but<br /><span>poor production results?</span></h3>
      <p>The bottleneck is system design, not the prompt. I diagnose and build the architecture surrounding the model that makes it reliable at scale. Let's talk.</p>
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

export default function ArticlePromptEngineering() {
  usePageMeta({
    title: 'Beyond Prompt Engineering — Jay Burgess',
    description: 'Prompt engineering is necessary but insufficient. Why system design — not prompt craft — is the skill that determines whether AI investment generates production value.',
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
