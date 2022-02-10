export const buildCommonSchema = (siteUrl, siteName, siteLogo, author, authorSlug, authorDescription, authorImage, linkedin, twitter) => {
    return (`
    {
    "@context":"https://schema.org",
    "@graph":[

        {
            "@type":"Organization",
            "@id":"${siteUrl}/#organization",
            "url":"${siteUrl}/",
            "name":"${siteName}",
            "sameAs":[
                "${twitter}"
            ],
            "logo": {
                "@type":"ImageObject",
                "@id":"${siteUrl}/#logo",
                "url":"${siteLogo}",
                "caption":"${siteName}"
            },
            "image": {
                "@type":"ImageObject",
                "@id": "${siteUrl}/#image",
                "url": "${siteLogo}",
                "caption": "${siteName}"
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
                "caption":"${author}"
            },
            "sameAs": [
                "${linkedin}",
                "${twitter}"
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
