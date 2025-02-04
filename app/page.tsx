'use client'

import { useTheme } from 'next-themes';
import Image from 'next/image';

export default function Home() {
  const { resolvedTheme } = useTheme();
  
  return (
    <div className="container mx-auto px-4 py-12 min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold">
            Learn anything one card at a time
          </h1>
          <p className="text-lg text-gray-600">
            Chop is an AI-powered app that helps you learn any topic one card at a time. Join a community and begin learning.
          </p>
          <div className="flex gap-4">
            <Image 
              src={`/download-google-${resolvedTheme === 'dark' ? 'dark' : 'light'}.svg`}
              alt="Download on Google Play"
              width={240}
              height={80}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
            <Image 
              src={`/download-apple-${resolvedTheme === 'dark' ? 'dark' : 'light'}.svg`}
              alt="Download on App Store"
              width={240}
              height={80}
              className="cursor-pointer hover:opacity-80 transition-opacity"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <Image
            src="/hero-image.jpg"
            alt="Hero Image"
            width={500}
            height={500}
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
}
