import type { Metadata, Viewport } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import Link from 'next/link';
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
        <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-indigo-100">
          <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                {/* LOGO PNG */}
                <img src="/logo.png" alt="ZeniCorp" className="h-14 w-auto" />
              </Link>
              <a href="/soumission" className="px-8 py-3 bg-gradient-to-r from-indigo-400 to-purple-500 text-white font-bold rounded-full shadow-xl shadow-indigo-400/30 hover:shadow-2xl transition-all">
                Devis gratuit
              </a>
            </div>
          </div>
        </header>
        <div className="pt-24">{children}</div>
        <footer className="bg-white border-t border-indigo-100 mt-20">
          <div className="max-w-7xl mx-auto px-6 py-12">
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div className="flex items-center gap-4">
                <img src="/logo.png" alt="ZeniCorp" className="h-10 w-auto" />
                <div>
                  <span className="text-xl font-bold text-slate-800">ZENI<span className="text-indigo-500">CORP</span></span>
                  <p className="text-sm text-slate-500">Époxy Luxe</p>
                </div>
              </div>
              <p className="text-sm text-slate-400">
                © {new Date().getFullYear()} ZeniCorp. Tous droits réservés.
              </p>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
