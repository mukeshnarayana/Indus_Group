import React from 'react';
import { Link } from 'react-router-dom';

export default function BrandLogo({
  variant = 'default',
  className = '',
  title = 'AN ARROW HUB',
  subtitle = 'by INDUS GROUP',
  to = '/'
}) {
  const isDark = variant === 'dark' || variant === 'hero';

  const logoSvg = (
    <svg
      className={`h-16 md:h-20 w-auto ${isDark ? 'text-white' : 'text-[#001849]'}`}
      viewBox="0 0 400 210"
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
      </defs>

      {/* 3D Folded Arrow Mark */}
      <g transform="translate(100, 5)">
        <polygon points="10,110 180,5 118,78" fill="url(#arrowTopGrad)" />
        <polygon points="118,78 180,5 142,125" fill="url(#arrowBottomGrad)" />
      </g>

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
        className={`inline-flex flex-col items-center justify-center text-center group transition-all duration-300 hover:scale-105 ${className}`}
      >
        {logoSvg}
      </Link>
    );
  }

  return (
    <div className={`inline-flex flex-col items-center justify-center text-center group ${className}`}>
      {logoSvg}
    </div>
  );
}
