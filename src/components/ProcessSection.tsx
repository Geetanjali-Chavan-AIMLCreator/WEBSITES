import React from 'react';
import { siteImages } from '../assets/images';
import { Sprout, Cog, ShieldCheck, Package, Truck, ArrowRight } from 'lucide-react';

interface ProcessSectionProps {
  onLearnMoreProcess: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({
  onLearnMoreProcess,
}) => {
  const steps = [
    {
      title: 'Sourcing',
      sub: 'From Trusted Farms',
      icon: Sprout,
      color: 'text-[#2E7D32]',
    },
    {
      title: 'Cleaning & Processing',
      sub: 'with Advanced Technology',
      icon: Cog,
      color: 'text-[#6B4326]',
    },
    {
      title: 'Quality Check',
      sub: '& Grading',
      icon: ShieldCheck,
      color: 'text-[#0B3D2E]',
    },
    {
      title: 'Packaging',
      sub: 'with Care',
      icon: Package,
      color: 'text-[#1B5E20]',
    },
    {
      title: 'Delivery',
      sub: 'to Your Home & Business',
      icon: Truck,
      color: 'text-[#0B3D2E]',
    },
  ];

  return (
    <section className="relative overflow-hidden py-14 sm:py-20 bg-[#0B3D2E]">
      {/* Agricultural Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={siteImages.farmOrchard}
          alt="Shivansh Agro trusted farm orchard"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center"
        />
        {/* Warm sunlight to forest green overlay scrim */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/55 to-black/70" />
      </div>

      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-center">
          
          {/* LEFT: Heading & Subheading (4-5 cols) */}
          <div className="lg:col-span-4 2xl:col-span-4 space-y-3">
            <h2 className="font-serif-heading text-3xl sm:text-4xl lg:text-5xl text-white font-bold tracking-tight leading-tight drop-shadow-sm">
              Pure. Processed. Delivered.
            </h2>
            <p className="text-white/90 text-sm sm:text-base font-normal leading-relaxed max-w-md">
              From trusted farms to your home and business, ensuring quality at every step.
            </p>
          </div>

          {/* RIGHT: 5 Circular Connected Steps with Arrows (7-8 cols) */}
          <div className="lg:col-span-8 2xl:col-span-8">
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-2 items-start">
              {steps.map((item, index) => {
                const Icon = item.icon;
                const isLast = index === steps.length - 1;

                return (
                  <div key={index} className="flex items-center group">
                    <div className="flex-1 flex flex-col items-center text-center">
                      {/* Circular Badge with Gold Ring */}
                      <div className="w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#FAF5E8] border-2 border-[#C9A24D] shadow-md flex items-center justify-center mb-2.5 transition-transform duration-300 group-hover:scale-108 shrink-0">
                        <Icon className={`w-6 h-6 ${item.color}`} />
                      </div>

                      {/* Title & Subtitle */}
                      <span className="text-xs sm:text-sm font-bold text-white leading-tight block">
                        {item.title}
                      </span>
                      <span className="text-[11px] text-white/80 leading-tight block mt-0.5">
                        {item.sub}
                      </span>
                    </div>

                    {/* Connecting Arrow for Desktop */}
                    {!isLast && (
                      <div className="hidden lg:flex items-center justify-center text-white/70 px-1 -mt-8 shrink-0">
                        <ArrowRight className="w-4 h-4 text-white/80" />
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
