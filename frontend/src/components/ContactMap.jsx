import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { ChevronDown, Loader2 } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactMap = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.15 });
  const containerRef = useRef(null);
  const navigate = useNavigate();

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Use your actual backend URL here when deployed
      const response = await fetch('http://localhost:5000/api/contact/submit', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        navigate('/thank-you');
      } else {
        alert('Failed to send message. Please try again.');
      }
    } catch (error) {
      console.error('Submission Error:', error);
      alert('An error occurred. Please check your connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  useEffect(() => {
    if (inView) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.contact-elem',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, stagger: 0.1, ease: 'power3.out' }
        );
      }, containerRef);
      return () => ctx.revert();
    }
  }, [inView]);

  return (
    <section ref={ref} className="w-full bg-white py-24 md:py-32 px-6 md:px-12">
      <div ref={containerRef} className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-16 lg:gap-24">
        
        {/* LEFT SIDE: Info + Form Stack */}
        <div className="w-full lg:w-5/12 flex flex-col">
          
          {/* Header Info */}
          <div className="contact-elem flex flex-col mb-12">
            <h2 className="text-3xl md:text-5xl font-semibold text-[#0f2517] leading-[1] mb-4 tracking-tight">
              How can we help?
            </h2>
            <p className="text-[#0f2517]/70 text-base font-medium mb-8">
              Looking for support or project consulting? Connect with our engineering team today.
            </p>
            
            {/* Quick Contact Links */}
            <div className="flex flex-col gap-3 mb-2">
              <div className="flex items-center gap-3">
                <span className="text-xl">📍</span>
                <span className="text-[#3c6e4b] font-bold text-sm">Ryverda Energies Private Limited<br />
                R9HR+3GX, Karmaha, Gorakhpur, Amwa, Uttar Pradesh 273013</span>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">📞</span>
                <a href="tel:+917002134878" className="text-[#3c6e4b] font-bold text-sm hover:text-[#0f2517] transition-colors">
                  +91 70021 34878
                </a>
              </div>
              <div className="flex items-center gap-3">
                <span className="text-xl">✉️</span>
                <a href="mailto:projects@RyvedraCBG.com" className="text-[#3c6e4b] font-bold text-sm hover:text-[#0f2517] transition-colors">
                  ryverdaenergy@gmail.com
                </a>
              </div>
            </div>
          </div>
          
          {/* Minimalist Form */}
          <form onSubmit={handleSubmit} className="contact-elem flex flex-col gap-6 w-full">
            
            {/* Name Row */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[#0f2517] text-xs font-bold">First name</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder="First name" 
                  required
                  className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[#0f2517] text-xs font-bold">Last name</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder="Last name" 
                  required
                  className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
                />
              </div>
            </div>

            {/* Email Row */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0f2517] text-xs font-bold">Work email</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="you@company.com" 
                required
                className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 text-sm shadow-sm"
              />
            </div>

            {/* Phone Row */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0f2517] text-xs font-bold">Phone number</label>
              <div className="flex w-full rounded-lg border border-[#0f2517]/10 focus-within:border-[#3c6e4b] focus-within:ring-1 focus-within:ring-[#3c6e4b] transition-all duration-300 shadow-sm overflow-hidden bg-white">
                <span className="flex items-center px-4 bg-[#f8f9f6] text-[#0f2517]/60 font-medium text-sm border-r border-[#0f2517]/10">
                  IN
                </span>
                <input 
                  type="tel" 
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="+91 00000 00000" 
                  required
                  className="w-full bg-transparent text-[#0f2517] px-4 py-3 focus:outline-none font-medium placeholder:text-[#0f2517]/30 text-sm"
                />
              </div>
            </div>

            {/* Interest Dropdown */}
            <div className="flex flex-col gap-2">
              <label className="text-[#0f2517] text-xs font-bold">What are you interested in?</label>
              <div className="relative w-full">
                <select 
                  name="interest"
                  value={formData.interest}
                  onChange={handleChange}
                  required
                  className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium appearance-none cursor-pointer text-sm shadow-sm"
                >
                  <option value="" disabled className="text-[#0f2517]/40">Select an option...</option>
                  <option value="Bio-CBG Plant Engineering">Bio-CBG Plant Engineering</option>
                  <option value="Wastewater Treatment (STP/ETP)">Wastewater Treatment (STP/ETP)</option>
                  <option value="Solar Energy Solutions">Solar Energy Solutions</option>
                  <option value="General Inquiry">General Inquiry</option>
                </select>
                <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 text-[#0f2517]/40 pointer-events-none" size={16} />
              </div>
            </div>

            {/* Message Area */}
            <div className="flex flex-col gap-2 mb-2">
              <label className="text-[#0f2517] text-xs font-bold">Message</label>
              <textarea 
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="Is there anything particular you need help with?" 
                rows="4"
                required
                className="w-full bg-white text-[#0f2517] px-4 py-3 rounded-lg border border-[#0f2517]/10 focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] focus:outline-none transition-all duration-300 font-medium placeholder:text-[#0f2517]/30 resize-none text-sm shadow-sm"
              ></textarea>
            </div>
            
            <button 
              type="submit"
              disabled={isSubmitting}
              className="w-full bg-white text-[#0f2517] border border-[#0f2517]/10 py-3.5 rounded-lg font-bold text-sm hover:border-[#0f2517] hover:bg-[#f4f6ef] transition-all duration-300 shadow-sm flex justify-center items-center gap-2"
            >
              {isSubmitting ? <><Loader2 className="animate-spin" size={18} /> Sending...</> : 'Send message'}
            </button>
          </form>
        </div>

        {/* RIGHT SIDE: Large Clean Map */}
        <div className="w-full lg:w-7/12 contact-elem">
         <div className="w-full h-full min-h-[400px] lg:min-h-full rounded-2xl overflow-hidden bg-[#f4f6ef] relative shadow-lg border border-[#0f2517]/5">
            {/* The Map */}
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3837343592827!2d83.3913544!3d26.8277446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145001861b2cb%3A0xd03d2698fac91ce!2sRyverda%20Energies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1794570524220!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0 opacity-80 mix-blend-multiply"
              style={{ border: 0 }}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Headquarters Location"
            ></iframe>
          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;