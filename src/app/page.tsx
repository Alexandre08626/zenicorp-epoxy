'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Phone, Check, Gem, Sparkles, ShoppingCart, ArrowRight, Star, X,
  Calendar, Calculator, Ruler, CreditCard, Clock, MapPin, Shield,
  Package, Palette, ChevronRight, Play, Award, TrendingUp, Users
} from 'lucide-react';

/* ─── ANIMATED COUNTER ─── */
const CountUp = ({ end, suffix = '', duration = 2 }: { end: number; suffix?: string; duration?: number }) => {
  const [val, setVal] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        let start: number;
        const step = (t: number) => {
          if (!start) start = t;
          const p = Math.min((t - start) / (duration * 1000), 1);
          const easeOut = 1 - Math.pow(1 - p, 4);
          setVal(Math.floor(easeOut * end));
          if (p < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
        obs.disconnect();
      }
    }, { threshold: 0.5 });
    
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, [end, duration]);
  
  return <span ref={ref}>{val.toLocaleString()}{suffix}</span>;
};

/* ─── COLOR PALETTE ─── */
const metallicColors = [
  { id: 'chrome', name: 'Chrome Mirror', hex: '#C0C0C0', price: 0, img: '/images/epoxy-metallic-grey.jpg', desc: 'Reflets miroir parfaits - Notre best-seller' },
  { id: 'midnight', name: 'Midnight Blue', hex: '#1a237e', price: 35, img: '/images/epoxy-blue.jpg', desc: 'Bleu profond élégant' },
  { id: 'copper', name: 'Copper Luxe', hex: '#b87333', price: 45, img: '/images/epoxy-application.jpg', desc: 'Application professionnelle cuivrée' },
  { id: 'gold', name: 'Liquid Gold', hex: '#FFD700', price: 55, img: '/images/epoxy-floor-cleaning-and-maintenance.jpg', desc: 'Or lumineux premium' },
  { id: 'ruby', name: 'Ruby Red', hex: '#e74c3c', price: 55, img: '/images/epoxy-vs-polyurea.png', desc: 'Rouge intense éclatant' },
];

const flakeOptions = [
  { id: 'none', name: 'Lisse Premium', price: 0, desc: 'Fini miroir parfait' },
  { id: 'light', name: 'Texture Légère', price: 2, desc: 'Antidérapant discret' },
  { id: 'medium', name: 'Granite', price: 4, desc: 'Texture équilibrée' },
  { id: 'full', name: 'Full Flake', price: 6, desc: 'Maximum antidérapant' },
];

