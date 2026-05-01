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
  }

  // ── Add more projects here ──
};
