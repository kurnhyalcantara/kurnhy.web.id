import clsx from 'clsx';
import { Image } from '@/components/ui/image';
import { siteMetadata } from '@/data/site_metadata';
import { ProfileInfo } from './profile-info';

export function ProfileCard() {
  return (
    <div
      className="z-10 mb-8 scale-100 transition-all duration-200 ease-out hover:z-50 md:mb-0 md:hover:scale-[1.15]"
      style={{ perspective: '600px' }}
    >
      <div
        className={clsx(
          'flex flex-col overflow-hidden transition-all duration-200 ease-out md:rounded-lg',
          'bg-white shadow-demure shadow-masere dark:bg-gray-900 dark:shadow-froasted',
          'outline outline-1 outline-gray-100 dark:outline-gray-600'
        )}
      >
        <Image
          src="/images/logo.jpg"
          alt={siteMetadata.headerTitle}
          width={550}
          height={350}
          style={{
            objectPosition: '50% 15%',
            aspectRatio: '383/240',
          }}
          loading="eager"
        ></Image>
        <ProfileInfo />
      </div>
    </div>
  );
}
