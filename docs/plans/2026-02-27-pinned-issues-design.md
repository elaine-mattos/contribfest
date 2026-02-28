# Pinned Issues Cards — Design

**Date:** 2026-02-27
**Branch:** topic/pinned-issues

## Overview

Add three pinned issue cards above the filters on the Issues page. Each card links to its GitHub issue and displays the title, issue number, repository, and level. Cards use the same visual style as existing cards in the project.

## Data

- `lib/pinned-issues.ts` — typed array of 3 pinned issue objects
- Fields: `issueId`, `repository`, `level`, `title`
- Issue numbers: 7868, 2458, 7869 (title/repo/level to be filled in)

## Layout

- 3-column CSS grid (`repeat(3, 1fr)`) rendered above the filters in `IssueTable`
- Responsive: collapses gracefully on smaller screens

## Card Style

Matches `SessionCard` / `WelcomeCard`:
- `background: var(--bui-bg-popover, #fff)`
- `border: 1px solid var(--bui-border-1, #d5d5d5)`
- `borderRadius: 8px`, `padding: 16px`
- Hover: blue border (`var(--bui-bg-solid, #1f5493)`) + `box-shadow: 0 2px 8px rgba(0,0,0,0.1)`

## Card Content

- **Title** — bold, primary color, links to GitHub issue
- **Level badge** — reuses `getLevelBadgeColor` helper
- **Issue number** — `#XXXX` link to `https://github.com/{repository}/issues/{issueId}`
- **Repository** — small `<code>` text

## Files Changed

- `lib/pinned-issues.ts` — new file
- `components/IssueTable.tsx` — import pinned issues, render cards above filters
