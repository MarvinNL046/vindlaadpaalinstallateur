import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Zoek Laadpaal Installateurs | VindLaadpaalInstallateur.nl',
  description: 'Doorzoek onze database van laadpaal installateurs in heel Nederland. Vind installateurs op naam, stad, of provincie.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function SearchLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
