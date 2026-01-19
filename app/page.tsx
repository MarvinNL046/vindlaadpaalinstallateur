'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { MapPin, Plug, Building2, Phone, Star, ArrowRight, Users, Award, Clock, Search, ChevronRight, Shield, Zap, Home, Battery, CheckCircle2, Car, Sun, Wallet } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import FAQSection from '@/components/FAQSection';
import { SITE_STATS, getComprehensiveDataText } from '@/lib/stats-config';
import OptimizedAd from '@/components/ads/OptimizedAd';
import MultiplexAd from '@/components/ads/MultiplexAd';
import { AD_SLOTS } from '@/lib/ad-config';

// Unsplash images for EV charging theme
const heroImages = {
  // Electric car charging
  main: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=1920&q=80',
  // EV charging station
  charging: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=800&q=80',
  // Electric car
  ev: 'https://images.unsplash.com/photo-1560958089-b8a1929cea89?w=800&q=80',
  // Solar panels
  solar: 'https://images.unsplash.com/photo-1509391366360-2e959784a276?w=800&q=80',
  // Modern home
  home: 'https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?w=800&q=80',
  // Technology
  tech1: 'https://images.unsplash.com/photo-1558618047-f4b511867e70?w=800&q=80',
  tech2: 'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?w=800&q=80',
  // Sustainable
  sustainable1: 'https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?w=800&q=80',
  sustainable2: 'https://images.unsplash.com/photo-1532601224476-15c79f2f7a51?w=800&q=80',
};

interface Stats {
  totalInstallateurs: number;
  totalProvinces: number;
  totalCities: number;
  totalGemeentes: number;
}

// Featured provinces
const featuredProvinces = [
  {
    name: 'Noord-Holland',
    slug: 'noord-holland',
    highlight: 'Amsterdam, Haarlem, Alkmaar'
  },
  {
    name: 'Zuid-Holland',
    slug: 'zuid-holland',
    highlight: 'Rotterdam, Den Haag, Leiden'
  },
  {
    name: 'Noord-Brabant',
    slug: 'noord-brabant',
    highlight: 'Eindhoven, Tilburg, Breda'
  },
  {
    name: 'Utrecht',
    slug: 'utrecht',
    highlight: 'Utrecht, Amersfoort, Veenendaal'
  },
  {
    name: 'Gelderland',
    slug: 'gelderland',
    highlight: 'Nijmegen, Arnhem, Apeldoorn'
  },
  {
    name: 'Limburg',
    slug: 'limburg',
    highlight: 'Maastricht, Venlo, Heerlen'
  }
];

const serviceCategories = [
  {
    title: 'Thuislader',
    description: 'Laadpaal installatie voor thuis. Laad uw elektrische auto veilig op in uw eigen garage of oprit.',
    icon: Home,
    href: '/dienst/thuislader',
    color: 'bg-green-100 text-green-700'
  },
  {
    title: 'Zakelijke Laadpaal',
    description: 'Laadoplossingen voor bedrijven, kantoren en parkeerterreinen.',
    icon: Building2,
    href: '/dienst/zakelijke-laadpaal',
    color: 'bg-blue-100 text-blue-600'
  },
  {
    title: 'Slim Laden',
    description: 'Intelligent laden met dynamische tarieven en optimaal gebruik van zonne-energie.',
    icon: Zap,
    href: '/dienst/slim-laden',
    color: 'bg-green-50 text-green-600'
  }
];

const userTestimonials = [
  {
    name: 'Peter van D.',
    location: 'Amsterdam, Noord-Holland',
    quote: 'Via deze website vond ik snel een betrouwbare installateur. De Alfen laadpaal werkt perfect en de installatie was binnen een dag geregeld.',
    rating: 5
  },
  {
    name: 'Marieke S.',
    location: 'Rotterdam, Zuid-Holland',
    quote: 'Eindelijk een duidelijk overzicht van alle installateurs in mijn regio. De offertes waren snel binnen en de prijzen concurrerend.',
    rating: 5
  },
  {
    name: 'Hans B.',
    location: 'Eindhoven, Noord-Brabant',
    quote: 'De installateur die ik hier vond had veel ervaring met zonnepanelen integratie. Ik laad nu gratis met eigen opgewekte stroom!',
    rating: 5
  }
];

