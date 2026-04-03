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
  const rowsRef = useReveal()

  return (
    <section className="methodology" id="methodology">
      <div className="methodology-inner">
        <div className="section-label">Open-Source Methodology</div>
        <h2 className="method-h2">
          Built in production.<br />
          <em>Open to use.</em>
        </h2>
        <p className="method-intro">
          The evaluation frameworks I built to QA production AI in regulated environments — now available as interactive tools.
        </p>
      </div>
      <div className="tool-rows reveal" ref={rowsRef}>
        {tools.map(tool => (
          <a href={tool.href} className="tool-row" key={tool.label} target="_blank" rel="noreferrer">
            <div className="tool-row-body">
              <div className="tool-row-tag">{tool.tag}</div>
              <div className="tool-row-title">{tool.label}</div>
              <p className="tool-row-desc">{tool.description}</p>
            </div>
            <span className="tool-row-cta">{tool.cta}</span>
          </a>
        ))}
      </div>
    </section>
  )
}
