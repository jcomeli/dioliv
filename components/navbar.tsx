"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Menu, X, Phone, MessageCircle } from "lucide-react"
import { Button } from "@/components/ui/button"

const KAKAO_CHANNEL = "http://pf.kakao.com/_lfCjn/chat"
const PHONE_NUMBER = "tel:010-2643-1922"

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-background/95 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <nav className="mx-auto max-w-7xl flex items-center justify-between gap-3 px-4 sm:px-5 lg:px-10 pt-[calc(0.75rem+env(safe-area-inset-top))] pb-3 sm:py-3.5 min-h-[3.5rem] md:min-h-0 md:pt-0">
        <a href="#" className="flex items-center min-w-0 flex-1 md:flex-initial">
          <Image
            src="/images/logo.png"
            alt="DIO 리빙앤디자인"
            width={560}
            height={160}
            className="h-[7.5rem] sm:h-[9rem] md:h-[9rem] w-auto max-w-[85vw] md:max-w-none object-contain object-left"
            priority
          />
        </a>

        <div className="hidden md:flex items-center gap-7 shrink-0">
          {[
            { href: KAKAO_CHANNEL, label: "드론 외벽청소 문의", external: true },
            { href: "#why", label: "문제점" },
            { href: "#solution", label: "해결책" },
            { href: "#reviews", label: "후기" },
            { href: "#pricing", label: "가격" },
            { href: "#estimate", label: "간편견적" },
          ].map((link) => (
            <a
              key={link.label}
              href={link.href}
              {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
              className={`text-sm font-semibold hover:opacity-80 transition-opacity duration-300 ${scrolled ? "text-foreground" : "text-white"}`}
            >
              {link.label}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-2.5">
          <Button
            asChild
            size="sm"
            variant="outline"
            className="rounded-full px-4 text-sm font-semibold border-border hover:bg-muted"
          >
            <a href={PHONE_NUMBER}>
              <Phone className="mr-1.5 h-3.5 w-3.5" />
              {"010-2643-1922"}
            </a>
          </Button>
          <Button
            asChild
            size="sm"
            className="bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full px-4 text-sm font-bold shadow-md"
          >
            <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
              <MessageCircle className="mr-1.5 h-3.5 w-3.5" />
              {"카톡 문의"}
            </a>
          </Button>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden shrink-0 p-3 -m-2 rounded-xl hover:bg-muted/80 active:bg-muted/80 transition-colors touch-manipulation"
          aria-label="메뉴 열기"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </nav>

      {isOpen && (
        <div className="md:hidden border-t border-border bg-background/98 backdrop-blur-xl max-h-[85vh] overflow-y-auto">
          <div className="flex flex-col px-4 py-4 gap-0.5">
            {[
              { href: KAKAO_CHANNEL, label: "드론 외벽청소 문의", external: true },
              { href: "#why", label: "문제점" },
              { href: "#solution", label: "해결책" },
              { href: "#reviews", label: "후기" },
              { href: "#pricing", label: "가격" },
              { href: "#estimate", label: "간편견적" },
            ].map((link) => (
              <a
                key={link.label}
                href={link.href}
                {...(link.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                onClick={() => setIsOpen(false)}
                className="text-sm font-semibold text-foreground hover:opacity-80 active:bg-muted/50 py-3.5 px-1 rounded-lg transition-colors -mx-1"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2.5 mt-4 pt-4 border-t border-border">
              <Button asChild className="w-full bg-[#FEE500] text-[#191919] hover:bg-[#FEE500]/90 rounded-full font-bold">
                <a href={KAKAO_CHANNEL} target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="mr-1.5 h-4 w-4" />
                  {"카톡으로 무료 견적"}
                </a>
              </Button>
              <Button asChild variant="outline" className="w-full rounded-full font-bold">
                <a href={PHONE_NUMBER}>
                  <Phone className="mr-1.5 h-4 w-4" />
                  {"전화 상담"}
                </a>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
