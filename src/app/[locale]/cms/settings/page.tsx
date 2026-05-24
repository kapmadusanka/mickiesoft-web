"use client"

import { useCMSSettings, useCMSSettingsMutations } from "@/services/queries/cms/useCMSQueries"
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { useEffect } from "react"
import { Typography } from "@/components/typography/Typography"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { ExtendedButton } from "@/components/shared/ExtendedButton"
import { AnimatedSection } from "@/components/shared/PageTransition"
import { useTranslations } from "next-intl"

const settingsSchema = z.object({
  siteName: z.string().min(1),
  siteDescription: z.string(),
  contactEmail: z.string().email(),
  contactPhone: z.string(),
  contactAddress: z.string(),
  facebookUrl: z.string().url().or(z.literal("")),
  linkedinUrl: z.string().url().or(z.literal("")),
})

type SettingsValues = z.infer<typeof settingsSchema>

export default function CMSSettingsPage() {
  const ct = useTranslations("common")
  const { data, isLoading } = useCMSSettings()
  const { update } = useCMSSettingsMutations()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isDirty },
  } = useForm<SettingsValues>({
    resolver: zodResolver(settingsSchema),
  })

  useEffect(() => {
    if (data?.data) {
      reset({
        siteName: data.data.siteName,
        siteDescription: data.data.siteDescription,
        contactEmail: data.data.contactEmail,
        contactPhone: data.data.contactPhone,
        contactAddress: data.data.contactAddress,
        facebookUrl: data.data.facebookUrl,
        linkedinUrl: data.data.linkedinUrl,
      })
    }
  }, [data, reset])

  function onSubmit(values: SettingsValues) {
    update.mutate(values)
  }

  if (isLoading) {
    return (
      <div className="space-y-6">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-[400px] w-full rounded-xl" />
      </div>
    )
  }

  return (
    <div>
      <AnimatedSection>
        <Typography variant="h3" className="mb-2">Settings</Typography>
        <Typography variant="muted" className="mb-6">Manage site settings and configuration</Typography>
      </AnimatedSection>

      <AnimatedSection delay={0.1}>
        <Card>
          <CardContent className="p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-8">
              {/* General */}
              <div>
                <Typography variant="h5" className="mb-4">General</Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="siteName">Site Name</Label>
                    <Input id="siteName" {...register("siteName")} className={errors.siteName ? "border-destructive" : ""} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="siteDescription">Site Description</Label>
                    <Textarea id="siteDescription" rows={3} {...register("siteDescription")} />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Contact Info */}
              <div>
                <Typography variant="h5" className="mb-4">Contact Information</Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="contactEmail">Email</Label>
                    <Input id="contactEmail" type="email" {...register("contactEmail")} className={errors.contactEmail ? "border-destructive" : ""} />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="contactPhone">Phone</Label>
                    <Input id="contactPhone" {...register("contactPhone")} />
                  </div>
                  <div className="space-y-2 md:col-span-2">
                    <Label htmlFor="contactAddress">Address</Label>
                    <Textarea id="contactAddress" rows={2} {...register("contactAddress")} />
                  </div>
                </div>
              </div>

              <Separator />

              {/* Social Links */}
              <div>
                <Typography variant="h5" className="mb-4">Social Links</Typography>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="facebookUrl">Facebook URL</Label>
                    <Input id="facebookUrl" {...register("facebookUrl")} placeholder="https://facebook.com/..." />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="linkedinUrl">LinkedIn URL</Label>
                    <Input id="linkedinUrl" {...register("linkedinUrl")} placeholder="https://linkedin.com/..." />
                  </div>
                </div>
              </div>

              <div className="flex justify-end">
                <ExtendedButton
                  type="submit"
                  loading={update.isPending}
                  disabled={!isDirty}
                  className="rounded-full px-8"
                >
                  {ct("save")}
                </ExtendedButton>
              </div>
            </form>
          </CardContent>
        </Card>
      </AnimatedSection>
    </div>
  )
}
