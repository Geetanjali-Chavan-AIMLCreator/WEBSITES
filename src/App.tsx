/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { SolutionsSection } from './components/SolutionsSection';
import { ProductsAndPlatformsSection } from './components/ProductsAndPlatformsSection';
import { ValuesBand } from './components/ValuesBand';
import { ProcessSection } from './components/ProcessSection';
import { Footer } from './components/Footer';
import { QuoteModal } from './components/QuoteModal';
import { VideoModal } from './components/VideoModal';

// Pages
import { AboutPage } from './pages/AboutPage';
import { ProcessPage } from './pages/ProcessPage';
import { ProductsPage } from './pages/ProductsPage';
import { ForYouPage } from './pages/ForYouPage';
import { OnlineShoppingPage } from './pages/OnlineShoppingPage';
import { QualityPage } from './pages/QualityPage';
import { SustainabilityPage } from './pages/SustainabilityPage';
import { ContactPage } from './pages/ContactPage';

export default function App() {
  const [currentTab, setCurrentTab] = useState<string>('home');
  const [forYouSubTab, setForYouSubTab] = useState<string>('direct-customers');
  
  // Modals state
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [selectedProductForQuote, setSelectedProductForQuote] = useState<string>('Almonds');
  const [selectedCustomerTypeForQuote, setSelectedCustomerTypeForQuote] = useState<string>('Wholesaler / Distributor');
  
  const [videoModalOpen, setVideoModalOpen] = useState<boolean>(false);

  // Scroll to top on navigation
  const handleNavigate = (tab: string, subParam?: string) => {
    setCurrentTab(tab);
    if (tab === 'for-you' && subParam) {
      setForYouSubTab(subParam);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenQuoteWithType = (customerType: string, defaultProduct = 'Almonds') => {
    setSelectedCustomerTypeForQuote(customerType);
    setSelectedProductForQuote(defaultProduct);
    setQuoteModalOpen(true);
  };

  const handleOpenQuoteWithProduct = (productName: string) => {
    setSelectedProductForQuote(productName);
    setSelectedCustomerTypeForQuote('Wholesaler / Distributor');
    setQuoteModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F7F2E7] text-[#1E2822] selection:bg-[#C9A24D]/30 selection:text-[#0B3D2E]">
      {/* Sticky Header with Logo & Nav */}
      <Header
        currentTab={currentTab}
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuoteWithType('Wholesaler / Distributor')}
      />

      {/* Main Page Content */}
      <main className="flex-1">
        {currentTab === 'home' && (
          <>
            {/* 1. Hero Section */}
            <Hero
              onExploreProducts={() => handleNavigate('products')}
              onWatchProcess={() => setVideoModalOpen(true)}
            />

            {/* 2. Solutions For Every Need Section (4 Cards in 1 Row) */}
            <SolutionsSection
              onDirectCustomer={() => handleNavigate('for-you', 'direct-customers')}
              onWholesale={() => handleOpenQuoteWithType('Wholesaler / Distributor')}
              onIndustrial={() => handleOpenQuoteWithType('Industrial Buyer')}
              onSmePartner={() => handleOpenQuoteWithType('SME / Business Partner')}
            />

            {/* 3. Our Premium Products Grid + 4. Available On Section */}
            <ProductsAndPlatformsSection
              onViewAllProducts={() => handleNavigate('products')}
              onSelectProduct={(name) => handleOpenQuoteWithProduct(name)}
              onShopOnline={() => handleNavigate('online-shopping')}
            />

            {/* 5. Quality / Brand Values Band */}
            <ValuesBand />

            {/* 6. Farm to Home Process Timeline Section */}
            <ProcessSection
              onLearnMoreProcess={() => handleNavigate('process')}
            />
          </>
        )}

        {currentTab === 'about' && (
          <AboutPage
            onOpenQuote={() => handleOpenQuoteWithType('SME / Business Partner')}
            onExploreProcess={() => handleNavigate('process')}
          />
        )}

        {currentTab === 'process' && (
          <ProcessPage
            onOpenQuote={() => handleOpenQuoteWithType('Industrial Buyer', 'Custom Processing')}
          />
        )}

        {currentTab === 'products' && (
          <ProductsPage
            onOpenQuoteWithProduct={(prod) => handleOpenQuoteWithProduct(prod)}
            onShopOnline={() => handleNavigate('online-shopping')}
          />
        )}

        {currentTab.startsWith('for-you') && (
          <ForYouPage
            initialSubTab={forYouSubTab}
            onOpenQuoteWithType={(type) => handleOpenQuoteWithType(type)}
            onShopOnline={() => handleNavigate('online-shopping')}
          />
        )}

        {currentTab === 'online-shopping' && (
          <OnlineShoppingPage
            onOpenQuote={() => handleOpenQuoteWithType('Wholesaler / Distributor')}
          />
        )}

        {currentTab === 'quality' && (
          <QualityPage
            onOpenQuote={() => handleOpenQuoteWithType('Industrial Buyer')}
          />
        )}

        {currentTab === 'sustainability' && (
          <SustainabilityPage
            onOpenQuote={() => handleOpenQuoteWithType('SME / Business Partner')}
          />
        )}

        {currentTab === 'contact' && (
          <ContactPage />
        )}
      </main>

      {/* Global Corporate Footer */}
      <Footer
        onNavigate={handleNavigate}
        onOpenQuote={() => handleOpenQuoteWithType('Wholesaler / Distributor')}
      />

      {/* Interactive Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        defaultCustomerType={selectedCustomerTypeForQuote}
        defaultProduct={selectedProductForQuote}
      />

      {/* Interactive Process Tour Video Modal */}
      <VideoModal
        isOpen={videoModalOpen}
        onClose={() => setVideoModalOpen(false)}
      />
    </div>
  );
}
