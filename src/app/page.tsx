'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, ArrowRight, Calculator, MapPin, Clock, Shield
} from 'lucide-react';

export default function EpoxyBigHero() {
  const [mounted, setMounted] = useState(false);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden">
      
      {/* ═══ GIGA HERO ═══ */}
      <section className="relative h-screen flex flex-col justify-end pb-20">
        {/* Background Image - FULL SCREEN */}
        <div className="absolute inset-0">
          <img
            src="/images/epoxy-metallic-grey.jpg"
            alt="Plancher époxy premium"
            className="w-full h-full object-cover"
          />
          {/* Dark overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
        </div>

        {/* Content - BOTTOM LEFT */}
        <div className="relative z-10 max-w-7xl mx-auto px-6 w-full">
          <div className="max-w-3xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/20 mb-6">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
              <span className="text-sm font-medium">Experts en planchers époxy</span>
            </div>

            {/* BIG TITLE */}
            <h1 className="text-7xl md:text-9xl font-black leading-[0.85] tracking-tighter mb-6">
              <span className="block text-white">
                ZENICORP
              </span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-blue-400 to-purple-400">
                ÉPOXY
              </span>
            </h1>

            {/* Subtitle */}
            <p className="text-xl md:text-2xl text-white/70 mb-8 max-w-xl leading-relaxed">
              Installation de planchers métalliques haut de gamme. 
              <span className="text-cyan-400 font-semibold"> Garantie 10 ans.</span>
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-wrap gap-4 mb-12">
              <button 
                onClick={() => setShowQuote(true)}
                className="group flex items-center gap-3 px-10 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-lg rounded-full transition-all hover:scale-105 shadow-2xl shadow-cyan-500/50"
              >
                DEVIS GRATUIT
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </button>
              
              <a 
                href="tel:5817487017"
                className="flex items-center gap-3 px-8 py-5 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold text-lg rounded-full transition-all"
              >
                <Phone className="w-6 h-6" />
                581-748-7017
              </a>
            </div>

            {/* Trust Bar */}
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

        {/* Floating Elements */}
        <div className="absolute top-32 right-10 md:right-20 hidden md:block">
          <div className="p-6 bg-white/10 backdrop-blur-xl rounded-2xl border border-white/20 text-right">
            <p className="text-5xl font-black text-cyan-400">250+</p>
            <p className="text-white/60">Projets réalisés</p>
          </div>
        </div>

        <div className="absolute top-1/2 right-10 md:right-20 hidden md:block transform translate-y-20">
          <div className="p-6 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 backdrop-blur-xl rounded-2xl border border-cyan-500/30">
            <p className="text-4xl font-black text-white">100%</p>
            <p className="text-white/60">Satisfaction</p>
          </div>
        </div>
      </section>

      {/* ═══ QUICK ESTIMATOR BAR ═══ */}
      <section className="bg-gradient-to-r from-cyan-600 to-blue-700 py-8 px-6">
        <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <Calculator className="w-10 h-10 text-white" />
            <div>
              <h3 className="text-2xl font-bold">Prix instantané</h3>
              <p className="text-white/70">Calculez votre projet en 10 secondes</p>
            </div>
          </div>
          <button 
            onClick={() => setShowQuote(true)}
            className="px-8 py-4 bg-white text-cyan-700 font-bold rounded-full hover:scale-105 transition-transform shadow-xl"
          >
            Calculer maintenant
          </button>
        </div>
      </section>

      {/* ═══ BIG IMAGE SHOWCASE ═══ */}
      <section className="py-20 px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Big Image 1 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/epoxy-blue.jpg" 
                alt="Époxy bleu"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white">Midnight Blue</p>
                <p className="text-cyan-400">À partir de 35$/m²</p>
              </div>
            </div>

            {/* Big Image 2 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group">
              <img 
                src="/images/epoxy-application.jpg" 
                alt="Application époxy"
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-8 left-8">
                <p className="text-3xl font-black text-white">Copper Luxe</p>
                <p className="text-cyan-400">À partir de 45$/m²</p>
              </div>
            </div>

            {/* Big Image 3 - Full Width */}
            <div className="relative aspect-[21/9] rounded-3xl overflow-hidden group md:col-span-2">
              <img 
                src="/images/epoxy-floor-cleaning-and-maintenance.jpg" 
                alt="Entretien époxy"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 md:bottom-16 md:left-16">
                <p className="text-4xl md:text-6xl font-black text-white mb-2">Liquid Gold</p>
                <p className="text-xl text-cyan-400">Le must du premium</p>
              </div>
              <div className="absolute top-8 right-8 md:top-16 md:right-16">
                <span className="px-6 py-3 bg-cyan-500 text-black font-bold rounded-full text-lg">
                  POPULAIRE
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ═══ CTA SECTION ═══ */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900/50 to-blue-900/50" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-500/20 via-transparent to-transparent" />
        
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-black mb-6">
            PRÊT POUR VOTRE{' '}
            <span className="text-cyan-400">PLANCHER</span>?
          </h2>
          <p className="text-xl text-white/60 mb-10">
            Appelle maintenant pour une soumission gratuite
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
            <a 
              href="tel:5817487017"
              className="flex items-center gap-4 px-12 py-6 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-2xl rounded-full transition-all hover:scale-105 shadow-2xl shadow-cyan-500/50"
            >
              <Phone className="w-8 h-8" />
              581-748-7017
            </a>
          </div>

          <div className="mt-12 flex items-center justify-center gap-2 text-white/40">
            <Check className="w-5 h-5 text-green-400" />
            <span>Garantie 10 ans sur toutes nos installations</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-8 px-6 border-t border-white/10 bg-black">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <img src="/logo.png" alt="ZeniCorp" className="w-10 h-10 object-contain" />
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

      {/* ═══ QUOTE MODAL ═══ */}
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
              <h2 className="text-3xl font-black">Devis Rapide</h2>
              <button onClick={() => setShowQuote(false)} className="p-2 hover:bg-white/10 rounded-full">
                <span className="text-2xl">×</span>
              </button>
            </div>

            <form className="space-y-6">
              <div>
                <label className="block text-sm text-white/60 mb-2">Superficie (m²)</label>
                <input 
                  type="number" 
                  placeholder="Ex: 25"
                  className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
                />
              </div>
              
              <div>
                <label className="block text-sm text-white/60 mb-2">Type de finition</label>
                <select className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none">
                  <option value="">Choisir...</option>
                  <option value="chrome">Chrome Mirror (Base)</option>
                  <option value="blue">Midnight Blue (+35$/m²)</option>
                  <option value="copper">Copper Luxe (+45$/m²)</option>
                  <option value="gold">Liquid Gold (+55$/m²)</option>
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
              Ou appelle directement : <a href="tel:5817487017" className="text-cyan-400 font-bold">581-748-7017</a>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
