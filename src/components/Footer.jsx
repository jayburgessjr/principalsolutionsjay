import { Link } from "react-router-dom";

// UPDATE: replace with your actual LinkedIn URL
const LINKEDIN_URL = "https://www.linkedin.com/in/jayburgessjr/";

const FOOTER_COLUMNS = [
  {
    heading: "Case Studies",
    links: [
      {
        label: "Higher Ed Compliance Software",
        to: "/higher-ed-compliance-software",
      },
      { label: "Walmart, a data org from scratch", to: "/walmart-case-study" },
      { label: "Adobe marketing analytics", to: "/adobe-case-study" },
      { label: "Revuity Agentic OS", to: "/revuity-case-study" },
      { label: "P3, predictive retention platform", to: "/p3-case-study" },
      {
        label: "WealthOSnow, a personal financial OS",
        to: "/wealthos-case-study",
      },
      {
        label: "ConsultingIP, an ops dashboard",
        to: "/consultingip-case-study",
      },
      { label: "SBWrkFlow, veteran advocacy", to: "/sbworkflow-case-study" },
      { label: "All case studies →", to: "/case-studies" },
    ],
  },
  {
    heading: "For Recruiters",
    links: [
      { label: "One-page snapshot", to: "/snapshot" },
      { label: "Full resume", to: "/resume" },
      { label: "Resources & playbook", to: "/resources" },
      { label: "Engagement models", to: "/engagement" },
    ],
  },
  {
    heading: "Company",
    links: [
      { label: "About", to: "/about" },
      { label: "Full portfolio", to: "/work" },
      { label: "Revuity products", to: "/revuity-products" },
      { label: "Writing", to: "/articles" },
    ],
  },
];

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-grid">
        {FOOTER_COLUMNS.map((col) => (
          <div className="footer-col" key={col.heading}>
            <div className="footer-col-heading">{col.heading}</div>
            <ul className="footer-col-links">
              {col.links.map((link) => (
                <li key={link.to}>
                  <Link to={link.to}>{link.label}</Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
        <div className="footer-col">
          <div className="footer-col-heading">Connect</div>
          <ul className="footer-col-links">
            <li>
              <a href="mailto:jay@revuitysys.com">jay@revuitysys.com</a>
            </li>
            <li>
              <a href={LINKEDIN_URL} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </li>
            <li>
              <a
                href="https://calendly.com/jayburgessjr/long-meet"
                target="_blank"
                rel="noreferrer"
              >
                Schedule a Call
              </a>
            </li>
            <li className="footer-col-static">
              Los Angeles, CA · Open to Remote
            </li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-left">
          <div className="footer-id">
            <strong>Jay Burgess</strong> · Principal Forward Deployed Engineer ·
            Founder, Revuity Systems
          </div>
        </div>
        <div className="footer-right">
          <div className="footer-avail">
            <span className="footer-dot" />
            Available now
          </div>
        </div>
      </div>
    </footer>
  );
}
