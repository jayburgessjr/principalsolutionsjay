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
import ArticlesPage from './pages/ArticlesPage'
import ArticleAIScale from './pages/ArticleAIScale'
import ArticleDataDebt from './pages/ArticleDataDebt'
import ArticleInternalTools from './pages/ArticleInternalTools'
import ArticleRootCause from './pages/ArticleRootCause'
import ArticleAIPilots from './pages/ArticleAIPilots'
import ArticleRAG from './pages/ArticleRAG'
import ArticleBuildVsBuy from './pages/ArticleBuildVsBuy'
import ArticleWorkflowAutomation from './pages/ArticleWorkflowAutomation'
import ArticleTechDueDiligence from './pages/ArticleTechDueDiligence'
import ArticleOrgAsArchitecture from './pages/ArticleOrgAsArchitecture'
import ArticleVendorEval from './pages/ArticleVendorEval'
import ArticlePromptEngineering from './pages/ArticlePromptEngineering'
import ArticleHandoff from './pages/ArticleHandoff'

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
        <Route path="/articles" element={<ArticlesPage />} />
        <Route path="/article/ai-systems-at-scale" element={<ArticleAIScale />} />
        <Route path="/article/data-debt" element={<ArticleDataDebt />} />
        <Route path="/article/internal-tools" element={<ArticleInternalTools />} />
        <Route path="/article/root-cause-diagnosis" element={<ArticleRootCause />} />
        <Route path="/article/ai-pilots-to-production" element={<ArticleAIPilots />} />
        <Route path="/article/rag-architecture" element={<ArticleRAG />} />
        <Route path="/article/build-vs-buy" element={<ArticleBuildVsBuy />} />
        <Route path="/article/workflow-automation" element={<ArticleWorkflowAutomation />} />
        <Route path="/article/technical-due-diligence" element={<ArticleTechDueDiligence />} />
        <Route path="/article/org-as-architecture" element={<ArticleOrgAsArchitecture />} />
        <Route path="/article/ai-vendor-evaluation" element={<ArticleVendorEval />} />
        <Route path="/article/beyond-prompt-engineering" element={<ArticlePromptEngineering />} />
        <Route path="/article/the-handoff-problem" element={<ArticleHandoff />} />
      </Routes>
    </BrowserRouter>
  )
}
