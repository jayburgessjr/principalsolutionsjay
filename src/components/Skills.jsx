import { useReveal } from '../hooks/useReveal'

const certifications = [
  'Certified Agentic Engineer',
  'Certified Forward Deployment Engineer',
  'Graduate Certificate, AI · Harvard University',
  'MBA · Eastern University · 2024',
  'M.S. Data Science · Eastern University · 2022',
  'M.Ed. · Loyola Marymount University · 2013',
]

const skillBlocks = [
  {
    head: 'Enterprise & Compliance',
    items: [
      'Enterprise Systems Strategy (HR, Finance, CRM)',
      'IT Governance & Risk Management',
      'Title IV & Regulatory Compliance',
      'Vendor & Contract Management (RFPs, SOWs)',
      'Multi-Site Operations Enablement',
      'Data Governance & Metric Standardization',
    ],
  },
  {
    head: 'Data Engineering',
    items: [
      'Python · SQL · Azure AI',
      'Microsoft Fabric · Databricks',
      'Pipeline Architecture & ETL/ELT',
      'Power BI · Google BI',
      'Warehouse & Data Modeling',
      'Data Quality & Observability Monitoring',
    ],
  },
  {
    head: 'AI & Agentic Engineering',
    items: [
      'Specification Design & System Prompting',
      'Evaluation Frameworks & QA Pipelines',
      'Multi-Agent Orchestration',
      'RAG Context Architecture',
      'Failure Pattern Analysis (context/spec drift)',
      'AI Economics & Token Cost Modeling',
    ],
  },
  {
    head: 'Leadership & Delivery',
    items: [
      '0→1 Platform Development',
      'Scaling Technology Functions',
      'Executive Stakeholder Alignment',
      'Team Building & Mentorship',
      'Cross-Functional Infrastructure Design',
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
              Deep enough<br />
              to build it.<br />
              <em>Fast.</em>
            </h2>
            <p>
              I don't need to hire a team to ship a solution. I can architect, build, test, and
              document production-grade AI systems myself — then lead engineers to scale them.
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
