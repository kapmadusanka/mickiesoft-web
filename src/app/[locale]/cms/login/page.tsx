"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { signIn } from "next-auth/react"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { useTranslations } from "next-intl"
import { toast } from "sonner"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { ExtendedButton } from "@/components/shared/ExtendedButton"
import { ThemeToggle } from "@/components/shared/ThemeToggle"
import { Lock } from "lucide-react"

const loginSchema = z.object({
  email: z.string().email("Please enter a valid email"),
  password: z.string().min(6, "Password must be at least 6 characters"),
})

type LoginValues = z.infer<typeof loginSchema>

export default function LoginPage() {
  const t = useTranslations("cms.login")
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
  })

  async function onSubmit(data: LoginValues) {
    setIsLoading(true)
    try {
      const result = await signIn("credentials", {
        email: data.email,
        password: data.password,
        redirect: false,
      })

      if (result?.error) {
        toast.error(t("error"))
      } else {
        router.push("/cms")
        router.refresh()
      }
    } catch {
      toast.error(t("error"))
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-primary/8 rounded-full blur-3xl" />
      </div>

      <div className="absolute top-4 right-4">
        <ThemeToggle />
      </div>

      <Card className="w-full max-w-md shadow-2xl border-border/50">
        <CardContent className="p-8">
          <div className="text-center mb-8">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Lock className="h-8 w-8 text-primary" />
            </div>
            <Typography variant="h3" className="mb-2">
              {t("title")}
            </Typography>
            <Typography variant="muted">{t("subtitle")}</Typography>
          </div>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">
            <div className="space-y-2">
              <Label htmlFor="login-email">{t("emailLabel")}</Label>
              <Input
                id="login-email"
                type="email"
                placeholder={t("emailPlaceholder")}
                {...register("email")}
                className={errors.email ? "border-destructive" : ""}
                autoComplete="email"
              />
              {errors.email && (
                <Typography variant="caption" className="text-destructive">
                  {errors.email.message}
                </Typography>
              )}
            </div>

            <div className="space-y-2">
              <Label htmlFor="login-password">{t("passwordLabel")}</Label>
              <Input
                id="login-password"
                type="password"
                placeholder={t("passwordPlaceholder")}
                {...register("password")}
                className={errors.password ? "border-destructive" : ""}
                autoComplete="current-password"
              />
              {errors.password && (
                <Typography variant="caption" className="text-destructive">
                  {errors.password.message}
                </Typography>
              )}
            </div>

            <ExtendedButton
              type="submit"
              loading={isLoading}
              className="w-full rounded-full"
              size="lg"
            >
              {t("submitButton")}
            </ExtendedButton>
          </form>

          <div className="mt-6 text-center">
            <Typography variant="caption">
              Powered by Mickiesoft CMS
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
