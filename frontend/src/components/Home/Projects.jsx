import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

// Sub-component for individual project cards to handle the running border hover effect
const ProjectCard = ({ project, index }) => {
  const borderRef = useRef(null);
  const cardRef = useRef(null);
  const animation = useRef(null);

  useEffect(() => {
    // 1. Initial Scroll Reveal Animation for the card
    gsap.fromTo(cardRef.current,
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out', delay: index * 0.2 }
    );

    // 2. Continuous GSAP Rotation for the running border effect (Paused by default)
    const ctx = gsap.context(() => {
      animation.current = gsap.to(borderRef.current, {
        rotation: 360,
        duration: 3,
        repeat: -1,
        ease: 'none',
        paused: true
      });
    }, cardRef);

    return () => ctx.revert();
  }, [index]);

  const handleMouseEnter = () => {
    animation.current.play();
    gsap.to(borderRef.current, { opacity: 1, duration: 0.3, ease: 'power2.out' });
  };

  const handleMouseLeave = () => {
    gsap.to(borderRef.current, { 
      opacity: 0, 
      duration: 0.3, 
      ease: 'power2.in',
      onComplete: () => animation.current.pause() 
    });
  };

  return (
    <div 
      ref={cardRef}
      className="relative w-full overflow-hidden p-[1px] group mt-8" // p-[1px] acts as the border width
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Default static border that fades out on hover */}
      <div className="absolute inset-0 border border-white/10 z-10 pointer-events-none group-hover:opacity-0 transition-opacity duration-300"></div>
      
      {/* The GSAP Rotating Gradient (The Running Border) */}
      <div 
        ref={borderRef}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[300%] bg-[conic-gradient(from_0deg,transparent_0%,transparent_75%,#d4ff00_100%)] opacity-0 z-0 pointer-events-none"
      ></div>

      {/* Actual Card Content (Masks the center of the rotating background) */}
      <div className="relative z-20 w-full h-full bg-brand-surface flex flex-col md:flex-row">
        
        {/* Left Side: Image */}
        <div className="w-full md:w-5/12 h-64 md:h-auto overflow-hidden">
          <img 
            src={project.imgSrc} 
            alt={project.title} 
            className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
          />
        </div>

        {/* Right Side: Data & Content */}
        <div className="w-full md:w-7/12 flex flex-col p-8 md:p-12 justify-center">
          
          {/* Top Metadata */}
          <div className="flex flex-wrap items-center gap-4 text-xs font-bold tracking-widest uppercase mb-4">
            <span className="text-brand-neon">{project.id}</span>
            <span className="text-brand-gray">{project.location}</span>
            <span className="text-brand-gray opacity-50">{project.year}</span>
          </div>

          {/* Title & Desc */}
          <h3 className="text-3xl md:text-4xl font-bold text-brand-white mb-4">
            {project.title}
          </h3>
          <p className="text-brand-gray text-base leading-relaxed font-medium">
            {project.desc}
          </p>

          {/* Divider */}
          <div className="w-full h-px bg-white/10 my-8"></div>

          {/* Output Highlight */}
          <div className="flex flex-col">
            <span className="text-[10px] md:text-xs text-brand-gray font-bold uppercase tracking-[0.2em] mb-1">
              {project.outputLabel}
            </span>
            <span className="text-2xl md:text-3xl font-black text-brand-neon tracking-tight">
              {project.outputValue}
            </span>
          </div>

        </div>
      </div>
    </div>
  );
};

const Projects = () => {
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const headerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.project-header-reveal',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        );
      }, headerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  const projectsData = [
    {
      id: "P.01",
      location: "PUNE, MAHARASHTRA",
      year: "2025",
      title: "12 TPD Municipal CBG Plant",
      desc: "Design, build & commission — municipal solid waste to CBG for city bus fleet.",
      outputLabel: "OUTPUT",
      outputValue: "4,380 T CBG / year",
      imgSrc: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "P.02",
      location: "LUDHIANA, PUNJAB",
      year: "2024",
      title: "Paddy Straw to CBG Facility",
      desc: "Turnkey 8 TPD plant converting 60,000 tonnes of stubble annually into vehicle-grade fuel.",
      outputLabel: "OUTPUT",
      outputValue: "60,000 T stubble / year",
      imgSrc: "https://images.unsplash.com/photo-1581094288338-2314dddb7ece?q=80&w=2070&auto=format&fit=crop"
    },
    {
      id: "P.03",
      location: "NASHIK, MAHARASHTRA",
      year: "2026",
      title: "Dairy Cluster Biogas Plant",
      desc: "Digester + upgrading package for a 40,000-cattle dairy cooperative with FOM fertilizer output.",
      outputLabel: "OUTPUT",
      outputValue: "2,920 T CBG / year",
      imgSrc: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop"
    }
  ];

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12">
      <div className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col mb-10 md:mb-16">
          <span className="project-header-reveal text-brand-neon tracking-[0.2em] uppercase text-xs mb-4">
            Completed Projects
          </span>
          <h2 className="project-header-reveal text-4xl md:text-6xl font-black text-brand-white tracking-tight">
            Built. Running. <span className="text-brand-neon">Proven.</span>
          </h2>
        </div>

        {/* Project List */}
        <div className="flex flex-col gap-6 md:gap-10 w-full">
          {projectsData.map((project, index) => (
            <ProjectCard 
              key={index} 
              project={project} 
              index={index} 
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;