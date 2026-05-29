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
  Faqs,
} from "@/types/public"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:3000/api"

/**
 * Helper to get the current language safely on both client and server.
 */
async function getLang() {
  if (typeof window !== "undefined") {
    // Client-side: use document.cookie
    const match = document.cookie.match(new RegExp("(^| )NEXT_LOCALE=([^;]+)"))
    return match ? match[2] : "en"
  } else {
    // Server-side: use next/headers
    try {
      const { cookies } = await import("next/headers")
      const cookieStore = await cookies()
      return cookieStore.get("NEXT_LOCALE")?.value || "en"
    } catch {
      return "en"
    }
  }
}

/**
 * Common fetch wrapper supporting Next.js Server Components caching.
 */
export async function publicFetch<T>(endpoint: string, options?: RequestInit): Promise<T> {
  const lang = await getLang()

  const res = await fetch(`${API_BASE_URL}${endpoint}`, {
    ...options,
    headers: {
      "Content-Type": "application/json",
      "lang": lang,
      ...(options?.headers || {}),
    },
    // Default caching for Server Components. Can be overridden in options.
    next: { revalidate: 3600, ...options?.next },
  })

  if (!res.ok) {
    let message = `API error: ${res.status}`
    try {
      const errorData = await res.json()
      if (errorData.message) message = errorData.message
    } catch (e) {
      // Ignore JSON parse errors
    }
    throw new Error(message)
  }

  return res.json()
}

export const heroService = {
  getHero: () =>
    publicFetch<ApiResponse<HeroContent>>(`/hero`).then((r) => r.data),
}

export const clientsService = {
  getAll: () =>
    publicFetch<ApiResponse<Client[]>>("/clients").then((r) => r.data),
}

export const aboutService = {
  getAbout: () =>
    publicFetch<ApiResponse<AboutSection>>(`/about`).then((r) => r.data),
  getStats: () =>
    publicFetch<ApiResponse<Stat[]>>("/stats").then((r) => r.data),
}

export const servicesService = {
  getAll: () =>
    publicFetch<ApiResponse<Service[]>>(`/services`).then((r) => r.data),
}

export const technologiesService = {
  getAll: () =>
    publicFetch<ApiResponse<Technology[]>>(`/technologies`).then((r) => r.data),
}

export const blogService = {
  getAll: () =>
    publicFetch<ApiResponse<BlogPost[]>>(`/blog`).then((r) => r.data),
  getBySlug: (slug: string) =>
    publicFetch<ApiResponse<BlogPost>>(`/blog/${slug}`).then((r) => r.data),
}

export const contactService = {
  submit: (data: ContactFormData) =>
    publicFetch<ApiResponse<{ id: string }>>("/contact", {
      method: "POST",
      body: JSON.stringify(data),
      cache: "no-store", // Don't cache mutations
    }).then((r) => r.data),
}

export const faqsService = {
  getAll: () =>
    publicFetch<ApiResponse<Faqs[]>>("/faqs").then((r) => r.data),
}
