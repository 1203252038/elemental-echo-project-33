
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "@/components/ScrollToTop";
import Index from "./pages/Index";
import AboutElemental from "./pages/AboutElemental";
import StudentStories from "./pages/StudentStories";
import AlexStory     from "@/pages/stories/Alex";
import CelesteStory  from "@/pages/stories/Celeste";
import EdStory       from "@/pages/stories/Ed";
import JuliaStory    from "@/pages/stories/Julia";
import SaraStory     from "@/pages/stories/Sara";
import StephenStory  from "@/pages/stories/Stephen";
import StewartStory  from "@/pages/stories/Stewart";
import TheLoophole from "./pages/TheLoophole";
import SeeHowWithVids from "./pages/SeeHowWithVids";
import Terms from "./pages/Terms";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import Tutoring from "./pages/Tutoring";

import Login from "./pages/Login";
import Auth from "./pages/Auth";
import NotFound from "./pages/NotFound";
import BonusContent from "./pages/BonusContent";
import TestTaker from "./pages/TestTaker";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-elemental" element={<AboutElemental />} />
          <Route path="/student-stories" element={<StudentStories />} />
          <Route path="/stories/alex"    element={<AlexStory />} />
          <Route path="/stories/celeste" element={<CelesteStory />} />
          <Route path="/stories/ed"      element={<EdStory />} />
          <Route path="/stories/julia"   element={<JuliaStory />} />
          <Route path="/stories/sara"    element={<SaraStory />} />
          <Route path="/stories/stephen" element={<StephenStory />} />
          <Route path="/stories/stewart" element={<StewartStory />} />
          <Route path="/the-loophole-in-lsat-logical-reasoning" element={<TheLoophole />} />
          <Route path="/see-how" element={<SeeHowWithVids />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/tutoring" element={<Tutoring />} />
          
          <Route path="/login" element={<Login />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/bonus/test-taker" element={<TestTaker />} />
          <Route path="/bonus/challenge-questions" element={<BonusContent title="Challenge Question Explanations" />} />
          <Route path="/bonus/answer-keys" element={<BonusContent title="Answer Keys" />} />
          <Route path="/bonus/deleted-scenes" element={<BonusContent title="Deleted Scenes" />} />
          <Route path="/bonus/study-gear" element={<BonusContent title="Study Gear Recommendations" />} />
          <Route path="/bonus/newsletter" element={<BonusContent title="Get More Loophole in Your Inbox" />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
