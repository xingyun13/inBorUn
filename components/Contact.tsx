import React from 'react';
import { ContactContent } from '../types';
import { MapPin, Phone, User } from 'lucide-react';

interface ContactProps {
  content: ContactContent;
}

const Contact: React.FC<ContactProps> = ({ content }) => {
  return (
    <section id="contact" className="py-20 bg-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

          {/* Left Column: Info */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold mb-8">{content.title}</h2>

            {/* HQ */}
            <div className="mb-10 bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
              <h3 className="text-xl font-bold text-tech-400 mb-4 flex items-center">
                <MapPin className="mr-2" /> {content.hqTitle}
              </h3>
              <div className="space-y-3 text-slate-300">
                <p className="font-semibold text-white">{content.hq.label}</p>
                <p className="flex items-start"><span className="opacity-60 w-20 shrink-0">Add:</span> {content.hq.address}</p>
                <p className="flex items-center"><span className="opacity-60 w-20 shrink-0">Tel:</span> {content.hq.phone}</p>
                <p className="flex items-center"><span className="opacity-60 w-20 shrink-0">Web:</span> {content.website}</p>
              </div>
            </div>

            {/* Branches */}
            <h3 className="text-xl font-bold text-tech-400 mb-4">{content.branchesTitle}</h3>
            <div className="grid grid-cols-1 gap-6">
              {content.branches.map((branch, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-xl border border-white/10 hover:bg-white/10 transition-colors">
                  <h4 className="font-bold text-lg mb-2">{branch.label}</h4>
                  <div className="space-y-2 text-sm text-slate-300">
                    <p className="flex items-center">
                      <User className="w-4 h-4 mr-2 text-tech-500" />
                      {branch.contactPerson}
                    </p>
                    <p className="flex items-center">
                      <Phone className="w-4 h-4 mr-2 text-tech-500" />
                      {branch.phone}
                    </p>
                    <p className="flex items-start">
                      <MapPin className="w-4 h-4 mr-2 text-tech-500 mt-1" />
                      {branch.address}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: QR Codes & Form/Map */}
          <div className="flex flex-col h-full">
            <div className="bg-white rounded-3xl p-8 text-slate-900 shadow-2xl h-full flex flex-col items-center justify-center text-center">
              <h3 className="text-2xl font-bold mb-8">{content.qrTitle}</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-md">
                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-32 h-32 bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-400">
                    <img
                      src='http://www-x-inborun-x-com.img.addlink.cn/uploadfiles/fla/202257155432.jpg'
                      alt='微信公众号'
                    />
                  </div>
                  <p className="font-semibold text-slate-700">WeChat</p>
                  {/* <p className="text-xs text-slate-500">Sales Support</p> */}
                </div>

                <div className="flex flex-col items-center p-4 bg-slate-50 rounded-xl border border-slate-200">
                  <div className="w-32 h-32 bg-slate-200 rounded-lg mb-4 flex items-center justify-center text-slate-400">
                    <img
                      src='http://www-x-inborun-x-com.img.addlink.cn/uploadfiles/fla/202257155432.jpg'
                      alt='微信公众号'
                    />
                  </div>
                  <p className="font-semibold text-slate-700">WeChat</p>
                  {/* <p className="text-xs text-slate-500">Tech Support</p> */}
                </div>
              </div>

              <div className="mt-12 w-full pt-8 border-t border-slate-100">
                <p className="text-slate-500 mb-2">QQ Support</p>
                <p className="text-2xl font-bold text-tech-600 tracking-wider">3098464327</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;