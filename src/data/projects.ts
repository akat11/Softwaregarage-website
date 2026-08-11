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
  isPlaceholder?: boolean
}

// NOTE: Where real project detail was not provided, content below is clearly
// marked as a placeholder (see `isPlaceholder`) so it can be replaced with
// verified project information without guessing at facts or metrics.
export const projects: Project[] = [
  {
    slug: 'schoolspine',
    name: 'SchoolSpine',
    category: 'EDUCATION • SCHOOL MANAGEMENT PLATFORM',
    type: 'School Management Platform',
    description: 'A comprehensive school management platform streamlining academic operations, communication and administrative workflows.',
    technology: ['React', 'Node.js', 'PostgreSQL'],
    overview: 'SchoolSpine is a school management platform built to bring administration, attendance and academic workflows into one system.',
    challenge: 'Educational institutions often rely on fragmented spreadsheets and manual processes to manage students, staff and records.',
    approach: 'We designed a role-based system covering administrators, teachers and staff, with a focus on clear information architecture.',
    design: 'A clean, functional admin interface prioritizing clarity and speed of use for non-technical staff.',
    development: 'Built as a multi-role web application with structured data models for students, classes and records.',
    testing: 'Functional and regression testing across core administrative workflows.',
    outcome: 'A working platform supporting day-to-day school administration.',
    isPlaceholder: true,
  },
  {
    slug: 'tdx-launchpad',
    name: 'TDX Launchpad',
    category: 'WEB3 • BLOCKCHAIN PLATFORM',
    type: 'Blockchain Platform',
    description: 'A next-generation launchpad empowering blockchain projects with seamless fundraising, community building and Web3 infrastructure.',
    technology: ['React', 'TypeScript', 'Web3.js'],
    overview: 'TDX Launchpad is a Web3 platform built around blockchain-based project launches.',
    challenge: 'Web3 products require interfaces that make on-chain interactions feel approachable to non-crypto-native users.',
    approach: 'We focused on translating blockchain interactions into a clear, guided product experience.',
    design: 'A technical, futuristic interface language suited to a Web3 audience.',
    development: 'Frontend built with wallet-connection flows and blockchain interaction layers.',
    testing: 'Functional testing across wallet connection and transaction flows.',
    outcome: 'A functioning launchpad interface for the platform.',
    isPlaceholder: true,
  },
  {
    slug: 'monro',
    name: 'Monro',
    category: 'GAMING • PAYMENT EXPERIENCE',
    type: 'Gaming / Payment Experience',
    description: 'An immersive gaming platform with real-time tournaments, leaderboards and secure payment experiences.',
    technology: ['React', 'Node.js', 'Payment APIs'],
    overview: 'Monro combines gaming interaction with an integrated payment flow.',
    challenge: 'Gaming products need payment flows that feel seamless and don\u2019t break immersion.',
    approach: 'We designed the payment experience to sit naturally within the gaming interface.',
    design: 'A dynamic, motion-driven interface suited to a gaming audience.',
    development: 'Frontend and payment integration built for responsiveness and reliability.',
    testing: 'Payment flow and cross-browser testing.',
    outcome: 'A cohesive gaming and payment experience.',
    isPlaceholder: true,
  },
  {
    slug: 'azibiz',
    name: 'Azibiz',
    category: 'E-COMMERCE • B2B MARKETPLACE',
    type: 'E-commerce Platform',
    description: 'A modern B2B e-commerce platform connecting global buyers with verified suppliers and simplifying trade.',
    technology: ['React', 'Node.js', 'PostgreSQL'],
    overview: 'Azibiz is an e-commerce platform supporting product catalog, cart and checkout.',
    challenge: 'Retail platforms need fast, reliable catalog browsing and a friction-free checkout.',
    approach: 'We prioritized page performance and a streamlined checkout flow.',
    design: 'A clean commerce interface focused on product discovery and conversion.',
    development: 'Catalog, cart and checkout built as a modular commerce system.',
    testing: 'Checkout and cross-browser regression testing.',
    outcome: 'A functioning e-commerce storefront.',
    isPlaceholder: true,
  },
  {
    slug: 'spaarkd',
    name: 'SPAARKD',
    category: 'MOBILE • HEALTH & REWARDS',
    type: 'Mobile Application',
    description: 'A mobile application that motivates users to build healthy habits, earn rewards and stay consistent.',
    technology: ['React Native', 'Firebase'],
    overview: 'SPAARKD is a mobile application built for cross-platform delivery.',
    challenge: 'The product needed a native-feeling experience across iOS and Android from a single codebase.',
    approach: 'We used a cross-platform framework to maximize shared code while preserving native feel.',
    design: 'A mobile-first interface built around touch interaction patterns.',
    development: 'Built with a cross-platform mobile framework and cloud backend services.',
    testing: 'Device and cross-platform functional testing.',
    outcome: 'A working cross-platform mobile application.',
    isPlaceholder: true,
  },
  {
    slug: 'indouscart',
    name: 'IndousCart',
    category: 'E-COMMERCE • SHOPPING PLATFORM',
    type: 'E-commerce Platform',
    description: 'A full-featured e-commerce platform delivering a seamless shopping experience with smart features.',
    technology: ['React', 'Node.js', 'PostgreSQL'],
    overview: 'IndousCart is an e-commerce platform built for product catalog and order management.',
    challenge: 'The platform needed reliable catalog, cart and order-management functionality.',
    approach: 'We built a modular commerce architecture supporting catalog and order workflows.',
    design: 'A functional, conversion-focused storefront interface.',
    development: 'Catalog, cart, checkout and order management built as connected modules.',
    testing: 'Functional and regression testing across commerce flows.',
    outcome: 'A functioning e-commerce platform.',
    isPlaceholder: true,
  },
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
