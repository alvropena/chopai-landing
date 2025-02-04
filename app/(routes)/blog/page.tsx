interface BlogPost {
  id: number;
  title: string;
  excerpt: string;
  date: string;
}

export default function BlogPage() {
  const placeholderPosts: BlogPost[] = [
    {
      id: 1,
      title: "Getting Started",
      excerpt: "Learn how to get started with our platform...",
      date: "2024-03-20",
    },
    // Add more placeholder posts as needed
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-4xl font-bold mb-6">Blog</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {placeholderPosts.map((post) => (
          <article key={post.id} className="p-6 bg-white rounded-lg shadow">
            <h2 className="text-2xl font-semibold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.excerpt}</p>
            <time className="text-sm text-gray-500">{post.date}</time>
          </article>
        ))}
      </div>
    </div>
  );
}
