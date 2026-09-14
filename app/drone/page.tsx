"use client"

import { useCallback, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Building2, CheckCircle2, ChevronDown, ClipboardCheck, CloudSun, Home, MapPin, MessageCircle, Phone, ScanSearch, ShieldCheck, Sparkles, Wind } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { VideoSection } from "@/components/video-section"

const KAKAO = "http://pf.kakao.com/_lfCjn/chat"
const useCases = [
  { icon: Building2, title: "아파트·주상복합", text: "고층 외벽과 공용부 유리의 오염 상태를 현장 조건에 맞춰 검토합니다." },
  { icon: Sparkles, title: "오피스·상업시설", text: "영업과 보행 동선을 고려해 구간별 작업 순서와 통제 범위를 제안합니다." },
  { icon: CloudSun, title: "태양광 패널·기타", text: "접근이 어려운 넓은 면적도 구조와 설비 조건을 확인한 뒤 안내합니다." },
]
const process = [
  ["01", "사진·주소로 사전 진단", "건물 전경, 높이, 작업 희망 구간을 보내주시면 적용 가능성을 먼저 확인합니다."],
  ["02", "현장 조사·안전 계획", "풍속, 비행 공간, 보행 동선과 주변 시설을 살펴 작업 방식과 통제 계획을 세웁니다."],
  ["03", "구간별 세척·검수", "테스트 구간을 확인한 뒤 본 작업을 진행하고 결과를 구간별로 점검합니다."],
]
const faqs = [
  ["모든 건물에 드론 작업이 가능한가요?", "아닙니다. 건물 구조, 주변 장애물, 비행 가능 구역과 기상 조건을 사전에 확인한 뒤 가능 여부를 안내합니다."],
  ["촬영 영상은 저장하나요?", "작업 확인을 위한 실시간 화면을 사용하며, 별도 협의가 없는 경우 촬영물을 저장하지 않는 것을 원칙으로 합니다."],
  ["비나 바람이 강해도 작업하나요?", "안전 기준에 맞지 않는 강풍·우천·결빙 상황에서는 작업을 연기하거나 중단합니다."],
  ["견적에 필요한 자료는 무엇인가요?", "건물 주소, 전체 외관 사진, 대략적인 층수와 청소 희망 면을 보내주시면 빠르게 1차 검토할 수 있습니다."],
]

