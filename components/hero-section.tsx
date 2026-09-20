"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { trackEvent } from "@/lib/analytics"
import { ArrowRight, MessageCircle, Bot, ShieldCheck, Clock, FileCheck, Sparkles, BadgeCheck } from "lucide-react"

const KAKAO_CHANNEL = "https://pf.kakao.com/_lfCjn/chat"

const badges = [
  { icon: Bot, label: "창문로봇 + 전문가 수작업" },
  { icon: BadgeCheck, label: "산업안전기사 자격 보유", desktopOnly: true },
  { icon: ShieldCheck, label: "층수 제한 없음" },
  { icon: Clock, label: "한 집 2~3시간 작업" },
  { icon: FileCheck, label: "배상책임보험 가입" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-[700px] sm:min-h-[760px] md:min-h-screen flex items-center overflow-hidden bg-[#07111f]">
      <div className="absolute inset-0">
        <Image
          src="/images/cases/sk-after.jpg"
          alt="SK스카이뷰 아파트 창문 청소 후 선명하게 보이는 도시 전경"
          fill
          className="object-cover scale-[1.02]"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#06101f]/95 via-[#06101f]/73 to-[#06101f]/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/55 via-transparent to-[#06101f]/25" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 pt-[calc(7rem+env(safe-area-inset-top,0px))] pb-20 sm:pt-28 sm:pb-24 md:pt-36 md:pb-32 w-full">
        <div className="max-w-4xl">
          <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-bold text-white/90 backdrop-blur-sm sm:text-sm">
            <Sparkles className="h-4 w-4 text-primary" />
            실제 고객님 댁 작업 후 사진
          </div>
          <h1 className="text-[2.45rem] sm:text-5xl md:text-6xl lg:text-7xl font-black leading-[1.08] tracking-[-0.055em] text-white text-balance">
            {"동탄 아파트 "}
            <br />
            <span className="text-primary">{"창문·외창·유리 전문청소"}</span>
          </h1>
          <p className="mt-6 sm:mt-8 text-base sm:text-lg md:text-xl text-white/88 leading-8 max-w-2xl">
            {"동탄 아파트 창문청소·외창청소·유리창청소, 거실창 8만원부터."}
            <br className="sm:block" />
            <span className="text-white/95">
              {"아파트명과 창문 전체 사진을 보내주시면 작업 전 견적부터 안내합니다."}
            </span>
          </p>
          <p className="mt-3 text-sm text-white/60">
            {"창문로봇과 전문가 수작업 · 한 집 2~3시간 작업"}
          </p>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-8 py-7 text-base font-extrabold shadow-[0_16px_38px_-14px_rgba(254,229,0,0.75)] transition-all duration-300 hover:-translate-y-1"
            >
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer" onClick={() => trackEvent("kakao_click", { location: "hero" })}>
                <MessageCircle className="mr-2 h-5 w-5" />
                {"카톡으로 사진견적 받기"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-7 text-base font-bold border-white/20 text-white/95 bg-white/8 backdrop-blur-xl hover:bg-white/14 hover:text-white transition-all duration-300"
            >
              <a href="#estimate" onClick={() => trackEvent("estimate_click", { location: "hero" })}>
                <ArrowRight className="mr-2 h-5 w-5" />
                {"예상 가격 확인"}
              </a>
            </Button>
          </div>
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className={`${badge.desktopOnly ? "hidden sm:flex" : "flex"} items-center gap-2 rounded-full bg-white/8 backdrop-blur-xl border border-white/12 px-3 py-2.5 sm:px-4`}
              >
                <badge.icon className="h-3.5 w-3.5 sm:h-4 sm:w-4 text-primary shrink-0" />
                <span className="text-xs sm:text-sm font-medium text-white/80 truncate sm:truncate-none">
                  {badge.label}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
