const getBasePath = require('../lib/utils/basepath');

const isDev = process.env.NODE_ENV !== 'production';
const baseUrl = isDev ? 'http://localhost:3000' : 'https://www.sentimento.io';
const basePath = getBasePath();

// log out config
console.log("siteMetadata : basePath = " + basePath);
console.log("siteMetadata : baseUrl = " + baseUrl);

const siteMetadata = {
  analytics: {
    plausibleDataDomain: '', 
    simpleAnalytics: false, 
    umamiWebsiteId: '', 
    umamiInstance: '', 
    googleAnalyticsId: '', 
  },

  author: {
    name: 'JC Olamendy',
    description: 'Indie Hacker - Talking about SaaS - Building AI/Web3 products',
    slug: 'juancolamendy',
    image: 'https://pbs.twimg.com/profile_images/1475528274046509057/c35ZXQus_400x400.jpg',
    // socials
    email: 'address@yoursite.com',
    facebook: 'https://facebook.com',
    github: 'https://github.com/juancolamendy',
    linkedin: 'https://www.linkedin.com/in/juan-carlos-olamendy-turruellas-515233b/',
    twitter: 'https://twitter.com/juancolamendy',
    youtube: 'https://youtube.com',
  },

  comment: {
    // supported providers: giscus, utterances, disqus
    provider: 'disqus',
    disqus: {
      shortName: process.env.NEXT_PUBLIC_DISQUS_SHORTNAME,
    },
    giscusConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://giscus.app/
      repo: process.env.NEXT_PUBLIC_GISCUS_REPO,
      repositoryId: process.env.NEXT_PUBLIC_GISCUS_REPOSITORY_ID,
      category: process.env.NEXT_PUBLIC_GISCUS_CATEGORY,
      categoryId: process.env.NEXT_PUBLIC_GISCUS_CATEGORY_ID,
      mapping: 'pathname', // supported options: pathname, url, title
      reactions: '1', // Emoji reactions: 1 = enable / 0 = disable
      // Send discussion metadata periodically to the parent window: 1 = enable / 0 = disable
      metadata: '0',
      // theme example: light, dark, dark_dimmed, dark_high_contrast
      // transparent_dark, preferred_color_scheme, custom
      theme: 'light',
      // theme when dark mode
      darkTheme: 'transparent_dark',
      // If the theme option above is set to 'custom`
      // please provide a link below to your custom theme css file.
      // example: https://giscus.app/themes/custom_example.css
      themeURL: '',
    },
    utterances: {
      // supported options: pathname, url, title
      issueTerm: '', 
      // label (optional): Comment 💬
      label: '', 
      theme: '',
    },
  },

  locale: 'en-US',

  newsletter: {
    // mailchimp, buttondown, convertkit, klaviyo, mailerlite
    provider: 'mailerlite',
    signupLabel: 'Sign up',
    subscribedMsg: 'You\'re subscribed!  🎉',
    thankyouMsg: 'Thank you!',
    errorMsg: 'Your e-mail address is invalid or you are already subscribed!',
  },
  
  meta: {
    description: 'Blog Starter based on Tailwindcss/NextJS. Ready to be used',
    header: 'Blog Starter',
    title: 'Blog Starter by JC Olamendy - Built with Tailwindcss/NextJS',
    blogsHeader: 'Get Exclusive Tips',
    blogsDescription: 'Receive tips and increase your traffic!',
  },

  site: {
    isDev: isDev,
    baseUrl: baseUrl,
    name: 'Blog Starter',
    logo: `${baseUrl}/static/images/logo.svg`,
    url:  baseUrl,
    context: getBasePath(),
    // socials
    email: 'hello@yoursite.com',
    facebook: 'https://facebook.com/blogstarter',
    github: 'https://github.com/blogstarter',
    linkedin: 'https://www.linkedin.com/blogstarter',
    twitter: 'https://twitter.com/blogstarter',
    youtube: 'https://youtube.com/blogstarter',
    banner: '/static/images/twitter-card.png',
  },

};

module.exports = siteMetadata;
