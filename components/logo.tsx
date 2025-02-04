"use client"

import { useTheme } from "next-themes"
import Link from "next/link"
import Image from "next/image"

export function Logo() {
  const { theme } = useTheme()

  return (
    <Link href="/" className="hover:opacity-90 transition-opacity">
      <Image
        src={theme === "dark" ? "/chop-logo-dark.svg" : "/chop-logo.svg"}
        alt="Chop"
        width={128}
        height={128}
        priority
      />
    </Link>
  )
}