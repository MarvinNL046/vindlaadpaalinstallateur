import { MetadataRoute } from 'next'
import { getAllFacilities, getAllStates, getAllCounties, getAllCities, createCountySlug, createCitySlug, Facility } from '@/lib/data'
import { blogPosts } from '@/lib/blog-data'

// Maximum URLs per sitemap file (Google limit is 50k, we use 10k for better performance)
const MAX_URLS_PER_SITEMAP = 10000

const baseUrl = 'https://www.vindlaadpaalinstallateur.nl'

// Laadpaal installateur types for type pages
const installateurTypes = [
  'thuislader',
  'zakelijk',
  'openbaar',
  'snellader',
  'slim-laden',
  'zonnepanelen-integratie',
  'laadpaal-met-kabel',
  'zakelijke-laadpaal',
  'werkgevers-laadpaal',
  'hotel-horeca',
  'retail-laden',
  'openbare-laadpaal',
  'laadplein',
  'tankstation',
  'zonnepanelen-laadpaal',
  'load-balancing',
  'vve-oplossingen',
  'wagenpark-laden',
  'alfen',
  'wallbox',
  'evbox',
  'easee',
  'charge-amps',
  'mennekes',
  'installatie',
  'onderhoud',
  'reparatie',
  'advies',
  'subsidie-aanvraag',
]

// Static pages that don't change often
// Note: /zoeken, /vergelijk are excluded (noindex utility pages)
const staticPages = [
  { path: '', priority: 1, changeFreq: 'daily' as const },
  { path: '/provincie', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/type', priority: 0.8, changeFreq: 'weekly' as const },
  { path: '/blog', priority: 0.8, changeFreq: 'daily' as const },
  { path: '/over-ons', priority: 0.5, changeFreq: 'monthly' as const },
  { path: '/contact', priority: 0.5, changeFreq: 'monthly' as const },
  { path: '/privacy', priority: 0.3, changeFreq: 'yearly' as const },
  { path: '/voorwaarden', priority: 0.3, changeFreq: 'yearly' as const },
  // Guide pages
  { path: '/gids', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/gids/types', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/gids/kosten', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/gids/subsidie', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/gids/thuisladen', priority: 0.9, changeFreq: 'weekly' as const },
  { path: '/gids/zakelijk', priority: 0.9, changeFreq: 'weekly' as const },
]

// Guide type pages
const guideTypes = [
  'thuislader',
  'zakelijke-laadpaal',
  'snellader',
  'openbare-laadpaal',
  'laadpaal-zonnepanelen',
]

// Guide province pages (all 12 Dutch provinces)
const guideProvinces = [
  'noord-holland',
  'zuid-holland',
  'utrecht',
  'noord-brabant',
  'gelderland',
  'overijssel',
  'limburg',
  'flevoland',
  'groningen',
  'friesland',
  'drenthe',
  'zeeland',
]

// Guide topic pages
const guideTopics = [
  'laadpaal-kosten',
  'subsidie-laadpaal',
  'thuisladen-handleiding',
  'zakelijke-laadpaal',
  'laadpaal-merken-vergelijken',
]

interface SitemapEntry {
  url: string
  lastModified: Date
  changeFrequency: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never'
  priority: number
}

// Generate all sitemap entries
async function getAllSitemapEntries(): Promise<SitemapEntry[]> {
  const facilities: Facility[] = await getAllFacilities()
  const states = await getAllStates()
  const counties = await getAllCounties()
  const cities = await getAllCities()
  const now = new Date()

  const entries: SitemapEntry[] = []

  // Static pages
  staticPages.forEach(page => {
    entries.push({
      url: `${baseUrl}${page.path}`,
      lastModified: now,
      changeFrequency: page.changeFreq,
      priority: page.priority,
    })
  })

  // Type pages
  installateurTypes.forEach(type => {
    entries.push({
      url: `${baseUrl}/type/${type}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  // Guide type pages
  guideTypes.forEach(type => {
    entries.push({
      url: `${baseUrl}/gids/types/${type}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Guide province pages
  guideProvinces.forEach(province => {
    entries.push({
      url: `${baseUrl}/gids/provincie/${province}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Guide topic pages
  guideTopics.forEach(topic => {
    entries.push({
      url: `${baseUrl}/gids/onderwerpen/${topic}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Province pages
  states.forEach(state => {
    entries.push({
      url: `${baseUrl}/provincie/${state.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Gemeente (county) pages
  counties.forEach(county => {
    entries.push({
      url: `${baseUrl}/gemeente/${createCountySlug(county)}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.7,
    })
  })

  // City pages
  cities.forEach(city => {
    entries.push({
      url: `${baseUrl}/stad/${createCitySlug(city)}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.6,
    })
  })

  // Installateur pages (largest portion)
  facilities.forEach(facility => {
    entries.push({
      url: `${baseUrl}/installateur/${facility.slug}`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    })
  })

  // Blog posts
  blogPosts.forEach(post => {
    entries.push({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date(post.date),
      changeFrequency: 'monthly',
      priority: 0.6,
    })
  })

  return entries
}

// This function tells Next.js how many sitemaps to generate
// It runs at build time and creates sitemap/0.xml, sitemap/1.xml, etc.
export async function generateSitemaps() {
  const entries = await getAllSitemapEntries()
  const totalSitemaps = Math.ceil(entries.length / MAX_URLS_PER_SITEMAP)

  // Return an array of sitemap IDs
  return Array.from({ length: totalSitemaps }, (_, i) => ({ id: i }))
}

// Generate each individual sitemap
export default async function sitemap({ id }: { id: number }): Promise<MetadataRoute.Sitemap> {
  const entries = await getAllSitemapEntries()

  // Get the chunk for this sitemap ID
  const start = id * MAX_URLS_PER_SITEMAP
  const end = start + MAX_URLS_PER_SITEMAP
  const chunk = entries.slice(start, end)

  return chunk
}
