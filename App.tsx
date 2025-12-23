
import React from 'react';
import TopBar from './components/TopBar';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import ProblemSolution from './components/ProblemSolution';
import Verticals from './components/Verticals';
import Services from './components/Services';
import SocialProof from './components/SocialProof';
import Methodology from './components/Methodology';
import Resources from './components/Resources';
import Manifesto from './components/Manifesto';
import Team from './components/Team';
import CTA from './components/CTA';
import Footer from './components/Footer';
import FloatingAI from './components/FloatingAI';
import Workflow from './components/Workflow';
import WhyUs from './components/WhyUs';
import ScrollProgress from './components/ScrollProgress';

const App = () => {
  const [isPopupMinimized, setIsPopupMinimized] = React.useState(false);

  return (
    <main className="min-h-screen bg-brand-black text-brand-white font-sans selection:bg-brand-orange selection:text-brand-black">
      <ScrollProgress />
      <TopBar
        isPopupMinimized={isPopupMinimized}
        onOpenPopup={() => setIsPopupMinimized(false)}
      />
      <Navbar />
      <Hero />
      <TrustBar />
      <ProblemSolution />
      <Verticals />
      <Services />
      <Workflow />
      <Methodology />
      <WhyUs />
      <Resources />
      <SocialProof />
      <Manifesto />
      <Team />
      <CTA />
      <Footer />
      <FloatingAI
        isMinimized={isPopupMinimized}
        onMinimize={() => setIsPopupMinimized(true)}
        onMaximize={() => setIsPopupMinimized(false)}
      />
    </main>
  );
}

export default App;
