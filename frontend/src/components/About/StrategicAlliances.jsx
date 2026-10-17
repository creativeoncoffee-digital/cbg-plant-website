import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowUpRight, ShieldCheck, Cpu } from 'lucide-react';

const PartnerCard = ({ partner }) => {
  return (
    <div className="partner-card group relative w-full md:w-1/2 flex flex-col p-8 md:p-10 bg-white rounded-3xl border border-[#0f2517]/5 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-500">
      
      <div className="flex items-center justify-between mb-8">
        <div className="w-12 h-12 rounded-xl bg-[#f4f6ef] border border-[#0f2517]/5 flex items-center justify-center group-hover:bg-[#d4ff00] transition-colors duration-500">
          {partner.icon}
        </div>
        
        {partner.link && (
          <a 
            href={partner.link} 
            target="_blank" 
            rel="noopener noreferrer"
            className="flex items-center gap-2 text-[#0f2517]/40 hover:text-[#0f2517] transition-colors duration-300"
          >
            <span className="text-[10px] font-bold uppercase tracking-widest hidden md:block">Visit Site</span>
            <ArrowUpRight size={18} className="transform transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
        )}
      </div>

      <span className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-[10px] mb-3 block">
        {partner.role}
      </span>

      <h3 className="text-xl md:text-2xl font-black text-[#0f2517] mb-4 leading-snug">
        {partner.name}
      </h3>
      
      <div className="bg-[#f4f6ef] px-4 py-3 rounded-lg border border-[#0f2517]/5 mb-6">
        <span className="text-[#0f2517] text-xs md:text-sm font-bold leading-snug">
          {partner.subtitle}
        </span>
      </div>

      <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed mt-auto">
        {partner.desc}
      </p>

    </div>
  );
};

const StrategicAlliances = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo('.alliance-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        )
        .fromTo('.partner-card',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
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
      icon: <ShieldCheck className="text-[#0f2517]" size={20} />
    },
    {
      name: "Inventive Enviro Concepts Pvt. Ltd.",
      role: "Technical Partner",
      subtitle: "Clean-Tech Engineering & Process Innovation",
      desc: "Serving as our core technical partner, Inventive Enviro Concepts Pvt. Ltd. delivers cutting-edge environmental engineering, process optimization, and technical guidance to ensure maximum gas purification efficiency, yield performance, and plant safety.",
      link: "https://inventiveenviro.com",
      icon: <Cpu className="text-[#0f2517]" size={20} />
    }
  ];

  return (
    <section ref={ref} className="w-full bg-[#f4f6ef] py-24 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/5">
      <div ref={containerRef} className="w-full max-w-6xl mx-auto flex flex-col items-center">
        
        <div className="flex flex-col mb-12 md:mb-16 text-center items-center">
          <span className="alliance-header text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Network & Integration
          </span>
          <h2 className="alliance-header text-3xl md:text-5xl font-black text-[#0f2517] tracking-tight uppercase leading-[1.1]">
            Strategic Alliances
          </h2>
        </div>

        <div className="flex flex-col md:flex-row gap-6 md:gap-8 w-full">
          {partnersData.map((partner, index) => (
            <PartnerCard key={index} partner={partner} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default StrategicAlliances;