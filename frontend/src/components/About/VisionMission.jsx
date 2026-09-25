import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);
  const timerRef = useRef(null);

  const data = [
    {
      id: "01",
      tag: "Our Vision",
      icon: <Eye className="text-brand-neon" size={24} />,
      headline: "To stand as a premier catalyst in India’s green energy landscape.",
      desc: "Converting agricultural residue and organic waste into high-grade renewable fuel while empowering rural agrarian economies.",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "02",
      tag: "Our Mission",
      icon: <Target className="text-brand-neon" size={24} />,
      headline: "To engineer, build, and operate scalable, highly efficient infrastructure.",
      desc: "Through cross-disciplinary innovation, strong government policy integration, and unyielding ground-level execution.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
    }
  ];

  // Auto-cycle every 6 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 6000);
    
    return () => clearInterval(timerRef.current);
  }, []);

  // Initial Section Reveal Animation
  useEffect(() => {
    if (inView) {
      gsap.fromTo(containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-brand-black py-20 md:py-32 px-6 md:px-12 border-t border-white/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto opacity-0">
        
        {/* Main Wrapper */}
        <div className="flex flex-col md:flex-row w-full min-h-[600px] border border-white/10 bg-brand-surface/20 overflow-hidden">
          
          {/* Left Side: Images */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden">
            {data.map((item, index) => (
              <img 
                key={`img-${index}`}
                src={item.img}
                alt={item.tag}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-1000 ease-in-out ${
                  activeIndex === index ? 'opacity-100 scale-100 grayscale-[20%]' : 'opacity-0 scale-110 grayscale'
                }`}
              />
            ))}
            <div className="absolute inset-0 bg-brand-black/40 mix-blend-multiply"></div>
          </div>

          {/* Right Side: Content */}
          <div className="relative w-full md:w-1/2 flex flex-col p-10 md:p-16 justify-center">
            
            {/* Background Number */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.03)] pointer-events-none select-none z-0">
              {data[activeIndex].id}
            </div>

            {/* Crossfading Content */}
            <div className="relative z-10 w-full h-[300px]">
              {data.map((item, index) => (
                <div 
                  key={`content-${index}`}
                  className={`absolute inset-0 flex flex-col transition-all duration-700 ease-in-out ${
                    activeIndex === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-10 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-8">
                    {/* <div className="w-14 h-14 rounded-full border border-brand-neon/30 bg-brand-neon/5 flex items-center justify-center">
                      {item.icon}
                    </div> */}
                    <h2 className="text-brand-neon font-bold tracking-[0.2em] uppercase text-sm">
                      {item.tag}
                    </h2>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-black text-brand-white leading-snug tracking-tight mb-6">
                    {item.headline}
                  </h3>
                  
                  <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed border-l-2 border-brand-neon pl-4">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Progress/Navigation */}
            <div className="relative z-10 flex items-center gap-6 mt-12 pt-8 border-t border-white/10">
              <button 
                onClick={() => {
                  setActiveIndex(0);
                  clearInterval(timerRef.current);
                }}
                className={`text-xs font-bold tracking-widest uppercase transition-colors ${activeIndex === 0 ? 'text-brand-neon' : 'text-brand-gray hover:text-brand-white'}`}
              >
                Vision
              </button>
              
              {/* Animated Progress Bar */}
              <div className="flex-grow h-1 bg-white/10 rounded-full overflow-hidden relative">
                <div 
                  className="absolute top-0 left-0 h-full bg-brand-neon"
                  style={{
                    width: '100%',
                    transition: activeIndex !== null ? 'transform 6s linear' : 'none',
                    transform: 'translateX(0%)',
                    animation: 'progressFill 6s infinite linear'
                  }}
                ></div>
              </div>
              
              <button 
                onClick={() => {
                  setActiveIndex(1);
                  clearInterval(timerRef.current);
                }}
                className={`text-xs font-bold tracking-widest uppercase transition-colors ${activeIndex === 1 ? 'text-brand-neon' : 'text-brand-gray hover:text-brand-white'}`}
              >
                Mission
              </button>
            </div>
            
          </div>
        </div>

      </div>

      {/* Global style for the progress bar animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes progressFill {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}} />
    </section>
  );
};

export default VisionMission;