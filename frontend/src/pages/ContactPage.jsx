import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ChevronDown } from 'lucide-react';

const ContactHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.hero-text',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="relative w-full h-[45vh] min-h-[380px] flex items-center justify-center overflow-hidden bg-[#0f2517]">
      {/* Background Image with Uniform Dark Overlay */}
          <div className="absolute inset-0 z-0 bg-brand-black">
            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" alt="CBG Plant Background" className="w-full h-full object-cover opacity-80 grayscale-[20%]" />
            {/* Uniform dark overlay instead of a fading gradient */}
            <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply"></div>
          </div>
    
      <div className="relative z-10 flex flex-col items-center text-center px-6 mt-16">
        <span className="hero-text text-[#d4ff00] font-bold tracking-[0.1em] uppercase text-xs mb-4">
          Connect With Us
        </span>
        <h1 className="hero-text text-3xl md:text-6xl font-semibold text-white leading-tight tracking-tight">
          Let's Start a <br className="hidden md:block" /> Project.
        </h1>
      </div>
    </div>
  );
};

const ContactPage = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
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
    <div className="w-full flex flex-col bg-white">
      
      <ContactHero />

      <section ref={ref} className="w-full py-20 md:py-24 px-6 md:px-12">
        <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
          
          <div className="w-full lg:w-1/2 flex flex-col">
            
            <div className="contact-elem flex flex-col mb-1">
              <h2 className="text-4xl md:text-4xl font-semibold text-[#0f2517] leading-[1.1] mb-4 tracking-tight">
                How can we help?
              </h2>
              <p className="text-[#0f2517]/70 text-sm md:text-base font-medium mb-8">
                Looking for support or project consulting? Connect with our engineering team today. We typically respond within 24 hours.
              </p>
              
              {/* <div className="flex flex-col gap-4">
                <div className="flex items-center gap-4">
                  <span className="text-xl">📍</span>
                  <span className="text-[#3c6e4b] font-semibold text-sm leading-relaxed">
                    Sector 27 Industrial Area,<br/>Faridabad, Haryana 121003
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">📞</span>
                  <a href="tel:+919876543210" className="text-[#3c6e4b] font-semibold text-sm hover:text-[#0f2517] transition-colors">
                    +91 98765 43210
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <span className="text-xl">✉️</span>
                  <a href="mailto:projects@RyvedraCBG.com" className="text-[#3c6e4b] font-semibold text-sm hover:text-[#0f2517] transition-colors">
                    projects@RyvedraCBG.com
                  </a>
                </div>
              </div> */}
            </div>
            
            <form className="contact-elem flex flex-col gap-5 w-full" onSubmit={(e) => e.preventDefault()}>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#0f2517] text-xs font-bold">First name</label>
                  <input 
                    type="text" 
                    placeholder="First name" 
                    required
                    className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#0f2517] text-xs font-bold">Last name</label>
                  <input 
                    type="text" 
                    placeholder="Last name" 
                    required
                    className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#0f2517] text-xs font-bold">Work email</label>
                  <input 
                    type="email" 
                    placeholder="you@company.com" 
                    required
                    className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[#0f2517] text-xs font-bold">Phone number</label>
                  <div className="flex w-full rounded-lg border border-[#0f2517]/10 focus-within:border-[#3c6e4b] focus-within:ring-1 focus-within:ring-[#3c6e4b] transition-all duration-300 shadow-sm overflow-hidden bg-white">
                    <span className="flex items-center px-4 bg-[#f8f9f6] text-[#0f2517]/60 font-medium text-sm border-r border-[#0f2517]/10">
                      IN
                    </span>
                    <input 
                      type="tel" 
                      placeholder="+91 00000 00000" 
                      required
                      className="w-full bg-transparent text-[#0f2517] px-4 py-3 focus:outline-none font-medium placeholder:text-[#0f2517]/30 text-sm"
                    />
                  </div>
                </div>
              </div>

              <div className="flex flex-col gap-1.5">
                <label className="text-[#0f2517] text-xs font-bold">What are you interested in?</label>
                <div className="relative w-full">
                  <select 
                    required
                    defaultValue=""
                    className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium appearance-none cursor-pointer text-sm shadow-sm"
                  >
                    <option value="" disabled className="text-[#0f2517]/40">Select an option...</option>
                    <option value="cbg">Bio-CBG Plant Engineering</option>
                    <option value="water">Wastewater Treatment (STP/ETP)</option>
                    <option value="solar">Solar Energy Solutions</option>
                    <option value="other">General Inquiry</option>
                  </select>
                  <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0f2517]/40 pointer-events-none" size={16} />
                </div>
              </div>

              <div className="flex flex-col gap-1.5 mb-2">
                <label className="text-[#0f2517] text-xs font-bold">Message</label>
                <textarea 
                  placeholder="Is there anything particular you need help with?" 
                  rows="3"
                  required
                  className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 resize-none text-sm shadow-sm"
                ></textarea>
              </div>
              
              <button 
                type="submit"
                className="w-full bg-white text-[#0f2517] border border-[#0f2517]/10 py-3.5 rounded-lg font-bold text-sm hover:border-[#0f2517] hover:bg-[#f4f6ef] transition-all duration-300 shadow-sm"
              >
                Send message
              </button>
            </form>
          </div>

          <div className="w-full lg:w-1/2 contact-elem mt-8 lg:mt-0">
            <div className="w-full h-[400px] lg:h-full lg:min-h-[600px] rounded-[1.5rem] overflow-hidden bg-[#f4f6ef] relative shadow-lg border border-[#0f2517]/5">
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
    </div>
  );
};

export default ContactPage;