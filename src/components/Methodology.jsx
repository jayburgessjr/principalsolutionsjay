import { useReveal } from '../hooks/useReveal'

const tools = [
  {
    index: '01',
    label: 'BurgessEval Framework',
    tag: 'Evaluation · 5 Dimensions · 0–100 Score',
    description: 'A weighted, rubric-driven scoring system for evaluating AI outputs in regulated environments. 5 dimensions. 7 failure pattern tags. Composite 0–100 score.',
    features: ['5 Evaluation Dimensions', '7 Failure Pattern Tags', 'Weighted Composite Score'],
    featuresLabel: 'Framework',
    outcomeLabel: 'Scope',
    outcomeNum: '5',
    outcomeDesc: 'Evaluation dimensions. Open framework — free to use.',
    href: '/burgess-eval.html',
    cta: 'Open Framework →',
  },
  {
    index: '02',
    label: 'BurgessTest Suite',
    tag: '15 Test Cases · Compliance AI · Stress Testing',
    description: '15 structured test cases designed to stress-test compliance AI systems — from routine lookups to out-of-scope traps. Built on the Burgess Evaluation Framework.',
    features: ['Routine Compliance Lookups', 'Out-of-Scope Traps', 'Edge Case Scenarios'],
    featuresLabel: 'Test Coverage',
    outcomeLabel: 'Test Cases',
    outcomeNum: '15',
    outcomeDesc: 'Stress-tests compliance AI end-to-end. Open source.',
    href: '/burgess-test.html',
    cta: 'Open Test Suite →',
  },
]

export default function Methodology() {
  const gridRef = useReveal()

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

        <div className="proof-grid reveal" ref={gridRef} style={{ marginTop: '3rem' }}>
          {tools.map(tool => (
            <div className="proof-row" key={tool.label}>
              <div className="pr-index">{tool.index}</div>
              <div className="pr-main">
                <div className="pr-main-label">{tool.tag}</div>
                <h3>{tool.label}</h3>
                <p>{tool.description}</p>
              </div>
              <div className="pr-method">
                <div className="pr-method-label">{tool.featuresLabel}</div>
                <ul className="pr-steps">
                  {tool.features.map(f => <li key={f}>{f}</li>)}
                </ul>
              </div>
              <div className="pr-outcome">
                <div className="pr-outcome-label">{tool.outcomeLabel}</div>
                <div className="pr-outcome-num">{tool.outcomeNum}</div>
                <p>{tool.outcomeDesc}</p>
                <a href={tool.href} className="methodology-cta" >
                  {tool.cta}
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
