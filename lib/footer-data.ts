import { getAllInstallateurs, getAllServiceTypes, createProvinceSlug, createTypeSlug } from './data';

// Interfaces for footer data
export interface FooterProvince {
  name: string;
  slug: string;
  count: number;
}

export interface FooterType {
  name: string;
  slug: string;
  count: number;
}

export interface FooterGuide {
  href: string;
  label: string;
  description?: string;
}

// Service types section - Dutch EV charging services
export const serviceTypes: FooterGuide[] = [
  {
    href: '/dienst/thuislader',
    label: 'Thuislader Installatie',
    description: 'Laadpaal voor particulieren thuis'
  },
  {
    href: '/dienst/zakelijke-laadpaal',
    label: 'Zakelijke Laadpaal',
    description: 'Laadoplossingen voor bedrijven'
  },
  {
    href: '/dienst/slim-laden',
    label: 'Slim Laden',
    description: 'Intelligent laden met dynamische tarieven'
  },
  {
    href: '/dienst/load-balancing',
    label: 'Load Balancing',
    description: 'Verdeling van stroomcapaciteit'
  },
  {
    href: '/dienst/zonnepanelen-integratie',
    label: 'Zonnepanelen Integratie',
    description: 'Laden met eigen opgewekte energie'
  },
  {
    href: '/dienst/vve-laadoplossingen',
    label: 'VvE Laadoplossingen',
    description: 'Collectieve laadinfrastructuur voor appartementen'
  }
];

// EV charging guides/resources section
export const resources: FooterGuide[] = [
  {
    href: '/gids/laadpaal-kiezen',
    label: 'Laadpaal Kiezen',
    description: 'Tips voor het kiezen van de juiste laadpaal'
  },
  {
    href: '/gids/kosten-laadpaal',
    label: 'Kosten Laadpaal',
    description: 'Wat kost een laadpaal installatie?'
  },
  {
    href: '/gids/subsidies',
    label: 'Subsidies & Regelingen',
    description: 'Overzicht van beschikbare subsidies'
  },
  {
    href: '/gids/merken-vergelijken',
    label: 'Merken Vergelijken',
    description: 'Alfen, EVBox, Wallbox en meer'
  },
  {
    href: '/gids/installatie-proces',
    label: 'Installatie Proces',
    description: 'Wat kun je verwachten bij installatie'
  },
  {
    href: '/gids/thuisladen-tips',
    label: 'Tips Thuisladen',
    description: 'Optimaal thuisladen voor uw EV'
  }
];

// Support/info section
export const support: FooterGuide[] = [
  {
    href: '/gids/slim-laden',
    label: 'Slim Laden Uitgelegd',
    description: 'Wat is slim laden en hoe werkt het?'
  },
  {
    href: '/gids/laadpaal-zakelijk',
    label: 'Zakelijk Laden',
    description: 'Laadoplossingen voor bedrijven'
  },
  {
    href: '/gids/elektrische-auto',
    label: 'Elektrische Auto',
    description: 'Alles over elektrisch rijden'
  },
  {
    href: '/gids/laadpas',
    label: 'Laadpassen',
    description: 'Vergelijk laadpassen en tarieven'
  },
  {
    href: '/gids/onderhoud',
    label: 'Onderhoud Laadpaal',
    description: 'Onderhoudstips voor uw laadpaal'
  }
];

// Static guides content (pillar pages)
export const guides: FooterGuide[] = [
  {
    href: '/gids/complete-handleiding',
    label: 'Complete Handleiding',
    description: 'Alles over laadpalen in Nederland'
  },
  {
    href: '/gids/installatie-eisen',
    label: 'Installatie Eisen',
    description: 'Technische vereisten en normen'
  },
  {
    href: '/gids/laden-appartement',
    label: 'Laden bij Appartement',
    description: 'VvE en collectieve oplossingen'
  },
  {
    href: '/gids/toekomst-ev',
    label: 'Toekomst van EV',
    description: 'Ontwikkelingen in elektrisch rijden'
  },
  {
    href: '/gids/laadsnelheid',
    label: 'Laadsnelheid Uitgelegd',
    description: 'kW, kWh en laadtijden'
  }
];

