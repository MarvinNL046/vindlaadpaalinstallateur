# CLAUDE.md - VindLaadpaalInstallateur.nl Project Guide

Dit bestand biedt richtlijnen aan Claude Code bij het werken met het VindLaadpaalInstallateur.nl project.

## Project Overzicht

VindLaadpaalInstallateur.nl is een uitgebreide directory van laadpaal installateurs in Nederland. De website helpt elektrische rijders bij het vinden van gecertificeerde installateurs voor thuisladers, zakelijke laadpalen en openbare laadinfrastructuur.

### Tech Stack
- **Framework**: Next.js 16 met App Router
- **Taal**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase / Drizzle ORM
- **Deployment**: Vercel

## Belangrijke Features

### 1. Geografische Structuur
- `/provincie/[provincie]` - Provincie-niveau lijsten (bijv. Noord-Holland)
- `/gemeente/[gemeente]` - Gemeente-niveau lijsten
- `/stad/[stad]` - Stad-niveau lijsten
- `/installateur/[slug]` - Individuele installateur detailpagina's

### 2. Installateur Types
- Thuislader Installateurs (particulier)
- Zakelijke Laadpaal Installateurs
- Openbare Laadinfrastructuur Specialisten
- Zonnepanelen + Laadpaal Combinatie
- Slim Laden Experts
- Snellader Installateurs

### 3. Service Specialisaties
- Laadpaal Installatie Thuis
- Zakelijke Laadoplossingen
- Laadpas Diensten
- Slim Laden (Smart Charging)
- Zonnepanelen Integratie
- Load Balancing
- Back-office Systemen
- Onderhoud en Service

### 4. Zoeken & Filteren
- Zoeken op locatie, installateursnaam
- Filteren op type dienst
- Filteren op laadpaal merk (bijv. Alfen, ABB, Wallbox)
- Filteren op certificeringen

## Data Structuur

### Installateur Data Format
```typescript
{
  id: string;
  name: string;
  slug: string;
  address: string;
  city: string;
  province: string;
  province_abbr: string;
  municipality: string;
  postcode: string;
  phone?: string;
  website?: string;
  lat?: number;
  lng?: number;
  rating?: number;
  review_count?: number;
  photo?: string;
  installer_types: string[];
  service_types: string[];
  brands: string[];      // Laadpaal merken
  certifications: string[];
  description?: string;
}
```

## Belangrijke URLs en Routes

### Publieke Pagina's
- `/` - Homepage met zoekfunctie
- `/zoeken` - Zoekresultaten pagina
- `/provincie/[provincie]` - Provincie lijsten
- `/gemeente/[gemeente]` - Gemeente lijsten
- `/stad/[stad]` - Stad lijsten
- `/installateur/[slug]` - Installateur detail pagina
- `/vergelijk` - Vergelijk installateurs
- `/gids` - Laadpaal gidsen
- `/over-ons` - Over ons pagina
- `/contact` - Contact pagina

### API Routes
- `/api/search` - Zoek installateurs
- `/api/installer/[slug]` - Get installateur data
- `/api/installers/nearby` - Get installateurs in de buurt

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Type checking
npm run typecheck

# Discover installateurs (scraping)
npm run discover:test
npm run discover:state
npm run discover:full
```

## Environment Variables

Vereist in `.env.local`:
```
DATABASE_URL=
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
GOOGLE_PLACES_API_KEY=
```

## Content Richtlijnen

### Doelgroep
- Eigenaren van elektrische auto's die een thuislader zoeken
- Bedrijven die laadinfrastructuur willen installeren
- VvE's en woningcorporaties
- Gemeentes en overheden
- Fleet managers

### Toon
- Professioneel en informatief
- Duurzaam en milieubewust
- Praktisch en behulpzaam
- Toekomstgericht

### SEO Focus Keywords (Nederlands)
- laadpaal installateur
- laadpaal installeren
- thuislader installatie
- elektrische auto opladen thuis
- laadpaal installateur [stad]
- laadpaal plaatsen
- zakelijke laadpaal
- laadstation installeren
- EV lader installatie
- slim laden thuis

## Laadpaal Merken (voor filtering)
- Alfen
- ABB
- Wallbox
- EVBox
- Charge Amps
- Easee
- Mennekes
- Webasto
- Zaptec
- Tesla Wall Connector

## Nederlandse Provincies
- Noord-Holland
- Zuid-Holland
- Utrecht
- Noord-Brabant
- Gelderland
- Overijssel
- Limburg
- Flevoland
- Groningen
- Friesland
- Drenthe
- Zeeland

## Notities

- Dit project volgt een directory website architectuur
- Installateur data wordt verzameld via Google Places API
- Focus op de Nederlandse markt
- Kleurthema: Groen (#22C55E) primair, Blauw (#2563EB) accent - eco/elektrisch kleuren
- Alle content in het Nederlands
