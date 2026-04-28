import { useReveal } from '../hooks/useReveal'

export default function OperatingLaw() {
  const ref = useReveal()

  return (
    <section className="operating-law" id="operating-law">
      <div className="operating-law-inner reveal" ref={ref}>
        <div className="section-label">One operating law</div>
        <div className="ol-stages">
          <span>Problem</span>
          <span className="ol-arrow">→</span>
          <span>Solution</span>
          <span className="ol-arrow">→</span>
          <span>System</span>
          <span className="ol-arrow">→</span>
          <span>Scale</span>
        </div>
        <p className="ol-quote">
          I don't guess — <em>I architect.</em><br />
          I don't stop at strategy — <em>I build the system that runs it.</em>
        </p>
      </div>
    </section>
  )
}
