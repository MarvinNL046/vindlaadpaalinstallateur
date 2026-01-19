# Dynamische Sitemap Generatie

## Overzicht

Net zoals WordPress automatisch nieuwe pagina's toevoegt aan de sitemap, doet onze Next.js app dit ook!

## Hoe Het Werkt

### Automatische Sitemap Generatie
- Wanneer je een nieuwe installateur toevoegt aan de data bestanden
- De sitemap wordt automatisch bijgewerkt bij de volgende build
- Geen handmatige stappen nodig!

### Locatie
- Sitemap: `https://www.vindlaadpaalinstallateur.nl/sitemap.xml`
- Gegenereerd door: `/app/sitemap.ts`

### Wat Wordt Automatisch Toegevoegd?

1. **Statische pagina's** (homepage, zoeken, vergelijken, etc.)
2. **Provincie pagina's** - Automatisch voor elke provincie met data
3. **Gemeente pagina's** - Automatisch voor elke gemeente
4. **Installateur pagina's** - Automatisch voor elke installateur
5. **Stad pagina's** - Automatisch voor elke unieke stad
6. **Type pagina's** - Voor elk service type

### Development vs Production

**Development (npm run dev)**
- Sitemap wordt dynamisch gegenereerd bij elk verzoek
- Perfect voor testen

**Production (npm run build && npm run start)**
- Sitemap wordt gegenereerd tijdens build
- Gecached voor snelle response times
- Vernieuwd bij elke nieuwe deployment

### Oude Statische Sitemaps Verwijderen

Voer dit commando uit om oude statische sitemaps op te ruimen:

```bash
npx tsx scripts/cleanup-old-sitemaps.ts
```

### Voordelen

1. **Zero Maintenance** - Voeg data toe, sitemap update automatisch
2. **Altijd Nauwkeurig** - Geen vergeten pagina's meer
3. **SEO Geoptimaliseerd** - Correcte prioriteiten en change frequencies
4. **Type Safe** - TypeScript zorgt voor correcte URLs

### Google Search Console

Na deployment:
1. Ga naar Google Search Console
2. Verwijder oude sitemap referenties
3. Voeg nieuwe toe: `https://www.vindlaadpaalinstallateur.nl/sitemap.xml`
4. Google zal automatisch alle nieuwe pagina's ontdekken!

### Troubleshooting

**Sitemap niet zichtbaar in development?**
- Check: http://localhost:3000/sitemap.xml
- Zorg dat je `npm run dev` draait

**Nieuwe pagina's niet in sitemap?**
- Check of de data in de data bestanden staat
- Check of `/public/data/installers.json` is gesynchroniseerd
- Voer `npm run build` uit om te testen

## Technische Details

De sitemap wordt gegenereerd door Next.js's ingebouwde sitemap functionaliteit:
- Gebruikt de `sitemap()` functie in `app/sitemap.ts`
- Leest data uit onze JSON bestanden
- Genereert automatisch alle URLs
- Voegt metadata toe (lastModified, priority, changeFrequency)
