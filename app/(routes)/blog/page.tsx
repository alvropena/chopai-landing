import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format } from 'date-fns';
import Link from 'next/link';

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <Card key={post.slug}>
            <CardHeader>
              <CardTitle>
                <Link
                  href={post.url}
                  className="hover:text-[var(--hover-color)]"
                >
                  {post.title}
                </Link>
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="mb-4">{post.excerpt}</p>
              <time className="text-sm text-muted-foreground">
                last updated: {format(new Date(post.date), "MMMM do, yyyy").toLowerCase()}
              </time>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
