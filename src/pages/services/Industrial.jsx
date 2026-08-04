import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ArrowRight, Warehouse, Hammer, MapPin, ShieldCheck, TrendingUp, Cpu, Globe, CheckCircle2 } from 'lucide-react';

export default function IndustrialService() {
  const coreSectors = [
    'E-Commerce',
    'Port Logistics',
    'Food Facilities',
    'Infrastructure',
    'Global Supply Chain',
    'Land Services',
    'Life Sciences',
    'Specialized Property Sectors'
  ];

  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">
      
      {/* 1. HERO SECTION: Full-width Modern Industrial & Logistics Center Image */}
      <section className="relative h-[480px] md:h-[560px] w-full flex items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1800&q=80"
          alt="Industrial & Logistics Hub"
          className="absolute inset-0 w-full h-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001849]/75 via-[#001849]/65 to-[#001849]/85" />

        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center text-white space-y-4">
          <h1 className="text-4xl md:text-6xl font-serif font-bold tracking-tight text-white">
            Industrial & Logistics
          </h1>
          <p className="text-sm md:text-lg text-white/85 max-w-3xl mx-auto font-serif leading-relaxed">
            Indus and Arrow operates one of the region's most established industrial real estate platforms, delivering an end-to-end range of services for investors, developers, and occupiers alike.
          </p>
        </div>
      </section>

      {/* 2. STRATEGIC NARRATIVE & EMBEDDED QUICK CONTACT BOX */}
      <section className="py-16 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Narrative Box */}
            <div className="md:col-span-7 bg-white p-8 sm:p-10 rounded-2xl shadow-sm border border-stone-200 flex flex-col justify-center space-y-4">
              <div className="eyebrow">
                <span>Industrial Platform Strategy</span>
              </div>
              <h2 className="text-2xl sm:text-3xl font-serif font-bold text-[#001849]">
                Optimized Real Estate for Connected Supply Chains
              </h2>
              <p className="text-sm sm:text-base text-[#14171F]/80 font-serif leading-relaxed">
                We support companies whose success hinges on strong supply chains, connected locations, and smooth operations — aligning their business strategy with smart, optimized real estate solutions that keep everything moving efficiently.
              </p>
            </div>

            {/* Right Embedded Contact Us Div */}
            <div className="md:col-span-5 bg-gradient-to-br from-[#001849] to-[#00287A] text-white p-8 sm:p-10 rounded-2xl shadow-md border border-[#001849]/10 flex flex-col justify-between space-y-6">
              <div>
                <div className="font-mono-code text-xs text-[#F5A623] uppercase tracking-wider mb-2">
                  Connect With Industrial Team
                </div>
                <h3 className="text-2xl font-serif font-bold text-white mb-3">
                  Start Your Project
                </h3>
                <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed">
                  Share a few details about your request to get started with our team.
                </p>
              </div>

              <div className="pt-2">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 w-full px-6 py-3.5 bg-gradient-to-r from-[#E85D25] to-[#F5A623] text-white font-mono-code text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all shadow-lg group"
                >
                  <span>Contact Us</span>
                  <ArrowRight className="w-4 h-4 text-[#001849] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 3. KEY METRICS BAR (500+ Acres & 50+ Cities) */}
      <section className="bg-[#001233] text-white py-14 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/15 text-center">
            
            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                500+
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                ACRES COVERED
              </div>
            </div>

            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                50+
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                CITIES COVERED
              </div>
            </div>

            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                End-to-End
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                INDUSTRIAL SERVICES
              </div>
            </div>

            <div className="px-3">
              <div className="text-4xl sm:text-5xl font-serif font-bold text-[#F5A623] mb-1">
                Pan-India
              </div>
              <div className="font-mono-code text-xs uppercase tracking-widest text-white/70">
                LOGISTICS FOOTPRINT
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. MARKET DATA & INSIGHTS NARRATIVE WITH CORE SECTORS */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
            
            {/* Left Narrative */}
            <div className="md:col-span-6 space-y-5 text-[#14171F]/85 text-sm sm:text-base font-serif leading-relaxed">
              <h2 className="text-3xl font-serif font-bold text-[#001849]">
                Data-Driven Guidance & Competitive Edge
              </h2>
              
              <p>
                Drawing on strong data insight and a clear understanding of evolving technology, production trends, and global business practices, our professionals shape real estate strategies around each client's objectives — helping them build a lasting competitive edge. Our expertise spans supply chain logistics, manufacturing, assembly, R&D, distribution, warehousing, and land transactions.
              </p>

              <p>
                Clients rely on Indus and Arrow for market trend analysis, deal intelligence, and practical insights that lead to strong outcomes. Our team delivers scalable support across property sales and leasing, land use and sale planning, asset management, and supply chain and business-case evaluation — including labour, freight, and cost-efficiency analysis. We work across regions and disciplines to support clients through national and international relocation or expansion.
              </p>
            </div>

            {/* Right Core Areas of Focus Tags Grid */}
            <div className="md:col-span-6 bg-white p-8 rounded-2xl shadow-sm border border-stone-200 space-y-6">
              <div>
                <div className="eyebrow">
                  <span>Specialized Industry Focus</span>
                </div>
                <h3 className="text-2xl font-serif font-bold text-[#001849]">
                  Core Sectors Served
                </h3>
              </div>

              <div className="grid grid-cols-2 gap-3">
                {coreSectors.map((sector, idx) => (
                  <div 
                    key={idx}
                    className="p-3 bg-[#FBF8F2] border border-stone-200 rounded-xl flex items-center gap-2 text-xs sm:text-sm font-serif font-semibold text-[#001849] hover:border-[#E85D25] transition-colors"
                  >
                    <CheckCircle2 className="w-4 h-4 text-[#E85D25] shrink-0" />
                    <span>{sector}</span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 5. OUR SERVICES (Interactive Architectural Stream - Non-Card Layout) */}
      <section className="py-20 bg-[#FBF8F2] border-t border-stone-200/60">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-4">
            <div>
              <div className="eyebrow">
                <span>Industrial Portfolio Offerings</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#001849]">
                Our Services
              </h2>
            </div>
            <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif max-w-md">
              Tailored industrial real estate solutions engineered to support warehousing, manufacturing, and strategic land acquisitions nationwide.
            </p>
          </div>

          {/* Interactive Row Stream & Detail Panel */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-stretch">
            
            {/* Left Stream List */}
            <div className="lg:col-span-7 space-y-4">
              {[
                {
                  num: '01',
                  title: 'Ready to Move-In Warehouse Lease',
                  tag: 'IMMEDIATE OCCUPANCY',
                  icon: Warehouse,
                  desc: 'High-specification, compliant warehousing facilities in connected logistics hubs ready for immediate lease and operational deployment.',
                  points: ['Grade-A Compliant Facilities', 'Express Multi-Modal Connectivity', '24/7 Round-the-Clock Operations']
                },
                {
                  num: '02',
                  title: 'Built-to-Suit Industrial Lease',
                  tag: 'CUSTOM SPECIFICATIONS',
                  icon: Hammer,
                  desc: 'Customized manufacturing, assembly, and distribution centers designed and constructed precisely to client engineering and workflow specifications.',
                  points: ['Tailored Floor Loads & Clear Heights', 'Cold-Chain & Specialized HVAC Options', 'Long-term Sustainable Leases']
                },
                {
                  num: '03',
                  title: 'Land Acquisition',
                  tag: 'SITE SELECTION & ZONING',
                  icon: MapPin,
                  desc: 'Strategic land sourcing, title verification, zoning advisory, and land sale planning for industrial footprint expansion.',
                  points: ['Zoning & Environmental Clearances', 'Multi-City Land Sourcing', 'Clear Ownership Title Audits']
                }
              ].map((item, index) => {
                const IconComp = item.icon;
                return (
                  <div
                    key={index}
                    className="group bg-white p-6 sm:p-8 rounded-2xl border border-stone-200 hover:border-[#E85D25] hover:shadow-lg transition-all duration-300 relative overflow-hidden"
                  >
                    {/* Left Saffron Hover Accent Line */}
                    <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-[#E85D25] opacity-0 group-hover:opacity-100 transition-opacity" />

                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-3">
                      <div className="flex items-center gap-4">
                        <span className="font-mono-code text-2xl sm:text-3xl font-bold text-[#E85D25]">
                          {item.num}
                        </span>
                        <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#001849] group-hover:text-[#E85D25] transition-colors">
                          {item.title}
                        </h3>
                      </div>
                      
                      <span className="font-mono-code text-[10px] font-bold text-[#001849] bg-stone-100 group-hover:bg-[#E85D25]/15 group-hover:text-[#E85D25] px-3 py-1 rounded-full uppercase tracking-wider shrink-0 transition-colors">
                        {item.tag}
                      </span>
                    </div>

                    <p className="text-xs sm:text-sm text-[#6B6E7A] font-serif leading-relaxed mb-4 pl-0 sm:pl-10">
                      {item.desc}
                    </p>

                    <div className="pl-0 sm:pl-10 flex flex-wrap gap-x-6 gap-y-2 pt-2 border-t border-stone-100 text-xs font-serif text-[#001849]/80">
                      {item.points.map((pt, pIdx) => (
                        <div key={pIdx} className="flex items-center gap-1.5">
                          <CheckCircle2 className="w-3.5 h-3.5 text-[#E85D25]" />
                          <span>{pt}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right Industrial Solutions Summary Card */}
            <div className="lg:col-span-5 bg-[#001849] text-white p-8 sm:p-10 rounded-2xl flex flex-col justify-between relative overflow-hidden border border-white/10 shadow-xl">
              <div className="relative z-10 space-y-6">
                <div className="w-14 h-14 rounded-2xl bg-white/10 text-[#F5A623] flex items-center justify-center border border-white/15">
                  <Factory className="w-7 h-7" />
                </div>
                
                <div>
                  <div className="font-mono-code text-xs text-[#F5A623] uppercase tracking-widest mb-2">
                    End-to-End Execution
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-serif font-bold text-white mb-3">
                    Industrial Real Estate Delivery
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-serif leading-relaxed">
                    From site selection and land title verification to custom built-to-suit construction management, our team ensures seamless execution for industrial occupiers nationwide.
                  </p>
                </div>

                <div className="space-y-3 pt-4 border-t border-white/10 text-xs font-serif text-white/85">
                  <div className="flex items-center justify-between">
                    <span>Acres Handled:</span>
                    <span className="font-bold text-[#F5A623]">500+ Acres</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Cities Covered:</span>
                    <span className="font-bold text-[#F5A623]">50+ Cities</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Service Speed:</span>
                    <span className="font-bold text-[#F5A623]">Immediate Occupancy</span>
                  </div>
                </div>
              </div>

              <div className="pt-6 relative z-10">
                <Link
                  to="/contact"
                  className="inline-flex items-center justify-center gap-3 w-full px-6 py-4 bg-gradient-to-r from-[#E85D25] to-[#F5A623] text-white font-mono-code text-xs font-bold uppercase tracking-wider rounded-lg hover:brightness-110 transition-all shadow-lg group"
                >
                  <span>Inquire About Industrial Leasing</span>
                  <ArrowRight className="w-4 h-4 text-[#001849] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

        </div>
      </section>

    </div>
  );
}
