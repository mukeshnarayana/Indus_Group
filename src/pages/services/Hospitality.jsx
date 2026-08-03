import React from 'react';
import { Link } from 'react-router-dom';
import { Building, ArrowRight, Star, Utensils, BedDouble, ShieldCheck } from 'lucide-react';

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
            Hospitality & Adaptive Executive Suites
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            Experience five-star presidential accommodations, fine dining, and bespoke personal butler care designed for effortless comfort.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80" 
                alt="Hospitality Suite" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-[#001849] mb-6">
                Unmatched Comfort with Motorized Smart Controls
              </h2>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-4">
                Our flagship hospitality suites are masterworks of interior architecture. Every suite features motorized adjustability for beds, desks, and vanity mirrors at the tap of a tactile bedside tablet or voice command.
              </p>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-6">
                Marble roll-in rain showers, therapeutic soaking tubs with hydro-massage lifts, and 100% blackout motorized drapes ensure restful recovery for all guests.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <BedDouble className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Custom Adaptive Mattress</h4>
                  <p className="text-xs text-[#6B6E7A]">Pressure-relieving ergonomic mattresses with dual temperature zones.</p>
                </div>
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Utensils className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">In-Suite Michelin Dining</h4>
                  <p className="text-xs text-[#6B6E7A]">Custom dietary menus prepared by master chefs served in your private dining room.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 border border-[#14171F]/10">
              <Star className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Presidential Penthouses</h3>
              <p className="text-sm text-[#6B6E7A]">Expansive 2,500 sq ft penthouse layouts with private terrace, outdoor hot tub, and panoramic city views.</p>
            </div>
            <div className="bg-white p-8 border border-[#14171F]/10">
              <ShieldCheck className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Sensory-Calm Suites</h3>
              <p className="text-sm text-[#6B6E7A]">Specially insulated suites with customizable white-noise, sensory lighting, and hypo-allergenic bedding.</p>
            </div>
            <div className="bg-white p-8 border border-[#14171F]/10">
              <Building className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">24/7 Dedicated Butler</h3>
              <p className="text-sm text-[#6B6E7A]">Trained personal butler assigned to your suite for unpacking, reservations, and mobility care.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#00287A] text-white font-bold hover:bg-[#E85D25] transition-colors"
            >
              <span>Reserve Hospitality Suite</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
