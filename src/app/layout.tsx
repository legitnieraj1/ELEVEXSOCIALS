import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ChatWidget from "@/components/layout/ChatWidget";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://elevexsocials.com"),
  title: {
    default:
      "ElevexSocials | Best Digital Marketing Agency in Coimbatore | Web Dev, SEO & Branding",
    template: "%s | ElevexSocials",
  },
  description:
    "ElevexSocials is the top-rated digital marketing agency in Coimbatore offering web development, SEO, branding, social media marketing & AI automation. Get a free strategy call today.",
  keywords: [
    "best digital marketing agency in Coimbatore",
    "best web development company in Coimbatore",
    "SEO agency Coimbatore",
    "branding agency in Coimbatore",
    "social media marketing agency Coimbatore",
    "digital marketing company Coimbatore",
    "web design company in Coimbatore",
    "ecommerce website developers Coimbatore",
    "AI automation agency India",
    "best SEO company in Coimbatore",
    "affordable website development in Coimbatore",
    "local SEO Coimbatore",
    "online marketing solutions",
    "digital growth partner",
    "ROI-driven marketing",
    "responsive web design",
    "mobile-first development",
    "brand identity",
    "marketing automation",
    "lead generation",
    "conversion optimization",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "ElevexSocials",
    title:
      "ElevexSocials | Best Digital Marketing Agency in Coimbatore",
    description:
      "Top-rated digital marketing agency in Coimbatore. Web development, SEO, branding & AI automation. Book a free strategy call.",
    url: "https://elevexsocials.com",
  },
  twitter: {
    card: "summary_large_image",
    title:
      "ElevexSocials | Best Digital Marketing Agency in Coimbatore",
    description:
      "Top-rated digital marketing agency in Coimbatore. Web development, SEO, branding & AI automation. Book a free strategy call.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://elevexsocials.com",
  },
  icons: {
    icon: "/images/elevexsocialslogo.png",
    shortcut: "/images/elevexsocialslogo.png",
    apple: "/images/elevexsocialslogo.png",
  },
  verification: {
    google: "ADD_YOUR_GOOGLE_VERIFICATION_CODE",
  },
};

const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "ElevexSocials",
  description:
    "ElevexSocials is the top-rated digital marketing agency in Coimbatore offering web development, SEO, branding, social media marketing & AI automation.",
  url: "https://elevexsocials.com",
  logo: "https://elevexsocials.com/images/elevexsocialslogo.png",
  image: "https://elevexsocials.com/images/elevexsocialslogo.png",
  telephone: "+91-98765-43210",
  email: "elevexsocials@gmail.com",
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Coimbatore",
    addressRegion: "Tamil Nadu",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "11.0168",
    longitude: "76.9558",
  },
  areaServed: [
    { "@type": "City", name: "Coimbatore" },
    { "@type": "City", name: "Tirupur" },
    { "@type": "City", name: "Erode" },
    { "@type": "City", name: "Salem" },
    { "@type": "State", name: "Tamil Nadu" },
  ],
  serviceType: [
    "Digital Marketing",
    "Web Development",
    "Search Engine Optimization",
    "Social Media Marketing",
    "Branding",
    "AI Automation",
  ],
  sameAs: [
    "https://www.instagram.com/elevexsocials/",
  ],
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: [
      "Monday",
      "Tuesday",
      "Wednesday",
      "Thursday",
      "Friday",
      "Saturday",
    ],
    opens: "09:00",
    closes: "18:00",
  },
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "ElevexSocials",
  url: "https://elevexsocials.com",
  logo: "https://elevexsocials.com/images/elevexsocialslogo.png",
  description:
    "Coimbatore's leading digital marketing agency specializing in web development, SEO, branding, social media marketing, and AI automation.",
  founder: {
    "@type": "Person",
    name: "Nieraj Niketan S",
  },
  sameAs: [
    "https://www.instagram.com/elevexsocials/",
  ],
};

const breadcrumbSchema = {
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      name: "Home",
      item: "https://elevexsocials.com",
    },
    {
      "@type": "ListItem",
      position: 2,
      name: "Services",
      item: "https://elevexsocials.com/services",
    },
    {
      "@type": "ListItem",
      position: 3,
      name: "About",
      item: "https://elevexsocials.com/about",
    },
    {
      "@type": "ListItem",
      position: 4,
      name: "Testimonials",
      item: "https://elevexsocials.com/testimonials",
    },
    {
      "@type": "ListItem",
      position: 5,
      name: "Contact",
      item: "https://elevexsocials.com/contact",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${jakarta.variable}`}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(breadcrumbSchema),
          }}
        />
      </head>
      <body className="bg-background text-text-primary antialiased">
        <Navbar />
        <main>{children}</main>
        <Footer />
        <ChatWidget />
      </body>
    </html>
  );
}
