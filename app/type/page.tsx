import { Metadata } from 'next';
import Link from 'next/link';
import { Zap, Home, Building2, Globe, Battery, Sun, ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'Laadpaal Types - Zoek op Categorie | VindLaadpaalInstallateur.nl',
  description: 'Zoek laadpaal installateurs op type dienst: thuislader installatie, zakelijke laadpalen, openbare laadinfrastructuur, snelladers en zonnepanelen integratie.',
  openGraph: {
    title: 'Laadpaal Types - Zoek op Categorie',
    description: 'Vind het juiste type laadpaal installateur voor uw wensen.',
  }
};

const categoryIcons: Record<string, any> = {
  'thuislader': Home,
  'zakelijk': Building2,
  'openbaar': Globe,
  'snellader': Battery,
  'zonnepanelen': Sun,
};

const categories = [
  {
    title: 'Particulier',
    types: ['thuislader', 'slim-laden', 'zonnepanelen-integratie', 'laadpaal-met-kabel']
  },
  {
    title: 'Zakelijk',
    types: ['zakelijke-laadpaal', 'werkgevers-laadpaal', 'hotel-horeca', 'retail-laden']
  },
  {
    title: 'Openbaar & Snelladen',
    types: ['openbare-laadpaal', 'snellader', 'laadplein', 'tankstation']
  },
  {
    title: 'Specialisaties',
    types: ['zonnepanelen-laadpaal', 'load-balancing', 'vve-oplossingen', 'wagenpark-laden']
  },
  {
    title: 'Laadpaal Merken',
    types: ['alfen', 'wallbox', 'evbox', 'easee', 'charge-amps', 'mennekes']
  },
  {
    title: 'Diensten',
    types: ['installatie', 'onderhoud', 'reparatie', 'advies', 'subsidie-aanvraag']
  }
];

// Laadpaal type definitions
const laadpaalTypes: Record<string, { name: string; description: string }> = {
  'thuislader': {
    name: 'Thuislader Installatie',
    description: 'Professionele installatie van een laadpaal bij u thuis voor het laden van uw elektrische auto.'
  },
  'slim-laden': {
    name: 'Slim Laden',
    description: 'Laadpalen met slimme functies voor laden tijdens daluren of met zonne-energie.'
  },
  'zonnepanelen-integratie': {
    name: 'Zonnepanelen Integratie',
    description: 'Combineer uw laadpaal met zonnepanelen voor gratis en duurzaam laden.'
  },
  'laadpaal-met-kabel': {
    name: 'Laadpaal met Vaste Kabel',
    description: 'Thuisladers met een vaste laadkabel voor extra gemak.'
  },
  'zakelijke-laadpaal': {
    name: 'Zakelijke Laadpalen',
    description: 'Laadinfrastructuur voor bedrijven met meerdere laadpunten en back-office systemen.'
  },
  'werkgevers-laadpaal': {
    name: 'Werkgevers Laadpaal',
    description: 'Laadoplossingen voor werknemers met registratie en doorbelasting.'
  },
  'hotel-horeca': {
    name: 'Hotel & Horeca Laden',
    description: 'Laadpalen voor gasten van hotels, restaurants en recreatie.'
  },
  'retail-laden': {
    name: 'Retail Laadpunten',
    description: 'Laadinfrastructuur voor winkelcentra en parkeerterreinen.'
  },
  'openbare-laadpaal': {
    name: 'Openbare Laadpalen',
    description: 'Installatie en beheer van openbare laadinfrastructuur in de publieke ruimte.'
  },
  'snellader': {
    name: 'Snellader Installatie',
    description: 'Installatie van DC-snelladers met hoge vermogens voor snel laden.'
  },
  'laadplein': {
    name: 'Laadplein Aanleggen',
    description: 'Complete laadpleinen met meerdere laadpunten voor grootschalig laden.'
  },
  'tankstation': {
    name: 'Tankstation Laadpunten',
    description: 'Laadinfrastructuur voor tankstations en snelweglocaties.'
  },
  'zonnepanelen-laadpaal': {
    name: 'Zonnepanelen + Laadpaal',
    description: 'Gecombineerde installatie van zonnepanelen en laadpaal voor maximaal rendement.'
  },
  'load-balancing': {
    name: 'Load Balancing',
    description: 'Slim verdelen van laadvermogen over meerdere laadpunten.'
  },
  'vve-oplossingen': {
    name: 'VvE Laadoplossingen',
    description: 'Laadinfrastructuur voor appartementencomplexen en VvE\'s.'
  },
  'wagenpark-laden': {
    name: 'Wagenpark Laden',
    description: 'Complete laadoplossingen voor bedrijfswagenparken.'
  },
  'alfen': {
    name: 'Alfen Installateurs',
    description: 'Gecertificeerde installateurs voor Alfen laadpalen.'
  },
  'wallbox': {
    name: 'Wallbox Installateurs',
    description: 'Erkende installateurs voor Wallbox laadstations.'
  },
  'evbox': {
    name: 'EVBox Installateurs',
    description: 'Gespecialiseerde installateurs voor EVBox laadpalen.'
  },
  'easee': {
    name: 'Easee Installateurs',
    description: 'Gecertificeerde installateurs voor Easee laadpalen.'
  },
  'charge-amps': {
    name: 'Charge Amps Installateurs',
    description: 'Installateurs voor Charge Amps laadstations.'
  },
  'mennekes': {
    name: 'Mennekes Installateurs',
    description: 'Gespecialiseerde installateurs voor Mennekes laadpalen.'
  },
  'installatie': {
    name: 'Laadpaal Installatie',
    description: 'Professionele installatie van alle typen laadpalen.'
  },
  'onderhoud': {
    name: 'Onderhoud & Service',
    description: 'Regelmatig onderhoud en service voor uw laadpaal.'
  },
  'reparatie': {
    name: 'Laadpaal Reparatie',
    description: 'Snelle reparatie bij storingen of defecten.'
  },
  'advies': {
    name: 'Laadpaal Advies',
    description: 'Professioneel advies over de beste laadoplossing voor uw situatie.'
  },
  'subsidie-aanvraag': {
    name: 'Subsidie Aanvraag',
    description: 'Hulp bij het aanvragen van subsidies voor uw laadpaal.'
  },
};

