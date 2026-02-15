import type { Testimonial, TeamMember } from "@/types";

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "1",
    company: "VE Couriers",
    rating: 5,
    tags: ["WEB DEVELOPMENT"],
    content:
      "...difference in how we operate daily. Our dispatchers spend 50% less time on repetitive tasks, and customers clearly say they like the new tracking.",
    category: "CUSTOM WEB-DEV",
  },
  {
    id: "2",
    company: "DataMinds",
    rating: 5,
    tags: ["AI AUTOMATIONS", "DATA PROCESSING"],
    content:
      "Automating our data entry and analysis has freed up our analysts to focus on strategy. The return on investment was immediate and obvious.",
    category: "AI AUTOMATIONS",
  },
  {
    id: "3",
    company: "MarketWise Agency",
    rating: 5,
    tags: ["SEO", "CONTENT STRATEGY"],
    content:
      "We finally rank for the keywords that matter to our business. More importantly, the visitors we get now are people who actually want what we offer. Quality over quantity.",
    category: "SEO & GEO",
  },
  {
    id: "4",
    company: "Urban Eatery",
    rating: 5,
    tags: ["CUSTOM WEB-DEV", "ORDERING SYSTEM"],
    content:
      "The custom online ordering system was a game changer. It's fast, reliable, and our staff loves how easy it is to adapt to our menu options, making takeout smooth for our staff.",
    category: "CUSTOM WEB-DEV",
  },
  {
    id: "5",
    company: "Nexus Fitness",
    rating: 5,
    tags: ["DIGITAL MARKETING", "SOCIAL MEDIA"],
    content:
      "Our social media engagement tripled within the first month. The content strategy was spot-on and the paid campaigns delivered incredible ROI.",
    category: "DIGITAL MARKETING",
  },
  {
    id: "6",
    company: "CloudSync Solutions",
    rating: 5,
    tags: ["AI AUTOMATIONS", "WORKFLOW"],
    content:
      "The AI-powered workflow automation saved our team over 20 hours per week. Our operations are streamlined and our team can focus on what truly matters.",
    category: "AI AUTOMATIONS",
  },
];

export const TEAM_MEMBERS: TeamMember[] = [
  {
    id: "1",
    name: "Bharath Kumar",
    role: "CO-FOUNDER AND CHIEF OPERATIONS OFFICER",
    image: "/images/team/bharath.jpg",
  },
  {
    id: "2",
    name: "Sahil C",
    role: "DIRECTOR, LIMITLESS DEVELOPMENT",
    image: "/images/team/sahil.jpg",
  },
  {
    id: "3",
    name: "Prayaksh Singh",
    role: "DIRECTOR, PRODUCT/DIGITAL SOLUTIONS",
    image: "/images/team/prayaksh.jpg",
    featured: true,
  },
  {
    id: "4",
    name: "Athul Krishna",
    role: "DIRECTOR, TECHNOLOGY AND ENGINEERING",
    image: "/images/team/athul.jpg",
  },
  {
    id: "5",
    name: "Yuvraj Umang",
    role: "CHIEF TECHNOLOGY OFFICER",
    image: "/images/team/yuvraj.jpg",
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
  "CUSTOM WEB-DEV",
  "AI AUTOMATIONS",
  "SEO & GEO",
  "DIGITAL MARKETING",
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
    period: "2018 - 2019",
    title: "Foundation of Vision",
    description:
      "Redefining how businesses approach digital transformation through automation and intelligence, laying the groundwork for a new era of operational excellence.",
  },
  {
    number: "02",
    period: "2019 - 2021",
    title: "Growth & Expansion",
    description:
      "Scaling our services and expanding our team to meet growing demand. Establishing partnerships with industry leaders and refining our methodologies.",
  },
  {
    number: "03",
    period: "2021 - Present",
    title: "Industry Leadership",
    description:
      "Leading the charge in AI-powered automation and digital transformation. Setting new standards for excellence and innovation in the industry.",
  },
];

export const TRANSFORMATIONS = [
  {
    id: 1,
    client: "TechStartup Inc",
    before: { metric: "15K", label: "Monthly Visitors" },
    after: { metric: "127K", label: "Monthly Visitors" },
  },
  {
    id: 2,
    client: "E-Commerce Brand",
    before: { metric: "2.3%", label: "Conversion Rate" },
    after: { metric: "8.7%", label: "Conversion Rate" },
  },
  {
    id: 3,
    client: "Local Restaurant Chain",
    before: { metric: "340", label: "Monthly Orders" },
    after: { metric: "2.1K", label: "Monthly Orders" },
  },
];
