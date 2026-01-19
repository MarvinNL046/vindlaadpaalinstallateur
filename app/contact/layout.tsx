import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact | VindLaadpaalInstallateur.nl',
  description: 'Neem contact op met VindLaadpaalInstallateur.nl voor vragen, suggesties of samenwerkingen.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
