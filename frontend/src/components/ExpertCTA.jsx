import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { MessageCircle, ArrowRight } from 'lucide-react';

const ExpertCTA = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Text Content Animation
        gsap.fromTo('.cta-text-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
        // Image Reveal Animation
        gsap.fromTo('.cta-img-anim',
          { x: 50, opacity: 0, scale: 0.95 },
          { x: 0, opacity: 1, scale: 1, duration: 1, ease: 'power3.out', delay: 0.3 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full py-1 md:py-10  overflow-hidden bg-[#0f2517]">
      
      {/* Background Image with Deep Green Gradient Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop" 
          alt="CBG Plant Aerial" 
          className="w-full h-full object-cover opacity-40 mix-blend-overlay"
        />
        {/* Gradient that is solid green on the left, fading to transparent on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0f2517] via-[#0f2517]/95 to-[#0f2517]/40"></div>
      </div>

      <div ref={containerRef} className="relative z-10 w-full max-w-8xl mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-12 lg:gap-20">
        
        {/* LEFT SIDE: Text & CTA */}
        <div className="w-full  flex flex-col items-center text-ce pt-8 lg:pt-0">
          
         
          
          <h2 className="cta-text-anim text-4xl md:text-5xl font-bold text-white tracking-tight leading-[1] mb-6">
            Talk to Our <br />
        <span className="text-[#3c6e4b]">CBG Experts</span>
          </h2>
          
          <p className="cta-text-anim text-white/80 text-base md:text-lg font-medium leading-relaxed max-w-lg mb-10">
            Get personalized guidance on designing, installing, and optimizing your Compressed Biogas infrastructure for maximum yield, savings, and operational efficiency.
          </p>

          {/* Premium CTA Button matching the orange accent from your reference */}
          <div className="cta-text-anim">
            <button className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 bg-white text-gray-800 rounded-full overflow-hidden transition-all duration-300 shadow-[0_10px_30px_rgba(255,107,0,0.3)] hover:shadow-[0_15px_40px_rgba(255,107,0,0.4)] hover:-translate-y-1">
              <MessageCircle size={20} className="relative z-10" />
              <span className="relative z-10 font-bold text-sm tracking-wide">
              Contact Our Experts
              </span>
              <ArrowRight size={18} className="relative z-10 transform group-hover:translate-x-1 transition-transform duration-300" />
              {/* Hover highlight effect */}
              <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>

        </div>

       

      </div>
    </section>
  );
};

export default ExpertCTA;