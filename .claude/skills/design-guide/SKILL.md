---
name: design-guide
description: unwrap.fm design system guide. Reference for colors, typography, layout, and component patterns. Use when making design decisions or creating UI components.
---

# unwrap.fm Design Guide

## 1. 디자인 컨셉

### 1.1 한 줄 정의

**가독성 우선의 모듈형 UI. Oxidized Cyan을 기반으로 밝고 세련된 느낌에 은은한 레트로 무드를 담은 Solid Surface 시각 언어.**

### 1.2 키워드

readability, solid surfaces, oxidized cyan, blue-leaning, modern retro, "bright but calm"

### 1.3 앱 컨텍스트

unwrap.fm은 사용자의 음악 스트리밍 기록을 분석하는 서비스입니다 (stats.fm과 유사). 

**핵심 화면:**
- **Dashboard**: 시간대별 통계 요약 (Top artists, tracks, albums)
- **Analytics**: 상세 데이터 시각화 (차트, 그래프)
- **Profile**: 사용자 정보, 리스닝 히스토리
- **Compare**: 친구/아티스트와 비교

**디자인 요구사항:**
- 데이터 시각화를 위한 넓은 공간
- 빠른 필터 전환 (4주, 6개월, 전체)
- 높은 정보 밀도 + 깔끔한 스캔 가능성
- 음악 서비스 특성에 맞는 dark-first 테마

---

## 2. 디자인 원칙 (5가지 비협상)

1. **구조와 스타일을 분리한다**
   - 구조(계층, 그룹화, 정렬, 간격)를 먼저 잠근 후 스타일(표면 레벨, 레이블 바, 라인워크) 적용

2. **고밀도 영역은 깨끗하게 유지한다**
   - 테이블, 로그, 코드, 긴 폼, 관리 목록: "가독성이 분위기를 이긴다"

3. **브랜드 무드는 핵심 20%에만**
   - 헤더/내비, 요약/히어로 카드, 상태 전환, 빈 상태/온보딩
   - 모든 곳을 꾸미는 대신 "기억 포인트"를 만든다

4. **강조는 소재, 두께, 톤으로 (빛이 아닌)**
   - border weight, surface elevation, 미세한 톤 시프트
   - glow를 주요 강조 도구로 사용하지 않는다

5. **모션은 의미 있을 때만, 대부분 원샷**
   - progress, completion, failure, transition
   - 루핑 애니메이션 최소화

---

## 3. Color System (Oxidized Cyan + Fog)

### 3.1 브랜드 컬러 (불변)

| Name | Hex | Role | 의미 |
|------|-----|------|------|
| **Oxidized Cyan** | `#0C8A99` | Primary (palette 600) | 인터랙션, 주의 집중 |
| **Fog** | `#C9D4D6` | Secondary (palette 300) | 표면, 구조 |

> 이 토큰은 **의미를 잠그기** 위해 존재합니다. "모든 곳을 cyan으로 칠하기" 위한 것이 아닙니다.

### 3.2 Meaning Lock (의미 규칙)

- **Primary (Teal/Cyan) = 인터랙션/주의**
  - 포커스 링, 선택 표시, 링크, 토글 ON, 차트 선택 마크, 제한적 CTA
  - 사용처를 엄격하게 제한: 1-2개의 핵심 액션에만 사용

- **Secondary (Fog) = 표면/구조**
  - 카드 헤더 스트립, 미세한 선택 틴트, 보더/디바이더, 칩 배경, 섹션 분리

- **텍스트는 중립 fog 계열**
  - 브랜드 컬러를 본문/설명 텍스트에 사용 금지
  - Fog 팔레트의 어두운 끝(700-950)이 텍스트 역할

### 3.3 팔레트 구성

각 팔레트는 **50-950 11단계 스케일**로 구성됩니다.

#### Teal/Cyan (Primary)

