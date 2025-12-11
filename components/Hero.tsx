import React from 'react';
import { ArrowRight } from 'lucide-react';
import { HeroContent } from '../types';

interface HeroProps {
  content: HeroContent;
}

const Hero: React.FC<HeroProps> = ({ content }) => {
  return (
    <section id="home" className="relative h-screen flex items-center justify-center overflow-hidden bg-slate-900">
      {/* Abstract Tech Background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-tech-900 opacity-90 z-10"></div>
        <img 
          src="https://picsum.photos/id/2/1920/1080" 
          alt="Technology Background" 
          className="w-full h-full object-cover opacity-30"
        />
        {/* Animated Overlay Dots/Grid could go here */}
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10 z-10"></div>
      </div>

      <div className="relative z-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {content.title}
          </h1>
          <p className="text-lg md:text-2xl text-slate-300 mb-10 max-w-3xl mx-auto font-light leading-relaxed">
            {content.subtitle}
          </p>
          <button 
            onClick={() => document.getElementById('solutions')?.scrollIntoView({ behavior: 'smooth' })}
            className="group inline-flex items-center px-8 py-4 bg-tech-600 hover:bg-tech-500 text-white font-semibold rounded-full transition-all duration-300 transform hover:scale-105 shadow-lg shadow-tech-500/30"
          >
            {content.cta}
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>

      {/* Decorative Bottom Fade */}
      <div className="absolute bottom-0 left-0 w-full h-12 bg-gradient-to-t from-white to-transparent z-20"></div>
    </section>
  );
};

export default Hero;