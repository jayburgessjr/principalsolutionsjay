import { BrowserRouter, Routes, Route } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import ChatSidebar from './components/ChatSidebar'
import Home from './pages/Home'
import CaseStudy from './pages/CaseStudy'
import RevuityCaseStudy from './pages/RevuityCaseStudy'
import WalmartCaseStudy from './pages/WalmartCaseStudy'
import RevuityProductsPage from './pages/RevuityProductsPage'
import EngagementPage from './pages/EngagementPage'
import AboutPage from './pages/AboutPage'
import ArticleAIScale from './pages/ArticleAIScale'
import ArticleDataDebt from './pages/ArticleDataDebt'
import ArticleInternalTools from './pages/ArticleInternalTools'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatSidebar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reggie-case-study" element={<CaseStudy />} />
        <Route path="/revuity-case-study" element={<RevuityCaseStudy />} />
        <Route path="/walmart-case-study" element={<WalmartCaseStudy />} />
        <Route path="/revuity-products" element={<RevuityProductsPage />} />
        <Route path="/engagement" element={<EngagementPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/article/ai-systems-at-scale" element={<ArticleAIScale />} />
        <Route path="/article/data-debt" element={<ArticleDataDebt />} />
        <Route path="/article/internal-tools" element={<ArticleInternalTools />} />
      </Routes>
    </BrowserRouter>
  )
}
