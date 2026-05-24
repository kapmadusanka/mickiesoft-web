// Public site entity types

export interface HeroContent {
  id: string
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  imageUrl: string
  imageAlt: string
}

export interface Client {
  id: string
  name: string
  logoUrl: string
  websiteUrl?: string
  order: number
}

export interface AboutFeature {
  id: string
  icon: string
  title: string
  description: string
  order: number
}

export interface AboutSection {
  id: string
  sectionLabel: string
  heading: string
  paragraphs: string[]
  features: AboutFeature[]
}

export interface Stat {
  id: string
  label: string
  value: number
  suffix?: string
  icon: string
}

export interface Service {
  id: string
  title: string
  description: string
  icon: string
  imageUrl?: string
  type: "card" | "feature"
  order: number
}

export interface Technology {
  id: string
  name: string
  logoUrl: string
  category?: string
  order: number
}

export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  featuredImage: string
  author: string
  status: "draft" | "published"
  publishedAt: string
  createdAt: string
  updatedAt: string
}

export interface ContactFormData {
  name: string
  email: string
  subject: string
  message: string
}

export interface Testimonial {
  id: string
  name: string
  role: string
  company: string
  content: string
  avatarUrl?: string
  rating: number
  order: number
}
