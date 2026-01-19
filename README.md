# VindLaadpaalInstallateur.nl

Een uitgebreide online directory voor het vinden van laadpaal installateurs in Nederland.

## Project Status

Actieve ontwikkeling - bouwen aan een uitgebreide database van laadpaal installateurs.

## Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Taal**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Database**: Supabase / Drizzle ORM

## Development

```bash
# Installeer dependencies
npm install

# Start development server
npm run dev

# Build voor productie
npm run build

# Start productie server
npm run start
```

## Project Structuur

```
├── app/                    # Next.js app directory
│   ├── installateur/      # Installateur detail pagina's
│   ├── stad/              # Stad overzichtspagina's
│   ├── gemeente/          # Gemeente overzichtspagina's
│   ├── provincie/         # Provincie overzichtspagina's
│   └── zoeken/            # Zoekfunctionaliteit
├── components/            # React componenten
├── data/                  # Database bestanden
├── public/               # Statische assets
└── docs/                 # Documentatie
```

## Features

- Zoeken op locatie (stad, gemeente, provincie)
- Filteren op laadpaal type (thuislader, zakelijk, openbaar)
- Filteren op merk (Alfen, ABB, Wallbox, EVBox, etc.)
- Installateur beoordelingen en reviews
- Certificeringen en keurmerken

## Contact

- Website: https://vindlaadpaalinstallateur.nl
- Email: info@vindlaadpaalinstallateur.nl
