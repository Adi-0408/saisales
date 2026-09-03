import { useState } from 'react';

const googleReviews = [
  // Sangli
  {
    id: 1,
    name: 'Salim Lambu',
    badge: 'Verified Customer • Sangli',
    location: 'Sangli (Head Office)',
    city: 'Sangli',
    rating: 5,
    date: '3 weeks ago',
    avatar: 'SL',
    avatarBg: 'bg-blue-600',
    product: 'Luminous Solar System',
    review: 'I contacted success tradelines sangli one month back on reference of my friend for luminous 3 KW solar system. Today after one month I have got a wonderful and unbelievable response from luminous service, subsidy and generation. I have also received a cheerful, warm greetings and support from all employees. I wish a great and cheerful growth for success tradelines.',
    reviewLink: 'https://maps.app.goo.gl/7WYppe5qZp67asyFA'
  },
  {
    id: 2,
    name: 'Nehal Sarda',
    badge: 'Verified Buyer • Sangli',
    location: 'Sangli (Head Office)',
    city: 'Sangli',
    rating: 5,
    date: '2 years ago',
    avatar: 'NS',
    avatarBg: 'bg-indigo-600',
    product: 'Home Appliances',
    review: 'Best shop for home appliances. Reasonable prices.',
    reviewLink: 'https://maps.app.goo.gl/CpHVc5vywgYVHdYS9'
  },
  {
    id: 3,
    name: 'Ajay Kulkarni',
    badge: 'Verified Customer • Sangli',
    location: 'Sangli (Head Office)',
    city: 'Sangli',
    rating: 5,
    date: '11 months ago',
    avatar: 'AK',
    avatarBg: 'bg-cyan-600',
    product: 'Solar & Electronics',
    review: 'Good quality best product, panels are performing great, and team was professional, courteous and efficient best performing in all overs.',
    reviewLink: 'https://maps.app.goo.gl/J8CWEm897VqfyYop7'
  },

  // Tasgaon
  {
    id: 4,
    name: 'Aniket Mane',
    badge: 'Verified Buyer • Tasgaon',
    location: 'Tasgaon Showroom',
    city: 'Tasgaon',
    rating: 5,
    date: '6 months ago',
    avatar: 'AM',
    avatarBg: 'bg-emerald-600',
    product: 'Refrigerator & Washing Machine',
    review: 'Highly Recommended Electronics Shop in Tasgaon! Great service and affordable prices. I bought a new Fridge or Washing Machine and the staff helped with everything, even installation. Best electronics store in Tasgaon city!',
    reviewLink: 'https://maps.app.goo.gl/A2tQ4MWRxNSNcnEG6'
  },
  {
    id: 5,
    name: 'Mangesh Gahal',
    badge: 'Verified Buyer • Tasgaon',
    location: 'Tasgaon Showroom',
    city: 'Tasgaon',
    rating: 5,
    date: '6 months ago',
    avatar: 'MG',
    avatarBg: 'bg-teal-600',
    product: 'Smart LED TV',
    review: 'I purchase Led from Sai Sales and Sales Electronics shop. Staff is very supportive, they gave me all information and also warranty and installation in time. Customer service is best.',
    reviewLink: 'https://maps.app.goo.gl/3zwkxjwKaZ49MwCUA'
  },
  {
    id: 6,
    name: 'Vijay Patil',
    badge: 'Verified Buyer • Tasgaon',
    location: 'Tasgaon Showroom',
    city: 'Tasgaon',
    rating: 5,
    date: '8 months ago',
    avatar: 'VP',
    avatarBg: 'bg-green-600',
    product: 'Refrigerator on EMI',
    review: 'Fast delivery and EMI options available. They offered me EMI for my fridge purchase, good selection of top electronic brands. This is the most reliable electronics store in Tasgaon city.',
    reviewLink: 'https://maps.app.goo.gl/AGqUcCyP2o5QNiMn7'
  },

  // Ishwarpur
  {
    id: 7,
    name: 'Yogesh Dhotre',
    badge: 'Verified Customer • Ishwarpur',
    location: 'Ishwarpur Showroom',
    city: 'Ishwarpur',
    rating: 5,
    date: '1 month ago',
    avatar: 'YD',
    avatarBg: 'bg-amber-600',
    product: 'Electronics & Gadgets',
    review: 'Great experience at Sai Sales Islampur! Excellent customer service and a very smooth process. Special thanks to Abhishek sir for his outstanding support and guidance throughout.',
    reviewLink: 'https://maps.app.goo.gl/ej2Z2UELh2YXzp3g9'
  },
  {
    id: 8,
    name: 'Dipak Adake',
    badge: 'Verified Buyer • Ishwarpur',
    location: 'Ishwarpur Showroom',
    city: 'Ishwarpur',
    rating: 5,
    date: '8 months ago',
    avatar: 'DA',
    avatarBg: 'bg-orange-600',
    product: 'Smartphones & Mobiles',
    review: 'Best value for money phone with best service in Sai Sales and special thanks for Abhishek Chatane sir for giving best service and support.',
    reviewLink: 'https://maps.app.goo.gl/oCh2fnfXibNCgmRp9'
  },
  {
    id: 9,
    name: 'Sagar Jagtap',
    badge: 'Verified Buyer • Ishwarpur',
    location: 'Ishwarpur Showroom',
    city: 'Ishwarpur',
    rating: 5,
    date: '8 months ago',
    avatar: 'SJ',
    avatarBg: 'bg-rose-600',
    product: 'Mobile Phone Offers',
    review: 'Good customer service at Sai Sales. Abhishek Chatane sir gave me the best offer rate for mobile.',
    reviewLink: 'https://maps.app.goo.gl/K6bhLahEHVDxZPHH9'
  },

  // Jath
  {
    id: 10,
    name: 'Balasaheb Mane',
    badge: 'Verified Customer • Jath',
    location: 'Jath Showroom',
    city: 'Jath',
    rating: 5,
    date: '6 months ago',
    avatar: 'BM',
    avatarBg: 'bg-purple-600',
    product: 'Electronics & Appliances',
    review: 'Good service and good product quality, customer is very happy....',
    reviewLink: 'https://maps.app.goo.gl/RmVCcp4BP2hNLgR1A'
  },
  {
    id: 11,
    name: 'Malhari Jadhav',
    badge: 'Verified Buyer • Jath',
    location: 'Jath Showroom',
    city: 'Jath',
    rating: 5,
    date: '1 year ago',
    avatar: 'MJ',
    avatarBg: 'bg-violet-600',
    product: 'Mixer Grinder & Kitchen Appliances',
    review: 'Best Customer Experience in Electronics Shopping. Staff is well-trained and honest. I bought a mixer grinder and received a good discount. Definitely the go-to electronics showroom in Jath.',
    reviewLink: 'https://maps.app.goo.gl/fpnjevJadzFFEhui7'
  },
  {
    id: 12,
    name: 'Ajit Ghatage',
    badge: 'Verified Buyer • Jath',
    location: 'Jath Showroom',
    city: 'Jath',
    rating: 5,
    date: '5 months ago',
    avatar: 'AG',
    avatarBg: 'bg-fuchsia-600',
    product: 'Bluetooth Speaker & Gadgets',
    review: 'Top Quality Products at Reasonable Rates. I got a Bluetooth speaker and it works flawlessly. They have the latest gadgets and new arrivals too. Best place to buy electronics in Jath.',
    reviewLink: 'https://maps.app.goo.gl/RAXodDQcX5YZQ1P26'
  }
];

