import { useEffect, useRef, useState } from 'react';
import { useInView } from 'react-intersection-observer';
import gsap from 'gsap';
import { Loader2, Phone, Mail, MapPin, Clock } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const ContactMap = () => {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.1 });
  const formRef = useRef(null);
  const navigate = useNavigate();
 const backendUrl = (
  import.meta.env.VITE_BACKEND_URL || "https://cbg-plant-website-le34.vercel.app"
).replace(/\/$/, "");

  // Form State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    interest: 'General', // Default selected inquiry type
    message: '',
    subscribe: false
  });

  const inquiryTypes = ['CBG Plant', 'Wastewater', 'Solar', 'General'];

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({ 
      ...formData, 
      [name]: type === 'checkbox' ? checked : value 
    });
  };

  const handlePillClick = (type) => {
    setFormData({ ...formData, interest: type });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`${backendUrl}/api/contact/submit`, {
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
      gsap.fromTo(formRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: 'power3.out' }
      );
    }
  }, [inView]);

  // Reusable pill-shaped input styles
  const inputStyle = "w-full bg-transparent border border-gray-200 rounded-full px-5 py-3 text-sm text-[#0f2517] focus:outline-none focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] transition-all placeholder:text-gray-400";

  return (
    <section ref={ref} className="relative w-full min-h-screen py-24 px-4 flex items-center justify-center overflow-hidden bg-[#0f2517]">
      
      {/* Background Image with Dark Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&w=2071&auto=format&fit=crop" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60 grayscale-[30%]"
        />
        <div className="absolute inset-0 bg-[#0f2517]/70 mix-blend-multiply"></div>
      </div>

      {/* Floating 2-Column Card */}
      <div 
        ref={formRef} 
        className="relative z-10 w-full max-w-[1100px] bg-white rounded-[2rem] p-8 md:p-12 lg:p-16 shadow-2xl flex flex-col lg:flex-row gap-12 lg:gap-25"
        style={{ opacity: 0 }}
      >
        
        {/* LEFT COLUMN: Contact Info & Map */}
        <div className="w-full lg:w-5/12 flex flex-col">
          <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2517] tracking-tight mb-3">
            Contact information
          </h2>
          <p className="text-[#0f2517]/60 text-sm leading-relaxed mb-10 pr-4">
            We help you find direction, remove friction, and keep your business moving forward—strategically and confidently.
          </p>
          
          <div className="flex flex-col gap-6 mb-10">
            <div className="flex items-center gap-4">
              <div className="text-[#0f2517]/60"><Phone size={18} /></div>
              <a href="tel:+917002134878" className="text-[#0f2517] font-semibold text-sm hover:text-[#3c6e4b] transition-colors">
                +91 70021 34878
              </a>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#0f2517]/60"><Mail size={18} /></div>
              <a href="mailto:ryverdaenergy@gmail.com" className="text-[#0f2517] font-semibold text-sm hover:text-[#3c6e4b] transition-colors">
                ryverdaenergy@gmail.com
              </a>
            </div>
            <div className="flex items-start gap-4">
              <div className="text-[#0f2517]/60 mt-0.5"><MapPin size={18} /></div>
              <span className="text-[#0f2517] font-semibold text-sm leading-relaxed">
                Ryverda Energies Private Limited<br />
                R9HR+3GX, Karmaha, Gorakhpur, <br /> Amwa, Uttar Pradesh 273013
              </span>
            </div>
            <div className="flex items-center gap-4">
              <div className="text-[#0f2517]/60"><Clock size={18} /></div>
              <span className="text-[#0f2517] font-semibold text-sm">
                Monday - Saturday, 9:00 AM - 6:00 PM
              </span>
            </div>
          </div>

          {/* Small Map Container */}
          <div className="w-full h-[220px] rounded-2xl overflow-hidden bg-gray-100 relative shadow-inner border border-gray-200">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3560.3837343592827!2d83.3913544!3d26.8277446!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399145001861b2cb%3A0xd03d2698fac91ce!2sRyverda%20Energies%20Private%20Limited!5e0!3m2!1sen!2sin!4v1794570524220!5m2!1sen!2sin" 
              className="absolute inset-0 w-full h-full border-0"
              style={{ border: 0 }}
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Headquarters Location"
            ></iframe>
          </div>
        </div>

        {/* RIGHT COLUMN: Modern Form */}
        <div className="w-full lg:w-6/12 flex flex-col">
          <div className="mb-8 mt-2 lg:mt-0">
            <h2 className="text-2xl md:text-3xl font-semibold text-[#0f2517] mb-2 tracking-tight">
              Tell Us What You Need
            </h2>
            <p className="text-gray-500 text-sm">
              Our team is ready to assist you with every detail, big or small.
            </p>
          </div>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            
            {/* Row 1: Name */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} placeholder="First Name" required className={inputStyle} />
              <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} placeholder="Last Name" required className={inputStyle} />
            </div>

            {/* Row 2: Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email Address" required className={inputStyle} />
              <input type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone Number" required className={inputStyle} />
            </div>

            {/* Row 3: Inquiry Type (Pills) */}
            <div className="mt-1">
              <label className="block text-sm text-[#0f2517] font-semibold mb-3 ml-2">Type of Inquiry</label>
              <div className="flex flex-wrap gap-2">
                {inquiryTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => handlePillClick(type)}
                    className={`px-5 py-2 rounded-full text-xs font-semibold transition-all duration-300 border ${
                      formData.interest === type 
                        ? 'border-[#0f2517] bg-[#0f2517] text-white shadow-md' 
                        : 'border-gray-200 text-gray-500 hover:border-gray-400 hover:text-[#0f2517]'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </div>

            {/* Row 4: Message */}
            <div className="mt-1">
              <textarea 
                name="message" 
                value={formData.message} 
                onChange={handleChange} 
                placeholder="Message" 
                rows="4" 
                required 
                className="w-full bg-transparent border border-gray-200 rounded-[1.5rem] px-5 py-4 text-sm text-[#0f2517] focus:outline-none focus:border-[#3c6e4b] focus:ring-1 focus:ring-[#3c6e4b] transition-all placeholder:text-gray-400 resize-none"
              ></textarea>
            </div>

            {/* Row 5: Checkbox */}
            <div className="flex items-center gap-3 mt-1 mb-2">
              <input 
                type="checkbox" 
                name="subscribe"
                id="subscribe"
                checked={formData.subscribe}
                onChange={handleChange}
                className="w-4 h-4 rounded border-gray-300 text-[#0f2517] focus:ring-[#0f2517] cursor-pointer"
              />
              <label htmlFor="subscribe" className="text-xs font-medium text-gray-500 cursor-pointer select-none">
                I'd like to receive exclusive offers and updates
              </label>
            </div>

            {/* Submit Button */}
            <button 
              type="submit" 
              disabled={isSubmitting}
              className="w-full bg-[#f4f6ef] text-[#0f2517] border border-[#0f2517]/10 hover:bg-[#e6ebdf] hover:border-[#0f2517]/20 rounded-full py-4 text-sm font-bold transition-all flex items-center justify-center gap-2 mt-2"
            >
              {isSubmitting ? <><Loader2 className="animate-spin" size={16} /> Submitting...</> : 'Submit'}
            </button>

          </form>
        </div>

      </div>
    </section>
  );
};

export default ContactMap;