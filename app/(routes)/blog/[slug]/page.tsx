import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format } from 'date-fns'
import { MdxContent } from '@/components/mdx-content'

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

interface PageProps {
  params: Promise<{ slug: string }>
}

export default async function PostPage({ params }: PageProps) {
  const resolvedParams = await params
  const post = allPosts.find((post) => post.slug === resolvedParams.slug)

  if (!post) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <article>
        <h1 className="text-4xl font-bold mb-4 text-nav">{post.title}</h1>
        <h2 className="text-muted-foreground mb-4">{post.excerpt}</h2>
        <div className="flex items-center gap-2 text-sm text-muted-foreground mb-8">
          <span><strong>Author:</strong> {post.author}</span>
          <span>·</span>
          <time><strong>Last updated:</strong> {format(new Date(post.date), "MMMM do, yyyy")}</time>
        </div>
        <hr className="border-border mb-8" />
        <MdxContent code={post.body.code} />
      </article>
    </div>
  )
}