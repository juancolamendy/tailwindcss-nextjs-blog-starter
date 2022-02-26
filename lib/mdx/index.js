import path from 'path';
import matter from 'gray-matter';
import fs from 'fs';
import readingTime from 'reading-time'
// mdx bundler
import { bundleMDX } from 'mdx-bundler';
// Rehype packages
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeKatex from 'rehype-katex';
import rehypeCitation from 'rehype-citation';
import rehypePrismPlus from 'rehype-prism-plus';
import rehypePresetMinify from 'rehype-preset-minify';

// Remark packages
import remarkGfm from 'remark-gfm';
import remarkFootnotes from 'remark-footnotes';
import remarkMath from 'remark-math';
import remarkExtractFrontmatter from './remark-extract-frontmatter';
import remarkCodeTitles from './remark-code-title';
import remarkTocHeadings from './remark-toc-headings';
import remarkImgToJsx from './remark-img-to-jsx';

import getAllFilesRecursively from '../utils/files';

const root = process.cwd();

export async function getAllFilesFrontMatter(folder) {
  const prefixPaths = path.join(root, 'data', folder);

  const files = getAllFilesRecursively(prefixPaths);

  const allFrontMatterPromise = files.map(file => {
    // get filename
    const fileName = file.slice(prefixPaths.length + 1).replace(/\\/g, '/')
    // Remove Unexpected File
    if (path.extname(fileName) !== '.md' && path.extname(fileName) !== '.mdx') {
      return
    }

    // post info
    const source = fs.readFileSync(file, 'utf8');
    const { data: frontmatter } = matter(source);

    // return result
    return {
      ...frontmatter,
      slug: formatSlug(fileName),
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    };
  })
  .filter(frontmatter => frontmatter.draft !== true)
  .map(async frontmatter => {
    // author info
    const authorSlug = frontmatter.author || 'default';
    const [authorDetails, _] = await parseMdxBySlug('authors', [authorSlug]);
    authorDetails.slug = [authorSlug];
    frontmatter.authorDetails = authorDetails;
    
    // return result
    return frontmatter;
  });
  const allFrontMatter = await Promise.all(allFrontMatterPromise);

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

export function getFiles(type) {
  const prefixPaths = path.join(root, 'data', type);
  const files = getAllFilesRecursively(prefixPaths);
  return files.map(file => file.slice(prefixPaths.length + 1).replace(/\\/g, '/'));
}

export async function parseMdxBySlug(type, slug) {
  // init
  const mdxPath = path.join(root, 'data', type, `${slug}.mdx`);
  const mdPath = path.join(root, 'data', type, `${slug}.md`);
  // load data
  const source = fs.existsSync(mdxPath) ? fs.readFileSync(mdxPath, 'utf8') : fs.readFileSync(mdPath, 'utf8');
  // return result
  const { data: frontmatter } = matter(source);
  return [frontmatter, source];
}

export async function bundleIntoMDX(source) {
  let toc = [];
  const { code } = await bundleMDX({
    source,
    // mdx imports can be automatically source from the components directory
    cwd: path.join(root, 'components'),
    xdmOptions(options) {
      // this is the recommended way to add custom remark/rehype plugins:
      // The syntax might look weird, but it protects you in case we add/remove
      // plugins in the future.
      options.remarkPlugins = [
        ...(options.remarkPlugins ?? []),
        remarkExtractFrontmatter,
        [remarkTocHeadings, { exportRef: toc }],
        remarkGfm,
        remarkCodeTitles,
        [remarkFootnotes, { inlineNotes: true }],
        remarkMath,
        remarkImgToJsx,
      ]
      options.rehypePlugins = [
        ...(options.rehypePlugins ?? []),
        rehypeSlug,
        rehypeAutolinkHeadings,
        rehypeKatex,
        [rehypeCitation, { path: path.join(root, 'data') }],
        [rehypePrismPlus, { ignoreMissing: true }],
        rehypePresetMinify,
      ]
      return options
    },
    esbuildOptions: (options) => {
      options.loader = {
        ...options.loader,
        '.js': 'jsx',
      }
      return options
    },
  });
  return {
    mdxSource: code,
    toc: toc,
  };
}

export async function getBlogBySlug(slug) {
  // init
  const mdxPath = path.join(root, 'data', 'blogs', `${slug}.mdx`);
  process.env.ESBUILD_BINARY_PATH = path.join(root, 'node_modules', 'esbuild', 'bin', 'esbuild');

  // logic
  const [frontmatter, source] = await parseMdxBySlug('blogs', slug);
  const { mdxSource, toc } = await bundleIntoMDX(source);

  // author info
  const authorSlug = frontmatter.author || 'default';
  const [authorDetails, _] = await parseMdxBySlug('authors', [authorSlug]);
  frontmatter.authorDetails = authorDetails;
  
  // return result
  return {
    mdxSource: mdxSource,
    toc,
    frontMatter: {
      readingTime: readingTime(mdxSource),
      slug: slug || null,
      fileName: fs.existsSync(mdxPath) ? `${slug}.mdx` : `${slug}.md`,
      ...frontmatter,
      date: frontmatter.date ? new Date(frontmatter.date).toISOString() : null,
    },
  }
}
