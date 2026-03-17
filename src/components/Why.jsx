import { useReveal } from '../hooks/useReveal'

const checklistItems = [
  "I've run 5 functional roles simultaneously at HEAG — this multi-context operating model is my default",
  "I've shipped production AI in one of the most legally sensitive environments possible: federal Title IV compliance",
  "Everything I build comes with documentation and standards so it runs without me — that's how I think about scale",
  "I've founded a product studio — I understand ownership and accountability, not just employment",
  "I've worked at Fortune 500 scale — I know what breaks at 20 companies versus one",
  "Your permanent capital model aligns with how I build — for durability, not for demos",
]

const matchCards = [
  {
    jd: '"builder-operator who can fuse first-principles process thinking with AI-driven solutions"',
    proof: 'ReggieAI: diagnosed the process failure, rebuilt it from scratch using RAG and agentic AI, deployed to staging ahead of schedule. That\'s the motion.',
  },
  {
    jd: '"translate solutions into playbooks for adoption across portfolio companies"',
    proof: 'Internal PM platform at HEAG: built, documented, trained the team, and walked away. It runs independently today. That\'s what playbook thinking looks like.',
  },
  {
    jd: '"prototype and ship yourself, or lead engineers to build and scale"',
    proof: '4 products shipped at Revuity Systems — solo. 3–4 engineers managed at HEAG. I can do both. The question is what the situation calls for.',
  },
  {
    jd: '"high autonomy, high accountability"',
    proof: '15 years of operating in environments where I owned the outcome — not the process. No one handed me a roadmap. I built it.',
  },
]

export default function Why() {
  const leftRef = useReveal()
  const rightRef = useReveal()

  return (
    <section className="why" id="ev">
      <div className="why-inner">
        <div className="section-label">For Enduring Ventures</div>
        <div className="why-layout">
          <div className="why-left reveal" ref={leftRef}>
            <blockquote>
              You need someone who walks into a portfolio company, finds what's broken at the root,
              and ships the fix — not a consultant who leaves a deck behind.
            </blockquote>
            <ul className="why-checklist">
              {checklistItems.map((item, i) => (
                <li key={i}>
                  <div className="check-icon">✓</div>
                  <div>{item}</div>
                </li>
              ))}
            </ul>
          </div>

          <div className="why-right reveal" ref={rightRef}>
            <div className="match-cards">
              {matchCards.map((card, i) => (
                <div className="match-card" key={i}>
                  <div className="mc-jd">JD says: <span>{card.jd}</span></div>
                  <div className="mc-title">My proof</div>
                  <div className="mc-proof">{card.proof}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
