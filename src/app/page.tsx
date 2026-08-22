'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, ArrowRight, Calculator, MapPin, Clock, Shield,
  X, Plus, Package
} from 'lucide-react';

export default function EpoxyBigHero() {
  const [mounted, setMounted] = useState(false);
  const [showQuote, setShowQuote] = useState(false);
  const [showShop, setShowShop] = useState(false);
  const [cart, setCart] = useState<any[]>([]);

  useEffect(() => { setMounted(true); }, []);

  const addToCart = (item: any) => setCart([...cart, item]);
  const removeFromCart = (id: string) => setCart(cart.filter(item => item.id !== id));
  const cartTotal = cart.reduce((sum, item) => sum + item.price, 0);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 px-4 py-3 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ZeniCorp" className="w-8 h-8 object-contain flex-shrink-0" />
            <div className="leading-none">
              <div className="font-bold text-base tracking-tight">ZENI<span className="text-cyan-400">CORP</span></div>
              <div className="text-[9px] text-white/40 tracking-widest uppercase">Époxy Pro</div>
            </div>
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4">
            <button 
              onClick={() => setShowShop(true)}
              className="relative flex items-center gap-2 px-3 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
            >
              <Package className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Boutique</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-5 h-5 bg-cyan-500 rounded-full text-xs flex items-center justify-center font-bold">
                  {cart.length}
                </span>
              )}
            </button>

            <a 
              href="tel:5817487017"
              className="flex items-center gap-2 px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-sm font-bold hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">581-748-7017</span>
            </a>
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

        <div className="absolute top-1/3 right-10 md:right-20 hidden md:block">
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

      {/* ═══ GALLERY - TES 5 VRAIES PHOTOS ═══ */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Nos <span className="text-cyan-400">Réalisations</span></h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            {/* Photo 1 - Grande */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group md:col-span-2">
              <img 
                src="/images/epoxy-metallic-grey.jpg" 
                alt="Chrome Mirror"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-4xl font-black text-white">Chrome Mirror</p>
                <p className="text-cyan-400 text-xl">Notre best-seller</p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/epoxy-blue.jpg" 
                alt="Midnight Blue"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white">Midnight Blue</p>
                <p className="text-cyan-400">Élégance profonde</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/epoxy-application.jpg" 
                alt="Application"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white">Application Pro</p>
                <p className="text-cyan-400">Travail de précision</p>
              </div>
            </div>

            {/* Photo 4 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/epoxy-floor-cleaning-and-maintenance.jpg" 
                alt="Entretien"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white">Fini Impeccable</p>
                <p className="text-cyan-400">Facile à entretenir</p>
              </div>
            </div>

            {/* Photo 5 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/epoxy-vs-polyurea.png" 
                alt="Comparaison"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white">Qualité Premium</p>
                <p className="text-cyan-400">Supérieur à la concurrence</p>
              </div>
            </div>
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
                <p className="text-white/60">Finitions disponibles • $7.50 - $12/pied²</p>
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

            {/* Produits avec tes photos */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 bg-gray-700 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                    <img src="/images/epoxy-metallic-grey.jpg" alt="Chrome" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Chrome Mirror</p>
                    <p className="text-sm text-white/60">Métallique</p>
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
                  <div className="w-16 h-16 bg-blue-900 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                    <img src="/images/epoxy-blue.jpg" alt="Blue" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Midnight Blue</p>
                    <p className="text-sm text-white/60">Métallique</p>
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
                  <div className="w-16 h-16 bg-yellow-700 rounded-lg flex items-center justify-center text-2xl overflow-hidden">
                    <img src="/images/epoxy-floor-cleaning-and-maintenance.jpg" alt="Gold" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Liquid Gold</p>
                    <p className="text-sm text-white/60">Métallique Premium</p>
                    <p className="text-cyan-400 font-bold">$12.00/pied²</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'm3', name: 'Liquid Gold', price: 12.00 })}
                  className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2"
                >
                  <Plus className="w-4 h-4" />
                  Ajouter
                </button>
              </div>
            </div>

            {/* Panier */}
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
                        <button onClick={() => removeFromCart(item.id)} className="text-red-400 hover:text-red-300">
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
                disabled={cart.length === 0}
                className="w-full py-4 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-black text-xl rounded-xl"
              >
                DEMANDER UN DEVIS
              </button>
            </div>
          </div>
        </div>
      )}

      {/* DEVIS MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-6" onClick={() => setShowQuote(false)}>
          <div className="w-full max-w-lg bg-zinc-900 rounded-3xl p-8 border border-white/10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-black mb-6 text-center">Devis Rapide</h2>
            <form className="space-y-4">
              <input type="number" placeholder="Superficie (pieds²)" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none" />
              <input type="tel" placeholder="Téléphone" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none" />
              <button 
                type="button"
                onClick={() => { alert('Demande envoyée ! On vous rappelle dans 24h.'); setShowQuote(false); }}
                className="w-full py-5 bg-cyan-500 text-black font-black text-xl rounded-xl"
              >
                RECEVOIR MON DEVIS
              </button>
            </form>
            <p className="text-center text-white/40 text-sm mt-4">
              Ou appelle: <a href="tel:5817487017" className="text-cyan-400 font-bold">581-748-7017</a>
            </p>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.png" alt="ZeniCorp" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl">ZENICORP ÉPOXY</span>
          </div>
          <p className="text-2xl font-black text-cyan-400 mb-2">581-748-7017</p>
          <p className="text-white/40">Garantie 10 ans • Prix: $7.50 - $12.00/pied²</p>
        </div>
      </footer>
    </div>
  );
}
