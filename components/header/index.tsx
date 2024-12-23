import clsx from 'clsx';
import Container from '../ui/container';
import { siteMetadata } from '@/data/site_metadata';
import { headerNavigation } from '@/data/navigation';
import { Link } from '../ui/link';
import ThemeToggle from '../ui/theme-toggle';
import BottomNavigation from '../ui/bottom-nav';
import { Logo } from './logo';

export default function Header() {
  return (
    <>
      <Container
        as="header"
        className={clsx(
          'bg-white/75 py-2 backdrop-blur dark:bg-gray-900',
          'shadow-sm saturate-100 md:rounded-2xl',
          siteMetadata.stickyNav && 'sticky top-2 z-50 lg:top-3'
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <Logo />
          <div className="flex items-center gap-4">
            <div className="hidden gap-1.5 sm:flex">
              {headerNavigation.map(({ href, title }) => {
                return (
                  <Link
                    key={title}
                    href={href}
                    className="font-medium px-3 py-1 relative inline-block group"
                  >
                    <span className="absolute inset-0 bg-gradient-to-r from-gray-300 to-gray-500 dark:from-blue-500 dark:to-purple-500 rounded-lg opacity-0 group-hover:opacity-100 transition duration-300"></span>
                    <span className="relative">{title}</span>
                  </Link>
                );
              })}
            </div>
            <div
              data-orientation="vertical"
              role="separator"
              className="hidden h-4 w-px shrink-0 bg-gray-200 dark:bg-gray-600 md:block"
            />
            <div className="items-center gap-2">
              <ThemeToggle />
            </div>
          </div>
        </div>
      </Container>
      <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 bg-white/90 dark:bg-gray-900/90 backdrop-blur-lg shadow-lg">
        <BottomNavigation />
      </div>
    </>
  );
}
