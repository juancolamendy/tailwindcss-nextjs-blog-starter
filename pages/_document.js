import Document, { Html, Head, Main, NextScript } from 'next/document';

import siteMetadata from '../data/siteMetadata';

class AppDocument extends Document {
  render() {
    return (
      <Html lang="en" className="scroll-smooth">
        <Head>
          <meta charSet="utf-8" />
          
          <link rel="apple-touch-icon" sizes="180x180" href={`${siteMetadata.site.context}/static/favicons/apple-touch-icon.png`} />
          <link rel="shortcut icon" href={`${siteMetadata.site.context}/static/favicons/favicon.ico`} />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href={`${siteMetadata.site.context}/static/favicons/favicon-32x32.png`}
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href={`${siteMetadata.site.context}/static/favicons/favicon-16x16.png`}
          />
          <link rel="manifest" href={`${siteMetadata.site.context}/static/favicons/site.webmanifest`} />
          <link rel="mask-icon" href={`${siteMetadata.site.context}/static/favicons/safari-pinned-tab.svg`} color="#fff" />

          <meta name="apple-mobile-web-app-title" content={siteMetadata.site.name} />
          <meta name="application-name" content={siteMetadata.site.name} />
          <meta name="msapplication-TileColor" content="#ffffff" />
          <meta name="theme-color" content="#ffffff" />

          <link rel="alternate" type="application/rss+xml" href="/feed.xml" />
        </Head>
        <body className="bg-white text-black antialiased">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default AppDocument;