| Stop | Hex | 용도 |
|------|-----|------|
| 50 | `#EDF7F9` | 매우 밝은 틴트 |
| 100 | `#D5EEF3` | 밝은 배경, selection (light) |
| 200 | `#ABDCE7` | 선택 배경 (light mode) |
| 300 | `#7AC7D8` | 링크 hover (dark mode) |
| 400 | `#45AFC6` | 링크, 포커스 링 (dark mode) |
| 500 | `#2196B2` | 포커스 링 중간 단계, hover |
| **600** | **`#0C8A99`** | **Core - 버튼, 액션** |
| 700 | `#0A6F7B` | 링크 (light mode), active |
| 800 | `#085661` | 버튼 active (light mode) |
| 900 | `#063D46` | 매우 어두운 cyan |
| 950 | `#04252A` | 최심부 |

#### Fog (Neutral)

| Stop | Hex | 용도 |
|------|-----|------|
| 50 | `#F8FAFB` | 페이지 배경 (light mode) |
| 100 | `#F1F4F5` | hover 배경, sunken (light) |
| 200 | `#E3E8EA` | 함몰 영역, 미세 보더 |
| **300** | **`#C9D4D6`** | **Core - 기본 보더 (light)** |
| 400 | `#9FACB0` | 칩 배경, 구분, disabled |
| 500 | `#758588` | 강조 보더 (light), tertiary text |
| 600 | `#5A686B` | tertiary 텍스트 (light) |
| 700 | `#434E50` | secondary 텍스트 (light) |
| 800 | `#2C3436` | border default (dark) |
| 900 | `#191F20` | 다크 모드 sunken |
| **950** | **`#0E1213`** | **페이지 배경 (dark mode)** |

#### Status (독립 시스템)

브랜드 의미를 깨끗하게 유지하기 위해 상태 컬러는 별도 시스템으로 운영합니다.

| Palette | Core (500) | Dark Mode 사용 | Light Mode 사용 |
|---------|-----------|----------------|-----------------|
| Success (Green) | `#22C55E` | 400 (`#4ADE80`) | 600 (`#16A34A`) |
| Warning (Orange) | `#F59E0B` | 400 (`#FBBF24`) | 600 (`#D97706`) |
| Danger (Red) | `#EF4444` | 400 (`#F87171`) | 600 (`#DC2626`) |
| Info | teal-400 | teal-400 | teal-600 |

> Primary를 "성공/위험"으로 사용하지 마세요 (의미 충돌).

---

## 4. Surface System (Solid Surface)

### 4.1 3단계 고정 표면

| Level | 이름 | Dark Mode | Light Mode | 용도 |
|-------|------|-----------|------------|------|
| 1 | **Base (Page)** | fog-950 `#0E1213` | fog-50 `#F8FAFB` | 페이지 최외곽 |
| 2 | **Surface (Card/Panel)** | `#171E20` | `#FFFFFF` | flat fill + thin border |
| 3 | **Raised (Modal/Drawer)** | `#212B2D` | `#FFFFFF` + border/shadow | 포커스/중요도 전용 |

### 4.2 계층 표현 우선순위

1. **spacing** (간격으로 분리)
2. **border weight** (테두리 두께로 구분)
3. **tone shift** (미세 밝기 차이)
4. **minimal shadow** (최후 수단, Raised에서만)

> blur/glow를 기본 계층 도구로 사용하지 않는다.

### 4.3 Surface 규칙

- 카드 내부는 깨끗하게 유지 (패턴/텍스처 금지)
- Raised는 진정 중요한 패널에서만 사용 (과용 금지)
- 헤더 스트립은 높이, 정렬, 콘텐츠를 표준화
- Page base에 초미세 grain/paper 텍스처 허용 (선택, 거의 보이지 않는 수준)

---

## 5. Layout System

### 5.1 디자인 톤

**엔터테인먼트 중심**: 전문적인 분석 서비스지만, 재미있고 흥미로운 경험 제공. 완벽한 정돈보다는 visual interest와 discovery를 우선.

### 5.2 앱 레이아웃 구조

