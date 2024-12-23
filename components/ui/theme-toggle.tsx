'use client';

import { Switch } from '@headlessui/react';
import { MoonIcon, SunIcon } from '@heroicons/react/24/solid';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { setTheme, resolvedTheme } = useTheme(); // Gunakan `resolvedTheme` untuk akurasi tema saat ini
  const [mounted, setMounted] = useState(false);

  // Pastikan komponen hanya berinteraksi di klien
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null; // Hindari render sebelum mounted

  return (
    <div className="flex items-center justify-center">
      <Switch
        checked={resolvedTheme === 'dark'}
        onChange={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
        className={`relative inline-flex h-6 w-11 items-center rounded-full transition ${
          resolvedTheme === 'dark' ? 'bg-gray-800' : 'bg-yellow-400'
        }`}
      >
        <span
          className={`inline-block h-4 w-4 transform rounded-full transition ${
            resolvedTheme === 'dark'
              ? 'translate-x-6 bg-white'
              : 'translate-x-1 bg-black'
          }`}
        />
      </Switch>
      <span className="ml-2">
        {resolvedTheme === 'dark' ? (
          <MoonIcon className="w-5 h-5 text-gray-800 dark:text-white" />
        ) : (
          <SunIcon className="w-5 h-5 text-yellow-400" />
        )}
      </span>
    </div>
  );
}
