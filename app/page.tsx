"use client";

import { AppStoreButton } from "@/components/store-buttons";
import { PlayStoreButton } from "@/components/store-buttons";
import {
	Card,
	CardContent,
	CardHeader,
	CardTitle,
	CardDescription,
	CardFooter,
} from "@/components/ui/card";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
	DownloadIcon,
	BrainIcon,
	UsersIcon,
	TrophyIcon,
	ArrowDownIcon,
	CheckIcon,
} from "lucide-react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

const HeroSection = () => {
	return (
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center min-h-[calc(100vh-8rem)]">
			{/* Left Column */}
			<div className="space-y-6">
				<h1 className="text-5xl md:text-6xl font-bold text-nav leading-tight">
					Learn anything one card at a time
				</h1>
				<p className="text-xl md:text-2xl text-muted-foreground">
					Chop is an AI-powered app that helps you learn any topic one card at a
					time. Join a community and begin learning.
				</p>
				<div className="flex items-center gap-2 text-base md:text-lg text-muted-foreground mt-2">
					<span className="h-3 w-3 bg-green-400 rounded-full animate-[pulse_1.5s_ease-in-out_infinite] shadow-[0_0_12px_rgba(74,222,128,0.6)]" />
					<span className="font-semibold text-nav">100+</span> people learning
					right now
				</div>
				<div className="flex gap-4 mt-8">
					<AppStoreButton />
					<PlayStoreButton />
				</div>
			</div>

			{/* Right Column */}
			<div className="flex justify-center relative">
				<div className="relative w-full max-w-[500px] aspect-[5/11] rounded-[2.5rem] overflow-hidden border-2 border-primary/20 shadow-lg">
					<Image
						src="/chop-demo.gif"
						alt="App Demo"
						fill
						className="object-cover"
						unoptimized
					/>
				</div>
			</div>
		</div>
	);
};

