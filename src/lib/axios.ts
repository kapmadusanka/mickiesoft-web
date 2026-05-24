import axios from "axios"
import { getSession } from "next-auth/react"
import { toast } from "sonner"

const API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:8000/api"

// Public API instance — no authentication required
export const publicApi = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
})

// Private API instance — requires authentication
export const privateApi = axios.create({
  baseURL: API_BASE_URL,
  headers: { "Content-Type": "application/json" },
  timeout: 15000,
})

// Request interceptor: attach Bearer token from NextAuth session
privateApi.interceptors.request.use(
  async (config) => {
    const session = await getSession()
    if (session?.accessToken) {
      config.headers.Authorization = `Bearer ${session.accessToken}`
    }
    return config
  },
  (error) => Promise.reject(error)
)

// Response interceptor: handle errors and refresh token on 401
let isRefreshing = false
let failedQueue: Array<{
  resolve: (value: unknown) => void
  reject: (reason: unknown) => void
}> = []

const processQueue = (error: unknown) => {
  failedQueue.forEach((prom) => {
    if (error) {
      prom.reject(error)
    } else {
      prom.resolve(undefined)
    }
  })
  failedQueue = []
}

privateApi.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config

    // Handle 401 — attempt token refresh
    if (error.response?.status === 401 && !originalRequest._retry) {
      if (isRefreshing) {
        return new Promise((resolve, reject) => {
          failedQueue.push({ resolve, reject })
        }).then(() => privateApi(originalRequest))
      }

      originalRequest._retry = true
      isRefreshing = true

      try {
        const session = await getSession()
        if (session?.refreshToken) {
          const { data } = await publicApi.post("/auth/refresh", {
            refreshToken: session.refreshToken,
          })

          // Update session would be handled by NextAuth callbacks
          originalRequest.headers.Authorization = `Bearer ${data.accessToken}`
          processQueue(null)
          return privateApi(originalRequest)
        }
      } catch (refreshError) {
        processQueue(refreshError)
        // Redirect to login on unrecoverable auth error
        if (typeof window !== "undefined") {
          window.location.href = "/cms/login"
        }
        return Promise.reject(refreshError)
      } finally {
        isRefreshing = false
      }
    }

    // Surface error to user via toast
    const message =
      error.response?.data?.message ?? error.message ?? "An unexpected error occurred"

    if (typeof window !== "undefined") {
      toast.error(message)
    }

    return Promise.reject(error)
  }
)

// Error interceptor for public API
publicApi.interceptors.response.use(
  (response) => response,
  (error) => {
    const message =
      error.response?.data?.message ?? error.message ?? "An unexpected error occurred"

    if (typeof window !== "undefined") {
      toast.error(message)
    }

    return Promise.reject(error)
  }
)
