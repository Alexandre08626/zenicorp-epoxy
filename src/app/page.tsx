'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import {
  Shield, Clock, Award, Phone, CheckCircle2, Home, Building2, Factory,
  Star, Droplets, Sparkles, ArrowRight, Calculator
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

const services = [
  { icon: Home, title: 'Garage Résidentiel', desc: 'Fini lustré premium', price: '3,900$', features: ['Préparation 5 étapes', 'Époxy 100% solide', 'Paillettes décoratives', 'Antidérapant'], color: 'from-indigo-300 to-blue-300' },
  { icon: Building2, title: 'Commercial', desc: 'Showrooms, commerces', price: 'Sur devis', features: ['Haute résistance', 'Entretien minimal', 'Hors heures', 'Normes'], color: 'from-purple-300 to-violet-300' },
  { icon: Factory, title: 'Industriel', desc: 'Usines, entrepôts', price: 'Sur devis', features: ['Polyuréthane', 'Résistance chimique', 'Charges lourdes', 'Longue durée'], color: 'from-pink-300 to-rose-300' },
];

const realisations = [
  { title: 'Garage double Québec', desc: 'Gris métallique', value: '4,800 $', color: 'bg-indigo-100' },
  { title: 'Atelier mécanique Lévis', desc: 'Résistant huiles', value: '12,500 $', color: 'bg-purple-100' },
  { title: 'Showroom auto Montréal', desc: 'Fini miroir', value: '18,000 $', color: 'bg-pink-100' },
  { title: 'Garage TR', desc: 'Noir + sécurité', value: '3,900 $', color: 'bg-blue-100' },
];

export default function EpoxyPale() {
  const [mounted, setMounted] = useState(false);
  useEffect(() => { setMounted(true); }, []);
  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50 text-slate-800 overflow-x-hidden">
      {/* Background */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, rgba(99,102,241,0.3) 2px, transparent 0)', backgroundSize: '48px 48px' }} />
        <div className="absolute top-20 right-10 w-96 h-96 bg-indigo-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-purple-200/30 rounded-full blur-3xl" />
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-indigo-100">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-4">
              {/* GROS LOGO */}
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-indigo-400 to-purple-500 flex items-center justify-center shadow-xl shadow-indigo-400/30 ring-4 ring-indigo-100">
                <Sparkles className="w-9 h-9 text-white" />
              </div>
              <div>
                <span className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">ZENICORP</span>
                <span className="block text-xs text-indigo-500 tracking-widest uppercase">Époxy Luxe</span>
              </div>
            </Link>
            <a href="/soumission" className="px-8 py-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-full shadow-xl shadow-indigo-400/30 hover:shadow-2xl transition-all">
              Devis gratuit
            </a>
          </div>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-100 border border-indigo-200">
                <Shield className="w-4 h-4 text-indigo-500" />
                <span className="text-sm text-indigo-600 font-medium">Garantie 5 ans incluse</span>
              </div>

              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-[1.1] text-slate-800">
                Planchers{' '}
                <span className="bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">d'Exception</span>
              </h1>

              <p className="text-lg text-slate-600 max-w-xl">Époxy 100% solide pour garages, commerces et industries. Fini miroir, antidérapant.</p>

              <div className="flex flex-wrap gap-4">
                <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-full shadow-xl shadow-indigo-400/40 hover:shadow-2xl hover:scale-105 transition-all">
                  <Calculator className="w-5 h-5" />
                  Devis gratuit
                </a>
                <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white border-2 border-indigo-200 text-indigo-700 font-semibold rounded-full hover:bg-indigo-50 transition-all">
                  <Phone className="w-5 h-5" />
                  1-800-ZENICORP
                </a>
              </div>
            </div>

            <div className="relative">
              {/* PHOTO PLUS GROSSE */}
              <div className="rounded-3xl overflow-hidden shadow-2xl shadow-indigo-200/50 ring-4 ring-white">
                <img src="https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&cs=tinysrgb&w=1920" alt="Époxy" className="w-full h-[700px] object-cover" />
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

      {/* Stats */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: 250, suffix: '+', label: 'Projets', icon: Home },
              { value: 5, suffix: ' ans', label: 'Garantie', icon: Award },
              { value: 100, suffix: '%', label: 'Solide', icon: Droplets },
              { value: 48, suffix: 'h', label: 'Séchage', icon: Clock },
            ].map((stat) => (
              <div key={stat.label} className="group p-8 rounded-3xl bg-white border-2 border-slate-100 text-center shadow-lg hover:shadow-xl">
                <div className="inline-flex p-4 rounded-2xl bg-indigo-100 mb-4">
                  <stat.icon className="w-8 h-8 text-indigo-500" />
                </div>
                <p className="text-4xl font-bold text-slate-800"><Counter end={stat.value} suffix={stat.suffix} /></p>
                <p className="text-sm text-slate-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-white/50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-slate-800 mb-6">Nos <span className="text-indigo-500">services</span></h2>
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

      {/* CTA */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-indigo-100 via-purple-100 to-pink-100" />
        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <h2 className="text-4xl md:text-6xl font-bold text-slate-800 mb-6">Transformez votre <span className="text-indigo-500">plancher</span></h2>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-full shadow-xl shadow-indigo-400/40 hover:shadow-2xl transition-all">Devis gratuit</a>
            <a href="tel:18009364267" className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-700 font-bold rounded-full shadow-lg border-2 border-slate-200">1-800-ZENICORP</a>
          </div>
        </div>
      </section>
    </div>
  );
}
