"use client"

import { useTranslations } from "next-intl"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { toast } from "sonner"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { ExtendedButton } from "@/components/shared/ExtendedButton"
import { AnimatedSection } from "@/components/shared/PageTransition"
import { contactService } from "@/services/api/public"
import { MapPin, Phone, Mail } from "lucide-react"
import { useState } from "react"

const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email"),
  subject: z.string().min(3, "Subject must be at least 3 characters"),
  message: z.string().min(10, "Message must be at least 10 characters"),
})

type ContactFormValues = z.infer<typeof contactSchema>

export function Contact() {
  const t = useTranslations("contact")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  })

  async function onSubmit(data: ContactFormValues) {
    setIsSubmitting(true)
    try {
      await contactService.submit(data)
      toast.success(t("successMessage"))
      reset()
    } catch {
      toast.error(t("errorMessage"))
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="py-20 lg:py-28">
      <div className="container mx-auto px-4 max-w-7xl">
        <AnimatedSection className="text-center mb-16">
          <Typography
            variant="caption"
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 text-primary font-medium mb-4 uppercase tracking-wider"
          >
            {t("sectionLabel")}
          </Typography>
          <Typography variant="h2" className="mb-4">
            {t("heading")}
          </Typography>
          <Typography variant="lead" className="max-w-2xl mx-auto">
            {t("subtitle")}
          </Typography>
        </AnimatedSection>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <AnimatedSection className="space-y-6">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <Typography variant="h6" className="mb-1">
                    Address
                  </Typography>
                  <Typography variant="muted">{t("address")}</Typography>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-green-500/10 flex items-center justify-center flex-shrink-0">
                  <Phone className="h-6 w-6 text-green-600 dark:text-green-400" />
                </div>
                <div>
                  <Typography variant="h6" className="mb-1">
                    Phone
                  </Typography>
                  <Typography variant="muted">{t("phone")}</Typography>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 flex items-start gap-4">
                <div className="h-12 w-12 rounded-xl bg-purple-500/10 flex items-center justify-center flex-shrink-0">
                  <Mail className="h-6 w-6 text-purple-600 dark:text-purple-400" />
                </div>
                <div>
                  <Typography variant="h6" className="mb-1">
                    Email
                  </Typography>
                  <Typography variant="muted">{t("email")}</Typography>
                </div>
              </CardContent>
            </Card>
          </AnimatedSection>

          {/* Contact Form */}
          <AnimatedSection delay={0.2} className="lg:col-span-2">
            <Card className="shadow-lg">
              <CardContent className="p-8">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="contact-name">{t("namePlaceholder")}</Label>
                      <Input
                        id="contact-name"
                        placeholder={t("namePlaceholder")}
                        {...register("name")}
                        className={errors.name ? "border-destructive" : ""}
                      />
                      {errors.name && (
                        <Typography variant="caption" className="text-destructive">
                          {errors.name.message}
                        </Typography>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-email">{t("emailPlaceholder")}</Label>
                      <Input
                        id="contact-email"
                        type="email"
                        placeholder={t("emailPlaceholder")}
                        {...register("email")}
                        className={errors.email ? "border-destructive" : ""}
                      />
                      {errors.email && (
                        <Typography variant="caption" className="text-destructive">
                          {errors.email.message}
                        </Typography>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-subject">{t("subjectPlaceholder")}</Label>
                    <Input
                      id="contact-subject"
                      placeholder={t("subjectPlaceholder")}
                      {...register("subject")}
                      className={errors.subject ? "border-destructive" : ""}
                    />
                    {errors.subject && (
                      <Typography variant="caption" className="text-destructive">
                        {errors.subject.message}
                      </Typography>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="contact-message">{t("messagePlaceholder")}</Label>
                    <Textarea
                      id="contact-message"
                      placeholder={t("messagePlaceholder")}
                      rows={5}
                      {...register("message")}
                      className={errors.message ? "border-destructive" : ""}
                    />
                    {errors.message && (
                      <Typography variant="caption" className="text-destructive">
                        {errors.message.message}
                      </Typography>
                    )}
                  </div>

                  <ExtendedButton
                    type="submit"
                    loading={isSubmitting}
                    className="w-full sm:w-auto rounded-full px-10"
                    size="lg"
                  >
                    {t("submitButton")}
                  </ExtendedButton>
                </form>
              </CardContent>
            </Card>
          </AnimatedSection>
        </div>
      </div>
    </section>
  )
}
