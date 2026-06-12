// ─── Platform Data ───────────────────────────────────────────────
export interface Platform {
  slug: string;
  name: string;
  tagline: string;
  exam: string;
  tests: string;
  questions: string;
  color: string;
  features: string[];
  description: string;
  highlights: { label: string; value: string }[];
}

export const platforms: Platform[] = [
  {
    slug: "jeerankup",
    name: "JeeRankUp",
    tagline: "Conquer JEE Main & Advanced",
    exam: "JEE Main & Advanced",
    tests: "2,400+",
    questions: "800K+",
    color: "#203BE0",
    description:
      "Master Physics, Chemistry & Mathematics with chapter-wise, subject-wise, and full-length mock tests designed by IITian faculty. Our adaptive AI engine identifies weak areas and builds a personalized roadmap to your dream IIT.",
    features: [
      "Chapter-wise & subject-wise tests",
      "Full-length JEE Main & Advanced mocks",
      "Previous year papers (2015–2025)",
      "Adaptive difficulty engine",
      "Detailed solutions with video explanations",
      "National percentile & AIR prediction",
    ],
    highlights: [
      { label: "Mock Tests", value: "2,400+" },
      { label: "Question Bank", value: "800K+" },
      { label: "Top 100 Rankers", value: "340+" },
      { label: "Avg. Score Improvement", value: "47%" },
    ],
  },
  {
    slug: "neetrankup",
    name: "NeetRankUp",
    tagline: "Ace NEET UG with NCERT Precision",
    exam: "NEET UG",
    tests: "1,800+",
    questions: "600K+",
    color: "#10B981",
    description:
      "NCERT-mapped question bank covering Physics, Chemistry & Biology. Every question is tagged to specific NCERT chapters, page numbers, and topic weightage. Practice with the precision that NEET demands.",
    features: [
      "NCERT chapter & page-level tagging",
      "Topic-wise weightage analysis",
      "Full-length NEET mock tests",
      "Biology special: assertion-reason practice",
      "Previous year papers with NCERT mapping",
      "Performance analytics by NCERT chapter",
    ],
    highlights: [
      { label: "Mock Tests", value: "1,800+" },
      { label: "Question Bank", value: "600K+" },
      { label: "NCERT Coverage", value: "100%" },
      { label: "Selections in Top Colleges", value: "5,200+" },
    ],
  },
  {
    slug: "ndarankup",
    name: "NDARankUp",
    tagline: "March Towards NDA & NA",
    exam: "NDA & NA",
    tests: "900+",
    questions: "200K+",
    color: "#F59E0B",
    description:
      "Comprehensive preparation for GAT (General Ability Test) and Mathematics paper. Covers English, General Knowledge, Physics, Chemistry, Geography, History, and Current Affairs — everything the NDA exam demands.",
    features: [
      "GAT-specific question banks",
      "Mathematics practice sets (NDA pattern)",
      "Current affairs monthly compilations",
      "English comprehension & grammar drills",
      "Full-length NDA mock tests",
      "SSB interview preparation resources",
    ],
    highlights: [
      { label: "Mock Tests", value: "900+" },
      { label: "Question Bank", value: "200K+" },
      { label: "GAT Modules", value: "120+" },
      { label: "Defence Selections", value: "1,800+" },
    ],
  },
];

// ─── Pricing Data ────────────────────────────────────────────────
export interface PricingPlan {
  name: string;
  monthlyPrice: number;
  annualPrice: number;
  description: string;
  features: string[];
  cta: string;
  popular?: boolean;
  premium?: boolean;
}

