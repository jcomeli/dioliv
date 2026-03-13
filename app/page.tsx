import { Building2 } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { HeroSection } from "@/components/hero-section"
import { ProblemSection } from "@/components/problem-section"
import { SolutionSection } from "@/components/solution-section"
import { StepsSection } from "@/components/steps-section"
import { ReviewsSection } from "@/components/reviews-section"
import { PricingSection } from "@/components/pricing-section"
import { EstimateSection } from "@/components/estimate-section"
import { TrustSection } from "@/components/trust-section"
import { FinalCtaSection } from "@/components/final-cta-section"
import { Footer } from "@/components/footer"
import { partnerApartments } from "@/lib/partner-apartments"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
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
      <HeroSection />
      <ProblemSection />
      <SolutionSection />
      <StepsSection />
      <ReviewsSection />
      <PricingSection />
      <EstimateSection />
      <TrustSection />
      <FinalCtaSection />
      <Footer />
    </main>
  )
}
