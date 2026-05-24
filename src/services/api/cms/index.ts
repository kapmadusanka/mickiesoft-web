import { privateApi } from "@/lib/axios"
import type { ApiResponse, PaginatedResponse } from "@/types/api"
import type {
  CMSService,
  CMSBlog,
  CMSMedia,
  CMSTeamMember,
  CMSTranslation,
  CMSSettings,
  CMSPage,
  CMSTestimonial,
  CMSTechnology,
} from "@/types/cms"

// Services
export const cmsServicesService = {
  getAll: () =>
    privateApi.get<PaginatedResponse<CMSService>>("/cms/services").then((r) => r.data),
  getById: (id: string) =>
    privateApi.get<ApiResponse<CMSService>>(`/cms/services/${id}`).then((r) => r.data),
  create: (data: Partial<CMSService>) =>
    privateApi.post<ApiResponse<CMSService>>("/cms/services", data).then((r) => r.data),
  update: (id: string, data: Partial<CMSService>) =>
    privateApi.put<ApiResponse<CMSService>>(`/cms/services/${id}`, data).then((r) => r.data),
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/services/${id}`).then((r) => r.data),
}

// Blog
export const cmsBlogService = {
  getAll: () =>
    privateApi.get<PaginatedResponse<CMSBlog>>("/cms/blog").then((r) => r.data),
  getById: (id: string) =>
    privateApi.get<ApiResponse<CMSBlog>>(`/cms/blog/${id}`).then((r) => r.data),
  create: (data: Partial<CMSBlog>) =>
    privateApi.post<ApiResponse<CMSBlog>>("/cms/blog", data).then((r) => r.data),
  update: (id: string, data: Partial<CMSBlog>) =>
    privateApi.put<ApiResponse<CMSBlog>>(`/cms/blog/${id}`, data).then((r) => r.data),
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/blog/${id}`).then((r) => r.data),
}

// Media
export const cmsMediaService = {
  getAll: () =>
    privateApi.get<PaginatedResponse<CMSMedia>>("/cms/media").then((r) => r.data),
  upload: (file: File) => {
    const formData = new FormData()
    formData.append("file", file)
    return privateApi
      .post<ApiResponse<CMSMedia>>("/cms/media", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })
      .then((r) => r.data)
  },
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/media/${id}`).then((r) => r.data),
}

// Team
export const cmsTeamService = {
  getAll: () =>
    privateApi.get<PaginatedResponse<CMSTeamMember>>("/cms/team").then((r) => r.data),
  getById: (id: string) =>
    privateApi.get<ApiResponse<CMSTeamMember>>(`/cms/team/${id}`).then((r) => r.data),
  create: (data: Partial<CMSTeamMember>) =>
    privateApi.post<ApiResponse<CMSTeamMember>>("/cms/team", data).then((r) => r.data),
  update: (id: string, data: Partial<CMSTeamMember>) =>
    privateApi.put<ApiResponse<CMSTeamMember>>(`/cms/team/${id}`, data).then((r) => r.data),
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/team/${id}`).then((r) => r.data),
}

// Translations
export const cmsTranslationsService = {
  getAll: () =>
    privateApi.get<PaginatedResponse<CMSTranslation>>("/cms/translations").then((r) => r.data),
  update: (translations: Partial<CMSTranslation>[]) =>
    privateApi
      .put<ApiResponse<null>>("/cms/translations", { translations })
      .then((r) => r.data),
}

// Settings
export const cmsSettingsService = {
  get: () =>
    privateApi.get<ApiResponse<CMSSettings>>("/cms/settings").then((r) => r.data),
  update: (data: Partial<CMSSettings>) =>
    privateApi.put<ApiResponse<CMSSettings>>("/cms/settings", data).then((r) => r.data),
}

// Pages
export const cmsPagesService = {
  getAll: () =>
    privateApi.get<PaginatedResponse<CMSPage>>("/cms/pages").then((r) => r.data),
  getById: (id: string) =>
    privateApi.get<ApiResponse<CMSPage>>(`/cms/pages/${id}`).then((r) => r.data),
  create: (data: Partial<CMSPage>) =>
    privateApi.post<ApiResponse<CMSPage>>("/cms/pages", data).then((r) => r.data),
  update: (id: string, data: Partial<CMSPage>) =>
    privateApi.put<ApiResponse<CMSPage>>(`/cms/pages/${id}`, data).then((r) => r.data),
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/pages/${id}`).then((r) => r.data),
}

// Testimonials
export const cmsTestimonialsService = {
  getAll: () =>
    privateApi
      .get<PaginatedResponse<CMSTestimonial>>("/cms/testimonials")
      .then((r) => r.data),
  getById: (id: string) =>
    privateApi
      .get<ApiResponse<CMSTestimonial>>(`/cms/testimonials/${id}`)
      .then((r) => r.data),
  create: (data: Partial<CMSTestimonial>) =>
    privateApi
      .post<ApiResponse<CMSTestimonial>>("/cms/testimonials", data)
      .then((r) => r.data),
  update: (id: string, data: Partial<CMSTestimonial>) =>
    privateApi
      .put<ApiResponse<CMSTestimonial>>(`/cms/testimonials/${id}`, data)
      .then((r) => r.data),
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/testimonials/${id}`).then((r) => r.data),
}

// Technologies
export const cmsTechnologiesService = {
  getAll: () =>
    privateApi
      .get<PaginatedResponse<CMSTechnology>>("/cms/technologies")
      .then((r) => r.data),
  getById: (id: string) =>
    privateApi
      .get<ApiResponse<CMSTechnology>>(`/cms/technologies/${id}`)
      .then((r) => r.data),
  create: (data: Partial<CMSTechnology>) =>
    privateApi
      .post<ApiResponse<CMSTechnology>>("/cms/technologies", data)
      .then((r) => r.data),
  update: (id: string, data: Partial<CMSTechnology>) =>
    privateApi
      .put<ApiResponse<CMSTechnology>>(`/cms/technologies/${id}`, data)
      .then((r) => r.data),
  delete: (id: string) =>
    privateApi.delete<ApiResponse<null>>(`/cms/technologies/${id}`).then((r) => r.data),
}
