import { useReveal } from '../hooks/useReveal'

const proofRows = [
  {
    index: '01',
    label: 'AI System · HEAG · 2025',
    title: 'ReggieAI — Title IV Compliance AI',
    desc: 'Built a production agentic AI system for federal student aid compliance. Went from broken manual process to live, auditable AI — with guardrails, API integration, and a structured regulatory knowledge base — ahead of schedule.',
    methodLabel: 'How I did it',
    steps: [
      'Diagnosed: compliance errors from unstructured knowledge',
      'Architected JSON knowledge base from FSA sources',
      'Built RAG pipeline + anti-hallucination system prompt',
      'Replaced embedded form with live HubSpot API',
      'Deployed staging · documented for team handoff',
    ],
    outcomeLabel: 'Outcome',
    outcomeNum: 'Live',
    outcomeDesc: 'Production deployment. Compliance ops transformed. Zero hallucinations in testing.',
  },
  {
    index: '02',
    label: 'Enterprise · Fortune 500',
    title: 'Walmart & Adobe Engagements',
    desc: 'Data science and solutions architecture at two of the most demanding enterprise environments on earth. Built systems that had to perform at scale, survive complex stakeholder politics, and generate verifiable ROI.',
    methodLabel: 'What I brought',
    steps: [
      'Diagnosed process gaps at enterprise scale',
      'Built scalable data pipelines and reporting architecture',
      'Translated technical systems into executive-ready comms',
      'Delivered with rigorous documentation and handoff',
    ],
    outcomeLabel: 'Impact',
    outcomeNum: '$2.7M',
    outcomeDesc: 'Verified business ROI across Fortune 500 engagements.',
  },
  {
    index: '03',
    label: 'Internal Tooling · HEAG',
    title: 'Custom PM Platform — Built From Zero',
    desc: 'Diagnosed that fragmented project management was costing the team coordination overhead. Built a custom Jira-style tool from scratch — data model, interface, QA specs, and engineering standards. Trained the team. Walked away.',
    methodLabel: 'How I did it',
    steps: [
      'Identified coordination failure as root cause',
      'Designed data model and UX from scratch',
      'Wrote QA specs and engineering standards',
      'Trained team · system runs without me',
    ],
    outcomeLabel: 'Status',
    outcomeNum: 'Runs',
    outcomeDesc: 'Team operates it independently. Zero ongoing dependency on me.',
  },
  {
    index: '04',
    label: 'Founder · Revuity Systems',
    title: '4 Products Shipped — As Founder & Builder',
    desc: 'Founded Revuity Systems, a lean product studio. Shipped WedData (B2B SaaS pricing intelligence), CertPath (certification platform), GameNight (multiplayer app), and Box Office Beacon — each designed, architected, and deployed solo.',
    methodLabel: 'What this proves',
    steps: [
      'I own outcomes — no team to hide behind',
      'I ship in weeks, not quarters',
      'I validate before I over-build',
      'I operate with founder accountability',
    ],
    outcomeLabel: 'Products',
    outcomeNum: '4',
    outcomeDesc: 'Active products in market. Subscription SaaS model.',
  },
]

export default function Proof() {
  const gridRef = useReveal()

  return (
    <section className="proof" id="proof">
      <div className="proof-inner">
        <div className="section-label">Selected work</div>
        <h2 className="method-h2" style={{ marginBottom: '1rem' }}>
          Where I've <em>delivered.</em>
        </h2>
        <p className="method-intro">Real problems. Real systems. Real outcomes.</p>

        <div className="proof-grid reveal" ref={gridRef}>
          {proofRows.map((row) => (
            <div className="proof-row" key={row.index}>
              <div className="pr-index">{row.index}</div>
              <div className="pr-main">
                <div className="pr-main-label">{row.label}</div>
                <h3>{row.title}</h3>
                <p>{row.desc}</p>
              </div>
              <div className="pr-method">
                <div className="pr-method-label">{row.methodLabel}</div>
                <ul className="pr-steps">
                  {row.steps.map((s, i) => <li key={i}>{s}</li>)}
                </ul>
              </div>
              <div className="pr-outcome">
                <div className="pr-outcome-label">{row.outcomeLabel}</div>
                <div className="pr-outcome-num">{row.outcomeNum}</div>
                <p>{row.outcomeDesc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
