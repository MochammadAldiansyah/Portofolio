import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Mochammad Aldiansyah',
  tagline: 'Full-Stack Web Developer',
  education: 'Rekayasa Perangkat Lunak (RPL) - SMK Antartika 1 Sidoarjo',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Siswa Rekayasa Perangkat Lunak (RPL) di SMK Antartika 1 Sidoarjo dengan fokus pada pengembangan aplikasi web modern. Terbiasa membangun sistem backend dengan Laravel dan MySQL serta merancang antarmuka responsif dan interaktif.',
  experienceStart: 'Active Developer',
  avatarUrl: '/aldi.webp',
  interests: [
    'Web Architecture',
    'Backend Development',
    'Frontend Interfaces',
    'Software Reliability',
    'Reactive Interfaces'
  ],
  contact: {
    email: 'gakurealdi@gmail.com',
    github: 'https://github.com/MochammadAldiansyah',
    linkedin: '',
    location: 'Indonesia'
  }
};

export const techStackData: TechItem[] = [
  // client interface layer
  {
    name: 'Vue.js',
    category: 'frontend',
    layer: 'client',
    iconKey: 'vuedotjs',
    color: '#42b883',
    roleTag: 'Reactive UI',
    usageContext: 'Component-driven interfaces with Composition API and <script setup>',
    projectLinks: ['rpl-archive']
  },
  {
    name: 'JavaScript',
    category: 'frontend',
    layer: 'client',
    iconKey: 'javascript',
    color: '#eab308',
    roleTag: 'Scripting Core',
    usageContext: 'Core web scripting, DOM events, and interactive front-end behavior',
    projectLinks: ['rpl-archive', 'noekarta']
  },
  {
    name: 'Tailwind CSS v4',
    category: 'frontend',
    layer: 'client',
    iconKey: 'tailwindcss',
    color: '#06b6d4',
    roleTag: 'Design Tokens',
    usageContext: 'Utility-first styling, design tokens, and fluid responsive layouts',
    projectLinks: ['rpl-archive', 'noekarta']
  },
  {
    name: 'Blade',
    category: 'frontend',
    layer: 'client',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'Server-Side Template',
    usageContext: 'Server-rendered templating integrated tightly with Laravel',
    projectLinks: ['noekarta', 'bioguard']
  },

  // backend engine layer
  {
    name: 'Laravel',
    category: 'backend',
    layer: 'backend',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'MVC & REST Engine',
    usageContext: 'Robust MVC applications, REST APIs, authentication, RBAC, and transactions',
    projectLinks: ['noekarta', 'bioguard']
  },
  {
    name: 'PHP',
    category: 'backend',
    layer: 'backend',
    iconKey: 'php',
    color: '#777bb4',
    roleTag: 'Server Language',
    usageContext: 'Primary server-side language across all Laravel-based web platforms',
    projectLinks: ['noekarta', 'bioguard']
  },
  {
    name: 'Node.js',
    category: 'backend',
    layer: 'backend',
    iconKey: 'nodejs',
    color: '#22c55e',
    roleTag: 'Build Tooling',
    usageContext: 'Front-end build tooling and package management for Vite/Vue projects',
    projectLinks: ['rpl-archive']
  },

  // database and cloud persistence layer
  {
    name: 'MySQL',
    category: 'backend',
    layer: 'database',
    iconKey: 'mysql',
    color: '#0284c7',
    roleTag: 'Relational DB',
    usageContext: 'Relational data modeling, migrations, ACID transactions, and optimized indexing',
    projectLinks: ['noekarta', 'bioguard']
  },
  {
    name: 'Eloquent ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'Laravel ORM',
    usageContext: 'Expressive relationships, query building, and migration-driven schema design',
    projectLinks: ['noekarta', 'bioguard']
  }
];