// Popular EV charging brands
const popularBrands = [
  { name: 'Alfen', slug: 'alfen' },
  { name: 'EVBox', slug: 'evbox' },
  { name: 'Wallbox', slug: 'wallbox' },
  { name: 'Easee', slug: 'easee' },
  { name: 'Tesla', slug: 'tesla' },
  { name: 'ABB', slug: 'abb' },
];

export default function HomePage() {
  const [stats, setStats] = useState<Stats>({
    totalInstallateurs: 0,
    totalProvinces: 12,
    totalCities: 0,
    totalGemeentes: 0
  });
  const [searchQuery, setSearchQuery] = useState('');

  useEffect(() => {
    // Load stats from API
    async function loadStats() {
      try {
        const response = await fetch('/api/stats');
        if (response.ok) {
          const data = await response.json();
          setStats(data);
        }
      } catch (error) {
        console.error('Error loading stats:', error);
      }
    }
    loadStats();
  }, []);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      window.location.href = `/zoeken?q=${encodeURIComponent(searchQuery)}`;
    }
  };

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="relative min-h-[700px] lg:min-h-[800px] overflow-hidden">
        {/* Background Gradient - Green/Blue eco theme */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-700 via-green-600 to-blue-700" />

        {/* Decorative Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
          <div className="absolute top-1/4 left-1/4 w-[300px] h-[300px] bg-white/5 rounded-full blur-2xl" />
        </div>

        {/* Subtle Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.15)_1px,transparent_1px)] bg-[length:32px_32px]" />
        </div>

        <div className="container mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="max-w-5xl mx-auto">
            {/* Trust Badge */}
            <div className="flex justify-center mb-8">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm border border-white/20">
                <Shield className="w-4 h-4 text-green-300" />
                <span>Gecertificeerde installateurs in heel Nederland</span>
              </div>
            </div>

            <div className="text-center text-white">
              <h1 className="font-serif text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 leading-tight">
                Vind een Laadpaal
                <span className="block mt-2 bg-gradient-to-r from-green-300 to-blue-300 bg-clip-text text-transparent">
                  Installateur
                </span>
              </h1>
              <p className="text-lg md:text-xl text-white/80 mb-10 max-w-3xl mx-auto leading-relaxed">
                Vergelijk gecertificeerde laadpaal installateurs bij jou in de buurt.
                Van thuisladers tot zakelijke laadoplossingen - vind de perfecte installateur
                voor jouw elektrische auto.
              </p>

              {/* Search Form */}
              <form onSubmit={handleSearch} className="max-w-3xl mx-auto mb-8">
                <div className="flex flex-col sm:flex-row gap-3 p-2 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/20">
                  <div className="relative flex-1">
                    <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-green-600" />
                    <input
                      type="text"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      placeholder="Voer je plaats of postcode in..."
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white text-gray-900 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-green-500 shadow-lg"
                    />
                  </div>
                  <Button size="lg" type="submit" className="px-8 py-4 bg-green-500 hover:bg-green-600 text-white font-semibold rounded-xl shadow-lg shadow-green-500/30 transition-all hover:shadow-xl hover:shadow-green-500/40">
                    <Search className="w-5 h-5 mr-2" />
                    Zoek Installateur
                  </Button>
                </div>
              </form>

              {/* Quick Links */}
              <div className="flex flex-wrap justify-center gap-3 text-sm mb-12">
                <Link href="/provincie" className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white border border-white/20 hover:border-white/40">
                  Zoek per Provincie
                </Link>
                <Link href="/dienst/thuislader" className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white border border-white/20 hover:border-white/40">
                  Thuislader
                </Link>
                <Link href="/dienst/zakelijke-laadpaal" className="px-5 py-2.5 bg-white/10 backdrop-blur-sm rounded-full hover:bg-white/20 transition-all text-white border border-white/20 hover:border-white/40">
                  Zakelijke Laadpaal
                </Link>
                <Link href="/gids" className="px-5 py-2.5 bg-green-500/20 backdrop-blur-sm rounded-full hover:bg-green-500/30 transition-all text-green-200 border border-green-400/30 hover:border-green-400/50">
                  Laadpaal Gids
                </Link>
              </div>

              {/* Trust Indicators */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-4xl mx-auto mb-10">
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">
                    {stats.totalInstallateurs > 0 ? stats.totalInstallateurs.toLocaleString('nl-NL') : '500+'}
                  </div>
                  <div className="text-sm text-white/70">Installateurs</div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">12</div>
                  <div className="text-sm text-white/70">Provincies</div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">Gratis</div>
                  <div className="text-sm text-white/70">Offertes Vergelijken</div>
                </div>
                <div className="p-4 bg-white/10 backdrop-blur-sm rounded-xl border border-white/10">
                  <div className="text-3xl md:text-4xl font-bold text-white mb-1">100%</div>
                  <div className="text-sm text-white/70">Gecertificeerd</div>
                </div>
              </div>

              {/* CTA Banner */}
              <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 bg-white/95 backdrop-blur-sm rounded-2xl shadow-xl">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 bg-green-100 rounded-full flex items-center justify-center">
                    <Plug className="w-6 h-6 text-green-700" />
                  </div>
                  <div className="text-left">
                    <p className="text-sm text-gray-600 font-medium">Klaar om te laden?</p>
                    <p className="text-xs text-gray-500">Vergelijk gratis offertes van installateurs</p>
                  </div>
                </div>
                <Link href="/zoeken">
                  <Button className="bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl shadow-lg">
                    <Zap className="w-5 h-5 mr-2" />
                    Start Vergelijken
                  </Button>
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 120" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
            <path d="M0 120L60 110C120 100 240 80 360 70C480 60 600 60 720 65C840 70 960 80 1080 85C1200 90 1320 90 1380 90L1440 90V120H1380C1320 120 1200 120 1080 120C960 120 840 120 720 120C600 120 480 120 360 120C240 120 120 120 60 120H0Z" fill="white"/>
          </svg>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Left - Content */}
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-50 rounded-full text-green-700 text-sm font-medium mb-6">
                  <CheckCircle2 className="w-4 h-4" />
                  Betrouwbaar Platform
                </div>
                <h2 className="font-serif text-3xl md:text-4xl font-bold mb-6 text-gray-900">
                  De Juiste Laadpaal Installateur Vinden Was Nog Nooit Zo Makkelijk
                </h2>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Of u nu thuis wilt laden of een zakelijke laadoplossing zoekt,
                  wij verbinden u met gecertificeerde installateurs die passen bij uw wensen en budget.
                </p>
                <ul className="space-y-4 mb-8">
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Alleen gecertificeerde en ervaren installateurs</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Vergelijk prijzen en reviews van echte klanten</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckCircle2 className="w-4 h-4 text-green-600" />
                    </div>
                    <span className="text-gray-700">Gratis en vrijblijvend - geen verborgen kosten</span>
                  </li>
                </ul>
                <div className="flex flex-wrap gap-4">
                  <Link href="/zoeken">
                    <Button size="lg" className="bg-green-600 hover:bg-green-700">
                      Vind Installateur
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </Link>
                  <Link href="/gids">
                    <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
                      Lees de Gids
                    </Button>
                  </Link>
                </div>
              </div>

              {/* Right - Image Grid */}
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.charging}
                        alt="Laadpaal installatie"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.ev}
                        alt="Elektrische auto laden"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                  <div className="space-y-4 pt-8">
                    <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.solar}
                        alt="Zonnepanelen integratie"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                    <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                      <Image
                        src={heroImages.home}
                        alt="Thuislader"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 50vw, 25vw"
                      />
                    </div>
                  </div>
                </div>
                <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-200/50 rounded-full blur-2xl" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-200/50 rounded-full blur-2xl" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Ad after intro section */}
      <div className="bg-gray-50 py-4">
        <div className="container mx-auto px-4">
          <OptimizedAd
            slot={AD_SLOTS.home.heroBelow}
            format="horizontal"
            priority={true}
            minHeight={90}
            className="max-w-[728px] mx-auto"
          />
        </div>
      </div>

      {/* Featured Category - Thuislader */}
      <section className="py-16 bg-gradient-to-br from-green-800 via-green-700 to-green-900 text-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Content */}
            <div className="order-2 lg:order-1">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-green-500/20 rounded-full text-green-300 text-sm font-medium mb-6">
                <Home className="w-4 h-4" />
                Meest Populair
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Thuislader Installatie
              </h2>
              <p className="text-lg text-white/80 mb-6 leading-relaxed">
                Laad uw elektrische auto veilig en snel op thuis. Een thuislader is tot 5x sneller dan
                een standaard stopcontact en veel veiliger voor dagelijks gebruik.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-green-300" />
                  </div>
                  Laadsnelheid van 3,7 kW tot 22 kW
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-green-300" />
                  </div>
                  Slim laden met dynamische tarieven
                </li>
                <li className="flex items-center gap-3 text-white/80">
                  <div className="w-6 h-6 rounded-full bg-green-500/20 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-green-300" />
                  </div>
                  Integratie met zonnepanelen mogelijk
                </li>
              </ul>
              <Link href="/dienst/thuislader">
                <Button size="lg" className="group bg-green-500 hover:bg-green-400 shadow-lg shadow-green-500/30">
                  Vind Thuislader Installateur
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>

            {/* Right - Image Grid */}
            <div className="order-1 lg:order-2 relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.tech1}
                      alt="Thuislader installatie"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.ev}
                      alt="Elektrische auto thuis laden"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.home}
                      alt="Moderne woning met laadpaal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src={heroImages.solar}
                      alt="Zonnepanelen en laadpaal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-green-400/20 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-blue-500/30 rounded-full blur-2xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Featured Provinces */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Zoek per Provincie
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Vind laadpaal installateurs in uw provincie of doorzoek ons hele netwerk van gecertificeerde installateurs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 max-w-5xl mx-auto">
            {featuredProvinces.map((province) => (
              <Link key={province.slug} href={`/provincie/${province.slug}`} className="group">
                <Card className="p-6 h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-green-100 flex items-center justify-center group-hover:bg-green-600 transition-colors">
                      <MapPin className="w-6 h-6 text-green-700 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-2 group-hover:text-green-600 transition-colors">
                    {province.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {province.highlight}
                  </p>
                  <span className="text-sm font-medium text-green-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                    Bekijk installateurs
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/provincie">
              <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
                Alle 12 Provincies
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Category - Zakelijke Laadpaal */}
      <section className="py-16 bg-white overflow-hidden">
        <div className="container mx-auto px-4">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left - Image Grid */}
            <div className="relative">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.sustainable1}
                      alt="Zakelijke laadpaal"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.tech2}
                      alt="Laadplein bedrijf"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="relative aspect-square rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.charging}
                      alt="Meerdere laadpalen"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                  <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={heroImages.sustainable2}
                      alt="Duurzaam bedrijf"
                      fill
                      className="object-cover hover:scale-105 transition-transform duration-500"
                      sizes="(max-width: 768px) 50vw, 25vw"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -top-4 -left-4 w-24 h-24 bg-blue-100 rounded-full blur-2xl" />
              <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-green-100 rounded-full blur-2xl" />
            </div>

            {/* Right - Content */}
            <div>
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-100 rounded-full text-blue-600 text-sm font-medium mb-6">
                <Building2 className="w-4 h-4" />
                Zakelijk
              </div>
              <h2 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Zakelijke Laadoplossingen
              </h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                Van enkele laadpunten voor medewerkers tot complete laadpleinen voor bezoekers.
                Maak uw bedrijf klaar voor de elektrische toekomst met professionele laadinfrastructuur.
              </p>
              <ul className="space-y-3 mb-8">
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-blue-700" />
                  </div>
                  Load balancing voor meerdere laadpunten
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-blue-700" />
                  </div>
                  Back-office en afrekensystemen
                </li>
                <li className="flex items-center gap-3 text-muted-foreground">
                  <div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center">
                    <ChevronRight className="w-4 h-4 text-blue-700" />
                  </div>
                  Subsidie advies (MIA/Vamil, SEEH)
                </li>
              </ul>
              <Link href="/dienst/zakelijke-laadpaal">
                <Button size="lg" className="group bg-blue-600 hover:bg-blue-700">
                  Zakelijke Installateurs
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Brands */}
      <section className="py-12 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-8">
            <h2 className="font-serif text-2xl md:text-3xl font-bold mb-3">
              Populaire Laadpaal Merken
            </h2>
            <p className="text-muted-foreground">
              Onze installateurs werken met alle bekende merken
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-3xl mx-auto">
            {popularBrands.map((brand) => (
              <Link
                key={brand.slug}
                href={`/merk/${brand.slug}`}
                className="px-6 py-3 bg-white rounded-xl shadow-sm hover:shadow-md transition-all text-gray-700 hover:text-green-600 font-medium border border-gray-100"
              >
                {brand.name}
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Service Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Onze Diensten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Van thuisladers tot zakelijke laadpleinen - vind de juiste installateur voor uw situatie.
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-5xl mx-auto">
            {serviceCategories.map((category) => (
              <Link key={category.href} href={category.href} className="group">
                <Card className="p-8 h-full text-center hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-gray-100">
                  <div className={`w-16 h-16 rounded-2xl ${category.color} flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform`}>
                    <category.icon className="w-8 h-8" />
                  </div>
                  <h3 className="font-serif text-xl font-semibold mb-3 group-hover:text-green-600 transition-colors">
                    {category.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {category.description}
                  </p>
                </Card>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link href="/diensten">
              <Button variant="outline" size="lg" className="border-green-200 text-green-700 hover:bg-green-50">
                Alle Diensten
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Ad before testimonials */}
      <div className="bg-white py-6">
        <div className="container mx-auto px-4">
          <OptimizedAd
            slot={AD_SLOTS.home.afterStats}
            format="horizontal"
            lazy={true}
            minHeight={90}
            className="max-w-[728px] mx-auto"
          />
        </div>
      </div>

      {/* Testimonials */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Ervaringen van Klanten
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Lees wat anderen zeggen over hun ervaring met onze installateurs.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3 max-w-5xl mx-auto">
            {userTestimonials.map((testimonial, index) => (
              <Card key={index} className="p-6">
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-500 fill-yellow-500" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 italic">
                  &ldquo;{testimonial.quote}&rdquo;
                </p>
                <div>
                  <p className="font-medium">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
              Waarom VindLaadpaalInstallateur.nl?
            </h2>
          </div>

          <div className="grid gap-8 md:grid-cols-3 max-w-4xl mx-auto">
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-green-100 flex items-center justify-center mx-auto mb-4">
                <Users className="w-7 h-7 text-green-700" />
              </div>
              <h3 className="font-semibold mb-2">Uitgebreid Netwerk</h3>
              <p className="text-sm text-muted-foreground">
                Honderden gecertificeerde installateurs door heel Nederland.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-blue-100 flex items-center justify-center mx-auto mb-4">
                <Shield className="w-7 h-7 text-blue-600" />
              </div>
              <h3 className="font-semibold mb-2">Geverifieerde Reviews</h3>
              <p className="text-sm text-muted-foreground">
                Echte beoordelingen van echte klanten voor betrouwbare keuzes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-14 h-14 rounded-xl bg-green-50 flex items-center justify-center mx-auto mb-4">
                <Wallet className="w-7 h-7 text-green-600" />
              </div>
              <h3 className="font-semibold mb-2">100% Gratis</h3>
              <p className="text-sm text-muted-foreground">
                Vergelijk offertes zonder kosten of verplichtingen.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Multiplex Ad */}
      <section className="py-8 bg-gray-50">
        <div className="container mx-auto px-4 max-w-5xl">
          <MultiplexAd
            slot={AD_SLOTS.home.beforeFooter}
            title="Gerelateerde Artikelen"
          />
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-green-700 via-green-600 to-blue-700 text-white relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green-500/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3" />
          <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/3" />
        </div>

        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="font-serif text-3xl md:text-4xl font-bold mb-4">
            Klaar voor Elektrisch Rijden?
          </h2>
          <p className="text-white/80 mb-8 max-w-2xl mx-auto">
            Vind vandaag nog de perfecte laadpaal installateur voor uw situatie. Vergelijk gratis en vrijblijvend.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/zoeken">
              <Button size="lg" className="bg-white text-green-700 hover:bg-green-50 shadow-lg">
                Vind Installateur
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </Link>
            <Link href="/gids">
              <Button variant="outline" size="lg" className="border-white/30 text-white hover:bg-white/10">
                Lees de Gids
              </Button>
            </Link>
          </div>

          {/* Contact info */}
          <div className="mt-10 pt-8 border-t border-white/20">
            <p className="text-white/60 mb-2">Vragen over laadpalen?</p>
            <Link href="/contact" className="text-xl font-bold text-green-300 hover:text-green-200">
              Neem contact met ons op
            </Link>
            <p className="text-white/60 text-sm mt-1">Wij helpen u graag verder</p>
          </div>
        </div>
      </section>
    </main>
  );
}
