// Gids data types en laad functies voor SEO pillar pagina's

// ===== INTERFACES =====

export interface FAQ {
  question: string;
  answer: string;
}

export interface GuideSection {
  id: string;
  title: string;
  content: string;
  subsections?: {
    title: string;
    content: string;
  }[];
}

export interface PillarGuide {
  slug: string;
  title: string;
  seoTitle: string;
  seoDescription: string;
  introduction: string;
  sections: GuideSection[];
  faqs: FAQ[];
  relatedGuides: string[];
  lastUpdated?: string;
  author?: string;
}

export interface GuideCard {
  slug: string;
  title: string;
  description: string;
  icon: string;
  color: string;
}

// ===== GIDS CARDS DATA =====

export const pillarGuideCards: GuideCard[] = [
  {
    slug: 'thuislader-kiezen',
    title: 'Thuislader Kiezen',
    description: 'Alles wat u moet weten over het kiezen van de juiste thuislader voor uw elektrische auto.',
    icon: 'home',
    color: 'green',
  },
  {
    slug: 'installateur-kiezen',
    title: 'Installateur Kiezen',
    description: 'Tips voor het selecteren van een betrouwbare en gecertificeerde laadpaal installateur.',
    icon: 'building',
    color: 'blue',
  },
  {
    slug: 'kosten-subsidies',
    title: 'Kosten & Subsidies',
    description: 'Overzicht van laadpaal kosten en beschikbare subsidies zoals SEEH en MIA/Vamil.',
    icon: 'wallet',
    color: 'gold',
  },
  {
    slug: 'slim-laden',
    title: 'Slim Laden Gids',
    description: 'Leer alles over slim laden, dynamische tarieven en integratie met zonnepanelen.',
    icon: 'zap',
    color: 'forest',
  },
  {
    slug: 'zakelijke-laadpaal',
    title: 'Zakelijke Laadpaal',
    description: 'Gids voor bedrijven over laadoplossingen, load balancing en back-office systemen.',
    icon: 'briefcase',
    color: 'slate',
  },
];

// ===== PILLAR GIDS CONTENT =====

