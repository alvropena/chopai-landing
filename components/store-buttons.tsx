"use client"

import { useTheme } from "next-themes"
import Image from "next/image"

export function AppStoreButton() {
  const { theme } = useTheme()
  
  return (
    <a 
      href="https://apps.apple.com/your-app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity"
    >
      <Image
        src={theme === "dark" ? "/download-apple-dark.svg" : "/download-apple-light.svg"}
        alt="Download on the App Store"
        width={240}
        height={80}
        priority
      />
    </a>
  )
}

export function PlayStoreButton() {
  const { theme } = useTheme()
  
  return (
    <a 
      href="https://play.google.com/store/apps/your-app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity"
    >
      <Image
        src={theme === "dark" ? "/download-google-dark.svg" : "/download-google-light.svg"}
        alt="Get it on Google Play"
        width={240}
        height={80}
        priority
      />
    </a>
  )
}