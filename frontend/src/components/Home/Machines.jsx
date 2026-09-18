import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowUpRight } from 'lucide-react';

const Machines = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const sectionRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Header Reveal
        tl.fromTo('.machine-header-reveal',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        )
        // Advanced Card Reveal: Unmasks the cards from the bottom up while scaling down slightly
        .fromTo('.machine-card',
          { y: 60, opacity: 0, clipPath: 'inset(100% 0 0 0)' },
          { y: 0, opacity: 1, clipPath: 'inset(0% 0 0 0)', duration: 1, stagger: 0.2, ease: 'power3.inOut' },
          '-=0.4'
        );
      }, sectionRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const machineData = [
    {
      id: "01",
      title: "Turnkey CBG Plants",
      tagline: "Waste in. Fuel out.",
      desc: "Complete compressed biogas plants from feedstock handling to dispensing — engineered, procured and commissioned under a single contract. Capacities from 2 to 20 tonnes of CBG per day.",
      tags: ["2-20 TPD CAPACITY", "EPC SINGLE CONTRACT", "90-DAY COMMISSIONING"],
      imgSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop",
      fullWidth: false
    },
    {
      id: "02",
      title: "Anaerobic Digesters",
      tagline: "The heart of the plant.",
      desc: "High-rate CSTR and plug-flow digesters built for pressmud, paddy straw, Napier grass, cattle dung and municipal organic waste. Designed for maximum volatile solids destruction.",
      tags: ["CSTR & PLUG-FLOW", "MULTI-FEEDSTOCK READY", "35-45 DAY HRT"],
      imgSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop",
      fullWidth: false
    },
    {
      id: "03",
      title: "Biogas Upgrading Units",
      tagline: "96%+ methane purity.",
      desc: "Membrane and water-scrubbing based purification systems that upgrade raw biogas to pipeline-grade bio-CNG with methane content above 96% and minimal methane slip.",
      tags: ["MEMBRANE / WATER WASH", ">96% CH₄ PURITY", "<2% METHANE SLIP"],
      imgSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop",
      fullWidth: true
    }
  ];

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12">
      <div ref={sectionRef} className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="machine-header-reveal text-brand-neon  tracking-[0.2em] uppercase text-xs mb-4">
            What We Manufacture
          </span>
          <h2 className="machine-header-reveal text-4xl md:text-6xl font-black text-brand-white tracking-tight">
            The machines
          </h2>
        </div>

        {/* Cards Container (Pure Flexbox) */}
        <div className="flex flex-col md:flex-row flex-wrap gap-6 w-full">
          {machineData.map((machine, index) => (
            <div 
              key={index} 
              // If fullWidth is true, take 100%. Otherwise, take roughly 50% minus the gap space on desktop.
              className={`machine-card group flex flex-col border border-white/10 hover:border-brand-neon/50 bg-brand-surface/30 transition-colors duration-500 ${machine.fullWidth ? 'w-full' : 'w-full md:w-[calc(50%-12px)]'}`}
            >
              
              {/* Image Container */}
              <div className="w-full overflow-hidden relative border-b border-white/10">
                <div className={`w-full ${machine.fullWidth ? 'aspect-video md:aspect-[21/9]' : 'aspect-video'}`}>
                  <img 
                    src={machine.imgSrc} 
                    alt={machine.title} 
                    className="w-full h-full object-cover grayscale opacity-75 group-hover:grayscale-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out"
                  />
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col p-8 md:p-10 flex-grow">
                
                {/* Title & Tagline */}
                <div className="flex items-center gap-4 mb-2">
                  <span className="text-brand-neon font-black text-xl">{machine.id}</span>
                  <h3 className="text-2xl md:text-3xl font-bold text-brand-white">{machine.title}</h3>
                </div>
                <span className="text-brand-neon font-medium text-sm mb-6 block">
                  {machine.tagline}
                </span>

                {/* Description */}
                <p className="text-brand-gray text-base leading-relaxed mb-8 flex-grow">
                  {machine.desc}
                </p>

                {/* Tags & Action Link */}
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pt-6 border-t border-white/10">
                  <div className="flex flex-wrap items-center gap-3 md:gap-4">
                    {machine.tags.map((tag, i) => (
                      <span key={i} className="text-xs font-bold text-brand-gray tracking-wider uppercase border border-white/10 bg-brand-black/50 px-3 py-1.5 rounded-sm">
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <Link to="/contact" className="flex items-center gap-2 text-brand-white hover:text-brand-neon font-bold text-sm tracking-wider uppercase transition-colors group/link shrink-0">
                    Enquire 
                    <ArrowUpRight size={16} className="transform transition-transform group-hover/link:translate-x-1 group-hover/link:-translate-y-1" />
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Machines;