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
    utterancesConfig: {
      // Visit the link below, and follow the steps in the 'configuration' section
      // https://utteranc.es/
      repo: process.env.NEXT_PUBLIC_UTTERANCES_REPO,
      issueTerm: '', // supported options: pathname, url, title
      label: '', // label (optional): Comment 💬
      // theme example: github-light, github-dark, preferred-color-scheme
      // github-dark-orange, icy-dark, dark-blue, photon-dark, boxy-light
      theme: '',
      // theme when dark mode
      darkTheme: '',
    },
  },

  locale: 'en-US',

  newsletter: {
    // mailchimp, buttondown, convertkit, klaviyo
    provider: 'buttondown',
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
    name: 'Blog Starter',
    logo: 'http://localhost:3000/static/images/logo.svg',
    url:  'http://localhost:3000',
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

export default siteMetadata;
