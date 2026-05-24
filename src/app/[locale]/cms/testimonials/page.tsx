"use client"

import { useCMSTestimonials, useCMSTestimonialMutations } from "@/services/queries/cms/useCMSQueries"
import { DataTable } from "@/components/data-table/DataTable"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import {
  DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { useTranslations } from "next-intl"
import { Plus, MoreHorizontal, Pencil, Trash2, Star } from "lucide-react"
import type { ColumnDef } from "@tanstack/react-table"
import type { CMSTestimonial } from "@/types/cms"

export default function CMSTestimonialsPage() {
  const t = useTranslations("common")
  const { data, isLoading } = useCMSTestimonials()
  const { remove } = useCMSTestimonialMutations()

  const columns: ColumnDef<CMSTestimonial>[] = [
    { accessorKey: "nameEn", header: t("name") },
    { accessorKey: "company", header: "Company" },
    {
      accessorKey: "rating",
      header: "Rating",
      cell: ({ row }) => (
        <div className="flex items-center gap-0.5">
          {Array.from({ length: 5 }).map((_, i) => (
            <Star
              key={i}
              className={`h-3.5 w-3.5 ${
                i < row.original.rating
                  ? "fill-yellow-400 text-yellow-400"
                  : "text-muted-foreground/30"
              }`}
            />
          ))}
        </div>
      ),
    },
    {
      accessorKey: "status", header: t("status"),
      cell: ({ row }) => (
        <Badge variant={row.original.status === "active" ? "default" : "secondary"}>
          {row.original.status === "active" ? t("active") : t("inactive")}
        </Badge>
      ),
    },
    {
      id: "actions", header: t("actions"),
      cell: ({ row }) => (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon" className="h-8 w-8"><MoreHorizontal className="h-4 w-4" /></Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuItem><Pencil className="mr-2 h-4 w-4" />{t("edit")}</DropdownMenuItem>
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <DropdownMenuItem className="text-destructive" onSelect={(e) => e.preventDefault()}>
                  <Trash2 className="mr-2 h-4 w-4" />{t("delete")}
                </DropdownMenuItem>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader><AlertDialogTitle>{t("confirm")}</AlertDialogTitle><AlertDialogDescription>{t("confirmDelete")}</AlertDialogDescription></AlertDialogHeader>
                <AlertDialogFooter><AlertDialogCancel>{t("cancel")}</AlertDialogCancel><AlertDialogAction onClick={() => remove.mutate(row.original.id)} className="bg-destructive text-destructive-foreground">{t("delete")}</AlertDialogAction></AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </DropdownMenuContent>
        </DropdownMenu>
      ),
    },
  ]

  return (
    <div>
      <div className="flex items-center justify-between mb-6">
        <div><Typography variant="h3">Testimonials</Typography><Typography variant="muted">Manage client testimonials</Typography></div>
        <Button className="gap-2"><Plus className="h-4 w-4" />{t("create")}</Button>
      </div>
      <DataTable columns={columns} data={data?.data ?? []} isLoading={isLoading} searchKey="nameEn" />
    </div>
  )
}
