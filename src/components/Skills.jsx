import { useReveal } from '../hooks/useReveal'

const certifications = [
  'MBA · Eastern University · 2024',
  'M.S. Data Science · Eastern University · 2022',
  'M.Ed. · Loyola Marymount University · 2013',
  'B.A. Sociology · Loyola Marymount University · 2005',
]

const skillBlocks = [
  {
    head: 'AI Systems Architecture',
    items: [
      'Specification Design & System Prompting',
      'Evaluation Frameworks & QA Pipelines',
      'Multi-Agent Orchestration',
      'Failure Pattern Analysis (context drift, spec drift, silent failures)',
      'Trust & Guardrail Design',
      'Context Architecture (RAG)',
      'AI Economics & Token Cost Modeling',
    ],
  },
  {
    head: 'Data Engineering',
    items: [
      'Python · SQL',
      'Microsoft Fabric · Databricks',
      'dbt · Airflow · Spark',
      'Pipeline Architecture',
      'Data Modeling',
      'Power BI · Google BI',
    ],
  },
  {
    head: 'Systems Architecture',
    items: [
      'Process Mapping & Redesign',
      'API Integration Design',
      'Tech Stack Selection',
      'QA Spec Writing',
      'Engineering Standards',
    ],
  },
  {
    head: 'Product & Delivery',
    items: [
      'Lovable + Supabase Stack',
      '0→1 Product Development',
      'B2B SaaS Design',
      'Team Management (3–4 reports)',
      'Stakeholder Communication',
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
