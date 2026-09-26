import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const SolutionCard = ({ solution, index }) => {
  return (
    <div className="solution-card group relative w-full md:w-1/3 h-[350px] md:h-[450px] overflow-hidden border border-white/10 bg-brand-surface cursor-none">
      
      {/* Background Image */}
      <img 
        src={solution.img} 
        alt={solution.title} 
        className="absolute inset-0 w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 group-hover:scale-110 transition-all duration-700 ease-out z-0"
      />
      
      {/* Base Overlay to ensure text readability */}
      <div className="absolute inset-0 bg-brand-black/60 group-hover:bg-brand-black/20 transition-colors duration-500 z-10"></div>

      {/* Massive Background Number (Top Right) */}
      <div className="absolute top-6 right-6 text-6xl font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.2)] group-hover:[-webkit-text-stroke:1px_#d4ff00] transition-all duration-500 z-20">
        0{index + 1}
      </div>

      {/* Content Container (Anchored to Bottom) */}
      <div className="absolute inset-x-0 bottom-0 z-30 flex flex-col justify-end p-8 md:p-10 h-full">
        
        {/* Title Area (Always Visible) */}
        <div className="flex items-end justify-between transform transition-transform duration-500 group-hover:-translate-y-4">
          <h3 className="text-3xl md:text-4xl font-black text-brand-white leading-tight max-w-[80%]">
            {solution.title}
          </h3>
          <div className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center bg-brand-black/50 backdrop-blur-sm group-hover:bg-brand-neon group-hover:border-brand-neon transition-all duration-500">
            <ArrowUpRight className="text-brand-white group-hover:text-brand-black transition-colors duration-500" size={24} />
          </div>
        </div>

        {/* Description Text (Hidden by default, slides up on hover) */}
        <div className="grid grid-rows-[0fr] group-hover:grid-rows-[1fr] transition-[grid-template-rows] duration-500 ease-out">
          <div className="overflow-hidden">
            <div className="pt-6 border-t border-brand-neon/30 mt-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
              <p className="text-brand-white/90 text-sm md:text-base font-medium leading-relaxed">
                {solution.desc}
              </p>
            </div>
          </div>
        </div>

      </div>

      {/* Hover Border Glow Effect */}
      <div className="absolute inset-0 border-2 border-transparent group-hover:border-brand-neon transition-colors duration-500 z-40 pointer-events-none"></div>
    </div>
  );
};

const Solutions = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Header split reveal
        tl.fromTo('.sol-header',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
        // Card stagger reveal
        .fromTo('.solution-card',
          { y: 60, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const solutionsData = [
    {
      title: "Bio-CNG Plants",
      desc: "End-to-end plants designed to convert organic feedstock into purified Bio-CNG for reliable energy applications.",
      img: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Compressed Bio-CBG Plants",
      desc: "High-capacity Bio-CBG plants integrating anaerobic digestion, gas purification and compression for commercial gas production.",
      img: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=1000&auto=format&fit=crop"
    },
    {
      title: "Zero Waste Management",
      desc: "Segregation, processing and reporting brought together as one accountable circular-waste programme.",
      img: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=1000&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Top Header Section (Split Layout) */}
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
          
          <div className="flex flex-col w-full md:w-2/3">
            <span className="sol-header text-brand-neon font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
              Solutions Ecosystem
            </span>
            <h2 className="sol-header text-4xl md:text-6xl font-black text-brand-white tracking-tight leading-[1.1]">
              Choose the outcome. <br className="hidden md:block"/>
                 We engineer <span className="text-brand-neon"> the pathway.</span>
            </h2>
          </div>

          <div className="sol-header w-full md:w-1/3">
            <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed border-l-2 border-brand-neon pl-4">
              Three connected CBG plant solutions for turning organic waste into clean fuel and measurable operational value.
            </p>
          </div>

        </div>

        {/* The 3 Monolithic Cards */}
        <div className="flex flex-col md:flex-row w-full gap-4 md:gap-6">
          {solutionsData.map((solution, index) => (
            <SolutionCard 
              key={index} 
              solution={solution} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Solutions;