"use client"

import { useState, useCallback, useRef, useEffect } from "react"
import Image from "next/image"
import { Plus, Minus, Copy, CheckCheck, MessageCircle, ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"

const KAKAO_CHANNEL = "https://pf.kakao.com/_lfCjn/chat"

interface WindowItem {
  key: string
  label: string
  price: number
  priceLabel: string
  images: string[]
}

const windowItems: WindowItem[] = [
  { key: "living_sym", label: "거실창 기본(대칭형)", price: 100000, priceLabel: "10만원", images: ["/images/windows/living-sym.png"] },
  { key: "living_asym", label: "거실창 비대칭형", price: 80000, priceLabel: "8만원", images: ["/images/windows/living-asym.png"] },
  { key: "split", label: "입면분할창", price: 160000, priceLabel: "16만원", images: ["/images/windows/split.png"] },
  { key: "room", label: "방창", price: 40000, priceLabel: "4만원/개", images: ["/images/windows/room-1.png", "/images/windows/room-2.png"] },
  { key: "railing", label: "유리난간", price: 10000, priceLabel: "1만원/개", images: [] },
]

function formatKRW(n: number) {
  return n.toLocaleString("ko-KR")
}

export function EstimateSection() {
  const [counts, setCounts] = useState<Record<string, number>>({
    living_sym: 0,
    living_asym: 0,
    split: 0,
    room: 0,
    railing: 0,
  })
  const [screenOption, setScreenOption] = useState(false)
  const [memo, setMemo] = useState("")
  const [copied, setCopied] = useState(false)
  const [isVisible, setIsVisible] = useState(false)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true)
      },
      { threshold: 0.1 }
    )
    const el = sectionRef.current
    if (el) observer.observe(el)
    return () => { if (el) observer.unobserve(el) }
  }, [])

  const increment = useCallback((key: string) => {
    setCounts((prev) => ({ ...prev, [key]: Math.min((prev[key] || 0) + 1, 10) }))
  }, [])

  const decrement = useCallback((key: string) => {
    setCounts((prev) => ({ ...prev, [key]: Math.max((prev[key] || 0) - 1, 0) }))
  }, [])

  const totalMin = (counts.living_sym * 100000)
    + (counts.living_asym * 80000)
    + (counts.split * 160000)
    + (counts.room * 40000)
    + (counts.railing * 10000)
    + (screenOption ? 100000 : 0)

  const totalMax = (counts.living_sym * 100000)
    + (counts.living_asym * 80000)
    + (counts.split * 160000)
    + (counts.room * 40000)
    + (counts.railing * 10000)
    + (screenOption ? 100000 : 0)

  const hasSelection = Object.values(counts).some((v) => v > 0) || screenOption

  const buildMessage = useCallback(() => {
    const lines: string[] = ["[DIO 간편 견적]"]
    windowItems.forEach((item) => {
      const c = counts[item.key] || 0
      if (c > 0) lines.push(`- ${item.label}: ${c}개`)
    })
    if (screenOption) lines.push("- 방충망/창틀청소(옵션): 집 전체 10만원부터")
    if (memo.trim()) lines.push(`- 비고: ${memo.trim()}`)
    if (totalMin === totalMax) {
      lines.push(`예상 견적: ${formatKRW(totalMin)}원`)
    } else {
      lines.push(`예상 범위: ${formatKRW(totalMin)}원 ~ ${formatKRW(totalMax)}원`)
    }
    return lines.join("\n")
  }, [counts, screenOption, memo, totalMin, totalMax])

  const handleCopy = useCallback(async () => {
    try {
      await navigator.clipboard.writeText(buildMessage())
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // fallback
    }
  }, [buildMessage])

  const handleCopyAndChat = useCallback(() => {
    trackEvent("estimate_copy_kakao", { location: "estimate" })
    window.open(KAKAO_CHANNEL, "_blank", "noopener,noreferrer")
    navigator.clipboard.writeText(buildMessage()).then(() => {
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    }).catch(() => undefined)
  }, [buildMessage])

  return (
    <section ref={sectionRef} id="estimate" className="relative py-24 sm:py-28 md:py-36 bg-[#07111f] text-white overflow-hidden">
      <div className="pointer-events-none absolute -left-40 top-20 h-[28rem] w-[28rem] rounded-full bg-primary/20 blur-3xl" />
      <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-10">
        <div className={`text-center mb-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          <span className="section-label">Quick Estimate</span>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-[-0.045em] text-white leading-tight text-balance">
            <span className="text-primary">{"간편 견적"}</span>
            <span className="block sm:inline">{" 계산기"}</span>
          </h2>
          <p className="mt-5 text-white/65 text-base md:text-lg max-w-md mx-auto">
            {"항목과 수량을 선택하면 예상 견적 범위를 바로 확인할 수 있습니다."}
          </p>
        </div>

        {/* Estimator Card */}
        <div className={`rounded-[1.75rem] sm:rounded-[2rem] bg-card border border-white/15 shadow-[0_28px_90px_-36px_rgba(0,0,0,0.75)] p-3 sm:p-6 md:p-8 transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
          {/* Window categories */}
          <div className="flex flex-col gap-3 sm:gap-4">
            {windowItems.map((item) => (
              <div
                key={item.key}
                className="flex flex-col rounded-2xl bg-muted/50 border border-border px-3.5 sm:px-4 py-3.5 gap-3 sm:flex-row sm:items-center sm:justify-between"
              >
                <div className="flex w-full items-center gap-3 sm:flex-1 min-w-0">
                  {/* Images - 전체가 보이도록 object-contain, 유리난간은 이미지 없음 */}
                  {item.images.length > 0 && (
                    <div className={`flex items-center gap-1.5 shrink-0 ${item.images.length === 2 ? "gap-1" : ""}`}>
                      {item.images.map((img, idx) => (
                        <div
                          key={idx}
                          className={`relative rounded-xl overflow-hidden border border-border/50 bg-card shrink-0 ${
                            item.images.length === 2 ? "h-12 w-12 sm:h-14 sm:w-14" : "h-14 w-20 sm:h-16 sm:w-24"
                          }`}
                        >
                          <Image
                            src={img}
                            alt={`${item.label} ${idx + 1}`}
                            fill
                            className="object-contain"
                            sizes={item.images.length === 2 ? "56px" : "96px"}
                          />
                        </div>
                      ))}
                    </div>
                  )}
                  {/* Label and Price */}
                  <div className="flex min-w-0 flex-1 flex-col">
                    <span className="text-[15px] font-extrabold leading-snug text-foreground break-keep">{item.label}</span>
                    <span className="mt-1 text-sm font-semibold text-primary">
                      {item.priceLabel}
                    </span>
                  </div>
                </div>
                {/* Counter */}
                <div className="flex w-full items-center justify-end gap-2 border-t border-border/70 pt-3 sm:w-auto sm:border-0 sm:pt-0 shrink-0">
                  <button
                    type="button"
                    onClick={() => decrement(item.key)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-border bg-card text-foreground shadow-sm hover:bg-muted active:bg-muted transition-colors disabled:opacity-30 touch-manipulation"
                    disabled={!counts[item.key]}
                    aria-label={`${item.label} 감소`}
                  >
                    <Minus className="h-4 w-4" />
                  </button>
                  <span className="w-10 text-center text-base font-extrabold text-foreground tabular-nums">
                    {counts[item.key] || 0}
                  </span>
                  <button
                    type="button"
                    onClick={() => increment(item.key)}
                    className="flex h-10 w-10 items-center justify-center rounded-xl border border-primary/25 bg-primary text-primary-foreground shadow-sm hover:bg-primary/90 active:bg-primary/85 transition-colors touch-manipulation"
                    aria-label={`${item.label} 증가`}
                  >
                    <Plus className="h-4 w-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Screen cleaning toggle */}
          <div className="mt-5 flex items-center justify-between rounded-xl bg-muted/50 border border-border px-4 py-3.5">
            <div className="flex flex-col">
              <span className="text-sm font-bold text-foreground">{"방충망/창틀청소(옵션)"}</span>
              <span className="text-xs text-muted-foreground">{"집 전체 10만원부터"}</span>
            </div>
            <button
              type="button"
              onClick={() => setScreenOption((prev) => !prev)}
              role="switch"
              aria-checked={screenOption}
              className={`relative h-7 w-12 rounded-full transition-colors duration-300 ${
                screenOption ? "bg-primary" : "bg-border"
              }`}
            >
              <span
                className={`absolute top-0.5 left-0.5 h-6 w-6 rounded-full bg-card shadow transition-transform duration-300 ${
                  screenOption ? "translate-x-5" : "translate-x-0"
                }`}
              />
              <span className="sr-only">{"방충망/창틀청소 추가"}</span>
            </button>
          </div>

          {/* Memo */}
          <div className="mt-5">
            <label htmlFor="estimate-memo" className="block text-sm font-bold text-foreground mb-2">
              {"비고 (특수구조/층수/주의사항)"}
            </label>
            <textarea
              id="estimate-memo"
              rows={3}
              value={memo}
              onChange={(e) => setMemo(e.target.value)}
              placeholder={"예: 34평, 15층, 거실창 아치형, 토요일 희망"}
              className="w-full rounded-xl border border-border bg-muted/30 px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-all resize-none"
            />
          </div>

          {/* Total */}
          <div className="mt-6 rounded-xl bg-primary/5 border border-primary/15 p-5 text-center">
            {hasSelection ? (
              <>
                <p className="text-xs text-muted-foreground mb-1">{"예상 견적 범위"}</p>
                {totalMin === totalMax ? (
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground">
                    {formatKRW(totalMin)}
                    <span className="text-base font-semibold text-muted-foreground">{"원"}</span>
                  </p>
                ) : (
                  <p className="text-2xl md:text-3xl font-extrabold text-foreground">
                    {formatKRW(totalMin)}
                    {" ~ "}
                    {formatKRW(totalMax)}
                    <span className="text-base font-semibold text-muted-foreground">{"원"}</span>
                  </p>
                )}
              </>
            ) : (
              <p className="text-sm text-muted-foreground">{"위 항목을 선택하면 예상 견적이 표시됩니다"}</p>
            )}
          </div>

          <p className="mt-3 text-xs text-muted-foreground text-center">
            {screenOption
              ? "방충망/창틀청소는 집 전체 기본요금 10만원을 반영했으며, 최종 견적은 창 구조/오염도 확인 후 확정됩니다."
              : "최종 견적은 창 구조/오염도 확인 후 확정됩니다."}
          </p>

          {/* Actions */}
          <div className="mt-6 flex flex-col sm:flex-row gap-3">
            <Button
              type="button"
              onClick={handleCopyAndChat}
              disabled={!hasSelection}
              className="flex-1 bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full py-6 font-bold shadow-md transition-all"
            >
              <MessageCircle className="mr-2 h-4 w-4" />
              {copied ? "복사 완료 · 카톡에 붙여넣기" : "견적 복사 후 카톡 상담"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
            <Button
              variant="outline"
              onClick={handleCopy}
              disabled={!hasSelection}
              className="rounded-full py-6 font-bold border-border hover:bg-muted transition-all disabled:opacity-40"
            >
              {copied ? (
                <>
                  <CheckCheck className="mr-2 h-4 w-4 text-green-600" />
                  {"복사 완료!"}
                </>
              ) : (
                <>
                  <Copy className="mr-2 h-4 w-4" />
                  {"견적 내용 복사"}
                </>
              )}
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}
