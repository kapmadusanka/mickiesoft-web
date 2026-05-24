import NextAuth from "next-auth"
import Credentials from "next-auth/providers/credentials"
import type { NextAuthConfig } from "next-auth"
import { publicApi } from "@/lib/axios"

export const authConfig: NextAuthConfig = {
  pages: {
    signIn: "/cms/login",
  },
  providers: [
    Credentials({
      name: "credentials",
      credentials: {
        email: { label: "Email", type: "email" },
        password: { label: "Password", type: "password" },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null

        try {
          const { data } = await publicApi.post("/auth/login", {
            email: credentials.email,
            password: credentials.password,
          })

          if (data.success && data.data) {
            return {
              id: data.data.user.id,
              email: data.data.user.email,
              name: data.data.user.name,
              role: data.data.user.role,
              avatarUrl: data.data.user.avatarUrl,
              accessToken: data.data.accessToken,
              refreshToken: data.data.refreshToken,
              accessTokenExpires: Date.now() + 60 * 60 * 1000, // 1 hour
            }
          }
          return null
        } catch (data) {
          console.log("Error logging in",data)
          return null
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      // Initial sign in
      if (user) {
        return {
          ...token,
          id: user.id as string,
          role: user.role,
          accessToken: user.accessToken,
          refreshToken: user.refreshToken,
          accessTokenExpires: user.accessTokenExpires,
        }
      }

      // Token still valid
      if (Date.now() < (token.accessTokenExpires as number)) {
        return token
      }

      // Token expired — refresh
      try {
        const { data } = await publicApi.post("/auth/refresh", {
          refreshToken: token.refreshToken,
        })

        return {
          ...token,
          accessToken: data.data.accessToken,
          refreshToken: data.data.refreshToken ?? token.refreshToken,
          accessTokenExpires: Date.now() + 60 * 60 * 1000,
        }
      } catch {
        return { ...token, error: "RefreshAccessTokenError" }
      }
    },
    async session({ session, token }) {
      session.user.id = token.id as string
      session.user.role = token.role as "admin" | "editor"
      session.accessToken = token.accessToken as string
      session.refreshToken = token.refreshToken as string
      session.accessTokenExpires = token.accessTokenExpires as number
      return session
    },
  },
  session: {
    strategy: "jwt",
  },
}

export const { handlers, auth, signIn, signOut } = NextAuth(authConfig)