export const pricingPlans: PricingPlan[] = [
  {
    name: "Starter",
    monthlyPrice: 0,
    annualPrice: 0,
    description: "Get started with the essentials — forever free.",
    features: [
      "5 free mock tests per exam",
      "Basic performance report",
      "3-year previous year questions",
      "Community discussion forum",
      "Limited question explanations",
    ],
    cta: "Get Started Free",
  },
  {
    name: "Pro",
    monthlyPrice: 499,
    annualPrice: 3999,
    description: "Unlimited access for serious aspirants.",
    features: [
      "Unlimited mock tests",
      "AI-powered performance analytics",
      "Live All India Rank tracking",
      "Detailed step-by-step solutions",
      "10-year previous year questions",
      "Custom test generator",
      "Weakness analysis dashboard",
    ],
    cta: "Start Pro Trial",
    popular: true,
  },
  {
    name: "Premium",
    monthlyPrice: 1499,
    annualPrice: 11999,
    description: "White-glove preparation with mentorship.",
    features: [
      "Everything in Pro",
      "Personalized AI study plans",
      "1-on-1 mentor sessions (4/month)",
      "Priority doubt resolution",
      "Early access to LMS platform",
      "Printed study material (optional)",
      "Scholarship test access",
      "Parent progress reports",
    ],
    cta: "Start Premium Trial",
    premium: true,
  },
];

// ─── Testimonials ────────────────────────────────────────────────
export interface Testimonial {
  name: string;
  achievement: string;
  quote: string;
  avatar: string;
  platform: string;
}

export const testimonials: Testimonial[] = [
  {
    name: "Priya Sharma",
    achievement: "JEE Advanced AIR 312",
    quote:
      "Rank Sarthi's mock tests were incredibly close to the actual exam. The AI analytics helped me identify exactly where I was losing marks, and I improved my score by 60 marks in just 2 months.",
    avatar: "PS",
    platform: "JeeRankUp",
  },
  {
    name: "Arjun Patel",
    achievement: "NEET UG Score: 698/720",
    quote:
      "The NCERT-mapped questions were a game-changer. I could trace every question back to the exact textbook page. This level of precision is unmatched by any other platform.",
    avatar: "AP",
    platform: "NeetRankUp",
  },
  {
    name: "Sneha Reddy",
    achievement: "JEE Main 99.8 Percentile",
    quote:
      "The personalized study plan adapted to my schedule perfectly. The mentor sessions cleared my toughest doubts in Organic Chemistry. Truly worth every rupee.",
    avatar: "SR",
    platform: "JeeRankUp",
  },
  {
    name: "Vikram Singh",
    achievement: "NDA Written: 387/900",
    quote:
      "NDARankUp covered everything — GAT, Maths, even current affairs compilations. The mock tests simulated real exam pressure perfectly. Proud to serve the nation!",
    avatar: "VS",
    platform: "NDARankUp",
  },
  {
    name: "Ananya Iyer",
    achievement: "NEET UG AIR 1,247",
    quote:
      "I started using Rank Sarthi just 6 months before NEET. The adaptive difficulty engine pushed me exactly where I needed. My Biology accuracy went from 72% to 94%.",
    avatar: "AI",
    platform: "NeetRankUp",
  },
  {
    name: "Rohit Gupta",
    achievement: "JEE Advanced AIR 89",
    quote:
      "The quality of questions here rivals the best coaching institutes. The detailed video solutions for JEE Advanced problems saved me hours of frustration.",
    avatar: "RG",
    platform: "JeeRankUp",
  },
];

