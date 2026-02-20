import { Button } from "@/components/ui/button"
import { ArrowRight, Phone, MessageCircle } from "lucide-react"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"
const PHONE_NUMBER = "tel:010-2643-1922"

export function FinalCtaSection() {
  return (
    <section className="relative py-20 sm:py-24 md:py-36 overflow-hidden bg-[#0B1120]">
      {/* Subtle pattern */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
          backgroundSize: "40px 40px"
        }} />
      </div>

      <div className="relative z-10 mx-auto max-w-3xl px-4 sm:px-5 lg:px-10 text-center">
        <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-5">
          {"Book Now"}
        </span>

        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-white leading-tight text-balance">
          {"이번 달 좋은 시간대는"}
          <br />
          <span className="text-primary">{"빠르게 마감"}</span>
          {"됩니다"}
        </h2>

        <p className="mt-5 text-white/50 text-sm md:text-base max-w-md mx-auto leading-relaxed">
          {"아파트 단지 공동구매 환영 / 상가 별도 문의 / 로봇 대여 가능"}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <Button
            asChild
            size="lg"
            className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-8 py-7 text-base font-bold shadow-xl transition-all duration-300 hover:-translate-y-0.5 w-full sm:w-auto"
          >
            <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-2 h-5 w-5" />
              {"카톡 무료 견적"}
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
              {"전화 상담"}
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
