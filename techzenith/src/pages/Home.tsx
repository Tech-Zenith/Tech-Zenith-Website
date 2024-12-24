import React from 'react';
import Hero from '../components/Hero';
import AboutSection from '../components/AboutSection';
import ExpertiseSection from '../components/ExpertiseSection';
import ApproachSection from '../components/ApproachSection';
import ContactSection from '../components/ContactSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Hero />
      <AboutSection />
      <ExpertiseSection />
      <ApproachSection />
      <ContactSection />
    </div>
  );
}