// ─── Blog Data ───────────────────────────────────────────────────
export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: "JEE" | "NEET" | "NDA" | "Study Tips";
  author: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogPosts: BlogPost[] = [
  {
    slug: "jee-main-2025-analysis",
    title: "JEE Main 2025 Paper Analysis: Key Trends & Difficulty Breakdown",
    excerpt:
      "A comprehensive analysis of this year's JEE Main paper covering difficulty levels, topic-wise weightage shifts, and what aspirants should focus on for upcoming sessions.",
    category: "JEE",
    author: "Dr. Anil Kumar",
    date: "2025-02-15",
    readTime: "8 min read",
    content: `## JEE Main 2025: A Comprehensive Paper Analysis

The JEE Main 2025 January session saw significant shifts in question patterns that every aspirant should understand. Here's our detailed breakdown.

### Physics: Moderate to Difficult
Physics maintained its reputation as the trickiest section. **Electrodynamics** and **Modern Physics** dominated with 35% weightage combined. Notably, numerical-type questions increased from 5 to 7, demanding stronger calculation skills.

**Key Topics Tested:**
- Electromagnetic Induction (3 questions)
- Semiconductor Physics (2 questions)  
- Rotational Mechanics (3 questions)
- Wave Optics (2 questions)

### Chemistry: Easy to Moderate
Chemistry was the most scoring section. **Organic Chemistry** saw a notable increase in weightage (40%), with emphasis on reaction mechanisms and stereochemistry. Physical Chemistry focused heavily on Thermodynamics and Electrochemistry.

### Mathematics: Difficult
Mathematics pushed boundaries this year. **Calculus** dominated with 35% weightage. Integration problems were particularly challenging, requiring advanced substitution techniques.

### Our Recommendation
Focus your revision on high-weightage chapters. Use Rank Sarthi's topic-wise test feature to drill down into specific areas. The AI analytics will help you track improvement in real-time.`,
  },
  {
    slug: "ncert-neet-preparation-guide",
    title: "How to Use NCERT Textbooks Effectively for NEET 2025 Preparation",
    excerpt:
      "Master the art of NCERT-based preparation with our proven strategies. Learn how to extract maximum value from every chapter for NEET success.",
    category: "NEET",
    author: "Dr. Meera Joshi",
    date: "2025-03-01",
    readTime: "10 min read",
    content: `## NCERT: Your NEET Bible

Every NEET topper will tell you the same thing — NCERT is non-negotiable. But simply reading the textbook isn't enough. Here's how to extract maximum value.

### The Three-Pass Reading Strategy

**Pass 1: Understanding (Week 1-8)**
Read each chapter thoroughly. Don't memorize — understand concepts. Mark sentences you find confusing.

**Pass 2: Highlighting (Week 9-16)**  
Re-read with a highlighter. Focus on:
- Definitions and key terms
- Diagrams and flowcharts
- Examples and exceptions
- Bolded text and margin notes

**Pass 3: Active Recall (Week 17-24)**
Cover the text and try to recall key points. Use Rank Sarthi's NCERT-tagged questions to test yourself chapter-by-chapter.

### Biology: The NCERT Gold Standard
For Biology, 95% of NEET questions come directly from NCERT. Pay special attention to:
- Ecology (Chapters 13-16 of Class 12)
- Human Physiology (Class 11)
- Genetics & Evolution (Class 12)

### Using Rank Sarthi's NCERT Mapping
Our platform tags every question to specific NCERT chapters and page numbers. After completing a chapter, immediately attempt the corresponding questions on NeetRankUp to cement your learning.`,
  },
  {
    slug: "nda-gat-preparation-strategy",
    title: "NDA GAT Preparation: A 6-Month Strategy for Success",
    excerpt:
      "A structured approach to conquering the General Ability Test section of NDA. From English to Current Affairs, we've got you covered.",
    category: "NDA",
    author: "Col. Rajesh Verma (Retd.)",
    date: "2025-01-20",
    readTime: "12 min read",
    content: `## Conquering the NDA GAT: Your 6-Month Battle Plan

The General Ability Test (GAT) is where NDA aspirants can make or break their chances. With 600 marks at stake, a strategic approach is essential.

### Month 1-2: Foundation Building
Focus on English and General Knowledge fundamentals:
- **English**: Grammar rules, vocabulary building (learn 20 words daily)
- **History**: Ancient, Medieval, and Modern India
- **Geography**: Physical geography basics

### Month 3-4: Deep Dive
- **Current Affairs**: Start reading newspapers daily
- **Science**: Physics and Chemistry basics from Class 11-12
- **Polity**: Indian Constitution, governance structures

### Month 5-6: Test & Revise
- Take 3 full-length mocks per week on NDARankUp
- Review all Current Affairs compilations
- Focus on your weakest areas using analytics

### Pro Tip
NDARankUp's monthly current affairs compilations are curated specifically for NDA aspirants. Each compilation covers 200+ important events with MCQ practice.`,
  },
  {
    slug: "study-schedule-competitive-exams",
    title: "How to Build a Study Schedule That Actually Works for Competitive Exams",
    excerpt:
      "Stop wasting time with unrealistic timetables. Learn to create a flexible, science-backed study schedule that adapts to your energy levels.",
    category: "Study Tips",
    author: "Prof. Kavitha Nair",
    date: "2025-03-15",
    readTime: "7 min read",
    content: `## The Science of Effective Study Schedules

Most study schedules fail because they're rigid, unrealistic, and don't account for human psychology. Let's fix that.

### The 3-Block System
Divide your study day into three blocks based on cognitive load:

**Block 1 (Morning): High-Intensity** — 3 hours
- New concepts, complex problem-solving
- Subjects you find most difficult
- Zero distractions, phone on airplane mode

**Block 2 (Afternoon): Medium-Intensity** — 3 hours  
- Practice problems and revision
- NCERT reading and note-making
- Mock test analysis

**Block 3 (Evening): Low-Intensity** — 2 hours
- Quick revision of the day's topics
- Formula review and flashcards
- Light reading (current affairs, English)

### The 50-10-50 Rule
Study for 50 minutes, break for 10, repeat. After every 3 cycles, take a 30-minute break.

### Use Rank Sarthi's Analytics
After every mock test, spend at least 1 hour analyzing your performance. Identify:
- Topics with accuracy below 60%
- Time taken per question vs. ideal time
- Silly mistakes vs. conceptual gaps`,
  },
  {
    slug: "overcoming-exam-anxiety",
    title: "Conquering Exam Anxiety: A Mental Wellness Guide for JEE & NEET Aspirants",
    excerpt:
      "Exam anxiety affects 73% of competitive exam aspirants. Learn research-backed techniques to manage stress and perform your best.",
    category: "Study Tips",
    author: "Dr. Priya Menon",
    date: "2025-04-01",
    readTime: "9 min read",
    content: `## Understanding Exam Anxiety

Exam anxiety isn't weakness — it's your brain's natural fight-or-flight response misapplied to academic situations. The good news? It's completely manageable.

### Signs You Need to Address
- Blanking out during exams despite preparation
- Difficulty sleeping before test days  
- Physical symptoms: sweaty palms, racing heart
- Negative self-talk and catastrophizing

### Technique 1: Box Breathing (4-4-4-4)
Before any test:
1. Breathe in for 4 seconds
2. Hold for 4 seconds
3. Breathe out for 4 seconds
4. Hold for 4 seconds
Repeat 5 times. This activates your parasympathetic nervous system.

### Technique 2: Exposure Therapy
The best way to reduce exam anxiety is to take more exams. Use Rank Sarthi's mock tests to simulate real exam conditions:
- Set a timer
- Sit at a desk
- No breaks during the test
- Review results calmly afterward

### Technique 3: Reframe Your Thoughts
Replace "I must score 99 percentile" with "I'll give my best attempt." Process-oriented thinking reduces pressure significantly.`,
  },
  {
    slug: "physics-problem-solving-techniques",
    title: "5 Advanced Physics Problem-Solving Techniques for JEE Advanced",
    excerpt:
      "Go beyond formulas. Learn the thinking patterns that JEE Advanced toppers use to crack the most challenging physics problems.",
    category: "JEE",
    author: "Prof. Sanjay Mishra",
    date: "2025-04-10",
    readTime: "11 min read",
    content: `## Think Like a Physicist

JEE Advanced Physics isn't about memorizing formulas — it's about thinking. Here are 5 techniques that differentiate toppers.

### 1. Dimensional Analysis First
Before solving any problem, check dimensions. This eliminates wrong options instantly in MCQs and catches errors in numerical problems.

### 2. Symmetry Arguments
Many complex problems become trivial when you identify symmetries:
- Mirror symmetry in electric field problems
- Rotational symmetry in circular motion
- Time-reversal symmetry in oscillation problems

### 3. Limiting Cases
Test your answer by plugging in extreme values:
- What happens when mass → 0 or → ∞?
- What if the angle is 0° or 90°?
- Does the formula reduce to a known result?

### 4. Energy Methods Over Force Methods
When a problem seems to require complex force analysis, try energy conservation instead. It's almost always simpler.

### 5. Draw Before You Calculate
Spend 30 seconds drawing a clear diagram. Label all forces, velocities, and angles. 80% of errors come from poor visualization.

### Practice These on JeeRankUp
Our JEE Advanced mock tests are designed to test these exact thinking patterns. Use the detailed solutions to understand the approach, not just the answer.`,
  },
];

