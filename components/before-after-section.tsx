"use client"

import { useState } from "react"
import Image from "next/image"
import { MoveHorizontal, Sparkles } from "lucide-react"

const cases = [
  { name: "서동탄자이", detail: "고층 거실창", before: "/images/cases/seodongtan-before.jpeg", after: "/images/cases/seodongtan-after.jpeg" },
  { name: "SK스카이뷰", detail: "거실 외창", before: "/images/cases/sk-before.jpg", after: "/images/cases/sk-after.jpg" },
  { name: "중흥에스클래스", detail: "거실 외창", before: "/images/cases/jungheung-before.jpg", after: "/images/cases/jungheung-after.jpg" },
]

function BeforeAfterCard({ item, featured = false }: { item: (typeof cases)[number]; featured?: boolean }) {
  const [position, setPosition] = useState(50)
  const sizes = featured ? "(max-width: 1024px) 100vw, 66vw" : "(max-width: 1024px) 100vw, 33vw"

  return (
    <article className={`group overflow-hidden rounded-[2rem] premium-card transition duration-500 hover:-translate-y-1 hover:shadow-[0_28px_80px_-35px_rgba(15,35,80,0.5)] ${featured ? "lg:col-span-2" : ""}`}>
      <div className={`relative overflow-hidden bg-slate-900 ${featured ? "aspect-[16/10] sm:aspect-[16/9]" : "aspect-[4/3]"}`}>
        <Image src={item.after} alt={`${item.name} 창문 청소 후`} fill className="object-cover" sizes={sizes} />
        <div className="absolute inset-0 overflow-hidden" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <Image src={item.before} alt={`${item.name} 창문 청소 전`} fill className="object-cover" sizes={sizes} />
        </div>
        <span className="absolute left-4 top-4 rounded-full border border-white/15 bg-slate-950/70 px-3.5 py-2 text-xs font-bold text-white backdrop-blur-md">작업 전</span>
        <span className="absolute right-4 top-4 rounded-full bg-primary px-3.5 py-2 text-xs font-bold text-white shadow-lg">작업 후</span>
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(15,23,42,0.2)]" style={{ left: `${position}%` }}>
          <span className="absolute left-1/2 top-1/2 flex h-11 w-11 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border-2 border-white bg-slate-950/75 text-white shadow-xl backdrop-blur-sm">
            <MoveHorizontal className="h-5 w-5" />
          </span>
        </div>
        <input type="range" min="0" max="100" value={position} onChange={(event) => setPosition(Number(event.target.value))} aria-label={`${item.name} 작업 전후 비교 슬라이더`} className="absolute inset-0 h-full w-full cursor-ew-resize opacity-0" />
      </div>
      <div className="flex items-center justify-between gap-3 px-6 py-5 sm:px-7">
        <div><h3 className="font-bold text-foreground">{item.name}</h3><p className="mt-0.5 text-sm text-muted-foreground">{item.detail}</p></div>
        <span className="inline-flex shrink-0 items-center gap-1.5 text-xs font-semibold text-primary"><Sparkles className="h-3.5 w-3.5" />실제 작업</span>
      </div>
    </article>
  )
}

export function BeforeAfterSection() {
  return (
    <section id="results" className="relative overflow-hidden bg-secondary/55 px-4 py-24 sm:px-5 sm:py-32 lg:px-10">
      <div className="pointer-events-none absolute -right-40 -top-40 h-[32rem] w-[32rem] rounded-full bg-primary/10 blur-3xl" />
      <div className="mx-auto max-w-7xl">
        <div className="mx-auto max-w-3xl text-center">
          <span className="section-label">BEFORE &amp; AFTER</span>
          <h2 className="mt-2 text-4xl font-black tracking-[-0.045em] text-foreground sm:text-5xl md:text-6xl">말보다 먼저,<br className="sm:hidden" /> 결과를 보여드립니다</h2>
          <p className="mt-5 text-base leading-7 text-muted-foreground sm:text-lg">같은 현장에서 촬영한 실제 작업 전·후 사진입니다. 가운데 손잡이를 좌우로 움직여 유리의 선명도 차이를 확인해 보세요.</p>
        </div>
        <div className="mt-12 grid gap-5 lg:grid-cols-2">{cases.map((item, index) => <BeforeAfterCard key={item.name} item={item} featured={index === 0} />)}</div>
        <p className="mt-5 text-center text-xs text-muted-foreground">촬영 시점의 날씨와 채광에 따라 사진의 색감은 다를 수 있습니다.</p>
      </div>
    </section>
  )
}
