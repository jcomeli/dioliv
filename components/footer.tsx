import Image from "next/image"
import { ExternalLink } from "lucide-react"

const NAVER_PLACE = "https://naver.me/xExIe66q"
const DAANGN = "https://www.daangn.com/kr/local-profile/dio%EB%A6%AC%EB%B9%99%EC%95%A4%EB%94%94%EC%9E%90%EC%9D%B8-w8feq9gkef3n/"
const SMARTSTORE = "https://smartstore.naver.com/dioliv"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card py-8 sm:py-10 md:py-14">
      <div className="mx-auto max-w-7xl px-4 sm:px-5 lg:px-10">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <a href="#" className="flex items-center shrink-0">
            <Image
              src="/images/logo.png"
              alt="DIO 리빙앤디자인"
              width={640}
              height={192}
              className="h-14 sm:h-16 md:h-[11rem] w-auto object-contain object-left"
            />
          </a>

          <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-xs text-muted-foreground">
            <a href={NAVER_PLACE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
              네이버 플레이스
              <ExternalLink className="h-3 w-3" />
            </a>
            <a href={DAANGN} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
              당근마켓
              <ExternalLink className="h-3 w-3" />
            </a>
            <a href={SMARTSTORE} target="_blank" rel="noopener noreferrer" className="flex items-center gap-1 hover:text-foreground transition-colors">
              스마트스토어
              <ExternalLink className="h-3 w-3" />
            </a>
          </div>
        </div>

        <div className="mt-6 pt-6 border-t border-border">
          <p className="text-[11px] sm:text-xs text-muted-foreground leading-relaxed break-keep">
            디아이오리빙앤디자인(DIO Living&amp;Design) | 전화 010-2643-1922 | 대표 전주형 | 사업자번호 787-19-02131 | 주소 경기 화성시 동탄구 동탄대로6길 13 B102-2-03호 | © 2026 All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
