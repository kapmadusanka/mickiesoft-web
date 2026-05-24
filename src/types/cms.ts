// CMS entity types

export interface CMSService {
  id: string
  nameEn: string
  nameSi: string
  descriptionEn: string
  descriptionSi: string
  icon: string
  imageUrl?: string
  status: "active" | "inactive"
  order: number
  createdAt: string
  updatedAt: string
}

export interface CMSBlog {
  id: string
  titleEn: string
  titleSi: string
  slug: string
  contentEn: string
  contentSi: string
  excerptEn?: string
  excerptSi?: string
  featuredImage: string
  author: string
  status: "draft" | "published"
  publishedAt: string | null
  createdAt: string
  updatedAt: string
}

export interface CMSMedia {
  id: string
  filename: string
  originalName: string
  mimeType: string
  size: number
  url: string
  thumbnailUrl?: string
  alt?: string
  createdAt: string
}

export interface CMSTeamMember {
  id: string
  nameEn: string
  nameSi: string
  roleEn: string
  roleSi: string
  bioEn?: string
  bioSi?: string
  avatarUrl: string
  email?: string
  linkedinUrl?: string
  order: number
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}

export interface CMSTranslation {
  id: string
  key: string
  section: string
  valueEn: string
  valueSi: string
  updatedAt: string
}

export interface CMSSettings {
  id: string
  siteName: string
  siteDescription: string
  contactEmail: string
  contactPhone: string
  contactAddress: string
  facebookUrl: string
  linkedinUrl: string
  logoUrl?: string
  faviconUrl?: string
  updatedAt: string
}

export interface CMSPage {
  id: string
  slug: string
  titleEn: string
  titleSi: string
  contentEn: string
  contentSi: string
  status: "draft" | "published"
  createdAt: string
  updatedAt: string
}

export interface CMSTestimonial {
  id: string
  nameEn: string
  nameSi: string
  roleEn: string
  roleSi: string
  company: string
  contentEn: string
  contentSi: string
  avatarUrl?: string
  rating: number
  order: number
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}

export interface CMSTechnology {
  id: string
  name: string
  logoUrl: string
  category?: string
  order: number
  status: "active" | "inactive"
  createdAt: string
  updatedAt: string
}
