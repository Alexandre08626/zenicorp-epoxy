import Link from 'next/link';
import {
  Shield,
  Clock,
  Award,
  SprayCan,
  Factory,
  Building2,
  Home,
  CheckCircle2,
  Phone,
  FileText,
  Star,
  Droplets,
  Zap,
  Wrench,
  Paintbrush,
} from 'lucide-react';

const services = [
  {
    icon: Home,
    title: 'Garage rÃ©sidentiel',
    desc: 'RevÃªtement Ã©poxy 100% solide pour votre garage. Fini lustrÃ©, antidÃ©rapant et rÃ©sistant aux produits chimiques.',
    features: ['PrÃ©paration complÃ¨te', 'Ã‰poxy 100% solide', 'Paillettes dÃ©coratives', 'Finis antidÃ©rapants'],
  },
  {
    icon: Building2,
    title: 'Commercial',
    desc: 'Sols commerciaux durables pour commerces, showrooms, ateliers et espaces publics Ã  fort achalandage.',
    features: ['RÃ©sistance Ã©levÃ©e', 'Entretien minimal', 'Installation hors heures', 'Normes municipales'],
  },
  {
    icon: Factory,
    title: 'Industriel',
    desc: 'RevÃªtements haute performance pour usines, entrepÃ´ts et espaces de production. RÃ©siste aux charges lourdes.',
    features: ['SystÃ¨mes polyurÃ©thane', 'RÃ©sistance chimique', 'Finition antidÃ©rapante', 'DurÃ©e de vie prolongÃ©e'],
  },
];

const realisations = [
  { title: 'Garage double - QuÃ©bec', desc: 'Ã‰poxy gris mÃ©tallique + paillettes argent', value: '4 800 $' },
  { title: 'Atelier mÃ©canique - LÃ©vis', desc: 'SystÃ¨me industriel rÃ©sistant aux huiles', value: '12 500 $' },
  { title: 'Showroom auto - MontrÃ©al', desc: 'Fini brillant haute rÃ©flexion', value: '18 000 $' },
  { title: 'Garage - Trois-RiviÃ¨res', desc: 'Ã‰poxy noir + bandes de sÃ©curitÃ©', value: '3 900 $' },
];

const faqs = [
  {
    q: 'Combien de temps prend l\'installation ?',
    a: 'GÃ©nÃ©ralement 2-3 jours pour un garage standard (prÃ©paration + application + sÃ©chage). Un plancher est utilisable aprÃ¨s 24-48h.',
  },
  {
    q: 'Est-ce que c\'est glissant ?',
    a: 'Non. Nous ajoutons des additifs antidÃ©rapants selon l\'usage : plus agressif pour un garage, plus doux pour un intÃ©rieur.',
  },
  {
    q: 'Quelle est la garantie ?',
    a: 'Tous nos revÃªtements sont garantis 5 ans contre le dÃ©collement, l\'Ã©caillage et les dÃ©fauts d\'application.',
  },
  {
    q: 'Peut-on le faire en hiver ?',
    a: 'Oui. Nos Ã©quipes travaillent Ã  l\'annÃ©e dans des espaces chauffÃ©s. Le rÃ©sultat est identique.',
  },
];