export const pillarGuides: Record<string, PillarGuide> = {
  'thuislader-kiezen': {
    slug: 'thuislader-kiezen',
    title: 'De Juiste Thuislader Kiezen',
    seoTitle: 'Thuislader Kiezen: Complete Gids | VindLaadpaalInstallateur.nl',
    seoDescription: 'Alles over het kiezen van de juiste thuislader. Vergelijk merken, vermogens en functies. Van Alfen tot Wallbox - vind de perfecte laadpaal voor thuis.',
    introduction: 'Een thuislader is de handigste manier om uw elektrische auto op te laden. Maar met zoveel merken en opties kan het lastig zijn om de juiste keuze te maken. Deze gids helpt u bij het kiezen van de perfecte thuislader.',
    sections: [],
    faqs: [
      {
        question: 'Welk vermogen thuislader heb ik nodig?',
        answer: 'Voor de meeste thuissituaties is een 11 kW laadpaal ideaal. Dit laadt een gemiddelde EV in 4-6 uur volledig op. Een 7,4 kW lader is goedkoper en vaak voldoende als u voornamelijk \'s nachts laadt.',
      },
      {
        question: 'Wat zijn de beste laadpaal merken?',
        answer: 'Populaire merken in Nederland zijn Alfen (Nederlands), EVBox (Nederlands), Wallbox, Easee en Tesla Wall Connector. Elk merk heeft zijn sterke punten qua prijs, functies en design.',
      },
      {
        question: 'Heb ik een slimme laadpaal nodig?',
        answer: 'Een slimme laadpaal biedt voordelen zoals app-bediening, laadschema\'s instellen, dynamisch laden en inzicht in verbruik. Voor maximaal voordeel van dynamische energietarieven is slim laden aan te raden.',
      },
    ],
    relatedGuides: ['kosten-subsidies', 'slim-laden', 'installateur-kiezen'],
    lastUpdated: '2025-01-19',
    author: 'VindLaadpaalInstallateur.nl Redactie',
  },
  'installateur-kiezen': {
    slug: 'installateur-kiezen',
    title: 'De Juiste Laadpaal Installateur Kiezen',
    seoTitle: 'Laadpaal Installateur Kiezen: Tips & Advies | VindLaadpaalInstallateur.nl',
    seoDescription: 'Waar moet u op letten bij het kiezen van een laadpaal installateur? Certificeringen, ervaring, garantie en meer. Vind de beste installateur bij u in de buurt.',
    introduction: 'Een goede installatie is cruciaal voor de veiligheid en levensduur van uw laadpaal. Maar hoe kiest u de juiste installateur? Deze gids helpt u bij het maken van de beste keuze.',
    sections: [],
    faqs: [
      {
        question: 'Welke certificeringen moet een installateur hebben?',
        answer: 'Let op certificeringen zoals NEN 1010 (elektrische installaties), Uneto-VNI lidmaatschap, en merk-specifieke certificeringen van fabrikanten zoals Alfen, EVBox of Wallbox.',
      },
      {
        question: 'Wat kost laadpaal installatie?',
        answer: 'Installatie kost gemiddeld €300-€600, afhankelijk van de complexiteit. Extra kosten kunnen ontstaan bij groepenkast uitbreiding, lange kabellengte of graafwerkzaamheden.',
      },
      {
        question: 'Hoeveel offertes moet ik aanvragen?',
        answer: 'Vraag minimaal 3 offertes aan om prijzen en service te vergelijken. Let niet alleen op prijs maar ook op garantievoorwaarden, reactietijd en reviews van eerdere klanten.',
      },
    ],
    relatedGuides: ['thuislader-kiezen', 'kosten-subsidies'],
    lastUpdated: '2025-01-19',
    author: 'VindLaadpaalInstallateur.nl Redactie',
  },
  'kosten-subsidies': {
    slug: 'kosten-subsidies',
    title: 'Laadpaal Kosten & Subsidies',
    seoTitle: 'Laadpaal Kosten & Subsidies 2025: Complete Gids | VindLaadpaalInstallateur.nl',
    seoDescription: 'Wat kost een laadpaal? Ontdek alle kosten en beschikbare subsidies zoals SEEH, MIA/Vamil en gemeentelijke regelingen. Bespaar tot €1.000 op uw laadpaal.',
    introduction: 'De kosten van een laadpaal variëren sterk afhankelijk van merk, functies en installatie. Gelukkig zijn er diverse subsidies beschikbaar die de investering aantrekkelijker maken.',
    sections: [],
    faqs: [
      {
        question: 'Wat kost een thuislader gemiddeld?',
        answer: 'Een thuislader kost tussen €800 en €2.500 exclusief installatie. Basis modellen beginnen rond €800, terwijl premium modellen met alle functies tot €2.500 kunnen kosten.',
      },
      {
        question: 'Welke subsidies zijn er voor laadpalen?',
        answer: 'De SEEH-subsidie biedt tot €1.000 voor thuisladers. Bedrijven kunnen gebruik maken van MIA/Vamil voor fiscaal voordeel. Daarnaast hebben sommige gemeentes eigen subsidieregelingen.',
      },
      {
        question: 'Zijn laadkosten thuis goedkoper dan publiek laden?',
        answer: 'Ja, thuis laden is meestal 50-70% goedkoper dan publiek laden. Gemiddeld betaalt u thuis €0,25-0,35 per kWh versus €0,50-0,80 bij publieke laadpalen.',
      },
    ],
    relatedGuides: ['thuislader-kiezen', 'slim-laden'],
    lastUpdated: '2025-01-19',
    author: 'VindLaadpaalInstallateur.nl Redactie',
  },
  'slim-laden': {
    slug: 'slim-laden',
    title: 'Slim Laden Uitgelegd',
    seoTitle: 'Slim Laden: Bespaar op Laadkosten | VindLaadpaalInstallateur.nl',
    seoDescription: 'Wat is slim laden en hoe bespaart u ermee? Leer over dynamische tarieven, zonnepanelen integratie en load balancing voor optimaal laadgemak.',
    introduction: 'Slim laden optimaliseert automatisch wanneer uw auto laadt op basis van tarieven, zonne-energie of netbelasting. Hiermee kunt u flink besparen op laadkosten en duurzamer rijden.',
    sections: [],
    faqs: [
      {
        question: 'Hoeveel bespaar ik met slim laden?',
        answer: 'Met slim laden en dynamische energiecontracten kunt u 20-40% besparen op laadkosten door te laden wanneer stroom het goedkoopst is, vaak \'s nachts of bij veel wind/zon.',
      },
      {
        question: 'Kan elke laadpaal slim laden?',
        answer: 'Niet elke laadpaal ondersteunt slim laden. Kies een laadpaal met wifi/4G connectiviteit en een app die dynamisch laden ondersteunt. Merken als Easee, Alfen en Wallbox bieden dit standaard.',
      },
      {
        question: 'Hoe werkt laden met zonnepanelen?',
        answer: 'Met zonnepaneel-integratie meet een energiemeter hoeveel stroom uw panelen produceren. De laadpaal past automatisch het laadvermogen aan om zoveel mogelijk eigen opgewekte stroom te gebruiken.',
      },
    ],
    relatedGuides: ['thuislader-kiezen', 'kosten-subsidies'],
    lastUpdated: '2025-01-19',
    author: 'VindLaadpaalInstallateur.nl Redactie',
  },
  'zakelijke-laadpaal': {
    slug: 'zakelijke-laadpaal',
    title: 'Zakelijke Laadoplossingen',
    seoTitle: 'Zakelijke Laadpaal: Gids voor Bedrijven | VindLaadpaalInstallateur.nl',
    seoDescription: 'Alles over zakelijke laadoplossingen. Van medewerker-laden tot publieke laadpunten. Load balancing, back-office en subsidies voor bedrijven.',
    introduction: 'Voor bedrijven zijn er andere overwegingen dan voor particulieren. Deze gids behandelt alles van load balancing en back-office systemen tot subsidies en fiscale voordelen.',
    sections: [],
    faqs: [
      {
        question: 'Hoeveel laadpunten heeft mijn bedrijf nodig?',
        answer: 'Als vuistregel: plan voor 20-30% van uw elektrische wagenpark tegelijk te kunnen laden. Met slim load balancing kunt u met minder laadpunten meer auto\'s bedienen.',
      },
      {
        question: 'Wat is load balancing?',
        answer: 'Load balancing verdeelt automatisch de beschikbare stroomcapaciteit over actieve laadpunten. Dit voorkomt overbelasting van uw aansluiting en maakt meer laadpunten mogelijk zonder netwerk verzwaring.',
      },
      {
        question: 'Welke subsidies zijn er voor bedrijven?',
        answer: 'Bedrijven kunnen gebruik maken van MIA/Vamil voor fiscaal voordeel, de Subsidieregeling Emissieloze Bedrijfsauto\'s (SEBA) en soms gemeentelijke regelingen voor publiek toegankelijke laadpunten.',
      },
    ],
    relatedGuides: ['installateur-kiezen', 'slim-laden'],
    lastUpdated: '2025-01-19',
    author: 'VindLaadpaalInstallateur.nl Redactie',
  },
};

