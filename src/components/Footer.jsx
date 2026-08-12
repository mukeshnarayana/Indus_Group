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

            {/* Social Media Links */}
            <div className="pt-2">
              <span className="block font-mono-code text-xs tracking-widest text-[#F5A623] uppercase mb-3">
                Connect With Us
              </span>
              <div className="flex items-center gap-3">
                {/* Instagram */}
                <a
                  href="https://www.instagram.com/an_arrow_hub_"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ABA69C] hover:text-white hover:bg-[#E85D25] hover:border-[#E85D25] transition-all duration-300 shadow-sm"
                  title="Instagram"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>

                {/* Email */}
                <a
                  href="mailto:bussinessdevelopment@indusgroup.in"
                  aria-label="Email"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ABA69C] hover:text-white hover:bg-[#E85D25] hover:border-[#E85D25] transition-all duration-300 shadow-sm"
                  title="Email Us"
                >
                  <Mail className="w-4 h-4" />
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/company/indus-group-commercial-leasing-consultancy"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ABA69C] hover:text-white hover:bg-[#E85D25] hover:border-[#E85D25] transition-all duration-300 shadow-sm"
                  title="LinkedIn"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>

                {/* Facebook */}
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  aria-label="Facebook"
                  className="w-9 h-9 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[#ABA69C] hover:text-white hover:bg-[#E85D25] hover:border-[#E85D25] transition-all duration-300 shadow-sm opacity-80 cursor-pointer"
                  title="Facebook (Link coming soon)"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                  </svg>
                </a>
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
                <a href="mailto:bussinessdevelopment@indusgroup.in" className="hover:text-white transition-colors">bussinessdevelopment@indusgroup.in</a>
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
