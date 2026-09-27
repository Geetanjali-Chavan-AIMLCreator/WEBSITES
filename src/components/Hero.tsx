import React from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight, Play, Sprout, Cog, ShieldCheck, Globe } from 'lucide-react';

interface HeroProps {
  onExploreProducts: () => void;
  onWatchProcess: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onExploreProducts,
  onWatchProcess,
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F7F2E7] pt-6 pb-12 md:py-16 lg:py-20 border-b border-[#0B3D2E]/10">
      {/* Subtle organic background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#C9A24D]/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-[#0B3D2E]/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-6 items-center">
          
          {/* LEFT COLUMN: Hero Text & CTAs (5-6 cols on desktop) */}
          <div className="lg:col-span-5 xl:col-span-5 space-y-6">
            
            {/* Main Headline */}
            <div>
              <h1 className="font-serif-heading text-4xl sm:text-5xl xl:text-6xl text-[#0B3D2E] tracking-tight leading-[1.08] font-bold">
                From <br />
                <span className="relative inline-block">
                  Nature to Home
                  {/* Decorative tiny leaf accent */}
                  <span className="inline-flex items-center ml-2.5 align-middle text-[#388E3C]">
                    <svg className="w-5 h-5 inline-block" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M17 8C8 10 5.9 16.17 3.82 21.34L5.71 22l1-2.3A4.49 4.49 0 0 0 8 20C19 20 22 3 22 3c-1 2-8 2-8 2s-3-2-5-2c-4 0-7 3-7 7 0 2.5 1.5 5 3.5 6.5C12 14 15 11 17 8z"/>
                    </svg>
                  </span>
                </span>
              </h1>

              {/* Sub-headline */}
              <h2 className="mt-4 text-xl sm:text-2xl font-serif-heading font-semibold text-[#6B4326] leading-snug">
                Premium Dry Fruit Processing <br className="hidden sm:inline" />
                for a Healthier Tomorrow
              </h2>
            </div>

            {/* Description */}
            <p className="text-[#3E5246] text-base sm:text-lg leading-relaxed max-w-xl font-normal">
              We process, sort, grade and deliver the finest dry fruits with care, quality and innovation — from farms to homes, businesses and industries.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 pt-2">
              <button
                onClick={onExploreProducts}
                className="inline-flex items-center gap-2.5 bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-sm sm:text-base font-medium px-6 py-3.5 rounded-full shadow-md hover:shadow-lg transition-all duration-200 group focus:outline-none focus:ring-2 focus:ring-[#C9A24D]"
              >
                <span>Explore Products</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
              </button>

              <button
                onClick={onWatchProcess}
                className="inline-flex items-center gap-2 bg-white/80 hover:bg-white text-[#0B3D2E] text-sm sm:text-base font-medium px-5 sm:px-6 py-3.5 rounded-full border border-[#0B3D2E]/30 hover:border-[#0B3D2E] shadow-sm hover:shadow transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-[#0B3D2E]/20"
              >
                <span className="w-6 h-6 rounded-full bg-[#0B3D2E]/10 flex items-center justify-center text-[#0B3D2E]">
                  <Play className="w-3.5 h-3.5 fill-[#0B3D2E]" />
                </span>
                <span>Watch Our Process</span>
              </button>
            </div>
          </div>

          {/* CENTER & RIGHT COLUMN: Hero Food Photography & Vertical Indicators */}
          <div className="lg:col-span-7 xl:col-span-7 relative flex flex-col md:flex-row items-center justify-between gap-6">
            
            {/* The Cinematic Hero Bowl of Dry Fruits */}
            <div className="relative w-full md:w-4/5 lg:w-[82%] group">
              <div className="relative rounded-2xl md:rounded-3xl overflow-hidden shadow-2xl border-4 border-white/60 bg-neutral-200">
                <img
                  src={siteImages.heroBowl}
                  alt="Shivansh Agro artisanal wooden bowl with almonds, cashews, pistachios, and walnuts"
                  referrerPolicy="no-referrer"
                  className="w-full h-auto object-cover object-center transform duration-700 group-hover:scale-103 transition-transform"
                />
                
                {/* Soft ambient inner border */}
                <div className="absolute inset-0 rounded-2xl md:rounded-3xl ring-1 ring-inset ring-black/10 pointer-events-none" />
              </div>

              {/* Decorative floating badge */}
              <div className="absolute -bottom-3 -left-3 bg-white/95 backdrop-blur-md px-3.5 py-1.5 rounded-xl border border-[#C9A24D]/30 shadow-md hidden sm:flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#388E3C] animate-pulse" />
                <span className="text-xs font-semibold text-[#0B3D2E] tracking-wide">
                  100% Farm Fresh & Graded
                </span>
              </div>
            </div>

            {/* RIGHT SIDE: Four Vertically Stacked Feature Indicators */}
            <div className="w-full md:w-auto flex md:flex-col justify-around md:justify-center gap-4 sm:gap-6 shrink-0 py-2">
              
              {/* Feature 1: Naturally Sourced */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C9A24D] shadow-sm flex items-center justify-center text-[#2E7D32] group-hover:bg-[#F7F2E7] transition-colors shrink-0">
                  <Sprout className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[#0B3D2E] tracking-tight block">
                    Naturally Sourced
                  </span>
                  <span className="text-[11px] text-[#6B4326] hidden md:block">
                    Direct from certified farms
                  </span>
                </div>
              </div>

              {/* Feature 2: Advanced Processing */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C9A24D] shadow-sm flex items-center justify-center text-[#6B4326] group-hover:bg-[#F7F2E7] transition-colors shrink-0">
                  <Cog className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[#0B3D2E] tracking-tight block">
                    Advanced Processing
                  </span>
                  <span className="text-[11px] text-[#6B4326] hidden md:block">
                    Optical sorting & grading
                  </span>
                </div>
              </div>

              {/* Feature 3: Premium Quality */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C9A24D] shadow-sm flex items-center justify-center text-[#C9A24D] group-hover:bg-[#F7F2E7] transition-colors shrink-0">
                  <ShieldCheck className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[#0B3D2E] tracking-tight block">
                    Premium Quality
                  </span>
                  <span className="text-[11px] text-[#6B4326] hidden md:block">
                    Strict multi-point testing
                  </span>
                </div>
              </div>

              {/* Feature 4: Global & Local Reach */}
              <div className="flex items-center gap-3 group">
                <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-white border-2 border-[#C9A24D] shadow-sm flex items-center justify-center text-[#0B3D2E] group-hover:bg-[#F7F2E7] transition-colors shrink-0">
                  <Globe className="w-5 h-5 sm:w-6 sm:h-6" />
                </div>
                <div className="text-left">
                  <span className="text-xs sm:text-sm font-semibold text-[#0B3D2E] tracking-tight block">
                    Global & Local Reach
                  </span>
                  <span className="text-[11px] text-[#6B4326] hidden md:block">
                    Pan-India & export supply
                  </span>
                </div>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
