import Hero from "../components/Hero";
import Method from "../components/Method";
import Proof from "../components/Proof";
import Companies from "../components/Companies";
import Testimonials from "../components/Testimonials";
import AboutBand from "../components/AboutBand";
import CTA from "../components/CTA";
import Footer from "../components/Footer";
import { usePageMeta } from "../hooks/usePageMeta";

export default function Home() {
  usePageMeta({
    title: "Jay Burgess, Principal Forward Deployed Engineer in Los Angeles",
    description:
      "I'm a Principal Forward Deployed Engineer in Los Angeles and a compliance expert for regulated AI. I turn messy operational and regulatory problems into production software for regulated teams. Fifteen years in, seventeen systems shipped, including a core operational workflow rebuild that brought in $2.7 million in its first three months.",
  });

  return (
    <>
      <Hero />
      <Method />
      <Proof />
      <Companies />
      <Testimonials />
      <AboutBand />
      <CTA />
      <Footer />
    </>
  );
}
