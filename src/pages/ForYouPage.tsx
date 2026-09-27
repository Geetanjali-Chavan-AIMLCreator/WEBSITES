import React, { useState, useEffect } from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight, CheckCircle2, ShieldCheck, ShoppingCart, Truck, Factory, Handshake } from 'lucide-react';

interface ForYouPageProps {
  initialSubTab?: string;
  onOpenQuoteWithType: (customerType: string) => void;
  onShopOnline: () => void;
}

export const ForYouPage: React.FC<ForYouPageProps> = ({
  initialSubTab = 'direct-customers',
  onOpenQuoteWithType,
  onShopOnline,
}) => {
  const [activeTab, setActiveTab] = useState<string>(initialSubTab);

  useEffect(() => {
    if (initialSubTab) {
      setActiveTab(initialSubTab);
    }
  }, [initialSubTab]);

  const segments = {
    'direct-customers': {
      title: 'For Direct Customers & Households',
      tagline: 'Farm-Fresh Dry Fruits for Your Daily Health & Energy',
      icon: ShoppingCart,
      image: siteImages.directCustomers,
      alt: 'Direct consumer dry fruits mix',
      description: 'We believe your family deserves dry fruits that are as crisp, nutritious, and pure as the day they were harvested. Every almond, cashew, and walnut in our consumer packs is vacuum-cleaned and sealed in food-grade barrier pouches.',
      highlights: [
        '100% natural and unadulterated — no artificial glazes or heavy preservatives',
        'Systematic grading: zero shriveled or bitter kernels in consumer packs',
        'Multi-layer aroma-lock stand-up pouches with reusable ziplock seals',
        'Convenient doorstep delivery via leading quick-commerce platforms like Zepto, Blinkit, and Amazon',
      ],
      packSizes: 'Available in 200g, 250g, 400g, 500g, and 1kg family value packs.',
      ctaText: 'Shop on Quick Commerce Platforms',
      ctaAction: onShopOnline,
      secondaryCta: 'Order Consumer Gift Packs',
      secondaryAction: () => onOpenQuoteWithType('Direct Customer'),
    },
    wholesalers: {
      title: 'For Wholesalers & Regional Distributors',
      tagline: 'Reliable Volume Supply, Transparent Grading & Competitive Trade Rates',
      icon: Truck,
      image: siteImages.wholesalersCartons,
      alt: 'Cardboard cartons on pallet in wholesale warehouse',
      description: 'Shivansh Agro partners with wholesale mandi traders, regional FMCG stockists, and supermarket chains. We eliminate broker variance by providing standardized count-per-ounce grades, vacuum-packed master cartons, and predictable delivery timetables.',
      highlights: [
        'Standardized international count and grade classifications (W180, W240, W320, 20-22 count)',
        'Container load availability and master corrugated cartons with tamper-evident strapping',
        'Moisture-controlled transit keeping nuts crunchy regardless of seasonal weather',
        'Transparent wholesale tier pricing and scheduled contract replenishment cycles',
      ],
      packSizes: '10kg vacuum barrier cartons, 20kg bulk master tins, 25kg / 50kg export bags.',
      ctaText: 'Get Wholesale Quotation',
      ctaAction: () => onOpenQuoteWithType('Wholesaler / Distributor'),
      secondaryCta: 'Request Trade Sample Carton',
      secondaryAction: () => onOpenQuoteWithType('Wholesaler / Distributor'),
    },
    industrial: {
      title: 'For Industrial Food Processors & Manufacturers',
      tagline: 'Calibrated Ingredients for Bakeries, Confectionery & Dairy Giants',
      icon: Factory,
      image: siteImages.industrialMachinery,
      alt: 'Industrial food processing conveyor machinery',
      description: 'Food manufacturing lines cannot tolerate stone fragments, shell pieces, or irregular moisture spikes. Shivansh Agro delivers precision-sorted nut ingredients adhering to strict microbiological, physical, and chemical tolerances.',
      highlights: [
        'Custom mechanical cuts: blanched halves, slivers, diced pieces, and fine nut flour',
        'Dual optical-color sorting and metal detection guaranteeing foreign-matter free intake',
        'Certificates of Analysis (COA) per production run including moisture and aflatoxin tests',
        'Dedicated account management with safety stock reserves for uninterrupted factory uptime',
      ],
      packSizes: 'Continuous IBC bins, 25kg multi-wall paper bags with PE liner, or nitrogen-totes.',
      ctaText: 'Request Bulk Industrial Supply',
      ctaAction: () => onOpenQuoteWithType('Industrial Buyer'),
      secondaryCta: 'Discuss Technical Specs',
      secondaryAction: () => onOpenQuoteWithType('Industrial Buyer'),
    },
    smes: {
      title: 'For SMEs, Private Label Brands & Corporate Partners',
      tagline: 'Turnkey Private Labeling, Co-Branding & Bespoke Corporate Gifting',
      icon: Handshake,
      image: siteImages.smesPartners,
      alt: 'Corporate handshake for B2B dry fruits partnership',
      description: 'Expand your brand into premium dry fruits without the multi-crore capital expense of sorting and packaging machinery. Shivansh Agro provides end-to-end contract packaging, custom pouch printing, and curated corporate gift box fulfillment.',
      highlights: [
        'Flexible Minimum Order Quantities (MOQs) tailored to emerging health brands and gourmet labels',
        'Complete packaging versatility: matte standup pouches, eco-paper jars, and festive gift boxes',
        'Regulatory labeling guidance and batch traceability compliant with food safety standards',
        'Custom mix ratios: create signature superfood crunch blends unique to your brand',
      ],
      packSizes: 'Custom consumer pouches (50g to 1kg) and bespoke corporate presentation boxes.',
      ctaText: 'Partner With Us / Private Label',
      ctaAction: () => onOpenQuoteWithType('SME / Business Partner'),
      secondaryCta: 'Explore Corporate Gifting',
      secondaryAction: () => onOpenQuoteWithType('SME / Business Partner'),
    },
  };

  const current = segments[activeTab as keyof typeof segments] || segments['direct-customers'];

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Tailored Solutions
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Solutions For You
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            Whether you are nourishing your home or scaling a multinational supply chain, Shivansh Agro delivers solutions designed for your exact operational requirements.
          </p>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 p-1.5 bg-white rounded-2xl border border-[#0B3D2E]/10 max-w-4xl mx-auto shadow-xs">
          {[
            { id: 'direct-customers', label: 'Direct Customers' },
            { id: 'wholesalers', label: 'Wholesalers & Distributors' },
            { id: 'industrial', label: 'Industrial Buyers' },
            { id: 'smes', label: 'SMEs & Business Partners' },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-3 px-4 rounded-xl text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer whitespace-nowrap text-center ${
                activeTab === tab.id
                  ? 'bg-[#0B3D2E] text-white shadow-sm'
                  : 'text-[#3E5246] hover:bg-[#F7F2E7]'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Selected Segment Detailed View */}
        <div className="bg-white rounded-3xl p-6 sm:p-10 border border-[#0B3D2E]/10 shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          
          {/* Left Column: Visual */}
          <div className="lg:col-span-5">
            <div className="w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-inner bg-neutral-100">
              <img
                src={current.image}
                alt={current.alt}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center"
              />
            </div>
          </div>

          {/* Right Column: Information & Actions */}
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A24D]">
                {current.tagline}
              </span>
              <h2 className="font-serif-heading text-2xl sm:text-3xl font-bold text-[#0B3D2E] mt-1">
                {current.title}
              </h2>
            </div>

            <p className="text-sm sm:text-base text-[#3E5246] leading-relaxed">
              {current.description}
            </p>

            {/* Highlights List */}
            <div className="space-y-2.5 pt-1">
              {current.highlights.map((h, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-[#1F2923]">
                  <CheckCircle2 className="w-4 h-4 text-[#388E3C] shrink-0 mt-0.5" />
                  <span>{h}</span>
                </div>
              ))}
            </div>

            {/* Packaging & Logistics Note */}
            <div className="p-4 rounded-xl bg-[#F7F2E7] border border-[#C9A24D]/30 text-xs text-[#0B3D2E]">
              <span className="font-bold">Standard Supply Packaging: </span>
              {current.packSizes}
            </div>

            {/* Action Buttons */}
            <div className="pt-2 flex flex-wrap gap-4">
              <button
                onClick={current.ctaAction}
                className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-full shadow-sm transition-colors"
              >
                <span>{current.ctaText}</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24D]" />
              </button>

              <button
                onClick={current.secondaryAction}
                className="inline-flex items-center gap-2 bg-white text-[#0B3D2E] border border-[#0B3D2E]/20 hover:border-[#0B3D2E] text-xs sm:text-sm font-semibold px-5 py-3 rounded-full hover:bg-[#F7F2E7] transition-colors"
              >
                <span>{current.secondaryCta}</span>
              </button>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
