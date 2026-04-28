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
          The Handoff Problem: Building Systems That Run Without Their Architect
        </h1>
        <div className="article-abstract">
          The most common failure mode of consulting and contracting engagements — and a significant
          source of failure in internal engineering projects — is not technical failure. It is handoff
          failure: the moment at which the people who built a system pass operational responsibility
          to the people who will run it, and the running team discovers that what they received is
          not what they can maintain. This paper defines the handoff problem, traces its structural
          causes, identifies the four properties that distinguish systems built for handoff from systems
          built for their builders, and argues that the ability to deliver complete, operational,
          independently runnable systems is a distinct engineering competency — one that most
          organizations neither require nor reward, to their significant operational cost.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Technical Leadership</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['System Handoff', 'Technical Documentation', 'Knowledge Transfer', 'Operational Readiness', 'Engineering Leadership', 'Consulting Delivery'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const HANDOFF_PROPERTIES = [
  { num: '01', title: 'Operational Documentation', desc: 'Documentation that enables a qualified operator to run the system without access to its builders. Not code comments, not architectural diagrams — operational documentation: how to start and stop the system, how to diagnose common failure modes, how to perform routine maintenance, how to escalate when standard procedures are insufficient. If this documentation does not exist, the system is not complete. It is a prototype with a deployment.' },
  { num: '02', title: 'Explicit Dependency Map', desc: 'A complete, accurate, current map of every external system, service, API, credential, and configuration value that the system depends on to function. In production, systems fail at their dependencies — and operators who do not have a dependency map cannot diagnose dependency failures without reverse-engineering the system from scratch. The dependency map is not overhead. It is the operator\'s first diagnostic tool.' },
  { num: '03', title: 'Failure Mode Playbook', desc: 'A structured guide to the system\'s known failure modes: what they look like, what causes them, how to diagnose them, and how to resolve them. Every system that is built encounters failure modes during development. The builders develop the knowledge to recognize and resolve them. The handoff problem is that this knowledge does not transfer automatically. The failure mode playbook is the mechanism of transfer.' },
  { num: '04', title: 'Update and Maintenance Protocol', desc: 'A documented process for the operations that will recur after handoff: how to update the system, how to update the knowledge base or data that the system depends on, how to add or remove users, how to scale capacity, how to apply security patches. Systems without maintenance protocols are maintained by improvisation — which is inconsistent, error-prone, and produces undocumented system state that compounds future maintenance difficulty.' },
]

function PropertiesDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Four Properties of Handoff-Ready Systems</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {HANDOFF_PROPERTIES.map((p) => (
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
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>What the Handoff Problem Is</h2>
        <div className="article-prose">
          <p>A system is delivered. It works. The handoff meeting is held. The builders leave. Three months later, the system fails in a way that was not anticipated. The operators cannot diagnose the failure without calling the builders. The builders are not available, or are available at consulting rates, or have moved on to other projects and no longer have the context required to help quickly. The system is down, and the people responsible for running it cannot run it.</p>
          <p>This is the handoff problem. It is not caused by malice. It is caused by a structural gap between the knowledge required to build a system and the knowledge required to operate one — and the consistent failure to treat knowledge transfer as a first-class deliverable of the building process.</p>
          <p>Builders accumulate operational knowledge about a system during the course of building it: the failure modes they encountered and resolved, the configuration decisions they made and why, the edge cases the system handles and the ones it does not. This knowledge is not documented because it is not perceived as documentation — it is the background knowledge within which the builder operates. When the builder leaves, the knowledge leaves with them.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Why Handoff Fails</h2>
        <div className="article-prose">
          <p>The handoff problem has three structural causes that are independent of individual competence or intent. <strong>Knowledge asymmetry:</strong> builders know the system in a way that operators do not and cannot without significant investment in system exploration. The operational knowledge that makes the builder effective is largely tacit — embedded in pattern recognition and diagnostic intuition rather than explicit procedures. It transfers poorly through documentation and almost not at all through brief handoff meetings.</p>
          <p><strong>Delivery incentives:</strong> projects are evaluated on delivery — on whether the system was built and deployed on schedule, within budget, and to specification. Operational readiness — whether the system can be operated, maintained, and evolved by a team that did not build it — is rarely part of the delivery evaluation. The incentive is to ship the system, not to ship the operational knowledge required to run it.</p>
          <p><strong>Scope definition:</strong> most project scopes define what the system will do, not what the operators of that system will need to know. The deliverable is the system. The operational documentation, the failure mode playbook, the maintenance protocol — these are not in scope unless they are explicitly specified as deliverables. They are not specified because the people who define scope often do not have the operational experience to know they are needed until they are not there.</p>
        </div>
        <div className="article-pullquote">
          <p>"A system that works is not a complete deliverable. A system that works and can be operated, diagnosed, and maintained by a team that did not build it — that is a complete deliverable."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Four Properties of Handoff-Ready Systems</h2>
        <div className="article-prose">
          <p>Systems built for handoff share four properties that are absent in systems built primarily for deployment. These are not documentation checklist items — they are architectural commitments that must be made during the build, not assembled in the final week before delivery.</p>
        </div>
        <PropertiesDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>The first test of handoff readiness is simple: can a qualified operator who did not build the system diagnose and resolve a production incident within the standard incident response window, using only the handoff materials provided? If not, the handoff is not complete — regardless of how impressive the system's functionality is.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Building Handoff In, Not On</h2>
        <div className="article-prose">
          <p>Handoff readiness cannot be assembled after the fact. The documentation can be written at the end. The failure mode playbook can be compiled from incident logs. The dependency map can be reverse-engineered from the codebase. But systems in which these artifacts are built retrospectively are consistently less reliable as operational guides than systems in which they are developed alongside the system itself — because retrospective documentation reflects what the builder remembers, not what the operator will encounter.</p>
          <p>The operational documentation is most accurate when it is written by the builder at the moment of first encountering the operational decision — when the context for why the decision was made is fresh, when the failure modes that were considered and rejected are still visible, when the configuration choices are explained by the conditions that produced them rather than reconstructed from their results.</p>
          <p>This requires treating documentation as a concurrent deliverable rather than a final deliverable — which requires project structures and incentive systems that reward operational readiness alongside functional completion. In organizations that have made this shift, handoff failures decrease significantly — not because the builders are more skilled, but because the definition of skill includes the ability to leave behind something that runs without you.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>Handoff as the True Measure of Delivery Quality</h2>
        <div className="article-prose">
          <p>The quality of a delivered system is not best measured at the moment of delivery. It is best measured six months after delivery, when the original builders are no longer available and the operational team is managing the system through its first production challenges. At that moment, the quality of the handoff materials is the quality of the delivery — because the system's operational value is entirely determined by the operators' ability to keep it running, extend it, and diagnose it when it fails.</p>
          <p>Organizations that measure delivery quality at deployment and do not measure it at six months are systematically unable to evaluate their delivery capability accurately. They are measuring the quality of the demo, not the quality of the operational asset. The gap between those two measurements is the organizational cost of the handoff problem.</p>
          <p>The most important question to ask at the end of any system delivery is not "does it work?" It is "can you run it without us?" If the answer is yes, the delivery is complete. If the answer is "mostly" or "we'll figure it out," the delivery has not yet produced its operational value — and the cost of completing it will fall on the operators rather than the builders.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Nonaka, I. &amp; Takeuchi, H. (1995). <em>The Knowledge-Creating Company</em>. Oxford University Press.</li>
          <li>Polanyi, M. (1966). <em>The Tacit Dimension</em>. Doubleday.</li>
          <li>Beyer, B. et al. (2016). <em>Site Reliability Engineering</em>. O'Reilly Media.</li>
          <li>Kim, G. et al. (2018). <em>The Unicorn Project</em>. IT Revolution Press.</li>
          <li>DeMarco, T. &amp; Lister, T. (1999). <em>Peopleware: Productive Projects and Teams</em> (2nd ed.). Dorset House.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Want a system that runs<br /><span>after I'm gone?</span></h3>
      <p>Every system I build includes the documentation, playbooks, and protocols for the team that inherits it. That's not a bonus — it's the deliverable. Let's talk.</p>
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

export default function ArticleHandoff() {
  usePageMeta({
    title: 'The Handoff Problem — Jay Burgess',
    description: 'A system that works is not a complete deliverable. Four properties that distinguish systems built for handoff from systems built for their builders.',
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
