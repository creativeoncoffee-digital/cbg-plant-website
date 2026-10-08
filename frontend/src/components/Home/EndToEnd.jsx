import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Settings2, ArrowRight, Leaf, Settings, ShieldCheck, Globe, Clock, CheckCircle, Users, Recycle } from 'lucide-react';

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
        tl.fromTo('.ete-image-wrapper',
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power4.out' }
        )
        // Floating Badge
        .fromTo('.ete-badge',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: 'back.out(1.5)' },
          '-=0.6'
        )
        // Text & Features Stagger
        .fromTo('.ete-text',
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' },
          '-=0.8'
        )
        // Feature Icons
        .fromTo('.ete-feature',
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' },
          '-=0.4'
        )
        // Stats Banner
        .fromTo('.ete-stats-banner',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 1, ease: 'power3.out' },
          '-=0.2'
        )
        .fromTo('.ete-stat-item',
          { scale: 0.9, opacity: 0 },
          { scale: 1, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'back.out(1.5)' },
          '-=0.6'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const features = [
    { icon: <Leaf size={20} />, label: "Sustainable\nSolutions" },
    { icon: <Settings size={20} />, label: "End-to-End\nSupport" },
    { icon: <ShieldCheck size={20} />, label: "Proven\nEngineering" },
    { icon: <Globe size={20} />, label: "Long-Term\nImpact" }
  ];

  const stats = [
    { icon: <Clock size={18} />, value: "12+", label: "YEARS OF EXPERIENCE" },
    { icon: <CheckCircle size={18} />, value: "50+", label: "PROJECTS COMPLETED" },
    { icon: <Users size={18} />, value: "100+", label: "HAPPY CLIENTS" },
    { icon: <Recycle size={18} />, value: "2.4M+", label: "TONNES OF ORGANIC WASTE\nPROCESSED" }
  ];

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-20 px-6 md:px-12 overflow-hidden relative">
      
      {/* Decorative Leaves (Optional/Subtle background element) */}
      <div className="absolute left-0 top-[20%] w-32 h-64 bg-gradient-to-r from-[#eef2ea] to-transparent rounded-r-full blur-3xl opacity-60 pointer-events-none"></div>

      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* TOP SECTION: Image and Content */}
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-20 mb-24">
          
          {/* Left Side: Image with Badge */}
          <div className="w-full lg:w-1/2 relative ete-image-wrapper">
            {/* Offset Green Shape Background */}
            <div className="absolute -inset-4 bg-[#eef2ea] rounded-[2.5rem] transform -translate-x-4 translate-y-4 -z-10"></div>
            
            {/* Main Image */}
            <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[2rem] shadow-sm">
              <img 
                src="https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=1000&auto=format&fit=crop" 
                alt="CBG Plant Engineering" 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Floating Dark Green Badge */}
            <div className="ete-badge absolute -bottom-6 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:right-[-2rem] bg-[#1a2f24] p-4 rounded-2xl shadow-2xl flex items-center gap-4 z-20 w-[90%] md:w-auto">
              {/* Icon */}
              <div className="w-12 h-12 bg-[#d4ff00] flex items-center justify-center rounded-[0.8rem] shrink-0">
                <Settings2 className="text-[#1a2f24]" size={22} />
              </div>
              {/* Text */}
              <div className="flex flex-col pr-2 md:pr-6 whitespace-nowrap">
                <span className="text-white font-bold text-sm md:text-base tracking-wide">Get In Touch</span>
                <span className="text-white/60 text-xs md:text-sm font-medium mt-0.5">Engineering ideas into reality</span>
              </div>
              {/* Right Arrow */}
              <div className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center shrink-0 ml-auto">
                <ArrowRight className="text-white" size={14} />
              </div>
            </div>
          </div>

          {/* Right Side: Content */}
          <div className="w-full lg:w-1/2 flex flex-col justify-center mt-12 lg:mt-0">
            
            {/* Tagline with Lines */}
            <div className="ete-text flex items-center gap-4 mb-6">
              <div className="h-[1px] w-12 bg-[#3c6e4b]/20"></div>
              <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
                BUILT END TO END
              </span>
              <div className="h-[1px] w-12 bg-[#3c6e4b]/20"></div>
            </div>
            
           <h2 className="ete-text text-4xl md:text-5xl font-semibold text-[#0f2517] mb-6 tracking-tight leading-[1]">
  Turning organic waste into <span className="text-[#3c6e4b]">working Bio-CBG</span>
</h2>

            
            {/* Paragraph */}
            <p className="ete-text text-gray-600 text-base md:text-[1.05rem] mb-6 leading-relaxed font-medium max-w-[90%]">
              EcoCBG brings turnkey Bio-CBG plant engineering, manufacturing, project delivery, and operating support together. The result is a practical system designed around your feedstock, site, and performance goals—not a one-size-fits-all installation.
            </p>

            {/* Features Row */}
            <div className="flex flex-wrap md:flex-nowrap gap-3 md:gap-4 border-t border-[#0f2517]/10 pt-6">
              {features.map((feature, index) => (
                <div key={index} className="ete-feature flex flex-col w-[45%] md:w-1/4">
                  <div className="w-12 h-12 bg-[#eef2ea] rounded-xl flex items-center justify-center mb-4 border border-[#3c6e4b]/10">
                    <div className="text-[#3c6e4b]">
                      {feature.icon}
                    </div>
                  </div>
                  <span className="text-[#0f2517] text-xs md:text-sm font-bold leading-tight tracking-wide whitespace-pre-line">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

          </div>
        </div>

        {/* BOTTOM SECTION: Stats Banner */}
        <div className="ete-stats-banner w-full bg-[#f8f9f6] rounded-[2rem] border border-[#0f2517]/5 p-6 md:p-8 flex flex-col lg:flex-row items-start lg:items-center justify-between gap-12 lg:gap-8">
          
          {/* Stats Title */}
          <div className="w-full lg:w-1/3 flex flex-col">
            <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-3">
              OUR EXPERTISE
            </span>
            <h3 className="text-2xl md:text-[2rem] font-semibold text-[#0f2517] leading-[1.1] tracking-tight">
              Experience that builds a cleaner future.
            </h3>
          </div>

          {/* Stats Grid */}
          <div className="w-full lg:w-2/3 grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="ete-stat-item flex flex-col">
                <div className="w-8 h-8 rounded-full bg-white flex items-center justify-center mb-3 shadow-sm text-[#3c6e4b]">
                  {stat.icon}
                </div>
                <span className="text-3xl md:text-4xl font-bold text-[#0f2517] mb-2">
                  {stat.value}
                </span>
                <span className="text-[#0f2517]/60 text-[9px] md:text-[10px] font-bold tracking-widest uppercase whitespace-pre-line leading-relaxed">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};

export default EndToEnd;