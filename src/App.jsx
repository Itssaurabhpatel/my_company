import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Footer from './components/layout/Footer';
import About from './pages/About';
import Blog from './pages/Blog';
import Contact from './pages/Contact';
import Home from './pages/Home';
import NotFound from './pages/NotFound';
import Portfolio from './pages/Portfolio';
import Privacy from './pages/Privacy';
import Services from './pages/Services';
import Careers from './pages/Careers';
import TermsOfServices from './pages/TermsOfService';
import Sitemap from './pages/Sitemap';
import Security from './pages/Security';

// Import the 4 service detail pages - CORRECT PATH (directly in pages folder)
import CustomSoftware from './pages/CustomSoftware';
import WebDevelopment from './pages/WebDevelopment';
import MobileDevelopment from './pages/MobileDevelopment';
import UIdesign from './pages/UIDesign';
import DigitalMarketing from './pages/DigitalMarketing';

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            {/* Main Pages */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/privacy-policy" element={<Privacy />} />
            <Route path="/terms-of-service" element={<TermsOfServices />} />
            <Route path="/security" element={<Security />} />
            <Route path="/sitemap" element={<Sitemap />} />
            
            {/* Services Pages */}
            <Route path="/services" element={<Services />} />
            
            {/* Individual Service Detail Pages */}
            <Route path="/services/custom-software" element={<CustomSoftware />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/mobile-development" element={<MobileDevelopment />} />
            <Route path="/services/ui-ux-design" element={<UIdesign />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />

            {/* 404 Page */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;