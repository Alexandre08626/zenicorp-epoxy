'use client';

import { useState, useEffect, useRef } from 'react';
import {
  Phone, Check, Gem, Sparkles, Layers, ShoppingCart,
  ArrowRight, Star, X, ChevronRight, Calendar, Calculator,
  Paintbrush, Ruler, CreditCard, Clock, MapPin, Shield,
  Package, Zap, Palette, ChevronDown, CheckCircle2
} from 'lucide-react';

/* ─── Animated Counter ─── */
const CountUp = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => e.isIntersecting && animate(), { threshold: 0.3 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);
  const animate = () => {
    let start: number;
    const step = (t: number) => {
      if (!start) start = t;
      const p = Math.min((t - start) / 2000, 1);
      setVal(Math.floor((1 - Math.pow(1 - p, 3)) * end));
      if (p < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  };
  return <span ref={ref}>{val}{suffix}</span>;
};

/* ─── COLOR PALETTE ─── */
const metallicColors = [
  { id: 'silver', name: 'Silver Chrome', hex: '#C0C0C0', price: 0, img: '/images/epoxy-metallic-grey.jpg' },
  { id: 'gunmetal', name: 'Gunmetal Grey', hex: '#4a4a4a', price: 25, img: '/images/epoxy-metallic-grey.jpg' },
  { id: 'midnight', name: 'Midnight Blue', hex: '#1a237e', price: 35, img: '/images/epoxy-blue.jpg' },
  { id: 'copper', name: 'Copper Rose', hex: '#b87333', price: 45, img: '/images/epoxy-application.jpg' },
  { id: 'gold', name: 'Liquid Gold', hex: '#FFD700', price: 55, img: '/images/epoxy-floor-cleaning-and-maintenance.jpg' },
  { id: 'pearl', name: 'Pearl White', hex: '#f8f8ff', price: 40, img: '/images/epoxy-floor-cleaning-and-maintenance.jpg' },
  { id: 'charcoal', name: 'Charcoal Black', hex: '#1a1a1a', price: 30, img: '/images/epoxy-metallic-grey.jpg' },
  { id: 'emerald', name: 'Emerald Green', hex: '#2ecc71', price: 50, img: '/images/epoxy-application.jpg' },
  { id: 'sapphire', name: 'Sapphire Blue', hex: '#3498db', price: 45, img: '/images/epoxy-blue.jpg' },
  { id: 'ruby', name: 'Ruby Red', hex: '#e74c3c', price: 55, img: '/images/epoxy-vs-polyurea.png' },
  { id: 'bronze', name: 'Bronze Metallic', hex: '#cd7f32', price: 40, img: '/images/epoxy-application.jpg' },
  { id: 'titanium', name: 'Titanium Grey', hex: '#878787', price: 35, img: '/images/epoxy-metallic-grey.jpg' },
];

const flakesOptions = [
  { id: 'none', name: 'Sans flocons', price: 0 },
  { id: 'light', name: 'Léger (25%)', price: 49, coverage: 'Antidérapant discret' },
  { id: 'medium', name: 'Moyen (50%)', price: 89, coverage: 'Texture équilibrée' },
  { id: 'full', name: 'Complet (100%)', price: 149, coverage: 'Maximum antidérapant' },
];

/* ─── MAIN COMPONENT ─── */
export default function EpoxyUltra() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'shop' | 'estimator' | 'booking'>('shop');
  const [selectedColor, setSelectedColor] = useState(metallicColors[0]);
  const [selectedFlake, setSelectedFlake] = useState(flakesOptions[0]);
  const [surfaceArea, setSurfaceArea] = useState(20);
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [showPayment, setShowPayment] = useState(false);
  const [bookingDate, setBookingDate] = useState('');
  const [bookingTime, setBookingTime] = useState('');
  const [customerInfo, setCustomerInfo] = useState({ name: '', email: '', phone: '', address: '' });
  const [paymentStep, setPaymentStep] = useState<'info' | 'review' | 'payment'>('info');

  useEffect(() => { setMounted(true); }, []);

  /* Calculate price */
  const calculatePrice = () => {
    const basePrice = surfaceArea * 12; // $12/ft² base
    const colorPrice = selectedColor.price * surfaceArea;
    const flakePrice = selectedFlake.price;
    const subtotal = basePrice + colorPrice + flakePrice;
    const tax = subtotal * 0.14975; // Québec TPS/TVQ
    const total = subtotal + tax;
    const deposit = total * 0.3; // 30% deposit
    return { basePrice, colorPrice, flakePrice, subtotal, tax, total, deposit };
  };

  const prices = calculatePrice();

  const addToCart = () => {
    const item = {
      id: Date.now(),
      color: selectedColor,
      flake: selectedFlake,
      area: surfaceArea,
      prices: prices,
    };
    setCart([...cart, item]);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 3000);
  };

  const submitBooking = () => {
    setShowBooking(false);
    setShowPayment(true);
    setPaymentStep('review');
  };

  const processPayment = () => {
    setPaymentStep('payment');
    setTimeout(() => {
      alert('✅ Paiement confirmé ! Votre installation est réservée.');
      setShowPayment(false);
      setPaymentStep('info');
      setCart([]);
    }, 2000);
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden">
      
      {/* ═══ HEADER ═══ */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-[#0a0a0f]/80 backdrop-blur-xl border-b border-white/5">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg">ZENI</span>
                <span className="text-violet-400 font-bold">CORP</span>
                <span className="text-xs text-white/40 block">Époxy Pro</span>
              </div>
            </div>
            
            <nav className="hidden md:flex items-center gap-8">
              <button 
                onClick={() => setActiveTab('shop')}
                className={`text-sm font-medium transition-colors ${activeTab === 'shop' ? 'text-violet-400' : 'text-white/60 hover:text-white'}`}
              >
                Boutique
              </button>
              <button 
                onClick={() => setActiveTab('estimator')}
                className={`text-sm font-medium transition-colors ${activeTab === 'estimator' ? 'text-violet-400' : 'text-white/60 hover:text-white'}`}
              >
                Estimateur
              </button>
              <button 
                onClick={() => setActiveTab('booking')}
                className={`text-sm font-medium transition-colors ${activeTab === 'booking' ? 'text-violet-400' : 'text-white/60 hover:text-white'}`}
              >
                Rendez-vous
              </button>
            </nav>

            <div className="flex items-center gap-4">
              <button 
                onClick={() => setShowCart(true)}
                className="relative p-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors"
              >
                <ShoppingCart className="w-5 h-5" />
                {cart.length > 0 && (
                  <span className="absolute -top-1 -right-1 w-5 h-5 bg-violet-500 rounded-full text-xs flex items-center justify-center font-bold">
                    {cart.length}
                  </span>
                )}
              </button>
              <a href="tel:18009364267" className="hidden md:flex items-center gap-2 px-4 py-2 bg-violet-500/20 text-violet-300 rounded-xl text-sm font-medium hover:bg-violet-500/30 transition-colors">
                <Phone className="w-4 h-4" />
                1-800-ZENICORP
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* ═══ HERO ═══ */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-1/4 right-0 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
          <div className="absolute bottom-1/4 left-0 w-[400px] h-[400px] bg-fuchsia-500/10 rounded-full blur-[100px]" />
        </div>
        
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 mb-6">
              <Star className="w-4 h-4 text-violet-400 fill-violet-400" />
              <span className="text-sm text-violet-300">Nouveau : Estimateur en ligne</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Votre plancher époxy{' '}
              <span className="bg-gradient-to-r from-violet-400 via-fuchsia-400 to-pink-400 bg-clip-text text-transparent">
                en 3 clics
              </span>
            </h1>
            
            <p className="text-xl text-white/50 mb-8">
              Choisissez votre couleur, calculez votre surface, réservez votre installation en ligne.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <button 
                onClick={() => setActiveTab('estimator')}
                className="flex items-center gap-3 px-8 py-4 bg-violet-500 text-white font-bold rounded-2xl hover:bg-violet-600 transition-colors"
              >
                <Calculator className="w-5 h-5" />
                Calculer mon prix
              </button>
              <button 
                onClick={() => setActiveTab('shop')}
                className="flex items-center gap-3 px-8 py-4 bg-white/10 border border-white/20 text-white font-medium rounded-2xl hover:bg-white/20 transition-colors"
              >
                <Palette className="w-5 h-5" />
                Voir les couleurs
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { val: 12, suf: '+', lab: 'Couleurs' },
              { val: 250, suf: '+', lab: 'Projets' },
              { val: 5, suf: ' ans', lab: 'Garantie' },
              { val: 30, suf: '%', lab: 'Dépôt seulement' },
            ].map(s => (
              <div key={s.lab} className="text-center p-6 rounded-2xl bg-white/5 border border-white/10">
                <p className="text-3xl font-bold text-white mb-1"><CountUp end={s.val} suffix={s.suf} /></p>
                <p className="text-sm text-white/40">{s.lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ COLOR SHOP ═══ */}
      {activeTab === 'shop' && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-16">
              <h2 className="text-4xl font-bold mb-4">Nos couleurs métalliques</h2>
              <p className="text-white/50">12 finitions premium disponibles</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12">
              {/* Color Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
                {metallicColors.map((color) => (
                  <button
                    key={color.id}
                    onClick={() => setSelectedColor(color)}
                    className={`group relative aspect-square rounded-2xl overflow-hidden border-2 transition-all ${
                      selectedColor.id === color.id 
                        ? 'border-violet-500 ring-4 ring-violet-500/20' 
                        : 'border-white/10 hover:border-white/30'
                    }`}
                  >
                    <img src={color.img} alt={color.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <div 
                          className="w-6 h-6 rounded-full border-2 border-white/50 shadow-lg"
                          style={{ backgroundColor: color.hex }}
                        />
                        <span className="text-sm font-medium text-white">{color.name}</span>
                      </div>
                      {color.price > 0 && (
                        <span className="text-xs text-violet-300">+${color.price}/m²</span>
                      )}
                    </div>
                    {selectedColor.id === color.id && (
                      <div className="absolute top-3 right-3 w-8 h-8 bg-violet-500 rounded-full flex items-center justify-center">
                        <Check className="w-5 h-5 text-white" />
                      </div>
                    )}
                  </button>
                ))}
              </div>

              {/* Preview Card */}
              <div className="lg:sticky lg:top-32 lg:h-fit">
                <div className="rounded-3xl overflow-hidden bg-white/5 border border-white/10 mb-6">
                  <img 
                    src={selectedColor.img} 
                    alt={selectedColor.name}
                    className="w-full h-64 object-cover"
                  />
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <h3 className="text-2xl font-bold">{selectedColor.name}</h3>
                        <p className="text-white/50">Finition métallique premium</p>
                      </div>
                      <div 
                        className="w-16 h-16 rounded-2xl border-4 border-white/20 shadow-2xl"
                        style={{ backgroundColor: selectedColor.hex }}
                      />
                    </div>
                    <div className="flex items-center gap-2 text-violet-400 mb-6">
                      <Sparkles className="w-5 h-5" />
                      <span className="text-sm">Effet 3D • Réflets miroir • UV stable</span>
                    </div>
                    <button 
                      onClick={() => setActiveTab('estimator')}
                      className="w-full py-4 bg-violet-500 text-white font-bold rounded-xl hover:bg-violet-600 transition-colors"
                    >
                      Calculer mon projet
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ ESTIMATOR ═══ */}
      {activeTab === 'estimator' && (
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4">Estimateur en ligne</h2>
              <p className="text-white/50">Configurez votre plancher et obtenez votre prix instantanément</p>
            </div>

            <div className="grid lg:grid-cols-3 gap-8">
              {/* Configuration */}
              <div className="lg:col-span-2 space-y-8">
                {/* Surface */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Ruler className="w-6 h-6 text-violet-400" />
                    <h3 className="text-xl font-bold">Surface à couvrir</h3>
                  </div>
                  <div className="mb-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-white/60">Superficie</span>
                      <span className="text-3xl font-bold">{surfaceArea} <span className="text-lg text-white/40">m²</span></span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="200"
                      value={surfaceArea}
                      onChange={(e) => setSurfaceArea(Number(e.target.value))}
                      className="w-full h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-6 [&::-webkit-slider-thumb]:h-6 [&::-webkit-slider-thumb]:bg-violet-500 [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:appearance-none"
                    />
                    <div className="flex justify-between text-xs text-white/30 mt-2">
                      <span>10 m²</span>
                      <span>200 m²</span>
                    </div>
                  </div>
                  <p className="text-sm text-white/40">Pour un garage standard : 20-30 m²</p>
                </div>

                {/* Color Selection */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Palette className="w-6 h-6 text-violet-400" />
                    <h3 className="text-xl font-bold">Couleur métallique</h3>
                  </div>
                  <div className="grid grid-cols-4 sm:grid-cols-6 gap-3">
                    {metallicColors.map((color) => (
                      <button
                        key={color.id}
                        onClick={() => setSelectedColor(color)}
                        className={`group relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                          selectedColor.id === color.id 
                            ? 'border-violet-500 ring-2 ring-violet-500/30' 
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div 
                          className="absolute inset-0"
                          style={{ backgroundColor: color.hex }}
                        />
                        {selectedColor.id === color.id && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <Check className="w-6 h-6 text-white drop-shadow-lg" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                  <p className="mt-4 text-center font-medium">{selectedColor.name}</p>
                </div>

                {/* Flakes */}
                <div className="p-8 rounded-3xl bg-white/5 border border-white/10">
                  <div className="flex items-center gap-3 mb-6">
                    <Sparkles className="w-6 h-6 text-violet-400" />
                    <h3 className="text-xl font-bold">Flocons décoratifs</h3>
                  </div>
                  <div className="grid sm:grid-cols-2 gap-4">
                    {flakesOptions.map((flake) => (
                      <button
                        key={flake.id}
                        onClick={() => setSelectedFlake(flake)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedFlake.id === flake.id
                            ? 'border-violet-500 bg-violet-500/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <span className="font-medium">{flake.name}</span>
                          {selectedFlake.id === flake.id && <Check className="w-5 h-5 text-violet-400" />}
                        </div>
                        {flake.price > 0 && (
                          <p className="text-sm text-violet-300">+${flake.price}</p>
                        )}
                        {flake.coverage && (
                          <p className="text-xs text-white/40 mt-1">{flake.coverage}</p>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* Summary */}
              <div className="lg:sticky lg:top-32 h-fit">
                <div className="p-8 rounded-3xl bg-gradient-to-b from-violet-500/20 to-fuchsia-500/10 border border-violet-500/30">
                  <h3 className="text-xl font-bold mb-6">Votre devis</h3>
                  
                  <div className="space-y-4 mb-6">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Base ({surfaceArea} m²)</span>
                      <span>${prices.basePrice.toFixed(2)}</span>
                    </div>
                    {prices.colorPrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">{selectedColor.name}</span>
                        <span>${prices.colorPrice.toFixed(2)}</span>
                      </div>
                    )}
                    {prices.flakePrice > 0 && (
                      <div className="flex justify-between text-sm">
                        <span className="text-white/60">{selectedFlake.name}</span>
                        <span>${prices.flakePrice.toFixed(2)}</span>
                      </div>
                    )}
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Taxes (14.975%)</span>
                      <span>${prices.tax.toFixed(2)}</span>
                    </div>
                    <div className="pt-4 border-t border-white/10">
                      <div className="flex justify-between items-center">
                        <span className="text-lg font-bold">Total</span>
                        <span className="text-3xl font-bold text-violet-400">${prices.total.toFixed(2)}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-violet-500/20 border border-violet-500/30 mb-6">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="text-sm text-white/60">Dépôt ZeniPay (30%)</p>
                        <p className="text-2xl font-bold">${prices.deposit.toFixed(2)}</p>
                      </div>
                      <div className="w-12 h-12 bg-violet-500 rounded-xl flex items-center justify-center">
                        <CreditCard className="w-6 h-6 text-white" />
                      </div>
                    </div>
                  </div>

                  <button 
                    onClick={() => {
                      addToCart();
                      setShowBooking(true);
                    }}
                    className="w-full py-4 bg-violet-500 text-white font-bold rounded-xl hover:bg-violet-600 transition-colors mb-3"
                  >
                    Réserver maintenant
                  </button>
                  <p className="text-center text-xs text-white/40">Installation garantie sous 14 jours</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* ═══ BOOKING MODAL ═══ */}
      {showBooking && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-[#0f0f14] rounded-3xl border border-white/10 p-8">
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-bold">Réserver votre installation</h2>
              <button onClick={() => setShowBooking(false)} className="p-2 hover:bg-white/10 rounded-xl">
                <X className="w-6 h-6" />
              </button>
            </div>

            <div className="space-y-6">
              {/* Date Selection */}
              <div>
                <label className="flex items-center gap-2 text-sm text-white/60 mb-3">
                  <Calendar className="w-4 h-4" />
                  Date souhaitée
                </label>
                <input
                  type="date"
                  value={bookingDate}
                  onChange={(e) => setBookingDate(e.target.value)}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:outline-none"
                />
              </div>

              {/* Time Slots */}
              <div>
                <label className="flex items-center gap-2 text-sm text-white/60 mb-3">
                  <Clock className="w-4 h-4" />
                  Créneau horaire
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {['08:00 - 12:00', '13:00 - 17:00', 'Sur mesure'].map((time) => (
                    <button
                      key={time}
                      onClick={() => setBookingTime(time)}
                      className={`p-3 rounded-xl border-2 text-sm font-medium transition-all ${
                        bookingTime === time
                          ? 'border-violet-500 bg-violet-500/10 text-violet-300'
                          : 'border-white/10 hover:border-white/30'
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Info */}
              <div className="space-y-4">
                <label className="flex items-center gap-2 text-sm text-white/60">
                  <MapPin className="w-4 h-4" />
                  Vos informations
                </label>
                <input
                  type="text"
                  placeholder="Nom complet"
                  value={customerInfo.name}
                  onChange={(e) => setCustomerInfo({...customerInfo, name: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Courriel"
                  value={customerInfo.email}
                  onChange={(e) => setCustomerInfo({...customerInfo, email: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:outline-none"
                />
                <input
                  type="tel"
                  placeholder="Téléphone"
                  value={customerInfo.phone}
                  onChange={(e) => setCustomerInfo({...customerInfo, phone: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Adresse complète"
                  value={customerInfo.address}
                  onChange={(e) => setCustomerInfo({...customerInfo, address: e.target.value})}
                  className="w-full px-4 py-3 bg-white/5 border border-white/10 rounded-xl text-white focus:border-violet-500 focus:outline-none"
                />
              </div>

              <button 
                onClick={submitBooking}
                disabled={!bookingDate || !bookingTime || !customerInfo.name || !customerInfo.email}
                className="w-full py-4 bg-violet-500 text-white font-bold rounded-xl hover:bg-violet-600 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                Continuer vers le paiement
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══ PAYMENT MODAL ═══ */}
      {showPayment && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6">
          <div className="w-full max-w-lg bg-[#0f0f14] rounded-3xl border border-white/10 p-8">
            {paymentStep === 'review' && (
              <>
                <div className="flex items-center justify-between mb-8">
                  <h2 className="text-2xl font-bold">Confirmation</h2>
                  <button onClick={() => setShowPayment(false)} className="p-2 hover:bg-white/10 rounded-xl">
                    <X className="w-6 h-6" />
                  </button>
                </div>

                <div className="p-6 rounded-2xl bg-white/5 border border-white/10 mb-6">
                  <div className="flex items-center gap-4 mb-4">
                    <div 
                      className="w-16 h-16 rounded-xl border-2 border-white/20"
                      style={{ backgroundColor: selectedColor.hex }}
                    />
                    <div>
                      <h3 className="font-bold">{selectedColor.name}</h3>
                      <p className="text-sm text-white/50">{surfaceArea} m² • {selectedFlake.name}</p>
                    </div>
                  </div>
                  <div className="border-t border-white/10 pt-4 space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Sous-total</span>
                      <span>${prices.subtotal.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-white/60">Taxes</span>
                      <span>${prices.tax.toFixed(2)}</span>
                    </div>
                    <div className="flex justify-between text-lg font-bold pt-2 border-t border-white/10">
                      <span>Dépôt (30%)</span>
                      <span className="text-violet-400">${prices.deposit.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 p-4 rounded-xl bg-emerald-500/10 border border-emerald-500/20 mb-6">
                  <Shield className="w-6 h-6 text-emerald-400" />
                  <div>
                    <p className="font-medium text-emerald-300">Garantie 5 ans incluse</p>
                    <p className="text-sm text-emerald-400/60">Satisfaction garantie ou remboursée</p>
                  </div>
                </div>

                <button 
                  onClick={() => setPaymentStep('payment')}
                  className="w-full py-4 bg-violet-500 text-white font-bold rounded-xl hover:bg-violet-600 transition-colors"
                >
                  Payer avec ZeniPay
                </button>
              </>
            )}

            {paymentStep === 'payment' && (
              <div className="text-center py-12">
                <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-violet-500/20 flex items-center justify-center">
                  <CreditCard className="w-10 h-10 text-violet-400" />
                </div>
                <h2 className="text-2xl font-bold mb-2">Traitement du paiement...</h2>
                <p className="text-white/50">Ne quittez pas cette page</p>
                <div className="mt-8 w-full h-2 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full bg-violet-500 animate-[loading_2s_ease-in-out]" />
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold">ZENICORP Époxy</span>
            </div>
            <div className="flex items-center gap-8 text-sm text-white/40">
              <a href="tel:18009364267" className="hover:text-white transition-colors">1-800-ZENICORP</a>
              <span>|</span>
              <span>info@zenicorp.ca</span>
            </div>
            <p className="text-sm text-white/20">© 2024 ZeniCorp. Tous droits réservés.</p>
          </div>
        </div>
      </footer>

      <style jsx global>{`
        @keyframes loading {
          0% { width: 0%; }
          50% { width: 70%; }
          100% { width: 100%; }
        }
      `}</style>
    </div>
  );
}
