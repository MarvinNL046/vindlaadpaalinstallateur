import { Resend } from 'resend';

// Initialize Resend only when API key is available (prevents build errors)
const resend = process.env.RESEND_API_KEY
  ? new Resend(process.env.RESEND_API_KEY)
  : null;

const FROM_EMAIL = 'VindLaadpaalInstallateur <noreply@vindlaadpaalinstallateur.nl>';

// Brand colors - Green/Blue EV Theme
const colors = {
  primary: '#22C55E',
  primaryLight: '#4ADE80',
  accent: '#2563EB',
  accentLight: '#3B82F6',
  background: '#F8FAFC',
  foreground: '#1E293B',
  muted: '#64748B',
  border: '#E2E8F0',
  white: '#FFFFFF',
};

export async function sendVerificationEmail(
  to: string,
  code: string,
  type: 'register' | 'login' | 'claim'
): Promise<{ success: boolean; error?: string }> {
  const subjects = {
    register: 'Verifieer je e-mailadres - VindLaadpaalInstallateur',
    login: 'Je inlogcode - VindLaadpaalInstallateur',
    claim: 'Verificatiecode voor je claim - VindLaadpaalInstallateur',
  };

  const titles = {
    register: 'Welkom bij VindLaadpaalInstallateur',
    login: 'Je inlogcode',
    claim: 'Verifieer je claim',
  };

  const descriptions = {
    register: 'Bedankt voor je registratie. Gebruik de onderstaande code om je e-mailadres te verifieren.',
    login: 'Gebruik de onderstaande code om in te loggen op je account.',
    claim: 'Gebruik de onderstaande code om je claim te verifieren.',
  };

  try {
    if (!resend) {
      console.warn('Resend API key not configured, skipping email send');
      return { success: false, error: 'Email service not configured' };
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject: subjects[type],
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: ${colors.foreground}; max-width: 600px; margin: 0 auto; padding: 20px; background-color: ${colors.background};">
  <div style="background-color: ${colors.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.08);">
    <div style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%); padding: 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <span style="color: ${colors.white};">VindLaadpaal</span><span style="color: ${colors.accent};">Installateur</span>
      </h1>
    </div>

    <div style="padding: 32px;">
      <h2 style="color: ${colors.foreground}; margin-top: 0;">${titles[type]}</h2>
      <p style="color: ${colors.muted};">${descriptions[type]}</p>

      <div style="background: ${colors.background}; border: 2px dashed ${colors.accent}; border-radius: 8px; padding: 24px; text-align: center; margin: 24px 0;">
        <p style="margin: 0 0 10px 0; color: ${colors.muted}; font-size: 14px;">Je verificatiecode:</p>
        <div style="font-size: 36px; font-weight: bold; letter-spacing: 8px; color: ${colors.primary};">
          ${code}
        </div>
      </div>

      <p style="color: ${colors.muted}; font-size: 14px;">
        Deze code is 15 minuten geldig. Deel deze code met niemand.
      </p>

      <hr style="border: none; border-top: 1px solid ${colors.border}; margin: 24px 0;">

      <p style="color: ${colors.muted}; font-size: 12px; text-align: center;">
        Als je deze e-mail niet hebt aangevraagd, kun je deze veilig negeren.
      </p>
    </div>

    <div style="text-align: center; padding: 24px; color: ${colors.muted}; font-size: 12px; background-color: ${colors.background}; border-top: 1px solid ${colors.border};">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} VindLaadpaalInstallateur</p>
      <p style="margin: 5px 0 0 0;">
        <a href="https://www.vindlaadpaalinstallateur.nl" style="color: ${colors.accent};">vindlaadpaalinstallateur.nl</a>
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendWelcomeEmail(
  to: string,
  name: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!resend) {
      console.warn('Resend API key not configured, skipping email send');
      return { success: false, error: 'Email service not configured' };
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject: 'Welkom bij VindLaadpaalInstallateur!',
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: ${colors.foreground}; max-width: 600px; margin: 0 auto; padding: 20px; background-color: ${colors.background};">
  <div style="background-color: ${colors.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.08);">
    <div style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%); padding: 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <span style="color: ${colors.white};">VindLaadpaal</span><span style="color: ${colors.accent};">Installateur</span>
      </h1>
    </div>

    <div style="padding: 32px;">
      <h2 style="color: ${colors.foreground}; margin-top: 0;">Welkom, ${name}!</h2>

      <p style="color: ${colors.muted}; font-size: 16px;">
        Bedankt voor het aanmaken van een account bij VindLaadpaalInstallateur.
        We zijn blij dat je deel uitmaakt van onze community!
      </p>

      <div style="background: ${colors.background}; border-radius: 8px; padding: 20px; margin: 24px 0; border: 1px solid ${colors.border};">
        <h3 style="color: ${colors.primary}; margin-top: 0; font-size: 16px;">Wat kun je doen met je account?</h3>
        <ul style="color: ${colors.muted}; padding-left: 20px; margin: 0;">
          <li style="margin-bottom: 8px;">Claim en beheer je installateur vermelding</li>
          <li style="margin-bottom: 8px;">Update je contactgegevens en diensten</li>
          <li style="margin-bottom: 8px;">Voeg foto's toe aan je vermelding</li>
          <li style="margin-bottom: 8px;">Ontvang offerte aanvragen van klanten</li>
        </ul>
      </div>

      <div style="text-align: center; margin: 32px 0;">
        <a href="https://www.vindlaadpaalinstallateur.nl/dashboard"
           style="background: ${colors.accent}; color: ${colors.white}; padding: 14px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px;">
          Ga naar je Dashboard
        </a>
      </div>

      <p style="color: ${colors.muted}; font-size: 14px;">
        Ben je een laadpaal installateur? Zoek je bedrijf op en klik op "Claim deze vermelding"
        om de informatie te beheren.
      </p>

      <hr style="border: none; border-top: 1px solid ${colors.border}; margin: 24px 0;">

      <p style="color: ${colors.muted}; font-size: 14px;">
        Vragen? Neem gerust contact met ons op via
        <a href="https://www.vindlaadpaalinstallateur.nl/contact" style="color: ${colors.accent};">ons contactformulier</a>.
      </p>
    </div>

    <div style="text-align: center; padding: 24px; color: ${colors.muted}; font-size: 12px; background-color: ${colors.background}; border-top: 1px solid ${colors.border};">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} VindLaadpaalInstallateur</p>
      <p style="margin: 5px 0 0 0;">
        <a href="https://www.vindlaadpaalinstallateur.nl" style="color: ${colors.accent};">vindlaadpaalinstallateur.nl</a>
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send welcome email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}

