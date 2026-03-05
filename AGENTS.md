# AGENTS.md

Claude Code 에이전트를 위한 프로젝트 가이드.

## 프로젝트 개요

**unwrap.fm** - 음악 스트리밍 기록 분석 서비스 (stats.fm과 유사)

### 기술 스택

- React 19 + TypeScript (strict mode)
- React Router v7 (SSR framework, Remix 후속)
- Relay (GraphQL 클라이언트, 외부 GraphQL 서버 연동)
- vanilla-extract (CSS-in-JS, zero-runtime)
- Vite + Cloudflare Workers
- Biome (lint + format)
- Vitest + Testing Library (테스트)

### 디자인 시스템

**모든 디자인 결정은 `.claude/skills/design-guide/SKILL.md` 참조.**

핵심:
- Oxidized Cyan (#0C8A99) 기반 컬러 시스템
- Dark mode 기본, Solid Surface 시각 언어
- 엔터테인먼트 중심 UI

---

## 아키텍처: Simple FSD (Feature-Sliced Design)

FSD의 핵심 원칙을 따르되, 불필요한 레이어를 제거한 경량 구조입니다.

### 핵심 원칙

1. **레이어(Layer)는 고정된 3개** — 추가/제거/이름 변경 금지
2. **Import 방향은 반드시 위→아래** — 같은 레이어 또는 아래→위 import 금지
3. **슬라이스(Slice)는 비즈니스 도메인 단위** — 기술 단위(hooks, utils)가 아님
4. **세그먼트(Segment)는 기술 역할 단위** — ui, api, model, lib, config

### 레이어 계층 (위에서 아래로, 위가 아래를 import)

```
pages     ← 라우트 페이지 조합 (features를 조합, 라우트 진입점)
  features  ← 도메인 슬라이스 (비즈니스 엔티티 + 유저 시나리오)
    shared  ← 비즈니스 무관 재사용 코드 (UI 킷, 유틸, 프로바이더, 스타일)
```

### Import 규칙 (비협상)

```
pages     → features, shared
features  → shared (features 간 import 금지)
shared    → 외부 패키지만 (다른 레이어 import 금지)
```

**같은 레이어 내 슬라이스 간 import는 금지.**
- features/artist → features/track (X)
- 조합이 필요하면 pages에서 한다.

**예외: shared 레이어 내부는 세그먼트 간 자유롭게 import 가능.**

### 레이어 바깥: 앱 진입점

`root.tsx`, `routes.ts`, `entry.client.tsx`, `entry.server.tsx`, `layout/`은 **레이어 체계 바깥**의 앱 진입점입니다. React Router v7의 라우팅 인프라로서, 어떤 레이어든 자유롭게 import할 수 있습니다.

`layout/`은 root.tsx에서 사용하는 앱 전체 레이아웃 컴포넌트(app-shell, sidebar, top-nav 등)를 담습니다.

---

## 프로젝트 구조

```
src/
├── root.tsx                      # RR7 루트 레이아웃 (layout 조합, Provider 감싸기)
├── routes.ts                     # RR7 라우트 설정 (pages 연결)
├── entry.client.tsx              # 클라이언트 hydration 엔트리
├── entry.server.tsx              # SSR 렌더링 엔트리
│
├── layout/                       # 앱 전체 레이아웃 (레이어 바깥)
│   ├── app-shell/
│   │   ├── ui/
│   │   │   └── app-shell.tsx
│   │   ├── app-shell.css.ts
│   │   └── index.ts
│   ├── top-nav/
│   │   ├── ui/
│   │   │   └── top-nav.tsx
│   │   ├── top-nav.css.ts
│   │   └── index.ts
│   ├── sidebar/
│   │   ├── ui/
│   │   │   ├── sidebar.tsx
│   │   │   └── nav-item.tsx
│   │   ├── sidebar.css.ts
│   │   └── index.ts
│   ├── mobile-drawer/
│   │   ├── ui/
│   │   │   └── mobile-drawer.tsx
│   │   ├── mobile-drawer.css.ts
│   │   └── index.ts
│   └── main-content/
│       ├── ui/
│       │   └── main-content.tsx
│       ├── main-content.css.ts
│       └── index.ts
│
├── pages/                        # [Layer] 라우트별 페이지 조합
│   ├── home/
│   │   ├── ui/
│   │   │   └── home-page.tsx     # RR7 route module (default export)
│   │   ├── home.css.ts
│   │   └── index.ts
│   └── account/
│       ├── ui/
│       │   └── account-page.tsx
│       ├── account.css.ts
│       └── index.ts
│
├── features/                     # [Layer] 도메인 슬라이스
│   └── (추후 생성: artist, track, album, stats, auth 등)
│       ├── ui/                   # 컴포넌트 (+ Relay fragments)
│       ├── api/                  # Relay mutations, loader/action 로직
│       ├── model/                # 타입, 상수, 상태 로직
│       ├── lib/                  # 순수 헬퍼 함수
│       └── index.ts              # Public API
│
└── shared/                       # [Layer] 비즈니스 무관 재사용 코드
    ├── ui/                       # 기본 UI 컴포넌트
    │   ├── button/
    │   │   ├── index.tsx
    │   │   └── button.css.ts
    │   ├── icon-button/
    │   ├── avatar/
    │   └── ...
    ├── providers/                # 글로벌 프로바이더 (RelayProvider 등)
    ├── lib/                      # 유틸리티 라이브러리
    │   └── relay-environment.ts
    ├── graphql/                  # GraphQL 스키마
    │   └── schema.graphql
    ├── hooks/                    # 공유 훅
    │   └── use-mobile-drawer.ts
    ├── styles/                   # 디자인 토큰, 글로벌 스타일, sprinkles
    │   ├── global.css.ts         # CSS 리셋, body 스타일
    │   ├── theme.css.ts
    │   ├── sprinkles.css.ts
    │   ├── breakpoints.ts
    │   ├── layout.css.ts
    │   ├── page.css.ts
    │   └── index.ts
    ├── types/                    # 공유 타입
    └── config/                   # 상수, 환경 설정

workers/
└── app.ts                        # Cloudflare Worker 엔트리
```

---

## 레이어별 상세 규칙

### pages/

- **라우트와 1:1 매핑**되는 페이지 조합 레이어
- features를 가져다 조합하는 역할
- 자체 비즈니스 로직 최소화 (조합만)
- 각 페이지는 **RR7 route module로 동작** — `default export` 필수
- `src/routes.ts`에서 페이지 파일을 라우트에 연결:

```typescript
// src/routes.ts
import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("pages/home/ui/home-page.tsx"),
  route("account", "pages/account/ui/account-page.tsx"),
] satisfies RouteConfig;
```

```tsx
// pages/home/ui/home-page.tsx — RR7 route module
import { ArtistList } from "@/features/artist";
import { StatsOverview } from "@/features/stats";

export default function HomePage() {
  return (
    <>
      <StatsOverview />
      <ArtistList />
    </>
  );
}

export async function loader({ request }: Route.LoaderArgs) {
  // SSR 데이터 로딩
}
```

**features 간 조합이 필요하면 pages에서:**
```tsx
// pages/artist-detail/ui/artist-detail-page.tsx
import { ArtistProfile } from "@/features/artist";
import { TopTracksList } from "@/features/track";

export default function ArtistDetailPage() {
  return (
    <>
      <ArtistProfile />
      <TopTracksList />
    </>
  );
}
```

### features/

- **비즈니스 도메인 단위** 슬라이스 (기존 FSD의 entities + features를 합친 것)
- 예시: artist (ArtistCard, ArtistRow + 관련 액션), track, album, stats, auth
- 각 슬라이스가 **데이터 표현(UI) + 유저 시나리오(로직)** 모두 포함
- Relay fragment를 co-locate하는 계층
- features 간 직접 참조 금지 — 조합은 pages에서

### shared/

- **비즈니스 로직이 전혀 없는** 순수 재사용 코드
- "unwrap.fm"이라는 단어가 코드에 등장하면 안 됨
- 어떤 프로젝트에든 복사해서 쓸 수 있어야 함
- 하위 세그먼트: ui, providers, lib, hooks, styles, types, config
- providers/ — 글로벌 프로바이더 정의 (RelayProvider, ThemeProvider 등)
- styles/global.css.ts — CSS 리셋 + body 스타일

### layout/ (레이어 바깥)

- **root.tsx 전용** 앱 레이아웃 컴포넌트
- AppShell, TopNav, Sidebar, MobileDrawer, MainContent 등
- shared만 import 가능 (features, pages import 금지)
- 슬라이스 구조를 따르되 레이어 체계에는 속하지 않음

---

## 컴포넌트 배치 판단 기준

| 기준 | 배치 |
|------|------|
| Relay fragment가 있음 | `features/` |
| 비즈니스 도메인에 속함 | `features/` |
| plain props만, 아무 프로젝트에서 쓸 수 있음 | `shared/ui/` |
| 앱 전체 레이아웃 | `layout/` |
| 라우트 진입점, features 조합 | `pages/` |

---

## 세그먼트(Segment) 규칙

각 슬라이스 내부는 다음 세그먼트로 구성합니다. **모든 세그먼트가 필수는 아닙니다** — 필요한 것만 생성.

| 세그먼트 | 역할 | 예시 |
|----------|------|------|
| `ui/` | React 컴포넌트 | `artist-card.tsx`, `login-form.tsx` |
| `api/` | 서버 함수, Relay fragments/queries | `get-artists.functions.ts` |
| `model/` | 타입, Zod 스키마, 상태 로직, 상수 | `artist.types.ts`, `artist.schema.ts` |
| `lib/` | 순수 헬퍼 함수 | `format-duration.ts` |
| `config/` | 설정값, 상수 | `routes.ts`, `api-endpoints.ts` |

### 슬라이스의 Public API (index.ts)

각 슬라이스는 **반드시 index.ts를 통해서만 외부에 노출**합니다.

```
features/artist/
├── ui/
│   ├── artist-card.tsx
│   ├── artist-row.tsx       # 내부용일 수 있음
│   └── artist-list.tsx
├── model/
│   └── artist.types.ts
├── lib/
│   └── format-play-count.ts
├── artist.css.ts
└── index.ts                 # Public API
```

```typescript
// features/artist/index.ts
export { ArtistCard } from "./ui/artist-card";
export { ArtistList } from "./ui/artist-list";
export type { Artist } from "./model/artist.types";
```

**Import 시 항상 슬라이스 루트에서:**
```typescript
// OK
import { ArtistCard } from "@/features/artist";

// WRONG - 내부 세그먼트 직접 접근 금지
import { ArtistCard } from "@/features/artist/ui/artist-card";
```

---

## 네이밍 컨벤션

### 파일/폴더

| 대상 | 규칙 | 예시 |
|------|------|------|
| 레이어 폴더 | 복수형, 소문자 | `pages/`, `features/`, `shared/` |
| 슬라이스 폴더 | kebab-case | `top-nav/`, `mobile-drawer/`, `filter-stats/` |
| 세그먼트 폴더 | 소문자 | `ui/`, `api/`, `model/`, `lib/`, `config/` |
| 컴포넌트 파일 | kebab-case.tsx | `artist-card.tsx`, `top-nav.tsx` |
| 스타일 파일 | 슬라이스명.css.ts | `sidebar.css.ts`, `button.css.ts` |
| 타입 파일 | 슬라이스명.types.ts | `artist.types.ts` |
| 스키마 파일 | 슬라이스명.schema.ts | `artist.schema.ts` |
| 서버 전용 | *.server.ts | `spotify-api.server.ts` |
| 테스트 파일 | 원본명.test.tsx | `artist-card.test.tsx` |
| Public API | index.ts | 각 슬라이스 루트에 필수 |

### 컴포넌트/타입

| 대상 | 규칙 | 예시 |
|------|------|------|
| 컴포넌트 | PascalCase | `ArtistCard`, `TopNav` |
| Props | PascalCase + Props | `ArtistCardProps`, `TopNavProps` |
| Relay Fragment | ComponentName_fieldName | `ArtistCard_artist` |
| Relay Query | pageName + Query | `homePageQuery` |

---

## 스타일 규칙

### 기본 원칙

1. **컴포넌트 스타일은 슬라이스에 co-locate** — 슬라이스 루트에 `*.css.ts`
2. **글로벌 토큰은 shared/styles/** — theme.css.ts, sprinkles.css.ts, breakpoints.ts
3. **글로벌 리셋은 shared/styles/global.css.ts** — 리셋과 body 스타일

### Import

```typescript
// 토큰
import { vars } from "@/shared/styles/theme.css";
import { sprinkles } from "@/shared/styles/sprinkles.css";
import { breakpoints } from "@/shared/styles/breakpoints";

// 컴포넌트 스타일 (같은 슬라이스 내)
import * as styles from "../sidebar.css";
```

### Recipe (컴포넌트 variants)

shared/ui 컴포넌트는 `@vanilla-extract/recipes`로 variants 정의:

```typescript
// shared/ui/button/button.css.ts
import { recipe } from "@vanilla-extract/recipes";

export const buttonStyle = recipe({
  base: { /* 공통 스타일 */ },
  variants: {
    variant: { primary: {}, secondary: {}, ghost: {} },
    size: { sm: {}, md: {}, lg: {} },
  },
  defaultVariants: { variant: "secondary", size: "md" },
});
```

### 클래스 조합

`.tsx`에서는 `clsx`로 조합:

```tsx
import clsx from "clsx";
<div className={clsx(styles.base, isActive && styles.active, className)} />
```

---

## React Router v7 패턴

### 라우트 모듈

각 페이지 파일은 RR7 route module로 동작합니다:

```tsx
// pages/home/ui/home-page.tsx
import type { Route } from "./+types.home-page";

