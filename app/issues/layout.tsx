import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Curated Issues',
}

export default function IssuesLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
