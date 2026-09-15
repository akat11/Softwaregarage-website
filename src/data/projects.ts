export interface Project {
  slug: string
  name: string
  image?: string
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
    image: '/schoolspine.png',
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
    image: '/lunchpad.png',
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
    image: '/monro-casino.png.png',
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
  slug: 'patang-casino',
  name: 'Patang Casino',
  image: '/patang_casino.png',
  category: 'CASINO • PAYMENT GATEWAY • TRANSACTION TESTING',
  type: 'Casino & Payment Platform',
  description: 'A casino web & mobile based platform focused on secure payment processing and seamless transaction experiences, with comprehensive testing performed across payment flows, API responses, data validation, transaction handling, and cross-platform compatibility.',
  technology: ['API Testing', 'Payment Gateway', 'Postman', 'REST APIs', 'Web & Mobile Testing', 'Cross-Platform Testing', 'Transaction Validation', 'Security Testing',  'Performance Testing', 'Functional Testing', 'Regression Testing'],
  overview: 'Patang Casino is a web & mobile based casino platform where payment and transaction reliability are critical to the overall user experience. The project involved testing payment gateway workflows, validating API responses and transaction data, identifying issues in payment processing, and ensuring consistent behavior across different platforms and scenarios.',
  challenge: '',
  approach: '',
  design: '',
  development: '',
  testing: '',
  outcome: '',
  keyFeatures: [
    { title: 'Payment Gateway Testing', description: 'Tested payment gateway workflows to validate successful, failed, cancelled, and interrupted transaction scenarios.' },
    { title: 'Transaction Validation', description: 'Validated transaction requests, responses, payment status, and transaction data for accuracy and consistency.' },
    { title: 'API Testing', description: 'Tested payment-related APIs and verified request parameters, response structures, status codes, and error handling.' },
    { title: 'Payment Failure Handling', description: 'Verified how the platform handles failed, declined, duplicate, and incomplete payment transactions.' },
    { title: 'Data Validation', description: 'Performed validation of payment and transaction data to identify inconsistencies and ensure reliable processing.' },
    { title: 'Cross-Platform Testing', description: 'Tested payment workflows across different devices and platforms to ensure a consistent transaction experience.' },
    { title: 'Transaction Performance', description: 'Analyzed transaction processing behavior and API performance to identify potential delays and optimization areas.' },
    { title: 'Security-Focused Testing', description: 'Performed security-oriented checks around payment workflows, input validation, API behavior, and transaction handling.' }
  ],
  platforms: ['Web App', 'Android App', 'iOS App'],
  isPlaceholder: true,
},

  {
    slug: 'worknest',
    name: 'WorkNest',
    image: '/task.png',
    category: 'PROJECT MANAGEMENT • TEAM COLLABORATION',
    type: 'PROJECT MANAGEMENT',
    description: 'A flexible project management platform designed to help organizations manage teams, projects, tasks, and milestones from a centralized workspace. WorkNest enables teams to assign work, track progress, manage workflows, and collaborate efficiently with role-based access.',
    technology: ['React', 'Node.js', 'Mongo DB', 'Express.js' ],
    overview: 'WorkNest is a centralized project management platform built to streamline team collaboration and project execution. It provides organizations with structured tools to manage projects, tasks, milestones, teams, and workflows while maintaining clear role-based access and visibility.',
    challenge: 'Retail platforms need fast, reliable catalog browsing and a friction-free checkout.',
    approach: 'We prioritized page performance and a streamlined checkout flow.',
    design: 'A clean commerce interface focused on product discovery and conversion.',
    development: 'Catalog, cart and checkout built as a modular commerce system.',
    testing: 'Checkout and cross-browser regression testing.',
    outcome: 'A functioning e-commerce storefront.',
    keyFeatures: [

    { title: 'Project Management', description: 'Create, organize, edit and track projects with assigned teams and progress metrics.' },
    { title: 'Task Management', description: 'Create, assign and manage tasks with priorities, due dates, status, descriptions and attachments.' },
    { title: 'Milestone Management', description: 'Define project milestones, set timelines and track progress through structured stages.' },
    { title: 'Team Management', description: 'Add team members and organize them into roles such as Admin, Lead and Contributor.' },
    { title: 'Role-Based Access', description: 'Control project, task and milestone permissions based on user roles and responsibilities.' },
    { title: 'Workflow & Sections', description: 'Organize projects into dedicated sections and workflows for different teams and work areas.' },
],
    platforms: ['Web App',],
    isPlaceholder: true,
  },
  {
    slug: 'spaarkd',
    name: 'SPAARKD',
    image: '/fashion.png',
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
    image: '/indo.png',
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

{
  slug: 'ajmeridarbar',
  name: 'AjmeriDarbar.in',
  image: '/food.png',
  category: 'FOOD DELIVERY • RESTAURANT • ONLINE ORDERING',
  type: 'Food Ordering Platform',
  description: 'A modern online food ordering and restaurant information platform designed to provide customers with easy access to menus, restaurant details, locations, contact information, and online food ordering.',
  technology: ['React', 'Node.js', 'MongoDB', 'Express.js', 'AWS'],
  overview: 'AjmeriDarbar is a complete digital food ordering platform built to provide customers with a convenient and seamless way to explore the restaurant menu, select their favorite dishes, manage their cart, apply coupons, complete online payments, and place food orders. The platform also provides customers with access to order tracking, order history, delivery details, and account management, creating a complete end-to-end online food ordering experience.',  challenge: '',
  approach: '',
  design: '',
  development: '',
  testing: '',
  outcome: '',
  keyFeatures: [
  { title: 'Online Food Ordering', description: 'Browse the restaurant menu, select food items, customize quantities, add products to cart, and place orders directly through the platform.' },
  { title: 'Smart Cart Management', description: 'Manage selected food items, update quantities, review pricing, and view the complete order summary before checkout.' },
  { title: 'Secure Online Payment', description: 'Integrated online payment flow allowing customers to securely complete transactions during the checkout process.' },
  { title: 'Coupon & Discount System', description: 'Apply promotional coupons and discount codes at checkout to unlock eligible offers and reduce the final order value.' },
  { title: 'Order Tracking', description: 'Track the progress of placed orders through different stages, providing customers with better visibility of their delivery status.' },
  { title: 'Order History', description: 'Customers can view their previous orders, review order details, and easily access their complete ordering history from their account.' },
  { title: 'Customer Account', description: 'A personalized customer area for managing profile information, orders, delivery details, and account-related activities.' },
  { title: 'Menu & Food Categories', description: 'Organized food categories and menu items make it easy for customers to discover dishes, explore available options, and choose their meals.' },
  { title: 'Checkout & Delivery Details', description: 'A structured checkout experience for reviewing the order, applying offers, selecting payment options, and providing delivery information.' },
  { title: 'Responsive Food Ordering Experience', description: 'Optimized for desktop and mobile devices to provide a smooth, convenient, and accessible food ordering experience across different screen sizes.' }
],
  platforms: ['Web App'],
  isPlaceholder: true,
},

{
  slug: 'scpschool',
  name: 'SCP School',
  image: '/school.png',
  category: 'EDUCATION • SCHOOL WEBSITE • INSTITUTIONAL',
  type: 'School Website',
  description: 'A modern, responsive school website designed to provide students, parents, educators, and visitors with clear access to essential school information, academic details, admissions, and contact resources through an intuitive and engaging digital experience.',
  technology: ['React', 'Node.js', 'Express.js',  'MongoDB', 'TypeScript'],
  overview: 'SCP School is a modern and responsive educational website designed to provide students, parents, teachers, and visitors with easy access to essential school information. The platform brings together school details, academics, admissions, facilities, activities, and contact information in a structured digital experience, making it easier for users to explore the institution and find the information they need through a clean and intuitive interface.',
  challenge: '',
  approach: '',
  design: '',
  development: '',
  testing: '',
  outcome: '',
  keyFeatures: [
    {
      title: 'Modern School Website',
      description: 'A professionally designed digital platform that presents the school, its activities, academic information, and important resources in a structured and user-friendly manner.'
    },
    {
      title: 'About & School Information',
      description: 'Provides visitors with organized information about the school, its background, vision, activities, and other important institutional details.'
    },
    {
      title: 'Academic Information',
      description: 'Dedicated academic sections help students and parents easily explore information related to academics, curriculum, educational programs, and school-related learning resources.'
    },
    {
      title: 'Admissions Information',
      description: 'A clearly structured admissions section helps prospective students and parents understand the admission process and access relevant information before getting in touch with the school.'
    },
    {
      title: 'Contact & Enquiry',
      description: 'Provides convenient access to school contact information and enquiry-related resources, making it easier for parents, students, and visitors to connect with the institution.'
    },
    {
      title: 'Responsive User Experience',
      description: 'The website is optimized for different screen sizes and devices, providing smooth navigation, readable content, and a consistent experience across desktops, tablets, and mobile devices.'
    }
  ],
  platforms: ['Web App'],
  isPlaceholder: true,
},
{
  slug: 'azibiz',
  name: 'Azibiz',
  image: '/franch.png',
  category: 'BUSINESS MANAGEMENT • QA • SOFTWARE TESTING',
  type: 'Business Management Platform',
  description: 'A business management platform comprehensively tested across functional workflows, user interface, and regression scenarios to identify critical issues, improve workflow reliability, and ensure a stable experience before production deployment.',
technology: ['Functional Testing', 'UI Testing', 'Regression Testing', 'API Testing', 'Role-Based Access Testing', 'Cross-Browser Testing', 'Responsive Testing', 'Workflow Testing'],  overview: 'Azibiz is a business management platform designed to support structured business workflows and day-to-day management activities. The project involved comprehensive quality assurance across core functionality, user interface, and regression scenarios, with a focus on identifying critical defects and improving overall workflow performance before production deployment.',
  challenge: '',
  approach: '',
  design: '',
  development: '',
  testing: '',
  outcome: '',
 keyFeatures: [
  { title: 'Business For Sale Marketplace', description: 'Discover and explore businesses available for sale across multiple industries, locations, and investment ranges.' },
  { title: 'Franchise Opportunities', description: 'Browse franchise opportunities across different industries and countries to discover suitable business and investment options.' },
  { title: 'Advanced Search & Filters', description: 'Search and filter business opportunities by industry, location, investment range, business type, and other relevant criteria.' },
  { title: 'Business & Franchise Listings', description: 'Create and showcase detailed business and franchise listings with important information to attract potential buyers and investors.' },
  { title: 'Buyer & Seller Connection', description: 'Connect business buyers, sellers, franchise owners, and entrepreneurs through a centralized marketplace.' },
  { title: 'Broker Directory', description: 'Discover and connect with professional business and franchise brokers who can assist with business opportunities and transactions.' },
  { title: 'Business Wanted', description: 'Allows buyers to communicate their specific business requirements and helps sellers identify potential buyers with matching interests.' },
  { title: 'Global Marketplace', description: 'Supports business and franchise discovery across multiple countries, enabling users to explore international investment opportunities.' },
  { title: 'Role-Based Access Control', description: 'Provides different user roles and permissions for buyers, sellers, brokers, franchise professionals, and platform administrators to support connected workflows.' },
  { title: 'Verified Listings & Profiles', description: 'Supports listing and profile verification to improve transparency, credibility, and trust between buyers, sellers, and business professionals.' },
  { title: 'Direct Communication', description: 'Enables buyers and sellers to communicate directly, helping streamline inquiries, negotiations, and business discussions.' },
  { title: 'Market Insights & Resources', description: 'Provides business guides, industry insights, blogs, and educational resources to help users make more informed investment decisions.' }
],
  platforms: ['Web App'],
  isPlaceholder: true,
},

]
export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug)
}
