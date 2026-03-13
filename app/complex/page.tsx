"use client"

import Link from "next/link"
import Image from "next/image"
import { ArrowRight, MessageCircle, Home, CheckCircle2, Building2, Sparkles, ChevronDown, Phone } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { partnerApartments } from "@/lib/partner-apartments"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"
const PHONE_NUMBER = "tel:010-2643-1922"

const whyItems = [
  {
    title: "한 번에 계약·일정 정리",
    desc: "단지 단위로 일정과 세대 수를 정리해 한 번에 진행. 개별 예약 부담을 줄입니다.",
  },
  {
    title: "공동 구매 할인",
    desc: "세대 수가 많을수록 단가 할인. 입주민 부담을 낮추고 만족도를 높입니다.",
  },
  {
    title: "공정한 품질·안전 기준",
    desc: "동일한 작업 방식과 안전 기준으로 진행. 관리사무소·입대표가 함께 관리하기 좋습니다.",
  },
]

const suitableFor = [
  "공동구매·단체 청소를 검토 중인 단지",
  "입주민대표·관리사무소가 추진하는 단지",
  "로비·공용부 유리 정비를 함께 고민하는 단지",
]

const processSteps = [
  { step: "01", title: "문의·현장 파악", desc: "단지 규모·세대 구조·희망 일정을 카톡/전화로 간단히 안내해 주시면, 방문 또는 사진으로 구조를 확인합니다." },
  { step: "02", title: "견적·공지 자료", desc: "유형별 단가와 세대 수별 할인을 반영한 견적과, 입주민 공지용 문구·안내 자료를 제공합니다." },
  { step: "03", title: "계약·일정 확정", desc: "참여 세대 확정 후 계약하고, 작업 순서와 날짜를 정해 단계별로 진행합니다." },
  { step: "04", title: "작업·검수", desc: "세대별 방문 후 로봇+수작업으로 청소하고, 작업 전·후 확인으로 마무리합니다." },
]

const scopeItems = [
  "로봇(윈봇) 1차 세척 후 전문가 수작업으로 마감해 균일한 품질을 유지합니다.",
  "방충망 탈거 없이 작업 가능한 구조를 우선으로 합니다. 세대 구조 확인 후 진행합니다.",
  "작업 전·후 확인으로 범위와 결과를 명확히 하고, 불가 구간은 사전에 안내합니다.",
  "배상책임보험에 가입한 상태로 진행합니다.",
  "기본은 유리면(유리창) 중심이며, 창틀·레일 전체 청소는 별도 옵션입니다.",
  "심한 물때·오염은 일반 세척으로 완전 제거에 한계가 있을 수 있어, 현장 확인 후 안내합니다.",
]

const benefits = [
  "입주민 만족도 제고 및 단지 이미지 개선",
  "관리사무소·입대표 주도로 공정한 단가·일정 관리",
  "한 번의 추진으로 다수 세대 정리된 청소",
]

const pricingRows = [
  { label: "거실창(대칭형)", individual: "100,000", tenPlus: "90,000", thirtyPlus: "85,000" },
  { label: "거실창(비대칭형)", individual: "80,000", tenPlus: "72,000", thirtyPlus: "68,000" },
  { label: "방창", individual: "40,000", tenPlus: "36,000", thirtyPlus: "34,000" },
  { label: "유리난간·기타", individual: "20,000", tenPlus: "18,000", thirtyPlus: "17,000" },
]

