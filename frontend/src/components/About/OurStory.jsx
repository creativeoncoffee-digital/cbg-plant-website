import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Lightbulb, Cog, Zap } from 'lucide-react';

const OurStory = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Smooth staggered pop-up for the bento boxes
        gsap.fromTo('.story-bento',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/5">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col gap-8 md:gap-10">

        {/* Section Header */}
        <div className="story-bento flex flex-col items-center text-center mb-6">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-xs">
              Our Evolution
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.5rem] font-black text-[#0f2517] tracking-tight leading-[1.1]">
            From Vision to <span className="text-[#3c6e4b]">Reality.</span>
          </h2>
        </div>

        {/* Modern Bento Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8">

          {/* BOX 1: The Blueprint (Large spanning left) */}
          <div className="story-bento col-span-1 md:col-span-7 bg-[#f4f6ef] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center border border-[#0f2517]/5 group hover:shadow-lg transition-all duration-500">
            {/* Background Watermark Year */}
            <div className="absolute -bottom-12 -right-8 text-[12rem] font-black text-white drop-shadow-sm select-none opacity-60 z-0 group-hover:scale-105 transition-transform duration-700">
              2021
            </div>
            
            <div className="relative z-10">
              <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center mb-6 shadow-sm border border-[#0f2517]/5">
                <Lightbulb className="text-[#3c6e4b]" size={28} />
              </div>
              <h3 className="text-3xl md:text-4xl font-black text-[#0f2517] mb-5 tracking-tight">The Blueprint</h3>
              <p className="text-[#0f2517]/75 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                A high-impact vision crystallized around a national imperative: transforming India’s vast agricultural residue into clean, sustainable energy. Inspired by the SATAT initiative, we recognized the monumental potential of converting biomass into Compressed Biogas (CBG).
              </p>
            </div>
          </div>

          {/* BOX 2: Integrated Image (Spanning right) */}
          <div className="story-bento col-span-1 md:col-span-5 rounded-[2.5rem] overflow-hidden relative min-h-[300px] border border-[#0f2517]/5 shadow-sm group">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2070&auto=format&fit=crop" 
              alt="Engineering Blueprint" 
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-[#0f2517]/20 group-hover:bg-[#0f2517]/10 transition-colors duration-500"></div>
          </div>

          {/* BOX 3: The Crucible (Bottom Left) */}
          <div className="story-bento col-span-1 md:col-span-5 bg-white rounded-[2.5rem] p-10 md:p-12 flex flex-col justify-center border border-[#0f2517]/10 shadow-[0_8px_30px_rgba(15,37,23,0.04)] hover:shadow-[0_15px_40px_rgba(15,37,23,0.08)] transition-shadow duration-500">
            <div className="w-12 h-12 bg-[#f4f6ef] rounded-2xl flex items-center justify-center mb-6 border border-[#0f2517]/5">
              <Cog className="text-[#3c6e4b]" size={24} />
            </div>
            <h3 className="text-2xl md:text-3xl font-black text-[#0f2517] mb-4 tracking-tight">The Crucible</h3>
            <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed">
              Navigating complex regulatory landscapes, supply chains, and market dynamics. Through continuous adaptation, we transformed early hurdles into institutional maturity, leveraging platforms like the GOBARdhan portal.
            </p>
          </div>

          {/* BOX 4: Today (Bottom Right - Dark Premium Box) */}
          <div className="story-bento col-span-1 md:col-span-7 bg-[#0f2517] rounded-[2.5rem] p-10 md:p-14 relative overflow-hidden flex flex-col justify-center shadow-xl group">
             
             {/* Glowing ambient background element */}
             <div className="absolute -top-32 -right-32 w-96 h-96 bg-[#3c6e4b]/40 rounded-full blur-[100px] group-hover:bg-[#d4ff00]/20 transition-colors duration-700"></div>
             
             <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-14 h-14 bg-[#d4ff00] rounded-2xl flex items-center justify-center shadow-[0_0_20px_rgba(212,255,0,0.3)]">
                  <Zap className="text-[#0f2517]" size={26} fill="#0f2517" />
                </div>
                <span className="text-[#d4ff00] font-bold tracking-[0.2em] uppercase text-sm">Present Day</span>
              </div>
              
              <h3 className="text-3xl md:text-4xl font-black text-white mb-5 tracking-tight">Active Commercial Production</h3>
              <p className="text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-xl">
                Backed by strategic joint ventures and technical partnerships, our flagship commercial CBG production facility is undergoing final execution, set to achieve active commercial production in Q1 of the upcoming financial year.
              </p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default OurStory;