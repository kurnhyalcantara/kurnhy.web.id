import {
  FireIcon,
  HomeIcon,
  IdentificationIcon,
  PencilIcon,
} from '@heroicons/react/24/solid';

export const headerNavigation = [
  { href: '/blogs', title: 'Blog' },
  { href: '/projects', title: 'Project' },
  { href: '/about', title: 'About' },
];

export const bottomNavigation = [
  { href: '/', title: 'Home', icon: HomeIcon },
  { href: '/blogs', title: 'Blog', icon: PencilIcon },
  { href: '/projects', title: 'Project', icon: FireIcon },
  { href: '/about', title: 'About', icon: IdentificationIcon },
];
