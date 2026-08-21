'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Shield, Clock, Award, Phone, CheckCircle2, Home, Building2, Factory,
  Star, Droplets, Sparkles, ShoppingCart, ArrowRight, Calculator,
  Palette, Gem, Layers, Package, Paintbrush, Check
} from 'lucide-react';

const Counter = ({ end, suffix = '' }: { end: number; suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLSpanElement>(null);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) setIsVisible(true); }, { threshold: 0.1 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);
  useEffect(() => {
    if (!isVisible) return;
    let start: number;
    const animate = (now: number) => {
      if (!start) start = now;
      const p = Math.min((now - start) / 2000, 1);
      setCount(Math.floor((1 - Math.pow(1 - p, 4)) * end));
      if (p < 1) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
  }, [isVisible, end]);
  return <span ref={ref}>{count}{suffix}</span>;
};

import { useRef } from 'react';

// ============ VRAIES PHOTOS ÉPOXY ============
const epoxyPhotos = {
  metallic: [
    { url: 'https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Gris Métallique Luxe', desc: 'Fini miroir haute brillance' },
    { url: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Bleu Nuit Métallique', desc: 'Profondeur 3D' },
    { url: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Cuivre Rose Gold', desc: 'Effet marbré premium' },
    { url: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Argent Poli', desc: 'Style industriel chic' },
  ],
  flakes: [
    { url: 'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Flocons Blends Gris', desc: 'Antidérapant discret' },
    { url: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Full Flake Tan', desc: 'Texture complète' },
    { url: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Flocons Bleu Glacier', desc: 'Design moderne' },
    { url: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Blends Noir/Argent', desc: 'Garage haut de gamme' },
  ],
  naturel: [
    { url: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Béton Poli Naturel', desc: 'Look brut industriel' },
    { url: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Gris Ciment Lisse', desc: 'Minimaliste élégant' },
    { url: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Stone Wash', desc: 'Effet pierre naturelle' },
    { url: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=800', title: 'Sable Poli', desc: 'Chaleur organique' },
  ],
};

// ============ PRODUITS À VENDRE ============
const products = [
  {
    name: 'Résine Époxy 100% Solide',
    subtitle: 'Kit 15 m² - Clear',
    price: '289 $',
    oldPrice: '349 $',
    image: 'https://images.pexels.com/photos/406831/pexels-photo-406831.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Best-seller',
    features: ['15 m² couverture', 'Séchage 24h', 'Sans odeur', 'UV stable'],
  },
  {
    name: 'Résine Époxy Métallique',
    subtitle: 'Kit 10 m² + Pigments',
    price: '399 $',
    oldPrice: '459 $',
    image: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Premium',
    features: ['Effet 3D', 'Pigments inclus', '10 m²', 'Garantie 5 ans'],
  },
  {
    name: 'Flocons Décoratifs',
    subtitle: 'Sac 5 lbs - 20 couleurs',
    price: '89 $',
    oldPrice: '119 $',
    image: 'https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Populaire',
    features: ['5 lbs', '20 coloris', 'Antidérapant', 'UV résistant'],
  },
  {
    name: 'Primaire d\'Accrochage',
    subtitle: 'Bidon 3.78L',
    price: '79 $',
    oldPrice: '99 $',
    image: 'https://images.pexels.com/photos/5797998/pexels-photo-5797998.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Essentiel',
    features: ['3.78L', 'Béton & bois', 'Séchage 4h', 'Sans solvant'],
  },
  {
    name: 'Kit Outils Pro',
    subtitle: 'Rouleau + raclette + pics',
    price: '129 $',
    oldPrice: '169 $',
    image: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Nouveau',
    features: ['Rouleau 18"', 'Raclette dentée', 'Pics à bulles', 'Gants'],
  },
  {
    name: 'Vernis Polyuréthane',
    subtitle: 'Top coat UV - 3.78L',
    price: '149 $',
    oldPrice: '189 $',
    image: 'https://images.pexels.com/photos/3062948/pexels-photo-3062948.jpeg?auto=compress&cs=tinysrgb&w=400',
    badge: 'Protection',
    features: ['UV shield', 'Antirayures', 'Brillant/Satin', '5 ans'],
  },
];

const services = [
  { icon: Home, title: 'Garage Résidentiel', desc: 'Fini lustré premium', price: '3,900$', features: ['Préparation 5 étapes', 'Époxy 100% solide', 'Paillettes décoratives', 'Antidérapant'], color: 'from-indigo-300 to-blue-300' },
  { icon: Building2, title: 'Commercial', desc: 'Showrooms, commerces', price: 'Sur devis', features: ['Haute résistance', 'Entretien minimal', 'Hors heures', 'Normes'], color: 'from-purple-300 to-violet-300' },
  { icon: Factory, title: 'Industriel', desc: 'Usines, entrepôts', price: 'Sur devis', features: ['Polyuréthane', 'Résistance chimique', 'Charges lourdes', 'Longue durée'], color: 'from-pink-300 to-rose-300' },
];

export default function EpoxyShop() {
  const [mounted, setMounted] = useState(false);
  const [cart, setCart] = useState<string[]>([]);
  const [activeTab, setActiveTab] = useState<'metallic' | 'flakes' | 'naturel'>('metallic');
  const [showCart, setShowCart] = useState(false);

  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  const addToCart = (product: string) => {
    setCart([...cart, product]);
    setShowCart(true);
    setTimeout(() => setShowCart(false), 2000);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-slate-800 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99,102,241,0.3) 2px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      {/* ===== HERO ===== */}
      <section className="relative pt-20 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="ZeniCorp" className="h-20 w-auto" />
                <div>
                  <span className="text-3xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ZENICORP</span>
                  <span className="block text-sm text-indigo-500 tracking-widest uppercase">Époxy Pro & Matériel</span>
                </div>
              </div>

              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200">
                <Shield className="w-4 h-4 text-indigo-500" />
                <span className="text-sm text-indigo-600 font-medium">Garantie 5 ans + Matériel pro disponible</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-800">
                Finitions{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">Métalliques</span>
                {' '}& Flocons
              </h1>

              <p className="text-lg text-slate-600 max-w-xl">
                Installation professionnelle + vente de matériel époxy premium. 
                Résines 100% solides, pigments métalliques, flocons décoratifs.
              </p>

              <div className="flex flex-wrap gap-4">
                <a href="#shop" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-full shadow-xl shadow-indigo-400/40 hover:shadow-2xl hover:scale-105 transition-all">
                  <ShoppingCart className="w-5 h-5" />
                  Voir le matériel
                </a>
                <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-indigo-200 text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition-all">
                  <Phone className="w-5 h-5" />
                  Soumission installation
                </a>
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 ring-4 ring-white">
                <img src="https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Plancher époxy métallique" className="w-full h-[700px] object-cover" />
              </div>
              <div className="absolute -bottom-6 left-6 right-6 p-6 rounded-2xl bg-white shadow-xl border border-indigo-100">
                <div className="grid grid-cols-3 gap-4 text-center">
                  <div><p className="text-2xl font-bold text-indigo-600">100%</p><p className="text-xs text-slate-500">Solide</p></div>
                  <div><p className="text-2xl font-bold text-indigo-600">5</p><p className="text-xs text-slate-500">Ans garantie</p></div>
                  <div><p className="text-2xl font-bold text-indigo-600">24-48h</p><p className="text-xs text-slate-500">Séchage</p></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FINITIONS TABS ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Nos <span className="text-indigo-500">Finitions</span></h2>
            <p className="text-lg text-slate-600">Choisissez le style qui vous ressemble</p>
          </div>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            {[
              { id: 'metallic' as const, label: 'Métallique', icon: Gem },
              { id: 'flakes' as const, label: 'Flocons', icon: Sparkles },
              { id: 'naturel' as const, label: 'Naturel', icon: Layers },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold transition-all ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-indigo-400 to-purple-500 text-white shadow-xl shadow-indigo-400/30'
                    : 'bg-white text-slate-600 border-2 border-slate-200 hover:border-indigo-200'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {epoxyPhotos[activeTab].map((photo, idx) => (
              <div key={idx} className="group relative rounded-2xl overflow-hidden shadow-xl hover:shadow-2xl transition-all">
                <img src={photo.url} alt={photo.title} className="w-full h-72 object-cover group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/80 via-indigo-900/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                  <p className="font-bold text-lg">{photo.title}</p>
                  <p className="text-sm text-white/80">{photo.desc}</p>
                </div>
                <div className="absolute top-4 right-4">
                  <span className="px-3 py-1 rounded-full bg-white/20 backdrop-blur text-xs text-white font-semibold">
                    {activeTab === 'metallic' ? 'Métallique' : activeTab === 'flakes' ? 'Flocons' : 'Naturel'}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== SHOP ===== */}
      <section id="shop" className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-100 mb-4">
              <ShoppingCart className="w-4 h-4 text-purple-500" />
              <span className="text-sm text-purple-600 font-medium">Matériel Pro</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-slate-800 mb-4">Notre <span className="text-purple-500">Boutique</span></h2>
            <p className="text-lg text-slate-600">Résines, pigments, flocons et outils pour vos projets</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, idx) => (
              <div key={idx} className="group bg-white rounded-3xl border-2 border-slate-100 hover:border-indigo-200 shadow-lg hover:shadow-2xl transition-all overflow-hidden">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-56 object-cover group-hover:scale-105 transition-transform duration-500" />
                  <span className="absolute top-4 left-4 px-3 py-1 rounded-full bg-gradient-to-r from-indigo-400 to-purple-500 text-white text-xs font-bold shadow-lg">
                    {product.badge}
                  </span>
                  <button
                    onClick={() => addToCart(product.name)}
                    className="absolute bottom-4 right-4 p-3 rounded-full bg-white shadow-lg text-indigo-600 hover:bg-indigo-50 transition-colors"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-bold text-slate-800">{product.name}</h3>
                  <p className="text-sm text-slate-500 mb-4">{product.subtitle}</p>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-2xl font-bold text-indigo-600">{product.price}</span>
                    <span className="text-sm text-slate-400 line-through">{product.oldPrice}</span>
                  </div>
                  <ul className="space-y-1 mb-6">
                    {product.features.map((f) => (
                      <li key={f} className="flex items-center gap-2 text-xs text-slate-600">
                        <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                        {f}
                      </li>
                    ))}
                  </ul>
                  <button
                    onClick={() => addToCart(product.name)}
                    className="w-full py-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-xl shadow-lg hover:shadow-xl transition-all"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Cart notification */}
          {showCart && (
            <div className="fixed bottom-8 right-8 z-50 p-4 bg-indigo-600 text-white rounded-2xl shadow-2xl animate-bounce">
              <div className="flex items-center gap-3">
                <ShoppingCart className="w-5 h-5" />
                <span className="font-bold">{cart.length} article(s) dans le panier</span>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* ===== SERVICES INSTALLATION ===== */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Installation <span className="text-indigo-500">Professionnelle</span></h2>
            <p className="text-lg text-slate-600">On s'occupe de tout, du prep au top coat</p>
          </div>
          <div className="grid md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="group p-8 rounded-3xl bg-white border-2 border-slate-100 hover:border-indigo-200 transition-all shadow-lg hover:shadow-2xl">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-4 rounded-2xl bg-gradient-to-r ${service.color} shadow-lg`}>
                    <service.icon className="w-8 h-8 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-slate-800">{service.title}</h3>
                    <p className="text-slate-500">{service.desc}</p>
                  </div>
                </div>
                <div className="px-4 py-2 rounded-full bg-indigo-100 text-indigo-700 font-bold text-sm inline-block mb-4">{service.price}</div>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-slate-600">
                      <CheckCircle2 className="w-5 h-5 text-indigo-400 flex-shrink-0" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA ===== */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Prêt pour votre <span className="text-indigo-500">plancher de rêve</span> ?</h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-full shadow-xl shadow-indigo-400/40 hover:shadow-2xl transition-all">
              <Phone className="w-5 h-5" />
              Appeler pour soumission
            </a>
            <a href="#shop" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-bold rounded-full shadow-lg border-2 border-slate-200 hover:border-indigo-200 transition-all">
              <ShoppingCart className="w-5 h-5" />
              Acheter le matériel
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
