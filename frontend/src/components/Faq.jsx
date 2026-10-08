import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Plus, Minus } from 'lucide-react';
import { faqData } from '../Data/faqData'; 

const FAQ = ({ pageCategory = 'home' }) => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);
  
  // State to track which accordion is open. Null means all closed.
  const [openIndex, setOpenIndex] = useState(null);

  // Load the correct FAQs based on the prop, default to 'home' if not found
  const faqs = faqData[pageCategory] || faqData['home'];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.faq-elem',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12 border-t border-[#0f2517]/10">
      <div ref={containerRef} className="w-full max-w-4xl mx-auto flex flex-col">
        
        {/* Header Section */}
        <div className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="faq-elem text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-5 block">
            Got Questions?
          </span>
          <h2 className="faq-elem text-4xl md:text-5xl font-semibold text-[#0f2517] leading-[1.1] tracking-tight">
            Frequently Asked <span className="text-[#3c6e4b]">Questions.</span>
          </h2>
        </div>

        {/* Accordion List */}
        <div className="w-full flex flex-col border-t border-[#0f2517]/10 faq-elem">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;

            return (
              <div 
                key={index} 
                className="w-full border-b border-[#0f2517]/10 group"
              >
                {/* Clickable Question Header */}
                <button
                  onClick={() => toggleAccordion(index)}
                  className="w-full flex items-center justify-between py-6 md:py-8 text-left focus:outline-none"
                >
                  <h3 className={`text-xl md:text-xl font-semibold pr-8 transition-colors duration-300 ${
                    isOpen ? 'text-[#3c6e4b]' : 'text-[#0f2517] group-hover:text-[#3c6e4b]'
                  }`}>
                    {faq.question}
                  </h3>
                  
                  {/* Icon Indicator */}
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${
                    isOpen 
                      ? 'bg-[#8dca85] text-[#0f2517] rotate-180' 
                      : 'bg-[#f4f6ef] text-[#0f2517] group-hover:bg-[#0f2517] group-hover:text-[#d4ff00]'
                  }`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>

                {/* Animated Answer Body */}
                <div 
                  className={`grid transition-all duration-500 ease-in-out ${
                    isOpen ? 'grid-rows-[1fr] opacity-100 mb-8' : 'grid-rows-[0fr] opacity-0 mb-0'
                  }`}
                >
                  <div className="overflow-hidden">
                    <p className="text-[#0f2517]/75 text-base md:text-lg leading-relaxed font-medium pr-4 md:pr-16">
                      {faq.answer}
                    </p>
                  </div>
                </div>
                
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default FAQ;