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
          Why AI Pilots Die Before Production: The Organizational Gaps That Kill Good Projects
        </h1>
        <div className="article-abstract">
          AI pilot success rates are deceptively high. Most pilots achieve their stated objectives. Most pilots
          never reach production. This paradox — successful experiments that generate no operational value —
          is not explained by model quality, budget, or technical complexity. It is explained by a set of
          organizational gaps that are consistently present at the moment a pilot is approved and consistently
          absent from the evaluation criteria used to assess whether it succeeded. This paper identifies five
          gaps, explains their structural origins, and proposes an evaluation framework that closes the
          distance between pilot success and production value before the pilot begins.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">AI Strategy</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {['AI Pilots', 'Production AI', 'Organizational Change', 'AI Strategy', 'Enterprise AI', 'Change Management'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const GAPS = [
  {
    label: 'Gap 01',
    title: 'No Definition of Production Success',
    body: 'The pilot has success criteria. Production has none. A pilot that achieves 85% accuracy in controlled testing has succeeded by its own criteria. But what accuracy threshold is required for the system to generate the operational value that justified the investment? If that question was not answered before the pilot began, the pilot result — however strong — cannot determine whether production deployment is warranted. The gap is not analytical. It is definitional.',
  },
  {
    label: 'Gap 02',
    title: 'Data Ownership Has No Operational Owner',
    body: 'Every production AI system depends on data that must be maintained, updated, and governed. In pilots, data is assembled for the experiment. In production, it must be owned — someone must be responsible for its quality, its currency, and its access. If that ownership is not assigned before the pilot ends, the pilot succeeds on data the organization cannot sustain in production. The system is technically viable. It is operationally orphaned.',
  },
  {
    label: 'Gap 03',
    title: 'No Integration Path to Operational Workflow',
    body: 'The pilot runs alongside the operational workflow. It does not run within it. Integration — connecting the AI system to the actual processes, tools, and handoffs that constitute daily work — is treated as an implementation detail to be solved after the pilot proves the concept. In practice, integration is frequently more complex than the AI system itself, and the absence of a validated integration path means the pilot succeeded in a context that production cannot replicate.',
  },
  {
    label: 'Gap 04',
    title: 'Change Management Is Deferred',
    body: 'AI systems that change how people work require that people change how they work. This is not a technology problem. It is a change management problem, and it begins at pilot design — not at deployment. Pilots that do not include the operational stakeholders who will use the system in production frequently produce systems that are technically complete and operationally resisted. The technology succeeded. The adoption failed. The result is the same: no production value.',
  },
  {
    label: 'Gap 05',
    title: 'No Failure Mode Plan',
    body: 'The pilot evaluates what the system does when it works. Production requires a plan for what happens when it does not. What is the fallback when the system produces a wrong answer? Who is notified when quality degrades below threshold? How is the system taken offline for maintenance without breaking the workflow it supports? In regulated environments, the absence of these answers is not a gap in preparedness — it is a blocker to deployment.',
  },
]

