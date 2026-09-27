import React from 'react';
import { siteImages } from '../assets/images';
import { ArrowRight } from 'lucide-react';

interface SolutionsSectionProps {
  onDirectCustomer: () => void;
  onWholesale: () => void;
  onIndustrial: () => void;
  onSmePartner: () => void;
}

export const SolutionsSection: React.FC<SolutionsSectionProps> = ({
  onDirectCustomer,
  onWholesale,
  onIndustrial,
  onSmePartner,
}) => {
  const solutions = [
    {
      id: 'direct-customers',
      title: 'For Direct Customers',
      description: 'Healthy, premium dry fruits for your everyday nutrition.',
      image: siteImages.directCustomers,
      alt: 'Assortment of fresh premium dry fruits for direct consumers',
      btnText: 'Shop Now',
      bgColor: 'bg-[#F2F6F3]',
      borderColor: 'border-[#388E3C]/25',
      action: onDirectCustomer,
    },
    {
      id: 'wholesalers',
      title: 'For Wholesalers & Distributors',
      description: 'Bulk supply with consistent quality and competitive pricing.',
      image: siteImages.wholesalersCartons,
      alt: 'Stacked wholesale cartons on wooden pallet',
      btnText: 'Get Wholesale Quote',
      bgColor: 'bg-[#F8F4EB]',
      borderColor: 'border-[#C9A24D]/30',
      action: onWholesale,
    },
    {
      id: 'industrial',
      title: 'For Industrialists',
      description: 'Custom processing, sorting, grading and bulk supply for food manufacturers.',
      image: siteImages.industrialMachinery,
      alt: 'Stainless steel food processing machinery conveyor',
      btnText: 'Request Bulk Supply',
      bgColor: 'bg-[#EFF3F6]',
      borderColor: 'border-[#0B3D2E]/20',
      action: onIndustrial,
    },
    {
      id: 'smes',
      title: 'For SMEs & Business Partners',
      description: 'Grow together with private labeling, co-branding and long-term tie-ups.',
      image: siteImages.smesPartners,
      alt: 'Corporate handshake representing business partnership and private labeling',
      btnText: 'Partner With Us',
      bgColor: 'bg-[#FAF5E8]',
      borderColor: 'border-[#6B4326]/20',
      action: onSmePartner,
    },
  ];

  return (
    <section className="py-12 sm:py-16 lg:py-20 bg-white border-b border-[#0B3D2E]/5">
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <h2 className="font-serif-heading text-3xl sm:text-4xl text-[#0B3D2E] font-bold tracking-tight">
            Solutions for Every Need
          </h2>
          <p className="mt-2 text-[#6B4326] text-sm sm:text-base font-normal">
            Partnering with individuals, businesses and industries across the value chain
          </p>
        </div>

        {/* Four Cards in 1 Row on Desktop, Each Card with Image on LEFT and Text on RIGHT (Horizontal Layout) */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 lg:gap-4.5">
          {solutions.map((item) => (
            <div
              key={item.id}
              className={`rounded-2xl p-4 sm:p-4.5 border ${item.borderColor} ${item.bgColor} shadow-xs hover:shadow-md transition-all duration-300 group flex flex-row items-center gap-3.5 sm:gap-4`}
            >
              {/* LEFT: Image Container */}
              <div className="w-24 sm:w-28 lg:w-26 xl:w-28 2xl:w-32 aspect-square rounded-xl overflow-hidden shrink-0 bg-white/80 shadow-xs border border-white">
                <img
                  src={item.image}
                  alt={item.alt}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover object-center group-hover:scale-106 transition-transform duration-500"
                />
              </div>

              {/* RIGHT: Content & Button */}
              <div className="flex-1 min-w-0 flex flex-col justify-between h-full py-0.5">
                <div>
                  {/* Card Title */}
                  <h3 className="font-serif-heading text-sm sm:text-base xl:text-[15px] 2xl:text-base font-bold text-[#0B3D2E] leading-tight mb-1.5 group-hover:text-[#123F2A] transition-colors">
                    {item.title}
                  </h3>

                  {/* Card Description */}
                  <p className="text-[11px] sm:text-xs text-[#3E5246] leading-relaxed line-clamp-2 sm:line-clamp-3 mb-3">
                    {item.description}
                  </p>
                </div>

                {/* Bottom CTA Button */}
                <div>
                  <button
                    onClick={item.action}
                    className="inline-flex items-center gap-1.5 bg-white/95 hover:bg-[#0B3D2E] hover:text-white text-[#0B3D2E] border border-[#0B3D2E]/25 text-[11px] sm:text-xs font-semibold px-3 sm:px-3.5 py-1.5 rounded-full transition-all duration-200 group/btn shadow-2xs whitespace-nowrap cursor-pointer"
                  >
                    <span>{item.btnText}</span>
                    <ArrowRight className="w-3 h-3 text-[#C9A24D] group-hover/btn:translate-x-0.5 group-hover/btn:text-white transition-all shrink-0" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
