export interface SubjectTopic {
  name: string
  count: string
}

export interface Subject {
  name: string
  icon: string
  colorClass: string
  topics: SubjectTopic[]
}

export interface PlatformFeature {
  icon: string
  title: string
  description: string
}

export interface PlatformStat {
  label: string
  value: string
}

export interface PlatformData {
  slug: string
  name: string
  exam: string
  tagline: string
  heroDescription: string
  accentColor: string
  emoji: string
  stats: PlatformStat[]
  features: PlatformFeature[]
  subjects: Subject[]
}

export const jeeRankUpData: PlatformData = {
  slug: "jeerankup",
  name: "JeeRankUp",
  exam: "JEE Main & Advanced",
  tagline: "Where toppers are made.",
  heroDescription:
    "India's most accurate JEE simulation platform. 2,400+ tests, NTA-exact interface, live All-India ranking, and AI analytics that pinpoint exactly where your rank will be gained or lost.",
  accentColor: "#1B2D8F",
  emoji: "⚛️",
  stats: [
    { value: "2,400+", label: "Mock Tests" },
    { value: "800K+", label: "Questions" },
    { value: "10 Yrs", label: "PYQ Bank" },
    { value: "28K+", label: "Students" },
    { value: "4.9★", label: "Rating" },
  ],
  features: [
    {
      icon: "📊",
      title: "AI Performance Analytics",
      description:
        "After every test, get a deep breakdown of accuracy by topic, time management, and an estimated AIR range based on your score.",
    },
    {
      icon: "🎯",
      title: "NTA-Exact Interface",
      description:
        "Same layout, same question types, same navigation as the real JEE interface. No surprises on exam day.",
    },
    {
      icon: "🏆",
      title: "Live All-India Ranking",
      description:
        "Know your mock AIR updated after every test. Compare yourself to 28,000+ active students on the same paper.",
    },
    {
      icon: "📹",
      title: "Video Solutions",
      description:
        "Every single question has a detailed video solution by IIT graduates. Understand the approach, not just the answer.",
    },
    {
      icon: "📚",
      title: "10-Year PYQ Bank",
      description:
        "Comprehensive previous year question bank for both JEE Main and Advanced - categorised, difficulty-tagged, and explained.",
    },
    {
      icon: "⚡",
      title: "Chapter-wise Drills",
      description:
        "Targeted 20-30 question sets for each chapter. Build mastery topic by topic before attempting full-length mocks.",
    },
  ],
  subjects: [
    {
      name: "Physics",
      icon: "⚡",
      colorClass: "text-[#1B2D8F] bg-[linear-gradient(135deg,#EEF1FC,#DDE3FA)]",
      topics: [
        { name: "Mechanics", count: "180+ Q" },
        { name: "Electrostatics & Magnetism", count: "220+ Q" },
        { name: "Optics & Waves", count: "140+ Q" },
        { name: "Modern Physics", count: "160+ Q" },
        { name: "Thermodynamics", count: "90+ Q" },
        { name: "23 more topics", count: "" },
      ],
    },
    {
      name: "Chemistry",
      icon: "🧪",
      colorClass: "text-[#D93025] bg-[linear-gradient(135deg,#FEF1F0,#FDE0DE)]",
      topics: [
        { name: "Physical Chemistry", count: "200+ Q" },
        { name: "Organic Chemistry", count: "240+ Q" },
        { name: "Inorganic Chemistry", count: "180+ Q" },
        { name: "Electrochemistry", count: "80+ Q" },
        { name: "Chemical Bonding", count: "120+ Q" },
        { name: "19 more topics", count: "" },
      ],
    },
    {
      name: "Mathematics",
      icon: "📐",
      colorClass: "text-[#B8860B] bg-[linear-gradient(135deg,#FFF8E8,#FFF0C8)]",
      topics: [
        { name: "Calculus (Diff. & Integral)", count: "260+ Q" },
        { name: "Algebra & Complex Numbers", count: "190+ Q" },
        { name: "Coordinate Geometry", count: "170+ Q" },
        { name: "Vectors & 3D Geometry", count: "140+ Q" },
        { name: "Probability & Statistics", count: "110+ Q" },
        { name: "21 more topics", count: "" },
      ],
    },
  ],
}
