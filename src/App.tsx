// libs
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// provider
import { ThemeProvider } from "./providers/theme";

// pages
import Home from "./pages/Home";
import Services from "./pages/Services";
import Team from "./pages/Team";
import Portfolio from "./pages/Portfolio";
import Blog from "./pages/Blog";
import Careers from "./pages/Careers";
import ContactUs from "./pages/ContactUs";

export default function App() {
  return (
    <ThemeProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/team" element={<Team />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
}
