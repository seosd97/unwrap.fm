---
name: create-route
description: Create a new route following project conventions. Use when adding pages, routes, or navigation endpoints.
---

# Create Route (Simple FSD + React Router v7)

## Architecture

In FSD with React Router v7:

- **`src/routes.ts`** — Route configuration (connects paths to page files)
- **`src/pages/`** — Page composition layer (features assembly)
- Page files are **RR7 route modules** with `default export`

## Step 1: Create the Page (pages layer)

```
src/pages/{page-name}/
├── ui/
│   └── {page-name}-page.tsx    # RR7 route module (default export)
├── {page-name}.css.ts           # Page styles (optional)
└── index.ts                     # Public API
```

```tsx
// pages/dashboard/ui/dashboard-page.tsx
import { StatsOverview } from "@/features/stats";
import { TopArtistsList } from "@/features/artist";

export default function DashboardPage() {
  return (
    <>
      <StatsOverview />
      <TopArtistsList />
    </>
  );
}
```

```typescript
// pages/dashboard/index.ts
export { default as DashboardPage } from "./ui/dashboard-page";
```

## Step 2: Register the Route (routes.ts)

```typescript
// src/routes.ts
import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("pages/home/ui/home-page.tsx"),
  route("dashboard", "pages/dashboard/ui/dashboard-page.tsx"),
] satisfies RouteConfig;
```

## With Data Loading (loader)

```tsx
// pages/dashboard/ui/dashboard-page.tsx
import type { Route } from "./+types.dashboard-page";

export async function loader({ request, context }: Route.LoaderArgs) {
  // SSR data loading
  return { stats: await fetchStats() };
}

export default function DashboardPage({ loaderData }: Route.ComponentProps) {
  return <div>{loaderData.stats}</div>;
}
```

## With SEO Meta

```tsx
// pages/dashboard/ui/dashboard-page.tsx
import type { Route } from "./+types.dashboard-page";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Dashboard - unwrap.fm" },
    { name: "description", content: "Your music listening analytics" },
  ];
}

export default function DashboardPage() {
  return <div>Dashboard</div>;
}
```

## Nested Routes

```typescript
// src/routes.ts
import { index, type RouteConfig, route } from "@react-router/dev/routes";

export default [
  index("pages/home/ui/home-page.tsx"),
  route("settings", "pages/settings/ui/settings-page.tsx", [
    index("pages/settings-general/ui/settings-general-page.tsx"),
    route("profile", "pages/settings-profile/ui/settings-profile-page.tsx"),
  ]),
] satisfies RouteConfig;
```

## Rules

- Page files use **`export default`** (RR7 route module convention)
- loader/action/meta are **named exports** in the same page file
- Business logic belongs in features, NOT in routes.ts or pages
- Always define `meta()` for SEO per route
- `index.ts` re-exports as named export: `export { default as PageName } from "./ui/page-file"`
