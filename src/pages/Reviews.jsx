import React, { useState } from 'react';
import { Star, MessageSquarePlus, CheckCircle, ThumbsUp, X, Filter } from 'lucide-react';

export default function Reviews() {
  const [reviewsList, setReviewsList] = useState([
    {
      id: 1,
      author: 'Lord Arthur Pendelton',
      role: 'Corporate Executive & Frequent Traveler',
      date: 'May 2026',
      rating: 5,
      category: 'Hospitality',
      title: 'The Sovereign Penthouse exceeded all expectations.',
      content: 'As a power wheelchair user, finding true five-star luxury without awkward workarounds is rare. The motorized height-adjustable desks and zero-threshold rain shower in the Sovereign Suite made my 2-week business trip an absolute joy.',
      verified: true
    },
    {
      id: 2,
      author: 'Dr. Sarah Lin',
      role: 'Conference Keynote Speaker',
      date: 'April 2026',
      rating: 5,
      category: 'Office',
      title: 'Flawless conference facilities and high-speed fiber.',
      content: 'Hosted our international medical symposium in the Arrow Office Amphitheater. The live closed-captioning video wall and sign-language concierge support were praised by our attendees globally.',
      verified: true
    },
    {
      id: 3,
      author: 'Jonathan & Claire Miller',
      role: 'Leisure Guests',
      date: 'March 2026',
      rating: 5,
      category: 'Retail',
      title: 'Unbelievable retail integration and private shopping care.',
      content: 'The hands-free boutique shopping experience was marvelous. Having our purchases delivered directly to our suite while we enjoyed wine in the tasting lounge was five-star hospitality at its finest.',
      verified: true
    },
    {
      id: 4,
      author: 'Robert Vance',
      role: 'Industrial Logistics Director',
      date: 'February 2026',
      rating: 5,
      category: 'Industrial',
      title: 'Peaceful acoustic silence right next to industrial node.',
      content: 'Managing plant commissioning meant long shift hours. The STC-65 soundproofing guaranteed sound sleep, and 24/7 express check-in made late arrivals completely frictionless.',
      verified: true
    }
  ]);

  const [modalOpen, setModalOpen] = useState(false);
  const [newReview, setNewReview] = useState({
    author: '',
    role: '',
    rating: 5,
    category: 'Hospitality',
    title: '',
    content: ''
  });

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!newReview.author || !newReview.title || !newReview.content) return;

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
      rating: 5,
      category: 'Hospitality',
      title: '',
      content: ''
    });
  };

  return (
    <div className="pt-20">
      
      {/* Header */}
      <section className="bg-[#001849] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Guest Experiences & Feedback</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            Guest Reviews & Ratings
          </h1>
          <p className="text-white/80 text-base md:text-lg font-sans">
            Hear from corporate leaders, families, and international travelers about their Arrow Hotels experience.
          </p>
        </div>
      </section>

      {/* Ratings Metrics */}
      <section className="py-12 bg-[#F1ECE0] border-b border-[#14171F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
            
            <div className="bg-white p-6 border border-[#14171F]/10">
              <div className="text-4xl font-serif font-bold text-[#00287A] mb-1">4.9 / 5</div>
              <div className="flex justify-center text-[#F5A623] gap-1 mb-1">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <div className="font-mono-code text-xs text-[#6B6E7A] uppercase">Overall Guest Rating</div>
            </div>

            <div className="bg-white p-6 border border-[#14171F]/10">
              <div className="text-4xl font-serif font-bold text-[#E85D25] mb-1">99%</div>
              <div className="font-mono-code text-xs text-[#6B6E7A] uppercase">Universal Accessibility Score</div>
            </div>

            <div className="bg-white p-6 border border-[#14171F]/10">
              <div className="text-4xl font-serif font-bold text-[#00287A] mb-1">98%</div>
              <div className="font-mono-code text-xs text-[#6B6E7A] uppercase">VIP Concierge Satisfaction</div>
            </div>

            <div className="bg-white p-6 border border-[#14171F]/10 flex flex-col items-center justify-center">
              <button 
                onClick={() => setModalOpen(true)}
                className="w-full h-full bg-[#00287A] text-white hover:bg-[#E85D25] font-mono-code text-xs uppercase tracking-wider p-4 flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquarePlus className="w-5 h-5 text-[#F5A623]" />
                <span>Write A Guest Review</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Reviews List */}
      <section className="py-16 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-8">
            {reviewsList.map((rev) => (
              <div key={rev.id} className="bg-white p-8 border border-[#14171F]/10 shadow-sm">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4 pb-4 border-b border-[#14171F]/10">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-serif text-xl font-bold text-[#001849]">
                        {rev.author}
                      </h3>
                      {rev.verified && (
                        <span className="inline-flex items-center gap-1 text-[10px] font-mono-code bg-[#00287A]/10 text-[#00287A] px-2 py-0.5 uppercase font-semibold">
                          <CheckCircle className="w-3 h-3 text-[#E85D25]" /> Verified Stay
                        </span>
                      )}
                    </div>
                    <div className="text-xs text-[#6B6E7A]">
                      {rev.role} • <span className="font-mono-code text-[#E85D25]">{rev.category} Sector</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <div className="flex text-[#F5A623]">
                      {[...Array(rev.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 fill-current" />
                      ))}
                    </div>
                    <span className="font-mono-code text-xs text-[#6B6E7A]">{rev.date}</span>
                  </div>
                </div>

                <h4 className="font-serif text-lg font-semibold text-[#001849] mb-2">
                  "{rev.title}"
                </h4>
                <p className="text-sm text-[#14171F]/80 leading-relaxed mb-4">
                  {rev.content}
                </p>

                <div className="flex items-center gap-2 text-xs font-mono-code text-[#6B6E7A]">
                  <button className="flex items-center gap-1 hover:text-[#00287A] transition-colors">
                    <ThumbsUp className="w-3.5 h-3.5" /> Helpful Review
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Write a Review Modal */}
      {modalOpen && (
        <div className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4 backdrop-blur-sm">
          <div className="bg-[#FBF8F2] max-w-xl w-full p-8 border border-[#001849] shadow-2xl relative">
            <button 
              onClick={() => setModalOpen(false)}
              className="absolute top-4 right-4 text-[#14171F] hover:text-[#E85D25]"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="eyebrow">
              <span>Guest Portal</span>
            </div>
            <h3 className="font-serif text-2xl font-bold text-[#001849] mb-4">
              Submit Your Stay Feedback
            </h3>

            <form onSubmit={handleFormSubmit} className="space-y-4">
              <div>
                <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Your Full Name</label>
                <input 
                  type="text"
                  required
                  value={newReview.author}
                  onChange={(e) => setNewReview({ ...newReview, author: e.target.value })}
                  placeholder="e.g. Eleanor Vance"
                  className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm focus:outline-none focus:border-[#E85D25]"
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Guest Designation</label>
                  <input 
                    type="text"
                    value={newReview.role}
                    onChange={(e) => setNewReview({ ...newReview, role: e.target.value })}
                    placeholder="e.g. Business Executive"
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm focus:outline-none focus:border-[#E85D25]"
                  />
                </div>
                <div>
                  <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Sector Stayed</label>
                  <select 
                    value={newReview.category}
                    onChange={(e) => setNewReview({ ...newReview, category: e.target.value })}
                    className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm focus:outline-none focus:border-[#E85D25]"
                  >
                    <option value="Hospitality">Hospitality & Suites</option>
                    <option value="Retail">Retail Integration</option>
                    <option value="Industrial">Industrial Stays</option>
                    <option value="Office">Office & Workspaces</option>
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
                  placeholder="Summarize your experience..."
                  className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm focus:outline-none focus:border-[#E85D25]"
                />
              </div>

              <div>
                <label className="block text-xs font-mono-code uppercase text-[#14171F] mb-1">Detailed Feedback</label>
                <textarea 
                  rows={4}
                  required
                  value={newReview.content}
                  onChange={(e) => setNewReview({ ...newReview, content: e.target.value })}
                  placeholder="Share details about room accessibility, dining, or staff care..."
                  className="w-full bg-white border border-[#14171F]/20 p-2.5 text-sm focus:outline-none focus:border-[#E85D25]"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full bg-[#00287A] text-white py-3.5 font-mono-code text-xs uppercase tracking-wider hover:bg-[#E85D25] transition-colors"
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
