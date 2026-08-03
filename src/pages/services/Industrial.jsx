import React from 'react';
import { Link } from 'react-router-dom';
import { Factory, ArrowRight, Shield, Zap, Clock, Truck } from 'lucide-react';

export default function IndustrialService() {
  return (
    <div className="pt-20">
      
      {/* Sub-page Hero */}
      <section className="bg-[#00287A] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow text-[#F5A623]">
            <Link to="/services" className="hover:underline">Explore / Services</Link>
            <span>/ Industrial Sector</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-3xl mb-4">
            Industrial Stays & Logistics Hubs
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            Executive lodging engineered specifically for corporate directors, engineers, and project managers overseeing industrial operations.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#001849] mb-6">
                Proximity, Acoustic Silence & Express Logistics
              </h2>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-4">
                Managing large industrial parks, energy infrastructure, or logistics networks requires quiet rest and rapid mobility. Arrow Industrial Stays are situated within 5 to 10 minutes of major commercial nodes while insulating guests from site noise.
              </p>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-6">
                Equipped with acoustic triple-pane glass, high-speed encrypted satellite Wi-Fi, and 24/7 express check-in kiosks, executives stay focused and productive.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Clock className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Flexible Shift Check-In</h4>
                  <p className="text-xs text-[#6B6E7A]">24-hour check-in and room access suited for round-the-clock shift schedules.</p>
                </div>
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Truck className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Chauffeur Logistics</h4>
                  <p className="text-xs text-[#6B6E7A]">Dedicated executive shuttles directly to plant sites and regional airports.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80" 
                alt="Industrial Park Executive Suite" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Sector Features */}
          <div className="bg-[#001849] text-white p-8 md:p-12 mb-16">
            <h3 className="font-serif text-2xl font-bold text-[#F5A623] mb-6">
              Industrial Sector Advantages
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#E85D25] pl-4">
                <div className="font-mono-code text-xs text-[#F5A623] uppercase mb-1">Advantage 01</div>
                <div className="font-bold text-lg mb-2">High-Privacy Team Hubs</div>
                <p className="text-xs text-white/70">Private floors reserved exclusively for corporate engineering teams with secure project rooms.</p>
              </div>
              <div className="border-l-2 border-[#E85D25] pl-4">
                <div className="font-mono-code text-xs text-[#F5A623] uppercase mb-1">Advantage 02</div>
                <div className="font-bold text-lg mb-2">Extreme Sound Dampening</div>
                <p className="text-xs text-white/70">STC 65+ acoustic wall ratings guarantee complete peace regardless of outside machinery.</p>
              </div>
              <div className="border-l-2 border-[#E85D25] pl-4">
                <div className="font-mono-code text-xs text-[#F5A623] uppercase mb-1">Advantage 03</div>
                <div className="font-bold text-lg mb-2">Industrial Billing Support</div>
                <p className="text-xs text-white/70">Simplified corporate purchase order billing and multi-week project stay rates.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#E85D25] text-white font-bold hover:bg-[#F5A623] hover:text-[#001849] transition-colors"
            >
              <span>Inquire Industrial Group Rates</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
