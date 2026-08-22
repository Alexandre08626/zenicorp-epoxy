'use client';

import { useState, useEffect } from 'react';
import {
  Phone, Check, X, ShoppingCart, Plus, Minus, Trash2,
  Calculator, Package, Palette, Sparkles
} from 'lucide-react';

/* ─── 25 COULEURS MÉTALLIQUES ─── */
const metallicColors = [
  { id: 'm1', name: 'Chrome Mirror', hex: '#C0C0C0', pricePerSqFt: 7.50, img: 'https://images.pexels.com/photos/20251621/pexels-photo-20251621.jpeg?auto=compress&w=600', desc: 'Reflets miroir parfaits' },
  { id: 'm2', name: 'Gunmetal Grey', hex: '#4a4a4a', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/17580916/pexels-photo-17580916.jpeg?auto=compress&w=600', desc: 'Gris profond industriel' },
  { id: 'm3', name: 'Midnight Blue', hex: '#1a237e', pricePerSqFt: 8.00, img: 'https://images.pexels.com/photos/8961732/pexels-photo-8961732.jpeg?auto=compress&w=600', desc: 'Bleu nuit mystérieux' },
  { id: 'm4', name: 'Copper Luxe', hex: '#b87333', pricePerSqFt: 8.50, img: 'https://images.pexels.com/photos/14002097/pexels-photo-14002097.jpeg?auto=compress&w=600', desc: 'Cuivre chaud premium' },
  { id: 'm5', name: 'Liquid Gold', hex: '#FFD700', pricePerSqFt: 9.00, img: 'https://images.pexels.com/photos/12139561/pexels-photo-12139561.jpeg?auto=compress&w=600', desc: 'Or pur lumineux' },
  { id: 'm6', name: 'Pearl White', hex: '#f8f8ff', pricePerSqFt: 8.25, img: 'https://images.pexels.com/photos/103598/pexels-photo-103598.jpeg?auto=compress&w=600', desc: 'Nacré éclatant' },
  { id: 'm7', name: 'Obsidian Black', hex: '#1A1A1A', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/36681931/pexels-photo-36681931.jpeg?auto=compress&w=600', desc: 'Noir profond intense' },
  { id: 'm8', name: 'Emerald Green', hex: '#2ecc71', pricePerSqFt: 8.50, img: 'https://images.pexels.com/photos/31601977/pexels-photo-31601977.jpeg?auto=compress&w=600', desc: 'Vert émeraude précieux' },
  { id: 'm9', name: 'Sapphire Blue', hex: '#3498db', pricePerSqFt: 8.50, img: 'https://images.pexels.com/photos/17181949/pexels-photo-17181949.jpeg?auto=compress&w=600', desc: 'Bleu royal sapphire' },
  { id: 'm10', name: 'Ruby Red', hex: '#e74c3c', pricePerSqFt: 9.00, img: 'https://images.pexels.com/photos/27639759/pexels-photo-27639759.jpeg?auto=compress&w=600', desc: 'Rouge rubis passion' },
  { id: 'm11', name: 'Bronze Antique', hex: '#cd7f32', pricePerSqFt: 8.25, img: 'https://images.pexels.com/photos/29149440/pexels-photo-29149440.jpeg?auto=compress&w=600', desc: 'Bronze vieilli élégant' },
  { id: 'm12', name: 'Platinum Silver', hex: '#e5e4e2', pricePerSqFt: 8.00, img: 'https://images.pexels.com/photos/9139594/pexels-photo-9139594.jpeg?auto=compress&w=600', desc: 'Platine précieux' },
  { id: 'm13', name: 'Rose Gold', hex: '#b76e79', pricePerSqFt: 8.75, img: 'https://images.pexels.com/photos/1571460/pexels-photo-1571460.jpeg?auto=compress&w=600', desc: 'Or rose tendance' },
  { id: 'm14', name: 'Titanium Grey', hex: '#878787', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/209315/pexels-photo-209315.jpeg?auto=compress&w=600', desc: 'Titane industriel' },
  { id: 'm15', name: 'Cobalt Blue', hex: '#0047AB', pricePerSqFt: 8.50, img: 'https://images.pexels.com/photos/259962/pexels-photo-259962.jpeg?auto=compress&w=600', desc: 'Bleu cobalt profond' },
  { id: 'm16', name: 'Charcoal Metallic', hex: '#36454F', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=600', desc: 'Charbon métallisé' },
  { id: 'm17', name: 'Champagne Gold', hex: '#F7E7CE', pricePerSqFt: 8.75, img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&w=600', desc: 'Or champagne sophistiqué' },
  { id: 'm18', name: 'Teal Ocean', hex: '#008080', pricePerSqFt: 8.25, img: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&w=600', desc: 'Turquoise océan' },
  { id: 'm19', name: 'Burgundy Wine', hex: '#800020', pricePerSqFt: 8.75, img: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&w=600', desc: 'Bordeaux vin' },
  { id: 'm20', name: 'Graphite Steel', hex: '#41424C', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/584399/pexels-photo-584399.jpeg?auto=compress&w=600', desc: 'Graphite industriel' },
  { id: 'm21', name: 'Amber Glow', hex: '#FFBF00', pricePerSqFt: 8.50, img: 'https://images.pexels.com/photos/106399/pexels-photo-106399.jpeg?auto=compress&w=600', desc: 'Ambre lumineux' },
  { id: 'm22', name: 'Lavender Mist', hex: '#E6E6FA', pricePerSqFt: 8.25, img: 'https://images.pexels.com/photos/2635038/pexels-photo-2635038.jpeg?auto=compress&w=600', desc: 'Lavande douce' },
  { id: 'm23', name: 'Fire Orange', hex: '#FF4500', pricePerSqFt: 8.75, img: 'https://images.pexels.com/photos/2306171/pexels-photo-2306171.jpeg?auto=compress&w=600', desc: 'Orange flamboyant' },
  { id: 'm24', name: 'Storm Grey', hex: '#708090', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/2724749/pexels-photo-2724749.jpeg?auto=compress&w=600', desc: 'Gris tempête' },
  { id: 'm25', name: 'Electric Purple', hex: '#BF00FF', pricePerSqFt: 9.00, img: 'https://images.pexels.com/photos/6044266/pexels-photo-6044266.jpeg?auto=compress&w=600', desc: 'Violet électrique' },
];

/* ─── 25 FLOCONS DÉCORATIFS ─── */
const flakeColors = [
  { id: 'f1', name: 'Blanc Neige', hex: '#FFFAFA', pricePerSqFt: 7.50, img: 'https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&w=600', desc: 'Flocons blancs purs' },
  { id: 'f2', name: 'Noir Profond', hex: '#0a0a0a', pricePerSqFt: 7.50, img: 'https://images.pexels.com/photos/406831/pexels-photo-406831.jpeg?auto=compress&w=600', desc: 'Noir intense' },
  { id: 'f3', name: 'Gris Anthracite', hex: '#383838', pricePerSqFt: 7.50, img: 'https://images.pexels.com/photos/5797998/pexels-photo-5797998.jpeg?auto=compress&w=600', desc: 'Gris foncé métallique' },
  { id: 'f4', name: 'Beige Sable', hex: '#F5F5DC', pricePerSqFt: 7.50, img: 'https://images.pexels.com/photos/221027/pexels-photo-221027.jpeg?auto=compress&w=600', desc: 'Sable naturel' },
  { id: 'f5', name: 'Bleu Glacier', hex: '#A5F2F3', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/3062948/pexels-photo-3062948.jpeg?auto=compress&w=600', desc: 'Bleu glacé' },
  { id: 'f6', name: 'Vert Forêt', hex: '#228B22', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/7256845/pexels-photo-7256845.jpeg?auto=compress&w=600', desc: 'Vert forêt profond' },
  { id: 'f7', name: 'Rouge Brique', hex: '#B22222', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/7256576/pexels-photo-7256576.jpeg?auto=compress&w=600', desc: 'Rouge brique' },
  { id: 'f8', name: 'Jaune Soleil', hex: '#FFD700', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/33973337/pexels-photo-33973337.jpeg?auto=compress&w=600', desc: 'Jaune lumineux' },
  { id: 'f9', name: 'Orange Terre', hex: '#CC5500', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/36681931/pexels-photo-36681931.jpeg?auto=compress&w=600', desc: 'Orange brûlé' },
  { id: 'f10', name: 'Violet Royal', hex: '#7851A9', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/8985699/pexels-photo-8985699.jpeg?auto=compress&w=600', desc: 'Violet majestueux' },
  { id: 'f11', name: 'Rose Poudré', hex: '#FFB6C1', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/30589158/pexels-photo-30589158.jpeg?auto=compress&w=600', desc: 'Rose délicat' },
  { id: 'f12', name: 'Turquoise', hex: '#40E0D0', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/29922289/pexels-photo-29922289.jpeg?auto=compress&w=600', desc: 'Turquoise éclatant' },
  { id: 'f13', name: 'Argent Métal', hex: '#C0C0C0', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/20251621/pexels-photo-20251621.jpeg?auto=compress&w=600', desc: 'Flocons argentés' },
  { id: 'f14', name: 'Or Métallique', hex: '#D4AF37', pricePerSqFt: 8.00, img: 'https://images.pexels.com/photos/9139594/pexels-photo-9139594.jpeg?auto=compress&w=600', desc: 'Flocons dorés' },
  { id: 'f15', name: 'Cuivre Antique', hex: '#B87333', pricePerSqFt: 8.00, img: 'https://images.pexels.com/photos/17181949/pexels-photo-17181949.jpeg?auto=compress&w=600', desc: 'Cuivre vieilli' },
  { id: 'f16', name: 'Marron Chocolat', hex: '#7B3F00', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/17580916/pexels-photo-17580916.jpeg?auto=compress&w=600', desc: 'Brun chocolat' },
  { id: 'f17', name: 'Kaki Militaire', hex: '#728C69', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/14002097/pexels-photo-14002097.jpeg?auto=compress&w=600', desc: 'Vert kaki' },
  { id: 'f18', name: 'Corail Vif', hex: '#FF6B6B', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/103598/pexels-photo-103598.jpeg?auto=compress&w=600', desc: 'Corail éclatant' },
  { id: 'f19', name: 'Indigo Nuit', hex: '#4B0082', pricePerSqFt: 8.00, img: 'https://images.pexels.com/photos/12139561/pexels-photo-12139561.jpeg?auto=compress&w=600', desc: 'Indigo profond' },
  { id: 'f20', name: 'Saumon Rose', hex: '#FA8072', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/1643383/pexels-photo-1643383.jpeg?auto=compress&w=600', desc: 'Rose saumon' },
  { id: 'f21', name: 'Citron Vert', hex: '#32CD32', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/31601977/pexels-photo-31601977.jpeg?auto=compress&w=600', desc: 'Vert citron' },
  { id: 'f22', name: 'Bleu Marine', hex: '#000080', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/1080721/pexels-photo-1080721.jpeg?auto=compress&w=600', desc: 'Bleu marine foncé' },
  { id: 'f23', name: 'Mauve Doux', hex: '#E0B0FF', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/1358900/pexels-photo-1358900.jpeg?auto=compress&w=600', desc: 'Mauve pastel' },
  { id: 'f24', name: 'Rouge Feu', hex: '#CE2029', pricePerSqFt: 7.75, img: 'https://images.pexels.com/photos/1648771/pexels-photo-1648771.jpeg?auto=compress&w=600', desc: 'Rouge flamboyant' },
  { id: 'f25', name: 'Mix Arc-en-ciel', hex: 'multi', pricePerSqFt: 9.00, img: 'https://images.pexels.com/photos/268460/pexels-photo-268460.jpeg?auto=compress&w=600', desc: 'Mélange multicolore premium' },
];

export default function EpoxyShop() {
  const [mounted, setMounted] = useState(false);
  const [activeTab, setActiveTab] = useState<'metallic' | 'flakes'>('metallic');
  const [cart, setCart] = useState<any[]>([]);
  const [showCart, setShowCart] = useState(false);
  const [sqFt, setSqFt] = useState(100);
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const [showQuote, setShowQuote] = useState(false);

  useEffect(() => { setMounted(true); }, []);

  const addToCart = (item: any) => {
    const cartItem = {
      ...item,
      quantity: 1,
      sqFt: sqFt,
      totalPrice: item.pricePerSqFt * sqFt
    };
    setCart([...cart, cartItem]);
    setShowCart(true);
  };

  const removeFromCart = (id: string) => {
    setCart(cart.filter(item => item.id !== id));
  };

  const updateQuantity = (id: string, delta: number) => {
    setCart(cart.map(item => {
      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty, totalPrice: item.pricePerSqFt * item.sqFt * newQty };
      }
      return item;
    }));
  };

  const cartTotal = cart.reduce((sum, item) => sum + item.totalPrice, 0);
  const cartTax = cartTotal * 0.14975;
  const cartGrandTotal = cartTotal + cartTax;

  const currentItems = activeTab === 'metallic' ? metallicColors : flakeColors;

  if (!mounted) return null;

  return (
    <div className="min-h-screen bg-black text-white">
      
      {/* HEADER */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <img src="/logo.png" alt="ZeniCorp" className="w-10 h-10 object-contain" />
            <div>
              <span className="font-bold text-xl">ZENICORP</span>
              <span className="text-cyan-400 font-bold text-xl ml-1">ÉPOXY</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <div className="hidden md:flex items-center gap-2 text-sm text-white/60">
              <span className="text-cyan-400 font-bold">$7.50 - $12.00</span>
              <span>/pied²</span>
            </div>
            
            <button 
              onClick={() => setShowCart(true)}
              className="relative flex items-center gap-2 px-4 py-2 bg-cyan-600 rounded-lg hover:bg-cyan-500 transition-colors"
            >
              <ShoppingCart className="w-5 h-5" />
              <span className="font-bold">Panier</span>
              {cart.length > 0 && (
                <span className="absolute -top-2 -right-2 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-sm font-bold">
                  {cart.length}
                </span>
              )}
            </button>
          </div>
        </div>
      </header>

      {/* HERO */}
      <section className="pt-32 pb-12 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h1 className="text-6xl md:text-8xl font-black mb-6">
              <span className="text-white">BOUTIQUE</span>
              <span className="text-cyan-400 ml-4">PRO</span>
            </h1>
            <p className="text-xl text-white/60 max-w-2xl mx-auto mb-8">
              50 finitions disponibles. Prix compétitifs de <span className="text-cyan-400 font-bold">$7.50 à $12.00/pied²</span>.
              Installation garantie 10 ans.
            </p>
            
            {/* TABS */}
            <div className="flex justify-center gap-4 mb-8">
              <button
                onClick={() => setActiveTab('metallic')}
                className={`flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all ${
                  activeTab === 'metallic'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Palette className="w-5 h-5" />
                Métalliques (25)
              </button>
              <button
                onClick={() => setActiveTab('flakes')}
                className={`flex items-center gap-2 px-8 py-4 rounded-full text-lg font-bold transition-all ${
                  activeTab === 'flakes'
                    ? 'bg-cyan-500 text-black'
                    : 'bg-white/10 text-white hover:bg-white/20'
                }`}
              >
                <Sparkles className="w-5 h-5" />
                Flocons (25)
              </button>
            </div>

            {/* SQ FT SELECTOR */}
            <div className="inline-flex items-center gap-4 bg-white/5 px-6 py-3 rounded-full border border-white/10">
              <Calculator className="w-5 h-5 text-cyan-400" />
              <span className="text-white/60">Surface:</span>
              <input
                type="number"
                value={sqFt}
                onChange={(e) => setSqFt(Math.max(1, parseInt(e.target.value) || 0))}
                className="w-24 bg-transparent text-center text-xl font-bold border-b-2 border-cyan-400 focus:outline-none"
              />
              <span className="text-white/60">pieds²</span>
            </div>
          </div>

          {/* PRODUCTS GRID */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {currentItems.map((item) => (
              <div
                key={item.id}
                className="group bg-white/5 rounded-xl overflow-hidden border border-white/10 hover:border-cyan-500/50 transition-all hover:transform hover:scale-[1.02]"
              >
                <div className="relative aspect-square">
                  <img
                    src={item.img}
                    alt={item.name}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                  <div className="absolute top-2 right-2">
                    <div 
                      className="w-8 h-8 rounded-full border-2 border-white/50 shadow-lg"
                      style={{ backgroundColor: item.hex === 'multi' ? 'linear-gradient(45deg, red, blue, green)' : item.hex }}
                    />
                  </div>
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <p className="font-bold text-sm">{item.name}</p>
                    <p className="text-xs text-white/60">{item.desc}</p>
                  </div>
                </div>
                
                <div className="p-3">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-2xl font-black text-cyan-400">${item.pricePerSqFt.toFixed(2)}</span>
                    <span className="text-xs text-white/40">/pied²</span>
                  </div>
                  <div className="text-xs text-white/40 mb-3">
                    Total: ${(item.pricePerSqFt * sqFt).toFixed(0)} pour {sqFt}p²
                  </div>
                  <button
                    onClick={() => addToCart(item)}
                    className="w-full py-2 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg flex items-center justify-center gap-2 transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                    Ajouter
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CART MODAL */}
      {showCart && (
        <div 
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4"
          onClick={() => setShowCart(false)}
        >
          <div 
            className="w-full max-w-2xl bg-zinc-900 rounded-3xl p-6 border border-white/10 max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-3xl font-black">Votre Panier</h2>
              <button 
                onClick={() => setShowCart(false)}
                className="p-2 hover:bg-white/10 rounded-full"
              >
                <X className="w-6 h-6" />
              </button>
            </div>

            {cart.length === 0 ? (
              <p className="text-center text-white/40 py-12">Votre panier est vide</p>
            ) : (
              <>
                <div className="space-y-4 mb-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex items-center gap-4 p-4 bg-white/5 rounded-xl">
                      <div 
                        className="w-16 h-16 rounded-lg flex-shrink-0"
                        style={{ backgroundColor: item.hex === 'multi' ? '#666' : item.hex }}
                      />
                      <div className="flex-1">
                        <p className="font-bold">{item.name}</p>
                        <p className="text-sm text-white/60">{item.sqFt} pieds² × ${item.pricePerSqFt}/p²</p>
                      </div>
                      <div className="text-right">
                        <p className="text-xl font-black text-cyan-400">${item.totalPrice.toFixed(2)}</p>
                        <button 
                          onClick={() => removeFromCart(item.id)}
                          className="text-red-400 text-sm hover:text-red-300 flex items-center gap-1 mt-1"
                        >
                          <Trash2 className="w-4 h-4" />
                          Supprimer
                        </button>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="border-t border-white/10 pt-6 space-y-2">
                  <div className="flex justify-between text-white/60">
                    <span>Sous-total</span>
                    <span>${cartTotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-white/60">
                    <span>Taxes (14.975%)</span>
                    <span>${cartTax.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-2xl font-black pt-2 border-t border-white/10">
                    <span>Total</span>
                    <span className="text-cyan-400">${cartGrandTotal.toFixed(2)}</span>
                  </div>
                </div>

                <button 
                  onClick={() => {
                    setShowCart(false);
                    setShowQuote(true);
                  }}
                  className="w-full mt-6 py-4 bg-cyan-500 hover:bg-cyan-400 text-black font-black text-xl rounded-xl transition-colors"
                >
                  DEMANDER UN DEVIS
                </button>

                <p className="text-center text-white/40 text-sm mt-4">
                  Ou appelle directement: <a href="tel:5817487017" className="text-cyan-400 font-bold">581-748-7017</a>
                </p>
              </>
            )}
          </div>
        </div>
      )}

      {/* QUOTE MODAL */}
      {showQuote && (
        <div className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4">
          <div className="w-full max-w-lg bg-zinc-900 rounded-3xl p-8 border border-white/10">
            <h2 className="text-3xl font-black mb-6 text-center">Demande de Devis</h2>
            
            <form className="space-y-4">
              <input 
                type="text" 
                placeholder="Nom complet"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              />
              <input 
                type="tel" 
                placeholder="Téléphone"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              />
              <input 
                type="text" 
                placeholder="Adresse"
                className="w-full px-4 py-3 bg-white/5 border border-white/20 rounded-xl text-white focus:border-cyan-500 focus:outline-none"
              />
              
              <div className="p-4 bg-white/5 rounded-xl">
                <p className="text-sm text-white/60 mb-2">Récapitulatif:</p>
                <p className="text-2xl font-black text-cyan-400">{cart.length} article(s)</p>
                <p className="text-xl">Total: ${cartGrandTotal.toFixed(2)}</p>
              </div>

              <button 
                type="button"
                onClick={() => {
                  alert('Demande envoyée ! On te rappelle sous 24h au 581-748-7017');
                  setShowQuote(false);
                  setCart([]);
                }}
                className="w-full py-4 bg-cyan-500 text-black font-black text-xl rounded-xl"
              >
                ENVOYER MA DEMANDE
              </button>
            </form>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer className="py-8 px-4 border-t border-white/10 mt-20">
        <div className="max-w-7xl mx-auto text-center">
          <p className="text-2xl font-black text-cyan-400 mb-2">581-748-7017</p>
          <p className="text-white/40">Garantie 10 ans · Prix: $7.50 - $12.00/pied²</p>
        </div>
      </footer>
    </div>
  );
}
