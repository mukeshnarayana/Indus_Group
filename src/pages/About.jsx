import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldCheck, Heart, Award, ArrowRight, CheckCircle2, Users, Compass, Sparkles } from 'lucide-react';

export default function About() {
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

  const team = [
    {
      name: 'Victoria Vance',
      role: 'Chief Executive Officer',
      bio: 'Former global luxury hospitality director with 20+ years driving universal design innovations.',
      image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Marcus Sterling',
      role: 'Head of Architectural Accessibility',
      bio: 'Pioneer in barrier-free luxury architecture and consultant to global urban planning boards.',
      image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=600&q=80'
    },
    {
      name: 'Elena Rostova',
      role: 'Director of Guest Experience',
      bio: 'Dedicated to neurodiverse hospitality frameworks and customized guest care protocols.',
      image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=600&q=80'
    }
  ];

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
                Meet Our Executive Team
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {team.map((mem, idx) => (
                <div key={idx} className="bg-white border border-[#14171F]/10 overflow-hidden shadow-sm group">
                  <div className="h-64 overflow-hidden">
                    <img 
                      src={mem.image} 
                      alt={mem.name} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="font-serif text-xl font-bold text-[#001849]">
                      {mem.name}
                    </h3>
                    <div className="font-mono-code text-xs text-[#E85D25] uppercase tracking-wider mb-3">
                      {mem.role}
                    </div>
                    <p className="text-xs text-[#6B6E7A] leading-relaxed">
                      {mem.bio}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

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
