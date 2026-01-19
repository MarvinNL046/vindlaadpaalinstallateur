'use client';

import { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { Card } from '@/components/ui/card';

interface FAQItem {
  question: string;
  answer: string;
}

const faqItems: FAQItem[] = [
  {
    question: "Wat kost een laadpaal thuis?",
    answer: "De kosten voor een thuislader variëren van €800 tot €2.500, afhankelijk van het merk, vermogen en extra functies. Installatie kost meestal €300-€600. Populaire merken zoals Alfen, EVBox en Wallbox bieden modellen in verschillende prijsklassen. Let ook op mogelijke subsidies zoals de SEEH-regeling die tot €1.000 bijdraagt aan de kosten."
  },
  {
    question: "Hoeveel kW laadpaal heb ik nodig?",
    answer: "Voor thuisgebruik is een 11 kW laadpaal meestal voldoende. Dit laadt een gemiddelde elektrische auto in 4-6 uur volledig op. Een 22 kW lader is sneller maar vereist vaak een zwaardere aansluiting. Voor de meeste huishoudens volstaat 7,4 kW of 11 kW, aangezien de auto 's nachts toch laadt."
  },
  {
    question: "Heb ik een vergunning nodig voor een laadpaal?",
    answer: "Voor een laadpaal op eigen terrein is meestal geen vergunning nodig. Bij plaatsing in de openbare ruimte of bij een VvE moet u wel toestemming vragen. Een gecertificeerde installateur kan u adviseren over de lokale regelgeving en eventuele vergunningsaanvragen."
  },
  {
    question: "Wat is slim laden?",
    answer: "Slim laden (smart charging) optimaliseert automatisch wanneer uw auto laadt op basis van energietarieven, netbelasting of beschikbare zonne-energie. Hiermee kunt u tot 30% besparen op laadkosten door te laden wanneer stroom het goedkoopst is, bijvoorbeeld 's nachts of wanneer uw zonnepanelen veel produceren."
  },
  {
    question: "Kan ik mijn laadpaal koppelen aan zonnepanelen?",
    answer: "Ja, veel moderne laadpalen ondersteunen integratie met zonnepanelen. Met een energiemanagementsysteem laadt uw auto automatisch wanneer uw panelen stroom opwekken. Dit maximaliseert het gebruik van gratis zonne-energie en vermindert teruglevering aan het net."
  },
  {
    question: "Hoe kies ik de juiste laadpaal installateur?",
    answer: "Let bij het kiezen van een installateur op: certificeringen (NEN 1010, Uneto-VNI), ervaring met uw gewenste merk, reviews van eerdere klanten, garantievoorwaarden en of ze complete service bieden inclusief groepenkast uitbreiding indien nodig. Vraag altijd meerdere offertes aan om prijzen en service te vergelijken."
  }
];

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const toggleItem = (index: number) => {
    setOpenItems(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  // JSON-LD structured data for FAQ
  const faqJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqItems.map(item => ({
      '@type': 'Question',
      name: item.question,
      acceptedAnswer: {
        '@type': 'Answer',
        text: item.answer,
      },
    })),
  };

  return (
    <section className="py-12">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqJsonLd) }}
      />
      <div className="container mx-auto px-4">
        <h2 className="text-2xl font-bold text-center mb-8">Veelgestelde Vragen</h2>
        <div className="max-w-3xl mx-auto space-y-4">
          {faqItems.map((item, index) => (
            <Card key={index} className="overflow-hidden">
              <button
                onClick={() => toggleItem(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 transition-colors"
              >
                <span className="font-medium">{item.question}</span>
                {openItems.includes(index) ? (
                  <ChevronUp className="w-5 h-5 text-gray-500" />
                ) : (
                  <ChevronDown className="w-5 h-5 text-gray-500" />
                )}
              </button>
              {openItems.includes(index) && (
                <div className="px-6 pb-4 pt-0">
                  <p className="text-gray-600">{item.answer}</p>
                </div>
              )}
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
