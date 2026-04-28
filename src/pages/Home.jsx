import Nav from '../components/Nav'
import Hero from '../components/Hero'
import OperatingLaw from '../components/OperatingLaw'
import Method from '../components/Method'
import CaseBand from '../components/CaseBand'
import Proof from '../components/Proof'
import Companies from '../components/Companies'
import Skills from '../components/Skills'
import RevuityBand from '../components/RevuityBand'
import ProductsBand from '../components/ProductsBand'
import EngagementSection from '../components/EngagementSection'
import EngagementBand from '../components/EngagementBand'
import Methodology from '../components/Methodology'
import WalmartBand from '../components/WalmartBand'
import CTA from '../components/CTA'
import Footer from '../components/Footer'
import { usePageMeta } from '../hooks/usePageMeta'

export default function Home() {
  usePageMeta({
    title: 'Jay Burgess — I Walk In. I Find It. I Ship It.',
    description:
      'Principal AI Systems Architect and Founder & CTO of Revuity Systems. 15+ years, $2.7M in verified ROI. I diagnose, build, and scale AI systems, data infrastructure, and internal tools.',
  })

  return (
    <>
      <Nav />
      <Hero />
      <OperatingLaw />
      <Method />
      <CaseBand />
      <Proof />
      <Companies />
      <WalmartBand />
      <Skills />
      <RevuityBand />
      <ProductsBand />
      <EngagementSection />
      <EngagementBand />
      <Methodology />
      <CTA />
      <Footer />
    </>
  )
}
