import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

/**
 * 사이트맵 (구글·네이버 검색엔진 제출용)
 * 배포 후 Google Search Console, 네이버 서치어드바이저에서 sitemap URL 제출
 */
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: SITE_URL,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: 1,
    },
  ]
}
