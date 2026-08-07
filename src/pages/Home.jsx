import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import {
  ArrowRight,
  TrendingUp,
  Briefcase,
  FileText,
  Layers,
  MapPin,
  Users,
  Handshake,
  CheckCircle2,
  Building2,
  Hotel,
  Sparkles,
  DollarSign,
  BarChart3,
  Puzzle,
  Globe,
  ChevronRight,
  ShieldCheck,
  Award,
  Target,
  Sliders,
  Key,
  GitBranch,
  Search,
  Building,
  CheckSquare
} from 'lucide-react';

export default function Home() {
  const navigate = useNavigate();
  const [showHotelBadge, setShowHotelBadge] = useState(true);

  const scrollToArrowHotels = () => {
    const el = document.getElementById('arrow-hotels');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate('/services/hospitality');
    }
  };

  // Partner Brand Logos Data Arrays for Scrolling Marquee
  const hotelLogos = [
    { name: 'Taj Hotels', logo: '/logos/hotels/taj.png' },
    { name: 'Accor Hotels', logo: '/logos/hotels/accor.svg' },
    { name: 'Lemon Tree Hotels', logo: '/logos/hotels/lemon tree.png' },
    { name: 'Mahindra Holidays', logo: '/logos/hotels/mahindra holidays.svg' },
    { name: 'Click Hotels', logo: '/logos/hotels/click hotels.png' }
  ];

  const jewelleryLogos = [
    { name: 'Joyalukkas', logo: '/logos/Jewellers/joyalukkas-logo-png_seeklogo-228688.png' },
    { name: 'Kalyan Jewellers', logo: '/logos/Jewellers/kalyan-jewellers.jpg' },
    { name: 'Malabar Gold & Diamonds', logo: '/logos/Jewellers/malabar.jpg' }
  ];

  const anchorLogos = Array.from({ length: 10 }, (_, i) => ({
    name: `Anchor Partner ${i + 1}`,
    logo: `/logos/Anchor_Brands/Picture${i + 1}.png`
  }));

  const apparelLogos = Array.from({ length: 45 }, (_, i) => ({
    name: `Apparel Partner ${i + 1}`,
    logo: `/logos/Apparel_Brands/Picture${i + 11}.png`
  }));

  const footwearLogos = Array.from({ length: 12 }, (_, i) => ({
    name: `Footwear Partner ${i + 1}`,
    logo: `/logos/Footware/Picture${i + 56}.png`
  }));

  const foodLogos = Array.from({ length: 21 }, (_, i) => ({
    name: `Food Partner ${i + 1}`,
    logo: `/logos/Food/Picture${i + 72}.png`
  }));

  const allBrands = [...hotelLogos, ...jewelleryLogos, ...anchorLogos, ...apparelLogos, ...footwearLogos, ...foodLogos];
  const marqueeBrands = [...allBrands, ...allBrands];

  // 3 Key Stat Cards data
  const statCards = [
    {
      icon: MapPin,
      badge: 'Geographic Reach',
      stat: '5 Key States',
      title: 'South India Coverage',
      desc: 'Specialized in Andhra Pradesh, Telangana, Karnataka, Tamil Nadu & Kerala. Covering Metros, Tier 1, Tier 2, and Tier 3 commercial hubs.',
      highlightColor: 'from-[#00287A] to-[#001849]',
      accentBg: 'bg-[#00287A]/10 text-[#00287A]',
      tags: ['A.P', 'Telangana', 'Karnataka', 'Tamil Nadu', 'Kerala']
    },
    {
      icon: Users,
      badge: 'Dedicated Team',
      stat: '30+',
      title: 'Retail Professionals',
      desc: 'Expert real estate & retail consultants delivering deep market intelligence, spatial planning, and high-stakes lease negotiations.',
      highlightColor: 'from-[#E85D25] to-[#F5A623]',
      accentBg: 'bg-[#E85D25]/10 text-[#E85D25]',
      tags: ['Lease Strategy', 'Tenant Mix', 'Valuations']
    },
    {
      icon: Handshake,
      badge: 'Proven Network',
      stat: '100+',
      title: 'Client Relationships',
      desc: 'Enduring partnerships across diverse commercial trades, global brands, retail chains, and prime property developers.',
      highlightColor: 'from-[#001849] to-[#00287A]',
      accentBg: 'bg-[#F5A623]/15 text-[#E85D25]',
      tags: ['Retail Chains', 'Corporate Hubs', 'Investors']
    }
  ];

  // Commercial Leasing Consultancy Services
  const services = [
    {
      icon: DollarSign,
      emoji: '💰',
      title: 'Negotiation',
      desc: 'Oftentimes, we can help you secure better lease terms and lower rates when negotiating directly with landlords.'
    },
    {
      icon: Briefcase,
      emoji: '💼',
      title: 'Flexible Service',
      desc: 'We offer a range of services from leasing to space planning and everything in between.'
    },
    {
      icon: BarChart3,
      emoji: '📈',
      title: 'Market Reports',
      desc: 'We provide in-depth reports on commercial properties for rent or sale to help you make informed decisions.'
    },
    {
      icon: Puzzle,
      emoji: '🧩',
      title: 'Customized Solutions',
      desc: 'Our leasing consultants can develop and execute a customized solution that is tailored to your specific business needs.'
    }
  ];

  // Process Steps Tree Data
  const treeProcessSteps = [
    {
      step: '01',
      phase: 'Root Phase',
      title: 'Assessment',
      subtitle: 'Understanding Requirements & Location Strategy',
      desc: 'We begin by working with you to identify your specific business needs, financial requirements, and ideal location.',
      icon: Target,
      tag: 'Need Analysis',
      side: 'left',
      nodeColor: 'from-[#F5A623] to-[#E85D25]'
    },
    {
      step: '02',
      phase: 'Growth Branch',
      title: 'Property Selection',
      subtitle: 'Curated Options & Commercial Evaluation',
      desc: 'We provide a range of options and help you select the properties that best meet your requirements.',
      icon: Building,
      tag: 'Site Shortlisting',
      side: 'right',
      nodeColor: 'from-[#00287A] to-[#001849]'
    },
    {
      step: '03',
      phase: 'Refinement Branch',
      title: 'Customization',
      subtitle: 'Lease Terms & Agreement Tailoring',
      desc: 'We work with landlords to customize your lease agreement and negotiate the best terms for your business.',
      icon: Sliders,
      tag: 'Legal & Negotiation',
      side: 'left',
      nodeColor: 'from-[#E85D25] to-[#F5A623]'
    },
    {
      step: '04',
      phase: 'Peak Crown',
      title: 'Signing & Move-In',
      subtitle: 'Agreement Finalization & Stress-Free Onboarding',
      desc: 'We help you finalize the lease agreement and make the move-in process simple and stress-free.',
      icon: Key,
      tag: 'Key Handover',
      side: 'right',
      nodeColor: 'from-[#001849] to-[#00287A]'
    }
  ];

  return (
    <div className="pt-16 sm:pt-20 font-sans">

      {/* ========================================================================= */}
      {/* DIV 1 : HERO / POWERING YOUR GROWTH (Pic beside Text) */}
      {/* ========================================================================= */}
      <section className="relative py-12 md:py-20 lg:py-24 bg-gradient-to-b from-[#FBF8F2] via-white to-[#F1ECE0]/50 border-b border-[#14171F]/10 overflow-hidden">
        {/* Background ambient lighting */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#00287A]/5 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">

            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold uppercase tracking-[0.2em] text-[#E85D25] bg-[#E85D25]/10 px-3.5 py-1.5 rounded-full border border-[#E85D25]/20">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Commercial Leasing Consultancy</span>
              </div>

              <h1 className="tracking-tight text-[#001849] leading-tight">
                <span className="font-sans font-extrabold text-2xl sm:text-4xl lg:text-5xl text-[#001849] uppercase tracking-wide block mb-3">
                  POWERING YOUR GROWTH
                </span>
                <span className="block border-l-4 border-[#E85D25] pl-5 py-1 font-serif text-2xl sm:text-4xl lg:text-5xl text-[#00287A] font-semibold leading-snug">
                  Elevate Your Business With Expert Leasing Consultancy
                </span>
              </h1>

              <p className="text-base sm:text-lg text-[#6B6E7A] leading-relaxed max-w-2xl font-normal pt-2">
                Find diverse commercial spaces across South India, including tailored offices, retail fronts, and industrial hubs to fit your exact business goals.
              </p>

              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <Link
                  to="/contact"
                  className="font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#00287A] text-white font-bold hover:bg-[#001849] transition-all duration-300 flex items-center gap-3 shadow-lg shadow-[#00287A]/20 hover:shadow-xl hover:-translate-y-0.5 group"
                >
                  <span>Request Leasing Consult</span>
                  <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to="/services"
                  className="font-mono-code text-xs uppercase tracking-wider px-7 py-4 border border-[#00287A]/30 text-[#00287A] font-semibold hover:bg-[#00287A]/5 transition-all flex items-center gap-2"
                >
                  <span>Explore All Services</span>
                </Link>
              </div>

              {/* Trust Badges */}
              <div className="pt-6 border-t border-[#14171F]/10 flex flex-wrap items-center gap-6 text-xs text-[#6B6E7A] font-mono-code">
                <span className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#E85D25]" /> Verified Portfolios
                </span>
                <span className="flex items-center gap-2">
                  <Award className="w-4 h-4 text-[#00287A]" /> Premium South India Network
                </span>
              </div>
            </div>

            {/* Right Picture Column */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white bg-[#001849] group">
                <img
                  src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=1200&q=80"
                  alt="Modern Premium Commercial Real Estate Skyscraper"
                  className="w-full h-[420px] sm:h-[500px] object-cover group-hover:scale-105 transition-transform duration-700 opacity-95"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* BRAND LOGOS SCROLLING MARQUEE (TRUSTED BRAND NETWORK) */}
      {/* ========================================================================= */}
      <section className="py-8 bg-[#FBF8F2] border-b border-[#14171F]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-5 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold uppercase tracking-widest text-[#E85D25]">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Trusted Brand Network</span>
            </div>
            <h2 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold text-[#001849] mt-1">
              Brands & Retail Outlets We Work With
            </h2>
          </div>

          {/* <Link
            to="/about"
            className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider bg-[#001849] text-white px-5 py-2.5 rounded-lg hover:bg-[#E85D25] font-bold transition-all shadow shrink-0 group"
          >
            <span>View Category Details</span>
            <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
          </Link> */}
        </div>

        {/* Infinite Marquee Stream */}
        <div className="relative w-full overflow-hidden py-5 bg-white border-y border-[#14171F]/10">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-6 px-4">
            {marqueeBrands.map((brand, idx) => (
              <BrandLogoCard key={idx} brand={brand} />
            ))}
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DIV 2 : INTERACTIVE INSIGHTS BANNER (Click anywhere to redirect /contact) */}
      {/* ========================================================================= */}
      <section className="py-6 bg-[#001849] border-y border-[#F5A623]/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            onClick={() => navigate('/contact')}
            className="group cursor-pointer rounded-xl bg-gradient-to-r from-[#00287A] via-[#001849] to-[#00287A] p-6 md:p-8 border border-white/20 hover:border-[#F5A623] transition-all duration-300 shadow-xl hover:shadow-2xl flex flex-col md:flex-row items-center justify-between gap-4 text-white relative overflow-hidden"
          >
            {/* Background highlight glow on hover */}
            <div className="absolute inset-0 bg-gradient-to-r from-[#F5A623]/10 to-[#E85D25]/10 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none"></div>

            <div className="flex items-center gap-4 relative z-10">
              <div className="w-12 h-12 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 flex items-center justify-center text-[#F5A623] group-hover:scale-110 transition-transform">
                <Sparkles className="w-6 h-6" />
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl md:text-3xl font-serif font-bold tracking-wide text-white group-hover:text-[#F5A623] transition-colors">
                  “Connect with us for professional insights”
                </h3>
                <p className="text-xs sm:text-sm text-white/70 font-mono-code mt-1">
                  Tap anywhere on this banner to get in touch with our expert property advisors
                </p>
              </div>
            </div>

            <div className="relative z-10 flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest text-[#F5A623] group-hover:text-white font-bold shrink-0 bg-white/10 group-hover:bg-[#E85D25] px-6 py-3 rounded-full transition-all">
              <span>Contact Us Now</span>
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1.5 transition-transform" />
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* DIV 3 : CORPORATE LEADERSHIP & GLOBAL SOLUTIONS */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-24 bg-[#FBF8F2] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <div className="eyebrow justify-center">
              <Globe className="w-4 h-4 text-[#00287A]" />
              <span>International Excellence</span>
            </div>

            <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold font-serif text-[#001849] leading-tight">
              Corporate Property Solutions, Asset Investments & Facility Management
            </h2>

            <div className="p-8 sm:p-10 rounded-2xl bg-white border border-[#14171F]/10 shadow-lg relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-gradient-to-b from-[#00287A] to-[#E85D25]"></div>
              <p className="text-base sm:text-xl text-[#14171F]/85 leading-relaxed font-sans text-left sm:text-center italic">
                “We operate as the top international provider for corporate property solutions, asset investments, and vital facility management. By delivering tailored strategies, deep industry knowledge, and market data, we support diverse businesses across all industries and locations.”
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* 3 PREMIUM KEY STAT CARDS (South India Reach, 30 Professionals, 100 Clients) */}
      {/* ========================================================================= */}
      <section className="py-16 md:py-20 bg-[#F1ECE0]/60 border-y border-[#14171F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="text-center max-w-3xl mx-auto mb-14">
            <div className="eyebrow justify-center">
              <span>Key Strengths & Footprint</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#001849]">
              Driven by Regional Expertise & Proven Relationships
            </h2>
            <p className="text-[#6B6E7A] text-sm sm:text-base mt-2">
              Our market dominance spans high-growth commercial hubs across South India with specialized consulting units.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {statCards.map((card, idx) => {
              const IconComp = card.icon;
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-[#14171F]/10 p-8 shadow-sm hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5 flex flex-col justify-between group relative overflow-hidden"
                >
                  {/* Card top accent line */}
                  <div className={`absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r ${card.highlightColor}`}></div>

                  <div>
                    <div className="flex items-center justify-between mb-6">
                      <span className={`text-[11px] font-mono-code font-bold uppercase tracking-wider px-3 py-1 rounded-full ${card.accentBg}`}>
                        {card.badge}
                      </span>
                      <div className="w-10 h-10 rounded-xl bg-[#FBF8F2] border border-[#14171F]/10 flex items-center justify-center text-[#00287A] group-hover:scale-110 transition-transform">
                        <IconComp className="w-5 h-5 text-[#E85D25]" />
                      </div>
                    </div>

                    <div className="text-3xl sm:text-4xl font-serif font-bold text-[#001849] mb-2 group-hover:text-[#00287A] transition-colors">
                      {card.stat}
                    </div>

                    <h3 className="text-lg font-bold text-[#14171F] mb-3">
                      {card.title}
                    </h3>

                    <p className="text-sm text-[#6B6E7A] leading-relaxed mb-6">
                      {card.desc}
                    </p>
                  </div>

                  {/* Card tags */}
                  <div className="pt-4 border-t border-[#14171F]/10 flex flex-wrap gap-2">
                    {card.tags.map((tag, tIdx) => (
                      <span key={tIdx} className="text-[10px] font-mono-code bg-[#FBF8F2] text-[#001849] px-2.5 py-1 rounded-md border border-[#14171F]/10">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* COMMERCIAL LEASING CONSULTANCY : OVERVIEW & CREATIVE TREE-LIKE PROCESS */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Header & Intro */}
          <div className="max-w-3xl mb-16">
            <div className="eyebrow">
              <Briefcase className="w-4 h-4 text-[#E85D25]" />
              <span>Commercial Leasing Consultancy</span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-bold font-serif text-[#001849] mb-6">
              World-Class Commercial Leasing Services
            </h2>
            <p className="text-base sm:text-lg text-[#14171F]/80 leading-relaxed">
              Welcome to our world class commercial leasing consultancy. We provide expert leasing services to help you find the ideal space to grow your business. Our team of industry experts supports you through every stage of the leasing process.
            </p>
          </div>

          {/* Service Overview Grid (4 Cards) */}
          <div className="mb-24">
            <h3 className="text-xl font-serif font-bold text-[#001849] mb-8 flex items-center gap-3">
              <span className="w-2.5 h-2.5 rounded-full bg-[#E85D25]"></span>
              Overview of Our Services
            </h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((srv, idx) => (
                <div
                  key={idx}
                  className="bg-white p-7 rounded-xl border border-[#14171F]/10 hover:border-[#00287A] transition-all duration-300 shadow-sm hover:shadow-xl hover:-translate-y-1 group"
                >
                  <div className="text-3xl mb-4 group-hover:scale-110 transition-transform inline-block">
                    {srv.emoji}
                  </div>
                  <h4 className="text-xl font-bold font-serif text-[#001849] mb-3 group-hover:text-[#00287A]">
                    {srv.title}
                  </h4>
                  <p className="text-sm text-[#6B6E7A] leading-relaxed">
                    {srv.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* ========================================================================= */}
          {/* CREATIVE TREE-LIKE GROWTH DIAGRAM : PROCESS FOR FINDING THE IDEAL SPACE */}
          {/* ========================================================================= */}
          <div className="bg-[#001849] text-white rounded-3xl p-6 sm:p-12 lg:p-16 border border-white/15 shadow-2xl relative overflow-hidden">
            {/* Background tree lighting aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-[#F5A623]/10 to-[#E85D25]/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="relative z-10 text-center max-w-3xl mx-auto mb-16">
              <h3 className="text-3xl sm:text-5xl font-serif font-bold text-white mb-4">
                Process for Finding the Ideal Space
              </h3>
              <p className="text-white/80 text-sm sm:text-base leading-relaxed">
                An organic, step-by-step tree structure guiding your commercial expansion from initial roots to key handover.
              </p>
            </div>

            {/* Tree Structure Container */}
            <div className="relative max-w-5xl mx-auto z-10 py-6">

              {/* Central Trunk Line (Stem) */}
              <div className="hidden md:block absolute left-1/2 top-4 bottom-12 w-1.5 transform -translate-x-1/2 bg-gradient-to-b from-[#F5A623] via-[#E85D25] to-[#00287A] rounded-full shadow-[0_0_15px_rgba(245,166,35,0.5)]"></div>

              {/* Mobile Vertical Trunk Line */}
              <div className="md:hidden absolute left-6 top-4 bottom-12 w-1 bg-gradient-to-b from-[#F5A623] via-[#E85D25] to-[#00287A] rounded-full"></div>

              <div className="space-y-12 md:space-y-16">
                {treeProcessSteps.map((pStep, idx) => {
                  const StepIcon = pStep.icon;
                  const isLeft = pStep.side === 'left';

                  return (
                    <div
                      key={idx}
                      className={`relative flex flex-col md:flex-row items-center ${isLeft ? 'md:flex-row-reverse' : ''
                        }`}
                    >
                      {/* Central Tree Stem Node Point */}
                      <div className="absolute left-6 md:left-1/2 top-6 md:top-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20">
                        <div className="relative flex items-center justify-center">
                          {/* Pulsing outer aura */}
                          <div className="w-10 h-10 rounded-full bg-[#F5A623]/30 animate-ping absolute"></div>

                          {/* Main Trunk Node Ring */}
                          <div className={`w-12 h-12 rounded-full bg-gradient-to-br ${pStep.nodeColor} border-2 border-white flex items-center justify-center shadow-lg text-white font-mono-code text-xs font-bold`}>
                            {pStep.step}
                          </div>
                        </div>
                      </div>

                      {/* Tree Branch Card Column */}
                      <div className={`w-full md:w-1/2 pl-16 md:pl-0 ${isLeft ? 'md:pr-14 md:text-right' : 'md:pl-14 md:text-left'
                        }`}>

                        <div className="bg-[#00287A]/75 border border-white/20 p-7 rounded-2xl shadow-xl hover:shadow-2xl hover:border-[#F5A623] transition-all duration-300 group relative overflow-hidden backdrop-blur-md">
                          {/* Top Branch Indicator Badge */}
                          <div className={`flex items-center gap-2 mb-4 ${isLeft ? 'md:justify-end' : 'md:justify-start'
                            }`}>
                            <span className="text-[11px] font-mono-code uppercase tracking-widest text-[#F5A623] font-bold bg-white/10 px-3 py-1 rounded-full border border-white/10 flex items-center gap-1.5">
                              <StepIcon className="w-3.5 h-3.5 text-[#F5A623]" />
                              {pStep.phase}
                            </span>
                            <span className="text-[10px] font-mono-code text-white/60 bg-[#001849] px-2.5 py-1 rounded-full border border-white/10">
                              {pStep.tag}
                            </span>
                          </div>

                          <h4 className="text-xl sm:text-2xl font-serif font-bold text-white mb-1 group-hover:text-[#F5A623] transition-colors">
                            {pStep.step}. {pStep.title}
                          </h4>

                          <div className="text-xs font-mono-code text-[#F5A623]/90 uppercase tracking-wider mb-4">
                            {pStep.subtitle}
                          </div>

                          <p className="text-xs sm:text-sm text-white/80 leading-relaxed font-sans">
                            {pStep.desc}
                          </p>

                          {/* Horizontal Branch Connector Line to Central Trunk (Desktop) */}
                          <div className={`hidden md:block absolute top-1/2 transform -translate-y-1/2 w-8 h-[2px] bg-gradient-to-r from-[#F5A623] to-[#E85D25] ${isLeft ? '-right-8' : '-left-8'
                            }`}></div>
                        </div>

                      </div>

                      {/* Empty space for grid symmetry on desktop */}
                      <div className="hidden md:block w-1/2"></div>
                    </div>
                  );
                })}
              </div>

              {/* Tree Crown Growth Finish Badge */}
              <div className="mt-16 text-center relative z-20">
                <div className="inline-flex items-center gap-3 bg-gradient-to-r from-[#F5A623] via-[#E85D25] to-[#F5A623] text-[#001849] font-mono-code text-xs uppercase tracking-widest font-bold px-8 py-4 rounded-full shadow-2xl">
                  <Sparkles className="w-4 h-4" />
                  <span>Successful Move-In & Business Launch</span>
                  <CheckSquare className="w-4 h-4" />
                </div>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ========================================================================= */}
      {/* ABOUT ARROW HOTELS (Unit of Indus Group) */}
      {/* ========================================================================= */}
      <section id="arrow-hotels" className="py-20 md:py-28 bg-[#00287A] text-white relative overflow-hidden">
        {/* Decorative background watermark */}
        <div className="absolute top-0 right-0 w-96 h-96 opacity-10 pointer-events-none">
          <Hotel className="w-full h-full text-white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            {/* Left Text & Highlight Content */}
            <div className="lg:col-span-7 space-y-8">
              <div>
                {/* Brand Logo placement with custom title & subtitle */}
                <div className="mb-6 flex flex-col items-start">
                  <BrandLogo
                    variant="dark"
                    title="ARROW HOTELS"
                    subtitle="(Unit of Indus Group)"
                    to="/services/hospitality"
                  />
                </div>

                <div className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-widest px-4 py-1.5 rounded-full bg-[#F5A623]/20 border border-[#F5A623]/40 text-[#F5A623] mb-4">
                  <Hotel className="w-4 h-4" />
                  <span>About Arrow Hotels (Unit of Indus Group)</span>
                </div>

                <h2 className="text-3xl sm:text-5xl font-serif font-bold text-white leading-tight">
                  Redefining Budget & Mid-Scale Hospitality
                </h2>
              </div>

              {/* Highlighted Brand Vision Box */}
              <div className="bg-[#001849] p-7 rounded-2xl border-l-4 border-[#F5A623] shadow-xl">
                <div className="font-mono-code text-xs uppercase tracking-widest text-[#F5A623] mb-2 font-bold flex items-center gap-2">
                  <Sparkles className="w-4 h-4 text-[#F5A623]" />
                  <span>Brand Vision</span>
                </div>
                <p className="font-serif text-lg sm:text-xl text-white italic leading-relaxed">
                  “Our Brand Vision is to establish Arrow Hotels as a leading Hospitality Brand, recognized for its Unparalleled Service, Thoughtfully Curated Properties, and Commitment to Sustainability.”
                </p>
              </div>

              {/* Introduction & Details */}
              <div className="space-y-4 text-white/85 text-sm sm:text-base leading-relaxed font-sans">
                <p>
                  Arrow Hotels is a nextgeneration hospitality brand committed to redefining the budget and mid-scale hotel experience. With a strong focus on guest-centric service, innovative design, and sustainable operations.
                </p>

                <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                  <CheckCircle2 className="w-5 h-5 text-[#F5A623] shrink-0 mt-0.5" />
                  <p className="text-xs sm:text-sm text-white/90">
                    Arrow Hotels aims to set a new standard in the hospitality industry to offer an exquisite blend of modern comfort and local authenticity, creating immersive experiences that cater to both business and leisure travelers.
                  </p>
                </div>
              </div>

              <div className="pt-2">
                <Link
                  to="/about"
                  className="inline-flex items-center gap-3 font-mono-code text-xs uppercase tracking-wider px-7 py-4 bg-gradient-to-r from-[#F5A623] to-[#E85D25] text-[#001849] font-bold rounded-lg hover:brightness-110 transition-all shadow-lg"
                >
                  <span>Explore Arrow Hotels Sector</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>

            {/* Right Visual Image Showcase */}
            <div className="lg:col-span-5 relative">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-white/20 group">
                <img
                  src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80"
                  alt="Arrow Hotels Luxury Interior"
                  className="w-full h-[450px] object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#001849] via-transparent to-transparent opacity-80"></div>
                <div className="absolute bottom-6 left-6 right-6 text-white">
                  <span className="text-[11px] font-mono-code text-[#F5A623] uppercase tracking-wider block mb-1">
                    Indus Group Hospitality Venture
                  </span>
                  <h4 className="font-serif text-xl font-bold text-white">
                    Exquisite Blend of Modern Comfort
                  </h4>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* FINAL CALL TO ACTION */}
      {/* ========================================================================= */}
      <section className="py-16 bg-gradient-to-r from-[#001849] via-[#00287A] to-[#001849] text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl sm:text-4xl font-serif font-bold text-white mb-2">
              Ready to Accelerate Your Commercial Strategy?
            </h2>
            <p className="text-white/80 text-sm sm:text-base">
              Speak with our leasing consultants and property managers today.
            </p>
          </div>

          <Link
            to="/contact"
            className="font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#E85D25] text-white font-bold hover:bg-[#F5A623] hover:text-[#001849] transition-all duration-300 rounded-lg shrink-0 shadow-lg flex items-center gap-2"
          >
            <span>Book A Free Consultation</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* FLOATING QUICK NOTICE FOR ARROW HOTELS */}
      {showHotelBadge && (
        <div className="fixed bottom-6 right-6 z-50 animate-bounce transition-all duration-300">
          <div 
            onClick={scrollToArrowHotels}
            className="cursor-pointer bg-[#001849] text-white p-3.5 sm:p-4 rounded-2xl border-2 border-[#F5A623] shadow-2xl hover:scale-105 transition-transform flex items-center gap-3 relative group"
          >
            <div className="w-10 h-10 rounded-xl bg-[#001233] border border-[#F5A623]/40 flex items-center justify-center p-1.5 shrink-0 shadow-md">
              <svg viewBox="0 0 200 135" fill="none" className="w-7 h-7">
                <defs>
                  <linearGradient id="arrowTopNotice" x1="0%" y1="100%" x2="100%" y2="0%">
                    <stop offset="0%" stopColor="#FFDC00" />
                    <stop offset="45%" stopColor="#FF8800" />
                    <stop offset="100%" stopColor="#E85D25" />
                  </linearGradient>
                  <linearGradient id="arrowBottomNotice" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#FF6000" />
                    <stop offset="60%" stopColor="#D93B00" />
                    <stop offset="100%" stopColor="#9E1B00" />
                  </linearGradient>
                </defs>
                <g transform="translate(10, 5)">
                  <polygon points="10,110 180,5 118,78" fill="url(#arrowTopNotice)" />
                  <polygon points="118,78 180,5 142,125" fill="url(#arrowBottomNotice)" />
                </g>
              </svg>
            </div>
            <div>
              <div className="flex items-center gap-1.5 text-[10px] font-mono-code uppercase tracking-wider text-[#F5A623] font-bold">
                <span>Arrow Hotels</span>
                <img
                  src="/registered-trademark.png"
                  alt="Registered Trademark"
                  className="h-4 sm:h-4.5 w-auto object-contain shrink-0 opacity-90 inline-block"
                  title="Registered Trademark"
                />
                <span className="w-2 h-2 rounded-full bg-[#E85D25] animate-ping ml-0.5"></span>
              </div>
              <div className="font-serif font-bold text-xs sm:text-sm text-white group-hover:text-[#F5A623] transition-colors flex items-center gap-1">
                <span>Unit of Indus Group</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#F5A623]" />
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowHotelBadge(false);
              }}
              className="ml-2 text-white/40 hover:text-white p-1 text-xs"
              title="Close notice"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// Brand Logo Card Component with Automatic Fallback for Missing Files & High Contrast Support
function BrandLogoCard({ brand }) {
  const [imgError, setImgError] = useState(false);
  const isDarkLogo = brand.category === 'Hotels' || brand.logo?.includes('/hotels/') || brand.name?.toLowerCase().includes('lemon') || brand.name?.toLowerCase().includes('accor') || brand.name?.toLowerCase().includes('mahindra');

  return (
    <div className={`shrink-0 w-44 sm:w-48 border border-[#14171F]/10 rounded-xl p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all hover:border-[#E85D25] group/brand h-22 sm:h-24 ${isDarkLogo ? 'bg-[#001849]' : 'bg-white'}`}>
      {!imgError ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setImgError(true)}
          className="h-12 sm:h-14 w-auto object-contain max-w-[140px] group-hover/brand:scale-105 transition-transform"
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className={`w-8 h-8 rounded-lg flex items-center justify-center font-serif font-bold text-xs border ${isDarkLogo ? 'bg-white/10 text-white border-white/20' : 'bg-[#001849]/5 text-[#001849] border-[#001849]/10'}`}>
            {brand.name.charAt(0)}
          </div>
          <span className={`font-serif font-bold text-[10px] text-center line-clamp-1 ${isDarkLogo ? 'text-white' : 'text-[#001849]'}`}>
            {brand.name}
          </span>
        </div>
      )}
    </div>
  );
}
