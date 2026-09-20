import { Toaster } from "@/components/ui/toaster";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { LanguageProvider } from "./i18n/LanguageContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import ThemeToggle from "@/components/theme/ThemeToggle";
import './index.css';

const App = () => (
  <ThemeProvider>
    <LanguageProvider>
      <Toaster />
      <ThemeToggle className="hidden md:flex" />

      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  </ThemeProvider>
);

export default App;
