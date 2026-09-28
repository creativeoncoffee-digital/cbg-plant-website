import { useEffect, useRef } from 'react';
import gsap from 'gsap';

const ContactHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Sleek staggered reveal for the typography
      gsap.fromTo('.contact-text',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={heroRef} className="w-full flex flex-col pr-0 md:pr-16 mt-10 md:mt-0">
      
      {/* Neon Kicker */}
      <span className="contact-text text-brand-neon  tracking-[0.2em] uppercase text-xs mb-6">
        Start a Project
      </span>

      {/* Massive Headline */}
      <h1 className="contact-text text-3xl md:text-6xl font-black text-brand-white leading-[1.1] tracking-tight mb-8">
        Let's build your <br/><span className="text-brand-neon">plant</span>
      </h1>
      
      {/* Subtext */}
      <p className="contact-text text-brand-gray text-base md:text-lg mb-16 font-medium max-w-md leading-relaxed">
        Tell us about your feedstock, land and target capacity. Our engineering team responds with a feasibility view within 24 hours.
      </p>

      {/* Clean Metadata Block (Replacing old heavy icons) */}
      <div className="flex flex-col gap-10 w-full">
        
        <div className="contact-text flex flex-col gap-2">
          <h3 className="text-[10px] md:text-xs font-bold text-brand-gray tracking-[0.2em] uppercase">
            Head Office
          </h3>
          <span className="text-sm md:text-base text-brand-white font-medium leading-relaxed">
            Sector 27 Industrial Area,<br/>Faridabad, Haryana 121003
          </span>
        </div>

        <div className="contact-text flex flex-col gap-2">
          <h3 className="text-[10px] md:text-xs font-bold text-brand-gray tracking-[0.2em] uppercase">
            Email
          </h3>
          <a href="mailto:projects@recbg.com" className="text-sm md:text-base text-brand-neon font-medium hover:text-brand-white transition-colors">
            projects@RyvedraCBG.com
          </a>
        </div>

      </div>
    </div>
  );
};

export default ContactHero;