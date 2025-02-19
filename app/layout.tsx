import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import localFont from "next/font/local";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import {
	TwitterLogoIcon,
	GitHubLogoIcon,
	VideoIcon,
	DownloadIcon,
} from "@radix-ui/react-icons";
import { ThemeProvider } from "@/components/theme-provider";
import { Logo } from "@/components/logo";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

const ambit = localFont({
	src: [
		{
			path: "../public/fonts/Ambit-Regular.otf",
			weight: "400",
			style: "normal",
		},
		{
			path: "../public/fonts/Ambit-Bold.otf",
			weight: "700",
			style: "normal",
		},
	],
	variable: "--font-ambit",
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
		<html lang="en" suppressHydrationWarning className="dark">
			<head />
			<body
				className={`${ambit.variable} font-sans antialiased min-h-screen flex flex-col`}
			>
				<ThemeProvider
					attribute="class"
					defaultTheme="dark"
					enableSystem={false}
					forcedTheme="dark"
					disableTransitionOnChange
				>
					<header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-8 py-4 border-b bg-background">
						<div className="flex items-center">
							<Logo />
						</div>

						{/* Desktop Navigation - Hidden on Mobile */}
						<div className="hidden md:flex items-center justify-between flex-grow">
							<div className="flex-1">{/* Empty div for spacing */}</div>

							<div className="flex items-center gap-4">
								<Link
									href="/blog"
									className="text-nav hover:text-primary transition-colors"
								>
									Blog
								</Link>
								<Link
									href="/careers"
									className="text-nav hover:text-primary transition-colors"
								>
									Careers
								</Link>
								<Button>
									<DownloadIcon className="h-4 w-4" />
									<span className="font-bold">Download</span>
								</Button>
							</div>
						</div>

						{/* Mobile Navigation */}
						<div className="flex items-center gap-2 md:hidden">
							<Sheet>
								<SheetTrigger asChild>
									<Menu className="h-6 w-6" />
								</SheetTrigger>
								<SheetContent>
									<div className="flex flex-col gap-4 mt-8 w-full">
										<Link
											href="/blog"
											className="text-lg text-nav hover:text-primary transition-colors w-full text-center"
										>
											Blog
										</Link>
										<Link
											href="/careers"
											className="text-lg text-nav hover:text-primary transition-colors w-full text-center"
										>
											Careers
										</Link>
										<Button className="w-full">
											<DownloadIcon className="h-4 w-4" />
											Download
										</Button>
									</div>
								</SheetContent>
							</Sheet>
						</div>
					</header>

					<main className="flex-grow mt-[73px]">{children}</main>

					<footer className="border-t px-4 md:px-8 py-6">
						<div className="flex flex-col md:flex-row items-center gap-4 md:gap-0 md:justify-between">
							<span className="text-sm text-nav">
								© {new Date().getFullYear()} Made by Optiffy LLC
							</span>

							<div className="flex gap-2 items-center">
								<Link
									href="/tos"
									className="text-sm text-nav hover:text-primary transition-colors"
								>
									Terms of Service
								</Link>
								<span className="text-sm text-gray-400">•</span>
								<Link
									href="/privacy"
									className="text-sm text-nav hover:text-primary transition-colors"
								>
									Privacy Policy
								</Link>
								<span className="text-sm text-gray-400">•</span>
								<Link
									href="/support"
									className="text-sm text-nav hover:text-primary transition-colors"
								>
									Support
								</Link>
							</div>

							<div className="flex gap-6">
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<a
												href="chopdotso"
												className="text-nav hover:text-primary transition-colors"
											>
												<TwitterLogoIcon className="h-5 w-5" />
											</a>
										</TooltipTrigger>
										<TooltipContent>
											<p>Soon!</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
								<a
									href="https://github.com/alvropena/chopai-landing"
									target="_blank"
									rel="noopener noreferrer"
									className="text-nav hover:text-primary transition-colors"
								>
									<GitHubLogoIcon className="h-5 w-5" />
								</a>
								<TooltipProvider>
									<Tooltip>
										<TooltipTrigger asChild>
											<a
												href="chopdotso"
												className="text-nav hover:text-primary transition-colors"
											>
												<VideoIcon className="h-5 w-5" />
											</a>
										</TooltipTrigger>
										<TooltipContent>
											<p>Soon!</p>
										</TooltipContent>
									</Tooltip>
								</TooltipProvider>
							</div>
						</div>
					</footer>
				</ThemeProvider>
			</body>
		</html>
	);
}
