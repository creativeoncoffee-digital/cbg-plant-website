
import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import gsap from 'gsap';
import { CheckCircle } from 'lucide-react';

const ThankYouPage = () => {
  const navigate = useNavigate();

  useEffect(() => {
    gsap.fromTo('.thank-you-elem', 
      { y: 20, opacity: 0 }, 
      { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power3.out' }
    );
  }, []);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#f4f6ef] px-6">
      <div className="max-w-md w-full bg-white rounded-[1.5rem] p-10 text-center shadow-[0_10px_40px_rgba(15,37,23,0.08)] border border-[#0f2517]/5">
        <div className="flex justify-center mb-6 thank-you-elem">
          <div className="w-16 h-16 bg-[#3c6e4b]/10 rounded-full flex items-center justify-center">
            <CheckCircle className="text-[#3c6e4b]" size={32} />
          </div>
        </div>
        
        <h1 className="text-3xl font-semibold text-[#0f2517] tracking-tight mb-4 thank-you-elem">
          Thank you!
        </h1>
        
        <p className="text-[#0f2517]/70 font-sm leading-relaxed mb-8 thank-you-elem">
          Your message has been successfully received. Our engineering team will review your inquiry and get back to you within 24 hours.
        </p>

        <button 
          onClick={() => navigate('/')}
          className="thank-you-elem w-full bg-[#0f2517] text-white py-3.5 rounded-lg font-semibold text-sm hover:bg-[#1a3d26] transition-colors duration-300"
        >
          Return to Homepage
        </button>
      </div>
    </div>
  );
};

export default ThankYouPage;
