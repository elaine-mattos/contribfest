import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hall of Hosts',
}

export default function HallOfHostsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
