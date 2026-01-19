import { Metadata } from 'next';
import Link from 'next/link';
import { Calendar, Clock, ArrowRight, BookOpen, Tag } from 'lucide-react';
import { Card } from '@/components/ui/card';
import LeaderboardAd from '@/components/ads/LeaderboardAd';
import InlineAd from '@/components/ads/InlineAd';
import PremiumContentBanner from '@/components/PremiumContentBanner';
import { blogPosts, categories } from '@/lib/blog-data';
import { getCtaStatsText } from '@/lib/stats-config';

const ctaStatsText = getCtaStatsText();

// Placeholder images for blog posts (laadpaal themed)
const blogImages = [
  '/images/blog/laadpaal-installatie.jpg',
  '/images/blog/ev-laden.jpg',
  '/images/blog/thuislader.jpg',
  '/images/blog/zonnepanelen-auto.jpg',
  '/images/blog/smart-charging.jpg',
  '/images/blog/zakelijk-laden.jpg',
  '/images/blog/elektrische-auto.jpg',
  '/images/blog/laadpunt.jpg',
];

// Helper function to get a placeholder image based on post index
function getPlaceholderImage(index: number): string {
  return blogImages[index % blogImages.length];
}

export const metadata: Metadata = {
  title: 'Blog | Vind Laadpaal Installateur - Laadpaal Tips & Informatie',
  description: 'Deskundige artikelen over laadpaal installatie, slim laden, subsidies, laadpaal merken vergelijken en tips voor elektrisch rijden.',
  keywords: 'laadpaal blog, laadpaal installatie tips, slim laden, laadpaal subsidie, thuislader informatie, EV laden, elektrisch rijden',
  authors: [{ name: 'VindLaadpaalInstallateur.nl' }],
  openGraph: {
    title: 'Blog - Vind Laadpaal Installateur',
    description: 'Deskundige informatie over laadpaal installatie, slim laden en elektrisch rijden',
    type: 'website',
    siteName: 'VindLaadpaalInstallateur.nl',
    locale: 'nl_NL',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Blog - Vind Laadpaal Installateur',
    description: 'Deskundige informatie over laadpaal installatie en elektrisch rijden',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      <LeaderboardAd />

      {/* Hero Section */}
      <div className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-primary-foreground/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Blog</li>
            </ol>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Laadpaal Informatie
          </h1>
          <p className="text-primary-foreground/80 text-lg max-w-2xl">
            Deskundige gidsen, installatie tips en alles over slim laden om jou
            te helpen bij de overstap naar elektrisch rijden.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-8 mt-8">
            <div>
              <div className="text-3xl font-bold text-green-300">{blogPosts.length}</div>
              <div className="text-primary-foreground/70 text-sm">Artikelen</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-green-300">{categories.length}</div>
              <div className="text-primary-foreground/70 text-sm">Categorieen</div>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid gap-8 lg:grid-cols-4">
            {/* Sidebar */}
            <div className="lg:col-span-1 order-2 lg:order-1">
              <Card className="p-6 shadow-soft sticky top-4">
                <div className="flex items-center gap-2 mb-4">
                  <Tag className="w-5 h-5 text-accent" />
                  <h3 className="font-serif font-semibold">Categorieen</h3>
                </div>
                <ul className="space-y-3">
                  {categories.map((category) => (
                    <li key={category.name}>
                      <button className="text-sm text-muted-foreground hover:text-accent transition-colors flex justify-between w-full group">
                        <span className="group-hover:translate-x-1 transition-transform">{category.name}</span>
                        <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">
                          {category.count}
                        </span>
                      </button>
                    </li>
                  ))}
                </ul>
              </Card>
            </div>

            {/* Blog posts */}
            <div className="lg:col-span-3 space-y-8 order-1 lg:order-2">
              {/* Featured post */}
              <Card className="overflow-hidden shadow-soft border-2 border-transparent hover:border-accent/30 transition-all duration-300">
                <div className="grid md:grid-cols-2 gap-0">
                  <div className="relative bg-muted aspect-video md:aspect-auto">
                    <img
                      src={blogPosts[0].image || getPlaceholderImage(0)}
                      alt={blogPosts[0].title}
                      className="w-full h-full object-cover"
                      loading="eager"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="px-3 py-1 bg-accent text-accent-foreground text-xs font-semibold rounded-full">
                        UITGELICHT
                      </span>
                    </div>
                  </div>
                  <div className="p-6 md:p-8 flex flex-col justify-center">
                    <span className="text-xs text-accent font-medium mb-2">{blogPosts[0].category}</span>
                    <h2 className="font-serif text-2xl font-bold mb-3">
                      <Link href={`/blog/${blogPosts[0].slug}`} className="hover:text-accent transition-colors">
                        {blogPosts[0].title}
                      </Link>
                    </h2>
                    <p className="text-muted-foreground mb-4">{blogPosts[0].excerpt}</p>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {new Date(blogPosts[0].date).toLocaleDateString('nl-NL')}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="w-4 h-4" />
                        {blogPosts[0].readTime}
                      </span>
                    </div>
                    <Link
                      href={`/blog/${blogPosts[0].slug}`}
                      className="mt-6 inline-flex items-center gap-2 text-accent font-medium hover:underline"
                    >
                      Lees artikel
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </div>
                </div>
              </Card>

              <InlineAd />

              {/* Regular posts grid */}
              <div className="grid gap-6 md:grid-cols-2">
                {blogPosts.slice(1).map((post) => (
                  <Card
                    key={post.id}
                    className="overflow-hidden shadow-soft border-2 border-transparent hover:border-accent/30 transition-all duration-300 group"
                  >
                    <div className="aspect-video relative overflow-hidden bg-muted">
                      <img
                        src={post.image || getPlaceholderImage(post.id)}
                        alt={post.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                        loading="lazy"
                      />
                    </div>
                    <div className="p-6">
                      <span className="text-xs text-accent font-medium">{post.category}</span>
                      <h3 className="font-serif text-xl font-semibold mt-2 mb-3">
                        <Link href={`/blog/${post.slug}`} className="hover:text-accent transition-colors">
                          {post.title}
                        </Link>
                      </h3>
                      <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                        {post.excerpt}
                      </p>
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-3 text-sm text-muted-foreground">
                          <span className="flex items-center gap-1">
                            <Calendar className="w-3 h-3" />
                            {new Date(post.date).toLocaleDateString('nl-NL')}
                          </span>
                          <span className="flex items-center gap-1">
                            <Clock className="w-3 h-3" />
                            {post.readTime}
                          </span>
                        </div>
                        <Link
                          href={`/blog/${post.slug}`}
                          className="text-accent hover:underline text-sm flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity"
                        >
                          Lees meer
                          <ArrowRight className="w-3 h-3" />
                        </Link>
                      </div>
                    </div>
                  </Card>
                ))}
              </div>

              <InlineAd />

              {/* Premium Content Banner */}
              <PremiumContentBanner />

              {/* Newsletter signup */}
              <Card className="p-8 shadow-soft bg-gradient-to-r from-green-50 to-blue-50/30 dark:from-green-900/20 dark:to-blue-900/10 border-green-100 dark:border-green-800 text-center">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-6 h-6 text-accent" />
                </div>
                <h3 className="font-serif text-2xl font-semibold mb-3">Blijf Op de Hoogte</h3>
                <p className="text-muted-foreground mb-6 max-w-md mx-auto">
                  Ontvang maandelijks laadpaal tips, subsidie nieuws en
                  informatie over elektrisch rijden in je inbox.
                </p>
                <form className="max-w-md mx-auto flex gap-2">
                  <input
                    type="email"
                    placeholder="Je e-mailadres"
                    className="flex-1 px-4 py-2 border-2 rounded-lg focus:outline-none focus:border-accent bg-background"
                  />
                  <button
                    type="submit"
                    className="px-6 py-2 bg-accent text-accent-foreground rounded-lg font-medium hover:bg-accent/90 transition-colors"
                  >
                    Aanmelden
                  </button>
                </form>
              </Card>
            </div>
          </div>

          {/* CTA Section */}
          <div className="mt-16 text-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Op Zoek naar een Laadpaal Installateur?
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              {ctaStatsText}
            </p>
            <Link
              href="/zoeken"
              className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-lg font-medium hover:bg-primary/90 transition-colors"
            >
              Vind Installateurs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
