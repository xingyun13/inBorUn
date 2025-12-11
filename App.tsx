import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Solutions from './components/Solutions';
import Partners from './components/Partners';
import Contact from './components/Contact';
import Footer from './components/Footer';
import SolutionDetail from './components/SolutionDetail';
import { CONTENT } from './constants';
import { Language } from './types';

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('zh');
  // 'home' or the solution ID (bldc, mcu, bms)
  const [currentView, setCurrentView] = useState<string>('home');
  const content = CONTENT[lang];

  const handleNavClick = (id: string) => {
    if (currentView !== 'home') {
      setCurrentView('home');
      // Allow render to complete before scrolling
      setTimeout(() => {
        document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleViewDetail = (id: string) => {
    setCurrentView(id);
  };

  return (
    <div className="min-h-screen bg-white text-slate-900 font-sans selection:bg-tech-100 selection:text-tech-900">
      <Navbar 
        lang={lang} 
        setLang={setLang} 
        content={content.nav} 
        onNavClick={handleNavClick}
      />
      
      <main>
        {currentView === 'home' ? (
          <>
            <Hero content={content.hero} />
            <About content={content.about} />
            <Solutions content={content.solutions} onViewDetail={handleViewDetail} />
            <Partners content={content.partners} />
            <Contact content={content.contact} />
          </>
        ) : (
          <SolutionDetail 
            type={currentView} // Pass raw ID string directly
            content={content.solutionDetails[currentView]} 
            onBack={() => setCurrentView('home')} 
            onCategoryChange={(id) => setCurrentView(id)}
          />
        )}
      </main>

      <Footer content={content.footer} />
    </div>
  );
};

export default App;