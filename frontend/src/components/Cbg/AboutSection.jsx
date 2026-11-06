import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, CheckCircle2} from 'lucide-react';

const AboutSection = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        // Image animation
        gsap.fromTo('.about-image',
          { x: -50, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        // Floating badge animation
        gsap.fromTo('.about-badge',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, delay: 0.4, ease: 'back.out(1.5)' }
        );
        // Text content stagger
        gsap.fromTo('.about-text-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const features = [
    "Transforming agricultural waste into renewable fuel",
    "Producing premium nutrient-rich organic fertilizer",
  ];

  return (
    <section ref={ref} className="w-full bg-[#fcfdfc] py-14 md:py-22 px-6 md:px-12 overflow-hidden relative">
      
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-8 lg:gap-12 items-center">
        
        {/* LEFT SIDE: Image Component */}
        <div className="w-full lg:w-1/2 relative flex justify-center lg:justify-start">
          
          {/* Main Image Mask */}
          <div className="about-image relative w-full max-w-[550px] aspect-square rounded-[1.2rem] overflow-hidden shadow-[0_20px_60px_rgba(15,37,23,0.08)] bg-[#eef5e9]">
            <img 
              src="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=2042&auto=format&fit=crop" 
              alt="Ryverda Engineering Facility" 
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-1000"
            />
            {/* Dark green overlay gradient for premium feel */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#0f2517]/60 via-transparent to-transparent"></div>
          </div>

          {/* Decorative SVG Dots */}
          <div className="absolute -top-8 -left-8 -z-10 opacity-30 hidden md:block">
             <svg width="100" height="100" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <pattern id="dots" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                  <circle cx="2" cy="2" r="2" fill="#3c6e4b" />
                </pattern>
                <rect width="100" height="100" fill="url(#dots)" />
             </svg>
          </div>
        </div>

        {/* RIGHT SIDE: Content Component */}
        <div className="w-full lg:w-1/2 flex flex-col items-start text-left lg:pl-10">
          
          <div className="about-text-anim flex items-center gap-4 mb-6">
            <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              About Us
            </span>
            <div className="h-[1px] w-12 bg-[#3c6e4b]/40"></div>
          </div>
          
          <h2 className="about-text-anim text-3xl md:text-4xl font-semibold text-[#0f2517] tracking-tight leading-[1.1] mb-6">
            About Compress <span className="text-[#3c6e4b]">Biogas</span>
          </h2>
          
          <p className="about-text-anim text-[#0f2517]/75 text-base md:text-md font-sm leading-relaxed mb-4">
            At Ryverda Engineering, we are committed to transforming agricultural residue into a powerful, sustainable resource. Our state-of-the-art Compressed Biogas (CBG) facilities bridge the gap between environmental stewardship and industrial energy demands.
          </p>

          <p className="about-text-anim text-[#0f2517]/75 text-base md:text-md font-sm leading-relaxed mb-6">
            By leveraging advanced anaerobic digestion and gas purification technologies, we generate clean, high-yield renewable fuel while simultaneously revitalizing the soil with premium organic fertilizers.
          </p>

          {/* Feature Bullets */}
          <div className="w-full flex flex-col gap-3 mb-10">
            {features.map((feature, index) => (
              <div key={index} className="about-text-anim flex items-start gap-3">
                <CheckCircle2 className="text-[#3c6e4b] shrink-0 mt-0.5" size={20} />
                <span className="text-[#0f2517]/75 font-semibold text-sm md:text-sm">
                  {feature}
                </span>
              </div>
            ))}
          </div>

           {/* Animated Flowing Water/Rays Button */}
            <a 
              href="/solutions" 
              className="about-text-anim group relative overflow-hidden flex items-center gap-3 text-white px-8 py-4 rounded-full font-bold text-sm shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
            >
              {/* Animated Background Layer */}
              <div 
                className="absolute inset-0 z-0"
                style={{
                  background: 'linear-gradient(90deg, #0f2517 0%, #3c6e4b 25%, #2c8450 65%, #0f2517 100%)',
                  backgroundSize: '200% auto',
                  animation: 'flowRays 3s linear infinite'
                }}
              ></div>
              
              <span className="relative z-10 tracking-wide">Explore Our Solutions</span>
              <ArrowRight size={16} className="relative z-10 transform group-hover:translate-x-1 transition-transform" />
            </a>


        </div>

      </div>

      <style dangerouslySetInnerHTML={{__html: `
        @keyframes flowRays {
          0% { background-position: 200% center; }
          100% { background-position: 0% center; }
        }
      `}} />
    </section>
  );
};

export default AboutSection;