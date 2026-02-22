"use client"

import { useState, useCallback } from "react"
import Link from "next/link"
import Image from "next/image"
import {
  Droplets,
  VideoOff,
  CloudRain,
  ArrowRight,
  MessageCircle,
  CheckCircle2,
  ClipboardCheck,
  ChevronDown,
  Home,
  AlertCircle,
} from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Checkbox } from "@/components/ui/checkbox"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible"
import { VideoSection } from "@/components/video-section"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"

const problems = [
  { text: "고층 외벽은 업체 부르기 부담" },
  { text: "물자국/뿌연 느낌이 남음" },
  { text: "안전·민원 걱정" },
  { text: "시간 잡기 어렵고 결과 편차" },
]

const steps = [
  { title: "사전 점검", desc: "현장 조건·구간 확인" },
  { title: "안전 통제", desc: "작업구역·풍속 등 점검" },
  { title: "구간별 세척/검수", desc: "구간 단위 세척 후 검수" },
]

const scopeItems = [
  "아파트 / 주상복합",
  "오피스",
  "태양광 패널 등",
]
const exclusions = "강풍·우천·결빙 시 작업 불가, 균열·손상 유리 제외 등"

const faqs = [
  {
    q: "촬영·녹화는 하나요?",
    a: "실시간 조종 확인만 하며, 원칙적으로 녹화/저장 없습니다.",
  },
  {
    q: "세정제는 뭘 쓰나요?",
    a: "기본은 물세척이며, 필요 시 저발포 최소량 사용 후 사전 고지합니다.",
  },
  {
    q: "안전·풍속 기준은?",
    a: "조건이 불리하면 즉시 중단하며, 안전 우선으로 운영합니다.",
  },
  {
    q: "물튐·파손 걱정은?",
    a: "작업구역 통제, 사전 점검, 구간별 운영으로 최소화합니다.",
  },
  {
    q: "가격은 어떻게 되나요?",
    a: "현장 조건(높이·오염도·동선) 기반으로 범위 안내 후 확정합니다.",
  },
  {
    q: "소요시간은?",
    a: "구간 단위로 안내드립니다.",
  },
  {
    q: "가능 지역은?",
    a: "동탄/화성/용인/오산/평택 등입니다.",
  },
  {
    q: "파일럿 방식이란?",
    a: "일부 구간 테스트 후 만족 시 확대하는 방식입니다.",
  },
]

const buildingTypes = ["아파트", "주상복합", "오피스", "기타"]
const concernOptions = [
  "촬영/녹화",
  "세정제",
  "안전",
  "물튐",
  "가격",
  "기타",
]

