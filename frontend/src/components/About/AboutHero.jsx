import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Leaf } from 'lucide-react';
// Ensure this path points to a valid image in your project
import AboutPic from '../../assets/Home/hero-biogas-bg.webp'; 

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();
      
      tl.fromTo('.about-hero-anim',
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      )
      .fromTo('.about-hero-img',
        { opacity: 0, scale: 0.95 },
        { opacity: 1, scale: 1, duration: 1, ease: 'power3.out' },
        '-=0.6'
      );
    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full bg-white pt-24 md:pt-32 pb-16 md:pb-10 px-6 md:px-12 overflow-hidden border-b border-[#0f2517]/5">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12 ">
        
        {/* LEFT SIDE: Text Content */}
        <div className="w-full lg:w-[55%]  flex flex-col pt-3 md:pt-5">
           <p className="about-hero-anim top-10 text-[#0f2517]/70 text-base md:text-md font-semibold leading-relaxed max-w-lg mb-8">
          Home/About Us
           </p>
        
          
          <h1 className="about-hero-anim text-3xl md:text-5xl font-semibold text-gray-800 leading-[1.1] tracking-tighter mb-6">
            Building a Cleaner <br className="hidden md:block" />
            and <span className="text-[#2c8450]">Greener Tomorrow</span>
          </h1>
          
          <p className="about-hero-anim text-[#0f2517]/70 text-base md:text-md font-semibold leading-relaxed max-w-lg mb-8">
            At Ryverda Engineering, we design and deliver sustainable energy solutions that turn organic waste into clean energy, for a healthier planet and a brighter future. With a focus on innovation, efficiency and sustainability, we help industries and communities transition to renewable energy.
          </p>
          
          <div className="about-hero-anim">
            <Link 
              to="/services" 
              className="group inline-flex items-center gap-3 border border-[#9bcc4c] text-[#3c6e4b] px-7 py-3 rounded-full font-bold text-sm hover:bg-[#3c6e4b] hover:text-white transition-all duration-300 w-fit"
            >
              Learn More About Us
              <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>

        </div>

        {/* RIGHT SIDE: Image with Badge */}
        <div className="w-full lg:w-[55%] relative">
          
          <div className="about-hero-img relative w-full aspect-[4/3] rounded-[2.5rem] rounded-tr-[6rem] rounded-bl-[6rem] overflow-hidden shadow-lg border border-[#0f2517]/5 z-10">
            <img 
              src={AboutPic} 
              alt="Ryverda Biogas Infrastructure" 
              className="w-full h-full object-cover"
            />
          </div>

          <div className="absolute top-[-20px] right-[-20px] lg:top-[-40px] lg:right-[-40px] z-0 opacity-80">
             <svg width="120" height="120" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50 0C50 0 100 0 100 50C100 100 50 100 50 100C0 100 0 50 0 50C0 0 50 0 50 0Z" fill="#eef5e9"/>
             </svg>
          </div>

          <div className="about-hero-anim absolute -bottom-6 right-2 md:-bottom-8 md:-right-6 z-20 w-32 h-32 md:w-36 md:h-36 bg-[#eef5e9] rounded-full flex flex-col items-center justify-center p-4 shadow-md border-[6px] border-white transform hover:scale-105 transition-transform duration-300">
             <span className="text-[#0f2517] text-[10px] md:text-xs font-bold text-center leading-tight mb-2">
               Clean Energy <br/> Real Impact
             </span>
             <Leaf size={24} className="text-[#3c6e4b]" strokeWidth={1.5} />
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutHero;