import React, { useState, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { ChevronDown, Menu, X, ArrowRight, Building, ShoppingBag, Factory, Briefcase } from 'lucide-react';
import BrandLogo from './BrandLogo';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close menus on page change
  useEffect(() => {
    setMobileMenuOpen(false);
    setDropdownOpen(false);
  }, [location]);

  const serviceSubPages = [
    {
      title: 'Retail',
      path: '/services/retail',
      desc: 'Luxury shopping arcades & accessible retail suites',
      icon: ShoppingBag,
      tag: 'Boutique'
    },
    {
      title: 'Hospitality',
      path: '/services/hospitality',
      desc: 'Executive suites, fine dining & luxury guest care',
      icon: Building,
      tag: 'Luxury'
    },
    {
      title: 'Industrial',
      path: '/services/industrial',
      desc: 'Logistics hubs & executive industrial park suites',
      icon: Factory,
      tag: 'Executive'
    },
    {
      title: 'Office',
      path: '/services/office',
      desc: 'Corporate conference rooms & long-stay office suites',
      icon: Briefcase,
      tag: 'Corporate'
    }
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
        ? 'bg-[#FBF8F2]/95 backdrop-blur-md shadow-md py-3 border-b border-[#14171F]/10'
        : 'bg-[#FBF8F2]/80 backdrop-blur-sm py-4 border-b border-[#14171F]/10'
      }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Logo */}
        <BrandLogo />

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8 text-[14.5px] font-medium tracking-wide">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative py-2 transition-colors hover:text-[#E85D25] ${isActive ? 'text-[#E85D25] font-semibold after:w-full' : 'text-[#14171F] after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E85D25] after:transition-all after:duration-300 hover:after:w-full`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative py-2 transition-colors hover:text-[#E85D25] ${isActive ? 'text-[#E85D25] font-semibold after:w-full' : 'text-[#14171F] after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E85D25] after:transition-all after:duration-300 hover:after:w-full`
            }
          >
            About
          </NavLink>

          {/* Explore / Services Dropdown */}
          <div
            className="relative py-2 group"
            onMouseEnter={() => setDropdownOpen(true)}
            onMouseLeave={() => setDropdownOpen(false)}
          >
            <NavLink
              to="/services"
              className={({ isActive }) =>
                `flex items-center gap-1.5 transition-colors hover:text-[#E85D25] ${isActive || location.pathname.startsWith('/services')
                  ? 'text-[#E85D25] font-semibold'
                  : 'text-[#14171F]'
                }`
              }
            >
              <span>Explore / Services</span>
              <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${dropdownOpen ? 'rotate-180 text-[#E85D25]' : ''}`} />
            </NavLink>

            {/* Hover Dropdown Menu */}
            <div className={`absolute top-full left-1/2 -translate-x-1/2 w-80 pt-3 transition-all duration-200 transform ${dropdownOpen ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'
              }`}>
              <div className="bg-[#001849] text-white rounded-none shadow-2xl border border-white/10 p-3 overflow-hidden backdrop-blur-lg">
                <div className="text-[11px] font-mono-code uppercase tracking-wider text-[#F5A623] px-3 py-1.5 border-b border-white/10 mb-2">
                  Service Sectors
                </div>
                <div className="grid gap-1">
                  {serviceSubPages.map((subPage) => {
                    const IconComponent = subPage.icon;
                    return (
                      <Link
                        key={subPage.path}
                        to={subPage.path}
                        className="flex items-start gap-3 p-2.5 hover:bg-white/10 transition-colors group/item"
                      >
                        <div className="p-2 bg-[#00287A] text-[#F5A623] group-hover/item:bg-[#E85D25] group-hover/item:text-white transition-colors">
                          <IconComponent className="w-4 h-4" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-sm font-medium text-white group-hover/item:text-[#F5A623] transition-colors">
                              {subPage.title}
                            </span>
                            <span className="text-[9px] font-mono-code bg-[#F5A623]/20 text-[#F5A623] px-1.5 py-0.5 uppercase">
                              {subPage.tag}
                            </span>
                          </div>
                          <p className="text-[11px] text-white/70 mt-0.5 leading-snug">
                            {subPage.desc}
                          </p>
                        </div>
                      </Link>
                    );
                  })}
                </div>
                <div className="mt-2 pt-2 border-t border-white/10 text-center">
                  <Link
                    to="/services"
                    className="inline-flex items-center gap-1.5 text-xs font-mono-code text-[#F5A623] hover:text-white transition-colors"
                  >
                    View All Services Overview <ArrowRight className="w-3.0 h-3.0" />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <NavLink
            to="/gallery"
            className={({ isActive }) =>
              `relative py-2 transition-colors hover:text-[#E85D25] ${isActive ? 'text-[#E85D25] font-semibold after:w-full' : 'text-[#14171F] after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E85D25] after:transition-all after:duration-300 hover:after:w-full`
            }
          >
            Gallery
          </NavLink>

          <NavLink
            to="/reviews"
            className={({ isActive }) =>
              `relative py-2 transition-colors hover:text-[#E85D25] ${isActive ? 'text-[#E85D25] font-semibold after:w-full' : 'text-[#14171F] after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E85D25] after:transition-all after:duration-300 hover:after:w-full`
            }
          >
            Reviews
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative py-2 transition-colors hover:text-[#E85D25] ${isActive ? 'text-[#E85D25] font-semibold after:w-full' : 'text-[#14171F] after:w-0'
              } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-[2px] after:bg-[#E85D25] after:transition-all after:duration-300 hover:after:w-full`
            }
          >
            Contact
          </NavLink>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link
            to="/contact"
            className="font-mono-code text-xs tracking-wider uppercase bg-[#00287A] text-white px-5 py-3 transition-colors hover:bg-[#E85D25] flex items-center gap-2 shadow-sm"
          >
            <span>Book Now</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>

        {/* Mobile Burger Menu Button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="lg:hidden p-2 text-[#14171F] hover:text-[#E85D25] transition-colors focus:outline-none"
          aria-label="Toggle navigation"
        >
          {mobileMenuOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#001849] text-white border-t border-white/10 px-4 pt-4 pb-6 space-y-4 shadow-xl">
          <NavLink
            to="/"
            className="block text-base font-medium py-2 border-b border-white/10 hover:text-[#F5A623]"
          >
            Home
          </NavLink>
          <NavLink
            to="/about"
            className="block text-base font-medium py-2 border-b border-white/10 hover:text-[#F5A623]"
          >
            About Us
          </NavLink>

          {/* Mobile Explore/Services Section */}
          <div className="py-2 border-b border-white/10">
            <div className="text-xs font-mono-code text-[#F5A623] uppercase tracking-wider mb-2">
              Explore & Services
            </div>
            <div className="pl-3 space-y-2">
              <NavLink to="/services" className="block text-sm py-1 font-medium hover:text-[#F5A623]">
                → Services Overview
              </NavLink>
              {serviceSubPages.map(sub => (
                <NavLink
                  key={sub.path}
                  to={sub.path}
                  className="block text-sm py-1 text-white/80 hover:text-[#F5A623] flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-[#E85D25]"></span>
                  {sub.title}
                </NavLink>
              ))}
            </div>
          </div>

          <NavLink
            to="/gallery"
            className="block text-base font-medium py-2 border-b border-white/10 hover:text-[#F5A623]"
          >
            Gallery
          </NavLink>
          <NavLink
            to="/reviews"
            className="block text-base font-medium py-2 border-b border-white/10 hover:text-[#F5A623]"
          >
            Guest Reviews
          </NavLink>
          <NavLink
            to="/contact"
            className="block text-base font-medium py-2 border-b border-white/10 hover:text-[#F5A623]"
          >
            Contact & Booking
          </NavLink>

          <div className="pt-2">
            <Link
              to="/contact"
              className="block text-center font-mono-code text-xs uppercase bg-[#E85D25] text-white py-3 tracking-wider"
            >
              Book Your Experience Now
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
