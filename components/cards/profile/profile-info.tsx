import { FeatherIcon } from '@/components/ui/feather-icon';
import { Link } from '@/components/ui/link';
import { Twemoji } from '@/components/ui/twemoji';
import { siteMetadata } from '@/data/site-metadata';
import clsx from 'clsx';

export function ProfileInfo() {
  return (
    <div className="py-4 px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        Kurniawan
      </h3>
      <h5 className="py-2 text-gray-500 dark:text-gray-400">
        <span>Jakarta, Indonesia </span>
        <Twemoji emoji="flag-indonesia" />
      </h5>
      <div className="mb-2 mt-4 space-y-4">
        {siteMetadata.profileInfo.map((item) => {
          return (
            <Link
              key={item.icon}
              className="flex items-center px-2 text-gray-700 dark:text-gray-200"
              href={item.link}
              target="_blank"
            >
              <FeatherIcon
                icon={item.icon}
                className={clsx('w-5 h-5 stroke-[1.5] mr-2', `${item.color}`)}
              />
              <p className="relative group">
                {item.title}
                <span className="absolute bottom-0 left-0 w-full h-[2px] bg-gradient-to-r from-blue-500 to-purple-500 scale-x-0 group-hover:scale-x-100 transform origin-left transition-all duration-300" />
              </p>
            </Link>
          );
        })}
      </div>
    </div>
  );
}
