import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';

const PartnerCard = ({ partner, index }) => {
  return (
    <div className="partner-card group relative w-full md:w-1/2 flex flex-col p-8 md:p-12 border border-white/10 bg-brand-surface/30 transition-all duration-500 hover:border-brand-neon hover:bg-brand-surface/50">
      
      {/* Icon Header */}
      <div className="flex items-center justify-between mb-8">
        <div className="w-14 h-14 rounded-sm bg-brand-black border border-white/10 flex items-center justify-center group-hover:border-brand-neon/50 group-hover:shadow-[0_0_15px_rgba(212,255,0,0.2)] transition-all duration-500">
          {partner.icon}
        </div>
        
        {/* Conditional External Link */}
        {partner.link && (
          <a 
            href={partner.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-brand-gray hover:text-brand-neon transition-colors duration-300"
          >
            <span className="text-xs font-bold uppercase tracking-widest hidden md:block">Visit Site</span>
            <ArrowUpRight size={20} className="transform transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
          </a>
        )}
      </div>

      {/* Role Tag */}
      <span className="text-brand-neon font-bold tracking-[0.15em] uppercase text-xs mb-3 block">
        {partner.role}
      </span>

      {/* Name & Subtitle */}
      <h3 className="text-2xl md:text-3xl font-black text-brand-white mb-4">
        {partner.name}
      </h3>
      <div className="border-l-2 border-brand-neon pl-4 mb-6">
        <span className="text-brand-white text-sm md:text-base font-bold leading-snug">
          {partner.subtitle}
        </span>
      </div>

      {/* Description */}
      <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed mt-auto">
        {partner.desc}
      </p>

    </div>
  );
};

const StrategicAlliances = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Header Reveal
        tl.fromTo('.alliance-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
        // Cards Reveal
        .fromTo('.partner-card',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const partnersData = [
    {
      name: "Inventive Gas Equipments Pvt. Ltd.",
      role: "Joint Venture Partner",
      subtitle: "Industrial Infrastructure & Gas Engineering Excellence",
      desc: "As our joint venture partner, Inventive Gas Equipments Pvt. Ltd. provides the robust industrial foundation, high-capacity gas handling infrastructure, and specialized equipment engineering essential to building reliable, high-yield bio-energy facilities.",
      link: "https://igequipment.com",
      icon: <ShieldCheck className="text-brand-neon" size={28} />
    },
    {
      name: "Inventive Enviro Concepts Pvt. Ltd.",
      role: "Technical Partner",
      subtitle: "Clean-Tech Engineering & Process Innovation",
      desc: "Serving as our core technical partner, Inventive Enviro Concepts Pvt. Ltd. delivers cutting-edge environmental engineering, process optimization, and technical guidance to ensure maximum gas purification efficiency, yield performance, and plant safety.",
      link: null, // No link provided for this one
      icon: <Cpu className="text-brand-neon" size={28} />
    }
  ];

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Header Section (No text stroke here) */}
        <div className="flex flex-col mb-12 md:mb-16 text-center items-center">
          <span className="alliance-header text-brand-neon font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Network & Integration
          </span>
          <h2 className="alliance-header text-4xl md:text-5xl font-black text-brand-white tracking-tight uppercase">
            Strategic Alliances
          </h2>
        </div>

        {/* Partners Grid */}
        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
          {partnersData.map((partner, index) => (
            <PartnerCard 
              key={index} 
              partner={partner} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicAlliances;