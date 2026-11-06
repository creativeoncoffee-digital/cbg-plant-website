import { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { FlaskConical, Sprout, Factory, Settings } from 'lucide-react';

const CBGTechnology = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.05 });
  const containerRef = useRef(null);

  useEffect(() => {
    if (inView) {
      gsap.fromTo('.article-anim',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
      );
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-[#fcfdfc] pb-14 md:py-10 font-sans text-[#0f2517]">
      
      {/* Editorial Hero Banner */}
     

      {/* Main Reading Area - Single Column Plain Text */}
      <div ref={containerRef} className="w-full max-w-5xl mx-auto flex flex-col gap-10">
        
        {/* SECTION 1: Overview */}
        <div className="article-anim">
          <div className="flex items-center gap-4 mb-6 text-[#2a633d]">
            <FlaskConical size={28} />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0f2517]">What is Compressed Bio-Gas (CBG)?</h2>
          </div>
          
          <div className="text-[#0f2517]/80 text-lg leading-relaxed space-y-6 font-sm">
            <p>
              Compressed Bio-Gas (CBG) is an upgraded, high-purity renewable gas produced through the anaerobic decomposition of biomass and organic waste. By breaking down agricultural residues, cattle dung, sugarcane press mud, and municipal solid waste in an oxygen-free environment, we capture raw biogas. 
            </p>
            <p>
              This gas is then rigorously purified to remove carbon dioxide (CO₂) and hydrogen sulfide (H₂S), yielding a final product with over <strong>90% pure methane</strong>. With a calorific value and chemical properties identical to Compressed Natural Gas (CNG), CBG serves as a drop-in green fuel for automotive, industrial, and commercial applications.
            </p>
            <p>
              India’s estimated potential for CBG production is staggering, standing at approximately <strong>62 million metric tons (MMT)</strong>, with a simultaneous bio-manure generation capacity of <strong>370 MMT</strong>. This represents a monumental shift towards energy independence and sustainable agriculture.
            </p>
          </div>
        </div>

        <hr className="border-[#0f2517]/10 article-anim" />

        {/* SECTION 2: Feedstocks */}
        <div className="article-anim">
          <div className="flex items-center gap-4 mb-6 text-[#2a633d]">
            <Sprout size={28} />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0f2517]">Premium Raw Materials (Feedstock)</h2>
          </div>
          
          <div className="text-[#0f2517]/80 text-lg leading-relaxed space-y-8 font-sm">
            <div>
              <h3 className="text-xl font-semibold text-[#0f2517] mb-2">Sugar Industry Synergy: Bagasse & Press Mud</h3>
              <p>
                Bagasse (the fibrous residue left after extracting sugarcane juice) and Press Mud (a natural filtration byproduct) serve as excellent feedstocks due to their high cellulose and hemicellulose content. By converting these residues through anaerobic processes, sugar mills can generate surplus renewable energy instead of burning them. This transition creates a profitable circular economy while yielding organic slurry that reduces our dependence on chemical fertilizers.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f2517] mb-2">Napier Grass</h3>
              <p>
                Napier grass is a highly resilient tropical energy crop that guarantees a staggering yield of 100–180 tons per acre annually. Its rich organic profile (30.9% carbohydrates, 27% protein, and 18.2% ash) makes it a dense and highly efficient biomethane resource, ensuring a steady, lucrative income for local farmers while stabilizing plant supply chains.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold text-[#0f2517] mb-2">Cow Dung & Poultry Waste</h3>
              <p>
                Cow dung remains the reliable bedrock of biogas generation due to its steady availability and balanced organic composition. Similarly, poultry litter—comprising droppings and bedding—is an energy-dense substrate high in nitrogen. Processing these through anaerobic digestion not only drives strong biomethane output but also helps farms minimize odor and waste disposal challenges.
              </p>
            </div>
          </div>
        </div>

        <hr className="border-[#0f2517]/10 article-anim" />

        {/* SECTION 3: Purification */}
        <div className="article-anim">
          <div className="flex items-center gap-4 mb-6 text-[#2a633d]">
            <Factory size={28} />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0f2517]">Advanced Gas Purification Methods</h2>
          </div>
          
          <div className="text-[#0f2517]/80 text-lg leading-relaxed space-y-8 font-sm">
            <p>
              Raw biogas contains impurities that must be stripped away to achieve CNG-grade standards. At Ryverda Engineering, we deploy highly efficient, industrial-scale separation technologies to ensure maximum methane concentration.
            </p>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2517] mb-4">Process 1: VPSA Purification Unit</h3>
              <p className="mb-4">
                We utilize non-cryogenic Vacuum Pressure Swing Adsorption (VPSA) technology. This hybrid approach alternates between high pressure and vacuum to separate gases using a specialized adsorbent material.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li><light>Step 1 (Pre-Treatment):</light> Raw biogas is treated to remove moisture and sulfur compounds like H₂S, which would otherwise irreversibly corrode equipment and damage the adsorbent.</li>
                <li><light>Step 2 (Adsorption):</light> The pre-treated gas is compressed into a massive tower where the adsorbent selectively captures CO₂, allowing high-purity methane to pass directly into storage.</li>
                <li><light>Step 3 (Desorption):</light> Once the material is saturated with CO₂, the tower is taken offline. A vacuum pump depressurizes the container, forcing the release of the captured CO₂, which is vented safely.</li>
                <li><light>Step 4 (Continuous Operation):</light> Commercial systems operate with at least two towers. While one actively adsorbs impurities, the other regenerates, guaranteeing an uninterrupted supply of purified gas.</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-semibold text-[#0f2517] mb-4">Process 2: Water Scrubbing</h3>
              <p className="mb-4">
                Water Scrubbing leverages the natural solubility differences of gases. Pressurized water is used to separate impurities from the methane. Because H₂S is highly soluble and CO₂ is moderately soluble in water, while methane remains minimally soluble, this process is highly effective.
              </p>
              <ul className="list-disc pl-6 space-y-4">
                <li>Raw, moisture-filtered biogas enters the bottom of a tall scrubber column under high compression.</li>
                <li>Water is sprayed from the top of the tank, flowing downward through a packed bed to create a gravity-fed counter-current flow against the rising gas.</li>
                <li>Intense mixing takes place as thin water films form over the packing surfaces, drastically improving mass transfer and absorption efficiency.</li>
                <li>CO₂ and H₂S readily dissolve into the falling water. The insoluble methane naturally rises to the top.</li>
                <li>The resulting gas exiting the top reaches a remarkable 90–97% methane purity after a final dehydration phase.</li>
                <li>The drained, saturated water is treated in a regeneration tank to release the absorbed gases before being recirculated back into the scrubber.</li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="border-[#0f2517]/10 article-anim" />

        {/* SECTION 4: Technology */}
        <div className="article-anim">
          <div className="flex items-center gap-4 mb-6 text-[#2a633d]">
            <Settings size={28} />
            <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0f2517]">Floating Drum Digester Technology</h2>
          </div>
          
          <div className="text-[#0f2517]/80 text-lg leading-relaxed space-y-6 font-sm">
            <p>
              Our engineering philosophy prioritizes operational reliability. We deploy Floating Drum Plants, which offer distinct architectural and operational advantages over traditional fixed-dome systems. 
            </p>
            <p>
              By storing gas initially in a dynamically floating dome and subsequently in a balloon, we guarantee mathematically consistent output pressure. This design allows operators to instantly visually gauge stored gas capacity simply by observing the physical elevation and shape of the dome.
            </p>
            <p>
              Furthermore, the integrated water-seal architecture drastically minimizes the risk of fugitive methane emissions and leaks. From a constructability standpoint, these plants are straightforward to build, and their multi-dome configurations allow our engineers to perform localized, phase-wise maintenance without forcing a total plant shutdown.
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default CBGTechnology;