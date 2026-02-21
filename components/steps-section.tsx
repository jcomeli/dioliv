"use client"

import { MessageCircle, ClipboardCheck, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const steps = [
  {
    icon: MessageCircle,
    number: "01",
    title: "카톡/전화로 예약",
    description: "카톡 또는 전화로 간편 예약. 원하는 날짜·시간 조율 가능.",
  },
  {
    icon: ClipboardCheck,
    number: "02",
    title: "전문가 방문 시공",
    description: "윈봇 + 수작업 동행, 안전 장비 착용 후 꼼꼼하게 작업합니다.",
  },
  {
    icon: Sparkles,
    number: "03",
    title: "함께 확인 · 마무리",
    description: "작업 완료 후 함께 점검. 불만족 시 당일 재시공.",
  },
]

export function StepsSection() {
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
    <section ref={sectionRef} className="py-20 sm:py-24 md:py-32 bg-[#0B1120]">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {"Process"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
            <span className="text-primary">{"단 3단계"}</span>
            {"면 끝."}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
          {steps.map((step, i) => (
            <div
              key={step.title}
              className={`relative text-center transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 200}ms` }}
            >
              {/* Connector line (desktop only) */}
              {i < steps.length - 1 && (
                <div className="hidden md:block absolute top-10 left-[60%] w-[80%] h-px bg-white/10" />
              )}

              <div className="relative inline-flex flex-col items-center">
                <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 mb-5 border border-primary/20">
                  <step.icon className="h-9 w-9 text-primary" />
                </div>
                <span className="absolute -top-2 -right-2 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground text-xs font-bold">
                  {step.number}
                </span>
              </div>

              <h3 className="text-xl font-bold text-white mb-2">
                {step.title}
              </h3>
              <p className="text-base text-white/75 leading-loose max-w-xs mx-auto">
                {step.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
