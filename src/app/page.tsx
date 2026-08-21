'use client';

import { useEffect, useState, useRef } from 'react';
import {
  Phone, Check, Gem, Sparkles, Layers, ShoppingCart,
  ArrowRight, Star, X, ChevronRight
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

/* ─── Data ─── */
const finishes = {
  metallic: {
    label: 'Métallique',
    icon: Gem,
    accent: '#8b5cf6',
    images: [
      { src: 'https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Liquid Mercury', desc: 'Gris chrome profond, reflets miroir' },
      { src: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Midnight Ocean', desc: 'Bleu nuit aux nuances violetées' },
      { src: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Rose Gold Flow', desc: 'Cuivre chaud, effet marbré organique' },
      { src: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Platinum Vein', desc: 'Argent poli avec veines dynamiques' },
    ]
  },
  flakes: {
    label: 'Flocons',
    icon: Sparkles,
    accent: '#f59e0b',
    images: [
      { src: 'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Granite Storm', desc: 'Blends gris anthracite, texture riche' },
      { src: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Desert Sand', desc: 'Tan chaud, fini naturel antidérapant' },
      { src: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Glacier Blue', desc: 'Bleu arctique avec reflets blancs' },
      { src: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Carbon Black', desc: 'Noir profond, particules argentées' },
    ]
  },
  naturel: {
    label: 'Naturel',
    icon: Layers,
    accent: '#10b981',
    images: [
      { src: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Raw Concrete', desc: 'Béton brut poli, esthétique loft' },
      { src: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Cement Grey', desc: 'Gris ciment lisse et minimaliste' },
      { src: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Stone Washed', desc: 'Effet pierre vieillie, tons terreux' },
      { src: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&cs=tinysrgb&w=1200', title: 'Warm Sand', desc: 'Sable chaud, atmosphère organique' },
    ]
  },
};

const products = [
  { name: 'Époxy Clear Pro', sub: 'Kit 15 m² · 100% solide', price: '289 $', old: '349 $', img: 'https://images.pexels.com/photos/406831/pexels-photo-406831.jpeg?auto=compress&cs=tinysrgb&w=600', tags: ['15 m²', '24h', 'Inodore'] },
  { name: 'Kit Métallique 3D', sub: '10 m² + pigments', price: '399 $', old: '459 $', img: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&cs=tinysrgb&w=600', tags: ['3D', 'Pigments', 'Premium'] },
  { name: 'Flocons Déco 5 lbs', sub: '20 coloris au choix', price: '89 $', old: '119 $', img: 'https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&cs=tinysrgb&w=600', tags: ['5 lbs', 'UV', 'Antidérapant'] },
  { name: 'Primaire Pro 3.78L', sub: 'Accrochage béton/bois', price: '79 $', old: '99 $', img: 'https://images.pexels.com/photos/5797998/pexels-photo-5797998.jpeg?auto=compress&cs=tinysrgb&w=600', tags: ['3.78L', '4h', 'Sans solvant'] },
  { name: 'Outils Époxy Pro', sub: 'Rouleau + raclette + pics', price: '129 $', old: '169 $', img: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&cs=tinysrgb&w=600', tags: ['Complet', '18"', 'Pro'] },
  { name: 'Vernis UV Shield', sub: 'Top coat 3.78L', price: '149 $', old: '189 $', img: 'https://images.pexels.com/photos/3062948/pexels-photo-3062948.jpeg?auto=compress&cs=tinysrgb&w=600', tags: ['UV', 'Anti-rayures', '5 ans'] },
];

/* ─── Main ─── */
export default function EpoxyPremium() {
  const [tab, setTab] = useState<'metallic' | 'flakes' | 'naturel'>('metallic');
  const [cart, setCart] = useState<string[]>([]);
  const [toast, setToast] = useState(false);
  const [lightbox, setLightbox] = useState<string | null>(null);
  const [mounted, setMounted] = useState(false);
  const heroRef = useRef<HTMLDivElement>(null);

  useEffect(() => { setMounted(true); }, []);

  /* Parallax hero */
  useEffect(() => {
    const onScroll = () => {
      if (!heroRef.current) return;
      const y = window.scrollY;
      const img = heroRef.current.querySelector('img') as HTMLImageElement;
      if (img) img.style.transform = `translateY(${y * 0.4}px) scale(1.1)`;
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const addCart = (name: string) => {
    setCart(c => [...c, name]);
    setToast(true);
    setTimeout(() => setToast(false), 2500);
  };

  const current = finishes[tab];

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-[#0a0a0f] text-white overflow-x-hidden selection:bg-violet-500/30">

      {/* ═══ HERO PARALLAX ═══ */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background image with parallax */}
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&cs=tinysrgb&w=2560"
            alt=""
            className="w-full h-full object-cover will-change-transform"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0f]/60 via-[#0a0a0f]/40 to-[#0a0a0f]" />
          <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0f]/80 via-transparent to-[#0a0a0f]/80" />
        </div>

        {/* Floating particles */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute w-1 h-1 rounded-full bg-white/20 animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 3}s`,
                animationDuration: `${2 + Math.random() * 3}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-5xl mx-auto">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 backdrop-blur-md border border-white/10 mb-8">
            <Star className="w-4 h-4 text-amber-400 fill-amber-400" />
            <span className="text-sm text-white/70">Plancher époxy #1 au Québec</span>
          </div>

          <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter leading-[0.9] mb-8">
            <span className="block">Finitions</span>
            <span className="block bg-gradient-to-r from-violet-400 via-fuchsia-400 to-amber-400 bg-clip-text text-transparent">
              d'exception
            </span>
          </h1>

          <p className="text-lg md:text-xl text-white/50 max-w-2xl mx-auto mb-12 leading-relaxed">
            Installation professionnelle et vente de matériel époxy premium.
            Métallique, flocons, naturel — on a ce qu'il vous faut.
          </p>

          <div className="flex flex-wrap justify-center gap-4">
            <a href="#realisations" className="group inline-flex items-center gap-3 px-8 py-4 bg-white text-black font-bold rounded-full hover:bg-white/90 transition-all hover:scale-105">
              Voir les réalisations
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </a>
            <a href="#shop" className="inline-flex items-center gap-3 px-8 py-4 bg-white/5 backdrop-blur-md border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all">
              <ShoppingCart className="w-5 h-5" />
              Boutique matériel
            </a>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/30">
          <span className="text-xs tracking-widest uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-white/30 to-transparent animate-pulse" />
        </div>
      </section>

      {/* ═══ MARQUEE STATS ═══ */}
      <section className="py-16 border-y border-white/5 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { val: 250, suf: '+', lab: 'Projets réalisés' },
              { val: 5, suf: ' ans', lab: 'Garantie maximale' },
              { val: 100, suf: '%', lab: 'Époxy solide' },
              { val: 24, suf: 'h', lab: 'Délai soumission' },
            ].map(s => (
              <div key={s.lab}>
                <p className="text-5xl md:text-6xl font-bold text-white mb-2">
                  <CountUp end={s.val} suffix={s.suf} />
                </p>
                <p className="text-sm text-white/30 uppercase tracking-wider">{s.lab}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ GALERIE TABS ═══ */}
      <section id="realisations" className="py-32 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between mb-16 gap-6">
            <div>
              <p className="text-sm text-violet-400 font-semibold tracking-widest uppercase mb-3">Galerie</p>
              <h2 className="text-4xl md:text-6xl font-bold tracking-tight">
                Vraies <span className="text-white/20">réalisations</span>
              </h2>
            </div>

            {/* Tabs */}
            <div className="flex gap-2">
              {(Object.keys(finishes) as Array<keyof typeof finishes>).map((k) => {
                const active = tab === k;
                const T = finishes[k].icon;
                return (
                  <button
                    key={k}
                    onClick={() => setTab(k)}
                    className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-semibold transition-all ${
                      active
                        ? 'bg-white text-black'
                        : 'bg-white/5 text-white/40 hover:text-white hover:bg-white/10'
                    }`}
                  >
                    <T className="w-4 h-4" />
                    {finishes[k].label}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Images Grid */}
          <div className="grid md:grid-cols-2 gap-4">
            {current.images.map((img, i) => (
              <div
                key={`${tab}-${i}`}
                className={`group relative overflow-hidden rounded-3xl cursor-pointer ${
                  i === 0 ? 'md:col-span-2 aspect-[21/9]' : 'aspect-[4/3]'
                }`}
                onClick={() => setLightbox(img.src)}
              >
                <img
                  src={img.src}
                  alt={img.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />
                <div className="absolute bottom-0 left-0 right-0 p-8 translate-y-4 group-hover:translate-y-0 transition-transform">
                  <span
                    className="inline-block px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest mb-3"
                    style={{ background: current.accent, color: '#000' }}
                  >
                    {current.label}
                  </span>
                  <h3 className="text-2xl font-bold mb-1">{img.title}</h3>
                  <p className="text-white/50">{img.desc}</p>
                </div>
                <div className="absolute top-6 right-6 w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                  <ChevronRight className="w-5 h-5 text-white" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SHOP ═══ */}
      <section id="shop" className="py-32 bg-gradient-to-b from-[#0a0a0f] via-[#0f0f1a] to-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <p className="text-sm text-fuchsia-400 font-semibold tracking-widest uppercase mb-3">Boutique Pro</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight mb-4">Matériel & Produits</h2>
            <p className="text-white/30 text-lg">Tout ce qu'il faut pour réussir votre plancher époxy</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((p, i) => (
              <div
                key={i}
                className="group relative bg-white/[0.03] border border-white/5 rounded-[2rem] overflow-hidden hover:border-white/10 hover:bg-white/[0.05] transition-all duration-500"
              >
                {/* Image */}
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0f] via-transparent to-transparent" />
                  <button
                    onClick={() => addCart(p.name)}
                    className="absolute bottom-4 right-4 p-3 rounded-2xl bg-white text-black hover:scale-110 transition-transform"
                  >
                    <ShoppingCart className="w-5 h-5" />
                  </button>
                </div>

                {/* Content */}
                <div className="p-7">
                  <div className="flex items-baseline gap-3 mb-1">
                    <span className="text-2xl font-bold">{p.price}</span>
                    <span className="text-sm text-white/20 line-through">{p.old}</span>
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{p.name}</h3>
                  <p className="text-sm text-white/30 mb-5">{p.sub}</p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {p.tags.map(t => (
                      <span key={t} className="px-3 py-1 rounded-full bg-white/5 text-white/40 text-xs font-medium border border-white/5">
                        {t}
                      </span>
                    ))}
                  </div>

                  <button
                    onClick={() => addCart(p.name)}
                    className="w-full py-3.5 bg-white text-black font-bold rounded-xl hover:bg-white/90 transition-colors"
                  >
                    Ajouter au panier
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ SERVICES ═══ */}
      <section className="py-32 bg-[#0a0a0f] relative overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-violet-500/5 rounded-full blur-[150px] pointer-events-none" />
        <div className="max-w-7xl mx-auto px-6 relative">
          <div className="text-center mb-20">
            <p className="text-sm text-emerald-400 font-semibold tracking-widest uppercase mb-3">Services</p>
            <h2 className="text-4xl md:text-6xl font-bold tracking-tight">Installation Pro</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { title: 'Garage Résidentiel', price: '3 900 $', desc: 'Fini lustré premium avec paillettes décoratives et antidérapant.', features: ['Préparation 5 étapes', 'Époxy 100% solide', 'Paillettes incluses', 'Antidérapant'], color: 'violet' },
              { title: 'Commercial', price: 'Sur devis', desc: 'Showrooms, commerces, bureaux. Travail hors heures disponible.', features: ['Haute résistance', 'Entretien minimal', 'Hors heures', 'Normes QC'], color: 'fuchsia' },
              { title: 'Industriel', price: 'Sur devis', desc: 'Usines, entrepôts, ateliers. Résistance chimique et charges lourdes.', features: ['Polyuréthane', 'Résistance chimique', 'Charges lourdes', 'Longue durée'], color: 'emerald' },
            ].map((s) => (
              <div key={s.title} className="relative p-8 rounded-[2rem] bg-gradient-to-b from-white/[0.05] to-transparent border border-white/5 hover:border-white/10 transition-all group">
                <div className={`w-12 h-12 rounded-2xl bg-${s.color}-500/10 flex items-center justify-center mb-6`}>
                  <div className={`w-3 h-3 rounded-full bg-${s.color}-400`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{s.title}</h3>
                <p className="text-lg font-semibold text-white/50 mb-4">{s.price}</p>
                <p className="text-sm text-white/30 mb-8 leading-relaxed">{s.desc}</p>
                <ul className="space-y-3">
                  {s.features.map(f => (
                    <li key={f} className="flex items-center gap-3 text-sm text-white/50">
                      <Check className="w-4 h-4 text-emerald-400" />
                      {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══ CTA ═══ */}
      <section className="py-40 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-br from-violet-900/20 via-fuchsia-900/10 to-[#0a0a0f]" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-violet-500/10 rounded-full blur-[150px]" />
        </div>
        <div className="max-w-3xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-5xl md:text-7xl font-bold tracking-tight mb-8">
            Votre plancher<br />
            <span className="bg-gradient-to-r from-violet-400 to-fuchsia-400 bg-clip-text text-transparent">mérite l'excellence</span>
          </h2>
          <p className="text-lg text-white/30 mb-12">Soumission gratuite sous 24h. Matériel expédié partout au Québec.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="tel:18009364267" className="inline-flex items-center gap-3 px-10 py-5 bg-white text-black font-bold rounded-full hover:scale-105 transition-transform">
              <Phone className="w-5 h-5" />
              1-800-ZENICORP
            </a>
            <a href="#shop" className="inline-flex items-center gap-3 px-10 py-5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-colors">
              <ShoppingCart className="w-5 h-5" />
              Voir la boutique
            </a>
          </div>
        </div>
      </section>

      {/* ═══ FOOTER ═══ */}
      <footer className="py-12 border-t border-white/5 bg-[#0a0a0f]">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ZeniCorp" className="h-8 w-auto opacity-50" />
            <span className="text-white/20 text-sm">Époxy Pro — Québec</span>
          </div>
          <p className="text-white/10 text-sm">© {new Date().getFullYear()} ZeniCorp. Tous droits réservés.</p>
        </div>
      </footer>

      {/* ═══ LIGHTBOX ═══ */}
      {lightbox && (
        <div
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-6 animate-in fade-in duration-200"
          onClick={() => setLightbox(null)}
        >
          <button className="absolute top-6 right-6 p-3 rounded-full bg-white/10 text-white hover:bg-white/20 transition-colors">
            <X className="w-6 h-6" />
          </button>
          <img
            src={lightbox}
            alt=""
            className="max-w-full max-h-[90vh] rounded-2xl object-contain"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* ═══ TOAST ═══ */}
      {toast && (
        <div className="fixed bottom-8 right-8 z-50 animate-in slide-in-from-bottom-4 fade-in">
          <div className="flex items-center gap-4 px-6 py-4 bg-white text-black rounded-2xl shadow-2xl">
            <div className="w-8 h-8 rounded-full bg-emerald-500 flex items-center justify-center">
              <Check className="w-4 h-4 text-white" />
            </div>
            <div>
              <p className="font-semibold text-sm">Ajouté au panier</p>
              <p className="text-xs text-black/40">{cart.length} article(s)</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
