import { useReveal } from '../hooks/useReveal'

const cells = [
  {
    icon: '⚙️',
    head: 'Systems ownership',
    body: 'I take full accountability for the initiative — architecture decisions, build priorities, quality standards, and outcomes. Not a recommender. An owner.',
  },
  {
    icon: '👥',
    head: 'Team development',
    body: 'I identify who needs to grow into the work, build the capability around them, and set the standard they operate to. The team gets better because I was there.',
  },
  {
    icon: '🎯',
    head: 'Executive alignment',
    body: 'I translate what the system is doing into language that moves decisions at the top. I\'ve run the room at Walmart, Adobe, and regulated-environment AI deployments.',
  },
  {
    icon: '🔧',
    head: 'Operator when it counts',
    body: 'When the work gets hard, I don\'t delegate from a distance. I get in the trenches. I\'ve built production AI systems myself — and I know exactly when to lead from the front.',
  },
]

export default function LeadershipLayer() {
  const gridRef = useReveal()

  return (
    <section className="leadership-layer" id="leadership">
      <div className="leadership-inner">
        <div className="section-label">The leadership layer</div>
        <h2 className="leadership-h2">
          I own the initiative.<br />
          <em>I build the team around it.</em>
        </h2>
        <p className="leadership-intro">
          The technical work is only half the job. The other half is developing the people and
          the structure that makes the system last after I step back.
        </p>
        <div className="leadership-grid reveal" ref={gridRef}>
          {cells.map((c) => (
            <div className="leadership-cell" key={c.head}>
              <div className="leadership-icon">{c.icon}</div>
              <div className="leadership-cell-head">{c.head}</div>
              <p>{c.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
