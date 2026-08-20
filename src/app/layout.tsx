import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ZeniCorp Époxy | Revêtements de sol en époxy - Garages & Industriels',
  description: 'Revêtements de sol en époxy professionnels. Garages résidentiels, commerciaux et industriels. Garantie, installation rapide, fini haut de gamme. Soumission gratuite 24h.',
};

export const viewport: Viewport = { themeColor: '#eef2ff' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body className="bg-gradient-to-br from-indigo-50 via-purple-50 to-pink-50">
        {children}
      </body>
    </html>
  );
}
