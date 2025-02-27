"use client";

import { Card } from "@/components/ui/card";
import { allPosts } from 'contentlayer/generated';
import { compareDesc, format, parseISO } from 'date-fns';
import Link from 'next/link';
import Image from 'next/image';

// Update the BlogPost type to include image
type BlogPost = {
  slug: string;
  url: string;
  title: string;
  excerpt: string;
  author: string;
  date: string;
  image?: string; // Add this field
};

const NoPosts = () => (
  <Card className="text-center bg-primary/10 p-8">
    <h2 className="text-2xl font-bold mb-4">No Posts Yet</h2>
    <p className="text-muted-foreground">
      Stay tuned! We&apos;re working on creating interesting content for you.
      Check back soon for our latest articles and updates.
    </p>
  </Card>
);

const BlogPost = ({ post }: { post: BlogPost }) => (
  <Link href={post.url} className="group block">
    <div className="space-y-4">
      <div className="aspect-[4/3] relative overflow-hidden rounded-lg">
        <Image
          src={post.image || '/blog/default-post.jpg'} // Fallback image
          alt={post.title}
          fill
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
      </div>
      <div className="space-y-2">
        <h3 className="font-semibold text-xl group-hover:text-primary transition-colors">
          {post.title}
        </h3>
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <span>{post.author}</span>
          <span>•</span>
          <time dateTime={post.date}>
            {format(parseISO(post.date), 'MMM d, yyyy')}
          </time>
        </div>
      </div>
    </div>
  </Link>
);

const MonthGroup = ({ monthYear, posts }: { monthYear: string; posts: BlogPost[] }) => (
  <div className="space-y-6">
    <h2 className="text-2xl font-semibold">{monthYear}</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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
    <div className="container mx-auto px-4 py-16 md:max-w-[1400px]">
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold mb-4">Blog</h1>
        <p className="text-lg text-muted-foreground">
          Discover insights about AI and learning
        </p>
      </div>

      {posts.length > 0 ? (
        <div className="space-y-20">
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
