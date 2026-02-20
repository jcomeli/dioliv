"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle, Bot, ShieldCheck, Clock, FileCheck } from "lucide-react"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"
const PHONE_NUMBER = "tel:010-2643-1922"

const badges = [
  { icon: Bot, label: "창문로봇(에코백스 윈봇)+전문가 수작업" },
  { icon: ShieldCheck, label: "층수 제한 없음" },
  { icon: Clock, label: "한 집 2~3시간 작업" },
  { icon: FileCheck, label: "배상책임보험 가입" },
]

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero-window-before-after.png"
          alt="창문 청소 전후 비교 – 흐린 유리와 맑게 닦인 유리, 도시 전경이 선명하게 보이는 대비"
          fill
          className="object-cover"
          priority
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-[#0B1120]/75" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-5 lg:px-10 pt-[calc(8.5rem+env(safe-area-inset-top,0px))] pb-24 sm:pt-28 sm:pb-28 md:pt-40 md:pb-40 w-full">
        <div className="max-w-3xl">
          {/* Headline */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold leading-[1.2] tracking-tight text-white text-balance">
            {"아파트 창문 청소,"}
            <br />
            <span className="text-primary">{"아직도 직접 닦으세요?"}</span>
          </h1>

          {/* Subtitle */}
          <p className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl text-white/80 leading-relaxed max-w-2xl">
            {"창문로봇청소기(에코백스 윈봇) + 전문가 수작업. 거실창 8만원부터. 하루 최대 3집 한정."}
          </p>

          {/* Small note */}
          <p className="mt-3 text-sm text-white/45">
            {"한 집 기준 2~3시간 작업 / 하루 최대 3집(품질·검수 시간 확보)"}
          </p>

          {/* CTAs */}
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-8 py-7 text-base font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5"
            >
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                {"카톡으로 무료 견적"}
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="rounded-full px-8 py-7 text-base font-bold border-white/20 text-white/90 bg-white/5 backdrop-blur-sm hover:bg-white/10 hover:text-white transition-all duration-300"
            >
              <a href={PHONE_NUMBER}>
                <Phone className="mr-2 h-5 w-5" />
                {"전화 상담"}
              </a>
            </Button>
          </div>

          {/* Trust Badges */}
          <div className="mt-8 sm:mt-12 grid grid-cols-2 sm:flex sm:flex-wrap gap-2 sm:gap-3">
            {badges.map((badge) => (
              <div
                key={badge.label}
                className="flex items-center gap-2 rounded-full bg-white/8 backdrop-blur-sm border border-white/10 px-3 py-2 sm:px-4"
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
