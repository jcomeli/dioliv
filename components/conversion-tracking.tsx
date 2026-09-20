"use client"

import { useEffect } from "react"
import { trackEvent } from "@/lib/analytics"

/**
 * 링크 목적에 따라 핵심 문의 행동을 GA4 이벤트로 기록합니다.
 * 마크업과 화면은 바꾸지 않고, 동적으로 렌더링되는 모바일 CTA도 함께 측정합니다.
 */
export function ConversionTracking() {
  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = event.target as Element | null
      const link = target?.closest("a[href]") as HTMLAnchorElement | null
      if (!link) return

      const href = link.getAttribute("href") ?? ""
      const location = link.closest("header")
        ? "header"
        : link.closest("footer")
          ? "footer"
          : "content"

      if (href.startsWith("tel:")) {
        trackEvent("click_phone", { location })
      } else if (href.includes("pf.kakao.com")) {
        trackEvent("click_kakao", { location })
      } else if (href === "#estimate") {
        trackEvent("click_estimate", { location })
      } else if (href.includes("naver.me/xExIe66q")) {
        trackEvent("click_naver_place", { location })
      }
    }

    document.addEventListener("click", handleClick)
    return () => document.removeEventListener("click", handleClick)
  }, [])

  return null
}
