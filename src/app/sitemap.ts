import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/site';

const LAST_MODIFIED = new Date('2026-10-01');

export default function sitemap(): MetadataRoute.Sitemap {
  const pages: [string, number][] = [
    ['/', 1],
    ['/prix-plancher-epoxy', 0.9],
    ['/plancher-epoxy-garage', 0.9],
    ['/plancher-epoxy-sous-sol', 0.8],
    ['/plancher-epoxy-commercial', 0.8],
    ['/soumission', 0.8],
    ['/a-propos', 0.5],
  ];
  return pages.map(([p, priority]) => ({ url: `${SITE_URL}${p}`, lastModified: LAST_MODIFIED, changeFrequency: 'monthly', priority }));
}