```
┌─────────────────────────────────────────────────────────┐
│ Logo                    [Search]            [Profile]   │  Top Nav
├──────┬──────────────────────────────────────────────────┤
│      │  ┌─────────────────────────────────────────────┐│
│      │  │  ☀️ Morning → 🌤️ Afternoon → 🌙 Evening    ││  Mood Timeline
│      │  │  Your listening mood this week              ││
│      │  └─────────────────────────────────────────────┘│
│      │  ┌─────────────────────────────────────────────┐│
│      │  │  🎵 Your Week in Music                      ││
│      │  │  ┌─────────────────────────────────────────┐││
│      │  │  │   [Album Art Mosaic / Gradient]         │││  Visual Hero
│      │  │  │   "Chill Vibes Only"                    │││
│      │  │  │   Top genre: Indie Electronic           │││
│      │  │  └─────────────────────────────────────────┘││
│      │  └─────────────────────────────────────────────┘│
│ Nav  │                                                  │
│      │  ┌────────┐ ┌────────┐ ┌────────┐ ┌────────┐   │
│ Home │  │ 2,847  │ │  432   │ │   89   │ │   15   │   │  Big Stats
│ Top  │  │ minutes│ │ songs  │ │ artists│ │ genres │   │
│ Rec  │  └────────┘ └────────┘ └────────┘ └────────┘   │
│ Disc │                                                  │
│      │  ┌──────────────────┐ ┌──────────────────┐     │
│      │  │ ┌────┐           │ │ ┌────┐           │     │
│      │  │ │ 🖼 │ 1. Artist │ │ │ 🖼 │ 1. Track  │     │  Lists with Art
│      │  │ └────┘   ♪ 247   │ │ └────┘   ♪ 89   │     │
│      │  │ ┌────┐           │ │ ┌────┐           │     │
│      │  │ │ 🖼 │ 2. ...    │ │ │ 🖼 │ 2. ...    │     │
│      │  └──────────────────┘ └──────────────────┘     │
└──────┴──────────────────────────────────────────────────┘
   200px                      flexible
```

### 5.3 레이아웃 구성요소

| 영역 | 높이/너비 | 특징 |
|------|----------|------|
| **Top Nav** | 56px | Logo, 검색, 프로필. 미니멀. |
| **Sidebar** | 200px | 네비게이션만. Collapsible (60px) |
| **Mood Timeline** | 80px | 시간대별 리스닝 무드 시각화 |
| **Visual Hero** | 200-280px | 앨범 아트 모자이크/그라디언트 + highlight |
| **Big Stats** | 120px | 임팩트 있는 숫자 + playful labels |
| **Content Lists** | flexible | 앨범 아트 포함 랭킹 리스트 |

### 5.4 엔터테인먼트 요소

**허용되는 visual elements:**

- **Album Art Mosaic**: Hero 영역에 앨범 커버 조합
- **Gradient backgrounds**: 섹션 구분 (단, 텍스트 뒤 금지)
- **Mood visualization**: 시간대/감정 기반 그래픽
- **Playful copy**: "Chill Vibes Only", "You discovered 12 new artists!"
- **Big numbers**: 스캔 쉽고 임팩트 있는 숫자 표현
- **Emoji/Icons**: 무드, 시간대 표시 (과도하지 않게)

**제한:**
- 고밀도 데이터 영역(테이블, 상세 리스트) 내부는 깔끔하게
- 장식이 가독성을 해치지 않도록
- Primary color는 여전히 인터랙션에만

### 5.5 Mood Timeline

사용자의 리스닝 패턴을 시각화:

```
☀️ Morning        🌤️ Afternoon      🌙 Evening        🌃 Late Night
Chill            Energetic         Melancholy       Ambient
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
```

- 시간대별 주요 장르/무드
- Emoji + 키워드 조합
- Subtle gradient/waveform 시각화

### 5.6 Visual Hero

주간/월간 하이라이트를 visual하게 표현:

- **Album Mosaic**: Top 앨범 커버 조합
- **Gradient Overlay**: 장르/무드에 맞는 그라디언트
- **Headline**: "Your Week in Music", "Indie Vibes Only"
- **Subheadline**: Top genre, discovery count

### 5.7 반응형 브레이크포인트

