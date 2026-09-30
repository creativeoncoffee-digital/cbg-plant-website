import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const StatItem = ({ stat, index, total }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const itemRef = useRef(null);
  const [displayValue, setDisplayValue] = useState("0");

  const targetNumber = parseFloat(stat.value.match(/[\d.]+/)[0]);
  const suffix = stat.value.replace(/[\d.]+/, '');
  const isFloat = stat.value.includes('.');

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo(itemRef.current,
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: index * 0.15 }
        );

        const counter = { val: 0 };
        gsap.to(counter, {
          val: targetNumber,
          duration: 2,
          ease: 'power3.out',
          delay: index * 0.15,
          onUpdate: () => {
            const currentNum = isFloat ? counter.val.toFixed(1) : Math.round(counter.val);
            setDisplayValue(currentNum + suffix);
          }
        });
      }, itemRef);
      return () => ctx.revert();
    }
  }, [inView, targetNumber, suffix, isFloat, index]);

  return (
    <div ref={ref} className={`w-full md:w-1/4 flex ${index !== total - 1 ? 'border-b md:border-b-0 md:border-r border-[#f4f6ef]/10' : ''}`}>
      <div ref={itemRef} className="group relative overflow-hidden flex flex-col justify-center p-10 md:p-16 w-full h-full opacity-0">
        <div className="absolute inset-0 h-full w-0 bg-[#163321] group-hover:w-full transition-all duration-500 ease-out z-0"></div>
        <div className="relative z-10 flex flex-col">
          <span className="text-5xl md:text-6xl font-black text-[#d4ff00] mb-4 tracking-tighter drop-shadow-sm">
            {displayValue}
          </span>
          <span className="text-[#f4f6ef]/80 text-sm md:text-base font-medium leading-relaxed max-w-[200px] whitespace-pre-line">
            {stat.label}
          </span>
        </div>
      </div>
    </div>
  );
};

const StatsBanner = () => {
  const stats = [
    { value: "50+", label: "Plants engineered &\ncommissioned" },
    { value: "2.4M", label: "m³ of bio-CNG produced yearly" },
    { value: "120K", label: "Tonnes of CO₂ offset per annum" },
    { value: "96%", label: "Average fleet uptime across sites" }
  ];

  return (
    <section className="w-full bg-[#0f2517] flex items-center pt-10 pb-20">
      <div className="w-full flex flex-col md:flex-row border-y border-[#f4f6ef]/10">
        {stats.map((stat, index) => (
          <StatItem key={index} stat={stat} index={index} total={stats.length} />
        ))}
      </div>
    </section>
  );
};

export default StatsBanner;