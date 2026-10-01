import Link from 'next/link';
import { SiteHeader, SiteFooter, CtaBox, FaqList, JsonLd } from '@/components/SiteChrome';
import { BUSINESS_ID, SITE_URL, breadcrumbJsonLd, faqJsonLd, type Faq } from '@/lib/site';

type Section = { h2: string; body: React.ReactNode };

export default function LandingPage({
  path, crumb, h1, lead, image, imageAlt, serviceName, sections, faqs, related,
}: {
  path: string; crumb: string; h1: string; lead: React.ReactNode; image?: string; imageAlt?: string;
  serviceName?: string; sections: Section[]; faqs: Faq[]; related: { href: string; label: string }[];
}) {
  const ld: object[] = [
    breadcrumbJsonLd([{ name: 'Accueil', path: '/' }, { name: crumb, path }]),
    faqJsonLd(faqs),
  ];
  if (serviceName) {
    ld.push({
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: serviceName,
      serviceType: 'Installation de plancher époxy',
      url: `${SITE_URL}${path}`,
      provider: { '@id': BUSINESS_ID },
      areaServed: [{ '@type': 'City', name: 'Québec' }, { '@type': 'City', name: 'Lévis' }],
    });
  }
  return (
    <div className="min-h-screen bg-black text-white">
      <SiteHeader />
      {ld.map((d, i) => <JsonLd key={i} data={d} />)}
      <main className="max-w-3xl mx-auto px-4 py-10">
        <nav aria-label="Fil d’Ariane" className="text-sm text-white/50 mb-6">
          <Link href="/" className="hover:text-white">Accueil</Link> <span aria-hidden>›</span> <span>{crumb}</span>
        </nav>
        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight mb-5">{h1}</h1>
        <div className="text-lg text-white/75 leading-relaxed mb-6">{lead}</div>
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          <Link href="/soumission" className="text-center px-6 py-4 rounded-2xl bg-cyan-500 hover:bg-cyan-400 text-black font-black">Soumission gratuite</Link>
          <Link href="/#calculateur" className="text-center px-6 py-4 rounded-2xl border border-white/20 hover:bg-white/10 font-bold">Calculer mon prix</Link>
        </div>
        {image && (
          <img src={image} alt={imageAlt || ''} loading="lazy" className="w-full aspect-[16/9] object-cover rounded-3xl mb-10" />
        )}
        {sections.map((s) => (
          <section key={s.h2} className="mb-10">
            <h2 className="text-2xl sm:text-3xl font-black mb-4">{s.h2}</h2>
            <div className="space-y-4 text-white/75 leading-relaxed [&_strong]:text-white [&_a]:text-cyan-400 [&_a]:underline [&_li]:ml-5 [&_ul]:list-disc [&_ul]:space-y-2 [&_table]:w-full [&_td]:py-2 [&_td]:pr-3 [&_th]:py-2 [&_th]:pr-3 [&_th]:text-left [&_tr]:border-b [&_tr]:border-white/10">{s.body}</div>
          </section>
        ))}
        <CtaBox />
        <section className="mb-10">
          <h2 className="text-2xl sm:text-3xl font-black mb-4">Questions fréquentes</h2>
          <FaqList faqs={faqs} />
        </section>
        <section className="mb-6">
          <h2 className="text-xl font-black mb-3">Voir aussi</h2>
          <ul className="flex flex-wrap gap-2">
            {related.map((r) => (
              <li key={r.href}><Link href={r.href} className="inline-block px-4 py-2 rounded-full border border-white/15 hover:border-cyan-400 text-sm">{r.label}</Link></li>
            ))}
          </ul>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}
