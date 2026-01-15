---
name: code-review
description: Review code and PRs. Use when reviewing pull requests, code changes, or providing feedback.
---

# Code Review

## Checklist

- [ ] Follows project conventions
- [ ] No TypeScript errors
- [ ] No unused imports/variables
- [ ] Proper error handling
- [ ] No hardcoded values (use constants/env)
- [ ] Components are reusable
- [ ] No security issues (XSS, injection, etc.)

## Review Format

```markdown
## Summary
Brief overview of changes.

## Feedback
- **Issue**: Description
  - Suggestion: How to fix

## Approval
- [ ] Approved
- [ ] Request changes
```

## Priority Labels

| Label | Meaning |
|-------|---------|
| 🔴 Critical | Must fix before merge |
| 🟡 Suggestion | Nice to have |
| 🟢 Nitpick | Minor style issue |
