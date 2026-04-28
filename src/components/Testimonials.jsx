import { useReveal } from '../hooks/useReveal'

const testimonials = [
  {
    quote: 'He is able to commit and focus on current projects with a laser focus I would compare to a mad genius. Jay saw the importance of ML and Data Science and immersed himself in knowledge and projects — he is a problem solver and a connector. If you get a chance to work with this guy, your life will get better.',
    name: 'Mark Fu',
    title: 'CFO · Angel Investor',
  },
  {
    quote: 'His technical aptitude, analysis, and development is excellent. Trust is paramount, and I trust Jay implicitly. Whatever he touches receives added value due to his professional, committed, customer-first approach.',
    name: 'Eric Litster, MBA',
    title: 'Sales Executive · Toshiba International Corporation',
  },
  {
    quote: 'Always the consummate professional, Jay was able to navigate difficult conversations with skill, empathy, and a willingness to ensure each person was treated with the care they deserved. He has an innate drive and determination that sets him apart.',
    name: 'Thomas Gutto',
    title: 'Associate Vice Provost · Loyola Marymount University',
  },
]

export default function Testimonials() {
  const gridRef = useReveal()

  return (
    <section className="testimonials" id="testimonials">
      <div className="testimonials-inner">
        <div className="section-label">What people say</div>
        <h2 className="method-h2">
          Don't take<br />
          <em>my word for it.</em>
        </h2>

        <div className="testimonial-grid reveal" ref={gridRef}>
          {testimonials.map((t, i) => (
            <div className="testimonial-card" key={i}>
              <div className="testimonial-mark">&ldquo;</div>
              <p className="testimonial-text">{t.quote}</p>
              <div className="testimonial-byline">
                <div className="testimonial-name">{t.name}</div>
                <div className="testimonial-title">{t.title}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
