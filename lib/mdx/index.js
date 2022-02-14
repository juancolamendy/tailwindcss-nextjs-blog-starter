import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';

import getAllFilesRecursively from '../utils/files';

const root = process.cwd();

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, 'lib/data', folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatter = []

  files.forEach((file) => {
    // get filename
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }
    const source = fs.readFileSync(file, 'utf8');
    const { data: frontmatter } = matter(source);
    if (frontmatter.draft !== true) {
      allFrontMatter.push({
        ...frontmatter,
        slug: formatSlug(fileName),
        date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
      });
    }
  });

  return allFrontMatter.sort((a, b) => dateSortDesc(a.date, b.date));
}

export function formatSlug(slug) {
  return slug.replace(/\.(mdx|md)/, '');
}

export function dateSortDesc(a, b) {
  if (a > b) return -1;
  if (a < b) return 1;
  return 0;
}