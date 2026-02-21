"use client"

import { Bot, ShieldCheck, Sparkles } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const solutions = [
  {
    icon: Bot,
    title: "로봇(윈봇) + 전문가 수작업 마감",
    description:
      "Ecovacs Winbot으로 1차 세척 후, 전문가가 유리 청소 전문 장비로 수작업 마감합니다. 로봇 단독보다 균일하고 깔끔한 마감 품질.",
  },
  {
    icon: ShieldCheck,
    title: "안전벨트/하네스 + 이중 보호",
    description:
      "위험 작업 시 안전벨트·하네스 착용, 로봇 낙하 대비 안전고리 + 전원선 이중 보호. 안전장비 이중 착용으로 추락 위험 원천 차단.",
  },
  {
    icon: Sparkles,
    title: "친환경 세정제 + 전문 장비 마감",
    description:
      "국내 유통 친환경 유리전용 세정제(키엘 글라스킹 등)만 사용. 아이·반려동물 있는 가정도 안심. 유해 물질 최소화.",
  },
]

export function SolutionSection() {
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
    <section ref={sectionRef} id="solution" className="py-20 sm:py-24 md:py-32 bg-secondary/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {"Solution"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            {"DIO의"}
            <span className="text-primary">{" 3가지 해결책"}</span>
          </h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {solutions.map((solution, i) => (
            <div
              key={solution.title}
              className={`group rounded-2xl bg-card border border-border p-7 lg:p-9 transition-all duration-700 hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-primary/8 mb-5 group-hover:bg-primary/15 transition-colors duration-300">
                <solution.icon className="h-7 w-7 text-primary" />
              </div>
              <h3 className="text-lg font-bold text-card-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-base text-muted-foreground leading-loose">
                {solution.description}
              </p>
            </div>
          ))}
        </div>
        <div className="mt-10 rounded-2xl border border-border bg-card p-5 md:p-6 text-center">
          <p className="text-sm text-muted-foreground leading-loose">
            {"※ 유리에 오래 고착된 일부 오염은 100% 제거가 어려울 수 있으며, 현장 상태에 따라 안내드립니다."}
          </p>
        </div>
      </div>
    </section>
  )
}
