# AGENTS.md

Claude Code 에이전트를 위한 프로젝트 가이드.

## 프로젝트 개요

**unwrap.fm** - 음악 스트리밍 기록 분석 서비스 (stats.fm과 유사)

### 기술 스택
- React 19 + TypeScript
- TanStack Router (파일 기반 라우팅)
- TanStack Query
- vanilla-extract (CSS-in-JS)
- Vite + Cloudflare Workers

### 디자인 시스템
**중요: 모든 디자인 결정은 `.claude/skills/design-guide/SKILL.md`를 참조하세요.**

주요 컨셉:
- Oxidized Cyan (#0C8A99) 기반 컬러 시스템
- 엔터테인먼트 중심 UI (재미있고 visual한 경험)
- Solid Surface 시각 언어 (shadow 최소화, border 중심)
- Dark mode 기본

## 파일 구조

```
src/
├── components/
│   └── layout/          # AppShell, TopNav, Sidebar, Main 등
├── routes/              # TanStack Router 파일 기반 라우트
│   ├── __root.tsx       # 루트 레이아웃
│   ├── index.tsx        # 홈
│   └── account/         # /account
├── styles/
│   ├── app.css.ts       # 앱 레이아웃 스타일 (메인)
│   ├── theme.css.ts     # 컬러, 타이포그래피 토큰
│   ├── global.css.ts    # 글로벌 리셋/기본 스타일
│   ├── sprinkles.css.ts # Responsive utilities
│   ├── layout.css.ts    # 레이아웃 유틸리티 (stack, grid 등)
│   ├── page.css.ts      # 페이지 패턴 (hero, states 등)
│   ├── breakpoints.ts   # 반응형 브레이크포인트
│   └── index.ts         # Exports
└── integrations/        # 외부 서비스 통합
```

## 스타일 사용법

### Import
```typescript
import { vars } from "@/styles/theme.css";
import { sprinkles } from "@/styles/sprinkles.css";
import * as styles from "@/styles/app.css";
```

### Sprinkles (Responsive Utilities)
```tsx
<div className={sprinkles({
  display: { base: "block", md: "flex" },
  padding: { base: "4", md: "8" },
  gap: "4"
})} />
```

### Semantic Colors
```typescript
vars.color.bg.canvas          // 페이지 배경
vars.color.bg.surface         // 카드/패널
vars.color.text.primary       // 본문
vars.color.border.focusRing   // 포커스 링 (Primary)
```

## 레이아웃 시스템

### 구조
```
┌──────────────────────────────────────────┐
│ TopNav (Logo, Search, Profile)           │
├──────┬───────────────────────────────────┤
│      │  Mood Timeline                     │
│      │  Visual Hero                       │
│ Nav  │  Big Stats                         │
│      │  Content Grid                      │
└──────┴───────────────────────────────────┘
```

### 컴포넌트
```tsx
import { AppShell, TopNav, Sidebar, Main, MainContent } from "@/components/layout";

<AppShell>
  <TopNav onMenuClick={toggle}>...</TopNav>
  <Sidebar>...</Sidebar>
  <Main>
    <MainContent>{children}</MainContent>
  </Main>
</AppShell>
```

## 작업 시 참고사항

1. **디자인 결정**: 항상 design-guide skill 확인
2. **코멘트 정책**: 불필요한 주석 금지 (코드가 자체 설명)
3. **네이밍**: 컴포넌트는 kebab-case 폴더 + index.tsx
4. **스타일**: vanilla-extract 사용, CSS 변수는 media query에서 사용 불가

## 주요 명령어

```bash
pnpm dev          # 개발 서버
pnpm build        # 빌드
pnpm check        # Biome lint
pnpm test         # Vitest
```
