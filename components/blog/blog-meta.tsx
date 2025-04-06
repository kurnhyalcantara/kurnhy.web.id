import { formatDate } from '@/utils/misc';

interface BlogMetaProps {
  date: string;
}

export function BlogMeta({ date }: BlogMetaProps) {
  return (
    <dl>
      <dt className="sr-only">Published on</dt>
      <dd className="flex flex-wrap items-center gap-2 text-sm font-medium leading-6 text-gray-500 dark:text-gray-400 md:text-base">
        <time dateTime={date} className="flex items-center justify-center">
          <span>{formatDate(date)}</span>
        </time>
      </dd>
    </dl>
  );
}
