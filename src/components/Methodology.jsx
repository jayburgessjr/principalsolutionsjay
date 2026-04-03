import { useReveal } from '../hooks/useReveal'

const tools = [
  {
    label: 'BurgessEval Framework',
    tag: 'Evaluation · 5 Dimensions · 0–100 Score',
    description: 'A weighted, rubric-driven scoring system for evaluating AI outputs in regulated environments. 5 dimensions. 7 failure pattern tags. Composite 0–100 score.',
    href: '/burgess-eval.html',
    cta: 'Open Framework →',
  },
  {
    label: 'BurgessTest Suite',
    tag: '15 Test Cases · Compliance AI · Stress Testing',
    description: '15 structured test cases designed to stress-test compliance AI systems — from routine lookups to out-of-scope traps. Built on the Burgess Evaluation Framework.',
    href: '/burgess-test.html',
    cta: 'Open Test Suite →',
  },
]

export default function Methodology() {
  const cardsRef = useReveal()

  return (
    <section className="methodology" id="methodology">
      <div className="methodology-inner">
        <div className="section-label">Methodology</div>
        <h2 className="methodology-h2">
          Open-Source<br />
          <em>Evaluation Tools</em>
        </h2>
        <p className="methodology-intro">
          The frameworks I built to QA production AI in regulated environments — now available as interactive tools.
        </p>
        <div className="tool-cards reveal" ref={cardsRef}>
          {tools.map(tool => (
            <a href={tool.href} className="tool-card" key={tool.label} target="_blank" rel="noreferrer">
              <div className="tc-tag">{tool.tag}</div>
              <div className="tc-label">{tool.label}</div>
              <p className="tc-desc">{tool.description}</p>
              <div className="tc-cta">{tool.cta}</div>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}
