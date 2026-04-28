

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            Principal AI Systems Architect · Founder & CTO, Revuity Systems
          </div>
          <h1 className="hero-headline">
            The Architect.<br />
            <span className="orange">The General.</span>
          </h1>
          <p className="hero-summary">
            15+ years leading AI and data initiatives end to end — from diagnosing the real problem,
            to architecting the fix, to developing the team that runs it in production. I set the
            direction. I build the capability around it. And when the work demands it, I get in the trenches.
          </p>
          <div className="hero-ctas">
            <a href="https://calendly.com/jayburgessjr/long-meet" className="cta-btn" target="_blank" rel="noreferrer">Schedule a call →</a>
            <a href="#proof" className="cta-btn-ghost">See the work</a>
          </div>
          <div className="hero-availability">
            <span className="ha-dot" />
            Available now · Fractional engagements &amp; full-time principal roles at $350K+
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-placeholder">
            <img src="/jay_burgess_.png" alt="Jay Burgess" />
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
