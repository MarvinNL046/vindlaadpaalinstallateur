/**
 * Affiliate Partner Configuration
 *
 * Add affiliate partners here. Set 'active: true' when you have a partner.
 * Ads are only shown when there is at least one active partner.
 */

export interface AffiliatePartner {
  id: string;
  name: string;
  description: string;
  url: string;
  imageUrl?: string;
  buttonText: string;
  active: boolean;
  // Optional tracking parameters
  utmSource?: string;
  utmMedium?: string;
  utmCampaign?: string;
}

export const affiliatePartners: AffiliatePartner[] = [
  {
    id: 'laadpaal-webshop',
    name: 'Laadpaal Webshop',
    description: 'Vergelijk laadpalen van topmerken en vind de beste prijs voor jouw thuislader.',
    url: 'https://example.com/laadpalen',
    imageUrl: '/images/affiliates/laadpaal-webshop.png',
    buttonText: 'Bekijk aanbod',
    active: false, // Set to true when you have a partner
    utmSource: 'vindlaadpaalinstallateur',
    utmMedium: 'sidebar',
    utmCampaign: 'laadpaal-webshop',
  },
  {
    id: 'energie-vergelijker',
    name: 'Energie Vergelijker',
    description: 'Vergelijk energieleveranciers met speciale EV-tarieven en bespaar op je laadkosten.',
    url: 'https://example.com/energie-vergelijken',
    imageUrl: '/images/affiliates/energie-vergelijker.png',
    buttonText: 'Vergelijk nu',
    active: false,
    utmSource: 'vindlaadpaalinstallateur',
    utmMedium: 'sidebar',
    utmCampaign: 'energie-vergelijker',
  },
  {
    id: 'zonnepanelen',
    name: 'Zonnepanelen Offertes',
    description: 'Combineer je laadpaal met zonnepanelen en laad je auto met eigen opgewekte stroom.',
    url: 'https://example.com/zonnepanelen',
    imageUrl: '/images/affiliates/zonnepanelen.png',
    buttonText: 'Gratis offertes',
    active: false,
    utmSource: 'vindlaadpaalinstallateur',
    utmMedium: 'sidebar',
    utmCampaign: 'zonnepanelen',
  },
  {
    id: 'ev-lease',
    name: 'Elektrische Auto Lease',
    description: 'Bekijk aantrekkelijke private lease deals voor elektrische autos.',
    url: 'https://example.com/ev-lease',
    imageUrl: '/images/affiliates/ev-lease.png',
    buttonText: 'Bekijk deals',
    active: false,
    utmSource: 'vindlaadpaalinstallateur',
    utmMedium: 'sidebar',
    utmCampaign: 'ev-lease',
  },
];

/**
 * Helper function to get active partners
 */
export function getActivePartners(): AffiliatePartner[] {
  return affiliatePartners.filter(partner => partner.active);
}

/**
 * Helper function to check if there are active partners
 */
export function hasActivePartners(): boolean {
  return affiliatePartners.some(partner => partner.active);
}

/**
 * Helper function to build affiliate URL with UTM parameters
 */
export function buildAffiliateUrl(partner: AffiliatePartner): string {
  const url = new URL(partner.url);

  if (partner.utmSource) {
    url.searchParams.set('utm_source', partner.utmSource);
  }
  if (partner.utmMedium) {
    url.searchParams.set('utm_medium', partner.utmMedium);
  }
  if (partner.utmCampaign) {
    url.searchParams.set('utm_campaign', partner.utmCampaign);
  }

  return url.toString();
}
