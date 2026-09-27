import React from 'react';
import { siteImages } from '../assets/images';
import { Sprout, Sun, Recycle, Droplets, HeartHandshake, ArrowRight } from 'lucide-react';

interface SustainabilityPageProps {
  onOpenQuote: () => void;
}

export const SustainabilityPage: React.FC<SustainabilityPageProps> = ({ onOpenQuote }) => {
  const initiatives = [
    {
      title: 'Responsible Orchard Sourcing',
      icon: Sprout,
      desc: 'We cultivate long-term contracts with regional farmers who practice regenerative soil management, minimal chemical intervention, and natural seasonal harvesting.',
    },
    {
      title: 'Water & Energy Efficiency',
      icon: Droplets,
      desc: 'Our processing plants utilize closed-loop water recirculation in washing cycles and variable-frequency motor drives across sorting conveyors to reduce electrical load.',
    },
    {
      title: 'Agricultural Waste & Biomass Repurposing',
      icon: Recycle,
      desc: 'Hard nut shells and hulls removed during decortication are diverted from landfills to serve as clean bio-fuel pellets and natural soil amendment mulches for orchards.',
    },
    {
      title: 'Recyclable & Reduced-Gauge Packaging',
      icon: Sun,
      desc: 'We are progressively transitioning consumer packaging to mono-material recyclable barrier films and unbleached kraft master cartons printed with water-based non-toxic inks.',
    },
    {
      title: 'Farmer Welfare & Fair Value Creation',
      icon: HeartHandshake,
      desc: 'Direct sourcing channels remove parasitic intermediaries, ensuring that independent farming families receive prompt, fair market compensation for high-grade yields.',
    },
  ];

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Honoring The Land
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Sustainability & Stewardship
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            Because our dry fruits originate from the soil, protecting agricultural ecosystems and honoring farming communities is core to Shivansh Agro.
          </p>
        </div>

        {/* Feature Hero */}
        <div className="relative rounded-3xl overflow-hidden shadow-xl border border-[#0B3D2E]/10">
          <div className="aspect-[16/7] sm:aspect-[21/9] w-full bg-neutral-800">
            <img
              src={siteImages.farmOrchard}
              alt="Sustainable orchards and agricultural landscapes"
              referrerPolicy="no-referrer"
              className="w-full h-full object-cover object-center"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#0B3D2E]/90 via-[#0B3D2E]/40 to-transparent flex items-end p-6 sm:p-10">
            <div className="text-white max-w-2xl">
              <span className="text-xs uppercase tracking-widest text-[#C9A24D] font-bold">
                From Soil to Stewardship
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold mt-1">
                Nurturing Nature for Generations to Come
              </h2>
              <p className="text-sm text-white/80 mt-2 hidden sm:block">
                Committed to low-waste processing, responsible farmer partnerships, and sustainable agricultural practices.
              </p>
            </div>
          </div>
        </div>

        {/* Sustainability Initiatives */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {initiatives.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B3D2E]/10 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-12 h-12 rounded-2xl bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center mb-4 group-hover:bg-[#0B3D2E] group-hover:text-white transition-colors">
                    <Icon className="w-6 h-6 text-[#2E7D32]" />
                  </div>
                  <h3 className="font-serif-heading text-xl font-bold text-[#0B3D2E] mb-2">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E5246] leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Call to action */}
        <div className="bg-[#0B3D2E] text-white rounded-3xl p-8 sm:p-10 text-center space-y-4 shadow-xl border border-[#C9A24D]/30">
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold">
            Partner With a Sustainable Supply Chain
          </h2>
          <p className="text-white/80 max-w-xl mx-auto text-sm">
            Whether you require transparent traceability documentation for ESG reporting or eco-friendly master cartons, Shivansh Agro aligns with your sustainability targets.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#C9A24D] hover:bg-[#dfbf75] text-[#0B3D2E] font-bold px-7 py-3 rounded-full transition-all"
            >
              <span>Connect With Our Team</span>
              <ArrowRight className="w-4 h-4 text-[#0B3D2E]" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
