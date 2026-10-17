import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, Leaf, Flame, Wind, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import img from '../../assets/Home/HomeImpact.png';
const ImpactSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.impact-elem',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
        gsap.fromTo('.impact-image',
          { scale: 0.95, opacity: 0 },
          { scale: 1, opacity: 1, duration: 1, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-12 md:py-20 px-6 md:px-12 overflow-hidden">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto bg-[#f0f7f0] rounded-[2rem] p-8 md:p-12  flex flex-col lg:flex-row items-center gap-12 lg:gap-16 border border-[#0f2517]/5">
        
        {/* Left Side: Content & Stats */}
        <div className="w-full lg:w-[65%] flex flex-col">
          
          <div className="impact-elem flex items-center gap-3 mb-5">
            {/* <div className="h-[2px] w-6 bg-[#3c6e4b]"></div> */}
            <span className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-[10px] md:text-xs">
              Our Impact
            </span>
          </div>
          
          <h2 className="impact-elem text-3xl md:text-5xl font-semibold text-[#0f2517] leading-[1] tracking-tight mb-6">
            Real Solutions. <br />
            Lasting Impact.
          </h2>
          
          <p className="impact-elem text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed mb-10 max-w-lg">
            From reducing carbon emissions to creating renewable energy, our solutions help industries, communities and the environment thrive.
          </p>

          {/* Stats Row */}
          <div className="impact-elem grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-6 mb-10">
            
            <div className="flex flex-col border-l-2 border-[#3c6e4b]/20 pl-3">
              <Leaf size={18} className="text-[#3c6e4b] mb-2" />
              <span className="text-xl lg:text-2xl font-semi-bold text-[#0f2517] mb-1">1000+</span>
              <span className="text-[#0f2517]/60 text-[10px] font-bold leading-snug">Tonnes of Organic<br/>Waste Processed</span>
            </div>
            
            <div className="flex flex-col border-l-2 border-[#3c6e4b]/20 pl-3">
              <Flame size={18} className="text-[#3c6e4b] mb-2" />
              <span className="text-xl lg:text-2xl font-semi-bold text-[#0f2517] mb-1">2.4M+</span>
              <span className="text-[#0f2517]/60 text-[10px] font-bold leading-snug">m³ of Biogas<br/>Produced</span>
            </div>
            
            <div className="flex flex-col border-l-2 border-[#3c6e4b]/20 pl-3">
              <Wind size={18} className="text-[#3c6e4b] mb-2" />
              <span className="text-xl lg:text-2xl font-semi-bold text-[#0f2517] mb-1">120K</span>
              <span className="text-[#0f2517]/60 text-[10px] font-bold leading-snug">Tonnes of CO₂<br/>Offset per Year</span>
            </div>

            <div className="flex flex-col border-l-2 border-[#3c6e4b]/20 pl-3">
              <Activity size={18} className="text-[#3c6e4b] mb-2" />
              <span className="text-xl lg:text-2xl font-semi-bold text-[#0f2517] mb-1">50+</span>
              <span className="text-[#0f2517]/60 text-[10px] font-bold leading-snug">Projects Delivered<br/>Across India</span>
            </div>

          </div>

          <div className="impact-elem">
            <Link 
              to="/impact" 
              className="group inline-flex items-center gap-3 bg-[#3c6e4b] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#3c6e4b] transition-all duration-300 shadow-md"
            >
              Our Impact in Numbers
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side: Large Rounded Image with Handwritten Text overlay */}
        <div className="impact-image w-full lg:w-[45%] h-[350px] md:h-[450px] relative">
          
          <img 
            src={img} 
            alt="Sapling in soil" 
            className="w-full h-full object-cover rounded-3xl  "
          />
          
          {/* Floating Accent Text (Top Right over the image) */}
          {/* <div className="absolute top-8 right-6 md:top-12 md:right-8 z-20 flex flex-col items-center rotate-[-10deg] opacity-90 drop-shadow-md">
            <span className="text-white font-serif italic text-xl md:text-2xl tracking-wide">Cleaner</span>
            <span className="text-white font-serif italic text-xl md:text-2xl -mt-1 mr-4 tracking-wide">Energy</span>
            <span className="text-white font-serif italic text-xl md:text-2xl -mt-1 tracking-wide">Brighter</span>
            <span className="text-white font-serif italic text-xl md:text-2xl -mt-1 ml-4 tracking-wide">Future</span>
            <Leaf size={20} className="text-[#d4ff00] mt-1 ml-6" strokeWidth={1.5} />
          </div> */}
          
        </div>

      </div>
    </section>
  );
};

export default ImpactSection;