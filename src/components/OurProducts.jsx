import { useState } from 'react';

const categories = [
  { id: 'all', label: '🔥 All Products' },
  { id: 'daikin', label: '❄️ Daikin ACs' },
  { id: 'mobiles', label: '📱 Smartphones' },
  { id: 'tv-audio', label: '📺 Smart TVs' },
  { id: 'appliances', label: '🧊 Appliances' },
  { id: 'kitchen', label: '🍳 Fans & Kitchen' }
];

const productList = [
  {
    id: 1,
    name: 'Daikin 1.5 Ton 5-Star Inverter Split AC',
    category: 'daikin',
    brand: 'Daikin',
    badge: 'Official Distributor',
    badgeColor: 'bg-cyan-600',
    image: '/products/daikin-ac-1.jpg',
    specs: ['Triple Display & Dew Clean Tech', '100% Copper Condenser Coil', 'PM 2.5 Air Filter & 3D Airflow', '10-Yr Compressor Warranty'],
    price: 'Best District Price',
    emi: '0% Downpayment • ₹2,499/mo EMI'
  },
  {
    id: 2,
    name: 'Daikin 1.0 Ton 3-Star Inverter Split AC',
    category: 'daikin',
    brand: 'Daikin',
    badge: 'Energy Saver',
    badgeColor: 'bg-blue-600',
    image: '/products/daikin-ac-2.jpg',
    specs: ['Econo Power Saving Mode', 'Coanda Airflow Pattern', 'Stabilizer-Free Operation', '100% Pure Copper Tubes'],
    price: 'Special Store Deal',
    emi: '₹1,999/mo No-Cost EMI'
  },
  {
    id: 3,
    name: 'Samsung Galaxy S24 Ultra 5G / S24+',
    category: 'mobiles',
    brand: 'Samsung',
    badge: 'Galaxy AI Ready',
    badgeColor: 'bg-indigo-600',
    image: '/products/samsung-s24.jpg',
    specs: ['200MP Quad Pro-Grade Camera', 'Snapdragon 8 Gen 3 Processor', 'Titanium Frame & S-Pen Support', 'Official Samsung Brand Warranty'],
    price: 'Exchange Bonus Available',
    emi: 'Bajaj / HDFC Instant EMI'
  },
  {
    id: 4,
    name: 'Apple iPhone 16 Pro & iPhone 15 Pro',
    category: 'mobiles',
    brand: 'Apple',
    badge: 'Authorized Stock',
    badgeColor: 'bg-slate-900',
    image: '/products/iphone-16.jpg',
    specs: ['Titanium Design & Action Button', '48MP Pro Camera System', 'Super Retina XDR OLED Display', 'All Colors & Storage In Stock'],
    price: 'Instant Cashback Offers',
    emi: '0% Interest EMI Available'
  },
  {
    id: 5,
    name: 'OnePlus 12 5G / Nord 4 5G Series',
    category: 'mobiles',
    brand: 'OnePlus',
    badge: 'Fast Charging',
    badgeColor: 'bg-red-600',
    image: '/products/oneplus-phone.jpg',
    specs: ['100W SuperVOOC Fast Charge', 'Sony Flagship Camera Sensor', '2K 120Hz ProXDR Display', 'Snapdragon Flagship Engine'],
    price: 'Best Value Deal',
    emi: 'Zero Downpayment Options'
  },
  {
    id: 6,
    name: 'Sony Bravia 55" 4K Google Smart TV',
    category: 'tv-audio',
    brand: 'Sony',
    badge: 'Cinematic Audio',
    badgeColor: 'bg-violet-600',
    image: '/products/sony-tv.jpg',
    specs: ['4K X-Reality PRO Picture Engine', 'Dolby Atmos & DTS Virtual Surround', 'Google TV with Voice Remote', 'Apple AirPlay & Chromecast'],
    price: 'Special Festive Discount',
    emi: '₹2,699/mo Easy EMI'
  },
  {
    id: 7,
    name: 'LG 8.0 Kg Front Load Smart Inverter Washer',
    category: 'appliances',
    brand: 'LG',
    badge: '5-Star Efficient',
    badgeColor: 'bg-pink-600',
    image: '/products/lg-washing-machine.jpg',
    specs: ['AI Direct Drive Drum Care', 'Steam Allergy Hygiene Care', '6 Motion Direct Drive Motor', '10-Year Motor Warranty'],
    price: 'Special Branch Offer',
    emi: '₹1,899/mo EMI Available'
  },
  {
    id: 8,
    name: 'Samsung Double Door Frost-Free Refrigerator',
    category: 'appliances',
    brand: 'Samsung',
    badge: 'Digital Inverter',
    badgeColor: 'bg-blue-700',
    image: '/products/samsung-fridge.jpg',
    specs: ['Twin Cooling Plus System', 'Convertible 5-in-1 Storage Modes', 'Digital Inverter Compressor', '20-Year Compressor Warranty'],
    price: 'Up to 30% Off MRP',
    emi: 'Instant Finance Approval'
  },
  {
    id: 9,
    name: 'Bajaj & Havells BLDC Ceiling Fans & Geysers',
    category: 'kitchen',
    brand: 'Bajaj / Havells',
    badge: 'Energy Saving',
    badgeColor: 'bg-amber-600',
    image: '/products/bldc-fan.jpg',
    specs: ['Up to 60% Electricity Savings', 'Whisper Quiet Operation & Remote', 'High Air Delivery & Anti-Dust', '25L Glassline Water Geysers'],
    price: 'Starting ₹1,899',
    emi: 'Combo Deals Available'
  },
  {
    id: 10,
    name: 'Hawkins & Prestige Pressure Cookers & Stoves',
    category: 'kitchen',
    brand: 'Hawkins / Prestige',
    badge: 'Cookware Range',
    badgeColor: 'bg-rose-600',
    image: '/products/pressure-cooker.jpg',
    specs: ['Hard Anodised & Stainless Steel', 'Gas & Induction Compatible', 'Heavy Gauge Base Heat Spread', '5-Year Manufacturer Warranty'],
    price: 'Up to 35% Off MRP',
    emi: 'In-Store Ready Stock'
  }
];

