'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, Gem, Sparkles, ShoppingCart, ArrowRight, Star, X,
  Calculator, Ruler, CreditCard, Award, Users, TrendingUp
} from 'lucide-react';

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

export default function EpoxyPro() {
  const [mounted, setMounted] = useState(false);
  const [showCalculator, setShowCalculator] = useState(false);
  const [selectedColor, setSelectedColor] = useState(metallicColors[0]);
  const [selectedFlake, setSelectedFlake] = useState(flakeOptions[0]);
  const [surfaceArea, setSurfaceArea] = useState(25);

  useEffect(() => { setMounted(true); }, []);

  const calculatePrice = () => {
    const basePrice = 12;
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
    <div className="min-h-screen bg-black text-white overflow-x-hidden selection:bg-cyan-500/30">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-400 via-blue-500 to-purple-600 flex items-center justify-center">
              <Gem className="w-5 h-5 text-white" />
            </div>
            <div>
              <span className="font-bold text-lg tracking-tight">ZENI</span>
              <span className="font-bold text-lg text-cyan-400">CORP</span>
              <span className="text-[10px] text-white/40 block tracking-widest uppercase">Époxy Pro</span>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <a 
              href="tel:5817487017" 
              className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">581-748-7017</span>
            </a>
            <button 
              onClick={() => setShowCalculator(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-sm"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Devis Gratuit</span>
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center justify-center pt-32 pb-20 px-6 overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-purple-900/20 to-black" />
        <div className="absolute top-1/4 left-1/4 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-[150px]" />
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-purple-500/10 rounded-full blur-[150px]" />
        
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10">
                <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
                <span className="text-sm text-white/60">Disponibilité immédiate</span>
              </div>

              <h1 className="text-6xl md:text-7xl font-bold leading-[0.9] tracking-tight">
                <span className="block text-white">Planchers</span>
                <span className="block mt-2 bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 bg-clip-text text-transparent">
                  d'Exception
                </span>
              </h1>

              <p className="text-xl text-white/40 max-w-lg leading-relaxed">
                Installation professionnelle de planchers époxy métalliques. 
                Estimation en ligne et réservation instantanée.
              </p>

              <div className="flex flex-wrap gap-4">
                <button 
                  onClick={() => setShowCalculator(true)}
                  className="flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-2xl hover:shadow-lg hover:shadow-cyan-500/25 transition-all"
                >
                  Calculer mon projet
                  <ArrowRight className="w-5 h-5" />
                </button>
              </div>

              {/* Trust Indicators */}
              <div className="flex flex-wrap items-center gap-8 pt-8 border-t border-white/10">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Award className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">Premium</p>
                    <p className="text-xs text-white/40">Garantie 10 ans</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <TrendingUp className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">250+</p>
                    <p className="text-xs text-white/40">Projets réalisés</p>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center">
                    <Users className="w-5 h-5 text-cyan-400" />
                  </div>
                  <div>
                    <p className="text-sm font-bold">99%</p>
                    <p className="text-xs text-white/40">Satisfaction</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              <div className="relative aspect-square max-w-[500px] mx-auto">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-[3rem] blur-3xl" />
                <div className="relative rounded-[2.5rem] overflow-hidden border border-white/20 shadow-2xl">
                  <img
                    src="/images/epoxy-metallic-grey.jpg"
                    alt="Plancher époxy premium"
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-bold text-lg">Chrome Mirror</p>
                        <p className="text-sm text-white/60">Finition Premium</p>
                      </div>
                      <div className="flex -space-x-2">
                        <div className="w-8 h-8 rounded-full bg-cyan-500 border-2 border-black" />
                        <div className="w-8 h-8 rounded-full bg-blue-500 border-2 border-black" />
                        <div className="w-8 h-8 rounded-full bg-purple-500 border-2 border-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* COLOR SHOWCASE */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Nos couleurs métalliques</h2>
            <p className="text-white/50">5 finitions premium disponibles</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-6">
            {metallicColors.map((color) => (
              <button
                key={color.id}
                onClick={() => setSelectedColor(color)}
                className={`group relative aspect-[3/4] rounded-2xl overflow-hidden border-2 transition-all ${
                  selectedColor.id === color.id 
                    ? 'border-cyan-400 ring-4 ring-cyan-400/20' 
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
                    <span className="font-medium text-white">{color.name}</span>
                  </div>
                  {color.price > 0 && (
                    <span className="text-xs text-cyan-300">+${color.price}/m²</span>
                  )}
                </div>
                {selectedColor.id === color.id && (
                  <div className="absolute top-3 right-3 w-8 h-8 bg-cyan-500 rounded-full flex items-center justify-center">
                    <Check className="w-5 h-5 text-white" />
                  </div>
                )}
              </button>
            ))}
          </div>

          {/* Selected Color Preview */}
          <div className="mt-12 p-8 rounded-3xl bg-white/5 border border-white/10">
            <div className="flex flex-col md:flex-row items-center gap-8">
              <img 
                src={selectedColor.img} 
                alt={selectedColor.name}
                className="w-full md:w-1/3 h-48 object-cover rounded-2xl"
              />
              <div className="flex-1 text-center md:text-left">
                <h3 className="text-3xl font-bold mb-2">{selectedColor.name}</h3>
                <p className="text-white/60 mb-4">{selectedColor.desc}</p>
                <div className="flex items-center gap-2 text-cyan-400 mb-6 justify-center md:justify-start">
                  <Sparkles className="w-5 h-5" />
                  <span>Effet 3D • Réflets miroir • UV stable</span>
                </div>
                <button 
                  onClick={() => setShowCalculator(true)}
                  className="px-8 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all"
                >
                  Calculer avec cette couleur
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CALCULATOR MODAL */}
      {showCalculator && (
        <div 
          className="fixed inset-0 z-50 bg-black/90 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setShowCalculator(false)}
        >
          <div 
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-slate-900 rounded-3xl border border-white/10 p-8"
            onClick={(e) => e.stopPropagation()}
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
                      className="flex-1 h-2 bg-white/10 rounded-full appearance-none cursor-pointer [&::-webkit-slider-thumb]:w-4 [&::-webkit-slider-thumb]:h-4 [&::-webkit-slider-thumb]:bg-cyan-400 [&::-webkit-slider-thumb]:rounded-full"
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
                    <Star className="w-4 h-4" />
                    Couleur métallique
                  </label>
                  <div className="grid grid-cols-5 gap-3">
                    {metallicColors.map((color) => (
                      <button
                        key={color.id}
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
                            <Check className="w-6 h-6 text-white" />
                          </div>
                        )}
                      </button>
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
                      <button
                        key={flake.id}
                        onClick={() => setSelectedFlake(flake)}
                        className={`p-4 rounded-xl border-2 text-left transition-all ${
                          selectedFlake.id === flake.id
                            ? 'border-cyan-400 bg-cyan-400/10'
                            : 'border-white/10 hover:border-white/30'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-medium">{flake.name}</span>
                          {selectedFlake.id === flake.id && <Check className="w-4 h-4 text-cyan-400" />}
                        </div>
                        <p className="text-xs text-white/40">{flake.desc}</p>
                        {flake.price > 0 && (
                          <p className="text-xs text-cyan-400 mt-1">+${flake.price}/m²</p>
                        )}
                      </button>
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

                  <button className="w-full py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white font-bold rounded-xl hover:shadow-lg transition-all">
                    Réserver maintenant
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
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
