import { User, Phone, Building2, Mail, MapPin, MessageSquare, Send } from 'lucide-react';

const ContactForm = () => {
  return (
 <div className="w-full flex flex-col bg-brand-white p-8 md:p-10 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-gray-100">     
      <div className="text-center mb-8">
        <h2 className="text-3xl font-black text-brand-black mb-2">Send us a message</h2>
        <p className="text-gray-500 text-sm">Contact us today to discuss your requirements.</p>
      </div>

      <form className="flex flex-col gap-6" onSubmit={(e) => e.preventDefault()}>
        
        {/* Row 1 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full md:w-1/2 relative">
            <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Your Name*</label>
            <User className="absolute bottom-3 left-4 text-gray-400" size={18} />
            <input type="text" placeholder="Enter your Full Name" className="w-full bg-[#fcfcfc] border border-gray-200 focus:border-brand-greenLight rounded-xl pl-12 pr-4 py-3 outline-none transition-colors text-sm font-medium text-brand-black placeholder-gray-400" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 relative">
            <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Phone Number*</label>
            <Phone className="absolute bottom-3 left-4 text-gray-400" size={18} />
            <input type="tel" placeholder="+91 9876543210" className="w-full bg-[#fcfcfc] border border-gray-200 focus:border-brand-greenLight rounded-xl pl-12 pr-4 py-3 outline-none transition-colors text-sm font-medium text-brand-black placeholder-gray-400" />
          </div>
        </div>

        {/* Row 2 */}
        <div className="flex flex-col md:flex-row gap-6">
          <div className="flex flex-col w-full md:w-1/2 relative">
            <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Company Name*</label>
            <Building2 className="absolute bottom-3 left-4 text-gray-400" size={18} />
            <input type="text" placeholder="Your company name" className="w-full bg-[#fcfcfc] border border-gray-200 focus:border-brand-greenLight rounded-xl pl-12 pr-4 py-3 outline-none transition-colors text-sm font-medium text-brand-black placeholder-gray-400" />
          </div>
          <div className="flex flex-col w-full md:w-1/2 relative">
            <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Company Email*</label>
            <Mail className="absolute bottom-3 left-4 text-gray-400" size={18} />
            <input type="email" placeholder="email@company.com" className="w-full bg-[#fcfcfc] border border-gray-200 focus:border-brand-greenLight rounded-xl pl-12 pr-4 py-3 outline-none transition-colors text-sm font-medium text-brand-black placeholder-gray-400" />
          </div>
        </div>

        {/* Full Width Location */}
        <div className="flex flex-col w-full relative">
          <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Location*</label>
          <MapPin className="absolute bottom-3 left-4 text-gray-400" size={18} />
          <input type="text" placeholder="City, Country" className="w-full bg-[#fcfcfc] border border-gray-200 focus:border-brand-greenLight rounded-xl pl-12 pr-4 py-3 outline-none transition-colors text-sm font-medium text-brand-black placeholder-gray-400" />
        </div>

        {/* Text Area */}
        <div className="flex flex-col w-full relative">
          <label className="text-xs font-bold text-brand-black uppercase tracking-wider mb-2">Additional Information</label>
          <MessageSquare className="absolute top-9 left-4 text-gray-400" size={18} />
          <textarea rows="4" placeholder="Tell us about your project..." className="w-full bg-[#fcfcfc] border border-gray-200 focus:border-brand-greenLight rounded-xl pl-12 pr-4 py-3 outline-none transition-colors text-sm font-medium text-brand-black placeholder-gray-400 resize-none"></textarea>
        </div>

        {/* Disclaimer */}
        <div className="bg-[#fcfcfc] border border-gray-100 p-4 rounded-xl mt-2">
          <p className="text-xs text-gray-500 leading-relaxed">
            By submitting this, I agree to the <span className="text-brand-flame font-bold cursor-pointer hover:underline">privacy policy</span> and acknowledge that my information will remain confidential and secure.
          </p>
        </div>

        {/* Submit Button */}
        <button type="submit" className="w-full bg-brand-black text-brand-white font-bold text-base py-4 rounded-xl shadow-md hover:bg-brand-greenDark transition-colors flex justify-center items-center gap-2 mt-2">
          Submit Request <Send size={18} />
        </button>
        
      </form>
    </div>
  );
};

export default ContactForm;