import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { Leaf, DollarSign, Settings, RefreshCw, ArrowRight, Plus } from 'lucide-react';

const HomeExtra = () => {
  const containerRef = useRef(null);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.reveal-elem', {
        y: 40,
        opacity: 0,
        duration: 1,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const faqs = [
    { q: "What makes CBG different from regular natural gas?", a: "Chemically near-identical to CNG, but sourced from organic waste rather than fossil reserves." },
    { q: "Where does the feedstock come from?", a: "Agricultural residue, press mud, and segregated municipal food waste sourced through long-term supply agreements." },
    { q: "Can you build a plant on our site?", a: "Yes, we evaluate feedstock availability, land, and offtake potential together before proposing a plant design." }
  ];

  return (
    <div ref={containerRef} className="w-full bg-brand-white flex flex-col font-sans">
      
      {/* Stats Strip */}
      <div className="w-full border-y border-gray-200 bg-[#f6f4ec] py-12 px-6 md:px-12 reveal-elem">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-10 md:gap-4 divide-y md:divide-y-0 md:divide-x divide-gray-300 text-center md:text-left">
          <div className="flex flex-col pt-4 md:pt-0 md:px-6 w-full md:w-1/4">
            <span className="text-4xl font-black text-brand-greenDark">6</span>
            <span className="text-sm text-brand-black opacity-75 mt-2 font-bold uppercase tracking-wider">CBG plants in development</span>
          </div>
          <div className="flex flex-col pt-4 md:pt-0 md:px-6 w-full md:w-1/4">
            <span className="text-4xl font-black text-brand-greenDark">450+</span>
            <span className="text-sm text-brand-black opacity-75 mt-2 font-bold uppercase tracking-wider">Tonnes waste processed / day</span>
          </div>
          <div className="flex flex-col pt-4 md:pt-0 md:px-6 w-full md:w-1/4">
            <span className="text-4xl font-black text-brand-greenDark">18,000t</span>
            <span className="text-sm text-brand-black opacity-75 mt-2 font-bold uppercase tracking-wider">CO₂e offset annually</span>
          </div>
          <div className="flex flex-col pt-4 md:pt-0 md:px-6 w-full md:w-1/4">
            <span className="text-4xl font-black text-brand-greenDark">3</span>
            <span className="text-sm text-brand-black opacity-75 mt-2 font-bold uppercase tracking-wider">States across India</span>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 reveal-elem">
        <h2 className="text-3xl md:text-5xl font-black text-brand-black mb-12">Principles we don't compromise on</h2>
        <div className="flex flex-col md:flex-row flex-wrap gap-6">
          <div className="w-full md:w-[48%] flex flex-col p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <Leaf className="text-brand-greenLight mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-black mb-2">Low-carbon</h3>
            <p className="text-gray-600 font-medium">Cuts methane and particulate emissions versus open burning or landfill.</p>
          </div>
          <div className="w-full md:w-[48%] flex flex-col p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <DollarSign className="text-brand-greenLight mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-black mb-2">Cost-competitive</h3>
            <p className="text-gray-600 font-medium">Priced to match or beat conventional CNG on a per-kilometre basis.</p>
          </div>
          <div className="w-full md:w-[48%] flex flex-col p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <Settings className="text-brand-greenLight mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-black mb-2">Drop-in ready</h3>
            <p className="text-gray-600 font-medium">Runs in existing CNG-compatible engines and pipeline infrastructure.</p>
          </div>
          <div className="w-full md:w-[48%] flex flex-col p-8 border border-gray-200 rounded-2xl hover:shadow-lg transition-shadow">
            <RefreshCw className="text-brand-greenLight mb-4" size={32} />
            <h3 className="text-xl font-bold text-brand-black mb-2">Circular by design</h3>
            <p className="text-gray-600 font-medium">Digestate returns to the same farms that supplied the feedstock.</p>
          </div>
        </div>
      </div>

      {/* Process Section */}
      <div className="w-full bg-[#f6f4ec] py-20 px-6 md:px-12 reveal-elem border-y border-gray-200">
        <div className="max-w-7xl mx-auto flex flex-col">
          <span className="text-brand-flame font-bold tracking-widest uppercase mb-2 text-sm">The Cycle</span>
          <h2 className="text-3xl md:text-5xl font-black text-brand-black mb-6">From feedstock to fuel, in four stages</h2>
          <p className="text-gray-600 font-medium max-w-2xl mb-12">Every plant follows the same reclaim-reuse-recycle loop, designed to run continuously with minimal waste at every step.</p>
          
          <div className="flex flex-col md:flex-row gap-8">
            <div className="flex flex-col w-full md:w-1/4 border-l-2 md:border-l-0 md:border-t-2 border-brand-greenLight pl-6 md:pl-0 md:pt-6">
              <span className="text-brand-flame font-black text-2xl mb-4">01</span>
              <h3 className="text-xl font-bold text-brand-black mb-2">Collect</h3>
              <p className="text-gray-600 text-sm">Agricultural residue, food waste, and press mud are sourced locally.</p>
            </div>
            <div className="flex flex-col w-full md:w-1/4 border-l-2 md:border-l-0 md:border-t-2 border-brand-greenLight pl-6 md:pl-0 md:pt-6">
              <span className="text-brand-flame font-black text-2xl mb-4">02</span>
              <h3 className="text-xl font-bold text-brand-black mb-2">Digest</h3>
              <p className="text-gray-600 text-sm">Feedstock is fed into anaerobic digesters where microbes release biogas.</p>
            </div>
            <div className="flex flex-col w-full md:w-1/4 border-l-2 md:border-l-0 md:border-t-2 border-brand-greenLight pl-6 md:pl-0 md:pt-6">
              <span className="text-brand-flame font-black text-2xl mb-4">03</span>
              <h3 className="text-xl font-bold text-brand-black mb-2">Purify</h3>
              <p className="text-gray-600 text-sm">Raw biogas is scrubbed of CO₂ and compressed into pipeline-grade CBG.</p>
            </div>
            <div className="flex flex-col w-full md:w-1/4 border-l-2 md:border-l-0 md:border-t-2 border-brand-greenLight pl-6 md:pl-0 md:pt-6">
              <span className="text-brand-flame font-black text-2xl mb-4">04</span>
              <h3 className="text-xl font-bold text-brand-black mb-2">Distribute</h3>
              <p className="text-gray-600 text-sm">CBG is dispatched, while leftover slurry returns to farms as bio-fertiliser.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-7xl mx-auto px-6 md:px-12 py-20 reveal-elem">
        <span className="text-brand-flame font-bold tracking-widest uppercase mb-2 text-sm">Where we operate</span>
        <h2 className="text-3xl md:text-5xl font-black text-brand-black mb-12">Plants built close to the source</h2>
        
        <div className="flex flex-col md:flex-row gap-6 w-full">
          <div className="flex flex-col w-full md:w-1/3 p-8 border border-gray-200 rounded-2xl bg-brand-white shadow-sm hover:-translate-y-2 transition-transform">
            <span className="text-brand-greenLight text-xs font-black uppercase tracking-widest mb-4">Operational</span>
            <h3 className="text-2xl font-bold text-brand-black mb-3">Sangli Cluster</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">Press-mud and sugarcane residue from nearby mills feed this flagship plant.</p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-bold uppercase">Capacity</span>
              <span className="text-sm font-black text-brand-greenDark">12 TPD CBG</span>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 p-8 border border-gray-200 rounded-2xl bg-brand-white shadow-sm hover:-translate-y-2 transition-transform">
            <span className="text-brand-flame text-xs font-black uppercase tracking-widest mb-4">Under Construction</span>
            <h3 className="text-2xl font-bold text-brand-black mb-3">Bathinda Facility</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">Paddy straw diversion plant supporting the region's stubble-burning reduction goals.</p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-bold uppercase">Capacity</span>
              <span className="text-sm font-black text-brand-greenDark">18 TPD CBG</span>
            </div>
          </div>
          <div className="flex flex-col w-full md:w-1/3 p-8 border border-gray-200 rounded-2xl bg-brand-white shadow-sm hover:-translate-y-2 transition-transform">
            <span className="text-gray-500 text-xs font-black uppercase tracking-widest mb-4">In Development</span>
            <h3 className="text-2xl font-bold text-brand-black mb-3">Nashik Municipal</h3>
            <p className="text-gray-600 text-sm mb-6 flex-grow">Urban food-waste-to-CBG plant developed with the local municipal corporation.</p>
            <div className="flex justify-between items-center pt-4 border-t border-gray-100">
              <span className="text-xs text-gray-400 font-bold uppercase">Capacity</span>
              <span className="text-sm font-black text-brand-greenDark">8 TPD CBG</span>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="w-full bg-[#f6f4ec] py-20 px-6 md:px-12 reveal-elem">
        <div className="max-w-4xl mx-auto flex flex-col">
          <span className="text-brand-flame font-bold tracking-widest uppercase mb-2 text-sm text-center">What we stand for</span>
          <h2 className="text-3xl md:text-4xl font-black text-brand-black mb-10 text-center">Common questions, straight answers</h2>
          
          <div className="flex flex-col divide-y divide-gray-300 border-t border-gray-300">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? -1 : index)}>
                <div className="flex justify-between items-center group">
                  <h3 className="text-lg md:text-xl font-bold text-brand-greenDark group-hover:text-brand-black transition-colors">{faq.q}</h3>
                  <Plus className={`text-brand-greenLight transition-transform duration-300 ${openFaq === index ? 'rotate-45' : ''}`} size={24} />
                </div>
                {openFaq === index && (
                  <p className="mt-4 text-gray-600 font-medium text-sm md:text-base pr-8">{faq.a}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Mini CTA */}
      <div className="w-full bg-brand-greenDark py-20 px-6 text-center reveal-elem">
        <h2 className="text-3xl md:text-5xl font-black text-brand-white mb-6">Have feedstock, land, or capital?</h2>
        <p className="text-brand-white opacity-80 mb-10 max-w-2xl mx-auto">We work with farmer collectives, municipalities, and investors to develop new CBG sites end to end.</p>
        <Link to="/contact" className="inline-flex items-center gap-2 bg-brand-flame text-brand-white px-8 py-4 rounded-full font-bold hover:bg-brand-white hover:text-brand-black transition-all shadow-xl">
          Partner With Us <ArrowRight size={20} />
        </Link>
      </div>

    </div>
  );
};

export default HomeExtra;