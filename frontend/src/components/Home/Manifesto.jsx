import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Manifesto = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);
  
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  const manifestoData = [
    { 
      num: "01", 
      title: "Waste is a resource we refuse to waste.", 
      text: "India generates over 62 million tonnes of organic waste every year. Most of it rots in landfills, releasing methane — a greenhouse gas 80 times more potent than CO₂. We build the machines that interrupt that cycle, turning agricultural residue, cattle dung and municipal waste into clean, vehicle-grade fuel.", 
      imgSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      num: "02", 
      title: "Engineered in India, for Indian feedstock.", 
      text: "Imported biogas technology fails on paddy straw and pressmud. Our digesters, pre-treatment lines and upgrading skids are designed around the feedstock that actually exists here — high lignin, high silica, seasonal, and inconsistent. That is why our plants hit nameplate capacity where others stall.", 
      imgSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      num: "03", 
      title: "One contract. One accountable partner.", 
      text: "A CBG plant touches civil, mechanical, biological and gas-engineering disciplines. We take single-point EPC responsibility — from feasibility and DPR to commissioning and O&M — so you never manage five vendors pointing fingers at each other while your plant sits idle.", 
      imgSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
    }
  ];

  // Navigation Logic
  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % manifestoData.length);
    setIsPaused(true); // Pause autoplay when user interacts
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev === 0 ? manifestoData.length - 1 : prev - 1));
    setIsPaused(true);
  };

  // Autoplay Logic (Resets if activeIndex changes manually)
  useEffect(() => {
    if (isPaused) return;
    
    const timer = setInterval(() => {
      setActiveIndex((current) => (current + 1) % manifestoData.length);
    }, 5000); 
    
    return () => clearInterval(timer);
  }, [isPaused, activeIndex, manifestoData.length]);

  // Entrance Animation
  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.manifesto-reveal', 
          { y: 30, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const currentItem = manifestoData[activeIndex];

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-14 px-6 md:px-12 border-t border-[#0f2517]/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Exact Header Requested */}
        <div className="flex flex-col mb-12 justify-items-center text-center md:mb-16 manifesto-reveal">
          <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-6">
            The Manifesto
          </span>
          <h2 className="text-4xl md:text-5xl font-semibold text-[#0f2517] mb-6 tracking-tight leading-[1.1]">
            Why we build  <span className="text-[#3c6e4b]">biogas</span> machines.
          </h2>
        </div>

        {/* 2-Column Interactive Layout */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center lg:items-start">
          
          {/* LEFT SIDE: Focused Single Text Block */}
          <div className="w-full lg:w-1/2 flex flex-col pt-4">
            
            {/* Animated Content Wrapper */}
            <div 
              key={activeIndex} 
              className="manifesto-reveal flex flex-col pl-6  animate-in fade-in slide-in-from-bottom-4 duration-700"
            >
              <div className="flex items-center gap-4 mb-4">
              
                <h3 className="text-2xl md:text-3xl font-semibold text-[#0f2517] tracking-tight">
                  {currentItem.title}
                </h3>
              </div>
              
              <p className="text-[#0f2517]/75 text-base md:text-lg leading-relaxed font-medium pb-2 pr-4 md:pr-10">
                {currentItem.text}
              </p>
            </div>

            {/* Bottom Controls: Contact Button & Arrows */}
            <div className="manifesto-reveal mt-8 pl-6 flex flex-wrap items-center gap-6">
              <Link 
                to="/contact" 
                className="group inline-flex items-center gap-4 bg-[#3c6e4b] text-white px-8 py-4 rounded-xl font-bold uppercase tracking-widest text-sm hover:bg-[#0f2517] transition-colors duration-300 shadow-md w-fit"
              >
                Contact Us
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </Link>

              {/* Navigation Arrows */}
              <div className="flex items-center gap-3">
                <button 
                  onClick={handlePrev}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0f2517]/10 text-[#0f2517] hover:bg-[#3c6e4b] hover:text-white hover:border-[#3c6e4b] transition-all duration-300"
                >
                  <ArrowLeft size={18} />
                </button>
                <button 
                  onClick={handleNext}
                  className="w-12 h-12 flex items-center justify-center rounded-full border border-[#0f2517]/10 text-[#0f2517] hover:bg-[#3c6e4b] hover:text-white hover:border-[#3c6e4b] transition-all duration-300"
                >
                  <ArrowRight size={18} />
                </button>
              </div>
            </div>

          </div>

          {/* RIGHT SIDE: Dynamic Image Window */}
          <div 
            className="w-full lg:w-1/2 manifesto-reveal relative aspect-[4/3] rounded-[2rem] overflow-hidden shadow-lg border border-[#0f2517]/5"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
          >
            {manifestoData.map((item, index) => (
              <img 
                key={index}
                src={item.imgSrc} 
                alt={item.title} 
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ease-in-out ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              />
            ))}
            {/* Subtle premium dark overlay */}
            <div className="absolute inset-0 bg-[#0f2517]/10 z-20 pointer-events-none"></div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Manifesto;