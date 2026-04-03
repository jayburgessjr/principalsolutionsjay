import jayPhoto from '../assets/jay-profile.png'

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            AI Systems Architect · Builder · Operator
          </div>
          <h1 className="hero-headline">
            I Walk In.<br />
            <span className="orange">I Find It.</span><br />
            <span className="outline">I Ship It.</span>
          </h1>
          <p className="hero-summary">
            AI systems architect who designs, builds, and operates production-grade AI in regulated environments. Fourteen-plus years spanning Fortune 500, higher education, and venture-backed software. Built ReggieAI — a production agentic compliance platform for Title IV federal financial aid with $2.7M in documented business impact. Founder &amp; CTO of Revuity Systems, an LA-based AI-first software studio. I don't just use AI — I architect the systems that make it reliable at scale.
          </p>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-placeholder">
            <img src={jayPhoto} alt="Jay Burgess" />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-cell">
          <div className="hc-label">Experience</div>
          <div className="hc-val">15<span>+</span></div>
          <div className="hc-sub">Years solving business problems with technology — end to end</div>
        </div>
        <div className="hero-cell">
          <div className="hc-label">Verified Impact</div>
          <div className="hc-val">$2.7<span>M</span></div>
          <div className="hc-sub">Documented ROI across enterprise and regulated industry work</div>
        </div>
        <div className="hero-cell">
          <div className="hc-label">Fortune 500</div>
          <div className="hc-val">Walmart<span>.</span></div>
          <div className="hc-sub">Adobe · HEAG · Revuity Systems · Harvard · LMU</div>
        </div>
      </div>
    </section>
  )
}