function GapCards() {
  const [open, setOpen] = useState(null)
  return (
    <div className="failure-cards">
      {GAPS.map((g, i) => (
        <div key={i} className={`failure-card${open === i ? ' open' : ''}`} onClick={() => setOpen(open === i ? null : i)}>
          <div className="failure-card-header">
            <div>
              <div className="failure-card-label">{g.label}</div>
              <div className="failure-card-title">{g.title}</div>
            </div>
            <div className="failure-card-toggle">+</div>
          </div>
          <div className="failure-card-body">{g.body}</div>
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
        <h2>The Pilot Success Paradox</h2>
        <div className="article-prose">
          <p>An organization runs an AI pilot. The model achieves target accuracy. The stakeholder demo generates genuine enthusiasm. The final report declares success. Six months later, the system is not in production. A year later, a new pilot is approved for a different problem.</p>
          <p>This pattern repeats across organizations at a rate that has generated its own vocabulary: "pilot purgatory," "proof of concept cemetery," "the AI graveyard." The language reflects a real phenomenon — a systematic failure to convert AI investment from experimental value to operational value. And it is not explained by the technology.</p>
          <p>The models that power pilots today are genuinely capable. The gap between pilot and production is not in the capability of the underlying AI. It is in the organizational architecture required to take that capability and make it operational — the data ownership, the workflow integration, the change management, the failure protocols. These are not technical requirements. They are organizational requirements, and they are consistently absent from both pilot design and pilot success criteria.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Five Gaps That Kill Good Pilots</h2>
        <div className="article-prose">
          <p>The five gaps below are not theoretical. They are patterns observed across organizations that have run technically successful pilots that did not reach production. Each is organizational rather than technical. Each is diagnosable before the pilot begins. And each is fully addressable if it is recognized as a requirement rather than an afterthought. Select any gap to expand.</p>
        </div>
        <GapCards />
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>Why Pilots Are Designed to Succeed and Fail to Scale</h2>
        <div className="article-prose">
          <p>Pilots are designed to answer the question "can this work?" That is the wrong question. The right question is "can this work, in our environment, with our data, within our operational processes, at the quality threshold required, with the people we have, under the failure conditions we will encounter?" Pilots that answer only the first question generate knowledge about what is technically possible. They do not generate knowledge about what is operationally achievable.</p>
          <p>The incentive structure of pilot design reinforces this narrowing. Pilots are approved by budget owners who need to see evidence of capability. They are designed by technical teams who are best positioned to demonstrate capability. They are evaluated by success criteria that technical teams can control. The result is a selection effect: the pilots that succeed are the ones best designed to demonstrate technical capability — not operational viability.</p>
          <p>This is not a failure of intent. It is a failure of scope. The organizational gaps that prevent production deployment are genuinely outside the scope of most pilot designs, and no amount of technical success fills them.</p>
        </div>
        <div className="article-pullquote">
          <p>"A pilot answers whether the technology can work. Production requires evidence that the organization can work with the technology. These are different questions with different evaluation criteria."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Designing for Production from Day One</h2>
        <div className="article-prose">
          <p>The most effective intervention is not post-pilot remediation. It is pilot design that treats production viability as a first-class requirement alongside technical performance. This means defining production success criteria before the pilot begins — not accuracy targets, but operational targets. What volume must the system handle? What quality floor is required for the operational workflow to depend on it? What is the acceptable fallback when the system is wrong or unavailable?</p>
          <p>It means assigning data ownership before the pilot is approved — not as an action item from the pilot review, but as a prerequisite for approval. If the organization cannot identify who will own the production data, the pilot will succeed on data that production cannot sustain.</p>
          <p>It means including operational stakeholders in pilot design, not as evaluators of a completed system but as co-designers of the system that will eventually change how they work. The change management problem does not appear at deployment — it is seeded at pilot design, when the people whose work will change are either included or excluded from the process that determines what changes.</p>
          <p>Organizations that close these gaps before the pilot begins consistently produce pilots that reach production. Not because their technology is better — it usually is not. Because their pilots are designed to answer the right question.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Davenport, T. H. &amp; Mittal, N. (2023). <em>All-in on AI: How Smart Companies Win Big with Artificial Intelligence</em>. Harvard Business Review Press.</li>
          <li>Brynjolfsson, E. &amp; McAfee, A. (2017). <em>Machine Platform Crowd: Harnessing Our Digital Future</em>. W. W. Norton.</li>
          <li>Kotter, J. P. (1996). <em>Leading Change</em>. Harvard Business School Press.</li>
          <li>Sculley, D. et al. (2015). Hidden Technical Debt in Machine Learning Systems. <em>NIPS 2015</em>.</li>
          <li>Ng, A. (2022). MLOps: From Model-centric to Data-centric AI. <em>DeepLearning.AI Technical Report</em>.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>AI pilot stuck<br /><span>before production?</span></h3>
      <p>I diagnose the organizational gaps, design the path to production, and build the architecture that closes it. Let's talk.</p>
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

export default function ArticleAIPilots() {
  usePageMeta({
    title: 'Why AI Pilots Die Before Production — Jay Burgess',
    description: 'AI pilots succeed. Production deployments fail. Five organizational gaps that kill good projects and a framework for closing them before the pilot begins.',
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
