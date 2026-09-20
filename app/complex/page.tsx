"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, BadgeCheck, Building2, ChevronDown, Home, MessageCircle, Phone, ShieldCheck, Sparkles, Users } from "lucide-react"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible"
import { partnerApartments } from "@/lib/partner-apartments"

const KAKAO = "https://pf.kakao.com/_lfCjn/chat"
const benefits = [
  { icon: Users, value: "10세대부터", title: "참여 세대별 할인", text: "참여가 늘수록 세대별 비용을 낮춰 공동구매 혜택이 분명해집니다." },
  { icon: Building2, value: "한 번에", title: "공지와 일정 운영", text: "신청 안내부터 세대별 방문 일정까지 단지 상황에 맞춰 정리합니다." },
  { icon: ShieldCheck, value: "안전하게", title: "전문 작업자 진행", text: "산업안전기사 자격 보유 작업자가 현장 기준과 작업 품질을 관리합니다." },
]
const steps = [
  ["01", "단지 정보 전달", "단지명, 예상 참여 세대, 희망 시기를 알려주세요."],
  ["02", "맞춤 제안서 제공", "창 구조와 세대 수를 확인해 단가와 입주민 안내 자료를 드립니다."],
  ["03", "신청·일정 확정", "참여 세대를 취합하고 동별·라인별 작업 일정을 정리합니다."],
  ["04", "방문 작업·검수", "세대별 작업 전후를 확인하고 현장을 깔끔하게 마무리합니다."],
]
const prices = [
  ["거실창 대칭형", "10만원", "9만원", "8.5만원"],
  ["거실창 비대칭형", "8만원", "7.2만원", "6.8만원"],
  ["방창", "4만원", "3.6만원", "3.4만원"],
  ["유리난간·기타", "2만원", "1.8만원", "1.7만원"],
]
const faqs = [
  ["누가 신청할 수 있나요?", "입주민대표회의, 관리사무소, 공동구매 담당자 또는 입주민 누구나 제휴를 제안할 수 있습니다."],
  ["최소 참여 세대가 있나요?", "개별 진행도 가능하며, 10세대 이상부터 공동구매 할인 단가가 적용됩니다."],
  ["공지 자료도 만들어 주나요?", "네. 단지 게시판과 입주민 커뮤니티에 바로 사용할 수 있는 안내 문구와 신청 방법을 제공합니다."],
  ["작업 범위는 어디까지인가요?", "기본은 유리면 중심이며 창틀·방충망 청소는 별도 옵션입니다. 구조상 작업이 어려운 구간은 견적 전에 안내합니다."],
]

