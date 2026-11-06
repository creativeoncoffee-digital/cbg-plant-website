import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Tractor, Factory, Zap, Flame, Fuel } from 'lucide-react';

const CBGApplications = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Animate header
        gsap.fromTo('.app-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        // Animate cards with a stagger
        gsap.fromTo('.app-card',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const applications = [
    {
      title: "Agriculture & Rural Energy",
      desc: "Farmers can use CBG for irrigation pump sets, tractors (dual-fuel models), and rural micro-grids, promoting energy independence in villages.",
      icon: <Tractor size={45} strokeWidth={1} />
    },
    {
      title: "Industrial Thermal Energy",
      desc: "Industries such as food processing, ceramics, textiles, and pharmaceuticals use CBG in boilers and furnaces as a cleaner, cost-effective alternative to LPG or diesel.",
      icon: <Factory size={45} strokeWidth={1} />
    },
    {
      title: "Power Generation",
      desc: "CBG efficiently runs gas engines to generate reliable electricity, making it ideal for commercial units, industrial operations, and rural energy applications.",
      icon: <Zap size={45} strokeWidth={1} />
    },
    {
      title: "Cooking Fuel (LPG Replacement)",
      desc: "Hotels, restaurants, canteens, and large kitchens can use CBG in place of LPG, reducing cost and dependence on fossil fuels.",
      icon: <Flame size={45} strokeWidth={1} />
    },
    {
      title: "Transportation Fuel (CNG Replacement)",
      desc: "CBG can directly power CNG vehicles, cars, autos, buses, and trucks, offering a cleaner, renewable fuel choice with significantly lower emissions.",
      icon: <Fuel size={45} strokeWidth={1} />
    }
  ];

  return (
    <section ref={ref} className="w-full bg-[#fcfdfc] py-24 md:py-22 px-6 md:px-12 border-t border-[#0f2517]/2 relative overflow-hidden">
      
      {/* Subtle Background Accents */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-[#eef5e9] rounded-full blur-[100px] opacity-50 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      
      <div ref={containerRef} className="relative z-10 w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20 w-full max-w-3xl">
          <div className="app-header flex items-center gap-4 mb-4">
            <div className="h-[1px] w-8 bg-[#3c6e4b]/40"></div>
            <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              Use Cases
            </span>
            <div className="h-[1px] w-8 bg-[#3c6e4b]/40"></div>
          </div>
          <h2 className="app-header text-3xl md:text-5xl font-semi-bold text-[#0f2517] tracking-tight leading-tight mb-6">
            Compressed Biogas <span className="text-[#3c6e4b]">Applications</span>
          </h2>
          <p className="app-header text-[#0f2517]/70 text-base md:text-md font-medium leading-relaxed">
            5 Operational Compressed Biogas Applications are as follows
          </p>
        </div>

        {/* 
          Cards Grid 
          Using flex-wrap and specific widths to perfectly center the bottom two cards
          on large screens, mimicking the reference design exactly. 
        */}
        <div className="flex flex-wrap justify-center gap-6 md:gap-8 w-full">
          {applications.map((app, index) => (
            <div 
              key={index} 
              className="app-card group flex flex-col items-center bg-white p-8 md:p-10 rounded-[2rem] border border-[#0f2517]/5 shadow-[0_8px_30px_rgba(15,37,23,0.03)] hover:shadow-xl hover:-translate-y-2 transition-all duration-500 w-full md:w-[calc(50%-1.5rem)] lg:w-[calc(33.333%-1.5rem)]"
            >
              {/* Icon Container */}
              <div className="w-18 h-18 rounded-2xl bg-[#f4f7f4] border border-[#0f2517]/5 flex items-center justify-center text-[#9bcc4c] mb-8 group-hover:bg-[#3c6e4b] group-hover:text-white transition-colors duration-500 shadow-sm group-hover:shadow-md group-hover:scale-110">
                {app.icon}
              </div>
              
              {/* Title */}
              <h3 className="text-xl md:text-2xl font-semi-bold text-[#0f2517] text-center mb-4 leading-snug">
                {app.title}
              </h3>
              
              {/* Description */}
              <p className="text-[#0f2517]/70 text-sm md:text-base font-sm text-center leading-relaxed">
                {app.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default CBGApplications;