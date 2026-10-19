export interface Service {
  icon: string;
  title: string;
  description: string;
  points: string[];
}

export interface Project {
  id: number;
  title: string;
  category: string;
  description: string;
  image?: string;
  link?: string;
  tech: string[];
  result: string;
  featured?: boolean;
}

export interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  image?: string;
  url?: string;
  quote: string;
}

export interface StackGroup {
  name: string;
  items: string[];
}

export interface ResumeItem {
  period: string;
  title: string;
  org: string;
  location?: string;
  description: string;
  mark?: string;
}

export interface Stat {
  value: string;
  label: string;
}
