import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Systems Design</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Systems Design · April 2026</div>
        <h1 className="article-title">
          Workflow Automation Done Right: Why Most Automations Break and How to Build Ones That Don't
        </h1>
        <div className="article-abstract">
          Workflow automation is among the highest-leverage investments an organization can make in
          operational efficiency — and among the most reliably disappointing when executed without
          architectural discipline. The failure pattern is consistent: an automation is built against
          the current state of the process it replaces, without accounting for the variability, edge
          cases, and interface dependencies that define process behavior under real-world conditions.
          The automation works in the clean case. It breaks in the cases that matter. This paper
          examines the structural causes of automation fragility, presents five design principles
          for durable automation, and argues that the goal of automation is not to eliminate human
          involvement — but to restrict it to the decisions that genuinely require it.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Systems Design</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['Workflow Automation', 'Process Design', 'Systems Architecture', 'Robustness', 'Edge Case Handling', 'Operational Excellence'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const PRINCIPLES = [
  { num: '01', title: 'Automate the Process, Not the Current Behavior', desc: 'The most common automation error is automating what the process currently does rather than what it should do. Current behavior incorporates workarounds, informal compensations, and accommodations to upstream failures that have accumulated over time. Automating current behavior makes those workarounds permanent. The correct approach is to define the intended process behavior before automation — and to use the automation exercise as the opportunity to redesign the process, not just accelerate it.' },
  { num: '02', title: 'Design Explicitly for the Edge Case', desc: 'The clean case is easy to automate. The edge case — the input that doesn\'t match the expected format, the exception that the standard path doesn\'t handle, the upstream dependency that returns an unexpected state — is where automations fail. Edge cases are not rare; they are the normal behavior of real-world systems under real-world conditions. Robust automation does not treat edge cases as out-of-scope. It routes them to defined handling paths.' },
  { num: '03', title: 'Build Observability In, Not On', desc: 'An automation without observability is a black box that fails invisibly. The failure mode is not a crash or an error message — it is silent incorrect processing that produces wrong outputs downstream before anyone notices. Observability — logging, monitoring, alerting — must be designed into the automation at build time, not retrofitted after the first production incident. Measure what the automation does, not just whether it runs.' },
  { num: '04', title: 'Define the Human Handoff Explicitly', desc: 'The goal of automation is not to eliminate human involvement — it is to reserve human judgment for decisions that genuinely require it. Every automation should have a defined handoff: the conditions under which the automation escalates to a human, the information it provides at escalation, and the path by which the human\'s decision re-enters the automated flow. Automations without defined handoffs fail catastrophically when they encounter conditions outside their design envelope.' },
  { num: '05', title: 'Document the Assumptions, Not Just the Behavior', desc: 'Automation documentation typically describes what the automation does. What it almost never describes is what the automation assumes — about input format, about upstream system behavior, about the data model it depends on. When those assumptions are violated, the automation breaks in ways that are opaque to anyone who didn\'t write it. Document the assumptions explicitly, as constraints, so that changes to upstream systems can be evaluated against automation dependencies before deployment.' },
]

function PrinciplesDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Five Principles of Durable Automation</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {PRINCIPLES.map((p) => (
          <div key={p.num} style={{ background: 'var(--black)', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '1.4rem', color: 'var(--orange)', opacity: 0.4, lineHeight: 1, flexShrink: 0 }}>{p.num}</div>
            <div>
              <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '0.92rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.4rem' }}>{p.title}</div>
              <div style={{ fontSize: '0.81rem', color: 'var(--mid)', lineHeight: 1.75 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>The Fragility Pattern</h2>
        <div className="article-prose">
          <p>The lifecycle of a fragile automation follows a recognizable arc. The automation is built against a specific, well-understood instance of the process it is replacing. It works reliably in that instance. It is declared a success. It is deployed to production. And then, over a period that varies from weeks to months depending on the variability of the real-world process, it begins encountering conditions it was not designed for.</p>
          <p>The inputs arrive in unexpected formats. The upstream system that the automation depends on changes its API. A business rule that the automation encoded is updated by the process owner without awareness that the automation exists. An edge case appears that the automation's path structure cannot route. Each of these events produces a failure — sometimes a hard failure with an error message, more often a silent failure that produces wrong output without any visible signal.</p>
          <p>The organization's response is typically to patch the failure — to add a conditional, to extend the exception handling, to build a workaround. The automation grows. Its behavior becomes harder to reason about. The patches accumulate. Eventually the automation is more expensive to maintain than the process it replaced would have been — and the organization has no clear path back to the original process because dependencies have formed around the automation's output.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Five Principles of Durable Automation</h2>
        <div className="article-prose">
          <p>Durable automation is not automation that never fails. It is automation that fails gracefully, observably, and recoverably — and that is designed from the outset with the assumption that it will encounter conditions its builders did not anticipate. The five principles below are design commitments, not best-practice guidelines. Systems that violate them are fragile by design.</p>
        </div>
        <PrinciplesDiagram />
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>The Interface Problem</h2>
        <div className="article-prose">
          <p>The most common source of automation fragility is not internal design failure. It is interface failure — the automation's dependencies on upstream and downstream systems that change independently of the automation itself. An automation that was correctly designed against the interface it depends on becomes incorrectly designed when that interface changes, without any change to the automation itself.</p>
          <p>This is the interface problem in workflow automation: the system works correctly at build time and fails correctly at a later time without anyone having made a mistake. The interface changed. The automation didn't know. Nobody knew to update the automation. The failure surfaces when the automation processes real data under the new interface conditions.</p>
          <p>The mitigation is not to prevent interface changes — that is neither possible nor desirable. It is to make the automation's interface dependencies explicit, documented, and monitored. When upstream interfaces are versioned and the automation's dependency on a specific version is documented, interface changes become a managed event rather than a surprise failure. This requires the organization to treat automation as infrastructure — with the same interface contract discipline that external systems demand.</p>
        </div>
        <div className="article-pullquote">
          <p>"Automation that works perfectly in controlled conditions and breaks unpredictably in production is not robust automation. It is a liability wearing the appearance of an asset."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Human-in-the-Loop as Design Feature</h2>
        <div className="article-prose">
          <p>The aspiration of full automation — eliminating human involvement entirely — is frequently the source of automation fragility. Systems designed around full automation are brittle precisely because they have no graceful degradation path. When the automation encounters a condition it cannot handle, it has no escalation path. It fails, or it produces wrong output, because it was not designed with a human handoff in mind.</p>
          <p>The alternative is to treat human-in-the-loop not as a failure of automation ambition but as a design feature. The automation handles the cases it handles well. When it encounters a case it cannot handle reliably, it escalates to a human — with the context the human needs to make the decision, and with a clear path for the human's decision to re-enter the automated flow.</p>
          <p>This architecture is more robust, more maintainable, and more aligned with the actual goal of automation: not to eliminate human judgment, but to reserve it for the decisions that genuinely require it. The organizations that automate most successfully are the ones that are clearest about which decisions those are — and build their automations accordingly.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Hammer, M. &amp; Champy, J. (1993). <em>Reengineering the Corporation: A Manifesto for Business Revolution</em>. HarperBusiness.</li>
          <li>Davenport, T. H. (1993). <em>Process Innovation: Reengineering Work through Information Technology</em>. Harvard Business School Press.</li>
          <li>Norman, D. A. (1988). <em>The Design of Everyday Things</em>. Basic Books.</li>
          <li>Winograd, T. &amp; Flores, F. (1986). <em>Understanding Computers and Cognition</em>. Ablex Publishing.</li>
          <li>Hollnagel, E. (2009). <em>The ETTO Principle: Efficiency-Thoroughness Trade-Off</em>. Ashgate Publishing.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Automations breaking<br /><span>faster than you build them?</span></h3>
      <p>I design workflow automations that are built for real-world conditions — with explicit edge case handling, observability, and human handoffs where they matter. Let's talk.</p>
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

export default function ArticleWorkflowAutomation() {
  usePageMeta({
    title: 'Workflow Automation Done Right — Jay Burgess',
    description: 'Most automations break because they were designed for the clean case. Five principles for building workflow automations that survive real-world conditions.',
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
