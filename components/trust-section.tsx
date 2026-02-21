"use client"

import { Shield, Thermometer, Leaf, Store, Info, MessageCircle } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"

const trustItems = [
  {
    icon: Shield,
    title: "배상책임보험 가입",
    description: "만일의 사고에 대비, 배상책임보험 가입 완료.",
  },
  {
    icon: Thermometer,
    title: "영하 0도 이하 작업 불가",
    description: "결빙 위험으로 영하 0도 이하에서는 작업하지 않습니다. 악천후 시 일정 조율.",
  },
  {
    icon: Leaf,
    title: "친환경 세정제 + 검증 장비",
    description: "국내 유통 친환경 세정제 키엘 글라스킹과 Unger, 유리제로 등 검증된 전문 장비만 사용.",
  },
]

export function TrustSection() {
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

  return (
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {"Trust & Policy"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            <span className="text-primary">{"안전"}</span>
            {"·"}
            <span className="text-primary">{"품질"}</span>
            {" 원칙"}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className={`text-center rounded-2xl bg-card border border-border p-7 transition-all duration-700 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 mx-auto mb-5">
                <item.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-base font-bold text-card-foreground mb-2">
                {item.title}
              </h3>
              <p className="text-base text-muted-foreground leading-loose">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Commercial / Store banner - prominent */}
        <div className={`mt-10 rounded-2xl border-2 border-accent bg-accent/10 p-6 md:p-8 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/20 shrink-0">
                <Store className="h-7 w-7 text-accent-foreground" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-foreground">
                  {"상가/매장(쇼윈도)도 가능"}
                </h3>
                <p className="text-sm text-muted-foreground leading-loose mt-1">
                  {"아파트 외 상가·매장 유리창도 가능합니다. 상가는 별도 문의해 주세요."}
                </p>
              </div>
            </div>
            <Button
              asChild
              className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-6 py-5 font-bold shadow-md shrink-0"
            >
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />
                {"카톡 문의"}
              </a>
            </Button>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="mt-6 flex items-start gap-3 rounded-2xl bg-muted/50 border border-border p-5">
          <Info className="h-5 w-5 text-muted-foreground shrink-0 mt-0.5" />
          <p className="text-xs text-muted-foreground leading-loose">
            {"DIO리빙앤디자인은 에코백스 제조사/공식 판매사와 무관한 독립 서비스입니다."}
          </p>
        </div>
      </div>
    </section>
  )
}
