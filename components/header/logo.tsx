import { siteMetadata } from '@/data/site_metadata';
import { Link } from '../ui/link';
import { Image } from '../ui/image';
import clsx from 'clsx';

export function Logo({ className }: { className?: string }) {
  return (
    <Link
      href="/"
      aria-label={siteMetadata.headerTitle}
      className={clsx([
        'rounded-xl p-0.5',
        'ring-1 ring-zinc-900/5 dark:ring-white/10',
        'shadow-lg shadow-zinc-800/5',
        className,
      ])}
    >
      <Image
        src="/images/logo.jpg"
        alt={siteMetadata.headerTitle}
        width={100}
        height={100}
        className="h-10 w-10 rounded-xl"
        loading="eager"
      />
    </Link>
  );
}
