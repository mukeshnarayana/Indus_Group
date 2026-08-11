import React, { useState } from 'react';
import { X, ZoomIn, MapPin, Building, Maximize2, Tag, CheckCircle2, Filter, ImageIcon, Sparkles, Clock, ShieldCheck } from 'lucide-react';

export default function Gallery() {
  const [selectedFilter, setSelectedFilter] = useState('All');
  const [activeProject, setActiveProject] = useState(null);
  const [selectedModalImg, setSelectedModalImg] = useState(null);

  const projects = [
    {
      id: 1,
      brand: 'Click Hotels by Suba',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam',
      developer: 'Abhiram Hotels & Resorts and Indus Group',
      space: '32-Room Hotel',
      status: 'Signed',
      future: 'Suba Group Hospitality Portfolio Signing',
      image: '/click_hotels_building.jpg',
      images: ['/click_hotels_building.jpg', '/click_hotels_press.jpg'],
      promotion: "Suba Group Of Hotels Limited has signed Click Hotels Visakhapatnam — a 32-room mid-market hotel property developed in association with Abhiram Hotels & Resorts and Indus Group. Abinash Ashok, Vice President – Operations, Suba Hotels, highlighted this key coastal expansion as part of Suba's nationwide growth."
    },
    {
      id: 2,
      brand: 'Ramachandra Multiplex',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Gajuwaka',
      developer: 'Ramachandra Multiplex',
      space: '1,00,000 sqft',
      status: 'Opening Soon',
      future: 'Opening Soon - January 2027',
      image: '/ramachandra_multiplex.jpg',
      promotion: "Indus Group is proud to facilitate premier commercial leasing for Ramachandra Multiplex in Gajuwaka, Visakhapatnam. Spanning 1,00,000 sq.ft., this upcoming mega multiplex & retail destination features anchor partners including Style Union, MR. DIY, High Volt Game Zone, and an Innovated Food Court. Opening Soon: January 2027."
    },
    {
      id: 3,
      brand: 'Fashion City',
      state: 'Andhra Pradesh',
      city: 'Srikakulam, Nalgonda',
      developer: 'Fashion City',
      space: '8,000 sqft',
      status: 'Opening Soon',
      future: 'Opening Soon - August 2026',
      image: '/fashion_city.jpg',
      promotion: "Indus Group is proud to facilitate commercial leasing for Fashion City in Srikakulam / Nalgonda. Spanning 8,000 sq.ft. across prime commercial floors, this upcoming landmark fashion retail destination is scheduled for Grand Opening in August 2026."
    },
    {
      id: 4,
      brand: 'Fashion City & More Retail',
      state: 'Telangana',
      city: 'Nizamabad',
      developer: 'Masha Constructions (Saudi Arabia)',
      space: '11,000 sqft',
      status: 'Under Construction',
      future: 'Under Construction - Key Leasing Hub',
      image: '/nizamabad_fashioncity.jpg',
      promotion: "Indus Group is proud to deliver comprehensive leasing consultancy for Masha Constructions (Saudi Arabia) in Nizamabad, Telangana. Spanning 11,000 sq.ft., this commercial hub features Fashion City across 8,000 sq.ft. and More Supermarket across 3,000 sq.ft. on the lower ground floor."
    },
    {
      id: 5,
      brand: 'Fashion City Commercial Hub',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Pendurthi',
      developer: 'Fashion City',
      space: '24,000 sqft',
      status: 'Under Development',
      future: 'Under Development - Active Leasing',
      image: '/pendurthi_fashioncity.jpg',
      promotion: "Indus Group is actively executing commercial leasing for the upcoming 24,000 sq.ft. Fashion City commercial hub in Pendurthi, Visakhapatnam. Currently under foundation & structural development, offering prime retail space for anchor brands."
    },
    {
      id: 6,
      brand: 'Zudio',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Kurmannapalem',
      developer: 'Abhiram Developers',
      space: '4,500 sqft',
      status: 'Completed',
      image: '/kurmannapalem_zudio.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction for Abhiram Nirman India Pvt. Ltd., welcoming Zudio — a leading fashion retail brand from Trent Ltd., part of the Tata Group — to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 7,
      brand: 'Style Union',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Kurmannapalem',
      developer: 'Abhiram Developers',
      space: '4,500 sqft',
      status: 'Completed',
      image: '/kurmannapalem_styleunion.jpg',
      promotion: "Indus Group proudly delivered leasing consultancy services for the grand opening of Style Union, connecting a leading retail brand with a premium commercial space developed by Abhiram Nirman India Pvt. Ltd. — another landmark retail destination in Kurmannapalem."
    },
    {
      id: 8,
      brand: 'Max',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Kurmannapalem',
      developer: 'Abhiram Developers',
      space: '4,500 sqft',
      status: 'Completed',
      image: '/kurmannapalem_max.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction for Abhiram Developers, welcoming Max — one of India's leading fashion and lifestyle retail brands from the Landmark Group — to this prime location at Kurmannapalem, Visakhapatnam. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 9,
      brand: 'Style Union',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Muralinagar',
      space: '1,000 sqft',
      status: 'Completed',
      image: '/muralinagar_styleunion.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at Murali Nagar, welcoming Style Union to this prime retail location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 10,
      brand: 'DMart',
      state: 'Andhra Pradesh',
      city: 'Visakhapatnam, Muralinagar',
      space: '1,000 sqft',
      status: 'Completed',
      image: '/muralinagar_dmart.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at Muralinagar, Visakhapatnam, welcoming DMart — one of India's most trusted value retail chains — to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 11,
      brand: 'IBO',
      state: 'Telangana',
      city: 'Hastinapuram',
      space: '15,000 sqft',
      status: 'Completed',
      image: '/hastinapuram_ibo.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at Hastinapuram, Hyderabad, welcoming IBO to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 12,
      brand: 'Mangalya Shopping Mall',
      state: 'Telangana',
      city: 'Karmanghat',
      space: '20,000 sqft',
      status: 'Completed',
      image: '/karmanghat_mangalya.jpg',
      promotion: "Indus Group successfully facilitated the leasing and development strategy for Mangalya Shopping Mall at Karmanghat, Hyderabad — bringing a vibrant retail destination to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 13,
      brand: 'S Conventions',
      state: 'Telangana',
      city: 'Karmanghat',
      space: '2,000 sqft',
      status: 'Completed',
      future: 'Signed with MAX and DIY',
      image: '/karmanghat_sconventions.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at S Conventions, Karmanghat, signing Max and Mr. DIY to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 14,
      brand: 'Max & DIY (Upcoming)',
      state: 'Telangana',
      city: 'Karmanghat',
      status: 'Upcoming',
      future: 'Signed with MAX and DIY',
      image: '',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at Karmanghat, signing Max and Mr. DIY for this upcoming retail location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 15,
      brand: 'Unlimited',
      state: 'Andhra Pradesh',
      city: 'Srikakulam',
      space: '7,000 sqft',
      status: 'Completed',
      image: '/srikakulam_unlimited.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at Srikakulam, welcoming Unlimited — a leading fashion and lifestyle retail brand — to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    },
    {
      id: 16,
      brand: 'Kalyan Jewellers',
      state: 'Andhra Pradesh',
      city: 'Vizianagaram',
      space: '17,000 sqft',
      status: 'Completed',
      image: '/vizianagaram_kalyan.jpg',
      promotion: "Indus Group successfully facilitated a long-term lease transaction at Vizianagaram, welcoming Kalyan Jewellers — one of India's most trusted and widely recognized jewellery brands — to this prime location. This milestone reflects our commitment to connecting quality developments with India's most trusted retail brands."
    }
  ];

  const filters = ['All', 'Andhra Pradesh', 'Telangana'];

  const filteredProjects = selectedFilter === 'All'
    ? projects
    : projects.filter(p => p.state === selectedFilter);

  const renderStatusBadge = (status) => {
    if (!status) return null;
    const s = status.toLowerCase();

    let badgeStyle = 'bg-emerald-600 text-white border-emerald-500/30';
    let IconComponent = CheckCircle2;

    if (s.includes('completed')) {
      badgeStyle = 'bg-emerald-600 text-white border-emerald-500/30';
      IconComponent = CheckCircle2;
    } else if (s.includes('opening') || s.includes('soon')) {
      badgeStyle = 'bg-amber-600 text-white border-amber-500/30';
      IconComponent = Sparkles;
    } else if (s.includes('construction') || s.includes('development')) {
      badgeStyle = 'bg-blue-600 text-white border-blue-500/30';
      IconComponent = Building;
    } else {
      badgeStyle = 'bg-indigo-600 text-white border-indigo-500/30';
      IconComponent = Tag;
    }

    return (
      <span className={`font-mono-code text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm font-bold flex items-center gap-1 border ${badgeStyle}`}>
        <IconComponent className="w-3 h-3" />
        <span>{status}</span>
      </span>
    );
  };

  return (
    <div className="pt-20 bg-[#FBF8F2] min-h-screen text-[#14171F]">

      {/* Header Banner */}
      <section className="bg-[#001849] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-4xl relative z-10 space-y-4">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Indus & Arrow Portfolio</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-white tracking-tight">
            Commercial Project Gallery
          </h1>
          <p className="text-white/85 text-base md:text-lg font-serif max-w-2xl mx-auto leading-relaxed">
            Explore our completed and upcoming retail, commercial, and anchor brand properties across Andhra Pradesh and Telangana.
          </p>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-8 bg-[#FBF8F2] border-b border-stone-200 sticky top-20 z-30 backdrop-blur-md bg-[#FBF8F2]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-3 flex-wrap">
            <span className="font-mono-code text-xs text-[#6B6E7A] uppercase mr-2 flex items-center gap-1.5 font-bold">
              <Filter className="w-4 h-4 text-[#E85D25]" /> Filter Region:
            </span>
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setSelectedFilter(filter)}
                className={`font-mono-code text-xs uppercase tracking-wider px-5 py-2.5 rounded-lg transition-all font-bold ${selectedFilter === filter
                    ? 'bg-[#001849] text-[#F5A623] shadow-md'
                    : 'bg-white text-[#14171F] border border-stone-200 hover:border-[#E85D25] hover:text-[#E85D25]'
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Project Cards Grid */}
      <section className="py-16 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((item) => (
              <div
                key={item.id}
                onClick={() => {
                  setActiveProject(item);
                  setSelectedModalImg(item.image);
                }}
                className="bg-white border border-[#14171F]/10 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl hover:border-[#E85D25]/50 transition-all duration-300 group cursor-pointer flex flex-col justify-between"
              >
                {/* Card Header: Image Container */}
                <div className="relative h-64 overflow-hidden bg-stone-900">
                  {item.image ? (
                    <>
                      <img
                        src={item.image}
                        alt={item.brand}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        onError={(e) => {
                          e.currentTarget.style.display = 'none';
                          if (e.currentTarget.nextElementSibling) {
                            e.currentTarget.nextElementSibling.classList.remove('hidden');
                            e.currentTarget.nextElementSibling.classList.add('flex');
                          }
                        }}
                      />
                      <div className="hidden w-full h-full bg-[#001849] flex-col items-center justify-center p-6 text-center text-white">
                        <Building className="w-12 h-12 text-[#F5A623] mb-2" />
                        <div className="font-serif font-bold text-lg text-white">{item.brand}</div>
                        <div className="font-mono-code text-[11px] text-white/70 mt-1">{item.city}</div>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-[#001849] flex flex-col items-center justify-center p-6 text-center text-white">
                      <Building className="w-12 h-12 text-[#F5A623] mb-2" />
                      <div className="font-serif font-bold text-lg text-white">{item.brand}</div>
                      <div className="font-mono-code text-[11px] text-white/70 mt-1">{item.city}</div>
                    </div>
                  )}

                  {/* Badges Overlay */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2 z-10 pointer-events-none">
                    <div className="flex items-center gap-1.5 flex-wrap">
                      <span className="bg-[#001849]/95 text-[#F5A623] backdrop-blur-sm font-mono-code text-[10px] uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm font-bold border border-white/10">
                        {item.state}
                      </span>
                      {item.status && renderStatusBadge(item.status)}
                    </div>

                    {item.promotion && (
                      <div className="bg-[#E85D25] text-white font-mono-code text-[10px] uppercase tracking-wider px-2 py-0.5 rounded-md shadow-md font-bold flex items-center gap-1 shrink-0">
                        <Sparkles className="w-3 h-3 text-[#F5A623]" />
                        <span>Featured</span>
                      </div>
                    )}
                  </div>

                  {/* Hover Overlay Prompt */}
                  <div className="absolute inset-0 bg-[#001849]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white gap-2 z-20">
                    <ZoomIn className="w-8 h-8 text-[#F5A623]" />
                    <span className="font-mono-code text-xs uppercase tracking-wider font-bold">View Full Project Details</span>
                  </div>
                </div>

                {/* Card Body & Footer */}
                <div className="p-5 sm:p-6 bg-white space-y-3.5 border-t border-stone-100 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <span className="font-mono-code text-[10px] text-[#E85D25] font-bold uppercase tracking-wider block mb-0.5">
                          Brand Partner
                        </span>
                        <h3 className="font-serif text-xl font-bold text-[#001849] capitalize leading-snug">
                          {item.brand}
                        </h3>
                      </div>

                      <div className="w-9 h-9 rounded-full bg-[#FBF8F2] text-[#001849] group-hover:bg-[#E85D25] group-hover:text-white flex items-center justify-center transition-colors shrink-0">
                        <Maximize2 className="w-4 h-4" />
                      </div>
                    </div>

                    {/* Metadata line: City & Space */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-[#6B6E7A] font-medium pt-0.5">
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5 text-[#E85D25] shrink-0" />
                        {item.city}
                      </span>
                      {item.space && (
                        <span className="flex items-center gap-1">
                          <Maximize2 className="w-3.5 h-3.5 text-[#001849] shrink-0" />
                          {item.space}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Promotion Text Under Image */}
                  {item.promotion && (
                    <div className="pt-3 border-t border-stone-100">
                      <p className="text-xs text-[#6B6E7A] font-sans leading-relaxed line-clamp-3">
                        {item.promotion}
                      </p>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox / Details Modal */}
      {activeProject && (
        <div
          className="fixed inset-0 z-50 bg-[#001849]/80 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fadeIn"
          onClick={() => setActiveProject(null)}
        >
          <div
            className="relative max-w-2xl w-full bg-white text-[#14171F] rounded-2xl shadow-2xl overflow-hidden border border-stone-200 my-8 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={() => setActiveProject(null)}
              className="absolute top-4 right-4 z-20 p-2.5 rounded-full bg-[#001849]/80 text-white hover:bg-[#E85D25] transition-colors shadow-lg"
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Photo Banner */}
            <div className="relative h-72 sm:h-96 bg-stone-900 overflow-hidden flex items-center justify-center">
              {(selectedModalImg || activeProject.image) ? (
                <>
                  <img
                    src={selectedModalImg || activeProject.image}
                    alt={activeProject.brand}
                    className="w-full h-full object-contain bg-stone-900"
                    onError={(e) => {
                      e.currentTarget.style.display = 'none';
                      if (e.currentTarget.nextElementSibling) {
                        e.currentTarget.nextElementSibling.classList.remove('hidden');
                        e.currentTarget.nextElementSibling.classList.add('flex');
                      }
                    }}
                  />
                  <div className="hidden w-full h-full bg-[#001849] flex-col items-center justify-center p-8 text-center text-white">
                    <Building className="w-16 h-16 text-[#F5A623] mb-3" />
                    <div className="font-serif font-bold text-2xl text-white">{activeProject.brand}</div>
                    <div className="font-mono-code text-xs text-white/70 mt-1">{activeProject.city}, {activeProject.state}</div>
                  </div>
                </>
              ) : (
                <div className="w-full h-full bg-[#001849] flex flex-col items-center justify-center p-8 text-center text-white">
                  <Building className="w-16 h-16 text-[#F5A623] mb-3" />
                  <div className="font-serif font-bold text-2xl text-white">{activeProject.brand}</div>
                  <div className="font-mono-code text-xs text-white/70 mt-1">{activeProject.city}, {activeProject.state}</div>
                </div>
              )}
              <div className="absolute inset-0 bg-gradient-to-t from-[#001849] via-transparent to-transparent opacity-80 pointer-events-none" />

              <div className="absolute bottom-6 left-6 right-6 text-white pointer-events-none space-y-1">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-mono-code text-xs text-[#F5A623] uppercase tracking-widest font-bold">
                    {activeProject.state} Real Estate
                  </span>
                  {activeProject.status && (
                    <div className="pointer-events-auto">
                      {renderStatusBadge(activeProject.status)}
                    </div>
                  )}
                </div>
                <h3 className="font-serif text-3xl font-bold capitalize text-white">
                  {activeProject.brand}
                </h3>
              </div>
            </div>

            {/* Complete Project Details Content */}
            <div className="p-6 sm:p-8 space-y-6 bg-white">

              {/* Multi-Image Gallery Switcher if project has multiple images */}
              {activeProject.images && activeProject.images.length > 1 && (
                <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200 space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] font-bold uppercase">
                      <ImageIcon className="w-4 h-4 text-[#E85D25]" /> Project Visuals & Press Announcement Reference
                    </div>
                    <span className="text-[10px] font-mono-code bg-[#001849] text-[#F5A623] px-2 py-0.5 rounded font-bold">
                      2 Documents Available
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-3">
                    <button
                      type="button"
                      onClick={() => setSelectedModalImg(activeProject.images[0])}
                      className={`text-left rounded-xl overflow-hidden border-2 transition-all p-1.5 bg-white ${
                        (selectedModalImg === activeProject.images[0] || (!selectedModalImg && activeProject.image === activeProject.images[0]))
                          ? 'border-[#E85D25] ring-2 ring-[#E85D25]/20 shadow-md'
                          : 'border-stone-200 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={activeProject.images[0]} alt="Building Elevation" className="w-full h-24 object-cover rounded-lg" />
                      <span className="text-[11px] font-mono-code font-bold text-[#001849] text-center block mt-1.5">
                        1. Building Elevation
                      </span>
                    </button>

                    <button
                      type="button"
                      onClick={() => setSelectedModalImg(activeProject.images[1])}
                      className={`text-left rounded-xl overflow-hidden border-2 transition-all p-1.5 bg-white ${
                        selectedModalImg === activeProject.images[1]
                          ? 'border-[#E85D25] ring-2 ring-[#E85D25]/20 shadow-md'
                          : 'border-stone-200 opacity-75 hover:opacity-100'
                      }`}
                    >
                      <img src={activeProject.images[1]} alt="Suba Press Release" className="w-full h-24 object-cover object-top rounded-lg" />
                      <span className="text-[11px] font-mono-code font-bold text-[#001849] text-center block mt-1.5">
                        2. Press Release Reference
                      </span>
                    </button>
                  </div>
                </div>
              )}

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

                {/* Brand Name */}
                <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                    <Tag className="w-4 h-4" /> Brand Partner
                  </div>
                  <div className="font-serif font-bold text-lg text-[#001849] capitalize">
                    {activeProject.brand}
                  </div>
                </div>

                {/* Status Field */}
                <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                    <ShieldCheck className="w-4 h-4" /> Project Status
                  </div>
                  <div className="mt-1">
                    {renderStatusBadge(activeProject.status || 'Active')}
                  </div>
                </div>

                {/* Location City */}
                <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                    <MapPin className="w-4 h-4" /> Location / City
                  </div>
                  <div className="font-serif font-bold text-base text-[#001849]">
                    {activeProject.city}, {activeProject.state}
                  </div>
                </div>

                {/* Space Sqft */}
                {activeProject.space && (
                  <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                      <Maximize2 className="w-4 h-4" /> Total Space Area
                    </div>
                    <div className="font-serif font-bold text-lg text-[#001849]">
                      {activeProject.space}
                    </div>
                  </div>
                )}

                {/* Developer */}
                {activeProject.developer && (
                  <div className="p-4 bg-[#FBF8F2] rounded-xl border border-stone-200 sm:col-span-2">
                    <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold mb-1">
                      <Building className="w-4 h-4" /> Developer Partner
                    </div>
                    <div className="font-serif font-bold text-base text-[#001849]">
                      {activeProject.developer}
                    </div>
                  </div>
                )}

              </div>

              {/* Promotion / Transaction Highlight */}
              {activeProject.promotion && (
                <div className="p-5 bg-[#FBF8F2] border border-[#E85D25]/30 rounded-xl space-y-1.5 shadow-sm">
                  <div className="flex items-center gap-2 text-xs font-mono-code text-[#E85D25] uppercase font-bold">
                    <Sparkles className="w-4 h-4 text-[#E85D25]" />
                    <span>Transaction & Hospitality Highlight</span>
                  </div>
                  <p className="text-xs sm:text-sm text-[#001849]/90 leading-relaxed font-sans font-medium">
                    {activeProject.promotion}
                  </p>
                </div>
              )}

              {/* Future Agreement Note if applicable */}
              {activeProject.future && (
                <div className="p-4 bg-orange-50 border border-orange-200 rounded-xl flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#E85D25] shrink-0 mt-0.5" />
                  <div>
                    <div className="font-mono-code text-xs font-bold text-[#E85D25] uppercase">
                      Upcoming / Portfolio Status
                    </div>
                    <div className="font-serif text-sm font-semibold text-[#001849] mt-0.5">
                      {activeProject.future}
                    </div>
                  </div>
                </div>
              )}

              {/* Close Button */}
              <div className="pt-2 flex justify-end">
                <button
                  onClick={() => setActiveProject(null)}
                  className="px-6 py-2.5 bg-[#001849] text-white font-mono-code text-xs font-bold uppercase tracking-wider rounded-lg hover:bg-[#E85D25] transition-colors shadow"
                >
                  Close Details
                </button>
              </div>

            </div>
          </div>
        </div>
      )}

    </div>
  );
}
