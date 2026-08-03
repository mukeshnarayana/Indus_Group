import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, TrendingUp, Handshake, ShieldCheck, Award } from 'lucide-react';

export default function HospitalityService() {
  return (
    <div className="pt-20">

      {/* Sub-page Hero */}
      <section className="bg-[#00287A] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow text-[#F5A623]">
            <Link to="/services" className="hover:underline">Explore / Services</Link>
            <span>/ Hospitality Sector</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-3xl mb-4">
            Hospitality & Hotels
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            Insight-driven, research-backed guidance helping investors build smarter strategies, refine holdings, and maximize asset value.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative aspect-4/3 rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80"
                alt="Hospitality Sector & Hotel Real Estate"
                className="w-full h-full object-cover"
              />
            </div>

            <div>
              <div className="eyebrow">
                <span>Indus & Arrow Hospitality</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#001849] mb-6 leading-tight">
                Strategic Real Estate & Hospitality Deal Advisory
              </h2>

              <div className="space-y-4 text-[#14171F]/85 text-base sm:text-lg leading-relaxed">
                <p>
                  Our hotels and hospitality team brings a strong record of successful deals, helping investors across the industry build smarter strategies, refine their holdings, and get the most out of every asset. As Indus and Arrow steps into the hospitality space, we bring the same commitment to insight-driven, research-backed guidance that defines our work in other real estate sectors.
                </p>
                <p>
                  Whether you're searching for the right property or preparing to exit one, our team combines market knowledge, financial expertise, and strong industry connections to bring the right people together and structure deals built around your specific goals.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-6">
                <div className="p-4 bg-white border border-[#14171F]/10 rounded-xl shadow-sm">
                  <TrendingUp className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Maximizing Asset Value</h4>
                  <p className="text-xs text-[#6B6E7A]">Refining holdings and building smarter strategies for long-term growth.</p>
                </div>
                <div className="p-4 bg-white border border-[#14171F]/10 rounded-xl shadow-sm">
                  <Handshake className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Tailored Deal Structuring</h4>
                  <p className="text-xs text-[#6B6E7A]">Bringing key partners together around your specific acquisition or exit goals.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 border border-[#14171F]/10 rounded-2xl shadow-sm border-t-4 border-t-[#E85D25]">
              <Award className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Proven Track Record</h3>
              <p className="text-sm text-[#6B6E7A] leading-relaxed">Demonstrated success in structuring high-value transactions and hotel acquisitions across prime markets.</p>
            </div>
            <div className="bg-white p-8 border border-[#14171F]/10 rounded-2xl shadow-sm border-t-4 border-t-[#E85D25]">
              <Building className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Research-Backed Guidance</h3>
              <p className="text-sm text-[#6B6E7A] leading-relaxed">In-depth market intelligence and financial analysis to evaluate hospitality real estate performance.</p>
            </div>
            <div className="bg-white p-8 border border-[#14171F]/10 rounded-2xl shadow-sm border-t-4 border-t-[#E85D25]">
              <ShieldCheck className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Network & Connections</h3>
              <p className="text-sm text-[#6B6E7A] leading-relaxed">Deep industry ties connecting investors, hotel operators, and property owners for seamless deals.</p>
            </div>
          </div>

          <div className="text-center">
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#00287A] text-white font-bold hover:bg-[#E85D25] transition-colors rounded-lg shadow-lg"
            >
              <span>Connect With Our Hospitality Team</span>
              <ArrowRight className="w-4 h-4 text-[#F5A623]" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
