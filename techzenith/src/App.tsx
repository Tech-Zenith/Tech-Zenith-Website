import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Cybersecurity from './pages/services/Cybersecurity';
import CRMSolutions from './pages/services/CRMSolutions';
import CloudSolutions from './pages/services/CloudSolutions';
import StaffAugmentation from './pages/services/StaffAugmentation';
import WindowsSolution from './pages/services/WindowsSolution';

export default function App() {
  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/services/cybersecurity" element={<Cybersecurity />} />
        <Route path="/services/crm-solutions" element={<CRMSolutions />} />
        <Route path="/services/windows-solutions" element={<WindowsSolution />} />
        <Route path="/services/cloud-solutions" element={<CloudSolutions />} />
        <Route path="/services/staff-augmentation" element={<StaffAugmentation />} />
      </Routes>
      <Footer />
    </Router>
  );
}