export default function DronePage() {
  const [building, setBuilding] = useState("")
  const [region, setRegion] = useState("")
  const [floors, setFloors] = useState("")
  const [copied, setCopied] = useState(false)
  const buildMessage = useCallback(() => ["[드론 외벽청소 문의]", region && `지역/주소: ${region}`, building && `건물 유형: ${building}`, floors && `대략 높이: ${floors}`].filter(Boolean).join("\n"), [region, building, floors])
  const handleSubmit = async (e: React.FormEvent) => { e.preventDefault(); try { await navigator.clipboard.writeText(buildMessage()); setCopied(true); setTimeout(() => setCopied(false), 3000) } finally { window.open(KAKAO, "_blank", "noopener,noreferrer") } }

  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06101f]/75 backdrop-blur-xl"><div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-10"><Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/85 hover:text-white"><Home className="h-4 w-4" /> 홈으로</Link><span className="hidden text-xs font-bold tracking-[0.18em] text-white/55 sm:block">DIO DRONE CLEANING</span><a href="#inquiry" className="rounded-full bg-[#FEE500] px-4 py-2 text-xs font-extrabold text-[#191919]">현장 문의</a></div></header>

      <section className="relative min-h-[780px] overflow-hidden bg-[#06101f] pt-16 md:min-h-[860px]">
        <Image src="/images/drone-hero.png" alt="드론을 활용한 고층 건물 외벽 유리 세척" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101f]/95 via-[#06101f]/76 to-[#06101f]/20" /><div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/80 via-transparent to-[#06101f]/25" />
        <div className="relative mx-auto flex min-h-[720px] max-w-7xl items-center px-4 py-20 sm:px-5 lg:px-10"><div className="max-w-4xl"><span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/85 backdrop-blur"><ScanSearch className="h-4 w-4 text-primary" /> 현장 진단부터 시작하는 외벽청소</span><h1 className="mt-6 text-[2.65rem] font-black leading-[1.06] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">고층 외벽의 새로운 접근,<br /><span className="text-primary">드론으로 더 효율적으로</span></h1><p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-xl">건물 구조와 주변 환경을 먼저 진단하고, 드론 적용 가능 구간과 안전한 작업 계획을 제안합니다.</p><div className="mt-9 flex flex-col gap-3 sm:flex-row"><Button asChild size="lg" className="h-14 rounded-full bg-[#FEE500] px-7 font-extrabold text-[#191919] hover:bg-[#FEE500]/90"><a href="#inquiry"><MessageCircle className="mr-2 h-5 w-5" />현장 검토 요청하기<ArrowRight className="ml-2 h-5 w-5" /></a></Button><Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/20 bg-white/8 px-7 font-bold text-white hover:bg-white/15 hover:text-white"><a href="tel:010-2643-1922"><Phone className="mr-2 h-5 w-5" />전화 상담</a></Button></div><div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/70">{["전국 현장 검토", "산업안전기사 자격 보유", "기상·현장 기준 우선"].map(v => <span key={v} className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" />{v}</span>)}</div></div></div>
      </section>

      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10"><div className="max-w-2xl"><span className="section-label">Where It Works</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">높고 넓어 접근이 어려운 곳,<br /><span className="text-primary">현장부터 살펴봅니다</span></h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{useCases.map(({icon:Icon,title,text}) => <article key={title} className="premium-card rounded-[1.75rem] p-7 sm:p-8"><Icon className="h-7 w-7 text-primary" /><h3 className="mt-9 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="bg-[#06101f] py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]"><div><span className="section-label">Safety First</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">빠른 작업보다<br />가능한 조건을 먼저</h2><p className="mt-5 text-sm leading-7 text-white/60">드론 외벽청소는 현장마다 조건이 다릅니다. 가능 여부를 먼저 판단하고 안전 계획이 갖춰진 구간만 진행합니다.</p><div className="mt-8 grid grid-cols-2 gap-3">{[[Wind,"풍속·기상 확인"],[ShieldCheck,"통제 구역 설정"],[MapPin,"비행 환경 점검"],[CheckCircle2,"구간별 검수"]].map(([Icon,label]) => { const I = Icon as typeof Wind; return <div key={String(label)} className="rounded-2xl border border-white/10 bg-white/[0.06] p-4"><I className="h-5 w-5 text-primary" /><p className="mt-3 text-sm font-bold">{String(label)}</p></div> })}</div></div><div className="space-y-3">{process.map(([no,title,text]) => <article key={no} className="rounded-[1.5rem] border border-white/10 bg-white/[0.06] p-6 sm:p-7"><div className="flex items-center gap-4"><span className="text-sm font-black text-primary">{no}</span><h3 className="text-lg font-black">{title}</h3></div><p className="mt-4 pl-10 text-sm leading-7 text-white/60">{text}</p></article>)}</div></div></div></section>

      <VideoSection />

      <section className="py-20 sm:py-28" id="inquiry"><div className="mx-auto grid max-w-6xl gap-10 px-4 sm:px-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center lg:px-10"><div><span className="section-label">Site Review</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">주소와 사진이면<br /><span className="text-primary">1차 검토가 시작됩니다</span></h2><p className="mt-5 max-w-md text-sm leading-7 text-muted-foreground">아래 세 가지만 남긴 뒤 카카오톡에 건물 전체 사진과 청소 희망 구간을 보내주세요.</p><ul className="mt-7 space-y-3">{["건물 전체가 보이는 외관 사진", "청소가 필요한 면과 오염 상태", "희망 일정 또는 작업 시기"].map(v => <li key={v} className="flex items-center gap-3 text-sm font-semibold"><CheckCircle2 className="h-5 w-5 text-primary" />{v}</li>)}</ul></div><form onSubmit={handleSubmit} className="premium-card rounded-[2rem] p-6 sm:p-9"><div className="grid gap-5"><div><Label htmlFor="region">지역 또는 건물 주소</Label><Input id="region" value={region} onChange={e=>setRegion(e.target.value)} placeholder="예: 경기도 화성시 동탄대로" className="mt-2 h-12 rounded-xl" /></div><div><Label htmlFor="building">건물 유형</Label><select id="building" value={building} onChange={e=>setBuilding(e.target.value)} className="mt-2 h-12 w-full rounded-xl border border-input bg-background px-3 text-sm"><option value="">선택해 주세요</option><option>아파트</option><option>주상복합</option><option>오피스·상가</option><option>태양광 패널</option><option>기타</option></select></div><div><Label htmlFor="floors">대략적인 높이</Label><Input id="floors" value={floors} onChange={e=>setFloors(e.target.value)} placeholder="예: 20층 / 지상 약 60m" className="mt-2 h-12 rounded-xl" /></div><Button type="submit" className="mt-2 h-14 rounded-full bg-[#FEE500] font-extrabold text-[#191919] hover:bg-[#FEE500]/90">{copied ? <><ClipboardCheck className="mr-2 h-5 w-5" />복사 완료 · 카톡에 붙여넣기</> : <><MessageCircle className="mr-2 h-5 w-5" />내용 복사 후 카톡 문의</>}</Button><p className="text-center text-xs leading-5 text-muted-foreground">입력 내용이 복사되고 카카오톡 상담창이 열립니다.</p></div></form></div></section>

      <section className="bg-secondary/55 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-2 lg:px-10"><div><span className="section-label">FAQ</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">검토 전에<br />궁금한 내용</h2></div><div className="space-y-3">{faqs.map(([q,a],i) => <Collapsible key={q}><div className="faq-card overflow-hidden rounded-2xl border border-border bg-card"><CollapsibleTrigger className="flex w-full items-center gap-3 p-5 text-left font-bold"><span className="text-primary">0{i+1}</span><span className="flex-1">{q}</span><ChevronDown className="h-4 w-4 transition [.faq-card:has([data-state=open])_&]:rotate-180" /></CollapsibleTrigger><CollapsibleContent><p className="border-t border-border px-5 py-5 pl-14 text-sm leading-7 text-muted-foreground">{a}</p></CollapsibleContent></div></Collapsible>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#06101f] py-20 text-center text-white sm:py-28"><div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" /><div className="relative mx-auto max-w-3xl px-4"><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">Ask DIO</span><h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-5xl">우리 건물도 가능한지<br />먼저 확인해 보세요</h2><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/65">현장 조건을 검토한 뒤 적용 가능 구간과 다음 절차를 안내합니다.</p><Button asChild size="lg" className="mt-8 h-14 rounded-full bg-[#FEE500] px-8 font-extrabold text-[#191919] hover:bg-[#FEE500]/90"><a href={KAKAO} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />드론 외벽청소 상담하기<ArrowRight className="ml-2 h-5 w-5" /></a></Button></div></section>
      <Footer logoHref="/" />
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 md:hidden"><a href="tel:010-2643-1922" className="flex h-13 items-center justify-center rounded-full border border-border bg-white font-bold shadow-xl"><Phone className="mr-2 h-4 w-4" />전화</a><a href="#inquiry" className="flex h-13 items-center justify-center rounded-full bg-[#FEE500] font-extrabold text-[#191919] shadow-xl"><MessageCircle className="mr-2 h-4 w-4" />현장 문의</a></div>
    </main>
  )
}
