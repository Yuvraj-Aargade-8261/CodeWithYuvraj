// ===== PROJECT DATA STORE — CodeWithYuvraj =====
// Centralised project metadata. Each key matches the ?id= query param.

const PROJECT_DATA = {

  /* ═══════════════════════════════════════════════════════════════
   *  BLOOD BANK — LifeFlow
   * ═══════════════════════════════════════════════════════════════ */
  'blood-bank': {
    // ── Hero / Header ──
    name: 'LifeFlow — Blood Bank & Donor Management System',
    tagline: 'Full-Stack Web Application | Production-Ready | Live Deployed',
    heroEmoji: '🩸',
    accentColor: '#ef4444',
    accentGradient: 'linear-gradient(135deg, #ef4444, #dc2626)',
    image: 'assets/images/bloodbank.png',
    price: { current: 1999, old: 3999, discount: '50% OFF' },
    category: 'web',

    // ── Overview ──
    overview: `<strong>LifeFlow</strong> is a full-stack blood donation management platform that connects blood donors with patients in need. The application provides a complete ecosystem for donor registration, smart donor search, real-time blood request workflows, and privacy-controlled contact sharing — all wrapped in a modern, animated, and fully responsive UI.<br><br>This is <strong>not a template or starter project</strong> — it is a fully functional, production-deployed web application with real authentication, real-time database, and a polished user experience ready for immediate use.`,

    // ── Target Audience ──
    audience: [
      { icon: '🎓', title: 'College Students', desc: 'Final year project / Mini project submission with full documentation' },
      { icon: '💼', title: 'Freelance Developers', desc: 'Client-ready blood bank solution to deploy and customize' },
      { icon: '🏢', title: 'Startups / NGOs', desc: 'Launch a blood donation platform instantly' },
      { icon: '📂', title: 'Portfolio Builders', desc: 'Showcase a real-world full-stack project in your portfolio' }
    ],

    // ── Key Features (concise, icon-driven) ──
    features: [
      {
        icon: '👥',
        title: 'Dual Role System',
        desc: 'Two dedicated user experiences — <strong>Blood Donor</strong> (manage availability, approve requests) and <strong>Requester</strong> (search donors, send requests, receive contacts upon approval).'
      },
      {
        icon: '🔐',
        title: 'Auth & Role-Based Access',
        desc: 'Email/password registration, persistent sessions, role-gated dashboards, and automatic redirection for unauthorized users.'
      },
      {
        icon: '📝',
        title: '6-Step Registration Wizard',
        desc: 'Guided signup collecting 30+ fields — role selection, personal info, location (12 cities), blood/health data for donors, patient/hospital details for requesters.'
      },
      {
        icon: '🔍',
        title: 'Smart Donor Search',
        desc: 'Multi-filter search by <strong>blood group</strong>, <strong>city</strong>, and <strong>area</strong> across 80+ localities. Donor profiles visible, but contacts stay hidden until request approval.'
      },
      {
        icon: '📨',
        title: 'Request Workflow & Privacy',
        desc: 'Complete lifecycle — Send → Pending → Approve/Decline → Contact Revealed. Donor contact info is <strong>never exposed</strong> until they explicitly approve.',
        callout: '🔒 <strong>Privacy First:</strong> Contact details are revealed only after donor consent.'
      },
      {
        icon: '🩸',
        title: 'Donor & Requester Dashboards',
        desc: 'Full dashboards for both roles — <strong>donors</strong> toggle availability, manage incoming requests, and track donation stats. <strong>Requesters</strong> track requests, view approvals, and access revealed contacts.'
      },
      {
        icon: '🧬',
        title: 'Blood Compatibility Guide',
        desc: 'Interactive page to explore the <strong>8×8 compatibility matrix</strong>, see who can donate to whom, and learn about universal donors (O−) and recipients (AB+).'
      },
      {
        icon: '📚',
        title: 'Educational Content & Contact',
        desc: 'Eligibility criteria cards, rotating blood facts ticker, accordion FAQ, working contact form saved to database, About page with team profiles and milestone timeline.'
      }
    ],


    // ── Design & UX highlights (trimmed to top 6) ──
    designHighlights: [
      { icon: '🌑', text: 'Dark glassmorphism theme with vibrant gradient accents' },
      { icon: '✨', text: 'Animated orbs, counters, and smooth page transitions' },
      { icon: '📱', text: 'Fully responsive — desktop, tablet, and mobile optimized' },
      { icon: '🎯', text: 'Role-based dashboards with sidebar navigation' },
      { icon: '🏷️', text: 'Color-coded urgency levels and status badges' },
      { icon: '📊', text: 'Multi-step form wizard with visual progress indicator' }
    ],

    // ── Locations ──
    locations: {
      desc: 'Pre-configured with <strong>12 major Indian cities</strong> and <strong>80+ areas/localities</strong>:',
      cities: 'Mumbai • Delhi • Bangalore • Hyderabad • Chennai • Kolkata • Pune • Ahmedabad • Jaipur • Lucknow • Nagpur • Nashik',
      note: 'Each city includes 5–10 locality options for precise donor-requester matching. Additional cities and areas can be easily added.'
    },

    // ── Platform Stats ──
    statsTable: [
      { label: 'Total Screens', value: '15 unique pages' },
      { label: 'User Roles', value: '2 (Donor + Requester)' },
      { label: 'Blood Groups Supported', value: '8' },
      { label: 'Cities Covered', value: '12' },
      { label: 'Areas / Localities', value: '80+' },
      { label: 'Registration Fields', value: '30+ (role-specific)' },
      { label: 'Request Statuses', value: '3 (Pending, Approved, Declined)' },
      { label: 'Urgency Levels', value: '3 (Normal, Emergency, Critical)' }
    ],

    // ── What You Get (trimmed to 6 key items) ──
    deliverables: [
      'Complete working source code with 15 pages',
      'Two role-based dashboards (Donor + Requester)',
      'Real auth, real-time database & live deployment',
      'Smart search, request workflow & privacy controls',
      'Responsive, animated, premium UI design',
      'Clean codebase — easy to customize & extend'
    ],

    // ── What Makes It Stand Out (trimmed to 4) ──
    standout: [
      { title: 'Two Complete Dashboards', desc: 'Both donor and requester have full, dedicated experiences — dashboards, profiles, and workflows.' },
      { title: 'Real Backend, Not Mock Data', desc: 'Real auth + real-time database. No hardcoded data — production-deployed and demo-ready.' },
      { title: 'Privacy-Controlled Contacts', desc: 'Donor info stays hidden until they approve a request — a critical real-world feature.' },
      { title: 'Beautiful, Modern UI', desc: 'Custom glassmorphism, gradients, animations — not a generic Bootstrap template.' }
    ],

    // ── Pages Included (grouped by access role) ──
    pages: [
      { num: 1, name: 'Home (Landing Page)', access: 'Public', icon: '🏠' },
      { num: 2, name: 'Who Can Donate', access: 'Public', icon: '❓' },
      { num: 3, name: 'Blood Group Compatibility', access: 'Public', icon: '🧬' },
      { num: 4, name: 'Request Blood Info', access: 'Public', icon: '📄' },
      { num: 5, name: 'Register (6-Step Wizard)', access: 'Public', icon: '📝' },
      { num: 6, name: 'Login', access: 'Public', icon: '🔑' },
      { num: 7, name: 'About Us', access: 'Public', icon: 'ℹ️' },
      { num: 8, name: 'Contact Us', access: 'Public', icon: '📞' },
      { num: 9, name: 'Donor Dashboard', access: 'Donor Only', icon: '📊' },
      { num: 10, name: 'Incoming Blood Requests', access: 'Donor Only', icon: '📨' },
      { num: 11, name: 'Donor Profile', access: 'Donor Only', icon: '👤' },
      { num: 12, name: 'Requester Dashboard', access: 'Requester Only', icon: '📊' },
      { num: 13, name: 'Find Blood Donors', access: 'Requester Only', icon: '🔍' },
      { num: 14, name: 'My Requests (Track & Contact)', access: 'Requester Only', icon: '📋' },
      { num: 15, name: 'Requester Profile', access: 'Requester Only', icon: '👤' }
    ],

    // ── Footer tagline ──
    footerTagline: 'Built with ❤️ to save lives through technology.'
  },

  /* ═══════════════════════════════════════════════════════════════
   *  DRIVEEASE — Premium Car Rental Platform
   * ═══════════════════════════════════════════════════════════════ */
  'driveease': {
    // ── Hero / Header ──
    name: 'DriveEase — Premium Car Rental Platform',
    tagline: 'Full-Stack Web Application | Production-Ready | Live Deployed',
    heroEmoji: '🚗',
    accentColor: '#D4AF37',
    accentGradient: 'linear-gradient(135deg, #D4AF37, #b8962e)',
    image: 'assets/images/driveease.png',
    price: { current: 1999, old: 3999, discount: '50% OFF' },
    category: 'web',

    // ── Overview ──
    overview: `<strong>DriveEase</strong> is a full-stack online car rental platform that allows users to browse a premium fleet of vehicles, check real-time availability, and complete end-to-end bookings with a seamless multi-step workflow. The application features a two-part architecture: a <strong>public-facing marketing site</strong> for visitors and a <strong>private, auth-protected dashboard</strong> for registered users — all wrapped in a luxury dark-theme UI with gold accents and polished animations.<br><br>This is <strong>not a template or starter project</strong> — it is a fully functional, production-deployed web application with real Firebase authentication, real-time Firestore database, and a premium user experience ready for immediate use.`,

    // ── Target Audience ──
    audience: [
      { icon: '🎓', title: 'College Students', desc: 'Final year project / Mini project submission with full documentation' },
      { icon: '💼', title: 'Freelance Developers', desc: 'Client-ready car rental solution to deploy and customize' },
      { icon: '🏢', title: 'Startups / Agencies', desc: 'Launch a premium car rental business platform instantly' },
      { icon: '📂', title: 'Portfolio Builders', desc: 'Showcase a real-world full-stack project in your portfolio' }
    ],

    // ── Key Features (concise, 8 cards) ──
    features: [
      {
        icon: '🏗️',
        title: 'Two-Part Architecture',
        desc: '<strong>Public site</strong> (hero, fleet, car details, about, contact, auth) for visitors + <strong>Private dashboard</strong> (bookings, profile, favorites, settings) for logged-in users — each with its own navigation.'
      },
      {
        icon: '🔐',
        title: 'Firebase Auth & Route Protection',
        desc: 'Email/password registration, persistent sessions, role-based route guards, auth-aware dynamic navbar, Firestore user profiles, and toast error handling.'
      },
      {
        icon: '🚗',
        title: 'Premium 12-Car Fleet',
        desc: '<strong>12 vehicles</strong> across 5 categories (Luxury, SUV, Sedan, Electric, Hatchback) with 20+ data fields each — specs, images, features, and performance metrics.'
      },
      {
        icon: '🔍',
        title: 'Smart Search & Filtering',
        desc: 'Filter by <strong>category</strong>, <strong>price</strong>, <strong>transmission</strong>, <strong>fuel type</strong>, and <strong>seats</strong>. Sort by featured, price, rating, or newest. Real-time text search included.'
      },
      {
        icon: '📝',
        title: '4-Step Booking Wizard',
        desc: 'Trip details → Car selection → Personal info & 6 add-ons (GPS, insurance, WiFi, etc.) → Review & confirm. <strong>Live price calculator</strong> updates in real-time.',
        callout: '💰 <strong>Live Pricing:</strong> Total updates instantly as users change dates, cars, or add-ons.'
      },
      {
        icon: '📊',
        title: 'Full User Dashboard',
        desc: '5-tab dashboard — <strong>Overview</strong> (stats, timeline), <strong>Bookings</strong> (filter/cancel), <strong>Favorites</strong> (saved cars), <strong>Profile</strong> (edit info), <strong>Settings</strong> (theme, notifications, account).'
      },
      {
        icon: '📖',
        title: 'Rich Car Detail Pages',
        desc: 'Image gallery with thumbnails, full spec table, 8 feature highlights, star ratings, "Book This Car" CTA, and auto-generated similar car recommendations.'
      },
      {
        icon: '📞',
        title: 'Contact, About & 404',
        desc: 'Working contact form (Firestore), company story & team profiles, animated stats banner, milestone timeline, and a branded custom 404 error page.'
      }
    ],

    // ── Design & UX highlights (top 6) ──
    designHighlights: [
      { icon: '✨', text: 'Dark luxury theme with gold gradient accents (#D4AF37)' },
      { icon: '🔤', text: 'Premium typography — Playfair Display + DM Sans' },
      { icon: '🎭', text: 'Glassmorphism cards, scroll reveals, and page transitions' },
      { icon: '📱', text: 'Fully responsive — desktop, tablet, and mobile optimized' },
      { icon: '🌗', text: 'Dark/Light theme toggle persisted in localStorage' },
      { icon: '🔔', text: 'Toast notification system — success, error, warning, info' }
    ],

    // ── Locations ──
    locations: {
      desc: 'Pre-configured with <strong>8 major Indian cities</strong> for pickup and drop-off:',
      cities: 'Mumbai • Delhi • Bangalore • Chennai • Hyderabad • Pune • Kolkata • Goa',
      note: 'Each location is available in the smart search bar, booking wizard, and car availability system. Additional cities can be easily added.'
    },

    // ── Platform Stats ──
    statsTable: [
      { label: 'Total Screens', value: '11 unique pages' },
      { label: 'User Roles', value: '2 (Public + Registered)' },
      { label: 'Cars in Fleet', value: '12 premium vehicles' },
      { label: 'Car Categories', value: '5' },
      { label: 'Cities Covered', value: '8' },
      { label: 'Booking Add-ons', value: '6 optional extras' },
      { label: 'Dashboard Tabs', value: '5' },
      { label: 'Booking Steps', value: '4-step wizard' }
    ],

    // ── What You Get (6 key items) ──
    deliverables: [
      'Complete source code with 11 pages + dark/light theme',
      'Real Firebase auth, Firestore DB & live deployment',
      '12 premium cars with 20+ data fields each',
      '4-step booking wizard with live pricing calculator',
      'Full dashboard (5 tabs) + booking management',
      'Responsive, animated, luxury UI — easy to customize'
    ],

    // ── What Makes It Stand Out (4) ──
    standout: [
      { title: 'Two-Part Architecture', desc: 'Complete public marketing site AND private user dashboard — not just a landing page.' },
      { title: 'Real Firebase Backend', desc: 'Firebase Auth + Firestore for real accounts, real bookings, and real data. No hardcoded data.' },
      { title: '4-Step Booking Wizard', desc: 'Multi-step form with progress indicator, live pricing, add-on selection, and booking summary.' },
      { title: 'Premium Luxury UI', desc: 'Custom dark theme with gold accents, glassmorphism, Playfair Display typography, and scroll animations.' }
    ],

    // ── Pages Included (grouped by access) ──
    pages: [
      { num: 1, name: 'Home (Landing Page)', access: 'Public', icon: '🏠' },
      { num: 2, name: 'Our Fleet (Car Listings)', access: 'Public', icon: '🚗' },
      { num: 3, name: 'Car Detail', access: 'Public', icon: '📖' },
      { num: 4, name: 'About Us', access: 'Public', icon: 'ℹ️' },
      { num: 5, name: 'Contact Us', access: 'Public', icon: '📞' },
      { num: 6, name: 'Login / Register', access: 'Public', icon: '🔑' },
      { num: 7, name: '404 Error Page', access: 'Public', icon: '🚫' },
      { num: 8, name: 'User Dashboard (5 Tabs)', access: 'Private', icon: '📊' },
      { num: 9, name: 'Book a Car (4-Step Wizard)', access: 'Private', icon: '📝' },
      { num: 10, name: 'My Bookings', access: 'Private', icon: '📋' },
      { num: 11, name: 'Booking Confirmation', access: 'Private', icon: '✅' }
    ],

    // ── Footer tagline ──
    footerTagline: 'Built with ❤️ to deliver luxury on every journey.'
  },

  /* ═══════════════════════════════════════════════════════════════
   *  FITTRACK PRO — Premium Fitness Tracking Platform
   * ═══════════════════════════════════════════════════════════════ */
  'fittrack': {
    // ── Hero / Header ──
    name: 'FitTrack Pro — Premium Fitness Tracking Platform',
    tagline: 'Full-Stack Web Application | Production-Ready | Live Deployed',
    heroEmoji: '💪',
    accentColor: '#6c5ce7',
    accentGradient: 'linear-gradient(135deg, #6c5ce7, #00cec9)',
    image: 'assets/images/fittrack.png',
    price: { current: 1999, old: 3999, discount: '50% OFF' },
    category: 'web',

    // ── Overview ──
    overview: `<strong>FitTrack Pro</strong> is a full-stack fitness tracking and health management platform that allows users to log workouts, track nutrition, monitor body metrics, set personalized fitness goals, and visualize their progress with interactive charts — all within a seamless, data-driven workflow. The application features a two-part architecture: a <strong>public-facing marketing site</strong> for visitors and a <strong>private, auth-protected dashboard</strong> for registered users — all wrapped in a premium "Midnight Pulse" dark-theme UI with violet-teal gradient accents and polished animations.<br><br>This is <strong>not a template or starter project</strong> — it is a fully functional, production-deployed web application with real Firebase authentication, real-time Firestore database, Chart.js analytics, and a premium user experience ready for immediate use.`,

    // ── Target Audience ──
    audience: [
      { icon: '🎓', title: 'College Students', desc: 'Final year project / Mini project submission with full documentation' },
      { icon: '💼', title: 'Freelance Developers', desc: 'Client-ready fitness tracking solution to deploy and customize' },
      { icon: '🏢', title: 'Startups / Agencies', desc: 'Launch a premium health & fitness platform instantly' },
      { icon: '📂', title: 'Portfolio Builders', desc: 'Showcase a real-world full-stack project in your portfolio' }
    ],

    // ── Key Features (concise, 8 cards) ──
    features: [
      {
        icon: '🏗️',
        title: 'Two-Part Architecture',
        desc: '<strong>Public site</strong> (hero, features, testimonials, auth) for visitors + <strong>Private dashboard</strong> (workouts, diet, analytics, goals, profile) for logged-in users — each with its own navigation.'
      },
      {
        icon: '🔐',
        title: 'Firebase Auth & Security',
        desc: 'Email/password registration with strength indicator, persistent sessions, forgot password flow, role-based route guards, and auth-aware dynamic navigation.'
      },
      {
        icon: '🏋️',
        title: 'Workout Tracking System',
        desc: '<strong>6 workout templates</strong> (Push, Pull, Leg, Cardio, HIIT, Yoga) with live session mode — real-time timer, exercise checklist, weight logging, calorie calculation, and auto-save to Firestore.'
      },
      {
        icon: '🍽️',
        title: 'Diet & Nutrition Tracker',
        desc: 'Log meals across 4 categories with calorie/macro tracking. Animated <strong>SVG calorie ring</strong>, macro progress bars, date navigation, and real-time Firestore sync.'
      },
      {
        icon: '📊',
        title: 'Chart.js Analytics Dashboard',
        desc: 'Interactive <strong>Line</strong> (weight trend), <strong>Bar</strong> (weekly workouts), and <strong>Doughnut</strong> (workout types) charts with personal records and summary cards.',
        callout: '📈 <strong>Real Data:</strong> All charts pull live data from Firestore — not static images.'
      },
      {
        icon: '📚',
        title: '18-Exercise Library',
        desc: '<strong>18 exercises</strong> across 6 categories and 7 muscle groups — each with instructions, pro tips, difficulty badge, and calorie burn rate. Smart search + filters included.'
      },
      {
        icon: '🎯',
        title: '3-Step Goal Setting Wizard',
        desc: 'Goal type (Weight Loss, Muscle Gain, etc.) → Target weight, calories & workout days → Activity level assessment. Goals sync directly to Firestore and influence dashboard.'
      },
      {
        icon: '👤',
        title: 'Profile & Account (4 Tabs)',
        desc: 'Personal Info (inline edit), Body Metrics (BMI auto-calc), Settings (toggles), Account (password change, delete). Hero banner with avatar, goal badge, and stats strip.'
      }
    ],

    // ── Design & UX highlights (top 6) ──
    designHighlights: [
      { icon: '🌙', text: '"Midnight Pulse" dark theme with violet-teal gradients (#6c5ce7 → #00cec9)' },
      { icon: '🔤', text: 'Premium typography — Outfit (headings) + Inter (body)' },
      { icon: '📊', text: 'Interactive Chart.js visualizations with dark-themed styling' },
      { icon: '💍', text: 'Animated SVG calorie rings and macro progress bars' },
      { icon: '📱', text: 'Fully responsive — desktop, tablet, and mobile optimized' },
      { icon: '🎨', text: 'Color-coded categories, difficulty badges, and toast notifications' }
    ],

    // ── Workout Templates ──
    locations: {
      desc: 'Pre-configured with <strong>6 ready-to-use workout templates</strong>:',
      cities: 'Push Day • Pull Day • Leg Day • Cardio Blast • HIIT Inferno • Yoga Recovery',
      note: 'Each template includes curated exercises, estimated duration, difficulty level, and type classification. Additional templates can be easily added.'
    },

    // ── Platform Stats ──
    statsTable: [
      { label: 'Total Screens', value: '13 pages/views' },
      { label: 'User Roles', value: '2 (Public + Registered)' },
      { label: 'Exercises', value: '18 with instructions' },
      { label: 'Exercise Categories', value: '6' },
      { label: 'Muscle Groups', value: '7' },
      { label: 'Workout Templates', value: '6' },
      { label: 'Meal Categories', value: '4' },
      { label: 'Chart Types', value: '3 interactive' }
    ],

    // ── What You Get (6 key items) ──
    deliverables: [
      'Complete source code with 13 pages + Midnight Pulse theme',
      'Real Firebase auth, Firestore DB & live deployment',
      '18 exercises with instructions + 6 workout templates',
      'Diet tracker with calorie ring + Chart.js analytics',
      '3-step goal wizard + 4-tab profile management',
      'Responsive, animated, premium UI — easy to customize'
    ],

    // ── What Makes It Stand Out (4) ──
    standout: [
      { title: 'Two-Part Architecture', desc: 'Complete public marketing site AND private dashboard with workout tracking, nutrition, analytics, and profile management.' },
      { title: 'Real Firebase Backend', desc: 'Firebase Auth + Firestore for real accounts, real workouts, real meals, and real data persistence. No hardcoded data.' },
      { title: 'Live Workout Sessions', desc: 'Real-time timer, exercise checklist, weight logging, calorie calculation, and success completion screen — a genuine workout experience.' },
      { title: 'Premium "Midnight Pulse" UI', desc: 'Custom dark theme with violet-teal gradients, SVG rings, Chart.js visualizations, and Outfit typography — not a generic template.' }
    ],

    // ── Pages Included (grouped by access) ──
    pages: [
      { num: 1, name: 'Home (Landing Page)', access: 'Public', icon: '🏠' },
      { num: 2, name: 'Login', access: 'Public', icon: '🔑' },
      { num: 3, name: 'Register', access: 'Public', icon: '📝' },
      { num: 4, name: 'Forgot Password', access: 'Public', icon: '🔓' },
      { num: 5, name: 'User Dashboard', access: 'Private', icon: '📊' },
      { num: 6, name: 'Workouts (Templates + Live)', access: 'Private', icon: '🏋️' },
      { num: 7, name: 'Workout History', access: 'Private', icon: '📋' },
      { num: 8, name: 'Diet Tracker', access: 'Private', icon: '🍽️' },
      { num: 9, name: 'Progress Analytics', access: 'Private', icon: '📈' },
      { num: 10, name: 'Exercise Library', access: 'Private', icon: '📚' },
      { num: 11, name: 'Exercise Detail', access: 'Private', icon: '📖' },
      { num: 12, name: 'Fitness Goals (3-Step)', access: 'Private', icon: '🎯' },
      { num: 13, name: 'Profile (4 Tabs)', access: 'Private', icon: '👤' }
    ],

    // ── Footer tagline ──
    footerTagline: 'Built with ❤️ to fuel every rep, every meal, every goal.'
  },

  /* ═══════════════════════════════════════════════════════════════
   *  MAHARAJA'S KITCHEN — Premium Restaurant Management System
   * ═══════════════════════════════════════════════════════════════ */
  'maharajas-kitchen': {
    // ── Hero / Header ──
    name: "Maharaja's Kitchen — Premium Restaurant Management System",
    tagline: 'Full-Stack Web Application | Production-Ready | Live Deployed',
    heroEmoji: '🍽️',
    accentColor: '#d4a853',
    accentGradient: 'linear-gradient(135deg, #d4a853, #b8912e)',
    image: 'assets/images/maharajaskitchen.png',
    price: { current: 1999, old: 3999, discount: '50% OFF' },
    category: 'web',

    // ── Overview ──
    overview: `<strong>Maharaja's Kitchen</strong> is a full-stack restaurant management and online ordering platform that allows customers to browse menus, place orders, book tables, and track their dining history — while giving administrators a complete back-office suite to manage menus, orders, tables, reservations, billing, and analytics. The application features a three-part architecture: a <strong>public-facing marketing site</strong>, a <strong>private customer dashboard</strong>, and a <strong>secure admin panel</strong> — all wrapped in a premium "Royal Midnight" dark-theme UI with gold accent styling and polished animations.<br><br>This is <strong>not a template or starter project</strong> — it is a fully functional, production-deployed web application with real authentication, real-time database, interactive analytics, and a premium user experience ready for immediate use.`,

    // ── Target Audience ──
    audience: [
      { icon: '🎓', title: 'College Students', desc: 'Final year project / Mini project submission with full documentation' },
      { icon: '💼', title: 'Freelance Developers', desc: 'Client-ready restaurant management solution to deploy and customize' },
      { icon: '🏢', title: 'Startups / Agencies', desc: 'Launch a premium restaurant & food ordering platform instantly' },
      { icon: '📂', title: 'Portfolio Builders', desc: 'Showcase a real-world full-stack project in your portfolio' }
    ],

    // ── Key Features (concise, 8 cards) ──
    features: [
      {
        icon: '🏗️',
        title: 'Three-Part Architecture',
        desc: '<strong>Public site</strong> (hero, menu, gallery, reservations, auth) + <strong>Customer dashboard</strong> (ordering, cart, order tracking) + <strong>Admin panel</strong> (menu CRUD, orders, tables, billing, analytics, settings).'
      },
      {
        icon: '🔐',
        title: 'Auth & Role-Based Access',
        desc: 'Email/password registration, persistent sessions, <strong>3 user roles</strong> (Public, Customer, Admin) with role-gated routing, auth-aware dynamic sidebars, and error handling.'
      },
      {
        icon: '🍛',
        title: '32-Dish Menu System',
        desc: '<strong>32 dishes</strong> across 7 categories (Starters, Tandoori, Curries, Biryani, Breads, Desserts, Beverages) with 12+ data fields each — dietary tags, calories, prep time, ratings, and images.'
      },
      {
        icon: '🛒',
        title: 'Cart & Checkout + Orders',
        desc: 'Full e-commerce flow — add to cart, quantity controls, order type selection (Dine-in/Takeaway/Delivery), table selection, <strong>GST calculation</strong>, and 6-stage order lifecycle with real-time sync.'
      },
      {
        icon: '🪑',
        title: 'Table & Reservation System',
        desc: '<strong>20 tables</strong> across 3 floors with visual grid, click-to-toggle status, 8 seating types, and a dual reservation interface — public booking form + admin management with 4-status workflow.'
      },
      {
        icon: '💰',
        title: 'Billing & Invoice Engine',
        desc: 'Auto-create invoices from delivered orders, payment status tracking, pending alerts, print functionality, and 3 summary cards (Collected, Pending, Total).'
      },
      {
        icon: '📊',
        title: 'Reports & Admin Dashboard',
        desc: 'Revenue stats, order status breakdown with progress bars, top-performing items, real-time activity feed, table overview grid, and quick action shortcuts.'
      },
      {
        icon: '👤',
        title: 'Customer Dashboard & Profile',
        desc: 'Personalized welcome, order history, upcoming reservations, loyalty points, quick actions (Order Food, View Cart, Track Order, Book Table), and editable profile.'
      }
    ],

    // ── Design & UX highlights (top 6) ──
    designHighlights: [
      { icon: '👑', text: '"Royal Midnight" dark theme with gold accent (#d4a853) on #1a1a2e' },
      { icon: '🔤', text: 'Premium typography — Playfair Display + Inter' },
      { icon: '🎠', text: 'Auto-rotating testimonial carousel with 6 reviews' },
      { icon: '🎯', text: 'Color-coded status badges, dietary tags, and order states' },
      { icon: '📱', text: 'Fully responsive — desktop, tablet, and mobile optimized' },
      { icon: '🪑', text: 'Visual table grid with click-to-toggle status interaction' }
    ],

    // ── Menu Categories ──
    locations: {
      desc: '<strong>32 dishes</strong> across <strong>7 categories</strong> of Indian fine dining:',
      cities: 'Starters • Tandoori • Curries • Biryani & Rice • Breads • Desserts • Beverages',
      note: 'Every dish includes name, description, price, calories, prep time, star rating, and dietary tags. Additional dishes can be added via the admin panel.'
    },

    // ── Platform Stats ──
    statsTable: [
      { label: 'Total Screens', value: '22 pages/views' },
      { label: 'User Roles', value: '3 (Public + Customer + Admin)' },
      { label: 'Menu Items', value: '32 dishes' },
      { label: 'Menu Categories', value: '7' },
      { label: 'Tables', value: '20 across 3 floors' },
      { label: 'Order Statuses', value: '6' },
      { label: 'Order Types', value: '3 (Dine-in, Takeaway, Delivery)' },
      { label: 'Seating Types', value: '8' }
    ],

    // ── What You Get (6 key items) ──
    deliverables: [
      'Complete source code with 22 pages + Royal Midnight theme',
      'Real auth with 3 user roles & role-gated routing',
      '32 menu items + full cart, checkout & order lifecycle',
      '20 tables + reservation system + billing engine',
      'Admin dashboard with analytics, reports & settings',
      'Responsive, animated, premium UI — easy to customize'
    ],

    // ── What Makes It Stand Out (4) ──
    standout: [
      { title: 'Three-Part Architecture', desc: 'Public marketing site + Customer ordering dashboard + Full admin panel — not just a landing page.' },
      { title: 'Complete Order Lifecycle', desc: '6-stage pipeline (Pending → Confirmed → Preparing → Ready → Delivered → Cancelled) with real-time sync between customer and admin.' },
      { title: 'Visual Table Management', desc: '20 tables across 3 floors with interactive grid, color-coded statuses, click-to-toggle, and full CRUD operations.' },
      { title: 'Premium "Royal Midnight" UI', desc: 'Gold accent dark theme, glassmorphism, Playfair Display typography, testimonial carousel, and animated stats — not a generic template.' }
    ],

    // ── Pages Included (grouped by access) ──
    pages: [
      { num: 1, name: 'Home (Landing Page)', access: 'Public', icon: '🏠' },
      { num: 2, name: 'About Us (Story + Team)', access: 'Public', icon: 'ℹ️' },
      { num: 3, name: 'Menu (Browse & Filter)', access: 'Public', icon: '🍛' },
      { num: 4, name: 'Gallery', access: 'Public', icon: '🖼️' },
      { num: 5, name: 'Contact', access: 'Public', icon: '📞' },
      { num: 6, name: 'Reserve a Table', access: 'Public', icon: '📅' },
      { num: 7, name: 'Login', access: 'Public', icon: '🔑' },
      { num: 8, name: 'Register', access: 'Public', icon: '📝' },
      { num: 9, name: 'Customer Dashboard', access: 'Customer', icon: '📊' },
      { num: 10, name: 'Browse Menu (Add to Cart)', access: 'Customer', icon: '🛒' },
      { num: 11, name: 'Cart & Checkout', access: 'Customer', icon: '💳' },
      { num: 12, name: 'My Orders (History)', access: 'Customer', icon: '📋' },
      { num: 13, name: 'My Reservations', access: 'Customer', icon: '📅' },
      { num: 14, name: 'Profile', access: 'Customer', icon: '👤' },
      { num: 15, name: 'Admin Dashboard', access: 'Admin', icon: '📈' },
      { num: 16, name: 'Menu Management (CRUD)', access: 'Admin', icon: '🍽️' },
      { num: 17, name: 'Order Management', access: 'Admin', icon: '📦' },
      { num: 18, name: 'Table Management', access: 'Admin', icon: '🪑' },
      { num: 19, name: 'Billing & Invoices', access: 'Admin', icon: '💰' },
      { num: 20, name: 'Reservation Management', access: 'Admin', icon: '📅' },
      { num: 21, name: 'Reports & Analytics', access: 'Admin', icon: '📊' },
      { num: 22, name: 'Settings', access: 'Admin', icon: '⚙️' }
    ],

    // ── Footer tagline ──
    footerTagline: "Built with ❤️ to serve every guest, every dish, every occasion."
  },

  /* ═══════════════════════════════════════════════════════════════
   *  HORIZON HOSTEL — Premium Hostel Management System
   * ═══════════════════════════════════════════════════════════════ */
  'horizon-hostel': {
    // ── Hero / Header ──
    name: 'Horizon Hostel — Premium Hostel Management System',
    tagline: 'Full-Stack Web Application | Production-Ready | Live Deployed',
    heroEmoji: '🏨',
    accentColor: '#3b82f6',
    accentGradient: 'linear-gradient(135deg, #3b82f6, #2563eb)',
    image: 'assets/images/hostelmanagement.png',
    price: { current: 1999, old: 3999, discount: '50% OFF' },
    category: 'fullstack',

    // ── Overview ──
    overview: `<strong>Horizon Hostel</strong> is a full-stack hostel management and student accommodation platform that allows students to browse rooms, register for hostel admission, manage their fees, and track their accommodation details — while giving administrators a complete back-office suite to manage students, rooms, fees, entry/exit logs, and analytics. The application features a three-part architecture: a <strong>public-facing marketing site</strong>, a <strong>private student dashboard</strong>, and a <strong>secure admin panel</strong> — all wrapped in a premium modern UI with blue accent styling and polished animations.<br><br>This is <strong>not a template or starter project</strong> — it is a fully functional, production-deployed web application with real Firebase authentication, real-time Firestore database, interactive Recharts analytics, and a premium user experience ready for immediate use.`,

    // ── Target Audience ──
    audience: [
      { icon: '🎓', title: 'College Students', desc: 'Final year project / Mini project submission with full documentation' },
      { icon: '💼', title: 'Freelance Developers', desc: 'Client-ready hostel management solution to deploy and customize' },
      { icon: '🏢', title: 'Startups / Agencies', desc: 'Launch a premium hostel & student accommodation platform instantly' },
      { icon: '📂', title: 'Portfolio Builders', desc: 'Showcase a real-world full-stack project in your portfolio' }
    ],

    // ── Key Features (concise, 8 cards) ──
    features: [
      {
        icon: '🏗️',
        title: 'Three-Part Architecture',
        desc: '<strong>Public site</strong> (hero, rooms, facilities, gallery, rules, fees, auth) + <strong>Student dashboard</strong> (room booking, fees, profile) + <strong>Admin panel</strong> (students, rooms, fees, entry/exit, charts).'
      },
      {
        icon: '🔐',
        title: 'Auth & Role-Based Access',
        desc: 'Email/password registration with <strong>22-field form</strong>, persistent sessions, 3 user roles (Public, Student, Admin), role-gated routing, and student/admin login toggle.'
      },
      {
        icon: '🛏️',
        title: '15-Room Management System',
        desc: '<strong>15 rooms</strong> across 3 floors with 4 types (Single, Double, Triple, Dormitory), 8 amenities, occupancy bars, color-coded statuses, and full CRUD via admin panel.'
      },
      {
        icon: '👨‍🎓',
        title: 'Student Management + Assignment',
        desc: '<strong>22 pre-configured students</strong> with 25+ data fields. <strong>3-step room assignment wizard</strong> (Select Room → Payment → Confirm) with auto-occupancy updates and progress stepper.'
      },
      {
        icon: '💰',
        title: 'Fee Generation & Collection',
        desc: 'Bulk fee generation by month/type, one-click payment recording, per-student fee history, collection rate analytics, and auto fee-status sync across the platform.'
      },
      {
        icon: '📊',
        title: 'Dashboard & Recharts Analytics',
        desc: 'Admin dashboard with <strong>bar charts</strong> (room status), <strong>donut charts</strong> (room types), occupancy stats, fee overview, recent students, and quick action shortcuts.'
      },
      {
        icon: '📋',
        title: 'Public Content Pages',
        desc: '12 hostel facilities with icons, 12 rules across 6 categories, 8-item fines table, complete fee structure (9 items × 3 cycles), photo gallery with 5 filters, and contact page.'
      },
      {
        icon: '🚪',
        title: 'Entry/Exit Monitoring',
        desc: '20 pre-configured activity logs with student name, type badge (Entry/Exit), timestamps, notes, search & filter by type/date, and one-click CSV export.'
      }
    ],

    // ── Design & UX highlights (top 6) ──
    designHighlights: [
      { icon: '💎', text: 'Clean blue-accent design with glassmorphism navbar and gradient hero' },
      { icon: '📊', text: 'Interactive Recharts — bar charts, donut charts, occupancy bars' },
      { icon: '🎨', text: 'Color-coded room types, status badges, and fee indicators' },
      { icon: '🪄', text: '3-step room assignment wizard with visual progress stepper' },
      { icon: '📱', text: 'Fully responsive — desktop, tablet, and mobile optimized' },
      { icon: '🔔', text: 'Toast notifications for all CRUD operations — auto-dismissing' }
    ],

    // ── Room Configuration ──
    locations: {
      desc: '<strong>15 rooms</strong> across <strong>3 floors</strong> with 4 room types:',
      cities: 'Single Room (₹8K–₹9K) • Double Sharing (₹6K–₹6.5K) • Triple Room (₹4.5K) • Dormitory (₹3K)',
      note: 'Each room includes number, floor, type, capacity, pricing, 8 amenity options, and real-time status. Additional rooms can be added via the admin panel.'
    },

    // ── Platform Stats ──
    statsTable: [
      { label: 'Total Screens', value: '20 pages/views' },
      { label: 'User Roles', value: '3 (Public + Student + Admin)' },
      { label: 'Room Types', value: '4' },
      { label: 'Pre-configured Rooms', value: '15 across 3 floors' },
      { label: 'Pre-configured Students', value: '22 with full profiles' },
      { label: 'Registration Fields', value: '22 across 6 sections' },
      { label: 'Hostel Facilities', value: '12 with icons' },
      { label: 'Rules & Fines', value: '12 rules + 8 fines' }
    ],

    // ── What You Get (6 key items) ──
    deliverables: [
      'Complete source code with 20 pages + blue-accent theme',
      'Real Firebase auth with 3 roles & 22-field registration',
      '15 rooms + 22 students + 3-step assignment wizard',
      'Fee generation, collection & entry/exit monitoring',
      'Admin dashboard with Recharts analytics & quick actions',
      'Responsive, animated, premium UI — easy to customize'
    ],

    // ── What Makes It Stand Out (4) ──
    standout: [
      { title: 'Three-Part Architecture', desc: 'Public marketing site + Student dashboard with room booking & fees + Full admin panel with CRUD, analytics, and monitoring.' },
      { title: '3-Step Room Assignment', desc: 'Professional wizard (Select Room → Payment → Confirm) with progress stepper, auto-occupancy updates, and fee sync.' },
      { title: 'Visual Room Management', desc: '15 rooms across 3 floors with interactive card grid, occupancy progress bars, amenity tags, and color-coded statuses.' },
      { title: 'Complete Fee Engine', desc: 'Bulk fee generation, per-student history, one-click payments, collection rate analytics, and auto fee-status sync.' }
    ],

    // ── Pages Included (grouped by access) ──
    pages: [
      { num: 1, name: 'Home (Landing Page)', access: 'Public', icon: '🏠' },
      { num: 2, name: 'About Us', access: 'Public', icon: 'ℹ️' },
      { num: 3, name: 'Facilities (12 Amenities)', access: 'Public', icon: '🏢' },
      { num: 4, name: 'Gallery (5 Categories)', access: 'Public', icon: '🖼️' },
      { num: 5, name: 'Hostel Rules & Fines', access: 'Public', icon: '📋' },
      { num: 6, name: 'Fee Structure', access: 'Public', icon: '💵' },
      { num: 7, name: 'Contact', access: 'Public', icon: '📞' },
      { num: 8, name: 'Login (Student/Admin)', access: 'Public', icon: '🔑' },
      { num: 9, name: 'Register (22-Field Form)', access: 'Public', icon: '📝' },
      { num: 10, name: 'Student Dashboard', access: 'Student', icon: '📊' },
      { num: 11, name: 'Find & Book Room', access: 'Student', icon: '🔍' },
      { num: 12, name: 'My Room', access: 'Student', icon: '🛏️' },
      { num: 13, name: 'Fees & Payments', access: 'Student', icon: '💰' },
      { num: 14, name: 'Entry/Exit Logs', access: 'Student', icon: '🚪' },
      { num: 15, name: 'Profile', access: 'Student', icon: '👤' },
      { num: 16, name: 'Admin Dashboard (Charts)', access: 'Admin', icon: '📈' },
      { num: 17, name: 'Student Management (CRUD)', access: 'Admin', icon: '👨‍🎓' },
      { num: 18, name: 'Room Management (CRUD)', access: 'Admin', icon: '🛏️' },
      { num: 19, name: 'Fee Management', access: 'Admin', icon: '💰' },
      { num: 20, name: 'Entry/Exit Monitoring', access: 'Admin', icon: '🚪' }
    ],

    // ── Footer tagline ──
    footerTagline: 'Built with ❤️ to provide every student a home away from home.'
  },

  /* ═══════════════════════════════════════════════════════════════
   *  HABITFORGE — Gamified Health & Routine Tracker
   * ═══════════════════════════════════════════════════════════════ */
  'habitforge': {
    // ── Hero / Header ──
    name: 'HabitForge — Gamified Health & Routine Tracker',
    tagline: 'Full-Stack Web Application | AI-Powered | Production-Ready | Live Deployed',
    heroEmoji: '🔥',
    accentColor: '#10B981',
    accentGradient: 'linear-gradient(135deg, #10B981, #059669)',
    image: 'assets/images/habitforge.png',
    price: { current: 1999, old: 3999, discount: '50% OFF' },
    category: 'fullstack',

    // ── Overview ──
    overview: `<strong>HabitForge</strong> is a full-stack gamified health and routine tracking platform that allows students to create habits, log daily progress, track streaks, earn XP & badges, join challenges, build daily routines, and receive AI-powered insights — all within a seamless, data-driven workflow powered by real-time Firestore sync. The application features a three-part architecture: a <strong>public-facing marketing site</strong> for visitors, a <strong>private student dashboard</strong> for registered users, and a <strong>role-based admin/mentor panel</strong> for supervisors — all wrapped in a premium modern UI with emerald accent styling and polished Framer Motion animations.<br><br>This is <strong>not a template or starter project</strong> — it is a fully functional, production-deployed web application with real Firebase authentication, real-time Firestore database, Gemini AI integration, push notifications (FCM), interactive Recharts analytics, and a premium user experience ready for immediate use.`,

    // ── Target Audience ──
    audience: [
      { icon: '🎓', title: 'College Students', desc: 'Final year project / Mini project submission with full documentation & AI features' },
      { icon: '💼', title: 'Freelance Developers', desc: 'Client-ready habit tracking & wellness solution to deploy and customize' },
      { icon: '🏢', title: 'Startups / EdTech', desc: 'Launch a premium student wellness & gamified productivity platform instantly' },
      { icon: '📂', title: 'Portfolio Builders', desc: 'Showcase a real-world full-stack AI-integrated project in your portfolio' }
    ],

    // ── Key Features (concise, 8 cards) ──
    features: [
      {
        icon: '🏗️',
        title: 'Three-Part Architecture',
        desc: '<strong>Public site</strong> (hero, features, about, contact, auth) + <strong>Student dashboard</strong> (habits, tracking, insights, challenges, routines, profile, settings) + <strong>Admin/Mentor panel</strong> (student monitoring, progress tracking) — each with role-gated navigation.'
      },
      {
        icon: '🔐',
        title: 'Auth & Role-Based Access',
        desc: 'Email/password + <strong>Google OAuth</strong> registration with Zod validation, persistent sessions, <strong>3 user roles</strong> (Student, Mentor, Admin), role-gated routing, profile completion flow, and friendly error formatting.'
      },
      {
        icon: '🎮',
        title: 'Full Gamification Engine',
        desc: '<strong>10 XP per completion</strong> with streak bonuses (5-day: +20 XP, 7-day: +50 XP). Level system (200 XP/level), <strong>12 earnable badges</strong> across 4 rarity tiers (Common → Legendary), confetti celebrations, and real-time progress bars.',
        callout: '🏆 <strong>Badge Rarity:</strong> Common • Rare • Epic • Legendary — with animated unlock celebrations.'
      },
      {
        icon: '🧠',
        title: 'AI-Powered Insights (Gemini)',
        desc: 'Gemini AI generates <strong>weekly performance analysis</strong> with strengths, improvements, actionable tips, and motivational quotes. AI <strong>Mood Correlation</strong> reveals patterns. <strong>Goal-to-Challenge</strong> converts natural language goals into structured challenges + auto-generated habits.'
      },
      {
        icon: '📊',
        title: 'Recharts Analytics Dashboard',
        desc: 'Interactive <strong>Area charts</strong> (weekly progress, 14-day trends), <strong>Pie charts</strong> (mood distribution), <strong>burnout risk gauge</strong> with animated progress bar, and pattern-based insight cards — all from real Firestore data.',
        callout: '📈 <strong>Real Data:</strong> All charts pull live data from Firestore — not static images.'
      },
      {
        icon: '🗓️',
        title: 'Calendar & Routine Builder',
        desc: 'Full <strong>heat-map calendar</strong> with day-by-day completion tracking, retroactive editing (3-day window), monthly stats, and a <strong>drag-and-drop routine builder</strong> with 4 time blocks (Morning, Afternoon, Evening, Night).'
      },
      {
        icon: '🏆',
        title: 'Social Challenges & Leaderboard',
        desc: 'Create or join <strong>team-based challenges</strong> with custom XP rewards, date ranges, category tags, linked habits, progress tracking, participant management, and a competitive leaderboard with rank badges.'
      },
      {
        icon: '🤖',
        title: 'Forge AI Coach (Chatbot)',
        desc: 'Floating AI chatbot powered by <strong>Gemini</strong> with context-aware conversations. Quick prompts (\"Motivate me\", \"Analyze my habits\"), chat history, typing indicators, and personalized responses based on user data.'
      }
    ],

    // ── Design & UX highlights (top 6) ──
    designHighlights: [
      { icon: '💎', text: 'Clean white + emerald accent design with dark mode toggle (#10B981)' },
      { icon: '🔤', text: 'Premium typography — Poppins (headings) + Inter (body)' },
      { icon: '📊', text: 'Interactive Recharts — area charts, pie charts, burnout gauges' },
      { icon: '🎬', text: 'Framer Motion page transitions, card animations, and confetti effects' },
      { icon: '📱', text: 'Fully responsive — desktop, tablet, and mobile optimized' },
      { icon: '🔔', text: 'FCM push notifications with quiet hours, streak alerts, and challenge updates' }
    ],

    // ── Habit Templates ──
    locations: {
      desc: 'Pre-configured with <strong>4 habit template packs</strong> and <strong>4 routine time blocks</strong>:',
      cities: '💪 Fitness Pack • 📚 Study Pack • 🧘 Wellness Pack • 🚫 Break Bad Habits Pack',
      note: 'Each pack includes 3–4 curated habits with icons, categories, and frequency goals. Routines are organized into Morning (6–12 PM), Afternoon (12–5 PM), Evening (5–9 PM), and Night (9 PM–6 AM) time blocks.'
    },

    // ── Platform Stats ──
    statsTable: [
      { label: 'Total Screens', value: '18 pages/views' },
      { label: 'User Roles', value: '3 (Student + Mentor + Admin)' },
      { label: 'Habit Categories', value: '8 categories' },
      { label: 'Habit Templates', value: '4 packs (14 habits)' },
      { label: 'Earnable Badges', value: '12 across 4 rarities' },
      { label: 'AI Features', value: '4 (Insights, Coach, Mood, Goals)' },
      { label: 'Chart Types', value: '4 interactive (Recharts)' },
      { label: 'Routine Time Blocks', value: '4 (Morning → Night)' }
    ],

    // ── What You Get (6 key items) ──
    deliverables: [
      'Complete Next.js 16 source code with 18 pages + dark mode',
      'Real Firebase auth (Email + Google) with 3 roles & Zod validation',
      'Full gamification engine — XP, levels, 12 badges, confetti',
      'Gemini AI integration — insights, chatbot, mood correlation, goal-to-challenge',
      'Recharts analytics + heat-map calendar + drag-and-drop routines',
      'FCM push notifications, data export, responsive Framer Motion UI'
    ],

    // ── What Makes It Stand Out (4) ──
    standout: [
      { title: 'Three-Part Architecture', desc: 'Complete public marketing site + Student dashboard with 7 modules + Admin/Mentor panel with student monitoring — not just a landing page.' },
      { title: 'Full Gamification Engine', desc: '10 XP per habit, streak bonuses, 200 XP/level system, 12 badges (Common → Legendary), confetti celebrations, and animated progress tracking.' },
      { title: 'Gemini AI Integration', desc: 'AI weekly analysis, floating chatbot coach, mood-habit correlation, and natural-language goal-to-challenge conversion — real AI, not mock data.' },
      { title: 'Premium Modern UI', desc: 'Emerald accent, Framer Motion animations, Poppins/Inter typography, heat-map calendar, drag-and-drop routines, and dark mode — not a generic template.' }
    ],

    // ── Pages Included (grouped by access) ──
    pages: [
      { num: 1, name: 'Home (Landing Page)', access: 'Public', icon: '🏠' },
      { num: 2, name: 'Features', access: 'Public', icon: '✨' },
      { num: 3, name: 'About Us', access: 'Public', icon: 'ℹ️' },
      { num: 4, name: 'Contact', access: 'Public', icon: '📞' },
      { num: 5, name: 'Login (Email + Google)', access: 'Public', icon: '🔑' },
      { num: 6, name: 'Register (Multi-Section)', access: 'Public', icon: '📝' },
      { num: 7, name: 'Student Dashboard', access: 'Student', icon: '📊' },
      { num: 8, name: 'Track Habits (Calendar)', access: 'Student', icon: '📅' },
      { num: 9, name: 'Insights & Analytics', access: 'Student', icon: '🧠' },
      { num: 10, name: 'Challenges & Leaderboard', access: 'Student', icon: '🏆' },
      { num: 11, name: 'Daily Routines (Drag & Drop)', access: 'Student', icon: '🕐' },
      { num: 12, name: 'Profile & Badge Collection', access: 'Student', icon: '👤' },
      { num: 13, name: 'Settings (Theme, Notifications)', access: 'Student', icon: '⚙️' },
      { num: 14, name: 'AI Chatbot (Forge Coach)', access: 'Student', icon: '🤖' },
      { num: 15, name: 'Complete Profile', access: 'Student', icon: '📋' },
      { num: 16, name: 'Mentor Dashboard', access: 'Mentor', icon: '📈' },
      { num: 17, name: 'Student Progress Monitoring', access: 'Mentor', icon: '👨‍🏫' },
      { num: 18, name: 'Admin User Management', access: 'Admin', icon: '🛡️' }
    ],

    // ── Footer tagline ──
    footerTagline: 'Built with ❤️ to forge better habits, one day at a time.'
  }

  // ── Add more projects here ──
};
