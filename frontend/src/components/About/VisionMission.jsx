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
      tag: "OUR VISION",
      icon: <Eye className="text-[#3c6e4b]" size={18} />,
      headline: "To stand as a premier catalyst in India’s green energy landscape.",
      desc: "Converting agricultural residue and organic waste into high-grade renewable fuel while empowering rural agrarian economies.",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      tag: "OUR MISSION",
      icon: <Target className="text-[#3c6e4b]" size={18} />,
      headline: "To engineer, build, and operate scalable, highly efficient infrastructure.",
      desc: "Through cross-disciplinary innovation, strong government policy integration, and unyielding ground-level execution.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  // Auto-cycle every 7 seconds
  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    
    return () => clearInterval(timerRef.current);
  }, []);

  // Initial Section Reveal Animation
  useEffect(() => {
    if (inView) {
      gsap.fromTo(containerRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 1.2, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    
    <section 
      ref={ref} 
      className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-fixed bg-center bg-cover flex items-center justify-center min-h-[90vh]"
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')" }}
    >
      
    
      <div className="absolute inset-0 bg-[#f4f6ef]/90 mix-blend-multiply"></div>
      <div clasName = "absolute inset-0 bg-[#0f2517]/60"></div>

      {/* MAIN CENTERED CARD */}
      <div ref={containerRef} className="relative z-10 w-full max-w-5xl mx-auto opacity-0 shadow-[0_30px_60px_rgba(15,37,23,0.15)] rounded-2xl overflow-hidden bg-[#f4f6ef]">
        
        <div className="flex flex-col md:flex-row w-full min-h-[500px]">
          
          {/* Left Side: Images */}
          <div className="relative w-full md:w-1/2 h-72 md:h-auto overflow-hidden bg-[#0f2517]">
            {data.map((item, index) => (
              <div 
                key={`img-${index}`}
                className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
                  activeIndex === index ? 'opacity-100 z-10' : 'opacity-0 z-0'
                }`}
              >
                <img 
                  src={item.img}
                  alt={item.tag}
                  className={`w-full h-full object-cover transition-transform duration-[10000ms] ease-linear ${
                    activeIndex === index ? 'scale-105' : 'scale-100'
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Right Side: Solid Cream Content Area */}
          <div className="relative w-full md:w-1/2 flex flex-col p-10 md:p-14 justify-center bg-[#f4f6ef]">
            
            {/* Crossfading Content Wrapper */}
            <div className="relative z-10 w-full h-[280px]">
              {data.map((item, index) => (
                <div 
                  key={`content-${index}`}
                  className={`absolute inset-0 flex flex-col transition-all duration-700 ease-in-out ${
                    activeIndex === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-6 pointer-events-none'
                  }`}
                >
                  {/* Icon & Tag */}
                  <div className="flex items-center gap-3 mb-5">
                    <div className="w-8 h-8 rounded-full border border-[#3c6e4b]/20 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h2 className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-xs">
                      {item.tag}
                    </h2>
                  </div>
                  
                  {/* Headline */}
                  <h3 className="text-3xl md:text-4xl font-black text-[#0f2517] leading-tight tracking-tight mb-5">
                    {item.headline}
                  </h3>
                  
                  {/* Description */}
                  <p className="text-[#0f2517]/75 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Progress/Navigation Area */}
            <div className="relative z-10 flex items-center justify-between w-full mt-auto pt-6">
              
              <button 
                onClick={() => { setActiveIndex(0); clearInterval(timerRef.current); }}
                className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${activeIndex === 0 ? 'text-[#0f2517]' : 'text-[#0f2517]/30 hover:text-[#0f2517]'}`}
              >
                01 VISION
              </button>
              
              {/* Animated Progress Bar */}
              <div className="flex-grow mx-4 h-[2px] bg-[#0f2517]/10 relative overflow-hidden">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#0f2517]"
                  style={{
                    width: '100%',
                    transition: activeIndex !== null ? 'transform 7s linear' : 'none',
                    transform: 'translateX(0%)',
                    animation: 'progressFill 7s infinite linear'
                  }}
                ></div>
              </div>
              
              <button 
                onClick={() => { setActiveIndex(1); clearInterval(timerRef.current); }}
                className={`text-[10px] md:text-xs font-bold tracking-widest uppercase transition-colors duration-300 ${activeIndex === 1 ? 'text-[#0f2517]' : 'text-[#0f2517]/30 hover:text-[#0f2517]'}`}
              >
                02 MISSION
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