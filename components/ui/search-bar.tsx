import { ChangeEventHandler } from 'react';
import { FeatherIcon } from './feather-icon';

export function SearchBar({
  label,
  onChange,
}: {
  label: string;
  onChange: ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div className="relative max-w-lg">
      <label>
        <span className="sr-only">{label}</span>
        <input
          aria-label={label}
          type="text"
          onChange={onChange}
          placeholder={label}
          className="block w-full rounded-full border border-gray-300 bg-gray-100 px-5 py-3 pr-12 text-sm text-gray-900 shadow-inner focus:border-purple-500 focus:ring-2 focus:ring-purple-400 dark:border-gray-700 dark:bg-gray-800 dark:text-gray-100 dark:focus:ring-purple-500"
        />
      </label>
      <div className="absolute right-4 top-1/2 -translate-y-1/2 text-purple-500 dark:text-purple-400">
        <FeatherIcon icon="search" className="h-5 w-5" />
      </div>
    </div>
  );
}
