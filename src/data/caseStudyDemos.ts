export interface DemoProcessingStep {
  text: string
  detail?: string
}

export interface QuestionDemoItem {
  id: string
  number: number
  stem: string
  options: { key: string; text: string; correct?: boolean; note?: string }[]
  difficulty: 'Easy' | 'Medium' | 'Hard'
  bloomLevel: string
  answerKeyExplanation: string
  approved: boolean
}

export interface PayrollEmployeeRecord {
  id: string
  name: string
  role: string
  workingDays: number
  leave: number
  halfDays: number
  status: 'Ready' | 'Review' | 'Exception'
  validationNote: string
  attendanceLog: { date: string; punchIn: string; punchOut: string; status: string }[]
  salaryAmount: string
  approved: boolean
}

export interface RosterStaffRecord {
  id: string
  name: string
  role: 'Senior Doctor' | 'Resident' | 'Lead Nurse' | 'Staff Nurse'
  shifts: {
    mon: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
    tue: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
    wed: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
    thu: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
    fri: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
    sat: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
    sun: 'M' | 'E' | 'N' | 'OFF' | 'LEAVE'
  }
  restInterval: string
  compliant: boolean
  leaveStatus?: string
}

export interface CaseStudyDemoConfig {
  slug: string
  productTitle: string
  windowSubtitle: string
  mainActionLabel: string
  processingSteps: string[]
  inputs: {
    label: string
    value: string
    type?: 'text' | 'select' | 'pills'
    options?: string[]
  }[]
  metrics: {
    label: string
    value: string | number
    highlight?: boolean
    warning?: boolean
  }[]
  tabs: string[]
}

export const schoolSpineDemoQuestions: QuestionDemoItem[] = [
  {
    id: 'q-1',
    number: 1,
    stem: 'Which force acts between two objects without physical contact?',
    options: [
      { key: 'A', text: 'Friction', note: 'Contact Force' },
      { key: 'B', text: 'Magnetic Force', correct: true, note: 'Non-contact Force' },
      { key: 'C', text: 'Muscular Force', note: 'Contact Force' },
      { key: 'D', text: 'Applied Force', note: 'Contact Force' },
    ],
    difficulty: 'Medium',
    bloomLevel: 'Conceptual Understanding (Level 2)',
    answerKeyExplanation:
      'Magnetic force operates across a distance through magnetic fields without direct atomic contact.',
    approved: false,
  },
  {
    id: 'q-2',
    number: 2,
    stem: 'Why does atmospheric pressure decrease as altitude increases?',
    options: [
      { key: 'A', text: 'The density of air molecules decreases at higher altitudes', correct: true, note: 'Direct physical mechanism' },
      { key: 'B', text: 'Gravity ceases to act on gases above sea level', note: 'Scientific misconception' },
      { key: 'C', text: 'Temperature rises consistently with every kilometer', note: 'Incorrect lapse rate' },
      { key: 'D', text: 'Air molecules become heavier and sink', note: 'Contradictory statement' },
    ],
    difficulty: 'Medium',
    bloomLevel: 'Analytical Reasoning (Level 4)',
    answerKeyExplanation:
      'At higher altitudes, there are fewer air molecules above a given surface area, producing lower hydrostatic air column pressure.',
    approved: false,
  },
  {
    id: 'q-3',
    number: 3,
    stem: 'A force of 100 N is applied perpendicular to a surface area of 2 m². What is the resulting pressure?',
    options: [
      { key: 'A', text: '200 Pa', note: 'Multiplication error' },
      { key: 'B', text: '50 Pa', correct: true, note: 'P = F / A = 100 / 2' },
      { key: 'C', text: '25 Pa', note: 'Calculation error' },
      { key: 'D', text: '0.02 Pa', note: 'Inversion error' },
    ],
    difficulty: 'Hard',
    bloomLevel: 'Quantitative Application (Level 3)',
    answerKeyExplanation:
      'Pressure is defined as Force divided by Area (P = F / A). Thus, 100 N / 2 m² = 50 Pascals (N/m²).',
    approved: false,
  },
]

