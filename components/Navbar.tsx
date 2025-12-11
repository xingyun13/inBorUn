import React, { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Language, NavContent } from '../types';

interface NavbarProps {
  lang: Language;
  setLang: (lang: Language) => void;
  content: NavContent;
  onNavClick: (id: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ lang, setLang, content, onNavClick }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleLang = () => {
    setLang(lang === 'zh' ? 'en' : 'zh');
    setIsOpen(false);
  };

  const handleNav = (id: string) => {
    onNavClick(id);
    setIsOpen(false);
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-white/90 backdrop-blur-md shadow-md py-4' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <div className="flex items-center cursor-pointer" onClick={() => handleNav('home')}>
            <div style={{ marginRight: 10 }}>
              <img
                src='http://inborun.com/uploadfiles/fla/2022512162710.jpg'
                alt='logo'
                width={68}
                height={40}
              />
            </div>
            <span className={`text-xl font-bold tracking-tight ${scrolled ? 'text-slate-900' : 'text-white'}`}>
              {content.logoMain} <span className="text-tech-500">{content.logoHighlight}</span>
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8">
            {['home', 'about', 'solutions', 'partners', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className={`text-sm font-medium hover:text-tech-500 transition-colors ${scrolled ? 'text-slate-700' : 'text-slate-100'}`}
              >
                {content[item as keyof NavContent]}
              </button>
            ))}

            <button
              onClick={toggleLang}
              className={`flex items-center space-x-1 px-3 py-1 rounded-full border ${scrolled ? 'border-slate-200 text-slate-700 hover:bg-slate-50' : 'border-white/30 text-white hover:bg-white/10'}`}
            >
              <Globe size={14} />
              <span className="text-xs font-bold">{lang === 'zh' ? 'EN' : '中'}</span>
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className={`${scrolled ? 'text-slate-900' : 'text-white'}`}
            >
              {isOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      {isOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl border-t border-slate-100">
          <div className="px-4 py-6 space-y-4 flex flex-col">
            {['home', 'about', 'solutions', 'partners', 'contact'].map((item) => (
              <button
                key={item}
                onClick={() => handleNav(item)}
                className="text-left text-base font-medium text-slate-700 hover:text-tech-600 px-2 py-2 rounded-md hover:bg-slate-50"
              >
                {content[item as keyof NavContent]}
              </button>
            ))}
            <div className="pt-4 border-t border-slate-100">
              <button
                onClick={toggleLang}
                className="flex items-center space-x-2 text-slate-600 px-2 py-2"
              >
                <Globe size={18} />
                <span>Switch to {lang === 'zh' ? 'English' : '中文'}</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;