import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ArrowRight, Leaf } from 'lucide-react';

const TeamMemberRow = ({ member, index, isLast }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });
  const rowRef = useRef(null);

  // Alternating layout: even indexes have image on left, odd have image on right
  const isEven = index % 2 === 0;

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.team-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, rowRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full flex flex-col bg-[#fcfcfc] items-center">
      <div 
        ref={rowRef} 
        className={`w-full max-w-8xl flex flex-col ${isEven ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-12 md:gap-24 py-8`}
      >
        
        {/* IMAGE SIDE */}
        <div className={`w-full md:w-5/12 team-anim relative flex ${isEven ? 'justify-end' : 'justify-start'}`}>
          <div className="relative w-64 h-64 md:w-72 md:h-72 rounded-[2.5rem] bg-[#eef5e9] overflow-visible">
            
            {/* The actual image */}
            <div className="absolute inset-0 rounded-[2.5rem] overflow-hidden shadow-lg border border-[#0f2517]/5 z-10">
              <img 
                src={member.img} 
                alt={member.name} 
                className="w-full h-full object-cover" 
              />
            </div>
            
            {/* Decorative Leaf on Image Corner */}
            <div className={`absolute ${isEven ? '-bottom-4 -left-4' : '-bottom-4 -right-4'} z-20`}>
              <svg width="48" height="48" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className={isEven ? '' : 'transform -scale-x-100'}>
                {/* <path d="M50 100C50 100 0 100 0 50C0 0 50 0 50 0C50 0 100 0 100 50C100 100 50 100 50 100Z" fill="#9bcc4c" opacity="0.9"/>
                <path d="M80 80C80 80 20 80 20 20C20 -40 80 -40 80 -40C80 -40 140 -40 140 20C140 80 80 80 80 80Z" fill="#3c6e4b" opacity="0.6" transform="scale(0.5) translate(80, 80)"/> */}
              </svg>
            </div>

          </div>
        </div>

        {/* TEXT SIDE */}
        <div className={`w-full md:w-7/12 flex flex-col team-anim ${isEven ? 'text-left' : 'text-left md:text-right md:items-end'}`}>
          
          {/* Role Kicker */}
          <div className={`flex items-center gap-3 mb-2 ${isEven ? 'justify-start' : 'justify-start md:justify-end'}`}>
            <span className="text-[#3c6e4b] font-bold tracking-[0.15em] uppercase text-[10px] md:text-xs">
              {member.role}
            </span>
            <div className="h-[1px] w-8 bg-[#3c6e4b]/40"></div>
          </div>
          
          {/* Name */}
          <h3 className="text-2xl md:text-3xl font-semibold text-[#0f2517] tracking-tight mb-4">
            {member.name}
          </h3>
          
          {/* Description */}
          <p className={`text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed mb-6 max-w-lg ${isEven ? '' : 'md:text-right'}`}>
            {member.desc}
          </p>

          {/* LinkedIn Link (Using Native SVG instead of lucide-react to prevent errors) */}
          <a href="#" className="inline-flex items-center gap-2 text-[#3c6e4b] font-bold text-sm hover:opacity-80 transition-opacity group">
            <div className="w-6 h-6 rounded bg-[#3c6e4b] text-white flex items-center justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="currentColor" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                <rect x="2" y="9" width="4" height="12"></rect>
                <circle cx="4" cy="4" r="2"></circle>
              </svg>
            </div>
            LinkedIn
            <ArrowRight size={14} className="transform group-hover:translate-x-1 transition-transform" />
          </a>
          
        </div>

      </div>

      {/* Thin Divider Line (Except for the last item) */}
      {!isLast && (
        <div className="w-full max-w-5xl h-[1px] bg-[#3c6e4b]/10 my-8"></div>
      )}
    </div>
  );
};

