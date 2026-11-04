import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ArrowRight, Play } from 'lucide-react';
// Make sure this image path is correct, or use a high-quality external URL
import HeroPic from '../../assets/Home/hero-biogas-bg.webp'; 

const HomeHero = () => {
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
    <section ref={heroRef} className="relative w-full min-h-screen bg-white overflow-hidden pt-24 md:pt-32 pb-12 flex items-center">
      
      {/* BACKGROUND SETUP (Right-Aligned Image with White Fade on Left) */}
      <div className="absolute inset-0 z-0 flex justify-end">
        <div className="relative w-full md:w-2/3 h-full">
          <img 
            src={HeroPic} 
            alt="CBG Plant Background" 
            className="w-full h-full object-cover object-right transition-transform duration-700 ease-out" 
          />
          {/* Gradient mask to fade the image smoothly into the white background on the left */}
          <div className="absolute inset-0 bg-gradient-to-r from-white via-white/10 to-transparent"></div>
          {/* Subtle bottom gradient to ensure text readability for stats */}
          <div className="absolute inset-0 bg-gradient-to-t from-white/40 via-transparent to-transparent"></div>
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
        
        {/* Left Side Content Area */}
        <div className="w-full md:w-[55%] flex flex-col pt-4">
          
          {/* Kicker */}
          <div className="hero-anim flex items-center gap-3 mb-6">
            {/* <div className="h-[2px] w-6 bg-[#3c6e4b]"></div> */}
            <span className="text-[#3c6e4b] font-bold tracking-[0.1em] uppercase text-xs">
              Sustainable Energy Solutions
            </span>
          </div>
          
          {/* Main Headline */}
          <h1 className="hero-anim text-3xl md:text-[3.5rem] font-semibold text-gray-800 leading-[1.1] tracking-tighter mb-6">
            Turning Organic Waste <br className="hidden md:block"/>
            into <span className="text-[#2c8450]">Clean Energy.</span>
          </h1>
          
          {/* Subtext */}
          <p className="hero-anim text-[#0f2517]/70 text-base md:text-md font-semibold leading-relaxed max-w-lg mb-8">
            Ryverda Engineering designs and delivers sustainable energy solutions that convert organic waste into clean energy, for a healthier planet and a brighter future. solutions that convert organic waste into clean energy, for a healthier planet and a brighter future.
          </p>
          
          {/* Buttons Row */}
          <div className="hero-anim flex flex-wrap items-center gap-6 mb-5 md:mb-4">
            
            {/* Animated Flowing Water/Rays Button */}
            <a 
              href="/solutions" 
              className="group relative overflow-hidden flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Animated Background Layer */}
              <div 
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(90deg, #0f2517 0%, #3c6e4b 25%, #2c8450 65%, #0f2517 100%)',
                  backgroundSize: '200% auto',
                  animation: 'flowRays 3s linear infinite'
                }}
              ></div>
              
              <span className="relative z-10 tracking-wide">Explore Our Solutions</span>
              <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </a>

            {/* Watch Story Button */}
            <button className="group flex items-center gap-4 hover:opacity-80 transition-opacity">
              <div className="w-12 h-12 rounded-full bg-white shadow-md border border-[#0f2517]/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                <Play className="text-[#0f2517] ml-1" size={18} fill="#0f2517" />
              </div>
              <div className="flex flex-col text-left">
                <span className="text-[#0f2517] font-bold text-sm">Watch Our Story</span>
                <span className="text-[#0f2517]/50 font-bold text-xs">2:16</span>
              </div>
            </button>

          </div>

          {/* Bottom Stats Row */}
          {/* <div className="flex flex-wrap items-start gap-12 md:gap-20 border-t border-[#0f2517]/10 pt-8 mt-auto">
            
            <div className="hero-stats flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-[#0f2517] mb-1">100+</span>
              <span className="text-[#0f2517]/60 text-[10px] md:text-xs font-bold uppercase tracking-wide">Projects Delivered</span>
            </div>
            
            <div className="hero-stats flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-[#0f2517] mb-1">2.4M+</span>
              <span className="text-[#0f2517]/60 text-[10px] md:text-xs font-bold uppercase tracking-wide">m³ Biogas Produced</span>
            </div>
            
            <div className="hero-stats flex flex-col">
              <span className="text-2xl md:text-3xl font-black text-[#0f2517] mb-1">120K</span>
              <span className="text-[#0f2517]/60 text-[10px] md:text-xs font-bold uppercase tracking-wide">Tonnes CO₂ Offset/Year</span>
            </div>

          </div> */}

        </div>
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

export default HomeHero;