export default function EpoxyProUltra() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'hero' | 'colors' | 'calculator'>('hero');
  const [selectedColor, setSelectedColor] = useState(metallicColors[0]);
  const [selectedFlake, setSelectedFlake] = useState(flakeOptions[0]);
  const [surfaceArea, setSurfaceArea] = useState(25);
  const [showCalculator, setShowCalculator] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  // Mouse tracking for hero effect
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const calculatePrice = () => {
    const basePrice = 12; // $/sq ft base
    const colorPrice = selectedColor.price;
    const flakePrice = selectedFlake.price;
    const subtotal = (basePrice + colorPrice + flakePrice) * surfaceArea;
    const tax = subtotal * 0.14975;
    const total = subtotal + tax;
    const deposit = total * 0.3;
    return { basePrice, colorPrice, flakePrice, subtotal, tax, total, deposit };
  };

  const prices = calculatePrice();

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden font-sans selection:bg-cyan-500/30">
      
      {/* ═══ FLOATING HEADER ═══ */}
      <motion.header 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className="fixed top-0 left-0 right-0 z-50 px-6 py-4"
      >
        <div className="max-w-7xl mx-auto">
          <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-2xl px-6 py-3 flex items-center justify-between">
            <motion.div 
              className="flex items-center gap-3"
              whileHover={{ scale: 1.02 }}
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center shadow-lg shadow-cyan-500/25">
                <Gem className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">ZENI</span>
                <span className="font-bold text-lg bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">CORP</span>
                <span className="text-[10px] text-white/40 block tracking-widest uppercase">Époxy Pro</span>
              </div>
            </motion.div>
            
            <div className="hidden md:flex items-center gap-8">
              {['Accueil', 'Couleurs', 'Estimation'].map((item, i) => (
                <motion.button
                  key={item}
                  onClick={() => setActiveTab(i === 0 ? 'hero' : i === 1 ? 'colors' : 'calculator')}
                  className="text-sm text-white/60 hover:text-white transition-colors relative group"
                  whileHover={{ y: -2 }}
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-cyan-400 to-blue-500 group-hover:w-full transition-all duration-300" />
                </motion.button>
              ))}
            </div>

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowCalculator(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-sm shadow-lg shadow-cyan-500/25"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Devis Gratuit</span>
            </motion.button>

            <a 
              href="tel:5817487017" 
              className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">581-748-7017</span>
            </a>
          </div>
        </div>
      </motion.header>

      {/* ═══ HERO SECTION ═══ */}
      {activeTab === 'hero' && (
        <section ref={heroRef} className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
          {/* Dynamic Background */}
          <div className="absolute inset-0">
            <div 
              className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-black"
              style={{
                backgroundPosition: `${mousePosition.x * 100}% ${mousePosition.y * 100}%`,
              }}
            />
            
            {/* Animated Gradient Orbs */}
            <motion.div
              animate={{
                x: [0, 100, 0],
                y: [0, -50, 0],
              }}
              transition={{
                duration: 20,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/20 rounded-full blur-[150px]"
            />
            <motion.div
              animate={{
                x: [0, -100, 0],
                y: [0, 50, 0],
              }}
              transition={{
                duration: 25,
                repeat: Infinity,
                ease: "linear"
              }}
              className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/20 rounded-full blur-[150px]"
            />
            
            {/* Grid Pattern */}
            <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:100px_100px] [mask-image:radial-gradient(ellipse_at_center,black_50%,transparent_100%)]" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto px-6 py-20">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              {/* Left Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="space-y-8"
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-sm"
                >
                  <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                  <span className="text-sm text-white/60">Disponibilité immédiate</span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                  className="text-6xl md:text-8xl font-bold leading-[0.9] tracking-tight"
                >
                  <span className="block text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/60">
                    Planchers
                  </span>
                  <span className="block mt-2">
                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600">
                      d'Exception
                    </span>
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  className="text-xl text-white/40 max-w-lg leading-relaxed"
                >
                  Installation professionnelle de planchers époxy métalliques. 
                  Estimation en ligne et réservation instantanée.
                </motion.p>

                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.6 }}
                  className="flex flex-wrap gap-4"
                >
                  <motion.button
                    whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(6,182,212,0.4)" }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setShowCalculator(true)}
                    className="group flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl font-bold text-lg shadow-xl shadow-cyan-500/20"
                  >
                    Calculer mon projet
                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </motion.button>
                  
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={() => setActiveTab('colors')}
                    className="flex items-center gap-3 px-8 py-4 bg-white/5 border border-white/10 rounded-2xl font-medium hover:bg-white/10 transition-colors"
                  >
                    <Palette className="w-5 h-5" />
                    Voir les couleurs
                  </motion.button>
                </motion.div>

                {/* Trust Indicators */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 }}
                  className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10"
                >
                  {[
                    { icon: Award, label: 'Garantie 10 ans', value: 'Premium' },
                    { icon: TrendingUp, label: 'Projets', value: '250+' },
                    { icon: Users, label: 'Satisfaction', value: '99%' },
                  ].map((stat, i) => (
                    <div key={stat.label} className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                        <stat.icon className="w-5 h-5 text-cyan-400" />
                      </div>
                      <div>
                        <p className="text-sm font-bold">{stat.value}</p>
                        <p className="text-xs text-white/40">{stat.label}</p>
                      </div>
                    </div>
                  ))}
                </motion.div>
              </motion.div>

              {/* Right Visual */}
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.8, delay: 0.3 }}
                className="relative"
              >
                <div className="relative aspect-square max-w-[600px] mx-auto">
                  {/* Glow Effect */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/30 to-purple-500/30 rounded-[3rem] blur-3xl" />
                  
                  {/* Main Image Container */}
                  <motion.div
                    whileHover={{ scale: 1.02, rotateY: 5 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                    className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl shadow-cyan-500/10"
                    style={{
                      transform: `perspective(1000px) rotateY(${(mousePosition.x - 0.5) * 10}deg) rotateX(${(mousePosition.y - 0.5) * -10}deg)`,
                    }}
                  >
                    <img
                      src="/images/epoxy-metallic-grey.jpg"
                      alt="Plancher époxy premium"
                      className="w-full h-full object-cover"
                    />
                    
                    {/* Overlay Gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                    
                    {/* Floating Badge */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="absolute bottom-6 left-6 right-6 p-4 backdrop-blur-xl bg-white/10 rounded-2xl border border-white/20"
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="font-bold text-lg">Chrome Mirror</p>
                          <p className="text-sm text-white/60">Finition Premium</p>
                        </div>
                        <div className="flex -space-x-2">
                          {['cyan', 'blue', 'purple'].map((color, i) => (
                            <div key={i} className={`w-8 h-8 rounded-full bg-${color}-500 border-2 border-black`} />
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>

                  {/* Floating Elements */}
                  <motion.div
                    animate={{ y: [0, -10, 0] }}
                    transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                    className="absolute -top-4 -right-4 px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full text-sm font-bold shadow-lg"
                  >
                    100% Solide
                  </motion.div>
                  
                  <motion.div
                    animate={{ y: [0, 10, 0] }}
                    transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
                    className="absolute -bottom-4 -left-4 px-4 py-2 backdrop-blur-xl bg-white/10 border border-white/20 rounded-full text-sm font-medium"
                  >
                    ✨ Effet 3D garanti
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5 }}
            className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
          >
            <span className="text-xs text-white/30 uppercase tracking-widest">Explorer</span>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="w-6 h-10 border-2 border-white/20 rounded-full flex justify-center pt-2"
            >
              <motion.div className="w-1.5 h-1.5 bg-cyan-400 rounded-full" />
            </motion.div>
          </motion.div>
        </section>
      )}

      {/* ═══ CALCULATOR MODAL ═══ */}
      <AnimatePresence>
        {showCalculator && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
            onClick={() => setShowCalculator(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900/90 rounded-3xl border border-white/10 p-8"
            >
              <div className="flex items-center justify-between mb-8">
                <div>
                  <h2 className="text-3xl font-bold mb-1">Estimateur Pro</h2>
                  <p className="text-white/40">Configurez votre plancher en temps réel</p>
                </div>
                <button 
                  onClick={() => setShowCalculator(false)}
                  className="p-2 hover:bg-white/10 rounded-xl transition-colors"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>

              <div className="grid lg:grid-cols-3 gap-8">
                {/* Configuration */}
                <div className="lg:col-span-2 space-y-6">
                  {/* Surface */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <label className="flex items-center gap-2 text-sm text-white/60 mb-4">
                      <Ruler className="w-4 h-4" />
                      Surface (m²)
                    </label>
                    <div className="flex items-center gap-4 mb-4">
                      <input
                        type="range"
                        min="10"
                        max="200"
                        value={surfaceArea}
                        onChange={(e) => setSurfaceArea(Number(e.target.value))}
                        className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer accent-cyan-400"
                      />
                      <span className="text-3xl font-bold w-24 text-right">{surfaceArea}</span>
                    </div>
                    <div className="flex justify-between text-xs text-white/30">
                      <span>Garage simple (~20m²)</span>
                      <span>Commercial (~200m²)</span>
                    </div>
                  </div>

                  {/* Color Selection */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <label className="flex items-center gap-2 text-sm text-white/60 mb-4">
                      <Palette className="w-4 h-4" />
                      Couleur métallique
                    </label>
                    <div className="grid grid-cols-5 gap-3">
                      {metallicColors.map((color) => (
                        <motion.button
                          key={color.id}
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={() => setSelectedColor(color)}
                          className={`relative aspect-square rounded-xl overflow-hidden border-2 transition-all ${
                            selectedColor.id === color.id
                              ? 'border-cyan-400 ring-2 ring-cyan-400/50'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div 
                            className="absolute inset-0"
                            style={{ backgroundColor: color.hex }}
                          />
                          {selectedColor.id === color.id && (
                            <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                              <Check className="w-6 h-6 text-white drop-shadow-lg" />
                            </div>
                          )}
                        </motion.button>
                      ))}
                    </div>
                    <p className="mt-4 text-center font-medium">{selectedColor.name}</p>
                  </div>

                  {/* Flake Option */}
                  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
                    <label className="flex items-center gap-2 text-sm text-white/60 mb-4">
                      <Sparkles className="w-4 h-4" />
                      Texture
                    </label>
                    <div className="grid grid-cols-2 gap-3">
                      {flakeOptions.map((flake) => (
                        <motion.button
                          key={flake.id}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                          onClick={() => setSelectedFlake(flake)}
                          className={`p-4 rounded-xl border-2 text-left transition-all ${
                            selectedFlake.id === flake.id
                              ? 'border-cyan-400 bg-cyan-400/10'
                              : 'border-white/10 hover:border-white/30'
                          }`}
                        >
                          <div className="flex items-center justify-between mb-1">
                            <span className="font-medium">{flake.name}</span>
                            {selectedFlake.id === flake.id && (
                              <Check className="w-4 h-4 text-cyan-400" />
                            )}
                          </div>
                          <p className="text-xs text-white/40">{flake.desc}</p>
                          {flake.price > 0 && (
                            <p className="text-xs text-cyan-400 mt-1">+${flake.price}/m²</p>
                          )}
                        </motion.button>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Summary */}
                <div className="lg:sticky lg:top-0 h-fit">
                  <div className="p-6 rounded-3xl bg-gradient-to-b from-cyan-500/20 to-blue-600/10 border border-cyan-500/30">
                    <h3 className="text-xl font-bold mb-6">Votre devis</h3>
                    
                    <div className="space-y-3 mb-6 text-sm">
                      <div className="flex justify-between text-white/60">
                        <span>Base ({surfaceArea} m²)</span>
                        <span>${(12 * surfaceArea).toFixed(2)}</span>
                      </div>
                      {selectedColor.price > 0 && (
                        <div className="flex justify-between text-white/60">
                          <span>{selectedColor.name}</span>
                          <span>${(selectedColor.price * surfaceArea).toFixed(2)}</span>
                        </div>
                      )}
                      {selectedFlake.price > 0 && (
                        <div className="flex justify-between text-white/60">
                          <span>{selectedFlake.name}</span>
                          <span>${(selectedFlake.price * surfaceArea).toFixed(2)}</span>
                        </div>
                      )}
                      <div className="flex justify-between text-white/60">
                        <span>Taxes (14.975%)</span>
                        <span>${prices.tax.toFixed(2)}</span>
                      </div>
                      <div className="pt-3 border-t border-white/10">
                        <div className="flex justify-between items-center">
                          <span className="text-lg font-bold">Total</span>
                          <span className="text-3xl font-bold text-cyan-400">${prices.total.toFixed(0)}</span>
                        </div>
                      </div>
                    </div>

                    <div className="p-4 rounded-xl bg-gradient-to-r from-cyan-500/20 to-blue-500/20 border border-cyan-500/30 mb-6">
                      <div className="flex items-center justify-between">
                        <div>
                          <p className="text-xs text-white/60">Dépôt ZeniPay (30%)</p>
                          <p className="text-2xl font-bold text-cyan-400">${prices.deposit.toFixed(0)}</p>
                        </div>
                        <CreditCard className="w-8 h-8 text-cyan-400" />
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl shadow-lg shadow-cyan-500/25"
                    >
                      Réserver maintenant
                    </motion.button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-8 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center">
                <Gem className="w-4 h-4 text-white" />
              </div>
              <span className="font-bold">ZENICORP Époxy</span>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <a href="tel:5817487017" className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors">
                <Phone className="w-4 h-4" />
                <span className="font-bold">581-748-7017</span>
              </a>
              <span className="text-white/20">|</span>
              <span className="text-white/40">Garantie 10 ans</span>
            </div>
            <p className="text-xs text-white/20">© 2024 ZeniCorp. Tous droits réservés.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
