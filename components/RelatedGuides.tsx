import Link from 'next/link';
import { BookOpen, Zap, Calculator, Battery, Car, Settings } from 'lucide-react';

interface GuideLink {
  href: string;
  label: string;
  description: string;
  icon: React.ComponentType<{ className?: string }>;
  keywords: string[];
}

// All available guides/pillar pages with their metadata
const allGuides: GuideLink[] = [
  {
    href: '/gids/laadpaal-types',
    label: 'Soorten Laadpalen',
    description: 'Leer over de verschillende laadpaal types, van thuisladers tot snelladers.',
    icon: Battery,
    keywords: ['type', 'types', 'soort', 'thuislader', 'snellader', 'wallbox']
  },
  {
    href: '/gids/installatie',
    label: 'Installatie Gids',
    description: 'Alles wat je moet weten over het installeren van een laadpaal thuis of op kantoor.',
    icon: Settings,
    keywords: ['installatie', 'installeren', 'plaatsen', 'montage']
  },
  {
    href: '/gids/subsidies',
    label: 'Subsidies en Voordelen',
    description: 'Overzicht van subsidies en fiscale voordelen voor laadpaal installatie.',
    icon: Calculator,
    keywords: ['subsidie', 'korting', 'belasting', 'voordeel', 'seeh', 'isde']
  },
  {
    href: '/gids/slim-laden',
    label: 'Slim Laden',
    description: 'Informatie over slim laden, load balancing en zonnepanelen integratie.',
    icon: Zap,
    keywords: ['slim', 'smart', 'laden', 'zonnepanelen', 'load', 'balancing']
  },
  {
    href: '/gids/zakelijk',
    label: 'Zakelijke Laadoplossingen',
    description: 'Oplossingen voor bedrijven, parkeergarages en wagenparken.',
    icon: Car,
    keywords: ['zakelijk', 'bedrijf', 'fleet', 'wagenpark', 'parkeer']
  }
];

// Sub-pillar content for specific types
const typeSubGuides: Record<string, GuideLink[]> = {
  'thuislader': [
    {
      href: '/gids/laadpaal-types#thuislader',
      label: 'Thuisladers',
      description: 'De beste oplossingen voor thuis laden.',
      icon: Battery,
      keywords: ['thuislader', 'thuis', 'particulier']
    }
  ],
  'zakelijk': [
    {
      href: '/gids/zakelijk',
      label: 'Zakelijke Laadpalen',
      description: 'Professionele laadoplossingen voor bedrijven.',
      icon: Car,
      keywords: ['zakelijk', 'bedrijf', 'kantoor']
    }
  ],
  'snellader': [
    {
      href: '/gids/laadpaal-types#snellader',
      label: 'Snelladers',
      description: 'DC snelladers voor publieke locaties.',
      icon: Zap,
      keywords: ['snellader', 'dc', 'snel']
    }
  ],
  'slim-laden': [
    {
      href: '/gids/slim-laden',
      label: 'Slim Laden Systemen',
      description: 'Load balancing en smart charging oplossingen.',
      icon: Settings,
      keywords: ['slim', 'smart', 'balancing']
    }
  ]
};

interface RelatedGuidesProps {
  currentType?: string;
  currentProvince?: string;
  maxGuides?: number;
  className?: string;
  showDescription?: boolean;
  variant?: 'default' | 'compact' | 'card';
}

export default function RelatedGuides({
  currentType,
  currentProvince,
  maxGuides = 3,
  className = '',
  showDescription = true,
  variant = 'default'
}: RelatedGuidesProps) {
  // Calculate relevance score for each guide
  const scoredGuides = allGuides.map(guide => {
    let score = 0;

    // Boost score based on type match
    if (currentType) {
      const typeSlug = currentType.toLowerCase();
      if (guide.keywords.some(kw => typeSlug.includes(kw))) {
        score += 10;
      }

      // Check for specific type sub-guides
      if (typeSubGuides[typeSlug]) {
        score += 5;
      }
    }

    // Boost subsidie guide for all pages (always relevant)
    if (guide.href === '/gids/subsidies') {
      score = Math.max(score, 2);
    }

    // Always include the types guide at minimum score
    if (guide.href === '/gids/laadpaal-types') {
      score = Math.max(score, 1);
    }

    return { ...guide, score };
  });

  // Get type-specific sub-guides
  const specificGuides: GuideLink[] = currentType && typeSubGuides[currentType.toLowerCase()]
    ? typeSubGuides[currentType.toLowerCase()]
    : [];

  // Sort by score and take top guides
  const topGuides = scoredGuides
    .sort((a, b) => b.score - a.score)
    .slice(0, maxGuides - specificGuides.length);

  // Combine specific and general guides
  const guidesToShow = [...specificGuides, ...topGuides].slice(0, maxGuides);

  if (guidesToShow.length === 0) return null;

  if (variant === 'compact') {
    return (
      <div className={`${className}`}>
        <h3 className="text-sm font-semibold text-muted-foreground uppercase tracking-wider mb-3">
          Handige Informatie
        </h3>
        <ul className="space-y-2">
          {guidesToShow.map((guide) => (
            <li key={guide.href}>
              <Link
                href={guide.href}
                className="text-sm text-primary hover:underline flex items-center gap-2"
              >
                <guide.icon className="w-4 h-4 flex-shrink-0" />
                {guide.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    );
  }

  if (variant === 'card') {
    return (
      <div className={`bg-muted/50 rounded-lg p-6 ${className}`}>
        <h3 className="font-semibold text-lg mb-4">Gerelateerde Gidsen</h3>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {guidesToShow.map((guide) => (
            <Link
              key={guide.href}
              href={guide.href}
              className="group bg-background rounded-lg p-4 border hover:border-primary transition-colors"
            >
              <div className="flex items-center gap-3 mb-2">
                <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
                  <guide.icon className="w-5 h-5 text-primary" />
                </div>
                <h4 className="font-medium text-sm group-hover:text-primary transition-colors">
                  {guide.label}
                </h4>
              </div>
              {showDescription && (
                <p className="text-sm text-muted-foreground line-clamp-2">
                  {guide.description}
                </p>
              )}
            </Link>
          ))}
        </div>
      </div>
    );
  }

  // Default variant
  return (
    <div className={`${className}`}>
      <h3 className="font-semibold text-lg mb-4">Gerelateerde Gidsen</h3>
      <div className="space-y-4">
        {guidesToShow.map((guide) => (
          <Link
            key={guide.href}
            href={guide.href}
            className="group flex items-start gap-4 p-4 rounded-lg border hover:border-primary hover:bg-muted/50 transition-all"
          >
            <div className="p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors flex-shrink-0">
              <guide.icon className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h4 className="font-medium group-hover:text-primary transition-colors">
                {guide.label}
              </h4>
              {showDescription && (
                <p className="text-sm text-muted-foreground mt-1">
                  {guide.description}
                </p>
              )}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
