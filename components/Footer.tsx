import React from 'react';
import { FooterContent } from '../types';

interface FooterProps {
  content: FooterContent;
}

const Footer: React.FC<FooterProps> = ({ content }) => {
  return (
    <footer className="bg-slate-950 text-slate-500 py-8 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <p className="text-sm">{content.copyright}</p>
        </div>
        <div className="flex space-x-6 text-sm">
           <span className="hover:text-slate-300 cursor-pointer">Privacy Policy</span>
           <span className="hover:text-slate-300 cursor-pointer">Terms of Service</span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;