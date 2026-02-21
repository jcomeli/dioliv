"use client"

import { Check, ArrowRight, MessageCircle, ShoppingBag, Phone, Users } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useRef, useState } from "react"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"
const SMARTSTORE = "https://smartstore.naver.com/dioliv"
const PHONE_NUMBER = "tel:010-2643-1922"

const plans = [
  {
    name: "베이직",
    price: "80,000",
    unit: "원~",
    highlighted: false,
    badge: null,
    description: "거실 메인창(비대칭형)",
    duration: "60분",
    features: [
      "로봇 + 수작업 마감",
      "친환경 세정제 사용",
      "실내창 + 외부창 기본 포함",
    ],
  },
  {
    name: "스탠다드",
    price: "180,000",
    unit: "원~",
    highlighted: true,
    badge: "추천",
    description: "거실 1 + 방 2",
    duration: "90분",
    features: [
      "로봇 + 수작업 마감",
      "친환경 세정제 사용",
      "실내창 + 외부창 기본 포함",
    ],
  },
  {
    name: "맞춤",
    price: "맞춤견적",
    unit: "",
    highlighted: false,
    badge: null,
    description: "거실 1 + 방 n / 특수구조",
    duration: "협의",
    features: [
      "스탠다드 전체 포함",
      "방 추가/특수구조 대응",
      "유리난간/창틀/레일 청소 포함 가능",
      "층수 제한 없음",
    ],
  },
]

export function PricingSection() {
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
    <section ref={sectionRef} id="pricing" className="py-20 sm:py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {"Pricing"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            {"추가 비용 없는 투명한 "}
            <span className="text-primary">{"가격"}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base md:text-lg leading-loose max-w-xl mx-auto">
            {"창틀/방충망 청소는 별도 비용(옵션)입니다."}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7 items-start">
          {plans.map((plan, i) => (
            <div
              key={plan.name}
              className={`relative rounded-2xl border p-7 lg:p-9 transition-all duration-700 ${
                plan.highlighted
                  ? "bg-[#0B1120] text-white border-[#0B1120] shadow-2xl shadow-foreground/15 md:scale-[1.03]"
                  : "bg-card border-border hover:shadow-xl hover:shadow-foreground/5"
              } ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center rounded-full bg-primary px-5 py-1 text-xs font-bold text-primary-foreground shadow-lg">
                  {plan.badge}
                </span>
              )}

              <p className={`text-sm font-semibold mb-1 ${plan.highlighted ? "text-white/60" : "text-muted-foreground"}`}>
                {plan.description}
              </p>
              <h3 className={`text-xl font-bold ${plan.highlighted ? "text-white" : "text-card-foreground"}`}>
                {plan.name}
              </h3>

              <div className="mt-4 flex items-baseline gap-1">
                <span className={`text-4xl font-extrabold ${plan.highlighted ? "text-white" : "text-foreground"}`}>
                  {plan.price}
                </span>
                {plan.unit && (
                  <span className={`text-base font-medium ${plan.highlighted ? "text-white/50" : "text-muted-foreground"}`}>
                    {plan.unit}
                  </span>
                )}
              </div>
              <p className={`text-xs mt-1.5 ${plan.highlighted ? "text-white/40" : "text-muted-foreground"}`}>
                {"소요시간 "}
                {plan.duration}
              </p>

              <div className={`my-6 h-px ${plan.highlighted ? "bg-white/10" : "bg-border"}`} />

              <ul className="flex flex-col gap-3.5">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className={`flex h-5 w-5 items-center justify-center rounded-full shrink-0 mt-0.5 ${
                      plan.highlighted ? "bg-primary" : "bg-primary/10"
                    }`}>
                      <Check className={`h-3 w-3 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    </div>
                    <span className={`text-sm ${plan.highlighted ? "text-white/85" : "text-card-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                asChild
                className={`mt-7 w-full rounded-full py-6 font-bold transition-all duration-300 ${
                  plan.highlighted
                    ? "bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/30"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 shadow-md shadow-primary/20"
                }`}
              >
                <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {"카톡 견적 받기"}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          ))}
        </div>

        <div className="mt-12 rounded-2xl border-2 border-primary bg-primary/5 p-6 md:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/15 shrink-0">
                <Users className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h3 className="text-lg md:text-xl font-extrabold text-foreground">
                  {"단지 공동구매 환영"}
                </h3>
                <p className="text-sm text-muted-foreground leading-loose mt-1">
                  {"같은 단지 이웃과 함께 신청하면 추가 할인 적용"}
                </p>
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-2.5 shrink-0 w-full md:w-auto">
              <Button
                asChild
                className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-6 py-5 font-bold shadow-md"
              >
                <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-2 h-4 w-4" />
                  {"카톡 문의"}
                </a>
              </Button>
              <Button
                asChild
                variant="outline"
                className="rounded-full px-6 py-5 font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground"
              >
                <a href={PHONE_NUMBER}>
                  <Phone className="mr-2 h-4 w-4" />
                  {"전화 문의"}
                </a>
              </Button>
            </div>
          </div>
        </div>

        <div className="mt-6 rounded-2xl border-2 border-dashed border-primary/30 bg-primary/5 p-6 md:p-8 text-center">
          <p className="text-lg font-bold text-foreground mb-2">
            {"가격이 부담이라면? 창문로봇청소기 대여로 셋업도 가능!"}
          </p>
          <p className="text-sm text-muted-foreground leading-loose mb-4">
            {"에코백스 윈봇 대여 서비스 → 스마트스토어에서 확인하세요"}
          </p>
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-5 font-bold border-primary text-primary hover:bg-primary hover:text-primary-foreground transition-all"
          >
            <a href={SMARTSTORE} target="_blank" rel="noopener noreferrer">
              <ShoppingBag className="mr-2 h-4 w-4" />
              {"스마트스토어 바로가기"}
              <ArrowRight className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
