import React, { useState } from 'react';
import { X, CheckCircle2, ArrowRight, ShieldCheck } from 'lucide-react';
import { ShivanshAgroLogo } from './Logo';

interface QuoteModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultCustomerType?: string;
  defaultProduct?: string;
}

export const QuoteModal: React.FC<QuoteModalProps> = ({
  isOpen,
  onClose,
  defaultCustomerType = 'Wholesaler / Distributor',
  defaultProduct = 'Almonds',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    customerType: defaultCustomerType,
    productRequired: defaultProduct,
    estimatedQuantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    // Simulate real submission
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  const handleReset = () => {
    setSubmitted(false);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs overflow-y-auto animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white rounded-3xl shadow-2xl border border-[#0B3D2E]/20 overflow-hidden my-8">
        
        {/* Modal Header */}
        <div className="bg-[#0B3D2E] text-white p-6 sm:p-7 relative flex items-center justify-between border-b border-[#C9A24D]/30">
          <div className="flex items-center gap-3">
            <ShivanshAgroLogo variant="light" size="sm" />
          </div>

          <button
            onClick={onClose}
            className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 text-white flex items-center justify-center transition-colors focus:outline-none"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="text-center py-10 space-y-4">
              <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0B3D2E] flex items-center justify-center mx-auto shadow-sm">
                <CheckCircle2 className="w-10 h-10 text-[#388E3C]" />
              </div>
              <h3 className="font-serif-heading text-2xl font-bold text-[#0B3D2E]">
                Enquiry Received Successfully
              </h3>
              <p className="text-sm text-[#3E5246] max-w-md mx-auto leading-relaxed">
                Thank you for your interest in Shivansh Agro. Our corporate trade desk has received your requirements and will reach out with customized specifications, grade samples, and volume pricing.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-[#0B3D2E] text-white text-sm font-medium px-6 py-2.5 rounded-full hover:bg-[#123F2A] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#0B3D2E]">
                  Request Quotation & Trade Terms
                </h3>
                <p className="text-xs text-[#6B4326] mt-1">
                  From single-carton trial batches to container loads and industrial continuous feed agreements.
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                {/* Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Ramesh Sharma"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                  />
                </div>

                {/* Company Name */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                    Company Name
                  </label>
                  <input
                    type="text"
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="e.g. Apex Confectioneries / Retail Ltd"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                    Work Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+91 98765 43210"
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                  />
                </div>

                {/* Customer Type Dropdown */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                    Customer Type *
                  </label>
                  <select
                    value={formData.customerType}
                    onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none bg-white"
                  >
                    <option value="Direct Customer">Direct Customer (Family / Retail)</option>
                    <option value="Wholesaler / Distributor">Wholesaler / Distributor</option>
                    <option value="Industrial Buyer">Industrial Buyer / Food Manufacturer</option>
                    <option value="SME / Business Partner">SME / Private Label Partner</option>
                  </select>
                </div>

                {/* Product Required */}
                <div>
                  <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                    Product Required *
                  </label>
                  <select
                    value={formData.productRequired}
                    onChange={(e) => setFormData({ ...formData, productRequired: e.target.value })}
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none bg-white"
                  >
                    <option value="Almonds">Almonds (Whole / Sliced)</option>
                    <option value="Cashews">Cashews (W180, W240, W320, Pieces)</option>
                    <option value="Pistachios">Pistachios (Roasted / Raw Kernels)</option>
                    <option value="Walnuts">Walnuts (Halves / Quarters)</option>
                    <option value="Raisins">Raisins (Green / Golden / Black)</option>
                    <option value="Mixed Dry Fruits">Mixed Dry Fruits Assortment</option>
                    <option value="Custom Processing">Custom Sorting, Grading & Slicing</option>
                    <option value="Multi-Product Container">Multi-Product Bulk Container</option>
                  </select>
                </div>
              </div>

              {/* Estimated Quantity */}
              <div>
                <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                  Estimated Quantity *
                </label>
                <input
                  type="text"
                  required
                  value={formData.estimatedQuantity}
                  onChange={(e) => setFormData({ ...formData, estimatedQuantity: e.target.value })}
                  placeholder="e.g. 50 kg sample, 500 kg weekly, or 2 Metric Tons monthly"
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                />
              </div>

              {/* Requirement / Message */}
              <div>
                <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                  Requirement / Message
                </label>
                <textarea
                  rows={3}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Specify packaging needs (vacuum foil, nitrogen-flushed pouch, 10kg cartons, private brand printing) or custom size grades."
                  className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none resize-none"
                />
              </div>

              {/* Security & Action */}
              <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="flex items-center gap-1.5 text-xs text-[#3E5246]">
                  <ShieldCheck className="w-4 h-4 text-[#C9A24D]" />
                  <span>Confidential trade inquiry. Direct producer pricing.</span>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-sm font-semibold px-7 py-3 rounded-full shadow-md transition-all duration-200 group"
                >
                  <span>{loading ? 'Submitting...' : 'Submit Enquiry'}</span>
                  <ArrowRight className="w-4 h-4 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          )}
        </div>

      </div>
    </div>
  );
};
