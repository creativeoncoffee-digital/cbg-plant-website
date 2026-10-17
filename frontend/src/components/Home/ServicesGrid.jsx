import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, Factory, Settings, Recycle, Lightbulb, PenTool, Sprout } from 'lucide-react';
import { Link } from 'react-router-dom';

const ServicesGrid = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.service-text',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
        gsap.fromTo('.service-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out', delay: 0.2 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const services = [
    {
      title: "Biogas Plant Design & Installation",
      desc: "Custom-designed biogas plants for industrial, commercial and agricultural needs.",
      icon: <Factory size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
    },
    {
      title: "Operations & Maintenance",
      desc: "Reliable operation, monitoring and maintenance for maximum efficiency.",
      icon: <Settings size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
    },
    {
      title: "Waste Management Solutions",
      desc: "Turning organic waste into valuable renewable energy and fertilizer.",
      icon: <Recycle size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
    },
    {
      title: "Consultancy & Support",
      desc: "Expert guidance, feasibility studies and project support from start to finish.",
      icon: <Lightbulb size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
    },
    {
      title: "Upgradation & Retrofit Solutions",
      desc: "Improve performance and extend the life of your existing systems.",
      icon: <PenTool size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
    },
    {
      title: "Sustainable Products",
      desc: "Clean energy, organic fertilizer and by-products for a circular economy.",
      icon: <Sprout size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
    }
  ];

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 overflow-hidden">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-20">
        
        {/* Left Side: Sticky Intro */}
        <div className="w-full lg:w-[35%] flex flex-col items-start lg:sticky lg:top-32 h-fit">
          <div className="service-text flex items-center gap-3 mb-5">
            {/* <div className="h-[2px] w-6 bg-[#3c6e4b]"></div> */}
            <span className="text-[#3c6e4b] font-bold tracking-[0.1em] uppercase text-[10px] md:text-xs">
              Why Choose Ryverda
            </span>
          </div>
          
          <h2 className="service-text text-4xl md:text-5xl font-semibold text-[#0f2517] leading-[1.1] tracking-tight mb-6">
            Comprehensive Solutions <br className="hidden md:block"/>for a
            <span className="text-[#3c6e4b]"> Sustainable Future</span>
          </h2>
          
          <p className="service-text text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed mb-8">
            We provide end-to-end solutions for sustainable energy through advanced biogas technology, backed by experience, innovation, and a commitment to a cleaner planet.
          </p>
          
          <div className="service-text">
            <Link 
              to="/services" 
              className="group inline-flex items-center gap-3 bg-[#3c6e4b] text-white px-7 py-3 rounded-full font-bold text-sm hover:bg-[#3c6e4b] transition-all duration-300 shadow-md"
            >
              More About  Services
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* Right Side: Grid */}
        <div className="w-full lg:w-[65%] grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-12">
          {services.map((item, index) => (
            <div key={index} className="service-card flex flex-col group">
              <div className="w-12 h-12 rounded-2xl bg-[#f4f6ef] flex items-center justify-center mb-5 border border-[#0f2517]/5 group-hover:bg-[#d4ff00] group-hover:border-[#d4ff00] transition-colors duration-300">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#0f2517] mb-2 leading-snug">
                {item.title}
              </h3>
              <p className="text-[#0f2517]/60 text-xs md:text-sm font-medium leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ServicesGrid;