import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Internal Infrastructure</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Internal Infrastructure · April 2026</div>
        <h1 className="article-title">
          Internal Tools as Strategic Infrastructure: Why How You Build for Yourself Predicts Everything
        </h1>
        <div className="article-abstract">
          Internal tooling — the systems, applications, and workflows an organization builds for its own
          operational use — is among the most diagnostic signals an engineering culture emits. Unlike
          customer-facing products, internal tools are built without the accountability pressure of external
          users, exposing the team's actual standards, architectural values, and investment logic. This paper
          argues that internal tools are not overhead but strategic infrastructure; that their quality is
          predictive of external product quality; and that the transition from ad hoc tooling to genuine
          organizational infrastructure requires specific architectural commitments that most organizations
          defer indefinitely.
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
            <div className="article-meta-val">Internal Infrastructure</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Read Time</div>
            <div className="article-meta-val">8 min</div>
          </div>
        </div>
        <div className="article-keywords">
          {['Internal Tools', 'Infrastructure', 'Engineering Culture', 'Platform Engineering', 'Systems Architecture', 'Technical Leadership'].map((k) => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const MATURITY_LEVELS = [
  {
    id: 'tool',
    label: 'Tool',
    title: 'The Point Solution',
    desc: 'A solution to a specific, immediate need. Built by one person, for one use case, in the minimum time required. Not designed to be maintained, not expected to be. Appropriate for genuinely one-time tasks — and only those. The failure mode of the Tool stage is longevity: tools that were built to be temporary frequently become permanent through organizational inertia, acquiring dependencies before they acquire any of the architectural properties that would make those dependencies safe.',
    indicators: ['Single author', 'No error handling', 'No documentation', 'No maintenance expectation', 'Specific inputs assumed'],
  },
  {
    id: 'utility',
    label: 'Utility',
    title: 'The Extended Tool',
    desc: 'A tool with extended life expectancy. Some assumptions have been made explicit, some edge cases handled. Used by more than its original author. Beginning to accumulate undocumented dependencies on environment, data format, and upstream system behavior. The Utility stage is where most internal tooling lives — and where it stops being improved. Utilities that should have become Platforms stay Utilities because the investment to formalize them is deferred until the cost of not doing so becomes undeniable.',
    indicators: ['Multiple users', 'Some edge case handling', 'Partial documentation', 'Informal dependencies', 'Implicit interface'],
  },
  {
    id: 'platform',
    label: 'Platform',
    title: 'The Intentional Interface',
    desc: 'A system with deliberate interface design — other systems or team members connect to it with defined contracts. Has a maintainer. Generates its own feature requests. The first stage where architectural decisions become difficult to reverse without breaking dependents. Platform stage is where interface discipline becomes non-negotiable: the interface you define now is the interface everyone builds on top of. Most organizations reach this stage too late, formalizing interfaces after the dependencies have already formed around informal ones.',
    indicators: ['Defined API contract', 'Named maintainer', 'Interface documentation', 'Multiple dependents', 'Change management'],
  },
  {
    id: 'infrastructure',
    label: 'Infrastructure',
    title: 'The Load-Bearing System',
    desc: 'A system that the organization depends on operationally, that other systems build on top of, and that outlives the team that built it. Requires the same architectural rigor as any production customer system: monitoring, SLOs, documented failure modes, runbooks, API versioning, and explicit deprecation protocols. The Infrastructure stage is not a designation that is applied to a system — it is a state that systems arrive at through organizational dependence, regardless of whether the architecture is ready for it.',
    indicators: ['SLO defined', 'Full monitoring', 'Runbooks documented', 'API versioning', 'On-call protocol', 'Deprecation policy'],
  },
]

function MaturitySpectrum() {
  const [active, setActive] = useState(0)
  return (
    <div className="maturity-spectrum">
      <div className="maturity-tabs">
        {MATURITY_LEVELS.map((level, i) => (
          <button
            key={level.id}
            className={`maturity-tab${active === i ? ' active' : ''}`}
            onClick={() => setActive(i)}
          >
            {level.label}
          </button>
        ))}
      </div>
      {MATURITY_LEVELS.map((level, i) => (
        <div key={level.id} className={`maturity-panel${active === i ? ' active' : ''}`}>
          <div className="maturity-panel-title">{level.title}</div>
          <div className="maturity-panel-desc">{level.desc}</div>
          <div className="maturity-indicators">
            {level.indicators.map((ind) => (
              <span key={ind} className="maturity-indicator">{ind}</span>
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

const COMMITMENTS = [
  {
    num: '01',
    title: 'Interface Before Implementation',
    desc: 'Before writing any implementation code, define the interface — the API, the data contract, the expected inputs and outputs. Tools built from implementation backward have interfaces shaped by implementation accidents. Interface-first design produces systems that other components can depend on without inheriting implementation fragility.',
  },
  {
    num: '02',
    title: 'Failure as a First-Class Concern',
    desc: 'Tools handle failure through implicit assumption. Infrastructure handles failure explicitly — with graceful degradation, clear error states, alerting, and fallback behavior. The moment an internal system becomes load-bearing, failure handling must become explicit. This is not optional overhead. It is the definition of infrastructure.',
  },
  {
    num: '03',
    title: 'Observability Before Scale',
    desc: 'The instinct is to add monitoring after something breaks. Infrastructure requires monitoring before scale — when instrumenting it is still cheap. Response time, error rates, dependency health, and usage patterns should be observable from the first production deployment, not retrofitted after an incident.',
  },
]

function CommitmentsDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — The Three Architectural Commitments for Infrastructure Transition</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {COMMITMENTS.map((c) => (
          <div key={c.num} style={{ background: 'var(--black)', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '1.5rem', color: 'var(--orange)', opacity: 0.4, lineHeight: 1, flexShrink: 0 }}>{c.num}</div>
            <div>
              <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.5rem' }}>{c.title}</div>
              <div style={{ fontSize: '0.83rem', color: 'var(--mid)', lineHeight: 1.75 }}>{c.desc}</div>
            </div>
          </div>
        ))}
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
        <h2>Introduction — The Diagnostic Signal</h2>
        <div className="article-prose">
          <p>When I walk into an organization and want to understand the quality of its engineering culture, I look at two things before I look at anything else: the internal tooling and the documentation. Both are built without the accountability pressure of external users. Both therefore reveal what the team actually believes about quality, maintainability, and investment horizon — not what the engineering principles document claims.</p>
          <p>Internal tools built for speed and convenience, never refactored, scaling through accretion of undocumented hacks — these tell me the team does not yet have the architectural maturity to build systems that compound. Internal tools built with API contracts, explicit error handling, monitoring, and documentation — these tell me a team that will build external products with the same discipline.</p>
          <p>This predictive relationship is not coincidental. The same architectural judgment calls that determine internal tool quality — abstraction discipline, state management, failure handling, interface design — are precisely the calls that determine external product quality. There is no version of a team that builds fragile internal tools and ships robust external products. The same judgment governs both.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>The Tool-to-Infrastructure Spectrum</h2>
        <div className="article-prose">
          <p>Internal systems exist on a maturity spectrum that runs from disposable point solutions to load-bearing organizational infrastructure. Most organizations have systems at every stage — and most have systems whose actual organizational role is at a higher maturity stage than their architecture. That gap is risk. Select each stage below to understand its characteristics and failure modes.</p>
        </div>
        <MaturitySpectrum />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>The transitions between stages — Tool to Utility, Utility to Platform, Platform to Infrastructure — are not automatic. They require explicit architectural investment that most teams defer because it feels like overhead relative to the immediate problem being solved. The cost of that deferral is not visible until a system is already load-bearing and the architectural debt has become organizational risk.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Why Internal Becomes External</h2>
        <div className="article-prose">
          <p>The most important dynamic in internal tool maturity is one that most organizations do not anticipate: the speed at which internal tools become external-facing, either directly or through the capabilities they enable. Internal data pipelines become the substrate for customer-facing analytics. Internal workflow systems become the operational backbone for customer-facing services. Internal AI tools become the engine behind features that customers pay for.</p>
          <p>When this transition happens — and for most organizations at scale, it does — the architectural quality of the internal system determines the quality of the external capability. Customers experience the consequences of architectural decisions that were made when nobody was watching. The fragility that was acceptable when only internal users experienced it becomes a reliability problem when external users do.</p>
        </div>
        <div className="article-pullquote">
          <p>"The internal tools you build are not practice. They are the foundation. What you build on top of a fragile foundation is itself fragile — regardless of how carefully you build it."</p>
        </div>
        <div className="article-prose">
          <p>This is the strategic argument for treating internal tooling as infrastructure investment rather than overhead: the quality compounds into every system built on top of it. Organizations that make the investment early build on a foundation that gets stronger over time. Organizations that defer it build on a foundation that requires increasing maintenance to hold its shape.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>The Three Architectural Commitments</h2>
        <div className="article-prose">
          <p>The transition from Utility to Platform — and from Platform to Infrastructure — requires three explicit architectural commitments. These are not best practices that can be applied partially. They are the conditions under which a system becomes safe to depend on.</p>
        </div>
        <CommitmentsDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>None of these commitments is technically complex. Interface definition, failure handling, and instrumentation are standard engineering practices. What makes them difficult in the context of internal tools is organizational will — the willingness to invest engineering time in a system that internal users are already working around rather than waiting for.</p>
          <p>The instinct is to wait until the system is stable before investing in its architecture. This is precisely backwards. Architecture makes systems stable. Waiting for stability before investing in architecture produces systems that are never quite stable enough to be worth investing in — and never quite fragile enough to force the investment.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>Practical Implications</h2>
        <div className="article-prose">
          <p>The maturity model is not an aspiration framework. It is a diagnostic and planning tool. Every internal system carries an implicit maturity level, and the gap between its current maturity and the maturity its actual organizational role requires is a risk that compounds over time.</p>
          <p>The practical heuristic for identifying infrastructure is <strong>operational dependence</strong>: the moment a human being cannot do their job without a system, that system is infrastructure — regardless of how it was originally built. At that point, the architectural debt accumulated during earlier stages becomes organizational risk, whether or not the organization has chosen to recognize it as such.</p>
          <p>Teams that treat all internal tooling as disposable accumulate brittleness that eventually forces expensive rewriting under pressure. Teams that over-engineer every utility spend engineering capacity on infrastructure that nobody depends on. The skill is knowing which tools are already functioning as infrastructure — or will be — and making the appropriate architectural investment before the gap between maturity and role becomes a production incident.</p>
          <p>The signal to watch is not system age or user count. It is the question every engineer on the team should be able to answer about every internal system: if this breaks at 2am, who is responsible, what do they do, and how do they know it broke? The systems for which that question has no clear answer are the systems that are infrastructure without the architecture of infrastructure — and they are where organizational risk is quietly accumulating.</p>
        </div>
        <div className="article-pullquote">
          <p>"Internal tools are not overhead. They are the most honest signal an engineering culture emits about its architectural values — and those values predict everything the organization will ever build."</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Cunningham, W. (1992). The WyCash Portfolio Management System. <em>OOPSLA Experience Report</em>.</li>
          <li>Kleppmann, M. (2017). <em>Designing Data-Intensive Applications</em>. O'Reilly Media.</li>
          <li>Beyer, B. et al. (2016). <em>Site Reliability Engineering: How Google Runs Production Systems</em>. O'Reilly Media.</li>
          <li>Newman, S. (2019). <em>Monolith to Microservices</em>. O'Reilly Media.</li>
          <li>Forsgren, N., Humble, J. &amp; Kim, G. (2018). <em>Accelerate: The Science of Lean Software and DevOps</em>. IT Revolution Press.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Internal systems<br /><span>holding you back?</span></h3>
      <p>I diagnose internal tool architecture, identify the gaps between current maturity and organizational dependence, and build the infrastructure that enables everything built on top of it.</p>
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

export default function ArticleInternalTools() {
  usePageMeta({
    title: 'Internal Tools as Strategic Infrastructure — Jay Burgess',
    description:
      'Internal tools are not overhead — they are a diagnostic signal. Why how you build for yourself predicts the quality of everything you will ever ship externally.',
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
