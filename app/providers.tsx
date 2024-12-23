import { siteMetadata } from '@/data/site_metadata';
import { ThemeProvider } from 'next-themes';

export function ThemeProviders({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider attribute="class" defaultTheme={siteMetadata.theme}>
      {children}
    </ThemeProvider>
  );
}
