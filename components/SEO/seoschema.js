import { formatToISO } from '../../lib/utils/dateutils';

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
  return (`
  {
  "@context":"https://schema.org",
  "@graph":[
      {
        "@type": "WebPage",
        "@id": "${url}#webpage",
        "url": "${url}",
        "name": "${title}",
        "datePublished": "${formatToISO(date)}",
        "dateModified": "${formatToISO(date)}",
        "description": "${description}",
        "isPartOf": {
          "@id": "${domain}/#website"
        }
      }
  ]}
  `);
};

export const buildPostSchema = (url, title, description, domain, authorSlug, ogImage, date) => {
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
        "dateModified": "${formatToISO(date)}",
        "datePublished": "${formatToISO(date)}",
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

export const buildBreadcrum = (defaultPath, breadcrum) => {
  let pagePath = defaultPath;
  if(breadcrum.length>0) {
    pagePath = breadcrum[breadcrum.length-1].href;
  }
  return (`
  {
  "@context":"https://schema.org",
  "@graph":[
    {
      "@type":"BreadcrumbList",
      "@id":"${pagePath}/#/schema/breadcrumb",
      "itemListElement":
      [
        ${ breadcrum.map( (x,i) => {
          return `{
          "@type":"ListItem",
          "position": ${i},
          "item": {
            "@type":"WebPage",
            "@id":"${x.href}",
            "url":"${x.href}", 
            "name":"${x.text}"
          }
          },`;
        }).join(' ')}
      ]
    }
  ]}
  `);
};
