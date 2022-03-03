const fs = require('fs');
const globby = require('globby');
const matter = require('gray-matter');
const prettier = require('prettier');
const siteMetadata = require('../data/siteMetadata');

const { replace } = ''

const es = /&(?:amp|#38|lt|#60|gt|#62|apos|#39|quot|#34);/g
const ca = /[&<>'"]/g

const esca = {
  '&': '&amp;',
  '<': '&lt;',
  '>': '&gt;',
  "'": '&#39;',
  '"': '&quot;',
}
const pe = (m) => esca[m]

const escape = (es) => replace.call(es, ca, pe);

const generateRssItem = (post) => `
  <item>
    <guid>${siteMetadata.site.url}/blogs/${post.slug}</guid>
    <title>${escape(post.title)}</title>
    <link>${siteMetadata.site.url}/blogs/${post.slug}</link>
    ${post.summary && `<description>${escape(post.summary)}</description>`}
    <pubDate>${new Date(post.date).toUTCString()}</pubDate>
    <author>${siteMetadata.author.email} (${siteMetadata.author.name})</author>
    ${post.tags && post.tags.map((t) => `<category>${t}</category>`).join('')}
  </item>
`;

const generateRss = (posts, page = 'feed.xml') => `
  <rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
    <channel>
      <title>${escape(siteMetadata.meta.title)}</title>
      <link>${siteMetadata.site.url}</link>
      <description>${escape(siteMetadata.meta.description)}</description>
      <language>${siteMetadata.locale}</language>
      <managingEditor>${siteMetadata.author.email} (${siteMetadata.author.name})</managingEditor>
      <webMaster>${siteMetadata.author.email} (${siteMetadata.author.name})</webMaster>
      <lastBuildDate>${new Date(posts[0].date).toUTCString()}</lastBuildDate>
      <atom:link href="${siteMetadata.site.url}/${page}" rel="self" type="application/rss+xml"/>
      ${posts.map(generateRssItem).join('')}
    </channel>
  </rss>
`;

;(async () => {
  console.log('--- generating rss');
  
  const posts = await globby([
    'data/blogs/**/*.mdx',
    'data/blogs/**/*.md',
  ]);

  const frontMatters = posts.map(post => {
    if (post.search('.md') >= 1 && fs.existsSync(post)) {
      const source = fs.readFileSync(post, 'utf8');
      const fm = matter(source);
      if (fm.data.draft) {
        return;
      }
      const path = post
        .replace('data/blogs/', '')
        .replace('public/', '/')
        .replace('.mdx', '')
        .replace('.md', '')
        .replace('/feed.xml', '')
      const route = path === '/index' ? '' : path;
      if (post.search('pages/404.') > -1 || post.search(`pages/blogs/[...slug].`) > -1) {
        return
      }
      fm.data.slug = route;
      return fm.data;      
    }
    return;
  });

  const rss = generateRss(frontMatters);
  
  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/feed.xml', rss);

  console.log('--- rss generated');
})()
