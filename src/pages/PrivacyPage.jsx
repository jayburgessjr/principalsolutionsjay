import { usePageMeta } from "../hooks/usePageMeta";
import "../casestudy.css";
import Footer from "../components/Footer";

export default function PrivacyPage() {
  usePageMeta({
    title: "Privacy Policy, Revuity Systems",
    description:
      "How Revuity Systems handles the messages and contact details you share through Gloria, the AI assistant on Jay Burgess's site.",
  });

  return (
    <>
      <section className="cs-hero">
        <div className="cs-inner">
          <div className="cs-eyebrow">Revuity Systems</div>
          <h1 className="cs-title">
            Privacy <span>Policy</span>
          </h1>
          <p className="cs-desc">
            Plain language, no surprises. This explains what we collect when you
            use Gloria, our AI assistant, and what we do with it.
          </p>
        </div>
      </section>

      <section className="cs-section">
        <div className="cs-section-inner">
          <div className="cs-prose" style={{ maxWidth: "720px" }}>
            <h2>What we collect</h2>
            <p>
              When you chat with Gloria, Revuity Systems collects and stores the
              messages you send and any contact details you choose to provide,
              such as your name and email address.
            </p>

            <h2>Why we collect it</h2>
            <p>
              We use this information for one purpose: to answer your questions
              and follow up about your inquiry. That is it. We do not sell your
              data, and we do not share it for advertising.
            </p>

            <h2>Your consent</h2>
            <p>
              By continuing to use the assistant, you consent to this collection
              and to being contacted about the inquiry you started. If you would
              rather not share anything, you can simply close the chat and reach
              out directly by email instead.
            </p>

            <h2>How it is handled</h2>
            <p>
              Your messages are processed to generate a response and are kept
              only as long as we need them to respond and follow up. To power
              the assistant, your messages are sent to our AI model provider,
              which processes them under its own terms. We keep access limited
              to what is needed to respond to you.
            </p>

            <h2>Your choices</h2>
            <p>
              You can ask us to delete the messages and contact details tied to
              your inquiry at any time. Email{" "}
              <a href="mailto:jay@revuitysys.com">jay@revuitysys.com</a> and we
              will take care of it.
            </p>

            <h2>Contact</h2>
            <p>
              Questions about this policy? Email{" "}
              <a href="mailto:jay@revuitysys.com">jay@revuitysys.com</a>.
            </p>

            <p style={{ marginTop: "2rem", opacity: 0.6 }}>
              Last updated July 2026.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}
