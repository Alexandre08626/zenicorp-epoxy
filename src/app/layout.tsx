import type { Metadata, Viewport } from 'next';
import Script from 'next/script';
import { Inter } from 'next/font/google';
import './globals.css';
import { SITE_URL, BUSINESS_NAME, businessJsonLd } from '@/lib/site';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Plancher époxy à Québec et Lévis | ZeniCorp Époxy',
    template: `%s | ${BUSINESS_NAME}`,
  },
  description: 'Installation de plancher époxy à Québec, Lévis et environs : garage, sous-sol, commercial. Finition à flocons 7,50 $/pi² ou métallique 12 $/pi². Calculateur et soumission gratuite.',
  applicationName: BUSINESS_NAME,
  robots: { index: true, follow: true },
  icons: { icon: '/logo-128.png', apple: '/logo-128.png' },
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    siteName: BUSINESS_NAME,
    images: [{ url: '/og-epoxy.jpg', width: 1200, height: 630, alt: 'Plancher époxy métallique' }],
  },
  twitter: { card: 'summary_large_image' },
};

export const viewport: Viewport = { themeColor: '#0a0a0f' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} dark`}>
      <body className="bg-[#0a0a0f] text-white antialiased">
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessJsonLd()) }} />
        {children}
        <div className="bg-black px-4 pb-6 pt-2 text-center text-xs text-white/30">
          <a href="https://zenitech.dev/" className="hover:text-white/60 transition-colors">Site conçu par Zenitech — agence web et IA</a>
        </div>
        {/* Orvel AI — assistant de conversation, servi par zenitech.dev */}
        <Script
          src="https://zenitech.dev/widget/orvel.js"
          data-orvel-site="epoxy"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
