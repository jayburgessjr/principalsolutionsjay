import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Data Infrastructure</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Data Infrastructure · May 2026</div>
        <h1 className="article-title">
          The Data Readiness Test: Why Most Organizations Aren't Ready to Build AI — and How to Know If You Are
        </h1>
        <div className="article-abstract">
          The majority of enterprise AI projects that fail do not fail because the model was wrong.
          They fail because the data that feeds the model was wrong — inaccessible, inconsistent,
          ungoverned, or insufficient to support the use case that was approved for investment.
          Data readiness is the most reliable predictor of AI project success and the most
          systematically underdiagnosed variable in AI investment decisions. This paper defines
          four dimensions of data readiness, provides a structured assessment framework, and
          argues that the most valuable AI investment a data-immature organization can make is
          not an AI project — it is the infrastructure required to run one.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">May 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Data Infrastructure</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['Data Readiness', 'Data Infrastructure', 'AI Strategy', 'Data Quality', 'Data Governance', 'Enterprise AI'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const DIMENSIONS = [
  {
    num: '01',
    title: 'Accessibility',
    question: 'Can the system that needs the data actually get it?',
    desc: 'Data that exists but cannot be accessed programmatically at production latency is not useful for AI. This includes data trapped in PDFs, locked in legacy systems without API access, siloed in SaaS platforms that charge per-export, or governed by permissions structures that prevent the AI system from reading it at inference time. Accessibility is binary at the data level: data is either available to the system that needs it, at the latency that system requires, or it is not. A readiness assessment that counts data by volume without assessing programmatic accessibility is not a readiness assessment.',
  },
  {
    num: '02',
    title: 'Quality',
    question: 'Is the data accurate, complete, and consistent enough to support decisions?',
    desc: 'Data quality is the dimension organizations most frequently misassess — because quality is evaluated in the context of current use, not in the context of AI use. Data that is good enough for a human analyst to work with — because the analyst compensates for inconsistencies, knows which fields to ignore, and applies contextual judgment to interpret ambiguous values — is frequently not good enough for an AI system that cannot apply those compensating behaviors. The relevant quality standard is not "good enough for current use." It is "good enough to be the ground truth for an AI system operating at inference time without human review."',
  },
  {
    num: '03',
    title: 'Governance',
    question: 'Is there a documented owner who is accountable for this data\'s accuracy?',
    desc: 'Unowned data degrades. It degrades because no one is responsible for catching and correcting errors, because schema changes upstream propagate without notice, and because the organization has no mechanism for detecting quality degradation until a downstream system fails. AI systems trained or grounded on unowned data inherit its degradation trajectory — which means their reliability decreases over time at a rate proportional to how unmanaged their data sources are. Governance is not a compliance requirement. It is the mechanism that keeps the data the AI depends on from becoming silently incorrect.',
  },
  {
    num: '04',
    title: 'Coverage',
    question: 'Does the data actually represent the problem the AI is being built to solve?',
    desc: 'Coverage failures are the most dangerous data readiness failures because they are the hardest to diagnose. A system can be fully accessible, high quality, and well-governed while being entirely unrepresentative of the use case it is being asked to support. This happens when data collection was designed around historical reporting requirements rather than the decision surfaces the AI will be operating on — which is almost always the case in organizations where AI investment is a recent strategic priority but data collection predates it by years. The question is not whether data exists. It is whether the data that exists represents the right things.',
  },
]

function DimensionsDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Four Dimensions of Data Readiness</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {DIMENSIONS.map((d) => (
          <div key={d.num} style={{ background: 'var(--black)', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '1.4rem', color: 'var(--orange)', opacity: 0.4, lineHeight: 1, flexShrink: 0 }}>{d.num}</div>
            <div>
              <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '0.92rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.25rem' }}>{d.title}</div>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.65rem', color: 'var(--orange)', letterSpacing: '0.04em', marginBottom: '0.6rem' }}>{d.question}</div>
              <div style={{ fontSize: '0.81rem', color: 'var(--mid)', lineHeight: 1.75 }}>{d.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

const SIGNALS = [
  { signal: 'Data is in spreadsheets updated manually by individuals', implication: 'Accessibility failure. No programmatic access at inference latency.' },
  { signal: 'Different teams report different numbers for the same metric', implication: 'Quality failure. No single source of truth; ground truth is undefined.' },
  { signal: '"We\'re not sure who owns that data anymore"', implication: 'Governance failure. Degradation is unmonitored and already in progress.' },
  { signal: 'Historical data reflects old processes, not current ones', implication: 'Coverage failure. AI trained on it will encode obsolete behavior.' },
  { signal: 'Data lives in a system the AI cannot access without an export', implication: 'Accessibility failure. Exports at inference time are not a production architecture.' },
  { signal: 'Fields are sometimes empty, sometimes null, sometimes "N/A"', implication: 'Quality failure. Inconsistent representation requires compensating logic at every consumer.' },
]

function SignalTable() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 2 — Readiness Signals and Their Implications</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        <div style={{ display: 'flex', gap: '1px', background: 'var(--rule)' }}>
          <div style={{ flex: 1, background: 'var(--panel)', padding: '0.75rem 1rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)' }}>Signal</div>
          <div style={{ flex: 1, background: 'var(--panel)', padding: '0.75rem 1rem', fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.62rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)' }}>Implication</div>
        </div>
        {SIGNALS.map((s, i) => (
          <div key={i} style={{ display: 'flex', gap: '1px', background: 'var(--rule)' }}>
            <div style={{ flex: 1, background: 'var(--black)', padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--mid)', lineHeight: 1.6 }}>{s.signal}</div>
            <div style={{ flex: 1, background: 'var(--black)', padding: '0.875rem 1rem', fontSize: '0.8rem', color: 'var(--orange)', lineHeight: 1.6 }}>{s.implication}</div>
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
        <h2>Why AI Projects Die at the Data Layer</h2>
        <div className="article-prose">
          <p>The post-mortem for a failed AI project almost always identifies the same proximate cause: the data wasn't good enough. Inconsistent labels. Missing fields. Inaccessible systems. Historical records that didn't reflect current process. The finding is correct as far as it goes — but it misses the upstream cause, which is that no one assessed data readiness before the project was approved.</p>
          <p>This is not an oversight. It is a structural feature of how AI investment decisions are made. The business case for an AI project is made at the use case layer: the AI will reduce processing time, improve decision accuracy, automate a currently manual workflow. The data infrastructure required to support that use case is evaluated, if it is evaluated at all, as a technical dependency — a checkbox on a project plan rather than a gating assessment that determines whether the investment is viable.</p>
          <p>The consequence is a consistent pattern: organizations approve AI projects on the strength of the use case, discover data readiness failures during implementation, spend the majority of the project timeline and budget on data remediation work that was not scoped, and deliver either a degraded system or no system at all. The project is described as an AI failure. It was a data readiness failure that was never diagnosed because no one ran the test before the investment was made.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>The Four Dimensions of Data Readiness</h2>
        <div className="article-prose">
          <p>Data readiness is not a single variable. An organization can have highly accessible, well-governed data that is too low quality to train on. It can have high-quality, well-covered data that is entirely inaccessible to the systems that need it at inference time. Each dimension must be assessed independently — because failure in any one of them is sufficient to make a proposed AI use case non-viable without remediation, regardless of how strong the others are.</p>
        </div>
        <DimensionsDiagram />
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Reading the Signals</h2>
        <div className="article-prose">
          <p>Data readiness failures announce themselves before a project begins if you are listening for the right signals. The following table maps common organizational signals to the readiness dimension they indicate. These signals are audible in the first conversation about a proposed AI use case — they do not require deep technical investigation to surface. They require asking the right questions and resisting the pressure to treat concerning answers as surmountable implementation details.</p>
        </div>
        <SignalTable />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>Each signal in this table, if present, is a diagnostic finding — not a risk flag to be managed. A risk flag is something that might become a problem. A diagnostic finding is evidence that the problem already exists. Organizations that treat data readiness signals as risks to be managed in the implementation phase consistently underestimate the remediation cost, because the remediation is frequently not a project task — it is a precondition for the project.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>What Minimum Viable Data Readiness Looks Like</h2>
        <div className="article-prose">
          <p>Minimum viable data readiness is not perfect data. It does not require a fully mature data platform, a complete data catalog, or enterprise-grade governance across all domains. It requires four conditions to be true for the specific data sources that the proposed AI use case will depend on.</p>
          <p><strong>Programmatic accessibility at inference latency.</strong> The data can be queried or retrieved by the AI system at the speed required for the use case. If the use case requires real-time responses, the data must be available in milliseconds. If it requires nightly batch processing, daily availability is sufficient. The latency requirement is determined by the use case, not by what the data infrastructure can currently provide — and the gap between the two is a scoping input, not a project risk.</p>
          <p><strong>Documented quality standards with known defect rates.</strong> The organization knows what the data is supposed to contain, has measured how frequently it diverges from that standard, and has documented the compensation logic that downstream systems apply to handle the divergence. Unknown defect rates are more dangerous than known high defect rates, because known defect rates can be designed around and high defect rates can be disclosed as a constraint. Unknown defect rates produce systems that are wrong in ways that cannot be anticipated or mitigated.</p>
          <p><strong>An identified owner accountable for data accuracy.</strong> A specific person or team is responsible for the quality of each data source the AI will depend on, has the authority to correct errors in that source, and is aware that an AI system will be depending on their data's accuracy. This last condition is more important than it sounds: data owners who do not know that an AI system depends on their data do not factor AI-level quality requirements into their maintenance behavior.</p>
          <p><strong>Coverage validation against the actual decision surface.</strong> A sample of the data has been reviewed against the specific decisions or tasks the AI is being built to support — not against historical use cases that the data was designed to inform. Coverage validation requires knowing, in concrete operational terms, what the AI will be asked to do and verifying that the data represents those situations with sufficient frequency and accuracy.</p>
        </div>
        <div className="article-pullquote">
          <p>"The most expensive data work is data work that was not scoped because no one ran the readiness assessment before the project started. The second most expensive is data work that was scoped but underestimated for the same reason."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>The Honest Answer</h2>
        <div className="article-prose">
          <p>The most valuable output of a data readiness assessment is sometimes the conclusion that a proposed AI use case is not viable without infrastructure investment that was not in the original project scope. This is not a failure of the assessment. It is the assessment working correctly — surfacing a non-viability condition before investment is committed rather than after it is spent.</p>
          <p>Organizations resist this conclusion because it creates a gap between the AI strategy that was approved and the data infrastructure that can support it. That gap exists in most organizations pursuing AI investment — it is not a disqualifying condition. It is a sequencing problem. The question is whether the organization sequences correctly — data infrastructure first, AI use case second — or incorrectly, in the order that produces the expensive post-mortem.</p>
          <p>The organizations that sequence correctly build AI systems that work and compound in value over time. They do this not because they had better data to begin with, but because they diagnosed their data readiness honestly before committing to the use case — and built the foundation before the house. The organizations that sequence incorrectly build expensive lessons about what they should have built first. Both paths arrive at data infrastructure investment. Only one of them arrives there efficiently.</p>
          <p>Run the test. Before the kickoff. Before the vendor selection. Before the budget request. The four questions — can you access it, is it accurate, does someone own it, does it represent the right thing — take less than a week to answer with reasonable confidence. The project timeline they save is frequently measured in quarters.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Redman, T. (2008). <em>Data Driven: Profiting from Your Most Important Business Asset</em>. Harvard Business Press.</li>
          <li>Dama International. (2017). <em>DAMA-DMBOK: Data Management Body of Knowledge</em> (2nd ed.). Technics Publications.</li>
          <li>Sculley, D. et al. (2015). Hidden Technical Debt in Machine Learning Systems. <em>Advances in Neural Information Processing Systems 28</em>.</li>
          <li>Stonebraker, M. &amp; Ilyas, I. (2018). Data Integration: The Current Status and the Way Forward. <em>IEEE Data Engineering Bulletin</em>.</li>
          <li>Sambasivan, N. et al. (2021). "Everyone wants to do the model work, not the data work." <em>CHI Conference on Human Factors in Computing Systems</em>.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Not sure if your data is<br /><span>ready for AI?</span></h3>
      <p>I run data readiness assessments as part of every engagement — before the build, not during it. If you're evaluating an AI use case and want to know whether your data can support it, let's talk.</p>
      <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">
        Schedule a Call →
      </a>
    </section>
  )
}

function ArticleFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal AI Systems Architect · CEO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function ArticleDataReadiness() {
  usePageMeta({
    title: 'The Data Readiness Test — Jay Burgess',
    description: 'Most AI projects don\'t fail because the model is wrong. They fail because the data is wrong. Four dimensions of data readiness — and how to assess them before you build.',
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
