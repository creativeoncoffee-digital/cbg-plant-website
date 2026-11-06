import { useEffect, useRef } from 'react';
import gsap from 'gsap';
// Make sure this image path is correct, or use a high-quality external URL
import HeroPic from '../../assets/CbgHero.png'; 

const CbgHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.hero-anim', 
        { opacity: 0, y: 30 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
      )
      .fromTo('.hero-stats', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
        '-=0.4'
      );
    }, heroRef);
    
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-[95vh]  overflow-hidden pt-24 md:pt-32 pb-12 flex items-center">
      
      {/* BACKGROUND SETUP (Right-Aligned Image with White Fade on Left) */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full  h-[95vh]">
          <img 
            src={HeroPic} 
            alt="CBG Plant Background" 
            className="w-full h-full object-cover object-right transition-transform duration-700 ease-out" 
          />
          {/* Gradient mask to fade the image smoothly into the white background on the left */}
          {/* <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div> */}
          {/* Subtle bottom gradient to ensure text readability for stats */}
          {/* <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div> */}
        </div>
      </div>

      {/* Floating Accent Text (Top Right) */}
      {/* <div className="absolute top-32 right-12 md:right-24 z-20 hidden md:flex flex-col items-end rotate-[-5deg] opacity-80">
         <span className="text-[#3c6e4b] font-serif italic text-2xl">Renewable</span>
         <span className="text-[#3c6e4b] font-serif italic text-2xl -mt-2">Energy</span>
         <span className="text-[#3c6e4b] font-serif italic text-lg -mt-1 pr-4">for a</span>
         <span className="text-[#3c6e4b] font-serif italic text-2xl -mt-1">Better Future</span>
      </div> */}

      {/* MAIN CONTENT WRAPPER */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 flex flex-col h-full justify-center">
        
    
      </div>

      {/* Global CSS Animation for the button */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowRays {
          0% { background-position: 0% center; }
          100% { background-position: -200% center; }
        }
      `}} />
    </section>
  );
};

export default CbgHero;