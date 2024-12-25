import clsx from 'clsx';
import Container from '../ui/container';
import { siteMetadata } from '@/data/site-metadata';
import { FooterMeta } from './footer-meta';

export const Footer = () => {
  return (
    <Container as="footer" className="mt-8 mb-8 md:mt-16 md:mb-4">
      <div
        className={clsx([
          'grid grid-cols-1 gap-x-8 gap-y-8 py-8 md:grid-cols-2 xl:grid-cols-3',
          'border-t border-gray-200 dark:border-gray-700',
        ])}
      >
        <div className="col-span-1 space-y-4 xl:col-span-2">
          <div className="italic text-gray-500 dark:text-gray-400">
            {siteMetadata.description}
          </div>
        </div>
        <FooterMeta />
      </div>
    </Container>
  );
};
