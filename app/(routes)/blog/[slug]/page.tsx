import { allPosts } from 'contentlayer/generated'
import { notFound } from 'next/navigation'
import { format, parseISO } from 'date-fns'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShareIcon, Clock } from 'lucide-react'
import { MdxContent } from '@/components/mdx-content'

// Calculate reading time
function getReadingTime(content: string) {
  const wordsPerMinute = 200;
  const words = content.trim().split(/\s+/).length;
  const minutes = Math.ceil(words / wordsPerMinute);
  return `${minutes} min read`;
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post.slug,
  }))
}

export default function BlogPost({ params }: { params: { slug: string } }) {
  const post = allPosts.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <article className="container mx-auto px-4 py-16 md:max-w-[1000px]">
      {/* Date and Author */}
      <div className="text-center mb-8">
        <div className="text-muted-foreground flex items-center justify-center gap-2">
          <span>{format(parseISO(post.date), 'MMMM d, yyyy')}</span>
          <span>•</span>
          <span>{post.author}</span>
        </div>
      </div>

      {/* Title */}
      <h1 className="text-5xl font-bold text-center mb-8 leading-tight">
        {post.title}
      </h1>

      {/* Reading Time and Share Button */}
      <div className="flex justify-between items-center mb-12">
        <div className="flex items-center gap-1 text-muted-foreground">
          <Clock className="h-4 w-4" />
          {getReadingTime(post.body.raw)}
        </div>
        <Button variant="ghost" size="sm" className="gap-2">
          <ShareIcon className="h-4 w-4" />
          Share
        </Button>
      </div>

      {/* Featured Image */}
      {post.image && (
        <div className="relative w-full aspect-[2/1] mb-12">
          <Image
            src={post.image}
            alt={post.title}
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
      )}

      {/* Article Content */}
      <div className="prose prose-lg dark:prose-invert max-w-none">
        <MdxContent code={post.body.code} />
      </div>
    </article>
  )
}