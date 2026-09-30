import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Send, ChevronDown } from 'lucide-react';

// ==========================================
// 1. HERO SECTION (Left Side)
// ==========================================
const ContactHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.contact-text',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="w-full flex flex-col pr-0 md:pr-16 mt-10 md:mt-0">
      
      {/* Lime Green Kicker */}
      <span className="contact-text text-[#d4ff00] tracking-[0.2em] font-bold uppercase text-xs mb-6">
        Start a Project
      </span>

      {/* Massive Headline */}
      <h1 className="contact-text text-5xl md:text-7xl font-black text-[#f4f6ef] leading-[1.05] tracking-tight mb-8">
        Let's build your <br/><span className="text-transparent [-webkit-text-stroke:1px_#d4ff00]">plant.</span>
      </h1>
      
      {/* Subtext */}
      <p className="contact-text text-[#f4f6ef]/80 text-base md:text-lg mb-16 font-medium max-w-md leading-relaxed">
        Tell us about your feedstock, land, and target capacity. Our engineering team responds with a feasibility view within 24 hours.
      </p>

      {/* Clean Metadata Block */}
      <div className="flex flex-col gap-10 w-full">
        
        <div className="contact-text flex flex-col gap-2">
          <h3 className="text-[10px] md:text-xs font-bold text-[#f4f6ef]/40 tracking-[0.2em] uppercase">
            Head Office
          </h3>
          <span className="text-sm md:text-base text-[#f4f6ef] font-medium leading-relaxed">
            Sector 27 Industrial Area,<br/>Faridabad, Haryana 121003
          </span>
        </div>

        <div className="contact-text flex flex-col gap-2">
          <h3 className="text-[10px] md:text-xs font-bold text-[#f4f6ef]/40 tracking-[0.2em] uppercase">
            Email
          </h3>
          <a href="mailto:projects@ecocbg.com" className="text-sm md:text-base text-[#d4ff00] font-medium hover:text-[#f4f6ef] transition-colors">
            projects@ecocbg.com
          </a>
        </div>

      </div>
    </div>
  );
};


// ==========================================
// 2. FORM SECTION (Right Side)
// ==========================================
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

  const inputStyle = "w-full bg-[#143220]/60 backdrop-blur-sm border border-[#f4f6ef]/10 text-[#f4f6ef] placeholder:text-[#f4f6ef]/40 px-5 py-4 focus:border-[#d4ff00] focus:bg-[#0f2517] focus:outline-none transition-all duration-300 font-medium text-sm rounded-lg shadow-inner";

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
          <select className={`${inputStyle} appearance-none cursor-pointer [&>option]:bg-[#0f2517] [&>option]:text-[#f4f6ef]`}>
            <option>Turnkey CBG Plant</option>
            <option>Anaerobic Digesters</option>
            <option>Biogas Upgrading Units</option>
            <option>Consulting & Feasibility</option>
          </select>
          <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 text-[#f4f6ef]/50 pointer-events-none" size={18} />
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
            className="group relative w-full overflow-hidden p-[2px] bg-[#f4f6ef]/10 hover:bg-[#d4ff00] transition-colors duration-500 rounded-lg shadow-xl"
          >
            {/* Animated Gradient Border Layer */}
            <div 
              ref={borderRef}
              className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[500%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_80%,#d4ff00_100%)] opacity-0 z-0 pointer-events-none"
            ></div>

            {/* Inner Button Content */}
            <div className="relative z-10 w-full bg-[#143220] group-hover:bg-[#d4ff00] rounded-[6px] flex items-center justify-center gap-3 py-5 transition-colors duration-500">
              <Send size={18} className="text-[#f4f6ef] group-hover:text-[#0f2517] transition-colors" />
              <span className="text-[#f4f6ef] group-hover:text-[#0f2517] font-bold tracking-[0.15em] uppercase text-sm transition-colors">
                Send Enquiry
              </span>
            </div>
          </button>
        </div>

      </form>
    </div>
  );
};


// ==========================================
// 3. MAIN PAGE COMPONENT (Wrapper)
// ==========================================
const ContactPage = () => {
  return (
    <section className="w-full min-h-[90vh] bg-[#0f2517] pt-32 pb-24 px-6 md:px-12 flex items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row gap-16 md:gap-10">
        
        {/* Left Side Container */}
        <div className="w-full md:w-1/2 flex items-center">
          <ContactHero />
        </div>
        
        {/* Right Side Container */}
        <div className="w-full md:w-1/2 flex items-center justify-center">
          <ContactForm />
        </div>
        
      </div>
    </section>
  );
};

export default ContactPage;