import { useReveal } from '../hooks/useReveal'

const steps = [
  {
    num: '01',
    verb: 'Diagnose',
    title: 'Find the real root cause — not the symptom',
    body: 'I go deep into how a business actually operates: where data breaks down, where manual work masks systemic failure, where the real bottleneck is hiding. I don\'t take the first answer.',
    proof: '→ ReggieAI: Found that compliance failures stemmed from zero structured knowledge, not staff error',
  },
  {
    num: '02',
    verb: 'Build',
    title: 'Ship the actual fix — not a recommendation',
    body: 'I architect and build the solution myself: RAG pipelines, agentic workflows, data infrastructure, internal tooling, process redesigns. I hand off working systems, not decks.',
    proof: '→ ReggieAI: Built RAG pipeline, anti-hallucination system prompt, HubSpot API, and staged it ahead of schedule',
  },
  {
    num: '03',
    verb: 'Scale',
    title: 'Turn the fix into a playbook others can run',
    body: 'Every solution I build gets documented as a replicable standard — QA specs, engineering guides, dashboards, toolkits. The goal is always: runs without me in the room.',
    proof: '→ Built internal PM platform at HEAG — team uses it independently, zero dependency on me',
  },
]

export default function Method() {
  const stepsRef = useReveal()

  return (
    <section className="method" id="method">
      <div className="method-inner">
        <div className="section-label">How I operate</div>
        <h2 className="method-h2">
          Three moves.<br />
          Every time. <em>Every business.</em>
        </h2>
        <p className="method-intro">
          Most people diagnose or build or document. I do all three in sequence — and I don't leave until the system runs without me.
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
