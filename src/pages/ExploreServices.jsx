import React from 'react';
import { Link } from 'react-router-dom';
import { Store, Building2, Factory, Briefcase, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function ExploreServices() {
  const sectors = [
    {
      id: 'retail',
      num: '01',
      title: 'Retail Commercial Space',
      path: '/services/retail',
      tagline: 'High-Street & Shopping Centre Advisory',
      desc: 'We combine industry expertise, market insight, and hands-on experience to help retailers, restaurateurs, investors, owners, and developers achieve real results — through integrated real estate strategies tailored to each client\'s specific goals.',
      icon: Store,
      image: 'https://images.unsplash.com/photo-1519567241046-7f570eee3ce6?auto=format&fit=crop&w=1200&q=80',
      statLabel: 'RETAIL PROFESSIONALS',
      statVal: '30+',
      highlights: ['Brand & Tenant Expansion', 'Shopping Centre Leasing', 'Landlord & Developer Advisory']
    },
    {
      id: 'hospitality',
      num: '02',
      title: 'Hospitality & Hotels',
      path: '/services/hospitality',
      tagline: 'Strategic Asset Advisory & Hotel Investment',
      desc: 'Our hotels and hospitality team brings a strong record of successful deals, helping investors across the industry build smarter strategies, refine their holdings, and get the most out of every asset with research-backed guidance.',
      icon: Building2,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
      statLabel: 'HOSPITALITY ADVISORS',
      statVal: '30+',
      highlights: ['Asset Acquisition & Expansion', 'Asset Advisory & Exit Strategy', 'Hotel Performance Optimization']
    },
    {
      id: 'industrial',
      num: '03',
      title: 'Industrial & Logistics',
      path: '/services/industrial',
      tagline: 'End-to-End Supply Chain Real Estate Platform',
      desc: 'Operating one of the region\'s most established industrial real estate platforms, supporting companies whose success hinges on strong supply chains, connected locations, and optimized warehousing infrastructure.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1200&q=80',
      statLabel: 'ACRES COVERED',
      statVal: '500+',
      highlights: ['Ready Warehouse Leasing', 'Built-to-Suit Industrial Hubs', 'Multi-City Land Acquisition']
    },
    {
      id: 'office',
      num: '04',
      title: 'Office Commercial Space',
      path: '/services/office',
      tagline: 'Workspace Optimization & Portfolio Strategy',
      desc: 'Supporting occupiers, landlords, and investors with workspace efficiency, portfolio decisions, asset management, and landmark property transactions across suburban business parks and city towers.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=80',
      statLabel: 'PORTFOLIO TRANSACTIONS',
      statVal: '100+',
      highlights: ['Occupier Workspace Optimization', 'Landlord Asset Management', 'Suburban & Tower Leasing']
    }
  ];

  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">
      
      {/* Hero Banner */}
      <section className="bg-[#001849] text-white py-20 md:py-24 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-4">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Indus & Arrow Real Estate Platform</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold font-serif text-white tracking-tight leading-tight">
            Our Practice Sectors
          </h1>
          
          <p className="text-white/85 text-base md:text-lg font-serif max-w-2xl mx-auto leading-relaxed">
            Delivering integrated real estate strategy, market intelligence, and transaction advisory across prime commercial, hospitality, industrial, and retail sectors.
          </p>
        </div>
      </section>

      {/* Metric Summary Bar */}
      <section className="bg-[#001233] text-white py-8 border-y border-white/10">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-x divide-white/15">
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F5A623]">4</div>
              <div className="font-mono-code text-[11px] uppercase tracking-widest text-white/70">Core Practice Areas</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F5A623]">100+</div>
              <div className="font-mono-code text-[11px] uppercase tracking-widest text-white/70">Trade Client Network</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F5A623]">500+</div>
              <div className="font-mono-code text-[11px] uppercase tracking-widest text-white/70">Acres Handled</div>
            </div>
            <div>
              <div className="font-serif text-3xl sm:text-4xl font-bold text-[#F5A623]">50+</div>
              <div className="font-mono-code text-[11px] uppercase tracking-widest text-white/70">Cities Footprint</div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 Practice Sectors: Left Div Text Matter, Right Div High-Res Image */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sectors.map((sec) => {
            const Icon = sec.icon;

            return (
              <div 
                key={sec.id}
                id={sec.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-white p-8 sm:p-12 rounded-3xl border border-stone-200 shadow-sm"
              >
                {/* Left Div: Matter / Text Content */}
                <div className="lg:col-span-7 space-y-6">
                  <div className="flex items-center gap-3">
                    <span className="font-mono-code text-2xl font-bold text-[#E85D25]">
                      {sec.num}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-orange-100/80 text-[#E85D25] flex items-center justify-center font-bold">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono-code text-xs text-[#E85D25] uppercase tracking-wider font-bold">
                      {sec.tagline}
                    </span>
                  </div>

                  <h2 className="text-3xl sm:text-4xl font-serif font-bold text-[#001849] leading-tight">
                    {sec.title}
                  </h2>

                  <p className="text-[#14171F]/85 font-serif text-base leading-relaxed">
                    {sec.desc}
                  </p>

                  {/* Highlights Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
                    {sec.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="p-3 bg-[#FBF8F2] rounded-xl border border-stone-200 flex items-center gap-2 text-xs font-serif font-semibold text-[#001849]">
                        <CheckCircle2 className="w-4 h-4 text-[#E85D25] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-4 flex flex-col sm:flex-row items-center gap-4">
                    <Link
                      to={sec.path}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-3 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#001849] text-white font-bold hover:bg-[#E85D25] transition-colors rounded-lg shadow-lg"
                    >
                      <span>Explore Full {sec.title} Page</span>
                      <ArrowRight className="w-4 h-4 text-[#F5A623]" />
                    </Link>

                    <div className="flex items-center gap-3 bg-[#FBF8F2] px-5 py-3 rounded-lg border border-stone-200">
                      <span className="font-serif text-2xl font-bold text-[#E85D25]">{sec.statVal}</span>
                      <span className="font-mono-code text-[10px] text-[#6B6E7A] uppercase leading-tight font-bold">{sec.statLabel}</span>
                    </div>
                  </div>
                </div>

                {/* Right Div: High-Res Image Content */}
                <div className="lg:col-span-5 relative aspect-[4/3] w-full rounded-2xl overflow-hidden shadow-xl border-4 border-[#FBF8F2]">
                  <img 
                    src={sec.image} 
                    alt={sec.title} 
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#001849]/60 via-transparent to-transparent opacity-60" />
                  <div className="absolute bottom-6 left-6 right-6 text-white bg-[#001849]/85 backdrop-blur-md p-4 rounded-xl border border-white/15">
                    <div className="font-serif font-bold text-base text-[#F5A623]">{sec.title}</div>
                    <div className="text-xs text-white/80 font-serif">{sec.tagline}</div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>
      </section>

      {/* Floating Contact Banner */}
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
