import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight,  X } from 'lucide-react';

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

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        const tl = gsap.timeline();
        tl.fromTo('.leader-header',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        )
        .fromTo('.team-image-card',
          { y: 40, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' },
          '-=0.4'
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  useEffect(() => {
    if (selectedLeader !== null && modalRef.current) {
      gsap.fromTo(modalRef.current,
        { scale: 0.95, opacity: 0, y: 20 },
        { scale: 1, opacity: 1, y: 0, duration: 0.5, ease: 'back.out(1.2)' }
      );
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
    return () => { document.body.style.overflow = 'auto'; };
  }, [selectedLeader]);

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/10">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col items-center">
        
        {/* Header Section */}
        <div className="flex flex-col mb-16 md:mb-20 text-center">
          <span className="leader-header text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
            Leadership Team
          </span>
          <h2 className="leader-header text-4xl md:text-5xl font-black text-[#0f2517] tracking-tight uppercase">
            The <span className="text-[#3c6e4b]">Minds</span> Behind
          </h2>
        </div>

        {/* The 3 Vertical Image Cards */}
        <div className="flex flex-col md:flex-row gap-8 w-full">
          {teamData.map((member, index) => (
            <div 
              key={index}
              onClick={() => setSelectedLeader(index)}
              className="team-image-card relative w-full md:w-1/3 h-[400px] md:h-[500px] rounded-2xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl border border-[#0f2517]/5 transition-all duration-500"
            >
              <img 
                src={member.img} 
                alt={member.name} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" 
              />
              
              <div className="absolute inset-0 bg-[#0f2517]/70 opacity-0 group-hover:opacity-100 backdrop-blur-sm transition-all duration-500 flex items-center justify-center z-10">
                <span className="text-white font-bold tracking-[0.15em] uppercase text-sm border border-white/30 px-6 py-3 flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 hover:bg-white hover:text-[#0f2517] rounded-lg">
                  Read More <ArrowRight size={16} />
                </span>
              </div>

              <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-[#0f2517]/90 to-transparent z-0">
                <h3 className="text-2xl font-black text-white mb-1 drop-shadow-sm">{member.name}</h3>
                <span className="text-[#d4ff00] font-bold tracking-[0.1em] uppercase text-[10px] block">
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
          
          <div 
            className="absolute inset-0 bg-[#0f2517]/80 backdrop-blur-sm cursor-pointer"
            onClick={() => setSelectedLeader(null)}
          ></div>
          
          <div ref={modalRef} className="relative z-10 w-full max-w-5xl h-[90vh] md:h-[600px] flex flex-col md:flex-row bg-white rounded-3xl shadow-2xl overflow-hidden">
            
            <button 
              className="absolute top-4 right-4 md:top-6 md:right-6 z-50 text-[#0f2517]/40 hover:text-[#0f2517] bg-white hover:bg-[#f4f6ef] p-2 rounded-full transition-all"
              onClick={() => setSelectedLeader(null)}
            >
              <X size={24} />
            </button>

            <div className="w-full md:w-5/12 h-64 md:h-full relative overflow-hidden">
              <img 
                src={teamData[selectedLeader].img} 
                alt={teamData[selectedLeader].name} 
                className="w-full h-full object-cover" 
              />
            </div>

            <div className="w-full md:w-7/12 h-full p-8 md:p-12 relative flex flex-col overflow-y-auto">
              
              <div className="relative z-10 flex flex-col h-full justify-center">
                
                <h3 className="text-3xl md:text-4xl font-black text-[#0f2517] mb-2">
                  {teamData[selectedLeader].name}
                </h3>
                <span className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-xs mb-6 block">
                  {teamData[selectedLeader].role}
                </span>
                
                <div className="bg-[#f4f6ef] p-5 rounded-xl border border-[#0f2517]/5 mb-6">
                  <span className="text-[#0f2517] text-sm md:text-base font-bold leading-snug">
                    {teamData[selectedLeader].subtitle}
                  </span>
                </div>

                <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed">
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