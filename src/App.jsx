import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { Scissors, Calendar, MapPin, Clock, X, Phone, ChevronLeft, ChevronRight } from 'lucide-react';
import api from './api';


// --- COMPONENTS ---
const BrandLogo = ({ className = "w-12 h-12" }) => (
  <div className={`${className} flex items-center justify-center group`}>
    {/* Custom interlocked FS SVG Monogram */}
    <svg viewBox="0 0 100 100" fill="none" strokeWidth="12" strokeLinecap="butt" strokeLinejoin="miter" className="w-full h-full transform group-hover:scale-110 transition-transform duration-500">
       {/* 'F' Element */}
       <path d="M 25 80 L 25 20 L 45 20 M 25 50 L 40 50" stroke="currentColor" className="text-white group-hover:text-[#EA580C] transition-colors duration-300" />
       {/* 'S' Element */}
       <path d="M 75 20 L 55 20 L 55 50 L 75 50 L 75 80 L 45 80" stroke="#EA580C" />
    </svg>
  </div>
);

const AtmosphereGallery = () => {
  const images = [
    { id: 1, url: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'The Anvil Chair' },
    { id: 2, url: 'https://images.unsplash.com/photo-1512864027575-eaf202eb5bc6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Forged Steel Blades' },
    { id: 3, url: 'https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80', title: 'Berea Lounge' }
  ];

  return (
    <section className="py-32 bg-[#0F1012] px-6 relative overflow-hidden border-t border-white/5">
      {/* Ghost Background Accent Text */}
      <div className="absolute left-0 top-1/2 -translate-y-1/2 text-[12rem] md:text-[20rem] font-serif font-black text-white/[0.015] pointer-events-none select-none whitespace-nowrap">
        WORKSHOP
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20">
          <span className="text-[#EA580C] text-xs font-bold tracking-[0.4em] uppercase">Visual Atmosphere</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white tracking-tighter mt-2">INSIDE THE ANVIL</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {images.map((img) => (
            <div key={img.id} className="group relative h-[450px] overflow-hidden border border-white/10 bg-[#17181C]">
              {/* Ghost Glow Effect on Hover */}
              <div className="absolute inset-0 bg-[#EA580C]/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 mix-blend-overlay"></div>
              
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-110 transition-transform duration-700 ease-out"
              />
              
              <div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t from-black/90 via-black/40 to-transparent z-20 transform translate-y-2 group-hover:translate-y-0 transition-transform">
                <p className="text-[#EA580C] text-[10px] font-bold tracking-[0.2em] uppercase mb-1">Forge & Shear</p>
                <h3 className="text-2xl font-serif text-white">{img.title}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  useEffect(() => setIsOpen(false), [location]);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; }
  }, [isOpen]);

  const navLinks = [
    { path: '/', name: 'home', num: '01' },
    { path: '/services', name: 'services', num: '02' },
    { path: '/barbers', name: 'barbers', num: '03' },
    { path: '/about', name: 'about', num: '04' },
    { path: '/book', name: 'book chair', num: '05' },
  ];

  return (
    <>
      <header className="fixed w-full top-0 z-40 bg-transparent">
        <div className="max-w-7xl mx-auto px-6 h-24 flex items-center justify-between">
          
          <Link to="/" className="flex items-center gap-4 group">
            <BrandLogo />
            <span className="text-white font-black tracking-[0.2em] uppercase text-xl group-hover:text-[#EA580C] transition-colors hidden sm:block">
              Forge & Shear
            </span>
          </Link>
          
          <div className="flex items-center gap-8">
            <button className="text-white hover:text-[#EA580C] transition-colors" onClick={() => setIsOpen(true)}>
              <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7h16M4 12h16M4 17h16" />
              </svg>
            </button>
          </div>
        </div>
      </header>

      {/* Full Screen Overlay Menu */}
      <div className={`fixed inset-0 bg-[#0A0A0C] z-50 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] flex flex-col md:flex-row overflow-hidden ${isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'}`}>
        
        <div className={`absolute -right-20 top-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif font-black text-white/[0.02] -rotate-90 pointer-events-none whitespace-nowrap transition-transform duration-1000 ${isOpen ? 'scale-100' : 'scale-75'}`}>
          FORGE
        </div>

        <button onClick={() => setIsOpen(false)} className="absolute top-6 right-6 md:top-8 md:right-8 text-gray-400 hover:text-white transition-colors z-[60] group">
          <X size={32} strokeWidth={1} className="group-hover:rotate-90 transition-transform duration-300" />
        </button>

        <div className="hidden md:flex flex-col justify-center w-1/3 p-16 border-r border-white/5 text-gray-500 text-xs tracking-widest uppercase relative z-10">
          <div className={`transition-all duration-700 transform delay-300 ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}>
            
            <div className="flex items-center gap-4 mb-4">
               <BrandLogo className="w-10 h-10" />
               <h3 className="text-white font-black tracking-[0.2em] text-sm uppercase">Forge & Shear</h3>
            </div>
            
            <p className="mb-16">Barbershop & Grooming</p>
            
            <p className="text-white">14 Anvil Road</p>
            <p className="mb-16">Berea, Durban, 4001</p>

            <p className="text-white">+27 31 555 0198</p>
            <p className="hover:text-[#EA580C] cursor-pointer transition-colors">hello@forgeandshear.co.za</p>
          </div>
        </div>

        <div className="flex flex-col justify-center w-full md:w-2/3 p-8 md:p-24 h-full gap-2 md:gap-4 overflow-y-auto relative z-10">
          {navLinks.map((link, index) => (
            <Link 
              key={link.path} 
              to={link.path} 
              onClick={() => setIsOpen(false)}
              className="flex items-center gap-4 md:gap-8 group w-fit"
            >
              <span 
                className={`text-5xl md:text-7xl lg:text-[7rem] font-serif tracking-tighter text-gray-400 transition-all duration-700 ease-[cubic-bezier(0.87,0,0.13,1)] transform ${isOpen ? 'translate-y-0 opacity-100' : 'translate-y-16 opacity-0'} group-hover:text-transparent group-hover:[-webkit-text-stroke:1px_#EA580C] md:group-hover:[-webkit-text-stroke:2px_#EA580C] group-hover:translate-x-4`}
                style={{ transitionDelay: isOpen ? `${(index * 75) + 100}ms` : '0ms' }}
              >
                {link.name}
              </span>
              
              <span 
                className={`text-xs md:text-sm font-sans tracking-[0.2em] text-[#EA580C] opacity-0 group-hover:opacity-100 transition-all duration-500 transform -translate-x-4 group-hover:translate-x-0`}
              >
                {link.num}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

const Footer = () => (
  <footer className="bg-black border-t-2 border-[#EA580C] pt-16 pb-8 text-gray-400 text-sm">
    <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
      <div>
        <h3 className="text-white font-black tracking-widest uppercase mb-4 flex items-center gap-2">
          Forge & Shear <div className="w-1.5 h-1.5 bg-[#EA580C] rounded-full"></div>
        </h3>
        <p className="mb-4">Durban's premier industrial grooming lounge. Precision scissor work, hot steam straight-razors, and bespoke beard architecture.</p>
       
      </div>
      <div>
        <h4 className="text-white font-bold uppercase tracking-wider mb-4">Workshop Hours</h4>
        <ul className="space-y-2">
          <li className="flex justify-between"><span>Mon - Fri</span> <span>09:00 - 18:00</span></li>
          <li className="flex justify-between"><span>Saturday</span> <span>08:00 - 15:00</span></li>
          <li className="flex justify-between"><span>Sunday</span> <span className="text-[#EA580C]">Closed</span></li>
        </ul>
      </div>
      <div>
        <h4 className="text-white font-bold uppercase tracking-wider mb-4">Location</h4>
        <p className="flex items-start gap-2 mb-2"><MapPin size={16} className="text-[#EA580C] shrink-0 mt-1"/> 14 Anvil Road, Berea, Durban, 4001</p>
        <p className="flex items-center gap-2"><Phone size={16} className="text-[#EA580C]"/> +27 31 555 0198</p>
      </div>
      <div>
        <h4 className="text-white font-bold uppercase tracking-wider mb-4">Legal</h4>
        <ul className="space-y-2 flex flex-col">
          <Link to="/terms" className="hover:text-white transition-colors">Terms & Conditions</Link>
          <Link to="/privacy" className="hover:text-white transition-colors">Privacy Policy</Link>
        </ul>
      </div>
    </div>
    <div className="max-w-7xl mx-auto px-6 text-center border-t border-white/10 pt-8 text-xs tracking-wider">
      &copy; {new Date().getFullYear()} Forge & Shear Barbershop. All rights reserved.
    </div>
  </footer>
);

// --- NEW PROMO MODAL COMPONENT ---
const PromoModal = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Only show the promo once per session so it isn't intrusive
    const hasSeenPromo = sessionStorage.getItem('forgePromoSeen');
    if (!hasSeenPromo) {
      const timer = setTimeout(() => setIsOpen(true), 3000);
      return () => clearTimeout(timer);
    }
  }, []);

  const closePromo = () => {
    setIsOpen(false);
    sessionStorage.setItem('forgePromoSeen', 'true');
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[#0F1012]/95 p-4 animate-[fadeIn_0.3s_ease-out]">
      <div className="bg-[#17181C] border border-[#EA580C] max-w-md w-full p-8 relative shadow-2xl">
        <button onClick={closePromo} className="absolute top-4 right-4 text-gray-500 hover:text-white transition-colors">
          <X size={24} strokeWidth={1.5} />
        </button>
        
        <h2 className="text-3xl font-serif text-white uppercase tracking-tighter mb-2">First Blood</h2>
        <p className="text-[#EA580C] text-[10px] font-bold tracking-[0.2em] uppercase mb-6">20% Off Your First Cut</p>
        
        <p className="text-gray-400 text-sm leading-relaxed mb-8 tracking-wide">
          New to the anvil? Secure your first chair with us today and experience uncompromising precision at a fraction of the cost.
        </p>
        
        <Link to="/book" onClick={closePromo} className="block w-full text-center border border-[#EA580C] bg-[#EA580C] text-white px-8 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#EA580C] transition-colors">
          Claim Offer
        </Link>
      </div>
    </div>
  );
};

// --- NEW TERMS COMPONENT ---
const Terms = () => {
  return (
    <main className="bg-[#0F1012] min-h-screen pt-32 pb-24 px-6 flex-grow">
      <div className="max-w-3xl mx-auto">
        <div className="mb-16 border-b border-white/5 pb-8 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-serif text-white uppercase tracking-tighter mb-4">Terms & Conditions</h1>
          <p className="text-[#EA580C] text-[10px] font-bold tracking-[0.2em] uppercase">Last Updated: September 2026</p>
        </div>
        
        <div className="space-y-12 text-gray-400 text-sm leading-relaxed tracking-wide">
          <section>
            <h2 className="text-white font-serif text-2xl uppercase mb-4">1. Appointments & Cancellations</h2>
            <p className="mb-4">At Forge & Shear, we operate strictly on a scheduled basis to ensure every client receives our undivided attention. By booking an appointment, you agree to our scheduling policies.</p>
            <ul className="list-disc pl-5 space-y-2 text-gray-500">
              <li>Cancellations must be made at least 2 hours prior to your scheduled time via email or phone.</li>
              <li>No-shows will be recorded and may result in the requirement of a non-refundable 50% deposit for future bookings.</li>
              <li>Late arrivals exceeding 15 minutes may forfeit their slot to accommodate the next client on time.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase mb-4">2. Payments & Pricing</h2>
            <p>All prices listed on our platform and in-store are subject to change without prior notice. Payment is due in full at the completion of your service. We accept major credit cards, digital wallets, and exact cash.</p>
          </section>

          <section>
            <h2 className="text-white font-serif text-2xl uppercase mb-4">3. Health & Safety</h2>
            <p>We maintain the highest standards of sanitation. All tools, shears, and razors are sterilized between uses. If you have any skin conditions, severe allergies, or health concerns, you must inform your barber before the service begins.</p>
          </section>
          
          <section>
            <h2 className="text-white font-serif text-2xl uppercase mb-4">4. Liability</h2>
            <p>Forge & Shear is not responsible for damage to personal property or clothing during your visit. While we take every professional precaution, chemical treatments and sharp instruments carry inherent risks. By agreeing to these terms, you acknowledge and accept these conditions.</p>
          </section>
        </div>
      </div>
    </main>
  );
};

// --- PAGES ---
const AvailabilityDashboard = () => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [existingBookings, setExistingBookings] = useState([]);
  const [activeBarberId, setActiveBarberId] = useState('aaaaa111-1111-1111-1111-111111111111');

  const barbers = [
    { id: 'aaaaa111-1111-1111-1111-111111111111', name: 'Marcus', role: 'The Architect' },
    { id: 'bbbbb222-2222-2222-2222-222222222222', name: 'Jaxson', role: 'The Ghost' },
    { id: 'ccccc333-3333-3333-3333-333333333333', name: 'Elias', role: 'The Captain' }
  ];

  useEffect(() => {
    api.get('/Booking')
      .then(res => setExistingBookings(res.data))
      .catch(err => console.error("Error fetching live bookings:", err));
  }, []);

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const firstDayOfMonth = new Date(year, month, 1).getDay();

  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  const handlePrevMonth = () => setCurrentMonth(new Date(year, month - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(year, month + 1, 1));

  const getBookingsForDate = (dayNum) => {
    const targetDateStr = `${year}-${String(month + 1).padStart(2, '0')}-${String(dayNum).padStart(2, '0')}`;
    
    return existingBookings.filter(b => {
      if (!b.startTime || !b.barberId) return false;
      if (b.barberId.toLowerCase() !== activeBarberId.toLowerCase()) return false;
      
      const dateObj = new Date(b.startTime.endsWith('Z') ? b.startTime : `${b.startTime}Z`);
      const localY = dateObj.getFullYear();
      const localM = String(dateObj.getMonth() + 1).padStart(2, '0');
      const localD = String(dateObj.getDate()).padStart(2, '0');
      
      return `${localY}-${localM}-${localD}` === targetDateStr;
    }).sort((a, b) => new Date(a.startTime) - new Date(b.startTime));
  };

  const formatTime = (isoString) => {
    const dateObj = new Date(isoString.endsWith('Z') ? isoString : `${isoString}Z`);
    return `${String(dateObj.getHours()).padStart(2, '0')}:${String(dateObj.getMinutes()).padStart(2, '0')}`;
  };

  return (
    <section className="py-32 bg-[#0F1012] px-6 relative z-10 overflow-hidden border-t border-white/5">
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] md:text-[25rem] font-serif font-black text-white/[0.015] pointer-events-none select-none whitespace-nowrap z-0">
        ROSTER
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div>
            <span className="text-[#EA580C] text-xs font-bold tracking-[0.4em] uppercase mb-3 block">Live Anvil Occupancy</span>
            <h2 className="text-4xl md:text-6xl font-serif text-white tracking-tighter">MASTER ROSTER</h2>
          </div>
          
          {/* Flat Brutalist Tabs */}
          <div className="flex bg-[#17181C] border border-white/10 p-1">
            {barbers.map(barber => {
              const isActive = activeBarberId === barber.id;
              return (
                <button
                  key={barber.id}
                  onClick={() => setActiveBarberId(barber.id)}
                  className={`relative px-6 md:px-10 py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-all duration-300
                    ${isActive 
                      ? 'text-white bg-[#EA580C]/10 shadow-[inset_0_-2px_0_#EA580C]' 
                      : 'text-gray-500 hover:text-white hover:bg-white/5'
                    }`}
                >
                  <span className="relative z-10">{barber.name}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Flat Calendar Container */}
        <div className="bg-[#17181C] border border-white/10 shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative overflow-hidden">
          
          {/* Calendar Header Nav */}
          <div className="flex items-center justify-between p-6 md:p-8 border-b border-white/10 bg-[#0F1012] relative z-10">
            <button onClick={handlePrevMonth} className="group flex items-center gap-2 text-gray-500 hover:text-[#EA580C] transition-colors text-xs font-bold uppercase tracking-widest">
              <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#EA580C] transition-colors"></span> Prev
            </button>
            <span className="text-white font-serif tracking-widest uppercase text-2xl md:text-3xl">
              {monthNames[month]} <span className="text-gray-500">{year}</span>
            </span>
            <button onClick={handleNextMonth} className="group flex items-center gap-2 text-gray-500 hover:text-[#EA580C] transition-colors text-xs font-bold uppercase tracking-widest">
              Next <span className="w-8 h-[1px] bg-gray-700 group-hover:bg-[#EA580C] transition-colors"></span>
            </button>
          </div>

          {/* Days of Week */}
          <div className="grid grid-cols-7 border-b border-white/10 bg-[#0F1012] relative z-10">
            {dayNames.map(day => (
              <div key={day} className="py-5 text-center text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] border-r border-white/5 last:border-0">
                {day}
              </div>
            ))}
          </div>

          {/* Calendar Grid */}
          <div className="grid grid-cols-7 auto-rows-fr bg-[#0F1012]">
            {/* Empty Padding Cells */}
            {Array.from({ length: firstDayOfMonth }).map((_, i) => (
              <div 
                key={`empty-${i}`} 
                className="min-h-[140px] md:min-h-[160px] p-2 border-b border-r border-white/5 bg-[repeating-linear-gradient(-45deg,transparent,transparent_10px,rgba(255,255,255,0.02)_10px,rgba(255,255,255,0.02)_20px)] opacity-50"
              ></div>
            ))}

            {/* Interactive Day Cells */}
            {Array.from({ length: daysInMonth }).map((_, i) => {
              const dayNum = i + 1;
              const dayBookings = getBookingsForDate(dayNum);
              
              const cellDate = new Date(year, month, dayNum);
              const today = new Date();
              today.setHours(0, 0, 0, 0); 
              
              const isToday = cellDate.getTime() === today.getTime();
              const isPast = cellDate < today;

              return (
                <div 
                  key={dayNum} 
                  className={`group relative min-h-[140px] md:min-h-[160px] p-3 md:p-4 border-b border-r border-white/5 transition-colors duration-300
                    ${isPast 
                      ? 'bg-[#0A0B0D] opacity-40 grayscale pointer-events-none' 
                      : isToday 
                        ? 'bg-gradient-to-b from-[#EA580C]/10 to-transparent hover:bg-[#1a1b21]' 
                        : 'bg-[#17181C] hover:bg-[#1a1b21]'
                    }
                  `}
                >
                  {!isPast && (
                    <div className="absolute inset-0 border border-[#EA580C]/0 group-hover:border-[#EA580C]/30 pointer-events-none transition-colors duration-300 z-0"></div>
                  )}
                  
                  {/* Date Number */}
                  <div className={`relative z-10 text-lg md:text-xl font-serif mb-4 flex items-start justify-between 
                    ${isPast ? 'text-gray-700' : isToday ? 'text-[#EA580C] font-bold' : 'text-gray-500 group-hover:text-white transition-colors'}
                  `}>
                    <span>{dayNum}</span>
                    {isToday && <span className="text-[8px] font-bold tracking-[0.2em] uppercase text-[#EA580C] bg-[#EA580C]/10 px-2 py-1 hidden sm:block">Today</span>}
                  </div>

                  {/* Bookings Container */}
                  <div className="relative z-10 space-y-2 overflow-y-auto max-h-[90px] pr-1 [&::-webkit-scrollbar]:hidden">
                    {dayBookings.length > 0 ? (
                      dayBookings.map((booking, idx) => (
                        <div key={idx} className="bg-black/60 border-l-2 border-[#EA580C] p-2 flex flex-col xl:flex-row xl:items-center justify-between gap-1 group/ticket transition-colors hover:bg-[#EA580C]/10">
                          <span className={`text-[10px] font-bold tracking-widest ${isPast ? 'text-gray-600' : 'text-[#EA580C]'}`}>
                            {formatTime(booking.startTime)}
                          </span>
                          <span className={`text-[11px] truncate font-serif transition-colors ${isPast ? 'text-gray-600' : 'text-gray-300 group-hover/ticket:text-white'}`} title={booking.customerName}>
                            {booking.customerName.split(' ')[0]}
                          </span>
                        </div>
                      ))
                    ) : (
                      <span className={`block text-[10px] uppercase tracking-widest mt-2 transition-colors ${isPast ? 'text-gray-800' : 'text-gray-600 group-hover:text-gray-500'}`}>
                        {isPast ? 'Passed' : 'Open Chair'}
                      </span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Flat Brutalist Action Button */}
        <div className="mt-16 flex justify-center relative z-20">
          <Link to="/book" className="group relative inline-flex items-center justify-center border border-[#EA580C] bg-transparent text-[#EA580C] px-14 py-5 text-xs font-bold tracking-[0.2em] uppercase overflow-hidden transition-all hover:text-white">
            <span className="absolute inset-0 w-full h-full -translate-x-full bg-[#EA580C] group-hover:animate-[slideRight_0.4s_forwards] -z-10"></span>
            Access Booking Engine
          </Link>
        </div>

      </div>
    </section>
  );
};

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <main className="bg-[#0F1012] min-h-screen">
      
      <section className="relative h-screen flex flex-col items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[#0F1012]">
          <img 
            src="https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80" 
            alt="Barber at work" 
            className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale hover:scale-105 transition-transform duration-[10000ms] ease-out"
          />
        </div>
        
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#0F1012]/80 to-[#0F1012]"></div>

        <div className={`relative z-10 text-center px-4 max-w-5xl mx-auto w-full mt-12 transition-all duration-1000 ease-[cubic-bezier(0.16,1,0.3,1)] transform ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-12 opacity-0'}`}>
          
          <p className="text-[#EA580C] text-xs font-bold tracking-[0.4em] uppercase mb-6">
            Tradition Meets Precision
          </p>

          <h1 className="text-6xl md:text-[6rem] lg:text-[7rem] font-serif text-white tracking-tighter mb-2 leading-none">
            FORGE
          </h1>
          <h1 className="text-4xl md:text-5xl lg:text-[5rem] font-serif text-white tracking-tighter mb-10 leading-none -mt-2 md:-mt-4">
            & <span className="text-[#EA580C] italic">SHEAR</span>
          </h1>
          
          <p className="text-gray-400 md:text-base mb-12 max-w-2xl mx-auto tracking-wide">
            Step into a sanctuary of masculinity. Classic techniques, modern styling, and an uncompromising dedication to the craft.
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
              <Link to="/book" className="bg-[#EA580C] border border-[#EA580C] text-white px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#EA580C] transition-all w-full sm:w-auto">
                Secure Your Chair
              </Link>
              <Link to="/services" className="bg-transparent border border-white/20 text-white px-12 py-4 text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-black transition-all w-full sm:w-auto">
                View The Menu
              </Link>
          </div>
        </div>
      </section>

      <section className="py-24 bg-[#0F1012] px-6 relative z-10">
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-white/5 pt-24">
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <Scissors className="w-8 h-8 text-gray-600 group-hover:text-[#EA580C] transition-colors mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif text-white mb-4 uppercase">Master Craft</h3>
                  <p className="text-gray-500 text-sm tracking-wide leading-relaxed">
                    Decades of combined experience wielding forged steel. We don't rush; we sculpt. Every cut is an exercise in meticulous precision.
                  </p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <Clock className="w-8 h-8 text-gray-600 group-hover:text-[#EA580C] transition-colors mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif text-white mb-4 uppercase">Your Time</h3>
                  <p className="text-gray-500 text-sm tracking-wide leading-relaxed">
                    Your appointment is your sanctuary. Prompt seating, precise execution, and absolutely no waiting in lines. The chair is yours.
                  </p>
              </div>
              <div className="flex flex-col items-center md:items-start text-center md:text-left group">
                  <Calendar className="w-8 h-8 text-gray-600 group-hover:text-[#EA580C] transition-colors mb-6" strokeWidth={1} />
                  <h3 className="text-2xl font-serif text-white mb-4 uppercase">Game Day Ready</h3>
                  <p className="text-gray-500 text-sm tracking-wide leading-relaxed">
                    Whether you're prepping for the boardroom or donning your Springbok jersey for a weekend fixture, we ensure you leave looking sharp.
                  </p>
              </div>
          </div>
      </section>

      <AvailabilityDashboard />
    </main>
  );
};

const Services = () => {
  const predefinedServices = [
    { 
      id: 's1', 
      name: 'Precision Cut', 
      durationMinutes: 45, 
      price: 250, 
      category: 'Signature',
      description: 'Classic scissor and clipper work tailored precisely to your structure, finished with a hot neck lather and straight razor clean-up.' 
    },
    { 
      id: 's2', 
      name: 'Beard Architecture', 
      durationMinutes: 30, 
      price: 150, 
      category: 'Facial Work',
      description: 'Hot steam towel treatment, pre-shave botanical oils, expert straight razor line-up, and deep conditioning beard sculpting.' 
    },
    { 
      id: 's3', 
      name: 'The Campus Fade', 
      durationMinutes: 45, 
      price: 180, 
      category: 'Student Special',
      description: 'Uncompromising skin fade and styling tailored for the Durban University student budget. Flash your student ID at the chair.' 
    },
    { 
      id: 's4', 
      name: 'Match Day Trim', 
      durationMinutes: 75, 
      price: 300, 
      category: 'Full Treatment',
      description: 'The ultimate preparation. Full haircut, beard architectural sculpt, hot steam towels, and complimentary beverage to get game-day ready.' 
    }
  ];

  return (
    <main className="bg-[#0F1012] min-h-screen pt-32 pb-24 px-6 relative overflow-hidden">
      <div className="absolute right-0 top-1/4 text-[15rem] md:text-[25rem] font-serif font-black text-white/[0.015] pointer-events-none select-none whitespace-nowrap z-0">
        MENU
      </div>

      <div className="max-w-5xl w-full mx-auto relative z-10">
        
        <div className="text-center mb-20">
          <span className="text-[#EA580C] text-xs font-bold tracking-[0.4em] uppercase mb-4 block">Uncompromising Quality</span>
          <h1 className="text-5xl md:text-7xl font-serif text-white tracking-tighter mb-4">THE MENU</h1>
          <p className="text-gray-400 text-sm max-w-lg mx-auto tracking-wide">
            Every service executed with heavy-duty precision and traditional craftsmanship. Select your discipline below.
          </p>
        </div>

        <div className="space-y-6">
          {predefinedServices.map((service, index) => (
            <div 
              key={service.id} 
              className="group relative flex flex-col md:flex-row justify-between items-start md:items-center p-8 md:p-10 bg-[#17181C] border border-white/5 hover:border-[#EA580C]/50 transition-all duration-300 shadow-xl"
            >
              <div className="absolute inset-0 bg-[#EA580C]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>

              <div className="mb-6 md:mb-0 max-w-xl relative z-10">
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs font-bold tracking-widest text-[#EA580C] uppercase">0{index + 1} // {service.category}</span>
                  <span className="w-8 h-[1px] bg-white/15"></span>
                  <span className="text-xs font-bold tracking-widest text-gray-500 uppercase flex items-center gap-1.5">
                    <Clock size={13} className="text-[#EA580C]" /> {service.durationMinutes} Mins
                  </span>
                </div>

                <h3 className="text-3xl font-serif text-white mb-3 group-hover:text-[#EA580C] transition-colors">{service.name}</h3>
                <p className="text-gray-400 text-sm tracking-wide leading-relaxed">{service.description}</p>
              </div>

              <div className="flex items-center justify-between md:justify-end gap-8 w-full md:w-auto relative z-10 pt-4 md:pt-0 border-t md:border-t-0 border-white/10">
                <span className="text-3xl font-serif text-white">R{service.price}</span>
                <Link 
                  to="/book" 
                  className="bg-[#EA580C] border border-[#EA580C] text-white hover:bg-transparent hover:text-[#EA580C] px-8 py-3 text-xs font-bold tracking-[0.2em] uppercase transition-all shadow-[0_0_15px_rgba(234,88,12,0.2)]"
                >
                  Book Chair
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-[#17181C] border border-[#EA580C]/30 text-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#EA580C]/5 to-transparent pointer-events-none"></div>
          <h3 className="text-2xl font-serif text-white mb-3">READY TO SIT IN THE CHAIR?</h3>
          <p className="text-gray-400 text-sm max-w-md mx-auto mb-8 tracking-wide">
            Walk-ins are welcomed when the anvil is free, but securing your slot in advance guarantees zero waiting.
          </p>
          <Link 
            to="/book" 
            className="inline-block border border-white/20 text-white hover:bg-white hover:text-black px-10 py-4 text-xs font-bold tracking-[0.2em] uppercase transition-all"
          >
            Access Booking Calendar
          </Link>
        </div>

      </div>
    </main>
  );
};

const About = () => (
  <main className="bg-[#0F1012] min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
    <div className="max-w-5xl w-full">
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-24">
        <div>
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-tighter mb-8">OUR STORY</h1>
          <div className="space-y-6 text-gray-400 tracking-wide leading-relaxed">
            <p>
              Founded in the industrial heart of Berea, Forge & Shear was built on a simple premise: grooming is a craft, not a chore. We stripped away the pretension of modern salons and returned to the roots of traditional barbering, integrating heavy-duty aesthetics with clinical precision.
            </p>
            <p>
              Our master barbers operate out of a repurposed warehouse, utilizing hot steam straight-razors and forged steel shears. Whether you are prepping for the boardroom or getting a sharp fade before a weekend fixture, the anvil is ready. 
            </p>
            <p className="text-white font-serif text-lg italic">
              "We pride ourselves on community. Step in on a Saturday, and you will find our entire crew proudly operating the chairs in Springbok rugby jerseys, celebrating the grit and glory of match day."
            </p>
          </div>
        </div>
        <div className="relative h-[600px] grayscale hover:grayscale-0 transition-all duration-700">
          <img 
            src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80" 
            alt="Barber Shop Interior" 
            className="absolute inset-0 w-full h-full object-cover border border-white/10"
          />
          <div className="absolute -bottom-6 -left-6 w-48 h-48 bg-[#EA580C] -z-10"></div>
        </div>
      </div>

    </div>
  </main>
);

const CustomCalendar = ({ selectedDate, onSelectDate }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  
  const daysInMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 0).getDate();
  const firstDayOfMonth = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), 1).getDay();
  
  const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const dayNames = ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'];

  const handlePrevMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  const handleNextMonth = () => setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));

  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <div className="w-full bg-[#0F1012] border border-gray-600 p-4 shadow-xl">
      <div className="flex justify-between items-center mb-4">
        <button type="button" onClick={handlePrevMonth} className="text-gray-400 hover:text-[#EA580C] transition-colors">
          <ChevronLeft size={20} />
        </button>
        <span className="text-white font-serif tracking-widest uppercase text-sm">
          {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
        </span>
        <button type="button" onClick={handleNextMonth} className="text-gray-400 hover:text-[#EA580C] transition-colors">
          <ChevronRight size={20} />
        </button>
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-center mb-2">
        {dayNames.map(day => (
          <div key={day} className="text-[10px] font-bold text-gray-500 uppercase tracking-widest">{day}</div>
        ))}
      </div>
      
      <div className="grid grid-cols-7 gap-1 text-sm">
        {Array.from({ length: firstDayOfMonth }).map((_, i) => (
          <div key={`empty-${i}`} className="p-2"></div>
        ))}
        
        {Array.from({ length: daysInMonth }).map((_, i) => {
          const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), i + 1);
          const isPast = date < today;
          // Format date to YYYY-MM-DD for the API
          const formattedDate = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
          const isSelected = selectedDate === formattedDate;

          return (
            <button
              key={i}
              type="button"
              disabled={isPast}
              onClick={() => onSelectDate(formattedDate)}
              className={`p-2 transition-colors flex items-center justify-center w-full aspect-square
                ${isPast ? 'text-gray-700 cursor-not-allowed' : 'text-gray-300 hover:border-[#EA580C] hover:text-white border border-transparent'}
                ${isSelected ? 'bg-[#EA580C] !text-white font-bold border-[#EA580C]' : 'bg-[#17181C]'}
              `}
            >
              {i + 1}
            </button>
          );
        })}
      </div>
    </div>
  );
};

const BookingEngine = () => {
  const [services] = useState([
    { id: '11111111-1111-1111-1111-111111111111', name: 'Precision Cut', durationMinutes: 45 },
    { id: '22222222-2222-2222-2222-222222222222', name: 'Beard Architecture', durationMinutes: 30 },
    { id: '33333333-3333-3333-3333-333333333333', name: 'The Campus Fade', durationMinutes: 45 },
    { id: '44444444-4444-4444-4444-444444444444', name: 'Match Day Trim', durationMinutes: 75 }
  ]);
  
  const [barbers] = useState([
    { id: 'aaaaa111-1111-1111-1111-111111111111', name: 'Marcus', nickname: 'The Architect' },
    { id: 'bbbbb222-2222-2222-2222-222222222222', name: 'Jaxson', nickname: 'The Ghost' },
    { id: 'ccccc333-3333-3333-3333-333333333333', name: 'Elias', nickname: 'The Captain' }
  ]);

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [bookingSuccess, setBookingSuccess] = useState(null);
  const [availableSlots, setAvailableSlots] = useState([]);
  const [isLoadingSlots, setIsLoadingSlots] = useState(false);

  const [formData, setFormData] = useState({
    customerName: '',
    customerEmail: '',
    customerPhone: '',
    serviceId: '',
    barberId: '',
    date: '',
    startTime: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    if (formData.barberId && formData.serviceId && formData.date) {
      setIsLoadingSlots(true);
      api.get(`/Booking/available-slots`, {
        params: {
          barberId: formData.barberId,
          serviceId: formData.serviceId,
          date: formData.date
        }
      })
      .then(res => {
        setAvailableSlots(res.data);
      })
      .catch(err => {
        console.error("Failed to fetch available slots from database:", err);
        setAvailableSlots([]);
      })
      .finally(() => setIsLoadingSlots(false));
    } else {
      setAvailableSlots([]);
    }
  }, [formData.barberId, formData.serviceId, formData.date]);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const payload = {
      barberId: formData.barberId,
      serviceId: formData.serviceId,
      startTime: `${formData.date}T${formData.startTime}:00`, 
      customerName: formData.customerName,
      customerEmail: formData.customerEmail,
      customerPhone: formData.customerPhone
    };

    api.post('/Booking/reserve', payload)
      .then(res => {
        const serviceName = services.find(s => s.id === formData.serviceId)?.name || 'Grooming';
        const barberName = barbers.find(b => b.id === formData.barberId)?.name || 'Barber';
        
        setBookingSuccess({ ...formData, serviceName, barberName });
        setIsSubmitting(false);
        window.scrollTo(0, 0);
      })
      .catch(err => {
        console.error("Booking reservation failed:", err.response?.data || err.message);
        alert(err.response?.data || "This slot was just taken or an error occurred. Please select another time.");
        setIsSubmitting(false);
      });
  };

  const generateGoogleCalendarLink = () => {
    if (!bookingSuccess) return '';
    const start = new Date(`${bookingSuccess.date}T${bookingSuccess.startTime}:00+02:00`);
    const end = new Date(start.getTime() + 60 * 60 * 1000); 
    const toGoogleFmt = (d) => d.toISOString().replace(/-|:|\.\d+/g, '');
    
    const title = encodeURIComponent(`Forge & Shear: ${bookingSuccess.serviceName} with ${bookingSuccess.barberName}`);
    const details = encodeURIComponent(`Your reservation is locked in.\nService: ${bookingSuccess.serviceName}\nBarber: ${bookingSuccess.barberName}`);
    const location = encodeURIComponent('14 Anvil Road, Berea, Durban, 4001');
    
    return `https://calendar.google.com/calendar/render?action=TEMPLATE&text=${title}&dates=${toGoogleFmt(start)}/${toGoogleFmt(end)}&details=${details}&location=${location}`;
  };

  const generateAppleCalendarIcs = () => {
    if (!bookingSuccess) return;
    
    const start = new Date(`${bookingSuccess.date}T${bookingSuccess.startTime}:00+02:00`);
    const end = new Date(start.getTime() + 60 * 60 * 1000);
    
    const formatDate = (date) => date.toISOString().replace(/-|:|\.\d+/g, '');

    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Forge and Shear//Booking Engine//EN',
      'BEGIN:VEVENT',
      `DTSTART:${formatDate(start)}`,
      `DTEND:${formatDate(end)}`,
      `SUMMARY:Forge & Shear: ${bookingSuccess.serviceName} with ${bookingSuccess.barberName}`,
      `DESCRIPTION:Your reservation is locked in.\\nService: ${bookingSuccess.serviceName}\\nBarber: ${bookingSuccess.barberName}`,
      'LOCATION:14 Anvil Road\\, Berea\\, Durban\\, 4001',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.setAttribute('download', `Forge_And_Shear_Booking_${bookingSuccess.date}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  if (bookingSuccess) {
    return (
      <main className="bg-[#0F1012] min-h-screen pt-32 px-6 flex flex-col items-center justify-center relative">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585747860715-2ba37e788b70?ixlib=rb-4.0.3&auto=format&fit=crop&w=2000&q=80')] opacity-5 grayscale bg-cover bg-center pointer-events-none"></div>
        
        <div className="max-w-2xl w-full bg-[#17181C] border border-[#EA580C]/50 p-12 text-center shadow-[0_30px_60px_rgba(0,0,0,0.8)] relative z-10">
          <Calendar className="w-16 h-16 text-[#EA580C] mx-auto mb-6" strokeWidth={1} />
          <h2 className="text-4xl md:text-5xl font-serif text-white mb-6 uppercase tracking-tight">Chair Secured</h2>
          
          <div className="text-gray-400 mb-10 tracking-wide space-y-4">
            <p className="text-sm md:text-base">
              The anvil is prepped. Your <strong className="text-white">{bookingSuccess.serviceName}</strong> with <strong className="text-white">{bookingSuccess.barberName}</strong> is locked in for <br/>
              <strong className="text-[#EA580C] text-xl block mt-4 font-serif">
                {new Date(`${bookingSuccess.date}T${bookingSuccess.startTime}:00`).toLocaleString([], { dateStyle: 'long', timeStyle: 'short' })}
              </strong>
            </p>
            <div className="mt-8 p-4 bg-[#0A0B0D] border border-white/5 inline-block w-full max-w-md mx-auto">
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Itinerary dispatched to:<br/>
                <strong className="text-white mt-2 block lowercase tracking-normal">{bookingSuccess.customerEmail}</strong>
              </p>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center pt-6 border-t border-white/5">
            <button onClick={generateAppleCalendarIcs} className="border border-white/20 text-white bg-transparent hover:bg-white hover:text-black px-8 py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2">
              Apple / Outlook (.ics)
            </button>
            <a href={generateGoogleCalendarLink()} target="_blank" rel="noreferrer" className="border border-[#EA580C] text-[#EA580C] bg-transparent hover:bg-[#EA580C] hover:text-white px-8 py-4 text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase transition-colors flex items-center justify-center gap-2">
              Google Calendar
            </a>
          </div>
        </div>
      </main>
    );
  }

  const baseDaySlots = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'];

  return (
    <main className="bg-[#0F1012] min-h-screen pt-32 pb-24 px-6 flex flex-col items-center relative">
      <div className="absolute top-[20%] left-1/2 -translate-x-1/2 text-[12rem] md:text-[20rem] font-serif font-black text-white/[0.015] pointer-events-none select-none whitespace-nowrap z-0">
        RESERVE
      </div>

      <div className="max-w-5xl w-full relative z-10">
        <div className="text-center mb-16">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-tighter mb-4">SECURE YOUR CHAIR</h1>
          <p className="text-gray-500 text-xs font-bold tracking-[0.1em] uppercase">Select your service, barber, and pick an open slot on the anvil.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#17181C] border border-white/5 p-6 md:p-12 shadow-2xl space-y-12">
          
          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
              <span className="text-[#EA580C] text-sm font-bold font-serif">01</span>
              <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Your Details</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="relative">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 block mb-2">Name*</label>
                <input required type="text" name="customerName" value={formData.customerName} onChange={handleChange} className="w-full bg-[#0A0B0D] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-[#EA580C] transition-colors" placeholder="John Doe" />
              </div>
              <div className="relative">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 block mb-2">Email*</label>
                <input required type="email" name="customerEmail" value={formData.customerEmail} onChange={handleChange} className="w-full bg-[#0A0B0D] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-[#EA580C] transition-colors" placeholder="john@example.com" />
              </div>
              <div className="relative">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 block mb-2">Phone*</label>
                <input required type="tel" name="customerPhone" value={formData.customerPhone} onChange={handleChange} className="w-full bg-[#0A0B0D] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-[#EA580C] transition-colors" placeholder="+27 82 555 0198" />
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
              <span className="text-[#EA580C] text-sm font-bold font-serif">02</span>
              <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Configure Treatment</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 block mb-2">Service*</label>
                <select required name="serviceId" value={formData.serviceId} onChange={handleChange} className="w-full bg-[#0A0B0D] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-[#EA580C] transition-colors cursor-pointer appearance-none">
                  <option value="" disabled>Select a grooming service</option>
                  {services.map(s => <option key={s.id} value={s.id}>{s.name} ({s.durationMinutes} mins)</option>)}
                </select>
              </div>

              <div>
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 block mb-2">Barber*</label>
                <select required name="barberId" value={formData.barberId} onChange={(e) => { handleChange(e); setFormData(prev => ({...prev, date: '', startTime: ''})) }} className="w-full bg-[#0A0B0D] border border-white/10 text-white p-4 text-sm focus:outline-none focus:border-[#EA580C] transition-colors cursor-pointer appearance-none">
                  <option value="" disabled>Select your preferred barber</option>
                  {barbers.map(b => <option key={b.id} value={b.id}>{b.name} ("{b.nickname}")</option>)}
                </select>
              </div>
            </div>
          </div>

          <div>
            <div className="flex items-center gap-4 mb-8 border-b border-white/5 pb-4">
              <span className="text-[#EA580C] text-sm font-bold font-serif">03</span>
              <h3 className="text-xs font-bold tracking-[0.2em] text-white uppercase">Select Date & Time</h3>
            </div>
            
            {(!formData.barberId || !formData.serviceId) && (
              <div className="bg-[#0A0B0D] border-l-4 border-amber-500 p-4 mb-6 inline-block">
                <p className="text-[10px] text-gray-400 uppercase tracking-widest">⚠️ Please select a Service and Barber to unlock scheduling.</p>
              </div>
            )}

            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8 items-start">
              <div className="bg-[#0A0B0D] border border-white/5 p-4">
                <label className="text-[10px] font-bold tracking-[0.15em] uppercase text-gray-500 block mb-4">Calendar</label>
                <CustomCalendar 
                  selectedDate={formData.date} 
                  onSelectDate={(newDate) => setFormData({ ...formData, date: newDate, startTime: '' })} 
                />
              </div>

              <div className="bg-[#0A0B0D] border border-white/5 p-6 h-full flex flex-col justify-between">
                <div>
                  <div className="flex justify-between items-center mb-8 border-b border-white/5 pb-4">
                    <span className="text-xs font-bold tracking-widest text-white uppercase">Available Slots</span>
                    <span className="text-[10px] text-[#EA580C] uppercase font-bold tracking-widest bg-[#EA580C]/10 px-3 py-1">
                      {formData.date ? formData.date : 'Awaiting Date'}
                    </span>
                  </div>

                  {!formData.barberId || !formData.serviceId || !formData.date ? (
                    <div className="text-center py-20 text-gray-600 text-xs tracking-widest uppercase border border-dashed border-gray-800">
                      Select parameters to view slots
                    </div>
                  ) : isLoadingSlots ? (
                    <div className="text-center py-20 text-[#EA580C] text-xs tracking-widest uppercase animate-pulse border border-dashed border-[#EA580C]/30">
                      Syncing with database...
                    </div>
                  ) : (
                    <div className="grid grid-cols-2 gap-4">
                      {baseDaySlots.map(time => {
                        const isAvailable = availableSlots.includes(time);
                        return (
                          <button
                            key={time}
                            type="button"
                            disabled={!isAvailable}
                            onClick={() => setFormData({ ...formData, startTime: time })}
                            className={`py-3 px-4 text-xs font-bold tracking-widest uppercase border transition-all flex items-center justify-between
                              ${!isAvailable 
                                ? 'border-red-900/20 text-red-900/50 bg-[#0F1012] cursor-not-allowed line-through' 
                                : formData.startTime === time 
                                  ? 'border-[#EA580C] bg-[#EA580C] text-white shadow-[0_0_15px_rgba(234,88,12,0.2)]' 
                                  : 'border-white/10 text-gray-400 hover:border-[#EA580C] hover:text-white bg-[#17181C]'
                              }`}
                          >
                            <span>{time}</span>
                            <span className="text-[9px] opacity-70">
                              {!isAvailable ? 'TAKEN' : 'OPEN'}
                            </span>
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>

                {formData.startTime && (
                  <div className="mt-8 pt-6 border-t border-white/5 text-center bg-[#17181C] p-4 border-l-2 border-l-[#EA580C] animate-[fadeIn_0.3s_ease-out]">
                    <span className="text-[10px] uppercase tracking-widest text-gray-500 block mb-1">Selected Target</span>
                    <span className="text-white font-serif text-lg">{formData.date} <span className="text-[#EA580C]">@</span> {formData.startTime}</span>
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="pt-10 border-t border-white/5 flex justify-end">
            <button 
              disabled={isSubmitting || !formData.startTime || !formData.barberId || !formData.serviceId} 
              type="submit" 
              className="border border-[#EA580C] bg-[#EA580C] text-white px-12 py-5 text-xs font-bold tracking-[0.2em] uppercase hover:bg-transparent hover:text-[#EA580C] transition-colors disabled:opacity-30 disabled:hover:bg-[#EA580C] disabled:hover:text-white w-full md:w-auto"
            >
              {isSubmitting ? 'Securing Chair...' : 'Confirm Reservation'}
            </button>
          </div>
        </form>
      </div>
    </main>
  );
};

const Barbers = () => {
  const barbersList = [
    { 
      id: 'b1', 
      name: 'Marcus', 
      nickname: 'The Architect', 
      specialty: 'Beard Architecture & Straight Razor', 
      bio: 'Master of the hot towel shave. If it involves a forged steel blade, Marcus is your guy.', 
      img: 'https://images.unsplash.com/photo-1503951914875-452162b0f3f1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 'b2', 
      name: 'Jaxson', 
      nickname: 'The Ghost', 
      specialty: 'Precision Skin Fades', 
      bio: 'Known across Berea for the sharpest gradients. He keeps the clippers running hot and the transitions seamless.', 
      img: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    },
    { 
      id: 'b3', 
      name: 'Elias', 
      nickname: 'The Captain', 
      specialty: 'Classic Scissor Cuts', 
      bio: 'A traditionalist at heart. You will always catch him commanding the floor in his Springbok jersey on match days.', 
      img: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80' 
    }
  ];

  return (
    <main className="bg-[#0F1012] min-h-screen pt-32 pb-24 px-6 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="text-center mb-20">
          <h1 className="text-5xl md:text-6xl font-serif text-white tracking-tighter mb-4">THE CREW</h1>
          <p className="text-[#EA580C] text-xs font-bold tracking-[0.2em] uppercase">Masters of the Anvil</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {barbersList.map(barber => (
            <div key={barber.id} className="bg-[#17181C] border border-white/5 group hover:border-[#EA580C]/50 transition-colors">
              <div className="w-full h-96 overflow-hidden relative">
                <div className="absolute inset-0 bg-[#EA580C]/10 group-hover:bg-transparent transition-colors z-10"></div>
                <img 
                  src={barber.img} 
                  alt={barber.name} 
                  className="w-full h-full object-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <div className="flex items-baseline justify-between mb-2">
                  <h3 className="text-3xl font-serif text-white">{barber.name}</h3>
                  <span className="text-[#EA580C] text-[10px] font-bold tracking-[0.1em] uppercase">"{barber.nickname}"</span>
                </div>
                <p className="text-white text-xs tracking-widest uppercase mb-4 pb-4 border-b border-white/10">
                  {barber.specialty}
                </p>
                <p className="text-gray-400 text-sm tracking-wide leading-relaxed">
                  {barber.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

// --- APP ROUTER ---

export default function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans selection:bg-[#EA580C] selection:text-white">
        
        {/* Navigation and Modal sit outside routes so they are always accessible */}
        <Navigation />
        <PromoModal />
        
        <div className="flex-grow flex flex-col">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/services" element={<Services />} />
            <Route path="/barbers" element={<Barbers />} />
            <Route path="/about" element={<About />} />
            <Route path="/book" element={<BookingEngine />} />
            <Route path="/terms" element={<Terms />} />
          </Routes>
        </div>

        <Footer />
      </div>
    </Router>
  );
}