import React from 'react';

import { Link } from '../../components/Link';
import { SocialIcon } from '../..//components/SocialIcon';

import siteMetadata from '../../data/siteMetadata';

export default function Footer() {
  return (
    <footer>
      <div className="flex flex-col items-center mt-3">
        <div className="flex space-x-4 mb-3">
          { siteMetadata.site && siteMetadata.site.email && <SocialIcon kind="mail" href={`mailto:${siteMetadata.site.email}`} size={10} /> }
          { siteMetadata.site && siteMetadata.site.github && <SocialIcon kind="github" href={siteMetadata.site.github} size={6} /> }
          { siteMetadata.site && siteMetadata.site.facebook && <SocialIcon kind="facebook" href={siteMetadata.site.facebook} size={6} /> }
          { siteMetadata.site && siteMetadata.site.linkedin && <SocialIcon kind="linkedin" href={siteMetadata.site.linkedin} size={6} /> }
          { siteMetadata.site && siteMetadata.site.youtube && <SocialIcon kind="youtube" href={siteMetadata.site.youtube} size={6} /> }
          { siteMetadata.site && siteMetadata.site.twitter && <SocialIcon kind="twitter" href={siteMetadata.site.twitter} size={6} /> }
        </div>
        <div className="flex mb-2 space-x-2 font-light text-sm text-gray-900">
          <div>{siteMetadata.author.name}</div>
          <div>{` • `}</div>
          <div>{`© ${new Date().getFullYear()}`}</div>
          <div>{` • `}</div>
          <Link className="link-text" href="/">{siteMetadata.meta.title}</Link>
        </div>
      </div>
    </footer>
  );
}
