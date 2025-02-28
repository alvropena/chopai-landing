"use client";

import { allPosts } from "contentlayer/generated";
import { compareDesc, format, parseISO } from "date-fns";
import Link from "next/link";

type BlogPost = {
	slug: string;
	url: string;
	title: string;
	excerpt: string;
	author: string;
	date: string;
	body: {
		raw: string;
	};
};

// Move the reading time calculation to a shared function
function getReadingTime(content: string) {
	const wordsPerMinute = 200;
	const words = content.trim().split(/\s+/).length;
	const minutes = Math.ceil(words / wordsPerMinute);
	return `${minutes} min read`;
}

const BlogPost = ({ post }: { post: BlogPost }) => {
	return (
		<Link href={post.url}>
			<article className="bg-[#111111] rounded-lg p-6 hover:bg-[#1a1a1a] transition-colors h-full">
				<h2 className="text-xl font-semibold text-white mb-2">{post.title}</h2>
				<p className="text-gray-400 text-sm mb-4">{post.excerpt}</p>
				<div className="flex items-center text-gray-500 text-sm">
					<span>{format(parseISO(post.date), "MMM d, yyyy")}</span>
					<span className="mx-2">•</span>
					<span>{getReadingTime(post.body.raw)}</span>
				</div>
			</article>
		</Link>
	);
};

const MonthGroup = ({
	monthYear,
	posts,
}: { monthYear: string; posts: BlogPost[] }) => (
	<div className="space-y-6">
		<h2 className="text-2xl font-semibold text-white">{monthYear}</h2>
		<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
			{posts.map((post) => (
				<BlogPost key={post.slug} post={post} />
			))}
		</div>
	</div>
);

export default function BlogPage() {
	const posts = allPosts.sort((a, b) =>
		compareDesc(new Date(a.date), new Date(b.date)),
	);

	// Group posts by month and year
	const groupedPosts = posts.reduce(
		(groups, post) => {
			const date = parseISO(post.date);
			const monthYear = format(date, "MMM yyyy");

			if (!groups[monthYear]) {
				groups[monthYear] = [];
			}
			groups[monthYear].push(post);
			return groups;
		},
		{} as Record<string, BlogPost[]>,
	);

	return (
		<div className="container mx-auto px-4 py-16">
			<h1 className="text-4xl font-bold mb-12 text-white">Blog</h1>
			<div className="space-y-20">
				{Object.entries(groupedPosts).map(([monthYear, monthPosts]) => (
					<MonthGroup
						key={monthYear}
						monthYear={monthYear}
						posts={monthPosts}
					/>
				))}
			</div>
		</div>
	);
}
