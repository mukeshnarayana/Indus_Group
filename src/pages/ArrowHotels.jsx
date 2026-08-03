import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { 
  ArrowRight, 
  Hotel, 
  Sparkles, 
  CheckCircle2, 
  ShieldCheck, 
  Award, 
  Globe, 
  Handshake, 
  TrendingUp, 
  Building2,
  Megaphone,
  DollarSign,
  Leaf,
  Cpu,
  PhoneCall,
  ChevronRight
} from 'lucide-react';

export default function ArrowHotels() {
  const [activeTab, setActiveTab] = useState('operational');

  // Partnership Models Data
  const models = [
    {
      id: 'om',
      title: 'Operations & Management (O&M)',
      badge: 'Full Operational Takeover',
      desc: 'We take charge of daily hotel operations — sales, revenue management, finance, HR, training, marketing, and operations — to enhance performance.',
      color: 'from-[#00287A] to-[#001849]',
      accentBg: 'bg-[#00287A]/10 text-[#00287A]',
      icon: Building2,
      highlights: ['Sales & Revenue Mgmt', 'Finance & HR Training', 'Marketing & Daily Operations']
    },
    {
      id: 'rev',
      title: 'Revenue Share',
      badge: 'Performance-Driven Growth',
      desc: 'We build a solid revenue management strategy based on key performance metrics to maximize your property’s sales outcomes.',
      color: 'from-[#E85D25] to-[#F5A623]',
      accentBg: 'bg-[#E85D25]/10 text-[#E85D25]',
      icon: TrendingUp,
      highlights: ['Data-Driven Yield Management', 'Sales Metric Optimization', 'Profit Margin Enhancement']
    },
    {
      id: 'franchise',
      title: 'Franchise Model',
      badge: 'Brand Standards & Name',
      desc: 'Independent hotel owners operate under the ARROW Hotels brand name, following brand standards for consistent quality.',
      color: 'from-[#001849] to-[#00287A]',
      accentBg: 'bg-[#F5A623]/20 text-[#001849]',
      icon: Handshake,
      highlights: ['Global Brand Recognition', 'Standardized Operating Guidelines', 'Central Distribution Access']
    }
  ];

  // Comprehensive Support Pillars Data
  const supportPillars = {
    operational: {
      id: 'operational',
      title: 'Operational Support',
      tagline: 'Uniform Excellence & Risk Management',
      icon: ShieldCheck,
      color: '#00287A',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      points: [
        'Uniform service standards across all properties',
        'Ongoing staff training programs and skill development',
        'Regular audits and performance evaluations',
        'Risk management and emergency response planning',
        'Continuous modernization to keep properties aligned with current trends'
      ]
    },
    marketing: {
      id: 'marketing',
      title: 'Marketing & Branding',
      tagline: 'High-Impact Brand Presence & Outreach',
      icon: Megaphone,
      color: '#E85D25',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=800&q=80',
      points: [
        'Strong, cohesive brand presence across all channels',
        'Targeted social media, email campaigns, and content marketing',
        'Active monitoring of guest feedback and online reviews',
        'Seasonal and event-based promotional campaigns'
      ]
    },
    sales: {
      id: 'sales',
      title: 'Sales Support',
      tagline: 'Global Distribution & Revenue Optimization',
      icon: DollarSign,
      color: '#00287A',
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      points: [
        'Strategic utilization of OTAs, direct booking platforms, and corporate tie-ups',
        'Access to global distribution systems (Sabre, WorldSpan, Galileo, Amadeus) and centralized domestic reservation system at Arrow Hotels',
        'Active partnerships with tourism boards, local businesses, and travel agencies',
        'Dynamic pricing strategy and yield management to maximize occupancy and profitability'
      ]
    },
    sustainability: {
      id: 'sustainability',
      title: 'Sustainability',
      tagline: 'Responsible Operations & Green Hospitality',
      icon: Leaf,
      color: '#10B981',
      image: 'https://images.unsplash.com/photo-1518780664697-55e3ad937233?auto=format&fit=crop&w=800&q=80',
      points: [
        'Waste management, renewable energy, and eco-friendly guest amenities',
        'Local hiring initiatives and regional supplier sourcing',
        'Community engagement and environmental preservation initiatives'
      ]
    },
    technology: {
      id: 'technology',
      title: 'Technology Integration',
      tagline: 'AI-Driven Systems & Contactless Experiences',
      icon: Cpu,
      color: '#3B82F6',
      image: 'https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?auto=format&fit=crop&w=800&q=80',
      points: [
        'Integrated cloud systems for seamless reservations, billing, and guest management',
        'AI-driven concierge services, contactless check-in, and personalized guest apps',
        'Advanced guest preference and booking pattern analytics',
        'Secure data protection and encrypted digital transaction frameworks'
      ]
    }
  };

  return (
    <div className="pt-16 sm:pt-20 font-sans bg-[#FBF8F2] text-[#14171F]">
      
      {/* ========================================================================= */}
      {/* CINEMATIC LUXURY HOTEL LANDING HERO */}
      {/* ========================================================================= */}
      <section className="relative min-h-[580px] lg:min-h-[640px] flex items-center justify-center text-white overflow-hidden bg-[#001849]">
        {/* Full-bleed Luxury Hotel Background Image */}
        <img 
          src="https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1920&q=80" 
          alt="Arrow Hotels Luxury Resort & Hotel Architecture" 
          className="absolute inset-0 w-full h-full object-cover opacity-35 filter contrast-105"
        />

        {/* Sophisticated Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#001849] via-[#001849]/70 to-[#001233]/90"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center py-16 lg:py-24 space-y-8">
          
          {/* Centered Luxury Glassmorphic Brand Logo Card */}
          <div className="inline-block p-6 sm:p-8 rounded-3xl bg-[#001849]/80 border border-white/25 shadow-2xl backdrop-blur-md hover:border-[#F5A623] transition-colors">
            <BrandLogo 
              variant="dark" 
              size="lg" 
              title="ARROW HOTELS" 
              subtitle="(Unit of Indus Group)" 
              to="/arrow-hotels"
            />
          </div>

          <div>
            <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-[0.25em] text-[#F5A623] bg-white/10 px-4 py-1.5 rounded-full border border-white/15 mb-4">
              <Sparkles className="w-3.5 h-3.5 text-[#F5A623]" />
              <span>Partner With Us • Hotel Development & Management</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-serif font-bold text-white leading-tight max-w-4xl mx-auto">
              Elevate Your Property With Arrow Hotels
            </h1>
          </div>

          <p className="text-base sm:text-lg text-white/85 leading-relaxed font-sans max-w-3xl mx-auto font-normal">
            Unlock the full financial and operational potential of your hotel property. Partner with Arrow Hotels to leverage our proven management models, global distribution systems, and guest-centric innovation.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4 items-center">
            <a 
              href="#partnership-models"
              className="font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-gradient-to-r from-[#F5A623] to-[#E85D25] text-[#001849] font-bold rounded-xl hover:brightness-110 transition-all flex items-center gap-2 shadow-2xl"
            >
              <span>Explore Partnership Models</span>
              <ArrowRight className="w-4 h-4" />
            </a>

            <Link 
              to="/contact"
              className="font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-white/10 border border-white/30 text-white font-semibold hover:bg-white/20 transition-all rounded-xl flex items-center gap-2"
            >
              <span>Contact Partnership Team</span>
            </Link>
          </div>

          {/* Quick Highlight Cards Bar */}
          <div className="pt-10 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-3xl mx-auto border-t border-white/15 text-xs font-mono-code text-white/90">
            <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center justify-center gap-2">
              <ShieldCheck className="w-4 h-4 text-[#F5A623]" />
              <span>Operations & Management</span>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center justify-center gap-2">
              <TrendingUp className="w-4 h-4 text-[#E85D25]" />
              <span>Revenue Share Strategy</span>
            </div>
            <div className="bg-white/5 p-3 rounded-lg border border-white/10 flex items-center justify-center gap-2">
              <Award className="w-4 h-4 text-[#F5A623]" />
              <span>Franchise Brand Standards</span>
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* PARTNERSHIP MODELS SECTION */}
      {/* ========================================================================= */}
      <section id="partnership-models" className="py-20 lg:py-28 bg-[#FBF8F2] border-b border-[#14171F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow justify-center">
              <span>Tailored Collaboration</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#001849] mb-4">
              Flexible Partnership Models
            </h2>
            <p className="text-[#6B6E7A] text-sm sm:text-base leading-relaxed">
              Choose the business model that perfectly aligns with your property goals, operational preferences, and financial expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {models.map((mod) => {
              const ModelIcon = mod.icon;
              return (
                <div 
                  key={mod.id} 
                  className="bg-white rounded-2xl border border-[#14171F]/10 p-8 shadow-sm hover:shadow-2xl hover:border-[#00287A] transition-all duration-300 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Top color bar */}
                  <div className={`absolute top-0 left-0 right-0 h-2 bg-gradient-to-r ${mod.color}`}></div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[10px] font-mono-code font-bold uppercase tracking-wider px-3 py-1 rounded-full ${mod.accentBg}`}>
                        {mod.badge}
                      </span>
                      <div className="w-12 h-12 rounded-xl bg-[#FBF8F2] border border-[#14171F]/10 flex items-center justify-center text-[#00287A] group-hover:scale-110 transition-transform">
                        <ModelIcon className="w-6 h-6 text-[#E85D25]" />
                      </div>
                    </div>

                    <h3 className="text-xl font-serif font-bold text-[#001849] mb-4 group-hover:text-[#00287A] transition-colors">
                      {mod.title}
                    </h3>

                    <p className="text-sm text-[#6B6E7A] leading-relaxed mb-6">
                      {mod.desc}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-[#14171F]/10 space-y-2">
                    {mod.highlights.map((item, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#001849] font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#E85D25] shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* WHAT PARTNERS GET — COMPREHENSIVE SUPPORT (INTERACTIVE TAB & GRID) */}
      {/* ========================================================================= */}
      <section className="py-20 lg:py-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <div className="eyebrow justify-center">
              <span>Comprehensive Ecosystem</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-serif font-bold text-[#001849] mb-4">
              What Partners Get — Full Support
            </h2>
            <p className="text-[#6B6E7A] text-sm sm:text-base leading-relaxed">
              From operational audits and global OTA distribution to AI technology and green practices, we provide end-to-end hotel enablement.
            </p>
          </div>

          {/* Interactive Category Selector Tabs */}
          <div className="flex flex-wrap justify-center gap-3 mb-14">
            {Object.values(supportPillars).map((pillar) => {
              const TabIcon = pillar.icon;
              const isActive = activeTab === pillar.id;

              return (
                <button
                  key={pillar.id}
                  onClick={() => setActiveTab(pillar.id)}
                  className={`px-5 py-3 rounded-xl font-mono-code text-xs uppercase tracking-wider font-bold transition-all flex items-center gap-2 border ${
                    isActive 
                      ? 'bg-[#001849] text-[#F5A623] border-[#001849] shadow-lg scale-105' 
                      : 'bg-[#FBF8F2] text-[#6B6E7A] border-[#14171F]/10 hover:border-[#00287A] hover:text-[#00287A]'
                  }`}
                >
                  <TabIcon className="w-4 h-4" />
                  <span>{pillar.title}</span>
                </button>
              );
            })}
          </div>

          {/* Active Tab Content Card */}
          {supportPillars[activeTab] && (
            <div className="bg-[#FBF8F2] rounded-3xl border border-[#14171F]/10 p-8 sm:p-12 lg:p-14 shadow-xl transition-all duration-500">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
                
                {/* Left Points Column */}
                <div className="lg:col-span-7 space-y-6">
                  <div>
                    <div className="inline-flex items-center gap-2 text-xs font-mono-code font-bold uppercase tracking-widest text-[#E85D25] mb-2">
                      <Sparkles className="w-4 h-4" />
                      <span>{supportPillars[activeTab].tagline}</span>
                    </div>
                    <h3 className="text-2xl sm:text-4xl font-serif font-bold text-[#001849]">
                      {supportPillars[activeTab].title}
                    </h3>
                  </div>

                  <ul className="space-y-4">
                    {supportPillars[activeTab].points.map((point, pIdx) => (
                      <li key={pIdx} className="flex items-start gap-3 bg-white p-4 rounded-xl border border-[#14171F]/10 shadow-sm">
                        <CheckCircle2 className="w-5 h-5 text-[#E85D25] shrink-0 mt-0.5" />
                        <span className="text-sm sm:text-base text-[#14171F] font-medium leading-relaxed">
                          {point}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Right Luxury Visual Image */}
                <div className="lg:col-span-5 relative">
                  <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white group">
                    <img 
                      src={supportPillars[activeTab].image} 
                      alt={supportPillars[activeTab].title}
                      className="w-full h-[400px] object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#001849]/80 via-transparent to-transparent"></div>
                    <div className="absolute bottom-6 left-6 right-6 text-white">
                      <span className="font-mono-code text-[11px] text-[#F5A623] uppercase tracking-wider block mb-1">
                        Arrow Hotels Standard
                      </span>
                      <h4 className="font-serif text-lg font-bold text-white">
                        {supportPillars[activeTab].title} Excellence
                      </h4>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          )}

          {/* Grid Overview of All 5 Pillars */}
          <div className="mt-20 pt-16 border-t border-[#14171F]/10">
            <h3 className="text-xl font-serif font-bold text-[#001849] mb-8 text-center">
              Complete 5-Pillar Partnership Ecosystem
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
              {Object.values(supportPillars).map((item) => {
                const ItemIcon = item.icon;
                return (
                  <div 
                    key={item.id}
                    onClick={() => setActiveTab(item.id)}
                    className="cursor-pointer bg-[#FBF8F2] p-5 rounded-xl border border-[#14171F]/10 hover:border-[#00287A] hover:bg-white transition-all text-center group"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#001849] text-[#F5A623] flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform">
                      <ItemIcon className="w-5 h-5" />
                    </div>
                    <h4 className="font-serif font-bold text-sm text-[#001849] group-hover:text-[#00287A]">
                      {item.title}
                    </h4>
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* CALL TO ACTION FOR HOTEL OWNERS */}
      {/* ========================================================================= */}
      <section className="py-20 bg-gradient-to-r from-[#001849] via-[#00287A] to-[#001849] text-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl space-y-6">
          <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623]">
            <Award className="w-4 h-4" />
            <span>Join Arrow Hotels Portfolio</span>
          </div>

          <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
            Ready to Transform Your Hotel’s Performance?
          </h2>

          <p className="text-white/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto">
            Schedule a confidential partnership discussion with our senior hotel development team today.
          </p>

          <div className="pt-4 flex flex-wrap justify-center gap-4">
            <Link 
              to="/contact"
              className="inline-flex items-center gap-3 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#E85D25] text-white font-bold hover:bg-[#F5A623] hover:text-[#001849] transition-all rounded-lg shadow-xl"
            >
              <span>Submit Partnership Inquiry</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
}
