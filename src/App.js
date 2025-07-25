import React from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import HowItWorks from './components/HowItWorks';
import ForWho from './components/ForWho';
import Example from './components/Example';
import WhyWorks from './components/WhyWorks';
import Pricing from './components/Pricing';
import Cta from './components/Cta';
import Partners from './components/Partners';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-white font-sans">
      <Header />
      <Hero />
      <About />
      <HowItWorks />
      <ForWho />
      <Example />
      <WhyWorks />
      <Pricing />
      <Cta />
      <Partners />
      <Footer />
    </div>
  );
}

export default App;