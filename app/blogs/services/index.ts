import path from 'path';
import fs from 'fs';
import { parseFrontmatter } from '@/libs/frontmatter';

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
  const blogDir = path.join(process.cwd(), 'app', 'blogs', 'posts');

  // Mendapatkan semua file MDX di direktori blog/posts
  const mdxFiles = fs
    .readdirSync(blogDir)
    .filter((file) => path.extname(file) === '.mdx');

  // Memproses setiap file MDX
  const blogPosts = mdxFiles.map((file) => {
    const filePath = path.join(blogDir, file);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { metadata, content } = parseFrontmatter(fileContent);
    const slug = path.basename(file, path.extname(file));

    return {
      metadata,
      slug,
      content,
    };
  });

  // Mengurutkan berdasarkan tanggal publikasi (desc)
  blogPosts.sort((a, b) => {
    const dateA = new Date(a.metadata.publishedAt);
    const dateB = new Date(b.metadata.publishedAt);
    return dateB.getTime() - dateA.getTime();
  });

  return blogPosts;
}
