import { Phone, MessageSquare, Globe, MapPin } from 'lucide-react';

const ContactHero = () => {
  return (
    // FIX: Removed md:w-1/2 so it fully fills its parent column
    <div className="w-full flex flex-col pr-0 md:pr-10 mt-10 md:mt-0">
      

      <h1 className="text-4xl md:text-5xl font-black text-brand-black leading-tight mb-6">
        Partner with <span className="text-brand-greenDark">EcoCBG</span> for a Sustainable Future.
      </h1>
      
      <p className="text-brand-black opacity-75 text-base md:text-lg mb-12 font-medium max-w-md">
        Let's power your business with clean, efficient, and future-ready energy solutions. Reach out today to discuss your industrial requirements.
      </p>

      {/* 2x2 Contact Info using flex wrap */}
      <div className="flex flex-col md:flex-row md:flex-wrap gap-y-10 gap-x-4 w-full">
        
        {/* FIX: Changed md:w-[calc...] to md:w-[45%] to prevent squishing */}
        <div className="flex flex-row items-start gap-4 w-full md:w-[45%]">
          <div className="w-12 h-12 rounded-full bg-[#f6f4ec] flex items-center justify-center shrink-0">
            <Phone className="text-brand-greenDark" size={20} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-brand-black mb-1">Call Us</h3>
            <span className="text-sm text-gray-500 font-medium">+91 98765 43210</span>
          </div>
        </div>

        <div className="flex flex-row items-start gap-4 w-full md:w-[45%]">
          <div className="w-12 h-12 rounded-full bg-[#f6f4ec] flex items-center justify-center shrink-0">
            <MessageSquare className="text-brand-greenDark" size={20} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-brand-black mb-1">Fast Support</h3>
            <span className="text-sm text-gray-500 font-medium">Quick response for all inquiries</span>
          </div>
        </div>

        <div className="flex flex-row items-start gap-4 w-full md:w-[45%]">
          <div className="w-12 h-12 rounded-full bg-[#f6f4ec] flex items-center justify-center shrink-0">
            <Globe className="text-brand-greenDark" size={20} />
          </div>
          <div className="flex flex-col">
            <h3 className="font-bold text-brand-black mb-1">Global Reach</h3>
            <span className="text-sm text-gray-500 font-medium">Serving industries worldwide</span>
          </div>
        </div>

        <div className="flex flex-row items-start gap-4 w-full md:w-[45%]">
          <div className="w-12 h-12 rounded-full bg-[#f6f4ec] flex items-center justify-center shrink-0">
            <MapPin className="text-brand-greenDark" size={20} />
          </div>
          <div className="flex flex-col break-words">
            <h3 className="font-bold text-brand-black mb-1">Headquarters</h3>
            <span className="text-sm text-gray-500 font-medium leading-relaxed">Sector 27 Industrial Area,<br/>Faridabad, Haryana</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ContactHero;