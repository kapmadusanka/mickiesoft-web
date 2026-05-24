// i18n types
export type Locale = "en" | "si"

export const locales: Locale[] = ["en", "si"]
export const defaultLocale: Locale = "en"

// Type-safe translation key paths
export type TranslationSection =
  | "nav"
  | "hero"
  | "about"
  | "services"
  | "technologies"
  | "contact"
  | "stats"
  | "footer"
  | "cms"
  | "common"
