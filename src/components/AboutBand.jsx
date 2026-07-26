import { Link } from "react-router-dom";

export default function AboutBand() {
  return (
    <div className="about-band" id="about">
      <div className="about-band-inner">
        <div className="about-band-label">About Jay</div>
        <h2 className="about-band-heading">Who Is Jay Burgess</h2>
        <p className="about-band-sub">Executive Brief</p>
        <p className="about-band-body">
          Principal Forward Deployed Engineer. 15+ years. A multi-agent Title IV
          compliance platform that generated $2.7M in new revenue in three
          months.
          <br />
          The one-page read for anyone who wants to know the person behind the
          work, where he came from, how he thinks, and why it matters.
        </p>
        <Link to="/about" className="about-band-link">
          Read the Brief →
        </Link>
      </div>
    </div>
  );
}
