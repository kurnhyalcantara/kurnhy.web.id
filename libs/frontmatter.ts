type Metadata = {
  title: string;
  publishedAt: string;
  summary: string;
  image: string;
};

export function parseFrontmatter(fileContent: string): {
  metadata: Metadata;
  content: string;
} {
  // Regex untuk menangkap blok frontmatter
  const frontmatterRegex = /---\s*([\s\S]*?)\s*---/;
  const match = frontmatterRegex.exec(fileContent);

  if (!match) {
    throw new Error('Frontmatter not found in the file content.');
  }

  // Ekstrak blok frontmatter dan konten
  const frontMatterBlock = match[1];
  const content = fileContent.replace(frontmatterRegex, '').trim();

  // Proses baris-baris dalam frontmatter
  const frontMatterLines = frontMatterBlock.trim().split('\n');
  const metadata: Partial<Metadata> = {};

  frontMatterLines.forEach((line) => {
    const [key, ...valueArr] = line.split(': ');
    if (key && valueArr.length > 0) {
      let value = valueArr.join(': ').trim();
      value = value.replace(/^['"](.*)['"]$/, '$1'); // Menghapus tanda kutip
      metadata[key.trim() as keyof Metadata] = value;
    }
  });

  // Validasi metadata agar sesuai dengan tipe Metadata
  if (!metadata.title || !metadata.publishedAt || !metadata.summary) {
    throw new Error('Invalid or incomplete frontmatter metadata.');
  }

  return { metadata: metadata as Metadata, content };
}
