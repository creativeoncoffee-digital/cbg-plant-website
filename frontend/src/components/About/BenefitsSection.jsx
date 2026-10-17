import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Sun, Recycle, FlaskConical, TestTube, Sprout, CloudCog } from 'lucide-react';

const BenefitsSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Header Reveal
        tl.fromTo('.benefit-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
        // Grid Items Reveal
        .fromTo('.benefit-card',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const benefits = [
    {
      title: "Renewable Source of Energy",
      desc: "Biogas is produced from organic waste, making it a sustainable and continuously available energy source.",
      icon: <Sun size={32} strokeWidth={1.5} />
    },
    {
      title: "Waste Management Solution",
      desc: "It efficiently treats biodegradable waste from kitchens, farms, and industries, reducing landfill load and pollution.",
      icon: <Recycle size={32} strokeWidth={1.5} />
    },
    {
      title: "Reduces Chemical Dependency",
      desc: "Replaces synthetic fertilizers, minimizing soil degradation and groundwater contamination.",
      icon: <FlaskConical size={32} strokeWidth={1.5} />
    },
    {
      title: "Rich in Nutrients",
      desc: "The digestate from biogas plants is an excellent organic fertilizer containing nitrogen, phosphorus, and potassium (NPK).",
      icon: <TestTube size={32} strokeWidth={1.5} />
    },
    {
      title: "Improves Soil Health",
      desc: "Enhances soil texture, water retention, and microbial activity, making soil more fertile over time.",
      icon: <Sprout size={32} strokeWidth={1.5} />
    },
    {
      title: "Reduction in GHG Emissions",
      desc: "Capturing methane from waste prevents its release into the atmosphere, significantly lowering carbon emissions.",
      icon: <CloudCog size={32} strokeWidth={1.5} />
    }
  ];

  return (
    <section ref={ref} className="relative w-full py-24 md:py-32 px-6 md:px-12 overflow-hidden bg-[#0f2517]">
      
      {/* Background Image with Deep Green Overlay */}
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

      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Top Header Section (Split Layout) */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-8 lg:gap-16 mb-10">
          <div className="w-full lg:w-1/2">
            <h2 className="benefit-header text-3xl md:text-5xl font-semibold text-white leading-[1.1] tracking-tight">
              Benefits of Biogas & <br /> Biofertiliser
            </h2>
          </div>
          <div className="w-full lg:w-1/2">
            <p className="benefit-header text-white/80 text-base md:text-sm font-medium leading-relaxed border-l-2 border-white/20 pl-6">
              A sustainable energy and agriculture bridge created by transforming organic waste into renewable power and valuable resources, promoting eco-friendly practices and long-term environmental benefits.
            </p>
          </div>
        </div>

        {/* Benefits Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {benefits.map((item, index) => (
            <div 
              key={index} 
              className="benefit-card group flex flex-col p-6 rounded-[2rem] border border-white/5 hover:border-white/20 hover:bg-white/5 transition-all duration-500 hover:-translate-y-2 backdrop-blur-sm"
            >
              {/* Icon Container */}
              <div className="w-16 h-16 rounded-2xl bg-white/3 flex items-center justify-center text-white mb-6 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-300">
                {item.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-xl font-semibold text-white mb-4 leading-snug">
                {item.title}
              </h3>
              
              {/* Description */}
              <p className="text-white/70 text-sm md:text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BenefitsSection;