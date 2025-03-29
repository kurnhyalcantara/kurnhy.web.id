import { MDXComponents } from 'mdx/types';
import { Image, type ImageProps } from '../ui/image';

export const MDX_COMPONENTS: MDXComponents = {
  // Add your custom components here
  Image: ({ alt, ...rest }: ImageProps) => {
    return <Image alt={alt} {...rest} />;
  },
};
