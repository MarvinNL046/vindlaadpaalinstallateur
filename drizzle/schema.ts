import {
  pgTable,
  serial,
  varchar,
  text,
  integer,
  timestamp,
  jsonb,
  decimal,
  boolean,
  index,
  uniqueIndex
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// ==========================================
// INSTALLATEURS TABLE - Laadpaal Installateurs
// ==========================================
export const installateurs = pgTable('installateurs', {
  id: serial('id').primaryKey(),

  // Core identifiers
  name: varchar('name', { length: 500 }).notNull(),
  slug: varchar('slug', { length: 500 }).notNull().unique(),

  // Location - Dutch geography
  address: text('address'),
  city: varchar('city', { length: 255 }).notNull(),
  gemeente: varchar('gemeente', { length: 255 }),
  province: varchar('province', { length: 255 }).notNull(),
  provinceSlug: varchar('province_slug', { length: 100 }),
  postcode: varchar('postcode', { length: 10 }),
  country: varchar('country', { length: 100 }).notNull().default('Nederland'),
  latitude: decimal('latitude', { precision: 10, scale: 7 }),
  longitude: decimal('longitude', { precision: 10, scale: 7 }),

  // Classification
  type: varchar('type', { length: 255 }).notNull().default('Laadpaal Installateur'),
  typeSlug: varchar('type_slug', { length: 255 }),

  // Services offered
  serviceTypes: jsonb('service_types').$type<string[]>().default([]),
  // e.g., ['thuislader', 'zakelijke-laadpaal', 'slim-laden', 'load-balancing', 'zonnepanelen-integratie']

  // Brands/merken they work with
  merken: jsonb('merken').$type<string[]>().default([]),
  // e.g., ['Tesla', 'Alfen', 'EVBox', 'Wallbox', 'Easee', 'ABB', 'Eneco', 'Charge Amps']

  // Certifications
  certificeringen: jsonb('certificeringen').$type<string[]>().default([]),
  // e.g., ['NEN 1010', 'EV-Box Certified', 'SCIOS', 'Uneto-VNI', 'Erkend Leerbedrijf']

  // Subsidie expertise
  subsidieAdvies: boolean('subsidie_advies').default(false),
  subsidieTypes: jsonb('subsidie_types').$type<string[]>().default([]),
  // e.g., ['SEEH', 'MIA/Vamil', 'Gemeentelijke subsidie']

  // Werkgebied (service area)
  werkgebied: jsonb('werkgebied').$type<string[]>().default([]),
  // Provinces or regions they serve

  // Contact
  phone: varchar('phone', { length: 50 }),
  email: varchar('email', { length: 255 }),
  website: text('website'),

  // Details
  description: text('description'),
  openingHours: text('opening_hours'),
  specialisaties: jsonb('specialisaties').$type<string[]>().default([]),
  // e.g., ['VVE installaties', 'Bedrijventerreinen', 'Particulier', 'Fleet management']
  yearEstablished: varchar('year_established', { length: 10 }),
  kvkNummer: varchar('kvk_nummer', { length: 20 }),

  // Google data
  googlePlaceId: varchar('google_place_id', { length: 255 }),
  rating: decimal('rating', { precision: 3, scale: 2 }),
  reviewCount: integer('review_count'),
  photoUrl: text('photo_url'),
  photos: jsonb('photos').$type<string[]>().default([]),
  reviews: jsonb('reviews').$type<Array<{
    reviewer_name: string;
    rating: number;
    review_text: string;
    review_date: string;
    reviewer_image?: string;
  }>>().default([]),

  // Generated/enriched content
  seoTitle: text('seo_title'),
  seoDescription: text('seo_description'),
  enrichedContent: text('enriched_content'),
  generatedSummary: text('generated_summary'),
  generatedAbout: text('generated_about'),
  generatedFeatures: jsonb('generated_features').$type<string[]>().default([]),
  generatedServices: jsonb('generated_services').$type<string[]>().default([]),
  generatedVisitorTips: jsonb('generated_visitor_tips').$type<string[]>().default([]),
  generatedDirections: text('generated_directions'),
  generatedLocalContext: text('generated_local_context'),
  enrichedAt: timestamp('enriched_at'),

  // Ownership/claiming
  claimed: boolean('claimed').default(false),
  claimedBy: integer('claimed_by'),
  claimedAt: timestamp('claimed_at'),
  verified: boolean('verified').default(false),
  verifiedAt: timestamp('verified_at'),

  // Metadata
  status: varchar('status', { length: 50 }).default('active'),
  featured: boolean('featured').default(false),
  source: varchar('source', { length: 100 }),
  sourceUrl: text('source_url'),
  discoveredAt: timestamp('discovered_at'),
  updatedAt: timestamp('updated_at').defaultNow(),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  // Performance indexes
  uniqueIndex('installateurs_slug_idx').on(table.slug),
  index('installateurs_city_idx').on(table.city),
  index('installateurs_province_idx').on(table.province),
  index('installateurs_province_slug_idx').on(table.provinceSlug),
  index('installateurs_gemeente_idx').on(table.gemeente),
  index('installateurs_type_idx').on(table.type),
  index('installateurs_type_slug_idx').on(table.typeSlug),
  index('installateurs_postcode_idx').on(table.postcode),
  index('installateurs_rating_idx').on(table.rating),
  index('installateurs_status_idx').on(table.status),
  index('installateurs_featured_idx').on(table.featured),
  index('installateurs_claimed_idx').on(table.claimed),
  // Composite indexes for common queries
  index('installateurs_city_province_idx').on(table.city, table.provinceSlug),
  index('installateurs_gemeente_province_idx').on(table.gemeente, table.provinceSlug),
]);

// ==========================================
// USERS TABLE - Authentication
// ==========================================
export const users = pgTable('users', {
  id: serial('id').primaryKey(),
  email: varchar('email', { length: 255 }).notNull().unique(),
  name: varchar('name', { length: 255 }).notNull(),
  passwordHash: text('password_hash'),
  role: varchar('role', { length: 50 }).notNull().default('user'),
  avatar: text('avatar'),
  phone: varchar('phone', { length: 50 }),
  emailVerified: timestamp('email_verified'),
  verificationCode: varchar('verification_code', { length: 6 }),
  verificationExpires: timestamp('verification_expires'),
  resetToken: varchar('reset_token', { length: 255 }),
  resetTokenExpires: timestamp('reset_token_expires'),
  lastLoginAt: timestamp('last_login_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}, (table) => [
  uniqueIndex('users_email_idx').on(table.email),
  index('users_role_idx').on(table.role),
]);

// ==========================================
// CLAIMS TABLE - Installateur ownership claims
// ==========================================
export const claims = pgTable('claims', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  installateurSlug: varchar('installateur_slug', { length: 500 }).notNull(),
  businessRole: varchar('business_role', { length: 100 }).notNull(),
  claimantName: varchar('claimant_name', { length: 255 }).notNull(),
  claimantPhone: varchar('claimant_phone', { length: 50 }),
  verificationEmail: varchar('verification_email', { length: 255 }).notNull(),
  verificationCode: varchar('verification_code', { length: 6 }),
  verificationExpires: timestamp('verification_expires'),
  emailVerified: boolean('email_verified').default(false),
  notes: text('notes'),
  adminNotes: text('admin_notes'),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  reviewedBy: integer('reviewed_by').references(() => users.id),
  reviewedAt: timestamp('reviewed_at'),
  createdAt: timestamp('created_at').defaultNow(),
  updatedAt: timestamp('updated_at').defaultNow(),
}, (table) => [
  index('claims_user_id_idx').on(table.userId),
  index('claims_installateur_slug_idx').on(table.installateurSlug),
  index('claims_status_idx').on(table.status),
]);

// ==========================================
// REVIEWS TABLE - User reviews
// ==========================================
export const reviews = pgTable('reviews', {
  id: serial('id').primaryKey(),
  installateurSlug: varchar('installateur_slug', { length: 500 }).notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  reviewerName: varchar('reviewer_name', { length: 255 }).notNull(),
  reviewerEmail: varchar('reviewer_email', { length: 255 }),
  rating: integer('rating').notNull(),
  title: varchar('title', { length: 255 }),
  reviewText: text('review_text'),
  serviceType: varchar('service_type', { length: 100 }),
  // e.g., 'thuislader', 'zakelijke installatie'
  projectType: varchar('project_type', { length: 100 }),
  // e.g., 'nieuwbouw', 'bestaande woning', 'VVE'
  wouldRecommend: boolean('would_recommend'),
  helpful: integer('helpful').default(0),
  reported: boolean('reported').default(false),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  moderatedBy: integer('moderated_by').references(() => users.id),
  moderatedAt: timestamp('moderated_at'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('reviews_installateur_slug_idx').on(table.installateurSlug),
  index('reviews_user_id_idx').on(table.userId),
  index('reviews_status_idx').on(table.status),
  index('reviews_rating_idx').on(table.rating),
]);

// ==========================================
// PHOTOS TABLE - User-submitted photos
// ==========================================
export const photos = pgTable('photos', {
  id: serial('id').primaryKey(),
  installateurSlug: varchar('installateur_slug', { length: 500 }).notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  uploaderName: varchar('uploader_name', { length: 255 }).notNull(),
  fileUrl: text('file_url').notNull(),
  thumbnailUrl: text('thumbnail_url'),
  caption: text('caption'),
  altText: varchar('alt_text', { length: 500 }),
  width: integer('width'),
  height: integer('height'),
  fileSize: integer('file_size'),
  mimeType: varchar('mime_type', { length: 100 }),
  status: varchar('status', { length: 50 }).notNull().default('pending'),
  moderatedBy: integer('moderated_by').references(() => users.id),
  moderatedAt: timestamp('moderated_at'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('photos_installateur_slug_idx').on(table.installateurSlug),
  index('photos_user_id_idx').on(table.userId),
  index('photos_status_idx').on(table.status),
]);

// ==========================================
// FEEDBACK TABLE - Site feedback
// ==========================================
export const feedback = pgTable('feedback', {
  id: serial('id').primaryKey(),
  installateurSlug: varchar('installateur_slug', { length: 500 }),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  name: varchar('name', { length: 255 }),
  email: varchar('email', { length: 255 }),
  subject: varchar('subject', { length: 255 }),
  message: text('message').notNull(),
  type: varchar('type', { length: 50 }).default('general'),
  status: varchar('status', { length: 50 }).default('new'),
  respondedBy: integer('responded_by').references(() => users.id),
  respondedAt: timestamp('responded_at'),
  response: text('response'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('feedback_installateur_slug_idx').on(table.installateurSlug),
  index('feedback_type_idx').on(table.type),
  index('feedback_status_idx').on(table.status),
]);

// ==========================================
// SAVED INSTALLATEURS TABLE - User favorites
// ==========================================
export const savedInstallateurs = pgTable('saved_installateurs', {
  id: serial('id').primaryKey(),
  userId: integer('user_id').notNull().references(() => users.id, { onDelete: 'cascade' }),
  installateurSlug: varchar('installateur_slug', { length: 500 }).notNull(),
  notes: text('notes'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('saved_installateurs_user_id_idx').on(table.userId),
  index('saved_installateurs_installateur_slug_idx').on(table.installateurSlug),
  uniqueIndex('saved_installateurs_user_installateur_idx').on(table.userId, table.installateurSlug),
]);

// ==========================================
// OFFERTE REQUESTS TABLE - Quote requests
// ==========================================
export const offerteRequests = pgTable('offerte_requests', {
  id: serial('id').primaryKey(),
  installateurSlug: varchar('installateur_slug', { length: 500 }).notNull(),
  userId: integer('user_id').references(() => users.id, { onDelete: 'set null' }),
  name: varchar('name', { length: 255 }).notNull(),
  email: varchar('email', { length: 255 }).notNull(),
  phone: varchar('phone', { length: 50 }),
  message: text('message'),
  // Project details
  serviceType: varchar('service_type', { length: 100 }),
  // 'thuislader', 'zakelijke-laadpaal', etc.
  preferredMerk: varchar('preferred_merk', { length: 100 }),
  // Tesla, Alfen, EVBox, etc.
  autoMerk: varchar('auto_merk', { length: 100 }),
  // Car brand for compatibility
  woningType: varchar('woning_type', { length: 100 }),
  // 'vrijstaand', 'rijtjes', 'appartement', 'VVE'
  zonnepanelen: boolean('zonnepanelen').default(false),
  subsidieGewenst: boolean('subsidie_gewenst').default(false),
  urgentie: varchar('urgentie', { length: 50 }),
  // 'zo snel mogelijk', '1-3 maanden', 'orienterend'
  status: varchar('status', { length: 50 }).default('new'),
  forwardedToInstallateur: boolean('forwarded_to_installateur').default(false),
  forwardedAt: timestamp('forwarded_at'),
  createdAt: timestamp('created_at').defaultNow(),
}, (table) => [
  index('offerte_requests_installateur_slug_idx').on(table.installateurSlug),
  index('offerte_requests_status_idx').on(table.status),
]);

// ==========================================
// RELATIONS
// ==========================================

export const usersRelations = relations(users, ({ many }) => ({
  claims: many(claims),
  reviews: many(reviews),
  photos: many(photos),
  savedInstallateurs: many(savedInstallateurs),
  offerteRequests: many(offerteRequests),
}));

export const claimsRelations = relations(claims, ({ one }) => ({
  user: one(users, {
    fields: [claims.userId],
    references: [users.id],
  }),
  reviewer: one(users, {
    fields: [claims.reviewedBy],
    references: [users.id],
  }),
}));

export const reviewsRelations = relations(reviews, ({ one }) => ({
  user: one(users, {
    fields: [reviews.userId],
    references: [users.id],
  }),
  moderator: one(users, {
    fields: [reviews.moderatedBy],
    references: [users.id],
  }),
}));

export const photosRelations = relations(photos, ({ one }) => ({
  user: one(users, {
    fields: [photos.userId],
    references: [users.id],
  }),
  moderator: one(users, {
    fields: [photos.moderatedBy],
    references: [users.id],
  }),
}));

export const savedInstallateursRelations = relations(savedInstallateurs, ({ one }) => ({
  user: one(users, {
    fields: [savedInstallateurs.userId],
    references: [users.id],
  }),
}));

export const offerteRequestsRelations = relations(offerteRequests, ({ one }) => ({
  user: one(users, {
    fields: [offerteRequests.userId],
    references: [users.id],
  }),
}));

// ==========================================
// TYPE EXPORTS
// ==========================================

export type Installateur = typeof installateurs.$inferSelect;
export type NewInstallateur = typeof installateurs.$inferInsert;

export type User = typeof users.$inferSelect;
export type NewUser = typeof users.$inferInsert;

export type Claim = typeof claims.$inferSelect;
export type NewClaim = typeof claims.$inferInsert;

export type Review = typeof reviews.$inferSelect;
export type NewReview = typeof reviews.$inferInsert;

export type Photo = typeof photos.$inferSelect;
export type NewPhoto = typeof photos.$inferInsert;

export type Feedback = typeof feedback.$inferSelect;
export type NewFeedback = typeof feedback.$inferInsert;

export type SavedInstallateur = typeof savedInstallateurs.$inferSelect;
export type NewSavedInstallateur = typeof savedInstallateurs.$inferInsert;

export type OfferteRequest = typeof offerteRequests.$inferSelect;
export type NewOfferteRequest = typeof offerteRequests.$inferInsert;
