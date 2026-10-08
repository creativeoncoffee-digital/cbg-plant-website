import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { MapPin, Phone, Mail, Send } from 'lucide-react';

const ContactMap = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.contact-elem',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Left Side: Clean Form */}
        <div className="w-full lg:w-1/2 flex flex-col">
          <span className="contact-elem text-[#3c6e4b] font-bold tracking-[0.25em] uppercase text-xs mb-4 block">
            Get In Touch
          </span>
          <h2 className="contact-elem text-4xl md:text-5xl font-black text-[#0f2517] leading-[1.1] mb-8 tracking-tight">
            Let's build the <span className="text-[#3c6e4b]">future.</span>
          </h2>
          
          <form className="contact-elem flex flex-col gap-6 w-full">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <input 
                type="text" 
                placeholder="First Name" 
                className="w-full bg-[#f4f6ef] text-[#0f2517] px-5 py-4 rounded-xl border border-transparent focus:border-[#3c6e4b] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/40"
              />
              <input 
                type="text" 
                placeholder="Last Name" 
                className="w-full bg-[#f4f6ef] text-[#0f2517] px-5 py-4 rounded-xl border border-transparent focus:border-[#3c6e4b] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/40"
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              className="w-full bg-[#f4f6ef] text-[#0f2517] px-5 py-4 rounded-xl border border-transparent focus:border-[#3c6e4b] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/40"
            />
            <textarea 
              placeholder="How can we help you?" 
              rows="5"
              className="w-full bg-[#f4f6ef] text-[#0f2517] px-5 py-4 rounded-xl border border-transparent focus:border-[#3c6e4b] focus:bg-white focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/40 resize-none"
            ></textarea>
            
            <button 
              type="button"
              className="group flex items-center justify-center gap-3 w-full md:w-auto md:self-start bg-[#0f2517] text-[#d4ff00] px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#3c6e4b] hover:text-white transition-colors duration-300 mt-2"
            >
              Send Message
              <Send size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
            </button>
          </form>
        </div>

        {/* Right Side: Map & Details */}
        <div className="w-full lg:w-1/2 flex flex-col gap-10">
          
          {/* Info Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="contact-elem flex flex-col p-6 bg-[#f4f6ef] rounded-2xl border border-[#0f2517]/5">
              <MapPin size={24} className="text-[#3c6e4b] mb-4" />
              <h4 className="text-[#0f2517] font-bold mb-2">Headquarters</h4>
              <p className="text-[#0f2517]/70 text-sm font-medium leading-relaxed">
                Sector 27 Industrial Area,<br />
                Faridabad, Haryana 121003<br />
                India
              </p>
            </div>
            
            <div className="contact-elem flex flex-col p-6 bg-[#f4f6ef] rounded-2xl border border-[#0f2517]/5">
              <div className="flex gap-4 mb-4">
                <Phone size={24} className="text-[#3c6e4b]" />
                <Mail size={24} className="text-[#3c6e4b]" />
              </div>
              <h4 className="text-[#0f2517] font-bold mb-2">Contact Details</h4>
              <a href="tel:+919876543210" className="text-[#0f2517]/70 text-sm font-medium hover:text-[#3c6e4b] transition-colors block mb-1">
                +91 98765 43210
              </a>
              <a href="mailto:projects@RyvedraCBG.com" className="text-[#0f2517]/70 text-sm font-medium hover:text-[#3c6e4b] transition-colors block">
                projects@RyvedraCBG.com
              </a>
            </div>
          </div>

          {/* Embedded Map with Grayscale styling */}
          <div className="contact-elem w-full h-[300px] rounded-2xl overflow-hidden border border-[#0f2517]/10 shadow-sm relative group">
            <div className="absolute inset-0 bg-[#0f2517]/5 group-hover:bg-transparent pointer-events-none transition-colors duration-500 z-10"></div>
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d112328.66597258352!2d77.22728448834015!3d28.381395878951012!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cdc15f5a424b1%3A0xe37ea6e241891535!2sFaridabad%2C%20Haryana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full grayscale-[80%] opacity-80 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 border-0"
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