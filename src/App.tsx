
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
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
import Tutoring from "./pages/Tutoring";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/about-elemental" element={<AboutElemental />} />
          <Route path="/student-stories" element={<StudentStories />} />
          <Route path="/stories/alex" element={<AlexStory />} />
          <Route path="/student-stories" element={<StudentStories />} />
          <Route path="/stories/alex"    element={<AlexStory />} />
          <Route path="/stories/celeste" element={<CelesteStory />} />
          <Route path="/stories/ed"      element={<EdStory />} />
          <Route path="/stories/julia"   element={<JuliaStory />} />
          <Route path="/stories/sara"    element={<SaraStory />} />
          <Route path="/stories/stephen" element={<StephenStory />} />
          <Route path="/stories/stewart" element={<StewartStory />} />
          <Route path="/the-loophole-in-lsat-logical-reasoning" element={<TheLoophole />} />
          <Route path="/tutoring" element={<Tutoring />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
