import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';

const ArticleBlock = ({ title, children, imgSrc, imgAlt, reverse = false }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const blockRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.fromTo(blockRef.current.children,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    <div ref={ref} className="w-full py-8 md:py-12 border-b border-[#0f2517]/10 last:border-0">
      <div ref={blockRef} className={`flex flex-col ${reverse ? 'md:flex-row-reverse' : 'md:flex-row'} gap-8 md:gap-12 items-start`}>
        
        {/* Text Content */}
        <div className="w-full md:w-2/3 flex flex-col">
          {title && (
            <h3 className="text-2xl md:text-3xl font-black text-[#0f2517] tracking-tight mb-5">
              {title}
            </h3>
          )}
          <div className="text-[#0f2517]/80 text-base md:text-lg leading-relaxed font-medium space-y-5">
            {children}
          </div>
        </div>

        {/* Small Reference Image */}
        {imgSrc && (
          <div className="w-full md:w-1/3 shrink-0">
            <div className="relative w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-[0_10px_30px_rgba(15,37,23,0.08)] border border-[#0f2517]/5 group">
              <img 
                src={imgSrc} 
                alt={imgAlt} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
              {/* Subtle brand overlay */}
              <div className="absolute inset-0 bg-[#0f2517]/10 mix-blend-overlay"></div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

const CBGDetailsBlog = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  
  useEffect(() => {
    if (inView) {
      gsap.fromTo('.hero-reveal',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-[#fcfdfc] font-sans pb-24">
      
      {/* Blog Hero Header */}
      <div className="w-full bg-[#0f2517] pt-32 pb-24 px-6 md:px-12 relative overflow-hidden text-center">
        <div className="absolute inset-0 z-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?q=80&w=2000&auto=format&fit=crop" 
            alt="CBG Plant Background" 
            className="w-full h-full object-cover mix-blend-luminosity"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#0f2517] to-transparent"></div>
        </div>
        
        <div className="relative z-10 max-w-4xl mx-auto hero-reveal">
          <span className="inline-block text-[#d4ff00] font-bold tracking-[0.2em] uppercase text-xs mb-6">
            Inside The Technology
          </span>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
            The Science & Engineering of <br className="hidden md:block" />
            <span className="text-[#3c6e4b]">Compressed Biogas</span>
          </h1>
          <p className="text-white/80 text-lg font-medium max-w-2xl mx-auto leading-relaxed">
            A deep dive into the purification technologies, sustainable feedstocks, and industrial infrastructure powering India's clean energy transition.
          </p>
        </div>
      </div>

      {/* Main Reading Container */}
      <div className="w-full max-w-5xl mx-auto px-6 md:px-12 -mt-10 relative z-20 bg-white rounded-t-[3rem] shadow-[0_-10px_40px_rgba(15,37,23,0.05)] pt-12 md:pt-20 px-8 md:px-16">
        
        {/* Overview Section */}
        <ArticleBlock 
          title="What is Compressed Bio-Gas (CBG)?" 
          imgSrc="https://images.unsplash.com/photo-1518843875459-f738682238a6?q=80&w=800&auto=format&fit=crop"
          imgAlt="Biogas Plant Aerial"
        >
          <p>
            Compressed Bio-Gas (CBG) is derived from waste and biomass sources through anaerobic decomposition. These sources include agricultural residues, cattle dung, sugarcane press mud, municipal solid waste, and sewage treatment plant waste. 
          </p>
          <p>
            CBG possesses a calorific value and chemical properties strikingly similar to Compressed Natural Gas (CNG), making it an effective, green, and renewable automotive fuel. Given the abundant biomass resources available within the country, it has the immense potential to replace CNG in automotive, industrial, and commercial applications entirely.
          </p>
          <p>
            India’s estimated potential for CBG production is staggering, standing at approximately <strong>62 million metric tons (MMT)</strong>, accompanied by a bio-manure generation capacity of 370 MMT.
          </p>
        </ArticleBlock>

        {/* Feedstocks Section */}
        <div className="pt-12 pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#3c6e4b] uppercase tracking-widest mb-2 text-center">
            Raw Materials & Feedstocks
          </h2>
          <div className="w-16 h-1 bg-[#3c6e4b]/20 mx-auto rounded-full mb-8"></div>
        </div>

        <ArticleBlock 
          title="Sugar Industry Synergy: Bagasse & Press Mud" 
          imgSrc="https://images.unsplash.com/photo-1592982537447-6f296ddce546?q=80&w=800&auto=format&fit=crop"
          imgAlt="Sugarcane Harvest"
          reverse={true}
        >
          <p>
            <strong>Bagasse</strong>, the fibrous residue left after extracting sugarcane juice, serves as an excellent feedstock for CBG production. With high cellulose and hemicellulose content, it digests incredibly well when pre-treated for anaerobic processes. Sugar mills benefit immensely by converting this surplus into renewable energy instead of burning it.
          </p>
          <p>
            Similarly, <strong>Press Mud</strong>—a key filtration by-product of the sugar industry—is highly suitable for bio-methanation. Processing these materials not only yields high-grade biogas but also produces an organic slurry that drastically improves soil fertility and reduces reliance on chemical fertilizers.
          </p>
        </ArticleBlock>

        <ArticleBlock 
          title="Napier Grass" 
          imgSrc="https://images.unsplash.com/photo-1500382017468-9049fed747ef?q=80&w=800&auto=format&fit=crop"
          imgAlt="Lush Green Field"
        >
          <p>
            Napier grass is an ideal energy crop for biogas plants. It grows rapidly over large areas, is easily harvested, and is highly resilient to drought and dry climates. With exceptional biomass yield and strong biomethane potential, Napier grass serves as a foundational renewable energy resource.
          </p>
          <p>
            Its rich organic profile—comprising 30.9% carbohydrates, 27% protein, 14.8% lipids, and 18.2% ash—makes it perfectly suited for optimal biogas production. Depending on the variant, Napier grass can produce <strong>100–180 tons per acre annually</strong>, ensuring sustainable, long-term income opportunities for farmers.
          </p>
        </ArticleBlock>

        <ArticleBlock 
          title="Cow Dung & Poultry Waste" 
          imgSrc="https://images.unsplash.com/photo-1570042225831-d98fa7577f1e?q=80&w=800&auto=format&fit=crop"
          imgAlt="Dairy Farm"
          reverse={true}
        >
          <p>
            <strong>Cow dung</strong> is one of the most reliable and widely used feedstocks for biogas generation due to its steady availability, easy handling, and perfectly balanced organic composition. When processed in anaerobic digesters, it yields clean biogas alongside an excellent, nutrient-rich organic digestate.
          </p>
          <p>
            <strong>Poultry litter</strong>—comprising droppings, bedding materials, and spilt feed—is another energy-dense substrate. Its exceptionally high nitrogen and organic content ensures strong biomethane output. Through anaerobic digestion, poultry farms can reduce odor, minimize waste disposal problems, and turn waste into a highly profitable energy solution.
          </p>
        </ArticleBlock>

        {/* Purification Section */}
        <div className="pt-12 pb-4">
          <h2 className="text-xl md:text-2xl font-bold text-[#3c6e4b] uppercase tracking-widest mb-2 text-center">
            Advanced Purification Processes
          </h2>
          <div className="w-16 h-1 bg-[#3c6e4b]/20 mx-auto rounded-full mb-8"></div>
        </div>

        <ArticleBlock 
          title="Process 1: VPSA Purification Unit" 
          imgSrc="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
          imgAlt="Industrial Pipes and Towers"
        >
          <p>
            We deploy non-cryogenic Vacuum Pressure Swing Adsorption (VPSA) technology. This hybrid approach alternates between pressure and vacuum phases to regenerate the specialized adsorbent material, efficiently separating gases.
          </p>
          <ul className="list-disc pl-5 space-y-3 mt-2">
            <li><strong>Preparation (Pre-Treatment):</strong> Raw biogas is treated to remove moisture and sulfur compounds (H₂S), which can corrode equipment and irreversibly damage the adsorbent material.</li>
            <li><strong>Adsorption (Pressurization):</strong> The pre-treated gas is compressed into a massive tower. The adsorbent captures CO₂ impurities while allowing high-purity methane to pass through to storage.</li>
            <li><strong>Desorption (Regeneration):</strong> The saturated tower goes offline. A heavy vacuum is applied to depressurize the vessel, forcing the adsorbent to release and vent the captured CO₂.</li>
            <li><strong>Continuous Operation:</strong> Commercial systems run with at least two alternating towers to guarantee a smooth, uninterrupted supply of purified gas.</li>
          </ul>
        </ArticleBlock>

        <ArticleBlock 
          title="Process 2: Water Scrubbing" 
          imgSrc="https://images.unsplash.com/photo-1581093458791-9f3c3900df4b?q=80&w=800&auto=format&fit=crop"
          imgAlt="Water Scrubber Infrastructure"
          reverse={true}
        >
          <p>
            Water Scrubbing capitalizes on the natural solubility differences of gases. Pressurized water effectively washes impurities like CO₂ and H₂S away from the insoluble methane stream.
          </p>
          <ul className="list-disc pl-5 space-y-3 mt-2">
            <li>Pre-treated, compressed raw biogas enters the bottom of a tall scrubber column.</li>
            <li>Water is sprayed from the top, cascading down through a packing bed to create a gravity-fed counter-current flow.</li>
            <li>The internal packing forms thin water films, intensely mixing the gas and water and maximizing absorption efficiency.</li>
            <li>CO₂ (moderately soluble) and H₂S (highly soluble) readily dissolve into the water, while the insoluble methane rises untouched.</li>
            <li>The purified, methane-rich gas exits the top, reaching purities of <strong>90–97% methane</strong> after a final dehydration step.</li>
          </ul>
        </ArticleBlock>

        {/* Technology Section */}
        <ArticleBlock 
          title="Floating Drum Digester Technology" 
          imgSrc="https://images.unsplash.com/photo-1541888087425-ce50f3d61a29?q=80&w=800&auto=format&fit=crop"
          imgAlt="Engineering Valves and Controls"
        >
          <p>
            Our infrastructure prioritizes reliability through the deployment of Floating Drum Plants, which offer distinct advantages over traditional fixed-dome systems.
          </p>
          <p>
            Because the gas is initially stored in a dynamically floating dome and subsequently in a balloon, the system ensures a highly consistent output pressure. This design allows operators to easily and visually monitor gas levels based purely on the physical position and shape of the dome.
          </p>
          <p>
            Furthermore, the integrated water-seal design minimizes the possibility of fugitive gas leaks. Constructability is straightforward, and the phase-wise multi-dome configuration allows for localized maintenance without ever requiring a complete plant shutdown.
          </p>
        </ArticleBlock>

      </div>
    </section>
  );
};

export default CBGDetailsBlog;