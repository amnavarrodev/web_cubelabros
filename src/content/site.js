// ─────────────────────────────────────────────────────────────────────────────
//  BUSINESS SETTINGS — edit these before going live, then run `npm run build`.
//  Values marked TODO are placeholders.
// ─────────────────────────────────────────────────────────────────────────────
module.exports = {
  name: 'Cubela Brothers',
  shortName: 'Cubela Bros.',
  // Public URL, no trailing slash. With a custom domain use e.g. 'https://cubelabros.com'
  // and set customDomain below (the build writes the CNAME file GitHub Pages needs).
  siteUrl: 'https://amnavarrodev.github.io/web_cubelabros',
  customDomain: '', // e.g. 'cubelabros.com'

  phone: '(863) 555-0142', // TODO: real phone (shown on the site)
  phoneHref: '+18635550142', // TODO: same number in E.164 for tel: links
  whatsapp: '18635550142', // TODO: WhatsApp number, digits only. Leave '' to hide WhatsApp.
  email: 'info@cubelabros.com', // TODO: public email shown on the site

  // GitHub Pages can't run PHP, so the contact form posts to a form service.
  // Default: FormSubmit (free, no account). The first submission sends an activation
  // email to this address; after confirming, FormSubmit gives you a random alias —
  // paste it here instead of the email to hide the address from the HTML.
  // Formspree also works: use 'https://formspree.io/f/XXXXXXX'.
  formAction: 'https://formsubmit.co/info@cubelabros.com', // TODO

  city: 'Lakeland',
  region: 'FL',
  postalCode: '33801', // TODO
  // Leave street empty if the brothers work from home and don't want the address public.
  street: '',
  geo: { lat: 28.0395, lng: -81.9498 },

  hours: [
    // Used in the footer, contact page and Google structured data.
    { days: ['Mo', 'Tu', 'We', 'Th', 'Fr'], opens: '07:00', closes: '18:00' },
    { days: ['Sa'], opens: '08:00', closes: '14:00' },
  ],

  social: {
    facebook: 'https://www.facebook.com/', // TODO: Facebook page URL ('' hides the icon)
    instagram: '', // TODO
    google: '', // TODO: Google Business Profile "write a review" link
  },

  serviceArea: [
    'Lakeland',
    'Winter Haven',
    'Plant City',
    'Auburndale',
    'Bartow',
    'Mulberry',
    'Polk City',
    'Haines City',
    'Davenport',
    'Brandon',
  ],
};
