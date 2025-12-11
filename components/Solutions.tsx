import React from 'react';
import { SolutionsContent, SolutionItem } from '../types';
import { Fan, Cpu, Battery, ArrowRight } from 'lucide-react';

interface SolutionsProps {
  content: SolutionsContent;
  onViewDetail: (id: string) => void;
}

const Solutions: React.FC<SolutionsProps> = ({ content, onViewDetail }) => {
  const getIcon = (name: SolutionItem['iconName']) => {
    switch (name) {
      case 'bldc': return <Fan size={40} />;
      case 'mcu': return <Cpu size={40} />;
      case 'bms': return <Battery size={40} />;
      default: return <Cpu size={40} />;
    }
  };

  const getBgImage = (name: SolutionItem['iconName']) => {
     switch (name) {
      case 'bldc': return 'https://picsum.photos/seed/fan/800/600';
      case 'mcu': return 'https://picsum.photos/seed/chip/800/600';
      case 'bms': return 'https://picsum.photos/seed/battery/800/600';
      default: return 'https://picsum.photos/seed/tech/800/600';
    }
  }

  return (
    <section id="solutions" className="py-20 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{content.title}</h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">{content.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {content.categories.map((category, index) => (
            <div 
              key={index} 
              onClick={() => onViewDetail(category.id)}
              className="group bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col cursor-pointer"
            >
              <div className="relative h-48 overflow-hidden">
                 <img 
                    src={getBgImage(category.iconName)} 
                    alt={category.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-slate-900/40 group-hover:bg-slate-900/30 transition-colors"></div>
                  <div className="absolute bottom-4 left-4 text-white flex items-center space-x-3">
                    <div className="p-2 bg-white/20 backdrop-blur-sm rounded-lg">
                      {getIcon(category.iconName)}
                    </div>
                  </div>
              </div>
              
              <div className="p-8 flex-1 flex flex-col">
                <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-tech-600 transition-colors">{category.title}</h3>
                <ul className="space-y-3 flex-1">
                  {category.items.map((item, idx) => (
                    <li key={idx} className="flex items-center text-slate-600">
                      <span className="w-1.5 h-1.5 bg-tech-500 rounded-full mr-3"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="p-6 bg-slate-50 border-t border-slate-100 group-hover:bg-tech-50 transition-colors">
                <div className="text-tech-600 font-semibold text-sm uppercase tracking-wider flex items-center">
                  Learn More 
                  <ArrowRight className="ml-2 w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;