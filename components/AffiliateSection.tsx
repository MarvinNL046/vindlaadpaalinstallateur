import Link from 'next/link';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Phone, Zap, Calculator } from 'lucide-react';

interface AffiliatePartner {
  name: string;
  description: string;
  icon: React.ReactNode;
  ctaText: string;
  href: string;
  tag?: string;
}

const partners: AffiliatePartner[] = [
  {
    name: 'Gratis Offerte Aanvragen',
    description: 'Ontvang binnen 24 uur vrijblijvende offertes van gecertificeerde installateurs',
    icon: <Calculator className="w-6 h-6" />,
    ctaText: 'Vraag offerte aan',
    href: '/offerte',
    tag: 'Gratis'
  },
  {
    name: 'Telefonisch Advies',
    description: 'Spreek met een laadpaal specialist die je kan helpen met de juiste keuze',
    icon: <Phone className="w-6 h-6" />,
    ctaText: 'Bel nu',
    href: 'tel:0800-1234567',
    tag: 'Gratis'
  },
  {
    name: 'Subsidie Informatie',
    description: 'Ontdek welke subsidies en fiscale voordelen beschikbaar zijn voor jouw situatie',
    icon: <Zap className="w-6 h-6" />,
    ctaText: 'Bekijk subsidies',
    href: '/gids/subsidies',
  }
];

export default function AffiliateSection() {
  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h2 className="text-2xl font-bold mb-3">Start Vandaag</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            De eerste stap naar elektrisch rijden begint met de juiste laadoplossing.
            Deze hulpmiddelen helpen je op weg naar een duurzame toekomst.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {partners.map((partner, index) => (
            <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
              <div className="flex items-start gap-4 mb-4">
                <div className="p-3 bg-primary/10 rounded-lg text-primary">
                  {partner.icon}
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold mb-1">{partner.name}</h3>
                  {partner.tag && (
                    <span className="text-xs bg-primary/10 text-primary px-2 py-1 rounded">
                      {partner.tag}
                    </span>
                  )}
                </div>
              </div>

              <p className="text-sm text-gray-600 mb-4">
                {partner.description}
              </p>

              <Button
                variant="outline"
                className="w-full group"
                asChild
              >
                <Link href={partner.href} target={partner.href.startsWith('tel:') ? undefined : '_blank'} rel="noopener noreferrer">
                  {partner.ctaText}
                  <ExternalLink className="w-4 h-4 ml-2 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </Button>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8">
          <p className="text-xs text-gray-500">
            Alle installateurs zijn gecertificeerd en werken volgens de geldende NEN-normen.
          </p>
        </div>
      </div>
    </section>
  );
}
