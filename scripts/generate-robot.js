const fs = require('fs');
const siteMetadata = require('../data/siteMetadata');

;(async () => {
  console.log('--- generating robot');
  
  // generate robot
  const robot = `Sitemap: ${siteMetadata.site.url}${siteMetadata.site.context}/sitemap.xml
User-agent: *
Allow: /*
Disallow: /api/*
# need to test this part
Disallow: /*.json$
Disallow: /*_buildManifest.js$
Disallow: /*_middlewareManifest.js$
Disallow: /*_ssgManifest.js$
Disallow: /*.js$
  `;

  // eslint-disable-next-line no-sync
  fs.writeFileSync('public/robots.txt', robot);

  console.log('--- robot generated');
})()
