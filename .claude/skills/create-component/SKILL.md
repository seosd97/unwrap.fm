---
name: create-component
description: Create a new React component following project conventions. Use when creating components, UI elements, or reusable modules.
---

# Create Component

## Instructions

When creating a new component:

1. **Create folder structure** using kebab-case naming:
   ```
   src/components/[component-name]/
   ├── index.tsx
   └── [component-name].types.ts  # if types needed
   ```

2. **Component template**:
   ```tsx
   export function ComponentName() {
     return (
       <div>
         {/* content */}
       </div>
     )
   }
   ```

3. **With types**:
   ```tsx
   // index.tsx
   import type { ComponentNameProps } from './component-name.types'

   export function ComponentName({ prop }: ComponentNameProps) {
     return <div>{prop}</div>
   }
   ```

   ```tsx
   // component-name.types.ts
   export interface ComponentNameProps {
     prop: string
   }
   ```

## Naming Rules

| Type | Convention | Example |
|------|------------|---------|
| Folder | kebab-case | `user-avatar/` |
| Component | PascalCase | `UserAvatar` |
| Types file | kebab-case | `user-avatar.types.ts` |

## Example

Creating `user-profile` component:

```bash
mkdir -p src/components/user-profile
```

```tsx
// src/components/user-profile/index.tsx
export function UserProfile() {
  return (
    <div className="user-profile">
      <h2>User Profile</h2>
    </div>
  )
}
```
