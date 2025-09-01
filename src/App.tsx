import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import MentalHealth from "./pages/MentalHealth";
import PhysicalHealth from "./pages/PhysicalHealth";
import FinancialStability from "./pages/FinancialStability";
import BelongingCommunity from "./pages/BelongingCommunity";
import PurposeFulfillment from "./pages/PurposeFulfillment";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mental-health" element={<MentalHealth />} />
          <Route path="/physical-health" element={<PhysicalHealth />} />
          <Route path="/financial-stability" element={<FinancialStability />} />
          <Route path="/belonging-community" element={<BelongingCommunity />} />
          <Route path="/purpose-fulfillment" element={<PurposeFulfillment />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
