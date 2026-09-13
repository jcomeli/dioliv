import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { BeforeAfterSection } from "@/components/before-after-section"
import { StepsSection } from "@/components/steps-section"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingSection } from "@/components/pricing-section"
import { EstimateSection } from "@/components/estimate-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { MobileQuickActions } from "@/components/mobile-quick-actions"
import { ServiceAreaSection } from "@/components/service-area-section"

export default function Home() {
  return (
    <main className="min-h-screen bg-background pb-20 md:pb-0">
      <Navbar />
      <HeroSection />
      <section className="relative z-20 -mt-px border-y border-white/60 bg-white/80 px-4 py-4 shadow-[0_12px_40px_-30px_rgba(15,35,80,0.5)] backdrop-blur-xl sm:px-5 lg:px-10">
        <div className="mx-auto grid max-w-7xl grid-cols-2 gap-3 text-sm font-bold text-foreground/75 md:grid-cols-4">
          {['동탄·화성·수원·용인 방문', '실제 작업 전후 사진 공개', '사진 확인 후 견적 안내', '배상책임보험 가입'].map((item) => (
            <span key={item} className="flex items-center justify-center gap-2 text-center"><i className="h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />{item}</span>
          ))}
        </div>
      </section>
      <BeforeAfterSection />
      <EstimateSection />
      <PricingSection />
      <ServiceAreaSection />
      <ReviewsSection />
      <StepsSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer />
      <MobileQuickActions />
    </main>
  )
}
