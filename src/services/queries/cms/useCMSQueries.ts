"use client"

import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query"
import { toast } from "sonner"
import {
  cmsServicesService,
  cmsBlogService,
  cmsMediaService,
  cmsTeamService,
  cmsTranslationsService,
  cmsSettingsService,
  cmsPagesService,
  cmsTestimonialsService,
  cmsTechnologiesService,
} from "@/services/api/cms"

// ─── Services ────────────────────────────────────────────

export function useCMSServices() {
  return useQuery({
    queryKey: ["cms", "services"],
    queryFn: () => cmsServicesService.getAll(),
  })
}

export function useCMSService(id: string) {
  return useQuery({
    queryKey: ["cms", "services", id],
    queryFn: () => cmsServicesService.getById(id),
    enabled: !!id,
  })
}

export function useCMSServiceMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "services"] })

  const create = useMutation({
    mutationFn: cmsServicesService.create,
    onSuccess: () => { toast.success("Service created"); invalidate() },
    onError: () => toast.error("Failed to create service"),
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof cmsServicesService.update>[1] }) =>
      cmsServicesService.update(id, data),
    onSuccess: () => { toast.success("Service updated"); invalidate() },
    onError: () => toast.error("Failed to update service"),
  })

  const remove = useMutation({
    mutationFn: cmsServicesService.delete,
    onSuccess: () => { toast.success("Service deleted"); invalidate() },
    onError: () => toast.error("Failed to delete service"),
  })

  return { create, update, remove }
}

// ─── Blog ────────────────────────────────────────────────

export function useCMSBlogPosts() {
  return useQuery({
    queryKey: ["cms", "blog"],
    queryFn: () => cmsBlogService.getAll(),
  })
}

export function useCMSBlogPost(id: string) {
  return useQuery({
    queryKey: ["cms", "blog", id],
    queryFn: () => cmsBlogService.getById(id),
    enabled: !!id,
  })
}

export function useCMSBlogMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "blog"] })

  const create = useMutation({
    mutationFn: cmsBlogService.create,
    onSuccess: () => { toast.success("Blog post created"); invalidate() },
    onError: () => toast.error("Failed to create blog post"),
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof cmsBlogService.update>[1] }) =>
      cmsBlogService.update(id, data),
    onSuccess: () => { toast.success("Blog post updated"); invalidate() },
    onError: () => toast.error("Failed to update blog post"),
  })

  const remove = useMutation({
    mutationFn: cmsBlogService.delete,
    onSuccess: () => { toast.success("Blog post deleted"); invalidate() },
    onError: () => toast.error("Failed to delete blog post"),
  })

  return { create, update, remove }
}

// ─── Media ───────────────────────────────────────────────

export function useCMSMedia() {
  return useQuery({
    queryKey: ["cms", "media"],
    queryFn: () => cmsMediaService.getAll(),
  })
}

export function useCMSMediaMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "media"] })

  const upload = useMutation({
    mutationFn: cmsMediaService.upload,
    onSuccess: () => { toast.success("File uploaded"); invalidate() },
    onError: () => toast.error("Upload failed"),
  })

  const remove = useMutation({
    mutationFn: cmsMediaService.delete,
    onSuccess: () => { toast.success("File deleted"); invalidate() },
    onError: () => toast.error("Failed to delete file"),
  })

  return { upload, remove }
}

// ─── Team ────────────────────────────────────────────────

export function useCMSTeam() {
  return useQuery({
    queryKey: ["cms", "team"],
    queryFn: () => cmsTeamService.getAll(),
  })
}

export function useCMSTeamMember(id: string) {
  return useQuery({
    queryKey: ["cms", "team", id],
    queryFn: () => cmsTeamService.getById(id),
    enabled: !!id,
  })
}

export function useCMSTeamMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "team"] })

  const create = useMutation({
    mutationFn: cmsTeamService.create,
    onSuccess: () => { toast.success("Team member added"); invalidate() },
    onError: () => toast.error("Failed to add team member"),
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof cmsTeamService.update>[1] }) =>
      cmsTeamService.update(id, data),
    onSuccess: () => { toast.success("Team member updated"); invalidate() },
    onError: () => toast.error("Failed to update team member"),
  })

  const remove = useMutation({
    mutationFn: cmsTeamService.delete,
    onSuccess: () => { toast.success("Team member removed"); invalidate() },
    onError: () => toast.error("Failed to remove team member"),
  })

  return { create, update, remove }
}

// ─── Translations ────────────────────────────────────────

export function useCMSTranslations() {
  return useQuery({
    queryKey: ["cms", "translations"],
    queryFn: () => cmsTranslationsService.getAll(),
  })
}

