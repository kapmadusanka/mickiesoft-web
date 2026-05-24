"use client"

import { useQuery } from "@tanstack/react-query"
import {
  heroService,
  clientsService,
  aboutService,
  servicesService,
  technologiesService,
  blogService,
} from "@/services/api/public"

export function useHeroContent(locale: string) {
  return useQuery({
    queryKey: ["hero", locale],
    queryFn: () => heroService.getHero(locale),
    staleTime: 5 * 60 * 1000,
  })
}

export function useClients() {
  return useQuery({
    queryKey: ["clients"],
    queryFn: () => clientsService.getAll(),
    staleTime: 10 * 60 * 1000,
  })
}

export function useAboutContent(locale: string) {
  return useQuery({
    queryKey: ["about", locale],
    queryFn: () => aboutService.getAbout(locale),
    staleTime: 5 * 60 * 1000,
  })
}

export function useStats() {
  return useQuery({
    queryKey: ["stats"],
    queryFn: () => aboutService.getStats(),
    staleTime: 10 * 60 * 1000,
  })
}

export function useServices(locale: string) {
  return useQuery({
    queryKey: ["services", locale],
    queryFn: () => servicesService.getAll(locale),
    staleTime: 5 * 60 * 1000,
  })
}

export function useTechnologies(locale: string) {
  return useQuery({
    queryKey: ["technologies", locale],
    queryFn: () => technologiesService.getAll(locale),
    staleTime: 10 * 60 * 1000,
  })
}

export function useBlogPosts(locale: string) {
  return useQuery({
    queryKey: ["blog", locale],
    queryFn: () => blogService.getAll(locale),
    staleTime: 5 * 60 * 1000,
  })
}

export function useBlogPost(slug: string, locale: string) {
  return useQuery({
    queryKey: ["blog", slug, locale],
    queryFn: () => blogService.getBySlug(slug, locale),
    enabled: !!slug,
  })
}
