

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            Principal AI Systems Architect · Founder & CTO, Revuity Systems
          </div>
          <h1 className="hero-headline">
            I Walk In.<br />
            <span className="orange">I Find It.</span><br />
            <span className="outline">I Ship It.</span>
          </h1>
          <p className="hero-summary">
            15+ years turning broken systems into working ones — from root cause to shipped fix.
            I don't just use AI. I architect the integrated ecosystems that make it reliable at scale.
          </p>
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
