/**
 * Interface strings (buttons, headings, labels) per language.
 * Portfolio content itself lives in `src/data/portfolio.ts`.
 */
export type Lang = 'en' | 'fr';
export type Localized<T = string> = Record<Lang, T>;

export const languages: Lang[] = ['en', 'fr'];

const en = {
  nav: {
    home: 'Home',
    about: 'About',
    projects: 'Projects',
    experience: 'Experience',
    contact: 'Contact',
  },
  hero: {
    viewProjects: 'View my projects',
    getInTouch: 'Get in touch',
    resume: 'Résumé',
  },
  about: {
    eyebrow: 'Who I am',
    title: 'About',
    skillsEyebrow: 'Toolbox',
    skillsTitle: 'Skills',
  },
  projects: {
    eyebrow: 'Selected work',
    title: 'Projects',
    description:
      'Production data and AI systems · from data engineering to machine-learning deployment, focused on measurable business impact.',
    sourceCode: 'source code',
    liveDemo: 'live demo',
  },
  experience: {
    eyebrow: 'Career',
    title: 'Experience & education',
    description: 'Roles and studies that shaped my data and AI practice.',
    work: 'Experience',
    education: 'Education',
    logo: 'logo',
  },
  contact: {
    eyebrow: 'Get in touch',
    title: 'Let’s talk',
    description: 'Have a project, a role, or a question about data & AI? Drop me a message.',
    availabilityTitle: 'Availability',
    availabilityText:
      'Open to new opportunities and collaborations. Typical response time: Under 24 hours.',
    name: 'Name',
    namePlaceholder: 'Your name',
    email: 'Email',
    emailPlaceholder: 'you@example.com',
    message: 'Message',
    messagePlaceholder: 'Tell me about your project or question…',
    send: 'Send message',
    sending: 'Sending…',
    mailtoTitle: 'Opening your mail app',
    mailtoDescription: (email: string) => `If nothing opens, email me at ${email}.`,
    sentTitle: 'Message sent',
    sentDescription:
      'Thank you for your message! I’ll get back to you as soon as possible, usually within 24 hours.',
    errorTitle: 'Could not send',
    errorDescription: (email: string) => `Please email me directly at ${email}.`,
  },
  footer: {
    rights: 'All rights reserved.',
  },
  notFound: {
    title: 'Page not found',
    text: 'The page you’re looking for doesn’t exist.',
    back: 'Back to home',
  },
  a11y: {
    skip: 'Skip to content',
    menu: 'Toggle menu',
    language: 'Language',
    darkMode: 'Switch to dark mode',
    lightMode: 'Switch to light mode',
  },
};

export type UiStrings = typeof en;

const fr: UiStrings = {
  nav: {
    home: 'Accueil',
    about: 'À propos',
    projects: 'Projets',
    experience: 'Parcours',
    contact: 'Contact',
  },
  hero: {
    viewProjects: 'Voir mes projets',
    getInTouch: 'Me contacter',
    resume: 'CV',
  },
  about: {
    eyebrow: 'Qui suis-je',
    title: 'À propos',
    skillsEyebrow: 'Boîte à outils',
    skillsTitle: 'Compétences',
  },
  projects: {
    eyebrow: 'Quelques réalisations',
    title: 'Projets',
    description:
      'Des systèmes data et IA en production, du data engineering au déploiement de modèles, avec des résultats concrets pour le métier.',
    sourceCode: 'code source',
    liveDemo: 'démo',
  },
  experience: {
    eyebrow: 'Parcours',
    title: 'Expérience & formation',
    description: 'Les postes et les études qui ont construit mon parcours en data et en IA.',
    work: 'Expérience',
    education: 'Formation',
    logo: 'logo',
  },
  contact: {
    eyebrow: 'Contact',
    title: 'Discutons',
    description: 'Un projet, un poste ou une question sur la data et l’IA ? Écrivez-moi.',
    availabilityTitle: 'Disponibilité',
    availabilityText:
      'Ouvert aux nouvelles opportunités et collaborations. Je réponds en général sous 24 h.',
    name: 'Nom',
    namePlaceholder: 'Votre nom',
    email: 'E-mail',
    emailPlaceholder: 'vous@exemple.com',
    message: 'Message',
    messagePlaceholder: 'Parlez-moi de votre projet ou de votre question…',
    send: 'Envoyer',
    sending: 'Envoi…',
    mailtoTitle: 'Ouverture de votre messagerie',
    mailtoDescription: (email: string) => `Si rien ne s’ouvre, écrivez-moi à ${email}.`,
    sentTitle: 'Message envoyé',
    sentDescription:
      'Merci pour votre message ! Je vous réponds rapidement, en général sous 24 h.',
    errorTitle: 'Échec de l’envoi',
    errorDescription: (email: string) => `Écrivez-moi directement à ${email}.`,
  },
  footer: {
    rights: 'Tous droits réservés.',
  },
  notFound: {
    title: 'Page introuvable',
    text: 'La page que vous cherchez n’existe pas.',
    back: 'Retour à l’accueil',
  },
  a11y: {
    skip: 'Aller au contenu',
    menu: 'Ouvrir le menu',
    language: 'Langue',
    darkMode: 'Passer en mode sombre',
    lightMode: 'Passer en mode clair',
  },
};

export const ui: Record<Lang, UiStrings> = { en, fr };
