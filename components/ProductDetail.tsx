import React, { useEffect } from 'react';
import { ProductsContent } from '../types';
import { ArrowLeft, Check, Compass, HelpCircle, PhoneCall, ShieldCheck, Cpu } from 'lucide-react';

interface ProductDetailProps {
  productId: string;
  content: ProductsContent;
  onBack: () => void;
}

const ProductDetail: React.FC<ProductDetailProps> = ({ productId, content, onBack }) => {
  const product = content.list.find((p) => p.id === productId);

  useEffect(() => {
    // Scroll to the top when the detail page is mounted
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [productId]);

  if (!product) {
    return (
      <div className="py-32 text-center text-slate-800 bg-slate-50 min-h-screen">
        <HelpCircle className="mx-auto w-16 h-16 text-slate-400 mb-4 animate-bounce" />
        <p className="text-xl font-semibold">Solution Not Found</p>
        <button 
          onClick={onBack}
          className="mt-6 px-6 py-2.5 bg-tech-600 text-white rounded-lg hover:bg-tech-500 transition-colors"
        >
          {content.backButton}
        </button>
      </div>
    );
  }

  const handleInquiryClick = () => {
    // Smooth-scroll to contact section
    const contactElem = document.getElementById('contact');
    if (contactElem) {
      contactElem.scrollIntoView({ behavior: 'smooth' });
    } else {
      onBack();
      setTimeout(() => {
        document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
      }, 150);
    }
  };

  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fade-in text-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Navigation Breadcrumb & Back action */}
        <div className="mb-8 flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-200 pb-4 gap-4">
          <button 
            onClick={onBack}
            className="flex items-center text-slate-600 hover:text-tech-600 transition-colors group font-semibold text-sm leading-6"
          >
            <ArrowLeft className="mr-2 w-5 h-5 group-hover:-translate-x-1 transition-transform" />
            {content.backButton}
          </button>
          
          <div className="text-xs text-slate-400 font-mono">
            Products / <span className="text-tech-600 font-medium">{product.name}</span>
          </div>
        </div>

        {/* Master Showcase Layout */}
        <div className="bg-white rounded-3xl border border-slate-100 shadow-xl overflow-hidden mb-12">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            
            {/* Left Column: High-fidelity Imagery */}
            <div className="relative min-h-[300px] sm:min-h-[400px] lg:min-h-[500px]">
              <img 
                src={product.imgUrl} 
                alt={product.name} 
                className="absolute inset-0 w-full h-full object-cover brightness-95"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-slate-900/40 via-transparent to-transparent"></div>
              
              {/* Product Badge Area */}
              <div className="absolute bottom-6 left-6 bg-tech-600/90 backdrop-blur-md text-white text-xs font-bold leading-none tracking-widest uppercase px-4 py-2 rounded-lg shadow-md border border-white/10 flex items-center gap-2">
                <Cpu size={14} />
                Inborun Solution
              </div>
            </div>

            {/* Right Column: Title & Description Section */}
            <div className="p-8 sm:p-12 lg:p-16 flex flex-col justify-between bg-white">
              <div>
                <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight mb-6">
                  {product.name}
                </h1>
                
                <div className="w-16 h-1 bg-tech-600 rounded-full mb-8"></div>
                
                <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-light mb-8">
                  {product.desc}
                </p>

                {/* Micro guarantees list */}
                <div className="space-y-4 mb-10">
                  <div className="flex items-start">
                    <div className="p-1 bg-emerald-50 rounded-full text-emerald-600 mr-3">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      具备高吞吐闭环矢量计算，零速度失步 FOC 无感设计
                    </p>
                  </div>
                  <div className="flex items-start">
                    <div className="p-1 bg-emerald-50 rounded-full text-emerald-600 mr-3">
                      <ShieldCheck size={18} />
                    </div>
                    <p className="text-sm text-slate-600 font-medium">
                      符合国家级电磁兼容 (EMC) Class B 及大功率能效认证
                    </p>
                  </div>
                </div>
              </div>

              {/* Inquiry CTA */}
              <button 
                onClick={handleInquiryClick}
                className="w-full sm:w-auto inline-flex items-center justify-center space-x-2 px-8 py-4 bg-tech-600 text-white rounded-xl font-bold shadow-lg shadow-tech-600/20 hover:bg-tech-500 transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0"
              >
                <PhoneCall size={18} />
                <span>
                  {content.title === "产品中心" ? "产品技术咨询" : "Inquire about this Solution"}
                </span>
              </button>
            </div>

          </div>
        </div>

        {/* Detailed Parameter and Features Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Key Features Column (Left-7) */}
          <div className="lg:col-span-7 bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-lg flex flex-col justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center mb-6">
                <Compass className="text-tech-600 mr-3 w-6 h-6 shrink-0" />
                {content.keyFeaturesText}
              </h2>
              
              <div className="space-y-4">
                {product.features.map((feature, idx) => (
                  <div 
                    key={idx}
                    className="flex items-start bg-slate-50 rounded-xl p-4 border border-slate-100 hover:border-tech-100 transition-colors group"
                  >
                    <div className="mt-1 mr-3 text-tech-600 shrink-0 bg-white shadow-sm p-1 rounded-full group-hover:bg-tech-50 transition-colors">
                      <Check size={16} />
                    </div>
                    <span className="text-slate-700 text-sm sm:text-base leading-relaxed">
                      {feature}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Disclaimer block inside feature card */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-xs text-slate-400 italic">
              Note: System specs can be customized according to special mechanical, dimensional, or thermal requirements.
            </div>
          </div>

          {/* Technical Parameter Grid (Right-5) */}
          <div className="lg:col-span-5 bg-white rounded-3xl border border-slate-100 p-8 sm:p-10 shadow-lg">
            <h2 className="text-2xl font-extrabold text-slate-900 tracking-tight flex items-center mb-6">
              <Cpu className="text-tech-600 mr-3 w-6 h-6 shrink-0" />
              {content.techSpecsText}
            </h2>

            <div className="border border-slate-200/80 rounded-2xl overflow-hidden shadow-sm">
              <table className="w-full text-sm text-left">
                <thead className="bg-[#e2e8f0] text-slate-700 font-bold border-b border-slate-300">
                  <tr>
                    <th className="px-5 py-3.5 w-1/2">Parameter</th>
                    <th className="px-5 py-3.5">Value</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100 text-slate-700">
                  {product.specs.map((spec, idx) => (
                    <tr 
                      key={idx} 
                      className={`hover:bg-slate-50/50 transition-colors ${idx % 2 === 0 ? 'bg-white' : 'bg-slate-50/20'}`}
                    >
                      <td className="px-5 py-3.5 font-medium border-r border-slate-100 bg-slate-50/10 text-xs sm:text-sm">
                        {spec.label}
                      </td>
                      <td className="px-5 py-3.5 text-xs sm:text-sm font-semibold max-w-[200px] break-words text-slate-800">
                        {spec.value}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

        </div>

      </div>
    </div>
  );
};

export default ProductDetail;
