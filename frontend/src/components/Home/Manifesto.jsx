import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const ManifestoItem = ({ num, title, text, imgSrc }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const itemRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.reveal-text', 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        gsap.fromTo('.reveal-img', 
          { scale: 1.05, opacity: 0 }, 
          { scale: 1, opacity: 1, duration: 1.2, ease: 'power3.out' }, 
          '-=0.4'
        );
      }, itemRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full">
      {/* 
        Added pb-24 to give the container extra height, 
        making the sticky scroll effect more pronounced.
      */}
      <div ref={itemRef} className="flex flex-col md:flex-row gap-10 md:gap-16 items-start w-full border-t border-[#0f2517]/20 pt-16 pb-24 relative">
        
        {/* LEFT COLUMN: Sticky on Desktop */}
        <div className="w-full md:w-1/3 flex flex-col md:sticky md:top-32 z-10 pr-0 md:pr-8">
          <span className="reveal-text text-7xl md:text-8xl font-black text-transparent [-webkit-text-stroke:2px_#0f2517] mb-6 leading-none tracking-tighter">
            {num}
          </span>
          <h3 className="reveal-text text-3xl md:text-4xl font-bold text-[#0f2517] leading-snug tracking-tight">
            {title}
          </h3>
        </div>

        {/* RIGHT COLUMN: Scrolls normally */}
        <div className="w-full md:w-2/3 flex flex-col">
          <p className="reveal-text text-[#0f2517]/80 text-base md:text-lg leading-relaxed mb-12 font-medium">
            {text}
          </p>
          <div className="reveal-img w-full overflow-hidden rounded-xl bg-[#0f2517] shadow-xl">
            <img 
              src={imgSrc} 
              alt={title} 
              className="w-full h-full object-cover hover:scale-105 transition-all duration-700 ease-out opacity-90 hover:opacity-100"
            />
          </div>
        </div>
        
      </div>
    </div>
  );
};

const Manifesto = () => {
  const headerRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.header-reveal', 
        { y: 30, opacity: 0 }, 
        { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: 'power3.out' }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  const manifestoData = [
    { 
      num: "01", 
      title: "Waste is a resource we refuse to waste", 
      text: "India generates over 62 million tonnes of organic waste every year. Most of it rots in landfills, releasing methane — a greenhouse gas 80 times more potent than CO₂. We build the machines that interrupt that cycle, turning agricultural residue, cattle dung and municipal waste into clean, vehicle-grade fuel.", 
      imgSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      num: "02", 
      title: "Engineered in India, for Indian feedstock", 
      text: "Imported biogas technology fails on paddy straw and pressmud. Our digesters, pre-treatment lines and upgrading skids are designed around the feedstock that actually exists here — high lignin, high silica, seasonal, and inconsistent. That is why our plants hit nameplate capacity where others stall.", 
      imgSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop" 
    },
    { 
      num: "03", 
      title: "One contract. One accountable partner.", 
      text: "A CBG plant touches civil, mechanical, biological and gas-engineering disciplines. We take single-point EPC responsibility — from feasibility and DPR to commissioning and O&M — so you never manage five vendors pointing fingers at each other while your plant sits idle.", 
      imgSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
    }
  ];

  return (
    <section className="w-full bg-[#f4f6ef] py-24 md:py-32 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col mb-16 md:mb-24">
          <span className="header-reveal text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-6">
            The Manifesto
          </span>
          <h2 className="header-reveal text-5xl md:text-7xl font-black text-[#0f2517] tracking-tight">
            Why we build <br className="hidden md:block"/>
            <span className="text-[#3c6e4b]">biogas</span> machines.
          </h2>
        </div>

        {/* Render Manifesto Points */}
        <div className="flex flex-col w-full">
          {manifestoData.map((item, index) => (
            <ManifestoItem 
              key={index} 
              num={item.num} 
              title={item.title} 
              text={item.text} 
              imgSrc={item.imgSrc} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Manifesto;