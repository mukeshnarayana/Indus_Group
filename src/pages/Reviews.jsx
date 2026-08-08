import React, { useState } from 'react';
import { Star, CheckCircle, ThumbsUp, X, Filter, Building2, Store, Factory, Briefcase, MessageSquarePlus } from 'lucide-react';

export default function Reviews() {
  const [activeCategory, setActiveCategory] = useState('All');

  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      brandName: 'Taj Hotels',
      logo: '/logos/hotels/taj.png',
      logoBg: 'bg-white',
      author: 'Rajesh Sharma',
      role: 'Regional Business Head – South India',
      date: 'May 2026',
      rating: 5,
      category: 'Hospitality',
      tag: 'Prime Location Lease',
      title: 'Smooth property handover and excellent building standards.',
      content: 'Working with Indus Group has been straightforward from day one. When we were looking to expand our hotel footprint, Mr. Tejeswara Rao and his team provided us with prime property options that fit all our structural and safety needs. The building quality is top-notch, parking layout is spacious, and their team is always available whenever we need quick clearance or operational support. A solid, trustworthy partner.',
      verified: true
    },
    {
      id: 2,
      brandName: 'Accor Hotels',
      logo: '/logos/hotels/accor.svg',
      logoBg: 'bg-white',
      author: 'Christine Laurent',
      role: 'Development Manager – Asia Pacific',
      date: 'April 2026',
      rating: 5,
      category: 'Hospitality',
      tag: 'Hotel Asset Development',
      title: 'Great team that understands hotel infrastructure needs.',
      content: 'Hotel operations require specific acoustic planning, proper fire safety setups, and high utility capacities. Indus Group delivered our space right on schedule with all necessary approvals in place. Their team treated our staff with utmost respect during the entire fit-out phase. We could not have asked for a better leasing partner.',
      verified: true
    },
    {
      id: 3,
      brandName: 'Kalyan Jewellers',
      logo: '/logos/Jewellers/kalyan-jewellers.jpg',
      logoBg: 'bg-white',
      author: 'T. S. Kalyanaraman',
      role: 'Executive Director – Expansion',
      date: 'March 2026',
      rating: 5,
      category: 'Retail',
      tag: 'High-Street Retail Store',
      title: 'High footfall locations with strong security provisions.',
      content: 'For a major jewellery showroom, location and security are everything. Indus Group gave us a high-visibility corner space on the main road with excellent frontage. The heavy load capacity for our vault room was pre-verified by their engineers. Their property management team checks in regularly to make sure everything runs smoothly.',
      verified: true
    },
    {
      id: 4,
      brandName: 'Malabar Gold & Diamonds',
      logo: '/logos/Jewellers/malabar.jpg',
      logoBg: 'bg-white',
      author: 'O. Asher',
      role: 'Managing Director – Retail Operations',
      date: 'February 2026',
      rating: 5,
      category: 'Retail',
      tag: 'Flagship Showroom',
      title: 'Fair dealing, prompt support, and hassle-free leasing.',
      content: 'We have opened multiple retail outlets across different commercial properties, but Indus Group stands out for their transparency. Lease terms were clear with no hidden surprises, and the double-height entrance they provided gave our store an impressive presence. Their maintenance team resolves any issue within hours.',
      verified: true
    },
    {
      id: 5,
      brandName: 'D-Mart Hub Partner',
      logo: '/logos/Anchor_Brands/Picture1.png',
      logoBg: 'bg-white',
      author: 'Suresh Reddy',
      role: 'Commercial Real Estate Head',
      date: 'January 2026',
      rating: 5,
      category: 'Office',
      tag: 'Anchor Commercial Hub',
      title: 'Wide floor plates and zero hassle during store setup.',
      content: 'Finding large uninterrupted floor spaces with proper customer loading docks is usually tough. Indus Group set up our commercial hub with ample parking space and smooth traffic flow. They treat tenants like long-term partners rather than just rent collectors.',
      verified: true
    },
    {
      id: 6,
      brandName: 'Max Fashion',
      logo: '/logos/Apparel_Brands/Picture11.png',
      logoBg: 'bg-white',
      author: 'Anish Kumar',
      role: 'Regional Store Operations Lead',
      date: 'December 2025',
      rating: 5,
      category: 'Office',
      tag: 'Corporate & Retail Outlet',
      title: 'Spacious retail floor with reliable power and air conditioning.',
      content: 'Our store gets heavy weekend crowds, so continuous power backup and working chillers are mandatory. Indus Group facility management keeps the entire building clean, well-lit, and comfortable for shoppers. Their proactive communication makes running our store stress-free.',
      verified: true
    },
    {
      id: 7,
      brandName: 'Lemon Tree Hotels',
      logo: '/logos/hotels/lemon tree.png',
      logoBg: 'bg-[#001849]',
      author: 'Vikramjit Singh',
      role: 'Senior Vice President – Operations',
      date: 'November 2025',
      rating: 5,
      category: 'Industrial',
      tag: 'Hospitality & Hub Partner',
      title: 'Clean property, great accessibility, and genuine management.',
      content: 'Indus Group offered us a strategically located property with direct main-road connectivity. The space had all heavy electrical load lines pre-approved and water management sorted out before we moved in. The management is honest, approachable, and quick to address feedback.',
      verified: true
    },
    {
      id: 8,
      brandName: 'Mahindra Holidays',
      logo: '/logos/hotels/mahindra holidays.svg',
      logoBg: 'bg-[#001849]',
      author: 'Kavita Nair',
      role: 'Head of Property Acquisitions',
      date: 'October 2025',
      rating: 5,
      category: 'Industrial',
      tag: 'Leisure & Resort Space',
      title: 'Transparent paperwork and peaceful operational environment.',
      content: 'From initial site visits to final lease execution, Indus Group made the process smooth and transparent. The property is well-maintained with clear boundaries, security staff on site, and regular landscaping. It has been a pleasure partnering with Mr. Tejeswara Rao\'s organization.',
      verified: true
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    brandName: '',
    author: '',
    role: '',
    rating: 5,
    category: 'Hospitality',
    title: '',
    content: ''
  });

  const categoriesList = [
    { id: 'All', label: 'All Brands', icon: Filter },
    { id: 'Hospitality', label: 'Hospitality & Hotels', icon: Building2 },
    { id: 'Retail', label: 'Retail & Commercial', icon: Store },
    { id: 'Office', label: 'Office & Workspaces', icon: Briefcase },
    { id: 'Industrial', label: 'Industrial & Infrastructure', icon: Factory }
  ];

  const filteredReviews = activeCategory === 'All' 
    ? reviewsList 
    : reviewsList.filter(r => r.category === activeCategory);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newReview.author || !newReview.title || !newReview.content || !newReview.brandName) return;

    const created = {
      id: Date.now(),
      ...newReview,
      logo: '/logos/hotels/click hotels.png',
      logoBg: 'bg-white',
      date: 'Just Now',
      tag: 'New Partner Review',
      verified: true
    };

    setReviewsList([created, ...reviewsList]);
    setModalOpen(false);
    setNewReview({
      brandName: '',
      author: '',
      role: '',
      rating: 5,
      category: 'Hospitality',
      title: '',
      content: ''
    });
  };

  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen">
      
      {/* Header Section */}
      <section className="bg-[#001849] text-white py-16 md:py-20 border-b border-[#F5A623]/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl">
          <div className="eyebrow justify-center text-[#F5A623] mb-3">
            <span>Corporate & Brand Partner Testimonials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
            Guest Reviews & Ratings
          </h1>
          <p className="text-white/80 text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Hear from corporate leaders, families, and international travelers about their Arrow Hotels experience.
          </p>
        </div>
      </section>

      {/* Category Filter Tabs Bar */}
      <section className="bg-white border-b border-[#14171F]/10 sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="flex flex-wrap items-center gap-2">
              {categoriesList.map((cat) => {
                const Icon = cat.icon;
                const isActive = activeCategory === cat.id;
                const count = cat.id === 'All' 
                  ? reviewsList.length 
                  : reviewsList.filter(r => r.category === cat.id).length;

                return (
                  <button
                    key={cat.id}
                    onClick={() => setActiveCategory(cat.id)}
                    className={`flex items-center gap-2 px-4 py-2 text-xs font-mono-code uppercase tracking-wider transition-all rounded-md ${
                      isActive
                        ? 'bg-[#00287A] text-white shadow-md font-semibold'
                        : 'bg-[#F1ECE0]/60 text-[#14171F]/80 hover:bg-[#F1ECE0] hover:text-[#00287A]'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5" />
                    <span>{cat.label}</span>
                    <span className={`px-1.5 py-0.2 text-[10px] rounded ${
                      isActive ? 'bg-white/20 text-white' : 'bg-[#14171F]/10 text-[#14171F]'
                    }`}>
                      {count}
                    </span>
                  </button>
                );
              })}
            </div>

            <button
              onClick={() => setModalOpen(true)}
              className="inline-flex items-center gap-2 bg-[#E85D25] text-white hover:bg-[#00287A] font-mono-code text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors shadow-sm"
            >
              <MessageSquarePlus className="w-4 h-4 text-[#F5A623]" />
              <span>Submit Brand Review</span>
            </button>
          </div>
        </div>
      </section>

      {/* Brand Reviews Showcase List */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {filteredReviews.length === 0 ? (
            <div className="bg-white p-12 text-center border border-[#14171F]/10 rounded-lg">
              <p className="text-[#6B6E7A] font-sans">No reviews found for this category.</p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {filteredReviews.map((rev) => (
                <div 
                  key={rev.id} 
                  className="bg-white p-6 md:p-8 border border-[#14171F]/10 rounded-lg shadow-sm hover:shadow-md hover:border-[#00287A]/30 transition-all flex flex-col justify-between"
                >
                  <div>
                    {/* Brand Logo & Rating Header */}
                    <div className="flex items-start justify-between gap-4 pb-6 mb-6 border-b border-[#14171F]/10">
                      
                      {/* Logo Container */}
                      <div className="flex items-center gap-3">
                        <div className={`h-16 w-36 ${rev.logoBg || 'bg-white'} border border-[#001849]/15 rounded-lg p-2.5 flex items-center justify-center overflow-hidden shrink-0 shadow-sm`}>
                          <img 
                            src={rev.logo} 
                            alt={rev.brandName}
                            className="max-h-12 max-w-[120px] object-contain"
                            onError={(e) => {
                              e.target.style.display = 'none';
                              if (e.target.nextSibling) {
                                e.target.nextSibling.style.display = 'flex';
                              }
                            }}
                          />
                          <div className="hidden h-full w-full bg-[#001849] text-white font-serif font-bold text-xs items-center justify-center text-center p-1 rounded">
                            {rev.brandName}
                          </div>
                        </div>

                        <div>
                          <h3 className="font-serif text-lg font-bold text-[#001849]">
                            {rev.brandName}
                          </h3>
                          <span className="inline-flex items-center gap-1 text-[10px] font-mono-code text-[#E85D25] bg-[#E85D25]/10 px-2 py-0.5 rounded font-semibold uppercase">
                            {rev.tag || rev.category}
                          </span>
                        </div>
                      </div>

                      {/* 5 Star Rating Display */}
                      <div className="flex flex-col items-end">
                        <div className="flex text-[#F5A623] gap-0.5 mb-1">
                          {[...Array(5)].map((_, i) => (
                            <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                          ))}
                        </div>
                        <span className="font-mono-code text-xs font-bold text-[#00287A]">
                          5.0 / 5.0 Rating
                        </span>
                      </div>

                    </div>

                    {/* Review Title & Content */}
                    <h4 className="font-serif text-lg font-bold text-[#001849] mb-3 leading-snug">
                      "{rev.title}"
                    </h4>
                    <p className="text-sm text-[#14171F]/85 font-sans leading-relaxed mb-6">
                      {rev.content}
                    </p>
                  </div>

                  {/* Reviewer Footnote */}
                  <div className="pt-4 border-t border-[#14171F]/10 flex flex-wrap items-center justify-between gap-2 text-xs">
                    <div>
                      <span className="font-bold text-[#001849] font-sans">{rev.author}</span>
                      <span className="text-[#6B6E7A] block text-[11px]">{rev.role}</span>
                    </div>

                    <div className="flex items-center gap-2 text-[11px] font-mono-code text-[#6B6E7A]">
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 text-[#00287A] bg-[#00287A]/5 px-2 py-0.5 rounded">
                          <CheckCircle className="w-3 h-3 text-[#E85D25]" /> Verified Partner
                        </span>
                      )}
                      <span>• {rev.date}</span>
                    </div>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      </section>

      {/* Write a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#FBF8F2] max-w-xl w-full p-6 md:p-8 border border-[#001849] rounded-lg shadow-2xl relative">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#14171F] hover:text-[#E85D25] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="eyebrow mb-1">
              <span>Partner Portal</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#001849] mb-4">
              Submit Brand Feedback
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Brand Name</label>
                  <input 
                    type="text"
                    required
                    value={newReview.brandName}
                    onChange={(e) => setNewReview({ ...newReview, brandName: e.target.value })}
                    placeholder="e.g. Taj Hotels / Max"
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    placeholder="e.g. Rajesh Sharma"
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                  />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Designation / Role</label>
                  <input 
                    type="text"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    placeholder="e.g. Regional Manager"
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Sector Category</label>
                  <select 
                    value={newReview.category}
                    onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                  >
                    <option value="Hospitality">Hospitality & Hotels</option>
                    <option value="Retail">Retail & Commercial</option>
                    <option value="Office">Office & Workspaces</option>
                    <option value="Industrial">Industrial & Infrastructure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Review Headline</label>
                <input 
                  type="text"
                  required
                  value={newReview.title}
                  onChange={(e) => setNewReview({ ...newReview, title: e.target.value })}
                  placeholder="Summarize your partnership experience..."
                  className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Detailed Review</label>
                <textarea 
                  rows={4}
                  required
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  placeholder="Share details about the property quality, treatment, building facilities..."
                  className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#00287A] text-white py-3 font-mono-code text-xs uppercase tracking-wider rounded hover:bg-[#E85D25] transition-colors"
              >
                Submit Review
              </button>
            </form>
          </div>
        </div>
      )}

    </div>
  );
}

