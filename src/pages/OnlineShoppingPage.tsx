import React, { useState } from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight, ShoppingBag, Clock, ShieldCheck, Truck, ExternalLink } from 'lucide-react';

interface OnlineShoppingPageProps {
  onOpenQuote: () => void;
}

export const OnlineShoppingPage: React.FC<OnlineShoppingPageProps> = ({ onOpenQuote }) => {
  const [activePlatformModal, setActivePlatformModal] = useState<string | null>(null);

  const platforms = [
    {
      id: 'zepto',
      name: 'Zepto',
      badge: '10-Minute Delivery',
      color: 'bg-[#430852] text-white',
      accentColor: 'border-purple-400/30',
      tagline: 'Instant grocery delivery in key metro areas',
      description: 'Find Shivansh Agro daily snacking almonds, whole cashews, and salted pistachios delivered directly to your doorstep in 10 minutes.',
      availability: 'Metro cities & selected delivery hubs',
      productsFeatured: 'Almonds 200g, Jumbo Cashews 200g, Salted Pistachios 200g',
    },
    {
      id: 'blinkit',
      name: 'Blinkit',
      badge: 'Instant Grocery',
      color: 'bg-[#F8C200] text-neutral-900',
      accentColor: 'border-yellow-500/40',
      tagline: 'Everything delivered in minutes',
      description: 'Order Shivansh Agro premium dry fruits on Blinkit for fast breakfast additions, baking ingredients, and healthy evening snacking.',
      availability: 'Pan-metro coverage across India',
      productsFeatured: 'Kashmiri Walnuts 250g, California Almonds 500g, Mixed Dry Fruits',
    },
    {
      id: 'amazon',
      name: 'Amazon India',
      badge: 'Nationwide & Prime',
      color: 'bg-white text-neutral-900',
      accentColor: 'border-neutral-200',
      tagline: 'Pan-India shipping with Amazon Prime',
      description: 'Shivansh Agro full consumer catalogue with 1-day and 2-day delivery options, customer reviews, and multi-pack subscribe & save options.',
      availability: 'Nationwide pincodes across India',
      productsFeatured: 'Full consumer pack range (250g, 500g, 1kg) & Gift Boxes',
    },
    {
      id: 'bigbasket',
      name: 'BigBasket',
      badge: 'Daily Fresh & BB Daily',
      color: 'bg-white text-neutral-900',
      accentColor: 'border-neutral-200',
      tagline: 'India’s trusted online supermarket',
      description: 'Add Shivansh Agro systematically graded dry fruits to your weekly household grocery slot with verified weight and purity assurance.',
      availability: 'Major cities & tier-1/tier-2 clusters',
      productsFeatured: 'Monthly Pantry 1kg Almonds, Cashews W240, Golden Raisins',
    },
    {
      id: 'swiggy',
      name: 'Swiggy Instamart',
      badge: 'Quick Commerce',
      color: 'bg-white text-neutral-900',
      accentColor: 'border-neutral-200',
      tagline: 'Groceries delivered in 15–30 minutes',
      description: 'Instant ordering on Swiggy Instamart for festive dry fruit platters, daily protein essentials, and healthy office snacking.',
      availability: 'Urban delivery zones across leading cities',
      productsFeatured: 'Royal Mix 400g, California Almonds 200g, Cashews 200g',
    },
  ];

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Doorstep Convenience
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Shop Shivansh Agro Online
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            Order our freshly graded and nitrogen-sealed dry fruits directly through India’s leading online grocery and quick-commerce platforms.
          </p>
        </div>

        {/* Platforms Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {platforms.map((plat) => (
            <div
              key={plat.id}
              className="bg-white rounded-3xl p-6 sm:p-7 border border-[#0B3D2E]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Platform Header Card */}
                <div className={`rounded-2xl p-4 mb-5 border ${plat.accentColor} ${plat.color} flex items-center justify-between shadow-xs`}>
                  <span className="font-brand font-bold text-xl tracking-tight">
                    {plat.name}
                  </span>
                  <span className="text-[11px] font-semibold uppercase tracking-wider px-2 py-0.5 rounded bg-black/10">
                    {plat.badge}
                  </span>
                </div>

                <h3 className="font-serif-heading text-lg font-bold text-[#0B3D2E] mb-1">
                  {plat.tagline}
                </h3>

                <p className="text-xs sm:text-sm text-[#3E5246] leading-relaxed mb-4">
                  {plat.description}
                </p>

                <div className="space-y-2 pt-2 border-t border-neutral-100 text-xs text-[#6B4326]">
                  <div>
                    <span className="font-semibold text-[#0B3D2E]">Availability: </span>
                    {plat.availability}
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B3D2E]">Top SKUs: </span>
                    {plat.productsFeatured}
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-6">
                <button
                  onClick={() => setActivePlatformModal(plat.name)}
                  className="w-full inline-flex items-center justify-between bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-xs sm:text-sm font-semibold px-5 py-3 rounded-full transition-all group/btn shadow-xs"
                >
                  <span>Shop on {plat.name}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A24D] group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          ))}

          {/* Wholesale or Bulk inquiry card */}
          <div className="bg-[#0B3D2E] text-white rounded-3xl p-6 sm:p-7 border border-[#C9A24D]/30 shadow-md flex flex-col justify-between">
            <div>
              <span className="text-[#C9A24D] text-xs font-bold uppercase tracking-widest block mb-2 font-sans">
                Wholesale & Bulk Orders
              </span>
              <h3 className="font-serif-heading text-xl font-bold mb-2">
                Need Volume Cartons or Institutional Orders?
              </h3>
              <p className="text-xs sm:text-sm text-white/80 leading-relaxed mb-4">
                For order quantities exceeding 25kg, wholesale mandi deliveries, or custom festive corporate gift boxes, connect directly with our corporate sales desk for factory-direct rates.
              </p>
              <div className="space-y-1.5 text-xs text-white/70">
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#C9A24D]" />
                  <span>Direct producer billing with GST tax invoice</span>
                </div>
                <div className="flex items-center gap-2">
                  <Truck className="w-4 h-4 text-[#C9A24D]" />
                  <span>Doorstep pallet logistics nationwide</span>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <button
                onClick={onOpenQuote}
                className="w-full inline-flex items-center justify-between bg-[#C9A24D] hover:bg-[#dfbf75] text-[#0B3D2E] text-xs sm:text-sm font-bold px-5 py-3 rounded-full transition-all shadow-xs"
              >
                <span>Request B2B Trade Pricing</span>
                <ArrowRight className="w-4 h-4 text-[#0B3D2E]" />
              </button>
            </div>
          </div>
        </div>

        {/* Platform Notice Modal (No fabricated URLs) */}
        {activePlatformModal && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-in fade-in duration-150">
            <div className="bg-white rounded-2xl max-w-md w-full p-6 text-center space-y-4 border border-[#0B3D2E]/20 shadow-2xl">
              <div className="w-12 h-12 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center mx-auto">
                <ShoppingBag className="w-6 h-6 text-[#0B3D2E]" />
              </div>
              <h3 className="font-serif-heading text-xl font-bold text-[#0B3D2E]">
                Shopping on {activePlatformModal}
              </h3>
              <p className="text-xs sm:text-sm text-[#3E5246] leading-relaxed">
                Shivansh Agro dry fruits are available on <strong className="text-[#0B3D2E]">{activePlatformModal}</strong> in authorized serviceable regions. Open your {activePlatformModal} app and search for <em>"Shivansh Agro"</em> to view real-time delivery slot availability and pack sizes in your locality.
              </p>
              <div className="pt-2">
                <button
                  onClick={() => setActivePlatformModal(null)}
                  className="bg-[#0B3D2E] text-white text-xs font-semibold px-6 py-2.5 rounded-full hover:bg-[#123F2A] transition-colors"
                >
                  Understood
                </button>
              </div>
            </div>
          </div>
        )}

      </div>
    </div>
  );
};
