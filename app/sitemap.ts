import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const base = 'https://quotedstudio.com.au'

  const routes = [
    '',
    '/services',
    '/how-it-works',
    '/pricing',
    '/industries',
    '/results',
    '/about',
    '/faq',
    '/contact',
    '/blog',
  ]

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
    changeFrequency: route === '' ? 'weekly' : 'monthly',
    priority: route === '' ? 1 : route === '/pricing' ? 0.9 : 0.7,
  }))
}
