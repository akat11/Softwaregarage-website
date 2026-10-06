import type { LucideIcon } from 'lucide-react'
import {
  Bot,
  BookOpen,
  Brain,
  FileText,
  BarChart3,
  Boxes,
  Cog,
  Plug,
  Database,
  Workflow,
  Lightbulb,
  Zap,
  Rocket,
  Search,
  Layers,
  ShieldCheck,
  Gauge,
  Scale,
  RefreshCw,
  Activity,
  GraduationCap,
  HeartPulse,
  ShoppingCart,
  Wallet,
  Home,
  Truck,
  Users,
  Gamepad2,
  Briefcase,
  Sparkles,
  Clock,
  Target,
} from 'lucide-react'

export interface Feature {
  title: string
  text: string
  icon: LucideIcon
}

export interface HeroCardPos {
  top: string
  left?: string
  right?: string
  mTop: string
  mLeft?: string
  mRight?: string
}

export const aiHeroCards: { title: string; sub: string; icon: LucideIcon; pos: HeroCardPos }[] = [
  { title: 'AI Agents', sub: 'Automate tasks', icon: Bot, pos: { top: '6%', left: '-4%', mTop: '2%', mLeft: '0%' } },
  { title: 'RAG Systems', sub: 'Your data, smarter', icon: BookOpen, pos: { top: '44%', left: '-8%', mTop: '38%', mLeft: '0%' } },
  { title: 'AI Integrations', sub: 'Connect everything', icon: Plug, pos: { top: '72%', left: '4%', mTop: '84%', mLeft: '4%' } },
  { title: 'Workflow Automation', sub: 'No manual work', icon: Workflow, pos: { top: '18%', right: '-4%', mTop: '14%', mRight: '0%' } },
  { title: 'Custom AI Solutions', sub: 'Built for you', icon: Boxes, pos: { top: '60%', right: '-2%', mTop: '56%', mRight: '0%' } },
]

export const aiStats = [
  { value: 50, suffix: '+', label: 'AI Use Cases' },
  { value: 20, suffix: '+', label: 'Automation Workflows' },
  { value: 10, suffix: '+', label: 'AI-Powered Products & Tools' },
  { value: 100, suffix: '%', label: 'Business Focus' },
]

export const aiSolutions: Feature[] = [
  { title: 'AI Agents', text: 'AI agents that think, execute and automate intelligent workflows.', icon: Bot },
  { title: 'AI Assistants', text: 'Business-specific AI copilots for your teams.', icon: Brain },
  { title: 'RAG & Knowledge Systems', text: 'Query your data with secure AI-powered knowledge systems.', icon: Database },
  { title: 'Workflow Automation', text: 'Connect tasks and processes without manual work.', icon: Workflow },
  { title: 'Document Intelligence', text: 'Extract, analyze and process documents automatically.', icon: FileText },
  { title: 'AI Analytics', text: 'Turn data into actionable intelligence and insights.', icon: BarChart3 },
  { title: 'Custom AI Solutions', text: 'Tailored AI products designed for your business.', icon: Boxes },
  { title: 'AI Integrations', text: 'Integrate AI with your existing tools and workflows.', icon: Plug },
]

export const aiDemos = [
  { title: 'AI Customer Support', text: 'Chat with an AI support agent', icon: Bot },
  { title: 'PDF & Document Analyzer', text: 'Upload a document and extract insights', icon: FileText },
  { title: 'AI Sales Assistant', text: 'Qualify leads and answer customer queries', icon: Target },
  { title: 'Knowledge Base Assistant', text: 'Ask questions from your data', icon: BookOpen },
]

export const aiValueSteps: Feature[] = [
  { title: 'Your Data', text: 'Business data, documents, APIs', icon: Database },
  { title: 'Understand', text: 'AI models analyze and understand', icon: Brain },
  { title: 'Decide', text: 'Generate insights and actions', icon: Lightbulb },
  { title: 'Take Action', text: 'Automate tasks & workflows', icon: Zap },
  { title: 'Business Impact', text: 'Save time, reduce cost, grow faster', icon: Rocket },
]

export const aiIndustries: Feature[] = [
  { title: 'Education', text: 'AI for learning, administration & personalization', icon: GraduationCap },
  { title: 'Healthcare', text: 'Clinical data, patient support & automation', icon: HeartPulse },
  { title: 'E-Commerce', text: 'Personalization, support & conversion', icon: ShoppingCart },
  { title: 'Finance', text: 'Data analysis, fraud detection & automation', icon: Wallet },
  { title: 'Real Estate', text: 'Lead management & document processing', icon: Home },
  { title: 'Logistics', text: 'Tracking, route optimization & operations', icon: Truck },
  { title: 'SaaS & Startups', text: 'AI features to scale your product', icon: Users },
  { title: 'Gaming & Web3', text: 'AI for immersive experiences & communities', icon: Gamepad2 },
]

export const aiCaseStudies = [
  {
    title: 'AI Payroll Automation',
    tag: 'BUSINESS',
    text: 'AI-assisted payroll workflows that process attendance, leave, half-days and salary calculations with less manual effort.',
    icon: Briefcase,
    slug: 'ai-payroll-automation',
  },
  {
    title: 'SchoolSpine AI',
    tag: 'EDUCATION',
    text: 'AI-powered academic workflows that help teachers generate assessments, questions, assignments and answer keys faster.',
    icon: GraduationCap,
    slug: 'schoolspine-ai',
  },
  {
    title: 'AI Hospital Roster',
    tag: 'HEALTHCARE',
    text: 'An AI-powered scheduling agent that generates staff rosters based on shifts, rotations, availability and hospital rules.',
    icon: HeartPulse,
    slug: 'ai-hospital-roster',
  },
]

export const aiTesting: Feature[] = [
  { title: 'AI Response Testing', text: 'Validate accuracy & relevance', icon: ShieldCheck },
  { title: 'RAG Testing', text: 'Test knowledge retrieval', icon: Search },
  { title: 'Prompt Testing', text: 'Optimize prompts for best results', icon: Sparkles },
  { title: 'AI / API Testing', text: 'Functional & integration testing', icon: Plug },
  { title: 'Security Testing', text: 'Identify vulnerabilities', icon: ShieldCheck },
  { title: 'Performance Testing', text: 'Ensure speed & scalability', icon: Gauge },
  { title: 'Bias & Fairness Testing', text: 'Detect unwanted model behavior', icon: Scale },
  { title: 'Regression Testing', text: 'Maintain consistent performance', icon: RefreshCw },
]

export const aiProcess: Feature[] = [
  { title: 'Discover', text: 'Understand your goals and opportunities', icon: Search },
  { title: 'Design', text: 'Create AI strategy and architecture', icon: Layers },
  { title: 'Develop', text: 'Build and integrate AI systems', icon: Cog },
  { title: 'Test', text: 'Validate, optimize and secure', icon: Activity },
  { title: 'Deploy', text: 'Launch your AI into production', icon: Rocket },
  { title: 'Scale', text: 'Continuously improve and expand', icon: Clock },
]
