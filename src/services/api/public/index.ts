import { publicApi } from "@/lib/axios"
import type { ApiResponse } from "@/types/api"
import type {
  HeroContent,
  Client,
  AboutSection,
  Stat,
  Service,
  Technology,
  BlogPost,
  ContactFormData,
} from "@/types/public"

export const heroService = {
  getHero: (locale: string) =>
    publicApi.get<ApiResponse<HeroContent>>(`/hero?locale=${locale}`).then((r) => r.data),
}

export const clientsService = {
  getAll: () =>
    publicApi.get<ApiResponse<Client[]>>("/clients").then((r) => r.data),
}

export const aboutService = {
  getAbout: (locale: string) =>
    publicApi.get<ApiResponse<AboutSection>>(`/about?locale=${locale}`).then((r) => r.data),
  getStats: () =>
    publicApi.get<ApiResponse<Stat[]>>("/stats").then((r) => r.data),
}

export const servicesService = {
  getAll: (locale: string) =>
    publicApi.get<ApiResponse<Service[]>>(`/services?locale=${locale}`).then((r) => r.data),
}

export const technologiesService = {
  getAll: (locale: string) =>
    publicApi
      .get<ApiResponse<Technology[]>>(`/technologies?locale=${locale}`)
      .then((r) => r.data),
}

export const blogService = {
  getAll: (locale: string) =>
    publicApi.get<ApiResponse<BlogPost[]>>(`/blog?locale=${locale}`).then((r) => r.data),
  getBySlug: (slug: string, locale: string) =>
    publicApi
      .get<ApiResponse<BlogPost>>(`/blog/${slug}?locale=${locale}`)
      .then((r) => r.data),
}

export const contactService = {
  submit: (data: ContactFormData) =>
    publicApi.post<ApiResponse<{ id: string }>>("/contact", data).then((r) => r.data),
}
