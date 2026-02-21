"use client"

import { AlertTriangle, Coins, Timer } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const problems = [
  {
    icon: AlertTriangle,
    number: "01",
    title: "외부창 위험",
    subtitle: "추락 / 무릎 꿇은 자세",
    description:
      "전문 장비 없이 외부창을 닦으면 추락 위험이 높습니다. 무리한 자세로 허리·어깨 부상으로 이어질 수 있습니다.",
  },
  {
    icon: Coins,
    number: "02",
    title: "최강 가성비",
    subtitle: "국내 최저가 보장",
    description:
      "집주인·세입자 모두 부담 없는 가격. 그동안 놓쳤던 뷰, 이제 선명하게 되찾으세요.",
  },
  {
    icon: Timer,
    number: "03",
    title: "시간 낭비",
    subtitle: "주말 반나절 소모",
    description:
      "준비부터 마무리까지 주말 반나절 소모. 소중한 시간을 청소에 쓰지 마세요.",
  },
]

export function ProblemSection() {
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
    <section ref={sectionRef} id="why" className="py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {"Problem"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            {"창문 청소,"}
            {" "}
            <span className="text-primary">{"왜 전문가"}</span>
            {"에게 맡겨야 할까요?"}
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {problems.map((problem, i) => (
            <div
              key={problem.title}
              className={`group relative rounded-2xl bg-card border border-border p-7 lg:p-9 transition-all duration-700 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <span className="text-6xl font-extrabold text-border/60 absolute top-5 right-7 select-none">
                {problem.number}
              </span>

              <div className={`flex h-12 w-12 items-center justify-center rounded-xl mb-5 ${
                i === 1 ? "bg-primary/10" : "bg-destructive/8"
              }`}>
                <problem.icon className={`h-6 w-6 ${i === 1 ? "text-primary" : "text-destructive"}`} />
              </div>

              <h3 className="text-lg font-bold text-card-foreground mb-1">
                {problem.title}
              </h3>
              <p className={`text-sm font-semibold mb-3 ${i === 1 ? "text-primary" : "text-destructive/80"}`}>
                {problem.subtitle}
              </p>
              <p className="text-base text-muted-foreground leading-loose">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