export async function loader({ request, context }: Route.LoaderArgs) {
  return { data: "..." };
}

export async function action({ request }: Route.ActionArgs) {
  const formData = await request.formData();
  return { success: true };
}

export default function HomePage({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.data}</div>;
}
```

### 핵심 규칙

- `src/root.tsx` — 루트 레이아웃 (Layout + Root 컴포넌트)
- `src/routes.ts` — 라우트 설정 (페이지 파일 연결)
- 페이지 파일은 **default export** 필수 (RR7 route module 규약)
- loader/action은 같은 페이지 파일에서 named export
- `*.server.ts` — 서버 전용 헬퍼 (DB, 시크릿)

---

## Relay (GraphQL) 패턴

### 핵심 원칙

1. **Fragment Co-location**: 각 컴포넌트는 자신이 필요한 데이터를 `graphql` fragment로 선언
2. **Data Masking**: 컴포넌트는 자신의 fragment 외 데이터에 접근 불가
3. **Query는 페이지/라우트 레벨에서만**: `loadQuery()` → `usePreloadedQuery()`
4. **Fragment는 features에서**: `useFragment()`로 소비

### Fragment Co-location과 레이어 매핑

| Layer | Relay Pattern |
|-------|---------------|
| `features/` | Fragments (`ArtistCard_artist`) + Mutations |
| `pages/` | Root queries (feature fragments를 spread) |
| `shared/ui/` | Fragment 없음 — plain props만 받음 |

### 데이터 로딩 패턴

```tsx
// pages/home/ui/home-page.tsx — Root Query + RR7 route module
import { graphql, usePreloadedQuery } from "react-relay";

