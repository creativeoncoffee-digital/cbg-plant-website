import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowLeft } from 'lucide-react';

const NotFoundPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      // Staggered reveal for the content
      tl.from('.error-elem', {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
      
      // Subtle continuous floating effect for the massive 404 text
      gsap.to('.glitch-text', {
        y: -10,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
        delay: 1
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="w-full min-h-screen bg-brand-black flex flex-col items-center justify-center px-6 text-center pt-32 pb-24 overflow-hidden relative">
      
      {/* Optional: Subtle background grid texture for an industrial blueprint feel */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:4rem_4rem] z-0 pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        {/* Massive Hollow Neon 404 (Matches the Manifesto Numbers) */}
        <h1 className="error-elem glitch-text text-[clamp(6rem,15vw,12rem)] font-black text-transparent [-webkit-text-stroke:2px_#d4ff00] leading-none mb-6 tracking-tighter">
          404
        </h1>
        
        {/* Technical Headline */}
        <h2 className="error-elem text-3xl md:text-5xl font-black text-brand-white mb-6 uppercase tracking-tight">
          System fault. <br className="md:hidden" /><span className="text-brand-gray">Page Not Found.</span>
        </h2>
        
        {/* Industrial Subtext */}
        <p className="error-elem text-brand-gray max-w-lg mb-10 font-medium text-base md:text-lg leading-relaxed">
          The sector you are looking for might have been decommissioned, had its pipeline rerouted, or is currently under construction.
        </p>
        
        {/* Sleek Neon Hover Button */}
        <div className="error-elem">
          <Link to="/" className="group relative overflow-hidden border border-white/20 bg-transparent hover:border-brand-neon hover:bg-brand-neon transition-all duration-300 flex items-center justify-center gap-3 px-8 py-4 rounded-sm shadow-[0_0_0_rgba(212,255,0,0)] hover:shadow-[0_0_30px_rgba(212,255,0,0.2)]">
            <ArrowLeft size={18} className="text-brand-neon group-hover:text-brand-black transition-colors" />
            <span className="text-brand-white group-hover:text-brand-black font-bold tracking-[0.15em] uppercase text-sm transition-colors">
              Return to Homepage
            </span>
          </Link>
        </div>

      </div>
      
    </div>
  );
};

export default NotFoundPage;