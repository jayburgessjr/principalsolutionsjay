import Nav from '../components/Nav'
import Hero from '../components/Hero'
import Method from '../components/Method'
import CaseBand from '../components/CaseBand'
import Proof from '../components/Proof'
import Companies from '../components/Companies'
import Skills from '../components/Skills'
import RevuityBand from '../components/RevuityBand'
import ProductsBand from '../components/ProductsBand'
import Methodology from '../components/Methodology'
import WalmartBand from '../components/WalmartBand'
import CTA from '../components/CTA'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Nav />
      <Hero />
      <Method />
      <CaseBand />
      <Proof />
      <Companies />
      <WalmartBand />
      <Skills />
      <RevuityBand />
      <ProductsBand />
      <Methodology />
      <CTA />
      <Footer />
    </>
  )
}
