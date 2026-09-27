import React, { useState } from 'react';
import { ArrowRight, Mail, Phone, MapPin, MessageSquare, CheckCircle2, ShieldCheck } from 'lucide-react';
import { ShivanshAgroLogo } from '../components/Logo';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    companyName: '',
    email: '',
    phone: '',
    customerType: 'Wholesaler / Distributor',
    productRequired: 'Almonds',
    estimatedQuantity: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div className="bg-[#F7F2E7]/40 min-h-screen py-10 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="text-[#C9A24D] text-xs sm:text-sm font-bold uppercase tracking-[0.25em] font-sans">
            Direct Trade Desk & Inquiries
          </span>
          <h1 className="font-serif-heading text-3xl sm:text-5xl text-[#0B3D2E] font-bold tracking-tight">
            Contact Shivansh Agro
          </h1>
          <p className="text-base sm:text-lg text-[#3E5246] leading-relaxed">
            Reach out for wholesale consignments, industrial supply contracts, private labeling partnerships, or household bulk orders.
          </p>
        </div>

        {/* Main Grid: Form + Contact Info */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* LEFT: Enquiry Form (7-8 cols) */}
          <div className="lg:col-span-7 bg-white rounded-3xl p-6 sm:p-10 border border-[#0B3D2E]/10 shadow-sm">
            {submitted ? (
              <div className="text-center py-12 space-y-4">
                <div className="w-16 h-16 rounded-full bg-emerald-100 text-[#0B3D2E] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-10 h-10 text-[#388E3C]" />
                </div>
                <h3 className="font-serif-heading text-2xl font-bold text-[#0B3D2E]">
                  Enquiry Submitted Successfully
                </h3>
                <p className="text-sm text-[#3E5246] max-w-md mx-auto leading-relaxed">
                  Thank you for submitting your enquiry. Our trade representative has received your specifications and will follow up with formal quotation documents, COA samples, and dispatch schedules.
                </p>
                <div className="pt-4">
                  <button
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({
                        name: '',
                        companyName: '',
                        email: '',
                        phone: '',
                        customerType: 'Wholesaler / Distributor',
                        productRequired: 'Almonds',
                        estimatedQuantity: '',
                        message: '',
                      });
                    }}
                    className="bg-[#0B3D2E] text-white text-xs sm:text-sm font-semibold px-6 py-2.5 rounded-full hover:bg-[#123F2A] transition-colors"
                  >
                    Send Another Enquiry
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="border-b border-neutral-100 pb-4">
                  <h3 className="font-serif-heading text-xl sm:text-2xl font-bold text-[#0B3D2E]">
                    B2B & Customer Enquiry Form
                  </h3>
                  <p className="text-xs text-[#6B4326] mt-0.5">
                    Please provide complete requirements for prompt dispatch calculations.
                  </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Vikram Singhania"
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
                      placeholder="e.g. Apex FMCG / Gourmet Foods"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="vikram@company.com"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                    />
                  </div>

                  {/* Phone */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                      Phone / Mobile *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+91 98200 12345"
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none"
                    />
                  </div>

                  {/* Customer Type */}
                  <div>
                    <label className="block text-xs font-semibold text-[#0B3D2E] uppercase tracking-wider mb-1">
                      Customer Type *
                    </label>
                    <select
                      value={formData.customerType}
                      onChange={(e) => setFormData({ ...formData, customerType: e.target.value })}
                      className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none bg-white"
                    >
                      <option value="Direct Customer">Direct Customer</option>
                      <option value="Wholesaler / Distributor">Wholesaler / Distributor</option>
                      <option value="Industrial Buyer">Industrial Buyer</option>
                      <option value="SME / Business Partner">SME / Business Partner</option>
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
                      <option value="Cashews">Cashews (W180, W240, W320)</option>
                      <option value="Pistachios">Pistachios (Roasted / Kernels)</option>
                      <option value="Walnuts">Walnuts (Halves / In-shell)</option>
                      <option value="Raisins">Raisins (Green / Golden)</option>
                      <option value="Mixed Dry Fruits">Mixed Dry Fruits Blends</option>
                      <option value="Custom Processing">Custom Grading & Processing</option>
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
                    placeholder="e.g. 100 kg initial test run, or 5 Metric Tons monthly"
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
                    placeholder="Provide additional details regarding target delivery destination, packaging preference (foil vacuum vs corrugated cartons), or private label printing."
                    className="w-full text-sm px-3.5 py-2.5 rounded-xl border border-neutral-300 focus:border-[#0B3D2E] focus:ring-1 focus:ring-[#0B3D2E] outline-none resize-none"
                  />
                </div>

                <div className="pt-3 flex flex-col sm:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-2 text-xs text-[#3E5246]">
                    <ShieldCheck className="w-4 h-4 text-[#C9A24D]" />
                    <span>Your data is strictly confidential. Direct trade quotation.</span>
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-[#0B3D2E] hover:bg-[#123F2A] text-white text-sm font-semibold px-8 py-3 rounded-full shadow-md transition-all group"
                  >
                    <span>{loading ? 'Submitting...' : 'Submit Enquiry'}</span>
                    <ArrowRight className="w-4 h-4 text-[#C9A24D] group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </form>
            )}
          </div>

          {/* RIGHT: Corporate Contact Details & Placeholders (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <div className="bg-white rounded-3xl p-6 sm:p-8 border border-[#0B3D2E]/10 shadow-xs space-y-5">
              <h3 className="font-serif-heading text-xl font-bold text-[#0B3D2E]">
                Corporate Contact Information
              </h3>

              <div className="space-y-4 text-sm text-[#3E5246]">
                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4 text-[#C9A24D]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B3D2E] block">Processing Facility & Logistics Hub</span>
                    <span className="text-xs text-[#6B4326]">Shivansh Agro Industrial Processing Park, Agro-Hub Zone, India</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Mail className="w-4 h-4 text-[#C9A24D]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B3D2E] block">Trade & Bulk Quotes</span>
                    <span className="text-xs text-[#6B4326]">contact@shivanshagro.com (Inquiries & Samples)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <Phone className="w-4 h-4 text-[#C9A24D]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B3D2E] block">Trade Relations Desk</span>
                    <span className="text-xs text-[#6B4326]">+91 (Trade Desk Support: Mon–Sat, 9AM–7PM IST)</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#F7F2E7] text-[#0B3D2E] flex items-center justify-center shrink-0 mt-0.5">
                    <MessageSquare className="w-4 h-4 text-[#2E7D32]" />
                  </div>
                  <div>
                    <span className="font-semibold text-[#0B3D2E] block">Instant WhatsApp Trade Desk</span>
                    <span className="text-xs text-[#6B4326]">Fast wholesale dispatch quotes & sample tracking</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Google Maps / Facility Location Placeholder Card */}
            <div className="bg-white rounded-3xl p-6 border border-[#0B3D2E]/10 shadow-xs space-y-3">
              <span className="text-xs font-bold uppercase tracking-wider text-[#C9A24D]">
                Processing Park Location
              </span>
              <h4 className="font-serif-heading text-lg font-bold text-[#0B3D2E]">
                State-of-the-Art Processing Facility
              </h4>

              {/* Styled Map Container */}
              <div className="w-full h-48 rounded-2xl bg-[#E8EFEA] border border-[#0B3D2E]/15 overflow-hidden relative flex items-center justify-center">
                <div className="absolute inset-0 opacity-40 bg-[radial-gradient(#0B3D2E_1px,transparent_1px)] [background-size:16px_16px]" />
                <div className="relative text-center p-4 bg-white/90 backdrop-blur-xs rounded-xl border border-[#0B3D2E]/20 shadow-sm max-w-xs">
                  <div className="w-8 h-8 rounded-full bg-[#0B3D2E] text-white flex items-center justify-center mx-auto mb-1">
                    <MapPin className="w-4 h-4 text-[#C9A24D]" />
                  </div>
                  <span className="font-bold text-xs text-[#0B3D2E] block">
                    Shivansh Agro Central Processing Park
                  </span>
                  <span className="text-[11px] text-[#6B4326] block">
                    Direct Highway Logistics Access · Cold Storage Available
                  </span>
                </div>
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
};