const WhySection = () => {
	return (
		<div className="py-20">
			<h2 className="text-4xl font-bold text-center text-nav mb-16">
				Why Chop?
			</h2>
			<div className="grid grid-cols-1 md:grid-cols-3 gap-12">
				{/* AI-Powered Learning */}
				<div className="text-center space-y-4 px-8">
					<div className="flex justify-center">
						<BrainIcon className="h-16 w-16 text-[#F04438]" />
					</div>
					<h3 className="text-xl font-semibold text-nav">
						Artificial Intelligence
					</h3>
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

const PricingSection = () => {
	const tiers = [
		{
			name: "Free",
			price: "$0",
			description:
				"Perfect for casual learners who want to explore and learn at their own pace.",
			features: [
				"Access to all communities",
				"100 AI-generated cards per month",
				"Basic progress tracking",
				"Join community discussions",
				"Public leaderboard access",
				"Basic learning analytics",
			],
			buttonText: "Get started",
			buttonVariant: "outline" as const,
		},
		{
			name: "Pro",
			price: "$10",
			description:
				"For dedicated learners who want unlimited access and advanced features.",
			features: [
				"Everything in Free",
				"Unlimited AI-generated cards",
				"Advanced progress tracking",
				"Priority card generation",
				"Custom learning paths",
				"Advanced analytics",
				"Ad-free experience",
			],
			buttonText: "Go Pro",
			buttonVariant: "default" as const,
			popular: true,
		},
		{
			name: "Annual",
			price: "$100",
			description:
				"Best value for committed learners. Save $20 with annual billing.",
			features: [
				"Everything in Pro",
				"2 months free",
				"Early access to new features",
				"Premium community badges",
				"Priority support",
				"Exclusive learning events",
				"Custom learning goals",
			],
			buttonText: "Save with Annual",
			buttonVariant: "default" as const,
		},
	];

	return (
		<div className="py-20" id="pricing">
			<div className="text-center mb-16">
				<h2 className="text-4xl font-bold mb-4">Start learning for free</h2>
				<p className="text-lg text-muted-foreground">
					Begin your learning journey today and upgrade as you grow
				</p>
				<div className="flex justify-center gap-4 mt-6">
					<Button variant="outline" className="gap-2">
						FAQ <ArrowDownIcon className="h-4 w-4" />
					</Button>
					<Button>Download Now</Button>
				</div>
			</div>

			<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
				{tiers.map((tier) => (
					<Card
						key={tier.name}
						className={`flex flex-col ${
							tier.popular ? "border-primary shadow-lg scale-105" : ""
						}`}
					>
						<CardHeader>
							<CardTitle className="text-2xl">{tier.name}</CardTitle>
							<CardDescription>{tier.description}</CardDescription>
						</CardHeader>
						<CardContent className="flex-grow">
							<div className="mb-6">
								<span className="text-4xl font-bold">{tier.price}</span>
								<span className="text-muted-foreground ml-1">/mo</span>
							</div>
							<ul className="space-y-3">
								{tier.features.map((feature) => (
									<li key={feature} className="flex items-center gap-2">
										<CheckIcon className="h-4 w-4 text-primary" />
										<span>{feature}</span>
									</li>
								))}
							</ul>
						</CardContent>
						<CardFooter>
							<Button variant={tier.buttonVariant} className="w-full" size="lg">
								{tier.buttonText}
							</Button>
						</CardFooter>
					</Card>
				))}
			</div>
		</div>
	);
};

const FAQSection = () => {
	const faqs = [
		{
			question: "Can I switch from my translation management system?",
			answer:
				"Yes, our platform is designed to be compatible with most existing translation management systems. We provide easy migration tools and support to help you transition smoothly.",
		},
		{
			question: "Can I switch from ChatGPT API to Lingo.dev for localization?",
			answer:
				"Yes, we offer seamless integration and migration from ChatGPT API. Our platform provides specialized features for localization while maintaining compatibility with existing workflows.",
		},
		{
			question: "How does quality assurance work with AI translations?",
			answer:
				"Our AI translations go through multiple layers of quality checks. We combine automated QA tools with human review options to ensure accuracy and context preservation in all translations.",
		},
		{
			question: "Can the API handle real-time chat translations?",
			answer:
				"Yes, our API is optimized for real-time chat translations with low latency. We support websocket connections and provide SDKs for easy integration with chat applications.",
		},
		{
			question: "Does Lingo.dev work with marketing content?",
			answer:
				"Absolutely! Our platform is specifically designed to handle marketing content with context awareness, brand voice preservation, and cultural adaptation features.",
		},
		{
			question: "How does dynamic content translation work?",
			answer:
				"Dynamic content translation uses our real-time API to translate content on-the-fly. We cache common translations and use smart content detection to ensure efficient and accurate translations.",
		},
		{
			question: "How many languages does Lingo.dev support?",
			answer:
				"We support over 100 languages with high-quality translations. Our platform continuously adds new languages and improves existing translation capabilities.",
		},
		{
			question: "How secure is Lingo.dev?",
			answer:
				"We maintain the highest security standards with end-to-end encryption, SOC 2 compliance, and regular security audits. Your data is protected with enterprise-grade security measures.",
		},
	];

	return (
		<div className="py-20" id="faq">
			<div className="text-center mb-16">
				<div className="inline-block mb-4 px-4 py-1 rounded-full border text-sm">
					Common questions
				</div>
				<h2 className="text-4xl font-bold mb-4">FAQs</h2>
				<p className="text-lg text-muted-foreground">
					Questions from engineering teams who ship globally
				</p>
			</div>

			<div className="max-w-3xl mx-auto">
				<Accordion type="single" collapsible className="w-full">
					{faqs.map((faq, index) => (
						<AccordionItem key={index} value={`item-${index}`}>
							<AccordionTrigger className="text-left">
								{faq.question}
							</AccordionTrigger>
							<AccordionContent>{faq.answer}</AccordionContent>
						</AccordionItem>
					))}
				</Accordion>
			</div>

			<div className="flex justify-center gap-4 mt-12">
				<Button variant="outline" size="lg">
					Get started
				</Button>
				<Button size="lg">Create an account</Button>
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
					<Button
						onClick={() => {
							window.open(
								"https://apps.apple.com/us/app/chop-ai/id6739903784",
								"_blank",
								"noopener,noreferrer",
							);
						}}
					>
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
			<PricingSection />
			<FAQSection />
			<CTASection />
		</div>
	);
}