// ─── Team Data ───────────────────────────────────────────────────
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  avatar: string;
}

export const teamMembers: TeamMember[] = [
  {
    name: "Rajesh Krishnan",
    role: "Founder & CEO",
    bio: "IIT Bombay alumnus with 15+ years in ed-tech. Previously led product at a top Indian education startup. Passionate about democratizing quality exam preparation.",
    avatar: "RK",
  },
  {
    name: "Dr. Sunita Agarwal",
    role: "Chief Academic Officer",
    bio: "PhD in Physics from IISc Bangalore. 20 years of teaching experience for JEE & NEET. Author of 3 bestselling preparation guides.",
    avatar: "SA",
  },
  {
    name: "Amit Deshmukh",
    role: "CTO",
    bio: "Ex-Google engineer. MS in Computer Science from Stanford. Built scalable platforms serving millions of users. Leads our AI and analytics engine.",
    avatar: "AD",
  },
  {
    name: "Neha Gupta",
    role: "VP of Product",
    bio: "IIM Ahmedabad graduate. 10 years in product management across ed-tech and fintech. Obsessed with user experience and data-driven design.",
    avatar: "NG",
  },
  {
    name: "Dr. Vivek Sharma",
    role: "Head of Content - JEE",
    bio: "IIT Delhi gold medalist. 12 years of experience creating JEE preparation content. Has mentored 50+ students who secured top 100 AIR.",
    avatar: "VH",
  },
  {
    name: "Dr. Lakshmi Menon",
    role: "Head of Content - NEET",
    bio: "AIIMS Delhi alumna. Specialist in Biology education with a focus on NCERT-aligned content creation. Her students have a 95% selection rate.",
    avatar: "LM",
  },
];

