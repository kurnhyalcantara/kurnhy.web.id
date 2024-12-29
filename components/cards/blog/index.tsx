import { Link } from '@/components/ui/link';
import { Image } from '@/components/ui/image';
import clsx from 'clsx';

export type BlogCardMetadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
  slug: string;
};

export const BlogPostCard = (post: BlogCardMetadata) => {
  return (
    <article className="group relative rounded-lg bg-white p-4 shadow-md transition-shadow hover:shadow-xl hover:shadow-gray-300 dark:bg-gray-900 dark:shadow-lg dark:shadow-gray-900 dark:hover:shadow-gray-800">
      <div className="flex flex-col items-start gap-4">
        <Link
          href={`/${post.slug}`}
          className={clsx([
            'relative block overflow-hidden rounded-lg',
            'h-auto w-full aspect-video',
            'transition-transform duration-300 ease-in-ou',
          ])}
        >
          <Image
            src={post.image}
            alt={post.slug}
            width={600}
            height={400}
            className="h-full w-full rounded-lg object-cover"
          ></Image>
          <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
        </Link>
      </div>
      <div className="w-full space-y-3 mt-4">
        <div className="flex items-center gap-x-2 text-sm text-gray-500 dark:text-gray-400">
          <time>{post.publishedAt} / </time>
          <span className="text-gray-400">&bull;</span>
          <span>8 min read</span>
        </div>
        <div className="relative">
          <h3 className="text-lg font-semibold leading-6 text-gray-800 dark:text-gray-100">
            <Link href={`/${post.slug}`} className="hover:text-primary-500">
              {post.title}
            </Link>
          </h3>
          <p className="mt-2 text-sm text-gray-600 line-clamp-2 dark:text-gray-400">
            {post.summary}
          </p>
        </div>
      </div>
    </article>
  );
};
