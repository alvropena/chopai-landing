"use client";

import Image from "next/image";
import Link from "next/link";
import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip";

export function AppStoreButton() {
	return (
		<Link
			href="https://apps.apple.com/us/app/chop-ai/id6739903784"
			target="_blank"
			rel="noopener noreferrer"
			className="hover:opacity-90 transition-opacity"
		>
			<Image
				src="/download-apple-dark.svg"
				alt="Download on the App Store"
				width={240}
				height={80}
				priority
			/>
		</Link>
	);
}

export function PlayStoreButton() {
	return (
		<TooltipProvider>
			<Tooltip>
				<TooltipTrigger asChild>
					<div className="opacity-50">
						<Image
							src="/download-google-dark.svg"
							alt="Coming soon to Google Play"
							width={240}
							height={80}
							priority
						/>
					</div>
				</TooltipTrigger>
				<TooltipContent>
					<p>Soon!</p>
				</TooltipContent>
			</Tooltip>
		</TooltipProvider>
	);
}
