import React from 'react';

export default function AboutUs() {
  const journeySteps = [
    { year: '2009', title: 'Tasgaon Store', desc: 'Started operations as a mobile retail shop in Tasgaon.' },
    { year: '2016', title: 'Appliances Range', desc: 'Expanded into home appliances, marking multi-category diversification.' },
    { year: '2020', title: 'Jath Branch', desc: 'Launched showroom in Jath, strengthening regional district presence.' },
    { year: '2023', title: 'Ishwarpur Store', desc: 'Opened showroom in Islampur City (Ishwarpur), continuing rapid growth.' },
    { year: '2025', title: 'Daikin Hub', desc: 'Official Authorized Distributor for Daikin Air Conditioning in Sangli District.' }
  ];

  return (
    <section id="about" className="py-24 px-6 bg-slate-50 border-t border-slate-200/60 relative overflow-hidden">
      
      {/* Background Decorative Blob */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-100/60 rounded-full blur-3xl -translate-y-1/2 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Intro Section */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase mb-4 border border-blue-200/60 shadow-sm">
            Company Profile & History
          </span>
          <h2 className="text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            About <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600">Sai Sales</span>
          </h2>
          <p className="text-base md:text-lg text-slate-600 leading-relaxed font-light">
            Sai Sales is a fast-growing Mobile and Electronics retail & distribution company. 
            Focused on quality products, reliable after-sales service, and customer delight. Built on trust, operational excellence, and integrity.
          </p>
        </div>

        {/* Journey Timeline Grid */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-10 text-slate-900 flex items-center justify-center gap-2">
            <span>📈</span> Our Company Journey
          </h3>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6">
            {journeySteps.map((step, index) => (
              <div key={index} className="bg-white p-5 rounded-3xl border border-slate-200/80 shadow-md shadow-slate-900/5 hover:shadow-xl hover:shadow-blue-500/10 transition-all flex flex-col items-center text-center group">
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-600 text-white flex items-center justify-center font-black text-lg mb-3 shadow-md shadow-blue-500/25 group-hover:scale-110 transition-transform">
                  {step.year}
                </div>
                <h4 className="text-sm font-bold text-slate-900 mb-1">{step.title}</h4>
                <p className="text-xs text-slate-500 leading-relaxed font-medium">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Two Column Layout for Operations & Vision */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">
          
          {/* Operations & Infrastructure */}
          <div className="bg-white p-8 md:p-10 rounded-3xl shadow-xl shadow-slate-900/5 border border-slate-200/80 hover:shadow-2xl transition-all duration-500 flex flex-col justify-between">
            <div>
              <h3 className="text-2xl font-bold mb-8 text-slate-900 flex items-center gap-3">
                <span className="w-10 h-10 rounded-2xl bg-blue-50 text-blue-600 border border-blue-200/60 flex items-center justify-center shadow-sm">⚙️</span>
                Operations & Infrastructure
              </h3>
              <ul className="space-y-5">
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 shrink-0 shadow-sm shadow-blue-500"></div>
                  <div>
                    <strong className="text-slate-900 block text-sm sm:text-base font-bold mb-1">Strategic Relocation</strong>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">Shifted back-office to Sangli Station Chowk to establish a central command center for purchasing, logistics, and management.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 shrink-0 shadow-sm shadow-blue-500"></div>
                  <div>
                    <strong className="text-slate-900 block text-sm sm:text-base font-bold mb-1">Centralized Procurement</strong>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">Unified inventory management and purchasing across Sangli, Tasgaon, Jath, and Ishwarpur branches for best bulk pricing.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 shrink-0 shadow-sm shadow-blue-500"></div>
                  <div>
                    <strong className="text-slate-900 block text-sm sm:text-base font-bold mb-1">Enhanced Service Quality</strong>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">Faster decision-making capabilities leading to significantly improved customer service and warranty response times.</span>
                  </div>
                </li>
                <li className="flex items-start gap-4">
                  <div className="w-2.5 h-2.5 rounded-full bg-blue-600 mt-2 shrink-0 shadow-sm shadow-blue-500"></div>
                  <div>
                    <strong className="text-slate-900 block text-sm sm:text-base font-bold mb-1">Logistics Optimization</strong>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed">Better after-sales coordination and express delivery planning for all our Sangli district locations.</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Vision & Future Plans */}
          <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-blue-950 p-8 md:p-10 rounded-3xl shadow-2xl shadow-blue-950/40 text-white flex flex-col justify-between border border-slate-800">
            <div>
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-3 text-white">
                <span className="text-2xl">🚀</span> Vision & Future Plans
              </h3>
              
              <ul className="space-y-3.5 text-xs sm:text-sm text-blue-100 mb-8 list-disc pl-5 leading-relaxed">
                <li>Expansion of product portfolio and wider market reach.</li>
                <li>Focus on operational excellence and supreme customer satisfaction.</li>
                <li><strong className="text-white">To Become No. One Multibrand Electronics and Mobile Chain.</strong></li>
                <li>Process initiated to convert the company into a Private Limited Company.</li>
                <li>New authorized OEM brands adding in distribution in the upcoming year.</li>
                <li>Opening Minimum 5 Outlets / Franchise Stores Till 2027 End.</li>
                <li>Achieving ₹30 Crore Turnover Till 2027 End.</li>
              </ul>

              <h4 className="text-xs font-black uppercase tracking-widest text-blue-400 mb-3.5">
                Our Non-Negotiables
              </h4>
              <div className="flex flex-wrap gap-2">
                {[
                  'Protect the Brand',
                  'Full Transparency',
                  'Financial Discipline',
                  'Inventory Integrity',
                  'Customer First',
                  'Follow Brand Standards',
                  'No Asset Misuse',
                  'Professional Partnership',
                  'One Brand, One Standard'
                ].map((rule, i) => (
                  <span key={i} className="px-3 py-1.5 bg-white/10 hover:bg-white/15 border border-white/15 rounded-xl text-xs font-semibold backdrop-blur-md transition-colors text-slate-100 shadow-sm">
                    {rule}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
