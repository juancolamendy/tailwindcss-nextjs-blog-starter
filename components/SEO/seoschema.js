export const buildCommonSchema = (siteUrl, siteName, siteLogo, siteTwitter, author, authorSlug, authorDescription, authorImage, authorLinkedIn, authorTwitter) => {
    return (`
    {
    "@context":"https://schema.org",
    "@graph":[

        {
            "@type":"Organization",
            "@id":"${siteUrl}/#organization",
            "url":"${siteUrl}",
            "name":"${siteName}",
            "sameAs":[
                "${siteTwitter}"
            ],
            "logo": {
                "@type":"ImageObject",
                "@id":"${siteUrl}/#logo",
                "url":"${siteLogo}",
                "caption":"${siteName} - Logo"
            },
            "image": {
                "@type":"ImageObject",
                "@id": "${siteUrl}/#image",
                "url": "${siteLogo}",
                "caption": "${siteName} - Image"
            },
            "founder": {
                "@id":"${siteUrl}/people/${authorSlug}/#person"
            }
        },
        {
            "@type":"Person",
            "@id":"${siteUrl}/people/${authorSlug}/#person",
            "name":"${author}",
            "description":"${authorDescription}",
            "image":{
                "@type":"ImageObject",
                "@id":"${siteUrl}/people/${authorSlug}/images/#image",
                "url":"${authorImage}",
                "caption":"${author} - Image"
            },
            "sameAs": [
                "${authorLinkedIn}",
                "${authorTwitter}"
            ]
        },
        {
            "@type":"WebSite",
            "@id":"${siteUrl}/#website",
            "url":"${siteUrl}/",
            "name":"${siteName}",
            "publisher":{
                "@id":"${siteUrl}/#organization"
            },
            "potentialAction":{
                "@type":"SearchAction",
                "target":"${siteUrl}/?s={search_term_string}",
                "query-input":"required name=search_term_string"
            }
        }
    ]}
    `);
};

export const buildPageSchema = (url, title, description, domain, date) => {
  const dtToday = new Date();
  return (`
  {
  "@context":"https://schema.org",
  "@graph":[
      {
        "@type": "WebPage",
        "@id": "${url}#webpage",
        "url": "${url}",
        "name": "${title}",
        "datePublished": "${date || dtToday.toISOString()}",
        "dateModified": "${date || dtToday.toISOString()}",
        "description": "${description}",
        "isPartOf": {
          "@id": "${domain}/#website"
        }
      }
  ]}
  `);
};

export const buildBlogSchema = (url, title, description, domain, authorSlug, ogImage, date) => {
  const dtToday = new Date();
  return (`
  {
  "@context":"https://schema.org",
  "@graph":[
      {
        "@type": "Article",
        "@id":"${url}#article",
        "headline": "${title}",
        "url": "${url}",
        "description": "${description}",
        "image": "${ogImage}",
        "dateModified": "${date || dtToday.toISOString()}",
        "datePublished": "${date || dtToday.toISOString()}",
        "author":{
          "@id":"${domain}/people/${authorSlug}/#person"
        },
        "publisher":{
          "@id":"${domain}/#organization"
        },
        "isPartOf":{
          "@id":"${url}#webpage"
        },                          
        "mainEntityOfPage": {
          "@id": "${url}#webpage"
        }
      }
  ]}
  `);
};
