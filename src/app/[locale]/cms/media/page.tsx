"use client"

import { useCMSMedia, useCMSMediaMutations } from "@/services/queries/cms/useCMSQueries"
import { Typography } from "@/components/typography/Typography"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import {
  AlertDialog, AlertDialogAction, AlertDialogCancel, AlertDialogContent,
  AlertDialogDescription, AlertDialogFooter, AlertDialogHeader, AlertDialogTitle, AlertDialogTrigger,
} from "@/components/ui/alert-dialog"
import { AnimatedSection, StaggerContainer, StaggerItem } from "@/components/shared/PageTransition"
import { useTranslations } from "next-intl"
import { useCallback, useState } from "react"
import { useDropzone } from "react-dropzone"
import { toast } from "sonner"
import { Upload, Trash2, Copy, File, ImageIcon } from "lucide-react"
import type { CMSMedia } from "@/types/cms"

export default function CMSMediaPage() {
  const t = useTranslations("cms.media")
  const ct = useTranslations("common")
  const { data, isLoading } = useCMSMedia()
  const { upload, remove } = useCMSMediaMutations()
  const [uploading, setUploading] = useState(false)

  const onDrop = useCallback(
    async (acceptedFiles: File[]) => {
      setUploading(true)
      for (const file of acceptedFiles) {
        try {
          await upload.mutateAsync(file)
        } catch {
          // error already toasted by mutation
        }
      }
      setUploading(false)
    },
    [upload]
  )

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "image/*": [".png", ".jpg", ".jpeg", ".gif", ".webp", ".svg"],
      "application/pdf": [".pdf"],
      "video/*": [".mp4", ".webm"],
    },
    maxSize: 10 * 1024 * 1024, // 10MB
  })

  function copyUrl(url: string) {
    navigator.clipboard.writeText(url)
    toast.success(t("copied"))
  }

  function isImage(mime: string) {
    return mime.startsWith("image/")
  }

  return (
    <div>
      <AnimatedSection>
        <div className="flex items-center justify-between mb-6">
          <div>
            <Typography variant="h3">Media Library</Typography>
            <Typography variant="muted">Upload and manage files</Typography>
          </div>
        </div>
      </AnimatedSection>

      {/* Dropzone */}
      <AnimatedSection delay={0.1}>
        <div
          {...getRootProps()}
          className={`border-2 border-dashed rounded-2xl p-12 text-center cursor-pointer transition-all duration-300 mb-8 ${
            isDragActive
              ? "border-primary bg-primary/5"
              : "border-border hover:border-primary/50 hover:bg-muted/30"
          }`}
        >
          <input {...getInputProps()} />
          <div className="flex flex-col items-center gap-3">
            <div className="h-16 w-16 rounded-2xl bg-primary/10 flex items-center justify-center">
              <Upload className={`h-8 w-8 text-primary ${uploading ? "animate-bounce" : ""}`} />
            </div>
            <Typography variant="p" className="font-medium">
              {uploading ? t("uploading") : t("dropzone")}
            </Typography>
            <Typography variant="caption">
              PNG, JPG, GIF, WebP, SVG, PDF, MP4 • Max 10MB
            </Typography>
          </div>
        </div>
      </AnimatedSection>

      {/* Media Grid */}
      {isLoading ? (
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {Array.from({ length: 12 }).map((_, i) => (
            <Skeleton key={i} className="aspect-square rounded-xl" />
          ))}
        </div>
      ) : (
        <StaggerContainer className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
          {(data?.data ?? []).map((media: CMSMedia) => (
            <StaggerItem key={media.id}>
              <Card className="group overflow-hidden hover:shadow-lg transition-all duration-300">
                <CardContent className="p-0 relative">
                  <div className="aspect-square bg-muted flex items-center justify-center overflow-hidden">
                    {isImage(media.mimeType) ? (
                      <div
                        className="w-full h-full bg-cover bg-center group-hover:scale-105 transition-transform duration-300"
                        style={{
                          backgroundImage: `url(${media.thumbnailUrl ?? media.url})`,
                        }}
                      />
                    ) : (
                      <div className="flex flex-col items-center gap-2">
                        {media.mimeType.includes("pdf") ? (
                          <File className="h-8 w-8 text-red-500" />
                        ) : (
                          <ImageIcon className="h-8 w-8 text-muted-foreground" />
                        )}
                        <Typography variant="caption" className="px-2 text-center truncate max-w-full">
                          {media.originalName}
                        </Typography>
                      </div>
                    )}
                  </div>

                  {/* Overlay */}
                  <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center gap-2">
                    <Button
                      variant="secondary"
                      size="icon"
                      className="h-8 w-8"
                      onClick={(e) => {
                        e.stopPropagation()
                        copyUrl(media.url)
                      }}
                    >
                      <Copy className="h-4 w-4" />
                    </Button>
                    <AlertDialog>
                      <AlertDialogTrigger asChild>
                        <Button
                          variant="destructive"
                          size="icon"
                          className="h-8 w-8"
                          onClick={(e) => e.stopPropagation()}
                        >
                          <Trash2 className="h-4 w-4" />
                        </Button>
                      </AlertDialogTrigger>
                      <AlertDialogContent>
                        <AlertDialogHeader>
                          <AlertDialogTitle>{ct("confirm")}</AlertDialogTitle>
                          <AlertDialogDescription>{ct("confirmDelete")}</AlertDialogDescription>
                        </AlertDialogHeader>
                        <AlertDialogFooter>
                          <AlertDialogCancel>{ct("cancel")}</AlertDialogCancel>
                          <AlertDialogAction
                            onClick={() => remove.mutate(media.id)}
                            className="bg-destructive text-destructive-foreground"
                          >
                            {ct("delete")}
                          </AlertDialogAction>
                        </AlertDialogFooter>
                      </AlertDialogContent>
                    </AlertDialog>
                  </div>
                </CardContent>

                {/* Filename */}
                <div className="p-2">
                  <Typography variant="caption" className="truncate block">
                    {media.originalName}
                  </Typography>
                </div>
              </Card>
            </StaggerItem>
          ))}
        </StaggerContainer>
      )}

      {!isLoading && (!data?.data || data.data.length === 0) && (
        <div className="text-center py-12">
          <ImageIcon className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <Typography variant="muted">No media files uploaded yet</Typography>
        </div>
      )}
    </div>
  )
}
