import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, Building2, TrendingUp, Users, ArrowRight, ShieldCheck, CheckCircle2, Layers } from 'lucide-react';

export default function OfficeService() {
  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">
      
      {/* 1. HERO SECTION: Modern Corporate Skyscraper / Office Interior Hero */}
      <section className="relative h-[480px] md:h-[560px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1800&q=80"
          alt="Office Commercial Space"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001849]/75 via-[#001849]/65 to-[#001849]/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white">
            Office Commercial Space
          </h1>
          <p className="text-sm md:text-lg text-white/85 max-w-3xl mx-auto font-serif leading-relaxed">
            Whatever your goals — leasing space for your team or growing an investment portfolio — Indus Group and Arrow Hotels bring the tools, market reach, and expertise to shape the right path forward.
          </p>
        </div>
      </section>

      {/* 2. DUAL PILLARS: FOR OCCUPIERS vs FOR LANDLORDS & INVESTORS */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-14 space-y-3">
            <div className="eyebrow justify-center">
              <span>Tailored Office Solutions</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#001849]">
              Office Services for Occupiers, Landlords, and Investors
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            
            {/* Pillar 1: For Occupiers */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200 hover:border-[#E85D25] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-13 h-13 rounded-xl bg-orange-100/80 text-[#E85D25] flex items-center justify-center font-bold">
                  <Users className="w-6 h-6" />
                </div>

                <div className="font-mono-code text-xs text-[#E85D25] font-bold uppercase tracking-wider">
                  Corporate & Business Solutions
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#001849]">
                  For Occupiers
                </h3>

                <p className="text-sm text-[#6B6E7A] font-serif leading-relaxed">
                  We help businesses get more from their workspace — boosting efficiency, refining portfolio decisions, and lowering costs while supporting talent retention and workplace performance. Our connected network of office specialists brings local knowledge and hands-on experience to deliver measurable results, whether you operate at a city, national, or international scale.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono-code font-bold text-[#001849] group-hover:text-[#E85D25] transition-colors">
                <span>WORKSPACE OPTIMIZATION</span>
                <ArrowRight className="w-4 h-4 text-[#E85D25] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

            {/* Pillar 2: For Landlords and Investors */}
            <div className="bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200 hover:border-[#E85D25] hover:shadow-lg transition-all duration-300 flex flex-col justify-between space-y-6 relative overflow-hidden group">
              <div className="space-y-4">
                <div className="w-13 h-13 rounded-xl bg-orange-100/80 text-[#E85D25] flex items-center justify-center font-bold">
                  <Building2 className="w-6 h-6" />
                </div>

                <div className="font-mono-code text-xs text-[#E85D25] font-bold uppercase tracking-wider">
                  Property & Asset Management
                </div>

                <h3 className="text-2xl font-serif font-bold text-[#001849]">
                  For Landlords and Investors
                </h3>

                <p className="text-sm text-[#6B6E7A] font-serif leading-relaxed">
                  Our services cover property transactions, financing arrangements, valuation, asset management, leasing, and project oversight — supporting everything from suburban business parks to landmark towers across every major market we serve.
                </p>
              </div>

              <div className="pt-4 border-t border-stone-100 flex items-center gap-2 text-xs font-mono-code font-bold text-[#001849] group-hover:text-[#E85D25] transition-colors">
                <span>ASSET PERFORMANCE & VALUATION</span>
                <ArrowRight className="w-4 h-4 text-[#E85D25] group-hover:translate-x-1 transition-transform" />
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 3. KEY METRICS BAR */}
      <section className="bg-[#001233] text-white py-14 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/15 text-center">
            
            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                30+
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                OFFICE SPECIALISTS
              </div>
            </div>

            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                100+
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                PORTFOLIO TRANSACTIONS
              </div>
            </div>

            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                Suburban & Towers
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                ASSET COVERAGE
              </div>
            </div>

            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                Pan-India
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                ADVISORY NETWORK
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. PROVEN EXPERTISE, TRUSTED INSIGHT NARRATIVE */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Image Showcase */}
            <div className="md:col-span-5 relative">
              <div className="relative aspect-4/5 rounded-2xl overflow-hidden shadow-xl border border-stone-200">
                <img 
                  src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=800&q=80" 
                  alt="Modern Corporate Office Interior" 
                  className="w-full h-full object-cover"
                />
              </div>
            </div>

            {/* Right Narrative */}
            <div className="md:col-span-7 space-y-6 text-[#14171F]/85 font-serif text-sm sm:text-base leading-relaxed">
              <div>
                <div className="eyebrow">
                  <span>Market Intelligence & Execution</span>
                </div>
                <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#001849] leading-tight">
                  Proven Expertise, Trusted Insight
                </h2>
              </div>

              <p>
                Indus and Arrow brings dedicated focus and deep specialization to the office real estate sector, crafting practical strategies suited to the needs of both tenants and property owners.
              </p>

              <p>
                Backed by strong forecasting tools, an extensive research base, and full marketing capability, our team works together across regions and specialties to bring added value to every client relationship. Supported by a connected network of experienced advisors, we deliver current, ground-level market knowledge that produces reliable outcomes at any scale — local, national, or global.
              </p>

              <div className="p-5 bg-white rounded-xl border border-stone-200 shadow-sm">
                <p className="text-xs sm:text-sm font-serif text-[#001849] font-medium leading-relaxed">
                  Our services span a wide range of practice areas, from space acquisition and disposal to strategic advisory support across all sectors of the market.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. FLOATING CONTACT CARD SECTION */}
      <section className="py-20 bg-[#FBF8F2] border-t border-stone-200/60">
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
