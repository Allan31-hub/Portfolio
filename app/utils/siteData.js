
export const siteData = {
  person: {
    name: 'Allan MUSQUET',
    title: {
      fr: 'Systèmes, réseaux et Cloud',
      en: 'Systems, Networks & Cloud',
    },
    location: {
      fr: 'Bordeaux, France',
      en: 'Bordeaux, France',
    },
    email: 'allan.musquet.971@gmail.com',
    phone: '06 90 34 98 61',
    avatar: '/images/Avatar.jpg',
    socials: [
      {
        label: 'LinkedIn',
        href: 'https://www.linkedin.com/in/allan-musquet-ab62aa355?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app',
      },
      { label: 'GitHub', href: 'https://github.com/Allan31-hub' },
    ],
  },

  hero: {
    headline: {
      fr: 'Étudiant Bachelor 2 à Sup de Vinci en Systèmes, Réseaux et Cloud',
      en: 'Bachelor 2 student at Sup de Vinci in Systems, Networks & Cloud',
    },
    sub: {
      fr: 'Portfolio type CV — Projets, Compétences, Expérience, Contact.',
      en: 'CV-style portfolio — Projects, Skills, Experience, Contact.',
    },
    ctas: [
      { label: { fr: 'Voir mes projets', en: 'View my projects' }, href: '#portfolio' },
      { label: { fr: 'Me contacter', en: 'Contact me' }, href: '#contact', variant: 'ghost' },
    ],
    cvImage: '/images/CV.png',
  },

  aboutText: {
    intro: {
      fr: `Étant passionné d'informatique depuis mon adolescence, après mon BTS CIEL, j’ai pris l’avion pour continuer mes études
à Bordeaux. Ce changement de vie montre une certaine maturité et fait preuve d'une rapide adaptation à mon environnement. Actuellement à
la recherche d'une alternance pour mon année de B3, je continue d'apprendre et de pratiquer pour devenir meilleur.`,
      en: `Passionate about IT since my teenage years, after my BTS CIEL I moved to Bordeaux to continue my studies.
This life change shows maturity and a strong ability to adapt to a new environment.
I am currently looking for a work-study program for my B3 year, and I keep learning and practicing to improve every day.`,
    },
    facts: [
      {
        k: { fr: 'Expérience', en: 'Experience' },
        v: { fr: 'Projets perso + stage', en: 'Personal projects + internship' },
      },
      {
        k: { fr: 'Spécialités', en: 'Focus' },
        v: { fr: 'Électronique, réseaux & cloud', en: 'Electronics, networking & cloud' },
      },
      {
        k: { fr: 'Disponibilité', en: 'Availability' },
        v: { fr: 'Alternance B3 / Missions', en: 'Work-study B3 / Missions' },
      },
    ],
  },

  services: [
    {
      title: { fr: 'Programmation', en: 'Programming' },
      desc: { fr: 'Programmation en C, C#, Python, Java.', en: 'Programming in C, C#, Python, Java.' },
    },
    {
      title: { fr: 'Dépannage électronique de deuxième niveau', en: 'Level-2 electronics troubleshooting' },
      desc: {
        fr: 'Création de carte électronique (PCB), soudure, gestion de circuits électriques.',
        en: 'PCB design, soldering, and electrical circuit troubleshooting.',
      },
    },
  ],

  resume: {
    experience: [
      {
        title: { fr: 'Stage', en: 'Internship' },
        place: { fr: 'CNFPT Guadeloupe', en: 'CNFPT Guadeloupe' },
        period: { fr: '2024', en: '2024' },
        bullets: [
          {
            fr: 'Déploiement de postes, image maître, dépannage réseau.',
            en: 'Workstation deployment, master image, network troubleshooting.',
          },
          {
            fr: 'Mise en place d’un serveur de secours (space server).',
            en: 'Set up a backup server (space server).',
          },
          {
            fr: 'Support et accompagnement utilisateurs.',
            en: 'User support and assistance.',
          },
        ],
      },
    ],
    education: [
      //formation actuelle
      {
        title: { fr: 'SUP DE VINCI — achelor 2', en: 'SUP DE VINCI — Bachelor 2' },
        place: { fr: 'Formation en cours', en: 'Ongoing education' },
        period: { fr: '2025 - 2026', en: '2025 - 2026' },
        bullets: [
          { fr: 'Systèmes, Réseaux & Clouds', en: 'Systems, Networks & Cloud' },
        ],
      },

      // formation précédente
      {
        title: { fr: 'Les Perseverants — BTS CIEL', en: 'Les Perseverants — BTS CIEL' },
        place: { fr: 'Formation', en: 'Education' },
        period: { fr: '2024 - 2025', en: '2024 - 2025' },
        bullets: [{ fr: 'Cybersécurité, Informatique, Électronique, Réseaux.', en: 'Cybersecurity, IT, Electronics, Networks.' }],
      },
    ],
  },

  skills: [
    { label: { fr: 'Électronique', en: 'Electronics' }, value: 80 },
    { label: { fr: 'Python', en: 'Python' }, value: 75 },
    { label: { fr: 'Langage C', en: 'C' }, value: 70 },
    { label: { fr: 'Réseaux', en: 'Networking' }, value: 70 },
    { label: { fr: 'Sécurité', en: 'Security' }, value: 65 },
    { label: { fr: 'Langage C#', en: 'C#' }, value: 60 },
    { label: { fr: 'Linux', en: 'Linux' }, value: 60 },
    { label: { fr: 'Nuxt / Vue', en: 'Nuxt / Vue' }, value: 55 },
    { label: { fr: 'JavaScript', en: 'JavaScript' }, value: 50 },
  ],

  portfolio: [
    {
      id: 'p1',
      title: { fr: 'Domotic', en: 'Home Automation' },
      category: {
        fr: 'Automatisation de modules',
        en: 'Module automation',
      },
      tags: [
        { fr: 'Électronique', en: 'Electronics' },
        { fr: 'Programmation Python', en: 'Python programming' },
        { fr: 'Travail en équipe', en: 'Teamwork' },
      ],
      image: '/images/keystudio house.jpg',
      desc: {
        fr: 'Automatisation de modules (ventilateur, capteur de gaz, bouton, écran d’affichage).',
        en: 'Module automation (fan, gas sensor, button, display screen).',
      },
      links: [{ label: { fr: 'Télécharger PDF', en: 'Download PDF' }, href: '/docs/Domotic.pdf', download: true }],
    },
    {
      id: 'p2',
      title: { fr: 'Ruche connectée', en: 'Connected Beehive' },
      category: {
        fr: 'Communication radio avec carte électronique',
        en: 'Radio communication with electronic board',
      },
      tags: [
        { fr: 'Électronique', en: 'Electronics' },
        { fr: 'Programmation C', en: 'C programming' },
        { fr: 'Soudure', en: 'Soldering' },
        { fr: 'Travail en équipe', en: 'Teamwork' },
      ],
      image: '/images/LoRa.png',
      desc: {
        fr: 'Gestion de la partie communication LoRaWAN au sein du projet de ruche connectée.',
        en: 'Handling the LoRaWAN communication part of the connected beehive project.',
      },
      links: [{ label: { fr: 'Télécharger PDF', en: 'Download PDF' }, href: '/docs/DT_ALLAN.pdf', download: true }],
    },
    {
      id: 'p3',
      title: { fr: 'Jeu RPG — gestion de guilde', en: 'RPG Guild Management Game' },
      category: { fr: 'Programmation', en: 'Programming' },
      tags: [
        { fr: 'Programmation C#', en: 'C# programming' },
        { fr: 'Jeu RPG de gestion', en: 'Management RPG' },
      ],
      image: '/images/C.webp',
      desc: {
        fr: 'Dépôt de projet visant à démontrer mes expériences et compétences.',
        en: 'Project repository showcasing my experience and skills.',
      },
      links: [{ label: { fr: 'GitHub', en: 'GitHub' }, href: 'https://github.com/Allan31-hub/GuildGame' }],
    },
  ],
}
