import { useState } from 'react';

export default function EnquiryForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    location: '',
    area: '500-1000',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your franchise enquiry! Our team will contact you soon.');
    setFormData({ name: '', email: '', phone: '', location: '', area: '500-1000', message: '' });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="py-28 px-6 bg-slate-50 relative overflow-hidden border-t border-slate-200/60">
      
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 -mr-48 -mt-48 w-[500px] h-[500px] rounded-full bg-blue-100/60 mix-blend-multiply blur-3xl pointer-events-none"></div>
      <div className="absolute bottom-0 left-0 -ml-48 -mb-48 w-[500px] h-[500px] rounded-full bg-indigo-100/60 mix-blend-multiply blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          
          {/* Text & Conditions Left */}
          <div className="max-w-xl">
            <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase mb-4 border border-blue-200/60 shadow-sm">
              Franchise Opportunity
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight leading-tight">
              Looking for a <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Franchise?</span>
            </h2>
            <p className="text-lg text-slate-600 mb-8 font-light leading-relaxed">
              Join Maharashtra's fast-growing multi-brand electronics & mobile retail network. Partner with Sai Sales and bring premium brands, centralized procurement advantages, and high retail margins to your city.
            </p>

            {/* Franchise Eligibility / Mild Conditions Card with Shadow */}
            <div className="bg-white border border-slate-200/90 rounded-3xl p-6 sm:p-8 mb-8 shadow-xl shadow-slate-900/5">
              <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider mb-4 flex items-center gap-2">
                <span className="text-blue-600 text-base">📋</span> Franchise Eligibility & Requirements
              </h3>
              <ul className="space-y-3.5 text-xs sm:text-sm text-slate-600">
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong className="text-slate-800">Commercial Space:</strong> Minimum 400 – 1,000+ sq. ft. prime ground-floor retail shop in high-footfall market areas or main roads.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong className="text-slate-800">Investment Capacity:</strong> Readiness for showroom fit-outs, display setups, and working capital inventory.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong className="text-slate-800">Operational Integrity:</strong> Commitment to uphold Sai Sales customer-first service, transparent billing, and brand guidelines.</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-blue-600 font-bold">✓</span>
                  <span><strong className="text-slate-800">Preferred Locations:</strong> Towns and cities across Sangli, Kolhapur, Satara, Solapur, and neighboring districts.</span>
                </li>
              </ul>
            </div>
            
            <div className="space-y-5">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-md shadow-slate-900/5">📞</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Direct Contact (Head Office)</h4>
                  <a href="tel:8370818181" className="text-sm text-blue-600 font-bold hover:underline">8370818181</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-md shadow-slate-900/5">🏢</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Head Office</h4>
                  <p className="text-sm text-slate-500">Station Chowk, Sangli 416416</p>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-2xl bg-white border border-slate-200 flex items-center justify-center text-xl shadow-md shadow-slate-900/5">📧</div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Email Us</h4>
                  <p className="text-sm text-slate-500">info@saisales.com</p>
                </div>
              </div>
            </div>
          </div>

          {/* Form Right with Elevation & Floating Shadow */}
          <div className="bg-white rounded-3xl p-8 sm:p-10 shadow-2xl shadow-slate-900/10 border border-slate-200/80">
            <div className="mb-6">
              <h3 className="text-2xl font-black text-slate-900 mb-1">Apply for Franchise</h3>
              <p className="text-xs sm:text-sm text-slate-500">Submit your proposal details and our team will get in touch.</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="name" className="text-xs font-bold uppercase tracking-wider text-slate-700">Full Name *</label>
                  <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all text-sm shadow-sm"
                    placeholder="Enter your name"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="phone" className="text-xs font-bold uppercase tracking-wider text-slate-700">Phone Number *</label>
                  <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all text-sm shadow-sm"
                    placeholder="Enter mobile number"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div className="space-y-1.5">
                  <label htmlFor="email" className="text-xs font-bold uppercase tracking-wider text-slate-700">Email Address</label>
                  <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all text-sm shadow-sm"
                    placeholder="Enter email id"
                  />
                </div>
                
                <div className="space-y-1.5">
                  <label htmlFor="location" className="text-xs font-bold uppercase tracking-wider text-slate-700">Proposed City / Town *</label>
                  <input 
                    type="text" 
                    id="location" 
                    name="location" 
                    required
                    value={formData.location}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all text-sm shadow-sm"
                    placeholder="e.g. Miraj, Vita, Palus..."
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="area" className="text-xs font-bold uppercase tracking-wider text-slate-700">Approx. Shop Area (Carpet)</label>
                <div className="relative">
                  <select 
                    id="area" 
                    name="area" 
                    value={formData.area}
                    onChange={handleChange}
                    className="w-full px-4 py-3.5 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all text-sm appearance-none shadow-sm"
                  >
                    <option value="under-500">Under 500 sq. ft.</option>
                    <option value="500-1000">500 – 1,000 sq. ft.</option>
                    <option value="1000-2000">1,000 – 2,000 sq. ft.</option>
                    <option value="above-2000">Above 2,000 sq. ft.</option>
                    <option value="searching">Currently Searching for Space</option>
                  </select>
                  <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-slate-500">
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="message" className="text-xs font-bold uppercase tracking-wider text-slate-700">Additional Information</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="3"
                  value={formData.message}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-slate-50/50 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/15 focus:border-blue-500 transition-all text-sm resize-none shadow-sm"
                  placeholder="Share details about property ownership (owned/rented), previous retail experience, or investment plan..."
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="w-full bg-slate-900 text-white font-bold py-4 rounded-xl hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-500/30 transition-all duration-300 shadow-lg shadow-slate-900/20 hover:shadow-2xl hover:shadow-blue-500/30 hover:-translate-y-0.5 text-sm uppercase tracking-wider"
              >
                Submit Franchise Enquiry
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
