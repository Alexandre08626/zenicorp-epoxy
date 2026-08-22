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

    const [sqft, setSqft] = useState('');
    const [finishType, setFinishType] = useState<'flakes' | 'metallic'>('flakes');
    const pricePerSqft = finishType === 'flakes' ? 7.50 : 8.50;
    const estimatedTotal = sqft ? parseFloat(sqft) * pricePerSqft : 0;

    if (!mounted) return null;

    return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* HEADER - MOBILE FIX */}
      <header className="fixed top-0 left-0 right-0 z-50 px-2 sm:px-4 py-2 sm:py-3 backdrop-blur-xl bg-black/50 border-b border-white/10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img src="/logo.png" alt="ZeniCorp" className="w-7 h-7 sm:w-8 sm:h-8 object-contain flex-shrink-0" />
            <div className="leading-none">
              <div className="font-bold text-sm sm:text-base tracking-tight">ZENI<span className="text-cyan-400">CORP</span></div>
              <div className="text-[8px] sm:text-[9px] text-white/40 tracking-widest uppercase">Epoxy Pro</div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 sm:gap-2 md:gap-4">
            <button 
              onClick={() => setShowShop(true)}
              className="relative flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-white/10 border border-white/20 rounded-xl hover:bg-white/20 transition-colors"
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
              className="flex items-center gap-1 sm:gap-2 px-2 sm:px-3 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl text-xs sm:text-sm font-bold hover:scale-105 transition-transform"
            >
              <Phone className="w-4 h-4" />
              <span className="hidden md:inline">581-748-7017</span>
            </a>
          </div>
        </div>
      </header>

      {/* GIGA HERO */}
      <section className="relative h-screen flex flex-col justify-end pb-20">
        <div className="absolute inset-0">
          <img
            src="/images/epoxy-metallic-grey.jpg"
            alt="Plancher epoxy premium"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 w-full">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="text-sm font-medium">Experts en planchers epoxy</span>
            </div>

            <h1 className="text-6xl sm:text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
              <span className="block text-white">
                ZENICORP
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                EPOXY
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Installation de planchers metalliques haut de gamme. 
              <span className="text-cyan-400 font-semibold"> Garantie 10 ans.</span>
            </p>

            <div className="flex flex-wrap gap-3 sm:gap-4 mb-12">
              <button 
                onClick={() => setShowQuote(true)}
                className="group flex items-center gap-2 sm:gap-3 px-6 sm:px-10 py-4 sm:py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-base sm:text-lg rounded-full transition-all hover:scale-105 shadow-2xl shadow-cyan-500/50"
              >
                DEVIS GRATUIT
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <button 
                onClick={() => setShowShop(true)}
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base sm:text-lg rounded-full transition-all"
              >
                <Package className="w-5 h-5 sm:w-6 sm:h-6" />
                Boutique
              </button>

              <a 
                href="tel:5817487017"
                className="flex items-center gap-2 sm:gap-3 px-5 sm:px-8 py-4 sm:py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-base sm:text-lg rounded-full transition-all"
              >
                <Phone className="w-5 h-5 sm:w-6 sm:h-6" />
                <span className="sm:hidden">Appeler</span>
                <span className="hidden sm:inline">581-748-7017</span>
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-6 sm:gap-8 text-sm">
              <div className="flex items-center gap-2 text-white/60">
                <Shield className="w-5 h-5 text-cyan-400" />
                <span>Garantie 10 ans</span>
              </div>
              <div className="flex items-center gap-2 text-white/60">
                <MapPin className="w-5 h-5 text-cyan-400" />
                <span>Quebec & Environs</span>
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
            <p className="text-white/60">Projets realises</p>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 md:right-20 hidden md:block transform translate-y-20">
          <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-cyan-500/30">
            <p className="text-4xl font-black text-white">$7.50</p>
            <p className="text-white/60">A partir de /pied carre</p>
          </div>
        </div>
      </section>

      {/* CALCULATEUR DE DEVIS */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Calculateur de <span className="text-cyan-400">Devis</span></h2>
          <p className="text-white/60 text-center mb-12">Estimez le cout de votre projet en quelques secondes</p>
          
          <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl p-8 sm:p-12">
            {/* Type de finition */}
            <div className="mb-8">
              <p className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4">Type de finition</p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <button 
                  onClick={() => setFinishType('flakes')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${finishType === 'flakes' ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="font-bold text-xl mb-2">Flocons Decoratifs</div>
                  <div className="text-3xl font-black text-cyan-400">$7.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                  <p className="text-sm text-white/40 mt-2">Finition antiderapante avec flocons</p>
                </button>

                <button 
                  onClick={() => setFinishType('metallic')}
                  className={`p-6 rounded-2xl border-2 transition-all text-left ${finishType === 'metallic' ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-white/5 hover:border-white/20'}`}
                >
                  <div className="font-bold text-xl mb-2">Metallique</div>
                  <div className="text-3xl font-black text-cyan-400">$8.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                  <p className="text-sm text-white/40 mt-2">Finition miroir haut de gamme</p>
                </button>
              </div>
            </div>

            {/* Superficie */}
            <div className="mb-8">
              <label className="text-sm font-semibold text-white/60 uppercase tracking-wider mb-4 block">
                Superficie (pieds carres)
              </label>
              <input 
                type="number"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="Ex: 500"
                className="w-full px-6 py-5 bg-white/5 border border-white/20 rounded-2xl text-white text-2xl font-bold focus:border-cyan-500 focus:outline-none"
              />
            </div>

            {/* Total */}
            <div className="p-8 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/20 rounded-2xl mb-8">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-white/60 text-sm">Estimation totale</p>
                  <p className="text-5xl font-black text-white">${estimatedTotal.toFixed(2)}</p>
                </div>
                <div className="text-right">
                  <p className="text-white/60 text-sm">Prix au pied carre</p>
                  <p className="text-2xl font-bold text-cyan-400">${pricePerSqft.toFixed(2)}</p>
                </div>
              </div>
              <p className="text-white/40 text-sm mt-4">*Ce prix est une estimation. Contactez-nous pour un devis precis.</p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button 
                onClick={() => setShowQuote(true)}
                className="flex-1 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xl rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                DEMANDER UN DEVIS
              </button>
              <a 
                href="tel:5817487017"
                className="flex-1 py-5 bg-white/10 hover:bg-white/20 border border-white/20 text-white font-bold text-xl rounded-2xl transition-all flex items-center justify-center gap-3"
              >
                <Phone className="w-6 h-6" />
                581-748-7017
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* COULEURS METALLIQUES */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Nos <span className="text-cyan-400">Couleurs Metalliques</span></h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Choisissez parmi notre gamme de finitions metalliques haut de gamme. 
            Chaque couleur est realisee avec des pigments industriels pour un resultat eclatant.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {/* Couleur 1 - Chrome */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src="/images/epoxy-metallic-grey.jpg" alt="Chrome" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-center text-sm">Chrome Mirror</p>
              <p className="text-cyan-400 text-center text-xs">$7.50/pied carre</p>
            </div>

            {/* Couleur 2 - Blue */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src="/images/epoxy-blue.jpg" alt="Blue" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-center text-sm">Midnight Blue</p>
              <p className="text-cyan-400 text-center text-xs">$8.00/pied carre</p>
            </div>

            {/* Couleur 3 - Red/Burgundy */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src="/images/realisation-1.jpg" alt="Rouge" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-center text-sm">Ruby Red</p>
              <p className="text-cyan-400 text-center text-xs">$8.50/pied carre</p>
            </div>

            {/* Couleur 4 - Bleu profond */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src="/images/realisation-3.jpg" alt="Bleu Profond" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-center text-sm">Ocean Blue</p>
              <p className="text-cyan-400 text-center text-xs">$8.00/pied carre</p>
            </div>

            {/* Couleur 5 - Gold */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src="/images/epoxy-floor-cleaning-and-maintenance.jpg" alt="Gold" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-center text-sm">Liquid Gold</p>
              <p className="text-cyan-400 text-center text-xs">$12.00/pied carre</p>
            </div>

            {/* Couleur 6 - Metallique premium */}
            <div className="group cursor-pointer">
              <div className="aspect-square rounded-2xl overflow-hidden mb-3">
                <img src="/images/realisation-4.jpg" alt="Premium" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <p className="font-bold text-center text-sm">Platinum</p>
              <p className="text-cyan-400 text-center text-xs">$10.00/pied carre</p>
            </div>
          </div>
        </div>
      </section>

      {/* REALISATIONS - TOUTES LES PHOTOS */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Nos <span className="text-cyan-400">Realisations</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Photo 1 - Grande */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group sm:col-span-2">
              <img 
                src="/images/epoxy-metallic-grey.jpg" 
                alt="Chrome Mirror"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-3xl sm:text-4xl font-black text-white">Chrome Mirror</p>
                <p className="text-cyan-400 text-lg sm:text-xl">Notre best-seller</p>
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
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Midnight Blue</p>
                <p className="text-cyan-400">Elegance profonde</p>
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
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Application Pro</p>
                <p className="text-cyan-400">Travail de precision</p>
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
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Fini Impeccable</p>
                <p className="text-cyan-400">Facile a entretenir</p>
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
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Qualite Premium</p>
                <p className="text-cyan-400">Superieur a la concurrence</p>
              </div>
            </div>

            {/* Nouvelle Realisation 1 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/realisation-1.jpg" 
                alt="Realisation 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Plancher Residentiel</p>
                <p className="text-cyan-400">Finition metallique</p>
              </div>
            </div>

            {/* Nouvelle Realisation 2 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/realisation-2.jpg" 
                alt="Realisation 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Espace Commercial</p>
                <p className="text-cyan-400">Haute resistance</p>
              </div>
            </div>

            {/* Nouvelle Realisation 3 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/realisation-3.jpg" 
                alt="Realisation 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Bleu Profond</p>
                <p className="text-cyan-400">Design moderne</p>
              </div>
            </div>

            {/* Nouvelle Realisation 4 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/realisation-4.jpg" 
                alt="Realisation 4"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Job Austin</p>
                <p className="text-cyan-400">Metallique premium</p>
              </div>
            </div>

            {/* Nouvelle Realisation 5 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/realisation-5.jpg" 
                alt="Realisation 5"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Application Pro</p>
                <p className="text-cyan-400">Nettoyage facile</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* FLOCONS / FLAKES */}
      <section className="py-20 px-4 sm:px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-4">Options de <span className="text-cyan-400">Flocons</span></h2>
          <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">
            Personnalisez votre plancher avec nos melanges de flocons decoratifs. 
            Disponibles en plusieurs tailles et couleurs.
          </p>
          
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6">
            {/* Flake Option 1 */}
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <img 
                src="/images/flakes-options.jpg" 
                alt="Flocons option 1"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-black text-white">Flocons Mixtes</p>
                <p className="text-cyan-400">Options variées</p>
              </div>
            </div>

            {/* Flake Option 2 */}
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <img 
                src="/images/flakes-11.jpg" 
                alt="Flocons option 2"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-black text-white">Flocons 11</p>
                <p className="text-cyan-400">Tres discret</p>
              </div>
            </div>

            {/* Flake Option 3 */}
            <div className="relative aspect-square rounded-3xl overflow-hidden group">
              <img 
                src="/images/e4e-flakes.jpg" 
                alt="Flocons option 3"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <p className="text-2xl font-black text-white">E4E Flakes</p>
                <p className="text-cyan-400">Haute qualite</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BOUTIQUE MODAL */}
      {showShop && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => setShowShop(false)}
        >
          <div 
            className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-white/10 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-8">
              <div>
                <h2 className="text-2xl sm:text-3xl font-black">Boutique Pro</h2>
                <p className="text-white/60 text-sm sm:text-base">Finitions disponibles - $7.50 - $12/pied carre</p>
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

            {/* Produits */}
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/epoxy-metallic-grey.jpg" alt="Chrome" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Chrome Mirror</p>
                    <p className="text-sm text-white/60">Metallique</p>
                    <p className="text-cyan-400 font-bold">$8.50/pied carre</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'm1', name: 'Chrome Mirror', price: 8.50 })}
                  className="px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajouter</span>
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/epoxy-blue.jpg" alt="Blue" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Midnight Blue</p>
                    <p className="text-sm text-white/60">Metallique</p>
                    <p className="text-cyan-400 font-bold">$8.50/pied carre</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'm2', name: 'Midnight Blue', price: 8.50 })}
                  className="px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajouter</span>
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/epoxy-floor-cleaning-and-maintenance.jpg" alt="Gold" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Liquid Gold</p>
                    <p className="text-sm text-white/60">Metallique Premium</p>
                    <p className="text-cyan-400 font-bold">$12.00/pied carre</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'm3', name: 'Liquid Gold', price: 12.00 })}
                  className="px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajouter</span>
                </button>
              </div>
            </div>

            {/* Flocons */}
            <h3 className="text-lg font-bold mb-4 text-white/80 border-t border-white/10 pt-6">Options de Flocons</h3>
            <div className="space-y-4 mb-8">
              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/flakes-options.jpg" alt="Flocons Mixtes" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Flocons Mixtes</p>
                    <p className="text-sm text-white/60">Decoration multicolore</p>
                    <p className="text-cyan-400 font-bold">$7.50/pied carre</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'f1', name: 'Flocons Mixtes', price: 7.50 })}
                  className="px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajouter</span>
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/flakes-11.jpg" alt="Flocons 11" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">Flocons 11</p>
                    <p className="text-sm text-white/60">Tres discret</p>
                    <p className="text-cyan-400 font-bold">$7.50/pied carre</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'f2', name: 'Flocons 11', price: 7.50 })}
                  className="px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajouter</span>
                </button>
              </div>

              <div className="p-4 bg-white/5 rounded-xl border border-white/10 flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-lg flex items-center justify-center overflow-hidden flex-shrink-0">
                    <img src="/images/e4e-flakes.jpg" alt="E4E Flakes" className="w-full h-full object-cover" />
                  </div>
                  <div>
                    <p className="font-bold text-lg">E4E Flakes</p>
                    <p className="text-sm text-white/60">Haute qualite</p>
                    <p className="text-cyan-400 font-bold">$7.50/pied carre</p>
                  </div>
                </div>
                <button 
                  onClick={() => addToCart({ id: 'f3', name: 'E4E Flakes', price: 7.50 })}
                  className="px-4 sm:px-6 py-3 bg-cyan-600 hover:bg-cyan-500 rounded-lg font-bold flex items-center gap-2 text-sm"
                >
                  <Plus className="w-4 h-4" />
                  <span className="hidden sm:inline">Ajouter</span>
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
                        <span className="text-cyan-400">${item.price.toFixed(2)}/pied carre</span>
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
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowQuote(false)}>
          <div className="w-full max-w-lg bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-white/10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-black mb-6 text-center">Devis Rapide</h2>
            <form className="space-y-4">
              <input type="number" placeholder="Superficie (pieds carres)" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none" />
              <input type="tel" placeholder="Telephone" className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none" />
              <button 
                type="button"
                onClick={() => { alert('Demande envoyee ! On vous rappelle dans 24h.'); setShowQuote(false); }}
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
      <footer className="py-8 px-4 sm:px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <img src="/logo.png" alt="ZeniCorp" className="w-8 h-8 object-contain" />
            <span className="font-bold text-xl">ZENICORP EPOXY</span>
          </div>
          <p className="text-2xl font-black text-cyan-400 mb-2">581-748-7017</p>
          <p className="text-white/40">Garantie 10 ans - Prix: $7.50 - $12.00/pied carre</p>
        </div>
      </footer>
    </div>
  );
}
