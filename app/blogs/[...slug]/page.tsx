import { allBlogs, Blogs } from '@/.contentlayer/generated';
import { PostLayout } from '@/layouts/post-layout';
import { MDXLayoutRenderer } from '@/components/mdx/layout-rendered';
import type { Metadata } from 'next';

export async function generateStaticParams() {
  return allBlogs.map((p) => ({
    slug: p.slug.split('/').map((name) => decodeURIComponent(name)),
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugString = decodeURIComponent(slug.join('/'));
  const post = allBlogs.find((p) => p.slug === slugString);

  return {
    title: post?.title || 'Post Not Found',
    description: post?.summary || '',
  };
}

export default async function Page({
  params,
}: {
  params: Promise<{ slug: string[] }>;
}) {
  const { slug } = await params;
  const slugString = decodeURIComponent(slug.join('/'));
  const post = allBlogs.find((p) => p.slug === slugString) as Blogs;

  if (!post) {
    return <div className="text-red-500 text-center">Post not found</div>;
  }

  return (
    <PostLayout content={post}>
      <MDXLayoutRenderer code={post.body.code} />
    </PostLayout>
  );
}
