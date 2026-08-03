import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, Users, Compass, Sparkles, X, Mail, Phone, Grid, Layers, Building2, ShoppingBag, Utensils, Footprints } from 'lucide-react';

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
      <section className="bg-[#001849] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow text-[#F5A623]">
            <span>Our Purpose & History</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-3xl mb-6">
            Redefining Luxury Through Inclusivity.
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            Arrow Hotels was established with a singular vision: to dismantle the false boundary between high-end architectural luxury and total physical accessibility.
          </p>
        </div>
      </section>

      {/* Main Story & Heritage */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
            <div>
              <div className="eyebrow">
                <span>The Arrow Hotels Legacy</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-[#001849] mb-6">
                Back by the Indus Group's Heritage of Excellence
              </h2>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-6">
                Arrow Hotels is the hospitality brand of Indus Group, built to redefine modern hospitality through a blend of comfort, innovation, and personalized service. We create guest experiences that combine luxury, convenience, and cultural authenticity — while maintaining global standards of excellence.
              </p>

              <div className="mb-6 space-y-2">
                <p className="font-semibold text-[#001849] text-base mb-3">
                  Our approach is guided by five principles:
                </p>
                <ul className="space-y-2.5 text-[#14171F]/85 text-sm sm:text-base leading-relaxed">
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E85D25] font-bold">•</span>
                    <span><strong>Guest-centric excellence</strong> — tailored services, modern technology, and unique stays</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E85D25] font-bold">•</span>
                    <span><strong>Sustainable growth</strong> — eco-friendly practices and responsible operations</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E85D25] font-bold">•</span>
                    <span><strong>Local & global integration</strong> — reflecting each destination's culture while holding global quality standards</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E85D25] font-bold">•</span>
                    <span><strong>Strategic expansion</strong> — growing into the right markets at the right pace</span>
                  </li>
                  <li className="flex items-start gap-2.5">
                    <span className="text-[#E85D25] font-bold">•</span>
                    <span><strong>Partner & investor value</strong> — financially disciplined, high-return business models</span>
                  </li>
                </ul>
              </div>

              {/* Learn More Option Redirecting to Dedicated Arrow Hotels Page */}
              <div className="pt-2">
                <Link
                  to="/arrow-hotels"
                  className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-7 py-3.5 bg-[#001849] text-white font-bold hover:bg-[#00287A] transition-all rounded-lg shadow-md group"
                >
                  <span>Learn More About Arrow Hotels</span>
                  <ArrowRight className="w-4 h-4 text-[#F5A623] group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=600&q=80"
                alt="Hotel Suite interior"
                className="w-full h-64 object-cover shadow-lg"
              />
              <img
                src="https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=600&q=80"
                alt="Luxury Hotel Lobby"
                className="w-full h-64 object-cover shadow-lg mt-8"
              />
            </div>
          </div>

          {/* Leadership Team */}
          <div>
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
              <p className="text-sm text-[#14171F]/70 max-w-2xl mt-2">
                Showcasing our esteemed clients spanning Anchor Brands, Apparel Brands, Footwear, and Food & Beverage outlets.
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
              {['All', 'Anchor Brands', 'Apparel Brands', 'Footwear', 'Food Brands'].map((tab) => (
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

// Brand Logo Card Component with Automatic Fallback for Missing Files
function BrandLogoCard({ brand }) {
  const [imgError, setImgError] = useState(false);

  return (
    <div className="shrink-0 w-48 bg-white border border-[#14171F]/10 rounded-xl p-3 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-all hover:border-[#E85D25] group/brand h-24">
      {!imgError ? (
        <img
          src={brand.logo}
          alt={brand.name}
          onError={() => setImgError(true)}
          className="h-14 w-auto object-contain max-w-[150px] group-hover/brand:scale-105 transition-transform"
        />
      ) : (
        <div className="flex flex-col items-center gap-1">
          <div className="w-9 h-9 rounded-lg bg-[#001849]/5 text-[#001849] flex items-center justify-center font-serif font-bold text-sm border border-[#001849]/10">
            {brand.name.charAt(0)}
          </div>
          <span className="font-serif font-bold text-[11px] text-[#001849] text-center line-clamp-1">
            {brand.name}
          </span>
        </div>
      )}
    </div>
  );
}
