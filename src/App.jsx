import React, { useEffect } from 'react';
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import Home from './pages/Home';
import About from './pages/About';
import ArrowHotels from './pages/ArrowHotels';
import ExploreServices from './pages/ExploreServices';
import RetailService from './pages/services/Retail';
import HospitalityService from './pages/services/Hospitality';
import IndustrialService from './pages/services/Industrial';
import OfficeService from './pages/services/Office';
import Gallery from './pages/Gallery';
import Reviews from './pages/Reviews';
import Contact from './pages/Contact';

// ScrollToTop helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="min-h-screen flex flex-col bg-[#FBF8F2] text-[#14171F]">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/arrow-hotels" element={<ArrowHotels />} />
            <Route path="/services" element={<ExploreServices />} />
            <Route path="/services/retail" element={<RetailService />} />
            <Route path="/services/hospitality" element={<HospitalityService />} />
            <Route path="/services/industrial" element={<IndustrialService />} />
            <Route path="/services/office" element={<OfficeService />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/reviews" element={<Reviews />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </BrowserRouter>
  );
}
