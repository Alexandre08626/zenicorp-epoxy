import type { Metadata } from 'next';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import { PRICE_FLAKES, PRICE_METALLIC, money } from '@/lib/site';

const path = '/plancher-epoxy-sous-sol';

export const metadata: Metadata = {
  title: 'Plancher époxy de sous-sol à Québec et Lévis',
  description: `Finir un sous-sol en béton avec un plancher époxy à Québec ou Lévis : finition métallique (${money(PRICE_METALLIC)}/pi²) ou à flocons (${money(PRICE_FLAKES)}/pi²), évaluation de l’humidité à la visite.`,
  alternates: { canonical: path },
  openGraph: { url: path, title: 'Plancher époxy de sous-sol à Québec et Lévis', images: ['/og-epoxy.jpg'] },
};

const faqs = [
  {
    q: 'Peut-on mettre un plancher époxy dans un sous-sol ?',
    a: 'Oui, un sous-sol en béton peut recevoir un plancher époxy. Le point à vérifier est l’humidité qui remonte de la dalle : elle est évaluée lors de la visite avant de confirmer le projet.',
  },
  {
    q: 'Combien coûte un plancher époxy pour un sous-sol de 600 pi² ?',
    a: `Au tarif affiché, 600 pi² reviennent à ${money(600 * PRICE_FLAKES)} en finition à flocons et à ${money(600 * PRICE_METALLIC)} en finition métallique. Le prix final est confirmé après la visite.`,
  },
  {
    q: 'Quelle finition choisir pour un sous-sol habitable ?',
    a: 'Pour une salle familiale, un cinéma maison ou un bar de sous-sol, la finition métallique donne un effet décoratif haut de gamme. Pour une salle de lavage, un atelier ou une salle d’entraînement, la finition à flocons est souvent plus pratique.',
  },
];

export default function Page() {
  return (
    <LandingPage
      path={path}
      crumb="Plancher époxy de sous-sol"
      h1="Plancher époxy de sous-sol à Québec et Lévis"
      serviceName="Plancher époxy de sous-sol"
      lead={<p>Un sous-sol en béton peut devenir une vraie pièce de vie sans poser de plancher flottant. ZeniCorp Époxy installe des planchers époxy métalliques ou à flocons dans les sous-sols de Québec, Lévis et environs.</p>}
      image="/images/realisation-4.jpg"
      imageAlt="Plancher époxy brillant dans un espace intérieur"
      sections={[
        {
          h2: 'Pourquoi l’époxy au sous-sol',
          body: (
            <ul>
              <li><strong>Surface continue</strong> : pas de joints où la saleté s’accumule, facile à laver.</li>
              <li><strong>Choix décoratif</strong> : 8 couleurs métalliques à effet miroir, ou 3 mélanges de flocons.</li>
              <li><strong>Directement sur le béton</strong> : le revêtement est appliqué sur la dalle existante, après évaluation de son état.</li>
            </ul>
          ),
        },
        {
          h2: 'L’humidité : le point à vérifier',
          body: (
            <p>Dans un sous-sol, l’humidité qui remonte du béton peut nuire à l’adhérence de tout revêtement. C’est pourquoi l’état de la dalle (humidité, fissures, ancienne peinture) est évalué lors de la visite, avant de confirmer le prix et la date. Signalez toute infiltration connue dans votre <Link href="/soumission">soumission</Link>.</p>
          ),
        },
        {
          h2: 'Prix pour un sous-sol',
          body: (
            <p>Tarifs affichés : <strong>{money(PRICE_FLAKES)}/pi²</strong> (flocons) et <strong>{money(PRICE_METALLIC)}/pi²</strong> (métallique). Exemple : 600 pi² = environ {money(600 * PRICE_FLAKES)} ou {money(600 * PRICE_METALLIC)}. Voir le <Link href="/prix-plancher-epoxy">détail des prix</Link>.</p>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { href: '/prix-plancher-epoxy', label: 'Prix d’un plancher époxy' },
        { href: '/plancher-epoxy-garage', label: 'Plancher époxy de garage' },
        { href: '/plancher-epoxy-commercial', label: 'Plancher époxy commercial' },
      ]}
    />
  );
}
