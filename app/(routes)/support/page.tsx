import { allLegals } from "contentlayer/generated";
import { notFound } from "next/navigation";
import { MdxContent } from "@/components/mdx-content";

export default function SupportPage() {
	const support = allLegals.find(
		(doc) => doc._raw.sourceFileName === "support.mdx",
	);

	if (!support) {
		notFound();
	}

	return (
		<div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
			<MdxContent code={support.body.code} />
		</div>
	);
}