const Leadership = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const headerRef = useRef(null);

  const teamData = [
    {
      name: "Ritesh Shah",
      role: "Founder & CEO",
      desc: "Coming from a strong Commerce and Accountancy background, Ritesh brings sharp financial intuition, administrative clarity, and operational management to our organization. Stepping into the bio-energy sector, he has developed a grounded understanding of plant operations, regulatory compliance, and business dynamics. As Founder and CEO, Ritesh excels at managing multi-faceted organizational challenges, maintaining corporate governance, and making the crucial strategic calls that drive our growth forward.",
      img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Ashutosh Kumar Dixit",
      role: "Chief Management Officer & Mentor",
      desc: "Holding an MBA in Marketing and International Business, Ashutosh serves as our Chief Management Officer, strategic bedrock, and guiding mentor. Despite his extensive agricultural landholdings, his leadership remains deeply rooted in character, long-term vision, and connection to the soil. Through insightful mentorship and masterly communication, he resolves complex operational friction and guides our high-level corporate roadmap with systemic foresight.",
      img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=800&auto=format&fit=crop"
    },
    {
      name: "Yogesh Narayan Tiwari",
      role: "Co-Founder & COO",
      desc: "A Computer Science Engineer specializing in Cybersecurity, Yogesh serves as the technical backbone and operational engine of our organization. He brings a rigorous, systems-level engineering mindset to our Compressed Biogas infrastructure—mastering the complexities of membrane gas separation, anaerobic digestion dynamics, plant machinery, and agrobiotic processes. As Co-Founder and COO, Yogesh combines technical intellect with systematic execution to streamline complex technical architectures and regulatory workflows into seamless industrial operations.",
      img: "https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=800&auto=format&fit=crop"
    }
  ];

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.header-anim',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out' }
        );
      }, headerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full bg-[#fcfcfc] py-24 md:py-32 px-1 md:px-2 overflow-hidden">
      
      {/* Background Decorative Abstract Leaves */}
      <div className="absolute top-0 left-0 w-64 h-64 bg-[#eef5e9] rounded-br-full opacity-60 -translate-x-1/2 -translate-y-1/2 pointer-events-none"></div>
      <div className="absolute top-40 right-0 w-96 h-96 bg-[#eef5e9] rounded-bl-full opacity-40 translate-x-1/3 pointer-events-none"></div>
      <div className="absolute bottom-0 left-10 w-72 h-72 bg-[#eef5e9] rounded-t-full opacity-50 translate-y-1/2 pointer-events-none"></div>

      <div className="w-full max-w-7xl mx-auto flex flex-col relative z-10">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-18">
          <div className="header-anim flex items-center gap-4 mb-6">
            <div className="h-[1px] w-12 bg-[#3c6e4b]/30"></div>
            <span className="text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-[10px] md:text-xs">
              Meet Our Team
            </span>
            <div className="h-[1px] w-12 bg-[#3c6e4b]/30"></div>
          </div>
          
          <h2 className="header-anim text-3xl md:text-5xl  font-semibold text-[#0f2517] tracking-tight leading-[1.1] mb-6">
            The People Behind <br className="hidden md:block" /> 
            <span className="text-[#3c6e4b]">Our Progress</span>
          </h2>
          
          <p className="header-anim text-[#0f2517]/70 text-sm md:text-base font-medium max-w-xl leading-relaxed">
            A team of experienced professionals, united by a common goal — cleaner energy and a sustainable tomorrow.
          </p>
        </div>

        {/* Alternating List */}
        <div className="flex flex-col w-full">
          {teamData.map((member, index) => (
            <TeamMemberRow 
              key={index} 
              member={member} 
              index={index} 
              isLast={index === teamData.length - 1} 
            />
          ))}
        </div>

        {/* Bottom Leaf Accent */}
        <div className="w-full flex justify-center mt-12 md:mt-20">
          <Leaf className="text-[#3c6e4b] opacity-80" size={24} fill="currentColor" />
        </div>

      </div>
    </section>
  );
};

export default Leadership;