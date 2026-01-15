---
name: conventions
description: Apply project file/folder naming conventions. Use when creating components, routes, types, server functions, or test files.
---

# Project Conventions

## Comments Policy

- **Avoid comments** unless absolutely necessary
- Code should be self-documenting through clear naming
- Only add comments for:
  - Complex business logic that isn't obvious
  - Workarounds with links to issues
  - Public API documentation (if needed)

## File & Folder Structure

### Routes
Routes use folder-based structure:

```
src/routes/
├── index.tsx                    # /
├── account/
│   └── index.tsx                # /account
├── settings/
│   ├── index.tsx                # /settings
│   └── profile/
│       └── index.tsx            # /settings/profile
```

### Components
Components use **kebab-case** folder + `index.tsx`:

```
src/components/
├── header/
│   └── index.tsx
├── user-avatar/
│   └── index.tsx
├── nav-menu/
│   ├── index.tsx
│   └── nav-menu.types.ts
```

### Types
- Shared types: `src/types/` folder
- Component-specific types: `[name].types.ts` next to component

```
src/types/
├── user.ts
├── api.ts
└── index.ts

src/components/user-card/
├── index.tsx
└── user-card.types.ts
```

### Server Functions & API
```
src/
├── api/
│   └── users.ts
├── server/
│   └── auth.ts
```

### Tests
Use `__tests__/` folder or `.test.ts` suffix:

```
src/components/header/
├── index.tsx
├── __tests__/
│   └── header.test.tsx
# OR
├── header.test.tsx
```

## Import Order

1. External packages (react, @tanstack/*, etc.)
2. Internal modules (@/*, relative imports)
3. Types (type imports)

```tsx
import { useState } from 'react'
import { createFileRoute } from '@tanstack/react-router'

import { Header } from '@/components/header'
import { useAuth } from '@/hooks/use-auth'

import type { User } from '@/types'
```
