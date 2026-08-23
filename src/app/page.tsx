'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, ArrowRight, Calculator, MapPin, Clock, Shield,
  X, Plus, Package
} from 'lucide-react';
import { jsPDF } from 'jspdf';

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
    const [clientName, setClientName] = useState('');
    const [clientPhone, setClientPhone] = useState('');
    const [clientEmail, setClientEmail] = useState('');
    
    // Lightbox state
    const [lightboxOpen, setLightboxOpen] = useState(false);
    const [lightboxImage, setLightboxImage] = useState({ src: '', alt: '' });
    
    const openLightbox = (src: string, alt: string) => {
      setLightboxImage({ src, alt });
      setLightboxOpen(true);
    };
    
    const closeLightbox = () => {
      setLightboxOpen(false);
      setLightboxImage({ src: '', alt: '' });
    };
    
    // Shop Configurator State
    const [shopStep, setShopStep] = useState(1);
    const [projectSqft, setProjectSqft] = useState('');
    const [projectFinish, setProjectFinish] = useState<'metallic' | 'flakes' | null>(null);
    const [projectOption, setProjectOption] = useState('');
    const [installDate, setInstallDate] = useState('');
    const [paymentProcessing, setPaymentProcessing] = useState(false);
    
    const resetShop = () => {
      setShopStep(1);
      setProjectSqft('');
      setProjectFinish(null);
      setProjectOption('');
      setInstallDate('');
      setPaymentProcessing(false);
    };
    
    const getPricePerSqft = () => {
      if (projectFinish === 'flakes') return 7.50;
      if (projectOption === 'Liquid Gold') return 12.00;
      return 8.50;
    };
    
    const getProjectTotal = () => {
      const sqftNum = parseFloat(projectSqft) || 0;
      return sqftNum * getPricePerSqft();
    };
    
    const getDepositAmount = () => {
      return getProjectTotal() * 0.30;
    };
    
    const metallicColors = [
      { name: 'Chrome Mirror', image: '/images/epoxy-metallic-grey.jpg', price: 8.50 },
      { name: 'Copper Bronze', image: '/images/metallic-copper.jpg', price: 8.50 },
      { name: 'Ruby Red', image: '/images/metallic-red.jpg', price: 8.50 },
      { name: 'Silver Steel', image: '/images/metallic-silver.jpg', price: 8.50 },
      { name: 'Forest Green', image: '/images/metallic-forest.jpg', price: 8.50 },
      { name: 'Rose Gold', image: '/images/metallic-rose.jpg', price: 8.50 },
      { name: 'Emerald', image: '/images/metallic-emerald.webp', price: 8.50 },
      { name: 'Liquid Gold', image: '/images/metallic-gold.png', price: 12.00 },
    ];
    
    const flakeOptions = [
      { name: 'Flocons Mixtes', image: '/images/flakes-options.jpg', price: 7.50 },
      { name: 'Flocons 11', image: '/images/flakes-11.jpg', price: 7.50 },
      { name: 'E4E Flakes', image: '/images/e4e-flakes.jpg', price: 7.50 },
    ];

    const submitLeadToDashboard = async () => {
      const surface = Number.parseFloat(sqft || '0');
      const total = surface * pricePerSqft;
      const finishLabel = finishType === 'flakes' ? 'Flocons decoratifs' : 'Metallique';
      
      const leadData = {
        name: clientName,
        phone: clientPhone,
        email: clientEmail,
        service: 'epoxy',
        surface: surface,
        finishType: finishLabel,
        estimatedTotal: total,
        source: 'website-calculator',
        date: new Date().toISOString()
      };
      
      try {
        await fetch('https://zeniva-dev-dashboard.vercel.app/api/leads/epoxy', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(leadData)
        });
      } catch (e) {
        console.error('Lead submission error:', e);
      }
    };

    const downloadQuotePdf = async () => {
      const surface = Number.parseFloat(sqft || '0');
      const total = surface * pricePerSqft;
      const finishLabel = finishType === 'flakes' ? 'Flocons decoratifs' : 'Metallique';
      const now = new Date();
      const dateStr = now.toLocaleDateString('fr-CA', { year: 'numeric', month: 'long', day: 'numeric' });

      // Send lead to dashboard
      await submitLeadToDashboard();

      const doc = new jsPDF();
      const pageWidth = doc.internal.pageSize.getWidth();
      const centerX = pageWidth / 2;
      
      // Header background
      doc.setFillColor(0, 0, 0);
      doc.rect(0, 0, pageWidth, 50, 'F');
      
      // Header border (cyan accent)
      doc.setDrawColor(6, 182, 212);
      doc.setLineWidth(2);
      doc.line(0, 50, pageWidth, 50);
      
      // Company name
      doc.setTextColor(6, 182, 212);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(28);
      doc.text('ZENICORP', centerX, 25, { align: 'center' });
      
      doc.setTextColor(255, 255, 255);
      doc.setFontSize(16);
      doc.text('EPOXY PRO', centerX, 38, { align: 'center' });
      
      // Devis title
      doc.setTextColor(0, 0, 0);
      doc.setFontSize(24);
      doc.text('DEVIS ESTIMATIF', centerX, 70, { align: 'center' });
      
      // Date and phone
      doc.setFontSize(11);
      doc.setFont('helvetica', 'normal');
      doc.setTextColor(100, 100, 100);
      doc.text(`Date: ${dateStr}`, 20, 82);
      doc.text('Tel: 581-748-7017', pageWidth - 20, 82, { align: 'right' });
      
      // Client section
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(15, 95, pageWidth - 30, 35, 3, 3, 'F');
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('CLIENT', 20, 105);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      doc.text(`Nom: ${clientName || '_______________________________'}`, 20, 115);
      doc.text(`Telephone: ${clientPhone || '_______________________________'}`, 20, 123);
      doc.text(`Courriel: ${clientEmail || '_______________________________'}`, pageWidth - 20, 123, { align: 'right' });
      
      // Project details section
      doc.setFillColor(248, 250, 252);
      doc.roundedRect(15, 140, pageWidth - 30, 45, 3, 3, 'F');
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(12);
      doc.text('DETAILS DU PROJET', 20, 150);
      doc.setFont('helvetica', 'normal');
      doc.setFontSize(10);
      doc.setTextColor(60, 60, 60);
      doc.text(`Type de finition: ${finishLabel}`, 20, 162);
      doc.text(`Surface totale: ${surface.toFixed(2)} pieds carres`, 20, 170);
      doc.text(`Taux unitaire: $${pricePerSqft.toFixed(2)} / pied carre`, 20, 178);
      
      // Total section with accent
      doc.setFillColor(6, 182, 212);
      doc.roundedRect(15, 200, pageWidth - 30, 30, 5, 5, 'F');
      doc.setTextColor(0, 0, 0);
      doc.setFont('helvetica', 'bold');
      doc.setFontSize(14);
      doc.text('TOTAL ESTIME:', 25, 215);
      doc.setFontSize(22);
      doc.text(`$${total.toFixed(2)}`, pageWidth - 25, 218, { align: 'right' });
      doc.setFontSize(9);
      doc.setFont('helvetica', 'normal');
      doc.text(' taxes incluses', pageWidth - 25, 225, { align: 'right' });
      
      // Features
      doc.setTextColor(60, 60, 60);
      doc.setFontSize(10);
      doc.text('✓ Garantie 10 ans', 20, 250);
      doc.text('✓ Execution rapide 24-48h', 20, 258);
      doc.text('✓ Service professionnel garanti', 20, 266);
      
      // Footer note
      doc.setTextColor(120, 120, 120);
      doc.setFontSize(9);
      doc.text('Ce devis est une estimation preliminaire basee sur les informations fournies.', centerX, 285, { align: 'center' });
      doc.text('Une visite sur place sera necessaire pour confirmer le prix final.', centerX, 292, { align: 'center' });
      
      // Footer border
      doc.setDrawColor(6, 182, 212);
      doc.setLineWidth(1);
      doc.line(20, 300, pageWidth - 20, 300);
      doc.text('zenicorp-epoxy.vercel.app  |  581-748-7017', centerX, 310, { align: 'center' });

      doc.save(`devis-zenicorp-epoxy-${now.getTime()}.pdf`);
    };

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
            <p className="text-5xl font-black text-cyan-400">RBQ</p>
            <p className="text-white/60">Entrepreneur certifie</p>
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

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Nom complet"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="Telephone"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
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
                onClick={downloadQuotePdf}
                className="flex-1 py-5 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xl rounded-2xl transition-all hover:scale-105 flex items-center justify-center gap-3"
              >
                <Calculator className="w-6 h-6" />
                TELECHARGER DEVIS PDF
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
            6 choix de couleurs premium pour personnaliser ton plancher epoxy.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
            <div className="group cursor-pointer" onClick={() => openLightbox('/images/metallic-copper.jpg', 'Copper Bronze')}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-3"><img src="/images/metallic-copper.jpg" alt="Copper Bronze" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <p className="font-bold text-center text-sm">Copper Bronze</p>
            </div>
            <div className="group cursor-pointer" onClick={() => openLightbox('/images/metallic-red.jpg', 'Ruby Red')}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-3"><img src="/images/metallic-red.jpg" alt="Ruby Red" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <p className="font-bold text-center text-sm">Ruby Red</p>
            </div>
            <div className="group cursor-pointer" onClick={() => openLightbox('/images/metallic-silver.jpg', 'Silver Steel')}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-3"><img src="/images/metallic-silver.jpg" alt="Silver Steel" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <p className="font-bold text-center text-sm">Silver Steel</p>
            </div>
            <div className="group cursor-pointer" onClick={() => openLightbox('/images/metallic-forest.jpg', 'Forest Green')}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-3"><img src="/images/metallic-forest.jpg" alt="Forest Green" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <p className="font-bold text-center text-sm">Forest Green</p>
            </div>
            <div className="group cursor-pointer" onClick={() => openLightbox('/images/metallic-rose.jpg', 'Rose Gold')}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-3"><img src="/images/metallic-rose.jpg" alt="Rose Gold" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <p className="font-bold text-center text-sm">Rose Gold</p>
            </div>
            <div className="group cursor-pointer" onClick={() => openLightbox('/images/metallic-emerald.webp', 'Emerald')}>
              <div className="aspect-square rounded-2xl overflow-hidden mb-3"><img src="/images/metallic-emerald.webp" alt="Emerald" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" /></div>
              <p className="font-bold text-center text-sm">Emerald</p>
            </div>
          </div>
        </div>
      </section>

      {/* REALISATIONS - TOUTES LES PHOTOS */}
      <section className="py-20 px-4 sm:px-6 bg-black">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl font-black text-center mb-12">Nos <span className="text-cyan-400">Realisations</span></h2>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {/* Photo 1 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/epoxy-metallic-grey.jpg', 'Chrome Mirror')}>
              <img 
                src="/images/epoxy-metallic-grey.jpg" 
                alt="Chrome Mirror"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Chrome Mirror</p>
                <p className="text-cyan-400">Notre best-seller</p>
              </div>
            </div>

            {/* Photo 2 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/realisation-1.jpg', 'Plancher Residentiel')}>
              <img 
                src="/images/realisation-1.jpg" 
                alt="Plancher Residentiel"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Plancher Residentiel</p>
                <p className="text-cyan-400">Finition metallique</p>
              </div>
            </div>

            {/* Photo 3 */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/realisation-4.jpg', 'Local Commercial')}>
              <img 
                src="/images/realisation-4.jpg" 
                alt="Local Commercial"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Local Commercial</p>
                <p className="text-cyan-400">Haute resistance</p>
              </div>
            </div>

            {/* Photo 4 - Application */}
            <div className="relative aspect-[4/3] rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/realisation-application.jpg', 'Application Professionnelle')}>
              <img 
                src="/images/realisation-application.jpg" 
                alt="Application Professionnelle"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
              <div className="absolute bottom-6 sm:bottom-8 left-6 sm:left-8">
                <p className="text-2xl sm:text-3xl font-black text-white">Application Pro</p>
                <p className="text-cyan-400">Travail de precision</p>
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
            <div className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/flakes-options.jpg', 'Flocons Mixtes')}>
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
            <div className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/flakes-11.jpg', 'Flocons 11')}>
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
            <div className="relative aspect-square rounded-3xl overflow-hidden group cursor-pointer" onClick={() => openLightbox('/images/e4e-flakes.jpg', 'E4E Flakes')}>
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

      {/* BOUTIQUE MODAL - CONFIGURATEUR DE PROJET */}
      {showShop && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex items-center justify-center p-4 sm:p-6"
          onClick={() => { setShowShop(false); resetShop(); }}
        >
          <div 
            className="w-full max-w-2xl max-h-[90vh] overflow-y-auto bg-zinc-900 rounded-3xl border border-white/10 p-6 sm:p-8"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Header avec progression */}
            <div className="mb-8">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-2xl sm:text-3xl font-black">Configurer votre projet</h2>
                <button onClick={() => { setShowShop(false); resetShop(); }} className="p-2 hover:bg-white/10 rounded-full">
                  <X className="w-6 h-6" />
                </button>
              </div>
              
              {/* Barre de progression */}
              <div className="flex items-center gap-2">
                {[1, 2, 3, 4, 5].map((step) => (
                  <div key={step} className="flex-1 h-2 rounded-full bg-white/10 overflow-hidden">
                    <div className={`h-full rounded-full transition-all duration-300 ${shopStep >= step ? 'bg-cyan-400' : 'bg-transparent'}`} />
                  </div>
                ))}
              </div>
              <p className="text-white/60 text-sm mt-2">Etape {shopStep} sur 5</p>
            </div>

            {/* ETAPE 1: Surface */}
            {shopStep === 1 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Quelle est la surface a couvrir?</h3>
                <div className="space-y-4">
                  <input 
                    type="number"
                    value={projectSqft}
                    onChange={(e) => setProjectSqft(e.target.value)}
                    placeholder="Nombre de pieds carres (ex: 500)"
                    className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-2xl text-white text-2xl font-bold text-center focus:border-cyan-500 focus:outline-none"
                  />
                  <p className="text-white/40 text-center text-sm">
                    Prix: $7.50 - $12.00 / pied carre selon la finition choisie
                  </p>
                </div>
                <button 
                  onClick={() => projectSqft && parseFloat(projectSqft) > 0 && setShopStep(2)}
                  disabled={!projectSqft || parseFloat(projectSqft) <= 0}
                  className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-black text-xl rounded-2xl transition-all"
                >
                  CONTINUER
                </button>
              </div>
            )}

            {/* ETAPE 2: Type de finition */}
            {shopStep === 2 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Choisissez votre type de finition</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <button 
                    onClick={() => { setProjectFinish('metallic'); setShopStep(3); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${projectFinish === 'metallic' ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                  >
                    <div className="font-bold text-xl mb-2">Metallique</div>
                    <div className="text-3xl font-black text-cyan-400">$8.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                    <p className="text-sm text-white/40 mt-2">Finition miroir premium, 7+ couleurs disponibles</p>
                  </button>
                  
                  <button 
                    onClick={() => { setProjectFinish('flakes'); setShopStep(3); }}
                    className={`p-6 rounded-2xl border-2 transition-all text-left ${projectFinish === 'flakes' ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                  >
                    <div className="font-bold text-xl mb-2">Flocons</div>
                    <div className="text-3xl font-black text-cyan-400">$7.50<span className="text-base text-white/60 font-normal">/pied²</span></div>
                    <p className="text-sm text-white/40 mt-2">Finition antiderapante decorative</p>
                  </button>
                </div>
              </div>
            )}

            {/* ETAPE 3: Option specifique */}
            {shopStep === 3 && projectFinish && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">
                  {projectFinish === 'metallic' ? 'Choisissez votre couleur metallique' : 'Choisissez votre melange de flocons'}
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 max-h-[300px] overflow-y-auto">
                  {(projectFinish === 'metallic' ? metallicColors : flakeOptions).map((option) => (
                    <button
                      key={option.name}
                      onClick={() => { setProjectOption(option.name); setShopStep(4); }}
                      className={`p-3 rounded-xl border-2 transition-all ${projectOption === option.name ? 'border-cyan-500 bg-cyan-500/10' : 'border-white/10 bg-white/5 hover:border-white/30'}`}
                    >
                      <div className="aspect-square rounded-lg overflow-hidden mb-2">
                        <img src={option.image} alt={option.name} className="w-full h-full object-cover" />
                      </div>
                      <p className="font-bold text-sm">{option.name}</p>
                      <p className="text-cyan-400 text-xs">${option.price.toFixed(2)}/pied²</p>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* ETAPE 4: Date d'installation */}
            {shopStep === 4 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Quand souhaitez-vous l'installation?</h3>
                <div className="space-y-4">
                  <input 
                    type="date"
                    value={installDate}
                    onChange={(e) => setInstallDate(e.target.value)}
                    min={new Date().toISOString().split('T')[0]}
                    className="w-full px-6 py-5 bg-white/5 border-2 border-white/20 rounded-2xl text-white text-xl font-bold text-center focus:border-cyan-500 focus:outline-none"
                  />
                  <p className="text-white/40 text-center text-sm">
                    Installation rapide sous 24-48h apres confirmation
                  </p>
                </div>
                <button 
                  onClick={() => installDate && setShopStep(5)}
                  disabled={!installDate}
                  className="w-full py-5 bg-cyan-500 hover:bg-cyan-400 disabled:opacity-50 text-black font-black text-xl rounded-2xl transition-all"
                >
                  VOIR LE RECAPITULATIF
                </button>
              </div>
            )}

            {/* ETAPE 5: Recapitulatif et paiement */}
            {shopStep === 5 && (
              <div className="space-y-6">
                <h3 className="text-xl font-bold text-center">Recapitulatif de votre projet</h3>
                
                <div className="bg-white/5 rounded-2xl p-6 space-y-4">
                  <div className="flex justify-between">
                    <span className="text-white/60">Surface</span>
                    <span className="font-bold">{projectSqft} pieds carres</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Finition</span>
                    <span className="font-bold">{projectFinish === 'metallic' ? 'Metallique' : 'Flocons'}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Option choisie</span>
                    <span className="font-bold">{projectOption}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-white/60">Date souhaitee</span>
                    <span className="font-bold">{installDate ? new Date(installDate).toLocaleDateString('fr-CA') : '-'}</span>
                  </div>
                  <div className="border-t border-white/10 pt-4">
                    <div className="flex justify-between items-center">
                      <span className="text-white/60">Total projet</span>
                      <span className="text-2xl font-black text-cyan-400">${getProjectTotal().toFixed(2)}</span>
                    </div>
                  </div>
                  <div className="bg-cyan-500/10 rounded-xl p-4 border border-cyan-500/30">
                    <div className="flex justify-between items-center">
                      <div>
                        <span className="text-white font-bold">Acompte a payer (30%)</span>
                        <p className="text-xs text-white/60">Solde payable apres installation</p>
                      </div>
                      <span className="text-3xl font-black text-cyan-400">${getDepositAmount().toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {/* Paiement Zenipay */}
                <div className="space-y-4">
                  <h4 className="text-lg font-bold text-center">Payer avec Zenipay</h4>
                  
                  {paymentProcessing ? (
                    <div className="text-center py-8">
                      <div className="w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full animate-spin mx-auto mb-4" />
                      <p className="text-white/60">Connexion a Zenipay...</p>
                    </div>
                  ) : (
                    <>
                      <button 
                        onClick={async () => {
                          setPaymentProcessing(true);
                          
                          // Prepare payment data for Zenipay
                          const paymentData = {
                            amount: getDepositAmount(),
                            currency: 'CAD',
                            description: `Acompte Projet Epoxy - ${projectOption} (${projectSqft} p²)`,
                            metadata: {
                              project_surface: projectSqft,
                              project_finish: projectFinish,
                              project_option: projectOption,
                              install_date: installDate,
                              total_amount: getProjectTotal(),
                              deposit_amount: getDepositAmount()
                            },
                            success_url: 'https://zenicorp-epoxy.vercel.app/paiement/success',
                            cancel_url: 'https://zenicorp-epoxy.vercel.app/paiement/annule'
                          };
                          
                          try {
                            // Call Zenipay API
                            const response = await fetch('https://api.zenipay.ca/v1/checkout/sessions', {
                              method: 'POST',
                              headers: {
                                'Content-Type': 'application/json',
                                'Authorization': `Bearer ${process.env.NEXT_PUBLIC_ZENIPAY_PUBLIC_KEY}`
                              },
                              body: JSON.stringify(paymentData)
                            });
                            
                            const result = await response.json();
                            
                            if (result.url) {
                              // Redirect to Zenipay checkout
                              window.location.href = result.url;
                            } else {
                              alert('Erreur de connexion a Zenipay. Veuillez reessayer.');
                              setPaymentProcessing(false);
                            }
                          } catch (error) {
                            console.error('Zenipay error:', error);
                            alert('Erreur de paiement. Contactez-nous au 581-748-7017');
                            setPaymentProcessing(false);
                          }
                        }}
                        className="w-full py-5 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-black font-black text-xl rounded-2xl transition-all flex items-center justify-center gap-3"
                      >
                        <span>PAYER L'ACOMPTE ${getDepositAmount().toFixed(2)}$ CAD</span>
                      </button>
                      
                      <p className="text-center text-white/40 text-xs">
                        Paiement securise par Zenipay
                      </p>
                      
                      <button 
                        onClick={() => setShopStep(1)}
                        className="w-full py-4 bg-white/10 hover:bg-white/20 text-white font-bold rounded-2xl transition-all"
                      >
                        MODIFIER LE PROJET
                      </button>
                    </>
                  )}
                </div>
              </div>
            )}

            {/* Navigation retour */}
            {shopStep > 1 && shopStep < 5 && (
              <button 
                onClick={() => setShopStep(shopStep - 1)}
                className="mt-6 w-full py-3 text-white/60 hover:text-white font-medium text-sm"
              >
                ← Retour a l'etape precedente
              </button>
            )}
          </div>
        </div>
      )}

      {/* DEVIS MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 sm:p-6" onClick={() => setShowQuote(false)}>
          <div className="w-full max-w-lg bg-zinc-900 rounded-3xl p-6 sm:p-8 border border-white/10" onClick={(e) => e.stopPropagation()}>
            <h2 className="text-2xl font-black mb-6 text-center">Devis Rapide</h2>
            <form className="space-y-4">
              <input
                type="text"
                value={clientName}
                onChange={(e) => setClientName(e.target.value)}
                placeholder="Nom complet"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="number"
                value={sqft}
                onChange={(e) => setSqft(e.target.value)}
                placeholder="Superficie (pieds carres)"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="tel"
                value={clientPhone}
                onChange={(e) => setClientPhone(e.target.value)}
                placeholder="Telephone"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
              />
              <input
                type="email"
                value={clientEmail}
                onChange={(e) => setClientEmail(e.target.value)}
                placeholder="Email"
                className="w-full px-4 py-4 bg-white/5 border border-white/20 rounded-xl text-white text-lg focus:border-cyan-500 focus:outline-none"
              />
              <button 
                type="button"
                onClick={() => { downloadQuotePdf(); setShowQuote(false); }}
                className="w-full py-5 bg-cyan-500 text-black font-black text-xl rounded-xl"
              >
                TELECHARGER LE DEVIS PDF
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
      {/* LIGHTBOX MODAL */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-[60] bg-black/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button 
            onClick={closeLightbox}
            className="absolute top-4 right-4 p-3 bg-white/10 rounded-full hover:bg-white/20 transition-colors z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <img 
            src={lightboxImage.src} 
            alt={lightboxImage.alt}
            className="max-w-full max-h-[90vh] object-contain rounded-lg"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

    </div>
  );
}