const HomePageQuery = graphql`
  query homePageQuery {
    viewer {
      ...StatsOverview_viewer
      ...TopArtistsList_viewer
    }
  }
`;

export default function HomePage() {
  // usePreloadedQuery 또는 useLazyLoadQuery 사용
}
```

```tsx
// features/artist/ui/artist-card.tsx — Fragment Co-location
import { graphql, useFragment } from "react-relay";
import type { ArtistCard_artist$key } from "./__generated__/ArtistCard_artist.graphql";

const ArtistCardFragment = graphql`
  fragment ArtistCard_artist on Artist {
    id
    name
    imageUrl
    playCount
  }
`;

export function ArtistCard({ artist }: { artist: ArtistCard_artist$key }) {
  const data = useFragment(ArtistCardFragment, artist);
  return <div>{data.name}</div>;
}
```

### Relay 규칙 (비협상)

1. **GraphQL 데이터를 plain props로 전달 금지** — 반드시 fragment key로 전달
2. **Fragment를 컴포넌트 간 공유 금지** — 각 컴포넌트가 자신의 fragment 소유
3. **render 중 loadQuery() 호출 금지** — 라우트 loader 또는 이벤트 핸들러에서만
4. **Fragment 네이밍**: `ComponentName_fieldName` (e.g., `ArtistCard_artist`)
5. **`__generated__/` 디렉토리는 수정 금지** — relay-compiler가 자동 생성

### 환경 설정

- `shared/lib/relay-environment.ts` — Environment 생성 (서버/클라이언트 분리)
- `shared/providers/relay-provider.tsx` — RelayEnvironmentProvider 래핑
- `relay.config.json` — Relay compiler 설정
- `pnpm relay` — compiler 실행, `pnpm relay:watch` — watch 모드

---

## 에러 처리 패턴

- **라우트 모듈:** `ErrorBoundary` named export로 라우트별 에러 처리
- Relay의 Suspense와 자연스럽게 통합
- `src/root.tsx`의 Layout에서 글로벌 에러 UI 제공

---

## 테스트 전략

| 레이어 | 도구 | 대상 |
|--------|------|------|
| Unit | Vitest | shared/lib, features/lib, model 로직 |
| Integration | Vitest + RTL + MSW | features의 UI + 데이터 흐름 |
| E2E | Playwright | 핵심 플로우 (OAuth, 대시보드) |

- 테스트 파일: ui/ 세그먼트 안에 co-locate (`artist-card.test.tsx`)
- `renderWithProviders` 유틸리티로 RelayEnvironment + Router 래핑
- MSW로 네트워크 레벨 모킹

---

## 접근성 (A11y)

- 네비게이션 활성 항목: `aria-current="page"`
- MobileDrawer: `role="dialog"`, `aria-modal="true"`, 포커스 트랩
- 차트/시각화: 텍스트 대안 (`aria-label` 또는 숨김 테이블)
- 색상만으로 정보 전달 금지
- 동적 업데이트: `aria-live="polite"`

---

## 주요 명령어

```bash
pnpm dev          # 개발 서버 (port 3000)
pnpm build        # 프로덕션 빌드
pnpm check        # Biome lint + format
pnpm test         # Vitest
pnpm relay        # Relay compiler 실행
pnpm relay:watch  # Relay compiler watch 모드
```

---

## 작업 시 참고사항

1. **디자인 결정**: 항상 design-guide skill 확인
2. **코멘트 정책**: 불필요한 주석 금지 (코드가 자체 설명)
3. **Import 방향**: 반드시 상위 레이어 → 하위 레이어
4. **슬라이스 접근**: 반드시 index.ts (Public API) 통해서만
5. **스타일**: co-located .css.ts, Recipe API, sprinkles
6. **vanilla-extract 제약**: CSS 변수는 media query condition에서 사용 불가
7. **Import 순서**: 외부 패키지 → 레이어 import (@/) → 상대 경로 → 타입
