# 구글·네이버 검색 최적화(SEO) 가이드

배포 후 아래 순서로 진행하면 검색 노출에 도움이 됩니다.

## 1. 도메인 설정 (필수)

프로젝트 루트에 `.env.local` 파일을 만들고 **실제 배포 주소**를 넣어주세요.

```env
NEXT_PUBLIC_SITE_URL=https://실제도메인.com
```

- 이 값은 메타태그, Open Graph, sitemap, robots.txt, JSON-LD에 사용됩니다.
- 입력하지 않으면 기본 예시 URL이 사용되어 검색/공유 미리보기가 잘못 나올 수 있습니다.

---

## 2. 구글 (Google Search Console)

1. [Google Search Console](https://search.google.com/search-console) 접속 후 **속성 추가**.
2. **URL 접두어**로 배포한 사이트 주소 등록 (예: `https://www.실제도메인.com`).
3. 소유권 확인 (HTML 태그 또는 DNS 등).
4. **사이트맵 제출**: 왼쪽 메뉴 **색인 생성 → Sitemaps**에서 아래 주소 제출.
   ```
   https://실제도메인.com/sitemap.xml
   ```
5. **URL 검사**에서 메인 주소 한 번 요청해 두면 색인 요청에 도움이 됩니다.

---

## 3. 네이버 (네이버 서치어드바이저)

1. [네이버 서치어드바이저](https://searchadvisor.naver.com/) 접속 후 로그인.
2. **사이트 등록**에서 배포한 사이트 URL 등록.
3. 소유권 확인 (메타 태그 또는 파일 업로드).
4. **사이트맵 제출**: **요청 → 사이트맵 제출**에서 아래 주소 제출.
   ```
   https://실제도메인.com/sitemap.xml
   ```
5. **URL 제출**에서 메인 페이지 URL 제출해 두면 색인에 유리합니다.

---

## 4. 이미 적용된 SEO 항목

| 항목 | 설명 |
|------|------|
| **메타 태그** | title, description, keywords (구글·네이버 공통) |
| **Open Graph** | 카카오/네이버/페이스북 등 링크 공유 시 미리보기 |
| **Twitter Card** | 트위터 공유 시 미리보기 |
| **canonical** | 대표 URL 지정으로 중복 수집 방지 |
| **robots.txt** | `/robots.txt` 자동 생성, sitemap 위치 안내 |
| **sitemap.xml** | `/sitemap.xml` 자동 생성 (구글·네이버 제출용) |
| **JSON-LD** | LocalBusiness·Service 구조화 데이터 (검색 결과 풍부한 노출) |

---

## 5. 추가로 하면 좋은 것

- **OG 이미지**: `/images/hero-window-before-after.png`가 공유 시 사용됩니다.  
  비율이 맞지 않으면 1200x630 크기로 잘라서 `public/images/og.png` 등으로 두고, `lib/site-config.ts` 또는 메타데이터에서 이미지 경로를 `og.png`로 바꿀 수 있습니다.
- **네이버 블로그/카페**: 업체 소개·후기 링크를 사이트로 걸어 두면 유입과 노출에 도움이 됩니다.
- **정기 콘텐츠**: 블로그나 공지에 “동탄 창문청소”, “윈봇 청소” 등 키워드를 자연스럽게 넣고 사이트 링크를 달아 두면 좋습니다.

배포 후 반드시 **NEXT_PUBLIC_SITE_URL**만 실제 도메인으로 설정하면, 위 설정들이 그대로 구글·네이버에 반영됩니다.