// Cache for footer data
let provincesCacheFooter: FooterProvince[] | null = null;
let typesCacheFooter: FooterType[] | null = null;

/**
 * Get top provinces by installateur count
 * @param limit - Maximum number of provinces to return (default 8)
 * @returns Array of provinces sorted by installateur count (descending)
 */
export async function getTopProvincesByInstallateurCount(limit: number = 8): Promise<FooterProvince[]> {
  if (provincesCacheFooter && provincesCacheFooter.length >= limit) {
    return provincesCacheFooter.slice(0, limit);
  }

  try {
    const installateurs = await getAllInstallateurs();

    // Count installateurs per province
    const provinceCounts = new Map<string, number>();

    for (const installateur of installateurs) {
      if (installateur.province && installateur.province.trim()) {
        const province = installateur.province.trim();
        provinceCounts.set(province, (provinceCounts.get(province) || 0) + 1);
      }
    }

    // Convert to array and sort by count
    const sortedProvinces: FooterProvince[] = Array.from(provinceCounts.entries())
      .map(([name, count]) => ({
        name,
        slug: createProvinceSlug(name),
        count
      }))
      .sort((a, b) => b.count - a.count);

    // Cache the full list
    provincesCacheFooter = sortedProvinces;

    return sortedProvinces.slice(0, limit);
  } catch (error) {
    console.error('Error getting top provinces:', error);
    return [];
  }
}

/**
 * Get top service types by count
 * @param limit - Maximum number of types to return (default 8)
 * @returns Array of types sorted by installateur count (descending)
 */
export async function getTopTypesByInstallateurCount(limit: number = 8): Promise<FooterType[]> {
  if (typesCacheFooter && typesCacheFooter.length >= limit) {
    return typesCacheFooter.slice(0, limit);
  }

  try {
    const installateurs = await getAllInstallateurs();
    const allTypes = await getAllServiceTypes();

    // Count installateurs per type
    const typeCounts = new Map<string, number>();
    const typeNames = new Map<string, string>();

    // Build a lookup for type names
    for (const type of allTypes) {
      typeNames.set(type.slug, type.name);
    }

    for (const installateur of installateurs) {
      // Count by service types array
      if (installateur.service_types && Array.isArray(installateur.service_types)) {
        for (const serviceType of installateur.service_types) {
          const typeSlug = createTypeSlug(serviceType);
          typeCounts.set(typeSlug, (typeCounts.get(typeSlug) || 0) + 1);
          if (!typeNames.has(typeSlug)) {
            typeNames.set(typeSlug, serviceType);
          }
        }
      }
    }

    // Convert to array and sort by count
    const sortedTypes: FooterType[] = Array.from(typeCounts.entries())
      .map(([slug, count]) => ({
        name: formatTypeName(typeNames.get(slug) || slug),
        slug,
        count
      }))
      .sort((a, b) => b.count - a.count);

    // Cache the full list
    typesCacheFooter = sortedTypes;

    return sortedTypes.slice(0, limit);
  } catch (error) {
    console.error('Error getting top types:', error);
    return [];
  }
}

/**
 * Format type name for display
 */
function formatTypeName(name: string): string {
  // Convert slug-style names to title case
  if (name.includes('-')) {
    return name
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }

  // Capitalize first letter of each word
  return name
    .split(' ')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
}

/**
 * Get all footer data in a single call (for server components)
 */
export async function getFooterData(provinceLimit: number = 8, typeLimit: number = 8) {
  const [topProvinces, topTypes] = await Promise.all([
    getTopProvincesByInstallateurCount(provinceLimit),
    getTopTypesByInstallateurCount(typeLimit)
  ]);

  return {
    provinces: topProvinces,
    types: topTypes,
    serviceTypes,
    resources,
    support,
    guides
  };
}

/**
 * Clear cache (useful for development/testing)
 */
export function clearFooterCache() {
  provincesCacheFooter = null;
  typesCacheFooter = null;
}
