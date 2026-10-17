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
      icon: <Eye className="text-[#3c6e4b]" size={16} />,
      headline: "To stand as a premier catalyst in India’s green energy landscape.",
      desc: "Converting agricultural residue and organic waste into high-grade renewable fuel while empowering rural agrarian economies.",
      img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=1000&auto=format&fit=crop"
    },
    {
      id: "02",
      tag: "OUR MISSION",
      icon: <Target className="text-[#3c6e4b]" size={16} />,
      headline: "To engineer, build, and operate scalable, highly efficient infrastructure.",
      desc: "Through cross-disciplinary innovation, strong government policy integration, and unyielding ground-level execution.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev === 0 ? 1 : 0));
    }, 7000);
    return () => clearInterval(timerRef.current);
  }, []);

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
      className="w-full py-24 md:py-32 px-6 md:px-12 bg-white flex items-center justify-center min-h-[80vh] border-t border-[#0f2517]/5"
    >
      <div ref={containerRef} className="relative z-10 w-full max-w-6xl mx-auto opacity-0 shadow-lg rounded-[2rem] overflow-hidden bg-white border border-[#0f2517]/5">
        
        <div className="flex flex-col md:flex-row w-full min-h-[450px]">
          
          {/* Left Side: Images */}
          <div className="relative w-full md:w-1/2 h-64 md:h-auto overflow-hidden bg-[#f4f6ef]">
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

          {/* Right Side: Content Area */}
          <div className="relative w-full md:w-1/2 flex flex-col p-8 md:p-14 justify-center bg-white">
            
            <div className="relative z-10 w-full h-[260px]">
              {data.map((item, index) => (
                <div 
                  key={`content-${index}`}
                  className={`absolute inset-0 flex flex-col transition-all duration-700 ease-in-out ${
                    activeIndex === index ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 translate-y-4 pointer-events-none'
                  }`}
                >
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-8 h-8 rounded-full bg-[#f4f6ef] border border-[#0f2517]/5 flex items-center justify-center">
                      {item.icon}
                    </div>
                    <h2 className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-[10px]">
                      {item.tag}
                    </h2>
                  </div>
                  
                  <h3 className="text-2xl md:text-3xl font-black text-[#0f2517] leading-snug tracking-tight mb-4">
                    {item.headline}
                  </h3>
                  
                  <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed max-w-sm">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* Bottom Progress Navigation */}
            <div className="relative z-10 flex items-center justify-between w-full mt-auto pt-6 border-t border-[#0f2517]/5">
              
              <button 
                onClick={() => { setActiveIndex(0); clearInterval(timerRef.current); }}
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${activeIndex === 0 ? 'text-[#0f2517]' : 'text-[#0f2517]/30 hover:text-[#0f2517]'}`}
              >
                01 VISION
              </button>
              
              <div className="flex-grow mx-4 h-[2px] bg-[#0f2517]/5 relative overflow-hidden rounded-full">
                <div 
                  className="absolute top-0 left-0 h-full bg-[#3c6e4b]"
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
                className={`text-[10px] font-bold tracking-widest uppercase transition-colors duration-300 ${activeIndex === 1 ? 'text-[#0f2517]' : 'text-[#0f2517]/30 hover:text-[#0f2517]'}`}
              >
                02 MISSION
              </button>

            </div>
            
          </div>
        </div>

      </div>

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