import React from 'react';
import { ShivanshAgroLogo } from './Logo';
import { ArrowRight, Mail, Phone, MapPin } from 'lucide-react';

interface FooterProps {
  onNavigate: (tab: string, subParam?: string) => void;
  onOpenQuote: () => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavigate, onOpenQuote }) => {
  return (
    <footer className="bg-[#0B3D2E] text-white/80 pt-16 pb-12 border-t border-[#C9A24D]/20">
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 pb-12 border-b border-white/10">
          
          {/* Col 1: Brand Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="focus:outline-none text-left"
            >
              <ShivanshAgroLogo variant="light" size="md" />
            </button>
            
            <p className="text-sm text-white/70 leading-relaxed max-w-sm pt-2">
              From Nature to Home. Shivansh Agro is a premier agro-processing company delivering systematically graded, processed, and packaged dry fruits to households, wholesale markets, and industrial food enterprises.
            </p>

            <div className="pt-2">
              <button
                onClick={onOpenQuote}
                className="inline-flex items-center gap-2 bg-[#C9A24D] hover:bg-[#dfbf75] text-[#0B3D2E] text-xs font-bold px-4 py-2.5 rounded-full shadow-sm transition-all duration-200"
              >
                <span>Request B2B Quotation</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Col 2: Navigation Links (2-3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif-heading text-base font-semibold tracking-wide">
              Quick Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('home')}
                  className="hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('about')}
                  className="hover:text-white transition-colors"
                >
                  About Shivansh Agro
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('process')}
                  className="hover:text-white transition-colors"
                >
                  Our Processing Pipeline
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('products')}
                  className="hover:text-white transition-colors"
                >
                  Product Catalogue
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('quality')}
                  className="hover:text-white transition-colors"
                >
                  Quality Standards & Lab Testing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('sustainability')}
                  className="hover:text-white transition-colors"
                >
                  Sustainable Farm Practices
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('contact')}
                  className="hover:text-white transition-colors"
                >
                  Contact & Inquiries
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Business Channels (2-3 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-white font-serif-heading text-base font-semibold tracking-wide">
              Supply Verticals
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => onNavigate('for-you', 'direct-customers')}
                  className="hover:text-white transition-colors"
                >
                  Direct Customers
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-you', 'wholesalers')}
                  className="hover:text-white transition-colors"
                >
                  Wholesale & Distributors
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-you', 'industrial')}
                  className="hover:text-white transition-colors"
                >
                  Industrial Food Processing
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('for-you', 'smes')}
                  className="hover:text-white transition-colors"
                >
                  Private Labeling & SMEs
                </button>
              </li>
              <li>
                <button
                  onClick={() => onNavigate('online-shopping')}
                  className="hover:text-white text-[#C9A24D] font-medium transition-colors"
                >
                  Online Shopping Platforms
                </button>
              </li>
            </ul>
          </div>

          {/* Col 4: Corporate Office / Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-white font-serif-heading text-base font-semibold tracking-wide">
              Corporate Office & Dispatch
            </h4>
            
            <div className="space-y-2.5 text-xs text-white/70">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-[#C9A24D] shrink-0 mt-0.5" />
                <span>Shivansh Agro Processing & Corporate Logistics Park, India</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-[#C9A24D] shrink-0" />
                <span>contact@shivanshagro.com (Inquiries & Quotes)</span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-[#C9A24D] shrink-0" />
                <span>+91 (Bulk Desk / Trade Relations)</span>
              </div>
            </div>

            <div className="pt-2">
              <span className="text-[11px] uppercase tracking-wider text-white/50 block mb-1">
                Authorized Platforms
              </span>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-2 py-0.5 bg-white/10 rounded">Zepto</span>
                <span className="px-2 py-0.5 bg-white/10 rounded">Blinkit</span>
                <span className="px-2 py-0.5 bg-white/10 rounded">Amazon</span>
                <span className="px-2 py-0.5 bg-white/10 rounded">BigBasket</span>
                <span className="px-2 py-0.5 bg-white/10 rounded">Swiggy Instamart</span>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/60 gap-4">
          <div>
            © {new Date().getFullYear()} SHIVANSH AGRO. All Rights Reserved. FROM NATURE TO HOME.
          </div>
          <div className="flex items-center gap-4 text-xs">
            <span>Quality Guaranteed</span>
            <span>·</span>
            <span>Traceable Sourcing</span>
            <span>·</span>
            <span>Hygienic Packaging</span>
          </div>
        </div>

      </div>
    </footer>
  );
};
