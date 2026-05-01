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
  }

  // ── Add more projects here ──
  // 'driveease': { ... },
  // 'fittrack': { ... },
};
