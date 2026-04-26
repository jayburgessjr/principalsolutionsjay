import { useReveal } from '../hooks/useReveal'

const engagements = [
  {
    label: 'Diagnostic Sprint',
    tag: 'Fixed Scope',
    description:
      'Used when the problem is still blurry and the business needs a clear diagnosis, system map, and execution path.',
  },
  {
    label: 'Fractional Architect / CTO / CIO',
    tag: 'Monthly Retainer',
    description:
      'Used when a team needs senior technical judgment, architecture leadership, and operator-level direction without a full-time executive hire.',
  },
  {
    label: 'Embedded Build Partner',
    tag: 'Deep Execution',
    description:
      'Used when the mandate is to fix the system and ship the result, not just recommend what should happen next.',
  },
]

export default function EngagementSection() {
  const gridRef = useReveal()

  return (
    <section className="engagement-section" id="engagement">
      <div className="engagement-inner">
        <div className="section-label">Ways To Work With Me</div>
        <h2 className="engagement-h2">
          Structured for impact.<br />
          <em>Priced like an operator.</em>
        </h2>
        <p className="engagement-intro">
          The right model depends on whether you need diagnosis, ongoing technical leadership, or
          someone who can go all the way from root cause to shipped fix.
        </p>

        <div className="engagement-cards reveal" ref={gridRef}>
          {engagements.map((item) => (
            <article className="engagement-card" key={item.label}>
              <div className="engagement-card-tag">{item.tag}</div>
              <h3>{item.label}</h3>
              <p>{item.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