export default function DronePage() {
  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [region, setRegion] = useState("")
  const [regionOther, setRegionOther] = useState("")
  const [buildingType, setBuildingType] = useState("")
  const [floors, setFloors] = useState("")
  const [concerns, setConcerns] = useState<Record<string, boolean>>({})
  const [copied, setCopied] = useState(false)

  const toggleConcern = (key: string) => {
    setConcerns((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const buildMessage = useCallback(() => {
    const lines = ["[드론 외벽청소 문의]"]
    if (name.trim()) lines.push(`이름: ${name.trim()}`)
    if (phone.trim()) lines.push(`연락처: ${phone.trim()}`)
    const regionText = region === "기타" || region === "직접입력" ? regionOther.trim() : region
    if (regionText) lines.push(`지역: ${regionText}`)
    if (buildingType) lines.push(`건물 유형: ${buildingType}`)
    if (floors.trim()) lines.push(`대략 높이(층): ${floors.trim()}`)
    const selectedConcerns = Object.entries(concerns).filter(([, v]) => v).map(([k]) => k)
    if (selectedConcerns.length) lines.push(`걱정되는 점: ${selectedConcerns.join(", ")}`)
    return lines.join("\n")
  }, [name, phone, region, regionOther, buildingType, floors, concerns])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    const msg = buildMessage()
    try {
      await navigator.clipboard.writeText(msg)
      setCopied(true)
      setTimeout(() => setCopied(false), 3000)
      window.open(KAKAO_CHANNEL, "_blank", "noopener,noreferrer")
    } catch {
      window.open(KAKAO_CHANNEL, "_blank", "noopener,noreferrer")
    }
  }

  return (
    <main className="min-h-screen bg-background">
      {/* 상단: 홈으로 - 메인 네비와 통일 */}
      <div className="sticky top-0 z-50 flex items-center justify-between border-b border-border bg-background/95 px-4 sm:px-5 lg:px-10 py-3.5 backdrop-blur-xl">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:opacity-80 transition-opacity"
        >
          <Home className="h-4 w-4" />
          홈화면으로 돌아가기
        </Link>
      </div>

      {/* 1. Hero - 배경 이미지 + 메인 히어로 톤 통일 */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <Image
            src="/images/drone-hero.png"
            alt="드론으로 고층 외벽 유리 세척 – 고층 빌딩 유리창에 드론이 세척액을 분사하는 모습"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-[#0B1120]/70" />
        </div>
        <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-5 lg:px-10 py-20 sm:py-24 md:py-32 text-center">
          <h1 className="text-2xl font-extrabold leading-tight text-white sm:text-4xl md:text-5xl lg:text-6xl tracking-tight">
            고층 외벽 / 유리,
            <br />
            <span className="text-primary">로프 작업 없이 드론으로 세척</span>
            합니다
          </h1>
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/90 leading-loose">
            동탄/화성/용인 중심 파일럿(선착순)
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col gap-3 sm:flex-row sm:justify-center">
            <Button
              asChild
              size="lg"
              className="rounded-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 px-8 py-7 text-base font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                파일럿 신청하기
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 flex flex-wrap justify-center gap-2 sm:gap-3">
            {[
              { icon: Droplets, label: "물세척 중심" },
              { icon: VideoOff, label: "녹화/저장 원칙 금지" },
              { icon: CloudRain, label: "기상 기준 준수" },
            ].map(({ icon: Icon, label }) => (
              <span
                key={label}
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/8 backdrop-blur-sm px-3 py-2 sm:px-4 text-xs sm:text-sm font-medium text-white/80"
              >
                <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                {label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Problem - 메인 Problem 섹션 스타일 */}
      <section className="py-20 sm:py-24 md:py-32" id="problem">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Problem
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              이런 고민 있으신가요?
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-7">
            {problems.map((p) => (
              <div
                key={p.text}
                className="rounded-2xl border border-border bg-card p-7 lg:p-9 transition-all duration-700 hover:shadow-xl hover:shadow-foreground/5 hover:-translate-y-1"
              >
                <p className="text-base text-muted-foreground leading-loose">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. How it works - 메인 Process/Steps 스타일 */}
      <section className="bg-[#0B1120] py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Process
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
              <span className="text-primary">사전 점검</span>
              {" → 안전 통제 → 구간별 세척/검수"}
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-7 lg:gap-10">
            {steps.map((step, i) => (
              <div key={step.title} className="text-center">
                <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl bg-primary/10 border border-primary/20 mb-5">
                  <span className="text-2xl font-extrabold text-primary">{i + 1}</span>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{step.title}</h3>
                <p className="text-base text-white/75 leading-loose max-w-xs mx-auto">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. What we clean - 메인 카드/섹션 스타일 */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Scope
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              적용 범위
            </h2>
          </div>
          <ul className="flex flex-wrap justify-center gap-3">
            {scopeItems.map((item) => (
              <li
                key={item}
                className="inline-flex items-center gap-2 rounded-2xl border border-border bg-card px-5 py-3 text-sm font-medium shadow-sm hover:shadow-foreground/5 transition-all"
              >
                <CheckCircle2 className="h-4 w-4 text-primary shrink-0" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-10 rounded-2xl border border-border bg-card p-5 md:p-6 text-center">
            <p className="text-sm text-muted-foreground leading-loose flex items-center justify-center gap-2">
              <AlertCircle className="h-4 w-4 shrink-0 text-destructive/80" />
              제외/제한: {exclusions}
            </p>
          </div>
        </div>
      </section>

      <VideoSection />

      {/* 5. FAQ - 재미있는 디자인 */}
      <section className="bg-secondary/50 py-20 sm:py-24 md:py-32 overflow-hidden" id="faq">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-14 md:mb-20">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              FAQ
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
              자주 묻는 질문
            </h2>
            <p className="mt-3 text-muted-foreground text-base">
              궁금한 점을 눌러보세요 👇
            </p>
          </div>
          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <Collapsible key={faq.q}>
                <div
                  className="group faq-card rounded-2xl border-2 border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-0.5 hover:border-primary/30 has-[[data-state=open]]:border-primary/50 has-[[data-state=open]]:shadow-lg has-[[data-state=open]]:shadow-primary/10 has-[[data-state=open]]:bg-primary/[0.03]"
                  style={{ animationDelay: `${i * 50}ms` }}
                >
                  <CollapsibleTrigger className="flex w-full items-center gap-4 px-5 py-4 text-left hover:bg-muted/20 transition-colors rounded-2xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50">
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-primary/15 text-primary text-sm font-bold tabular-nums">
                      {i + 1}
                    </span>
                    <span className="flex-1 text-sm font-semibold text-foreground pr-2">
                      {faq.q}
                    </span>
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

      {/* 6. Pilot Offer */}
      <section className="py-20 sm:py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-4 sm:px-5 lg:px-10 text-center">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Pilot
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
            선착순 파일럿 제안
          </h2>
          <p className="mt-4 text-lg text-muted-foreground leading-loose max-w-xl mx-auto">
            현장 진단 + 작업 공지문 템플릿 + 구간별 리포트(요약) 제공
          </p>
          <Button
            asChild
            size="lg"
            className="mt-10 rounded-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 px-8 py-7 text-base font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
          >
            <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              파일럿 신청하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </a>
          </Button>
        </div>
      </section>

      {/* 7. Lead Form */}
      <section className="bg-secondary/50 py-20 sm:py-24 md:py-32" id="form">
        <div className="mx-auto max-w-xl px-4 sm:px-5 lg:px-10">
          <div className="text-center mb-10">
            <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
              Contact
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight">
              문의하기
            </h2>
            <p className="mt-4 text-muted-foreground text-base leading-loose">
              작성 후 카카오톡 채널로 내용이 전달됩니다.
            </p>
          </div>
          <form onSubmit={handleSubmit} className="space-y-5 rounded-2xl border border-border bg-card p-7 lg:p-9 shadow-sm hover:shadow-foreground/5 transition-all">
            <div>
              <Label htmlFor="name">이름</Label>
              <Input
                id="name"
                className="mt-1.5"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <Label htmlFor="phone">연락처(휴대폰)</Label>
              <Input
                id="phone"
                type="tel"
                className="mt-1.5"
                placeholder="010-0000-0000"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div>
              <Label>지역</Label>
              <div className="mt-1.5 flex gap-2">
                <select
                  className="h-9 flex-1 rounded-md border border-input bg-transparent px-3 text-sm shadow-xs"
                  value={region}
                  onChange={(e) => setRegion(e.target.value)}
                >
                  <option value="">선택</option>
                  <option value="동탄">동탄</option>
                  <option value="화성">화성</option>
                  <option value="용인">용인</option>
                  <option value="오산">오산</option>
                  <option value="평택">평택</option>
                  <option value="기타">기타/직접입력</option>
                </select>
                {(region === "기타" || region === "직접입력") && (
                  <Input
                    className="flex-1"
                    placeholder="지역 입력"
                    value={regionOther}
                    onChange={(e) => setRegionOther(e.target.value)}
                  />
                )}
              </div>
            </div>
            <div>
              <Label>건물 유형</Label>
              <div className="mt-1.5 flex flex-wrap gap-2">
                {buildingTypes.map((t) => (
                  <label key={t} className="flex cursor-pointer items-center gap-2">
                    <input
                      type="radio"
                      name="buildingType"
                      value={t}
                      checked={buildingType === t}
                      onChange={() => setBuildingType(t)}
                      className="h-4 w-4 border-input text-primary"
                    />
                    <span className="text-sm">{t}</span>
                  </label>
                ))}
              </div>
            </div>
            <div>
              <Label htmlFor="floors">대략 높이(층수)</Label>
              <Input
                id="floors"
                className="mt-1.5"
                placeholder="예: 15층"
                value={floors}
                onChange={(e) => setFloors(e.target.value)}
              />
            </div>
            <div>
              <Label>가장 걱정되는 점 (복수 선택 가능)</Label>
              <div className="mt-2 flex flex-wrap gap-4">
                {concernOptions.map((opt) => (
                  <label key={opt} className="flex cursor-pointer items-center gap-2">
                    <Checkbox
                      checked={concerns[opt] ?? false}
                      onCheckedChange={() => toggleConcern(opt)}
                    />
                    <span className="text-sm">{opt}</span>
                  </label>
                ))}
              </div>
            </div>
            <Button
              type="submit"
              size="lg"
              className="w-full rounded-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90"
            >
              {copied ? (
                <>
                  <ClipboardCheck className="mr-2 h-5 w-5" />
                  복사됨 — 카톡 창에 붙여넣기 해 주세요
                </>
              ) : (
                <>
                  <MessageCircle className="mr-2 h-5 w-5" />
                  내용 복사 후 카톡으로 문의하기
                </>
              )}
            </Button>
          </form>
        </div>
      </section>

      <Footer logoHref="/" />
    </main>
  )
}
