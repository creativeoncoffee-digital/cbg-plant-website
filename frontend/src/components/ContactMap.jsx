import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const ContactMap = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.contact-elem',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT SIDE: Info + Form Stack */}
        <div className="w-full lg:w-5/12 flex flex-col">
          
          {/* Header Info */}
          <div className="contact-elem flex flex-col mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0f2517] leading-[1] mb-4 tracking-tight">
              How can we help?
            </h2>
            <p className="text-[#0f2517]/70 text-base font-medium mb-8">
              Looking for support or project consulting? Connect with our engineering team today.
            </p>
            
            {/* Quick Contact Links */}
            <div className="flex flex-col gap-3 mb-10">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span className="text-[#3c6e4b] font-bold text-sm">Sector  xx  noida xx </span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+919876543210" className="text-[#3c6e4b] font-bold text-sm hover:text-[#0f2517] transition-colors">
                  +91 98765 xxxx
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:projects@RyvedraCBG.com" className="text-[#3c6e4b] font-bold text-sm hover:text-[#0f2517] transition-colors">
                  projects@RyvedraCBG.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Minimalist Form */}
          <form className="contact-elem flex flex-col gap-6 w-full">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#0f2517] text-xs font-bold">First name</label>
                <input 
                  type="text" 
                  placeholder="First name" 
                  className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0f2517] text-xs font-bold">Last name</label>
                <input 
                  type="text" 
                  placeholder="Last name" 
                  className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                />
              </div>
            </div>

            {/* Email Row */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0f2517] text-xs font-bold">Work email</label>
              <input 
                type="email" 
                placeholder="you@company.com" 
                className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
              />
            </div>

            {/* Phone Row */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0f2517] text-xs font-bold">Phone number</label>
              <div className="flex w-full rounded-lg border border-[#0f2517]/10 focus-within:border-[#3c6e4b] focus-within:ring-1 focus-within:ring-[#3c6e4b] transition-all duration-300 shadow-sm overflow-hidden bg-white">
                <span className="flex items-center px-4 bg-[#f8f9f6] text-[#0f2517]/60 font-medium text-sm border-r border-[#0f2517]/10">
                  IN
                </span>
                <input 
                  type="tel" 
                  placeholder="+91 00000 00000" 
                  className="w-full bg-transparent text-[#0f2517] px-4 py-3 focus:outline-none font-medium placeholder:text-[#0f2517]/30 text-sm"
                />
              </div>
            </div>

            {/* Interest Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0f2517] text-xs font-bold">What are you interested in?</label>
              <div className="relative w-full">
                <select className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium appearance-none cursor-pointer text-sm shadow-sm">
                  <option value="" disabled selected className="text-[#0f2517]/40">Select an option...</option>
                  <option value="cbg">Bio-CBG Plant Engineering</option>
                  <option value="water">Wastewater Treatment (STP/ETP)</option>
                  <option value="solar">Solar Energy Solutions</option>
                  <option value="other">General Inquiry</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0f2517]/40 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-[#0f2517] text-xs font-bold">Message</label>
              <textarea 
                placeholder="Is there anything particular you need help with?" 
                rows="4"
                className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 resize-none text-sm shadow-sm"
              ></textarea>
            </div>
            
            <button 
              type="button"
              className="w-full bg-white text-[#0f2517] border border-[#0f2517]/10 py-3.5 rounded-lg font-bold text-sm hover:border-[#0f2517] transition-all duration-300 shadow-sm"
            >
              Send message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Large Clean Map */}
        <div className="w-full lg:w-7/12 contact-elem">
          <div className="w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden bg-[#f4f6ef] relative shadow-lg border border-[#0f2517]/5">
            {/* The Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112328.66597258352!2d77.22728448834015!3d28.381395878951012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe37ea6e241891535!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 opacity-80 mix-blend-multiply"
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Headquarters Location"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;