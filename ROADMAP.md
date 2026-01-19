# VindLaadpaalInstallateur.nl - Project Roadmap

**Repository:** https://github.com/MarvinNL046/vindlaadpaalinstallateur
**Laatst bijgewerkt:** 19-01-2026
**Status:** Development Fase

---

## Project Overzicht

VindLaadpaalInstallateur.nl is een uitgebreide directory van laadpaal installateurs in Nederland. Het platform helpt particulieren en bedrijven bij het vinden van geschikte installateurs op basis van locatie, diensten en certificeringen.

---

## Voltooide Taken

### Fase 1: Site Transformatie (Voltooid)
- [x] Codebase aanpassen voor laadpaal installateur context
- [x] Alle componenten, pagina's en APIs updaten
- [x] Nederlandse content toevoegen
- [x] Nieuwe drizzle schema maken met installateurs tabel
- [x] Indexes en relaties toevoegen aan database schema

### Fase 2: Design Update (Voltooid)
- [x] Kleurthema updaten: Groen (#22C55E) / Blauw (#2563EB)
- [x] Logo component updaten met Laadpaal icon
- [x] Homepage hero sectie herontwerpen
- [x] Alle componenten updaten met nieuwe kleurschema
- [x] Header en Footer updaten voor laadpaal branding

### Fase 3: Content & Pagina's (Voltooid)
- [x] Maak /gids/subsidies pagina
- [x] Maak /gids/installatie-proces pagina
- [x] Update affiliate en premium content componenten
- [x] Fix broken interne links
- [x] Fix ontbrekende afbeelding referenties

### Fase 4: Developer Tooling (Voltooid)
- [x] Maak health check script (scripts/check-health.ts)
- [x] Installeer ontbrekende dependencies

---

## Openstaande Taken

### Fase 5: Data & Scraping (Hoge Prioriteit)
- [ ] **Neon PostgreSQL database opzetten**
  - Nieuwe database instance maken
  - DATABASE_URL configureren in .env.local
  - Drizzle migrations uitvoeren

- [ ] **Installateur Data Verzameling**
  - [ ] Discovery script updaten voor Google Places API
  - [ ] Laadpaal installateurs scrapen
  - [ ] Data verrijken met GPT (beschrijvingen, features)
  - [ ] Foto's toevoegen van installaties

- [ ] **Data Kwaliteit**
  - [ ] Contactinformatie verifieren
  - [ ] Certificeringen data toevoegen
  - [ ] Service type classificaties toevoegen
  - [ ] SEO content genereren voor elke installateur

### Fase 6: Core Features (Medium Prioriteit)
- [ ] **Zoeken & Filteren**
  - [ ] Locatie-gebaseerd zoeken implementeren (stad, provincie, postcode)
  - [ ] Service type filters toevoegen
  - [ ] Laadpaal merk filters toevoegen
  - [ ] Certificering filters toevoegen
  - [ ] Sortering implementeren (rating, afstand, naam)

- [ ] **Gebruikers Features**
  - [ ] Gebruikers authenticatie inschakelen
  - [ ] Gebruikers reviews en ratings
  - [ ] Installateurs opslaan/bookmarken
  - [ ] Offerte aanvraag formulier
  - [ ] Vergelijk functionaliteit

- [ ] **Installateur Features**
  - [ ] Claim listing functionaliteit
  - [ ] Dashboard voor installateurs
  - [ ] Bedrijfsinformatie bewerken
  - [ ] Reageren op reviews
  - [ ] Foto's uploaden

### Fase 7: SEO & Marketing (Medium Prioriteit)
- [ ] **SEO Optimalisatie**
  - [ ] Provincie landing pages genereren met content
  - [ ] Gemeente landing pages genereren
  - [ ] Service type landing pages genereren
  - [ ] Blog content maken over laadpalen/EV
  - [ ] Sitemap indienen bij Google Search Console
  - [ ] Google Analytics opzetten

- [ ] **Schema Markup**
  - [ ] LocalBusiness schema toevoegen aan installateur pagina's
  - [ ] BreadcrumbList schema toevoegen
  - [ ] FAQPage schema toevoegen aan gids pagina's
  - [ ] Review schema toevoegen

### Fase 8: Monetisatie (Lage Prioriteit)
- [ ] **Advertising**
  - [ ] Google AdSense opzetten
  - [ ] Ad placements configureren
  - [ ] Affiliate partnerships toevoegen

- [ ] **Premium Features**
  - [ ] Uitgelichte listing upgrades
  - [ ] Lead generation voor installateurs
  - [ ] Premium installateur profielen

### Fase 9: Deployment & Launch (Hoge Prioriteit)
- [ ] **Vercel Deployment**
  - [ ] GitHub repository koppelen
  - [ ] Environment variables configureren
  - [ ] Custom domain opzetten (vindlaadpaalinstallateur.nl)
  - [ ] SSL certificaat configureren
  - [ ] Preview deployments opzetten

- [ ] **Post-Launch**
  - [ ] Error tracking monitoren (Sentry)
  - [ ] Uptime monitoring opzetten
  - [ ] Performance optimalisatie
  - [ ] Mobile responsiveness testen

---

## Technische Schuld

- [ ] Fix npm audit vulnerabilities
- [ ] Node.js updaten naar v22+
- [ ] Unused exports reviewen en verwijderen
- [ ] TypeScript strict mode toevoegen
- [ ] Unit tests toevoegen voor kritieke functies
- [ ] E2E tests toevoegen met Playwright

---

## Environment Setup

### Vereiste Environment Variables
```env
# Database
DATABASE_URL=postgresql://...

# Authenticatie
JWT_SECRET=your-secret-key

# Google APIs
GOOGLE_PLACES_API_KEY=your-api-key

# OpenAI (voor content verrijking)
OPENAI_API_KEY=your-api-key

# Email (Resend)
RESEND_API_KEY=your-api-key

# Analytics
NEXT_PUBLIC_GA_ID=G-XXXXXXXXXX
```

---

## Quick Start

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Voer health check uit
npx tsx scripts/check-health.ts

# TypeScript check
npx tsc --noEmit

# Build voor productie
npm run build
```

---

## Contact

Voor vragen of bijdragen, open een issue op GitHub:
https://github.com/MarvinNL046/vindlaadpaalinstallateur/issues

---

*Deze roadmap is een levend document en wordt bijgewerkt naarmate het project vordert.*
