'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, ArrowRight, Calculator, MapPin, Clock, Shield,
  ShoppingCart, X, Plus, Package
} from 'lucide-react';

export default function EpoxyBigHero() {
  const [mounted, setMounted] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => { setMounted(true); }, []);

  const addToCart = (item: any) => {
    setCart([...cart, item]);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ZeniCorp" className="w-10 h-10 object-contain" />
            <div>
              <span className="font-bold text-lg tracking-tight">ZENI</span>
              <span className="font-bold text-lg text-cyan-400">CORP</span>
              <span className="text-[10px] text-white/40 block tracking-widest uppercase">Époxy Pro</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <button 
              onClick={() => setShowShop(true)}
              className="relative flex items-center gap-2 px-4 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Package className="w-5 h-5" />
              <span className="hidden sm:inline">Boutique</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-cyan-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>

            <a 
              href="tel:5817487017"
              className="hidden md:flex items-center gap-2 text-sm text-white/60 hover:text-cyan-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">581-748-7017</span>
            </a>

            <button 
              onClick={() => setShowQuote(true)}
              className="flex items-center gap-2 px-5 py-2.5 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl font-medium text-sm"
            >
              <Calculator className="w-4 h-4" />
              <span className="hidden sm:inline">Devis</span>
            </button>
          </div>
        </div>
      </header>

      {/* ═══ GIGA HERO ═══ */}
      <section className="relative h-screen flex flex-col justify-end pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/epoxy-metallic-grey.jpg"
            alt="Plancher époxy premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Experts en planchers époxy</span>
            </div>

            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
              <span className="block text-white">
                ZENICORP
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                ÉPOXY
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Installation de planchers métalliques haut de gamme. 
              <span className="text-cyan-400 font-semibold"> Garantie 10 ans.</span>
            </p>

            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => setShowQuote(true)}
                className="group flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg rounded-full transition-all hover:scale-105 shadow-2xl shadow-cyan-500/50"
              >
                DEVIS GRATUIT
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setShowShop(true)}
                className="flex items-center gap-3 px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transition-all"
              >
                <Package className="w-6 h-6" />
                Boutique
              </button>

              <a 
                href="tel:5817487017"
                className="flex items-center gap-3 px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transition-all"
              >
                <Phone className="w-6 h-6" />
                581-748-7017
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Garantie 10 ans</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Québec & Environs</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <Clock className="w-5 h-5 text-cyan-400" />
                <span>Intervention 24-48h</span>
              </div>
            </div>
          </div>
        </div>

        <div className="absolute top-32 right-10 md:right-20 hidden md:block">
          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-right">
            <p className="text-5xl font-black text-cyan-400">250+</p>
            <p className="text-white/60">Projets réalisés</p>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 md:right-20 hidden md:block transform translate-y-20">
          <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-cyan-500/30">
            <p className="text-4xl font-black text-white">$7.50</p>
            <p className="text-white/60">À partir de /pied²</p>
          </div>
        </div>
      </section>

      {/* ═══ BOUTIQUE MODAL ═══ */}
      {showShop && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6"
          onClick={() => setShowShop(false)}
        >
          <div 
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-white/10 p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-3xl font-black">Boutique Pro</h2>
                <p className="text-white/60">50 finitions disponibles • $7.50 - $12/pied²</p>
              </div>
              <div className="flex items-center gap-4">
                {cart.length > 0 && (
                  <div className="px-4 py-2 bg-cyan-500/20 rounded-full border border-cyan-500/30">
                    <span className="font-bold text-cyan-400">{cart.length} items</span>
                  </div>
                )}
                <button onClick={() => setShowShop(false)} className="p-2 hover:bg-white/10 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Liste des produits (placeholder) */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-400 to-gray-600 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Chrome Mirror</p>
                    <p className="text-sm text-white/60">Métallique • Reflets miroir</p>
                    <p className="text-cyan-400 font-bold">$7.50/pied²</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'm1', name: 'Chrome Mirror', price: 7.50 })}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-800 to-blue-900 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">🎨</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Midnight Blue</p>
                    <p className="text-sm text-white/60">Métallique • Bleu profond</p>
                    <p className="text-cyan-400 font-bold">$8.00/pied²</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'm2', name: 'Midnight Blue', price: 8.00 })}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-yellow-600 to-yellow-700 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Flocons Blancs</p>
                    <p className="text-sm text-white/60">Texture • Antidérapant</p>
                    <p className="text-cyan-400 font-bold">$7.50/pied²</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'f1', name: 'Flocons Blancs', price: 7.50 })}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gradient-to-br from-gray-700 to-gray-800 rounded-lg flex items-center justify-center">
                    <span className="text-2xl">✨</span>
                  </div>
                  <div>
                    <p className="font-bold text-lg">Flocons Gris</p>
                    <p className="text-sm text-white/60">Texture • Industriel</p>
                    <p className="text-cyan-400 font-bold">$7.50/pied²</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'f2', name: 'Flocons Gris', price: 7.50 })}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>
            </div>

            <div className="border-t border-white/10 pt-6">
              <div className="flex items-center justify-between mb-4">
                <span className="text-xl font-bold">Panier</span>
                <span className="text-2xl font-black text-cyan-400">${cartTotal.toFixed(2)}</span>
              </div>
              
              {cart.length > 0 ? (
                <div className="space-y-2 mb-6">
                  {cart.map((item, idx) => (
                    <div key={idx} className="flex items-center justify-between p-3 bg-white/5 rounded-lg">
                      <span>{item.name}</span>
                      <div className="flex items-center gap-4">
                        <span className="text-cyan-400">${item.price.toFixed(2)}/p²</span>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 hover:text-red-300"
                        >
                          <X className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-white/40 mb-6">Panier vide</p>
              )}

              <button 
                onClick={() => {
                  setShowShop(false);
                  setShowQuote(true);
                }}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xl rounded-xl"
                disabled={cart.length === 0}
              >
                DEMANDER UN DEVIS
              </button>

              <p className="text-center text-white/40 text-sm mt-4">
                50 couleurs disponibles • Photos à venir
              </p>
            </div>
          </div>
        </div>
      )}

      {/* ═══ DEVIS MODAL ═══ */}
      {showQuote && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6"
          onClick={() => setShowQuote(false)}
        >
          <div 
            className="w-full max-w-lg bg-zinc-900 rounded-3xl p-8 border border-white/10"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <h2 className="text-2xl font-black">Devis Rapide</h2>
              <button onClick={() => setShowQuote(false)} className="p-2 hover:bg-white/10 rounded-xl">
                <span className="text-2xl">×</span>
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">Superficie (pieds²)</label>
                <input 
                  type="number" 
                  placeholder="Ex: 500"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/60 mb-2">Type de finition</label>
                <select className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none">
                  <option value="">Choisir...</option>
                  <option value="metal">Métallique ($7.50-$12/p²)</option>
                  <option value="flake">Flocons ($7.50-$9/p²)</option>
                </select>
              </div>

              <div>
                <label className="block text-sm text-white/60 mb-2">Téléphone</label>
                <input 
                  type="tel" 
                  placeholder="581-748-7017"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
                />
              </div>

              <button 
                type="button"
                onClick={() => {
                  alert('Demande envoyée ! On vous rappelle dans 24h.');
                  setShowQuote(false);
                }}
                className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xl rounded-xl transition-all"
              >
                RECEVOIR MON DEVIS
              </button>
            </form>

            <p className="text-center text-white/40 text-sm mt-6">
              Ou appelle directement: <a href="tel:5817487017" className="text-cyan-400 font-bold">581-748-7017</a>
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ZeniCorp" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl">ZENICORP</span>
          </div>
          <div className="flex items-center gap-6">
            <a href="tel:5817487017" className="text-2xl font-black text-cyan-400 hover:text-cyan-300">
              581-748-7017
            </a>
          </div>
          <p className="text-white/30">© 2024 - Garantie 10 ans</p>
        </div>
      </footer>
    </div>
  );
}
