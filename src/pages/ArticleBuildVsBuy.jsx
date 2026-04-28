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
          Build vs. Buy in AI Infrastructure: A Decision Framework That Doesn't Lie to You
        </h1>
        <div className="article-abstract">
          The build vs. buy decision in AI infrastructure is among the most consequential and most poorly
          analyzed choices an organization makes during an AI investment cycle. The standard analysis —
          comparing upfront build cost against vendor licensing cost — is systematically biased toward
          vendor purchase in ways that generate expensive surprises at scale. This paper presents a
          decision framework that accounts for the full cost topology of each option, identifies the
          five variables that determine which choice generates more value at scale, and argues that the
          most costly outcome is not the wrong choice — it is a right choice made for the wrong reasons
          that cannot be revisited when circumstances change.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">AI Strategy</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">7 min</div></div>
        </div>
        <div className="article-keywords">
          {['Build vs Buy', 'AI Infrastructure', 'Vendor Selection', 'Make vs Buy', 'AI Strategy', 'Total Cost of Ownership'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const DIMENSIONS = [
  {
    id: 'differentiation',
    label: 'Differentiation',
    title: 'Is This Your Competitive Surface?',
    buildCase: 'If the capability is where your organization competes — if how you do this is a material source of differentiation — building preserves that differentiation. Buying gives your competitors access to the same capability on the same timeline. The relevant question is not "can we build it?" but "does it matter that we built it ourselves?"',
    buyCase: 'If the capability is necessary but not differentiating — compliance tooling, reporting infrastructure, standard workflow automation — buying captures the capability without the maintenance burden of a custom system in a non-differentiating domain.',
  },
  {
    id: 'data',
    label: 'Data Sensitivity',
    title: 'Can Your Data Leave Your Environment?',
    buildCase: 'Regulated industries, proprietary datasets, and systems processing sensitive customer information frequently cannot route data through third-party infrastructure. Build is not an option chosen for performance — it is required for compliance. The cost analysis is irrelevant if the vendor option is not legally available.',
    buyCase: 'If data sensitivity does not constrain vendor options, the buy case is strengthened significantly. Vendor infrastructure absorbs the operational overhead of scale, security patching, and uptime SLA maintenance — overhead that is genuinely expensive when it falls on internal teams.',
  },
  {
    id: 'velocity',
    label: 'Required Velocity',
    title: 'How Fast Does This Need to Move?',
    buildCase: 'Custom-built systems can be deployed at the exact scope required for immediate needs, without the integration overhead of configuring a vendor platform. For organizations with strong engineering capacity, initial time-to-deployment often favors build over the configuration and integration cycle of vendor onboarding.',
    buyCase: 'Vendor platforms provide capability that exists today, with the bugs already found and fixed by the vendor\'s other customers. For organizations with limited engineering bandwidth, buying accelerates time-to-value in ways that build cannot match — unless the build scope is tightly constrained.',
  },
  {
    id: 'maintenance',
    label: 'Maintenance Horizon',
    title: 'Who Maintains This for the Next Three Years?',
    buildCase: 'Custom systems require internal maintenance — bug fixes, dependency updates, security patches, feature evolution. This is a real cost that is consistently underestimated in build analyses. It is only justified when the team that builds the system has the capacity and the organizational mandate to maintain it indefinitely.',
    buyCase: 'Vendor maintenance is the most undervalued component of the buy case. The vendor absorbs the ongoing cost of keeping the system functional, secure, and current. For organizations without dedicated platform engineering capacity, this is frequently the decisive factor.',
  },
  {
    id: 'lock',
    label: 'Lock-In Tolerance',
    title: 'How Reversible Does This Need to Be?',
    buildCase: 'Custom systems are portable by definition — you own the code, the data model, and the integration architecture. This optionality has real value in domains where vendor landscape, pricing, or capability is likely to change materially over the decision horizon.',
    buyCase: 'Vendor lock-in is a real risk in AI infrastructure, where the pace of capability change means the vendor you select today may not be the best option in three years. If your vendor selection criteria include switching cost tolerance, the buy decision should include explicit analysis of migration complexity and data portability.',
  },
]

function DecisionTabs() {
  const [active, setActive] = useState(0)
  return (
    <div className="maturity-spectrum">
      <div className="maturity-tabs">
        {DIMENSIONS.map((d, i) => (
          <button key={d.id} className={`maturity-tab${active === i ? ' active' : ''}`} onClick={() => setActive(i)}>
            {d.label}
          </button>
        ))}
      </div>
      {DIMENSIONS.map((d, i) => (
        <div key={d.id} className={`maturity-panel${active === i ? ' active' : ''}`}>
          <div className="maturity-panel-title">{d.title}</div>
          <div style={{ display: 'flex', gap: '1px', background: 'var(--rule)', marginBottom: '0.5rem' }}>
            <div style={{ flex: 1, background: 'var(--black)', padding: '1rem' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', marginBottom: '0.5rem' }}>Build Case</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.75 }}>{d.buildCase}</div>
            </div>
            <div style={{ flex: 1, background: 'var(--panel)', padding: '1rem' }}>
              <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.6rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--dim)', marginBottom: '0.5rem' }}>Buy Case</div>
              <div style={{ fontSize: '0.82rem', color: 'var(--mid)', lineHeight: 1.75 }}>{d.buyCase}</div>
            </div>
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
        <h2>Why the Standard Analysis Fails</h2>
        <div className="article-prose">
          <p>The standard build vs. buy analysis compares two cost estimates: the internal development cost to build the capability, and the vendor licensing cost to buy it. The analysis then applies a time horizon and a discount rate, and the option with lower net present cost wins. This is a financially literate approach to a question that is not primarily a financial question.</p>
          <p>The costs that most determine the long-term value of the decision — maintenance burden, vendor lock-in risk, data portability constraints, differentiation value, and switching cost — are either invisible in the standard analysis or are treated as qualitative footnotes to the quantitative conclusion. The result is a decision that is rigorous about the factors that matter least and silent about the factors that matter most.</p>
          <p>This bias is not random. Build cost estimates are prepared by engineers who have incentives to make builds sound achievable and who work in organizations that have incentives to appear technically capable. Vendor cost estimates are prepared by sales teams who have incentives to minimize perceived total cost. The standard analysis aggregates two systematically biased inputs and produces a conclusion that reflects those biases more than the underlying economics.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Five Dimensions of the Decision</h2>
        <div className="article-prose">
          <p>The decision framework below evaluates build vs. buy across five dimensions that collectively determine long-term value. Each dimension generates a disposition — toward build or toward buy — and the aggregate of those dispositions, weighted by organizational context, produces a more reliable decision basis than cost comparison alone. Select each dimension to see the build and buy case.</p>
        </div>
        <DecisionTabs />
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>The Hidden Costs of Each Option</h2>
        <div className="article-prose">
          <p>Build analyses consistently undercount three costs: <strong>integration complexity</strong>, which is frequently equal to or greater than the build cost of the system itself; <strong>maintenance overhead</strong>, which tends to grow as the system scales and accumulates dependencies; and <strong>opportunity cost</strong>, the engineering capacity that is consumed by the build and unavailable for the next investment. These costs are real and predictable — they are systematically absent from build estimates because they are incurred after the decision is made.</p>
          <p>Buy analyses consistently undercount <strong>vendor dependency risk</strong> — the cost of being unable to change when the vendor's pricing, capability, or strategic direction diverges from your needs. They undercount <strong>data portability constraints</strong>, which become apparent only when migration is necessary. And they undercount <strong>customization debt</strong> — the cost of building around vendor limitations that accumulates as organizational requirements evolve beyond what the vendor product supports.</p>
        </div>
        <div className="article-pullquote">
          <p>"The question is not which option is cheaper to acquire. It is which option generates more value at the scale and time horizon that actually matters to your organization — and which option you can recover from if you're wrong."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Making the Decision Reversible</h2>
        <div className="article-prose">
          <p>The most costly outcome in the build vs. buy decision is not choosing the wrong option. It is choosing the right option in a way that makes it impossible to revisit when circumstances change. Both build and buy decisions can be structured for reversibility — or can be structured in ways that make the decision permanent regardless of whether it continues to generate value.</p>
          <p>Buy decisions are made reversible through data portability requirements negotiated at contract time, through avoiding deep integration with vendor-proprietary APIs, and through maintaining internal architectural documentation sufficient to rebuild if necessary. Build decisions are made reversible through clean interface design, through avoiding dependencies that make vendor alternatives impractical, and through honest ongoing evaluation of whether the build continues to justify its maintenance cost.</p>
          <p>The organizations that manage this decision well share a common characteristic: they treat the decision as provisional rather than permanent. They make the best choice available given current information, they structure it for reversibility, and they establish explicit review criteria — the conditions under which the decision should be reconsidered. This is not indecision. It is the organizational capacity to be right about a decision and then be right about changing it.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>McAfee, A. &amp; Brynjolfsson, E. (2012). Big Data: The Management Revolution. <em>Harvard Business Review</em>, 90(10), 60–68.</li>
          <li>Coase, R. H. (1937). The Nature of the Firm. <em>Economica</em>, 4(16), 386–405.</li>
          <li>Simon, H. A. (1955). A Behavioral Model of Rational Choice. <em>Quarterly Journal of Economics</em>, 69(1), 99–118.</li>
          <li>Vendor Lock-in and Software Ecosystems. (2021). <em>IEEE Software Engineering Body of Knowledge (SWEBOK)</em>.</li>
          <li>Kim, G. et al. (2016). <em>The DevOps Handbook</em>. IT Revolution Press.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Facing a build<br /><span>vs. buy decision?</span></h3>
      <p>I've been on both sides of this decision across multiple organizations. I can help you analyze it honestly — including the costs that standard analyses miss.</p>
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

export default function ArticleBuildVsBuy() {
  usePageMeta({
    title: 'Build vs. Buy in AI Infrastructure — Jay Burgess',
    description: 'The standard build vs. buy analysis is systematically biased. A decision framework that accounts for the full cost topology of each option.',
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
