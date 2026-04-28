import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Technical Leadership</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Technical Leadership · April 2026</div>
        <h1 className="article-title">
          Technical Due Diligence: What to Look For Before You Commit
        </h1>
        <div className="article-abstract">
          Technical due diligence — the systematic evaluation of a technology system, team, or platform
          before a consequential commitment — is consistently performed too late, too narrowly, or too
          optimistically. Acquirers find architectural problems after close. Partners discover integration
          complexity after contract. Organizations adopt platforms before evaluating the vendor's
          operational track record at their scale. This paper presents a four-domain due diligence
          framework, identifies the questions that reliably surface the problems that comfortable
          evaluations miss, and argues that the goal of technical due diligence is not to find
          reasons to say no — it is to ensure that every yes is made with eyes open.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Technical Leadership</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['Technical Due Diligence', 'Architecture Review', 'Vendor Evaluation', 'M&A', 'Technology Assessment', 'Risk Analysis'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const DOMAINS = [
  {
    id: 'architecture',
    label: 'Architecture',
    title: 'System Architecture & Technical Debt',
    questions: [
      'What are the load-bearing components, and what happens to the system if any one of them fails?',
      'What is the debt inventory — the known architectural shortcuts that will require rework — and what is the estimated cost to service it?',
      'How are services decoupled? Are there hidden dependencies between components that the architecture diagrams don\'t show?',
      'What decisions were made for speed that will become constraints at 10x current scale?',
    ],
    risk: 'Architecture problems are the most expensive to remediate post-commitment. They are also the most likely to be rationalized away during evaluation — presented as known issues with clear remediation paths that rarely survive contact with post-commitment operational pressure.',
  },
  {
    id: 'data',
    label: 'Data',
    title: 'Data Architecture & Quality',
    questions: [
      'What is the single source of truth for each critical data entity, and is that answer consistent across the engineering team?',
      'What is the data quality monitoring in place — how does the team know when data quality degrades?',
      'How are schema changes managed, and what is the blast radius of a breaking schema change?',
      'Is data portable? What would a migration to a different data store actually involve?',
    ],
    risk: 'Data architecture problems are frequently invisible in product evaluations because the product surface can appear healthy while the underlying data is inconsistent, undocumented, or structured in ways that make the product\'s roadmap commitments technically impossible.',
  },
  {
    id: 'team',
    label: 'Team',
    title: 'Team & Knowledge Distribution',
    questions: [
      'What is the bus factor of the system — how many people need to leave before critical system knowledge is lost?',
      'Where is architectural knowledge concentrated, and what is the transition plan if those individuals are unavailable?',
      'How is onboarding structured — can a new engineer become productive without the original builders?',
      'What is the incident response protocol, and has it been tested?',
    ],
    risk: 'Knowledge concentration is the most underweighted risk in technical due diligence. A technically sound system maintained by two people who are the only ones who understand it is a fragile system — not because of its architecture, but because of its human dependencies.',
  },
  {
    id: 'operations',
    label: 'Operations',
    title: 'Operational Maturity & Incident History',
    questions: [
      'What is the incident history for the past 12 months — frequency, severity, time to resolution, and whether the root causes were addressed or patched?',
      'What monitoring exists, and what is the alert-to-resolution workflow?',
      'What is the deployment process, and what is the blast radius of a bad deploy?',
      'What SLOs are defined, are they being met, and how are they measured?',
    ],
    risk: 'Operational maturity is the most reliable predictor of system reliability post-commitment. Organizations with immature operational practices — poor incident documentation, absent SLOs, manual deployment processes — consistently produce more post-commitment incidents than their pre-commitment technical architecture would suggest.',
  },
]

function DomainCards() {
  const [active, setActive] = useState(0)
  return (
    <div className="maturity-spectrum">
      <div className="maturity-tabs">
        {DOMAINS.map((d, i) => (
          <button key={d.id} className={`maturity-tab${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
            {d.label}
          </button>
        ))}
      </div>
      {DOMAINS.map((d, i) => (
        <div key={d.id} className={`maturity-panel${active === i ? ' active' : ''}`}>
          <div className="maturity-panel-title">{d.title}</div>
          <div style={{ marginBottom: '1rem' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '0.6rem' }}>Key Questions</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
              {d.questions.map((q, qi) => (
                <li key={qi} style={{ fontSize: '0.83rem', color: 'var(--mid)', lineHeight: 1.7, paddingLeft: '1rem', borderLeft: '2px solid var(--rule2)' }}>{q}</li>
              ))}
            </ul>
          </div>
          <div style={{ background: 'var(--orange-glow)', border: '1px solid var(--orange-border)', padding: '1rem', borderRadius: '2px' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '0.4rem' }}>Primary Risk</div>
            <div style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.7 }}>{d.risk}</div>
          </div>
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
        <h2>Why Due Diligence Fails</h2>
        <div className="article-prose">
          <p>Technical due diligence fails for three structural reasons. The first is scope: evaluations focus on what the system currently does rather than what it will need to do — its architecture under load, its behavior at the edge of its design envelope, the cost and complexity of the changes the acquiring organization's roadmap will require. The system is evaluated as it is, not as it will need to be.</p>
          <p>The second is access: evaluators see the architecture the team wants to present, not the architecture that actually runs in production. Demo environments are clean. Production environments accumulate workarounds, undocumented dependencies, and informal architectural decisions that exist nowhere in the official documentation. The most important due diligence conversations happen not with the engineering leadership team, but with the engineers who maintain the system at 2am when it breaks.</p>
          <p>The third is incentive alignment: both parties to the evaluation have incentives to reach a conclusion. The seller wants the deal. The buyer wants the capability. Both parties are doing due diligence in an environment where the primary social pressure is toward closing — and where the discovery of significant problems creates friction that nobody in the room wants to create. The result is evaluations that identify known, manageable risks and systematically underweight unknown or uncomfortable ones.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Four-Domain Evaluation Framework</h2>
        <div className="article-prose">
          <p>Effective technical due diligence covers four domains, each of which surfaces a different category of risk. The questions below are designed to produce evidence-based answers rather than qualitative assurances. Select each domain to see the key evaluation questions and the primary risk it surfaces.</p>
        </div>
        <DomainCards />
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>The Questions That Surface What Comfort Hides</h2>
        <div className="article-prose">
          <p>Standard due diligence questions produce standard due diligence answers — prepared, rehearsed, and optimized for reassurance rather than transparency. The questions that reliably surface real architectural risk are the ones that cannot be answered from a deck: walk me through the last three production incidents, end to end. Show me the deployment process in the actual environment. What would you rewrite if you were starting over? Where do you have the most technical debt that you haven't been able to address?</p>
          <p>These questions work because they require specificity and candor. They cannot be answered with generalities about engineering culture or architectural philosophy. They require the team to describe real events, real tradeoffs, and real limitations — and the quality of those answers is itself a diagnostic signal about the team's self-awareness and operational maturity.</p>
        </div>
        <div className="article-pullquote">
          <p>"The most important question in technical due diligence is not 'what does this system do?' It is 'what does this system do when it breaks, at 2am, under production load, with the person who built it unavailable?'"</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Making the Findings Actionable</h2>
        <div className="article-prose">
          <p>The output of technical due diligence is not a pass/fail verdict. It is a risk-adjusted picture of what the commitment actually involves — the capability that exists, the problems that are present, the costs of addressing them, and the conditions under which the deal structure should change. This reframing matters because it changes what the evaluation is for: not to find reasons to say no, but to ensure that every yes is made with eyes open.</p>
          <p>Due diligence findings should produce three outputs: a prioritized list of architectural risks with estimated remediation cost; a set of commitment conditions — the specific architectural improvements or documentation requirements that should be completed before or as part of the deal; and a post-commitment technical roadmap that sequences the work required to make the system fit for its intended purpose.</p>
          <p>Organizations that structure their due diligence this way consistently get better outcomes from their technical commitments — not because they identify more problems, but because they deal with the problems they find rather than hoping they won't matter at scale.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Lajoux, A. R. &amp; Elson, C. M. (2010). <em>The Art of M&A Due Diligence</em> (2nd ed.). McGraw-Hill.</li>
          <li>McConnell, S. (2004). <em>Code Complete</em> (2nd ed.). Microsoft Press.</li>
          <li>Humble, J. &amp; Farley, D. (2010). <em>Continuous Delivery</em>. Addison-Wesley.</li>
          <li>Beyer, B. et al. (2016). <em>Site Reliability Engineering</em>. O'Reilly Media.</li>
          <li>Bass, L., Clements, P. &amp; Kazman, R. (2012). <em>Software Architecture in Practice</em> (3rd ed.). Addison-Wesley.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Making a technical<br /><span>commitment you need to trust?</span></h3>
      <p>I perform technical due diligence that finds the problems that comfortable evaluations miss. Let's talk about what you're evaluating.</p>
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

export default function ArticleTechDueDiligence() {
  usePageMeta({
    title: 'Technical Due Diligence — Jay Burgess',
    description: 'Technical due diligence is consistently performed too late, too narrowly, or too optimistically. A four-domain framework for evaluations that find what comfort hides.',
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
