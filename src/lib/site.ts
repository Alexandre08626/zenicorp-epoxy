// Données uniques du site (NAP, prix). Une seule source : pages, schema.org, llms.txt.
// Rien d'inventé ici : prix = ceux affichés au calculateur ; pas d'adresse publique.
export const SITE_URL = 'https://epoxy.zeniva.ca';
export const BUSINESS_NAME = 'ZeniCorp Époxy';
export const ALT_NAME = 'Zeniva Époxy';
export const PHONE_DISPLAY = '581-748-7017';
export const PHONE_TEL = '+15817487017';
export const PRICE_FLAKES = 7.5; // $ CAD / pi², finition à flocons
export const PRICE_METALLIC = 12; // $ CAD / pi², finition métallique
export const DEPOSIT_PCT = 30;
export const AREAS = ['Québec', 'Lévis'];
export const AREA_TEXT = 'Québec, Lévis et les environs (autres régions du Québec sur demande)';

export const money = (n: number) =>
  n.toLocaleString('fr-CA', { minimumFractionDigits: n % 1 ? 2 : 0, maximumFractionDigits: 2 }) + ' $';

export const BUSINESS_ID = `${SITE_URL}/#business`;

export function businessJsonLd() {
  return {
    '@context': 'https://schema.org',
    '@type': 'HomeAndConstructionBusiness',
    '@id': BUSINESS_ID,
    name: BUSINESS_NAME,
    alternateName: ALT_NAME,
    url: `${SITE_URL}/`,
    telephone: PHONE_TEL,
    logo: `${SITE_URL}/logo-512.png`,
    image: `${SITE_URL}/og-epoxy.jpg`,
    description:
      "Installation de planchers époxy (finition à flocons ou métallique) pour garages, sous-sols et locaux commerciaux à Québec, Lévis et environs.",
    priceRange: `${money(PRICE_FLAKES)} à ${money(PRICE_METALLIC)} le pi²`,
    currenciesAccepted: 'CAD',
    areaServed: [
      { '@type': 'City', name: 'Québec', containedInPlace: { '@type': 'AdministrativeArea', name: 'Québec, Canada' } },
      { '@type': 'City', name: 'Lévis', containedInPlace: { '@type': 'AdministrativeArea', name: 'Québec, Canada' } },
    ],
    founder: { '@type': 'Person', name: 'Alexandre Blais' },
    makesOffer: [
      {
        '@type': 'Offer',
        name: 'Plancher époxy à flocons',
        url: `${SITE_URL}/prix-plancher-epoxy`,
        priceSpecification: { '@type': 'UnitPriceSpecification', price: PRICE_FLAKES, priceCurrency: 'CAD', unitCode: 'FTK', unitText: 'pi²' },
        itemOffered: { '@type': 'Service', name: 'Installation de plancher époxy à flocons' },
      },
      {
        '@type': 'Offer',
        name: 'Plancher époxy métallique',
        url: `${SITE_URL}/prix-plancher-epoxy`,
        priceSpecification: { '@type': 'UnitPriceSpecification', price: PRICE_METALLIC, priceCurrency: 'CAD', unitCode: 'FTK', unitText: 'pi²' },
        itemOffered: { '@type': 'Service', name: 'Installation de plancher époxy métallique' },
      },
    ],
  };
}

export type Faq = { q: string; a: string };

export function faqJsonLd(faqs: Faq[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({ '@type': 'Question', name: f.q, acceptedAnswer: { '@type': 'Answer', text: f.a } })),
  };
}

export function breadcrumbJsonLd(items: { name: string; path: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((it, i) => ({ '@type': 'ListItem', position: i + 1, name: it.name, item: `${SITE_URL}${it.path}` })),
  };
}

export const PAGES = [
  { path: '/plancher-epoxy-garage', label: 'Garage' },
  { path: '/plancher-epoxy-sous-sol', label: 'Sous-sol' },
  { path: '/plancher-epoxy-commercial', label: 'Commercial' },
  { path: '/prix-plancher-epoxy', label: 'Prix' },
  { path: '/a-propos', label: 'À propos' },
];
