import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Vergelijk Laadpaal Installateurs | VindLaadpaalInstallateur.nl',
  description: 'Vergelijk laadpaal installateurs naast elkaar. Bekijk details, foto\'s, beoordelingen en diensten om de juiste installateur te vinden.',
  robots: {
    index: false,
    follow: true,
  },
};

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
