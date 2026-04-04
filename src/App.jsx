import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import RevuityCaseStudy from './pages/RevuityCaseStudy'
import WalmartCaseStudy from './pages/WalmartCaseStudy'
import RevuityProductsPage from './pages/RevuityProductsPage'
import EngagementPage from './pages/EngagementPage'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reggie-case-study" element={<CaseStudy />} />
        <Route path="/revuity-case-study" element={<RevuityCaseStudy />} />
        <Route path="/walmart-case-study" element={<WalmartCaseStudy />} />
        <Route path="/revuity-products" element={<RevuityProductsPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
      </Routes>
    </BrowserRouter>
  )
}
