import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({
  variant = 'default',
  className = '',
  title = 'AN ARROW HUB',
  subtitle = 'by INDUS GROUP',
  to = '/',
  showTrademark = true,
  size = 'default'
}) {
  const isDark = variant === 'dark' || variant === 'hero';

  const svgHeightClass = size === 'lg' 
    ? 'h-16 sm:h-20 md:h-24' 
    : 'h-11 sm:h-13 md:h-15';

  const logoSvg = (
    <svg
      className={`${svgHeightClass} w-auto ${isDark ? 'text-white' : 'text-[#001849]'}`}
      viewBox="0 0 440 210"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        <linearGradient id="arrowTopGrad" x1="0%" y1="100%" x2="100%" y2="0%">
          <stop offset="0%" stopColor="#FFDC00" />
          <stop offset="45%" stopColor="#FF8800" />
          <stop offset="100%" stopColor="#E85D25" />
        </linearGradient>
        <linearGradient id="arrowBottomGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FF6000" />
          <stop offset="60%" stopColor="#D93B00" />
          <stop offset="100%" stopColor="#9E1B00" />
        </linearGradient>

        <path id="topArcTrademarkPath" d="M 12,45 A 33,33 0 0,1 78,45" fill="none" />
        <path id="bottomArcTrademarkPath" d="M 78,45 A 33,33 0 0,1 12,45" fill="none" />
      </defs>

      {/* 3D Folded Arrow Mark */}
      <g transform="translate(100, 5)">
        <polygon points="10,110 180,5 118,78" fill="url(#arrowTopGrad)" />
        <polygon points="118,78 180,5 142,125" fill="url(#arrowBottomGrad)" />
      </g>

      {/* Registered Trademark SVG Stamp Badge (Positioned to the right of the Folded Arrow Symbol) */}
      {showTrademark && (
        <g transform="translate(290, 42) scale(0.4)">
          {/* Stamp Circle Background & Red Border */}
          <circle cx="45" cy="45" r="42" fill={isDark ? '#001849' : '#FFFFFF'} stroke="#D93B00" strokeWidth="4" />
          <circle cx="45" cy="45" r="36" fill="none" stroke="#D93B00" strokeWidth="1.5" strokeDasharray="3 2" />

          {/* Curved Text: REGISTERED (Top & Bottom) */}
          <text fontSize="8" fontWeight="900" fill="#D93B00" letterSpacing="0.8">
            <textPath href="#topArcTrademarkPath" startOffset="50%" textAnchor="middle">REGISTERED</textPath>
          </text>
          <text fontSize="8" fontWeight="900" fill="#D93B00" letterSpacing="0.8">
            <textPath href="#bottomArcTrademarkPath" startOffset="50%" textAnchor="middle">REGISTERED</textPath>
          </text>

          {/* Angled Red Banner across middle */}
          <g transform="rotate(-15 45 45)">
            <rect x="2" y="32" width="86" height="26" fill="#D93B00" rx="3" stroke="#FFFFFF" strokeWidth="1.5" />
            <text
              x="45"
              y="50"
              fontFamily="system-ui, -apple-system, sans-serif"
              fontWeight="900"
              fontSize="11"
              fill="#FFFFFF"
              textAnchor="middle"
              letterSpacing="1"
            >
              TRADEMARK
            </text>
          </g>
        </g>
      )}

      {/* AN ARROW HUB / ARROW HOTELS Main Title */}
      <text
        x="200"
        y="160"
        fontFamily="system-ui, -apple-system, sans-serif"
        fontWeight="900"
        fontSize="30"
        letterSpacing="2"
        fill="currentColor"
        textAnchor="middle"
      >
        {title}
      </text>

      {/* Subtitle */}
      {subtitle === 'by INDUS GROUP' ? (
        <text x="200" y="195" textAnchor="middle">
          <tspan fontFamily="Georgia, serif" fontStyle="italic" fontSize="20" fill={isDark ? '#F5A623' : 'currentColor'}>by </tspan>
          <tspan fontFamily="system-ui, -apple-system, sans-serif" fontWeight="700" fontSize="20" letterSpacing="4" fill={isDark ? '#F5A623' : 'currentColor'}>INDUS GROUP</tspan>
        </text>
      ) : (
        <text
          x="200"
          y="195"
          textAnchor="middle"
          fontFamily="system-ui, -apple-system, sans-serif"
          fontWeight="700"
          fontSize="18"
          letterSpacing="2"
          fill={isDark ? '#F5A623' : 'currentColor'}
        >
          {subtitle}
        </text>
      )}
    </svg>
  );

  if (to) {
    return (
      <Link
        to={to}
        className={`inline-flex items-center justify-center group transition-all duration-300 hover:scale-[1.02] ${className}`}
      >
        {logoSvg}
      </Link>
    );
  }

  return (
    <div className={`inline-flex items-center justify-center group ${className}`}>
      {logoSvg}
    </div>
  );
}