const guarantees = [
  {
    icon: '🛡️',
    title: '100% Genuine Sealed Stock',
    desc: 'Direct brand supply with original serial numbers, GST billing, and authorized manufacturer warranties.'
  },
  {
    icon: '❄️',
    title: 'Official Daikin AC Hub',
    desc: 'Certified district distribution with factory-trained technicians for precision installation & service.'
  },
  {
    icon: '💳',
    title: '0% Downpayment Easy EMI',
    desc: 'Instant 5-minute approval with Bajaj Finserv, HDFC Bank, TVS Credit, and IDFC FIRST Bank.'
  }
];

const brandPartners = [
  'Daikin', 'Apple', 'Samsung', 'Sony', 'LG', 'OnePlus', 'Bajaj', 'Havells', 'Hawkins', 'Prestige'
];

const financePartners = [
  'Bajaj Finserv', 'HDFC Bank', 'TVS Credit', 'IDFC FIRST Bank', 'Kotak Finance'
];

export default function TrustProof() {
  const [selectedBranch, setSelectedBranch] = useState('all');

  const branches = [
    { id: 'all', label: 'All Reviews (4.8★)' },
    { id: 'Sangli', label: 'Sangli (HQ)' },
    { id: 'Tasgaon', label: 'Tasgaon' },
    { id: 'Ishwarpur', label: 'Ishwarpur' },
    { id: 'Jath', label: 'Jath' }
  ];

  const filteredReviews = googleReviews.filter(r => {
    if (selectedBranch === 'all') return true;
    return r.city.toLowerCase() === selectedBranch.toLowerCase();
  });

  return (
    <section id="reviews" className="py-24 px-4 sm:px-6 bg-slate-100/70 border-t border-slate-200/80 relative overflow-hidden">
      
      {/* Ambient background decoration */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 w-full max-w-7xl h-96 bg-blue-200/20 rounded-full filter blur-3xl pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14">
          <span className="inline-flex items-center gap-1.5 py-1.5 px-4 rounded-full bg-white text-blue-700 text-xs font-bold tracking-widest uppercase mb-4 border border-slate-200/80 shadow-xs">
            <span>⭐</span> Google Customer Reviews
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Loved by 25,000+ Customers
          </h2>
          <p className="text-sm md:text-base text-slate-600 font-normal leading-relaxed">
            Real customer feedback from our Google Business Profiles across Sangli, Tasgaon, Islampur, and Jath.
          </p>
        </div>

        {/* Google Reviews Overall Rating Banner */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-xl shadow-slate-900/5 mb-12 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col sm:flex-row items-center gap-5 text-center sm:text-left">
            
            {/* Google G Logo & Score */}
            <div className="flex items-center gap-3.5 bg-slate-50 px-5 py-3 rounded-2xl border border-slate-200/80 shadow-inner">
              <svg className="w-8 h-8 shrink-0" viewBox="0 0 24 24">
                <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
              </svg>
              <div>
                <div className="flex items-center gap-1">
                  <span className="text-2xl font-black text-slate-900 leading-none">4.8</span>
                  <div className="flex text-amber-400 text-sm">★★★★★</div>
                </div>
                <span className="text-[11px] font-bold text-slate-500 block mt-0.5">Google Rating</span>
              </div>
            </div>

            <div>
              <h3 className="text-base sm:text-lg font-bold text-slate-900">
                Highest Rated Multi-Brand Store in Sangli District
              </h3>
              <p className="text-xs text-slate-500 mt-0.5">
                Verified customer ratings across our 4 Google Maps business listings.
              </p>
            </div>
          </div>

          {/* Quick Filter by Branch */}
          <div className="flex flex-wrap justify-center gap-1.5 bg-slate-100 p-1.5 rounded-2xl border border-slate-200">
            {branches.map(b => (
              <button
                key={b.id}
                type="button"
                onClick={() => setSelectedBranch(b.id)}
                className={`py-1.5 px-3 rounded-xl text-xs font-bold transition-all duration-200 touch-manipulation ${
                  selectedBranch === b.id
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-white/60'
                }`}
              >
                {b.label}
              </button>
            ))}
          </div>
        </div>

        {/* Customer Reviews Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {filteredReviews.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200/90 shadow-lg shadow-slate-900/5 hover:shadow-xl hover:shadow-blue-900/10 transition-all duration-300 flex flex-col justify-between group hover:-translate-y-1"
            >
              <div>
                {/* Reviewer Header */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className={`w-10 h-10 rounded-2xl ${item.avatarBg} text-white font-black text-xs flex items-center justify-center shadow-md shrink-0`}>
                      {item.avatar}
                    </div>
                    <div>
                      <h4 className="text-sm font-bold text-slate-900 flex items-center gap-1">
                        <span>{item.name}</span>
                      </h4>
                      <span className="text-[10px] text-blue-600 font-semibold block">
                        {item.badge}
                      </span>
                    </div>
                  </div>

                  {/* Google G Icon */}
                  <svg className="w-5 h-5 shrink-0 opacity-80" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" />
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" />
                  </svg>
                </div>

                {/* Star Rating & Location Badge */}
                <div className="flex items-center justify-between gap-2 mb-3">
                  <div className="flex text-amber-400 text-xs tracking-wider">
                    {'★'.repeat(item.rating)}
                  </div>
                  <span className="text-[10px] font-bold bg-blue-50 text-blue-700 px-2.5 py-0.5 rounded-full border border-blue-100 line-clamp-1">
                    📍 {item.location}
                  </span>
                </div>

                {/* Review Text */}
                <p className="text-xs text-slate-600 leading-relaxed italic mb-4">
                  "{item.review}"
                </p>
              </div>

              {/* Date & Direct Google Review Link */}
              <div className="border-t border-slate-100 pt-3 flex items-center justify-between text-[10px] text-slate-400 font-medium">
                <span>{item.date}</span>
                <a
                  href={item.reviewLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-600 hover:text-blue-800 font-bold flex items-center gap-1 hover:underline"
                  title="Open verified review on Google Maps"
                >
                  <span>Google Review</span>
                  <span>↗</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* 4-Point Sai Sales Guarantee Banner */}
        <div className="bg-gradient-to-br from-slate-900 via-slate-950 to-blue-950 rounded-3xl p-8 sm:p-10 text-white shadow-2xl shadow-slate-950/50 border border-slate-800 mb-16">
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="text-cyan-400 text-xs font-black uppercase tracking-widest block mb-1">
              Customer Assurance Policy
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              The Sai Sales Trust Guarantee
            </h3>
            <p className="text-slate-300 text-xs sm:text-sm mt-2 font-light">
              Built on 17+ years of ethical business, transparency, and consumer first service across Sangli District.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guarantees.map((g, idx) => (
              <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-5 backdrop-blur-md hover:bg-white/10 transition-colors">
                <span className="text-2xl mb-3 block">{g.icon}</span>
                <h4 className="text-sm font-bold text-white mb-1.5">{g.title}</h4>
                <p className="text-slate-400 text-xs leading-relaxed font-light">{g.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Authorized Brands & Finance Partners Ticker */}
        <div className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200/90 shadow-md">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 divide-y lg:divide-y-0 lg:divide-x divide-slate-200">
            
            {/* Brand Partners */}
            <div className="flex flex-col items-center sm:items-start pb-6 lg:pb-0">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
                Authorized Brand Partners
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {brandPartners.map((brand, i) => (
                  <span key={i} className="text-xs font-bold text-slate-800 bg-slate-100 px-3 py-1.5 rounded-xl border border-slate-200/70 shadow-xs">
                    {brand}
                  </span>
                ))}
              </div>
            </div>

            {/* Finance Partners */}
            <div className="flex flex-col items-center sm:items-start pt-6 lg:pt-0 lg:pl-8">
              <span className="text-[11px] font-black uppercase tracking-widest text-slate-400 mb-3">
                0% Instant Finance & EMI Partners
              </span>
              <div className="flex flex-wrap items-center gap-2">
                {financePartners.map((fin, i) => (
                  <span key={i} className="text-xs font-bold text-emerald-700 bg-emerald-50 px-3 py-1.5 rounded-xl border border-emerald-200/70 shadow-xs flex items-center gap-1">
                    <span>💳</span> {fin}
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
