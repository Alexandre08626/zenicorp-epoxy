import type { Metadata } from 'next';
import Link from 'next/link';
import EpoxyHome from '@/components/EpoxyHome';
import { SiteFooter, FaqList, CtaBox, JsonLd } from '@/components/SiteChrome';
import { PRICE_FLAKES, PRICE_METALLIC, DEPOSIT_PCT, PHONE_DISPLAY, AREA_TEXT, SITE_URL, BUSINESS_ID, BUSINESS_NAME, money, faqJsonLd } from '@/lib/site';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: { url: '/', title: 'Plancher époxy à Québec et Lévis | ZeniCorp Époxy' },
};

const faqs = [
  {
    q: 'Combien coûte un plancher époxy à Québec ?',
    a: `ZeniCorp Époxy affiche ${money(PRICE_FLAKES)} le pied carré pour une finition à flocons et ${money(PRICE_METALLIC)} le pied carré pour une finition métallique. Par exemple, un garage simple d’environ 240 pi² revient à environ ${money(240 * PRICE_FLAKES)} en flocons. Le prix final est confirmé par écrit après la visite.`,
  },
  {
    q: 'Faites-vous les planchers époxy à Lévis ?',
    a: `Oui. ZeniCorp Époxy sert ${AREA_TEXT}.`,
  },
  {
    q: 'Quelle est la différence entre un plancher époxy à flocons et un plancher métallique ?',
    a: 'Le plancher à flocons contient des flocons décoratifs dispersés dans la résine : texture qui aide à l’adhérence, idéal pour un garage ou un atelier. Le plancher métallique donne un effet miroir ou marbré haut de gamme (8 couleurs), apprécié dans les sous-sols, les salles d’exposition et les garages vitrines.',
  },
  {
    q: 'Comment réserver une date d’installation ?',
    a: `Configurez votre projet en ligne (bouton « Réserver ma date ») ou envoyez une soumission gratuite. L’équipe confirme la date, puis envoie un lien de paiement sécurisé ZeniPay pour l’acompte de ${DEPOSIT_PCT} % ; le solde est payable après l’installation.`,
  },
  {
    q: 'Faites-vous les garages, les sous-sols et les commerces ?',
    a: 'Oui : garages résidentiels, sous-sols, ainsi que locaux commerciaux et industriels (boutiques, ateliers, entrepôts).',
  },
  {
    q: 'Comment obtenir une estimation gratuite ?',
    a: `Utilisez le calculateur sur cette page (devis PDF immédiat), remplissez la soumission gratuite en ligne, ou appelez le ${PHONE_DISPLAY}.`,
  },
];

const services = [
  { href: '/plancher-epoxy-garage', title: 'Plancher époxy de garage', text: 'Dalle scellée, facile à laver après l’hiver (calcium, neige fondante). Flocons ou métallique.', img: '/images/flakes-options.jpg' },
  { href: '/plancher-epoxy-sous-sol', title: 'Plancher époxy de sous-sol', text: 'Transformez un sous-sol en béton en pièce de vie, avec évaluation de l’humidité à la visite.', img: '/images/realisation-4.jpg' },
  { href: '/plancher-epoxy-commercial', title: 'Commercial et industriel', text: 'Boutiques, salles d’exposition, ateliers et entrepôts à Québec et Lévis.', img: '/images/realisation-application.jpg' },
];

export default function Page() {
  return (
    <>
      <JsonLd data={faqJsonLd(faqs)} />
      <JsonLd data={{ '@context': 'https://schema.org', '@type': 'WebSite', '@id': `${SITE_URL}/#website`, url: `${SITE_URL}/`, name: BUSINESS_NAME, inLanguage: 'fr-CA', publisher: { '@id': BUSINESS_ID } }} />
      <EpoxyHome>
        <section className="py-20 px-4 sm:px-6 bg-black">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-4">Nos services de <span className="text-cyan-400">plancher époxy</span></h2>
            <p className="text-white/60 text-center mb-12 max-w-2xl mx-auto">À Québec, Lévis et environs : {money(PRICE_FLAKES)}/pi² en flocons, {money(PRICE_METALLIC)}/pi² en métallique. <Link href="/prix-plancher-epoxy" className="text-cyan-400 underline">Voir les prix détaillés</Link>.</p>
            <div className="grid gap-6 sm:grid-cols-3">
              {services.map((s) => (
                <Link key={s.href} href={s.href} className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 hover:border-cyan-400 transition-colors">
                  <img src={s.img} alt="" loading="lazy" className="w-full aspect-[4/3] object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-black mb-2 group-hover:text-cyan-400">{s.title}</h3>
                    <p className="text-white/60 text-sm">{s.text}</p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-20 px-4 sm:px-6 bg-zinc-950">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-4xl font-black text-center mb-10">Questions <span className="text-cyan-400">fréquentes</span></h2>
            <FaqList faqs={faqs} />
            <CtaBox title="Prêt à refaire votre plancher ?" />
          </div>
        </section>
      </EpoxyHome>
      <SiteFooter />
    </>
  );
}
