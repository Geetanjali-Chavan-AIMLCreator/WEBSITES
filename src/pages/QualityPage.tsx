import React from 'react';
import { siteImages } from '../assets/images';
import { ShieldCheck, CheckCircle2, Award, Microchip, Eye, Scale, ArrowRight } from 'lucide-react';

interface QualityPageProps {
  onOpenQuote: () => void;
}

export const QualityPage: React.FC<QualityPageProps> = ({ onOpenQuote }) => {
  const pillars = [
    {
      title: '1. Natural Sourcing & Farm Selection',
      icon: CheckCircle2,
      desc: 'Our sourcing network prioritizes orchards adhering to clean cultivation standards. Raw intake is screened for maturity, shell condition, and natural moisture balance.',
    },
    {
      title: '2. Multi-Stage Mechanical Cleaning',
      icon: Scale,
      desc: 'High-power aspirators, vibratory de-stoners, and magnetic screens remove field grit, twigs, and foreign matter in a strictly sanitary food-grade flow.',
    },
    {
      title: '3. Optical & Trichromatic Color Sorting',
      icon: Eye,
      desc: 'High-definition digital camera sensors scan individual kernels at microsecond intervals, eliminating surface blemishes, discolored nuts, and insect damage.',
    },
    {
      title: '4. Calibrated Size Grading',
      icon: Microchip,
      desc: 'Uniformity matters for consumer mouthfeel and industrial processing machinery. We calibrate nuts by international count-per-ounce and diameter standards.',
    },
    {
      title: '5. Controlled Hygienic Processing',
      icon: ShieldCheck,
      desc: 'Operating with strict food-handler protocols, sanitized stainless steel conveyors, and cleanroom air handling to prevent cross-contamination.',
    },
    {
      title: '6. Laboratory Quality Inspection',
      icon: Award,
      desc: 'Representative samples from each production lot undergo internal laboratory analysis for moisture titration, kernel crack counts, and organoleptic crunch.',
    },
    {
      title: '7. Nitrogen & Vacuum Packaging',
      icon: ShieldCheck,
      desc: 'Oxygen is the natural enemy of nut oils. We utilize nitrogen flushing and high-barrier foil layers to retard oxidation and keep nuts fresh for months.',
    },
    {
      title: '8. Complete Batch Traceability',
      icon: CheckCircle2,
      desc: 'Every master carton and consumer pouch carries a distinct batch lot number linking the package directly back to intake date, processing line, and QA signoff.',
    },
  ];

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-14">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Uncompromising Standards
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Quality Assurance Framework
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            At Shivansh Agro, quality is not a final checkpoint — it is the governing discipline applied at every stage of the dry fruit journey.
          </p>
        </div>

        {/* 8 Quality Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pillars.map((pil, idx) => {
            const Icon = pil.icon;
            return (
              <div
                key={idx}
                className="bg-white rounded-3xl p-6 border border-[#0B3D2E]/10 shadow-xs hover:shadow-md transition-all duration-200 flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center mb-4 group-hover:bg-[#0B3D2E] group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5 text-[#C9A24D]" />
                  </div>
                  <h3 className="font-serif-heading text-lg font-bold text-[#0B3D2E] mb-2 leading-snug">
                    {pil.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#3E5246] leading-relaxed">
                    {pil.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>

        {/* Dedicated Certification & Compliance Registry Space */}
        <div className="bg-white rounded-3xl p-8 sm:p-10 border border-[#0B3D2E]/15 shadow-sm space-y-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 pb-6 border-b border-neutral-100">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A24D]">
                Standards & Compliance Desk
              </span>
              <h2 className="font-serif-heading text-2xl font-bold text-[#0B3D2E]">
                Accreditation, Lab Testing & Trade Compliance
              </h2>
            </div>
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#0B3D2E] text-white text-xs sm:text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-[#123F2A] transition-colors"
            >
              <span>Request Batch COA & Spec Sheet</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A24D]" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-sm text-[#3E5246]">
            <div className="p-4 rounded-2xl bg-[#F7F2E7]/70 border border-[#C9A24D]/20 space-y-2">
              <span className="font-serif-heading font-bold text-[#0B3D2E] block">
                Food Safety Protocol
              </span>
              <p className="text-xs leading-relaxed">
                Adhering to strict statutory food authority guidelines for moisture ceilings, microbial limits, and clean warehouse storage.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F2E7]/70 border border-[#C9A24D]/20 space-y-2">
              <span className="font-serif-heading font-bold text-[#0B3D2E] block">
                Certificate of Analysis (COA)
              </span>
              <p className="text-xs leading-relaxed">
                Industrial and wholesale clients receive dedicated lot-wise COA documentation detailing moisture percentages, count accuracy, and quality grading.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-[#F7F2E7]/70 border border-[#C9A24D]/20 space-y-2">
              <span className="font-serif-heading font-bold text-[#0B3D2E] block">
                Ongoing Audits & Registrations
              </span>
              <p className="text-xs leading-relaxed">
                Our facilities undergo regular internal hygiene audits, pest mitigation monitoring, and equipment calibration.
              </p>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
