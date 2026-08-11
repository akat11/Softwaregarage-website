export interface Industry {
  slug: string
  name: string
  description: string
  solutions: string[]
}

export const industries: Industry[] = [
  { slug: 'saas', name: 'SaaS', description: 'Multi-tenant platforms, billing, roles and permissions.', solutions: ['Platform architecture', 'Admin tooling', 'Billing integration'] },
  { slug: 'fintech', name: 'FinTech', description: 'Secure, compliant financial product interfaces and systems.', solutions: ['Secure data handling', 'Payment integration', 'Dashboarding'] },
  { slug: 'ecommerce', name: 'E-commerce', description: 'Storefronts, catalog, checkout and order management.', solutions: ['Headless commerce', 'Checkout optimization', 'Catalog systems'] },
  { slug: 'education', name: 'Education', description: 'Learning and school-management platforms.', solutions: ['Admin systems', 'Learning platforms', 'Attendance & records'] },
  { slug: 'healthcare', name: 'Healthcare', description: 'Patient- and provider-facing digital tools.', solutions: ['Scheduling systems', 'Patient portals', 'Record management'] },
  { slug: 'logistics', name: 'Logistics', description: 'Tracking, dispatch and operational tooling.', solutions: ['Dispatch systems', 'Tracking dashboards', 'Route tooling'] },
  { slug: 'gaming', name: 'Gaming', description: 'Interactive and payment-integrated gaming products.', solutions: ['Gaming interfaces', 'Payment integration', 'Real-time interaction'] },
  { slug: 'web3', name: 'Web3', description: 'Blockchain-integrated product interfaces.', solutions: ['Wallet integration', 'On-chain UX', 'Launchpad platforms'] },
  { slug: 'real-estate', name: 'Real Estate', description: 'Listing, search and management platforms.', solutions: ['Listing platforms', 'Search & filters', 'Management dashboards'] },
  { slug: 'business-automation', name: 'Business Automation', description: 'Workflow automation and internal tooling.', solutions: ['Workflow automation', 'Internal tools', 'Process dashboards'] },
]
