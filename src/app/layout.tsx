import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' });
const playfair = Playfair_Display({ subsets: ['latin'], display: 'swap', variable: '--font-playfair' });

export const metadata: Metadata = {
  title: 'ZeniCorp Époxy | Revêtements de sol en époxy - Garages & Industriels',
  description: 'Revêtements de sol en époxy professionnels. Garages résidentiels, commerciaux et industriels. Garantie, installation rapide, fini haut de gamme. Soumission gratuite 24h.',
  keywords: ['époxy', 'revêtement de sol', 'garage', 'plancher époxy', 'sol industriel', 'ZeniCorp', 'Québec'],
  openGraph: {
    type: 'website',
    locale: 'fr_CA',
    siteName: 'ZeniCorp Époxy',
    title: 'ZeniCorp Époxy | Revêtements de sol professionnels',
    description: 'Garages, commerciaux et industriels. Garantie incluse. Soumission gratuite.',
  },
};

export const viewport: Viewport = { themeColor: '#000000' };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr-CA" className={`${inter.variable} ${playfair.variable}`}>
      <body>
        <header className="bg-zenicorp-black text-white sticky top-0 z-50">
          <div className="container-zenicorp flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-9 h-9 bg-zenicorp-gold flex items-center justify-center">
                <span className="font-heading font-bold text-white text-xl">Z</span>
              </div>
              <div className="leading-tight">
                <span className="font-heading font-bold text-lg tracking-wide">ZENICORP</span>
                <span className="block text-[10px] uppercase tracking-[0.25em] text-zenicorp-gold">Époxy</span>
              </div>
            </Link>
            <nav className="hidden md:flex items-center gap-8 text-sm">
              <Link href="/#services" className="hover:text-zenicorp-gold transition-colors">Services</Link>
              <Link href="/#realisations" className="hover:text-zenicorp-gold transition-colors">Réalisations</Link>
              <Link href="/#garantie" className="hover:text-zenicorp-gold transition-colors">Garantie</Link>
              <Link href="/#faq" className="hover:text-zenicorp-gold transition-colors">FAQ</Link>
            </nav>
            <a href="/soumission" className="btn-gold !px-4 !py-2 text-sm">Soumission gratuite</a>
          </div>
        </header>
        <main>{children}</main>
        <footer className="bg-zenicorp-black text-white">
          <div className="container-zenicorp py-12 grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 bg-zenicorp-gold flex items-center justify-center">
                  <span className="font-heading font-bold text-white text-lg">Z</span>
                </div>
                <span className="font-heading font-bold text-lg">ZENICORP</span>
              </div>
              <p className="text-sm text-zenicorp-silver">Division Époxy. Une division de ZeniCorp Groupe Construction.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-zenicorp-gold">Services</h3>
              <ul className="space-y-2 text-sm text-zenicorp-silver">
                <li><Link href="/#services" className="hover:text-white">Garage résidentiel</Link></li>
                <li><Link href="/#services" className="hover:text-white">Commercial</Link></li>
                <li><Link href="/#services" className="hover:text-white">Industriel</Link></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-zenicorp-gold">ZeniCorp</h3>
              <ul className="space-y-2 text-sm text-zenicorp-silver">
                <li><a href="https://zenicorp.ca" className="hover:text-white" target="_blank" rel="noopener">Site principal</a></li>
                <li><a href="https://zenicorp.ca/asphalte" className="hover:text-white" target="_blank" rel="noopener">Asphalte</a></li>
                <li><a href="https://zenicorp.ca/toiture" className="hover:text-white" target="_blank" rel="noopener">Toiture</a></li>
                <li><a href="https://zenicorp.ca/isolation" className="hover:text-white" target="_blank" rel="noopener">Isolation</a></li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4 text-zenicorp-gold">Contact</h3>
              <ul className="space-y-2 text-sm text-zenicorp-silver">
                <li>info@zenicorp.ca</li>
                <li>1-800-ZENICORP</li>
                <li>Québec, Canada</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-zenicorp-mediumGray">
            <div className="container-zenicorp py-4 text-xs text-zenicorp-silver">
              © {new Date().getFullYear()} ZeniCorp Groupe Construction. Tous droits réservés.
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}