export default function LaadpaalTypesPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-800 to-green-900 text-white py-12">
        <div className="container mx-auto px-4">
          <h1 className="text-3xl md:text-4xl font-serif font-bold mb-2">
            Laadpaal Types
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            Vind de juiste laadpaal installateur voor uw wensen. We categoriseren installateurs op type dienst,
            van thuislader installatie tot zakelijke laadpleinen en snelladers.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        {categories.map((category) => (
          <section key={category.title} className="mb-12">
            <h2 className="font-serif text-2xl font-bold text-foreground mb-6">
              {category.title}
            </h2>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {category.types.map((typeSlug) => {
                const type = laadpaalTypes[typeSlug];
                if (!type) return null;
                const Icon = categoryIcons[typeSlug] || Zap;

                return (
                  <Link key={typeSlug} href={`/type/${typeSlug}`}>
                    <Card className="p-5 hover:shadow-hover transition-all duration-300 hover:-translate-y-1 h-full">
                      <div className="flex items-start gap-3">
                        <div className="w-10 h-10 rounded-lg bg-green-100 flex items-center justify-center flex-shrink-0">
                          <Icon className="w-5 h-5 text-green-700" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="font-semibold text-foreground mb-1 truncate">
                            {type.name}
                          </h3>
                          <p className="text-xs text-muted-foreground line-clamp-2">
                            {type.description.substring(0, 80)}...
                          </p>
                        </div>
                        <ChevronRight className="w-4 h-4 text-muted-foreground flex-shrink-0" />
                      </div>
                    </Card>
                  </Link>
                );
              })}
            </div>
          </section>
        ))}

        {/* Full List */}
        <section className="mt-12 bg-secondary/50 rounded-xl p-6">
          <h2 className="font-serif text-xl font-bold text-foreground mb-4">
            Alle Laadpaal Types
          </h2>
          <div className="flex flex-wrap gap-2">
            {Object.entries(laadpaalTypes).map(([slug, type]) => (
              <Link
                key={slug}
                href={`/type/${slug}`}
                className="px-3 py-1 bg-white rounded-full text-sm hover:bg-accent hover:text-white transition-colors"
              >
                {type.name}
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
