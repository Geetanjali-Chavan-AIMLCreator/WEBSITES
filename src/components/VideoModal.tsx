import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, Play, CheckCircle2 } from 'lucide-react';
import { siteImages } from '../assets/images';

interface VideoModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({ isOpen, onClose }) => {
  const [activeStep, setActiveStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(true);

  if (!isOpen) return null;

  const processSlides = [
    {
      title: '01. Sourcing From Certified Farms',
      subtitle: 'Direct Farmer Relationships & Orchard Selection',
      image: siteImages.farmOrchard,
      desc: 'Shivansh Agro sources raw nuts directly from verified domestic orchards and prime origin valleys. Every harvest batch is documented at farm level for complete traceability.',
      metrics: ['Direct farm tie-ups', 'Purity test on intake', 'Strict moisture screening'],
    },
    {
      title: '02. Pre-Cleaning & De-Stoning',
      subtitle: 'Aspirators & Rotary Drum Screeners',
      image: siteImages.industrialMachinery,
      desc: 'Raw lots pass through industrial vibratory screens and air-density aspirators to eliminate orchard dust, twigs, outer shells, and foreign matter in a sealed sanitary loop.',
      metrics: ['Double aspiration', 'Stainless-steel contact', 'Zero chemical additives'],
    },
    {
      title: '03. Advanced Optical & Laser Sorting',
      subtitle: 'Sub-Millimeter Camera Scanning',
      image: siteImages.industrialMachinery,
      desc: 'High-speed monochromatic and bichromatic optical sorters analyze up to 12,000 kernels per second, rejecting discolored kernels, insect marks, and physical irregularities.',
      metrics: ['High-speed optical rejection', 'Grade uniformity > 99.4%', 'Gentle pneumatic air-ejection'],
    },
    {
      title: '04. Size Grading & Calibration',
      subtitle: 'Standardized Industry Calibration',
      image: siteImages.productAlmonds,
      desc: 'Nuts are precision-calibrated by diameter, count-per-ounce, and shape (e.g. W180, W240, W320 for cashews; 20-22 count for California almonds) for strict recipe consistency.',
      metrics: ['Calibrated sizing drums', 'Zero breakage handling', 'Uniform batch weight'],
    },
    {
      title: '05. Multi-Point Quality Inspection',
      subtitle: 'In-House Laboratory & Microbiological Checks',
      image: siteImages.productCashews,
      desc: 'Samples from each sorted pallet undergo moisture titration, aflatoxin screening, and physical organoleptic assessment by certified food quality inspectors.',
      metrics: ['Moisture < 5.0%', 'Microbial safety clearance', 'Color & crunch index verification'],
    },
    {
      title: '06. Modified Atmosphere & Vacuum Packaging',
      subtitle: 'Nitrogen-Flushed Hermetic Sealing',
      image: siteImages.packagingPouches,
      desc: 'To preserve natural oils and crispness, nuts are packed in multilayer barrier foil pouches with nitrogen flushing or vacuum-sealed cartons protecting against oxidation.',
      metrics: ['Nitrogen flush oxygen < 1%', 'Multi-layer aroma barrier', '100% tamper evident'],
    },
    {
      title: '07. Temperature-Controlled Dispatch',
      subtitle: 'Bulk Pallet Logistics & Last-Mile Speed',
      image: siteImages.wholesalersCartons,
      desc: 'Orders are shrink-wrapped on sanitized wooden pallets and dispatched through humidity-controlled logistics fleets to wholesale mandis, distribution hubs, and online fulfillment centers.',
      metrics: ['Palletized strapping', 'Real-time transit tracking', 'Pan-India network'],
    },
  ];

  const current = processSlides[activeStep];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-200">
      <div className="relative w-full max-w-4xl bg-[#0B3D2E] text-white rounded-3xl shadow-2xl border border-[#C9A24D]/30 overflow-hidden flex flex-col max-h-[92vh]">
        
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-[#123F2A]">
          <div className="flex items-center gap-3">
            <span className="w-2.5 h-2.5 rounded-full bg-[#C9A24D] animate-ping" />
            <h3 className="font-serif-heading text-lg sm:text-xl font-bold tracking-wide">
              Shivansh Agro Processing Facility Tour
            </h3>
          </div>
          <button
            onClick={onClose}
            className="w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video / Slide Visual Frame */}
        <div className="relative w-full aspect-video bg-neutral-900 overflow-hidden">
          <img
            src={current.image}
            alt={current.title}
            referrerPolicy="no-referrer"
            className="w-full h-full object-cover object-center transition-all duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Slide Caption Overlay */}
          <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6">
            <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-wider block mb-1">
              Step {activeStep + 1} of {processSlides.length}
            </span>
            <h4 className="font-serif-heading text-xl sm:text-2xl font-bold text-white drop-shadow">
              {current.title}
            </h4>
            <p className="text-white/80 text-xs sm:text-sm mt-1 max-w-2xl hidden sm:block">
              {current.subtitle}
            </p>
          </div>
        </div>

        {/* Technical Explanations & Controls */}
        <div className="p-5 sm:p-6 bg-[#0B3D2E] space-y-4 overflow-y-auto">
          <p className="text-sm text-white/90 leading-relaxed">
            {current.desc}
          </p>

          <div className="flex flex-wrap gap-2 pt-1">
            {current.metrics.map((m, idx) => (
              <span
                key={idx}
                className="inline-flex items-center gap-1.5 text-xs bg-white/10 border border-white/20 px-3 py-1 rounded-full text-white/95"
              >
                <CheckCircle2 className="w-3.5 h-3.5 text-[#C9A24D]" />
                <span>{m}</span>
              </span>
            ))}
          </div>

          {/* Slider Steps & Navigation buttons */}
          <div className="pt-4 border-t border-white/10 flex items-center justify-between">
            <div className="flex items-center gap-1.5 overflow-x-auto py-1">
              {processSlides.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveStep(idx)}
                  className={`h-2 rounded-full transition-all ${
                    idx === activeStep ? 'w-8 bg-[#C9A24D]' : 'w-2 bg-white/30 hover:bg-white/50'
                  }`}
                  aria-label={`Slide ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-2">
              <button
                disabled={activeStep === 0}
                onClick={() => setActiveStep((prev) => Math.max(0, prev - 1))}
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Previous step"
              >
                <ChevronLeft className="w-4 h-4 text-white" />
              </button>
              <button
                disabled={activeStep === processSlides.length - 1}
                onClick={() => setActiveStep((prev) => Math.min(processSlides.length - 1, prev + 1))}
                className="p-2 rounded-full bg-[#C9A24D] text-[#0B3D2E] hover:bg-[#dfbf75] disabled:opacity-30 disabled:cursor-not-allowed transition-colors"
                aria-label="Next step"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};
