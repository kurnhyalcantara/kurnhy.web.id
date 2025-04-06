import { Blogs } from '@/.contentlayer/generated';
import { Banner } from '@/components/blog/banner';
import { BlogMeta } from '@/components/blog/blog-meta';
import { PostTitle } from '@/components/blog/post-title';
import Container from '@/components/ui/container';
import { GradientDivider } from '@/components/ui/gradient-divider';
import { siteMetadata } from '@/data/site-metadata';
import { ReactNode } from 'react';

interface LayoutProps {
  content: Blogs;
  children: ReactNode;
}

export function PostLayout({ content, children }: LayoutProps) {
  const { title, image, publishedAt } = content;
  return (
    <Container className="pt-4 lg:pt-12">
      <article className="pt-6">
        <div className="space-y-4">
          <PostTitle>{title}</PostTitle>
          <div className="space-y-4 pt-4 md:pt-10">
            <Banner banner={image || siteMetadata.socialBanner} />
          </div>
          <div className="flex items-center justify-between gap-2 pb-4 lg:pt-2">
            <BlogMeta date={publishedAt} />
          </div>
        </div>
        <GradientDivider className="mb-2 mt-2"></GradientDivider>
        <div className="grid grid-cols-1 gap-12 pb-10 pt-8 lg:grid-cols-12 lg:pt-10">
          <div className="divide-y divide-gray-200 dark:divide-gray-700 lg:col-span-8 xl:col-span-9">
            <div className="prose max-w-none dark:prose-invert lg:prose-lg lg:pb-8">
              {children}
            </div>
          </div>
        </div>
      </article>
    </Container>
  );
}
