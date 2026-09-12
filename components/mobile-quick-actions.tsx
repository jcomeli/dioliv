"use client"

import { Calculator, MessageCircle } from "lucide-react"
import { trackEvent } from "@/lib/analytics"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"

export function MobileQuickActions() {
  return (
    <aside
      aria-label="빠른 견적 메뉴"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 pt-2 pb-[calc(0.5rem+env(safe-area-inset-bottom))] shadow-[0_-8px_30px_rgba(15,23,42,0.12)] backdrop-blur-xl md:hidden"
    >
      <div className="mx-auto grid max-w-md grid-cols-2 gap-2">
        <a href="#estimate" onClick={() => trackEvent("estimate_click", { location: "mobile_bar" })} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-primary bg-card px-3 text-sm font-bold text-primary">
          <Calculator className="h-4 w-4" />
          예상 가격 확인
        </a>
        <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("kakao_click", { location: "mobile_bar" })} className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-[#FEE500] px-3 text-sm font-bold text-[#191919] shadow-sm">
          <MessageCircle className="h-4 w-4" />
          카톡 사진견적
        </a>
      </div>
    </aside>
  )
}
