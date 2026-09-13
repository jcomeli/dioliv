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
        areaServed: ["동탄", "화성시", "수원시", "오산시", "용인시", "평택시"],
        sameAs: [
          "https://naver.me/xExIe66q",
          "https://smartstore.naver.com/dioliv",
        ],
      },
      {
        "@type": "Service",
        "@id": `${SITE_URL}/#service`,
        name: "동탄 아파트 창문청소·외창청소·유리창청소",
        serviceType: ["창문청소", "외창청소", "유리창청소", "아파트 창문청소"],
        description: "동탄과 경기남부 아파트 창문청소, 외창청소, 유리창청소 서비스. 창문로봇과 전문가 수작업으로 마감합니다.",
        provider: { "@id": `${SITE_URL}/#business` },
        areaServed: [
          { "@type": "City", name: "화성시" },
          { "@type": "City", name: "동탄" },
          { "@type": "City", name: "수원시" },
          { "@type": "City", name: "오산시" },
          { "@type": "City", name: "용인시" },
          { "@type": "City", name: "평택시" },
        ],
        offers: {
          "@type": "Offer",
          priceCurrency: "KRW",
          price: "80000",
          description: "거실 메인창 비대칭형 기준 시작 가격이며 창 구조와 오염도에 따라 달라질 수 있습니다.",
        },
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
