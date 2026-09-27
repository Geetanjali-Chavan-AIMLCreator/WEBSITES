import React, { useState } from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight, Package, ShieldCheck, CheckCircle2 } from 'lucide-react';

interface ProductsPageProps {
  onOpenQuoteWithProduct: (productName: string) => void;
  onShopOnline: () => void;
}

export const ProductsPage: React.FC<ProductsPageProps> = ({
  onOpenQuoteWithProduct,
  onShopOnline,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('all');

  const products = [
    {
      id: 'almonds',
      category: 'nuts',
      name: 'Premium California & Mamra Almonds',
      shortName: 'Almonds',
      desc: 'Systematically graded for high crunch, uniform moisture, and rich nutrient retention. Available in whole kernels, blanched, and custom sliced cuts.',
      image: siteImages.productAlmonds,
      packagingOptions: '250g & 500g zip-lock pouches | 10kg vacuum carton | 25kg bulk bags',
      specifications: ['Count: 20-22 / 23-25 per oz', 'Moisture: < 4.8%', 'Optical Purity: 99.5%'],
    },
    {
      id: 'cashews',
      category: 'nuts',
      name: 'Handpicked Whole Cashews (W180, W240, W320)',
      shortName: 'Cashews',
      desc: 'Creamy, sweet, and golden-white cashew kernels carefully separated into Jumbo W180, Standard W240, and Consumer W320 grades.',
      image: siteImages.productCashews,
      packagingOptions: '200g, 500g nitrogen-flushed pouches | 10kg & 20kg vacuum tin/carton',
      specifications: ['Grades: W180 King, W240, W320', 'Broken kernel rate: < 1.0%', 'Raw & Dry Roasted'],
    },
    {
      id: 'pistachios',
      category: 'nuts',
      name: 'Natural Open-Shell Pistachios',
      shortName: 'Pistachios',
      desc: 'Naturally split in-shell pistachios with emerald green kernels, roasted with low sodium or offered raw for culinary confectionery processing.',
      image: siteImages.productPistachios,
      packagingOptions: '250g, 500g stand-up pouches | 10kg bulk master cases',
      specifications: ['Natural open rate: > 96%', 'Salt: Natural / Light salted', 'Shell-free kernels available'],
    },
    {
      id: 'walnuts',
      category: 'nuts',
      name: 'Extra Light Halves & Shelled Walnuts',
      shortName: 'Walnuts',
      desc: 'Cold-cracked and sort-graded Kashmiri extra light walnut halves. Packed with plant-based Omega-3 fatty acids and natural crunch.',
      image: siteImages.productWalnuts,
      packagingOptions: '250g nitrogen-sealed packs | 5kg & 10kg vacuum barrier bags',
      specifications: ['Halves yield: > 85%', 'Color: Extra Light Amber', 'Nitrogen packed for oil protection'],
    },
    {
      id: 'raisins',
      category: 'dried-fruits',
      name: 'Sun-Dried Golden & Green Raisins',
      shortName: 'Raisins',
      desc: 'Tender, naturally sweet seedless raisins washed, dried, and lightly oiled for confectionery applications and daily breakfast bowls.',
      image: siteImages.directCustomers,
      packagingOptions: '250g, 500g & 1kg pouches | 15kg corrugated wholesale boxes',
      specifications: ['Berry size: Jumbo / Medium', 'Free of stems and grit', 'Moisture: 14-16% soft chew'],
    },
    {
      id: 'mixed-fruits',
      category: 'blends',
      name: 'Artisanal Mixed Dry Fruit Selection',
      shortName: 'Mixed Dry Fruits',
      desc: 'A harmonized ratio of whole almonds, cashews, pistachios, and walnuts designed for daily balanced nutrition and corporate gifting hampers.',
      image: siteImages.heroBowl,
      packagingOptions: '400g & 800g luxury presentation tins | 500g resealable pouches',
      specifications: ['Even 4-way balanced ratio', 'Triple optical sorted', 'Gift-box readiness'],
    },
    {
      id: 'bulk-wholesale',
      category: 'industrial',
      name: 'Wholesale Pallet & Master Cartons',
      shortName: 'Bulk Products',
      desc: 'Direct-from-plant bulk consignments for distributors and FMCG wholesalers. Consistent batch-to-batch grading with certified weight slips.',
      image: siteImages.wholesalersCartons,
      packagingOptions: '10kg, 25kg, and 50kg export grade carton / vacuum liners',
      specifications: ['Container load shipping', 'Certified weight documentation', 'Volume tier discounts'],
    },
    {
      id: 'custom-processing',
      category: 'industrial',
      name: 'Custom Grading, Sorting & Contract Slicing',
      shortName: 'Custom Processing',
      desc: 'Dedicated processing runs for food manufacturers, sweet makers, and snack brands: optical de-stoning, laser color inspection, slicing, and diced cuts.',
      image: siteImages.industrialMachinery,
      packagingOptions: 'Custom client specifications & nitrogen-flushed bulk containers',
      specifications: ['Custom millimeter slicing', 'Optical defect rejection', 'Private brand co-packing'],
    },
  ];

  const filtered = activeCategory === 'all'
    ? products
    : products.filter((p) => p.category === activeCategory);

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Catalog & Specifications
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Our Premium Products
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            All Shivansh Agro products undergo strict sorting, calibrated sizing, and hermetic packaging to guarantee freshness and peak nutritional integrity.
          </p>
        </div>

        {/* Filter Controls */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {[
            { id: 'all', label: 'All Products' },
            { id: 'nuts', label: 'Whole Nuts' },
            { id: 'dried-fruits', label: 'Raisins & Dried Fruits' },
            { id: 'blends', label: 'Curated Blends' },
            { id: 'industrial', label: 'Bulk & Industrial' },
          ].map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-[#0B3D2E] text-white shadow-sm'
                  : 'bg-white text-[#3E5246] hover:bg-[#F7F2E7] border border-[#0B3D2E]/10'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filtered.map((prod) => (
            <div
              key={prod.id}
              className="bg-white rounded-3xl overflow-hidden border border-[#0B3D2E]/10 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                {/* Image */}
                <div className="relative w-full aspect-[4/3] bg-[#FAF7F0] overflow-hidden">
                  <img
                    src={prod.image}
                    alt={prod.name}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-center group-hover:scale-104 transition-transform duration-500"
                  />
                  <div className="absolute top-3 left-3 bg-[#0B3D2E]/90 backdrop-blur-xs text-white text-[11px] font-semibold px-3 py-1 rounded-full uppercase tracking-wider">
                    {prod.shortName}
                  </div>
                </div>

                {/* Details */}
                <div className="p-6 space-y-4">
                  <h3 className="font-serif-heading text-xl font-bold text-[#0B3D2E] leading-snug group-hover:text-[#123F2A]">
                    {prod.name}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#3E5246] leading-relaxed">
                    {prod.desc}
                  </p>

                  {/* Packaging Options */}
                  <div className="pt-2 border-t border-neutral-100 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-semibold text-[#6B4326]">
                      <Package className="w-3.5 h-3.5 text-[#C9A24D]" />
                      <span>Packaging Options</span>
                    </div>
                    <p className="text-xs text-neutral-600 bg-[#F7F2E7]/70 p-2 rounded-lg">
                      {prod.packagingOptions}
                    </p>
                  </div>

                  {/* Specifications */}
                  <div className="space-y-1">
                    {prod.specifications.map((sp, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-xs text-[#3E5246]">
                        <CheckCircle2 className="w-3.5 h-3.5 text-[#388E3C] shrink-0" />
                        <span>{sp}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Bottom CTAs */}
              <div className="p-6 pt-0 flex items-center gap-3">
                <button
                  onClick={() => onOpenQuoteWithProduct(prod.shortName)}
                  className="flex-1 inline-flex items-center justify-center gap-2 bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-xs sm:text-sm font-semibold py-2.5 px-4 rounded-full transition-colors shadow-xs"
                >
                  <span>Enquire Now</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A24D]" />
                </button>
                <button
                  onClick={onShopOnline}
                  className="inline-flex items-center justify-center text-xs font-semibold text-[#0B3D2E] hover:text-[#C9A24D] px-3 py-2.5 rounded-full border border-[#0B3D2E]/20 hover:border-[#0B3D2E] transition-colors"
                >
                  <span>Shop Online</span>
                </button>
              </div>

            </div>
          ))}
        </div>

      </div>
    </div>
  );
};
