import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <div className="hero-left">
          <div className="hero-eyebrow">
            Principal Forward Deployed Engineer · Los Angeles · Open to remote
          </div>
          <h1 className="hero-headline">
            I turn ambiguous operational and regulatory problems into production
            systems that <span className="orange">move real money.</span>
          </h1>
          <p className="hero-summary">
            For fifteen years I have walked into messy operational and
            regulatory problems and walked out with software that works.
            Seventeen systems and counting, each one carried from the first
            conversation all the way to the day the team runs it without me. One
            of them, a multi-agent Title IV compliance platform, brought in $2.7
            million of new revenue in its first three months.
          </p>
          <div className="hero-ctas">
            <a
              href="https://calendly.com/jayburgessjr/long-meet"
              className="cta-btn"
              target="_blank"
              rel="noreferrer"
            >
              Book a call →
            </a>
            <Link to="/higher-ed-compliance-software" className="cta-btn-ghost">
              Read the case study
            </Link>
          </div>
          <div className="hero-availability">
            <span className="ha-dot" />
            Available now · Full-time principal roles &amp; fractional
            engagements
          </div>
        </div>

        <div className="hero-photo-wrap">
          <div className="hero-photo-placeholder">
            <img src="/jayburgessputplr.png" alt="Jay Burgess" />
          </div>
        </div>
      </div>

      <div className="hero-bottom">
        <div className="hero-cell">
          <div className="hc-label">Systems shipped</div>
          <div className="hc-val">
            17<span>+</span>
          </div>
          <div className="hc-sub">
            Production AI &amp; data systems delivered end to end
          </div>
        </div>
        <div className="hero-cell">
          <div className="hc-label">New revenue</div>
          <div className="hc-val">
            $2.7<span>M</span>
          </div>
          <div className="hc-sub">
            New revenue from the compliance platform in its first three months,
            on a $1.7M base
          </div>
        </div>
        <div className="hero-cell">
          <div className="hc-label">Enterprise scale</div>
          <div className="hc-val">
            $6<span>B</span>
          </div>
          <div className="hc-sub">
            Global marketing spend governed at Adobe · Walmart alum
          </div>
        </div>
      </div>
    </section>
  );
}
