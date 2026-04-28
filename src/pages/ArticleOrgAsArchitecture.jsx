import { Link } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { usePageMeta } from '../hooks/usePageMeta'
import '../casestudy.css'

function ArticleNav() {
  return (
    <nav>
      <Link to="/" className="nav-back">← Back to Portfolio</Link>
      <div className="nav-tag">Article · Technical Leadership</div>
    </nav>
  )
}

function ArticleHero() {
  return (
    <section className="article-hero">
      <div className="article-hero-inner">
        <div className="article-eyebrow">Article · Technical Leadership · April 2026</div>
        <h1 className="article-title">
          The Org Chart Is the Architecture: How Team Structure Determines System Quality
        </h1>
        <div className="article-abstract">
          Conway's Law — the observation that organizations design systems that mirror their own
          communication structures — is one of the most robust empirical findings in software engineering.
          It is also one of the most consistently underutilized as a leadership tool. Most organizations
          treat system architecture and organizational design as separate domains, managed by different
          people with different objectives on different timelines. This paper argues that they are the same
          problem, that architectural decisions made without organizational design awareness consistently
          produce systems that cannot be maintained by the organizations that build them, and that the
          most powerful lever available to technical leaders is not the technical architecture decision —
          it is the organizational design decision.
        </div>
        <div className="article-meta-bar">
          <div className="article-meta-item"><div className="article-meta-label">Author</div><div className="article-meta-val">Jay Burgess</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Published</div><div className="article-meta-val">April 2026</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Category</div><div className="article-meta-val">Technical Leadership</div></div>
          <div className="article-meta-item"><div className="article-meta-label">Read Time</div><div className="article-meta-val">8 min</div></div>
        </div>
        <div className="article-keywords">
          {["Conway's Law", 'Team Topology', 'Organizational Design', 'Systems Architecture', 'Technical Leadership', 'Team Structure'].map(k => (
            <span key={k} className="article-keyword">{k}</span>
          ))}
        </div>
      </div>
    </section>
  )
}

const PATTERNS = [
  { label: 'Pattern A', title: 'Silo → Integration Tax', desc: 'When teams are organized around functional specializations — frontend, backend, data, infrastructure — system architecture follows. Integration between components becomes integration between teams, which is expensive, slow, and politically complex. The integration tax is the overhead of coordinating across team boundaries to deliver features that require multiple specializations. It appears in the architecture as tight coupling at layer boundaries and in the organization as recurring coordination failures at the same seams.' },
  { label: 'Pattern B', title: 'Platform Team → Shared Infrastructure', desc: 'When a team is chartered to own shared platform capability — the infrastructure, tooling, and services that other teams depend on — the architecture tends toward well-defined interfaces at the platform boundary and genuine abstraction of the underlying complexity. The risk is platform teams that optimize for the platform rather than for the teams that use it, producing technically elegant infrastructure that nobody adopts because it doesn\'t fit how product teams actually work.' },
  { label: 'Pattern C', title: 'Stream Team → Product Coherence', desc: 'When teams are organized around value streams — end-to-end ownership of a product or capability, from infrastructure to user experience — system architecture tends to follow the same boundaries. Components align with team ownership, reducing coordination overhead and increasing the speed of iteration. The risk is fragmented infrastructure — multiple teams solving the same underlying problem independently, without the shared abstraction that a platform team provides.' },
]

