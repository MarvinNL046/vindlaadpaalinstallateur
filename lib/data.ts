import { promises as fs } from 'fs';
import path from 'path';
import { db, installateurs } from './db';
import { eq, ilike, or, desc, asc, sql, and, count } from 'drizzle-orm';

// Laadpaal Installateur Interface
export interface Installateur {
  // Core identifiers
  id: string;
  name: string;
  slug: string;

  // Location - Dutch geography
  address?: string;
  city: string;
  gemeente?: string;
  province: string;
  province_slug?: string;
  postcode?: string;
  country: string;
  latitude?: number;
  longitude?: number;

  // Classification
  type: string;
  type_slug?: string;
  service_types: string[];
  merken: string[];           // Laadpaal merken (Alfen, EVBox, etc.)
  certificeringen: string[];

  // Contact
  phone?: string;
  email?: string;
  website?: string;

  // Details
  description?: string;
  opening_hours?: string;
  specialisaties?: string[];
  year_established?: string;
  kvk_nummer?: string;

  // Subsidie
  subsidie_advies?: boolean;
  subsidie_types?: string[];
  werkgebied?: string[];

  // Google data
  rating?: number;
  review_count?: number;
  photo_url?: string;
  photos?: string[];

  // Reviews
  reviews?: Array<{
    reviewer_name: string;
    rating: number;
    review_text: string;
    review_date: string;
    reviewer_image?: string;
  }>;

  // Metadata
  status?: string;
  featured?: boolean;
  claimed?: boolean;
  verified?: boolean;
  source?: string;
  discovered_at?: string;
  updated_at?: string;
}

// Generated content for SEO
export interface GeneratedContent {
  summary: string;
  about: string;
  features: string[];
  services: string[];
  visitor_tips: string[];
  directions?: string;
  local_context?: string;
}

// Enriched installateur with generated content
export interface EnrichedInstallateurData {
  website_url?: string;
  website_content?: string;
  website_scraped_at?: string;

  google_rating?: number;
  google_review_count?: number;
  google_reviews?: Array<{
    reviewer_name: string;
    rating: number;
    review_text: string;
    review_date: string;
  }>;
  google_photo?: string;
  google_photos?: string[];

  generated?: GeneratedContent;
  generated_at?: string;

  enriched: boolean;
  enriched_at?: string;
  last_updated?: string;

  seoTitle?: string;
  seoDescription?: string;
  enrichedContent?: string;
}

export interface InstallateurWithContent extends Installateur, EnrichedInstallateurData {}

// Province interface
export interface Province {
  name: string;
  slug: string;
  capital?: string;
  major_cities?: string[];
}

// Service type interface
export interface ServiceType {
  slug: string;
  name: string;
  description?: string;
  search_terms?: string[];
}

// Brand interface
export interface Brand {
  name: string;
  slug: string;
  description?: string;
  country?: string;
  popular_models?: string[];
  features?: string[];
}

// Cache for static data
let provincesCache: Province[] | null = null;
let serviceTypesCache: ServiceType[] | null = null;
let brandsCache: Brand[] | null = null;

// ===== HELPER: Map database row to Installateur interface =====

function mapRowToInstallateur(row: typeof installateurs.$inferSelect): Installateur {
  return {
    id: row.id.toString(),
    name: row.name,
    slug: row.slug,
    address: row.address || undefined,
    city: row.city,
    gemeente: row.gemeente || undefined,
    province: row.province,
    province_slug: row.provinceSlug || undefined,
    postcode: row.postcode || undefined,
    country: row.country,
    latitude: row.latitude ? parseFloat(row.latitude) : undefined,
    longitude: row.longitude ? parseFloat(row.longitude) : undefined,
    type: row.type,
    type_slug: row.typeSlug || row.type.toLowerCase().replace(/\s+/g, '-'),
    service_types: row.serviceTypes || [],
    merken: row.merken || [],
    certificeringen: row.certificeringen || [],
    phone: row.phone || undefined,
    email: row.email || undefined,
    website: row.website || undefined,
    description: row.description || undefined,
    opening_hours: row.openingHours || undefined,
    specialisaties: row.specialisaties || undefined,
    year_established: row.yearEstablished || undefined,
    kvk_nummer: row.kvkNummer || undefined,
    subsidie_advies: row.subsidieAdvies || false,
    subsidie_types: row.subsidieTypes || [],
    werkgebied: row.werkgebied || [],
    rating: row.rating ? parseFloat(row.rating) : undefined,
    review_count: row.reviewCount || undefined,
    photo_url: row.photoUrl || undefined,
    photos: row.photos || undefined,
    reviews: row.reviews || undefined,
    status: row.status || undefined,
    featured: row.featured || false,
    claimed: row.claimed || false,
    verified: row.verified || false,
    source: row.source || undefined,
    discovered_at: row.discoveredAt?.toISOString() || undefined,
    updated_at: row.updatedAt?.toISOString() || undefined,
  };
}

