import React from 'react';
import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, ShieldCheck } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Footer() {
  return (
    <footer className="bg-[#14171F] text-[#E9E7E1] pt-16 pb-8 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 mb-14">
          
          {/* Col 1: Brand & Mission */}
          <div className="lg:col-span-2 space-y-4">
            <BrandLogo variant="dark" />
            <p className="text-sm text-[#ABA69C] max-w-md leading-relaxed mt-4">
              An Arrow Hub by Indus Group redefines modern commercial real estate by blending premium design, strategic locations, and bespoke service across retail, hospitality, industrial, and office environments.
            </p>
            <div className="flex items-center gap-4 pt-2">
              <div className="flex items-center gap-2 text-xs font-mono-code text-[#F5A623]">
                <ShieldCheck className="w-4 h-4 text-[#E85D25]" />
                <span>Certified Universal Accessibility</span>
              </div>
            </div>
          </div>

          {/* Col 2: Navigation */}
          <div>
            <h4 className="font-mono-code text-xs tracking-widest text-[#F5A623] uppercase mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/" className="text-[#ABA69C] hover:text-white transition-colors">Home</Link>
              </li>
              <li>
                <Link to="/about" className="text-[#ABA69C] hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link to="/services" className="text-[#ABA69C] hover:text-white transition-colors">Explore Services</Link>
              </li>
              <li>
                <Link to="/gallery" className="text-[#ABA69C] hover:text-white transition-colors">Photo Gallery</Link>
              </li>
              <li>
                <Link to="/reviews" className="text-[#ABA69C] hover:text-white transition-colors">Guest Reviews</Link>
              </li>
              <li>
                <Link to="/contact" className="text-[#ABA69C] hover:text-white transition-colors">Contact & Reservations</Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Service Sectors */}
          <div>
            <h4 className="font-mono-code text-xs tracking-widest text-[#F5A623] uppercase mb-4">
              Sectors
            </h4>
            <ul className="space-y-2.5 text-sm">
              <li>
                <Link to="/services/retail" className="text-[#ABA69C] hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#E85D25]"></span>
                  Retail Integration
                </Link>
              </li>
              <li>
                <Link to="/services/hospitality" className="text-[#ABA69C] hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#E85D25]"></span>
                  Hospitality & Suites
                </Link>
              </li>
              <li>
                <Link to="/services/industrial" className="text-[#ABA69C] hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#E85D25]"></span>
                  Industrial Stays
                </Link>
              </li>
              <li>
                <Link to="/services/office" className="text-[#ABA69C] hover:text-white transition-colors flex items-center gap-1.5">
                  <span className="w-1 h-1 bg-[#E85D25]"></span>
                  Office & Workspaces
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact Information */}
          <div>
            <h4 className="font-mono-code text-xs tracking-widest text-[#F5A623] uppercase mb-4">
              Get In Touch
            </h4>
            <div className="space-y-3 text-sm text-[#ABA69C]">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#E85D25] shrink-0 mt-0.5" />
                <span>Plot no: 501, Second floor-202, Teachers colony, Phase 2, BN Reddy Nagar, Hyderabad - 500070</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#E85D25] shrink-0" />
                <span>+91 8420861234</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#E85D25] shrink-0" />
                <a href="mailto:tejeswararao@indusgroup.in" className="hover:text-white transition-colors">tejeswararao@indusgroup.in</a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between text-xs font-mono-code text-[#6E6A61] gap-4">
          <div>
            © {new Date().getFullYear()} An Arrow Hub by Indus Group. All Rights Reserved.
          </div>
          <div className="flex items-center gap-6">
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer transition-colors">Terms of Service</span>
            <span className="hover:text-white cursor-pointer transition-colors">Accessibility Statement</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
