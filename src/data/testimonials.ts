import {
  Briefcase,
  Users,
  Star,
  Globe2,
  GraduationCap,
  Rocket,
  Crown,
  Gem,
  Triangle,
  Feather,
} from 'lucide-react'

export const testimonialStats = [
  { icon: Briefcase, value: 15, suffix: '+', label: 'Projects Delivered' },
  { icon: Users, value: 6, suffix: '+', label: 'Happy Clients' },
  { icon: Star, value: 100, suffix: '%', label: 'Client Satisfaction' },
  { icon: Globe2, value: 7, suffix: '+', label: 'Countries Served' },
]

export const testimonials = [
  {
    name: 'Michael Adeyemi',
    title: 'Founder, Dreamz Enterprise',
    country: 'Nigeria',
    flag: '🇳🇬',
    initials: 'MA',
    quote:
      "The Software Garage delivered an amazing e-commerce platform for our business. Their communication, quality and delivery speed were excellent throughout the project.",
  },
  {
    name: 'Sarah Kim',
    title: 'Product Manager, TDX Launchpad',
    country: 'Netherlands',
    flag: '🇳🇱',
    initials: 'SK',
    quote:
      "Working with The Software Garage was a game-changer for our Web3 project. They understood our vision, delivered high-quality work, and always went the extra mile. Highly recommended!",
  },
  {
    name: 'David Thompson',
    title: 'CEO, Monro Casino',
    country: 'UAE',
    flag: '🇦🇪',
    initials: 'DT',
    quote:
      "Great experience working with The Software Garage. They built our platform with a modern UI/UX and handled everything from design to deployment smoothly.",
  },
  {
    name: 'Ayesha Khan',
    title: 'Operations Lead, SchoolSpine',
    country: 'India',
    flag: '🇮🇳',
    initials: 'AK',
    quote:
      "From the first call to launch, the team stayed transparent and reliable. SchoolSpine runs faster and smoother than we imagined, and support hasn't stopped since.",
  },
]

export const clientLogos = [
  { name: 'SchoolSpine', icon: GraduationCap },
  { name: 'TDX Launchpad', icon: Rocket },
  { name: 'Monro Casino', icon: Crown },
  { name: 'Dreamz Enterprise', icon: Gem },
  { name: 'Aixe Systems', icon: Triangle },
  { name: 'Patang', icon: Feather },
]
