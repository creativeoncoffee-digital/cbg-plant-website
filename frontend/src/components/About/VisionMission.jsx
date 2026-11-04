import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Eye, Target } from 'lucide-react';

const VisionMission = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  const data = [
    {
      id: "01",
      tag: "OUR VISION",
      icon: <Eye className="text-[#d4ff00]" size={18} strokeWidth={2} />,
      headline: "To stand as a premier catalyst in India’s green energy landscape.",
      desc: "Converting agricultural residue and organic waste into high-grade renewable fuel while empowering rural agrarian economies.",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      tag: "OUR MISSION",
      icon: <Target className="text-[#d4ff00]" size={18} strokeWidth={2} />,
      headline: "To engineer, build, and operate scalable, highly efficient infrastructure.",
      desc: "Through cross-disciplinary innovation, strong government policy integration, and unyielding ground-level execution.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // Auto-play timer that correctly resets when activeIndex changes
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 7000); // 7 second duration
    return () => clearInterval(timer);
  }, [activeIndex]);

  // Section reveal animation
  useEffect(() => {
    if (inView) {
      gsap.fromTo(containerRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    <section 
      ref={ref} 
      className="w-full py-24 md:py-32 px-6 md:px-12 bg-[#0f2517] flex items-center justify-center min-h-[80vh] relative overflow-hidden"
    >
      {/* Background Image with Deep Green Overlay (Inherited from Benefits Section) */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1523348837708-15d4a09cfac2?q=80&w=2070&auto=format&fit=crop" 
          alt="Agriculture Field" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        <div className="absolute inset-0 bg-[#0f2517]/80"></div>
        {/* Subtle radial gradient for center focus */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#0f2517_100%)]"></div>
      </div>

      <div 
        ref={containerRef} 
        className="relative z-10 w-full max-w-6xl mx-auto opacity-0 shadow-2xl rounded-[2.5rem] overflow-hidden bg-white/5 border border-white/10 backdrop-blur-md"
      >
        <div className="flex flex-col md:flex-row w-full min-h-[420px]">
          
          {/* Left Side: Images */}
          <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden bg-[#0f2517]">
            {data.map((item, index) => (
              <img 
                key={`img-${index}`}
                src={item.img}
                alt={item.tag}
                className={`absolute inset-0 w-full h-full object-cover transition-all duration-[1500ms] ease-in-out ${
                  activeIndex === index ? 'opacity-80 scale-100 z-10' : 'opacity-0 scale-110 z-0'
                }`}
              />
            ))}
            {/* Gradient Overlay to blend image into the dark card */}
            <div className="absolute inset-0 z-20 bg-gradient-to-t md:bg-gradient-to-l from-[#0f2517] md:from-[#0f2517]/90 via-[#0f2517]/20 to-transparent"></div>
          </div>

          {/* Right Side: Content Area */}
          <div className="relative w-full md:w-1/2 flex flex-col p-8 md:p-14 justify-center bg-transparent z-30 -mt-10 md:mt-0">
            
            {/* Text Crossfade Container */}
            <div className="relative z-10 w-full h-[240px] md:h-[220px]">
              {data.map((item, index) => (
                <div 
                  key={`content-${index}`}
                  className={`absolute inset-0 flex flex-col transition-all duration-700 ease-out ${
                    activeIndex === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-8 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/5 flex items-center justify-center backdrop-blur-sm">
                      {item.icon}
                    </div>
                    <h2 className="text-[#d4ff00] font-bold tracking-[0.2em] uppercase text-xs">
                      {item.tag}
                    </h2>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl  font-semibold text-white leading-[1.1] tracking-tight mb-4">
                    {item.headline}
                  </h3>
                  
                  <p className="text-white/70 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Dual Progress Navigation */}
            <div className="mt-8 pt-8 flex items-center gap-6 border-t border-white/10">
              
              {[0, 1].map((idx) => (
                <button 
                  key={`btn-${idx}`}
                  onClick={() => setActiveIndex(idx)}
                  className="relative flex flex-col items-start pb-3 w-32 group"
                >
                  <span className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 mb-2 ${
                    activeIndex === idx ? 'text-white' : 'text-white/40 group-hover:text-white/70'
                  }`}>
                    0{idx + 1} {idx === 0 ? 'VISION' : 'MISSION'}
                  </span>
                  
                  {/* Track Base */}
                  <div className="absolute bottom-0 left-0 w-full h-[2px] bg-white/10 rounded-full overflow-hidden">
                    {/* Animated Fill */}
                    <div 
                      className="absolute top-0 left-0 h-full bg-[#d4ff00] rounded-full"
                      style={{
                        width: activeIndex === idx ? '100%' : '0%',
                        animation: activeIndex === idx ? 'fillBar 7s linear forwards' : 'none'
                      }}
                    ></div>
                  </div>
                </button>
              ))}

            </div>
            
          </div>
        </div>

      </div>

      {/* Global Keyframes for the Progress Bar */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes fillBar {
          0% { width: 0%; }
          100% { width: 100%; }
        }
      `}} />
    </section>
  );
};

export default VisionMission;