"use client"

import { useTheme } from "next-themes"
import Link from "next/link"

export function Logo() {
  const { theme } = useTheme()

  return (
    <Link href="/" className="hover:opacity-90 transition-opacity">
      <img
        src={theme === "dark" ? "/chop-logo-dark.svg" : "/chop-logo.svg"}
        alt="Chop"
        className="h-7"
      />
    </Link>
  )
}