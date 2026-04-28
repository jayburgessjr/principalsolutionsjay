import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · AI Strategy</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · AI Strategy · April 2026</div>
        <h1 className="article-title">
          How to Evaluate an AI Vendor Without Getting Fooled by the Demo
        </h1>
        <div className="article-abstract">
          AI vendor evaluation is systematically compromised by the same dynamic that makes AI pilots
          unreliable: the evaluation environment is optimized for the evaluator's experience, not for
          the conditions the system will face in production. AI vendor demos are among the most
          carefully engineered presentations in enterprise software — they are designed to answer
          the questions evaluators are predisposed to ask, in conditions that make the answers
          impressive. This paper presents a structured evaluation methodology for AI vendors that
          surfaces the operational reality behind the demo, identifies the questions that vendors
          are least prepared to answer honestly, and proposes a scoring framework that weights the
          factors that actually determine long-term vendor value.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">AI Strategy</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">7 min</div></div>
        </div>
        <div className="article-keywords">
          {['Vendor Evaluation', 'AI Procurement', 'Enterprise AI', 'Vendor Selection', 'POC Evaluation', 'AI Strategy'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const EVAL_AREAS = [
  {
    label: 'Capability',
    title: 'What It Actually Does vs. What the Demo Shows',
    questions: ['Provide your own data — not the vendor\'s curated samples — and evaluate performance on that data.', 'Test the failure mode: what does the system do when it encounters input outside its design envelope?', 'Ask for the system\'s accuracy on your specific use case, not on industry benchmarks.', 'Evaluate the edge cases relevant to your domain — the inputs that are common in your context but rare in general.'],
  },
  {
    label: 'Reliability',
    title: 'Performance When It Matters',
    questions: ['What is the uptime SLA, and what has actual uptime been over the past 12 months?', 'What is the latency at production volume — not at demo volume?', 'What is the degradation behavior when upstream dependencies are slow or unavailable?', 'How is the system monitored, and how are customers notified of incidents?'],
  },
  {
    label: 'Data',
    title: 'What Happens to Your Data',
    questions: ['Where is your data stored, how is it isolated from other customers, and who has access?', 'Is your data used to train or fine-tune models? If so, with what consent and notification?', 'What is the data portability commitment — how do you get your data out if you switch vendors?', 'What data residency options exist for regulated industries or geographic requirements?'],
  },
  {
    label: 'Support',
    title: 'What Happens When Things Break',
    questions: ['What is the support tier for your account, and what response time guarantees exist for production incidents?', 'Is there a dedicated technical contact, or is support queue-based?', 'Ask to speak with a current customer of similar scale to your expected deployment — not a reference the vendor selects.', 'What is the escalation path when standard support cannot resolve an issue?'],
  },
  {
    label: 'Roadmap',
    title: 'Where the Product Is Going',
    questions: ['What capabilities on the current roadmap are relevant to your use case, and on what timeline?', 'What has shipped from the roadmap that was communicated at sales time in the past 12 months?', 'How are customer requests prioritized, and what is the process for escalating a critical missing capability?', 'What would cause the vendor to deprioritize or discontinue your use case?'],
  },
]

function EvalTabs() {
  const [active, setActive] = useState(0)
  return (
    <div className="maturity-spectrum">
      <div className="maturity-tabs">
        {EVAL_AREAS.map((e, i) => (
          <button key={e.label} className={`maturity-tab${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
            {e.label}
          </button>
        ))}
      </div>
      {EVAL_AREAS.map((e, i) => (
        <div key={e.label} className={`maturity-panel${active === i ? ' active' : ''}`}>
          <div className="maturity-panel-title">{e.title}</div>
          <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
            {e.questions.map((q, qi) => (
              <li key={qi} style={{ fontSize: '0.83rem', color: 'var(--mid)', lineHeight: 1.7, paddingLeft: '1rem', borderLeft: '2px solid var(--orange-border)' }}>{q}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>How the Demo Is Designed</h2>
        <div className="article-prose">
          <p>An AI vendor demo is a carefully engineered experience. The inputs are curated to showcase the system's strengths. The use cases are selected for tractability. The failure modes are not demonstrated. The latency is measured in an environment optimized for the demo, not a production environment under realistic load. And the person presenting the demo knows the system deeply — knows what to avoid, what to emphasize, and how to redirect when the system behaves unexpectedly.</p>
          <p>None of this is deceptive in the conventional sense. It is standard practice. The vendor is presenting their product in its best light, which is what product demonstrations are for. The problem arises when organizations use the demo as the primary evidence for a production deployment decision — when the evaluation environment is accepted as representative of production conditions, and the gap between the two is only discovered after commitment.</p>
          <p>Effective AI vendor evaluation is not about being adversarial. It is about being systematic — about designing an evaluation process that surfaces production-relevant evidence rather than demo-optimized evidence, and that asks the questions vendors are least prepared to answer in rehearsed presentations.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Five Evaluation Domains</h2>
        <div className="article-prose">
          <p>The evaluation framework below covers five domains that collectively determine long-term vendor value. The questions within each domain are designed to produce specific, evidence-based answers rather than qualitative assurances. Select each domain to see the evaluation questions.</p>
        </div>
        <EvalTabs />
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>The Questions Vendors Can't Rehearse</h2>
        <div className="article-prose">
          <p>The most revealing evaluation questions are the ones that require candid operational knowledge rather than prepared marketing responses. Bring your own data and ask the vendor to run their system on it, in a live evaluation rather than a prepared demo. Ask for the incident log from the past six months and walk through it together. Ask the sales team to describe a situation where their product was not the right choice for a customer and why.</p>
          <p>These questions reveal two things simultaneously: the actual operational reality of the product, and the organizational culture of the vendor. A vendor that can speak candidly about failures, limitations, and competitive tradeoffs is a vendor whose relationship with you will be productive when problems arise — and problems will arise. A vendor that cannot answer these questions without deflecting is a vendor whose post-sales relationship will be adversarial when things go wrong.</p>
        </div>
        <div className="article-pullquote">
          <p>"The vendor evaluation tells you what the product does. The conversation about what the product doesn't do tells you what kind of partner you're getting."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Weighting What Actually Matters</h2>
        <div className="article-prose">
          <p>Most vendor scoring frameworks weight capability heavily and operational reliability, data governance, and support quality lightly. This weighting reflects the evaluation process — capability is what demos demonstrate, so capability is what scorecards measure. But the factors that determine long-term vendor value are reliability, data governance, support quality, and roadmap credibility — the factors that are hardest to evaluate in a demo and most consequential over the contract horizon.</p>
          <p>A vendor with 95% of the capability you need and excellent reliability, data governance, and support will consistently outperform a vendor with 100% of the capability you need and poor performance on the operational factors. Capability gaps can be worked around. Reliability problems, data governance failures, and poor support quality cannot be worked around — they become organizational overhead that consumes more capacity than the capability advantage was worth.</p>
          <p>The final evaluation weighting should reflect the long-term cost topology of each factor, not the visibility of each factor in the demo. Capability is visible. Reliability is historical. Data governance is contractual. Support quality is reputational. Each requires different evaluation methods — and the difference in evaluation effort between capability and the operational factors is exactly why capability-heavy decisions consistently produce operational disappointments.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Gartner. (2023). Magic Quadrant for Cloud AI Developer Services. <em>Gartner Research</em>.</li>
          <li>Kahneman, D. (2011). <em>Thinking, Fast and Slow</em>. Farrar, Straus and Giroux.</li>
          <li>Porter, M. E. (1980). <em>Competitive Strategy</em>. Free Press.</li>
          <li>Davenport, T. H. &amp; Harris, J. G. (2007). <em>Competing on Analytics</em>. Harvard Business School Press.</li>
          <li>Thaler, R. H. &amp; Sunstein, C. R. (2008). <em>Nudge</em>. Yale University Press.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Evaluating AI vendors<br /><span>and need an independent view?</span></h3>
      <p>I've evaluated AI platforms across multiple industries. I can help you ask the questions the demo isn't designed to answer. Let's talk.</p>
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

export default function ArticleVendorEval() {
  usePageMeta({
    title: 'How to Evaluate an AI Vendor Without Getting Fooled — Jay Burgess',
    description: 'AI vendor demos are engineered for the evaluator. A structured evaluation methodology that surfaces production reality behind the demo.',
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
