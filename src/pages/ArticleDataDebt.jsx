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
        <div className="article-eyebrow">Article · Data Infrastructure · April 2026</div>
        <h1 className="article-title">
          The Organizational Cost of Data Debt: How Unstructured Information Erodes Strategic Decisions
        </h1>
        <div className="article-abstract">
          Data debt — the accumulation of unstructured, undocumented, or inaccessible organizational information —
          is rarely treated with the urgency it deserves until a strategic decision fails for lack of reliable
          information. This paper defines data debt, distinguishes it from technical debt in both origin and
          consequence, traces four structural pathways through which it erodes organizational capability, and
          proposes a remediation framework grounded in information architecture rather than data engineering.
          The central argument is that data debt is a leadership and governance problem before it is a technology problem.
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
            <div className="article-meta-val">Data Infrastructure</div>
          </div>
          <div className="article-meta-item">
            <div className="article-meta-label">Read Time</div>
            <div className="article-meta-val">7 min</div>
          </div>
        </div>
        <div className="article-keywords">
          {['Data Debt', 'Information Architecture', 'Data Governance', 'Strategic Decision-Making', 'Data Quality', 'AI Readiness'].map((k) => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const DEBT_BARS = [
  { label: 'Year 1', height: 15 },
  { label: 'Year 2', height: 28 },
  { label: 'Year 3', height: 48 },
  { label: 'Year 4', height: 74 },
  { label: 'Year 5', height: 100 },
]

function DebtDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Data Debt Accumulation Over Time (Relative Cost Index)</div>
      <div className="debt-diagram">
        {DEBT_BARS.map((b) => (
          <div key={b.label} className="debt-bar-col">
            <div
              className="debt-bar"
              style={{ height: `${b.height}%` }}
            />
            <div className="debt-bar-label">{b.label}</div>
          </div>
        ))}
      </div>
      <div style={{ fontSize: '0.75rem', color: 'var(--dim)', fontStyle: 'italic' }}>
        Data debt compounds non-linearly. The cost to remediate Year 5 debt is not 5× Year 1 — it is an order of magnitude higher due to downstream dependencies, integration complexity, and institutional knowledge loss.
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
        <h2>Introduction</h2>
        <div className="article-prose">
          <p>Every organization accumulates information. Very few organizations manage it. The gap between those two facts is data debt: the growing body of organizational knowledge that exists somewhere in the system — in email threads, in ad hoc spreadsheets, in the institutional memory of employees who may or may not still be with the company — but cannot be reliably accessed, queried, or acted upon at the moment of a decision.</p>
          <p>The concept borrows from Ward Cunningham's technical debt framework, but the mechanism is distinct. Technical debt accrues from implementation shortcuts that increase future maintenance cost. Data debt accrues from governance shortcuts — failing to structure, document, or index information at the point of creation — and the cost it generates is not maintenance cost. It is decision quality cost.</p>
          <p>Organizations carrying significant data debt consistently make slower, less accurate strategic decisions — not because the relevant information doesn't exist, but because it cannot be reliably found, or cannot be trusted when found. The gap is not between having data and not having data. It is between having data and being able to use it.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Defining Data Debt</h2>
        <div className="article-prose">
          <p>Data debt is not the same as having bad data. Bad data — inaccurate, outdated, or duplicated records — is a data quality problem. Data debt is a structural problem: information that may be accurate but exists in a form, location, or format that prevents it from being reliably accessed and used.</p>
          <p>Four manifestations are common in organizational systems. <strong>Unstructured accumulation:</strong> information created and stored without schema, taxonomy, or consistent format — accurate but unqueryable at scale. <strong>Documentation debt:</strong> processes, decisions, and institutional knowledge held informally in the heads of key personnel rather than captured in accessible form. <strong>Integration debt:</strong> data that exists in multiple systems without reliable linkage — accurate in isolation, unusable in combination. <strong>Access debt:</strong> data that exists and is structured but is practically inaccessible due to permissions architecture, tooling limitations, or the absence of expertise required to query it.</p>
          <p>All four share a common characteristic: the information is present. The organizational capability to use it is not. And unlike bad data — which is visible in incorrect outputs — data debt is invisible until someone needs the information and cannot find it.</p>
        </div>
        <div className="article-pullquote">
          <p>"Data debt is not a storage problem. It is a retrieval problem — and retrieval fails not when data is absent, but when it cannot be found or trusted at the moment of decision."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Four Pathways of Organizational Cost</h2>
        <DebtDiagram />
        <div className="article-prose">
          <p><strong>Decision Latency.</strong> Organizations with significant data debt consistently experience longer time-to-decision on strategic questions. The information required for the decision exists, but the time required to locate, validate, and synthesize it extends decision cycles — sometimes by days, sometimes by weeks. In fast-moving markets, decision latency is a direct competitive disadvantage that compounds over time.</p>
          <p><strong>Analysis Confidence Degradation.</strong> When analysts cannot trust that they have accessed all relevant information — when the answer to "what do we know about this?" is "it depends on whether we've found it all" — analysis confidence degrades. Decisions get hedged. Recommendations get qualified with caveats that reflect information uncertainty rather than genuine strategic ambiguity. The organization systematically underacts relative to the information it actually possesses.</p>
          <p><strong>Onboarding and Knowledge Transfer Cost.</strong> Data debt makes institutional knowledge fragile. When the information required to understand a process, product, or customer relationship lives in undocumented form, it must be transferred person-to-person — which is slow, lossy, and vulnerable to attrition. Every departure of a senior employee extracts more value from an organization carrying data debt than from one with structured information architecture.</p>
          <p><strong>AI System Quality Ceiling.</strong> Increasingly, organizational data serves as the training and retrieval substrate for AI systems. An organization's AI capability is bounded by the quality and accessibility of its information architecture. Data debt creates a hard ceiling on AI system performance that cannot be engineered around — it can only be resolved by addressing the underlying information structure. This is the failure mode most organizations discover too late.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Why Engineering Alone Won't Fix It</h2>
        <div className="article-prose">
          <p>The instinct when confronting data debt is to purchase technology. A new data warehouse. A better BI tool. An AI-powered search layer. These investments are not worthless — but they are consistently insufficient when applied before the underlying information architecture problem is addressed.</p>
          <p>Technology can make structured information more accessible. It cannot make unstructured information structured. It can improve retrieval from indexed data. It cannot index data that was never organized. It can accelerate analysis of clean, connected data. It cannot connect data that was never integrated.</p>
          <p>The governance failure that created the data debt does not disappear when new tooling is acquired. New data continues to arrive in unstructured form. Documentation continues to live informally. Systems continue to operate without integration. The tooling layer operates on top of the architecture problem — it does not resolve it.</p>
        </div>
        <div className="article-pullquote">
          <p>"Most data remediation efforts begin with tool selection. This is why most of them fail. The architecture must precede the tooling — and the governance must precede the architecture."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>A Remediation Framework</h2>
        <div className="article-prose">
          <p>Effective remediation proceeds in three phases, each of which is a prerequisite for the next.</p>
          <p><strong>Phase 1 — Mapping.</strong> Before any technology decision, map where organizational information lives: in what form, with what access conditions, and with what quality characteristics. This is an information audit, not a data migration. The output is a complete taxonomy of organizational knowledge assets — structured and unstructured, accessible and inaccessible — that makes the debt visible as a countable, prioritizable problem rather than a vague organizational feeling.</p>
          <p><strong>Phase 2 — Architecture.</strong> Design the information architecture the organization needs before selecting tools to implement it. Schema standards, documentation requirements, integration patterns, and access model must be defined at the architecture level. Organizations that skip this step select tools that are well-suited to the information architecture they wish they had, and poorly suited to the one they actually have.</p>
          <p><strong>Phase 3 — Governance.</strong> Data debt is a governance problem. It accrues when information creation is not paired with information management obligations. Remediation requires establishing and enforcing information governance at the point of creation — not retrospectively applied to the accumulation. This is the phase that requires leadership commitment rather than engineering effort, which is why it is the phase most frequently deferred.</p>
          <p>Organizations that complete all three phases build the information infrastructure that enables reliable decision-making, knowledge retention, and AI capability. Organizations that stop at Phase 1 or Phase 2 have done the analysis without making the structural change — which means the debt continues to accumulate while they report on it.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Cunningham, W. (1992). The WyCash Portfolio Management System. <em>OOPSLA Experience Report</em>.</li>
          <li>Redman, T. C. (2008). <em>Data Driven: Profiting from Your Most Important Business Asset</em>. Harvard Business Press.</li>
          <li>DAMA International. (2017). <em>DAMA-DMBOK: Data Management Body of Knowledge</em> (2nd ed.).</li>
          <li>Laney, D. (2018). <em>Infonomics: How to Monetize, Manage, and Measure Information as an Asset</em>. Bibliomotion.</li>
          <li>Davenport, T. H. &amp; Prusak, L. (1998). <em>Working Knowledge: How Organizations Manage What They Know</em>. Harvard Business School Press.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Dealing with data<br /><span>you can't trust?</span></h3>
      <p>I diagnose and resolve data architecture problems — from unstructured accumulation to integration debt to AI readiness gaps. Let's talk about what's blocking your organization.</p>
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

export default function ArticleDataDebt() {
  usePageMeta({
    title: 'The Organizational Cost of Data Debt — Jay Burgess',
    description:
      'Data debt is not a storage problem — it is a decision-making problem. How unstructured information erodes strategic decisions and a framework for remediation.',
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