const faqs = [
  {
    q: "단지 제휴는 어떻게 신청하나요?",
    a: "카톡 또는 전화로 단지명·대략 세대 수·희망 시기를 알려 주시면, 현장(또는 사진) 확인 후 견적과 공지용 자료를 보내 드립니다.",
  },
  {
    q: "세대 구조는 어떻게 확인하나요?",
    a: "방문 또는 세대별 창 구조 사진으로 확인합니다. 방충망 탈거 없이 가능한 구조를 우선으로 안내합니다.",
  },
  {
    q: "작업 범위와 불가 구간은?",
    a: "기본은 유리면(유리창) 중심입니다. 창틀·레일 전체 청소는 별도 옵션입니다. 구조상 불가한 구간은 사전에 안내합니다.",
  },
  {
    q: "가격은 어떻게 적용되나요?",
    a: "세대 수에 따라 개별/10세대 이상/30세대 이상 구간별 단가가 적용됩니다. 견적 시 참여 예상 세대 수를 알려 주시면 됩니다.",
  },
  {
    q: "안전·보험은 어떻게 되나요?",
    a: "배상책임보험에 가입한 상태로 진행하며, 안전장비 착용과 작업 전후 확인을 원칙으로 합니다.",
  },
]

export default function ComplexPage() {
  return (
    <main className="min-h-screen bg-background">
      {/* 상단: 홈으로 */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 sm:px-5 lg:px-10 py-3.5 backdrop-blur-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          <Home className="h-4 w-4" />
          홈화면으로 돌아가기
        </Link>
      </div>

      {/* 현재 제휴 단지 전광판 */}
      <section className="border-b border-border bg-secondary/60">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 py-2.5 flex items-center gap-3 overflow-hidden">
          <div className="inline-flex items-center gap-1.5 shrink-0">
            <span className="inline-flex h-6 w-6 items-center justify-center rounded-full bg-primary/10">
              <Building2 className="h-3.5 w-3.5 text-primary" />
            </span>
            <span className="text-[11px] sm:text-xs font-semibold tracking-[0.18em] uppercase text-primary">
              현재 제휴 진행 중인 단지
            </span>
          </div>
          <div className="relative flex-1 overflow-hidden">
            <div className="partner-marquee flex items-center gap-6 text-xs sm:text-sm text-muted-foreground">
              {[...partnerApartments, ...partnerApartments].map((name, idx) => (
                <span
                  key={`${name}-${idx}`}
                  className="inline-flex items-center gap-2 rounded-full border border-border/60 bg-card/80 px-3.5 py-1.5 shadow-sm whitespace-nowrap"
                >
                  <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-medium text-foreground/90">{name}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 1. Hero */}
      <section className="relative min-h-[60vh] sm:min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/hero-window-before-after.png"
            alt="아파트 단지 유리창 청소 – DIO 단지 제휴"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B1120]/75" />
        </div>
        <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-5 lg:px-10 py-20 sm:py-24 md:py-32 text-center">
          <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            아파트{" "}
            <span className="text-primary">단지 제휴</span>
            <br className="sm:hidden" />
            <span className="sm:inline"> 유리창 청소</span>
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-loose max-w-2xl mx-auto">
            관리사무소·입주민대표·공동구매 추진을 위한 단지 단위 제안
          </p>
          <p className="mt-2 text-sm text-white/70">
            단체 계약으로 일정 정리와 단가 할인을 한 번에
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 px-8 py-7 text-base font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                단지 제휴 문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-7 text-base font-bold border-white/20 text-white/90 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <a href={PHONE_NUMBER}>
                <Phone className="mr-2 h-5 w-5" />
                전화 문의
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* 2. 단지 차원 진행이 필요한 이유 */}
      <section className="py-20 sm:py-24 md:py-32" id="why">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Why</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              단지 차원으로 진행하면
              <span className="text-primary"> 좋은 이유</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
            {whyItems.map((item, i) => (
              <div
                key={item.title}
                className="rounded-2xl border border-border bg-card p-7 lg:p-9 transition-all duration-500 hover:shadow-lg hover:shadow-foreground/5 hover:-translate-y-0.5"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 mb-5">
                  <Building2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{item.title}</h3>
                <p className="text-muted-foreground leading-loose text-sm md:text-base">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. 이런 단지에 적합 */}
      <section className="bg-secondary/50 py-20 sm:py-24 md:py-32" id="suitable">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Target</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              이런 단지에{" "}
              <span className="text-primary">적합합니다</span>
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-3 max-w-3xl mx-auto">
            {suitableFor.map((text) => (
              <li
                key={text}
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3.5 text-sm font-medium shadow-sm hover:shadow-foreground/5 transition-all"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {text}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 4. 진행 절차 */}
      <section className="py-20 sm:py-24 md:py-32" id="process">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Process</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              진행 <span className="text-primary">절차</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {processSteps.map((item) => (
              <div
                key={item.step}
                className="relative rounded-2xl border border-border bg-card p-6 lg:p-8 transition-all duration-500 hover:shadow-lg hover:shadow-foreground/5"
              >
                <span className="text-4xl font-extrabold text-primary/20">{item.step}</span>
                <h3 className="text-lg font-bold text-foreground mt-2 mb-3">{item.title}</h3>
                <p className="text-sm text-muted-foreground leading-loose">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. 작업 방식과 범위 */}
      <section className="bg-secondary/50 py-20 sm:py-24 md:py-32" id="scope">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Scope</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              작업 <span className="text-primary">방식과 범위</span>
            </h2>
          </div>
          <ul className="space-y-4 max-w-3xl mx-auto">
            {scopeItems.map((text, i) => (
              <li key={i} className="flex items-start gap-3 rounded-xl border border-border bg-card p-4 sm:p-5">
                <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                <span className="text-sm sm:text-base text-muted-foreground leading-loose">{text}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 6. 기대 효과 */}
      <section className="py-20 sm:py-24 md:py-32" id="benefits">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Benefits</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              기대 <span className="text-primary">효과</span>
            </h2>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {benefits.map((text) => (
              <div
                key={text}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-6 py-4 shadow-sm hover:shadow-lg hover:shadow-foreground/5 transition-all"
              >
                <Sparkles className="h-5 w-5 text-primary shrink-0" />
                <span className="text-sm font-semibold text-foreground">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. 공동 진행 가격 예시 */}
      <section className="bg-secondary/50 py-20 sm:py-24 md:py-32" id="pricing">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">Pricing</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              공동 진행 <span className="text-primary">가격 예시</span>
            </h2>
            <p className="mt-4 text-muted-foreground text-sm md:text-base max-w-xl mx-auto">
              세대 수에 따라 단가가 적용됩니다. (단위: 원)
            </p>
          </div>
          <div className="overflow-x-auto -mx-4 sm:mx-0">
            <div className="inline-block min-w-full align-middle px-4 sm:px-0">
              <table className="min-w-full rounded-2xl border border-border bg-card overflow-hidden shadow-sm">
                <thead>
                  <tr className="border-b border-border bg-muted/50">
                    <th className="text-left py-4 px-4 sm:px-6 text-sm font-bold text-foreground">유형</th>
                    <th className="text-right py-4 px-4 sm:px-6 text-sm font-bold text-foreground">개별</th>
                    <th className="text-right py-4 px-4 sm:px-6 text-sm font-bold text-foreground">10세대 이상</th>
                    <th className="text-right py-4 px-4 sm:px-6 text-sm font-bold text-primary">30세대 이상</th>
                  </tr>
                </thead>
                <tbody>
                  {pricingRows.map((row, i) => (
                    <tr key={row.label} className={i < pricingRows.length - 1 ? "border-b border-border" : ""}>
                      <td className="py-4 px-4 sm:px-6 text-sm font-medium text-foreground">
                        {row.label === "거실창(대칭형)" ? (
                          <span className="inline-flex items-center gap-3">
                            <span className="relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                              <Image
                                src="/images/living-sym-window.png"
                                alt="거실창 대칭형 예시"
                                fill
                                className="object-contain"
                                sizes="80px"
                              />
                            </span>
                            {row.label}
                          </span>
                        ) : row.label === "거실창(비대칭형)" ? (
                          <span className="inline-flex items-center gap-3">
                            <span className="relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                              <Image
                                src="/images/living-asym-window.png"
                                alt="거실창 비대칭형 예시"
                                fill
                                className="object-contain"
                                sizes="80px"
                              />
                            </span>
                            {row.label}
                          </span>
                        ) : row.label === "방창" ? (
                          <span className="inline-flex items-center gap-3">
                            <span className="relative h-12 w-16 sm:h-14 sm:w-20 rounded-lg overflow-hidden border border-border bg-muted shrink-0">
                              <Image
                                src="/images/room-window.png"
                                alt="방창 예시"
                                fill
                                className="object-contain"
                                sizes="80px"
                              />
                            </span>
                            {row.label}
                          </span>
                        ) : (
                          row.label
                        )}
                      </td>
                      <td className="py-4 px-4 sm:px-6 text-sm text-muted-foreground text-right tabular-nums">{row.individual}</td>
                      <td className="py-4 px-4 sm:px-6 text-sm text-muted-foreground text-right tabular-nums">{row.tenPlus}</td>
                      <td className="py-4 px-4 sm:px-6 text-sm font-semibold text-primary text-right tabular-nums">{row.thirtyPlus}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
          <p className="mt-4 text-center text-xs text-muted-foreground">
            ※ 창틀·방충망 등 전체 청소는 별도 옵션입니다. 견적 시 반영 가능합니다.
          </p>
        </div>
      </section>

      {/* 8. FAQ */}
      <section className="py-20 sm:py-24 md:py-32" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="section-label">FAQ</span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              자주 묻는 질문
            </h2>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Collapsible key={faq.q}>
                <div className="faq-card rounded-2xl border-2 border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 hover:border-primary/30 has-[[data-state=open]]:border-primary/50 has-[[data-state=open]]:shadow-lg has-[[data-state=open]]:bg-primary/[0.03]">
                  <CollapsibleTrigger className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-muted/20 transition-colors rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold tabular-nums">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-foreground pr-2">{faq.q}</span>
                    <ChevronDown className="h-5 w-5 shrink-0 text-primary/70 transition-transform duration-200 [.faq-card:has([data-state=open])_&]:rotate-180" />
                  </CollapsibleTrigger>
                  <CollapsibleContent>
                    <div className="border-t border-border/80 bg-muted/30">
                      <p className="px-5 py-4 pl-[3.25rem] pr-5 text-sm text-muted-foreground leading-loose sm:pl-14">
                        {faq.a}
                      </p>
                    </div>
                  </CollapsibleContent>
                </div>
              </Collapsible>
            ))}
          </div>
        </div>
      </section>

      {/* 9. 하단 CTA */}
      <section className="relative py-20 sm:py-24 md:py-32 overflow-hidden bg-[#0B1120]">
        <div className="absolute inset-0 opacity-[0.03]">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-5 lg:px-10 text-center">
          <span className="section-label block mb-5 text-primary">Contact</span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
            단지 제휴, 지금 문의하세요
          </h2>
          <p className="mt-5 text-white/70 text-sm md:text-base max-w-md mx-auto leading-loose">
            관리사무소·입주민대표·공동구매 담당자님, 견적과 공지 자료 요청은 카톡·전화로 편하게 연락 주세요.
          </p>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-8 py-7 text-base font-bold shadow-lg transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
            >
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                단지 제휴 문의하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-7 text-base font-bold border-white/20 text-white/90 bg-white/5 hover:bg-white/10 hover:text-white transition-all duration-300 w-full sm:w-auto"
            >
              <a href={PHONE_NUMBER}>
                <Phone className="mr-2 h-5 w-5" />
                전화 문의
              </a>
            </Button>
          </div>
        </div>
      </section>

      <Footer logoHref="/" />
    </main>
  )
}
