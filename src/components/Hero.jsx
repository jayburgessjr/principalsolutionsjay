export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            Principal AI Engineer · Founder & Principal Forward Deployed
            Engineer, Revuity Systems
          </div>
          <h1 className="hero-headline">
            The Architect.
            <br />
            <span className="orange">The General.</span>
          </h1>
          <p className="hero-summary">
            15+ years embedding with teams to ship production AI and data
            systems end to end — scoping the real problem, building the whole
            stack with AI-assisted development (Claude Code), hardening it, and
            handing it off so the team owns it. Days and weeks, not quarters. I
            set the direction, build the capability around it, and get in the
            trenches when the work demands it. AI will change work. What matters
            is whether it elevates the people inside an organization or erases
            them. That is what I build for.
          </p>
          <div className="hero-ctas">
            <a
              href="https://calendly.com/jayburgessjr/long-meet"
              className="cta-btn"
              target="_blank"
              rel="noreferrer"
            >
              Schedule a call →
            </a>
            <a href="#proof" className="cta-btn-ghost">
              See the work
            </a>
          </div>
          <div className="hero-availability">
            <span className="ha-dot" />
            Available now · Fractional engagements &amp; full-time principal
            roles at $350K+
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
          <div className="hc-val">
            15<span>+</span>
          </div>
          <div className="hc-sub">
            Years solving business problems with technology — end to end
          </div>
        </div>
        <div className="hero-cell">
          <div className="hc-label">Verified Impact</div>
          <div className="hc-val">
            $2.7<span>M</span>
          </div>
          <div className="hc-sub">
            Documented business impact in enterprise revenue operations
          </div>
        </div>
        <div className="hero-cell">
          <div className="hc-label">Fortune 500</div>
          <div className="hc-val">
            Walmart<span>.</span>
          </div>
          <div className="hc-sub">
            Adobe · HEAG · Revuity Systems · Harvard · LMU
          </div>
        </div>
      </div>
    </section>
  );
}
