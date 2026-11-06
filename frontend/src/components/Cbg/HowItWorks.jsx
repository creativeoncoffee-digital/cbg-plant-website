import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Trash2, Factory, Filter, Gauge, Fuel } from 'lucide-react';

const ProcessStepHorizontal = ({ step, index, isActive, onClick }) => {
  return (
    <div 
      onClick={() => onClick(index)}
      className={`relative flex flex-col items-center text-center gap-4 p-6 rounded-3xl cursor-pointer transition-all duration-500 border h-full ${
        isActive 
          ? 'bg-white border-[#0f2517]/10 shadow-[0_15px_40px_rgba(15,37,23,0.08)] -translate-y-2 scale-[1.02]' 
          : 'bg-transparent border-transparent hover:bg-white/40 hover:-translate-y-1'
      }`}
    >
      {/* Animated Top Accent Line */}
      <div className={`absolute top-0 left-1/2 -translate-x-1/2 h-1.5 rounded-b-full transition-all duration-500 ${
        isActive ? 'w-16 bg-[#9bcc4c]' : 'w-0 bg-transparent'
      }`}></div>

      {/* Icon */}
      <div className={`w-16 h-16 shrink-0 rounded-full flex items-center justify-center transition-all duration-500 ${
        isActive ? 'bg-[#f4f7f4] text-[#9bcc4c] shadow-md scale-110' : 'bg-gray-100 text-gray-400'
      }`}>
        {step.icon}
      </div>

      {/* Text Content */}
      <div className="flex flex-col items-center mt-2 flex-grow">
        <span className={`text-[10px] font-bold tracking-widest uppercase mb-2 transition-colors duration-300 ${
          isActive ? 'text-[#3c6e4b]' : 'text-gray-400'
        }`}>
          Step 0{index + 1}
        </span>
        <h3 className={`text-base md:text-lg font-bold transition-colors duration-300 mb-3 ${
          isActive ? 'text-[#0f2517]' : 'text-gray-500'
        }`}>
          {step.title}
        </h3>
        <p className={`text-xs md:text-sm font-medium leading-relaxed transition-all duration-500 ${
          isActive ? 'text-gray-600' : 'text-gray-400'
        }`}>
          {step.desc}
        </p>
      </div>
    </div>
  );
};

const HowItWorks = () => {
  const [activeStep, setActiveStep] = useState(0);
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);

  // Auto-cycle through the steps to match the continuous flow of the GIF
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveStep((prev) => (prev + 1) % 5);
    }, 1500);
    return () => clearInterval(timer);
  }, []);

  // Entrance Animation
  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.process-anim',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const processData = [
    {
      title: "Organic Waste",
      desc: "Agricultural residue, food waste, and farm sewage are collected and fed into the system.",
      icon: <Trash2 size={26} strokeWidth={1.5} />
    },
    {
      title: "Anaerobic Digestion",
      desc: "Waste breaks down in an oxygen-free dome, generating raw methane gas and organic fertilizer.",
      icon: <Factory size={26} strokeWidth={1.5} />
    },
    {
      title: "Biogas Purification",
      desc: "Raw gas passes through scrubber columns to remove impurities like H₂S and CO₂.",
      icon: <Filter size={26} strokeWidth={1.5} />
    },
    {
      title: "High Compression",
      desc: "The purified gas is compressed at high pressure for efficient, safe storage and transport.",
      icon: <Gauge size={26} strokeWidth={1.5} />
    },
    {
      title: "CBG Output",
      desc: "Clean, renewable Compressed Biogas is stored in cylinders, ready for commercial distribution.",
      icon: <Fuel size={26} strokeWidth={1.5} />
    }
  ];

  return (
    <section ref={ref} className="w-full bg-[#fcfdfc] py-20 md:py-32 px-4 md:px-8 lg:px-12 overflow-hidden border-t border-[#0f2517]/5">
      {/* Expanded to max-w-[1400px] (approx 8xl) for full-screen feel */}
      <div ref={containerRef} className="w-full max-w-[1400px] mx-auto flex flex-col relative z-10">
        
        {/* Header */}
        <div className="flex flex-col items-center text-center mb-12 md:mb-16 process-anim">
          <div className="flex items-center gap-4 mb-5">
            <div className="h-[1px] w-12 bg-[#3c6e4b]/30"></div>
            <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              The Process
            </span>
            <div className="h-[1px] w-12 bg-[#3c6e4b]/30"></div>
          </div>
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-semibold text-[#0f2517] tracking-tight mb-6">
            How It <span className="text-[#3c6e4b]">Works</span>
          </h2>
          <p className="text-[#0f2517]/70 text-sm md:text-base font-medium max-w-3xl leading-relaxed">
            From raw agricultural waste to commercial-grade Compressed Biogas — a continuous, sustainable cycle that powers industries and revitalizes the soil.
          </p>
        </div>

        {/* Main Content Layout: Stacked Full Width */}
        <div className="flex flex-col gap-16 lg:gap-20 w-full">
          
          {/* TOP: Full-Screen Premium GIF Display Container */}
          <div className="w-full process-anim">
          
              <div className="relative w-full aspect-[16/9] md:aspect-[21/10] rounded-[1.5rem]  overflow-hidden bg-[#F7FCF8] shadow-inner border border-white/80">
                <img 
                  src="/cbg_plant_animation.gif" 
                  alt="CBG Plant Process Animation" 
                  className="w-full h-full object-cover md:object-contain bg-[#F7FCF8]"
                />
              </div>

            {/* </div> */}
          </div>

          {/* BOTTOM: Horizontal Interactive Steps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6 process-anim items-stretch">
            {processData.map((step, index) => (
              <ProcessStepHorizontal 
                key={index} 
                step={step} 
                index={index} 
                isActive={activeStep === index}
                onClick={setActiveStep}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default HowItWorks;