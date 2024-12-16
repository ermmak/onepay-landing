import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero/Hero';
import Features from './components/Features/Features';
import TechnologySection from './components/Technology/TechnologySection';
import Footer from './components/Footer/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-gray-900">
      <Navbar />
      <main>
        <Hero />
        <Features />
        <TechnologySection />
      </main>
      <Footer />
    </div>
  );
}