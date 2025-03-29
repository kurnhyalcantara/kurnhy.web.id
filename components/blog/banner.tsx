import clsx from 'clsx';
import { Image } from '../ui/image';
import { convertToTitleCase, kebabCaseToPlainTxt } from '@/utils/misc';

export function Banner({
  banner,
  className,
}: {
  banner: string;
  className?: string;
}) {
  // Get path name in slug
  const alt = banner.split('/')[1];

  return (
    <div className={clsx('relative', className)}>
      <Image
        src={banner}
        alt={
          convertToTitleCase(kebabCaseToPlainTxt(alt)) || 'Article post banner'
        }
        width={1600}
        height={900}
        className="h-auto w-full rounded-lg"
      ></Image>
    </div>
  );
}
