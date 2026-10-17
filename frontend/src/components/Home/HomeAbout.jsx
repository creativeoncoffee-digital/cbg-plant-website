import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import AboutImage from '../../assets/Home/HomeAbout.png';

const AboutUs = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.about-image-side',
          { x: -40, opacity: 0 },
          { x: 0, opacity: 1, duration: 1, ease: 'power3.out' }
        );
        gsap.fromTo('.about-text-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-20 md:py-32 px-6 md:px-12 overflow-hidden">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24 items-center">
        
        {/* LEFT SIDE: Image with Organic Shape & Badge */}
        <div className="about-image-side relative w-full lg:w-1/2 flex justify-center lg:justify-start mt-8 lg:mt-0">
          
          {/* Decorative Leaf Background Shape */}
          <div className="absolute top-0 -right-8 md:top-8 md:-right-12 w-32 h-32 md:w-48 md:h-48 bg-[#eef5e9] rounded-t-full rounded-bl-full rotate-45 z-0 opacity-80"></div>

          {/* Main Image Container with Organic Border Radius */}
          <div className="relative z-10 w-full aspect-[4/3] max-w-lg   overflow-hidden ">
            <img 
              src={AboutImage} 
              alt="Ryverda Biogas Infrastructure" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Floating Circular Badge */}
          {/* <div className="absolute -bottom-6 right-2 md:-bottom-8 md:-right-6 z-20 w-32 h-32 md:w-40 md:h-40 bg-[#f4f6ef] rounded-full flex flex-col items-center justify-center p-4 shadow-xl border-4 md:border-[6px] border-white transform hover:scale-105 transition-transform duration-300">
             <span className="text-[#0f2517] text-[10px] md:text-xs font-bold text-center leading-tight mb-2">
               Clean Energy <br/> Real Impact
             </span>
             <Leaf size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
          </div> */}

        </div>

        {/* RIGHT SIDE: Clean Text Content */}
        <div className="w-full lg:w-1/2 flex flex-col justify-center">
          
          {/* Kicker */}
          <div className="about-text-anim flex items-center gap-3 mb-5">
            {/* <div className="h-[2px] w-6 bg-[#3c6e4b]"></div> */}
            <span className="text-[#3c6e4b] font-semibold tracking-[0.15em] uppercase text-[10px] md:text-xs">
              About Us
            </span>
          </div>
          
          {/* Headline */}
          <h2 className="about-text-anim text-3xl md:text-5xl  font-semibold text-[#0f2517] leading-[1.2] mb-6 tracking-tight">
            Building a Cleaner <br className="hidden md:block" />
            and <span className="text-[#3c6e4b]">Greener Tomorrow</span>
          </h2>
          
          {/* Paragraph */}
          <p className="about-text-anim text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed mb-8 max-w-lg">
            At Ryverda Engineering, we design and deliver sustainable energy solutions that turn organic waste into clean energy, for a healthier planet and a brighter future. With a focus on innovation, efficiency and sustainability, we help industries and communities transition to renewable energy.
          </p>

          {/* Outlined Button */}
          <div className="about-text-anim">
            <Link 
              to="/about" 
              className="group inline-flex items-center gap-3 border-[1.5px] border-[#3c6e4b] text-[#3c6e4b] px-7 py-3 rounded-full font-bold text-sm hover:bg-[#3c6e4b] hover:text-white transition-all duration-300 w-fit"
            >
              Learn More About Us
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutUs;