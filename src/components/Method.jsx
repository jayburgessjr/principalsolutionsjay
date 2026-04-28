import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    verb: 'Problem',
    title: 'Find the real root cause.',
    body: 'I go deep into how a business actually operates — where data breaks down, where manual work masks systemic failure, where the real bottleneck is hiding. I don\'t take the first answer.',
    proof: '→ ReggieAI: compliance failures stemmed from zero structured knowledge — not staff error',
  },
  {
    num: '02',
    verb: 'Solution',
    title: 'Build the actual fix.',
    body: 'I architect and build the solution — RAG pipelines, agentic workflows, data infrastructure, process redesigns. I hand off working systems, not slide decks. And I hold the team accountable to shipping, not just planning.',
    proof: '→ ReggieAI: RAG pipeline, anti-hallucination system prompt, HubSpot API — staged ahead of schedule',
  },
  {
    num: '03',
    verb: 'System',
    title: 'Wire it into the org.',
    body: 'I integrate the solution into how the team actually operates. Handoff protocols, dashboards, QA specs, live integrations. Then I develop the people around it — so it runs on the team\'s capability, not mine.',
    proof: '→ HEAG: built internal PM platform, trained the team, system runs independently — zero dependency on me',
  },
  {
    num: '04',
    verb: 'Scale',
    title: 'Turn it into a repeatable standard.',
    body: 'Every system I build gets documented as a replicable playbook — engineering guides, runbooks, team toolkits. The goal: deploy the same approach across the org, not just one account.',
    proof: '→ Walmart: data org built from zero — documented standards now run across Creative Operations at Fortune 1 scale',
  },
]

export default function Method() {
  const stepsRef = useReveal()

  return (
    <section className="method" id="method">
      <div className="method-inner">
        <div className="section-label">How I operate</div>
        <h2 className="method-h2">
          Four moves.<br />
          <em>Every system. Every time.</em>
        </h2>
        <div className="ol-stages">
          <span>Problem</span>
          <span className="ol-arrow">→</span>
          <span>Solution</span>
          <span className="ol-arrow">→</span>
          <span>System</span>
          <span className="ol-arrow">→</span>
          <span>Scale</span>
        </div>
        <p className="method-intro">
          Most people diagnose or build or document. I do all four in sequence — and I don't move on until the team can run it without me in the room.
        </p>

        <div className="steps reveal" ref={stepsRef}>
          {steps.map((s) => (
            <div className="step" key={s.num}>
              <div className="step-num">{s.num}</div>
              <span className="step-verb">{s.verb}</span>
              <h3>{s.title}</h3>
              <p>{s.body}</p>
              <div className="step-proof">{s.proof}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