export const payrollDemoEmployees: PayrollEmployeeRecord[] = [
  {
    id: 'emp-1',
    name: 'A. Sharma',
    role: 'Senior Systems Engineer',
    workingDays: 26,
    leave: 0,
    halfDays: 0,
    status: 'Ready',
    validationNote: 'Full attendance verified · Biometric punch integrity 100%',
    salaryAmount: '$6,450.00',
    attendanceLog: [
      { date: 'Sep 25', punchIn: '09:02 AM', punchOut: '06:15 PM', status: 'Present' },
      { date: 'Sep 26', punchIn: '08:58 AM', punchOut: '06:05 PM', status: 'Present' },
      { date: 'Sep 27', punchIn: '09:10 AM', punchOut: '06:20 PM', status: 'Present' },
    ],
    approved: false,
  },
  {
    id: 'emp-2',
    name: 'R. Singh',
    role: 'Operations Lead',
    workingDays: 24,
    leave: 2,
    halfDays: 0,
    status: 'Ready',
    validationNote: 'Approved medical leave reconciled · Statutory deduction mapped',
    salaryAmount: '$5,820.00',
    attendanceLog: [
      { date: 'Sep 23', punchIn: '--', punchOut: '--', status: 'Approved Sick Leave' },
      { date: 'Sep 24', punchIn: '--', punchOut: '--', status: 'Approved Sick Leave' },
      { date: 'Sep 25', punchIn: '09:00 AM', punchOut: '06:00 PM', status: 'Present' },
    ],
    approved: false,
  },
  {
    id: 'emp-3',
    name: 'P. Kumar',
    role: 'Product Designer',
    workingDays: 23,
    leave: 1,
    halfDays: 1,
    status: 'Review',
    validationNote: 'Unregularized afternoon half-day on Sep 14 · Awaiting manager sign-off',
    salaryAmount: '$4,910.00',
    attendanceLog: [
      { date: 'Sep 14', punchIn: '09:15 AM', punchOut: '01:30 PM', status: 'Half-Day (Pending Approval)' },
      { date: 'Sep 15', punchIn: '09:05 AM', punchOut: '06:10 PM', status: 'Present' },
    ],
    approved: false,
  },
  {
    id: 'emp-4',
    name: 'S. Patel',
    role: 'QA Automation Engineer',
    workingDays: 21,
    leave: 3,
    halfDays: 2,
    status: 'Exception',
    validationNote: 'Multiple biometric discrepancies · Shift overlap flag triggered',
    salaryAmount: '$4,350.00',
    attendanceLog: [
      { date: 'Sep 18', punchIn: '11:45 AM', punchOut: '03:10 PM', status: 'Discrepancy' },
      { date: 'Sep 19', punchIn: '--', punchOut: '06:00 PM', status: 'Missing Morning Punch' },
    ],
    approved: false,
  },
]

export const hospitalDemoStaff: RosterStaffRecord[] = [
  {
    id: 'st-1',
    name: 'Dr. Sharma',
    role: 'Senior Doctor',
    shifts: { mon: 'M', tue: 'E', wed: 'N', thu: 'OFF', fri: 'M', sat: 'E', sun: 'N' },
    restInterval: '14h Rest Compliant',
    compliant: true,
  },
  {
    id: 'st-2',
    name: 'Nurse A',
    role: 'Lead Nurse',
    shifts: { mon: 'E', tue: 'N', wed: 'OFF', thu: 'M', fri: 'E', sat: 'N', sun: 'OFF' },
    restInterval: '12h Rest Compliant',
    compliant: true,
  },
  {
    id: 'st-3',
    name: 'Nurse B',
    role: 'Staff Nurse',
    shifts: { mon: 'N', tue: 'OFF', wed: 'M', thu: 'E', fri: 'N', sat: 'OFF', sun: 'M' },
    restInterval: '16h Rest Compliant',
    compliant: true,
  },
  {
    id: 'st-4',
    name: 'Nurse C',
    role: 'Staff Nurse',
    shifts: { mon: 'OFF', tue: 'M', wed: 'E', thu: 'N', fri: 'OFF', sat: 'M', sun: 'E' },
    restInterval: '11h Rest Compliant',
    compliant: true,
  },
  {
    id: 'st-5',
    name: 'Dr. Mehta',
    role: 'Resident',
    shifts: { mon: 'M', tue: 'M', wed: 'E', thu: 'OFF', fri: 'N', sat: 'OFF', sun: 'M' },
    restInterval: '13h Rest Compliant',
    compliant: true,
  },
  {
    id: 'st-6',
    name: 'Nurse D',
    role: 'Staff Nurse',
    shifts: { mon: 'OFF', tue: 'OFF', wed: 'OFF', thu: 'OFF', fri: 'M', sat: 'M', sun: 'E' },
    restInterval: 'Relief Pool Standby',
    compliant: true,
    leaveStatus: 'Standby Reserve',
  },
]

