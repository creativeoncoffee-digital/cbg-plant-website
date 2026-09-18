import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroPic from '../../assets/Home/HomePic.png';

const HomeHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // 1. Fade in the neon kicker text
      tl.fromTo('.hero-kicker', 
        { opacity: 0, x: -30 }, 
        { opacity: 1, x: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
      )
      // 2. Professional Masked Reveal for the massive typography
      .fromTo('.hero-line', 
        { y: '110%', rotate: 1, opacity: 0 }, 
        { y: '0%', rotate: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' }, 
        '-=0.4'
      )
      // 3. Fade up the subtext
      .fromTo('.hero-subtext', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 
        '-=0.8'
      )
      // 4. Fade in the scroll indicator
      .fromTo('.hero-scroll', 
        { opacity: 0 }, 
        { opacity: 1, duration: 1, ease: 'power2.out' }, 
        '-=0.5'
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center bg-brand-black overflow-hidden pt-40">
      
      {/* Background Image with Uniform Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <img src={HeroPic} alt="CBG Plant Background" className="w-full h-full object-cover opacity-80 grayscale-[20%]" />
        {/* Uniform dark overlay instead of a fading gradient */}
        <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply"></div>
      </div>

      {/* Main Content Wrapper */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col items-start justify-center h-full">
        
        {/* Kicker Tag */}
        <div className="overflow-hidden mb-6 md:mb-10">
          <span className="hero-kicker inline-block text-brand-neon text-xs md:text-sm  tracking-[0.2em] uppercase">
            Bio-CBG Plant Manufacturers — India
          </span>
        </div>
        
        {/* Massive Typography with overflow-hidden for the mask reveal effect */}
        <h1 className="text-7xl md:text-8xl font-black text-brand-white leading-[0.9] tracking-wide uppercase mb-8">
          <div className="overflow-hidden py-1"><div className="hero-line">Waste Becomes</div></div>
          <div className="overflow-hidden py-1"><div className="hero-line text-brand-neon">Fuel.</div></div>
          <div className="overflow-hidden py-1"><div className="hero-line">Farm Becomes</div></div>
          <div className="overflow-hidden py-1"><div className="hero-line text-brand-neon">Fortune.</div></div>
        </h1>
        
        {/* Subtext */}
        <p className="hero-subtext text-brand-gray text-base md:text-lg max-w-xl font-medium leading-relaxed mb-16">
          We design, build and commission turnkey compressed biogas plants that convert organic waste into pipeline-grade green fuel — and profit.
        </p>
        
        {/* Scroll Indicator */}
        <div className="hero-scroll flex items-center gap-3 text-brand-gray text-xs font-bold tracking-widest uppercase mt-auto absolute bottom-12">
          <span className="animate-bounce text-brand-white">↓</span> Scroll to explore
        </div>

      </div>
    </section>
  );
};

export default HomeHero;