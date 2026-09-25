import { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';

// IMPORT YOUR IMAGE HERE! (Update the path to match your actual image file)
import AboutPic from '../../assets/Home/HomePic.png'; 

const AboutHero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline();

      // 1. Slow drift for the massive overlapping background text
      gsap.to('.bg-overlap-text', {
        xPercent: -5,
        duration: 10,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut'
      });

      // 2. Fade in breadcrumbs and kicker
      tl.fromTo('.about-fade', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      )
      // 3. Masked reveal for the main headline
      .fromTo('.about-line', 
        { y: '110%', rotate: 2, opacity: 0 }, 
        { y: '0%', rotate: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: 'power4.out' }, 
        '-=0.4'
      )
      // 4. Fade in subtext
      .fromTo('.about-subtext', 
        { opacity: 0, y: 20 }, 
        { opacity: 1, y: 0, duration: 1, ease: 'power3.out' }, 
        '-=0.8'
      );

    }, heroRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={heroRef} className="relative w-full min-h-[75vh] flex flex-col items-center justify-center bg-brand-black overflow-hidden pt-32 pb-20 px-6 md:px-12">
      
      {/* NEW: Background Banner Image with Dark Overlays (z-0) */}
      <div className="absolute inset-0 z-0 bg-brand-black">
        <img src={AboutPic} alt="About EcoCBG" className="w-full h-full object-cover opacity-60 grayscale-[30%]" />
        <div className="absolute inset-0 bg-brand-black/80 mix-blend-multiply"></div>
        {/* Gradient to fade smoothly into the black section below */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-brand-black/50 to-brand-black"></div>
      </div>

      {/* 1. Massive Overlapping Background Text (Bumped to z-[1] so it sits OVER the image) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full flex justify-center pointer-events-none z-[1]">
        <h1 className="bg-overlap-text text-[clamp(8rem,20vw,18rem)] font-black text-transparent [-webkit-text-stroke:1px_rgba(255,255,255,0.08)] whitespace-nowrap select-none">
          OUR STORY
        </h1>
      </div>

      {/* 2. Foreground Content Container (Stays at z-10) */}
      <div className="relative z-10 w-full max-w-5xl mx-auto flex flex-col items-center text-center">
        
        {/* Breadcrumbs */}
        <div className="about-fade flex items-center gap-3 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase mb-8">
          <Link to="/" className="text-brand-gray hover:text-brand-neon transition-colors">Home</Link>
          <span className="text-brand-gray/50">/</span>
          <span className="text-brand-neon">About Us</span>
        </div>

        {/* Main Headline with Mask Reveal */}
        <h2 className="text-3xl md:text-6xl font-black text-brand-white leading-[1.05] tracking-tight uppercase mb-8 flex flex-col items-center">
          <div className="overflow-hidden py-1 w-full">
            <div className="about-line">
             Turning Agricultural Residue 
            </div>
          </div>
          <div className="overflow-hidden py-1 w-full">
            <div className="about-line">
               into Clean,<span className="text-transparent [-webkit-text-stroke:2px_#d4ff00]">Renewable Power</span>
            </div>
          </div>
        </h2>

        {/* Subtext */}
        <p className="about-subtext text-brand-gray text-base md:text-xl font-medium max-w-2xl leading-relaxed">
          EcoCBG was founded on a simple observation: the country's waste problem and its energy problem are the same problem, solved the exact same way.
        </p>

      </div>
    </section>
  );
};

export default AboutHero;