| Breakpoint | 너비 | 레이아웃 |
|------------|------|----------|
| Mobile | < 640px | Sidebar hidden, single column, Hero 축소 |
| Tablet | 640-1023px | Collapsed sidebar, 2 columns |
| Desktop | ≥ 1024px | Full sidebar, full Hero |

---

## 6. Retrofuturism Kit (네온 없이)

### 6.1 허용 (권장)

- **Header strip / Label bar ("nameplate")**
  - 캡션 (ENV/REGION/PLAN), 타임스탬프, 작은 상태 점, 짧은 메타데이터
- **Editorial indexing**
  - `— 01 —`, `SECTION 02` 등 일관된 섹션 구분자
- **Micro linework**
  - 구조적 가이드, 기술 도면 단서 (절대 텍스트 뒤에 놓지 않음)
- **Background texture (미세)**
  - 페이지/섹션 base에서만
- **Motion**
  - 짧은 sweep/slide/transition (glow 드라마 없음)

### 6.2 금지

- 네온 글로우, 사이버펑크 그리드, 터미널 미학 (monospace 남용 포함)
- 텍스트 뒤의 강한 그래디언트/패턴
- 고밀도 콘텐츠 영역 내부의 장식

---

## 7. Design Tokens

### 6.1 Spacing

4px(0.25rem) 단위의 일관된 간격 체계.

| Token | Value | 사용 예 |
|-------|-------|--------|
| `space[0]` | 0 | 간격 제거 |
| `space[1]` | 0.25rem (4px) | 아이콘과 텍스트 사이 |
| `space[2]` | 0.5rem (8px) | 인라인 요소 간 간격 |
| `space[3]` | 0.75rem (12px) | 리스트 아이템 패딩 |
| `space[4]` | 1rem (16px) | 기본 컴포넌트 패딩 |
| `space[5]` | 1.25rem (20px) | 섹션 내부 간격 |
| `space[6]` | 1.5rem (24px) | 카드 패딩 |
| `space[8]` | 2rem (32px) | 섹션 간 간격 |
| `space[10]` | 2.5rem (40px) | 큰 섹션 간격 |
| `space[12]` | 3rem (48px) | 헤더/풋터 패딩 |
| `space[16]` | 4rem (64px) | 페이지 섹션 |
| `space[20]` | 5rem (80px) | 히어로 섹션 |
| `space[24]` | 6rem (96px) | 대형 여백 |

### 6.2 Typography

| Token | Value | 용도 |
|-------|-------|------|
| `fontSize.xs` | 0.75rem (12px) | 캡션, 배지, label bar |
| `fontSize.sm` | 0.875rem (14px) | 보조 텍스트, 레이블 |
| `fontSize.base` | 1rem (16px) | 본문 기본 |
| `fontSize.lg` | 1.125rem (18px) | 강조 본문 |
| `fontSize.xl` | 1.25rem (20px) | 소제목, 컴포넌트 타이틀 |
| `fontSize.2xl` | 1.5rem (24px) | 섹션 제목 |
| `fontSize.3xl` | 1.875rem (30px) | 페이지 제목 |
| `fontSize.4xl` | 2.25rem (36px) | 대형 제목 |
| `fontSize.5xl` | 3rem (48px) | 히어로 제목 |

**Typography 규칙:**
- Body text: 높은 가독성의 산세리프, "시끄러운" 개성 피함
- Numbers/metrics: tabular numerals 권장 (스캔/정렬)
- Headers: weight/size/letter-spacing으로 명확한 계층
- 폰트로 "레트로 강제" 금지 — label bar, indexing, 레이아웃 규칙으로 무드 생성

| Token | Value | 용도 |
|-------|-------|------|
| `fontWeight.normal` | 400 | 본문 |
| `fontWeight.medium` | 500 | 강조 본문, 네비게이션 |
| `fontWeight.semibold` | 600 | 소제목, 버튼 |
| `fontWeight.bold` | 700 | 제목, 데이터 수치 |

| Token | Value | 용도 |
|-------|-------|------|
| `lineHeight.tight` | 1.25 | 제목, 데이터 수치, label bar |
| `lineHeight.normal` | 1.5 | 본문 기본 |
| `lineHeight.relaxed` | 1.75 | 긴 텍스트, 설명문 |

