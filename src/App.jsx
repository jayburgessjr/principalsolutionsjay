import { lazy, Suspense } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import ChatSidebar from "./components/ChatSidebar";
import Nav from "./components/Nav";
import Home from "./pages/Home";

// Route-level code splitting: each page loads on demand.
const CaseStudy = lazy(() => import("./pages/CaseStudy"));
const RevuityCaseStudy = lazy(() => import("./pages/RevuityCaseStudy"));
const WalmartCaseStudy = lazy(() => import("./pages/WalmartCaseStudy"));
const RevuityProductsPage = lazy(() => import("./pages/RevuityProductsPage"));
const EngagementPage = lazy(() => import("./pages/EngagementPage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const ResumePage = lazy(() => import("./pages/ResumePage"));
const SnapshotPage = lazy(() => import("./pages/SnapshotPage"));
const ResourcesPage = lazy(() => import("./pages/ResourcesPage"));
const PrivacyPage = lazy(() => import("./pages/PrivacyPage"));
const CaseStudiesPage = lazy(() => import("./pages/CaseStudiesPage"));
const AdobeCaseStudy = lazy(() => import("./pages/AdobeCaseStudy"));
const P3CaseStudy = lazy(() => import("./pages/P3CaseStudy"));
const WealthOSCaseStudy = lazy(() => import("./pages/WealthOSCaseStudy"));
const WorkPage = lazy(() => import("./pages/WorkPage"));
const ArticlesPage = lazy(() => import("./pages/ArticlesPage"));
const ArticleAIScale = lazy(() => import("./pages/ArticleAIScale"));
const ArticleDataDebt = lazy(() => import("./pages/ArticleDataDebt"));
const ArticleInternalTools = lazy(() => import("./pages/ArticleInternalTools"));
const ArticleRootCause = lazy(() => import("./pages/ArticleRootCause"));
const ArticleAIPilots = lazy(() => import("./pages/ArticleAIPilots"));
const ArticleRAG = lazy(() => import("./pages/ArticleRAG"));
const ArticleBuildVsBuy = lazy(() => import("./pages/ArticleBuildVsBuy"));
const ArticleWorkflowAutomation = lazy(
  () => import("./pages/ArticleWorkflowAutomation"),
);
const ArticleTechDueDiligence = lazy(
  () => import("./pages/ArticleTechDueDiligence"),
);
const ArticleOrgAsArchitecture = lazy(
  () => import("./pages/ArticleOrgAsArchitecture"),
);
const ArticleVendorEval = lazy(() => import("./pages/ArticleVendorEval"));
const ArticlePromptEngineering = lazy(
  () => import("./pages/ArticlePromptEngineering"),
);
const ArticleHandoff = lazy(() => import("./pages/ArticleHandoff"));
const ArticleAgenticTrap = lazy(() => import("./pages/ArticleAgenticTrap"));
const ArticleDataReadiness = lazy(() => import("./pages/ArticleDataReadiness"));
const ArticleAIGovernance = lazy(() => import("./pages/ArticleAIGovernance"));

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <ChatSidebar />
      <Nav />
      <Suspense fallback={<div style={{ minHeight: "100vh" }} />}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/higher-ed-compliance-software"
            element={<CaseStudy />}
          />
          <Route path="/revuity-case-study" element={<RevuityCaseStudy />} />
          <Route path="/walmart-case-study" element={<WalmartCaseStudy />} />
          <Route path="/revuity-products" element={<RevuityProductsPage />} />
          <Route path="/engagement" element={<EngagementPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/case-studies" element={<CaseStudiesPage />} />
          <Route path="/work" element={<WorkPage />} />
          <Route path="/adobe-case-study" element={<AdobeCaseStudy />} />
          <Route path="/p3-case-study" element={<P3CaseStudy />} />
          <Route path="/wealthos-case-study" element={<WealthOSCaseStudy />} />
          <Route path="/privacy" element={<PrivacyPage />} />
          <Route path="/articles" element={<ArticlesPage />} />
          <Route
            path="/article/ai-systems-at-scale"
            element={<ArticleAIScale />}
          />
          <Route path="/article/data-debt" element={<ArticleDataDebt />} />
          <Route
            path="/article/internal-tools"
            element={<ArticleInternalTools />}
          />
          <Route
            path="/article/root-cause-diagnosis"
            element={<ArticleRootCause />}
          />
          <Route
            path="/article/ai-pilots-to-production"
            element={<ArticleAIPilots />}
          />
          <Route path="/article/rag-architecture" element={<ArticleRAG />} />
          <Route path="/article/build-vs-buy" element={<ArticleBuildVsBuy />} />
          <Route
            path="/article/workflow-automation"
            element={<ArticleWorkflowAutomation />}
          />
          <Route
            path="/article/technical-due-diligence"
            element={<ArticleTechDueDiligence />}
          />
          <Route
            path="/article/org-as-architecture"
            element={<ArticleOrgAsArchitecture />}
          />
          <Route
            path="/article/ai-vendor-evaluation"
            element={<ArticleVendorEval />}
          />
          <Route
            path="/article/beyond-prompt-engineering"
            element={<ArticlePromptEngineering />}
          />
          <Route
            path="/article/the-handoff-problem"
            element={<ArticleHandoff />}
          />
          <Route
            path="/article/the-agentic-trap"
            element={<ArticleAgenticTrap />}
          />
          <Route
            path="/article/data-readiness"
            element={<ArticleDataReadiness />}
          />
          <Route
            path="/article/governing-forward-deployed-ai"
            element={<ArticleAIGovernance />}
          />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/snapshot" element={<SnapshotPage />} />
          <Route path="/resources" element={<ResourcesPage />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
