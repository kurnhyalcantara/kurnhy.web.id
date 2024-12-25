import { Twemoji } from '@/components/ui/twemoji';

export function ProfileInfo() {
  return (
    <div className="hidden py-4 md:block md:px-5">
      <h3 className="text-xl font-semibold text-gray-800 dark:text-white">
        Kurniawan
      </h3>
      <h5 className="py-2 text-gray-500 dark:text-gray-400">
        <span>kurnhyalcantara | Code Wizard </span>
        <Twemoji emoji="man-technologist" />
      </h5>
      <div className="mb-2 mt-4 space-y-4"></div>
    </div>
  );
}
