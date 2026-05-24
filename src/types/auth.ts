import type { DefaultSession } from "next-auth"

// Extend NextAuth types
export interface CMSUser {
  id: string
  email: string
  name: string
  role: "admin" | "editor"
  avatarUrl?: string
}

declare module "next-auth" {
  interface Session {
    user: CMSUser & DefaultSession["user"]
    accessToken: string
    refreshToken: string
    accessTokenExpires: number
  }

  interface User extends CMSUser {
    accessToken: string
    refreshToken: string
    accessTokenExpires: number
  }
}

declare module "@auth/core/jwt" {
  interface JWT {
    id: string
    role: "admin" | "editor"
    accessToken: string
    refreshToken: string
    accessTokenExpires: number
  }
}
