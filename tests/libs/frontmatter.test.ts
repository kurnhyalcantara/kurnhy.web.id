import { parseFrontmatter } from '@/libs/frontmatter';

describe('parseFrontmatter', () => {
  const validMDX = `
---
title: 'Understanding Frontmatter in MDX'
publishedAt: '2024-12-01'
summary: 'A deep dive into frontmatter usage in MDX files.'
---
This is the main content of the MDX file.
`;

  const invalidMDX = `
title: 'Missing Frontmatter Delimiters'
publishedAt: '2024-12-01'
summary: 'No frontmatter delimiters.'
This is the content.
`;

  it('should correctly parse metadata and content from valid MDX', () => {
    const result = parseFrontmatter(validMDX);

    expect(result.metadata).toEqual({
      title: 'Understanding Frontmatter in MDX',
      publishedAt: '2024-12-01',
      summary: 'A deep dive into frontmatter usage in MDX files.',
    });

    expect(result.content).toBe('This is the main content of the MDX file.');
  });

  it('should throw an error if frontmatter is not found', () => {
    expect(() => parseFrontmatter(invalidMDX)).toThrowError(
      'Frontmatter not found in the file content.'
    );
  });

  it('should throw an error if required metadata is missing', () => {
    const incompleteMDX = `
---
title: 'Missing Published Date'
summary: 'No publishedAt field.'
---
Content without complete metadata.
`;
    expect(() => parseFrontmatter(incompleteMDX)).toThrowError(
      'Invalid or incomplete frontmatter metadata.'
    );
  });
});
