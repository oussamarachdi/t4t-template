// ─── SPEAKERS ───────────────────────────────────────────────────────────────
export const speakers = [
  {
    id: 1,
    name: "Dr. Fatima Zahra",
    role: "Education Innovation Lead",
    company: "UNESCO",
    country: "Morocco",
    flag: "🇲🇦",
    topic: "Teaching across cultures: building classrooms without borders",
    avatar: "FZ",
    color: "#E8761A",
  },
  {
    id: 2,
    name: "James Okonkwo",
    role: "Head of Global Curriculum",
    company: "Cambridge Assessment",
    country: "Nigeria",
    flag: "🇳🇬",
    topic: "What the world's best teachers have in common",
    avatar: "JO",
    color: "#C4610E",
  },
  {
    id: 3,
    name: "Elena Vasquez",
    role: "EdTech Founder",
    company: "ClassBridge",
    country: "Colombia",
    flag: "🇨🇴",
    topic: "Technology as a bridge, not a barrier in education",
    avatar: "EV",
    color: "#F58C30",
  },
  {
    id: 4,
    name: "Tariq Al-Rashid",
    role: "Director of Teacher Training",
    company: "Ministry of Education, UAE",
    country: "UAE",
    flag: "🇦🇪",
    topic: "Preparing teachers for the classrooms of 2030",
    avatar: "TA",
    color: "#A05010",
  },
];

// ─── ORGANIZING TEAM ────────────────────────────────────────────────────────
export const team = [
  { id: 1, name: "Sana Mejri",      role: "Event Director",       avatar: "SM", country: "Tunisia", flag: "🇹🇳" },
  { id: 2, name: "Khalil Brini",    role: "Marketing Lead",       avatar: "KB", country: "Tunisia", flag: "🇹🇳" },
  { id: 3, name: "Dorra Hamdi",     role: "Partnerships Manager", avatar: "DH", country: "Tunisia", flag: "🇹🇳" },
  { id: 4, name: "Mehdi Jouini",    role: "Logistics Lead",       avatar: "MJ", country: "Tunisia", flag: "🇹🇳" },
  { id: 5, name: "Ines Karoui",     role: "Speaker Relations",    avatar: "IK", country: "Tunisia", flag: "🇹🇳" },
  { id: 6, name: "Youssef Abidi",   role: "Digital Experience",   avatar: "YA", country: "Tunisia", flag: "🇹🇳" },
];

// ─── AGENDA ─────────────────────────────────────────────────────────────────
export const agenda = [
  {
    day: "Day 1",
    date: "June 10, 2025",
    label: "Inspire",
    events: [
      { time: "09:00", title: "Registration & Welcome Coffee",          type: "break"    },
      { time: "10:00", title: "Opening Keynote — The Power of Teaching", type: "keynote" },
      { time: "11:00", title: "Speaker: Dr. Fatima Zahra",              type: "talk"     },
      { time: "12:30", title: "Networking Lunch",                       type: "break"    },
      { time: "14:00", title: "Panel: Global Classrooms, Local Impact", type: "panel"    },
      { time: "15:30", title: "Workshop: Adaptive Teaching Methods",    type: "workshop" },
      { time: "17:00", title: "Evening Mixer & Close",                  type: "break"    },
    ],
  },
  {
    day: "Day 2",
    date: "June 11, 2025",
    label: "Grow",
    events: [
      { time: "09:30", title: "Morning Reflection & Icebreakers",       type: "break"    },
      { time: "10:00", title: "Speaker: James Okonkwo",                 type: "talk"     },
      { time: "11:15", title: "Speaker: Elena Vasquez",                 type: "talk"     },
      { time: "12:30", title: "Lunch & Opportunity Fair",               type: "break"    },
      { time: "14:00", title: "Workshop: Classroom to the World",       type: "workshop" },
      { time: "15:30", title: "Speaker: Tariq Al-Rashid",               type: "talk"     },
      { time: "17:00", title: "Closing Ceremony & Certificate Award",   type: "keynote"  },
    ],
  },
];

// ─── OPPORTUNITIES (replace with Google Sheets CSV URL) ─────────────────────
export const opportunities = [
  {
    id: 1,
    title: "Global Teacher — English Language Teaching",
    org: "AIESEC in China",
    country: "China",
    flag: "🇨🇳",
    duration: "6–8 weeks",
    type: "Teaching Exchange",
    deadline: "May 25, 2025",
    tags: ["English", "Teaching", "Stipend"],
    link: "#",
  },
  {
    id: 2,
    title: "STEM Education Volunteer Program",
    org: "AIESEC in Brazil",
    country: "Brazil",
    flag: "🇧🇷",
    duration: "8 weeks",
    type: "Volunteer",
    deadline: "June 1, 2025",
    tags: ["STEM", "Volunteer", "Hands-on"],
    link: "#",
  },
  {
    id: 3,
    title: "Primary Education Exchange",
    org: "AIESEC in India",
    country: "India",
    flag: "🇮🇳",
    duration: "6 weeks",
    type: "Teaching Exchange",
    deadline: "May 30, 2025",
    tags: ["Primary", "Teaching", "Paid"],
    link: "#",
  },
  {
    id: 4,
    title: "Youth Development Volunteer",
    org: "AIESEC in Kenya",
    country: "Kenya",
    flag: "🇰🇪",
    duration: "8 weeks",
    type: "Volunteer",
    deadline: "June 15, 2025",
    tags: ["Youth", "NGO", "Volunteer"],
    link: "#",
  },
  {
    id: 5,
    title: "Language & Culture Teaching",
    org: "AIESEC in South Korea",
    country: "South Korea",
    flag: "🇰🇷",
    duration: "2 months",
    type: "Teaching Exchange",
    deadline: "June 10, 2025",
    tags: ["Language", "Culture", "Stipend"],
    link: "#",
  },
  {
    id: 6,
    title: "Community Education Volunteer",
    org: "AIESEC in Morocco",
    country: "Morocco",
    flag: "🇲🇦",
    duration: "6 weeks",
    type: "Volunteer",
    deadline: "July 1, 2025",
    tags: ["Community", "Education", "Volunteer"],
    link: "#",
  },
];

// ─── BENEFITS ────────────────────────────────────────────────────────────────
export const benefits = [
  {
    icon: "📚",
    title: "Teach Globally",
    desc: "Get placed in real classrooms across 60+ countries and make a tangible impact on students' lives.",
  },
  {
    icon: "🌍",
    title: "Cultural Exchange",
    desc: "Immerse yourself in a new culture, language, and way of life while sharing your own.",
  },
  {
    icon: "🤝",
    title: "Mentorship Network",
    desc: "Connect with experienced educators and AIESEC alumni who've taught on every continent.",
  },
  {
    icon: "🎓",
    title: "Certified Experience",
    desc: "Receive a recognized teaching certificate and reference letter to boost your academic profile.",
  },
  {
    icon: "💡",
    title: "Pedagogy Workshops",
    desc: "Attend expert-led workshops on modern teaching methods, EdTech tools, and inclusive education.",
  },
  {
    icon: "✈️",
    title: "Global Placement",
    desc: "Get priority access to AIESEC's Global Teacher placements in high-demand destinations.",
  },
];
