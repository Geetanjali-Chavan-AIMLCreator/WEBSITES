import React from 'react';
import { siteImages } from '../assets/images';
import { Sprout, Cog, ShieldCheck, Package, Truck, Sparkles, Filter, CheckCircle2, ArrowRight } from 'lucide-react';

interface ProcessPageProps {
  onOpenQuote: () => void;
}

export const ProcessPage: React.FC<ProcessPageProps> = ({ onOpenQuote }) => {
  const steps = [
    {
      num: '01',
      title: 'Sourcing & Direct Farm Intake',
      desc: 'Raw nuts are sourced from certified partner orchards. Every inbound lot is weighed, batch-coded, and inspected for basic moisture levels, physical integrity, and farm documentation.',
      icon: Sprout,
      img: siteImages.farmOrchard,
      tags: ['Farm traceability', 'Moisture intake check', 'Certified origin'],
    },
    {
      num: '02',
      title: 'Industrial Cleaning & De-Stoning',
      desc: 'Nuts pass through magnetic separators, vibratory screens, and counter-current air aspirators to remove dust, field debris, stones, and outer pericarp in a sanitary closed cycle.',
      icon: Filter,
      img: siteImages.industrialMachinery,
      tags: ['Aspiration de-stoner', 'Vibratory screeners', 'Magnetic foreign object trap'],
    },
    {
      num: '03',
      title: 'Primary Processing & Shelling',
      desc: 'Gentle impact cracking and multi-roller shelling preserve whole kernels with minimal mechanical stress, ensuring optimal yield and preventing kernel breakage.',
      icon: Cog,
      img: siteImages.industrialMachinery,
      tags: ['Low-impact cracking', 'Whole kernel retention', 'Shell separation'],
    },
    {
      num: '04',
      title: 'Sub-Millimeter Optical Sorting',
      desc: 'High-speed trichromatic optical camera sensors scan kernels at high frame rates, automatically ejecting discolored, undersized, or insect-damaged nuts via ultra-fast air micro-valves.',
      icon: Sparkles,
      img: siteImages.productAlmonds,
      tags: ['High-speed cameras', 'Micro-pneumatic ejection', 'Purity rate > 99.4%'],
    },
    {
      num: '05',
      title: 'Calibrated Size Grading',
      desc: 'Precision rotary and cylindrical graders classify nuts by strict international count-per-ounce criteria (e.g. W180 jumbo, W240 standard, W320 consumer for cashews; 20-22 count for almonds).',
      icon: CheckCircle2,
      img: siteImages.productCashews,
      tags: ['Diameter calibration', 'Count-per-ounce accuracy', 'Custom industrial cuts'],
    },
    {
      num: '06',
      title: 'Multi-Stage Quality & Lab Checks',
      desc: 'Certified QA specialists test representative lot samples for moisture levels, organoleptic crunch and flavor profiles, and microbiological safety in our clean testing station.',
      icon: ShieldCheck,
      img: siteImages.productWalnuts,
      tags: ['In-house testing', 'Aflatoxin screening', 'Crispness index validation'],
    },
    {
      num: '07',
      title: 'Hygienic & Protective Packaging',
      desc: 'Depending on buyer requirements, nuts are sealed in modified atmosphere nitrogen-flushed retail pouches, vacuum-packed bulk foil bags, or corrugated export cartons.',
      icon: Package,
      img: siteImages.packagingPouches,
      tags: ['Nitrogen flush', 'High-barrier pouches', 'Tamper-proof sealing'],
    },
    {
      num: '08',
      title: 'Temperature-Safe Logistics & Delivery',
      desc: 'Packaged consignments are strapped onto sanitized pallets and dispatched via vetted transport carriers directly to retail distribution hubs, export ports, and wholesale markets.',
      icon: Truck,
      img: siteImages.wholesalersCartons,
      tags: ['Palletized strapping', 'Real-time dispatch alerts', 'Domestic & export transit'],
    },
  ];

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Header Banner */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Precision Engineering & Care
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Our Processing Pipeline
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            From the orchard branches to your doorstep: an 8-stage industrial continuum engineered for hygienic safety, kernel integrity, and uncompromised flavor.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="space-y-8">
          {steps.map((st, idx) => {
            const Icon = st.icon;
            const isEven = idx % 2 === 1;

            return (
              <div
                key={st.num}
                className={`bg-white rounded-3xl p-6 sm:p-8 border border-[#0B3D2E]/10 shadow-sm hover:shadow-md transition-all duration-300 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                  isEven ? 'lg:flex-row-reverse' : ''
                }`}
              >
                {/* Visual Image */}
                <div className={`lg:col-span-5 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-neutral-100">
                    <img
                      src={st.img}
                      alt={st.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-full object-cover object-center hover:scale-104 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`lg:col-span-7 space-y-4 ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="flex items-center gap-3">
                    <span className="font-brand font-bold text-sm text-[#0B3D2E] bg-[#C9A24D]/20 px-3 py-1 rounded-full">
                      Stage {st.num}
                    </span>
                    <div className="w-8 h-8 rounded-full bg-[#F7F2E7] flex items-center justify-center text-[#0B3D2E]">
                      <Icon className="w-4 h-4 text-[#0B3D2E]" />
                    </div>
                  </div>

                  <h3 className="font-serif-heading text-2xl font-bold text-[#0B3D2E]">
                    {st.title}
                  </h3>

                  <p className="text-sm sm:text-base text-[#3E5246] leading-relaxed">
                    {st.desc}
                  </p>

                  <div className="flex flex-wrap gap-2 pt-2">
                    {st.tags.map((tg, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-1.5 text-xs bg-[#F7F2E7] text-[#0B3D2E] font-medium px-3 py-1 rounded-lg"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24D]" />
                        <span>{tg}</span>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom B2B Callout */}
        <div className="bg-[#0B3D2E] text-white rounded-3xl p-8 sm:p-12 text-center space-y-4 border border-[#C9A24D]/30 shadow-xl">
          <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold">
            Looking for Custom Processing or Slicing Contracts?
          </h2>
          <p className="text-white/80 max-w-2xl mx-auto text-sm sm:text-base">
            We provide custom optical sorting, laser inspection, custom dicing, blanching, and vacuum-sealing for corporate bakeries, confectionery giants, and private-label dry fruit brands.
          </p>
          <div className="pt-2">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#C9A24D] hover:bg-[#dfbf75] text-[#0B3D2E] font-bold px-7 py-3.5 rounded-full shadow-md transition-all duration-200"
            >
              <span>Discuss Custom Processing Agreement</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </div>
  );
};
