import { useReveal } from '../hooks/useReveal'

const engagements = [
  {
    label: 'Diagnostic Sprint',
    tag: 'Fixed-scope diagnosis',
    description:
      'The problem is blurry. You need a clear diagnosis, a system map, and a credible execution path — before committing to a build. $15K – $35K fixed scope. Used when the team isn\'t sure what\'s actually broken — and needs someone who will find it without guessing.',
  },
  {
    label: 'Fractional Systems Leader',
    tag: 'Ongoing technical leadership',
    description:
      'Senior AI systems leadership, architecture direction, and team development — without a full-time executive hire. I own the technical agenda and develop the team around it. $8K – $25K / month. Used when you need a systems owner in the room every week — not a consultant who shows up quarterly.',
  },
  {
    label: 'Embedded Build Partner',
    tag: 'Full initiative ownership',
    description:
      'I own the mandate. I set the architecture, lead the team, and ship the result. The deliverable is a running system and a capable team — not a recommendation for someone else to act on. $25K – $40K+ / month. Used when the work needs to get done — not planned. I go all the way from diagnosis to production handoff.',
  },
]

export default function EngagementSection() {
  const gridRef = useReveal()

  return (
    <section className="engagement-section" id="engagement">
      <div className="engagement-inner">
        <div className="section-label">Ways to work together</div>
        <h2 className="engagement-h2">
          Structured for impact.<br />
          <em>Priced like an operator.</em>
        </h2>
        <p className="engagement-intro">
          The right model depends on whether you need diagnosis, ongoing systems leadership, or
          someone to own the initiative from root cause to running production.
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
