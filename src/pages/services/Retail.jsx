import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Building2, ArrowRight } from 'lucide-react';

export default function RetailService() {
  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">
      
      {/* 1. HERO SECTION: Full-width Luxury Storefront Image with Dark Overlay & Centered Text */}
      <section className="relative h-[480px] md:h-[560px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Luxury Storefront Image */}
        <img
          src="https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1800&q=80"
          alt="Retail Commercial Space"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Dark Linear Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001849]/70 via-[#001849]/60 to-[#001849]/80" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white">
            Retail Commercial Space
          </h1>
          <p className="text-sm md:text-lg text-white/85 max-w-2xl mx-auto font-serif leading-relaxed">
            We combine industry expertise, market insight, and hands-on experience to help retailers, restaurateurs, investors, owners, and developers achieve real results.
          </p>
        </div>
      </section>

      {/* 2. STRATEGIC REAL ESTATE FOCUS: Side-by-Side Narrative & Interior Photo */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative Column */}
            <div className="md:col-span-6 space-y-5">
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-serif font-bold text-[#001849]">
                Strategic Real Estate Focus
              </h2>
              <div className="bg-stone-200/60 p-5 rounded-lg border border-stone-300/40">
                <p className="text-sm sm:text-base text-[#14171F]/80 font-serif leading-relaxed">
                  At Indus and Arrow, we help retail occupiers and developers achieve their business objectives through integrated real estate strategy. Our team studies the shifting retail environment closely, providing actionable intelligence that drives sustainable growth.
                </p>
              </div>
            </div>

            {/* Right Boutique Interior Image */}
            <div className="md:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1441986300917-64674bd600d8?auto=format&fit=crop&w=1000&q=80"
                  alt="Minimalist Retail Boutique Interior"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. OUR EXPERTISE: Centered Header & 2 White Cards */}
      <section className="py-16 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Centered Section Header */}
          <div className="text-center max-w-3xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#001849]">
              Our Expertise
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif leading-relaxed">
              From guiding fast-growing brands through expansion and site selection to helping property owners maximize long-term value.
            </p>
          </div>

          {/* 2 White Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Brand Expansion */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-100/80 text-[#E85D25] flex items-center justify-center">
                <Store className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#001849]">
                Brand Expansion
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif leading-relaxed">
                Strategic site selection and market analysis for fast-growing retail and restaurant concepts seeking to establish a dominant physical presence.
              </p>
            </div>

            {/* Card 2: Landlord Leasing */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-100/80 text-[#E85D25] flex items-center justify-center">
                <Building2 className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#001849]">
                Landlord Leasing
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif leading-relaxed">
                Comprehensive leasing strategies designed to maximize asset value, optimize tenant mix, and ensure long-term stability for property owners.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* 4. DEEP NAVY STATS BAR: 2 Divided Metric Columns */}
      <section className="bg-[#001233] text-white py-14 border-y border-white/10">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 divide-y sm:divide-y-0 sm:divide-x divide-white/15 text-center">
            
            {/* Stat 1 */}
            <div className="px-4 pt-4 sm:pt-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F5A623] mb-2">
                30
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                RETAIL PROFESSIONALS
              </div>
            </div>

            {/* Stat 2 */}
            <div className="px-4 pt-4 sm:pt-0">
              <div className="text-4xl sm:text-5xl md:text-6xl font-serif font-bold text-[#F5A623] mb-2">
                100+
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                CLIENT RELATIONSHIPS ACROSS TRADE
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 5. CONTACT FLOATING CARD SECTION */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="bg-white p-8 sm:p-12 rounded-2xl shadow-md border border-stone-200 text-center space-y-4">
            <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#001849]">
              We would like to hear from you
            </h2>
            <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif max-w-md mx-auto">
              Share a few details about your request to get started with our team.
            </p>
            <div className="pt-2">
              <Link
                to="/contact"
                className="inline-block px-8 py-3 bg-[#C2410C] hover:bg-[#9A3412] text-white font-mono-code text-xs font-bold uppercase tracking-wider rounded-lg transition-colors shadow"
              >
                Contact Us
              </Link>
            </div>
          </div>

        </div>
      </section>

    </div>
  );
}
