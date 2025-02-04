"use client";

import { AppStoreButton } from "@/components/store-buttons";
import { PlayStoreButton } from "@/components/store-buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { DownloadIcon } from "lucide-react";

const HeroSection = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
      {/* Left Column */}
      <div className="space-y-8">
        <h1 className="text-4xl md:text-5xl font-bold text-nav">
          Learn anything one card at a time
        </h1>
        <p className="text-lg text-muted-foreground">
          Chop is an AI-powered app that helps you learn any topic one card at
          a time. Join a community and begin learning.
        </p>
        <div className="flex gap-4">
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
      <CTASection />
    </div>
  );
}
