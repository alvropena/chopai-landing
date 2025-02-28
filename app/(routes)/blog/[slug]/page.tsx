import { allPosts } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { format, parseISO } from "date-fns";
import { Clock } from "lucide-react";
import { MdxContent } from "@/components/mdx-content";
import { ShareButton } from "@/components/share-button";
import { getReadingTime } from "@/lib/utils";

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slug,
	}));
}

export default function BlogPost({ params }: { params: { slug: string } }) {
	const post = allPosts.find((post) => post.slug === params.slug);

	if (!post) {
		notFound();
	}

	return (
		<article className="container mx-auto px-4 py-16 md:max-w-[1000px]">
			{/* Date and Author */}
			<div className="text-center mb-8">
				<div className="text-muted-foreground flex items-center justify-center gap-2">
					<span>{format(parseISO(post.date), "MMMM d, yyyy")}</span>
					<span>•</span>
					<span className="font-bold">{post.author}</span>
				</div>
			</div>

			{/* Title */}
			<h1 className="text-5xl font-bold text-center mb-4 leading-tight">
				{post.title}
			</h1>

			{/* Excerpt */}
			<p className="text-xl text-muted-foreground text-center mb-12">
				{post.excerpt}
			</p>

			{/* Reading Time and Share Button */}
			<div className="flex justify-between items-center mb-12">
				<div className="flex items-center gap-1 text-muted-foreground">
					<Clock className="h-4 w-4" />
					{getReadingTime(post.body.raw)}
				</div>
				<ShareButton />
			</div>

			{/* Article Content */}
			<div className="prose prose-lg dark:prose-invert max-w-none">
				<MdxContent code={post.body.code} />
			</div>
		</article>
	);
}