function mapRowToInstallateurWithContent(row: typeof installateurs.$inferSelect): InstallateurWithContent {
  const base = mapRowToInstallateur(row);
  return {
    ...base,
    enriched: !!row.enrichedContent || !!row.generatedSummary,
    enriched_at: row.enrichedAt?.toISOString() || undefined,
    seoTitle: row.seoTitle || undefined,
    seoDescription: row.seoDescription || undefined,
    enrichedContent: row.enrichedContent || undefined,
    generated: row.generatedSummary ? {
      summary: row.generatedSummary || '',
      about: row.generatedAbout || '',
      features: row.generatedFeatures || [],
      services: row.generatedServices || [],
      visitor_tips: row.generatedVisitorTips || [],
      directions: row.generatedDirections || undefined,
      local_context: row.generatedLocalContext || undefined,
    } : undefined,
  };
}

// ===== CORE DATA FUNCTIONS =====

export async function getAllInstallateurs(): Promise<Installateur[]> {
  try {
    const results = await db.select().from(installateurs);
    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading installateurs from database:', error);
    return [];
  }
}

export async function getInstallateurBySlug(slug: string): Promise<InstallateurWithContent | null> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(eq(installateurs.slug, slug))
      .limit(1);

    if (results.length === 0) return null;

    return mapRowToInstallateurWithContent(results[0]);
  } catch (error) {
    console.error('Error loading installateur:', error);
    return null;
  }
}

// ===== PROVINCE FUNCTIONS =====

export async function getAllProvinces(): Promise<Province[]> {
  if (provincesCache) return provincesCache;

  try {
    const provincesPath = path.join(process.cwd(), 'data', 'provinces.json');
    const content = await fs.readFile(provincesPath, 'utf-8');
    const data = JSON.parse(content);
    provincesCache = data.provinces as Province[];
    return provincesCache;
  } catch (error) {
    console.error('Error loading provinces:', error);
    return [];
  }
}

export async function getProvinceBySlug(slug: string): Promise<Province | null> {
  const provinces = await getAllProvinces();
  return provinces.find(p => p.slug === slug) || null;
}

export async function getInstallateursByProvince(province: string): Promise<Installateur[]> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(
        or(
          ilike(installateurs.province, province),
          ilike(installateurs.provinceSlug, province)
        )
      );
    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading installateurs by province:', error);
    return [];
  }
}

// ===== GEMEENTE FUNCTIONS =====

export async function getAllGemeentes(): Promise<string[]> {
  try {
    const results = await db.selectDistinct({ gemeente: installateurs.gemeente })
      .from(installateurs)
      .where(sql`${installateurs.gemeente} IS NOT NULL AND ${installateurs.gemeente} != ''`)
      .orderBy(asc(installateurs.gemeente));

    return results.map(r => r.gemeente!).filter(Boolean);
  } catch (error) {
    console.error('Error loading gemeentes:', error);
    return [];
  }
}

export async function getGemeentesByProvince(province: string): Promise<string[]> {
  try {
    const results = await db.selectDistinct({ gemeente: installateurs.gemeente })
      .from(installateurs)
      .where(
        and(
          sql`${installateurs.gemeente} IS NOT NULL AND ${installateurs.gemeente} != ''`,
          or(
            ilike(installateurs.province, province),
            ilike(installateurs.provinceSlug, province)
          )
        )
      )
      .orderBy(asc(installateurs.gemeente));

    return results.map(r => r.gemeente!).filter(Boolean);
  } catch (error) {
    console.error('Error loading gemeentes by province:', error);
    return [];
  }
}

export async function getInstallateursByGemeente(gemeente: string, province?: string): Promise<Installateur[]> {
  try {
    let whereClause = ilike(installateurs.gemeente, gemeente);

    if (province) {
      whereClause = and(
        whereClause,
        or(
          ilike(installateurs.province, province),
          ilike(installateurs.provinceSlug, province)
        )
      )!;
    }

    const results = await db.select()
      .from(installateurs)
      .where(whereClause);

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading installateurs by gemeente:', error);
    return [];
  }
}

// ===== CITY FUNCTIONS =====

export async function getAllCities(): Promise<string[]> {
  try {
    const results = await db.selectDistinct({ city: installateurs.city })
      .from(installateurs)
      .where(sql`${installateurs.city} IS NOT NULL AND ${installateurs.city} != ''`)
      .orderBy(asc(installateurs.city));

    return results.map(r => r.city).filter(Boolean);
  } catch (error) {
    console.error('Error loading cities:', error);
    return [];
  }
}

