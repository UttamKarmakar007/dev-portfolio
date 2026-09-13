import heroImage from '../assets/hero-uttam.png';
import aboutImage from '../assets/about-uttam.jpg';
import hcltechImage from '../assets/project-hcltech.png';
import innoraftImage from '../assets/project-innoraft.png';
import cumminsImage from '../assets/project-cummins.png';

export const portfolioData = {
  siteName: 'Uttam Karmakar',

  navigation: [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Experience', href: '#experience',},
    { label: 'Projects', href: '#projects' },
    { label: 'Skills', href: '#skills' },
    { label: 'Contact', href: '#contact' },
  ],

  hero: {
    kicker: 'Drupal Backend Developer',
    heading: "Hi, I'm Uttam Karmakar — a Drupal Backend Developer.",
    intro:
      'I build and maintain scalable Drupal solutions, with hands-on experience in migrations, custom module development, API integrations, and version upgrades. I also work closely with frontend teams to integrate backend functionality smoothly and optimize overall site performance.',
    availability: 'Open to Drupal opportunities',
    image: heroImage,
    imageAlt: 'Uttam Karmakar',
    primaryCta: { label: 'View projects', href: '#projects' },
    secondaryCta: { label: 'Contact me', href: '#contact' },
  },

about: {
  kicker: 'About',

  heading:
    'Backend development beyond just writing code.',

  body: [
    'I’m a Drupal Backend Developer with hands-on experience building and maintaining enterprise Drupal applications. My work spans Drupal migrations, custom module development, API and third-party integrations, version upgrades, and backend architecture.',

    'I also collaborate closely with frontend teams to connect Drupal functionality with the user interface, troubleshoot integration issues, and optimize overall application performance and maintainability.',
  ],

  points: [
    'Custom Module Development',
    'Drupal Migrations & Upgrades',
    'Component-Based Architecture',
    'Configuration Management Workflows',
    'REST API & Third-Party Integrations',
    'Headless Drupal with Next.js',
    'Performance & Backend Optimization',
  ],
},

  projectsSection: {
    kicker: 'Selected Work',
    heading: 'Projects I have worked on',
    intro:
      'A selection of enterprise Drupal work across development, migrations, architecture, maintenance, integrations, and production support.',
  },

  projects: [
    {
      title: 'HCLTech.com — Enterprise Drupal Platform',
      meta: 'Enterprise Website · Drupal Development & Maintenance',
      role: 'Backend Developer',
      summary:
        'Contributed to the development and maintenance of HCLTech.com as a Drupal Backend Developer, working across custom modules, feature development, data layer enhancements, component architecture, production support, and backend–frontend integrations.',
      technologies: [
        'Drupal',
        'PHP',
        'Twig',
        'MySQL',
        'Paragraphs',
        'Entity API',
        'Configuration API',
        'REST API',
        'Git',
        'Composer',
        'Drush',
      ],
      image: hcltechImage,
      imageAlt: 'HCLTech.com project graphic',
      link: 'https://www.hcltech.com/',
      linkLabel: 'Visit website',
    },
    {
      title: 'Innoraft.com — Drupal 9 to 10 Migration & Platform Revamp',
      meta: 'Corporate Website · Drupal Migration & Architecture',
      role: 'Lead Backend Developer',
      summary:
        'Led the migration and redevelopment of Innoraft.com from Drupal 9 to Drupal 10, owning the backend architecture, upgrade strategy, feature development, team collaboration, and stabilization of the upgraded platform.',
      technologies: [
        'Drupal 9',
        'Drupal 10',
        'PHP',
        'Twig',
        'MySQL',
        'Entity API',
        'Configuration API',
        'Paragraphs',
        'Views',
        'Composer',
        'Drush',
        'Git',
      ],
      image: innoraftImage,
      imageAlt: 'Innoraft.com project graphic',
      link: 'https://www.innoraft.com/',
      linkLabel: 'Visit website',
    },
    {
      title: 'Cummins India — Enterprise Drupal Website',
      meta: 'Enterprise Website · Drupal Backend Development & Maintenance',
      role: 'Backend Developer',
      summary:
        'Worked as a Drupal Backend Developer on the Cummins India website, handling backend maintenance, issue resolution, feature enhancements, and development changes to improve platform stability and existing functionality.',
      technologies: [
        'Drupal',
        'PHP',
        'Twig',
        'MySQL',
        'Entity API',
        'Configuration API',
        'Views',
        'Composer',
        'Drush',
        'Git',
      ],
      image: cumminsImage,
      imageAlt: 'Cummins India project graphic',
      link: 'https://www.cummins.com/en-in',
      linkLabel: 'Visit website',
    },
  ],

  skillsSection: {
    kicker: 'Technical Skills',
    heading: 'The Drupal stack I work with',
    intro:
      'My experience spans Drupal backend development, frontend collaboration, integrations, search, deployment workflows, and day-to-day development tooling.',
  },

  skillGroups: [
    {
      title: 'Drupal Development',
      description: 'Core Drupal APIs, architecture, and site-building tools.',
      skills: [
        'Drupal',
        'Custom Modules',
        'Entity API',
        'Database API',
        'Form API',
        'Configuration API',
        'Views',
        'Paragraphs',
      ],
    },
    {
      title: 'Backend & Integrations',
      description: 'Backend development, data handling, and external integrations.',
      skills: ['PHP', 'MySQL', 'REST API', 'JSON:API', 'Third-Party APIs', 'Data Layer'],
    },
    {
      title: 'Frontend Collaboration',
      description: 'Drupal rendering and component integration with frontend teams.',
      skills: ['Twig', 'JavaScript', 'jQuery', 'SCSS', 'Bootstrap', 'Component Architecture'],
    },
    {
      title: 'Tooling & Delivery',
      description: 'Local development, dependency management, source control, and deployment workflows.',
      skills: ['Git', 'Composer', 'Drush', 'Docker', 'DDEV', 'Configuration Management'],
    },
  ],

  contact: {
    kicker: 'Contact',
    heading: "Let's build something reliable.",
    intro:
      'Have a Drupal project, collaboration opportunity, or backend challenge in mind? Feel free to reach out. You can connect with me through email, phone, LinkedIn, GitHub, or my Drupal.org profile.',

    // Replace the placeholder values below with your real contact details.
    email: 'your-email@example.com',
    phone: '+91 XXXXX XXXXX',
    location: 'India',

    socialLinks: [
      { label: 'LinkedIn', href: 'https://www.linkedin.com/' },
      { label: 'GitHub', href: 'https://github.com/' },
      { label: 'Drupal.org', href: 'https://www.drupal.org/' },
    ],
  },
  experienceSection: {
  kicker: 'Experience',
  heading: 'My professional journey',
  intro:
    'My journey at Innoraft has progressed from an engineering internship to working as a full-time Software Developer on enterprise Drupal platforms.',
},

experience: [
  {
    company: 'Innoraft',
    companyUrl: 'https://www.linkedin.com/company/2238256/',
    location: 'Kolkata, West Bengal, India',
    workMode: 'On-site',
    totalDuration: '3+ years',

    roles: [
      {
        title: 'Software Developer',
        employmentType: 'Full-time',
        startDate: 'Sep 2023',
        endDate: 'Present',
        current: true,
        description:
          'Working as a Drupal Backend Developer across enterprise projects, contributing to custom module development, migrations, Drupal upgrades, API integrations, component architecture, feature development, production support, and backend–frontend collaboration.',
      },
      {
        title: 'Software Engineer Intern',
        employmentType: 'Internship',
        startDate: 'Jan 2023',
        endDate: 'Sep 2023',
        current: false,
        description:
          'Started my professional journey working on Drupal development, understanding enterprise development workflows, contributing to feature implementation, issue resolution, and building a strong foundation in Drupal backend development.',
      },
    ],
  },
],
};
