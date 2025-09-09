import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://atelierdu15eme.fr'
  const routes = [
    '',
    '/collections/lunettes-vue',
    '/collections/lunettes-soleil',
    '/collections/lunettes-enfant',
    '/collections/lentilles',
    '/a-propos',
    '/temoignages',
    '/services-optiques',
    '/recyclage-medico',
    '/defaut-visuel',
    '/montures-bio-acetate',
  ]
  const now = new Date()
  return routes.map((path) => ({
    url: `${baseUrl}${path}`,
    lastModified: now,
    changeFrequency: 'weekly',
    priority: path === '' ? 1 : 0.7,
  }))
}


