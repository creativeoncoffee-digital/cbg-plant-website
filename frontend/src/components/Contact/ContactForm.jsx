import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Send, ChevronDown } from 'lucide-react';

const ContactForm = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const formRef = useRef(null);
  const btnRef = useRef(null);
  const borderRef = useRef(null);
  const btnAnimation = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.form-field',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, formRef);
      return () => ctx.revert();
    }
  }, [inView]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      btnAnimation.current = gsap.to(borderRef.current, {
        rotation: 360,
        duration: 2.5,
        repeat: -1,
        ease: 'none',
        paused: true
      });
    }, btnRef);
    return () => ctx.revert();
  }, []);

  const handleBtnEnter = () => {
    btnAnimation.current.play();
    gsap.to(borderRef.current, { opacity: 1, duration: 0.3 });
  };

  const handleBtnLeave = () => {
    gsap.to(borderRef.current, { 
      opacity: 0, 
      duration: 0.3, 
      onComplete: () => btnAnimation.current.pause() 
    });
  };

  const inputStyle = "w-full bg-transparent border border-white/10 text-brand-white placeholder:text-brand-gray/60 px-5 py-4 focus:border-brand-neon focus:bg-brand-neon/5 focus:outline-none transition-all duration-300 font-medium text-sm rounded-sm";

  return (
    <div ref={ref} className="w-full">
      <form 
        ref={formRef} 
        className="flex flex-col gap-5 w-full" 
        onSubmit={(e) => e.preventDefault()}
      >
        
        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="form-field w-full md:w-1/2">
            <input type="text" placeholder="Full name *" className={inputStyle} required />
          </div>
          <div className="form-field w-full md:w-1/2">
            <input type="email" placeholder="Work email *" className={inputStyle} required />
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-5 w-full">
          <div className="form-field w-full md:w-1/2">
            <input type="tel" placeholder="Phone *" className={inputStyle} required />
          </div>
          <div className="form-field w-full md:w-1/2">
            <input type="text" placeholder="Company / Organisation" className={inputStyle} />
          </div>
        </div>

        {/* Custom Select with Lucide Icon */}
        <div className="form-field w-full relative">
          <select className={`${inputStyle} appearance-none cursor-pointer [&>option]:bg-brand-surface [&>option]:text-brand-white`}>
            <option>Turnkey CBG Plant</option>
            <option>Anaerobic Digesters</option>
            <option>Biogas Upgrading Units</option>
            <option>Consulting & Feasibility</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-brand-gray pointer-events-none" size={18} />
        </div>

        <div className="form-field w-full">
          <textarea 
            rows="5" 
            placeholder="Tell us about your project — feedstock, location, capacity... *" 
            className={`${inputStyle} resize-y`}
            required
          ></textarea>
        </div>

        <div className="form-field w-full mt-4">
          <button 
            ref={btnRef}
            type="submit"
            onMouseEnter={handleBtnEnter}
            onMouseLeave={handleBtnLeave}
            className="group relative w-full overflow-hidden p-[2px] bg-white/10 hover:bg-brand-neon transition-colors duration-500 rounded-sm"
          >
            <div 
              ref={borderRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[500%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_80%,#d4ff00_100%)] opacity-0 z-0 pointer-events-none"
            ></div>

            <div className="relative z-10 w-full bg-brand-surface group-hover:bg-brand-neon flex items-center justify-center gap-3 py-5 transition-colors duration-500">
              <Send size={18} className="text-brand-white group-hover:text-brand-black transition-colors" />
              <span className="text-brand-white group-hover:text-brand-black font-bold tracking-[0.15em] uppercase text-sm transition-colors">
                Send Enquiry
              </span>
            </div>
          </button>
        </div>

      </form>
    </div>
  );
};

export default ContactForm;