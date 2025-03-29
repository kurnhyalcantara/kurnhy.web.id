import { allBlogs, Blogs } from '@/.contentlayer/generated';
import { PostLayout } from '@/layouts/post-layout';
import { MDXLayoutRenderer } from '@/components/mdx/layout-rendered';

export const generateStaticParams = async () => {
  return allBlogs.map((p) => ({
    slug: p.slug.split('/').map((name) => decodeURI(name)),
  }));
};

export default async function Page({ params }: { params: { slug: string[] } }) {
  const slugArray = await params; // Pastikan params di-resolve
  const slug = slugArray.slug ? decodeURI(slugArray.slug.join('/') || '') : '';
  const post = allBlogs.find((p) => p.slug === slug) as Blogs;

  return (
    <PostLayout content={post}>
      <MDXLayoutRenderer code={post.body.code}></MDXLayoutRenderer>
    </PostLayout>
  );
}
