import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from 'next/font/local';
import { Menu, Moon, Sun } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { TwitterLogoIcon, GitHubLogoIcon, VideoIcon } from "@radix-ui/react-icons";
import { ThemeProvider } from "@/components/theme-provider";
import { useTheme } from "next-themes";
import { ModeToggle } from "@/components/mode-toggle"

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
    <html lang="en" suppressHydrationWarning>
      <head />
      <body className={`${ambit.variable} font-sans antialiased min-h-screen flex flex-col`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <header className="flex items-center justify-between px-4 md:px-8 py-4 border-b">
            <div className="flex items-center">
              <Link href="/" className="text-xl font-bold">
                Chop
              </Link>
            </div>

            {/* Desktop Navigation - Hidden on Mobile */}
            <div className="hidden md:flex items-center justify-between flex-grow">
              <div className="flex-1">
                {/* Empty div for spacing */}
              </div>
              
              <nav className="flex gap-8">
                <Link href="/about" className="hover:text-gray-600">
                  About
                </Link>
                <Link href="/blog" className="hover:text-gray-600">
                  Blog
                </Link>
                <Link href="/careers" className="hover:text-gray-600">
                  Careers
                </Link>
              </nav>
              
              <div className="flex-1 flex justify-end gap-4">
                <ModeToggle />
                <Button>
                  <span className="font-bold">Download</span>
                </Button>
              </div>
            </div>

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
                  <ModeToggle />
                  <Button className="w-full">
                    <span className="font-bold">Download</span>
                  </Button>
                </div>
              </SheetContent>
            </Sheet>
          </header>

          <main className="flex-grow">
            {children}
          </main>

          <footer className="border-t px-4 md:px-8 py-6">
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
              <span className="text-sm">© {new Date().getFullYear()} Made by Optiffy LLC</span>
              
              <div className="flex gap-2 items-center">
                <Link href="/tos" className="text-sm hover:text-gray-600">
                  Terms of Service
                </Link>
                <span className="text-sm text-gray-400">•</span>
                <Link href="/privacy" className="text-sm hover:text-gray-600">
                  Privacy Policy
                </Link>
                <span className="text-sm text-gray-400">•</span>
                <a href="mailto:me@alvropena.com" className="text-sm hover:text-gray-600">
                  Support
                </a>
              </div>

              <div className="flex gap-6">
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <TwitterLogoIcon className="h-5 w-5" />
                </a>
                <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <GitHubLogoIcon className="h-5 w-5" />
                </a>
                <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-gray-600">
                  <VideoIcon className="h-5 w-5" />
                </a>
              </div>
            </div>
          </footer>
        </ThemeProvider>
      </body>
    </html>
  );
}
