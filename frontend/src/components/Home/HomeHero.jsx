import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import HeroPic from '../../assets/Home/HomePic.png';

const HomeHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // 1. Fade in the neon kicker text (changed to float UP for centered layout)
      tl.fromTo('.hero-kicker', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, ease: 'power3.out', delay: 0.2 }
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
    <section ref={heroRef} className="relative w-full min-h-screen flex items-center bg-brand-black overflow-hidden pt-32">
      
      {/* Background Image with Uniform Dark Overlay */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <img src={HeroPic} alt="CBG Plant Background" className="w-full h-full object-cover opacity-80 grayscale-[20%]" />
        {/* Uniform dark overlay instead of a fading gradient */}
        <div className="absolute inset-0 bg-brand-black/70 mix-blend-multiply"></div>
      </div>

      {/* Main Content Wrapper - Shifted to center alignment */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-10 flex flex-col items-center justify-center h-full text-center">
        
        {/* Kicker Tag */}
        <div className="overflow-hidden mb-6 md:mb-8">
          <span className="hero-kicker inline-block text-brand-neon text-xs md:text-sm tracking-[0.2em] uppercase">
            Bio-CBG Plant Manufacturers — India
          </span>
        </div>
        
        {/* Massive Typography - Grouped into 2 wide lines for a cinematic centered look */}
        <h1 className=" text-3xl md:text-6xl font-bold text-brand-white leading-[1] tracking-wide uppercase mb-8 flex flex-col items-center">
          <div className="overflow-hidden py-1 w-full">
            <div className="hero-line">
              Waste Becomes <span className="text-brand-neon">Fuel.</span>
            </div>
          </div>
          <div className="overflow-hidden py-1 w-full">
            <div className="hero-line">
              Farm Becomes <span className="text-brand-neon">Fortune.</span>
            </div>
          </div>
        </h1>
        
        {/* Subtext - Centered with mx-auto */}
        <p className="hero-subtext text-brand-gray text-base md:text-lg max-w-2xl mx-auto font-medium leading-relaxed mb-16">
          We design, build and commission turnkey compressed biogas plants that convert organic waste into pipeline-grade green fuel — and profit.
        </p>
        
        {/* Scroll Indicator - Snapped exactly to the bottom center */}
        <div className="hero-scroll flex items-center justify-center gap-3 text-brand-gray text-xs font-bold tracking-widest uppercase absolute bottom-12 left-1/2 -translate-x-1/2 w-max">
          <span className="animate-bounce text-brand-white">↓</span> Scroll to explore
        </div>

      </div>
    </section>
  );
};

export default HomeHero;