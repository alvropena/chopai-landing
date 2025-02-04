"use client"

import Image from "next/image"

export function AppStoreButton() {
  return (
    <a 
      href="https://apps.apple.com/your-app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity"
    >
      <Image
        src="/download-apple-dark.svg"
        alt="Download on the App Store"
        width={240}
        height={80}
        priority
      />
    </a>
  )
}

export function PlayStoreButton() {
  return (
    <a 
      href="https://play.google.com/store/apps/your-app" 
      target="_blank" 
      rel="noopener noreferrer"
      className="hover:opacity-90 transition-opacity"
    >
      <Image
        src="/download-google-dark.svg"
        alt="Get it on Google Play"
        width={240}
        height={80}
        priority
      />
    </a>
  )
}