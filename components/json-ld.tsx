import { SITE_URL, SITE_NAME, SITE_DESCRIPTION, BUSINESS } from "@/lib/site-config"

/**
 * 구글/네이버 검색엔진용 구조화 데이터 (LocalBusiness + Service)
 * 검색 결과에 사업자 정보·서비스가 풍부하게 노출되도록 합니다.
 */
export function JsonLd() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "LocalBusiness",
        "@id": `${SITE_URL}/#business`,
        name: BUSINESS.name,
        alternateName: SITE_NAME,
        description: SITE_DESCRIPTION,
        url: SITE_URL,
        telephone: BUSINESS.phone,
        address: {
          "@type": "PostalAddress",
          addressRegion: "경기",
          addressLocality: "화성시 동탄구",
          streetAddress: "동탄대로6길 13 B102-2-03호",
        },
        geo: {
          "@type": "GeoCoordinates",
          addressCountry: "KR",
        },
        openingHoursSpecification: {
          "@type": "OpeningHoursSpecification",
          dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
          opens: "09:00",
          closes: "18:00",
        },
        priceRange: "₩₩",
        image: `${SITE_URL}/images/logo.png`,
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "아파트 창문 청소",
        description: "동탄·경기남부 아파트 창문 전문 청소. 윈봇(에코백스) 로봇 + 전문가 수작업 마감, 안전 장비 착용.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "화성시" },
          { "@type": "City", name: "동탄" },
        ],
      },
      {
        "@type": "WebSite",
        "@id": `${SITE_URL}/#website`,
        url: SITE_URL,
        name: SITE_NAME,
        description: SITE_DESCRIPTION,
        publisher: { "@id": `${SITE_URL}/#business` },
        inLanguage: "ko-KR",
      },
    ],
  }

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  )
}
