'use client';

import { useState } from 'react';
import Container from '../ui/container';
import { PageHeader } from '../ui/page-header';
import { SearchBar } from '../ui/search-bar';

export function Blog() {
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
    </Container>
  );
}
