"use client";

import { AppStoreButton } from "@/components/store-buttons";
import { PlayStoreButton } from "@/components/store-buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon, BrainIcon, UsersIcon, TrophyIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
      {/* Left Column */}
      <div className="space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-nav leading-tight">
          Learn anything one card at a time
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground">
          Chop is an AI-powered app that helps you learn any topic one card at
          a time. Join a community and begin learning.
        </p>
        <div className="flex items-center gap-2 text-base md:text-lg text-muted-foreground mt-2">
          <span className="h-3 w-3 bg-green-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_12px_rgba(74,222,128,0.6)]"></span>
          <span className="font-semibold text-nav">100+</span> people learning right now
        </div>
        <div className="flex gap-4 mt-8">
          <AppStoreButton />
          <PlayStoreButton />
        </div>
      </div>

      {/* Right Column */}
      <div className="flex justify-end">
        <Image
          src="/demo.gif"
          alt="App Demo"
          width={500}
          height={994}
          priority
          className="rounded-2xl border border-gray-200"
        />
      </div>
    </div>
  );
};

const WhySection = () => {
  return (
    <div className="py-20">
      <h2 className="text-4xl font-bold text-center text-nav mb-16">Why Chop?</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {/* AI-Powered Learning */}
        <div className="text-center space-y-4 px-8">
          <div className="flex justify-center">
            <BrainIcon className="h-16 w-16 text-[#F04438]" />
          </div>
          <h3 className="text-xl font-semibold text-nav">Artificial Intelligence</h3>
          <p className="text-muted-foreground">
            AI creates perfect study cards for any topic you want to learn.
          </p>
        </div>

        {/* Community */}
        <div className="text-center space-y-4 px-8">
          <div className="flex justify-center">
            <UsersIcon className="h-16 w-16 text-[#16B364]" />
          </div>
          <h3 className="text-xl font-semibold text-nav">Community</h3>
          <p className="text-muted-foreground">
            Join others who share your interests and learn with the community.
          </p>
        </div>

        {/* Easy to Use */}
        <div className="text-center space-y-4 px-8">
          <div className="flex justify-center">
            <TrophyIcon className="h-16 w-16 text-[#FEC84B]" />
          </div>
          <h3 className="text-xl font-semibold text-nav">Gamification</h3>
          <p className="text-muted-foreground">
            Gamify your learning. Earn points and climb the leaderboard.
          </p>
        </div>
      </div>
    </div>
  );
};

const CredibilitySection = () => {
  return (
    <div className="text-center py-20">
      <div className="space-y-2">
        <p className="text-xl md:text-2xl text-muted-foreground">
          Used by
        </p>
        <p className="text-3xl md:text-4xl font-semibold text-nav">
          2.5M persons 🌎
        </p>
      </div>
    </div>
  );
};

const CTASection = () => {
  return (
    <Card className="mt-12 py-6 text-center bg-primary/10">
      <CardHeader>
        <CardTitle className="text-4xl md:text-5xl">Try Chop today!</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-lg text-muted-foreground">
          Start learning smarter, one card at a time
        </p>
        <div className="flex justify-center gap-4">
          <Button>
            <DownloadIcon className="mr-2 h-4 w-4" />
            <span className="font-bold">Download</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <HeroSection />
      <WhySection />
      <CTASection />
    </div>
  );
}
