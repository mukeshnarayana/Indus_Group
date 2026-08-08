import React from 'react';
import { Link } from 'react-router-dom';
import { BedDouble, TrendingUp, Handshake, Building } from 'lucide-react';

export default function HospitalityService() {
  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">
      
      {/* 1. HERO SECTION: Full-width Luxury Hotel Image with Dark Overlay & Centered Text */}
      <section className="relative h-[480px] md:h-[560px] w-full flex items-center justify-center overflow-hidden">
        {/* Background Luxury Hotel Image */}
        <img
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury Hospitality & Hotels"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        
        {/* Dark Linear Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#001849]/75 via-[#001849]/65 to-[#001849]/85" />

        {/* Centered Hero Content */}
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white">
            Hospitality & Hotels
          </h1>
          <p className="text-sm md:text-lg text-white/85 max-w-2xl mx-auto font-serif leading-relaxed">
            Our hotels and hospitality team brings a strong record of successful deals, helping investors across the industry build smarter strategies, refine their holdings, and get the most out of every asset.
          </p>
        </div>
      </section>

      {/* 2. STRATEGIC REAL ESTATE FOCUS: Side-by-Side Narrative & Luxury Interior Photo */}
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
                  As Indus Group and Arrow Hotels step into the hospitality space, we bring the same commitment to insight-driven, research-backed guidance that defines our work in other real estate sectors. Our team studies hospitality market trends closely, providing actionable intelligence that drives sustainable growth.
                </p>
              </div>
            </div>

            {/* Right Luxury Suite Interior Image */}
            <div className="md:col-span-6">
              <div className="rounded-xl overflow-hidden shadow-lg border border-stone-200 aspect-[4/3]">
                <img
                  src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80"
                  alt="Luxury Hotel Penthouse Suite Interior"
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
              Whether you're searching for the right property or preparing to exit one, our team combines market knowledge, financial expertise, and strong industry connections.
            </p>
          </div>

          {/* 2 White Feature Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Card 1: Asset Acquisition & Strategy */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-100/80 text-[#E85D25] flex items-center justify-center">
                <BedDouble className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#001849]">
                Asset Acquisition & Expansion
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif leading-relaxed">
                Strategic site selection, feasibility studies, and hotel property acquisitions for investors seeking high-yield hospitality ventures.
              </p>
            </div>

            {/* Card 2: Asset Advisory & Exit Strategy */}
            <div className="bg-white p-8 rounded-xl shadow-sm border border-stone-200 space-y-4 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 rounded-lg bg-orange-100/80 text-[#E85D25] flex items-center justify-center">
                <TrendingUp className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-serif font-bold text-[#001849]">
                Asset Advisory & Exit Strategy
              </h3>
              <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif leading-relaxed">
                Comprehensive advisory services designed to refine holdings, maximize asset performance, and structure profitable exit deals built around your specific goals.
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
                HOSPITALITY PROFESSIONALS
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