function PatternDiagram() {
  return (
    <div className="article-diagram">
      <div className="article-diagram-title">Fig. 1 — Three Organizational Patterns and Their Architectural Implications</div>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '1px', background: 'var(--rule)' }}>
        {PATTERNS.map((p) => (
          <div key={p.label} style={{ background: 'var(--black)', padding: '1.5rem', display: 'flex', gap: '1.5rem', alignItems: 'flex-start' }}>
            <div style={{ fontFamily: 'IBM Plex Mono, monospace', fontSize: '0.58rem', letterSpacing: '0.1em', textTransform: 'uppercase', color: 'var(--orange)', flexShrink: 0, paddingTop: '0.1rem', minWidth: '5rem' }}>{p.label}</div>
            <div>
              <div style={{ fontFamily: 'Libre Baskerville, serif', fontSize: '0.92rem', fontWeight: 700, color: 'var(--white)', marginBottom: '0.4rem' }}>{p.title}</div>
              <div style={{ fontSize: '0.81rem', color: 'var(--mid)', lineHeight: 1.75 }}>{p.desc}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function ArticleBody() {
  const r1 = useReveal(), r2 = useReveal(), r3 = useReveal(), r4 = useReveal(), r5 = useReveal()
  return (
    <div className="article-body">
      <div className="article-section reveal" ref={r1}>
        <div className="article-section-num">§ 1</div>
        <h2>Conway's Law as Diagnostic Tool</h2>
        <div className="article-prose">
          <p>In 1967, Melvin Conway observed that "organizations which design systems are constrained to produce designs which are copies of the communication structures of these organizations." This observation — now known as Conway's Law — has been empirically validated across decades of software engineering practice. It is not a tendency or a risk factor. It is a structural force that operates regardless of intent, architectural planning, or technical leadership quality.</p>
          <p>The practical implication is significant: if you want to understand why a system is structured the way it is, look at the organization that built it. And if you want to change how a system is structured, you frequently need to change how the organization is structured — not just how the engineers are thinking about the architecture.</p>
          <p>Most technical leaders treat Conway's Law as an interesting observation about organizational behavior. The leaders who use it most effectively treat it as a diagnostic and planning tool — a lens that makes the relationship between organizational design decisions and architectural outcomes explicit enough to be managed rather than simply observed.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r2}>
        <div className="article-section-num">§ 2</div>
        <h2>Three Organizational Patterns and Their Architectures</h2>
        <div className="article-prose">
          <p>The relationship between organizational structure and system architecture is not random. Specific organizational patterns consistently produce specific architectural patterns — and the architectural challenges that organizations report as technical problems are frequently organizational problems in technical clothing.</p>
        </div>
        <PatternDiagram />
        <div className="article-prose" style={{ marginTop: '1.5rem' }}>
          <p>The inverse Conway maneuver — deliberately designing the organization to produce the desired architecture — is the most powerful application of this understanding. Rather than designing the architecture and then asking how to staff it, you design the team topology first, with explicit awareness of the architectural implications, and then design the architecture that a team topology can produce and maintain.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r3}>
        <div className="article-section-num">§ 3</div>
        <h2>The Maintainability Constraint</h2>
        <div className="article-prose">
          <p>The most common failure mode of architecturally ambitious systems is not that they cannot be built. It is that they cannot be maintained by the organizations that build them. The architecture is designed for an ideal team structure — cross-functional, highly coordinated, with deep ownership across multiple layers — and the actual team structure cannot sustain that coordination at operational tempo.</p>
          <p>This constraint is predictable and largely avoidable if organizational design is part of the architecture decision. The question to ask before committing to an architectural approach is not "can we build this?" but "can the team we have — or the team we can realistically build — maintain this system at production scale, through personnel turnover, under the coordination constraints of our organizational structure?"</p>
          <p>Systems that are architecturally correct but organizationally unmaintainable are not architectural successes. They are architectural liabilities — technically sound at build time and operationally fragile from the first moment that the original team disperses.</p>
        </div>
        <div className="article-pullquote">
          <p>"The architecture you can maintain is more valuable than the architecture you cannot. Design for the organization you have, with an explicit plan for the organization you need — not for the idealized team that exists only in the architecture proposal."</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r4}>
        <div className="article-section-num">§ 4</div>
        <h2>Applying Inverse Conway</h2>
        <div className="article-prose">
          <p>The inverse Conway maneuver requires treating organizational design as a first-class input to architectural planning — not a constraint to work around, but a variable to optimize. In practice, this means two things.</p>
          <p><strong>Design the team topology before the component topology.</strong> Before deciding how the system will be decomposed into components, decide how the teams will be organized. The component boundaries should follow the team boundaries — because the team boundaries are what determine where coordination is easy and where it is expensive. Architecture that requires constant coordination across team boundaries is architecture that will be slow to change and expensive to maintain.</p>
          <p><strong>Use architectural decisions to create organizational forcing functions.</strong> Well-defined service interfaces do not just enable technical decoupling — they enable organizational decoupling. Teams that communicate through explicit API contracts rather than informal coordination can move independently, make decisions locally, and be held accountable for outcomes rather than activities. The interface is not just a technical artifact. It is an organizational boundary that determines how teams relate to each other.</p>
        </div>
      </div>

      <div className="article-section reveal" ref={r5}>
        <div className="article-section-num">§ 5</div>
        <h2>What This Means for Technical Leaders</h2>
        <div className="article-prose">
          <p>The implication for technical leaders is uncomfortable: the most consequential decisions you make about system architecture may not be technical decisions. They may be organizational decisions — about how teams are structured, how ownership is assigned, how coordination is organized. These decisions are typically outside the formal scope of technical leadership and inside the scope of organizational leadership. Crossing that boundary requires both the standing to make the argument and the vocabulary to make it in terms that organizational leaders find relevant.</p>
          <p>The vocabulary exists. Conway's Law provides it. The translation is direct: the systems we build will mirror the communication structures we have. If we want systems with certain architectural properties, we need organizations with corresponding structural properties. If we want to change the architecture, we need to understand which organizational structures are producing it — and whether changing the architecture without changing those structures will produce durable change or temporary deviation.</p>
          <p>Technical leaders who understand this relationship are not just architects of systems. They are architects of the organizational conditions that produce those systems. That is a significantly larger scope — and a significantly larger leverage point.</p>
        </div>
      </div>

      <div className="article-references">
        <h3>References</h3>
        <ol>
          <li>Conway, M. E. (1968). How Do Committees Invent? <em>Datamation</em>, 14(4), 28–31.</li>
          <li>Skelton, M. &amp; Pais, M. (2019). <em>Team Topologies: Organizing Business and Technology Teams for Fast Flow</em>. IT Revolution Press.</li>
          <li>Newman, S. (2015). <em>Building Microservices</em>. O'Reilly Media.</li>
          <li>MacCormack, A., Rusnak, J. &amp; Baldwin, C. Y. (2012). Exploring the Duality Between Product and Organizational Architectures. <em>Research Policy</em>, 41(8), 1309–1324.</li>
          <li>Forsgren, N., Humble, J. &amp; Kim, G. (2018). <em>Accelerate</em>. IT Revolution Press.</li>
        </ol>
      </div>
    </div>
  )
}

function ArticleCTA() {
  return (
    <section className="cs-cta">
      <h3>Architecture problems<br /><span>that are really org problems?</span></h3>
      <p>I diagnose the organizational structures that produce system architecture — and design both in alignment. Let's talk about what your systems are telling you about your organization.</p>
      <a href="https://calendly.com/jayburgessjr/long-meet" className="cs-cta-btn" target="_blank" rel="noreferrer">Schedule a Call →</a>
    </section>
  )
}

function ArticleFooter() {
  return (
    <footer>
      <div className="footer-id"><strong>Jay Burgess</strong> · Principal AI Systems Architect · Founder & CTO, Revuity Systems</div>
      <div className="footer-id">jay@revuitysys.com</div>
    </footer>
  )
}

export default function ArticleOrgAsArchitecture() {
  usePageMeta({
    title: "The Org Chart Is the Architecture — Jay Burgess",
    description: "Conway's Law as a leadership tool: how team structure determines system quality and what technical leaders can do about it.",
  })
  return (
    <>
      <ArticleNav />
      <ArticleHero />
      <ArticleBody />
      <ArticleCTA />
      <ArticleFooter />
    </>
  )
}
