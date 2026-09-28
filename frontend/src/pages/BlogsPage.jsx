import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import gsap from 'gsap';
import { ArrowUpRight, Calendar, Clock } from 'lucide-react';

// 1. BLOG DATA (Stored in the same file as requested)
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

// Extract unique categories from the data
const categories = ["All", ...new Set(blogData.map(blog => blog.category))];

const BlogsPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const headerRef = useRef(null);
  const gridRef = useRef(null);

  // Filter blogs based on selected category
  const filteredBlogs = activeCategory === "All" 
    ? blogData 
    : blogData.filter(blog => blog.category === activeCategory);

  // Initial Page Entrance Animation
  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo('.blog-header-elem',
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.15, ease: 'power3.out', delay: 0.2 }
      );
    }, headerRef);
    return () => ctx.revert();
  }, []);

  // Re-animate the grid every time the category changes
  useEffect(() => {
    if (gridRef.current) {
      const ctx = gsap.context(() => {
        gsap.fromTo('.blog-card',
          { y: 30, opacity: 0, scale: 0.98 },
          { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.1, ease: 'power2.out' }
        );
      }, gridRef);
      return () => ctx.revert();
    }
  }, [activeCategory]);

  return (
    <div className="w-full min-h-screen bg-brand-black pt-32 pb-24 px-6 md:px-12 flex flex-col relative overflow-hidden">
      
      {/* Background Aesthetic Number */}
      <div className="absolute top-20 right-0 text-[18rem] font-black text-transparent [-webkit-text-stroke:2px_rgba(255,255,255,0.02)] pointer-events-none select-none z-0 overflow-hidden leading-none translate-x-1/4">
        INSIGHTS
      </div>

      <div className="w-full max-w-7xl mx-auto relative z-10 flex flex-col">
        
        {/* Header Section */}
        <div ref={headerRef} className="flex flex-col mb-16 md:mb-24">
          <span className="blog-header-elem text-brand-neon font-bold tracking-[0.2em] uppercase text-xs mb-6 block">
            Knowledge Hub
          </span>
          <h1 className="blog-header-elem text-3xl md:text-6xl font-black text-brand-white tracking-tight uppercase leading-tight mb-8">
            Industry <br className="hidden md:block"/>
            <span className="text-brand-neon">Intelligence.</span>
          </h1>
          <p className="blog-header-elem text-brand-gray text-base md:text-lg font-medium max-w-2xl leading-relaxed">
            Stay updated with our latest engineering breakthroughs, policy analysis, and strategic milestones in India's rapidly evolving bio-energy landscape.
          </p>
        </div>

        {/* Category Filter Row */}
        <div className="flex flex-wrap items-center gap-3 md:gap-4 mb-12 border-b border-white/10 pb-8">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-2.5 rounded-full text-xs font-bold tracking-widest uppercase transition-all duration-300 border ${
                activeCategory === category
                  ? 'bg-brand-neon text-brand-black border-brand-neon shadow-[0_0_15px_rgba(212,255,0,0.3)]'
                  : 'bg-transparent text-brand-gray border-white/10 hover:border-brand-neon hover:text-brand-white'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Blog Grid */}
        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {filteredBlogs.map((blog) => (
            <Link 
              to={`/blogs/${blog.id}`} 
              key={blog.id}
              className="blog-card group flex flex-col border border-white/10 bg-brand-surface/30 overflow-hidden hover:border-brand-neon/60 transition-colors duration-500 min-h-[500px]"
            >
              {/* Image Container */}
              <div className="relative w-full h-64 overflow-hidden bg-brand-black">
                <img 
                  src={blog.image} 
                  alt={blog.title} 
                  className="w-full h-full object-cover grayscale-[80%] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-brand-black/20 group-hover:bg-transparent transition-colors duration-500"></div>
                
                {/* Floating Category Badge */}
                <div className="absolute top-4 left-4 bg-brand-black/80 backdrop-blur-sm border border-white/10 px-4 py-1.5 rounded-sm">
                  <span className="text-brand-neon font-bold text-[10px] uppercase tracking-widest">
                    {blog.category}
                  </span>
                </div>
              </div>

              {/* Content Container */}
              <div className="flex flex-col flex-grow p-8 md:p-10">
                
                <div className="flex items-center justify-between mb-6">
                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-brand-gray/70 text-xs font-bold uppercase tracking-wide">
                    <div className="flex items-center gap-1.5">
                      <Calendar size={14} />
                      <span>{blog.date}</span>
                    </div>
                    <div className="w-1 h-1 rounded-full bg-brand-neon/50"></div>
                    <div className="flex items-center gap-1.5">
                      <Clock size={14} />
                      <span>{blog.readTime}</span>
                    </div>
                  </div>
                  
                  {/* Hover Arrow */}
                  <ArrowUpRight className="text-brand-gray group-hover:text-brand-neon transition-colors duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
                </div>

                <h3 className="text-xl font-black text-brand-white leading-snug mb-4  transition-colors duration-300 line-clamp-3">
                  {blog.title}
                </h3>
                
                <p className="text-brand-gray text-sm md:text-base font-medium leading-relaxed mt-auto line-clamp-3 border-l-2 border-brand-neon/30 group-hover:border-brand-neon pl-4 transition-colors duration-300">
                  {blog.excerpt}
                </p>
                
              </div>
            </Link>
          ))}
        </div>

        {/* Empty State Fallback (Just in case) */}
        {filteredBlogs.length === 0 && (
          <div className="w-full py-20 flex flex-col items-center justify-center text-center border border-white/10 border-dashed">
            <span className="text-brand-gray font-medium text-lg">No insights found in this category.</span>
            <button 
              onClick={() => setActiveCategory("All")}
              className="mt-6 text-brand-neon font-bold tracking-widest uppercase text-sm hover:text-brand-white transition-colors"
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