// ===== DATA LAAD FUNCTIES =====

/**
 * Krijg alle pillar gids cards voor de index pagina
 */
export function getAllGuideCards(): GuideCard[] {
  return pillarGuideCards;
}

/**
 * Krijg een specifieke pillar gids op slug
 */
export function getGuideBySlug(slug: string): PillarGuide | null {
  return pillarGuides[slug] || null;
}

/**
 * Krijg alle pillar gids slugs voor statische generatie
 */
export function getAllGuideSlugs(): string[] {
  return Object.keys(pillarGuides);
}

/**
 * Krijg gerelateerde gidsen voor een specifieke gids
 */
export function getRelatedGuides(slug: string): GuideCard[] {
  const guide = pillarGuides[slug];
  if (!guide) return [];

  return guide.relatedGuides
    .map(relatedSlug => pillarGuideCards.find(card => card.slug === relatedSlug))
    .filter((card): card is GuideCard => card !== undefined);
}

/**
 * Krijg gids card op slug
 */
export function getGuideCardBySlug(slug: string): GuideCard | null {
  return pillarGuideCards.find(card => card.slug === slug) || null;
}

// ===== AUTEUR INFO =====

export const GUIDE_AUTHOR = {
  name: 'VindLaadpaalInstallateur.nl Redactie',
  description: 'Ons redactieteam bestaat uit EV-specialisten, elektrotechnische experts en schrijvers die zich inzetten voor accurate en behulpzame informatie over laadpalen en installateurs in Nederland.',
  expertise: ['Laadpaal Installatie', 'EV Laden', 'Slim Laden', 'Subsidies'],
};
