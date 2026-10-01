import type { Metadata } from 'next';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import { PRICE_FLAKES, PRICE_METALLIC, money } from '@/lib/site';

const path = '/plancher-epoxy-commercial';

export const metadata: Metadata = {
  title: 'Plancher époxy commercial et industriel — Québec, Lévis',
  description: `Plancher époxy pour commerces, ateliers, entrepôts et locaux industriels à Québec et Lévis. Tarifs affichés ${money(PRICE_FLAKES)} à ${money(PRICE_METALLIC)} le pi², soumission gratuite.`,
  alternates: { canonical: path },
  openGraph: { url: path, title: 'Plancher époxy commercial — Québec et Lévis', images: ['/og-epoxy.jpg'] },
};

const faqs = [
  {
    q: 'Faites-vous des planchers époxy pour les commerces et les ateliers ?',
    a: 'Oui. ZeniCorp Époxy prend les projets commerciaux et industriels (boutiques, salles d’exposition, ateliers, garages de mécanique, entrepôts) à Québec, Lévis et environs. Choisissez « Commercial » ou « Industriel » dans la soumission.',
  },
  {
    q: 'Quel est le prix d’un plancher époxy commercial ?',
    a: `Les tarifs affichés sont de ${money(PRICE_FLAKES)} le pi² (flocons) et ${money(PRICE_METALLIC)} le pi² (métallique). Pour 1 000 pi², cela donne ${money(1000 * PRICE_FLAKES)} ou ${money(1000 * PRICE_METALLIC)} avant la visite, qui confirme le prix selon l’état du béton et les contraintes du site.`,
  },
  {
    q: 'Peut-on planifier les travaux pour limiter la fermeture du commerce ?',
    a: 'La date et l’horaire se planifient avec l’équipe lors de la confirmation du projet. Indiquez vos contraintes d’ouverture dans la soumission.',
  },
];

export default function Page() {
  return (
    <LandingPage
      path={path}
      crumb="Plancher époxy commercial"
      h1="Plancher époxy commercial et industriel à Québec et Lévis"
      serviceName="Plancher époxy commercial et industriel"
      lead={<p>Salle d’exposition, boutique, atelier ou entrepôt : un plancher époxy donne une surface continue, facile à entretenir et à l’image de votre entreprise. ZeniCorp Époxy prend les projets commerciaux et industriels à Québec, Lévis et environs.</p>}
      image="/images/realisation-application.jpg"
      imageAlt="Application d’un revêtement époxy sur un plancher de béton"
      sections={[
        {
          h2: 'Pour quels espaces',
          body: (
            <ul>
              <li><strong>Commerces et salles d’exposition</strong> : finition métallique à effet miroir pour mettre en valeur un espace client.</li>
              <li><strong>Ateliers, garages de mécanique, entrepôts</strong> : finition à flocons, texture qui aide à l’adhérence, entretien simple.</li>
              <li><strong>Bureaux et cliniques</strong> : surface continue sans joints, facile à nettoyer.</li>
            </ul>
          ),
        },
        {
          h2: 'Prix et soumission',
          body: (
            <p>Tarifs affichés : <strong>{money(PRICE_FLAKES)}/pi²</strong> (flocons) et <strong>{money(PRICE_METALLIC)}/pi²</strong> (métallique). Pour un grand local, la <Link href="/soumission">soumission</Link> avec dimensions et photos permet de confirmer rapidement le prix et la planification. Détails sur la page <Link href="/prix-plancher-epoxy">prix</Link>.</p>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { href: '/prix-plancher-epoxy', label: 'Prix d’un plancher époxy' },
        { href: '/plancher-epoxy-garage', label: 'Plancher époxy de garage' },
        { href: '/plancher-epoxy-sous-sol', label: 'Plancher époxy de sous-sol' },
      ]}
    />
  );
}
