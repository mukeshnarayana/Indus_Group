import React, { useState } from 'react';
import { Star, CheckCircle, MapPin, Building2, MessageSquarePlus, X } from 'lucide-react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      author: 'Mr. Srinivas garu',
      role: 'Developer – Abhiram Nirman India Pvt Ltd',
      project: 'Kurmannapalem, Vizag (Zudio, Style Union, Max)',
      location: 'Kurmannapalem, Visakhapatnam',
      date: 'May 2026',
      rating: 5,
      title: 'Brought top retail brands to our Kurmannapalem commercial development.',
      content: 'Partnering with Indus Group has been a great decision for our Kurmannapalem project. Mr. Tejeswara Rao and his team handled the entire leasing process professionally, bringing major brands like Zudio, Style Union, and Max to our commercial building. The lease terms were structured transparently, and tenant handovers were completed without any delays.',
      verified: true
    },
    {
      id: 2,
      author: 'Mr. Jayesh Patel',
      role: 'Property Owner & Commercial Partner',
      project: 'Muralinagar (Style Union)',
      location: 'Muralinagar, Visakhapatnam',
      date: 'April 2026',
      rating: 5,
      title: 'Hassle-free commercial leasing with excellent brand association.',
      content: 'Indus Group helped us secure Style Union for our commercial property in Muralinagar. Their team handled everything from market positioning to final agreement execution with total clarity. They are always approachable and make property management simple and stress-free for property owners.',
      verified: true
    },
    {
      id: 3,
      author: 'Mr. Sagar',
      role: 'Commercial Property Partner',
      project: 'Unlimited Retail Center',
      location: 'Srikakulam',
      date: 'March 2026',
      rating: 5,
      title: 'Prompt response and complete clarity in leasing consultancy.',
      content: 'We worked with Indus Group for leasing our commercial space in Srikakulam for Unlimited retail. Their team has deep knowledge of regional retail markets. They ensured smooth coordination between us and the brand team, making the entire project setup effortless.',
      verified: true
    },
    {
      id: 4,
      author: 'Mr. Sriram Ratna',
      role: 'Mall Owner – Ramachandra Multiplex',
      project: 'Gajuwaka Multiplex & Commercial Hub',
      location: 'Gajuwaka, Visakhapatnam',
      date: 'February 2026',
      rating: 5,
      title: 'Transformed our 1,00,000 sq.ft. property into a premier multiplex & retail hub.',
      content: 'For a project as large as 1,00,000 sq.ft. in Gajuwaka, finding the right anchor tenants and managing floor space is crucial. Indus Group facilitated top retail and entertainment brands including Style Union, MR. DIY, High Volt Game Zone, and a modern food court. Their strategic approach added immense value to our commercial multiplex.',
      verified: true
    },
    {
      id: 5,
      author: 'Mr. Kaushik',
      role: 'Commercial Property Owner',
      project: 'Kalyan Commercial Center',
      location: 'Vizianagaram',
      date: 'January 2026',
      rating: 5,
      title: 'Transparent dealing and high-value brand positioning.',
      content: 'Indus Group helped us lease our prime commercial building in Vizianagaram to Kalyan Jewellers. Their professional guidance on structural readiness, security requirements, and long-term lease agreement gave us complete peace of mind. Highly recommend Mr. Tejeswara Rao and his team.',
      verified: true
    },
    {
      id: 6,
      author: 'Dr. Pavan',
      role: 'Landlord & Property Owner',
      project: 'Pendurthi Commercial Hub (Fashion City)',
      location: 'Pendurthi, Visakhapatnam',
      date: 'December 2025',
      rating: 5,
      title: 'Exceptional guidance for commercial property development and leasing.',
      content: 'As a property owner in Pendurthi, I wanted a reliable partner to bring strong commercial brands to our location. Indus Group executed the leasing strategy for Fashion City across 24,000 sq.ft. efficiently right from the structural development phase. Their team is honest, dedicated, and highly capable.',
      verified: true
    },
    {
      id: 7,
      author: 'Mr. Srikanth Reddy',
      role: 'Commercial Property Partner',
      project: 'IBO Commercial Center',
      location: 'Hastinapuram',
      date: 'November 2025',
      rating: 5,
      title: 'Smooth tenant onboarding and solid commercial support.',
      content: 'Indus Group supported us in leasing our commercial space for IBO in Hastinapuram. They understand what major retail occupiers need in terms of parking, accessibility, and utility setup. Working with Mr. Tejeswara Rao has been a smooth and rewarding experience.',
      verified: true
    },
    {
      id: 8,
      author: 'Mr. M A Nayeem',
      role: 'Property Owner – Masha Constructions',
      project: 'Nizamabad Commercial Hub (Fashion City & More)',
      location: 'Nizamabad, Telangana',
      date: 'October 2025',
      rating: 5,
      title: 'Seamless multi-tenant leasing for our 11,000 sq.ft. commercial center.',
      content: 'Managing a multi-tenant commercial center in Nizamabad required expert leasing advisory. Indus Group successfully placed Fashion City across 8,000 sq.ft. and More Supermarket across 3,000 sq.ft. on the lower ground floor. Their execution was smooth, transparent, and timely.',
      verified: true
    },
    {
      id: 9,
      author: 'Dr. Venugopal Reddy',
      role: 'Property Partner & Commercial Investor',
      project: 'Nalgonda Commercial Hub (Fashion City)',
      location: 'Nalgonda, Telangana',
      date: 'September 2025',
      rating: 5,
      title: 'Great market insight and trustworthy property management.',
      content: 'Indus Group helped us lease our 8,000 sq.ft. prime commercial space in Nalgonda to Fashion City. Their deep market network and transparent paperwork made the deal completely hassle-free. Mr. Tejeswara Rao treats property partners with great respect and care.',
      verified: true
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    role: '',
    project: '',
    location: '',
    rating: 5,
    title: '',
    content: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newReview.author || !newReview.title || !newReview.content || !newReview.project) return;

    const created = {
      id: Date.now(),
      ...newReview,
      date: 'Just Now',
      verified: true
    };

    setReviewsList([created, ...reviewsList]);
    setModalOpen(false);
    setNewReview({
      author: '',
      role: '',
      project: '',
      location: '',
      rating: 5,
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
            <span>Property Owner & Developer Testimonials</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold font-serif mb-4 tracking-tight">
            Reviews & Ratings
          </h1>
          <p className="text-white/80 text-base md:text-lg font-sans max-w-2xl mx-auto leading-relaxed">
            Hear from property developers, landlords, and commercial real estate partners across Andhra Pradesh and Telangana about their Indus Group leasing experience.
          </p>
        </div>
      </section>

      {/* Sub-bar with Action CTA */}
      <section className="bg-white border-b border-[#14171F]/10 sticky top-20 z-20 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
          <div className="flex items-center gap-2 text-xs font-mono-code text-[#001849]">
            <Building2 className="w-4 h-4 text-[#E85D25]" />
            <span className="font-bold uppercase tracking-wider">Property Partner Reviews ({reviewsList.length})</span>
          </div>

          {/* 
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-[#E85D25] text-white hover:bg-[#00287A] font-mono-code text-xs uppercase tracking-wider px-4 py-2 rounded transition-colors shadow-sm"
          >
            <MessageSquarePlus className="w-4 h-4 text-[#F5A623]" />
            <span>Submit Partner Review</span>
          </button>
          */}
        </div>
      </section>

      {/* Property Owner Reviews List */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {reviewsList.map((rev) => (
              <div 
                key={rev.id} 
                className="bg-white p-6 md:p-8 border border-[#14171F]/10 rounded-lg shadow-sm hover:shadow-md hover:border-[#00287A]/30 transition-all flex flex-col justify-between"
              >
                <div>
                  {/* Card Header Info */}
                  <div className="flex items-start justify-between gap-4 pb-4 mb-5 border-b border-[#14171F]/10">
                    <div>
                      <h3 className="font-serif text-xl font-bold text-[#001849] mb-0.5">
                        {rev.author}
                      </h3>
                      <p className="text-xs font-mono-code font-semibold text-[#E85D25] mb-1">
                        {rev.role}
                      </p>
                      <div className="flex items-center gap-1.5 text-xs text-[#6B6E7A]">
                        <MapPin className="w-3.5 h-3.5 text-[#00287A] shrink-0" />
                        <span className="font-medium text-[#14171F]/80">{rev.project}</span>
                      </div>
                    </div>

                    {/* 5 Star Rating Display */}
                    <div className="flex flex-col items-end shrink-0">
                      <div className="flex text-[#F5A623] gap-0.5 mb-1">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-[#F5A623] text-[#F5A623]" />
                        ))}
                      </div>
                      <span className="font-mono-code text-[11px] font-bold text-[#00287A]">
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

                {/* Card Footnote */}
                <div className="pt-4 border-t border-[#14171F]/10 flex items-center justify-between gap-2 text-xs">
                  <div className="flex items-center gap-1.5 text-[11px] font-mono-code text-[#00287A] bg-[#00287A]/5 px-2.5 py-1 rounded">
                    <CheckCircle className="w-3.5 h-3.5 text-[#E85D25]" />
                    <span className="font-semibold">Verified Property Partner</span>
                  </div>

                  <span className="font-mono-code text-[11px] text-[#6B6E7A]">{rev.date}</span>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Write a Review Modal (COMMENTED OUT) */}
      {/* 
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
              <span>Property Partner Portal</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#001849] mb-4">
              Submit Partner Review
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Your Full Name</label>
                  <input 
                    type="text"
                    required
                    value={newReview.author}
                    onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                    placeholder="e.g. Mr. Srinivas garu"
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Designation / Company</label>
                  <input 
                    type="text"
                    required
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    placeholder="e.g. Developer – Abhiram Nirman"
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Property / Project Name</label>
                <input 
                  type="text"
                  required
                  value={newReview.project}
                  onChange={(e) => setNewReview({ ...newReview, project: e.target.value })}
                  placeholder="e.g. Kurmannapalem Vizag (Zudio, Style Union, Max)"
                  className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm rounded focus:outline-none focus:border-[#E85D25]"
                />
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
                  placeholder="Share details about property leasing, tenant onboarding, execution..."
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
      */}

    </div>
  );
}

