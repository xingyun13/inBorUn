import React from 'react';
import { AboutContent } from '../types';
import { CheckCircle2 } from 'lucide-react';

interface AboutProps {
  content: AboutContent;
}

const About: React.FC<AboutProps> = ({ content }) => {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">{content.title}</h2>
          <div className="w-20 h-1 bg-tech-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            {content.description.map((para, index) => (
              <p key={index} className="text-lg text-slate-600 leading-relaxed">
                {para}
              </p>
            ))}
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-lg">
            <img 
              src="https://inborun-x-com.img.addlink.cn/images/aibimg.jpg" 
              alt="Engineering Lab" 
              className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-700"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
              <div className="text-white">
                <div className="flex items-center space-x-2 mb-2">
                  <Cpu className="text-tech-400" />
                  <span className="font-bold text-xl">10+ Years Experience</span>
                </div>
                <p className="text-slate-200">Deep Electronics Industry Expertise</p>
              </div>
            </div> */}
          </div>
        </div>

        {/* Services */}
        <div className="bg-tech-900 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-tech-500 rounded-full blur-3xl opacity-20"></div>
          
          <h3 className="text-2xl font-bold mb-8 relative z-10">{content.servicesTitle}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative z-10">
            {content.services.map((service, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle2 className="w-6 h-6 text-tech-400 flex-shrink-0" />
                <span className="text-slate-200 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;