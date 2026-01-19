// Site configuration for VindLaadpaalInstallateur.nl (Netherlands)
export const getSiteConfig = () => {
  const domain = process.env.NEXT_PUBLIC_SITE_DOMAIN ||
                 (typeof window !== 'undefined' ? window.location.hostname : 'vindlaadpaalinstallateur.nl');

  const configs: Record<string, {
    id: string;
    domain: string;
    name: string;
    description: string;
  }> = {
    'vindlaadpaalinstallateur.nl': {
      id: 'laadpaal',
      domain: 'vindlaadpaalinstallateur.nl',
      name: 'VindLaadpaalInstallateur.nl',
      description: 'Vind een laadpaal installateur bij jou in de buurt'
    },
    'www.vindlaadpaalinstallateur.nl': {
      id: 'laadpaal',
      domain: 'vindlaadpaalinstallateur.nl',
      name: 'VindLaadpaalInstallateur.nl',
      description: 'Vind een laadpaal installateur bij jou in de buurt'
    },
    'localhost:3000': {
      id: 'laadpaal',
      domain: 'vindlaadpaalinstallateur.nl',
      name: 'VindLaadpaalInstallateur.nl',
      description: 'Vind een laadpaal installateur bij jou in de buurt'
    },
    'localhost:3001': {
      id: 'laadpaal',
      domain: 'vindlaadpaalinstallateur.nl',
      name: 'VindLaadpaalInstallateur.nl',
      description: 'Vind een laadpaal installateur bij jou in de buurt'
    }
  };

  return configs[domain] || configs['vindlaadpaalinstallateur.nl'];
};
