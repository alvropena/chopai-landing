import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from 'next/font/local';
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

const ambit = localFont({
  src: [
    {
      path: '../public/fonts/Ambit-Regular.otf',
      weight: '400',
      style: 'normal',
    },
    {
      path: '../public/fonts/Ambit-Bold.otf',
      weight: '700',
      style: 'normal',
    },
  ],
  variable: '--font-ambit',
});

export const metadata: Metadata = {
  title: "Chop AI",
  description: "Chop AI",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ambit.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b">
          <div className="flex items-center">
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Desktop Navigation - Hidden on Mobile */}
          <nav className="hidden md:flex gap-8">
            <Link href="/about" className="hover:text-gray-600">
              About
            </Link>
            <Link href="/blog" className="hover:text-gray-600">
              Blog
            </Link>
            <Link href="/careers" className="hover:text-gray-600">
              Careers
            </Link>
            <Button>
              Download
            </Button>
          </nav>

          {/* Mobile Navigation - Sheet/Sidebar */}
          <Sheet>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <div className="flex flex-col gap-4 mt-8">
                <Link href="/about" className="text-lg hover:text-gray-600">
                  About
                </Link>
                <Link href="/blog" className="text-lg hover:text-gray-600">
                  Blog
                </Link>
                <Link href="/careers" className="text-lg hover:text-gray-600">
                  Careers
                </Link>
                <Button className="w-full mt-4">
                  Download
                </Button>
              </div>
            </SheetContent>
          </Sheet>
        </header>

        <main className="flex-grow">
          {children}
        </main>

        <footer className="border-t px-4 md:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 md:gap-0">
            <div className="flex items-center gap-2">
              <span className="text-sm text-center md:text-left">© {new Date().getFullYear()} Made by Optiffy</span>
            </div>
            <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center">
              <Link href="/tos" className="text-sm hover:text-gray-600">
                Terms of Service
              </Link>
              <Link href="/privacy" className="text-sm hover:text-gray-600">
                Privacy Policy
              </Link>
              <a href="mailto:me@alvropena.com" className="text-sm hover:text-gray-600">
                Contact Support
              </a>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
