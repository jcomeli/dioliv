import type { Metadata } from "next"

export const metadata: Metadata = {
  title: "단지 제휴",
  description:
    "아파트 단지 단위 유리창 청소 제휴. 관리사무소·입주민대표·공동구매 추진 단지를 위한 단체 계약, 세대 수 할인, 일정 정리.",
}

export default function ComplexLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
