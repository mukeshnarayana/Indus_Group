import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, ArrowRight, CheckCircle2, Sparkles, Shield, Tag } from 'lucide-react';

export default function RetailService() {
  return (
    <div className="pt-20">
      
      {/* Sub-page Hero */}
      <section className="bg-[#00287A] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow text-[#F5A623]">
            <Link to="/services" className="hover:underline">Explore / Services</Link>
            <span>/ Retail Sector</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-3xl mb-4">
            Retail & Shopping Arcade Integration
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            Where world-class fashion houses, luxury boutiques, and five-star hospitality converge under a universally accessible roof.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-serif font-bold text-[#001849] mb-6">
                Boutique Luxury & Hands-Free Shopping Care
              </h2>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-4">
                Arrow Hotels properties integrate direct private elevators leading into high-end retail arcades. Guests staying in our Retail Integration Suites receive dedicated shopping assistants, in-suite fitting sessions, and hands-free delivery straight to their suite.
              </p>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-6">
                All retail promenades feature zero-threshold entryways, tactile navigation paths, and wide-aisle boutiques designed for effortlessness.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Tag className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">VIP Boutique Access</h4>
                  <p className="text-xs text-[#6B6E7A]">Private after-hours shopping appointments for hotel guests.</p>
                </div>
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Shield className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Accessible Fittings</h4>
                  <p className="text-xs text-[#6B6E7A]">Spacious fitting lounges with motorized mirror and lighting controls.</p>
                </div>
              </div>
            </div>

            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80" 
                alt="Retail Hotel Arcade" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>
          </div>

          {/* Features list */}
          <div className="bg-[#001849] text-white p-8 md:p-12 mb-16">
            <h3 className="font-serif text-2xl font-bold text-[#F5A623] mb-6">
              Retail Sector Key Amenities
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="border-l-2 border-[#E85D25] pl-4">
                <div className="font-mono-code text-xs text-[#F5A623] uppercase mb-1">Service 01</div>
                <div className="font-bold text-lg mb-2">In-Suite Personal Trunk Shows</div>
                <p className="text-xs text-white/70">Luxury fashion brands bring latest collections directly to your suite for private viewing.</p>
              </div>
              <div className="border-l-2 border-[#E85D25] pl-4">
                <div className="font-mono-code text-xs text-[#F5A623] uppercase mb-1">Service 02</div>
                <div className="font-bold text-lg mb-2">Complimentary Valet Delivery</div>
                <p className="text-xs text-white/70">All arcade purchases are automatically logged, packaged, and placed in your suite closet.</p>
              </div>
              <div className="border-l-2 border-[#E85D25] pl-4">
                <div className="font-mono-code text-xs text-[#F5A623] uppercase mb-1">Service 03</div>
                <div className="font-bold text-lg mb-2">Tax-Free & Global Shipping</div>
                <p className="text-xs text-white/70">Seamless international customs handling and door-to-door worldwide shipping for guest purchases.</p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#E85D25] text-white font-bold hover:bg-[#F5A623] hover:text-[#001849] transition-colors"
            >
              <span>Book Retail Integration Suite</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
