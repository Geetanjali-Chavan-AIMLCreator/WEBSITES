import React from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight, ShieldCheck, Sprout, Building, Users } from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: () => void;
  onExploreProcess: () => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({ onOpenQuote, onExploreProcess }) => {
  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Our Heritage & Philosophy
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            From Nature to Home
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            Shivansh Agro is dedicated to the systematic processing, precision grading, and reliable distribution of nature’s most nutritious dry fruits.
          </p>
        </div>

        {/* Facility Showcase Banner */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#0B3D2E]/10">
          <div className="aspect-[16/8] sm:aspect-[21/9] w-full bg-neutral-800">
            <img
              src={siteImages.factoryBuilding}
              alt="Shivansh Agro modern agro-industrial processing facility"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-[#0B3D2E]/40 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-bold">
                Processing & Logistics Hub
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold mt-1">
                State-of-the-Art Dry Fruit Processing Facility
              </h2>
              <p className="text-sm text-white/80 mt-2 hidden sm:block">
                Hygienic processing lines, optical sorters, and temperature-controlled storage ensuring optimal freshness from harvest to dispatch.
              </p>
            </div>
          </div>
        </div>

        {/* Company Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="space-y-5">
            <span className="text-xs font-bold uppercase tracking-wider text-[#6B4326]">
              Who We Are
            </span>
            <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0B3D2E]">
              Bridging Orchard Farmers and Modern Consumers
            </h2>
            <p className="text-sm sm:text-base text-[#3E5246] leading-relaxed">
              At Shivansh Agro, we believe dry fruits should be delivered with their raw vitality, pristine taste, and high nutritional density intact. We operate across the entire supply continuum — from agricultural orchard sourcing to advanced cleaning, sorting, and packaging.
            </p>
            <p className="text-sm sm:text-base text-[#3E5246] leading-relaxed">
              Whether supplying a family through trusted retail platforms, shipping wholesale pallets to distributors, or delivering truckloads of calibrated nuts to industrial confectioners, our philosophy remains constant: uncompromising quality, transparent grading, and dependable partnership.
            </p>

            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#0B3D2E] text-white text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#123F2A] transition-colors shadow-sm"
              >
                <span>Partner With Shivansh Agro</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24D]" />
              </button>
              <button
                onClick={onExploreProcess}
                className="inline-flex items-center gap-2 bg-white text-[#0B3D2E] border border-[#0B3D2E]/20 text-sm font-semibold px-6 py-3 rounded-full hover:bg-[#F7F2E7] transition-colors"
              >
                <span>View Processing Stages</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24D]" />
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="bg-white rounded-2xl p-6 border border-[#0B3D2E]/10 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center">
                <Sprout className="w-5 h-5 text-[#2E7D32]" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#0B3D2E]">
                Direct Farm Ties
              </h3>
              <p className="text-xs text-[#3E5246] leading-relaxed">
                Direct engagement with growers to ensure fair trade and clean harvests.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#0B3D2E]/10 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center">
                <Building className="w-5 h-5 text-[#6B4326]" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#0B3D2E]">
                Modern Processing
              </h3>
              <p className="text-xs text-[#3E5246] leading-relaxed">
                Cleanroom standards, automated de-stoning, and optical sorters.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#0B3D2E]/10 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center">
                <ShieldCheck className="w-5 h-5 text-[#C9A24D]" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#0B3D2E]">
                Strict Quality
              </h3>
              <p className="text-xs text-[#3E5246] leading-relaxed">
                Moisture control, count-per-ounce accuracy, and sensory verification.
              </p>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-[#0B3D2E]/10 shadow-xs space-y-2">
              <div className="w-10 h-10 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center">
                <Users className="w-5 h-5 text-[#0B3D2E]" />
              </div>
              <h3 className="font-serif-heading text-lg font-bold text-[#0B3D2E]">
                B2B Reliability
              </h3>
              <p className="text-xs text-[#3E5246] leading-relaxed">
                Long-term agreements, customized packaging, and nationwide logistics.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
