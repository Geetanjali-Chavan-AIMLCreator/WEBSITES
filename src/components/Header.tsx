import React, { useState, useEffect, useRef } from 'react';
import { ShivanshAgroLogo } from './Logo';
import { ChevronDown, ArrowRight, Menu, X, PhoneCall } from 'lucide-react';

interface HeaderProps {
  currentTab: string;
  onNavigate: (tab: string, subParam?: string) => void;
  onOpenQuote: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  currentTab,
  onNavigate,
  onOpenQuote,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [forYouOpen, setForYouOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setForYouOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About Us' },
    { id: 'process', label: 'Our Process' },
    { id: 'products', label: 'Products' },
    {
      id: 'for-you',
      label: 'For You',
      isDropdown: true,
      items: [
        { id: 'direct-customers', label: 'Direct Customers', desc: 'Everyday nutrition & family packs' },
        { id: 'wholesalers', label: 'Wholesalers & Distributors', desc: 'Bulk supply & volume rates' },
        { id: 'industrial', label: 'Industrial Buyers', desc: 'Custom grading for food manufacturers' },
        { id: 'smes', label: 'SMEs & Business Partners', desc: 'Private labeling & co-branding' },
      ],
    },
    { id: 'online-shopping', label: 'Online Shopping' },
    { id: 'quality', label: 'Quality' },
    { id: 'sustainability', label: 'Sustainability' },
    { id: 'contact', label: 'Contact' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-[#0B3D2E]/10 py-2.5'
          : 'bg-[#F7F2E7]/95 backdrop-blur-sm border-b border-[#0B3D2E]/5 py-3.5'
      }`}
    >
      <div className="max-w-7xl 2xl:max-w-[1560px] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between gap-4">
          {/* LEFT GROUP: Shivansh Agro Logo + Navigation Links directly near logo */}
          <div className="flex items-center gap-6 xl:gap-8 2xl:gap-10 min-w-0">
            <button
              onClick={() => onNavigate('home')}
              className="flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#C9A24D] rounded-lg transition-transform hover:opacity-95 shrink-0 py-1"
              aria-label="Shivansh Agro Home"
            >
              <ShivanshAgroLogo size="md" />
            </button>

            {/* Navigation Links directly near the logo */}
            <nav className="hidden xl:flex items-center gap-5 2xl:gap-6 shrink-0">
              {navItems.map((item) => {
                if (item.isDropdown) {
                  const isForYouActive = currentTab.startsWith('for-you');
                  return (
                    <div key={item.id} className="relative" ref={dropdownRef}>
                      <button
                        onClick={() => setForYouOpen(!forYouOpen)}
                        className={`inline-flex items-center gap-1 text-sm font-medium transition-colors hover:text-[#0B3D2E] focus:outline-none ${
                          isForYouActive
                            ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E] pb-0.5'
                            : 'text-[#3E5246]'
                        }`}
                        aria-expanded={forYouOpen}
                      >
                        <span>{item.label}</span>
                        <ChevronDown
                          className={`w-3.5 h-3.5 transition-transform duration-200 text-[#C9A24D] ${
                            forYouOpen ? 'rotate-180' : ''
                          }`}
                        />
                      </button>

                      {/* Dropdown Menu */}
                      {forYouOpen && (
                        <div className="absolute left-0 mt-3 w-72 bg-white rounded-xl shadow-xl border border-[#0B3D2E]/10 py-2.5 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                          {item.items?.map((sub) => (
                            <button
                              key={sub.id}
                              onClick={() => {
                                onNavigate('for-you', sub.id);
                                setForYouOpen(false);
                              }}
                              className="w-full text-left px-4 py-2.5 hover:bg-[#F7F2E7] transition-colors group flex flex-col"
                            >
                              <span className="text-sm font-semibold text-[#0B3D2E] group-hover:text-[#123F2A]">
                                {sub.label}
                              </span>
                              <span className="text-xs text-neutral-500 font-normal">
                                {sub.desc}
                              </span>
                            </button>
                          ))}
                        </div>
                      )}
                    </div>
                  );
                }

                const isActive = currentTab === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => onNavigate(item.id)}
                    className={`text-sm font-medium transition-colors hover:text-[#0B3D2E] focus:outline-none whitespace-nowrap ${
                      isActive
                        ? 'text-[#0B3D2E] font-semibold border-b-2 border-[#0B3D2E] pb-0.5'
                        : 'text-[#3E5246]'
                    }`}
                  >
                    {item.label}
                  </button>
                );
              })}
            </nav>
          </div>

          {/* RIGHT: CTA Button & Mobile Trigger */}
          <div className="flex items-center gap-3 shrink-0">
            <button
              onClick={onOpenQuote}
              className="inline-flex items-center gap-2 bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-xs sm:text-sm font-medium px-4 sm:px-5 py-2.5 rounded-full shadow-sm hover:shadow transition-all duration-200 hover:gap-3 group focus:outline-none focus:ring-2 focus:ring-[#C9A24D] focus:ring-offset-2"
            >
              <span>Get a Quote</span>
              <ArrowRight className="w-4 h-4 text-[#C9A24D] group-hover:translate-x-0.5 transition-transform" />
            </button>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="xl:hidden p-2 rounded-lg text-[#0B3D2E] hover:bg-[#0B3D2E]/10 transition-colors focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-b border-[#0B3D2E]/10 shadow-lg px-6 py-6 animate-in slide-in-from-top-4 duration-200">
          <div className="flex flex-col space-y-3">
            {navItems.map((item) => {
              if (item.isDropdown) {
                return (
                  <div key={item.id} className="pt-2 border-t border-neutral-100">
                    <span className="text-xs font-semibold text-[#C9A24D] uppercase tracking-wider block mb-1">
                      Solutions For You
                    </span>
                    <div className="pl-2 space-y-2">
                      {item.items?.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => {
                            onNavigate('for-you', sub.id);
                            setMobileMenuOpen(false);
                          }}
                          className="w-full text-left py-1 text-sm font-medium text-[#1F2923] hover:text-[#0B3D2E]"
                        >
                          → {sub.label}
                        </button>
                      ))}
                    </div>
                  </div>
                );
              }

              const isActive = currentTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => {
                    onNavigate(item.id);
                    setMobileMenuOpen(false);
                  }}
                  className={`text-left py-1.5 text-base font-medium transition-colors ${
                    isActive ? 'text-[#0B3D2E] font-bold' : 'text-[#3E5246]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}

            <div className="pt-4 border-t border-neutral-100 flex flex-col gap-2">
              <button
                onClick={() => {
                  onOpenQuote();
                  setMobileMenuOpen(false);
                }}
                className="w-full justify-center inline-flex items-center gap-2 bg-[#0B3D2E] text-white py-3 rounded-xl font-medium text-sm shadow"
              >
                <span>Get a Wholesale or B2B Quote</span>
                <ArrowRight className="w-4 h-4 text-[#C9A24D]" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
