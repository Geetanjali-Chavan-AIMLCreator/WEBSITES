import React from 'react';
import { Leaf, Cog, ShieldCheck, Globe, Sprout } from 'lucide-react';

export const ValuesBand: React.FC = () => {
  const values = [
    { label: 'Natural Goodness', icon: Leaf },
    { label: 'Advanced Processing', icon: Cog },
    { label: 'Quality Assurance', icon: ShieldCheck },
    { label: 'Global Reach', icon: Globe },
    { label: 'Sustainable Practices', icon: Sprout },
  ];

  return (
    <div className="py-5 sm:py-6 bg-[#FAF7F0] border-y border-[#0B3D2E]/10">
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-8 items-center justify-between">
          {values.map((v, idx) => {
            const Icon = v.icon;
            return (
              <div
                key={idx}
                className="flex items-center gap-2.5 justify-center group"
              >
                <div className="text-[#0B3D2E] group-hover:text-[#C9A24D] transition-colors shrink-0">
                  <Icon className="w-5 h-5 stroke-[1.8]" />
                </div>
                <span className="text-xs sm:text-sm font-semibold text-[#0B3D2E] tracking-tight whitespace-nowrap group-hover:text-[#123F2A] transition-colors">
                  {v.label}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
