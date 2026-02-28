# Pinned Issues Cards Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** Add three static pinned issue cards above the filters on the Issues page, each linking to its GitHub issue.

**Architecture:** Create `lib/pinned-issues.ts` to hold the static data array, then import it into `IssueTable.tsx` and render a 3-column card grid above the existing filters section. Cards reuse the existing inline-CSS style patterns from `SessionCard`/`WelcomeCard`.

**Tech Stack:** Next.js 16, React 19, TypeScript, inline CSS styles, Yarn 4

---

### Task 1: Create pinned issues data file

**Files:**
- Create: `lib/pinned-issues.ts`

**Step 1: Create the file with placeholder data**

```ts
export interface PinnedIssue {
  issueId: number
  repository: string
  level: string
  title: string
}

export const PINNED_ISSUES: PinnedIssue[] = [
  {
    issueId: 7868,
    repository: 'backstage/backstage',
    level: 'Beginner',
    title: 'TBD',
  },
  {
    issueId: 2458,
    repository: 'backstage/community-plugins',
    level: 'Beginner',
    title: 'TBD',
  },
  {
    issueId: 7869,
    repository: 'backstage/backstage',
    level: 'Beginner',
    title: 'TBD',
  },
]
```

> Note: `repository`, `level`, and `title` values are placeholders — the user will supply correct values.

**Step 2: Verify TypeScript compiles**

Run: `yarn build 2>&1 | head -30`
Expected: No type errors for the new file.

**Step 3: Commit**

```bash
git add lib/pinned-issues.ts
git commit -m "feat: add pinned issues data"
```

---

### Task 2: Render pinned issue cards in IssueTable

**Files:**
- Modify: `components/IssueTable.tsx`

**Step 1: Import PINNED_ISSUES at the top of IssueTable.tsx**

Add after the existing imports (around line 12):

```ts
import { PINNED_ISSUES } from '@/lib/pinned-issues'
```

**Step 2: Add the card grid above the filters section**

In the `return (...)` of `IssueTable`, add the following block directly before the `{/* Filters */}` comment (before line 116):

```tsx
{/* Pinned Issue Cards */}
<div
  style={{
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '16px',
    marginBottom: '24px',
  }}
>
  {PINNED_ISSUES.map((issue) => {
    const githubUrl = `https://github.com/${issue.repository}/issues/${issue.issueId}`
    const badgeColor = getLevelBadgeColor(issue.level)
    return (
      <a
        key={issue.issueId}
        href={githubUrl}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'block',
          background: 'var(--bui-bg-popover, #fff)',
          border: '1px solid var(--bui-border-1, #d5d5d5)',
          borderRadius: '8px',
          padding: '16px',
          textDecoration: 'none',
          transition: 'all 0.2s',
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.borderColor = 'var(--bui-bg-solid, #1f5493)'
          e.currentTarget.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.1)'
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.borderColor = 'var(--bui-border-1, #d5d5d5)'
          e.currentTarget.style.boxShadow = 'none'
        }}
      >
        <div
          style={{
            fontSize: '15px',
            fontWeight: 700,
            color: 'var(--bui-fg-primary, #000)',
            marginBottom: '12px',
            lineHeight: '1.4',
          }}
        >
          {issue.title}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '8px' }}>
          <span
            style={{
              padding: '4px 8px',
              borderRadius: '4px',
              fontSize: '12px',
              fontWeight: 500,
              ...badgeColor,
            }}
          >
            {issue.level}
          </span>
          <span
            style={{
              fontSize: '14px',
              fontWeight: 500,
              color: 'var(--bui-bg-solid, #1f5493)',
            }}
          >
            #{issue.issueId}
          </span>
        </div>
        <code style={{ fontSize: '12px', color: 'var(--bui-fg-secondary, #666)' }}>
          {issue.repository}
        </code>
      </a>
    )
  })}
</div>
```

**Step 3: Verify the page renders correctly**

Open http://localhost:3000/issues?admin=true in a browser.
Expected: Three cards appear above the filters, each showing the title, level badge, issue number, and repository. Clicking a card opens the GitHub issue in a new tab.

**Step 4: Commit**

```bash
git add components/IssueTable.tsx
git commit -m "feat: render pinned issue cards above filters"
```

---

### Task 3: Fill in real pinned issue data (user-supplied)

The user will provide the correct `title`, `repository`, and `level` for each of the three issues. Update `lib/pinned-issues.ts` with the real values and commit:

```bash
git add lib/pinned-issues.ts
git commit -m "feat: update pinned issues with real data"
```
