import React from 'react';
import { PartnersContent } from '../types';

interface PartnersProps {
  content: PartnersContent;
}

const Partners: React.FC<PartnersProps> = ({ content }) => {
  return (
    <section id="partners" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{content.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {content.list.map((partner, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center justify-center p-4 bg-slate-50 border border-slate-100 rounded-xl hover:shadow-lg hover:border-tech-200 hover:bg-white transition-all duration-300 group"
            >
              {/* Image Container */}
              <div className="w-full h-24 bg-white rounded-lg border border-slate-100 mb-4 flex items-center justify-center p-2 overflow-hidden group-hover:border-tech-100 transition-colors">
                 <div className="w-full h-full flex items-center justify-center">
                    <img 
                      src={partner.imgUrl} 
                      alt={partner.name}
                      className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300" 
                    />
                 </div>
              </div>
              
              <span className="text-slate-600 font-semibold text-center text-sm md:text-base group-hover:text-tech-600 transition-colors">
                {partner.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Partners;