export function useCMSTranslationsMutations() {
  const queryClient = useQueryClient()

  const update = useMutation({
    mutationFn: cmsTranslationsService.update,
    onSuccess: () => {
      toast.success("Translations updated")
      queryClient.invalidateQueries({ queryKey: ["cms", "translations"] })
    },
    onError: () => toast.error("Failed to update translations"),
  })

  return { update }
}

// ─── Settings ────────────────────────────────────────────

export function useCMSSettings() {
  return useQuery({
    queryKey: ["cms", "settings"],
    queryFn: () => cmsSettingsService.get(),
  })
}

export function useCMSSettingsMutations() {
  const queryClient = useQueryClient()

  const update = useMutation({
    mutationFn: cmsSettingsService.update,
    onSuccess: () => {
      toast.success("Settings updated")
      queryClient.invalidateQueries({ queryKey: ["cms", "settings"] })
    },
    onError: () => toast.error("Failed to update settings"),
  })

  return { update }
}

// ─── Pages ───────────────────────────────────────────────

export function useCMSPages() {
  return useQuery({
    queryKey: ["cms", "pages"],
    queryFn: () => cmsPagesService.getAll(),
  })
}

export function useCMSPage(id: string) {
  return useQuery({
    queryKey: ["cms", "pages", id],
    queryFn: () => cmsPagesService.getById(id),
    enabled: !!id,
  })
}

export function useCMSPageMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "pages"] })

  const create = useMutation({
    mutationFn: cmsPagesService.create,
    onSuccess: () => { toast.success("Page created"); invalidate() },
    onError: () => toast.error("Failed to create page"),
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof cmsPagesService.update>[1] }) =>
      cmsPagesService.update(id, data),
    onSuccess: () => { toast.success("Page updated"); invalidate() },
    onError: () => toast.error("Failed to update page"),
  })

  const remove = useMutation({
    mutationFn: cmsPagesService.delete,
    onSuccess: () => { toast.success("Page deleted"); invalidate() },
    onError: () => toast.error("Failed to delete page"),
  })

  return { create, update, remove }
}

// ─── Testimonials ────────────────────────────────────────

export function useCMSTestimonials() {
  return useQuery({
    queryKey: ["cms", "testimonials"],
    queryFn: () => cmsTestimonialsService.getAll(),
  })
}

export function useCMSTestimonial(id: string) {
  return useQuery({
    queryKey: ["cms", "testimonials", id],
    queryFn: () => cmsTestimonialsService.getById(id),
    enabled: !!id,
  })
}

export function useCMSTestimonialMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "testimonials"] })

  const create = useMutation({
    mutationFn: cmsTestimonialsService.create,
    onSuccess: () => { toast.success("Testimonial created"); invalidate() },
    onError: () => toast.error("Failed to create testimonial"),
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof cmsTestimonialsService.update>[1] }) =>
      cmsTestimonialsService.update(id, data),
    onSuccess: () => { toast.success("Testimonial updated"); invalidate() },
    onError: () => toast.error("Failed to update testimonial"),
  })

  const remove = useMutation({
    mutationFn: cmsTestimonialsService.delete,
    onSuccess: () => { toast.success("Testimonial deleted"); invalidate() },
    onError: () => toast.error("Failed to delete testimonial"),
  })

  return { create, update, remove }
}

// ─── Technologies ────────────────────────────────────────

export function useCMSTechnologies() {
  return useQuery({
    queryKey: ["cms", "technologies"],
    queryFn: () => cmsTechnologiesService.getAll(),
  })
}

export function useCMSTechnology(id: string) {
  return useQuery({
    queryKey: ["cms", "technologies", id],
    queryFn: () => cmsTechnologiesService.getById(id),
    enabled: !!id,
  })
}

export function useCMSTechnologyMutations() {
  const queryClient = useQueryClient()
  const invalidate = () => queryClient.invalidateQueries({ queryKey: ["cms", "technologies"] })

  const create = useMutation({
    mutationFn: cmsTechnologiesService.create,
    onSuccess: () => { toast.success("Technology added"); invalidate() },
    onError: () => toast.error("Failed to add technology"),
  })

  const update = useMutation({
    mutationFn: ({ id, data }: { id: string; data: Parameters<typeof cmsTechnologiesService.update>[1] }) =>
      cmsTechnologiesService.update(id, data),
    onSuccess: () => { toast.success("Technology updated"); invalidate() },
    onError: () => toast.error("Failed to update technology"),
  })

  const remove = useMutation({
    mutationFn: cmsTechnologiesService.delete,
    onSuccess: () => { toast.success("Technology deleted"); invalidate() },
    onError: () => toast.error("Failed to delete technology"),
  })

  return { create, update, remove }
}
