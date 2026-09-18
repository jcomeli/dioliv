import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

/**
 * 사이트맵 (구글·네이버 검색엔진 제출용)
 * 배포 후 Google Search Console, 네이버 서치어드바이저에서 sitemap URL 제출
 */
export default function sitemap(): MetadataRoute.Sitemap {
  // SEO 설정과 전역 구조화 데이터가 마지막으로 실제 수정된 날짜입니다.
  const lastModified = new Date("2026-09-18T00:00:00+09:00")

  return [
    {
      url: SITE_URL,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 1,
    },
    {
      url: `${SITE_URL}/complex`,
      lastModified,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/drone`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    },
  ]
}
