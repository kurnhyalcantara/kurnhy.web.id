import { defineDocumentType, makeSource } from 'contentlayer/source-files';

export const Blogs = defineDocumentType(() => ({
  name: 'Blogs',
  filePathPattern: '**/*.mdx',
  fields: {
    title: { type: 'string', required: true },
    publishedAt: { type: 'date', required: true },
    summary: { type: 'string', required: true },
    image: { type: 'string', required: false },
  },
  computedFields: {
    slug: {
      type: 'string',
      resolve: (doc) => doc._raw.sourceFileName.replace(/\.mdx$/, ''),
    },
  },
}));

export default makeSource({
  contentDirPath: 'data',
  documentTypes: [Blogs],
  disableImportAliasWarning: true,
});
