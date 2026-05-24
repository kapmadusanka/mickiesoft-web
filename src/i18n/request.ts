import { getRequestConfig } from "next-intl/server"
import { hasLocale } from "next-intl"
import en from "@/messages/en.json"
import si from "@/messages/si.json"

export const locales = ["en", "si"] as const
export const defaultLocale = "en" as const

const messageMap: Record<string, typeof en> = { en, si }

export default getRequestConfig(async ({ requestLocale }) => {
  let locale = await requestLocale
  if (!locale || !hasLocale(locales, locale)) {
    locale = defaultLocale
  }

  return {
    locale,
    messages: messageMap[locale] ?? en,
  }
})
