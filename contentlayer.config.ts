import { defineDocumentType, makeSource } from 'contentlayer/source-files'

const Legal = defineDocumentType(() => ({
  name: 'Legal',
  filePathPattern: '*.mdx',
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      required: true,
    },
    date: {
      type: 'date',
      required: true,
    },
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (doc) => `/${doc._raw.sourceFileName.replace(/\.mdx$/, '')}`,
    },
  },
}))

const Post = defineDocumentType(() => ({
  name: 'Post',
  filePathPattern: `posts/**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: { type: 'string', required: true },
    date: { type: 'date', required: true },
    excerpt: { type: 'string', required: true },
    author: { type: 'string', required: true },
    image: { type: 'string', required: true },
    category: { type: 'string', required: true },
    slug: { 
      type: 'string', 
      required: true,
      resolve: (doc: any) => doc._raw.sourceFileName.replace(/\.mdx$/, '')
    }
  },
  computedFields: {
    url: {
      type: 'string',
      resolve: (post) => `/blog/${post.slug}`,
    },
    formattedDate: {
      type: 'string',
      resolve: (post) => {
        const date = new Date(post.date);
        return date.toLocaleDateString('en-US', {
          month: 'long',
          day: 'numeric',
          year: 'numeric'
        });
      }
    }
  },
}))

export default makeSource({
  contentDirPath: 'content',
  documentTypes: [Post, Legal],
})