### 6.3 Border Radius

| Token | Value | 용도 |
|-------|-------|------|
| `borderRadius.sm` | 0.25rem (4px) | 배지, 태그, 칩 |
| `borderRadius.md` | 0.375rem (6px) | 입력 필드, 작은 버튼 |
| `borderRadius.lg` | 0.5rem (8px) | 카드, 버튼 |
| `borderRadius.xl` | 0.75rem (12px) | 대형 카드, 모달 |
| `borderRadius.full` | 9999px | 원형 요소, pill 버튼 |

### 6.4 Shadow

Solid Surface 컨셉에 맞게 shadow는 최소한으로 사용합니다. 계층 표현은 border weight와 tone shift를 우선합니다.

| Token | 용도 |
|-------|------|
| `shadow.sm` | 미세한 부유감 (드롭다운 항목) |
| `shadow.md` | Raised 패널 (모달/드로어) |
| `shadow.lg` | 최대 elevation (오버레이) |

> Shadow는 **3단계**만 제공. "xl" 없음. glow 효과의 shadow 사용 금지.

### 6.5 Transition

| Token | Duration | 용도 |
|-------|----------|------|
| `transition.colors` | 150ms | 색상 변화 (hover, active, focus) |
| `transition.transform` | 200ms | 위치/크기 변화 (slide, 축소/확대) |
| `transition.opacity` | 150ms | 투명도 변화 (fade in/out) |

> 150-250ms 범위. 루핑 없음. 고밀도 영역에서는 강도를 줄인다.

### 6.6 Z-Index

| Token | Value | 용도 |
|-------|-------|------|
| `zIndex[10]` | 10 | Sticky header |
| `zIndex[20]` | 20 | 드롭다운 메뉴 |
| `zIndex[30]` | 30 | 팝오버, 툴팁 |
| `zIndex[40]` | 40 | 모달 배경 (scrim) |
| `zIndex[50]` | 50 | 모달, 사이드바 |

---

## 8. Component Rules

### 7.1 Buttons

- **Primary 버튼은 기본값이 아님** — 1-2개의 핵심 액션에만 예약
- Standard (Secondary) 버튼: neutral surface + border가 기본
- Hover/active: 톤/보더 변화 (glow 없음)
- 하나의 primary 스타일(solid fill)을 선택하고 일관되게 사용
- Ghost: outline/text 스타일, neutral 텍스트 (brand color 아님)

### 7.2 Links, Selection, Focus

- Focus ring에 **Primary (Teal)** 우선 사용
- 선택 강화 순서:
  1. 미세 틴트 (+1, Secondary)
  2. border weight (+1)
  3. Primary indicator
- **색상에만 의존하지 않음** — shape/weight도 함께 사용

### 7.3 Cards/Panels

- 헤더 스트립 표준화 (높이, 정렬, 콘텐츠)
- 내부는 깨끗하게 (텍스처/패턴 없음)
- Raised는 진정 중요한 패널에서만 사용

### 7.4 Chips/Tags/Filters

- Secondary 배경 + 어두운 텍스트
- 선택된 칩: Primary border/indicator (과도한 fill 피함)

### 7.5 Tables/Logs/Code (고밀도)

- 표면 최소화: flat + thin separator
- row highlighting: Secondary tint로
- focus/selection: Primary ring/indicator로
- 장식적 아이콘/패턴/heavy shadow 없음

---

## 9. 사용 가이드

### 9.1 Import

```typescript
import { vars } from "@/styles/theme.css";
import { sprinkles } from "@/styles/sprinkles.css";
import { breakpoints } from "@/styles/breakpoints";
```

### 9.2 Sprinkles (Responsive Utilities)

Sprinkles는 responsive 스타일을 위한 utility 함수입니다.

```tsx
// 기본 사용법
<div className={sprinkles({
  display: "flex",
  padding: "4",
  gap: "3"
})} />

// 반응형 사용법
<div className={sprinkles({
  display: { base: "block", md: "flex" },
  padding: { base: "4", md: "8" },
  flexDirection: "column"
})} />

// 색상 사용
<div className={sprinkles({
  background: "surface",
  color: "primary"
})} />
```

