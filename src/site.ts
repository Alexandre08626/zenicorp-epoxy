import type { SiteConfig } from '@/types';

const metallic = [
  { name: 'Chrome Mirror', image: '/images/epoxy-metallic-grey.jpg', price: 12.0 },
  { name: 'Copper Bronze', image: '/images/metallic-copper.jpg', price: 12.0 },
  { name: 'Ruby Red', image: '/images/metallic-red.jpg', price: 12.0 },
  { name: 'Silver Steel', image: '/images/metallic-silver.jpg', price: 12.0 },
  { name: 'Forest Green', image: '/images/metallic-forest.jpg', price: 12.0 },
  { name: 'Rose Gold', image: '/images/metallic-rose.jpg', price: 12.0 },
  { name: 'Emerald', image: '/images/metallic-emerald.webp', price: 12.0 },
  { name: 'Liquid Gold', image: '/images/metallic-gold.png', price: 12.0 },
];

const flakes = [
  { name: 'Flocons mixtes', image: '/images/flakes-options.jpg', price: 7.5 },
  { name: 'Flocons 11', image: '/images/flakes-11.jpg', price: 7.5 },
  { name: 'E4E Flakes', image: '/images/e4e-flakes.jpg', price: 7.5 },
];

export const SITE: SiteConfig = {
  slug: 'epoxy',
  name: 'Zeniva Époxy',
  short: 'Époxy',
  tagline: 'Epoxy Pro',
  url: 'https://epoxy.zeniva.ca',
  title: 'Zeniva Époxy | Planchers époxy métalliques et à flocons — Québec',
  description:
    'Planchers époxy métalliques et à flocons pour garages, commerces et industries partout au Québec. Estimation en ligne en 30 secondes, garantie 10 ans, entrepreneur certifié RBQ.',
  accent: '#3CE1FF',
  accent2: '#4696FF',
  accentRgb: '60,225,255',
  hero: {
    image: '/images/epoxy-metallic-grey.jpg',
    alt: 'Plancher époxy métallique',
    eyebrow: 'Zeniva Époxy · Partout au Québec',
    h1a: 'Votre plancher époxy,',
    h1b: 'estimé en 30 secondes.',
    sub: 'Planchers métalliques et à flocons haut de gamme pour garages, commerces et espaces industriels. Garantie 10 ans.',
    trust: [
      { icon: 'shield', t: 'Garantie 10 ans' },
      { icon: 'map', t: 'Partout au Québec' },
      { icon: 'clock', t: 'Intervention 24-48 h' },
    ],
  },
  calc: {
    finishLabel: 'Type de finition',
    surfaceLabel: 'Superficie du plancher',
    finishes: [
      { id: 'flakes', name: 'Flocons décoratifs', price: 7.5, desc: 'Finition antidérapante avec flocons', image: '/images/flakes-options.jpg' },
      { id: 'metallic', name: 'Métallique', price: 12.0, desc: 'Finition miroir haut de gamme', image: '/images/epoxy-metallic-grey.jpg' },
    ],
  },
  shop: {
    title: 'Configurer votre plancher',
    priceRange: 'De 7,50 $ à 12,00 $ / pi² selon la finition',
    dateHint: 'Installation rapide sous 24-48 h après confirmation.',
    types: [
      { id: 'metallic', name: 'Métallique', desc: 'Finition miroir premium, 8 couleurs', optionsTitle: 'Choisissez votre couleur métallique', options: metallic },
      { id: 'flakes', name: 'Flocons', desc: 'Finition antidérapante décorative', optionsTitle: 'Choisissez votre mélange de flocons', options: flakes },
    ],
  },
  ticker: [
    'Garages résidentiels',
    'Sous-sols',
    'Époxy commercial',
    'Époxy industriel',
    'Finition métallique',
    'Flocons décoratifs',
    'Polyaspartique séchage rapide',
    'Réparation de béton',
    'Marquage au sol',
  ],
  showcase: {
    eyebrow: 'Couleurs',
    title: 'Nos couleurs',
    titleAccent: 'métalliques.',
    sub: 'Huit couleurs premium pour un plancher unique. Touchez une couleur pour la voir en grand.',
    square: true,
    items: metallic.map((m) => ({ src: m.image, t: m.name, s: '12,00 $ / pi²' })),
  },
  showcase2: {
    eyebrow: 'Flocons',
    title: 'Options de',
    titleAccent: 'flocons.',
    sub: 'Des mélanges de flocons décoratifs, antidérapants, en plusieurs tailles et couleurs.',
    square: true,
    items: [
      { src: '/images/flakes-options.jpg', t: 'Flocons mixtes', s: 'Options variées' },
      { src: '/images/flakes-11.jpg', t: 'Flocons 11', s: 'Très discret' },
      { src: '/images/e4e-flakes.jpg', t: 'E4E Flakes', s: 'Haute qualité' },
    ],
  },
  gallery: [
    { src: '/images/epoxy-metallic-grey.jpg', t: 'Chrome Mirror', s: 'Notre best-seller' },
    { src: '/images/realisation-1.jpg', t: 'Plancher résidentiel', s: 'Finition métallique' },
    { src: '/images/realisation-4.jpg', t: 'Local commercial', s: 'Haute résistance' },
    { src: '/images/realisation-application.jpg', t: 'Application pro', s: 'Travail de précision' },
  ],
  benefits: [
    { k: '10 ans', t: 'Garantie', d: 'Une garantie écrite sur votre plancher.' },
    { k: '24-48 h', t: 'Intervention', d: 'Installation rapide après confirmation.' },
    { k: 'RBQ', t: 'Certifié', d: 'Entrepreneur licencié et assuré.' },
    { k: '7,50 $', t: 'À partir de', d: 'Par pied carré, préparation du béton comprise.' },
  ],
  faq: [
    {
      q: 'Combien de temps avant de pouvoir rouler sur le plancher ?',
      a: "Avec un polyaspartique, la circulation à pied est possible après quelques heures et un véhicule après 24 h. Un système époxy classique demande généralement 48 à 72 h. Le délai exact est confirmé selon le produit et la température.",
    },
    {
      q: 'La préparation du béton est-elle incluse ?',
      a: "Oui. Le meulage ou grenaillage du béton et le traitement des fissures font partie des travaux : c'est cette préparation qui détermine l'adhérence et la durée de vie du revêtement.",
    },
    {
      q: 'Un plancher fissuré ou taché peut-il être recouvert ?',
      a: "Dans la majorité des cas, oui. Les fissures sont réparées et la surface est remise à niveau avant l'application. Si le béton est trop dégradé, on vous le dit avant les travaux plutôt qu'après.",
    },
    {
      q: 'Métallique ou flocons : que choisir ?',
      a: "Le métallique donne un effet miroir unique, idéal pour un garage vitrine, un sous-sol ou un commerce. Les flocons offrent une finition antidérapante, très résistante et plus économique, parfaite pour un garage utilisé tous les jours.",
    },
  ],
  soumission: {
    projectTypes: ['Garage résidentiel', 'Commercial', 'Industriel'],
    propertyTypes: ['Maison unifamiliale', 'Copropriété / condo', 'Immeuble commercial', 'Immeuble industriel'],
    dimsTitle: 'Dimensions du plancher',
    descPlaceholder: "État du plancher, fissures, taches d'huile, couleur souhaitée, flocons…",
  },
  pdf: {
    title: 'DEVIS ESTIMATIF',
    features: ['Garantie 10 ans', 'Exécution rapide 24-48 h', 'Entrepreneur certifié RBQ'],
  },
};
