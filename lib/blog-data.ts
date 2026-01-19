export interface BlogPost {
  id: number;
  slug: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  readTime: string;
  category: string;
  image?: string;
  content?: string;
}

export const blogPosts: BlogPost[] = [
  {
    id: 1,
    slug: 'laadpaal-thuis-installeren-complete-gids',
    title: 'Laadpaal Thuis Installeren: De Complete Gids',
    excerpt: 'Alles wat je moet weten over het installeren van een laadpaal bij je thuis. Van vermogen kiezen tot de juiste installateur vinden.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-15',
    readTime: '8 min',
    category: 'Installatie',
    image: '/images/blog/laadpaal-installatie.jpg',
  },
  {
    id: 2,
    slug: 'beste-laadpaal-merken-vergelijken',
    title: 'De Beste Laadpaal Merken Vergelijken: Alfen, ABB, Wallbox en Meer',
    excerpt: 'Een uitgebreide vergelijking van de populairste laadpaal merken in Nederland. Ontdek welke het beste bij jouw situatie past.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-10',
    readTime: '10 min',
    category: 'Vergelijking',
    image: '/images/blog/laadpaal-merken.jpg',
  },
  {
    id: 3,
    slug: 'subsidie-laadpaal-2025',
    title: 'Subsidie voor Laadpalen in 2025: Alle Regelingen op een Rij',
    excerpt: 'Ontdek welke subsidies en fiscale voordelen er zijn voor laadpaal installatie in 2025. Bespaar tot duizenden euros.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-05',
    readTime: '7 min',
    category: 'Subsidie',
    image: '/images/blog/subsidie-laadpaal.jpg',
  },
  {
    id: 4,
    slug: 'slim-laden-uitgelegd',
    title: 'Slim Laden Uitgelegd: Bespaar op je Energierekening',
    excerpt: 'Wat is slim laden en hoe kan het je helpen om goedkoper te laden? Ontdek de voordelen van smart charging.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2024-12-28',
    readTime: '9 min',
    category: 'Technologie',
    image: '/images/blog/slim-laden.jpg',
  },
  {
    id: 5,
    slug: 'laadpaal-zonnepanelen-combineren',
    title: 'Laadpaal en Zonnepanelen Combineren: Gratis Rijden',
    excerpt: 'Hoe je optimaal je laadpaal kunt combineren met zonnepanelen voor maximale besparing en duurzaamheid.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2024-12-20',
    readTime: '6 min',
    category: 'Duurzaamheid',
    image: '/images/blog/laadpaal-zonnepanelen.jpg',
  },
  {
    id: 6,
    slug: 'zakelijke-laadpalen-bedrijf',
    title: 'Zakelijke Laadpalen: Alles voor je Bedrijf',
    excerpt: 'Van wagenparken tot parkeergarages: complete gids voor zakelijke laadinfrastructuur en subsidies.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2024-12-15',
    readTime: '8 min',
    category: 'Zakelijk',
    image: '/images/blog/zakelijke-laadpaal.jpg',
  },
  {
    id: 7,
    slug: 'load-balancing-meerdere-laadpalen',
    title: 'Load Balancing: Meerdere Laadpalen op Een Aansluiting',
    excerpt: 'Hoe werkt load balancing en waarom is het belangrijk als je meerdere elektrische autos wilt laden?',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-20',
    readTime: '10 min',
    category: 'Technologie',
    image: '/images/blog/load-balancing.jpg',
  },
  {
    id: 8,
    slug: 'kosten-laadpaal-installatie',
    title: 'Kosten Laadpaal Installatie: Wat Kan je Verwachten?',
    excerpt: 'Een realistisch overzicht van de kosten voor laadpaal installatie. Van basis tot premium oplossingen.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-18',
    readTime: '7 min',
    category: 'Kosten',
    image: '/images/blog/kosten-laadpaal.jpg',
  },
  {
    id: 9,
    slug: 'vve-laadpaal-installeren',
    title: 'Laadpaal Installeren in VvE: Stappenplan en Tips',
    excerpt: 'Hoe krijg je toestemming van de VvE voor een laadpaal? Praktische tips en juridische informatie.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-16',
    readTime: '8 min',
    category: 'Wonen',
    image: '/images/blog/vve-laadpaal.jpg',
  },
  {
    id: 10,
    slug: 'onderhoud-laadpaal-tips',
    title: 'Onderhoud van je Laadpaal: Tips voor Langere Levensduur',
    excerpt: 'Hoe houd je je laadpaal in optimale conditie? Praktische onderhoudstips en wanneer een service nodig is.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-14',
    readTime: '6 min',
    category: 'Onderhoud',
    image: '/images/blog/onderhoud-laadpaal.jpg',
  },
  {
    id: 11,
    slug: 'ac-dc-laden-verschil',
    title: 'AC vs DC Laden: Wat is het Verschil?',
    excerpt: 'Uitleg over het verschil tussen AC en DC laden. Welk type laadpaal past het beste bij jouw situatie?',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-12',
    readTime: '7 min',
    category: 'Technologie',
    image: '/images/blog/ac-dc-laden.jpg',
  },
  {
    id: 12,
    slug: 'laadpaal-huurwoning',
    title: 'Laadpaal bij een Huurwoning: Je Mogelijkheden',
    excerpt: 'Ook als huurder kun je een laadpaal krijgen. Ontdek je rechten en mogelijkheden.',
    author: 'VindLaadpaalInstallateur Team',
    date: '2025-01-08',
    readTime: '8 min',
    category: 'Wonen',
    image: '/images/blog/huurwoning-laadpaal.jpg',
  },
];

export const categories = [
  { name: 'Alle Artikelen', count: blogPosts.length },
  { name: 'Installatie', count: blogPosts.filter(p => p.category === 'Installatie').length },
  { name: 'Technologie', count: blogPosts.filter(p => p.category === 'Technologie').length },
  { name: 'Subsidie', count: blogPosts.filter(p => p.category === 'Subsidie').length },
  { name: 'Zakelijk', count: blogPosts.filter(p => p.category === 'Zakelijk').length },
  { name: 'Kosten', count: blogPosts.filter(p => p.category === 'Kosten').length },
  { name: 'Wonen', count: blogPosts.filter(p => p.category === 'Wonen').length },
];

export function getBlogPost(slug: string): BlogPost | undefined {
  return blogPosts.find(post => post.slug === slug);
}

export function getRelatedPosts(currentSlug: string, category: string, limit: number = 3): BlogPost[] {
  return blogPosts
    .filter(post => post.slug !== currentSlug && post.category === category)
    .slice(0, limit);
}

export function getLatestPosts(limit: number = 6): BlogPost[] {
  return blogPosts
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime())
    .slice(0, limit);
}

// Helper functions for internal linking
export function getInstallerLink(name: string): string {
  const slug = name.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/installateur/${slug}`;
}

export function getProvinceLink(province: string): string {
  const slug = province.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/provincie/${slug}`;
}

export function getCityLink(city: string): string {
  const slug = city
    .toLowerCase()
    .replace(/['']/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/stad/${slug}`;
}

export function getServiceTypeLink(type: string): string {
  const slug = type.toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
  return `/dienst/${slug}`;
}
