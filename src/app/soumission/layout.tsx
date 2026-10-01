import type { Metadata } from 'next';
import { SiteHeader, SiteFooter } from '@/components/SiteChrome';

export const metadata: Metadata = {
  title: 'Soumission gratuite pour plancher époxy',
  description: 'Demandez votre soumission gratuite pour un plancher époxy de garage, de sous-sol ou commercial à Québec, Lévis et environs. 2 minutes, sans engagement.',
  alternates: { canonical: '/soumission' },
  openGraph: { url: '/soumission', title: 'Soumission gratuite — plancher époxy', images: ['/og-epoxy.jpg'] },
};

export default function SoumissionLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <SiteHeader />
      <main className="bg-white text-zenicorp-black min-h-screen">{children}</main>
      <SiteFooter />
    </>
  );
}
