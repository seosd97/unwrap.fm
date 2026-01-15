---
name: create-route
description: Create a new route following project conventions. Use when adding pages, routes, or navigation endpoints.
---

# Create Route

## Instructions

When creating a new route:

1. **Create folder structure**:
   ```
   src/routes/[route-name]/
   └── index.tsx
   ```

2. **Route template** (TanStack Router):
   ```tsx
   import { createFileRoute } from '@tanstack/react-router'

   export const Route = createFileRoute('/route-name')({
     component: RouteName,
   })

   function RouteName() {
     return (
       <div>
         <h1>Route Name</h1>
       </div>
     )
   }
   ```

## Nested Routes

```
src/routes/
├── settings/
│   ├── index.tsx           # /settings
│   └── profile/
│       └── index.tsx       # /settings/profile
```

```tsx
// src/routes/settings/profile/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/settings/profile')({
  component: SettingsProfile,
})

function SettingsProfile() {
  return <div>Profile Settings</div>
}
```

## With Data Loading

```tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/users')({
  loader: async () => {
    // fetch data
    return { users: [] }
  },
  component: Users,
})

function Users() {
  const { users } = Route.useLoaderData()
  return <div>{/* render users */}</div>
}
```

## Example

Creating `/dashboard` route:

```bash
mkdir -p src/routes/dashboard
```

```tsx
// src/routes/dashboard/index.tsx
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/dashboard')({
  component: Dashboard,
})

function Dashboard() {
  return (
    <div>
      <h1>Dashboard</h1>
    </div>
  )
}
```
