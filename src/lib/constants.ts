import type { Testimonial, TeamMember } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    company: "Daluxe Skincare",
    rating: 5,
    tags: ["E-COMMERCE", "CONVERSION OPTIMIZATION"],
    content:
      "We built a high-converting skincare store from scratch, optimized specifically for mobile users and Indian buyers. The focus was on trust, clean design, and conversion-driven product pages.",
    category: "E-COMMERCE",
    results: ["\u20B980,000+ revenue generated", "Optimized product page structure", "Smooth checkout + mobile-first UX"],
    flexTag: "E-commerce Growth",
  },
  {
    id: "2",
    company: "MFP Gym",
    rating: 5,
    tags: ["WEBSITE", "BRANDING"],
    content:
      "We created a strong digital presence for MFP Gym that reflects its energy and professionalism, making it easier for potential members to trust and join.",
    category: "BRANDING",
    results: ["Improved local brand credibility", "Clean and structured website", "Better first impression for new clients"],
    flexTag: "Local Business Branding",
  },
  {
    id: "3",
    company: "Roman Gym",
    rating: 5,
    tags: ["WEB DEVELOPMENT"],
    content:
      "We designed a modern and impactful website for Roman Gym, helping them present their facilities and services in a premium and professional way.",
    category: "WEB DEVELOPMENT",
    results: ["Professional online presence", "Clear service showcasing", "Increased inquiries from new visitors"],
    flexTag: "Conversion Optimization",
  },
  {
    id: "4",
    company: "Valencir\u00E9",
    rating: 5,
    tags: ["BRANDING", "E-COMMERCE", "CONTENT STRATEGY"],
    content:
      "We built Valencir\u00E9 as a performance-driven clothing brand with a strong aesthetic identity, focusing on viral content and demand-driven launches.",
    category: "BRANDING",
    results: ["Brand built from scratch", "Pre-launch hype strategy", "Content designed for organic reach"],
    flexTag: "Performance Marketing Ready",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Nieraj Niketan S",
    role: "FOUNDER & CHIEF STRATEGIST",
    image: "/images/team/nieraj.jpg",
    featured: true,
  },
  {
    id: "2",
    name: "Pranesh Mithun GS",
    role: "CO-FOUNDER & HEAD OF OPERATIONS",
    image: "/images/team/pranesh.jpg",
  },
  {
    id: "3",
    name: "Rithvick",
    role: "CO-FOUNDER & DIGITAL SOLUTIONS LEAD",
    image: "/images/team/rithvick.jpg",
  },
];

export const NAV_LINKS = [
  { href: "/about", label: "ABOUT" },
  { href: "/services", label: "SERVICES" },
  { href: "/testimonials", label: "TESTIMONIALS" },
  { href: "/refund", label: "REFUND" },
];

export const FOOTER_LINKS = {
  navigation: [
    { label: "About", href: "/about" },
    { label: "Services", href: "/services" },
    { label: "Testimonials", href: "/testimonials" },
    { label: "Refund Policy", href: "/refund" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "TERMS & CONDITIONS", href: "/terms" },
    { label: "PRIVACY POLICY", href: "/privacy" },
    { label: "REFUND POLICY", href: "/refund" },
  ],
};

export const CATEGORIES = [
  "ALL",
  "E-COMMERCE",
  "WEB DEVELOPMENT",
  "BRANDING",
];

export const PROCESS_STEPS = [
  {
    number: "01",
    title: "Discovery & Strategy",
    description:
      "Our experts dive deep into your business needs, analyzing your goals and crafting a tailored strategy for success.",
  },
  {
    number: "02",
    title: "Design & Planning",
    description:
      "Our designers and strategists create wireframes, prototypes, and detailed roadmaps to ensure flawless execution.",
  },
  {
    number: "03",
    title: "Development & Automation",
    description:
      "Our engineers build cutting-edge solutions with AI-powered automation, ensuring speed, scalability, and performance.",
  },
  {
    number: "04",
    title: "Launch & Optimization",
    description:
      "We launch your solution with precision, then continuously optimize based on real-time data and user insights.",
  },
  {
    number: "05",
    title: "Continued Growth",
    description:
      "Our ongoing support keeps your systems running smoothly, adapting to new challenges and scaling with your business.",
  },
];

export const SERVICES = [
  {
    id: "custom-web-dev",
    title: "Custom Web Development",
    description: "Bespoke web solutions tailored to your business needs",
    features: [
      "Responsive Websites",
      "E-commerce Platforms",
      "Progressive Web Apps",
      "Custom Web Applications",
    ],
  },
  {
    id: "ai-automations",
    title: "AI Automations",
    description: "Intelligent systems that work while you sleep",
    features: [
      "Workflow Automation",
      "Data Processing",
      "Chatbots & Virtual Assistants",
      "Intelligent Analytics",
    ],
  },
  {
    id: "social-media",
    title: "Social Media & Digital Marketing",
    description: "Amplify your brand across all platforms",
    features: [
      "Social Media Management",
      "Content Strategy & Creation",
      "Paid Advertising",
      "Influencer Marketing",
    ],
  },
  {
    id: "seo-growth",
    title: "SEO & Growth",
    description: "Dominate search results and scale your reach",
    features: [
      "Technical SEO",
      "Content Optimization",
      "Link Building",
      "Analytics & Reporting",
    ],
  },
  {
    id: "apps-crms",
    title: "Next-Gen Apps & CRMs",
    description: "Custom software built for your workflow",
    features: [
      "Custom CRM Development",
      "SaaS Applications",
      "Mobile Apps",
      "API Integrations",
    ],
  },
  {
    id: "performance",
    title: "Performance Optimization",
    description: "Lightning-fast experiences that convert",
    features: [
      "Speed Optimization",
      "Conversion Rate Optimization",
      "A/B Testing",
      "User Experience Design",
    ],
  },
];

export const TIMELINE_PHASES = [
  {
    number: "01",
    period: "2025",
    title: "The Beginning",
    description:
      "ElevexSocials was founded with a clear objective: to help founders escape digital chaos by replacing manual effort with intelligent systems.",
  },
  {
    number: "02",
    period: "Building the Core",
    title: "Refining our Approach",
    description:
      "Developing repeatable frameworks for automation, system design, and scalable digital execution across industries.",
  },
  {
    number: "03",
    period: "Elevation",
    title: "Trusted Digital Partner",
    description:
      "Evolving into a trusted digital partner for founders who value precision, speed, and long-term leverage.",
  },
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    client: "Daluxe Skincare",
    before: {
      items: ["No optimized online store", "Low trust for new customers", "No structured conversion flow"],
    },
    after: {
      items: ["\u20B980K+ revenue generated", "High-converting product pages", "Mobile-first optimized design"],
    },
  },
  {
    id: 2,
    client: "MFP Gym",
    before: {
      items: ["No strong online presence", "Basic or outdated branding", "Low digital trust"],
    },
    after: {
      items: ["Professional website", "Strong brand perception", "Improved client trust"],
    },
  },
  {
    id: 3,
    client: "Roman Gym",
    before: {
      items: ["Limited digital visibility", "No structured service showcase"],
    },
    after: {
      items: ["Modern premium website", "Better service presentation", "Increased inquiries"],
    },
  },
  {
    id: 4,
    client: "Valencir\u00E9",
    before: {
      items: ["No brand identity", "No structured launch plan"],
    },
    after: {
      items: ["Strong brand positioning", "Content-driven growth strategy", "Ready-to-scale e-commerce setup"],
    },
  },
];
