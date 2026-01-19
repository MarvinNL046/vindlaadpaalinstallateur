/**
 * Centrale Statistieken Configuratie voor VindLaadpaalInstallateur.nl
 *
 * Update deze waarden op EEN plek wanneer data verandert.
 * Alle componenten en pagina's importeren hieruit.
 *
 * Laatst bijgewerkt: 2025-01-19
 * - Aangepast voor laadpaal installateur directory
 */

export const SITE_STATS = {
  // Weergave waarden (geformatteerd voor UI)
  totalInstallateursDisplay: '500+',
  totalInstallateursExact: 500,

  // Geografische dekking - Nederland
  totalProvinces: 12,
  totalGemeentes: 342,
  totalSteden: 1500,

  // Dynamische placeholder (wanneer API nog niet geladen is)
  installateursPlaceholder: '500+',

  // Site info
  siteName: 'VindLaadpaalInstallateur',
  siteUrl: 'https://www.vindlaadpaalinstallateur.nl',
  country: 'Nederland',
  countryShort: 'NL',

  // Service type statistieken
  thuisladerInstallateurs: 400,
  zakelijkeInstallateurs: 250,
  slimLadenSpecialisten: 150,
  snelladerInstallateurs: 50,

  // EV markt statistieken Nederland
  evRijdersNederland: '500.000+',
  laadpalenNederland: '150.000+',
  groeiPercentage: '30%',

  // Top provincies op aantal installateurs
  topProvinces: {
    noordHolland: 80,
    zuidHolland: 90,
    noordBrabant: 60,
    gelderland: 50,
    utrecht: 45,
  },

  // Dienst types
  serviceTypesCount: 12,
  merkenCount: 15,
  totalReviewsDisplay: '5.000+',
} as const;

/**
 * Krijg geformatteerde statistieken beschrijving voor SEO en meta tags
 */
export function getStatsDescription(variant: 'short' | 'long' | 'seo' = 'short'): string {
  switch (variant) {
    case 'short':
      return `Vind laadpaal installateurs in alle ${SITE_STATS.totalProvinces} provincies.`;
    case 'long':
      return `Doorzoek ons uitgebreide netwerk van ${SITE_STATS.totalInstallateursDisplay} gecertificeerde laadpaal installateurs in alle ${SITE_STATS.totalProvinces} provincies van ${SITE_STATS.country}.`;
    case 'seo':
      return `Vind de beste laadpaal installateur bij jou in de buurt. Vergelijk installateurs, bekijk reviews en vraag gratis offertes aan voor thuisladers en zakelijke laadpalen in heel Nederland.`;
    default:
      return `Vind laadpaal installateurs in alle ${SITE_STATS.totalProvinces} provincies.`;
  }
}

/**
 * Krijg CTA statistieken tekst voor blog pagina's en promotionele secties
 */
export function getCtaStatsText(): string {
  return `Zoek direct in ons uitgebreide netwerk van meer dan ${SITE_STATS.totalInstallateursDisplay} laadpaal installateurs.`;
}

/**
 * Krijg FAQ antwoord over aantal installateurs
 */
export function getFaqInstallateursAnswer(): string {
  return `${SITE_STATS.country} heeft meer dan ${SITE_STATS.totalInstallateursDisplay} gecertificeerde laadpaal installateurs, verspreid over alle ${SITE_STATS.totalProvinces} provincies. Deze installateurs bieden diverse diensten zoals thuislader installatie, zakelijke laadoplossingen, slim laden en zonnepanelen integratie.`;
}

/**
 * Krijg "waarom ons" feature tekst
 */
export function getComprehensiveDataText(): string {
  return `Informatie over laadpaal installateurs in alle ${SITE_STATS.totalProvinces} provincies met geverifieerde gegevens, certificeringen en contactinformatie.`;
}

/**
 * Krijg provincies bericht voor lege provincie pagina's
 */
export function getProvincesComingSoonText(): string {
  return `We voegen actief laadpaal installateur data toe voor alle ${SITE_STATS.totalProvinces} provincies. Kom snel terug voor updates!`;
}

/**
 * Krijg EV markt statistieken tekst
 */
export function getEvMarketStatsText(): string {
  return `Met meer dan ${SITE_STATS.evRijdersNederland} elektrische rijders in Nederland en ${SITE_STATS.laadpalenNederland} laadpunten groeit de vraag naar thuisladers met ${SITE_STATS.groeiPercentage} per jaar.`;
}
