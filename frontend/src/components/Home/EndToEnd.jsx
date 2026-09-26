import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, Settings2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const EndToEnd = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Image Reveal
        tl.fromTo('.ete-image',
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        // Floating Badge Reveal
        .fromTo('.ete-badge',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' },
          '-=0.5'
        )
        // Text Content Reveal
        .fromTo('.ete-text',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.8'
        )
        // Steps Reveal
        .fromTo('.ete-step',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const steps = [
    { num: "01", label: "Audit" },
    { num: "02", label: "Engineer" },
    { num: "03", label: "Commission" },
    { num: "04", label: "Support" }
  ];

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16 md:gap-20">
        
        {/* Left Side: Image with Floating Badge */}
        <div className="w-full md:w-1/2 relative">
          <div className="ete-image relative aspect-[4/3] md:aspect-square overflow-hidden border border-white/10 bg-brand-surface group">
            <img 
              src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop" 
              alt="CBG Plant Engineering" 
              className="w-full h-full object-cover grayscale-[60%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
            />
            {/* Dark overlay for aesthetic */}
            <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
          </div>

          {/* Floating Industrial Badge */}
          <div className="ete-badge absolute -bottom-6 md:bottom-10 right-6 md:-right-10 bg-[#121212] border border-white/10 p-5 flex items-center gap-4 shadow-2xl z-10">
            <div className="w-10 h-10 bg-brand-neon/10 flex items-center justify-center rounded-sm">
              <Settings2 className="text-brand-neon animate-[spin_6s_linear_infinite]" size={20} />
            </div>
            <div className="flex flex-col">
              <span className="text-brand-white font-bold text-sm tracking-wide">Operating Assets</span>
              <span className="text-brand-gray text-xs font-medium">Engineering ideas into reality</span>
            </div>
          </div>
        </div>

        {/* Right Side: Content & Steps */}
        <div className="w-full md:w-1/2 flex flex-col justify-center mt-10 md:mt-0">
          
          <span className="ete-text text-brand-neon font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Built End to End
          </span>
          
          <h2 className="ete-text text-4xl md:text-5xl font-black text-brand-white leading-[1.1] mb-6 tracking-tight">
            One team from organic waste to working <span className="text-brand-neon">Bio-CBG infrastructure.</span>
          </h2>
          
          <p className="ete-text text-brand-gray text-base md:text-lg mb-12 leading-relaxed font-medium">
            EcoCBG brings turnkey Bio-CBG plant engineering, manufacturing, project delivery and operating support together. The result is a practical system designed around your feedstock, site and performance goals—not a one-size-fits-all installation.
          </p>

          {/* Process Steps List */}
          <div className="w-full border-t border-white/10 pt-8 mb-10">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {steps.map((step, index) => (
                <div key={index} className="ete-step group flex flex-col cursor-default">
                  <span className="text-brand-gray group-hover:text-brand-neon text-xs font-black tracking-widest transition-colors duration-300 mb-2">
                    {step.num}
                  </span>
                  <span className="text-brand-white text-sm font-bold uppercase tracking-wide group-hover:-translate-y-1 transition-transform duration-300">
                    {step.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* CTA Link */}
          <div className="ete-text">
            <Link 
              to="/contact" 
              className="group inline-flex items-center gap-4 text-brand-white hover:text-brand-neon transition-colors duration-300"
            >
              <span className="font-bold tracking-[0.1em] uppercase text-sm">Meet EcoCBG</span>
              <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center group-hover:border-brand-neon group-hover:bg-brand-neon/10 transition-all duration-300">
                <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EndToEnd;