### 9.3 접근 경로

```typescript
// Semantic colors (테마에 따라 자동 전환)
vars.color.bg.canvas          // 페이지 배경
vars.color.bg.surface         // 카드/패널 배경
vars.color.text.primary       // 본문 텍스트
vars.color.text.link          // 링크
vars.color.border.default     // 기본 보더
vars.color.action.primary.bg  // CTA 버튼 배경
vars.color.status.success     // 성공 상태

// Raw palette (테마 불문 고정값, 차트/시각화 등)
vars.palette.teal[600]        // Primary core (#0C8A99)
vars.palette.fog[300]         // Secondary core (#C9D4D6)
vars.palette.danger[400]      // 차트 위험 표시

// Design tokens
vars.space[4]                 // 1rem 간격
vars.fontSize.lg              // 18px
vars.fontWeight.bold          // 700
vars.lineHeight.normal        // 1.5
vars.borderRadius.lg          // 8px
vars.shadow.md                // 기본 shadow
vars.transition.colors        // 150ms 색상 전환
vars.zIndex[50]               // 모달 레이어

// Breakpoints (JS/CSS 공용)
breakpoints.sm                // "640px"
breakpoints.md                // "768px"
breakpoints.lg                // "1024px"
```

### 9.4 색상 사용 원칙

1. **UI 요소에는 항상 semantic token 사용**: `vars.color.bg.surface`, `vars.color.text.primary` 등. Light/dark 테마 전환이 자동 적용됩니다.

2. **Raw palette는 예외적 상황에서만**:
   - 데이터 시각화 (차트 색상)
   - 브랜드 로고/아이콘 고정 색상
   - 테마와 무관하게 항상 동일한 색상이 필요한 경우

3. **하드코딩된 색상값 금지**: `#0C8A99` 같은 hex 값을 직접 사용하지 않습니다.

4. **Primary는 인터랙션 전용**: 본문 텍스트, 배경 fill, 장식에 사용하지 않습니다.

5. **Ghost 버튼 텍스트는 neutral**: brand cyan이 아닌 fog 팔레트의 중립 톤 사용.

### 9.5 테마 전환

기본값은 dark mode. Light mode는 HTML root에 `data-theme="light"` 추가.

```html
<!-- Dark mode (default) -->
<html lang="en">

<!-- Light mode -->
<html lang="en" data-theme="light">
```

### 9.6 vanilla-extract 사용 예

```typescript
import { style } from "@vanilla-extract/css";
import { vars } from "@/styles/theme.css";

// Solid Surface 카드: border로 구분, 최소 shadow
export const card = style({
  backgroundColor: vars.color.bg.surface,
  border: `1px solid ${vars.color.border.default}`,
  borderRadius: vars.borderRadius.lg,
  padding: vars.space[6],
  transition: vars.transition.colors,
});

// Label bar (retrofuturism kit)
export const labelBar = style({
  backgroundColor: vars.color.bg.surfaceElevated,
  borderBottom: `1px solid ${vars.color.border.subtle}`,
  padding: `${vars.space[2]} ${vars.space[4]}`,
  fontSize: vars.fontSize.xs,
  fontWeight: vars.fontWeight.semibold,
  color: vars.color.text.tertiary,
  letterSpacing: "0.05em",
  textTransform: "uppercase",
});
```

---

## 10. Screen Type 분류

화면을 아래 유형으로 분류하고 "스타일 예산"을 배분합니다.

### Type A: 고밀도

**예시**: 테이블, 로그, 코드, 긴 폼, 관리 목록

- **목표**: 스캔 속도
- **허용**: surface level, thin divider, focus/selection indicator, 매우 제한적 label bar
- **금지**: 내부 패턴, 강한 텍스처, heavy shadow, glow

### Type B: 중밀도

**예시**: 요약 + 상세, 리소스 상세 페이지, 섹션화된 설정