// ─── Timeline Data ───────────────────────────────────────────────
export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
}

export const timeline: TimelineEvent[] = [
  {
    year: "2019",
    title: "The Spark",
    description:
      "Founded in a Bengaluru apartment by Rajesh Krishnan after witnessing the gap between premium coaching and affordable online preparation.",
  },
  {
    year: "2020",
    title: "JeeRankUp Launch",
    description:
      "Launched our first platform with 500 JEE mock tests. Within 6 months, 10,000 students were actively using the platform.",
  },
  {
    year: "2021",
    title: "NeetRankUp Goes Live",
    description:
      "Expanded to NEET preparation with our revolutionary NCERT-mapped question bank. Crossed 25,000 active users.",
  },
  {
    year: "2022",
    title: "AI Analytics Engine",
    description:
      "Launched our proprietary AI engine that predicts student performance and creates personalized study plans. 98% accuracy in AIR predictions.",
  },
  {
    year: "2023",
    title: "NDARankUp & 50K Users",
    description:
      "Added NDA preparation platform. Crossed 50,000 active students. First batch of 340+ students in JEE Advanced top 1000.",
  },
  {
    year: "2024",
    title: "Series A & LMS Development",
    description:
      "Raised Series A funding. Began development of our comprehensive Learning Management System with live classes and recorded lectures.",
  },
  {
    year: "2025",
    title: "The Future",
    description:
      "Launching Rank Sarthi LMS — a complete learning ecosystem with live classes, recorded lectures, and AI-powered mentorship.",
  },
];

// ─── Navigation Data ─────────────────────────────────────────────
export const navLinks = [
  { name: "Platforms", href: "/platforms/jeerankup" },
  { name: "Plans", href: "/#pricing" },
  { name: "About Us", href: "/about" },
  { name: "Blog", href: "/blogs" },
  { name: "Contact", href: "/contact" },
];

export const footerLinks = {
  platforms: [
    { name: "JeeRankUp", href: "/platforms/jeerankup" },
    { name: "NeetRankUp", href: "/platforms/neetrankup" },
    { name: "NDARankUp", href: "/platforms/ndarankup" },
    { name: "LMS (Coming Soon)", href: "#" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Our Team", href: "/about#team" },
    { name: "Blog", href: "/blogs" },
    { name: "Careers", href: "#" },
    { name: "Contact", href: "/contact" },
  ],
  support: [
    { name: "Help Centre", href: "#" },
    { name: "Plans & Pricing", href: "/#pricing" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" },
    { name: "Refund Policy", href: "#" },
  ],
};
