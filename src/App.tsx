import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import Groups from "./pages/Groups";
import Events from "./pages/Events";
import Credits from "./pages/Credits";
import Verify from "./pages/Verify";
import Withdraw from "./pages/Withdraw";
import Boost from "./pages/Boost";
import { UserProvider } from "./contexts/UserContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      {/* Wrap the entire app in UserProvider so that
          user state is available throughout */}
      <UserProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* Custom routes for new pages */}
            <Route path="/groups" element={<Groups />} />
            <Route path="/events" element={<Events />} />
            <Route path="/credits" element={<Credits />} />
            <Route path="/verify" element={<Verify />} />
            <Route path="/withdraw" element={<Withdraw />} />
            <Route path="/boost" element={<Boost />} />
            {/* CATCH-ALL ROUTE MUST REMAIN LAST */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </UserProvider>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
