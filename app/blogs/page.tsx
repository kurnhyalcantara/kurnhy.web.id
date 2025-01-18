import { Blog } from '@/components/blog';
import { getBlogPosts } from './services';

export default function Page() {
  const allBlogs = getBlogPosts();

  return <Blog posts={allBlogs} />;
}
