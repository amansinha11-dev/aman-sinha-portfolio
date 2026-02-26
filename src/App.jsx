// src/App.jsx

import React from 'react';
import Header from "./components/Header";
import HeroSection from "./components/HeroSection";
import CustomCursor from "./components/CustomCursor";
import AboutSection from "./components/AboutSection";
import ProjectsSection from './components/ProjectsSection';
import ContactSection from './components/ContactSection';
import InternshipSection from './components/InternshipSection';
import CertificatesSection from './components/CertificatesSection';
import Footer from './components/Footer';
import ProgressBar from './components/ProgressBar';

export default function App() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Header Navigation */}
      <Header />
      
      {/* Main Content Sections */}
      <main>
        {/* Hero Section - Landing page with animations */}
        <HeroSection />
        
        {/* About Section - Personal info and skills */}
        <AboutSection />
        
        {/* Projects Section - Portfolio showcase */}
        <ProjectsSection />

        {/* Internship Section - Work experience */}
        <InternshipSection />

        {/* Certificates Section - Certifications */}
        <CertificatesSection />
        
        {/* Contact Section - Contact form and info */}
        <ContactSection />
      </main>
      
      {/* Footer */}
      <Footer />
      
      {/* Interactive Elements */}
      <CustomCursor />
      <ProgressBar />
    </div>
  );
}
 