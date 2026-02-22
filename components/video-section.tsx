"use client"

import { Play } from "lucide-react"
import { useEffect, useRef, useState } from "react"

const MAIN_VIDEO_ID = "-zE76MSUiTg"
const PROCESS_VIDEO_ID = "ItvWOSaL7-A"

export function VideoSection() {
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
    return () => {
      if (el) observer.unobserve(el)
    }
  }, [])

  return (
    <section ref={sectionRef} id="video" className="py-20 sm:py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="text-center mb-14 md:mb-20">
          <span className="inline-block text-xs font-bold tracking-[0.2em] uppercase text-primary mb-4">
            Video
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-foreground leading-tight text-balance">
            <span className="text-primary">영상</span>
            {"으로 보는 DIO 드론청소"}
          </h2>
        </div>

        <div
          className={`grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          {/* 메인 영상 */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl hover:shadow-foreground/5 transition-all">
            <div className="aspect-video relative bg-muted">
              <iframe
                src={`https://www.youtube.com/embed/${MAIN_VIDEO_ID}?rel=0`}
                title="DIO 창문청소 메인 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 text-primary">
                <Play className="h-5 w-5 fill-current" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">메인 영상</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                DIO 창문청소 소개 영상
              </p>
            </div>
          </div>

          {/* 작업과정 영상 */}
          <div className="rounded-2xl border border-border bg-card overflow-hidden shadow-lg hover:shadow-xl hover:shadow-foreground/5 transition-all">
            <div className="aspect-video relative bg-muted">
              <iframe
                src={`https://www.youtube.com/embed/${PROCESS_VIDEO_ID}?rel=0`}
                title="DIO 창문청소 작업과정 영상"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-5 md:p-6">
              <div className="flex items-center gap-2 text-primary">
                <Play className="h-5 w-5 fill-current" />
                <span className="text-sm font-bold tracking-[0.2em] uppercase">작업과정 영상</span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                현장 작업 과정을 영상으로 확인하세요
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
