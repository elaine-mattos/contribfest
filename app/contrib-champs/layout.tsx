import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Contrib Champs',
}

export default function ContribChampsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return <>{children}</>
}
