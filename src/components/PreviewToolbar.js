"use client"
import Link from "next/link"
import { usePathname } from "next/navigation"

const DraftToolbar = ({ enabled }) => {
  const pathname = usePathname()

  if (!enabled) return null

  return (
    <div>
      <h1>Draft Mode</h1>
      <Link prefetch={false} href={`/api/exit-draft?pathname=${pathname}`}>
        Exit Preview
      </Link>
    </div>
  )
}

export default DraftToolbar
