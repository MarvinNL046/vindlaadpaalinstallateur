import { Metadata } from 'next';
import Link from 'next/link';
import { Users, Heart, Target, Shield, Clock, ArrowRight, Sparkles, Zap, Quote, Plug } from 'lucide-react';
import { Card } from '@/components/ui/card';
import InlineAd from '@/components/ads/InlineAd';

export const metadata: Metadata = {
  title: 'Over Ons | VindLaadpaalInstallateur.nl',
  description: 'Leer meer over VindLaadpaalInstallateur.nl, de meest uitgebreide directory van laadpaal installateurs in Nederland.',
  openGraph: {
    title: 'Over VindLaadpaalInstallateur.nl',
    description: 'Uw betrouwbare gids voor het vinden van laadpaal installateurs in heel Nederland',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <div className="bg-gradient-to-br from-green-700 to-green-800 text-white py-16">
        <div className="container mx-auto px-4">
          {/* Breadcrumb */}
          <nav className="mb-6">
            <ol className="flex items-center space-x-2 text-sm text-white/70">
              <li><Link href="/" className="hover:text-white transition-colors">Home</Link></li>
              <li>/</li>
              <li className="text-white">Over Ons</li>
            </ol>
          </nav>

          <h1 className="font-serif text-4xl sm:text-5xl font-bold mb-4">
            Over VindLaadpaalInstallateur.nl
          </h1>
          <p className="text-white/80 text-lg max-w-2xl">
            De meest uitgebreide en betrouwbare directory van laadpaal installateurs in Nederland,
            zorgvuldig samengesteld om u te helpen de juiste installateur te vinden.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Introduction */}
          <Card className="p-8 shadow-soft mb-12">
            <p className="text-lg text-muted-foreground leading-relaxed">
              VindLaadpaalInstallateur.nl is opgericht om een complete, betrouwbare en toegankelijke
              database te bieden van laadpaal installateurs in heel Nederland. Wij geloven dat iedereen
              toegang verdient tot informatie die helpt bij het vinden van de juiste installateur.
            </p>
          </Card>

          <InlineAd />

          {/* Mission Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                <Target className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Onze Missie</h2>
            </div>
            <Card className="p-6 shadow-soft bg-gradient-to-br from-green-50 to-blue-50/50 border-green-100">
              <p className="text-muted-foreground leading-relaxed">
                Wij streven ernaar de meest complete en gebruiksvriendelijke bron te zijn voor
                informatie over laadpaal installateurs in Nederland. Of u nu een thuislader zoekt,
                een zakelijke laadoplossing overweegt, of advies nodig heeft over slim laden -
                wij helpen u graag bij het vinden van de juiste installateur.
              </p>
            </Card>
          </section>

          {/* What We Offer Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Wat Wij Bieden</h2>
            <div className="grid gap-4 md:grid-cols-2">
              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-green-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Users className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Uitgebreide Database</h3>
                    <p className="text-sm text-muted-foreground">
                      Honderden installateurs met actuele informatie over diensten,
                      merken, certificeringen en contactgegevens.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-green-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Heart className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Zorgvuldig Gecureerd</h3>
                    <p className="text-sm text-muted-foreground">
                      Elke installateur wordt zorgvuldig gedocumenteerd met focus op
                      kwaliteit, certificeringen en klanttevredenheid.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-green-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Clock className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Altijd Actueel</h3>
                    <p className="text-sm text-muted-foreground">
                      Wij werken continu aan het actueel houden van informatie zoals
                      diensten, merken en contactgegevens.
                    </p>
                  </div>
                </div>
              </Card>

              <Card className="p-6 shadow-soft border-2 border-transparent hover:border-green-200 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center shrink-0">
                    <Shield className="w-6 h-6 text-green-700" />
                  </div>
                  <div>
                    <h3 className="font-serif font-semibold text-lg mb-2">Privacy Voorop</h3>
                    <p className="text-sm text-muted-foreground">
                      Wij respecteren uw privacy en volgen strikt de AVG-richtlijnen
                      bij het verwerken van gegevens.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          </section>

          {/* Values Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Onze Waarden</h2>
            <div className="grid gap-4 md:grid-cols-3">
              <Card className="p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Plug className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Duurzaamheid</h3>
                <p className="text-sm text-muted-foreground">
                  Wij ondersteunen de transitie naar elektrisch rijden in Nederland.
                </p>
              </Card>

              <Card className="p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Toegankelijkheid</h3>
                <p className="text-sm text-muted-foreground">
                  Informatie moet makkelijk te vinden en te begrijpen zijn voor iedereen.
                </p>
              </Card>

              <Card className="p-6 shadow-soft text-center">
                <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-700" />
                </div>
                <h3 className="font-serif font-semibold mb-2">Betrouwbaarheid</h3>
                <p className="text-sm text-muted-foreground">
                  Wij streven naar 100% accurate en actuele informatie.
                </p>
              </Card>
            </div>
          </section>

          <InlineAd />

          {/* Quote Section */}
          <Card className="p-8 shadow-soft bg-gradient-to-r from-green-50 to-blue-50/30 border-green-100 mb-16">
            <div className="flex items-start gap-4">
              <Quote className="w-8 h-8 text-green-600 shrink-0" />
              <div>
                <p className="text-lg font-medium text-foreground mb-4 italic">
                  &quot;Elektrisch rijden toegankelijk maken voor iedereen in Nederland&quot;
                </p>
                <p className="text-sm text-muted-foreground">
                  - VindLaadpaalInstallateur.nl Team
                </p>
              </div>
            </div>
          </Card>

          {/* Future Vision Section */}
          <section className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-lg bg-green-100 text-green-700 flex items-center justify-center">
                <Sparkles className="w-5 h-5" />
              </div>
              <h2 className="font-serif text-2xl font-bold">Toekomstvisie</h2>
            </div>
            <Card className="p-6 shadow-soft">
              <p className="text-muted-foreground mb-6">
                We blijven werken aan het verbeteren van onze diensten. In de toekomst zijn we van plan:
              </p>
              <ul className="space-y-3">
                {[
                  'Interactieve kaarten toe te voegen voor betere navigatie',
                  'Offerte vergelijkingstools uit te breiden',
                  'Een platform te bieden voor het delen van ervaringen',
                  'Samen te werken met laadpaal fabrikanten',
                  'Subsidie-informatie te integreren',
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3 text-muted-foreground">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center shrink-0">
                      <Zap className="w-3 h-3 text-green-700" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
            </Card>
          </section>

          {/* Collaboration Section */}
          <section className="mb-16">
            <h2 className="font-serif text-2xl font-bold mb-6">Samenwerking</h2>
            <Card className="p-6 shadow-soft">
              <p className="text-muted-foreground mb-4">
                Bent u een laadpaal installateur of heeft u aanvullende informatie te delen?
                Wij staan altijd open voor samenwerking om onze database te verbeteren en uit te breiden.
              </p>
              <p className="text-muted-foreground mb-6">
                Neem gerust contact op via{' '}
                <Link href="/contact" className="text-green-600 hover:underline font-medium">
                  ons contactformulier
                </Link>{' '}
                of stuur een email naar{' '}
                <a href="mailto:info@vindlaadpaalinstallateur.nl" className="text-green-600 hover:underline font-medium">
                  info@vindlaadpaalinstallateur.nl
                </a>.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
              >
                Neem Contact Op
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Card>
          </section>

          {/* CTA Section */}
          <div className="text-center">
            <h2 className="font-serif text-2xl font-semibold mb-4">
              Start Uw Zoektocht
            </h2>
            <p className="text-muted-foreground mb-6 max-w-lg mx-auto">
              Vind laadpaal installateurs in heel Nederland en zet de eerste stap naar elektrisch rijden.
            </p>
            <Link
              href="/zoeken"
              className="inline-flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg font-medium hover:bg-green-700 transition-colors"
            >
              Zoek Installateurs
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
