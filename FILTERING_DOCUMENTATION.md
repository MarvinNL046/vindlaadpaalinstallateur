# Installateur Data Filtering Documentatie

## Overzicht
Dit document beschrijft het filterproces dat is geimplementeerd om alleen echte laadpaal installateurs in de dataset op te nemen, door niet-relevante bedrijven uit de ruwe data te verwijderen.

## Probleem
De originele dataset kan bedrijven bevatten die geen echte laadpaal installateurs zijn. Deze kunnen omvatten:
- Elektriciens die geen laadpalen installeren
- Algemene aannemers zonder laadpaal specialisatie
- Niet-installatie bedrijven met laadpaal-gerelateerde woorden in hun naam
- Autodealers of autobedrijven

## Oplossing
We hebben een uitgebreid filtersysteem geimplementeerd dat:
1. Niet-installateur bedrijven identificeert en uitsluit op basis van keywords
2. Niet-relevante diensten identificeert en uitsluit
3. Echte laadpaal installateurs en elektrotechnische bedrijven behoudt
4. Positieve identificatie gebruikt voor installateur-gerelateerde keywords

## Filterregels

### Uitgesloten Keywords (Niet-Installateur Bedrijven)
- **Niet-installatie bedrijven**: autodealer, autogarage, tankstation
- **Algemene winkels**: bouwmarkt, doe-het-zelf, webshop
- **Niet-gerelateerde diensten**: verhuur, lease

### Opgenomen Installateur Keywords
- laadpaal installateur, EV installateur, elektrisch rijden specialist
- Specifieke types: thuislader, zakelijke laadpaal, snellader
- Diensten: laadpaal installatie, oplaadpunt installatie, smart charging
- Algemeen: elektrotechnisch bedrijf, installatiebedrijf

### Speciale Behandeling
- **Gecertificeerde Installateurs**: Standaard opgenomen
- **Gemengde namen**: Als een bedrijfsnaam zowel uitgesloten als installateur keywords bevat, krijgen installateur keywords voorrang

## Resultaten
- **Originele entries**: Variabel
- **Gefilterde entries**: Alleen echte installateurs
- **Verwijderde entries**: Niet-installateur bedrijven

## Implementatie

### Standalone Filter Script
`scripts/filter-non-installers.ts` - Kan onafhankelijk worden uitgevoerd om data te filteren

### Geintegreerde Filtering
De filterlogica is geintegreerd in:
- `scripts/process-installer-data.ts`
- `scripts/process-all-data.ts`

### Gebruik
```bash
# Voer standalone filter uit
npx tsx scripts/filter-non-installers.ts

# Verwerk installateur data met filtering
npx tsx scripts/process-all-data.ts installer data/installers.csv

# Build productie data
npm run build-data
```

## Aangemaakte Bestanden
- `data/installers-filtered.csv` - Gefilterde installateur data
- `data/removed-entries.json` - Lijst van verwijderde entries voor review
- `data/installers-processed.json` - Verwerkte installateur data
- `public/data/installers.json` - Productie-klare data

## Onderhoud
Om filterregels bij te werken:
1. Bewerk de keyword arrays in de filter functies
2. Test met sample data om te zorgen dat geen geldige installateurs worden uitgesloten
3. Review `removed-entries.json` om filternauwkeurigheid te verifieren
4. Update deze documentatie met eventuele wijzigingen