export default function ComplexPage() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-[#06101f]/75 backdrop-blur-xl">
        <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-5 lg:px-10">
          <Link href="/" className="inline-flex items-center gap-2 text-sm font-bold text-white/85 transition hover:text-white"><Home className="h-4 w-4" /> 홈으로</Link>
          <span className="hidden text-xs font-bold tracking-[0.18em] text-white/55 sm:block">DIO APARTMENT PARTNERSHIP</span>
          <a href={KAKAO} target="_blank" rel="noopener noreferrer" className="rounded-full bg-[#FEE500] px-4 py-2 text-xs font-extrabold text-[#191919]">제휴 문의</a>
        </div>
      </header>

      <section className="relative min-h-[760px] overflow-hidden bg-[#06101f] pt-16 md:min-h-[820px]">
        <Image src="/images/cases/seodongtan-after.jpeg" alt="서동탄 아파트 창문 청소 후 선명해진 전망" fill priority sizes="100vw" className="object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101f] via-[#06101f]/80 to-[#06101f]/25" /><div className="absolute inset-0 bg-gradient-to-t from-[#06101f] via-transparent to-[#06101f]/20" />
        <div className="relative mx-auto flex min-h-[700px] max-w-7xl items-center px-4 py-20 sm:px-5 lg:px-10">
          <div className="max-w-3xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/85 backdrop-blur"><Sparkles className="h-4 w-4 text-primary" /> 우리 단지만을 위한 공동구매</span>
            <h1 className="mt-6 text-[2.7rem] font-black leading-[1.05] tracking-[-0.055em] text-white sm:text-6xl lg:text-7xl">아파트 창문청소,<br /><span className="text-primary">단지 전체가 더 합리적으로</span></h1>
            <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 sm:text-xl">관리사무소·입주민대표·공동구매 담당자를 위한 단지 제휴입니다. 참여 세대 할인부터 공지 자료와 일정 운영까지 함께 준비합니다.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg" className="h-14 rounded-full bg-[#FEE500] px-7 font-extrabold text-[#191919] hover:bg-[#FEE500]/90"><a href={KAKAO} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />단지 제휴 상담하기<ArrowRight className="ml-2 h-5 w-5" /></a></Button>
              <Button asChild size="lg" variant="outline" className="h-14 rounded-full border-white/20 bg-white/8 px-7 font-bold text-white hover:bg-white/15 hover:text-white"><a href="tel:010-2643-1922"><Phone className="mr-2 h-5 w-5" />010-2643-1922</a></Button>
            </div>
            <div className="mt-10 flex flex-wrap gap-x-6 gap-y-3 text-sm font-semibold text-white/70">{["10세대부터 할인", "공지 자료 제공", "산업안전기사 자격 보유"].map((v) => <span key={v} className="inline-flex items-center gap-2"><BadgeCheck className="h-4 w-4 text-primary" />{v}</span>)}</div>
          </div>
        </div>
      </section>

      <section className="border-b border-border bg-card py-4"><div className="mx-auto flex max-w-7xl items-center gap-4 overflow-hidden px-4 sm:px-5 lg:px-10"><strong className="shrink-0 text-xs text-primary">제휴 진행 단지</strong><div className="relative overflow-hidden"><div className="partner-marquee flex w-max gap-2">{[...partnerApartments, ...partnerApartments].map((name, i) => <span key={`${name}-${i}`} className="rounded-full bg-secondary px-3 py-1.5 text-xs font-semibold text-foreground/75">{name}</span>)}</div></div></div></section>

      <section className="py-20 sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10"><div className="max-w-2xl"><span className="section-label">Partnership Benefits</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">단체 진행의 번거로움은 줄이고<br /><span className="text-primary">입주민 혜택은 분명하게</span></h2></div><div className="mt-12 grid gap-5 md:grid-cols-3">{benefits.map(({ icon: Icon, value, title, text }) => <article key={title} className="premium-card rounded-[1.75rem] p-7 sm:p-8"><div className="flex items-center justify-between"><Icon className="h-7 w-7 text-primary" /><span className="text-xs font-extrabold uppercase tracking-widest text-primary">{value}</span></div><h3 className="mt-10 text-xl font-black">{title}</h3><p className="mt-3 text-sm leading-7 text-muted-foreground">{text}</p></article>)}</div></div></section>

      <section className="bg-[#06101f] py-20 text-white sm:py-28"><div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10"><div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-start"><div className="lg:sticky lg:top-28"><span className="section-label">Simple Process</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">문의 한 번이면<br />운영까지 이어집니다</h2><p className="mt-5 max-w-md text-sm leading-7 text-white/60">단지마다 다른 동 수, 창 구조, 공지 방식에 맞춰 실행 가능한 일정으로 제안합니다.</p></div><div className="space-y-3">{steps.map(([no,title,text]) => <article key={no} className="grid grid-cols-[3rem_1fr] gap-4 rounded-2xl border border-white/10 bg-white/[0.06] p-5 sm:grid-cols-[4rem_12rem_1fr] sm:items-center sm:p-6"><span className="font-black text-primary">{no}</span><h3 className="font-extrabold">{title}</h3><p className="col-start-2 text-sm leading-6 text-white/60 sm:col-start-auto">{text}</p></article>)}</div></div></div></section>

      <section className="py-20 sm:py-28" id="pricing"><div className="mx-auto max-w-5xl px-4 sm:px-5 lg:px-10"><div className="text-center"><span className="section-label">Group Pricing</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">참여할수록 낮아지는<br /><span className="text-primary">세대별 가격</span></h2><p className="mt-4 text-sm text-muted-foreground">창 구조와 오염도에 따라 최종 견적이 달라질 수 있습니다.</p></div><div className="mt-10 overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-xl shadow-primary/5"><div className="grid grid-cols-[1.35fr_repeat(3,1fr)] bg-[#06101f] px-4 py-4 text-center text-[11px] font-bold text-white/65 sm:px-7 sm:text-sm"><span className="text-left">창 유형</span><span>개별</span><span>10세대+</span><span className="text-primary">30세대+</span></div>{prices.map((r) => <div key={r[0]} className="grid grid-cols-[1.35fr_repeat(3,1fr)] items-center border-t border-border px-4 py-5 text-center text-xs sm:px-7 sm:text-base"><strong className="text-left text-xs sm:text-base">{r[0]}</strong><span className="text-muted-foreground">{r[1]}</span><span>{r[2]}</span><strong className="text-primary">{r[3]}</strong></div>)}</div><p className="mt-4 text-center text-xs text-muted-foreground">방충망·창틀청소 옵션은 집 전체 10만원부터 별도 견적합니다.</p></div></section>

      <section className="bg-secondary/55 py-20 sm:py-28"><div className="mx-auto grid max-w-7xl gap-8 px-4 sm:px-5 lg:grid-cols-2 lg:px-10"><div><span className="section-label">FAQ</span><h2 className="text-3xl font-black tracking-[-0.04em] sm:text-5xl">제휴 전에<br />많이 묻는 질문</h2><p className="mt-5 text-sm leading-7 text-muted-foreground">단지명과 예상 참여 세대만 알려주셔도 상담을 시작할 수 있습니다.</p></div><div className="space-y-3">{faqs.map(([q,a],i) => <Collapsible key={q}><div className="faq-card overflow-hidden rounded-2xl border border-border bg-card"><CollapsibleTrigger className="flex w-full items-center gap-3 p-5 text-left font-bold"><span className="text-primary">0{i+1}</span><span className="flex-1">{q}</span><ChevronDown className="h-4 w-4 transition [.faq-card:has([data-state=open])_&]:rotate-180" /></CollapsibleTrigger><CollapsibleContent><p className="border-t border-border px-5 py-5 pl-14 text-sm leading-7 text-muted-foreground">{a}</p></CollapsibleContent></div></Collapsible>)}</div></div></section>

      <section className="relative overflow-hidden bg-[#06101f] py-20 text-center text-white sm:py-28"><div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[100px]" /><div className="relative mx-auto max-w-3xl px-4"><span className="text-xs font-bold uppercase tracking-[.2em] text-primary">Start a Partnership</span><h2 className="mt-5 text-3xl font-black tracking-[-0.04em] sm:text-5xl">우리 단지 창문청소,<br />쉽게 시작해 보세요</h2><p className="mx-auto mt-5 max-w-lg text-sm leading-7 text-white/65">견적서와 입주민 공지 자료까지 준비해 드립니다.</p><Button asChild size="lg" className="mt-8 h-14 rounded-full bg-[#FEE500] px-8 font-extrabold text-[#191919] hover:bg-[#FEE500]/90"><a href={KAKAO} target="_blank" rel="noopener noreferrer"><MessageCircle className="mr-2 h-5 w-5" />단지 제휴 상담하기<ArrowRight className="ml-2 h-5 w-5" /></a></Button></div></section>
      <Footer logoHref="/" />
      <div className="fixed inset-x-3 bottom-3 z-50 grid grid-cols-2 gap-2 md:hidden"><a href="tel:010-2643-1922" className="flex h-13 items-center justify-center rounded-full border border-border bg-white font-bold shadow-xl"><Phone className="mr-2 h-4 w-4" />전화</a><a href={KAKAO} target="_blank" rel="noopener noreferrer" className="flex h-13 items-center justify-center rounded-full bg-[#FEE500] font-extrabold text-[#191919] shadow-xl"><MessageCircle className="mr-2 h-4 w-4" />제휴 문의</a></div>
    </main>
  )
}
