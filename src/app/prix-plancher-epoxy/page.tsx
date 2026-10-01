import type { Metadata } from 'next';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import { PRICE_FLAKES, PRICE_METALLIC, DEPOSIT_PCT, money } from '@/lib/site';

const path = '/prix-plancher-epoxy';

export const metadata: Metadata = {
  title: `Prix plancher époxy à Québec : ${money(PRICE_FLAKES)} à ${money(PRICE_METALLIC)} le pi²`,
  description: `Combien coûte un plancher époxy à Québec et Lévis ? Tarifs affichés : ${money(PRICE_FLAKES)}/pi² (flocons) et ${money(PRICE_METALLIC)}/pi² (métallique), exemples pour garage simple, double et sous-sol.`,
  alternates: { canonical: path },
  openGraph: { url: path, title: 'Prix d’un plancher époxy à Québec et Lévis', images: ['/og-epoxy.jpg'] },
};

const examples = [
  { label: 'Garage simple (environ 12 × 20 pi)', sqft: 240 },
  { label: 'Garage double (environ 20 × 22 pi)', sqft: 440 },
  { label: 'Sous-sol ouvert (environ 600 pi²)', sqft: 600 },
  { label: 'Local commercial (1 000 pi²)', sqft: 1000 },
];

const faqs = [
  {
    q: 'Combien coûte un plancher époxy au pied carré à Québec ?',
    a: `Chez ZeniCorp Époxy, le tarif affiché est de ${money(PRICE_FLAKES)} le pied carré pour une finition à flocons et de ${money(PRICE_METALLIC)} le pied carré pour une finition métallique. Le prix final est confirmé par écrit après la visite, selon l’état du béton.`,
  },
  {
    q: 'Combien coûte un plancher époxy pour un garage double ?',
    a: `Pour un garage double d’environ 440 pi², le calcul au tarif affiché donne ${money(440 * PRICE_FLAKES)} en finition à flocons et ${money(440 * PRICE_METALLIC)} en finition métallique. Mesurez la longueur et la largeur de votre garage pour un chiffre plus précis.`,
  },
  {
    q: 'Faut-il payer un acompte pour réserver ?',
    a: `Oui. Pour réserver une date, un acompte de ${DEPOSIT_PCT} % du total est demandé par un lien de paiement sécurisé ZeniPay envoyé par l’équipe. Le solde est payable après l’installation.`,
  },
  {
    q: 'L’estimation est-elle gratuite ?',
    a: 'Oui. Le calculateur en ligne, le devis PDF et la soumission sont gratuits et sans engagement.',
  },
];

export default function Page() {
  return (
    <LandingPage
      path={path}
      crumb="Prix d’un plancher époxy"
      h1="Prix d’un plancher époxy à Québec et Lévis"
      serviceName="Installation de plancher époxy — tarifs"
      lead={<p>Deux tarifs simples, affichés publiquement : <strong>{money(PRICE_FLAKES)} le pi²</strong> pour la finition à flocons et <strong>{money(PRICE_METALLIC)} le pi²</strong> pour la finition métallique. Multipliez par la superficie de votre plancher pour obtenir un ordre de grandeur, puis demandez la visite qui confirme le prix.</p>}
      image="/images/realisation-1.jpg"
      imageAlt="Plancher époxy métallique dans une résidence"
      sections={[
        {
          h2: 'Exemples de calcul',
          body: (
            <>
              <p>Ces montants sont de simples multiplications au tarif affiché. Ils servent à préparer votre budget. Le prix final est confirmé par écrit après la visite.</p>
              <div className="overflow-x-auto">
                <table>
                  <thead><tr><th>Surface</th><th>Flocons ({money(PRICE_FLAKES)}/pi²)</th><th>Métallique ({money(PRICE_METALLIC)}/pi²)</th></tr></thead>
                  <tbody>
                    {examples.map((e) => (
                      <tr key={e.sqft}><td>{e.label}</td><td>{money(e.sqft * PRICE_FLAKES)}</td><td>{money(e.sqft * PRICE_METALLIC)}</td></tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <p>Pour votre propre surface, utilisez le <Link href="/#calculateur">calculateur de devis</Link> : entrez vos pieds carrés et téléchargez un devis PDF.</p>
            </>
          ),
        },
        {
          h2: 'Ce qui fait varier le prix final',
          body: (
            <ul>
              <li><strong>La finition choisie</strong> : flocons (décoratif, texture qui aide à l’adhérence) ou métallique (effet miroir, 8 couleurs proposées).</li>
              <li><strong>La superficie réelle</strong> : mesurez longueur × largeur ; les marches, bordures ou recoins s’ajoutent.</li>
              <li><strong>L’état du béton</strong> : fissures, anciennes peintures, taches d’huile ou humidité sont évaluées lors de la visite.</li>
            </ul>
          ),
        },
        {
          h2: 'Comment réserver votre date',
          body: (
            <ul>
              <li>Configurez votre projet (surface, finition, couleur, date souhaitée) depuis la <Link href="/">page d’accueil</Link>, bouton « Boutique », ou envoyez une <Link href="/soumission">soumission gratuite</Link>.</li>
              <li>L’équipe vous rappelle pour confirmer la date et les détails.</li>
              <li>Vous recevez un lien de paiement sécurisé ZeniPay pour l’acompte de {DEPOSIT_PCT} %. Le solde se paie après l’installation.</li>
            </ul>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { href: '/plancher-epoxy-garage', label: 'Plancher époxy de garage' },
        { href: '/plancher-epoxy-sous-sol', label: 'Plancher époxy de sous-sol' },
        { href: '/plancher-epoxy-commercial', label: 'Plancher époxy commercial' },
      ]}
    />
  );
}
