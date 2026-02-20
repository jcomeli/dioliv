"use client"

import { Star, Quote, ExternalLink } from "lucide-react"
import { useEffect, useRef, useState } from "react"
import { Button } from "@/components/ui/button"

const DAANGN = "https://www.daangn.com/kr/local-profile/dio%EB%A6%AC%EB%B9%99%EC%95%A4%EB%94%94%EC%9E%90%EC%9D%B8-w8feq9gkef3n/"

const mainReviews = [
  {
    apartment: "동탄역 한화 꿈에그린 고객",
    rating: 5,
    text: "인테리어 끝내고 유리창 청소했습니다. 돈 쓰면서 가장 잘했다는 생각이 들 만큼 만족했습니다. 사장님 정말 친절하시고 꼼꼼하게 잘 해주십니다^^",
  },
  {
    apartment: "동탄 이지더원 고객",
    rating: 5,
    text: "저렴한 가격에 엄청 깨끗하게 청소해주셨어요. 얼룩이랑 물때가 깨끗하게 지워져서 창문이 아주 선명하네요. 사장님도 친절하시고 로봇이 청소하니 아주 꼼꼼하네요. 다음에 또 이용하고 싶어요^^",
  },
  {
    apartment: "오산 센트럴 푸르지오 고객",
    rating: 5,
    text: "7년 된 아파트이고 고층인데 앞이 뿌옇게 보여서 신경 쓰였는데, 청소하고 나니 뷰가 훨씬 잘 보이고 예뻐졌어요^^ 로봇 두 대가 왔다 갔다 하면서 닦아주고, 못 닿는 부분은 사람이 꼼꼼하게 마무리까지 다 해주셨어요. 사장님도 친절하시고 차분하시며 꼼꼼하신 것 같아요. 추천합니다~^^",
  },
]

const oneLiners = [
  { text: "로봇 청소라고 해서 얼마나 깨끗하겠어 했는데, 완전 대만족입니다!! 가격 대비 최고네요!!", apartment: "동탄 목동 힐스테이트 고객" },
  { text: "정말 깨끗하게 잘 해주셨어요. 로봇청소 비용도 저렴하고 맘에 들어요.", apartment: "동탄 행복마을 푸르지오 고객" },
  { text: "새로운 장소로 온 기분이에요^^ 집안이 환해졌어요. 시야가 확 트인 느낌! 젊은 사장님이 엄청 꼼꼼하고 깔끔하시고 친절하세요. 추천드립니다^^", apartment: "동탄 상록리슈빌 고객" },
  { text: "창문이 깨끗해져서 좋아요~ 기계 두 대로 해주셔서 더 빨리 끝내주셨어요. 감사합니다 ^^", apartment: "동탄 레이크자이더테라스 고객" },
  { text: "창문 청소 하나로 집안 분위기가 바뀌네요~ 너무 상쾌합니다! 다음에 또 예약할게요 😁", apartment: "동탄 파라곤2 고객" },
  { text: "진짜 깨끗해지고 좋아요! 속이 다 시원합니다:) 다른 창도 하려구여!!", apartment: "동탄 목동 르파비스 고객" },
]

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className={`h-4 w-4 ${
            i < rating ? "fill-amber-400 text-amber-400" : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  )
}

export function ReviewsSection() {
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
    <section ref={sectionRef} id="reviews" className="py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        {/* Section Header */}
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            {"Reviews"}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            {"실제 고객"}
            <span className="text-primary">{" 후기"}</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base max-w-lg mx-auto">
            {"당근마켓에서 직접 확인하실 수 있습니다."}
          </p>
        </div>

        {/* Main Review Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-7">
          {mainReviews.map((review, i) => (
            <div
              key={review.apartment}
              className={`relative rounded-2xl bg-card border border-border p-7 lg:p-9 transition-all duration-700 hover:shadow-lg hover:shadow-foreground/5 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-8"
              }`}
              style={{ transitionDelay: `${i * 150}ms` }}
            >
              <Quote className="h-7 w-7 text-primary/15 mb-3" />
              <StarRating rating={review.rating} />
              <p className="mt-4 text-base text-card-foreground leading-relaxed font-medium">
                {`"${review.text}"`}
              </p>
              <div className="mt-6 pt-5 border-t border-border">
                <p className="text-sm font-bold text-foreground">
                  {"- "}
                  {review.apartment}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* One-liner reviews */}
        <div className="mt-12 flex flex-col gap-3">
          {oneLiners.map((item, i) => (
            <div
              key={i}
              className={`rounded-xl bg-secondary border border-border px-4 sm:px-5 py-3.5 sm:py-4 transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-4"
              }`}
              style={{ transitionDelay: `${300 + i * 80}ms` }}
            >
              <p className="text-sm text-card-foreground leading-relaxed">
                {`"${item.text}"`}
              </p>
              <p className="text-xs text-muted-foreground mt-1.5 font-medium">
                {"- "}
                {item.apartment}
              </p>
            </div>
          ))}
        </div>

        {/* Daangn CTA */}
        <div className="mt-10 text-center">
          <Button
            asChild
            variant="outline"
            className="rounded-full px-6 py-5 font-bold border-[#FF6F0F] text-[#FF6F0F] hover:bg-[#FF6F0F] hover:text-white transition-all"
          >
            <a href={DAANGN} target="_blank" rel="noopener noreferrer">
              {"당근마켓에서 후기 직접 확인하기"}
              <ExternalLink className="ml-2 h-4 w-4" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  )
}
