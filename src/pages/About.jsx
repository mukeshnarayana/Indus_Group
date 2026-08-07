import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import BrandLogo from '../components/BrandLogo';
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, Users, Compass, Sparkles, X, Mail, Phone, Grid, Layers, Building2, ShoppingBag, Utensils, Footprints, Globe, Hotel } from 'lucide-react';

export default function About() {
  const [showBioModal, setShowBioModal] = useState(false);
  const [showBrandModal, setShowBrandModal] = useState(false);
  const [selectedBrandCategory, setSelectedBrandCategory] = useState('All');

  const pillars = [
    {
      title: 'Universal Architectural Design',
      desc: 'Our properties feature zero-step entries, wide corridor clearances, automated tactile navigation, and motor-adjusted fixtures to accommodate every physical need gracefully.',
      icon: ShieldCheck
    },
    {
      title: 'Acoustic & Sensory Harmony',
      desc: 'Engineered quiet zones, ambient dimmable lighting, and sensory-soothing materials ensure guests sensitive to environmental triggers feel calm and relaxed.',
      icon: Heart
    },
    {
      title: 'Cross-Sector Integration',
      desc: 'By connecting retail, office, and industrial stays, we provide a unified hospitality ecosystem for business executives and leisure travelers alike.',
      icon: Compass
    },
    {
      title: 'Bespoke Concierge Care',
      desc: 'Our staff undergoes specialized training in sign language, mobility assistance, and neurodiverse guest care to deliver personalized 5-star support.',
      icon: Award
    }
  ];

  const promoter = {
    name: 'Tejeswara Rao Pagoti',
    role: 'Promoter of Arrow Hotels',
    email: 'tejeswararao@indusgroup.in',
    phone: '+91 8420861234',
    image: '/tejeswara_rao_pagoti.jpg',
    bio: [
      "Tejeswara Rao Pagoti, aged 34, is the driving force behind Arrow Hotels, bringing a wealth of experience in the hospitality and real estate sectors. He holds a Diploma in Hotel Management.",
      "In addition to leading Arrow Hotels, he is the founder of Arrow Hub, a prominent property leasing solutions company. His deep industry insights and strategic expertise allow him to identify prime locations and structure scalable hospitality ventures efficiently.",
      "Having previously worked with the Tourism Development Corporation of the state government, he possesses a strong understanding of regional tourism trends, government policies, and hospitality infrastructure. This experience, coupled with his extensive network, enables him to leverage market positioning to scale Arrow Group of Hotels at a rapid yet sustainable pace.",
      "Under his leadership, the brand is poised to redefine hospitality by blending premium experiences with operational excellence, ensuring robust growth and long-term value creation."
    ]
  };

  // Hotels Brands (Arrow Hotels, Taj, Accor, Lemon Tree, Mahindra Holidays, Click Hotels)
  const hotelLogos = [
    { name: 'Taj Hotels', logo: '/logos/hotels/taj.png', category: 'Hotels' },
    { name: 'Accor Hotels', logo: '/logos/hotels/accor.svg', category: 'Hotels' },
    { name: 'Lemon Tree Hotels', logo: '/logos/hotels/lemon tree.png', category: 'Hotels' },
    { name: 'Mahindra Holidays', logo: '/logos/hotels/mahindra holidays.svg', category: 'Hotels' },
    { name: 'Click Hotels', logo: '/logos/hotels/click hotels.png', category: 'Hotels' }
  ];

  // Jewellers Brands (Joyalukkas, Kalyan Jewellers, Malabar Gold & Diamonds)
  const jewelleryLogos = [
    { name: 'Joyalukkas', logo: '/logos/Jewellers/joyalukkas-logo-png_seeklogo-228688.png', category: 'Jewellers' },
    { name: 'Kalyan Jewellers', logo: '/logos/Jewellers/kalyan-jewellers.jpg', category: 'Jewellers' },
    { name: 'Malabar Gold & Diamonds', logo: '/logos/Jewellers/malabar.jpg', category: 'Jewellers' }
  ];

  // Anchor Brands (10 files: Picture1.png to Picture10.png)
  const anchorLogos = Array.from({ length: 10 }, (_, i) => ({
    name: `Anchor Partner ${i + 1}`,
    logo: `/logos/Anchor_Brands/Picture${i + 1}.png`,
    category: 'Anchor Brands'
  }));

  // Apparel Brands (45 files: Picture11.png to Picture55.png)
  const apparelLogos = Array.from({ length: 45 }, (_, i) => ({
    name: `Apparel Partner ${i + 1}`,
    logo: `/logos/Apparel_Brands/Picture${i + 11}.png`,
    category: 'Apparel Brands'
  }));

  // Footwear Brands (12 files: Picture56.png to Picture67.png)
  const footwearLogos = Array.from({ length: 12 }, (_, i) => ({
    name: `Footwear Partner ${i + 1}`,
    logo: `/logos/Footware/Picture${i + 56}.png`,
    category: 'Footwear'
  }));

  // Food & Beverage Brands (21 files: Picture72.png to Picture92.png)
  const foodLogos = Array.from({ length: 21 }, (_, i) => ({
    name: `Food Partner ${i + 1}`,
    logo: `/logos/Food/Picture${i + 72}.png`,
    category: 'Food Brands'
  }));

  const brandCategories = [
    {
      id: 'hotels',
      title: 'Hotels & Hospitality',
      description: 'Luxury, business, and mid-scale hotel brands and resort chains',
      badge: 'Hotels',
      icon: Hotel,
      brands: hotelLogos
    },
    {
      id: 'jewellers',
      title: 'Jewellers & Fine Luxury',
      description: 'Premier national and international gold, diamond & fine jewellery brands',
      badge: 'Jewellers',
      icon: Sparkles,
      brands: jewelleryLogos
    },
    {
      id: 'anchor',
      title: 'Anchor Brands',
      description: 'Major flagship retail partners and anchor commercial developments',
      badge: 'Anchor Brands',
      icon: Building2,
      brands: anchorLogos
    },
    {
      id: 'apparel',
      title: 'Apparel Brands',
      description: 'Leading national and international fashion & apparel chains',
      badge: 'Apparel Brands',
      icon: ShoppingBag,
      brands: apparelLogos
    },
    {
      id: 'footwear',
      title: 'Footwear Brands',
      description: 'Renowned athletic, formal, and casual footwear outlets',
      badge: 'Footwear',
      icon: Footprints,
      brands: footwearLogos
    },
    {
      id: 'food',
      title: 'Food & Beverage Brands',
      description: 'Gourmet dining, cafe, and quick-service restaurant chains',
      badge: 'Food Brands',
      icon: Utensils,
      brands: foodLogos
    }
  ];

  // Flattened for combined marquee loop
  const allBrands = brandCategories.flatMap(c => c.brands);
  const marqueeBrands = [...allBrands, ...allBrands];

  return (
    <div className="pt-20">

      {/* Hero Banner */}
      <section className="bg-[#001849] text-white py-16 md:py-24 relative overflow-hidden">
        {/* Background glow accents */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#F5A623]/10 rounded-full blur-3xl pointer-events-none -z-0"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="eyebrow text-[#F5A623]">
                <span>Our Purpose & History</span>
              </div>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-serif text-white leading-tight">
                Redefining Luxury Through Inclusivity.
              </h1>
              <p className="text-base sm:text-lg text-white/85 max-w-2xl font-sans leading-relaxed">
                Arrow Hotels was established with a singular vision: to dismantle the false boundary between high-end architectural luxury and total physical accessibility.
              </p>
            </div>

            {/* Right Column: Arrow Hotels Brand Logo Card */}
            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="p-7 sm:p-9 rounded-3xl bg-white/10 border border-white/20 shadow-2xl backdrop-blur-md hover:border-[#F5A623] transition-all duration-300 transform hover:scale-105">
                <BrandLogo
                  variant="dark"
                  size="lg"
                  title="ARROW HOTELS"
                  subtitle="(Unit of Indus Group)"
                  to="/services/hospitality"
                />
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* ========================================================================= */}
      {/* MAIN STORY, HERITAGE & LEADERSHIP (WARM LUXURY LIGHT THEME) */}
      {/* ========================================================================= */}
      <section className="py-20 md:py-28 bg-[#FBF8F2] text-[#14171F] relative overflow-hidden border-t border-[#14171F]/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* LEGACY & BRAND STORY GRID */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center mb-24">
            
            {/* Left Column: Brand Story & Narrative */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 text-[11px] font-mono-code font-bold uppercase tracking-[0.2em] text-[#E85D25] bg-[#E85D25]/10 px-3.5 py-1.5 rounded-full border border-[#E85D25]/20">
                <Sparkles className="w-3.5 h-3.5 text-[#E85D25]" />
                <span>The Arrow Hotels Legacy</span>
              </div>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-bold text-[#001849] leading-tight">
                Backed by Arrow Hotels Heritage of Excellence
              </h2>

              <div className="space-y-4 text-[#14171F]/80 text-base sm:text-lg leading-relaxed font-sans">
                <p className="border-l-4 border-[#E85D25] pl-4 italic text-[#001849] font-medium">
                  Pioneering comfortable hospitality, Arrow Hotels is a mid-scale hotel brand thoughtfully designed to meet the needs of regional business travelers, leisure guests, and families.
                </p>
                <p>
                  Combining modern amenities with warm, personalized service, our hotels provide the perfect balance of comfort, convenience, and affordability — ensuring every visit feels effortless and rewarding. Every stay is crafted to deliver a genuine <span className="text-[#E85D25] font-semibold">“home away from home”</span> experience.
                </p>
              </div>

              {/* 5 Principles Grid Cards */}
              <div className="pt-4">
                <h3 className="text-xs font-mono-code uppercase tracking-wider text-[#E85D25] font-bold mb-4 flex items-center gap-2">
                  <Award className="w-4 h-4" />
                  <span>Our 5 Core Operating Principles</span>
                </h3>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="bg-white border border-[#14171F]/10 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#E85D25] transition-all flex items-start gap-3 group">
                    <CheckCircle2 className="w-4 h-4 text-[#E85D25] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#001849] block">Guest-Centric Excellence</span>
                      <span className="text-[11px] text-[#6B6E7A]">Tailored services & modern technology</span>
                    </div>
                  </div>

                  <div className="bg-white border border-[#14171F]/10 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#E85D25] transition-all flex items-start gap-3 group">
                    <Sparkles className="w-4 h-4 text-[#E85D25] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#001849] block">Sustainable Growth</span>
                      <span className="text-[11px] text-[#6B6E7A]">Eco-friendly practices & green operations</span>
                    </div>
                  </div>

                  <div className="bg-white border border-[#14171F]/10 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#E85D25] transition-all flex items-start gap-3 group">
                    <Globe className="w-4 h-4 text-[#00287A] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#001849] block">Local & Global Integration</span>
                      <span className="text-[11px] text-[#6B6E7A]">Cultural depth with global quality standards</span>
                    </div>
                  </div>

                  <div className="bg-white border border-[#14171F]/10 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#E85D25] transition-all flex items-start gap-3 group">
                    <Compass className="w-4 h-4 text-[#E85D25] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#001849] block">Strategic Market Expansion</span>
                      <span className="text-[11px] text-[#6B6E7A]">Disciplined growth in high-yield hubs</span>
                    </div>
                  </div>

                  <div className="sm:col-span-2 bg-white border border-[#14171F]/10 p-4 rounded-xl shadow-sm hover:shadow-md hover:border-[#E85D25] transition-all flex items-start gap-3 group">
                    <Award className="w-4 h-4 text-[#E85D25] shrink-0 mt-0.5" />
                    <div>
                      <span className="text-xs font-bold text-[#001849] block">Partner & Investor Value</span>
                      <span className="text-[11px] text-[#6B6E7A]">Financially disciplined, high-return business models</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Action Link */}
              <div className="pt-2">
                <Link
                  to="/arrow-hotels"
                  className="inline-flex items-center gap-3 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#001849] text-white font-bold hover:bg-[#E85D25] transition-all rounded-xl shadow-lg group"
                >
                  <span>Explore Arrow Hotels Sector Page</span>
                  <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Right Column: Staggered Image Gallery */}
            <div className="lg:col-span-5 relative">
              <div className="relative z-10 space-y-6">
                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white group">
                  <img
                    src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80"
                    alt="Arrow Hotels Luxury Room Interior"
                    className="w-full h-64 sm:h-72 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-white border-t border-[#14171F]/10">
                    <span className="text-xs font-serif italic text-[#001849] font-bold">Modern Guest Suites & Executive Care</span>
                  </div>
                </div>

                <div className="rounded-2xl overflow-hidden shadow-xl border-4 border-white group ml-6 sm:ml-10 -mt-10">
                  <img
                    src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=800&q=80"
                    alt="Arrow Hotels Architectural Entrance"
                    className="w-full h-56 sm:h-64 object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="p-4 bg-white border-t border-[#14171F]/10 flex items-center justify-between">
                    <span className="text-xs font-mono-code text-[#001849] font-bold">Regional Hospitality Landmark</span>
                    <Sparkles className="w-4 h-4 text-[#E85D25]" />
                  </div>
                </div>
              </div>
            </div>

          </div>

          {/* Leadership Team */}
          <div className="pt-16 border-t border-[#14171F]/10">
            <div className="text-center max-w-3xl mx-auto mb-14">
              <div className="eyebrow justify-center">
                <span>Visionary Leadership</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001849]">
                Meet Our Leadership
              </h2>
            </div>

            <div className="max-w-sm mx-auto">
              <div
                onClick={() => setShowBioModal(true)}
                className="bg-white border border-[#14171F]/10 rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 cursor-pointer group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img
                    src={promoter.image}
                    alt={promoter.name}
                    className="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-500"
                  />

                  {/* Hover Overlay showing Email & Phone logos */}
                  <div className="absolute inset-0 bg-[#001849]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4">
                    <a
                      href={`mailto:${promoter.email}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#E85D25] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                      title={`Email ${promoter.name}`}
                    >
                      <Mail className="w-4 h-4 text-white" />
                    </a>
                    <a
                      href={`tel:${promoter.phone}`}
                      onClick={(e) => e.stopPropagation()}
                      className="w-10 h-10 rounded-full bg-white/20 hover:bg-[#E85D25] text-white flex items-center justify-center transition-all duration-300 transform hover:scale-110 shadow-lg"
                      title={`Call ${promoter.name}`}
                    >
                      <Phone className="w-4 h-4 text-white" />
                    </a>
                  </div>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-[#001849]">
                    {promoter.name}
                  </h3>
                  <div className="font-mono-code text-[11px] text-[#E85D25] uppercase tracking-wider mb-2.5">
                    {promoter.role}
                  </div>
                  <p className="text-xs text-[#6B6E7A] leading-relaxed line-clamp-3 mb-3">
                    {promoter.bio[0]}
                  </p>
                  <div className="pt-2.5 border-t border-gray-100 flex items-center justify-between text-xs font-mono-code font-bold text-[#001849] group-hover:text-[#E85D25] transition-colors">
                    <span>READ FULL PROFILE</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Our Clients & Brand Partners Marquee Section */}
      <section className="py-20 bg-white border-t border-[#14171F]/10 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div>
              <div className="eyebrow">
                <span>Our Clients & Partners</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001849]">
                Trusted Brand Network
              </h2>
              <p className="text-white/80 text-sm sm:text-base font-sans max-w-xl font-light">
                Showcasing our esteemed clients spanning Jewellers, Anchor Brands, Apparel Brands, Footwear, and Food & Beverage outlets.
              </p>
            </div>

            <button
              onClick={() => {
                setSelectedBrandCategory('All');
                setShowBrandModal(true);
              }}
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-6 py-3.5 bg-[#001849] text-white font-bold hover:bg-[#E85D25] transition-colors rounded-lg shadow shrink-0 self-start md:self-auto group"
            >
              <span>View Category Details</span>
              <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* Combined Infinite Marquee Stream */}
        <div className="relative w-full overflow-hidden py-6 bg-[#FBF8F2] border-y border-[#14171F]/10">
          <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FBF8F2] to-transparent z-10 pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FBF8F2] to-transparent z-10 pointer-events-none" />

          <div className="animate-marquee flex gap-6 px-4">
            {marqueeBrands.map((brand, idx) => (
              <BrandLogoCard key={idx} brand={brand} />
            ))}
          </div>
        </div>

        {/* Category Cards Overview */}
        {/* <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {brandCategories.map((cat) => {
              const IconComp = cat.icon;
              return (
                <div
                  key={cat.id}
                  onClick={() => {
                    setSelectedBrandCategory(cat.badge);
                    setShowBrandModal(true);
                  }}
                  className="bg-[#FBF8F2] border border-[#14171F]/10 p-6 rounded-xl hover:border-[#E85D25] hover:shadow-lg transition-all cursor-pointer group flex flex-col justify-between"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-[#001849]/5 text-[#E85D25] flex items-center justify-center mb-4 group-hover:bg-[#E85D25] group-hover:text-white transition-colors">
                      <IconComp className="w-6 h-6" />
                    </div>
                    <span className="font-mono-code text-[11px] font-bold text-[#E85D25] uppercase tracking-wider block mb-1">
                      {cat.badge}
                    </span>
                    <h4 className="font-serif font-bold text-xl text-[#001849] mb-2">
                      {cat.title}
                    </h4>
                    <p className="text-xs text-[#6B6E7A] leading-relaxed mb-4">
                      {cat.description}
                    </p>
                  </div>

                  <div className="pt-3 border-t border-[#14171F]/10 flex items-center justify-between text-xs font-mono-code font-bold text-[#001849] group-hover:text-[#E85D25] transition-colors">
                    <span>EXPLORE BRANDS</span>
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </div>
              );
            })}
          </div>
        </div> */}
      </section>

      {/* Brand Category Modal / Details View */}
      {showBrandModal && (
        <div
          className="fixed inset-0 z-50 bg-[#001849]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setShowBrandModal(false)}
        >
          <div
            className="bg-white max-w-4xl w-full rounded-2xl shadow-2xl overflow-hidden relative my-8 border border-[#001849]/10 animate-fadeIn"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="bg-[#001849] text-white p-6 sm:p-8 flex items-start justify-between">
              <div>
                <span className="font-mono-code text-xs text-[#F5A623] uppercase tracking-widest block mb-1">
                  Client & Partner Network
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white">
                  Brand Categories & Partners
                </h3>
              </div>
              <button
                onClick={() => setShowBrandModal(false)}
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Category Filter Tabs */}
            <div className="bg-[#FBF8F2] px-6 py-3 border-b border-[#14171F]/10 flex items-center gap-2 overflow-x-auto">
              {['All', 'Hotels', 'Jewellers', 'Anchor Brands', 'Apparel Brands', 'Footwear', 'Food Brands'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setSelectedBrandCategory(tab)}
                  className={`px-4 py-2 rounded-lg font-mono-code text-xs font-bold transition-all whitespace-nowrap ${selectedBrandCategory === tab
                      ? 'bg-[#001849] text-white shadow-sm'
                      : 'bg-white text-[#14171F]/70 hover:bg-gray-200'
                    }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Modal Body - Category Grids */}
            <div className="p-6 sm:p-8 max-h-[60vh] overflow-y-auto space-y-10">
              {brandCategories
                .filter(cat => selectedBrandCategory === 'All' || cat.badge === selectedBrandCategory)
                .map((cat) => (
                  <div key={cat.id} className="space-y-4">
                    <div className="border-b border-[#14171F]/10 pb-3 flex items-center justify-between">
                      <div>
                        <h4 className="font-serif text-xl font-bold text-[#001849]">
                          {cat.title}
                        </h4>
                        <p className="text-xs text-[#6B6E7A]">
                          {cat.description}
                        </p>
                      </div>
                      <span className="font-mono-code text-xs bg-[#E85D25]/10 text-[#E85D25] px-3 py-1 rounded-full font-bold uppercase shrink-0">
                        {cat.brands.length} Brands
                      </span>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                      {cat.brands.map((b, i) => (
                        <div key={i} className="flex justify-center">
                          <BrandLogoCard brand={b} />
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FBF8F2] px-6 py-4 border-t border-[#14171F]/10 flex items-center justify-between">
              <span className="text-xs font-mono-code text-[#6B6E7A]">
                Arrow Group Client & Partner Network
              </span>
              <button
                onClick={() => setShowBrandModal(false)}
                className="px-6 py-2.5 bg-[#001849] text-white font-mono-code text-xs font-bold uppercase rounded-lg hover:bg-[#E85D25] transition-colors shadow shrink-0"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Full Bio Modal */}
      {showBioModal && (
        <div
          className="fixed inset-0 z-50 bg-[#001849]/75 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 overflow-y-auto"
          onClick={() => setShowBioModal(false)}
        >
          <div
            className="bg-white max-w-2xl w-full rounded-2xl shadow-2xl overflow-hidden relative my-8 animate-fadeIn border border-[#001849]/10"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header Bar */}
            <div className="bg-[#001849] text-white p-6 sm:p-8 relative flex items-start justify-between">
              <div className="flex items-center gap-4 sm:gap-6">
                <img
                  src={promoter.image}
                  alt={promoter.name}
                  className="w-20 h-20 sm:w-24 sm:h-24 rounded-full object-cover object-top border-4 border-[#F5A623] shadow-md shrink-0"
                />
                <div>
                  <h3 className="font-serif text-2xl sm:text-3xl font-bold text-white mb-1">
                    {promoter.name}
                  </h3>
                  <div className="font-mono-code text-xs sm:text-sm text-[#F5A623] tracking-wider font-semibold uppercase">
                    {promoter.role}
                  </div>
                </div>
              </div>
              <button
                onClick={() => setShowBioModal(false)}
                className="text-white/70 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors shrink-0"
                aria-label="Close modal"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-6 sm:p-8 space-y-4 max-h-[60vh] overflow-y-auto text-[#14171F]/85 leading-relaxed font-sans">
              {promoter.bio.map((paragraph, idx) => (
                <p key={idx} className="text-sm sm:text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Modal Footer */}
            <div className="bg-[#FBF8F2] px-6 py-4 border-t border-[#14171F]/10 flex justify-between items-center">
              <span className="text-xs font-mono-code text-[#6B6E7A]">Arrow Hotels Leadership</span>
              <button
                onClick={() => setShowBioModal(false)}
                className="px-6 py-2.5 bg-[#001849] text-white font-mono-code text-xs font-bold uppercase rounded-lg hover:bg-[#E85D25] transition-colors shadow"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CTA */}
      <section className="py-16 bg-[#00287A] text-white text-center">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Have Specific Accessibility or Business Suite Requirements?
          </h2>
          <p className="text-white/80 mb-8 max-w-xl mx-auto">
            Our guest care team is ready to customize room settings prior to your arrival.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#E85D25] text-white font-bold hover:bg-[#F5A623] hover:text-[#001849] transition-colors"
          >
            <span>Connect With Concierge</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

    </div>
  );
}

// Brand Logo Card Component with Automatic Fallback for Missing Files & High Contrast Support
function BrandLogoCard({ brand }) {
  const [imgError, setImgError] = useState(false);
  const isDarkLogo = brand.category === 'Hotels' || brand.logo?.includes('/hotels/') || brand.name?.toLowerCase().includes('lemon') || brand.name?.toLowerCase().includes('accor') || brand.name?.toLowerCase().includes('mahindra');

  return (
    <div className={`shrink-0 w-48 border border-[#14171F]/10 rounded-xl p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all hover:border-[#E85D25] group/brand h-24 ${isDarkLogo ? 'bg-[#001849]' : 'bg-white'}`}>
      {!imgError ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setImgError(true)}
          className="h-14 w-auto object-contain max-w-[150px] group-hover/brand:scale-105 transition-transform"
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className={`w-9 h-9 rounded-lg flex items-center justify-center font-serif font-bold text-sm border ${isDarkLogo ? 'bg-white/10 text-white border-white/20' : 'bg-[#001849]/5 text-[#001849] border-[#001849]/10'}`}>
            {brand.name.charAt(0)}
          </div>
          <span className={`font-serif font-bold text-[11px] text-center line-clamp-1 ${isDarkLogo ? 'text-white' : 'text-[#001849]'}`}>
            {brand.name}
          </span>
        </div>
      )}
    </div>
  );
}