export async function getCitiesByProvince(province: string): Promise<string[]> {
  try {
    const results = await db.selectDistinct({ city: installateurs.city })
      .from(installateurs)
      .where(
        and(
          sql`${installateurs.city} IS NOT NULL AND ${installateurs.city} != ''`,
          or(
            ilike(installateurs.province, province),
            ilike(installateurs.provinceSlug, province)
          )
        )
      )
      .orderBy(asc(installateurs.city));

    return results.map(r => r.city).filter(Boolean);
  } catch (error) {
    console.error('Error loading cities by province:', error);
    return [];
  }
}

export async function getInstallateursByCity(city: string, province?: string): Promise<Installateur[]> {
  try {
    let whereClause = ilike(installateurs.city, city);

    if (province) {
      whereClause = and(
        whereClause,
        or(
          ilike(installateurs.province, province),
          ilike(installateurs.provinceSlug, province)
        )
      )!;
    }

    const results = await db.select()
      .from(installateurs)
      .where(whereClause);

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading installateurs by city:', error);
    return [];
  }
}

// ===== SERVICE TYPE FUNCTIONS =====

export async function getAllServiceTypes(): Promise<ServiceType[]> {
  if (serviceTypesCache) return serviceTypesCache;

  try {
    const typesPath = path.join(process.cwd(), 'data', 'service-types.json');
    const content = await fs.readFile(typesPath, 'utf-8');
    const data = JSON.parse(content);
    serviceTypesCache = data.types as ServiceType[];
    return serviceTypesCache;
  } catch (error) {
    console.error('Error loading service types:', error);
    return [];
  }
}

export async function getServiceTypeBySlug(slug: string): Promise<ServiceType | null> {
  const types = await getAllServiceTypes();
  return types.find(t => t.slug === slug) || null;
}

export async function getInstallateursByServiceType(serviceType: string): Promise<Installateur[]> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(
        sql`${serviceType} = ANY(${installateurs.serviceTypes})`
      );

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading installateurs by service type:', error);
    return [];
  }
}

// ===== BRAND FUNCTIONS =====

export async function getAllBrands(): Promise<Brand[]> {
  if (brandsCache) return brandsCache;

  try {
    const brandsPath = path.join(process.cwd(), 'data', 'brands.json');
    const content = await fs.readFile(brandsPath, 'utf-8');
    const data = JSON.parse(content);
    brandsCache = data.brands as Brand[];
    return brandsCache;
  } catch (error) {
    console.error('Error loading brands:', error);
    return [];
  }
}

export async function getBrandBySlug(slug: string): Promise<Brand | null> {
  const brands = await getAllBrands();
  return brands.find(b => b.slug === slug) || null;
}

export async function getInstallateursByBrand(brand: string): Promise<Installateur[]> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(
        sql`${brand} = ANY(${installateurs.merken})`
      );

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading installateurs by brand:', error);
    return [];
  }
}

// ===== SLUG UTILITIES =====

export function createSlug(name: string, city: string, province?: string): string {
  const base = province
    ? `${name}-${city}-${province}`
    : `${name}-${city}`;

  return base
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}