export const projectsData: Project[] = [
  {
    id: 'noekarta',
    title: 'Noekarta',
    subtitle: 'Platform Interaktif untuk Mengenal & Menjelajahi Jakarta',
    category: 'fullstack',
    summary: 'Platform web interaktif yang mengajak pengguna mengenal dan menjelajahi Jakarta — mulai dari destinasi, budaya, hingga cerita khas ibu kota dalam satu pengalaman digital.',
    description: 'Noekarta dibangun sebagai media eksplorasi digital tentang Jakarta dengan pendekatan naratif dan visual. Terdiri dari halaman landing experience serta dashboard terautentikasi untuk mengelola konten.',
    architecture: [
      'Backend Laravel dengan arsitektur MVC dan Blade templating engine',
      'Sistem autentikasi & verifikasi akun (Laravel Breeze) untuk area dashboard',
      'Pemisahan bersih antara landing experience publik dan dashboard pengelola',
      'Aset visual interaktif dan tipografi tegas bergaya modern'
    ],
    stack: [
      'Laravel',
      'Blade',
      'PHP',
      'JavaScript',
      'Tailwind CSS',
      'MySQL'
    ],
    highlights: [
      'Live production di noekarta.id',
      'Landing experience publik + dashboard pengelola terautentikasi',
      'Konten budaya & destinasi Jakarta yang dikemas interaktif'
    ],
    challenges: 'Menyusun alur pengalaman eksplorasi yang menarik sekaligus tetap menjaga arsitektur Laravel yang rapi dan mudah dikembangkan.',
    role: 'Full-Stack Web Developer',
    demoUrl: 'https://www.noekarta.id/',
    githubUrl: 'https://github.com/MochammadAldiansyah/Noekarta',
    imageUrl: '/projects/noekarta.webp',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Domain', value: 'noekarta.id' },
      { label: 'Stack', value: 'Laravel · Blade' },
      { label: 'Fokus', value: 'Jakarta Explorer' }
    ]
  },
  {
    id: 'rpl-archive',
    title: 'RPL Archive',
    subtitle: 'Website Kelas 12 RPL Bergaya Neo-Brutalist',
    category: 'fullstack',
    summary: 'Website resmi kelas 12 Rekayasa Perangkat Lunak dengan gaya Brutalist/Neo-Brutalist: kontras tinggi, border tebal, dan tipografi raksasa.',
    description: 'RPL Archive adalah arsip digital kelas 12 RPL. Dibangun dengan Vue 3 Composition API dan Vite, lengkap dengan routing, SEO (Open Graph, JSON-LD, sitemap otomatis), serta sentuhan desain neo-brutalist.',
    architecture: [
      'Frontend Vue 3 (Composition API, <script setup>) dengan Vite 6',
      'Styling Tailwind CSS v4 memakai @theme tokens (tanpa tailwind.config.js)',
      'Routing Vue Router 4 dan smooth scroll Lenis',
      'SEO lengkap: canonical, Open Graph, Twitter Card, JSON-LD, sitemap otomatis',
      'Metadata PWA via site.webmanifest'
    ],
    stack: [
      'Vue 3',
      'Vite',
      'Tailwind CSS v4',
      'JavaScript',
      'Vue Router',
      'Lenis'
    ],
    highlights: [
      'Live demo di orang-orangan-erpeel.vercel.app',
      'Desain neo-brutalist yang khas dan mencolok',
      'SEO & PWA yang matang (sitemap otomatis, JSON-LD)'
    ],
    challenges: 'Menyelaraskan gaya neo-brutalist yang ekspresif dengan kualitas teknis (SEO, performa build, dan struktur komponen Vue yang bersih).',
    role: 'Frontend Developer',
    demoUrl: 'https://orang-orangan-erpeel.vercel.app',
    githubUrl: 'https://github.com/MochammadAldiansyah/rpl-archive',
    imageUrl: '/projects/rpl-archive.webp',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Framework', value: 'Vue 3 + Vite' },
      { label: 'Gaya', value: 'Neo-Brutalist' },
      { label: 'SEO', value: 'OG · JSON-LD · Sitemap' }
    ]
  },
  {
    id: 'bioguard',
    title: 'BioGuard',
    subtitle: 'Platform Konservasi Digital Berbasis Artificial Intelligence',
    category: 'fullstack',
    summary: 'Platform untuk memantau, melindungi, dan mendata keanekaragaman hayati secara real-time dengan dukungan kecerdasan artifisial.',
    description: 'BioGuard dibangun di atas Laravel 12 dan PHP 8.2+ sebagai platform konservasi digital. Tujuannya menjadi wadah terpusat untuk pendataan flora & fauna serta upaya perlindungan biodiversitas.',
    architecture: [
      'Backend Laravel 12 dengan PHP 8.2+',
      'Pendekatan AI-powered untuk analisis & pendataan biodiversitas',
      'Pemisahan bersih antara lapisan data, logika bisnis, dan antarmuka',
      'Struktur proyek Laravel modern yang siap dikembangkan'
    ],
    stack: [
      'Laravel 12',
      'PHP 8.2+',
      'Blade',
      'JavaScript',
      'MySQL',
      'AI'
    ],
    highlights: [
      'Konsep konservasi biodiversitas dengan pendekatan AI',
      'Dibangun di atas Laravel 12 (versi terbaru)',
      'Pendataan flora & fauna terpusat'
    ],
    challenges: 'Merancang fondasi platform konservasi yang skalabel sambil menyiapkan integrasi lapisan AI di atas Laravel modern.',
    role: 'Full-Stack Web Developer',
    demoUrl: 'https://dinacom-app-707456965645.asia-southeast2.run.app/',
    githubUrl: 'https://github.com/MochammadAldiansyah/appBioGuard',
    imageUrl: '/projects/bioguard.webp',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Framework', value: 'Laravel 12' },
      { label: 'Konsep', value: 'AI Conservation' },
      { label: 'Stack', value: 'PHP · Blade' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
    {
    id: 'edu-sdn-sumorame',
    period: '2014 - 2021',
    role: 'Sekolah Dasar',
    organization: 'SDN Sumorame Sidoarjo',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh pendidikan dasar di SDN Sumorame Sidoarjo, membangun fondasi pembelajaran awal dan rasa ingin tahu terhadap teknologi.',
    highlights: [
      'Fondasi pendidikan dasar',
      'Pengenalan awal teknologi'
    ],
    tech: ['Dasar Pembelajaran']
  },
   {
    id: 'edu-smp-pgri',
    period: '2021 - 2024',
    role: 'Sekolah Menengah Pertama',
    organization: 'SMP PGRI 10 Candi Sidoarjo',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh pendidikan menengah pertama di SMP PGRI 10 Candi Sidoarjo sebagai fondasi dasar sebelum melanjutkan ke jenjang kejuruan Rekayasa Perangkat Lunak.',
    highlights: [
      'Fondasi akademik dasar',
      'Awal ketertarikan pada teknologi & komputer'
    ],
    tech: ['Dasar Komputer', 'Teknologi Informasi']
  },
  {
    id: 'edu-smk-antartika',
    period: '2024 - Sekarang',
    role: 'Rekayasa Perangkat Lunak (RPL)',
    organization: 'SMK Antartika 1 Sidoarjo',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh pendidikan kejuruan Rekayasa Perangkat Lunak dengan fokus pada pengembangan aplikasi web modern. Terbiasa membangun sistem backend menggunakan Laravel dan MySQL serta merancang antarmuka yang responsif dan interaktif.',
    highlights: [
      'Fokus Pengembangan Aplikasi Web Modern',
      'Backend Laravel & Manajemen Database MySQL',
      'Antarmuka responsif dengan React.js & Tailwind CSS'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'React.js', 'JavaScript', 'Tailwind CSS']
  },
  {
    id: 'project-bioguard',
    period: '2026',
    role: 'Full-Stack Web Developer',
    organization: 'BioGuard — Platform Konservasi Digital Berbasis AI',
    badge: 'Project',
    category: 'project',
    description:
      'Platform konservasi digital inovatif yang memanfaatkan AI untuk memantau, melindungi, dan mendata keanekaragaman hayati secara real-time. Mengintegrasikan Computer Vision untuk identifikasi spesies dan analisis data lingkungan berbasis satelit.',
    highlights: [
      'Integrasi Computer Vision untuk Identifikasi Spesies',
      'Analisis Data Lingkungan Berbasis Satelit',
      'Deployment ke Platform Cloud',
      'Solusi pemantauan lingkungan real-time yang lebih cepat & murah'
    ],
    tech: ['Laravel', 'PHP', 'Artificial Intelligence', 'Computer Vision', 'MySQL', 'Cloud Deployment']
  },
  {
    id: 'project-noekarta',
    period: '2026',
    role: 'Full-Stack Web Developer',
    organization: 'Noekarta — Platform Interaktif Mengenal & Menjelajahi Jakarta',
    badge: 'Project',
    category: 'project',
    description:
      'Platform web interaktif yang mengajak pengunjung menyusuri sejarah Jakarta, mengenal budaya Betawi, menemukan kuliner khas, serta mengeksplorasi landmark kota lewat peta interaktif dan Street View.',
    highlights: [
      'Integrasi Peta Interaktif & Street View',
      'Integrasi data berbasis JSON',
      'Pengujian & deployment ke platform cloud',
      'Live production di noekarta.id'
    ],
    tech: ['Laravel', 'PHP', 'JavaScript', 'MySQL', 'Tailwind CSS', 'Interactive Maps']
  }
 
];
