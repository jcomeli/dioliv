declare global {
  interface Window {
    wcs?: {
      trans: (conversion: { type: string; value?: string }) => void
    }
  }
}

/** 네이버 광고에서 실제 문의 의도가 확인된 행동을 lead 전환으로 기록합니다. */
export function trackNaverLead() {
  if (typeof window === "undefined" || !window.wcs?.trans) return
  window.wcs.trans({ type: "lead" })
}

