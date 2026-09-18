import type { Metadata } from "next"
import { SITE_NAME } from "@/lib/site-config"

export const metadata: Metadata = {
  title: "아파트 창문청소 단지 제휴·공동구매",
  description:
    "관리사무소·입주민대표·공동구매 담당자를 위한 아파트 창문청소 단지 제휴. 참여 세대 할인, 입주민 공지 자료와 세대별 일정을 함께 준비합니다.",
  alternates: { canonical: "/complex" },
  openGraph: {
    title: `아파트 창문청소 단지 제휴·공동구매 | ${SITE_NAME}`,
    description: "참여 세대 할인부터 입주민 공지와 일정 운영까지 함께하는 아파트 창문청소 단지 제휴입니다.",
    url: "/complex",
    images: [{ url: "/images/cases/seodongtan-after.jpeg", alt: "아파트 창문청소 단지 제휴" }],
  },
  twitter: {
    card: "summary_large_image",
    title: `아파트 창문청소 단지 제휴·공동구매 | ${SITE_NAME}`,
    description: "참여 세대 할인부터 입주민 공지와 일정 운영까지 함께하는 아파트 창문청소 단지 제휴입니다.",
    images: ["/images/cases/seodongtan-after.jpeg"],
  },
}

export default function ComplexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
