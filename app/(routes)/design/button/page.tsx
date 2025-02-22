"use client";
import { Button } from "@/components/ui/button";

const ButtonSection = () => {
    return (
      <div className="space-y-8">
        <h1 className="text-3xl font-bold text-nav">Button</h1>
        <div className="space-y-12">
          <div className="space-y-4">
            <h3 className="text-lg text-gray-500">Enabled</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Button>Check Answer</Button>
              <Button variant="secondary">Sign up</Button>
              <Button variant="outline">
                <img src="/google.svg" alt="Google" className="w-4 h-4" />
                Sign up with Google
              </Button>
              <Button variant="ghost">Login</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-lg text-gray-500">Hover/pressed</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Button className="hover:bg-primary/90">Check Answer</Button>
              <Button variant="secondary" className="hover:bg-secondary/80">Sign up</Button>
              <Button variant="outline" className="hover:bg-accent">
                <img src="/google.svg" alt="Google" className="w-4 h-4" />
                Sign up with Google
              </Button>
              <Button variant="ghost" className="hover:bg-accent">Login</Button>
              <Button variant="destructive" className="hover:bg-destructive/90">Destructive</Button>
            </div>
          </div>
  
          <div className="space-y-4">
            <h3 className="text-lg text-gray-500">Disabled</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
              <Button disabled>Check Answer</Button>
              <Button variant="secondary" disabled>Sign up</Button>
              <Button variant="outline" disabled>
                <img src="/google.svg" alt="Google" className="w-4 h-4" />
                Sign up with Google
              </Button>
              <Button variant="ghost" disabled>Login</Button>
              <Button variant="destructive" disabled>Destructive</Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

export default function ButtonPage() {
  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <ButtonSection />
    </div>
  );
}