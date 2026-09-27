import React from 'react';
import { siteImages } from '../assets/images';

interface LogoProps {
  className?: string;
  variant?: 'full' | 'emblem' | 'light';
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export const ShivanshAgroLogo: React.FC<LogoProps> = ({
  className = '',
  variant = 'full',
  size = 'md',
}) => {
  // Enhanced, larger sizing definitions for superior visibility
  const logoHeights = {
    sm: 'h-11 sm:h-12',
    md: 'h-14 sm:h-16 lg:h-[62px]',
    lg: 'h-18 sm:h-20',
    xl: 'h-22 sm:h-24',
  };

  const emblemSizes = {
    sm: 'w-11 h-11',
    md: 'w-14 h-14',
    lg: 'w-18 h-18',
    xl: 'w-22 h-22',
  };

  if (variant === 'emblem') {
    return (
      <div className={`inline-flex items-center shrink-0 ${className}`}>
        <img
          src={siteImages.emblem}
          alt="Shivansh Agro Emblem"
          className={`${emblemSizes[size]} object-contain drop-shadow-sm transition-transform duration-300 hover:scale-105`}
        />
      </div>
    );
  }

  if (variant === 'light') {
    return (
      <div className={`inline-flex items-center gap-3 select-none ${className}`}>
        {/* Emblem on dark background */}
        <div className="relative shrink-0">
          <img
            src={siteImages.emblem}
            alt="Shivansh Agro Emblem"
            className={`${emblemSizes[size]} object-contain rounded-full shadow-md`}
          />
        </div>

        {/* Wordmark with high contrast for dark background */}
        <div className="flex flex-col justify-center">
          <div className="font-serif-heading font-black tracking-[0.14em] uppercase text-white text-xl sm:text-2xl leading-none">
            SHIVANSH
          </div>

          <div className="flex items-center gap-2 my-0.5">
            <div className="h-[1.5px] w-4 bg-[#C9A24D]" />
            <span className="font-serif-heading italic font-bold text-[#DFBF75] text-xs sm:text-sm tracking-[0.3em]">
              AGRO
            </span>
            <div className="h-[1.5px] flex-1 bg-[#C9A24D]" />
          </div>

          <div className="font-sans font-semibold tracking-[0.24em] uppercase text-[#C9A24D] text-[9px] sm:text-[10px] leading-tight">
            FROM NATURE TO HOME
          </div>
        </div>
      </div>
    );
  }

  // Default 'full' variant: official horizontal logo image, prominent and crystal clear
  return (
    <div className={`inline-flex items-center select-none ${className}`}>
      <img
        src={siteImages.logo}
        alt="Shivansh Agro - From Nature to Home"
        className={`${logoHeights[size]} w-auto object-contain transition-transform duration-200 hover:opacity-95 drop-shadow-2xs`}
      />
    </div>
  );
};