export function createProvinceSlug(province: string): string {
  return province
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function createGemeenteSlug(gemeente: string): string {
  return gemeente
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function createCitySlug(city: string): string {
  return city
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

export function createTypeSlug(type: string): string {
  return type
    .toLowerCase()
    .replace(/\s+/g, '-')
    .replace(/[^a-z0-9-]/g, '');
}

// ===== STATISTICS =====

export async function getStats() {
  try {
    const provinces = await getAllProvinces();
    const serviceTypes = await getAllServiceTypes();
    const brands = await getAllBrands();

    // Use SQL aggregations for efficiency
    const [statsResult] = await db.select({
      totalInstallateurs: count(),
      provincesWithInstallateurs: sql<number>`COUNT(DISTINCT ${installateurs.province})`,
      citiesWithInstallateurs: sql<number>`COUNT(DISTINCT ${installateurs.city})`,
      gemeentesWithInstallateurs: sql<number>`COUNT(DISTINCT ${installateurs.gemeente})`,
      withRatings: sql<number>`COUNT(*) FILTER (WHERE ${installateurs.rating} IS NOT NULL)`,
      withPhotos: sql<number>`COUNT(*) FILTER (WHERE ${installateurs.photoUrl} IS NOT NULL)`,
    }).from(installateurs);

    return {
      total_installateurs: Number(statsResult.totalInstallateurs),
      total_provinces: provinces.length,
      provinces_with_installateurs: Number(statsResult.provincesWithInstallateurs),
      cities_with_installateurs: Number(statsResult.citiesWithInstallateurs),
      gemeentes_with_installateurs: Number(statsResult.gemeentesWithInstallateurs),
      total_service_types: serviceTypes.length,
      total_brands: brands.length,
      with_ratings: Number(statsResult.withRatings),
      with_photos: Number(statsResult.withPhotos),
    };
  } catch (error) {
    console.error('Error loading stats:', error);
    return {
      total_installateurs: 0,
      total_provinces: 12,
      provinces_with_installateurs: 0,
      cities_with_installateurs: 0,
      gemeentes_with_installateurs: 0,
      total_service_types: 0,
      total_brands: 0,
      with_ratings: 0,
      with_photos: 0,
    };
  }
}

// ===== SEARCH =====

export async function searchInstallateurs(query: string, filters?: {
  province?: string;
  serviceType?: string;
  city?: string;
  gemeente?: string;
  brand?: string;
}): Promise<Installateur[]> {
  try {
    // Build dynamic where conditions
    const conditions = [];

    if (filters?.province) {
      conditions.push(
        or(
          ilike(installateurs.province, filters.province),
          ilike(installateurs.provinceSlug, filters.province)
        )
      );
    }

    if (filters?.serviceType) {
      conditions.push(
        sql`${filters.serviceType} = ANY(${installateurs.serviceTypes})`
      );
    }

    if (filters?.city) {
      conditions.push(ilike(installateurs.city, filters.city));
    }

    if (filters?.gemeente) {
      conditions.push(ilike(installateurs.gemeente, filters.gemeente));
    }

    if (filters?.brand) {
      conditions.push(
        sql`${filters.brand} = ANY(${installateurs.merken})`
      );
    }

    // Add search query
    if (query && query.trim()) {
      const q = `%${query.trim()}%`;
      conditions.push(
        or(
          ilike(installateurs.name, q),
          ilike(installateurs.city, q),
          ilike(installateurs.gemeente, q),
          ilike(installateurs.province, q),
          ilike(installateurs.address, q),
          ilike(installateurs.postcode, q)
        )
      );
    }

    let dbQuery = db.select().from(installateurs);

    if (conditions.length > 0) {
      dbQuery = dbQuery.where(and(...conditions)) as typeof dbQuery;
    }

    const results = await dbQuery
      .orderBy(desc(installateurs.rating))
      .limit(100);

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error searching installateurs:', error);
    return [];
  }
}

// ===== NEARBY INSTALLATEURS =====

// Haversine distance calculation in kilometers
function haversineDistance(lat1: number, lon1: number, lat2: number, lon2: number): number {
  const R = 6371; // Earth's radius in kilometers
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLon = (lon2 - lon1) * Math.PI / 180;
  const a =
    Math.sin(dLat/2) * Math.sin(dLat/2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLon/2) * Math.sin(dLon/2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1-a));
  return R * c;
}

export async function getNearbyInstallateurs(
  lat: number,
  lon: number,
  radiusKm: number = 25,
  limit: number = 20
): Promise<Array<Installateur & { distance: number }>> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(
        sql`${installateurs.latitude} IS NOT NULL AND ${installateurs.longitude} IS NOT NULL`
      )
      .limit(1000); // Get a reasonable number to filter

    // Calculate distances and filter client-side
    const withDistance = results
      .map(row => ({
        ...mapRowToInstallateur(row),
        distance: haversineDistance(
          lat, lon,
          parseFloat(row.latitude!),
          parseFloat(row.longitude!)
        )
      }))
      .filter(i => i.distance <= radiusKm)
      .sort((a, b) => a.distance - b.distance)
      .slice(0, limit);

    return withDistance;
  } catch (error) {
    console.error('Error loading nearby installateurs:', error);
    return [];
  }
}

// ===== FEATURED/POPULAR =====

export async function getFeaturedInstallateurs(limit: number = 10): Promise<Installateur[]> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(
        and(
          sql`${installateurs.rating} IS NOT NULL`,
          sql`${installateurs.reviewCount} > 0`
        )
      )
      .orderBy(
        desc(sql`${installateurs.rating} * LOG(${installateurs.reviewCount} + 1)`),
        desc(installateurs.rating)
      )
      .limit(limit);

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading featured installateurs:', error);
    return [];
  }
}

export async function getRecentlyUpdated(limit: number = 10): Promise<Installateur[]> {
  try {
    const results = await db.select()
      .from(installateurs)
      .where(sql`${installateurs.updatedAt} IS NOT NULL`)
      .orderBy(desc(installateurs.updatedAt))
      .limit(limit);

    return results.map(mapRowToInstallateur);
  } catch (error) {
    console.error('Error loading recently updated installateurs:', error);
    return [];
  }
}
