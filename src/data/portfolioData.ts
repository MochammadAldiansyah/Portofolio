import type { ProfileData, Project, TechItem, ExperienceItem } from '../types/portfolio';

export const profileData: ProfileData = {
  name: 'Mochammad Aldiansyah',
  tagline: 'Full-Stack & Mobile Developer',
  education: 'Teknik Informatika (S1) • Universitas Widyatama',
  status: 'Available for Engineering Roles & Projects',
  bio: 'Informatics engineering undergraduate focused on building end-to-end web platforms and mobile applications with resilient architecture, clean code, and Linux-driven workflows.',
  experienceStart: 'Active Developer',
  avatarUrl: '/avatar.svg',
  interests: [
    'Web Architecture',
    'Mobile Systems',
    'Linux Ecosystem',
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
    projectLinks: ['rpl-archive', 'periksa-id', 'journal']
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
    projectLinks: ['periksa-id', 'journal', 'pageturn', 'noekarta']
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
    projectLinks: ['periksa-id', 'journal', 'pageturn', 'bioguard', 'noekarta']
  },
  {
    name: 'PHP',
    category: 'backend',
    layer: 'backend',
    iconKey: 'php',
    color: '#777bb4',
    roleTag: 'Server Language',
    usageContext: 'Primary server-side language across all Laravel-based web platforms',
    projectLinks: ['periksa-id', 'journal', 'pageturn', 'bioguard', 'noekarta']
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
    projectLinks: ['periksa-id', 'journal', 'pageturn', 'noekarta']
  },
  {
    name: 'Eloquent ORM',
    category: 'backend',
    layer: 'database',
    iconKey: 'laravel',
    color: '#ef4444',
    roleTag: 'Laravel ORM',
    usageContext: 'Expressive relationships, query building, and migration-driven schema design',
    projectLinks: ['periksa-id', 'journal', 'pageturn', 'bioguard']
  },

  // infrastructure and devops layer
  {
    name: 'Docker',
    category: 'tools',
    layer: 'devops',
    iconKey: 'docker',
    color: '#0284c7',
    roleTag: 'Containerization',
    usageContext: 'Containerized local environments and consistent project setup',
    projectLinks: ['bioguard']
  },
  {
    name: 'Git',
    category: 'tools',
    layer: 'devops',
    iconKey: 'git',
    color: '#f97316',
    roleTag: 'Version Control',
    usageContext: 'Version control, feature branching, and repository management',
    projectLinks: ['periksa-id', 'journal', 'pageturn', 'bioguard', 'rpl-archive', 'noekarta']
  },
  {
    name: 'Vercel',
    category: 'tools',
    layer: 'devops',
    iconKey: 'vercel',
    color: '#0f172a',
    roleTag: 'Static Deployment',
    usageContext: 'Continuous deployment and global CDN delivery for web apps',
    projectLinks: ['rpl-archive']
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
    imageUrl: '/projects/noekarta.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Domain', value: 'noekarta.id' },
      { label: 'Stack', value: 'Laravel · Blade' },
      { label: 'Fokus', value: 'Jakarta Explorer' }
    ]
  },
  {
    id: 'periksa-id',
    title: 'periksa_id',
    subtitle: 'Platform Kesehatan Digital: Cari Dokter, Janji Temu & Order Obat',
    category: 'fullstack',
    summary: 'Aplikasi layanan kesehatan berbasis web yang menghubungkan pasien dengan dokter: pencarian dokter, penjadwalan janji temu, forum tanya-jawab, hingga pemesanan obat.',
    description: 'periksa_id adalah platform telemedicine sederhana yang mencakup modul pasien dan admin. Pasien dapat mencari dokter, membuat janji temu, berdiskusi di forum, dan memesan obat; admin mengelola dokter, pesanan, dan konten forum.',
    architecture: [
      'Backend Laravel dengan role & permission management (spatie/permission)',
      'Modul domain: Doctor, JanjiTemu, Medicine, Order, Forum Thread, dan Message',
      'Manajemen pesanan obat dengan penyimpanan koordinat (lat/long) untuk pengiriman',
      'Panel admin terpisah untuk kelola dokter, pesanan, dan forum',
      'Sistem autentikasi dengan profil dokter (alamat & lulusan)'
    ],
    stack: [
      'Laravel',
      'Blade',
      'PHP',
      'JavaScript',
      'MySQL',
      'RBAC (spatie/permission)'
    ],
    highlights: [
      'Alur lengkap pasien: cari dokter → janji temu → forum → order obat',
      'Manajemen peran Admin / Dokter / Pasien',
      'Integrasi lokasi untuk pengiriman pesanan obat'
    ],
    challenges: 'Merancang satu basis kode yang menampung banyak peran (admin, dokter, pasien) sekaligus menjaga alur data janji temu dan pesanan tetap konsisten.',
    role: 'Full-Stack Web Developer',
    githubUrl: 'https://github.com/MochammadAldiansyah/periksa_id',
    imageUrl: '/projects/periksa_id.png',
    imageFit: 'cover',
    featured: true,
    metrics: [
      { label: 'Domain Modul', value: 'Dokter · Obat · Forum' },
      { label: 'Akses', value: 'Multi-Role RBAC' },
      { label: 'Stack', value: 'Laravel Monolith' }
    ]
  },
  {
    id: 'journal',
    title: 'Journal',
    subtitle: 'Sistem Jurnal Mengajar & Absensi Guru',
    category: 'fullstack',
    summary: 'Aplikasi web untuk guru mengelola jurnal mengajar harian, mata pelajaran, kelas, dan absensi guru dalam satu dasbor terpusat.',
    description: 'Journal menjawab kebutuhan administrasi pengajaran: guru mencatat jurnal mengajar per kelas dan mata pelajaran, sementara sistem melacak absensi guru. Struktur data dirancang relasional untuk memudahkan rekap.',
    architecture: [
      'Backend Laravel dengan controller terpisah (Journal, Teacher, Subject, Classroom, Confirmation)',
      'Relasi domain: Teacher, Subject, Classroom, Journal, dan TeacherAbsence',
      'Manajemen peran (RBAC) untuk admin, guru, dan pengelola akademik',
      'Alur konfirmasi & rekap jurnal mengajar'
    ],
    stack: [
      'Laravel',
      'Blade',
      'PHP',
      'JavaScript',
      'MySQL',
      'RBAC (spatie/permission)'
    ],
    highlights: [
      'Jurnal mengajar harian per kelas & mata pelajaran',
      'Pencatatan absensi guru yang terintegrasi',
      'Struktur data relasional untuk rekap akademik'
    ],
    challenges: 'Memodelkan relasi guru–mata pelajaran–kelas–jurnal agar pencatatan harian tetap fleksibel tetapi mudah direkap.',
    role: 'Full-Stack Web Developer',
    githubUrl: 'https://github.com/MochammadAldiansyah/journal',
    imageUrl: '/projects/journal.png',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Modul', value: 'Jurnal & Absensi' },
      { label: 'Entitas Inti', value: 'Guru · Kelas · Mapel' },
      { label: 'Stack', value: 'Laravel Monolith' }
    ]
  },
  {
    id: 'pageturn',
    title: 'PageTurn',
    subtitle: 'Sistem Manajemen Perpustakaan Berbasis Web',
    category: 'fullstack',
    summary: 'Aplikasi manajemen perpustakaan modern untuk mendigitalkan peminjaman buku, mengelola katalog, dan memantau status pengembalian dengan hak akses Admin & User.',
    description: 'PageTurn memusatkan seluruh operasional perpustakaan: anggota dapat melihat katalog dan meminjam buku secara online, sedangkan admin mengelola data buku, anggota, dan sirkulasi peminjaman.',
    architecture: [
      'Backend Laravel dengan Role-Based Access Control (RBAC): Admin & User',
      'Dashboard admin berisi statistik buku, pengguna aktif, dan peminjaman berjalan',
      'Modul manajemen buku (library management) dan manajemen anggota',
      'Pelacakan status pengembalian & ketersediaan buku'
    ],
    stack: [
      'Laravel',
      'Blade',
      'PHP',
      'JavaScript',
      'MySQL'
    ],
    highlights: [
      'Dua peran jelas: Admin pengelola & User anggota',
      'Katalog buku + peminjaman online',
      'Dashboard statistik sirkulasi perpustakaan'
    ],
    challenges: 'Menjaga konsistensi status stok buku saat peminjaman dan pengembalian berlangsung bersamaan.',
    role: 'Full-Stack Web Developer',
    githubUrl: 'https://github.com/MochammadAldiansyah/PageTurn',
    imageUrl: '/projects/pageturn.png',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Akses', value: 'Admin & User' },
      { label: 'Fitur', value: 'Katalog & Peminjaman' },
      { label: 'Stack', value: 'Laravel · Blade' }
    ]
  },
  {
    id: 'bioguard',
    title: 'BioGuard',
    subtitle: 'Platform Konservasi Digital Berbasis Artificial Intelligence',
    category: 'fullstack',
    summary: 'Platform untuk memantau, melindungi, dan mendata keanekaragaman hayati secara real-time dengan dukungan kecerdasan artifisial.',
    description: 'BioGuard dibangun di atas Laravel 12 dan PHP 8.2+ sebagai platform konservasi digital. Tujuannya menjadi wadah terpusat untuk pendataan flora & fauna dan upaya perlindungan biodiversitas.',
    architecture: [
      'Backend Laravel 12 dengan PHP 8.2+',
      'Pendekatan AI-powered untuk analisis & pendataan biodiversitas',
      'Containerization (Docker) untuk lingkungan pengembangan yang konsisten',
      'Skrip shell & setup otomatis untuk tooling proyek'
    ],
    stack: [
      'Laravel 12',
      'PHP 8.2+',
      'Blade',
      'JavaScript',
      'Docker',
      'AI'
    ],
    highlights: [
      'Konsep konservasi biodiversitas dengan pendekatan AI',
      'Dibangun di atas Laravel 12 (versi terbaru)',
      'Lingkungan kontainer Docker untuk replikasi setup'
    ],
    challenges: 'Merancang fondasi platform konservasi yang skalabel sambil menyiapkan integrasi lapisan AI di atas Laravel modern.',
    role: 'Full-Stack Web Developer',
    githubUrl: 'https://github.com/MochammadAldiansyah/appBioGuard',
    imageUrl: '/projects/bioguard.png',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Framework', value: 'Laravel 12' },
      { label: 'Konsep', value: 'AI Conservation' },
      { label: 'Infra', value: 'Docker' }
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
    imageUrl: '/projects/rpl-archive.png',
    imageFit: 'cover',
    featured: false,
    metrics: [
      { label: 'Framework', value: 'Vue 3 + Vite' },
      { label: 'Gaya', value: 'Neo-Brutalist' },
      { label: 'SEO', value: 'OG · JSON-LD · Sitemap' }
    ]
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'edu-placeholder',
    period: '20XX - Sekarang',
    role: 'S1 Teknik Informatika',
    organization: 'Nama Universitas (isi sendiri)',
    badge: 'Pendidikan Formal',
    category: 'education',
    description:
      'Menempuh studi sarjana Teknik Informatika dengan pendalaman fundamental ilmu komputer, struktur data, algoritma, rekayasa perangkat lunak, dan pengembangan web. (Silakan sesuaikan bagian ini di src/data/portfolioData.ts.)',
    highlights: [
      'Fundamental Rekayasa Perangkat Lunak & Algoritma',
      'Pengembangan Web Full-Stack',
      'Basis Data & Pemodelan Data Relasional'
    ],
    tech: ['Algorithms', 'Software Engineering', 'Web Development', 'Database', 'System Design']
  },
  {
    id: 'exp-placeholder-1',
    period: 'Isi periode',
    role: 'Full-Stack Developer',
    organization: 'Nama pengalaman / organisasi / proyek',
    badge: 'Pengalaman',
    category: 'project',
    description:
      'Deskripsi singkat pengalaman Anda — apa yang dikerjakan, teknologi yang dipakai, dan dampaknya. (Silakan sesuaikan bagian ini di src/data/portfolioData.ts.)',
    highlights: [
      'Poin pencapaian utama',
      'Teknologi & tools yang digunakan',
      'Peran dalam tim / hasil yang dicapai'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Tailwind CSS']
  }
];
