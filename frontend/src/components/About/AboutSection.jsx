import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Play, Leaf, Settings, Users } from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        
        // Image reveal
        tl.fromTo('.about-image',
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        )
        // Text and stats reveal
        .fromTo('.about-text',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.6'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/5">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: Image with Video Button */}
        <div className="about-image relative w-full lg:w-1/2 h-[400px] md:h-[500px] rounded-[2rem] overflow-hidden shadow-lg group border border-[#0f2517]/5">
          <img 
            src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop" 
            alt="Biogas Plant Infrastructure" 
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          
          {/* Subtle Dark Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2517]/60 via-transparent to-transparent z-0"></div>

          {/* Premium Glassmorphic Play Button */}
          <button className="absolute bottom-6 left-6 z-10 flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 px-4 py-3 rounded-2xl hover:bg-white/20 transition-all duration-300 shadow-xl group/btn">
            <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-md group-hover/btn:scale-110 transition-transform duration-300">
              <Play className="text-[#0f2517] ml-1" size={20} fill="#0f2517" />
            </div>
            <div className="flex flex-col text-left pr-2">
              <span className="text-white font-bold text-sm tracking-wide">Watch Our Story</span>
              <span className="text-white/70 font-medium text-xs">2:14</span>
            </div>
          </button>
        </div>

        {/* RIGHT SIDE: Content & Stats */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          <div className="about-text flex items-center gap-3 mb-6">
            <div className="h-px w-8 bg-[#3c6e4b]"></div>
            <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs">
              About Us
            </span>
          </div>
          
          <h2 className="about-text text-4xl md:text-5xl font-black text-[#0f2517] leading-[1.1] mb-6 tracking-tight">
            Building a Cleaner <br className="hidden md:block" />
            and <span className="text-[#3c6e4b]">Greener Tomorrow</span>
          </h2>
          
          <p className="about-text text-[#0f2517]/70 text-base md:text-lg font-medium leading-relaxed mb-10">
            At Ryverda Energies, we design and deliver highly efficient, sustainable infrastructure that transforms organic waste into pipeline-grade clean energy. By bridging advanced engineering with environmental stewardship, we empower industries and agrarian economies to achieve a zero-carbon footprint while ensuring long-term energy security.
          </p>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 w-full">
            
            <div className="about-text flex flex-col p-6 rounded-2xl bg-[#f4f6ef] border border-[#0f2517]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <Leaf className="text-[#3c6e4b] mb-4" size={28} />
              <span className="text-3xl font-black text-[#0f2517] mb-1">12+</span>
              <span className="text-[#0f2517]/70 text-xs font-bold uppercase tracking-wide">Years of Experience</span>
            </div>
            
            <div className="about-text flex flex-col p-6 rounded-2xl bg-[#f4f6ef] border border-[#0f2517]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 delay-75">
              <Settings className="text-[#3c6e4b] mb-4" size={28} />
              <span className="text-3xl font-black text-[#0f2517] mb-1">50+</span>
              <span className="text-[#0f2517]/70 text-xs font-bold uppercase tracking-wide">Projects Completed</span>
            </div>
            
            <div className="about-text flex flex-col p-6 rounded-2xl bg-[#f4f6ef] border border-[#0f2517]/5 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 delay-150">
              <Users className="text-[#3c6e4b] mb-4" size={28} />
              <span className="text-3xl font-black text-[#0f2517] mb-1">100+</span>
              <span className="text-[#0f2517]/70 text-xs font-bold uppercase tracking-wide">Happy Clients</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;