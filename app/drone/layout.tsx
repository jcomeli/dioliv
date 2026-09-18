import type { Metadata } from "next"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "드론 외벽청소·고층 유리창청소",
  description: "아파트·주상복합·오피스 고층 외벽과 유리창 드론청소. 건물 구조와 기상·비행 환경을 먼저 진단하고 적용 가능 구간과 안전한 작업 계획을 안내합니다.",
  alternates: { canonical: "/drone" },
  openGraph: {
    title: `드론 외벽청소·고층 유리창청소 | ${SITE_NAME}`,
    description: "현장 진단부터 안전 계획, 구간별 세척과 검수까지 진행하는 드론 외벽청소 서비스입니다.",
    url: "/drone",
    images: [{ url: "/images/drone-hero.png", alt: "드론 외벽청소 현장" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `드론 외벽청소·고층 유리창청소 | ${SITE_NAME}`,
    description: "현장 진단부터 안전 계획, 구간별 세척과 검수까지 진행하는 드론 외벽청소 서비스입니다.",
    images: ["/images/drone-hero.png"],
  },
}

export default function DroneLayout({ children }: { children: React.ReactNode }) { return children }
