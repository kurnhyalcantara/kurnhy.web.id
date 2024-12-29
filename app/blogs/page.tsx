import { Blog } from '@/components/blog';
import { getBlogPosts } from './services';

export default function Page() {
  const BlogPost = getBlogPosts();
  return <Blog posts={BlogPost} />;
}
