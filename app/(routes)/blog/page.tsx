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
      {posts.length > 0 ? (
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
                <p className="mb-4 text-muted-foreground">{post.excerpt}</p>
                <div className="flex flex-col gap-1 text-sm text-muted-foreground">
                  <span><strong>Author:</strong> {post.author}</span>
                  <time><strong>Last updated:</strong> {format(new Date(post.date), "MMMM do, yyyy")}</time>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card className="text-center bg-secondary">
          <CardHeader>
            <CardTitle>No Posts Yet</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-muted-foreground">
              Stay tuned! We're working on creating interesting content for you.
              Check back soon for our latest articles and updates.
            </p>
          </CardContent>
        </Card>
      )}
    </div>
  );
}
