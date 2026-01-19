import { Metadata } from 'next';

export const metadata: Metadata = {
  title: {
    template: '%s | VindLaadpaalInstallateur.nl Gidsen',
    default: 'Laadpaal Gidsen & Informatie | VindLaadpaalInstallateur.nl',
  },
  description: 'Deskundige gidsen over laadpaal types, installatie opties, subsidies en slim laden informatie door heel Nederland.',
};

export default function GuideLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="bg-secondary/20 min-h-screen">
      {children}
    </div>
  );
}
