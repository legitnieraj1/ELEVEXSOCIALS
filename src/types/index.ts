export interface Testimonial {
  id: string;
  company: string;
  logo?: string;
  rating: number;
  tags: string[];
  content: string;
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
  featured?: boolean;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  features: string[];
}

export interface ContactFormData {
  name: string;
  email: string;
  phone?: string;
  company?: string;
  service: string;
  message: string;
}
