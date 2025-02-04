'use client'

import { AppStoreButton } from '@/components/store-buttons';
import { PlayStoreButton } from '@/components/store-buttons';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="container mx-auto px-4 min-h-[80vh] flex items-center">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-nav">
            Learn anything one card at a time
          </h1>
          <p className="text-lg text-muted-foreground">
            Chop is an AI-powered app that helps you learn any topic one card at a time. Join a community and begin learning.
          </p>
          <div className="flex gap-4">
            <AppStoreButton />
            <PlayStoreButton />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex justify-center">
          <Image
            src="/demo.gif"
            alt="App Demo"
            width={440}
            height={875}
            priority
            className="rounded-2xl border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
}
