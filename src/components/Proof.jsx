import { useReveal } from '../hooks/useReveal'

const proofRows = [
  {
    index: '01',
    label: 'AI System · HEAG · 2025 · Live',
    title: 'ReggieAI — Title IV Compliance AI',
    desc: 'Led the full initiative end to end — diagnosis, architecture, build, team handoff. Transformed broken manual compliance processes into a production agentic AI system with guardrails, API integration, and a structured regulatory knowledge base. Delivered ahead of schedule. Team runs it independently.',
    methodLabel: 'How I did it',
    steps: [
      'Diagnosed: compliance errors from unstructured knowledge, not staff error',
      'Architected JSON knowledge base from FSA regulatory sources',
      'Built RAG pipeline + anti-hallucination system prompt',
      'Replaced manual process with live HubSpot API integration',
      'Trained team on system — documented for full independent operation',
    ],
    outcomeLabel: 'Documented business impact',
    outcomeNum: '$2.7M',
    outcomeDesc: 'Production deployment. Team runs it independently.',
  },
  {
    index: '02',
    label: 'Enterprise · Fortune 500',
    title: 'Walmart & Adobe — Enterprise Systems',
    desc: 'Designed and led data and systems architecture inside two of the most demanding enterprise environments on earth. Built organizations around the work — not just systems. Left behind documented standards and capable teams.',
    methodLabel: 'What I brought',
    steps: [
      'Built Creative Operations data org from zero at Walmart — Fortune 1 scale',
      'Developed team capability and documented standards for independent operation',
      '86% reduction in executive reporting turnaround at Adobe',
      'Translated complex technical systems into executive-level decision support',
      'Delivered with rigorous documentation, training, and structured handoff',
    ],
    outcomeLabel: 'Impact',
    outcomeNum: '$750K',
    outcomeDesc: 'Recovered · Walmart',
  },
  {
    index: '03',
    label: 'Internal Tooling · HEAG · Runs independently',
    title: 'Custom PM Platform — Built from zero',
    desc: 'Diagnosed fragmented project management as a root-cause coordination failure. Designed and led the build of a custom Jira-style platform — data model, interface, QA specs, engineering standards. Trained the team to own it. Walked away. It still runs.',
    methodLabel: 'How I did it',
    steps: [
      'Identified coordination failure as root cause of delivery delays',
      'Designed data model and UX from scratch',
      'Wrote QA specs and engineering standards the team now owns',
      'Structured and led team training — zero ongoing dependency on me',
    ],
    outcomeLabel: 'Dependency on me after handoff',
    outcomeNum: '0',
    outcomeDesc: 'Team owns it fully — runs without me.',
  },
  {
    index: '04',
    label: 'Founder · Revuity Systems',
    title: '8 products shipped — as founder & operator',
    desc: 'Founded Revuity Systems and shipped 8 products across 5 verticals — solo or with a small team. This proves I can own outcomes, lead the build, and hold accountability with no organization to fall back on.',
    methodLabel: 'What this proves',
    steps: [
      'VoltIQ, Box Office Beacon, MenuIQ, and more — each architected and deployed',
      'Led design, architecture, and delivery decisions across every product',
      'Shipped in weeks, not quarters — validated before over-building',
      'Each product runs without ongoing maintenance dependency',
    ],
    outcomeLabel: 'Verticals · products in market',
    outcomeNum: '5',
    outcomeDesc: '8 products across 5 verticals.',
  },
]

export default function Proof() {
  const gridRef = useReveal()

  return (
    <section className="proof" id="proof">
      <div className="proof-inner">
        <div className="section-label">Selected work</div>
        <h2 className="method-h2" style={{ marginBottom: '1rem' }}>
          Where I've <em>led and delivered.</em>
        </h2>
        <p className="method-intro">Real problems. Real systems. Real outcomes — with teams that can operate them independently.</p>

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
