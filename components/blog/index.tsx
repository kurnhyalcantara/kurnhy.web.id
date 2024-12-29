'use client';

import { useState } from 'react';
import Container from '../ui/container';
import { PageHeader } from '../ui/page-header';
import { SearchBar } from '../ui/search-bar';
import { BlogPostCard } from '../cards/blog';
import { BlogPost } from '@/app/blogs/services';

type BlogProps = {
  posts: BlogPost[];
};

export function Blog({ posts }: BlogProps) {
  const [searchValue, setSearchValue] = useState('');
  console.log(searchValue);
  return (
    <Container className="pt-4 lg:pt-12">
      <PageHeader
        title="All posts"
        description="I share thoughts on topics I enjoy, including web development, tech, and life. Use the search below to explore by title."
        className="border-b border-gray-200 dark:border-gray-700"
      >
        <SearchBar
          label="Search article"
          onChange={(e) => setSearchValue(e.target.value)}
        />
      </PageHeader>
      <div className="grid grid-cols-1 gap-x-8 gap-y-16 py-10 md:gap-y-16 lg:grid-cols-2 xl:grid-cols-3">
        {posts.map((post, index) => {
          const blogMetadata = {
            title: post.metadata.title,
            publishedAt: post.metadata.publishedAt,
            summary: post.metadata.summary,
            image: post.metadata.image,
            slug: post.slug,
          };
          return <BlogPostCard {...blogMetadata} key={index} />;
        })}
      </div>
    </Container>
  );
}
