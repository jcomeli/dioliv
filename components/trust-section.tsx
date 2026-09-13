"use client"

import { Shield, Thermometer, Leaf, Store, Info, MessageCircle, BadgeCheck } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"

const trustItems = [
  {
    icon: BadgeCheck,
    title: "산업안전기사 자격 보유",
    description: "산업안전기사 자격을 보유한 작업자가 현장 안전 기준을 확인하며 작업합니다.",
  },
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

const faqs = [
  {
    question: "기본 가격에 무엇이 포함되나요?",
    answer: "선택한 창의 실내창과 외부창 청소, 로봇 작업과 작업자의 수작업 마감이 포함됩니다. 방충망과 창틀은 집 전체 10만원부터 추가할 수 있습니다.",
  },
  {
    question: "표시된 가격과 최종 견적이 달라질 수 있나요?",
    answer: "표시 금액은 일반적인 창 구조의 시작 가격입니다. 창 크기와 개수, 개폐 구조, 오염도에 따라 달라질 수 있으며 방문 전에 사진을 확인하고 최종 금액을 안내합니다.",
  },
  {
    question: "비가 오거나 날씨가 추워도 작업하나요?",
    answer: "안전과 작업 품질에 영향을 주는 강풍·폭우에는 일정을 조정할 수 있습니다. 결빙 위험이 있는 영하 기온에서는 작업하지 않습니다.",
  },
  {
    question: "어떤 사진을 보내야 견적을 받을 수 있나요?",
    answer: "아파트명과 평형, 청소할 창문 전체가 보이는 사진, 창문이 열리는 구조가 보이는 사진을 카톡으로 보내주시면 됩니다.",
  },
  {
    question: "동탄 외 지역도 창문청소가 가능한가요?",
    answer: "동탄을 중심으로 화성, 수원, 오산, 용인, 평택 등 이동 시간 약 1시간 안팎의 경기남부 지역을 방문합니다. 교통 상황과 작업 일정에 따라 달라질 수 있으므로 주소를 보내주시면 가능 여부를 안내합니다.",
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
    <section ref={sectionRef} className="py-24 sm:py-28 md:py-36">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="section-label">Trust & Policy</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            <span className="text-primary">{"안전"}</span>
            {"·"}
            <span className="text-primary">{"품질"}</span>
            {" 원칙"}
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-6">
          {trustItems.map((item, i) => (
            <div
              key={item.title}
              className={`text-center rounded-[2rem] premium-card p-7 transition-all duration-500 hover:shadow-[0_26px_70px_-34px_rgba(15,35,80,0.5)] hover:-translate-y-1 ${
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

        <div className={`mt-10 rounded-2xl border-2 border-[#FEE500]/50 bg-[#FEE500]/10 p-6 md:p-8 transition-all duration-700 delay-300 ${
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
        }`}>
          <div className="flex flex-col md:flex-row items-center justify-between gap-5">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEE500]/20 shrink-0">
                <Store className="h-7 w-7 text-[#191919]" />
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

        <div className="mx-auto mt-16 max-w-3xl">
          <div className="mb-7 text-center">
            <span className="section-label">FAQ</span>
            <h3 className="text-2xl font-extrabold text-foreground sm:text-3xl">{"예약 전에 많이 묻는 질문"}</h3>
          </div>
          <div className="space-y-3">
            {faqs.map((faq) => (
              <details key={faq.question} className="group rounded-2xl border border-border bg-card p-5 open:shadow-md">
                <summary className="cursor-pointer list-none pr-7 text-base font-bold text-foreground marker:hidden">
                  {faq.question}
                  <span className="float-right text-primary transition-transform group-open:rotate-45">+</span>
                </summary>
                <p className="mt-3 text-sm leading-loose text-muted-foreground">{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>

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
