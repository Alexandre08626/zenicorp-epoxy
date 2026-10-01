import Link from 'next/link';
import { PAGES, PHONE_DISPLAY, PHONE_TEL, BUSINESS_NAME, AREA_TEXT, money, PRICE_FLAKES, PRICE_METALLIC } from '@/lib/site';

export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />;
}

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 px-4 py-3 backdrop-blur-xl bg-black/80 border-b border-white/10">
      <div className="max-w-6xl mx-auto flex items-center justify-between gap-3">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <img src="/logo-128.png" alt="" width={32} height={32} className="w-8 h-8 object-contain" />
          <span className="leading-none">
            <span className="block font-bold tracking-tight">ZENI<span className="text-cyan-400">CORP</span></span>
            <span className="block text-[9px] text-white/50 tracking-widest uppercase">Époxy</span>
          </span>
        </Link>
        <nav aria-label="Navigation principale" className="hidden md:flex items-center gap-5 text-sm text-white/70">
          {PAGES.map((p) => (
            <Link key={p.path} href={p.path} className="hover:text-white">{p.label}</Link>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <Link href="/soumission" className="px-3 py-2 rounded-xl bg-cyan-500 text-black text-sm font-bold hover:bg-cyan-400">Soumission gratuite</Link>
          <a href={`tel:${PHONE_TEL}`} className="hidden sm:inline-flex px-3 py-2 rounded-xl border border-white/20 text-sm font-bold hover:bg-white/10">{PHONE_DISPLAY}</a>
        </div>
      </div>
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="py-10 px-4 border-t border-white/10 bg-black text-white/60 text-sm">
      <div className="max-w-6xl mx-auto grid gap-8 sm:grid-cols-3">
        <div>
          <p className="font-bold text-white text-base mb-2">{BUSINESS_NAME}</p>
          <p>Planchers époxy pour garages, sous-sols et locaux commerciaux.</p>
          <p className="mt-2">Secteur : {AREA_TEXT}.</p>
        </div>
        <div>
          <p className="font-bold text-white mb-2">Pages</p>
          <ul className="space-y-1">
            <li><Link href="/" className="hover:text-white">Accueil</Link></li>
            {PAGES.map((p) => (
              <li key={p.path}><Link href={p.path} className="hover:text-white">{p.label === 'Prix' ? 'Prix d’un plancher époxy' : p.label === 'À propos' ? 'À propos' : `Plancher époxy — ${p.label.toLowerCase()}`}</Link></li>
            ))}
            <li><Link href="/soumission" className="hover:text-white">Soumission gratuite</Link></li>
          </ul>
        </div>
        <div>
          <p className="font-bold text-white mb-2">Nous joindre</p>
          <p><a href={`tel:${PHONE_TEL}`} className="text-cyan-400 font-bold text-lg">{PHONE_DISPLAY}</a></p>
          <p className="mt-2">Tarifs affichés : {money(PRICE_FLAKES)} (flocons) et {money(PRICE_METALLIC)} (métallique) le pi², prix final confirmé après visite.</p>
        </div>
      </div>
    </footer>
  );
}

export function CtaBox({ title = 'Obtenez votre prix exact' }: { title?: string }) {
  return (
    <div className="my-10 p-6 sm:p-8 rounded-3xl border border-cyan-500/30 bg-gradient-to-br from-cyan-500/10 to-blue-500/10">
      <p className="text-2xl font-black mb-2">{title}</p>
      <p className="text-white/70 mb-5">Estimation gratuite et sans engagement. Décrivez votre plancher en 2 minutes ou appelez-nous.</p>
      <div className="flex flex-col sm:flex-row gap-3">
        <Link href="/soumission" className="text-center px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black">Demander ma soumission gratuite</Link>
        <a href={`tel:${PHONE_TEL}`} className="text-center px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/10 font-bold">Appeler le {PHONE_DISPLAY}</a>
      </div>
    </div>
  );
}

export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <div className="space-y-3">
      {faqs.map((f) => (
        <details key={f.q} className="group rounded-2xl border border-white/10 bg-white/5 p-5">
          <summary className="cursor-pointer font-bold text-lg list-none flex justify-between gap-4">
            <span>{f.q}</span><span className="text-cyan-400 group-open:rotate-45 transition-transform">+</span>
          </summary>
          <p className="mt-3 text-white/70 leading-relaxed">{f.a}</p>
        </details>
      ))}
    </div>
  );
}
