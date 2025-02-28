"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ShareIcon, Check } from "lucide-react";

export function ShareButton() {
	const [copied, setCopied] = useState(false);

	const handleShare = () => {
		navigator.clipboard.writeText(window.location.href);
		setCopied(true);
		setTimeout(() => setCopied(false), 2000);
	};

	return (
		<Button variant="ghost" size="sm" className="gap-2" onClick={handleShare}>
			{copied ? (
				<Check className="h-4 w-4" />
			) : (
				<ShareIcon className="h-4 w-4" />
			)}
			{copied ? "Copied!" : "Share"}
		</Button>
	);
}
