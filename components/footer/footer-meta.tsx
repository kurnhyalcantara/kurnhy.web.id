import { siteMetadata } from '@/data/site-metadata';
import { Link } from '../ui/link';
import { FeatherIcon } from '../ui/feather-icon';
import clsx from 'clsx';
import { Twemoji } from '../ui/twemoji';

const TIME_IS = 'https://time.is/Jakarta';
const MY_TIMEZONE = 'Asia/Jakarta';
const MY_TIMEZONE_OFFSET = 7 * -60; // UTC+7

function getTime() {
  const date = new Date();
  const visitorTimezoneOffset = date.getTimezoneOffset();
  const hoursDiff = (visitorTimezoneOffset - MY_TIMEZONE_OFFSET) / 60;
  const diff =
    hoursDiff === 0
      ? 'same time'
      : hoursDiff > 0
      ? `${hoursDiff}h ahead`
      : `${hoursDiff * -1}h behind`;

  const time = new Intl.DateTimeFormat('en-US', {
    timeZone: MY_TIMEZONE,
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  }).format(date);

  return { time, diff };
}

export function FooterMeta() {
  const { time, diff } = getTime();
  return (
    <div className="space-y-2 py-1.5 text-gray-800 dark:text-gray-200">
      <div className="flex items-center gap-1 font-medium">
        <FeatherIcon
          icon="github"
          className={clsx(
            'w-5 h-5 stroke-[1.5] mr-2',
            'text-gray-800 dark:text-gray-200'
          )}
        />
        <Link
          href={`${siteMetadata.siteRepo}/fork`}
          className="ml-1"
          target="_blank"
        >
          Fork this template
        </Link>
      </div>
      <div className="flex items-center gap-1 font-medium">
        <FeatherIcon
          icon="clock"
          className={clsx(
            'w-5 h-5 stroke-[1.5] mr-2',
            'text-gray-800 dark:text-gray-200'
          )}
        />
        <Link
          href={`${siteMetadata.siteRepo}/fork`}
          className="ml-1"
          target="_blank"
        >
          {time}
          <span className="text-gray-500 dark:text-gray-400"> - {diff}</span>
        </Link>
      </div>
    </div>
  );
}
