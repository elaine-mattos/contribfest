import { Suspense } from 'react'
import IssuesPageContent from './IssuesPageContent'

export default function IssuesPage() {
  return (
    <Suspense>
      <IssuesPageContent />
    </Suspense>
  )
}
