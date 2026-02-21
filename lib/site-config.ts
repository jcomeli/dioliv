/**
 * 사이트 공통 설정 (SEO, 공유, 구조화 데이터용)
 * 배포 시 .env.local에 NEXT_PUBLIC_SITE_URL 을 실제 도메인으로 설정하세요.
 */
export const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL || "https://dio-window.example.com"

export const SITE_NAME = "DIO 리빙앤디자인"
export const SITE_TITLE = "DIO Living & Design | 동탄 아파트 창문 청소 전문"
export const SITE_DESCRIPTION =
  "동탄·경기남부 아파트 창문 청소 전문. 윈봇(에코백스)+수작업 마감, 안전벨트·하네스 보호, 친환경 세정제 사용. 거실창 10만원부터. 카톡 무료 견적 · 부담 없이 문의."

/** 검색/소셜용 키워드 */
export const SITE_KEYWORDS = [
  "동탄 창문청소",
  "동탄 아파트 창문 청소",
  "창문 로봇 청소",
  "윈봇 청소",
  "에코백스 창문청소",
  "경기 창문 청소",
  "화성 동탄 청소",
  "아파트 유리창 청소",
  "DIO 리빙앤디자인",
].join(", ")

/** 푸터와 동일한 사업자 정보 */
export const BUSINESS = {
  name: "디아이오리빙앤디자인",
  phone: "010-2643-1922",
  address: "경기 화성시 동탄구 동탄대로6길 13 B102-2-03호",
  representative: "전주형",
  businessNumber: "787-19-02131",
}
