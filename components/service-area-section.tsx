import { MapPin, Navigation, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const KAKAO_CHANNEL = "https://pf.kakao.com/_lfCjn/chat"
const areas = ["동탄", "화성", "수원", "오산", "용인", "평택"]

export function ServiceAreaSection() {
  return (
    <section id="service-area" aria-labelledby="service-area-title" className="px-4 py-24 sm:px-5 sm:py-28 lg:px-10">
      <div className="premium-card mx-auto grid max-w-7xl overflow-hidden rounded-[2rem] lg:grid-cols-[0.9fr_1.1fr]">
        <div className="relative overflow-hidden bg-[#07111f] p-7 text-white sm:p-10 lg:p-12">
          <div className="absolute -left-24 -top-24 h-64 w-64 rounded-full bg-primary/30 blur-3xl" />
          <div className="relative">
            <span className="section-label">SERVICE AREA</span>
            <h2 id="service-area-title" className="text-3xl font-black tracking-[-0.04em] sm:text-4xl">
              동탄에서 가까운<br />경기남부까지 방문합니다
            </h2>
            <p className="mt-5 max-w-md text-base leading-7 text-white/70">
              동탄을 중심으로 이동 시간 약 1시간 안팎의 지역을 방문합니다. 정확한 가능 여부는 주소와 희망 일정을 확인한 뒤 안내해 드립니다.
            </p>
            <Button asChild className="mt-7 rounded-full bg-[#FEE500] px-6 py-6 font-extrabold text-[#191919] hover:bg-[#FEE500]/90">
              <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-4 w-4" />우리 지역 방문 가능 여부 문의
              </a>
            </Button>
          </div>
        </div>

        <div className="p-7 sm:p-10 lg:p-12">
          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
            {areas.map((area, index) => (
              <div key={area} className={`rounded-2xl border p-4 sm:p-5 ${index === 0 ? "border-primary/30 bg-primary/8" : "border-border bg-secondary/55"}`}>
                <MapPin className="h-5 w-5 text-primary" />
                <h3 className="mt-3 text-lg font-extrabold text-foreground">{area} 창문청소</h3>
                <p className="mt-1 text-sm text-muted-foreground">아파트 외창·유리창 청소</p>
              </div>
            ))}
          </div>
          <div className="mt-6 flex items-start gap-3 rounded-2xl border border-border bg-card p-4 text-sm leading-6 text-muted-foreground">
            <Navigation className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
            교통 상황과 작업 일정에 따라 방문 범위가 달라질 수 있습니다. 경기남부 인근 지역도 사진 견적 시 함께 확인해 드립니다.
          </div>
        </div>
      </div>
    </section>
  )
}
