import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowRight, Calendar, Clock } from 'lucide-react';

const blogData = [
  {
    id: 1,
    title: "The Future of Bio-CNG in India's Energy Matrix",
    excerpt: "Exploring the governmental push and technological leaps making Compressed Biogas a viable alternative to fossil fuels at an industrial scale.",
    category: "Policy",
    date: "Oct 12, 2026",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 2,
    title: "Optimizing Anaerobic Digestion for Maximum Yield",
    excerpt: "A deep dive into our proprietary membrane separation techniques and temperature control systems designed for commercial CBG plants.",
    category: "Engineering",
    date: "Sep 28, 2026",
    readTime: "8 min read",
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 3,
    title: "Closing the Loop: Bio-Fertilizer Offtake Strategies",
    excerpt: "How returning nutrient-rich byproducts to rural agrarian economies creates a truly circular and accountable waste management system.",
    category: "Sustainability",
    date: "Sep 15, 2026",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 4,
    title: "EcoCBG Secures New Feedstock Partnership",
    excerpt: "Our recent strategic alliance with regional farming cooperatives guarantees a year-round organic supply for our flagship facility.",
    category: "Company",
    date: "Aug 30, 2026",
    readTime: "3 min read",
    image: "https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 5,
    title: "Navigating the GOBARdhan Portal Integration",
    excerpt: "A step-by-step technical guide to compliance, digital governance, and subsidy tracking for bio-energy producers.",
    category: "Policy",
    date: "Aug 12, 2026",
    readTime: "6 min read",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop"
  },
  {
    id: 6,
    title: "Next-Gen Membrane Separation Technology",
    excerpt: "How advancements in gas purification are pushing methane concentration levels past 96%, ensuring pipeline-grade commercial fuel.",
    category: "Engineering",
    date: "Jul 22, 2026",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1518173946687-a4c8892bbd9f?q=80&w=800&auto=format&fit=crop"
  }
];

const categories = ["All", ...new Set(blogData.map(blog => blog.category))];

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  const filteredBlogs = activeCategory === "All" 
    ? blogData 
    : blogData.filter(blog => blog.category === activeCategory);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-header-elem',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.1 }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  useEffect(() => {
    if (gridRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.blog-card',
          { y: 30, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );
      }, gridRef);
      return () => ctx.revert();
    }
  }, [activeCategory]);

  return (
    <div className="w-full min-h-screen bg-[#fcfcfc] pt-32 pb-24 px-6 md:px-12 flex flex-col items-center">
      
      <div className="w-full max-w-7xl flex flex-col">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col items-center text-center mb-16 md:mb-20">
          <span className="blog-header-elem text-[#3c6e4b] font-bold tracking-[0.2em] uppercase text-xs mb-4">
            Knowledge Hub
          </span>
          <h1 className="blog-header-elem text-4xl md:text-5xl font-semibold text-[#0f2517] tracking-tight leading-[1.1] mb-6">
            Industry <span className="text-[#3c6e4b]">Intelligence.</span>
          </h1>
          <p className="blog-header-elem text-[#0f2517]/70 text-base md:text-md font-medium max-w-2xl leading-relaxed">
            Stay updated with our latest engineering breakthroughs, policy analysis, and strategic milestones in India's rapidly evolving bio-energy landscape.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 mb-16">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 shadow-sm ${
                activeCategory === category
                  ? 'bg-[#3c6e4b] text-white border border-[#3c6e4b]'
                  : 'bg-white text-[#0f2517]/70 border border-[#0f2517]/10 hover:border-[#3c6e4b]/40 hover:text-[#0f2517]'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10">
          {filteredBlogs.map((blog) => (
            <Link 
              to={`/blogs/${blog.id}`} 
              key={blog.id}
              className="blog-card group flex flex-col bg-white rounded-[2rem] overflow-hidden border border-[#0f2517]/5 shadow-[0_4px_20px_rgba(15,37,23,0.03)] hover:shadow-[0_10px_40px_rgba(15,37,23,0.08)] hover:-translate-y-1 transition-all duration-500"
            >
              {/* Image Container with Rounded Edges inside Card */}
              <div className="relative w-full h-60 overflow-hidden p-2 pb-0">
                <div className="w-full h-full rounded-[1.5rem] overflow-hidden relative">
                  <img 
                    src={blog.image} 
                    alt={blog.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                  />
                  {/* Floating Category Badge */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-sm px-2 py-1 rounded-xl shadow-sm">
                    <span className="text-[#0f2517] font-semibold text-[10px] uppercase tracking-widest">
                      {blog.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-6">
                
                {/* Meta Info */}
                <div className="flex items-center gap-4 text-[#0f2517]/50 text-xs font-bold uppercase tracking-wide mb-5">
                  <div className="flex items-center gap-1.5">
                    <Calendar size={14} className="text-[#3c6e4b]" />
                    <span>{blog.date}</span>
                  </div>
                  <div className="w-1 h-1 rounded-full bg-[#0f2517]/20"></div>
                  <div className="flex items-center gap-1.5">
                    <Clock size={14} className="text-[#3c6e4b]" />
                    <span>{blog.readTime}</span>
                  </div>
                </div>

                <h3 className="text-xl md:text-xl font-semibold text-[#0f2517] leading-snug mb-2 group-hover:text-[#3c6e4b] transition-colors duration-300">
                  {blog.title}
                </h3>
                
                <p className="text-[#0f2517]/70 text-sm md:text-base font-medium leading-relaxed mb-6">
                  {blog.excerpt}
                </p>
                
                {/* Read More Link (Pushed to bottom) */}
                <div className="mt-auto flex items-center gap-2 text-[#3c6e4b] font-bold text-sm tracking-widest uppercase group-hover:text-[#0f2517] transition-colors">
                  Read Article
                  <ArrowRight size={16} className="transform group-hover:translate-x-1 transition-transform" />
                </div>

              </div>
            </Link>
          ))}
        </div>

        {/* Empty State Fallback */}
        {filteredBlogs.length === 0 && (
          <div className="w-full py-24 flex flex-col items-center justify-center text-center bg-white rounded-[2rem] border border-[#0f2517]/5 border-dashed">
            <span className="text-[#0f2517]/70 font-medium text-lg">No insights found in this category.</span>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-6 bg-[#0f2517] text-[#d4ff00] px-6 py-3 rounded-xl font-bold uppercase tracking-widest text-xs hover:bg-[#3c6e4b] hover:text-white transition-all duration-300 shadow-md"
            >
              Clear Filter
            </button>
          </div>
        )}

      </div>
    </div>
  );
};

export default BlogsPage;