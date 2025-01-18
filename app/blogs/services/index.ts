import { allBlogs } from '@/.contentlayer/generated';

export type BlogPost = {
  metadata: {
    title: string;
    publishedAt: string;
    summary: string;
    image: string;
  };
  slug: string;
  content: string;
};

export function getBlogPosts(): BlogPost[] {
  return allBlogs
    .map((blog) => ({
      metadata: {
        title: blog.title,
        publishedAt: blog.publishedAt,
        summary: blog.summary,
        image: blog.image || '/images/default-banner.jpg',
      },
      slug: blog.slug,
      content: blog.body.raw,
    }))
    .sort((a, b) => {
      const dateA = new Date(a.metadata.publishedAt);
      const dateB = new Date(b.metadata.publishedAt);
      return dateB.getTime() - dateA.getTime();
    });
}
