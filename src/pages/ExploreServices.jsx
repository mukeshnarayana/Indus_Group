import React from 'react';
import { Link } from 'react-router-dom';
import { ShoppingBag, Building, Factory, Briefcase, ArrowRight, Check } from 'lucide-react';

export default function ExploreServices() {
  const sectors = [
    {
      id: 'retail',
      title: 'Retail Integration',
      path: '/services/retail',
      tagline: 'Luxury Boutique Arcades & Accessible Shopping',
      desc: 'Seamlessly merging 5-star accommodations with curated luxury retail arcades. Features hands-free shopping assistance, VIP dressing suites, and universal arcade access.',
      icon: ShoppingBag,
      image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=800&q=80',
      highlights: ['VIP Personal Shopper Concierge', 'Barrier-Free Luxury Arcades', 'In-Suite Product Presentations']
    },
    {
      id: 'hospitality',
      title: 'Hospitality & Executive Suites',
      path: '/services/hospitality',
      tagline: 'Adaptive Presidential & Penthouse Stays',
      desc: 'Our flagship hospitality suites offer motorized height-adjustable fixtures, sensory quiet rooms, fine-dining in-suite experiences, and 24/7 butler service.',
      icon: Building,
      image: 'https://images.unsplash.com/photo-1590490360182-c33d57733427?auto=format&fit=crop&w=800&q=80',
      highlights: ['Motorized Adaptive Interiors', 'Michelin-Inspired In-Suite Dining', '24/7 Personal Care Butler']
    },
    {
      id: 'industrial',
      title: 'Industrial Stays & Logistics Hubs',
      path: '/services/industrial',
      tagline: 'Executive Lodging Near Commercial Nodes',
      desc: 'Designed for corporate directors, engineers, and project managers overseeing industrial operations. Offers soundproofed executive suites, fast express check-in, and team hubs.',
      icon: Factory,
      image: 'https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?auto=format&fit=crop&w=800&q=80',
      highlights: ['High-Acoustic Insulation', 'Industrial Park Proximity', 'Express Executive Logistics']
    },
    {
      id: 'office',
      title: 'Office & Business Workspaces',
      path: '/services/office',
      tagline: 'Corporate Conference & Flexible Suites',
      desc: 'High-tech meeting rooms, private executive offices, and long-stay business suites equipped with high-speed fiber internet, video conference systems, and administrative support.',
      icon: Briefcase,
      image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80',
      highlights: ['Ultra-Speed 10Gbps Internet', 'Video Conference Amphitheaters', 'Long-Stay Executive Offices']
    }
  ];

  return (
    <div className="pt-20">
      
      {/* Header */}
      <section className="bg-[#001849] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-3xl">
          <div className="eyebrow justify-center text-[#F5A623]">
            <span>Comprehensive Sector Overview</span>
          </div>
          <h1 className="text-4xl md:text-6xl font-bold font-serif mb-6">
            Explore Our Four Service Pillars
          </h1>
          <p className="text-white/80 text-base md:text-lg font-sans">
            Arrow Hotels provides tailored, barrier-free luxury solutions across retail, hospitality, industrial, and corporate environments.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-[#FBF8F2]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {sectors.map((sec, idx) => {
            const Icon = sec.icon;
            const isEven = idx % 2 === 0;

            return (
              <div 
                key={sec.id} 
                className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-white p-8 md:p-12 border border-[#14171F]/10 shadow-sm ${
                  !isEven ? 'lg:grid-flow-dense' : ''
                }`}
              >
                <div className={!isEven ? 'lg:col-start-2' : ''}>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="p-3 bg-[#00287A] text-[#F5A623]">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="font-mono-code text-xs text-[#E85D25] uppercase tracking-wider font-semibold">
                      Sector {idx + 1}
                    </span>
                  </div>

                  <h2 className="text-3xl font-serif font-bold text-[#001849] mb-2">
                    {sec.title}
                  </h2>
                  <div className="font-sans text-sm text-[#E85D25] font-semibold mb-4">
                    {sec.tagline}
                  </div>

                  <p className="text-[#6B6E7A] text-sm leading-relaxed mb-6">
                    {sec.desc}
                  </p>

                  <ul className="space-y-2 mb-8">
                    {sec.highlights.map((item, hIdx) => (
                      <li key={hIdx} className="flex items-center gap-2.5 text-xs font-mono-code text-[#14171F]">
                        <Check className="w-4 h-4 text-[#E85D25]" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>

                  <Link 
                    to={sec.path} 
                    className="inline-flex items-center gap-2 font-mono-code text-xs uppercase tracking-wider px-6 py-3 bg-[#00287A] text-white hover:bg-[#E85D25] transition-colors"
                  >
                    <span>View {sec.title} Sub-Page</span>
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                </div>

                <div className={`relative h-80 lg:h-full min-h-[320px] overflow-hidden ${!isEven ? 'lg:col-start-1' : ''}`}>
                  <img 
                    src={sec.image} 
                    alt={sec.title} 
                    className="w-full h-full object-cover shadow-md"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

    </div>
  );
}
