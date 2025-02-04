"use client"

import Link from "next/link"
import Image from "next/image"

export function Logo() {
  return (
    <Link href="/" className="hover:opacity-90 transition-opacity">
      <Image
        src="/chop-logo-dark.svg"
        alt="Chop"
        width={112}
        height={112}
        priority
      />
    </Link>
  )
}