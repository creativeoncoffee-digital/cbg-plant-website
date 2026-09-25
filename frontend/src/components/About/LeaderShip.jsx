import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, ArrowUpRight, X } from 'lucide-react';

const Leadership = () => {
  const [selectedLeader, setSelectedLeader] = useState(null);
  const { ref, inView } = useInView({ 
    triggerOnce: true, 
    threshold: 0.1 
  });
  const containerRef = useRef(null);
  const modalRef = useRef(null);

  const teamData = [
    {
      name: "Ritesh Shah",
      role: "Founder & CEO",
      subtitle: "Commercial Discipline & Adaptive Management",
      desc: "Coming from a strong Commerce and Accountancy background, Ritesh brings sharp financial intuition, administrative clarity, and operational management to our organization. Stepping into the bio-energy sector, he has developed a grounded understanding of plant operations, regulatory compliance, and business dynamics. As Founder and CEO, Ritesh excels at managing multi-faceted organizational challenges, maintaining corporate governance, and making the crucial strategic calls that drive our growth forward.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Ashutosh Kumar Dixit",
      role: "Chief Management Officer & Mentor",
      subtitle: "Strategic Vision, Mentorship & Global Business Acumen",
      desc: "Holding an MBA in Marketing and International Business, Ashutosh serves as our Chief Management Officer, strategic bedrock, and guiding mentor. Despite his extensive agricultural landholdings, his leadership remains deeply rooted in character, long-term vision, and connection to the soil. Through insightful mentorship and masterly communication, he resolves complex operational friction and guides our high-level corporate roadmap with systemic foresight.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Yogesh Narayan Tiwari",
      role: "Co-Founder & COO",
      subtitle: "Technical Mastery, Engineering Precision & Operational Excellence",
      desc: "A Computer Science Engineer specializing in Cybersecurity, Yogesh serves as the technical backbone and operational engine of our organization. He brings a rigorous, systems-level engineering mindset to our Compressed Biogas infrastructure—mastering the complexities of membrane gas separation, anaerobic digestion dynamics, plant machinery, and agrobiotic processes. As Co-Founder and COO, Yogesh combines technical intellect with systematic execution to streamline complex technical architectures and regulatory workflows into seamless industrial operations.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
    }
  ];

  // Initial reveal for the main vertical image cards
  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo('.leader-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
        )
        .fromTo('.team-image-card',
          { y: 50, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  // Animate the Modal Pop-up smoothly
  useEffect(() => {
    if (selectedLeader !== null && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
      );
      // Lock body scroll when modal is open
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedLeader]);

  return (
    <section ref={ref} className="w-full bg-brand-black py-24 md:py-32 px-6 md:px-12 border-t border-white/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 md:mb-20">
          <span className="leader-header text-brand-neon font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Leadership Team
          </span>
          <h2 className="leader-header text-4xl md:text-6xl font-black text-brand-white tracking-tight uppercase">
            The <span className="text-brand-neon">Minds</span> Behind
          </h2>
        </div>

        {/* The 3 Vertical Image Cards */}
        <div className="flex flex-col md:flex-row gap-6 w-full">
          {teamData.map((member, index) => (
            <div 
              key={index}
              onClick={() => setSelectedLeader(index)}
              className="team-image-card relative w-full md:w-1/3 h-[400px] md:h-[550px] overflow-hidden group cursor-pointer border border-white/10 hover:border-brand-neon transition-all duration-500"
            >
              {/* Leader Portrait */}
              <img 
                src={member.img} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" 
              />
              
              {/* Overlay that appears on hover with the "Click to Read" button */}
              <div className="absolute inset-0 bg-brand-black/60 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center z-10">
                <span className="text-brand-neon font-bold tracking-[0.15em] uppercase text-sm border border-brand-neon px-8 py-4 flex items-center gap-3 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-brand-neon hover:text-brand-black">
                  Click to read <ArrowRight size={18} />
                </span>
              </div>

              {/* Gradient & Name at the bottom of the image card */}
              <div className="absolute inset-x-0 bottom-0 p-8 bg-gradient-to-t from-brand-black to-transparent z-0">
                <h3 className="text-3xl font-black text-brand-white mb-1">{member.name}</h3>
                <span className="text-brand-neon font-bold tracking-[0.15em] uppercase text-xs block">
                  {member.role}
                </span>
              </div>
            </div>
          ))}
        </div>

      </div>
{/* --- MODAL POPUP --- */}
      {selectedLeader !== null && (
        <div className="fixed inset-0 z-[9900] flex items-center justify-center p-4 md:p-10">
          
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedLeader(null)}
          ></div>
          
          {/* Blurred Background Overlay */}
          <div 
            className="absolute inset-0 bg-brand-black/90 backdrop-blur-md cursor-pointer"
            onClick={() => setSelectedLeader(null)}
          ></div>
          
          {/* Modal Container */}
          <div ref={modalRef} className="relative z-10 w-full max-w-6xl h-[90vh] md:h-[650px] flex flex-col md:flex-row bg-[#050505] border border-white/10 shadow-2xl overflow-hidden">
            
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-brand-gray hover:text-brand-neon transition-colors"
              onClick={() => setSelectedLeader(null)}
            >
              <X size={32} />
            </button>

            {/* LEFT SIDE: Highlighted Portrait */}
            <div className="w-full md:w-5/12 h-64 md:h-full relative overflow-hidden">
              <img 
                src={teamData[selectedLeader].img} 
                alt={teamData[selectedLeader].name} 
                className="w-full h-full object-cover" 
              />
              {/* Glowing divider line between image and text */}
              <div className="hidden md:block absolute right-0 top-0 bottom-0 w-[1px] bg-brand-neon/50 shadow-[0_0_20px_rgba(212,255,0,0.8)]"></div>
            </div>

            {/* RIGHT SIDE: The "Read Box" (Styled exactly like your reference image) */}
            <div className="w-full md:w-7/12 h-full p-8 md:p-14 relative flex flex-col overflow-y-auto">
              
              {/* Hollow Background Number */}
              <div className="absolute bottom-[-5%] right-[-5%] text-[15rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.03)] pointer-events-none select-none z-0">
                0{selectedLeader + 1}
              </div>
              
              <div className="relative z-10 flex flex-col h-full">
                {/* Header mimicking the reference card */}
                <div className="flex justify-between items-start mb-10">
                  <img 
                    src={teamData[selectedLeader].img} 
                    alt="avatar" 
                    className="w-16 h-16 object-cover rounded-sm border border-white/20" 
                  />
                  <ArrowUpRight className="text-brand-neon" size={28} />
                </div>

                <h3 className="text-4xl md:text-5xl font-black text-brand-white mb-2">
                  {teamData[selectedLeader].name}
                </h3>
                <span className="text-brand-neon font-bold tracking-[0.2em] uppercase text-sm mb-8 block">
                  {teamData[selectedLeader].role}
                </span>
                
                <div className="border-l-2 border-brand-neon pl-4 mb-8">
                  <span className="text-brand-white text-base md:text-lg font-bold leading-snug">
                    {teamData[selectedLeader].subtitle}
                  </span>
                </div>

                {/* Long Text Description */}
                <p className="text-brand-gray text-base md:text-lg font-medium leading-relaxed">
                  {teamData[selectedLeader].desc}
                </p>
              </div>

            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Leadership;