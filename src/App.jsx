import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import RevuityCaseStudy from './pages/RevuityCaseStudy'
import WalmartCaseStudy from './pages/WalmartCaseStudy'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reggie-case-study" element={<CaseStudy />} />
        <Route path="/revuity-case-study" element={<RevuityCaseStudy />} />
        <Route path="/walmart-case-study" element={<WalmartCaseStudy />} />
      </Routes>
    </BrowserRouter>
  )
}
