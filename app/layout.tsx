import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";

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
      <body className="antialiased min-h-screen flex flex-col">
        <header className="flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-4 border-b gap-4 md:gap-0">
          <div className="flex items-center">
            {/* Logo */}
            <Link href="/" className="text-xl font-bold">
              Logo
            </Link>
          </div>

          {/* Navigation Menu */}
          <nav className="flex gap-4 md:gap-8">
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

          {/* Download Button */}
          <Button className="w-full md:w-auto">
            Download
          </Button>
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
              <Link href="/support" className="text-sm hover:text-gray-600">
                Contact Support
              </Link>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}
