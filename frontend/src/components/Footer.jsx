import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa';
import Logo from '../assets/Logo.png';

const Footer = () => {
  return (
    <footer className="w-full bg-brand-black  pt-20 md:pt-10 pb-8 px-6 md:px-12 flex flex-col relative z-10">
      
      {/* 1. TOP SECTION: Massive CTA */}
      {/* <div className="w-full max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-end gap-10 mb-20 md:mb-24">
        
        <div className="flex flex-col">
          <span className="text-brand-neon font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
            Initiate Project
          </span>
          <h2 className="text-5xl md:text-[5.5rem] font-black text-brand-white tracking-tight leading-[0.95] uppercase">
            Let's build <br />
            <span className="text-transparent [-webkit-text-stroke:1px_#d4ff00]">the future.</span>
          </h2>
        </div>
        
        <Link 
          to="/contact" 
          className="group flex items-center gap-6 border-b border-white/20 pb-4 hover:border-brand-neon transition-colors duration-500 w-full md:w-auto justify-between md:justify-start"
        >
          <span className="text-xl md:text-2xl font-bold text-brand-white group-hover:text-brand-neon transition-colors">
            Start the conversation
          </span>
          <div className="w-12 h-12 rounded-sm border border-white/20 flex items-center justify-center group-hover:bg-brand-neon group-hover:border-brand-neon transition-all duration-500 group-hover:shadow-[0_0_20px_rgba(212,255,0,0.3)] bg-brand-surface/50">
            <ArrowUpRight className="text-brand-white group-hover:text-brand-black transition-colors" size={24} />
          </div>
        </Link>
      </div> */}

      {/* 2. MIDDLE SECTION: Logo & Grid */}
      <div className="w-full max-w-7xl mx-auto border-t border-white/10 pt-16 mb-16 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">
        
        {/* Logo & Bio (Spans 5 Columns) */}
        <div className="col-span-1 md:col-span-5 flex flex-col pr-0 md:pr-16">
          
          {/* ========================================== */}
          {/* 🔴 DROP YOUR IMAGE LOGO HERE               */}
          {/* ========================================== */}
          <Link to="/" className="mb-8 inline-block w-fit">
            <img 
              src={Logo} 
              alt="Company Logo" 
              className="h-12 md:h-16 w-auto object-contain"
              // Fallback text just in case the image path is broken temporarily
              onError={(e) => {
                e.target.style.display = 'none';
                e.target.nextSibling.style.display = 'block';
              }}
            />
            {/* Fallback Text Logo (Hidden by default, shows if image fails) */}
            <span style={{ display: 'none' }} className="text-3xl md:text-4xl font-black text-brand-white tracking-widest uppercase">
              Ryvedra<span className="text-brand-neon">CBG</span>
            </span>
          </Link>
          {/* ========================================== */}

          <p className="text-brand-gray text-sm md:text-base font-medium leading-relaxed max-w-md">
            Leading the transition to sustainable energy through advanced Compressed Biogas solutions. We design, engineer, and operate the infrastructure of tomorrow.
          </p>
        </div>

        {/* Navigation Links (Spans 3 Columns) */}
        <div className="col-span-1 md:col-span-3 flex flex-col">
          <span className="text-brand-white/30 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
            Navigation
          </span>
          <ul className="flex flex-col gap-4">
            {[
              { name: 'Home', path: '/' },
              { name: 'About Us', path: '/about' },
              { name: 'Our CBG Plant', path: '/cbg' },
              { name: 'Latest News', path: '/blogs' },
              { name: 'Contact', path: '/contact' }
            ].map((item, i) => (
              <li key={i}>
                <Link to={item.path} className="text-brand-white font-bold text-sm md:text-base hover:text-brand-neon transition-colors flex items-center gap-3 group w-fit">
                  <span className="w-0 group-hover:w-4 h-[2px] bg-brand-neon transition-all duration-300 ease-out"></span>
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact Information (Spans 4 Columns) */}
        <div className="col-span-1 md:col-span-4 flex flex-col">
          <span className="text-brand-white/30 font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
            Headquarters
          </span>
          <address className="not-italic text-brand-gray text-sm md:text-base font-medium leading-relaxed mb-6">
            Sector 27 Industrial Area,<br />
            Faridabad, Haryana 121003<br />
            India
          </address>
          <div className="flex flex-col gap-2">
            <a href="mailto:projects@recbg.com" className="text-brand-white font-bold text-sm md:text-base hover:text-brand-neon transition-colors w-fit">
              projects@RyvedraCBG.com
            </a>
            <a href="tel:+919876543210" className="text-brand-white font-bold text-sm md:text-base hover:text-brand-neon transition-colors w-fit">
              +91 98765 43210
            </a>
          </div>
        </div>

      </div>

      {/* 3. BOTTOM SECTION: Copyright & Socials */}
      <div className="w-full max-w-7xl mx-auto flex flex-col-reverse md:flex-row justify-between items-center gap-6 border-t border-white/10 pt-8">
        
        <p className="text-brand-gray text-[10px] md:text-xs font-bold uppercase tracking-[0.15em]">
          &copy; {new Date().getFullYear()} EcoCBG. All rights reserved.
        </p>
        
        {/* Social Icons mapped dynamically */}
        <div className="flex items-center gap-3">
          {[FaFacebook, FaTwitter, FaLinkedin, FaInstagram].map((Icon, i) => (
            <a 
              key={i} 
              href="#" 
              className="w-10 h-10 rounded-sm border border-white/10 flex items-center justify-center text-brand-gray hover:text-brand-black hover:bg-brand-neon hover:border-brand-neon transition-all duration-300 shadow-[0_0_0_rgba(212,255,0,0)] hover:shadow-[0_0_15px_rgba(212,255,0,0.3)]"
            >
              <Icon size={16} />
            </a>
          ))}
        </div>

      </div>

    </footer>
  );
};

export default Footer;