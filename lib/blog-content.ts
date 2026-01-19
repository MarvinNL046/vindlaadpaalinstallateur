import { getServiceTypeLink, getProvinceLink } from './blog-data';

interface BlogContent {
  [key: string]: string;
}

export const blogContent: BlogContent = {
  'laadpaal-thuis-installeren-complete-gids': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Een laadpaal thuis installeren is de ideale oplossing voor elektrisch rijders. Je kunt je auto 's nachts opladen tegen lage tarieven en hoeft nooit meer naar een openbaar laadpunt. In deze complete gids leggen we stap voor stap uit wat er komt kijken bij het installeren van een thuislader.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Stap 1: Kies het Juiste Vermogen</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            De meeste thuisladers zijn beschikbaar in twee vermogens:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span><strong>1-fase 16A (3.7 kW)</strong> - Geschikt voor kleinere accu's, laadt ongeveer 20 km per uur</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span><strong>3-fase 16A (11 kW)</strong> - Ideaal voor grotere accu's, laadt ongeveer 60 km per uur</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span><strong>3-fase 32A (22 kW)</strong> - Maximale snelheid voor thuis, vereist zwaardere aansluiting</span>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Stap 2: Controleer je Meterkast</h2>
          <p class="text-gray-700 leading-relaxed mb-4">
            Je meterkast moet voldoende capaciteit hebben voor een laadpaal:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span>Controleer of je een 3-fase aansluiting hebt</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span>Check de vrije groepen in je meterkast</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span>Kijk naar de hoofdzekering (25A, 35A of hoger)</span>
            </li>
          </ul>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Tip: Vraag een Gecertificeerde Installateur</h2>
          <p class="text-gray-700 mb-4">
            Een laadpaal moet door een gecertificeerde installateur worden geplaatst. Dit is verplicht voor:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li>• Veilige aansluiting op het stroomnet</li>
            <li>• Garantie op de laadpaal</li>
            <li>• Subsidie aanvragen</li>
          </ul>
          <p class="text-gray-700 mt-4">
            <a href="/" class="text-green-600 hover:text-green-800 underline">Vind een installateur bij jou in de buurt</a>
          </p>
        </div>
      </section>
    </div>
  `,

  'beste-laadpaal-merken-vergelijken': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        De keuze voor een laadpaal merk is belangrijk. Elk merk heeft zijn eigen kenmerken, prijsklasse en functionaliteiten. In dit artikel vergelijken we de populairste laadpaal merken in Nederland.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Nederlandse Topmerken</h2>

          <div class="space-y-6">
            <div class="border-l-4 border-green-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Alfen</h3>
              <p class="text-gray-700">
                Nederlands merk met uitstekende kwaliteit. De Alfen Eve is zeer populair vanwege betrouwbaarheid en goede app-ondersteuning. Prijsklasse: EUR 1.200 - EUR 1.800.
              </p>
            </div>

            <div class="border-l-4 border-blue-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">ABB</h3>
              <p class="text-gray-700">
                Zwitsers technologiebedrijf met robuuste laadpalen. De Terra AC Wall is ideaal voor zakelijk gebruik. Prijsklasse: EUR 1.000 - EUR 2.500.
              </p>
            </div>

            <div class="border-l-4 border-orange-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Wallbox</h3>
              <p class="text-gray-700">
                Spaans merk bekend om design en innovatie. De Pulsar Plus is compact en stijlvol. Prijsklasse: EUR 700 - EUR 1.500.
              </p>
            </div>

            <div class="border-l-4 border-purple-500 pl-4">
              <h3 class="text-lg font-semibold text-gray-900 mb-2">Easee</h3>
              <p class="text-gray-700">
                Noors merk met focus op slim laden. Zeer compact en geschikt voor meerdere laadpunten. Prijsklasse: EUR 900 - EUR 1.400.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-blue-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Waar Let je Op?</h2>
          <ul class="space-y-2 text-gray-700">
            <li>• Laadvermogen (kW)</li>
            <li>• Type kabel (vast of socket)</li>
            <li>• Smart functionaliteiten</li>
            <li>• Garantie en service</li>
            <li>• Prijs-kwaliteit verhouding</li>
          </ul>
        </div>
      </section>
    </div>
  `,

  'subsidie-laadpaal-2025': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        In 2025 zijn er verschillende subsidies beschikbaar voor de aanschaf en installatie van een laadpaal. Zowel particulieren als bedrijven kunnen profiteren van deze regelingen. Hier vind je een compleet overzicht.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Subsidies voor Particulieren</h2>

          <div class="space-y-4">
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">SEEH (Subsidie Elektrische Personenauto's)</h3>
              <p class="text-gray-700 text-sm">
                Tot EUR 4.000 subsidie bij aanschaf van een elektrische auto inclusief laadpaal. Voorwaarden en beschikbaarheid varieren.
              </p>
            </div>

            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Gemeentelijke Subsidies</h3>
              <p class="text-gray-700 text-sm">
                Veel gemeenten bieden aanvullende subsidies voor laadpaalinstallatie. Check je eigen gemeente voor de mogelijkheden.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Subsidies voor Bedrijven</h2>

          <div class="space-y-4">
            <div class="bg-blue-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">MIA/Vamil</h3>
              <p class="text-gray-700 text-sm">
                Milieu-investeringsaftrek en willekeurige afschrijving voor laadinfrastructuur. Belastingvoordeel tot 45%.
              </p>
            </div>

            <div class="bg-blue-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">SSEB (Schone Bedrijfsvoering)</h3>
              <p class="text-gray-700 text-sm">
                Subsidie voor verduurzaming van bedrijfspanden, inclusief laadinfrastructuur.
              </p>
            </div>
          </div>
        </div>

        <div class="bg-yellow-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Tips voor Subsidie Aanvragen</h2>
          <ul class="space-y-2 text-gray-700">
            <li>1. Vraag subsidie aan VOORDAT je de laadpaal koopt</li>
            <li>2. Bewaar alle facturen en documenten</li>
            <li>3. Gebruik een gecertificeerde installateur</li>
            <li>4. Check de actuele voorwaarden op RVO.nl</li>
          </ul>
        </div>
      </section>
    </div>
  `,

  'slim-laden-uitgelegd': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        Slim laden, ook wel smart charging genoemd, is een technologie die het mogelijk maakt om je elektrische auto op het meest gunstige moment op te laden. Dit kan je honderden euros per jaar besparen en is beter voor het elektriciteitsnet.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Hoe Werkt Slim Laden?</h2>
          <p class="text-gray-700 mb-4">
            Een slimme laadpaal communiceert met het elektriciteitsnet en je energieleverancier om te bepalen wanneer laden het voordeligst is:
          </p>
          <ul class="space-y-2 text-gray-700">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span><strong>Daltarief laden</strong> - Automatisch laden tijdens goedkope nachturen</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span><strong>Zonnestroom laden</strong> - Laden wanneer je zonnepanelen stroom opwekken</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">•</span>
              <span><strong>Dynamisch laden</strong> - Laden bij lage stroomprijzen op de energiemarkt</span>
            </li>
          </ul>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Voordelen van Slim Laden</h2>
          <div class="grid md:grid-cols-2 gap-4">
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Kostenbesparing</h3>
              <p class="text-gray-700 text-sm">
                Tot 50% besparing op laadkosten door slim gebruik van daltarieven en zonnestroom.
              </p>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Netontlasting</h3>
              <p class="text-gray-700 text-sm">
                Voorkom overbelasting van het stroomnet door te laden op rustige momenten.
              </p>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Duurzaamheid</h3>
              <p class="text-gray-700 text-sm">
                Maximaliseer het gebruik van groene stroom uit zon en wind.
              </p>
            </div>
            <div class="bg-green-50 rounded-lg p-4">
              <h3 class="font-semibold text-gray-900 mb-2">Gemak</h3>
              <p class="text-gray-700 text-sm">
                Stel eenmalig in en de laadpaal regelt de rest automatisch.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  `,

  'laadpaal-zonnepanelen-combineren': `
    <div class="blog-content space-y-6">
      <p class="text-lg leading-relaxed text-gray-700">
        De combinatie van een laadpaal met zonnepanelen is ideaal: je rijdt letterlijk op zonlicht. Met de juiste installatie kun je een groot deel van je kilometers gratis en volledig duurzaam afleggen.
      </p>

      <section class="mt-8 space-y-8">
        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Zo Werkt Het</h2>
          <p class="text-gray-700 mb-4">
            Een slimme laadpaal detecteert wanneer je zonnepanelen meer stroom opwekken dan je huis verbruikt. Dit overschot wordt direct naar je auto gestuurd in plaats van terug te leveren aan het net.
          </p>
          <div class="bg-yellow-50 rounded-lg p-4 mt-4">
            <p class="text-gray-700 text-sm">
              <strong>Tip:</strong> Met de afbouw van de salderingsregeling wordt eigen verbruik steeds interessanter. Laden met zonnestroom levert meer op dan terugleveren!
            </p>
          </div>
        </div>

        <div class="bg-white rounded-lg shadow-sm p-6">
          <h2 class="text-2xl font-bold text-gray-900 mb-4">Wat Heb je Nodig?</h2>
          <ul class="space-y-3 text-gray-700">
            <li class="flex items-start">
              <span class="text-green-600 mr-2">1.</span>
              <span><strong>Zonnepanelen</strong> - Minimaal 8-10 panelen voor effectief laden</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">2.</span>
              <span><strong>Slimme laadpaal</strong> - Met solar charging functie</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">3.</span>
              <span><strong>Energiemeter</strong> - Om productie en verbruik te meten</span>
            </li>
            <li class="flex items-start">
              <span class="text-green-600 mr-2">4.</span>
              <span><strong>App of software</strong> - Voor aansturing en monitoring</span>
            </li>
          </ul>
        </div>

        <div class="bg-green-50 rounded-lg p-6">
          <h2 class="text-xl font-bold text-gray-900 mb-3">Besparing Berekenen</h2>
          <p class="text-gray-700 mb-4">
            Gemiddeld rijdt een Nederlander 15.000 km per jaar. Met een verbruik van 18 kWh per 100 km en zonnestroom van EUR 0,00 (in plaats van EUR 0,35/kWh) bespaar je:
          </p>
          <p class="text-2xl font-bold text-green-600">
            EUR 945 per jaar!
          </p>
        </div>
      </section>
    </div>
  `,
};

export function getBlogContent(slug: string): string | undefined {
  return blogContent[slug];
}
