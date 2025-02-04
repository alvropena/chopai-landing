import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';

const NoPosts = () => (
  <Card className="text-center bg-primary/10">
    <CardHeader>
      <CardTitle>No Posts Yet</CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-muted-foreground">
        Stay tuned! We&apos;re working on creating interesting content for you.
        Check back soon for our latest articles and updates.
      </p>
    </CardContent>
  </Card>
);

const BlogPost = ({ post }: { post: any }) => (
  <Link
    key={post.slug}
    href={post.url}
    className="hover:no-underline"
  >
    <Card className="h-full transition-colors bg-primary/10 hover:bg-primary/20">
      <CardHeader className="pb-4">
        <CardTitle>{post.title}</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <p className="text-muted-foreground">{post.excerpt}</p>
        <div className="flex flex-col gap-1 text-sm text-muted-foreground">
          <span><strong>Author:</strong> {post.author}</span>
          <time><strong>Last updated:</strong> {format(new Date(post.date), "MMMM do, yyyy")}</time>
        </div>
      </CardContent>
    </Card>
  </Link>
);

const MonthGroup = ({ monthYear, posts }: { monthYear: string; posts: any[] }) => (
  <div key={monthYear}>
    <h2 className="text-2xl font-semibold mb-4">{monthYear}</h2>
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {posts.map((post) => (
        <BlogPost key={post.slug} post={post} />
      ))}
    </div>
  </div>
);

export default function BlogPage() {
  const posts = allPosts.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  // Group posts by month and year
  const groupedPosts = posts.reduce((groups, post) => {
    const date = parseISO(post.date);
    const monthYear = format(date, 'MMMM yyyy');
    
    if (!groups[monthYear]) {
      groups[monthYear] = [];
    }
    groups[monthYear].push(post);
    return groups;
  }, {} as Record<string, typeof posts>);

  return (
    <div className="container mx-auto px-4 py-8 md:max-w-[1400px]">
      <h1 className="text-4xl font-bold mb-8 text-nav">Blog</h1>
      {posts.length > 0 ? (
        <div className="space-y-12">
          {Object.entries(groupedPosts).map(([monthYear, monthPosts]) => (
            <MonthGroup key={monthYear} monthYear={monthYear} posts={monthPosts} />
          ))}
        </div>
      ) : (
        <NoPosts />
      )}
    </div>
  );
}
