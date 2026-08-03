import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, ArrowRight, Monitor, Wifi, Users, ShieldCheck } from 'lucide-react';

export default function OfficeService() {
  return (
    <div className="pt-20">
      
      {/* Sub-page Hero */}
      <section className="bg-[#00287A] text-white py-20 relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="eyebrow text-[#F5A623]">
            <Link to="/services" className="hover:underline">Explore / Services</Link>
            <span>/ Office Sector</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif max-w-3xl mb-4">
            Office & Business Workspaces
          </h1>
          <p className="text-lg text-white/80 max-w-2xl font-sans leading-relaxed">
            High-tech conference facilities, private executive offices, and long-stay business suites integrated into five-star hospitality.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="relative aspect-square">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80" 
                alt="Corporate Meeting Lounge" 
                className="w-full h-full object-cover shadow-2xl"
              />
            </div>

            <div>
              <h2 className="text-3xl font-serif font-bold text-[#001849] mb-6">
                State-of-the-Art Corporate Meeting & Work Suites
              </h2>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-4">
                Arrow Office Workspaces blur the line between productive corporate headquarters and luxurious hotel suites. Host board meetings in ultra-modern conference rooms equipped with 4K video walls and spatial audio.
              </p>
              <p className="text-[#14171F]/80 text-base leading-relaxed mb-6">
                All meeting spaces are fully accessible, featuring motorized podiums, closed-captioning integration, and ergonomic Herman Miller seating.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Wifi className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">10Gbps Fiber Network</h4>
                  <p className="text-xs text-[#6B6E7A]">Dedicated redundant enterprise fiber bandwidth with private VPN VLAN setup.</p>
                </div>
                <div className="p-4 bg-white border border-[#14171F]/10">
                  <Monitor className="w-5 h-5 text-[#E85D25] mb-2" />
                  <h4 className="font-bold text-[#001849] text-sm mb-1">Hybrid Conference Tech</h4>
                  <p className="text-xs text-[#6B6E7A]">AI speaker-tracking cameras and multi-language live translation consoles.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="bg-white p-8 border border-[#14171F]/10">
              <Briefcase className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Executive Office Suites</h3>
              <p className="text-sm text-[#6B6E7A]">Private lockable work suites adjacent to hotel room suites for seamless work-live convenience.</p>
            </div>
            <div className="bg-white p-8 border border-[#14171F]/10">
              <Users className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Boardrooms & Amphitheaters</h3>
              <p className="text-sm text-[#6B6E7A]">Capacities ranging from 8-person executive boardrooms to 150-person corporate event halls.</p>
            </div>
            <div className="bg-white p-8 border border-[#14171F]/10">
              <ShieldCheck className="w-6 h-6 text-[#F5A623] mb-4" />
              <h3 className="font-serif text-xl font-bold text-[#001849] mb-2">Administrative Concierge</h3>
              <p className="text-sm text-[#6B6E7A]">On-demand secretarial support, printing, translation, and high-security document handling.</p>
            </div>
          </div>

          <div className="text-center">
            <Link 
              to="/contact" 
              className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-8 py-4 bg-[#00287A] text-white font-bold hover:bg-[#E85D25] transition-colors"
            >
              <span>Book Conference Space</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

    </div>
  );
}
