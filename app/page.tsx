"use client";

import { AppStoreButton } from "@/components/store-buttons";
import { PlayStoreButton } from "@/components/store-buttons";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="container mx-auto px-8 py-8 md:py-12 flex flex-col gap-12 md:max-w-[1400px]">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[80vh]">
        {/* Left Column */}
        <div className="space-y-6">
          <h1 className="text-5xl md:text-6xl font-bold text-nav">
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

      {/* CTA Section */}
      <Card className="text-center bg-primary/10 w-full max-w-2xl md:max-w-full mx-auto">
        <CardHeader>
          <CardTitle className="text-3xl">Try Chop AI today</CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <p className="text-muted-foreground">
            Start learning smarter, one card at a time
          </p>
          <div className="flex justify-center gap-4">
            <Button>
              <span className="font-bold">Download</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
