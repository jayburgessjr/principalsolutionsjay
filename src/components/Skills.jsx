import { useReveal } from '../hooks/useReveal'

const certifications = [
  'Certified Agentic Engineer',
  'Certified Forward Deployment Engineer',
  'Graduate Certificate, AI · Harvard',
  'MBA · Eastern University',
  'M.S. Data Science · Eastern University',
  'M.Ed. · Loyola Marymount',
]

const skillBlocks = [
  {
    head: 'AI & Agentic Systems',
    items: [
      'RAG context architecture',
      'Multi-agent orchestration',
      'Evaluation frameworks & QA pipelines',
      'Anti-hallucination system prompting',
      'AI economics & token cost modeling',
      'Failure pattern analysis',
    ],
  },
  {
    head: 'Data Engineering',
    items: [
      'Python · SQL · Azure AI',
      'Microsoft Fabric · Databricks',
      'Pipeline architecture & ETL/ELT',
      'Power BI · Google BI',
      'Warehouse & data modeling',
      'Data quality & observability',
    ],
  },
  {
    head: 'Enterprise Systems',
    items: [
      'Enterprise systems strategy',
      'IT governance & risk management',
      'Title IV & regulatory compliance',
      'Vendor & contract management',
      'Multi-site operations enablement',
      'Data governance & metric standardization',
    ],
  },
  {
    head: 'Leadership & Delivery',
    items: [
      '0→1 platform development',
      'Team building & development',
      'Scaling technology functions',
      'Executive stakeholder alignment',
      'Cross-functional ownership',
      'Structured documentation & handoff',
    ],
  },
]

export default function Skills() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section className="skills" id="skills">
      <div className="skills-inner">
        <div className="section-label">Technical depth</div>
        <div className="skills-layout">
          <div className="skills-left reveal" ref={leftRef}>
            <h2>
              Deep enough to lead the build.<br />
              <em>Close enough to get in when it matters.</em>
            </h2>
            <p>
              I can architect, build, test, and document production-grade AI systems — and develop
              the engineering team to scale and own them.
            </p>
            <ul className="cert-list">
              {certifications.map((c) => <li key={c}>{c}</li>)}
            </ul>
          </div>
          <div className="skills-right reveal" ref={rightRef}>
            {skillBlocks.map((block) => (
              <div className="skill-block" key={block.head}>
                <div className="sb-head">{block.head}</div>
                <ul className="sb-items">
                  {block.items.map((item) => <li key={item}>{item}</li>)}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
