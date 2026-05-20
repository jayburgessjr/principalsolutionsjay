import Nav from "../components/Nav";
import Hero from "../components/Hero";
import Method from "../components/Method";
import LeadershipLayer from "../components/LeadershipLayer";
import CaseBand from "../components/CaseBand";
import AboutBand from "../components/AboutBand";
import Proof from "../components/Proof";
import Testimonials from "../components/Testimonials";
import Companies from "../components/Companies";
import Skills from "../components/Skills";
import RevuityBand from "../components/RevuityBand";
import ProductsBand from "../components/ProductsBand";
import EngagementSection from "../components/EngagementSection";
import EngagementBand from "../components/EngagementBand";
import Methodology from "../components/Methodology";
import MethodologyBand from "../components/MethodologyBand";
import WalmartBand from "../components/WalmartBand";
import Articles from "../components/Articles";
import Books from "../components/Books";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title:
      "Jay Burgess — Founder & CEO, Revuity Systems | AI Systems & Product Studio",
    description:
      "Jay Burgess is the Founder & CEO of Revuity Systems, an AI-first software studio based in Los Angeles. $2.7M documented impact. Walmart & Adobe alumni. Certified Agentic Engineer (CAE).",
  });

  return (
    <>
      <Nav />
      <Hero />
      <Method />
      <LeadershipLayer />
      <Skills />
      <Companies />
      <Proof />
      <CaseBand />
      <Testimonials />
      <WalmartBand />
      <EngagementSection />
      <ProductsBand />
      <RevuityBand />
      <AboutBand />
      <Methodology />
      <EngagementBand />
      <Articles />
      <MethodologyBand />
      <Books />
      <CTA />
      <Footer />
    </>
  );
}
