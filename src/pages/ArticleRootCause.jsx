import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Systems Diagnosis</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Systems Diagnosis · April 2026</div>
        <h1 className="article-title">
          The Principal Architect's Method: How to Walk Into Any System and Find the Root Cause
        </h1>
        <div className="article-abstract">
          Most systems problems are diagnosed at the symptom layer. The pain is visible — a failing process,
          a degraded metric, a team perpetually behind schedule — and the instinct is to address the visible
          failure directly. This paper argues that symptom-layer remediation is the primary source of recurring
          organizational problems, and that root cause diagnosis requires a structured method that operates
          at the architectural level rather than the behavioral one. The diagnostic framework presented here
          has been applied across compliance systems, data infrastructure, AI deployments, and creative
          operations — in each case revealing that the presenting problem was not the actual problem.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Systems Diagnosis</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['Root Cause Analysis', 'Systems Thinking', 'Architecture Diagnosis', 'Problem Framing', 'Organizational Systems'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const PHASES = [
  { num: '01', label: 'Surface', title: 'Map What Is Visible', desc: 'Document the presenting symptoms without interpretation. What is failing? When did it start? Who is affected? What has been tried? The goal of this phase is completeness, not analysis. Premature interpretation at this stage is the most common diagnostic error — it constrains the search space before the evidence warrants it.' },
  { num: '02', label: 'Trace', title: 'Follow the Dependency Chain', desc: 'For each symptom, trace the dependency chain upstream. Every failure has preconditions. The question is not "why is this broken?" but "what does this depend on, and what does that depend on?" Trace until you reach a layer with no further upstream dependencies — or until you reach a layer that was not designed with awareness of the dependencies downstream.' },
  { num: '03', label: 'Separate', title: 'People Problems vs. Architecture Problems', desc: 'The single most diagnostic distinction in organizational systems. People problems require behavioral change. Architecture problems require structural change. Most problems diagnosed as people problems are architecture problems — the people are behaving rationally within a system that makes good outcomes structurally difficult. Applying behavioral solutions to architectural problems produces temporary improvement followed by regression.' },
  { num: '04', label: 'Verify', title: 'Test the Root Cause Hypothesis', desc: 'Before committing to a solution, test the root cause hypothesis. If the root cause is correct, then a specific intervention at that layer should propagate improvement downstream. Design the minimum viable test. If the hypothesis holds, proceed. If it does not, return to phase two — the dependency trace was incomplete.' },
]

function DiagnosticDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Four-Phase Diagnostic Framework</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {PHASES.map((p) => (
          <div key={p.num} style={{ background: 'var(--black)', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.25rem', flexShrink: 0 }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '1.4rem', color: 'var(--orange)', opacity: 0.5, lineHeight: 1 }}>{p.num}</div>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)' }}>{p.label}</div>
            </div>
            <div>
              <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '0.95rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.4rem' }}>{p.title}</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.75 }}>{p.desc}</div>
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
        <h2>The Symptom Trap</h2>
        <div className="article-prose">
          <p>When a process is failing, the organization feels the failure in a specific place. Errors accumulate. A team misses deadlines. A system produces inconsistent output. The natural response — and the response that most organizations default to — is to address the place where the failure is felt. Hire more people. Add more review steps. Tighten the process controls.</p>
          <p>This response is rational from the vantage point of the symptom. It is irrational from the vantage point of the system. The symptom is, almost always, the output of an upstream structural condition. Addressing the symptom without addressing the upstream condition produces a predictable result: temporary improvement, followed by regression, followed by a renewed search for behavioral explanations for a structural problem.</p>
          <p>The diagnostic skill that separates architects from operators is the ability to resist the symptom trap — to hold the presenting problem as a clue rather than a conclusion, and to follow the evidence upstream until the structural condition that produces the symptom is exposed. This is not a natural cognitive tendency. It requires a practiced method.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>The Four-Phase Diagnostic Framework</h2>
        <div className="article-prose">
          <p>Root cause diagnosis in complex organizational systems requires a structured approach that separates evidence collection from interpretation, and symptom-layer analysis from architecture-layer analysis. The four-phase framework below provides that structure.</p>
        </div>
        <DiagnosticDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>The framework is sequential by design. Skipping Phase 1 — moving directly to interpretation before mapping the full symptom landscape — produces diagnoses that fit the first failure examined and miss systemic patterns. Skipping Phase 2 — addressing the symptom without tracing the dependency chain — produces behavioral solutions to structural problems. The sequence enforces diagnostic discipline that organizational urgency consistently pressures you to abandon.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>The Architecture-Behavior Distinction</h2>
        <div className="article-prose">
          <p>The most consequential diagnostic distinction — and the one most frequently collapsed in organizational settings — is the difference between architecture problems and behavior problems. It is consequential because the remediation for each is entirely different, and applying behavioral remediation to an architectural problem is not just ineffective. It is actively harmful: it assigns responsibility to individuals for outcomes that the system is producing structurally, and it depletes organizational trust in the diagnostic process when the behavioral intervention fails to hold.</p>
          <p><strong>Architecture problems</strong> exist in the structure of the system — in the absence of a necessary component, in a dependency that is not managed, in an interface that does not behave as its dependents assume. The people operating within an architecture problem are typically behaving rationally given the constraints they face. The problem is not their behavior. It is the constraints.</p>
          <p><strong>Behavior problems</strong> exist when the architecture is sound but the operation of that architecture is inconsistent with its design. They are genuine, but they are far less common as root causes than organizational instinct suggests. Most what appears as behavior problems — inconsistent process execution, recurring errors, resistance to change — is produced by architecture that makes consistent execution structurally difficult.</p>
        </div>
        <div className="article-pullquote">
          <p>"If the same behavior problem recurs after correction, the behavior is not the root cause. Something in the architecture is making the problematic behavior the path of least resistance."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Applied Diagnosis: Three Patterns</h2>
        <div className="article-prose">
          <p>The method produces consistent patterns across different organizational contexts. Three are worth naming explicitly because they recur with enough frequency to constitute a diagnostic vocabulary.</p>
          <p><strong>The Missing Layer.</strong> A system produces inconsistent output not because the output-generating process is flawed, but because a layer it depends on — a knowledge base, a data source, a coordination mechanism — does not exist in structured form. The system is drawing from informal, variable inputs and producing variable outputs. The presenting symptom is output inconsistency. The root cause is architectural absence. Remediation is layer construction, not process tightening.</p>
          <p><strong>The Broken Interface.</strong> Two systems that should be connected are not — or are connected in a way that drops data, delays propagation, or produces format mismatches. The presenting symptom is typically downstream data loss or workflow disruption. The root cause is interface failure. The behavioral response — manual reconciliation — patches the output without addressing the connection. Remediation is interface repair and monitoring.</p>
          <p><strong>The Accumulated Workaround.</strong> A system that was designed for a different scale or a different use case has been extended through accumulated informal workarounds. The original design holds for its original scope. The workarounds are fragile at the edges. The presenting symptom is unpredictable failure under novel conditions. The root cause is architectural debt — the system was never redesigned for its current role. Remediation is redesign, not additional workarounds.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>Diagnosis as Organizational Capability</h2>
        <div className="article-prose">
          <p>Root cause diagnosis is not a skill that organizations acquire incidentally. It requires a practiced method, the institutional authority to follow evidence to uncomfortable conclusions, and the willingness to treat the framing of a problem as itself a problem to be interrogated — not a given to be accepted.</p>
          <p>Organizations that develop this capability consistently solve problems once, at the structural level, and do not encounter the same failure in a different form six months later. Organizations that operate at the symptom layer consistently re-encounter the same structural problems wearing different symptomatic clothing — and spend organizational energy that should be building competitive capability on maintenance cycles that the structure of the system makes inevitable.</p>
          <p>The investment in diagnostic capability is not a consulting investment. It is a structural organizational investment — in the ability to distinguish building from patching, and to direct resources accordingly. The organizations I have seen do this well share a common characteristic: they have people who are authorized to ask "is this the actual problem?" and who have the method and the standing to follow that question wherever the evidence leads.</p>
        </div>
        <div className="article-pullquote">
          <p>"Walk in. Find the actual problem. Fix it at the structural level. Leave behind something that doesn't require you to come back. That is the whole method."</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Senge, P. M. (1990). <em>The Fifth Discipline: The Art and Practice of the Learning Organization</em>. Doubleday.</li>
          <li>Ohno, T. (1988). <em>Toyota Production System: Beyond Large-Scale Production</em>. Productivity Press.</li>
          <li>Meadows, D. H. (2008). <em>Thinking in Systems: A Primer</em>. Chelsea Green Publishing.</li>
          <li>Ackoff, R. L. (1999). <em>Re-Creating the Corporation: A Design of Organizations for the 21st Century</em>. Oxford University Press.</li>
          <li>Dekker, S. (2006). <em>The Field Guide to Understanding Human Error</em>. Ashgate Publishing.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Something broken<br /><span>that keeps coming back?</span></h3>
      <p>I walk in, find the structural cause, and fix it at the architecture layer — not the symptom layer. Let's talk about what's actually happening.</p>
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

export default function ArticleRootCause() {
  usePageMeta({
    title: 'The Principal Architect\'s Method: Root Cause Diagnosis — Jay Burgess',
    description: 'Most systems problems are diagnosed at the symptom layer. A structured framework for finding root causes at the architectural level.',
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
