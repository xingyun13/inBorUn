import React from 'react';
import { ProductsContent } from '../types';
import { ArrowRight, Cpu, Fan, Settings, Wind } from 'lucide-react';

interface ProductsProps {
  content: ProductsContent;
  onViewProduct: (id: string) => void;
}

const Products: React.FC<ProductsProps> = ({ content, onViewProduct }) => {
  // Helper to assign icons to product types for rich visual accents
  const getProductIcon = (id: string) => {
    switch (id) {
      case 'high-speed-hair-dryer':
      case 'industrial-fan':
      case 'duct-fan':
      case 'server-fan':
        return <Fan size={20} className="text-white shrink-0 animate-spin-slow" />;
      case 'vf-water-pump':
        return <Settings size={20} className="text-white shrink-0 animate-spin-slow" />;
      case 'robot-vacuum':
      case 'handheld-vacuum':
        return <Cpu size={20} className="text-white shrink-0" />;
      default:
        return <Wind size={20} className="text-white shrink-0" />;
    }
  };

  return (
    <section id="products" className="py-20 bg-white border-t border-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4 tracking-tight">
            {content.title}
          </h2>
          <div className="w-20 h-1 bg-tech-600 mx-auto rounded-full mb-4"></div>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto font-light">
            {content.subtitle}
          </p>
        </div>

        {/* 2 rows of 4 boxes (8 boxes total) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {content.list.map((product) => (
            <div 
              key={product.id}
              onClick={() => onViewProduct(product.id)}
              className="group bg-slate-50/50 border border-slate-100 rounded-2xl overflow-hidden hover:border-tech-500 hover:shadow-xl transition-all duration-300 flex flex-col cursor-pointer shadow-sm"
            >
              {/* Product Card Image */}
              <div className="relative h-48 w-full overflow-hidden bg-slate-100">
                <img 
                  src={product.imgUrl} 
                  alt={product.name}
                  className="w-full h-full object-cover transform scale-100 group-hover:scale-105 transition-transform duration-500 ease-out brightness-95 group-hover:brightness-100"
                  referrerPolicy="no-referrer"
                />
                
                {/* Visual subtle overlay gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-60"></div>
                
                {/* Clean white micro card icon indicator */}
                <div className="absolute top-4 right-4 p-2.5 bg-tech-600/90 rounded-xl shadow-md border border-white/10 group-hover:bg-tech-500 transition-colors">
                  {getProductIcon(product.id)}
                </div>
              </div>

              {/* Product Info */}
              <div className="p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-lg font-bold text-slate-800 group-hover:text-tech-600 transition-colors mb-3 line-clamp-1">
                    {product.name}
                  </h3>
                  <p className="text-slate-600 text-sm leading-relaxed line-clamp-3 mb-5 font-light">
                    {product.desc}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-tech-600 group-hover:text-tech-500 font-bold text-xs uppercase tracking-wider transition-colors">
                  <span>{content.viewDetailText}</span>
                  <div className="flex items-center justify-center p-1.5 rounded-full bg-slate-100 group-hover:bg-tech-500 group-hover:text-white transition-all">
                    <ArrowRight className="w-3.5 h-3.5 transform translate-x-0 group-hover:translate-x-0.5 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;
