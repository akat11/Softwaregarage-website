export interface Project {
  slug: string
  name: string
  category: string
  type: string
  description: string
  technology: string[]
  overview: string
  challenge: string
  approach: string
  design: string
  development: string
  testing: string
  outcome: string
  keyFeatures?: Array<{ title: string; description: string }>
  platforms?: string[]
  isPlaceholder?: boolean
}

// NOTE: Where real project detail was not provided, content below is clearly
// marked as a placeholder (see `isPlaceholder`) so it can be replaced with
// verified project information without guessing at facts or metrics.
export const projects: Project[] = [
  {
    slug: 'schoolspine',
    name: 'SchoolSpine',
    category: 'EDUCATION • SCHOOL MANAGEMENT • EDTECH',    type: 'School Management Platform',
    description: 'SchoolSpine is a comprehensive school management application designed to simplify academic operations, communication and administration for schools, teachers, students and parents. Available on Web, Android and iOS.',
    technology: ['React', 'Node.js', 'Typescript', 'Express.js', 'AWS', 'Redux', 'PostgreSQL'],
    overview: 'SchoolSpine brings all academic and administrative activities under one roof. It helps schools go digital and enables seamless communication between administrations, teachers, students and parents.Built with a focus on usability, security and scalability.',
    challenge: 'Educational institutions often rely on fragmented spreadsheets and manual processes to manage students, staff and records.',
    approach: 'We designed a role-based system covering administrators, teachers and staff, with a focus on clear information architecture.',
    design: 'A clean, functional admin interface prioritizing clarity and speed of use for non-technical staff.',
    development: 'Built as a multi-role web application with structured data models for students, classes and records.',
    testing: 'Functional and regression testing across core administrative workflows.',
    outcome: 'A working platform supporting day-to-day school administration.',
    keyFeatures: [
      { title: 'Student Management', description: 'Manage student profiles, admission, attendance and performance.' },
      { title: 'Class & Subject Management', description: 'Organize classes, subjects, timetables and curriculum.' },
      { title: 'Assignments', description: 'Create, assign and evaluate assignments online.' },
      { title: 'Attendance Tracking', description: 'Real-time attendance tracking for students and staff.' },
      { title: 'Fee Management', description: 'Automate fee collection, invoices and payments.' },
      { title: 'Reports & Analytics', description: 'Generate insights and reports on school performance.' },
      { title:  'Exams & Marks', description: 'Schedule exams, publish results and track performance.'},
      { title:  'Communication & Notifications', description: 'Send notices, announcements and messages instantly.'},
      { title:  'Role-Based Access', description: 'Secure access for Super-Admin, Admin,Principal, Accountants, HR, Receptionists, teachers, and parents.'},
      { title: 'Transport Management', description: 'Manage school buses, routes, stops, drivers and student transportation efficiently.' },
      { title: 'Stock & Inventory', description: 'Track school inventory, assets, purchases, stock levels and suppliers in one place.' },
      { title: 'Role-Based Access', description: 'Provide secure, role-specific access for administrators, teachers, students and parents.' },
      { title: 'Web & Mobile Applications', description: 'Access SchoolSpine seamlessly across web, Android and iOS applications.' },

    ],
    platforms: ['Web App', 'Android App', 'iOS App'],
    isPlaceholder: true,
  },
  {
    slug: 'tdx-launchpad',
    name: 'TDX Launchpad',
    category: 'WEB3 • DEFI • INVESTMENT PLATFORM ',
    type: 'Blockchain Platform',
    description: 'A next-generation launchpad empowering blockchain projects with seamless fundraising, community building and Web3 infrastructure.',
    technology: ['React', 'TypeScript', 'Web3.js', 'Solidity', 'Smart Contracts'],
    overview: 'TDX is a next-generation wealth platform built to simplify access to opportunities across DeFi, tokenized real-world assets, and early-stage investments. By combining AI-backed yield strategies, decentralized crowdfunding, and community-driven engagement, TDX brings multiple investment experiences into one unified ecosystem. Designed for both emerging and experienced investors, the platform enables users to discover tailored strategies, evaluate opportunities through real-time insights, and manage their investments from a single dashboard — making Web3 investing more accessible, flexible, and transparent.',    challenge: 'Web3 products require interfaces that make on-chain interactions feel approachable to non-crypto-native users.',
    approach: 'We focused on translating blockchain interactions into a clear, guided product experience.',
    design: 'A technical, futuristic interface language suited to a Web3 audience.',
    development: 'Frontend built with wallet-connection flows and blockchain interaction layers.',
    testing: 'Functional testing across wallet connection and transaction flows.',
    outcome: 'A functioning launchpad interface for the platform.',
    keyFeatures: [
      { title: 'Project Creation', description: 'Streamlined process for blockchain projects to launch and list.' },
      { title: 'Token Launch', description: 'Manage token distribution, vesting schedules and smart contracts.' },
      { title: 'Community Building', description: 'Engage investors and build community around projects.' },
      { title: 'Real-time Funding', description: 'Track funding progress and receive instant notifications.' },
      { title: 'Smart Contracts', description: 'Execute automated transactions with transparency and security.' },
      { title: 'Analytics Dashboard', description: 'View metrics on project performance and investor insights.' },
      { title: 'Refer & Earn', description: 'Invite others to join the platform and earn rewards through successful referrals.' },
    
    ],
    platforms: ['Web App'],
    isPlaceholder: true,
  },
  {
    slug: 'Monro Casino',
    name: 'Monro Casino',
    category: 'GAMING • PAYMENT EXPERIENCE',
    type: 'Gaming / Payment Experience',
    description: 'A multi-platform gaming platform with integrated payment gateway, supporting secure transactions across Web, Mobile, and iOS applications.',    technology: ['React', 'Node.js', 'Payment APIs', 'WebSockets', 'Firebase'],
    overview: 'Monro Casino is a multi-platform gaming application offering an integrated payment experience across Web, Mobile, and iOS platforms. The project focuses on providing secure, reliable, and seamless payment flows for deposits, withdrawals, and transaction management across different devices and platforms.',    challenge: 'Gaming products need payment flows that feel seamless and don\'t break immersion.',
    approach: 'We designed the payment experience to sit naturally within the gaming interface.',
    design: 'A dynamic, motion-driven interface suited to a gaming audience.',
    development: 'Frontend and payment integration built for responsiveness and reliability.',
    testing: 'Payment flow and cross-browser testing.',
    outcome: 'A cohesive gaming and payment experience.',
    keyFeatures: [
      { title: 'Payment Gateway Testing', description: 'Validated payment flows, transaction processing, and gateway responses across supported platforms.' },
      { title: 'Deposit & Withdrawal', description: 'Tested deposit and withdrawal workflows to ensure accurate and reliable transaction handling.' },
      { title: 'Transaction Validation', description: 'Verified successful, failed, pending, and declined transaction scenarios with accurate status handling.' },
      { title: 'Cross-Platform Testing', description: 'Validated payment experiences across Web, Mobile, and iOS applications.' },
      { title: 'Error & Failure Handling', description: 'Tested payment failures, invalid inputs, timeouts, and interrupted transactions for proper error handling.' },
      { title: 'Payment Security', description: 'Validated secure payment flows and ensured sensitive transaction information was handled appropriately.' },
    ],
    platforms: ['Web App', 'Android App', 'iOS App'],
    
    isPlaceholder: true,
  },
  {
    slug: 'azibiz',
    name: 'Azibiz',
    category: 'E-COMMERCE • B2B MARKETPLACE',
    type: 'E-commerce Platform',
    description: 'A modern B2B e-commerce platform connecting global buyers with verified suppliers and simplifying trade.',
    technology: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'Stripe API'],
    overview: 'Azibiz is an e-commerce platform supporting product catalog, cart and checkout.',
    challenge: 'Retail platforms need fast, reliable catalog browsing and a friction-free checkout.',
    approach: 'We prioritized page performance and a streamlined checkout flow.',
    design: 'A clean commerce interface focused on product discovery and conversion.',
    development: 'Catalog, cart and checkout built as a modular commerce system.',
    testing: 'Checkout and cross-browser regression testing.',
    outcome: 'A functioning e-commerce storefront.',
    keyFeatures: [
      { title: 'Supplier Directory', description: 'Search and connect with verified suppliers across industries.' },
      { title: 'Product Catalog', description: 'Browse millions of products with detailed specifications and pricing.' },
      { title: 'Bulk Ordering', description: 'Place large orders with custom negotiated pricing and terms.' },
      { title: 'Order Management', description: 'Track shipments, manage invoices and handle returns seamlessly.' },
      { title: 'Payment Processing', description: 'Secure multi-currency payment options for global transactions.' },
      { title: 'Dispute Resolution', description: 'Built-in mediation system for resolving buyer-seller disputes.' },
    ],
    platforms: ['Web App', 'Android App', 'iOS App'],
    isPlaceholder: true,
  },
  {
    slug: 'spaarkd',
    name: 'SPAARKD',
    category: 'FASHION • AI • MARKETPLACE',    type: 'Mobile Application',
    description: 'An AI-powered fashion platform helping creators design, produce, launch, and scale fashion brands through a connected global manufacturing ecosystem.',    technology: ['React Native', 'Firebase', 'TypeScript', 'Redux Toolkit'],
    overview: 'SPARKIT is an end-to-end fashion platform that connects creators with AI-powered design tools, global manufacturers, material suppliers, and a built-in marketplace. The platform simplifies the journey from product idea to production and launch, enabling creators to bring fashion products to market without traditional industry barriers.',    challenge: 'The product needed a native-feeling experience across iOS and Android from a single codebase.',
    approach: 'We used a cross-platform framework to maximize shared code while preserving native feel.',
    design: 'A mobile-first interface built around touch interaction patterns.',
    development: 'Built with a cross-platform mobile framework and cloud backend services.',
    testing: 'Device and cross-platform functional testing.',
    outcome: 'A working cross-platform mobile application.',
    keyFeatures: [
      { title: 'AI-Powered Design', description: 'Turn ideas, prompts, sketches, and references into production-ready fashion concepts.' },
      { title: 'Product Development', description: 'Create detailed designs, material specifications, silhouettes, and factory-ready tech packs.' },
      { title: 'Global Manufacturing', description: 'Connect with a network of vetted factories, mills, and material suppliers worldwide.' },
      { title: 'Pre-Order Marketplace', description: 'Launch fashion products through pre-orders and validate demand before production.' },
      { title: 'Brand Launch', description: 'Bring products to market with built-in marketplace and go-to-market capabilities.' },
      { title: 'Order & Fulfillment', description: 'Manage orders, production, fulfillment, and brand growth through a unified platform.' },
    ],
    platforms: ['iOS App', 'Android App'],
    isPlaceholder: true,
  },
  {
    slug: 'indouscart',
    name: 'IndousCart',
    category: 'E-COMMERCE • HANDICRAFTS • ONLINE MARKETPLACE',
    type: 'E-commerce Platform',
    description: 'A feature-rich e-commerce platform connecting customers with authentic Indian handicrafts, ethnic gifts, home décor, religious products, and festive collections.',
    technology: ['React', 'Node.js', 'PostgreSQL', 'Redux', 'AWS S3'],
    overview: 'IndousCart is an e-commerce platform focused on bringing authentic Indian craftsmanship and traditional products to customers through a convenient online shopping experience. The platform offers a wide range of handcrafted products including ethnic gifts, home décor, paintings, furnishings, religious idols, puja essentials, festive collections, and traditional accessories. With an extensive product catalog, category-based discovery, shopping cart, wishlist, customer accounts, and secure checkout experience, IndousCart creates a complete digital marketplace for Indian cultural and handcrafted products.',
    challenge: 'The platform needed reliable catalog, cart and order-management functionality.',
    approach: 'We built a modular commerce architecture supporting catalog and order workflows.',
    design: 'A functional, conversion-focused storefront interface.',
    development: 'Catalog, cart, checkout and order management built as connected modules.',
    testing: 'Functional and regression testing across commerce flows.',
    outcome: 'A functioning e-commerce platform.',
    keyFeatures: [
      { title: 'Product Catalog', description: 'Explore a wide range of handcrafted products across diverse traditional categories.' },
      { title: 'Product Discovery', description: 'Browse and discover products through organized categories and intuitive navigation.' },
      { title: 'Shopping Cart', description: 'Add, update, remove, and manage products before completing the purchase.' },
      { title: 'Wishlist', description: 'Save favorite products for convenient access and future purchases.' },
      { title: 'Secure Checkout', description: 'Complete purchases through a streamlined and secure checkout experience.' },
      { title: 'Order Management', description: 'Track purchases, order details, and delivery information from one place.' }
    ],
    platforms: ['Web App'],
    isPlaceholder: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
