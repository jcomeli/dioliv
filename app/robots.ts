import { MetadataRoute } from "next"
import { SITE_URL } from "@/lib/site-config"

/**
 * robots.txt (크롤러 안내)
 * 구글·네이버 봇이 사이트맵 위치를 알 수 있도록 설정
 */
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Googlebot",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: "Yeti", // 네이버 봇
        allow: "/",
        disallow: ["/api/"],
      },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
  }
}
