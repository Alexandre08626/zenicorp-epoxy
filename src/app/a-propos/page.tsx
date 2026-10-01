import type { Metadata } from 'next';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import { PRICE_FLAKES, PRICE_METALLIC, PHONE_DISPLAY, AREA_TEXT, DEPOSIT_PCT, money } from '@/lib/site';

const path = '/a-propos';

export const metadata: Metadata = {
  title: { absolute: 'À propos de ZeniCorp Époxy — planchers époxy à Québec et Lévis' },
  description: 'ZeniCorp Époxy installe des planchers époxy à Québec, Lévis et environs : qui nous sommes, ce que nous faisons, nos tarifs et comment nous joindre.',
  alternates: { canonical: path },
  openGraph: { url: path, title: 'À propos de ZeniCorp Époxy', images: ['/og-epoxy.jpg'] },
};

const faqs = [
  {
    q: 'Qui est derrière ZeniCorp Époxy ?',
    a: 'ZeniCorp Époxy (aussi appelée Zeniva Époxy) est la division planchers époxy de ZeniCorp, une entreprise d’Alexandre Blais basée dans la région de Québec.',
  },
  {
    q: 'Comment joindre ZeniCorp Époxy ?',
    a: `Par téléphone au ${PHONE_DISPLAY}, ou par le formulaire de soumission gratuite sur epoxy.zeniva.ca/soumission.`,
  },
];

export default function Page() {
  return (
    <LandingPage
      path={path}
      crumb="À propos"
      h1="À propos de ZeniCorp Époxy"
      lead={<p>ZeniCorp Époxy (aussi appelée Zeniva Époxy) est la division planchers époxy de ZeniCorp, une entreprise d’Alexandre Blais basée dans la région de Québec.</p>}
      sections={[
        {
          h2: 'En bref',
          body: (
            <ul>
              <li><strong>Ce que nous faisons</strong> : installation de planchers époxy, finition à flocons ou métallique, pour garages, sous-sols et locaux commerciaux ou industriels.</li>
              <li><strong>Où</strong> : {AREA_TEXT}.</li>
              <li><strong>Tarifs affichés</strong> : {money(PRICE_FLAKES)} le pi² (flocons), {money(PRICE_METALLIC)} le pi² (métallique) ; prix final confirmé par écrit après la visite.</li>
              <li><strong>Réservation</strong> : acompte de {DEPOSIT_PCT} % par lien de paiement sécurisé ZeniPay, solde après l’installation.</li>
              <li><strong>Téléphone</strong> : {PHONE_DISPLAY}.</li>
            </ul>
          ),
        },
        {
          h2: 'Nos services',
          body: (
            <ul>
              <li><Link href="/plancher-epoxy-garage">Plancher époxy de garage</Link></li>
              <li><Link href="/plancher-epoxy-sous-sol">Plancher époxy de sous-sol</Link></li>
              <li><Link href="/plancher-epoxy-commercial">Plancher époxy commercial et industriel</Link></li>
              <li><Link href="/prix-plancher-epoxy">Prix d’un plancher époxy</Link></li>
            </ul>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { href: '/soumission', label: 'Soumission gratuite' },
        { href: '/prix-plancher-epoxy', label: 'Prix' },
      ]}
    />
  );
}