export default function EpoxyPage() {
  return (
    <>
      {/* HERO */}
      <section className="relative bg-zenicorp-black text-white">
        <div className="absolute inset-0 bg-gradient-to-br from-zenicorp-black via-zenicorp-darkGray to-zenicorp-black"></div>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'repeating-linear-gradient(45deg, #3B82F6 0px, #3B82F6 1px, transparent 1px, transparent 60px)' }}></div>
        <div className="container-zenicorp relative py-20 lg:py-28">
          <div className="max-w-3xl animate-slide-up">
            <div className="inline-flex items-center gap-2 bg-zenicorp-gold/10 border border-zenicorp-gold/40 px-4 py-1.5 mb-6">
              <Shield className="w-4 h-4 text-zenicorp-gold" />
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-zenicorp-gold">Division Ã‰poxy de ZeniCorp</span>
            </div>
            <h1 className="heading-1 text-white !text-4xl sm:!text-5xl lg:!text-6xl mb-6">
              Des planchers d&apos;exception.
              <span className="block text-zenicorp-gold">Sans compromis.</span>
            </h1>
            <p className="text-lg text-zenicorp-silver mb-8 max-w-2xl">
              RevÃªtements de sol en Ã©poxy 100% solide pour garages rÃ©sidentiels, espaces commerciaux et industries.
              PrÃ©paration minutieuse, matÃ©riaux haut de gamme, fini impeccable.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="/soumission" className="btn-gold">Obtenir une soumission gratuite</a>
              <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
                <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
              </a>
            </div>
            <div className="flex flex-wrap gap-8 mt-12">
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Garantie 5 ans
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Soumission sous 24h
              </div>
              <div className="flex items-center gap-2 text-sm text-zenicorp-silver">
                <CheckCircle2 className="w-5 h-5 text-zenicorp-gold" /> Ã‰quipes certifiÃ©es RBQ
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* BANDEAU AVANTAGES */}
      <section className="bg-white border-b border-zenicorp-border">
        <div className="container-zenicorp py-8 grid grid-cols-2 md:grid-cols-4 gap-6">
          <div className="flex items-center gap-3">
            <Award className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Garantie 5 ans</p>
              <p className="text-xs text-zenicorp-mediumGray">Ã‰crite, incluse</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Clock className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Installation rapide</p>
              <p className="text-xs text-zenicorp-mediumGray">2-3 jours typiques</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Droplets className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">Ã‰poxy 100% solide</p>
              <p className="text-xs text-zenicorp-mediumGray">ZÃ©ro eau, zÃ©ro odeur</p>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Shield className="w-8 h-8 text-zenicorp-gold flex-shrink-0" />
            <div>
              <p className="font-semibold text-sm">AntidÃ©rapant</p>
              <p className="text-xs text-zenicorp-mediumGray">Additifs selon usage</p>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="section-padding bg-zenicorp-lightGray">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Nos services</p>
            <h2 className="heading-2">Un revÃªtement pour chaque besoin</h2>
            <p className="body-base mt-4">Du garage rÃ©sidentiel Ã  l&apos;usine de production, nos systÃ¨mes sont conÃ§us pour durer.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="card p-6">
                <div className="w-12 h-12 bg-zenicorp-black flex items-center justify-center mb-4">
                  <service.icon className="w-6 h-6 text-zenicorp-gold" />
                </div>
                <h3 className="heading-3 mb-3">{service.title}</h3>
                <p className="body-base text-sm mb-4">{service.desc}</p>
                <ul className="space-y-2">
                  {service.features.map((f) => (
                    <li key={f} className="flex items-center gap-2 text-sm text-zenicorp-mediumGray">
                      <CheckCircle2 className="w-4 h-4 text-zenicorp-gold" /> {f}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* RÃ‰ALISATIONS */}
      <section id="realisations" className="section-padding bg-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">RÃ©alisations</p>
            <h2 className="heading-2">Des projets rÃ©cents</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {realisations.map((r) => (
              <div key={r.title} className="card p-6">
                <div className="h-32 bg-gradient-to-br from-zenicorp-darkGray to-zenicorp-black flex items-center justify-center mb-4">
                  <Paintbrush className="w-10 h-10 text-zenicorp-gold" />
                </div>
                <h3 className="font-semibold text-sm">{r.title}</h3>
                <p className="text-xs text-zenicorp-mediumGray mt-1">{r.desc}</p>
                <p className="text-zenicorp-gold font-bold text-sm mt-2">{r.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROCESSUS */}
      <section className="section-padding bg-zenicorp-black text-white">
        <div className="container-zenicorp">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Comment Ã§a marche</p>
            <h2 className="heading-2 text-white">3 Ã©tapes simples</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { n: '01', t: 'Soumission', d: 'Remplissez notre formulaire en 2 minutes. RÃ©ponse sous 24h avec prix dÃ©taillÃ©.' },
              { n: '02', t: 'Inspection & prÃ©paration', d: 'Inspection gratuite de votre plancher. PrÃ©paration complÃ¨te incluse : ponÃ§age, fissures, nettoyage.' },
              { n: '03', t: 'Application', d: 'Application par nos Ã©quipes certifiÃ©es. Fini impeccable, garantie 5 ans.' },
            ].map((s) => (
              <div key={s.n} className="border border-zenicorp-mediumGray p-6">
                <span className="font-heading text-5xl text-zenicorp-gold font-bold">{s.n}</span>
                <h3 className="text-xl font-semibold mt-4 mb-2">{s.t}</h3>
                <p className="text-sm text-zenicorp-silver">{s.d}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* GARANTIE */}
      <section id="garantie" className="section-padding bg-white">
        <div className="container-zenicorp">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">Notre garantie</p>
              <h2 className="heading-2 mb-6">Garantie 5 ans Ã©crite</h2>
              <p className="body-base mb-6">
                Tous nos revÃªtements de sol sont garantis par Ã©crit 5 ans contre le dÃ©collement, l&apos;Ã©caillage,
                les bulles et les dÃ©fauts d&apos;application. Notre prÃ©paration de surface en 5 Ã©tapes est la clÃ©
                d&apos;un plancher qui dure.
              </p>
              <ul className="space-y-3 mb-8">
                {['Nettoyage haute pression & dÃ©graissage', 'Meulage complet de la surface', 'RÃ©paration des fissures', 'Primaire d\'adhÃ©rence', 'Application 2 couches d\'Ã©poxy'].map((s) => (
                  <li key={s} className="flex items-center gap-3 text-sm">
                    <CheckCircle2 className="w-5 h-5 text-zenicorp-gold flex-shrink-0" /> {s}
                  </li>
                ))}
              </ul>
              <a href="/soumission" className="btn-primary">Planifier une soumission</a>
            </div>
            <div className="bg-zenicorp-lightGray p-8 border border-zenicorp-border">
              <div className="flex items-center gap-2 mb-4">
                <Star className="w-5 h-5 text-zenicorp-gold fill-zenicorp-gold" />
                <span className="font-semibold">4.9/5 - 250+ clients satisfaits</span>
              </div>
              <blockquote className="body-base italic mb-4">
                Â« Plancher refait en 2 jours, rÃ©sultat impeccable. Le suivi a Ã©tÃ© exceptionnel du dÃ©but Ã  la fin. Â»
              </blockquote>
              <p className="text-sm font-semibold">Marc T., QuÃ©bec</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="section-padding bg-zenicorp-lightGray">
        <div className="container-zenicorp max-w-3xl">
          <div className="text-center mb-12">
            <p className="text-zenicorp-gold font-semibold uppercase tracking-[0.2em] text-xs mb-3">FAQ</p>
            <h2 className="heading-2">Questions frÃ©quentes</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((f) => (
              <details key={f.q} className="card p-6 group">
                <summary className="flex items-center justify-between cursor-pointer font-semibold">
                  {f.q}
                  <span className="text-zenicorp-gold text-xl group-open:rotate-45 transition-transform">+</span>
                </summary>
                <p className="body-base text-sm mt-4">{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* CTA FINAL */}
      <section className="bg-zenicorp-black text-white">
        <div className="container-zenicorp py-16 text-center">
          <h2 className="heading-2 text-white mb-4">PrÃªt Ã  transformer votre plancher ?</h2>
          <p className="text-zenicorp-silver mb-8">Soumission gratuite sous 24h. Aucun engagement.</p>
          <div className="flex flex-wrap justify-center gap-4">
            <a href="/soumission" className="btn-gold">Obtenir ma soumission gratuite</a>
            <a href="tel:18009364267" className="btn-secondary !border-white !text-white hover:!bg-white hover:!text-zenicorp-black">
              <Phone className="w-4 h-4 mr-2" /> 1-800-ZENICORP
            </a>
          </div>
        </div>
      </section>
    </>
  );
}