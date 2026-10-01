import type { Metadata } from 'next';
import Link from 'next/link';
import LandingPage from '@/components/LandingPage';
import { PRICE_FLAKES, PRICE_METALLIC, money } from '@/lib/site';

const path = '/plancher-epoxy-garage';

export const metadata: Metadata = {
  title: 'Plancher époxy de garage à Québec et Lévis',
  description: `Plancher époxy pour garage résidentiel à Québec, Lévis et environs : finition à flocons (${money(PRICE_FLAKES)}/pi²) ou métallique (${money(PRICE_METALLIC)}/pi²). Soumission gratuite.`,
  alternates: { canonical: path },
  openGraph: { url: path, title: 'Plancher époxy de garage à Québec et Lévis', images: ['/og-epoxy.jpg'] },
};

const faqs = [
  {
    q: 'Quel est le prix d’un plancher époxy de garage à Lévis ou à Québec ?',
    a: `Le tarif est le même à Québec et à Lévis : ${money(PRICE_FLAKES)} le pi² en finition à flocons et ${money(PRICE_METALLIC)} le pi² en finition métallique. Un garage simple d’environ 240 pi² revient à environ ${money(240 * PRICE_FLAKES)} en flocons, avant confirmation sur place.`,
  },
  {
    q: 'Flocons ou métallique : quelle finition pour un garage ?',
    a: 'La finition à flocons est la plus choisie pour un garage : elle donne une texture qui aide à l’adhérence et camoufle bien la poussière et les petites saletés. La finition métallique donne un effet miroir haut de gamme, plutôt pour un garage vitrine ou un atelier.',
  },
  {
    q: 'Faites-vous les garages sur la Rive-Sud ?',
    a: 'Oui. ZeniCorp Époxy sert Québec, Lévis et les environs. Indiquez votre ville dans la soumission ; les autres régions du Québec sont évaluées sur demande.',
  },
  {
    q: 'Mon béton de garage est fissuré ou taché d’huile, est-ce un problème ?',
    a: 'Pas forcément. L’état du béton (fissures, taches, ancienne peinture) est évalué lors de la visite, et le prix final en tient compte. Mentionnez-le dans la description de votre soumission et joignez des photos lors de l’appel.',
  },
];

export default function Page() {
  return (
    <LandingPage
      path={path}
      crumb="Plancher époxy de garage"
      h1="Plancher époxy de garage à Québec et Lévis"
      serviceName="Plancher époxy de garage"
      lead={<p>Un garage québécois encaisse la neige fondante, le calcium et l’huile tout l’hiver. Un revêtement époxy scelle la dalle de béton et donne une surface lisse, facile à laver. ZeniCorp Époxy installe des planchers de garage à flocons ou métalliques à Québec, Lévis et environs.</p>}
      image="/images/flakes-options.jpg"
      imageAlt="Mélange de flocons pour plancher époxy de garage"
      sections={[
        {
          h2: 'Deux finitions pour votre garage',
          body: (
            <ul>
              <li><strong>Flocons — {money(PRICE_FLAKES)}/pi²</strong> : flocons décoratifs dispersés dans la résine. Texture qui aide à l’adhérence, choix pratique pour un garage utilisé tous les jours. Trois mélanges proposés.</li>
              <li><strong>Métallique — {money(PRICE_METALLIC)}/pi²</strong> : effet miroir ou marbré, 8 couleurs (Chrome Mirror, Copper Bronze, Ruby Red, Silver Steel, Forest Green, Rose Gold, Emerald, Liquid Gold).</li>
            </ul>
          ),
        },
        {
          h2: 'Combien pour mon garage ?',
          body: (
            <>
              <p>Garage simple d’environ 240 pi² : environ <strong>{money(240 * PRICE_FLAKES)}</strong> en flocons ou <strong>{money(240 * PRICE_METALLIC)}</strong> en métallique. Garage double d’environ 440 pi² : environ <strong>{money(440 * PRICE_FLAKES)}</strong> ou <strong>{money(440 * PRICE_METALLIC)}</strong>.</p>
              <p>Ce sont des calculs au tarif affiché ; le prix final est confirmé après la visite. Tous les détails sont sur la page <Link href="/prix-plancher-epoxy">prix d’un plancher époxy</Link>.</p>
            </>
          ),
        },
        {
          h2: 'Déroulement',
          body: (
            <ul>
              <li>Vous envoyez votre <Link href="/soumission">soumission gratuite</Link> (dimensions, état du béton, ville) ou vous appelez.</li>
              <li>L’équipe confirme le prix et la date avec vous.</li>
              <li>Réservation de la date avec un acompte de 30 % par lien ZeniPay sécurisé ; le solde est payable après l’installation.</li>
            </ul>
          ),
        },
      ]}
      faqs={faqs}
      related={[
        { href: '/prix-plancher-epoxy', label: 'Prix d’un plancher époxy' },
        { href: '/plancher-epoxy-sous-sol', label: 'Plancher époxy de sous-sol' },
        { href: '/plancher-epoxy-commercial', label: 'Plancher époxy commercial' },
      ]}
    />
  );
}