export async function sendClaimApprovedEmail(
  to: string,
  installerName: string
): Promise<{ success: boolean; error?: string }> {
  try {
    if (!resend) {
      console.warn('Resend API key not configured, skipping email send');
      return { success: false, error: 'Email service not configured' };
    }

    await resend.emails.send({
      from: FROM_EMAIL,
      to: [to],
      subject: `Je claim is goedgekeurd - ${installerName}`,
      html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif; line-height: 1.6; color: ${colors.foreground}; max-width: 600px; margin: 0 auto; padding: 20px; background-color: ${colors.background};">
  <div style="background-color: ${colors.white}; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 20px rgba(34, 197, 94, 0.08);">
    <div style="background: linear-gradient(135deg, ${colors.primary} 0%, ${colors.primaryLight} 100%); padding: 32px; text-align: center;">
      <h1 style="color: white; margin: 0; font-size: 24px; font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;">
        <span style="color: ${colors.white};">VindLaadpaal</span><span style="color: ${colors.accent};">Installateur</span>
      </h1>
    </div>

    <div style="padding: 32px;">
      <h2 style="color: ${colors.foreground}; margin-top: 0;">Je claim is goedgekeurd!</h2>
      <p style="color: ${colors.muted};">
        Goed nieuws! Je claim voor <strong style="color: ${colors.foreground};">${installerName}</strong> is goedgekeurd.
      </p>

      <p style="color: ${colors.muted};">
        Je kunt nu inloggen op je dashboard om de informatie van je bedrijf te beheren.
      </p>

      <div style="text-align: center; margin: 32px 0;">
        <a href="https://www.vindlaadpaalinstallateur.nl/dashboard"
           style="background: ${colors.accent}; color: ${colors.white}; padding: 14px 35px; border-radius: 8px; text-decoration: none; font-weight: bold; display: inline-block; font-size: 16px;">
          Ga naar Dashboard
        </a>
      </div>
    </div>

    <div style="text-align: center; padding: 24px; color: ${colors.muted}; font-size: 12px; background-color: ${colors.background}; border-top: 1px solid ${colors.border};">
      <p style="margin: 0;">&copy; ${new Date().getFullYear()} VindLaadpaalInstallateur</p>
      <p style="margin: 5px 0 0 0;">
        <a href="https://www.vindlaadpaalinstallateur.nl" style="color: ${colors.accent};">vindlaadpaalinstallateur.nl</a>
      </p>
    </div>
  </div>
</body>
</html>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error('Failed to send email:', error);
    return { success: false, error: 'Failed to send email' };
  }
}