export default function OurProducts() {
  const [activeCategory, setActiveCategory] = useState('all');

  const filteredProducts = productList.filter((item) => {
    if (activeCategory === 'all') return true;
    return item.category === activeCategory;
  });

  return (
    <section id="products" className="py-24 px-4 sm:px-6 bg-slate-50 border-t border-slate-200/60 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-blue-50 text-blue-600 text-xs font-black tracking-widest uppercase mb-4 border border-blue-200/60 shadow-sm">
            Electronics • Mobiles • Daikin AC
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-slate-900 mb-4 tracking-tight">
            Our Products & Range
          </h2>
          <p className="text-sm md:text-base text-slate-500 font-light leading-relaxed px-2">
            Explore 100% genuine multi-brand electronics, official Daikin Air Conditioners, smartphones, and home appliances with 0% No-Cost EMI across Sangli District.
          </p>
        </div>

        {/* Clean Category Filter Navigation Bar */}
        <div className="flex items-center justify-start sm:justify-center overflow-x-auto pb-4 mb-10 gap-2 scroll-smooth px-1 select-none">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setActiveCategory(cat.id)}
              className={`py-2.5 px-4 sm:px-5 rounded-2xl font-bold text-xs sm:text-sm tracking-wide transition-all duration-200 shrink-0 touch-manipulation active:scale-95 shadow-sm ${
                activeCategory === cat.id
                  ? 'bg-blue-600 text-white shadow-md shadow-blue-500/30 ring-2 ring-blue-600/30'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200/80'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-3xl overflow-hidden border border-slate-200/80 shadow-lg shadow-slate-900/5 hover:shadow-2xl hover:shadow-blue-900/15 transition-all duration-300 flex flex-col group hover:-translate-y-1"
            >
              {/* Product Image Container */}
              <div className="relative aspect-[4/3] bg-slate-50 overflow-hidden flex items-center justify-center p-3">
                <img
                  src={product.image}
                  alt={product.name}
                  loading="lazy"
                  className="w-full h-full object-contain group-hover:scale-105 transition-transform duration-500"
                />
                
                {/* Brand Badge */}
                <span className={`absolute top-3 left-3 ${product.badgeColor} text-white text-[10px] font-black uppercase tracking-wider px-2.5 py-1 rounded-lg shadow-md`}>
                  {product.badge}
                </span>

                {/* Brand Name Tag */}
                <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-md text-slate-900 text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-lg border border-slate-200 shadow-sm">
                  {product.brand}
                </span>
              </div>

              {/* Product Info */}
              <div className="p-5 sm:p-6 flex flex-col flex-grow">
                <h3 className="font-bold text-slate-900 text-base leading-snug line-clamp-2 mb-3 group-hover:text-blue-600 transition-colors">
                  {product.name}
                </h3>

                {/* Key Features Specs */}
                <ul className="space-y-1.5 mb-5 text-xs text-slate-600 flex-grow">
                  {product.specs.map((spec, i) => (
                    <li key={i} className="flex items-center gap-2 line-clamp-1">
                      <span className="text-emerald-500 font-bold">✓</span>
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>

                {/* Pricing & EMI info */}
                <div className="border-t border-slate-100 pt-3.5 mb-4">
                  <span className="text-sm font-black text-slate-900 block">
                    {product.price}
                  </span>
                  <span className="text-[11px] font-semibold text-emerald-600 block mt-0.5">
                    💳 {product.emi}
                  </span>
                </div>

                {/* Action Button: Call Store / Enquire */}
                <div className="mt-auto">
                  <a
                    href="tel:8370818181"
                    className="w-full inline-flex items-center justify-center gap-2 bg-slate-900 hover:bg-blue-600 active:bg-blue-700 text-white text-xs font-bold py-3 px-4 rounded-xl transition-all shadow-sm touch-manipulation"
                  >
                    <span>📞</span> Call Store: 8370818181
                  </a>
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Daikin Authorized Partner Callout Card */}
        <div className="mt-14 bg-gradient-to-r from-blue-900 via-indigo-900 to-slate-900 rounded-3xl p-6 sm:p-10 text-white shadow-2xl shadow-blue-950/40 border border-blue-800/40 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 sm:gap-5">
            <div className="w-14 sm:w-16 h-14 sm:h-16 rounded-2xl bg-blue-500/20 border border-blue-400/30 flex items-center justify-center text-2xl sm:text-3xl shrink-0 shadow-inner">
              ❄️
            </div>
            <div>
              <span className="text-[10px] sm:text-xs text-cyan-300 font-bold uppercase tracking-widest block mb-1">
                Official Sangli District Distribution
              </span>
              <h4 className="text-lg sm:text-2xl font-black">Authorized Daikin Air Conditioning Hub</h4>
              <p className="text-blue-200 text-xs sm:text-sm mt-1 max-w-xl font-light">
                Complete range of Daikin 3-Star & 5-Star Inverter ACs with certified installation, genuine warranty, and zero downpayment EMI options.
              </p>
            </div>
          </div>

          <div className="flex flex-wrap gap-3 w-full sm:w-auto">
            <a
              href="tel:8370818181"
              className="flex-1 sm:flex-none text-center bg-white text-slate-950 hover:bg-blue-50 font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-colors shadow-lg touch-manipulation"
            >
              📞 Call: 8370818181
            </a>
            <a
              href="#contact"
              className="flex-1 sm:flex-none text-center bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs sm:text-sm py-3.5 px-6 rounded-xl transition-colors shadow-lg shadow-blue-600/30 touch-manipulation"
            >
              Franchise Desk
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
