import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const SolutionCard = ({ solution, index }) => {
  return (
    <div className="solution-card flex flex-col justify-between p-8 md:p-10 rounded-2xl bg-[#0f2517]/40  border border-[#f4f6ef]/10 hover:bg-[#143220]/60 hover:border-white transition-all duration-500 hover:-translate-y-2 group min-h-[250px] shadow-2xl">
      
      {/* Card Header: Number & Icon */}
      <div className="flex justify-between items-start mb-8">
        <span className="text-5xl font-semibold text-[#9bcc4c] group-hover:text-9bcc4c transition-colors duration-500">
          0{index + 1}
        </span>
        <div className="w-10 h-10 rounded-full border border-[#f4f6ef]/20 flex items-center justify-center bg-transparent group-hover:bg-[#d4ff00] group-hover:border-white transition-all duration-500">
          <ArrowUpRight className="text-[#f4f6ef] group-hover:text-[#0f2517] transition-colors duration-500" size={20} />
        </div>
      </div>

      {/* Card Content */}
      <div className="flex flex-col">
        <h3 className="text-[22px] font-semibold text-[#f4f6ef] mb-2 tracking-tight  transition-colors duration-500">
          {solution.title}
        </h3>
        <p className="text-[#f4f6ef]/75 text-sm md:text-[15px] font-medium leading-relaxed">
          {solution.desc}
        </p>
      </div>

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
        
        // Elegant fade-up for header
        tl.fromTo('.sol-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
        // Smooth, staggered entrance for the glass cards
        .fromTo('.solution-card',
          { y: 40, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.8, stagger: 0.15, ease: 'power2.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const solutionsData = [
    {
      title: "Bio-CNG Plants",
      desc: "End-to-end plants designed to convert organic feedstock into purified Bio-CNG for reliable commercial energy applications."
    },
    {
      title: "Compressed Bio-CBG",
      desc: "High-capacity facilities integrating anaerobic digestion, advanced gas purification, and compression for maximum yield."
    },
    {
      title: "Zero Waste Management",
      desc: "Segregation, processing, and reporting brought together as one highly accountable, circular-waste operational programme."
    }
  ];

  return (
  
    <section className="relative w-full py-24 md:py-32 px-6 md:px-12 bg-fixed bg-center bg-cover border-t border-[#f4f6ef]/10" 
      style={{ backgroundImage: "url('https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?q=80&w=2000&auto=format&fit=crop')" }}
    >
      
      {/* Deep Forest Green Overlay */}
      <div className="absolute inset-0 bg-[#0f2517]/90 mix-blend-multiply"></div>
      <div className="absolute inset-0 bg-[#0f2517]/60"></div>

      {/* Content Container */}
      <div ref={ref} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        
        <div ref={containerRef} className="flex flex-col">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-16 md:mb-20">
            <div className="flex flex-col w-full md:w-2/3">
              <span className="sol-header text-[#d4ff00]  tracking-[0.2em] uppercase text-xs mb-4 block drop-shadow-md">
                Solutions Ecosystem
              </span>
              <h2 className="sol-header text-4xl md:text-5xl font-semibold text-[#f4f6ef] tracking-tight leading-[1.1]">
                Choose the outcome. <br className="hidden md:block"/>
                We engineer the pathway.
              </h2>
            </div>

            <div className="sol-header w-full md:w-1/3">
              <p className="text-[#f4f6ef]/80 text-md  leading-relaxed tracking-tight  pl-4">
                Three connected CBG plant solutions for turning organic waste into clean fuel and measurable operational value.
              </p>
            </div>
          </div>

          {/* Simple Glass Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 w-full">
            {solutionsData.map((solution, index) => (
              <SolutionCard 
                key={index} 
                solution={solution} 
                index={index} 
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default Solutions;