- **목표**: 빠른 계층 & 맥락 파악
- **허용**: label bar, indexing, 구조적 linework, 진정 중요한 패널만 Raised

### Type C: 저밀도

**예시**: 온보딩, 빈 상태, 접근/오류 페이지, 인트로 화면

- **목표**: 브랜드 무드 & 기억 포인트
- **허용**: 넓은 미세 배경 텍스처, 일러스트레이션/다이어그램, 전환 효과

---

## 11. 접근성 (Accessibility)

### 11.1 WCAG 2.1 AA 준수 현황

모든 텍스트/배경 조합은 **WCAG AA (4.5:1)** 이상을 충족합니다.

### 11.2 Border 대비 (WCAG 1.4.11)

Interactive UI 컴포넌트용 `border.strong`은 **3:1** 이상을 충족.

### 11.3 접근성 규칙

1. **Interactive 컴포넌트 테두리에는 `border.strong` 사용**
2. **색상에만 의존하지 않음** — shape, weight, 위치 등 보조 단서 함께 제공
3. **text.tertiary는 보조 정보에만** (본문/중요 정보 금지)
4. **Status 컬러는 별도 시스템** — Primary와 혼용 금지
5. **Dark mode의 primary button hover는 `#117D7F`** (palette 500 직접 사용 금지 — 대비 부족)

---

## 12. 디자인 의사결정 기록

### 11.1 Oxidized Cyan + Fog 선택 이유

- **Oxidized Cyan** (`#0C8A99`): 산화된 느낌의 cyan. blue 계열을 높여 밝고 세련되면서도 차분함. 기존 Oxidized Teal보다 밝고 blue 높임으로써 old하지 않고 modern retro 느낌. 흰색 텍스트 대비 4.5:1 이상으로 접근성 기준 충족.
- **Fog** (`#C9D4D6`): 깨끗하고 미세한 cool tint가 있는 neutral. Primary cyan과 조화로우면서도 중립적.

### 11.2 텍스트에 brand color 미사용

"Fog 팔레트의 neutral 톤을 텍스트에 사용" 원칙에 따라, Fog 팔레트의 어두운 끝(700-950)을 텍스트에 사용합니다. 이들은 미세한 cool tint를 가진 neutral로, 순수 gray보다 시스템 내 일관성이 높습니다.

### 11.3 Ghost 버튼 텍스트를 neutral로

Ghost 버튼은 Primary 컬러 텍스트를 사용하지 않고 neutral 텍스트(fog-200 dark / fog-700 light)를 사용합니다. "Primary는 1-2개 핵심 액션에만" 원칙을 따릅니다.

### 11.4 Shadow 축소 (4단계 → 3단계)

Solid Surface 컨셉에서 계층 표현의 우선순위는 "spacing → border weight → tone shift → minimal shadow"입니다. Shadow는 최후 수단이므로 단계를 줄이고 opacity를 낮췄습니다.

### 11.5 Transition 속도

- colors: 150ms
- transform: 200ms

모든 모션은 짧고 의미 있게. 150-250ms 범위를 유지합니다.

### 11.6 Dark mode를 기본으로 유지

음악 스트리밍 분석 서비스의 특성상 dark mode가 기본입니다:
- 장시간 사용 시 눈의 피로 감소
- 차트/그래프의 색상이 어두운 배경에서 더 돋보임
- Oxidized Cyan이 어두운 배경에서 더 선명하고 밝게 표현됨
- 음악 앱의 관례 (Spotify, Apple Music 등)

---

## 13. Review Checklist

- [ ] 화면을 Type A/B/C로 분류했는가?
- [ ] 장식이 고밀도 콘텐츠를 침범하지 않는가?
- [ ] Primary는 focus/selection/action에만 사용되는가?
- [ ] Secondary는 surfaces/structure에 사용되는가?
- [ ] Surface level이 3단계 모델을 지키는가?
- [ ] Motion은 non-looping이고 non-distracting인가?
- [ ] Label bar/indexing/linework가 시스템으로서 일관되게 반복되는가?
- [ ] 색상에만 의존하지 않고 shape/weight도 함께 사용하는가?
