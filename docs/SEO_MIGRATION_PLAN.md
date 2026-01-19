# SEO Migratie Plan - Veilige Transitie

## Doel
Voorkomen van Google penalties en 404 errors tijdens de transitie naar het nieuwe systeem.

## Stap-voor-Stap Plan voor Veilige Migratie

### Fase 1: Voorbereiding (Voor Go-Live)

1. **Inventaris van oude URLs**
   - Check Google Search Console voor geindexeerde pagina's
   - Download lijst van alle huidige URLs
   - Identificeer URL structuur wijzigingen

2. **Implementeer 301 Redirects**
   - Oude sitemap URLs -> nieuwe sitemap.xml
   - Oude pagina structuren -> nieuwe structuren
   - Via `next.config.js` redirects

3. **Test Redirects Lokaal**
   ```bash
   npm run build
   npm run start
   # Test oude URLs om te zien of ze correct doorverwijzen
   ```

### Fase 2: Deployment Strategie

1. **Houd Oude Content Tijdelijk**
   - Houd oude sitemap bestanden online voor 30 dagen
   - Dit geeft Google tijd om de redirects te verwerken
   - Voorkomt directe 404s

2. **Dubbele Sitemap Strategie**
   ```xml
   <!-- In robots.txt tijdelijk beide sitemaps -->
   Sitemap: https://www.vindlaadpaalinstallateur.nl/sitemap.xml
   Sitemap: https://www.vindlaadpaalinstallateur.nl/sitemap-old.xml
   ```

3. **Monitoring Setup**
   - Google Search Console alerts voor 404s
   - Analytics tracking voor redirect performance

### Fase 3: Go-Live Checklist

- [ ] Alle redirects getest
- [ ] Oude sitemaps nog toegankelijk (met redirect)
- [ ] robots.txt bijgewerkt
- [ ] Google Search Console gemonitord
- [ ] 404 error pagina vriendelijk en behulpzaam

### Fase 4: Post-Launch (Eerste 30 dagen)

1. **Dagelijkse Monitoring**
   - Check Search Console voor crawl errors
   - Monitor 404 rapporten
   - Check rankings voor belangrijke keywords

2. **Snelle Fixes**
   - Voeg ontbrekende redirects toe zodra 404s worden gevonden
   - Update `middleware.ts` voor edge cases

3. **Communicatie met Google**
   - Dien nieuwe sitemap in bij Search Console
   - Vraag her-crawl aan voor belangrijke pagina's
   - Monitor indexering status

### Fase 5: Cleanup (Na 30-60 dagen)

1. **Verwijder Oude Assets**
   ```bash
   npx tsx scripts/cleanup-old-sitemaps.ts
   ```

2. **Verwijder Tijdelijke Redirects**
   - Houd alleen permanente redirects
   - Cleanup tijdelijke dubbele-sitemap setup

## Veiligheidsmaatregelen

### 1. 404 Fallback Pagina
```typescript
// app/not-found.tsx
export default function NotFound() {
  return (
    <div>
      <h1>Pagina niet gevonden</h1>
      <p>De pagina is mogelijk verplaatst. Probeer:</p>
      <ul>
        <li><a href="/zoeken">Zoek een installateur</a></li>
        <li><a href="/">Ga naar homepage</a></li>
      </ul>
    </div>
  )
}
```

### 2. Custom Error Tracking
```typescript
// Track 404s voor analyse
if (typeof window !== 'undefined') {
  // Log naar analytics
  gtag('event', '404_error', {
    page_path: window.location.pathname,
    referrer: document.referrer
  });
}
```

### 3. Geleidelijke Uitrol
- Start met 10% verkeer naar nieuwe versie
- Monitor op problemen
- Verhoog geleidelijk naar 100%

## Success Metrics

- **404 Error Rate**: < 1% na eerste week
- **Crawl Errors**: Dalende trend in Search Console
- **Rankings**: Geen significante dalingen
- **Indexering**: Nieuwe pagina's geindexeerd binnen 7 dagen

## Noodplan

Als rankings dramatisch dalen:
1. Houd rollback naar oude versie mogelijk
2. Direct herstel van alle oude URLs
3. Communiceer met Google via Search Console
4. Tijdelijke dual-site strategie

## Tips

1. **Timing**: Deploy tijdens laag verkeer (weekend avond)
2. **Communicatie**: Informeer Google via Search Console
3. **Geduld**: SEO herstel kan 2-4 weken duren
4. **Documentatie**: Log alle wijzigingen en problemen

## Tools voor Monitoring

- Google Search Console (Crawl errors, Index status)
- Google Analytics (Verkeerspatronen, 404s)
- Screaming Frog (Crawl test voor broken links)
- Ahrefs/SEMrush (Ranking monitoring)
