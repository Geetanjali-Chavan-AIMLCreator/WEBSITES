import React from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight, Cog } from 'lucide-react';

interface ProductsAndPlatformsProps {
  onViewAllProducts: () => void;
  onSelectProduct: (productName: string) => void;
  onShopOnline: () => void;
}

export const ProductsAndPlatformsSection: React.FC<ProductsAndPlatformsProps> = ({
  onViewAllProducts,
  onSelectProduct,
  onShopOnline,
}) => {
  const products = [
    {
      id: 'almonds',
      name: 'Almonds',
      image: siteImages.productAlmonds,
      alt: 'Fresh premium whole almonds in wooden bowl',
    },
    {
      id: 'cashews',
      name: 'Cashews',
      image: siteImages.productCashews,
      alt: 'Jumbo cashew nuts in wooden bowl',
    },
    {
      id: 'pistachios',
      name: 'Pistachios',
      image: siteImages.productPistachios,
      alt: 'Split-shell natural green pistachios',
    },
    {
      id: 'walnuts',
      name: 'Walnuts',
      image: siteImages.productWalnuts,
      alt: 'Shelled natural walnut halves',
    },
    {
      id: 'mixed-fruits',
      name: 'Mixed Dry Fruits',
      image: siteImages.directCustomers,
      alt: 'Mixed dry fruits blend in handcrafted bowl',
    },
    {
      id: 'custom-processing',
      name: 'Custom Processing',
      isCustom: true,
      image: siteImages.directCustomers,
      alt: 'Custom processing and grading of dry fruits',
    },
  ];

  return (
    <section className="py-10 sm:py-14 bg-white border-b border-[#0B3D2E]/5">
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8 space-y-6">
        
        {/* TOP: Our Premium Products (Full Width across with 6 cards in a row) */}
        <div>
          {/* Header row */}
          <div className="flex items-center justify-between mb-4 sm:mb-5">
            <h2 className="font-serif-heading text-2xl sm:text-3xl text-[#0B3D2E] font-bold tracking-tight">
              Our Premium Products
            </h2>
            <button
              onClick={onViewAllProducts}
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-[#0B3D2E] hover:text-[#C9A24D] transition-colors group cursor-pointer"
            >
              <span>View All Products</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* 6 Product Cards in ONE Horizontal Row across the full width */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5 sm:gap-4">
            {products.map((p) => (
              <div
                key={p.id}
                onClick={() => onSelectProduct(p.name)}
                className="bg-white rounded-2xl p-3 sm:p-3.5 border border-neutral-200/90 hover:border-[#C9A24D] shadow-2xs hover:shadow-md transition-all duration-200 cursor-pointer group flex flex-col justify-between"
              >
                {/* Image area */}
                <div className="relative w-full aspect-square rounded-xl overflow-hidden mb-2.5 bg-[#FAF7F0] flex items-center justify-center">
                  <img
                    src={p.image}
                    alt={p.alt}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-108 transition-transform duration-300"
                  />
                  {/* Overlay gear icon badge for Custom Processing */}
                  {p.isCustom && (
                    <div className="absolute inset-0 bg-[#0B3D2E]/25 flex items-center justify-center">
                      <div className="w-10 h-10 rounded-full bg-[#0B3D2E] border-2 border-[#C9A24D] flex items-center justify-center text-white shadow-md">
                        <Cog className="w-5 h-5 animate-[spin_10s_linear_infinite]" />
                      </div>
                    </div>
                  )}
                </div>

                {/* Name and Arrow */}
                <div className="flex items-center justify-between pt-1">
                  <span className="font-serif-heading text-xs sm:text-sm font-bold text-[#0B3D2E] group-hover:text-[#123F2A] truncate">
                    {p.name}
                  </span>
                  <span className="text-[#0B3D2E]/50 group-hover:text-[#0B3D2E] group-hover:translate-x-0.5 transition-all shrink-0 ml-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* BOTTOM: Compact Horizontal 'Available On' Bar below the products */}
        <div className="bg-[#0B3D2E] rounded-2xl py-3 px-5 sm:px-6 text-white shadow-md border border-[#C9A24D]/30 flex flex-col lg:flex-row items-center justify-between gap-4">
          
          {/* Left: Heading and description in 1 line */}
          <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4 text-center sm:text-left shrink-0">
            <h3 className="font-serif-heading text-lg sm:text-xl font-bold tracking-tight text-white whitespace-nowrap">
              Available On
            </h3>
            <span className="hidden sm:inline text-white/30">|</span>
            <p className="text-white/80 text-xs font-normal">
              Our premium dry fruits are now available on leading online platforms.
            </p>
          </div>

          {/* Center: 5 Platform Badges in a clean horizontal strip */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-2.5">
            {/* Zepto */}
            <div className="bg-[#430852] text-white rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 border border-purple-400/20 shadow-2xs">
              <span className="w-3.5 h-3.5 rounded bg-[#EF4444] text-white font-black text-[8px] flex items-center justify-center italic">
                Z
              </span>
              <span className="font-bold text-xs tracking-wide">zepto</span>
            </div>

            {/* Blinkit */}
            <div className="bg-[#F8C200] text-neutral-900 rounded-lg px-2.5 py-1.5 flex items-center gap-1 border border-yellow-500/30 shadow-2xs">
              <span className="font-black text-xs tracking-tight">blink<span className="text-[#0C831F]">it</span></span>
            </div>

            {/* Amazon */}
            <div className="bg-white text-neutral-900 rounded-lg px-2.5 py-1.5 flex items-center gap-1 border border-neutral-200 shadow-2xs">
              <span className="font-bold text-xs tracking-tight text-neutral-900">amazon</span>
              <span className="text-[10px] text-[#FF9900] font-black">.in</span>
            </div>

            {/* BigBasket */}
            <div className="bg-white text-neutral-900 rounded-lg px-2.5 py-1.5 flex items-center gap-1.5 border border-neutral-200 shadow-2xs">
              <span className="px-1 py-0.2 rounded bg-[#E23744] text-white font-extrabold text-[8px]">bb</span>
              <span className="font-bold text-xs text-[#84C225]">bigbasket</span>
            </div>

            {/* Swiggy Instamart */}
            <div className="bg-white text-neutral-900 rounded-lg px-2.5 py-1.5 flex items-center gap-1 border border-neutral-200 shadow-2xs">
              <span className="w-3.5 h-3.5 rounded-full bg-[#FC8019] text-white font-black text-[8px] flex items-center justify-center">S</span>
              <span className="font-bold text-xs text-[#FC8019]">Swiggy <span className="text-neutral-700 font-normal">instamart</span></span>
            </div>
          </div>

          {/* Right: Shop Online CTA button */}
          <div className="shrink-0">
            <button
              onClick={onShopOnline}
              className="inline-flex items-center gap-2 bg-[#092B20] hover:bg-[#072017] text-white border border-white/30 text-xs font-semibold py-1.5 px-4 rounded-full transition-all duration-200 group cursor-pointer whitespace-nowrap shadow-xs"
            >
              <span>Shop Online</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

        </div>

      </div>
    </section>
  );
};
