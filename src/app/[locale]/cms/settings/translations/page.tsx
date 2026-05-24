"use client"

import { useCMSTranslations, useCMSTranslationsMutations } from "@/services/queries/cms/useCMSQueries"
import { DataTable } from "@/components/data-table/DataTable"
import { Typography } from "@/components/typography/Typography"
import { Skeleton } from "@/components/ui/skeleton"
import { AnimatedSection } from "@/components/shared/PageTransition"
import { useTranslations } from "next-intl"
import type { ColumnDef } from "@tanstack/react-table"
import type { CMSTranslation } from "@/types/cms"

export default function CMSTranslationsPage() {
  const ct = useTranslations("common")
  const { data, isLoading } = useCMSTranslations()

  const columns: ColumnDef<CMSTranslation>[] = [
    { accessorKey: "key", header: "Key" },
    { accessorKey: "section", header: "Section" },
    { accessorKey: "valueEn", header: "English" },
    { accessorKey: "valueSi", header: "සිංහල" },
  ]

  if (isLoading) {
    return (
      <div className="space-y-4">
        <Skeleton className="h-8 w-48" />
        <Skeleton className="h-[400px] w-full rounded-xl" />
      </div>
    )
  }

  return (
    <div>
      <AnimatedSection>
        <div className="mb-6">
          <Typography variant="h3">Translations</Typography>
          <Typography variant="muted">Manage translation strings for English and Sinhala</Typography>
        </div>
      </AnimatedSection>

      <DataTable
        columns={columns}
        data={data?.data ?? []}
        isLoading={isLoading}
        searchKey="key"
      />
    </div>
  )
}