export const caseStudyDemoConfigs: Record<string, CaseStudyDemoConfig> = {
  'schoolspine-ai': {
    slug: 'schoolspine-ai',
    productTitle: 'SCHOOLSPINE AI ASSESSMENT BUILDER',
    windowSubtitle: 'Pedagogical Reasoning Engine v2.4 · Syllabus: Grade 8 Science',
    mainActionLabel: 'Generate Assessment',
    processingSteps: [
      'Analyzing curriculum standards & syllabus benchmarks',
      'Understanding topic: Force & Pressure',
      'Applying cognitive difficulty parameters',
      'Structuring questions & multi-choice distractors',
      'Generating pedagogical assessment drafts',
      'Validating answers & diagnostic explanations',
    ],
    inputs: [
      { label: 'Grade', value: 'Grade 8 (VIII)', type: 'select' },
      { label: 'Subject', value: 'Science', type: 'select' },
      { label: 'Topic', value: 'Force & Pressure', type: 'text' },
      { label: 'Difficulty', value: 'Medium', type: 'pills', options: ['Easy', 'Medium', 'Hard'] },
      { label: 'Questions', value: '20 Questions', type: 'select' },
      { label: 'Question Type', value: 'Mixed (MCQ + Short)', type: 'select' },
    ],
    metrics: [
      { label: 'Total Questions', value: 20 },
      { label: 'Approved Questions', value: '0 / 20', highlight: true },
      { label: 'Curriculum Depth', value: 'NCERT / CBSE' },
      { label: 'Cognitive Level', value: 'Bloom Level 2-4' },
    ],
    tabs: ['Questions (20)', 'Answer Key', 'Export'],
  },

  'ai-payroll-automation': {
    slug: 'ai-payroll-automation',
    productTitle: 'AI PAYROLL CONTROL CENTER',
    windowSubtitle: 'Workforce Reconciliation Engine v3.1 · Cycle: Sep 2026',
    mainActionLabel: 'Process Payroll',
    processingSteps: [
      'Reading biometric punch logs & timecards',
      'Checking approved leave records & medical notes',
      'Calculating working days & statutory holidays',
      'Applying payroll bands & tax deductions',
      'Detecting exceptions & unregularized half-days',
      'Preparing payroll-ready disbursement batch',
    ],
    inputs: [
      { label: 'Employees', value: '248 Enrolled', type: 'text' },
      { label: 'Pay Period', value: 'September 2026', type: 'select' },
      { label: 'Attendance', value: 'Imported (Biometric Sync)', type: 'text' },
      { label: 'Leave Records', value: 'Imported (HR Portal)', type: 'text' },
      { label: 'Payroll Rules', value: 'Standard Tier 1', type: 'select' },
    ],
    metrics: [
      { label: 'Employees Processed', value: 248 },
      { label: 'Ready for Approval', value: 231, highlight: true },
      { label: 'Records Requiring Review', value: 17, warning: true },
      { label: 'Working Calendar', value: '26 Days' },
    ],
    tabs: ['All Records (248)', 'Ready (231)', 'Review (17)', 'Exception (4)'],
  },

  'ai-hospital-roster': {
    slug: 'ai-hospital-roster',
    productTitle: 'AI ROSTER CONTROL CENTER',
    windowSubtitle: 'Constraint-Based Scheduling Engine v4.0 · Acute Care Unit',
    mainActionLabel: 'Generate Roster',
    processingSteps: [
      'Reading staff availability & credential profiles',
      'Checking leave requests & mandatory recovery windows',
      'Understanding rotation rules & specialty skill mix',
      'Checking departmental coverage requirements',
      'Resolving constraint matrix & avoiding fatigue clashes',
      'Generating roster draft & validating rest intervals',
    ],
    inputs: [
      { label: 'Department', value: 'Emergency Department', type: 'select', options: ['Emergency', 'ICU', 'Pediatrics'] },
      { label: 'Staff Pool', value: '32 Active Staff', type: 'text' },
      { label: 'Rotation Cycle', value: '7 Days Rolling', type: 'select' },
      { label: 'Shifts', value: 'Morning / Evening / Night', type: 'text' },
      { label: 'Coverage Rule', value: 'Min 6 Nurses, 3 Docs', type: 'text' },
    ],
    metrics: [
      { label: 'Department', value: 'Emergency' },
      { label: 'Staff Count', value: 32 },
      { label: 'Coverage Requirements', value: '100% Met', highlight: true },
      { label: 'Constraint Violations', value: 0, highlight: true },
    ],
    tabs: ['Weekly Schedule', 'Coverage Grid', 'Relief Pool Standby'],
  },
}
