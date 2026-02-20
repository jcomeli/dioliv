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

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />
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
