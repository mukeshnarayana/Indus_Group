import React, { useState } from 'react';
import { X, ZoomIn, Eye, Filter } from 'lucide-react';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [activeImage, setActiveImage] = useState(null);

  const categories = ['All', 'Suites', 'Dining', 'Accessibility', 'Architecture', 'Business'];

  const images = [
    {
      id: 1,
      title: 'The Sovereign Presidential Suite',
      category: 'Suites',
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=1000&q=80',
      desc: 'Panoramically glinting skyline view with motorized adaptive interior.'
    },
    {
      id: 2,
      title: 'Retail Hotel Luxury Promenade',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1000&q=80',
      desc: 'Marble-clad arcade with zero-threshold entries into boutique shops.'
    },
    {
      id: 3,
      title: 'Michelin-Inspired Fine Dining',
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1550966871-3ed3cdb5ed0c?auto=format&fit=crop&w=1000&q=80',
      desc: 'Wheelchair-accessible lowered tables and sensory quiet dining spaces.'
    },
    {
      id: 4,
      title: 'Adaptive Bath & Roll-In Hydro Shower',
      category: 'Accessibility',
      image: 'https://images.unsplash.com/photo-1584622650111-993a426fbf0a?auto=format&fit=crop&w=1000&q=80',
      desc: 'Non-slip Italian marble, integrated support bars, and temperature safety controls.'
    },
    {
      id: 5,
      title: 'Industrial Executive Boardroom',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1000&q=80',
      desc: 'High-speed encrypted fiber network and closed-captioning video wall.'
    },
    {
      id: 6,
      title: 'Flagship Hotel Grand Atrium',
      category: 'Architecture',
      image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1000&q=80',
      desc: 'Natural lighting, tactile floor paths, and ambient acoustic isolation.'
    },
    {
      id: 7,
      title: 'Penthouse Terrace & Hydro-Lift Pool',
      category: 'Suites',
      image: 'https://images.unsplash.com/photo-1571896349842-33c89424de2d?auto=format&fit=crop&w=1000&q=80',
      desc: 'Private outdoor heated pool equipped with universal water-chair lift.'
    },
    {
      id: 8,
      title: 'Private Sommelier Tasting Lounge',
      category: 'Dining',
      image: 'https://images.unsplash.com/photo-1510812431401-41d2bd2722f3?auto=format&fit=crop&w=1000&q=80',
      desc: 'Custom wine cellar lounge designed for intimate, quiet gatherings.'
    }
  ];

  const filteredImages = selectedCategory === 'All' 
    ? images 
    : images.filter(img => img.category === selectedCategory);

  return (
    <div className="pt-20">
      
      {/* Header */}
      <section className="bg-[#001849] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Visual Showcase</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-4">
            Arrow Hotels Photo Gallery
          </h1>
          <p className="text-white/80 text-base md:text-lg">
            Explore our presidential suites, architectural details, fine dining lounges, and universal accessibility features.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-12 bg-[#F1ECE0] border-b border-[#14171F]/10 sticky top-20 z-30 backdrop-blur-md bg-[#F1ECE0]/90">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center gap-2 flex-wrap">
            <span className="font-mono-code text-xs text-[#6B6E7A] uppercase mr-2 flex items-center gap-1">
              <Filter className="w-3.5 h-3.5" /> Filter:
            </span>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`font-mono-code text-xs uppercase tracking-wider px-4 py-2 transition-all ${
                  selectedCategory === cat
                    ? 'bg-[#00287A] text-[#F5A623] font-bold shadow-md'
                    : 'bg-white text-[#14171F] hover:bg-[#E85D25] hover:text-white'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="py-16 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((img) => (
              <div 
                key={img.id}
                onClick={() => setActiveImage(img)}
                className="bg-white border border-[#14171F]/10 overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-300 group cursor-pointer"
              >
                <div className="relative h-64 overflow-hidden">
                  <img 
                    src={img.image} 
                    alt={img.title} 
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-[#001849]/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center text-white gap-2">
                    <ZoomIn className="w-8 h-8 text-[#F5A623]" />
                    <span className="font-mono-code text-xs uppercase tracking-wider">Expand Photo</span>
                  </div>
                  <span className="absolute top-3 left-3 bg-[#001849] text-[#F5A623] font-mono-code text-[10px] uppercase tracking-wider px-2.5 py-1">
                    {img.category}
                  </span>
                </div>
                <div className="p-5">
                  <h3 className="font-serif text-lg font-bold text-[#001849] mb-1">
                    {img.title}
                  </h3>
                  <p className="text-xs text-[#6B6E7A] line-clamp-2">
                    {img.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox Modal */}
      {activeImage && (
        <div className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4 backdrop-blur-md">
          <div className="relative max-w-4xl w-full bg-[#001849] text-white border border-white/20 shadow-2xl overflow-hidden">
            <button 
              onClick={() => setActiveImage(null)}
              className="absolute top-4 right-4 z-10 p-2 bg-[#E85D25] text-white hover:bg-[#F5A623] hover:text-[#001849] transition-colors"
            >
              <X className="w-6 h-6" />
            </button>
            <div className="max-h-[70vh] overflow-hidden bg-black">
              <img 
                src={activeImage.image} 
                alt={activeImage.title} 
                className="w-full h-full object-contain max-h-[70vh] mx-auto"
              />
            </div>
            <div className="p-6 bg-[#001849]">
              <span className="font-mono-code text-xs text-[#F5A623] uppercase tracking-widest block mb-1">
                {activeImage.category} Sector
              </span>
              <h3 className="font-serif text-2xl font-bold mb-2">
                {activeImage.title}
              </h3>
              <p className="text-sm text-white/80">
                {activeImage.desc}
              </p>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
